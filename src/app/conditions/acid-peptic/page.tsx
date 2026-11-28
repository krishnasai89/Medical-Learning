"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Flame,
  Activity,
  AlertCircle,
  AlertTriangle,
  Info,
  Pill,
  Search,
  BookOpen,
  Layers,
  Stethoscope,
  ShieldCheck,
  Scale,
} from "lucide-react";

type PrimaryTab =
  | "overview"
  | "types"
  | "pharmacology"
  | "condition-matrix"
  | "terminology";

type ApdMedClass =
  | "All"
  | "Proton Pump Inhibitors (PPIs)"
  | "H2 Receptor Blockers (H2RAs)"
  | "Antacids"
  | "Alginate Preparations"
  | "Mucosal Protective Agents"
  | "Prokinetic Medicines"
  | "H. pylori Antibiotics";

interface ApdMedicine {
  id: string;
  name: string;
  drugClass: Exclude<ApdMedClass, "All">;
  mainAction: string;
  mechanism: string;
  usedFor: string;
  cautionAndSideEffects: string;
  keyPearl: string;
}

const APD_MEDICINES: ApdMedicine[] = [
  // =========================================================================
  // C. ANTACIDS (Gelusil, Digene, ENO, Balanced Antacids)
  // =========================================================================
  {
    id: "gelusil-digene-antacid-gel",
    name: "Gelusil / Digene / Antacid Gel (Aluminium + Magnesium Hydroxide + Simethicone)",
    drugClass: "Antacids",
    mainAction:
      "Chemically neutralises stomach acid already present + breaks up trapped gas bubbles (Simethicone).",
    mechanism:
      "Excess or irritating HCl + Antacid salts (Aluminium hydroxide, Magnesium hydroxide, Magnesium carbonate) -> Acid gets neutralised into water & neutral salts, while Simethicone lowers gas-bubble surface tension to relieve bloating.",
    usedFor:
      "Short-term relief of heartburn, sour stomach, acidity, trapped gas, and occasional indigestion.",
    cautionAndSideEffects:
      "Side effects: Aluminium salts cause constipation; Magnesium salts cause diarrhoea; Simethicone is well tolerated. Caution: Kidney disease (risk of magnesium/aluminium accumulation), people taking other medicines (space 2 hours apart so absorption isn't blocked), and frequent/long-term use.",
    keyPearl:
      "Formulations vary across Gelusil and Digene variants (e.g., Gelusil MPS vs. Digene)—always check the exact composition on the bottle or packet.",
  },
  {
    id: "eno-fruit-salt",
    name: "ENO (Effervescent Fruit Salt — Sodium Bicarbonate + Citric Acid)",
    drugClass: "Antacids",
    mainAction:
      "Rapidly neutralises existing stomach acid through fast-acting alkaline effervescence.",
    mechanism:
      "ENO + Water -> Effervescence (CO2 gas fizz) -> Alkaline Sodium bicarbonate (and Sodium carbonate in certain variants) chemically neutralises gastric hydrochloric acid within seconds.",
    usedFor:
      "Short-term, immediate relief of occasional acidity and heartburn.",
    cautionAndSideEffects:
      "Side effects: Belching (burping), bloating, abdominal discomfort, and high sodium load. Caution: High blood pressure (hypertension), kidney disease, heart failure, and anyone on a sodium-restricted diet.",
    keyPearl:
      "ENO is strictly for brief symptom relief—it is NOT a treatment for H. pylori infection, gastric ulcers, or the root cause of chronic GERD.",
  },
  {
    id: "calcium-carbonate-sodium-bicarbonate",
    name: "Calcium Carbonate & Plain Sodium Bicarbonate",
    drugClass: "Antacids",
    mainAction:
      "Direct chemical buffering and neutralisation of existing gastric acid.",
    mechanism:
      "Weak alkaline bases react immediately with gastric HCl to raise intragastric pH and reduce pepsin proteolytic irritation.",
    usedFor: "Occasional heartburn and acute acid indigestion.",
    cautionAndSideEffects:
      "Calcium carbonate may cause constipation, hypercalcemia, and acid rebound if overused; Sodium bicarbonate carries systemic sodium/alkalosis risks in cardiac and renal patients.",
    keyPearl:
      "Antacids neutralise acid already in the stomach for 30–60 minutes, whereas H2 blockers and PPIs reduce new acid production.",
  },

  // =========================================================================
  // B. H2 RECEPTOR BLOCKERS (H2RAs — Ranitidine / Rantac & Famotidine / Famocid)
  // =========================================================================
  {
    id: "ranitidine-rantac",
    name: "Ranitidine (Brand: Rantac 150 mg)",
    drugClass: "H2 Receptor Blockers (H2RAs)",
    mainAction:
      "Reduces stomach acid production by blocking histamine H2 receptors on parietal cells.",
    mechanism:
      "Normal: Histamine -> H2 receptor -> Increased acid production. With Ranitidine: Blocks parietal cell H2 receptors -> Reduced basal and nocturnal acid secretion.",
    usedFor:
      "GERD, gastric ulcers, duodenal ulcers, and selected acid-hypersecretion conditions.",
    cautionAndSideEffects:
      "Side effects: Headache, dizziness, diarrhoea or constipation, nausea. Safety & Regulatory Caution: Ranitidine has had NDMA (N-nitrosodimethylamine) impurity concerns that can rise during storage (CDSCO July 2025 monitoring directions in India; US FDA reformulated approval in Nov 2025 does not automatically cover every Indian strip).",
    keyPearl:
      "Do NOT assume an old Rantac strip is safe simply because it is within its printed expiry date—verify current product/regulatory status with a doctor or pharmacist.",
  },
  {
    id: "famotidine-famocid",
    name: "Famotidine (Brand: Famocid 20 mg / 40 mg)",
    drugClass: "H2 Receptor Blockers (H2RAs)",
    mainAction:
      "Blocks parietal H2 receptors to reduce stomach acid production without NDMA impurity history.",
    mechanism:
      "Competitively blocks histamine H2 receptors on stomach acid-producing parietal cells, lowering intracellular cAMP and suppressing acid secretion.",
    usedFor:
      "GERD, heartburn, gastric ulcers, duodenal ulcers, and acid-related indigestion.",
    cautionAndSideEffects:
      "Side effects: Headache, dizziness, constipation, diarrhoea. Caution: People with kidney disease require dose adjustment because Famotidine is eliminated mainly via the kidneys.",
    keyPearl:
      "Generally the more straightforward, preferred H2 blocker choice today compared to Ranitidine, with zero CYP450 liver enzyme interactions.",
  },
  {
    id: "cimetidine-nizatidine",
    name: "Cimetidine (200–400 mg) & Nizatidine (150–300 mg)",
    drugClass: "H2 Receptor Blockers (H2RAs)",
    mainAction:
      "Reversible histamine H2 receptor antagonism reducing gastric acid volume.",
    mechanism:
      "Blocks basolateral H2 receptors on gastric parietal cells, decreasing hydrochloric acid output.",
    usedFor: "Heartburn, acid reflux, and selected peptic ulcers.",
    cautionAndSideEffects:
      "Cimetidine strongly inhibits hepatic CYP450 enzymes (warfarin, phenytoin, theophylline interactions) and may cause gynecomastia/confusion in elderly; Nizatidine has minimal CYP interactions.",
    keyPearl:
      "Clinicians strongly favor Famotidine over Cimetidine today to avoid liver drug interactions.",
  },

  // =========================================================================
  // A. PROTON PUMP INHIBITORS (PPIs)
  // =========================================================================
  {
    id: "omeprazole",
    name: "Omeprazole (20 mg – 40 mg)",
    drugClass: "Proton Pump Inhibitors (PPIs)",
    mainAction:
      "Switches down stomach acid production by blocking parietal cell proton pumps.",
    mechanism:
      "Irreversibly inhibits the H+/K+ ATPase enzyme ('proton pump') on gastric parietal cells, halting the final step of hydrochloric acid secretion.",
    usedFor:
      "GERD, Gastric Ulcer, Duodenal Ulcer, and H. pylori eradication regimens.",
    cautionAndSideEffects:
      "Headache, nausea, diarrhea; long-term overuse may reduce Vitamin B12, magnesium, and calcium absorption or increase C. difficile risk. CYP2C19 inhibitor (reduces Clopidogrel activation).",
    keyPearl:
      "Take 30–60 minutes before breakfast on an empty stomach so active proton pumps are open to bind.",
  },
  {
    id: "pantoprazole",
    name: "Pantoprazole (40 mg PO / IV)",
    drugClass: "Proton Pump Inhibitors (PPIs)",
    mainAction:
      "Profound, long-acting acid suppression with minimal hepatic CYP drug interactions.",
    mechanism:
      "Selectively binds cysteine residues on the gastric H+/K+ ATPase proton pump, halting basal and stimulated acid secretion for > 24 hours.",
    usedFor:
      "GERD, Erosive Esophagitis, Gastric & Duodenal Ulcers, and stress ulcer prophylaxis.",
    cautionAndSideEffects:
      "Mild headache, abdominal gas, diarrhea; monitor serum magnesium and B12 if used continuously for > 1 year.",
    keyPearl:
      "Preferred PPI when patients are concurrently taking Clopidogrel due to minimal CYP2C19 inhibition.",
  },
  {
    id: "rabeprazole",
    name: "Rabeprazole (20 mg)",
    drugClass: "Proton Pump Inhibitors (PPIs)",
    mainAction: "Fastest onset of acid suppression among standard oral PPIs.",
    mechanism:
      "High pKa allows rapid protonation in gastric parietal canaliculi, irreversibly blocking H+/K+ ATPase pumps largely via non-enzymatic clearance.",
    usedFor:
      "GERD, symptomatic heartburn, Gastric Ulcer, Duodenal Ulcer, and H. pylori regimens.",
    cautionAndSideEffects:
      "Headache, nausea, diarrhea, dizziness; avoid unnecessary chronic use without periodic medical review.",
    keyPearl:
      "Achieves maximal acid inhibition faster on Day 1 than Omeprazole due to rapid activation.",
  },
  {
    id: "esomeprazole",
    name: "Esomeprazole (20 mg – 40 mg)",
    drugClass: "Proton Pump Inhibitors (PPIs)",
    mainAction:
      "Potent S-isomer acid suppression for erosive esophagitis and ulcers.",
    mechanism:
      "Active (S)-enantiomer of omeprazole; undergoes slower hepatic CYP2C19 clearance, maintaining higher plasma levels and longer intragastric pH > 4 duration.",
    usedFor:
      "GERD, Erosive Esophagitis, NSAID-induced ulcer healing, and H. pylori triple/quadruple therapy.",
    cautionAndSideEffects:
      "Headache, flatulence, abdominal pain, dry mouth; avoid co-administration with Clopidogrel.",
    keyPearl:
      "Provides prolonged 24-hour acid control for severe nocturnal reflux and erosive esophagitis.",
  },
  {
    id: "lansoprazole-dexlansoprazole",
    name: "Lansoprazole (15–30 mg) & Dexlansoprazole (30–60 mg)",
    drugClass: "Proton Pump Inhibitors (PPIs)",
    mainAction:
      "Dual-delayed-release (Dexlansoprazole) and fast-disintegrating acid suppression.",
    mechanism:
      "Blocks gastric parietal H+/K+ ATPase pumps; Dexlansoprazole releases granules in two distinct pH-dependent pulses for extended daytime and nighttime coverage.",
    usedFor: "GERD, Erosive Esophagitis, and Gastric/Duodenal Ulcers.",
    cautionAndSideEffects:
      "Diarrhea, nausea, headache; Dexlansoprazole can be taken without strict meal-timing restrictions.",
    keyPearl:
      "Dexlansoprazole is the only PPI engineered with dual-release beads that work regardless of meal timing.",
  },

  // =========================================================================
  // D. ALGINATE PREPARATIONS
  // =========================================================================
  {
    id: "sodium-alginate-raft",
    name: "Sodium Alginate + Sodium Bicarbonate + Calcium Carbonate (Gaviscon)",
    drugClass: "Alginate Preparations",
    mainAction:
      "Forms a floating physical foam 'raft' on top of stomach contents to block acid reflux.",
    mechanism:
      "Upon contacting gastric acid, Sodium Alginate precipitates into a viscous low-density alginic acid gel while bicarbonate releases CO2 bubbles that float the raft above the post-meal 'acid pocket'—physically preventing reflux into the esophagus.",
    usedFor:
      "Post-meal heartburn, acid reflux, regurgitation, and pregnancy-related reflux.",
    cautionAndSideEffects:
      "Mild bloating or constipation/diarrhea; check sodium content in severe hypertension or heart failure; space 2 hours from other oral tablets.",
    keyPearl:
      "Take immediately AFTER meals and at bedtime—taking it on an empty stomach drops the raft into the duodenum too quickly.",
  },

  // =========================================================================
  // E. MUCOSAL PROTECTIVE AGENTS
  // =========================================================================
  {
    id: "sucralfate",
    name: "Sucralfate (1 g QID)",
    drugClass: "Mucosal Protective Agents",
    mainAction:
      "Forms a sticky, ulcer-adherent protective bandage over damaged stomach/duodenal tissue.",
    mechanism:
      "In acidic pH (< 4), sucrose octasulfate-aluminium complex polymerizes into a viscous paste that binds positively charged proteins at the ulcer crater base, blocking acid, pepsin, and bile while stimulating local prostaglandins.",
    usedFor:
      "Gastric ulcers, duodenal ulcers, erosive gastritis, and bile reflux gastropathy.",
    cautionAndSideEffects:
      "Constipation (~2–4%); avoid in severe chronic kidney disease (aluminium accumulation); MUST space 2 hours apart from PPIs, H2 blockers, fluoroquinolones, phenytoin, and levothyroxine.",
    keyPearl:
      "Requires an acidic environment to form its protective gel—take on an empty stomach 1 hour before meals.",
  },
  {
    id: "bismuth-compounds",
    name: "Bismuth Subsalicylate / Bismuth Subcitrate",
    drugClass: "Mucosal Protective Agents",
    mainAction:
      "Coats ulcerated mucosa, stimulates bicarbonate/mucus, and directly kills H. pylori bacteria.",
    mechanism:
      "Forms a protective glycoprotein-bismuth complex over ulcer craters, increases mucosal prostaglandin E2 secretion, and exerts direct bactericidal disruption of H. pylori cell walls.",
    usedFor:
      "H. pylori bismuth quadruple eradication regimens, gastritis, and dyspepsia.",
    cautionAndSideEffects:
      "Harmless dark/black tongue and black stools (warn patients so it is not mistaken for GI bleeding); avoid in salicylate/aspirin allergy, children/teens with viral illness (Reye's syndrome), and severe renal impairment.",
    keyPearl:
      "Always warn patients that Bismuth turns stools dark black—distinguish from melena (tarry, foul-smelling GI bleed).",
  },
  {
    id: "misoprostol",
    name: "Misoprostol (100 mcg – 200 mcg)",
    drugClass: "Mucosal Protective Agents",
    mainAction:
      "Replaces protective gastric prostaglandins depleted by chronic NSAID therapy.",
    mechanism:
      "Synthetic Prostaglandin E1 (PGE1) analogue; stimulates gastric mucus and bicarbonate secretion, enhances mucosal blood flow, and inhibits parietal cell acid secretion.",
    usedFor:
      "Prevention of NSAID-induced gastric ulcers in high-risk patients.",
    cautionAndSideEffects:
      "Dose-dependent cramping abdominal pain and diarrhea (~15–30%); STRICTLY CONTRAINDICATED in pregnancy (Category X — causes potent uterine contractions, miscarriage, and birth defects).",
    keyPearl:
      "Largely replaced by PPIs for NSAID ulcer prevention due to diarrhea and strict pregnancy contraindication.",
  },

  // =========================================================================
  // F. PROKINETIC MEDICINES
  // =========================================================================
  {
    id: "domperidone",
    name: "Domperidone (10 mg)",
    drugClass: "Prokinetic Medicines",
    mainAction:
      "Accelerates upper GI gastric emptying and strengthens lower esophageal sphincter tone.",
    mechanism:
      "Peripheral dopamine D2 receptor antagonist in the upper GI tract and chemoreceptor trigger zone (does not readily cross the blood-brain barrier), enhancing antroduodenal motility without extrapyramidal tremors.",
    usedFor:
      "Selected patients with functional dyspepsia, delayed gastric emptying (gastroparesis), nausea, and vomiting.",
    cautionAndSideEffects:
      "CRITICAL CARDIAC CAUTION: Prolongs QTc interval and increases risk of ventricular arrhythmias/sudden cardiac death—contraindicated in known QT prolongation, heart failure, hypokalemia, severe liver impairment, and with CYP3A4 inhibitors/QT-prolonging drugs. Use lowest dose (Max 30 mg/day) for shortest duration.",
    keyPearl:
      "Not a routine medicine for every APD patient—reserve strictly for confirmed motility/nausea symptoms after screening cardiac risk.",
  },
  {
    id: "metoclopramide-itopride",
    name: "Metoclopramide (10 mg) & Itopride (50 mg)",
    drugClass: "Prokinetic Medicines",
    mainAction:
      "Enhances gastric peristalsis and coordinates antroduodenal emptying.",
    mechanism:
      "Metoclopramide antagonizes central/peripheral D2 receptors and agonizes 5-HT4 receptors; Itopride provides dual peripheral D2 antagonism and acetylcholinesterase inhibition with minimal CNS penetration or QT risk.",
    usedFor:
      "Selected patients with diabetic gastroparesis, postprandial fullness, nausea, and vomiting.",
    cautionAndSideEffects:
      "Metoclopramide crosses the blood-brain barrier and carries an FDA Boxed Warning for Tardive Dyskinesia and acute dystonia if used > 12 weeks; contraindicated in GI obstruction/perforation and Parkinson's disease.",
    keyPearl:
      "Itopride offers cleaner peripheral prokinetic action without Metoclopramide's dystonia or Domperidone's QT prolongation.",
  },

  // =========================================================================
  // G. ANTIBIOTICS FOR H. PYLORI INFECTION
  // =========================================================================
  {
    id: "h-pylori-antibiotics",
    name: "H. pylori Eradication Antibiotics (Amoxicillin, Clarithromycin, Metronidazole, Tetracycline)",
    drugClass: "H. pylori Antibiotics",
    mainAction:
      "Eradicates Helicobacter pylori bacteria to permanently heal gastritis and peptic ulcers.",
    mechanism:
      "Targeted multi-antibiotic combinations (e.g., Bismuth Quadruple Therapy: PPI + Bismuth + Tetracycline + Metronidazole; or Clarithromycin/Amoxicillin regimens) kill H. pylori living beneath the gastric mucus layer while high-dose PPI raises gastric pH to optimize antibiotic stability.",
    usedFor:
      "Confirmed Helicobacter pylori-positive Gastritis, Gastric Ulcer, and Duodenal Ulcer (14-day regimen).",
    cautionAndSideEffects:
      "Metallic taste (Clarithromycin/Metronidazole), nausea, antibiotic-associated diarrhea, photosensitivity (Tetracycline), and disulfiram-like alcohol reaction (strictly avoid alcohol with Metronidazole). Local resistance patterns dictate regimen selection.",
    keyPearl:
      "Always complete the full 14-day course and perform a confirmatory Test-of-Cure (urea breath or stool antigen test) >= 4 weeks after finishing antibiotics.",
  },
];

const MED_CLASSES: ApdMedClass[] = [
  "All",
  "Antacids",
  "H2 Receptor Blockers (H2RAs)",
  "Proton Pump Inhibitors (PPIs)",
  "Alginate Preparations",
  "Mucosal Protective Agents",
  "Prokinetic Medicines",
  "H. pylori Antibiotics",
];

const FIVE_MEDICINE_COMPARISON = [
  {
    medicine: "Gelusil",
    group: "Antacid (Al + Mg Hydroxide ± Simethicone)",
    mainAction: "Neutralises existing stomach acid",
    keyCaution: "Kidney disease; space 2h from other oral drugs",
  },
  {
    medicine: "Digene",
    group: "Antacid + Antiflatulent (Al + Mg + Simethicone)",
    mainAction: "Neutralises existing acid + relieves trapped gas",
    keyCaution: "Check exact label ingredients; kidney disease",
  },
  {
    medicine: "ENO",
    group: "Effervescent Antacid (Sodium Bicarbonate + Citric Acid)",
    mainAction: "Neutralises existing acid via alkaline fizz",
    keyCaution: "High sodium load (avoid in HTN, heart/kidney failure)",
  },
  {
    medicine: "Ranitidine (Rantac)",
    group: "H2 Receptor Blocker (H2RA)",
    mainAction: "Reduces stomach acid production",
    keyCaution: "NDMA storage impurity concern—check regulatory/product status",
  },
  {
    medicine: "Famotidine (Famocid)",
    group: "H2 Receptor Blocker (H2RA)",
    mainAction: "Reduces stomach acid production",
    keyCaution: "Adjust dose in kidney disease; preferred over Ranitidine",
  },
];

const RANITIDINE_VS_FAMOTIDINE = [
  {
    feature: "Drug Class",
    ranitidine: "H2 Receptor Blocker (H2RA)",
    famotidine: "H2 Receptor Blocker (H2RA)",
  },
  {
    feature: "Main Action",
    ranitidine: "Reduces stomach acid production",
    famotidine: "Reduces stomach acid production",
  },
  {
    feature: "GERD & Heartburn",
    ranitidine: "Used",
    famotidine: "Used",
  },
  {
    feature: "Peptic Ulcers",
    ranitidine: "Used",
    famotidine: "Used",
  },
  {
    feature: "NDMA Storage Impurity Concern",
    ranitidine: "Yes (NDMA may rise during storage; CDSCO 2025 monitoring)",
    famotidine: "No (not the same established NDMA concern)",
  },
  {
    feature: "Current Practical Preference",
    ranitidine: "Verify current product & regulatory status before use",
    famotidine: "Preferred, more straightforward current H2 blocker choice",
  },
];

const CONDITION_MATCH_TABLE = [
  {
    condition: "GERD (Gastroesophageal Reflux Disease)",
    groups: "PPI, Alginate preparation, H2RA",
    note: "PPIs heal esophagitis; alginates form a post-meal floating raft to block reflux.",
  },
  {
    condition: "Gastritis",
    groups: "PPI or H2RA when appropriate; treat the underlying cause",
    note: "Stop NSAIDs/alcohol; test and eradicate H. pylori if positive.",
  },
  {
    condition: "Gastric Ulcer",
    groups: "PPI (4–8 weeks); H. pylori eradication if positive",
    note: "Review/stop NSAIDs; repeat endoscopy often required to confirm healing and rule out malignancy.",
  },
  {
    condition: "Duodenal Ulcer",
    groups: "PPI (4 weeks); H. pylori eradication if positive",
    note: "Strongly associated with H. pylori infection (> 80%) and NSAID use.",
  },
  {
    condition: "Erosive Esophagitis",
    groups: "PPI (4–8 weeks)",
    note: "First-line mucosal healing therapy; H2RAs are inferior for severe erosive healing.",
  },
  {
    condition: "Functional Dyspepsia",
    groups: "PPI, H2RA; selected prokinetics or neuromodulators",
    note: "Indigestion symptoms without structural ulcer/erosion on endoscopy.",
  },
];

const COMMON_COMBINATIONS = [
  {
    combo: "Rabeprazole + Domperidone SR",
    purpose: "Acid suppression + selected motility/nausea symptoms",
  },
  {
    combo: "Pantoprazole + Domperidone SR",
    purpose: "Acid suppression + selected motility/nausea symptoms",
  },
  {
    combo: "Esomeprazole + Domperidone SR",
    purpose: "Acid suppression + selected motility/nausea symptoms",
  },
  {
    combo: "Omeprazole + Sodium Bicarbonate",
    purpose:
      "Immediate buffer protection allowing rapid non-enteric PPI absorption",
  },
  {
    combo: "Aluminium Hydroxide + Magnesium Hydroxide",
    purpose:
      "Balanced acid neutralization (prevents single-salt constipation or diarrhea)",
  },
  {
    combo: "Sodium Alginate + Sodium Bicarbonate",
    purpose:
      "Forms floating foam raft to physically block post-meal acid reflux",
  },
  {
    combo: "Sucralfate + Acid Suppression Medicines",
    purpose:
      "Ulcer surface coating + acid reduction in selected cases (space doses by 2 hours)",
  },
];

const TERMINOLOGY_TABLE = [
  {
    term: "Acidity",
    meaning:
      "Common everyday description of acid-related upper digestive discomfort",
  },
  {
    term: "Heartburn",
    meaning: "Burning sensation rising behind the breastbone (retrosternal)",
  },
  {
    term: "Acid Reflux",
    meaning: "Backward flow of stomach acid/contents into the esophagus",
  },
  {
    term: "GERD",
    meaning:
      "Repeated, troublesome acid reflux causing symptoms or esophageal damage",
  },
  {
    term: "Gastritis",
    meaning: "Histological or endoscopic inflammation of the stomach lining",
  },
  {
    term: "Peptic Ulcer",
    meaning:
      "Deeper open sore penetrating through the lining of the stomach or duodenum",
  },
  {
    term: "Dyspepsia",
    meaning:
      "Upper abdominal indigestion symptoms (fullness, early satiety, epigastric burning)",
  },
];

export default function AcidPepticDisorderPage() {
  const [activeTab, setActiveTab] = useState<PrimaryTab>("overview");
  const [medSearch, setMedSearch] = useState("");
  const [selectedMedClass, setSelectedMedClass] = useState<ApdMedClass>("All");

  const filteredMeds = useMemo(() => {
    return APD_MEDICINES.filter((med) => {
      const matchesClass =
        selectedMedClass === "All" || med.drugClass === selectedMedClass;
      const q = medSearch.trim().toLowerCase();
      const matchesQuery =
        !q ||
        med.name.toLowerCase().includes(q) ||
        med.drugClass.toLowerCase().includes(q) ||
        med.usedFor.toLowerCase().includes(q) ||
        med.mechanism.toLowerCase().includes(q);
      return matchesClass && matchesQuery;
    });
  }, [medSearch, selectedMedClass]);

  const jumpToMedClass = (cls: ApdMedClass) => {
    setSelectedMedClass(cls);
    setActiveTab("pharmacology");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-amber-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Clinical Overview</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-3">
              <Flame className="w-3.5 h-3.5" /> Gastroenterology Codex &bull;
              Condition #05
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Acid Peptic Disorder (Amlapitta)
            </h1>

            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Ayurvedic Parallel:{" "}
                <strong className="text-amber-300 font-mono">
                  Amlapitta (अम्लपित्त) &amp; Parinama Shoola — Pitta-Drava
                  Vriddhi &amp; Mucosal Barrier Erosion
                </strong>
                .
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-400 font-mono">
                    5 Core Types
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    GERD &bull; Gastritis &bull; Gastric Ulcer &bull; Duodenal
                    Ulcer &bull; Peptic Esophagitis
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-teal-400 font-mono">
                    7 Drug Classes
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Antacids (Gelusil/Digene/ENO) &bull; H2RAs (Rantac/Famocid)
                    &bull; PPIs &bull; Alginates
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical module on gastric mucosal defense vs. acid-pepsin injury,
              anatomical phenotypes of Acid Peptic Disorder, searchable{" "}
              <strong>{APD_MEDICINES.length}-agent Pharmacology Cards</strong>{" "}
              (including Gelusil, Digene, ENO, Ranitidine/Rantac, and
              Famotidine/Famocid), head-to-head comparisons, red-flag bleeding
              triage, and clinical terminology.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Primary Defense
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                Mucus + HCO3-
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                APD Formulary
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                {APD_MEDICINES.length} Cards
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="w-full overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Pathophysiology, Causes &amp; Red Flags</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("types")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "types"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>Types of Acid Peptic Disorder</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("pharmacology")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "pharmacology"
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>APD Medicine Cards ({APD_MEDICINES.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("condition-matrix")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "condition-matrix"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Pill className="w-4 h-4 shrink-0" />
              <span>Condition Matrix &amp; Combinations</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("terminology")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "terminology"
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Info className="w-4 h-4 shrink-0" />
              <span>Key Clinical Differences</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: PATHOPHYSIOLOGY, CAUSES & WARNING SIGNS                            */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Core Concept & Progression */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3">
                <div className="flex items-center gap-2 text-amber-400">
                  <Stethoscope className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    What Is Acid Peptic Disorder (APD)?
                  </h2>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Acid Peptic Disorder (APD)</strong> is an umbrella
                  term for conditions in which{" "}
                  <strong>hydrochloric acid (HCl)</strong> and digestive enzymes
                  (especially <strong>pepsin</strong>) irritate, inflame, or
                  erode the lining of the esophagus, stomach, or duodenum.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Normally, the stomach protects itself with a thick{" "}
                  <strong>mucus and bicarbonate (HCO3-) barrier</strong>, rich
                  mucosal blood flow, and prostaglandins. APD develops whenever
                  this protective defense is weakened or aggressive factors
                  overwhelm the lining.
                </p>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/50 text-[11px] text-amber-300">
                  <strong>Important Concept:</strong> APD does NOT always mean
                  the stomach produces excess acid. Often,{" "}
                  <strong>normal acid levels</strong> cause tissue injury
                  because the protective mucosal lining has been weakened (e.g.,
                  by <em>H. pylori</em> or NSAIDs).
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-teal-400">
                    <ShieldCheck className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      Mucosal Balance &amp; Injury Cascade
                    </h2>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-slate-200">
                    <strong className="text-emerald-300 block mb-0.5">
                      Normal Healthy Stomach:
                    </strong>
                    Gastric Acid + Pepsin &harr; Intact Mucus &amp; Bicarbonate
                    Layer ={" "}
                    <span className="text-emerald-300 font-semibold">
                      Stomach Lining Protected
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30 text-xs text-slate-200 space-y-1.5">
                    <strong className="text-rose-300 block">
                      When Defense Weakens or Damaging Factors Increase:
                    </strong>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] pt-1">
                      <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-amber-300">
                        1. Irritation
                      </span>
                      <span className="text-slate-500">&rarr;</span>
                      <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-orange-300">
                        2. Inflammation
                      </span>
                      <span className="text-slate-500">&rarr;</span>
                      <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-rose-300">
                        3. Erosion
                      </span>
                      <span className="text-slate-500">&rarr;</span>
                      <span className="px-2.5 py-1 rounded bg-rose-500/20 border border-rose-500/40 text-rose-200 font-bold">
                        4. Open Ulcer
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-teal-300">
                    Clinical Distinction:
                  </strong>{" "}
                  Superficial breaks confined to the mucosa are{" "}
                  <em>erosions</em>; defects penetrating deeper through the
                  muscularis mucosae are true <em>peptic ulcers</em>.
                </div>
              </div>
            </div>

            {/* 6 Main Causes of APD */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  Main Causes of Acid Peptic Disorder
                </h3>
                <span className="text-[11px] font-mono text-teal-300 bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 rounded">
                  H. pylori &amp; NSAIDs account for the vast majority of peptic
                  ulcers
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    1. H. pylori Infection
                  </strong>
                  Spiral bacterium that burrows beneath the mucus layer,
                  secretes urease and toxins, and weakens gastric
                  protection—causing chronic gastritis and peptic ulcers.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    2. NSAID Medicines
                  </strong>
                  Ibuprofen, Aspirin, Naproxen, and Diclofenac block COX-1
                  prostaglandins, stripping away protective gastric mucus,
                  bicarbonate, and mucosal blood flow.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    3. Acid Reflux (LES Relaxation)
                  </strong>
                  Transient relaxation or weakness of the lower esophageal
                  sphincter allows stomach acid and pepsin to flow backward into
                  the esophagus.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-slate-200 block mb-1">
                    4. Smoking
                  </strong>
                  Reduces pancreatic/duodenal bicarbonate secretion, relaxes the
                  lower esophageal sphincter, and delays ulcer healing.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-slate-200 block mb-1">
                    5. Alcohol
                  </strong>
                  Directly irritates and disrupts the gastric epithelial
                  barrier, worsening gastritis and upper GI bleeding risk.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-slate-200 block mb-1">
                    6. Impaired Stomach Emptying
                  </strong>
                  Delayed gastric emptying increases intragastric pressure,
                  prolonged acid contact, and reflux symptoms.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-900/50 text-xs text-cyan-200">
                <strong>Important Clinical Correction:</strong> Spicy food and
                everyday stress can <em>aggravate</em> symptoms in people who
                already have APD, but they are{" "}
                <strong>NOT the primary root causes</strong> of most peptic
                ulcers (<em>H. pylori</em> and NSAIDs are).
              </div>
            </div>

            {/* Warning Signs / Alarm Symptoms */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Alarm Symptoms: Warning Signs You Should Never Ignore (Seek
                  Urgent Medical Attention)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 text-xs text-slate-200">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    1. Hematemesis
                  </strong>
                  Vomiting bright red blood or dark material resembling{" "}
                  <strong>coffee grounds</strong>.
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    2. Melena
                  </strong>
                  Passing <strong>black, tarry, foul-smelling stools</strong>{" "}
                  (upper GI bleeding).
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    3. Sudden Severe Pain
                  </strong>
                  Abrupt, board-like severe abdominal pain (rule out ulcer
                  perforation).
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    4. Hemodynamic Signs
                  </strong>
                  Fainting, severe weakness, pallor, or dizziness suggesting
                  occult blood loss.
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    5. Dysphagia / Weight Loss
                  </strong>
                  Persistent vomiting, difficulty/painful swallowing, or
                  unexplained weight loss.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: TYPES OF ACID PEPTIC DISORDER                                      */}
        {/* ========================================================================= */}
        {activeTab === "types" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
              {/* 1. GERD */}
              <div className="p-6 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
                <div className="space-y-2.5 text-slate-300 leading-relaxed">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
                    Type 01 &bull; Esophageal Reflux
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    1. GERD (Gastroesophageal Reflux Disease)
                  </h3>
                  <p>
                    <strong className="text-amber-300">What Happens:</strong>{" "}
                    Stomach acid and digestive contents repeatedly flow backward
                    across the lower esophageal sphincter into the food pipe
                    (esophagus).
                  </p>
                  <p>
                    <strong className="text-white">Common Symptoms:</strong>{" "}
                    Burning behind the breastbone (heartburn), sour/acidic taste
                    in the mouth, and regurgitation after meals or lying flat.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => jumpToMedClass("Alginate Preparations")}
                  className="text-left text-[11px] font-bold text-amber-300 hover:underline pt-2 border-t border-slate-800/70"
                >
                  View PPIs, Alginates &amp; H2RAs &rarr;
                </button>
              </div>

              {/* 2. Gastritis */}
              <div className="p-6 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
                <div className="space-y-2.5 text-slate-300 leading-relaxed">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-300 font-bold">
                    Type 02 &bull; Gastric Mucosal Inflammation
                  </span>
                  <h3 className="text-lg font-bold text-white">2. Gastritis</h3>
                  <p>
                    <strong className="text-teal-300">What Happens:</strong>{" "}
                    Acute or chronic inflammation of the stomach lining
                    (commonly triggered by <em>H. pylori</em>, NSAIDs, or
                    alcohol).
                  </p>
                  <p>
                    <strong className="text-white">Common Symptoms:</strong>{" "}
                    Upper abdominal (epigastric) gnawing or burning discomfort,
                    nausea, early fullness/bloating, and sometimes vomiting.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    jumpToMedClass("Proton Pump Inhibitors (PPIs)")
                  }
                  className="text-left text-[11px] font-bold text-teal-300 hover:underline pt-2 border-t border-slate-800/70"
                >
                  View PPIs &amp; Mucosal Protectants &rarr;
                </button>
              </div>

              {/* 3. Gastric Ulcer */}
              <div className="p-6 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
                <div className="space-y-2.5 text-slate-300 leading-relaxed">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300 font-bold">
                    Type 03 &bull; Stomach Lining Crater
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    3. Gastric Ulcer
                  </h3>
                  <p>
                    <strong className="text-rose-300">What Happens:</strong> A
                    deeper open sore that erodes through the protective lining
                    of the stomach wall.
                  </p>
                  <p>
                    <strong className="text-white">Common Symptoms:</strong>{" "}
                    Upper abdominal pain (often worsened shortly after eating),
                    nausea, weight loss, and sometimes upper GI bleeding.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => jumpToMedClass("H. pylori Antibiotics")}
                  className="text-left text-[11px] font-bold text-rose-300 hover:underline pt-2 border-t border-slate-800/70"
                >
                  View PPIs &amp; H. pylori Regimens &rarr;
                </button>
              </div>

              {/* 4. Duodenal Ulcer */}
              <div className="p-6 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
                <div className="space-y-2.5 text-slate-300 leading-relaxed">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold">
                    Type 04 &bull; First Part of Small Intestine
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    4. Duodenal Ulcer
                  </h3>
                  <p>
                    <strong className="text-cyan-300">What Happens:</strong> An
                    open sore in the duodenal bulb (first part of the small
                    intestine immediately beyond the stomach), strongly linked
                    to <em>H. pylori</em>.
                  </p>
                  <p>
                    <strong className="text-white">Common Symptoms:</strong>{" "}
                    Burning or gnawing upper abdominal pain that
                    characteristically occurs 2–5 hours after meals or awakens
                    the patient at night (and temporarily improves with food or
                    antacids).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    jumpToMedClass("Proton Pump Inhibitors (PPIs)")
                  }
                  className="text-left text-[11px] font-bold text-cyan-300 hover:underline pt-2 border-t border-slate-800/70"
                >
                  View Duodenal Ulcer Therapy &rarr;
                </button>
              </div>

              {/* 5. Peptic Esophagitis */}
              <div className="p-6 rounded-2xl border border-indigo-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
                <div className="space-y-2.5 text-slate-300 leading-relaxed">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-bold">
                    Type 05 &bull; Esophageal Mucosal Erosion
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    5. Peptic Esophagitis
                  </h3>
                  <p>
                    <strong className="text-indigo-300">What Happens:</strong>{" "}
                    Chemical inflammation, erosion, or ulceration of the
                    esophageal lining caused by repeated acid and pepsin reflux.
                  </p>
                  <p>
                    <strong className="text-white">Common Symptoms:</strong>{" "}
                    Painful swallowing (odynophagia), persistent heartburn, and
                    difficulty swallowing (dysphagia) if chronic
                    scarring/stricture forms.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    jumpToMedClass("Proton Pump Inhibitors (PPIs)")
                  }
                  className="text-left text-[11px] font-bold text-indigo-300 hover:underline pt-2 border-t border-slate-800/70"
                >
                  View Esophagitis Healing PPIs &rarr;
                </button>
              </div>

              {/* Related Conditions */}
              <div className="p-6 rounded-2xl border border-slate-700 bg-slate-900/50 backdrop-blur-md flex flex-col justify-between space-y-4">
                <div className="space-y-2.5 text-slate-300 leading-relaxed">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                    Related Upper GI Entities
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Functional Dyspepsia &amp; Erosive Gastropathy
                  </h3>
                  <p>
                    <strong className="text-amber-300">
                      Functional Dyspepsia:
                    </strong>{" "}
                    Persistent indigestion, post-meal fullness, or epigastric
                    burning without any structural ulcer or lesion seen on
                    endoscopy.
                  </p>
                  <p>
                    <strong className="text-teal-300">
                      Erosive Gastropathy:
                    </strong>{" "}
                    Direct chemical or ischemic damage to the stomach lining
                    (e.g., NSAIDs, alcohol, severe stress) without prominent
                    histological inflammation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: APD MEDICINES AS FILTERABLE CARDS + 5-MEDICINE & H2RA COMPARISONS  */}
        {/* ========================================================================= */}
        {activeTab === "pharmacology" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Search & Class Filter Controls */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={medSearch}
                    onChange={(e) => setMedSearch(e.target.value)}
                    placeholder="Search Gelusil, Digene, ENO, Rantac, Famotidine, Pantoprazole..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60"
                  />
                  {medSearch && (
                    <button
                      type="button"
                      onClick={() => setMedSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white bg-slate-800 px-1.5 py-0.5 rounded"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <span className="text-xs font-mono text-slate-400">
                  Showing{" "}
                  <strong className="text-amber-300">
                    {filteredMeds.length}
                  </strong>{" "}
                  of <strong>{APD_MEDICINES.length}</strong> medicine cards
                </span>
              </div>

              {/* 7 Drug Class Filter Chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {MED_CLASSES.map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => setSelectedMedClass(cls)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedMedClass === cls
                        ? "bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.35)]"
                        : "bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>

            {/* Medicine Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMeds.map((med) => (
                <div
                  key={med.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
                        {med.drugClass}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-2">
                        {med.name}
                      </h3>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800/70 pt-3">
                      <div>
                        <strong className="text-teal-300">Main Action: </strong>
                        <span>{med.mainAction}</span>
                      </div>
                      <div>
                        <strong className="text-cyan-300">
                          Mechanism of Action:{" "}
                        </strong>
                        <span>{med.mechanism}</span>
                      </div>
                      <div>
                        <strong className="text-white">Common Uses: </strong>
                        <span>{med.usedFor}</span>
                      </div>
                      <div>
                        <strong className="text-rose-300">
                          Side Effects &amp; Who Should Use Caution:{" "}
                        </strong>
                        <span>{med.cautionAndSideEffects}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-[11px] text-slate-300">
                    <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-300">
                        Important Learning Point:
                      </strong>{" "}
                      {med.keyPearl}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Head-to-Head Comparison Tables (5 OTC/H2 Medicines + Ranitidine vs Famotidine) */}
            <div className="space-y-6 pt-6 border-t border-slate-800/80">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-400">
                  <Scale className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-white">
                    Compare All Five Core Acidity Medicines (Neutralisers vs.
                    Acid Reducers)
                  </h3>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                  <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                    <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                      <tr>
                        <th className="p-3.5 text-amber-300">Medicine</th>
                        <th className="p-3.5 text-cyan-300">Drug Group</th>
                        <th className="p-3.5 text-teal-300">Main Action</th>
                        <th className="p-3.5 text-rose-300">Key Caution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-sans">
                      {FIVE_MEDICINE_COMPARISON.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-slate-900/40 transition-colors"
                        >
                          <td className="p-3.5 font-bold text-white">
                            {row.medicine}
                          </td>
                          <td className="p-3.5 font-mono text-cyan-300">
                            {row.group}
                          </td>
                          <td className="p-3.5 font-semibold text-teal-300">
                            {row.mainAction}
                          </td>
                          <td className="p-3.5 text-slate-300">
                            {row.keyCaution}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">
                  Ranitidine (Rantac) vs. Famotidine (Famocid) — Direct
                  Comparison
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                  <table className="w-full text-xs text-left text-slate-300 min-w-[680px]">
                    <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                      <tr>
                        <th className="p-3.5">Feature</th>
                        <th className="p-3.5 text-amber-300">
                          Ranitidine (Rantac)
                        </th>
                        <th className="p-3.5 text-emerald-300">
                          Famotidine (Famocid)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-sans">
                      {RANITIDINE_VS_FAMOTIDINE.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-slate-900/40 transition-colors"
                        >
                          <td className="p-3.5 font-bold text-white">
                            {row.feature}
                          </td>
                          <td className="p-3.5 text-slate-300">
                            {row.ranitidine}
                          </td>
                          <td className="p-3.5 text-emerald-200">
                            {row.famotidine}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: CONDITION MATRIX & COMMON PHARMACY COMBINATIONS                    */}
        {/* ========================================================================= */}
        {activeTab === "condition-matrix" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Condition-to-Medicine Table */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">
                Which Medicines Are Used for Which Condition?
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5 text-amber-300">Condition</th>
                      <th className="p-3.5 text-teal-300">
                        Common Medicine Groups
                      </th>
                      <th className="p-3.5">Clinical Management Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    {CONDITION_MATCH_TABLE.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-900/40 transition-colors"
                      >
                        <td className="p-3.5 font-bold text-white">
                          {row.condition}
                        </td>
                        <td className="p-3.5 font-mono text-teal-300 font-bold">
                          {row.groups}
                        </td>
                        <td className="p-3.5 text-slate-300">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400">
                For <strong>NSAID-induced ulcers</strong>, clinicians always
                evaluate whether the offending NSAID can be stopped or switched.
              </p>
            </div>

            {/* Common Pharmacy Combinations */}
            <div className="space-y-3">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Common Medicine Combinations Seen in Pharmacies
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Examples of fixed-dose formulations encountered in clinical
                  practice—a combination capsule is not automatically superior
                  to single-agent therapy unless each ingredient has a clear
                  clinical indication.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {COMMON_COMBINATIONS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-1.5"
                  >
                    <strong className="text-amber-300 font-mono block">
                      {item.combo}
                    </strong>
                    <p className="text-slate-300 leading-relaxed">
                      {item.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: IMPORTANT CLINICAL DIFFERENCES (TERMINOLOGY GLOSSARY)              */}
        {/* ========================================================================= */}
        {activeTab === "terminology" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <h2 className="text-xl font-bold text-white">
                Important Differences to Remember (Symptom vs. Disease)
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                These upper digestive terms overlap in patient conversations,
                but represent distinct clinical entities:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[640px]">
                <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5 text-indigo-300">Clinical Term</th>
                    <th className="p-3.5">Exact Clinical Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {TERMINOLOGY_TABLE.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="p-3.5 font-bold font-mono text-amber-300">
                        {row.term}
                      </td>
                      <td className="p-3.5 text-slate-200">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
