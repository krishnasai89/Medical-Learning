"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Activity,
  AlertTriangle,
  Sparkles,
  Pill,
  Search,
  BookOpen,
  Layers,
  Stethoscope,
  ShieldCheck,
  Map,
  LayoutGrid,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

type PrimaryTab =
  | "hierarchy-cards"
  | "overview"
  | "anatomy"
  | "quick-map"
  | "study-framework";

interface MedicineCardItem {
  medicine: string;
  drugClass: string;
  mainAction: string;
}

interface SubtypeCardItem {
  id: string;
  subgroupLabel?: string;
  subtypeName: string;
  whatItIs: string;
  whyItHappens: string[];
  commonSymptoms: string;
  medicinesList: MedicineCardItem[];
}

interface DigestiveTypeHierarchy {
  id: number;
  code: string;
  title: string;
  whatItIs: string;
  whyItHappens: string[];
  commonSymptoms: string;
  medicineGroups: string[];
  clinicalAlert?: string;
  subtypes: SubtypeCardItem[];
}

const DIGESTIVE_ORGANS = [
  {
    organ: "Mouth",
    function:
      "Chews food mechanically and initiates carbohydrate digestion via salivary amylase",
  },
  {
    organ: "Esophagus",
    function:
      "Moves chewed food bolus down to the stomach via coordinated peristalsis",
  },
  {
    organ: "Stomach",
    function:
      "Mixes food with hydrochloric acid (HCl) and pepsin enzymes to form chyme",
  },
  {
    organ: "Liver",
    function:
      "Produces bile salts for fat emulsification and metabolizes absorbed nutrients/drugs",
  },
  {
    organ: "Gallbladder",
    function:
      "Stores, concentrates, and releases bile into the duodenum after fatty meals",
  },
  {
    organ: "Pancreas",
    function:
      "Produces digestive enzymes (amylase, lipase, proteases) and neutralizing bicarbonate",
  },
  {
    organ: "Small Intestine",
    function:
      "Completes enzymatic digestion and absorbs carbohydrates, proteins, fats, vitamins & minerals",
  },
  {
    organ: "Large Intestine",
    function:
      "Absorbs water and electrolytes, houses gut microbiota, and forms solid stool",
  },
  {
    organ: "Rectum and Anus",
    function:
      "Stores and eliminates fecal waste under coordinated sphincter control",
  },
];

// ============================================================================
// FULL 4-LEVEL HIERARCHY:
// Digestive Impairment -> 10 Types (What & Why) -> Subtypes (What & Why) -> Medicines Cards
// ============================================================================
const DIGESTIVE_HIERARCHY: DigestiveTypeHierarchy[] = [
  {
    id: 1,
    code: "01",
    title: "Type 1. Acid-Related and Upper Digestive Disorders",
    whatItIs:
      "Disorders where stomach hydrochloric acid (HCl) and pepsin irritate, inflame, or erode the mucosal lining of the esophagus, stomach, or duodenum.",
    whyItHappens: [
      "Weakening or frequent relaxation of the lower esophageal sphincter (LES) allowing upward acid reflux",
      "Helicobacter pylori (H. pylori) bacterial infection damaging the protective mucus-bicarbonate barrier",
      "NSAID painkillers (ibuprofen, aspirin, diclofenac) blocking protective gastric prostaglandins",
      "Rare gastrin-secreting tumors (Zollinger-Ellison) or chemical irritation from alcohol/smoking",
    ],
    commonSymptoms:
      "Heartburn, sour regurgitation, upper abdominal burning pain, nausea, painful swallowing.",
    medicineGroups: [
      "Antacids: aluminium hydroxide, magnesium hydroxide, calcium carbonate",
      "Effervescent antacid: sodium bicarbonate + citric acid (e.g., ENO)",
      "H2 blockers: famotidine, cimetidine",
      "PPIs: pantoprazole, rabeprazole, esomeprazole, omeprazole",
      "Alginates: sodium alginate combinations",
      "H. pylori antibiotics: amoxicillin, clarithromycin, metronidazole, tetracycline + bismuth",
    ],
    subtypes: [
      {
        id: "ger",
        subtypeName: "1. GER (Gastroesophageal Reflux / Acid reflux)",
        whatItIs:
          "Stomach acid or gastric contents flow backward into the esophagus.",
        whyItHappens: [
          "Weak or temporarily relaxed lower esophageal sphincter (LES)",
          "Large meals or lying down immediately after eating",
          "Hiatal hernia or increased intra-abdominal pressure",
        ],
        commonSymptoms:
          "Heartburn, sour taste in the mouth, acid regurgitation.",
        medicinesList: [
          {
            medicine: "Magnesium hydroxide, Aluminium hydroxide",
            drugClass: "Antacids",
            mainAction: "Chemically neutralize existing stomach acid.",
          },
          {
            medicine: "Sodium alginate",
            drugClass: "Alginate preparation",
            mainAction:
              "Forms a floating foam raft barrier on top of stomach contents.",
          },
          {
            medicine: "Pantoprazole, Rabeprazole",
            drugClass: "Proton Pump Inhibitors (PPIs)",
            mainAction: "Block H+/K+ ATPase pumps to reduce acid production.",
          },
          {
            medicine: "Famotidine",
            drugClass: "H2 Receptor Blocker (H2RA)",
            mainAction:
              "Blocks parietal histamine H2 receptors to lower acid output.",
          },
        ],
      },
      {
        id: "gerd",
        subtypeName: "2. GERD (Gastroesophageal Reflux Disease)",
        whatItIs:
          "Repeated, chronic reflux that causes troublesome symptoms or esophageal complications.",
        whyItHappens: [
          "Repeated relaxation or mechanical weakness of the LES",
          "Hiatal hernia & obesity increasing intra-abdominal pressure",
          "Aggravating foods, smoking/alcohol, and LES-relaxing medications",
        ],
        commonSymptoms:
          "Recurrent heartburn, regurgitation, sour taste, sometimes swallowing difficulty.",
        medicinesList: [
          {
            medicine: "Esomeprazole, Pantoprazole, Rabeprazole",
            drugClass: "Proton Pump Inhibitors (PPIs)",
            mainAction:
              "First-line sustained acid suppression to heal esophageal mucosa.",
          },
          {
            medicine: "Famotidine",
            drugClass: "H2 Receptor Blocker",
            mainAction: "Reduces nocturnal and meal-stimulated acid secretion.",
          },
          {
            medicine: "Sodium alginate",
            drugClass: "Alginate preparation",
            mainAction: "Physically blocks post-meal acid pocket reflux.",
          },
          {
            medicine: "Calcium carbonate, Magnesium hydroxide",
            drugClass: "Antacids",
            mainAction:
              "Immediate short-term neutralization of breakthrough acid.",
          },
        ],
      },
      {
        id: "gastritis",
        subtypeName: "3. Gastritis",
        whatItIs:
          "Acute or chronic inflammation of the protective stomach lining.",
        whyItHappens: [
          "H. pylori bacterial infection",
          "Frequent NSAID use (ibuprofen, aspirin)",
          "Alcohol irritation or autoimmune parietal cell destruction",
        ],
        commonSymptoms:
          "Upper abdominal discomfort, nausea, indigestion, bloating.",
        medicinesList: [
          {
            medicine: "Omeprazole, Pantoprazole",
            drugClass: "Proton Pump Inhibitors (PPIs)",
            mainAction:
              "Suppresses gastric acid to allow mucosal inflammation to heal.",
          },
          {
            medicine: "Famotidine",
            drugClass: "H2 Receptor Blocker",
            mainAction: "Reduces stomach acid secretion.",
          },
          {
            medicine: "Amoxicillin, Clarithromycin, Metronidazole",
            drugClass: "Antibiotics (H. pylori regimens)",
            mainAction:
              "Eradicates H. pylori bacteria when infection is confirmed.",
          },
          {
            medicine: "Bismuth subsalicylate / subcitrate",
            drugClass: "Mucosal protective agent",
            mainAction:
              "Coats stomach lining and exerts bactericidal action against H. pylori.",
          },
        ],
      },
      {
        id: "gastric-ulcer",
        subtypeName: "4. Gastric Ulcer",
        whatItIs:
          "An open sore eroding through the lining of the stomach wall.",
        whyItHappens: [
          "H. pylori infection",
          "NSAIDs depleting protective gastric prostaglandins and mucus",
          "Hydrochloric acid and pepsin digesting weakened tissue",
        ],
        commonSymptoms:
          "Upper abdominal pain (often worsened shortly after food), nausea, sometimes bleeding.",
        medicinesList: [
          {
            medicine: "Esomeprazole, Rabeprazole, Pantoprazole",
            drugClass: "Proton Pump Inhibitors (PPIs)",
            mainAction:
              "Profound acid suppression (4–8 weeks) to heal the ulcer crater.",
          },
          {
            medicine: "H. pylori eradication combinations",
            drugClass: "Antibiotics + High-dose PPI",
            mainAction:
              "Eliminates underlying H. pylori infection to prevent relapse.",
          },
          {
            medicine: "Bismuth compounds",
            drugClass: "Mucosal protective agent",
            mainAction:
              "Protects ulcer surface and assists H. pylori eradication.",
          },
        ],
      },
      {
        id: "duodenal-ulcer",
        subtypeName: "5. Duodenal Ulcer",
        whatItIs:
          "An open sore in the duodenum (first segment of the small intestine).",
        whyItHappens: [
          "H. pylori infection (> 80% of cases)",
          "NSAID medication injury & reduced duodenal bicarbonate defense",
        ],
        commonSymptoms:
          "Burning or gnawing upper abdominal pain occurring between meals or awakening at night.",
        medicinesList: [
          {
            medicine: "Pantoprazole, Rabeprazole, Esomeprazole",
            drugClass: "Proton Pump Inhibitors (PPIs)",
            mainAction:
              "Suppresses gastric acid load entering the duodenal bulb.",
          },
          {
            medicine:
              "Amoxicillin / Clarithromycin / Metronidazole / Tetracycline",
            drugClass: "Antibiotics",
            mainAction: "Eradicates H. pylori when present.",
          },
          {
            medicine: "Bismuth compounds",
            drugClass: "Mucosal protective agent",
            mainAction: "Used in bismuth quadruple eradication regimens.",
          },
        ],
      },
      {
        id: "esophagitis",
        subtypeName: "6. Esophagitis",
        whatItIs:
          "Inflammation or mucosal injury of the esophagus (food pipe).",
        whyItHappens: [
          "Repeated acid reflux (peptic esophagitis)",
          "Pills lodging in the esophagus without enough water (pill esophagitis)",
          "Allergic eosinophilic inflammation or Candida/viral infections",
        ],
        commonSymptoms:
          "Painful swallowing (odynophagia), difficulty swallowing (dysphagia), chest discomfort.",
        medicinesList: [
          {
            medicine: "Pantoprazole, Esomeprazole",
            drugClass: "Proton Pump Inhibitors (PPIs)",
            mainAction: "Heals reflux-induced erosive esophagitis.",
          },
          {
            medicine: "Swallowed Budesonide or Fluticasone",
            drugClass: "Topical corticosteroids",
            mainAction:
              "Suppresses allergic eosinophilic esophageal inflammation.",
          },
          {
            medicine: "Fluconazole",
            drugClass: "Triazole antifungal",
            mainAction: "Treats Candida fungal esophagitis.",
          },
        ],
      },
      {
        id: "zollinger-ellison",
        subtypeName: "7. Zollinger–Ellison Syndrome",
        whatItIs:
          "A rare neuroendocrine disorder causing extreme gastric acid hypersecretion.",
        whyItHappens: [
          "A gastrin-secreting tumor (gastrinoma) in the pancreas or duodenum overstimulating parietal cells",
        ],
        commonSymptoms:
          "Multiple recurrent refractory peptic ulcers, severe GERD, chronic secretory diarrhea.",
        medicinesList: [
          {
            medicine: "High-dose Esomeprazole or Pantoprazole",
            drugClass: "High-dose Proton Pump Inhibitors (PPIs)",
            mainAction: "Controls extreme acid hypersecretion.",
          },
          {
            medicine:
              "Famotidine + Specialist tumor surgery / somatostatin analogues",
            drugClass: "H2RA & Specialist oncology/endocrine care",
            mainAction:
              "Adjunctive acid control and removal/suppression of the gastrinoma.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    code: "02",
    title: "Type 2. Indigestion and Stomach Discomfort Disorders",
    whatItIs:
      "Upper abdominal (epigastric) discomfort, burning, or meal-induced fullness occurring without an obvious structural ulcer on routine endoscopy.",
    whyItHappens: [
      "Impaired fundic stomach relaxation (accommodation) when food enters",
      "Visceral hypersensitivity of gastric nerves to normal acid or stretching",
      "Mildly delayed gastric emptying or H. pylori-associated dyspepsia",
      "Altered bidirectional gut-brain axis signaling",
    ],
    commonSymptoms:
      "Post-meal fullness, early satiety, epigastric pain or burning, upper abdominal discomfort.",
    medicineGroups: [
      "Prokinetics: domperidone, metoclopramide, itopride",
      "PPIs: pantoprazole, rabeprazole, esomeprazole, omeprazole",
      "H2 blockers: famotidine",
      "Low-dose gut-brain neuromodulators: amitriptyline",
    ],
    subtypes: [
      {
        id: "functional-dyspepsia",
        subtypeName: "1. Functional Dyspepsia",
        whatItIs:
          "Persistent indigestion without an identifiable structural cause on routine evaluation.",
        whyItHappens: [
          "Impaired stomach accommodation after eating",
          "Increased sensitivity to stomach stretching & delayed emptying",
          "Gut-brain interaction changes",
        ],
        commonSymptoms:
          "Upper abdominal discomfort, fullness, early satiety, burning.",
        medicinesList: [
          {
            medicine: "Omeprazole, Pantoprazole",
            drugClass: "Proton Pump Inhibitors (PPIs)",
            mainAction: "Reduces acid-driven epigastric burning.",
          },
          {
            medicine: "Itopride, Metoclopramide",
            drugClass: "Prokinetic medicines",
            mainAction:
              "Enhances stomach emptying and meal accommodation in selected cases.",
          },
          {
            medicine: "Low-dose Amitriptyline",
            drugClass: "Gut-brain neuromodulator (TCA)",
            mainAction: "Calms visceral hypersensitivity in selected patients.",
          },
        ],
      },
      {
        id: "pds",
        subtypeName: "2. Postprandial Distress Syndrome (PDS)",
        whatItIs:
          "Functional dyspepsia subtype characterized by uncomfortable fullness after normal meals.",
        whyItHappens: [
          "Poor relaxation of the upper stomach after food enters",
          "Increased sensitivity to stomach expansion",
        ],
        commonSymptoms: "Post-meal fullness, early satiety.",
        medicinesList: [
          {
            medicine: "Itopride, Metoclopramide",
            drugClass: "Prokinetic medicines",
            mainAction: "Improves gastric motility and fundic accommodation.",
          },
          {
            medicine: "Pantoprazole, Rabeprazole",
            drugClass: "Proton Pump Inhibitors (PPIs)",
            mainAction: "Added when acid-related symptoms coexist.",
          },
        ],
      },
      {
        id: "eps",
        subtypeName: "3. Epigastric Pain Syndrome (EPS)",
        whatItIs:
          "Functional dyspepsia subtype characterized by localized pain or burning in the upper middle abdomen.",
        whyItHappens: [
          "Increased sensitivity to stomach acid or stretching",
          "Altered gut-brain pain signaling",
        ],
        commonSymptoms: "Epigastric pain, upper abdominal burning.",
        medicinesList: [
          {
            medicine: "Rabeprazole, Esomeprazole",
            drugClass: "Proton Pump Inhibitors (PPIs)",
            mainAction: "Suppresses gastric acid irritation.",
          },
          {
            medicine: "Famotidine",
            drugClass: "H2 Receptor Blocker",
            mainAction: "Blocks histamine H2 receptors to lower acid.",
          },
          {
            medicine: "Low-dose Amitriptyline",
            drugClass: "Neuromodulator (TCA)",
            mainAction:
              "Modulates visceral pain thresholds in persistent cases.",
          },
        ],
      },
      {
        id: "early-satiety",
        subtypeName: "4. Early Satiety",
        whatItIs:
          "Feeling full immediately after eating only a small amount of food.",
        whyItHappens: [
          "Impaired stomach accommodation, gastroparesis, or functional dyspepsia",
          "Sometimes structural obstruction (must screen for alarm symptoms)",
        ],
        commonSymptoms: "Unable to finish normal meals, feeling full quickly.",
        medicinesList: [
          {
            medicine: "Itopride, Domperidone, Metoclopramide",
            drugClass: "Prokinetic medicines",
            mainAction:
              "Speeds gastric emptying in confirmed delayed emptying.",
          },
          {
            medicine: "Cause-specific therapy",
            drugClass: "Targeted management",
            mainAction: "Addresses underlying motility or structural cause.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    code: "03",
    title: "Type 3. Digestive Motility Disorders",
    whatItIs:
      "Abnormal neuromuscular movement (peristalsis) of food through the esophagus, stomach, or intestines—moving too slowly, too fast, or uncoordinated.",
    whyItHappens: [
      "Autonomic or enteric nerve damage (e.g., long-standing diabetes mellitus)",
      "Degeneration of inhibitory esophageal ganglion cells (achalasia)",
      "Smooth muscle myopathies or systemic diseases (scleroderma, hypothyroidism)",
      "Surgical alteration of the pyloric sphincter (post-gastrectomy dumping) or opioid medications",
    ],
    commonSymptoms:
      "Delayed fullness, vomiting undigested food, dysphagia, severe distension, or post-meal cramps/diarrhea.",
    medicineGroups: [
      "Prokinetics: metoclopramide, domperidone, itopride, prucalopride",
      "Antispasmodics: mebeverine, hyoscine butylbromide, dicyclomine",
      "Specialist agents: octreotide, acarbose, botulinum toxin",
    ],
    subtypes: [
      {
        id: "gastroparesis",
        subtypeName: "1. Gastroparesis",
        whatItIs: "Delayed stomach emptying without mechanical obstruction.",
        whyItHappens: [
          "Diabetes (vagal neuropathy), post-viral nerve injury, opioids/GLP-1 drugs, or surgery",
        ],
        commonSymptoms:
          "Nausea, vomiting undigested food, early fullness, bloating.",
        medicinesList: [
          {
            medicine: "Metoclopramide",
            drugClass: "Prokinetic & D2/5-HT4 modulator",
            mainAction:
              "Stimulates gastric contractions and pyloric opening (limit <= 12 weeks).",
          },
          {
            medicine: "Domperidone / Erythromycin",
            drugClass: "Specialist prokinetic alternatives",
            mainAction:
              "Enhances gastric emptying when metoclopramide cannot be used.",
          },
        ],
      },
      {
        id: "intestinal-dysmotility",
        subtypeName: "2. Intestinal Dysmotility",
        whatItIs:
          "Abnormal, sluggish, or uncoordinated movement of food through the intestines.",
        whyItHappens: [
          "Enteric nerve or smooth muscle disorders, diabetes, systemic disease",
        ],
        commonSymptoms: "Bloating, abdominal pain, constipation or diarrhea.",
        medicinesList: [
          {
            medicine: "Selected prokinetics & antispasmodics",
            drugClass: "Motility regulators",
            mainAction:
              "Coordinates intestinal transit and treats the underlying systemic disorder.",
          },
        ],
      },
      {
        id: "pseudo-obstruction",
        subtypeName: "3. Chronic Intestinal Pseudo-Obstruction",
        whatItIs:
          "Intestine behaves as if physically blocked, even though no mechanical blockage exists.",
        whyItHappens: [
          "Severe abnormal intestinal nerves (neuropathy) or smooth muscles (myopathy)",
        ],
        commonSymptoms:
          "Severe abdominal distension, vomiting, refractory constipation.",
        medicinesList: [
          {
            medicine:
              "Specialist prokinetics (Prucalopride, Octreotide) + Nutritional support",
            drugClass: "Specialist neurogastroenterology therapy",
            mainAction:
              "Stimulates intestinal migrating motor complexes and prevents malnutrition.",
          },
        ],
      },
      {
        id: "achalasia",
        subtypeName: "4. Achalasia",
        whatItIs:
          "Esophageal muscles fail to push food down and the lower esophageal sphincter fails to relax.",
        whyItHappens: [
          "Degeneration of inhibitory nerves controlling esophageal smooth muscle",
        ],
        commonSymptoms:
          "Difficulty swallowing both solids and liquids, regurgitation, chest pain.",
        medicinesList: [
          {
            medicine: "Botulinum toxin injection (selected patients)",
            drugClass: "Neuromuscular blocker",
            mainAction:
              "Temporarily relaxes the tight lower esophageal sphincter.",
          },
          {
            medicine: "Pneumatic dilation, POEM, or Heller myotomy",
            drugClass: "Definitive endoscopic / surgical treatment",
            mainAction:
              "Mechanically divides tight sphincter muscle fibers for long-term relief.",
          },
        ],
      },
      {
        id: "dumping-syndrome",
        subtypeName: "5. Dumping Syndrome",
        whatItIs:
          "Food moves too rapidly from the stomach into the small intestine.",
        whyItHappens: [
          "Loss of pyloric sphincter control after stomach or bariatric surgery",
        ],
        commonSymptoms:
          "Post-meal diarrhea, abdominal cramps, sweating, flushing, hypoglycemic dizziness.",
        medicinesList: [
          {
            medicine:
              "Dietary changes + Acarbose or Octreotide (selected cases)",
            drugClass:
              "Medical nutrition / Alpha-glucosidase inhibitor / Somatostatin analogue",
            mainAction:
              "Slows gastric emptying, blunts sugar spikes, and suppresses gut hormone surges.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    code: "04",
    title: "Type 4. Gas, Bloating and Flatulence Disorders",
    whatItIs:
      "Disorders involving excess intestinal gas accumulation, frequent gas passage, air swallowing, or visible abdominal distension.",
    whyItHappens: [
      "Colonic bacterial fermentation of unabsorbed carbohydrates (FODMAPs, beans, lactose)",
      "Excessive air swallowing (aerophagia) from rapid eating, gum, or fizzy drinks",
      "Small intestinal bacterial overgrowth (SIBO) fermenting food prematurely in the small bowel",
      "Constipation trapping gas or visceral hypersensitivity to normal gas volumes",
    ],
    commonSymptoms:
      "Excessive flatulence, repetitive belching, abdominal pressure, tightness, and visible bloating.",
    medicineGroups: [
      "Antiflatulents: simethicone",
      "Antispasmodics: mebeverine, dicyclomine",
      "Non-absorbed gut antibiotics: rifaximin (for SIBO)",
      "Digestive enzymes: lactase or pancrelipase only when deficiency exists",
    ],
    subtypes: [
      {
        id: "flatulence",
        subtypeName: "1. Flatulence",
        whatItIs: "Excessive intestinal gas or frequent passage of gas.",
        whyItHappens: [
          "Bacterial fermentation of food in the colon, swallowed air",
        ],
        commonSymptoms: "Passing gas frequently.",
        medicinesList: [
          {
            medicine: "Simethicone",
            drugClass: "Antiflatulent",
            mainAction:
              "Breaks up gas bubble surface tension so gas passes more easily.",
          },
        ],
      },
      {
        id: "abdominal-bloating",
        subtypeName: "2. Abdominal Bloating",
        whatItIs: "A sensation of abdominal pressure, swelling, or fullness.",
        whyItHappens: [
          "Constipation, IBS, food intolerance, altered gut sensitivity",
        ],
        commonSymptoms: "Feeling swollen or tight in the abdomen.",
        medicinesList: [
          {
            medicine: "Simethicone & Mebeverine / Dicyclomine",
            drugClass: "Antiflatulents & Antispasmodics",
            mainAction:
              "Disperses trapped gas and relaxes painful bowel spasms while treating underlying constipation/IBS.",
          },
        ],
      },
      {
        id: "aerophagia",
        subtypeName: "3. Aerophagia",
        whatItIs: "Excessive swallowing of atmospheric air.",
        whyItHappens: [
          "Eating quickly, chewing gum, carbonated drinks, anxiety-related air swallowing",
        ],
        commonSymptoms: "Repetitive burping (belching), bloating, gas.",
        medicinesList: [
          {
            medicine: "Behavioral & dietary adjustments",
            drugClass: "Non-pharmacological therapy",
            mainAction:
              "Stops repetitive air swallowing; no specific medicine is usually needed.",
          },
        ],
      },
      {
        id: "sibo",
        subtypeName: "4. SIBO (Small Intestinal Bacterial Overgrowth)",
        whatItIs:
          "Excessive bacterial colonization inside the small intestine.",
        whyItHappens: [
          "Abnormal small-bowel motility, anatomical changes, or low stomach acid",
        ],
        commonSymptoms:
          "Severe post-meal bloating, diarrhea, gas, sometimes Vitamin B12/iron deficiency.",
        medicinesList: [
          {
            medicine: "Rifaximin",
            drugClass: "Gut-selective non-absorbed antibiotic",
            mainAction:
              "Eradicates small-bowel bacterial overgrowth locally without systemic absorption.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    code: "05",
    title: "Type 5. Nausea and Vomiting Disorders",
    whatItIs:
      "Disorders characterized by the unpleasant urge to vomit (nausea) or forceful expulsion of gastric contents (vomiting).",
    whyItHappens: [
      "GI mucosal irritation releasing serotonin (5-HT3) onto vagal afferents (infections, food poisoning, chemo)",
      "Bloodborne toxins or drugs stimulating the brainstem Chemoreceptor Trigger Zone (CTZ)",
      "Inner-ear vestibular sensory mismatch (motion sickness, vertigo)",
      "Migraine brainstem activation or delayed gastric emptying",
    ],
    commonSymptoms:
      "Queasiness, cold sweats, pallor, retching, vomiting, dehydration.",
    medicineGroups: [
      "5-HT3 antagonists: ondansetron",
      "Dopamine D2 antagonists: metoclopramide, domperidone",
      "Vestibular H1 antihistamines: dimenhydrinate, meclizine",
      "NK1 receptor antagonists: aprepitant",
    ],
    subtypes: [
      {
        id: "acute-nausea-vomiting",
        subtypeName: "1. Acute Nausea and Vomiting",
        whatItIs: "Sudden queasiness and expulsion of stomach contents.",
        whyItHappens: [
          "Infections, food poisoning, medicines, pregnancy, or acute illness",
        ],
        commonSymptoms: "Nausea, retching, vomiting.",
        medicinesList: [
          {
            medicine: "Ondansetron / Domperidone / Metoclopramide",
            drugClass: "5-HT3 & Dopamine D2 antiemetics",
            mainAction: "Blocks gut vagal and brainstem emetic receptors.",
          },
        ],
      },
      {
        id: "motion-sickness",
        subtypeName: "2. Motion Sickness",
        whatItIs: "Travel-induced nausea, dizziness, and vomiting.",
        whyItHappens: [
          "Mismatch between motion signals from the inner ear and eyes",
        ],
        commonSymptoms:
          "Nausea, dizziness, cold sweat, vomiting during travel.",
        medicinesList: [
          {
            medicine: "Dimenhydrinate, Meclizine, Scopolamine",
            drugClass: "Vestibular antihistamines & Anticholinergics",
            mainAction:
              "Dampens vestibular-emetic signaling (take 30–60 min before travel).",
          },
        ],
      },
      {
        id: "vestibular-nausea",
        subtypeName: "3. Vestibular Nausea",
        whatItIs: "Nausea triggered by inner-ear balance disorders.",
        whyItHappens: [
          "Labyrinthitis, vestibular neuritis, or BPPV activating brainstem emetic nuclei",
        ],
        commonSymptoms: "Vertigo, dizziness, nausea, vomiting.",
        medicinesList: [
          {
            medicine: "Dimenhydrinate, Meclizine, Ondansetron",
            drugClass: "Vestibular antihistamines & 5-HT3 antagonists",
            mainAction: "Calms labyrinthine firing and stops vomiting.",
          },
        ],
      },
      {
        id: "migraine-nausea",
        subtypeName: "4. Migraine-Associated Nausea",
        whatItIs: "Nausea and stomach stasis accompanying migraine attacks.",
        whyItHappens: [
          "Migraine activates brainstem nausea centers and slows stomach emptying",
        ],
        commonSymptoms: "Throbbing headache, light sensitivity, nausea.",
        medicinesList: [
          {
            medicine: "Metoclopramide + Migraine-specific therapy",
            drugClass: "Prokinetic antiemetic + Abortive migraine drug",
            mainAction:
              "Relieves nausea and restores stomach motility so oral migraine pills absorb.",
          },
        ],
      },
      {
        id: "chemo-nausea",
        subtypeName: "5. Chemotherapy-Induced Nausea (CINV)",
        whatItIs: "Acute or delayed vomiting triggered by cancer chemotherapy.",
        whyItHappens: [
          "Chemotherapy activates gut 5-HT3 serotonin and brain NK1 Substance P pathways",
        ],
        commonSymptoms:
          "Severe nausea and vomiting during or after chemotherapy.",
        medicinesList: [
          {
            medicine: "Ondansetron + Aprepitant + Dexamethasone",
            drugClass: "5-HT3 antagonist + NK1 antagonist + Corticosteroid",
            mainAction:
              "Blocks both peripheral serotonin and central Substance P vomiting pathways.",
          },
        ],
      },
      {
        id: "postop-nausea",
        subtypeName: "6. Postoperative Nausea (PONV)",
        whatItIs: "Nausea or vomiting following surgical anesthesia.",
        whyItHappens: [
          "Anesthesia gases, surgery, and postoperative opioid painkillers",
        ],
        commonSymptoms: "Nausea or vomiting after surgery.",
        medicinesList: [
          {
            medicine: "Ondansetron, Dexamethasone",
            drugClass: "5-HT3 antagonist & Corticosteroid",
            mainAction:
              "Blocks postoperative CTZ and vagal emetic stimulation.",
          },
        ],
      },
      {
        id: "cyclic-vomiting",
        subtypeName: "7. Cyclic Vomiting Syndrome",
        whatItIs:
          "Recurrent, severe vomiting episodes separated by symptom-free intervals.",
        whyItHappens: [
          "Altered gut-brain autonomic pathways closely linked to migraine",
        ],
        commonSymptoms:
          "Repeated severe vomiting episodes followed by complete recovery.",
        medicinesList: [
          {
            medicine: "Ondansetron (acute) + Amitriptyline (prevention)",
            drugClass: "5-HT3 antiemetic & Tricyclic neuromodulator",
            mainAction: "Aborts acute attacks and prevents future cycles.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    code: "06",
    title: "Type 6. Bowel Movement Disorders (Constipation & Diarrhea)",
    whatItIs:
      "Abnormalities in stool water content, colonic transit speed, and bowel evacuation frequency—spanning Constipation (infrequent/hard stools) and Diarrhea (frequent loose/watery stools).",
    whyItHappens: [
      "Constipation: Dehydration, low fiber, slow colonic transit, opioid receptor gut paralysis, or pelvic-floor dyssynergia",
      "Diarrhea: Viral/bacterial enteric infections, unabsorbed osmotic solutes (lactose/sorbitol), or active intestinal fluid hypersecretion",
    ],
    commonSymptoms:
      "Straining, hard pellet stools, incomplete evacuation (constipation) OR frequent watery stools, urgency, dehydration (diarrhea).",
    medicineGroups: [
      "Constipation: Ispaghula (bulk), PEG & Lactulose (osmotic), Bisacodyl & Senna (stimulant), Docusate (softener), Linaclotide & Naloxegol",
      "Diarrhea: Oral Rehydration Salts (ORS), Loperamide (antimotility), Racecadotril (antisecretory), Probiotics & targeted antibiotics",
    ],
    clinicalAlert:
      "Important: Loperamide should NOT be used indiscriminately, particularly with bloody diarrhea or high fever. Rehydration with ORS is always the priority.",
    subtypes: [
      {
        id: "acute-constipation",
        subgroupLabel: "A. Constipation",
        subtypeName: "1. Acute Constipation",
        whatItIs: "Recent-onset infrequent or hard bowel movements.",
        whyItHappens: [
          "Dehydration, dietary changes, reduced activity, or new medicines",
        ],
        commonSymptoms: "Infrequent or hard stools.",
        medicinesList: [
          {
            medicine: "Polyethylene glycol (PEG), Lactulose, Bisacodyl",
            drugClass: "Osmotic & Stimulant laxatives",
            mainAction:
              "Draws water into stool and stimulates colonic peristalsis.",
          },
        ],
      },
      {
        id: "chronic-constipation",
        subgroupLabel: "A. Constipation",
        subtypeName: "2. Chronic Constipation",
        whatItIs: "Persistent difficulty passing stools lasting >= 3 months.",
        whyItHappens: [
          "Diet, medicines, metabolic conditions (hypothyroidism), or bowel dysfunction",
        ],
        commonSymptoms: "Persistent difficulty passing stools, straining.",
        medicinesList: [
          {
            medicine: "PEG, Lactulose, Linaclotide",
            drugClass: "Osmotic laxatives & Intestinal secretagogue",
            mainAction:
              "Increases stool water content and intestinal fluid secretion.",
          },
        ],
      },
      {
        id: "hard-stool-constipation",
        subgroupLabel: "A. Constipation",
        subtypeName: "3. Hard Stool Constipation",
        whatItIs: "Stools become overly dry, hard, and painful to pass.",
        whyItHappens: [
          "Excess water absorbed from stool or slow colonic transit",
        ],
        commonSymptoms: "Dry, hard stools and straining.",
        medicinesList: [
          {
            medicine: "PEG, Lactulose, Docusate",
            drugClass: "Osmotic laxatives & Stool softeners",
            mainAction:
              "Softens fecal mass by increasing water retention and penetration.",
          },
        ],
      },
      {
        id: "slow-transit-constipation",
        subgroupLabel: "A. Constipation",
        subtypeName: "4. Slow-Transit Constipation",
        whatItIs: "Colon propels stool forward too slowly.",
        whyItHappens: ["Reduced colonic propulsive motor contractions"],
        commonSymptoms: "Infrequent bowel movements, bloating.",
        medicinesList: [
          {
            medicine: "PEG, Bisacodyl / Senna, Prucalopride",
            drugClass: "Osmotic, Stimulant & Prokinetic laxatives",
            mainAction: "Stimulates colonic smooth-muscle propulsion.",
          },
        ],
      },
      {
        id: "opioid-constipation",
        subgroupLabel: "A. Constipation",
        subtypeName: "5. Opioid-Induced Constipation (OIC)",
        whatItIs: "Constipation caused by opioid pain medications.",
        whyItHappens: [
          "Opioids bind gut mu-opioid receptors and slow intestinal movement",
        ],
        commonSymptoms:
          "Hard, infrequent stools after starting opioid medicines.",
        medicinesList: [
          {
            medicine: "PEG + Senna, Naloxegol, Naldemedine",
            drugClass:
              "Osmotic/Stimulant laxatives & Peripherally acting mu-opioid antagonists (PAMORAs)",
            mainAction:
              "Restores gut motility without reversing brain pain relief.",
          },
        ],
      },
      {
        id: "outlet-constipation",
        subgroupLabel: "A. Constipation",
        subtypeName: "6. Outlet Dysfunction Constipation",
        whatItIs:
          "Pelvic-floor muscles fail to relax properly during defecation.",
        whyItHappens: [
          "Uncoordinated pelvic-floor and anal sphincter muscle contraction",
        ],
        commonSymptoms: "Severe straining, sensation of incomplete evacuation.",
        medicinesList: [
          {
            medicine: "Pelvic-floor biofeedback + PEG laxatives",
            drugClass: "Neuromuscular retraining & Stool softening",
            mainAction:
              "Retrains pelvic-floor muscle coordination during bowel movements.",
          },
        ],
      },
      {
        id: "acute-watery-diarrhea",
        subgroupLabel: "B. Diarrhea",
        subtypeName: "1. Acute Watery Diarrhea",
        whatItIs: "Sudden frequent loose watery stools lasting < 14 days.",
        whyItHappens: ["Viral infection or mild food contamination"],
        commonSymptoms: "Frequent loose watery stools, mild cramps.",
        medicinesList: [
          {
            medicine:
              "Oral Rehydration Salts (ORS) + Loperamide / Racecadotril",
            drugClass: "Rehydration therapy + Antimotility / Antisecretory",
            mainAction:
              "Replaces fluids/electrolytes first; slows stool frequency in non-bloody cases.",
          },
        ],
      },
      {
        id: "infectious-diarrhea",
        subgroupLabel: "B. Diarrhea",
        subtypeName: "2. Infectious Diarrhea",
        whatItIs: "Diarrhea caused by enteric viruses, bacteria, or parasites.",
        whyItHappens: ["Contaminated food or water introducing pathogens"],
        commonSymptoms:
          "Loose stools, cramps, sometimes fever or bloody stools.",
        medicinesList: [
          {
            medicine:
              "ORS + Targeted antibiotics or antiparasitics (only when indicated)",
            drugClass: "Rehydration & Pathogen-specific antimicrobials",
            mainAction:
              "Prevents dehydration and eradicates confirmed bacterial/parasitic pathogens.",
          },
        ],
      },
      {
        id: "chronic-diarrhea",
        subgroupLabel: "B. Diarrhea",
        subtypeName: "3. Chronic Diarrhea",
        whatItIs: "Persistent loose stools lasting > 4 weeks.",
        whyItHappens: [
          "IBS-D, malabsorption, IBD inflammation, or endocrine causes",
        ],
        commonSymptoms: "Persistent daily loose stools.",
        medicinesList: [
          {
            medicine: "Cause-specific treatment",
            drugClass: "Targeted etiology-directed therapy",
            mainAction:
              "Treats the underlying inflammatory, malabsorptive, or functional disease.",
          },
        ],
      },
      {
        id: "travelers-diarrhea",
        subgroupLabel: "B. Diarrhea",
        subtypeName: "4. Traveler's Diarrhea",
        whatItIs: "Sudden diarrhea occurring during or after travel.",
        whyItHappens: [
          "Exposure to contaminated food or water (e.g., ETEC bacteria)",
        ],
        commonSymptoms: "Sudden loose stools, abdominal cramps.",
        medicinesList: [
          {
            medicine:
              "ORS + Loperamide or Azithromycin / Rifaximin (selected cases)",
            drugClass: "Rehydration + Antimotility / Antibiotic",
            mainAction: "Rehydrates and shortens bacterial diarrhea duration.",
          },
        ],
      },
      {
        id: "antibiotic-diarrhea",
        subgroupLabel: "B. Diarrhea",
        subtypeName: "5. Antibiotic-Associated Diarrhea",
        whatItIs: "Loose stools triggered during or after antibiotic therapy.",
        whyItHappens: [
          "Antibiotics disrupt normal gut bacteria, sometimes allowing C. difficile infection",
        ],
        commonSymptoms:
          "Loose stools after antibiotic use; fever/colitis if C. difficile.",
        medicinesList: [
          {
            medicine: "Vancomycin or Fidaxomicin (for confirmed C. difficile)",
            drugClass: "Targeted luminal antibiotics",
            mainAction:
              "Eradicates toxin-producing C. difficile inside the colon.",
          },
        ],
      },
      {
        id: "osmotic-diarrhea",
        subgroupLabel: "B. Diarrhea",
        subtypeName: "6. Osmotic Diarrhea",
        whatItIs:
          "Watery stools caused by unabsorbed solutes pulling water into the bowel.",
        whyItHappens: [
          "Lactose intolerance, magnesium antacids, sorbitol, or osmotic laxatives",
        ],
        commonSymptoms:
          "Watery stools related to specific foods/substances; improves with fasting.",
        medicinesList: [
          {
            medicine:
              "Remove triggering substance + Lactase enzyme (if lactose intolerance)",
            drugClass: "Trigger elimination / Enzyme supplement",
            mainAction: "Stops osmotic water pull into the intestinal lumen.",
          },
        ],
      },
      {
        id: "secretory-diarrhea",
        subgroupLabel: "B. Diarrhea",
        subtypeName: "7. Secretory Diarrhea",
        whatItIs:
          "Large-volume watery stools from active intestinal fluid secretion.",
        whyItHappens: [
          "Bacterial enterotoxins, bile acid malabsorption, or endocrine tumors",
        ],
        commonSymptoms:
          "Large-volume watery stools persisting even during fasting.",
        medicinesList: [
          {
            medicine:
              "Aggressive ORS / IV fluids + Racecadotril / Cholestyramine / Octreotide",
            drugClass: "Rehydration + Antisecretory / Bile acid binder",
            mainAction:
              "Replaces massive fluid losses and blocks intestinal hypersecretion.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    code: "07",
    title: "Type 7. Functional Bowel Disorders (IBS Spectrum)",
    whatItIs:
      "Disorders of gut-brain interaction causing recurrent abdominal pain, bloating, and altered bowel habits without visible structural lesions on colonoscopy or blood tests.",
    whyItHappens: [
      "Visceral hypersensitivity (amplified gut pain nerve signaling to normal gas/stretch)",
      "Altered colonic motility (too slow in IBS-C, too fast in IBS-D, fluctuating in IBS-M)",
      "Dysregulated gut-brain axis communication and post-infectious microbiome shifts",
    ],
    commonSymptoms:
      "Recurrent abdominal pain linked to defecation, bloating, constipation, diarrhea, or mixed stools.",
    medicineGroups: [
      "Antispasmodics: mebeverine, dicyclomine",
      "Laxatives: PEG, ispaghula (psyllium)",
      "Antidiarrheals: loperamide",
      "Secretagogues: linaclotide",
      "Gut-brain neuromodulators: low-dose tricyclic antidepressants (amitriptyline)",
    ],
    subtypes: [
      {
        id: "ibs-c",
        subtypeName: "1. IBS-C (Constipation-Predominant IBS)",
        whatItIs:
          "Irritable bowel syndrome with abdominal pain and predominant constipation.",
        whyItHappens: [
          "Altered gut-brain interaction, visceral sensitivity, and slowed colonic transit",
        ],
        commonSymptoms: "Abdominal pain with infrequent, hard stools.",
        medicinesList: [
          {
            medicine: "PEG, Ispaghula, Linaclotide",
            drugClass:
              "Osmotic/Bulk laxatives & Guanylate cyclase-C secretagogue",
            mainAction:
              "Softens stools and reduces visceral pain nerve firing.",
          },
          {
            medicine: "Mebeverine, Dicyclomine",
            drugClass: "Antispasmodics",
            mainAction: "Relaxes painful intestinal smooth-muscle spasms.",
          },
        ],
      },
      {
        id: "ibs-d",
        subtypeName: "2. IBS-D (Diarrhea-Predominant IBS)",
        whatItIs:
          "Irritable bowel syndrome with abdominal pain and predominant diarrhea.",
        whyItHappens: [
          "Accelerated colonic transit and heightened gut visceral sensitivity",
        ],
        commonSymptoms: "Abdominal pain with urgent loose stools.",
        medicinesList: [
          {
            medicine: "Loperamide",
            drugClass: "Antidiarrheal (peripheral mu-opioid agonist)",
            mainAction: "Slows bowel transit and reduces stool urgency.",
          },
          {
            medicine: "Mebeverine, Rifaximin, Low-dose Amitriptyline",
            drugClass: "Antispasmodic / Gut antibiotic / TCA neuromodulator",
            mainAction:
              "Calms visceral hypersensitivity and abdominal cramping.",
          },
        ],
      },
      {
        id: "ibs-m",
        subtypeName: "3. IBS-M (Mixed Bowel Habits IBS)",
        whatItIs:
          "Irritable bowel syndrome alternating between constipation and diarrhea.",
        whyItHappens: [
          "Fluctuating colonic motility combined with visceral hypersensitivity",
        ],
        commonSymptoms:
          "Abdominal pain with alternating hard and loose stool patterns.",
        medicinesList: [
          {
            medicine: "Ispaghula + Mebeverine + Targeted PEG or Loperamide",
            drugClass:
              "Soluble fiber, antispasmodic & symptom-specific therapy",
            mainAction: "Normalizes stool form while relieving cramps.",
          },
        ],
      },
      {
        id: "ibs-u",
        subtypeName: "4. IBS-U (Unclassified IBS)",
        whatItIs:
          "IBS meeting pain criteria whose stool pattern does not fit IBS-C, D, or M.",
        whyItHappens: [
          "Altered gut-brain interaction and mild motility changes",
        ],
        commonSymptoms:
          "Recurrent abdominal pain with variable bowel symptoms.",
        medicinesList: [
          {
            medicine: "Mebeverine / Individualized symptom treatment",
            drugClass: "Antispasmodic & Gut-directed therapy",
            mainAction: "Targets dominant pain or bloating symptom.",
          },
        ],
      },
      {
        id: "functional-abdominal-pain",
        subtypeName: "5. Functional Abdominal Pain",
        whatItIs:
          "Persistent abdominal pain driven by central and visceral gut-brain sensitization.",
        whyItHappens: [
          "Increased visceral pain sensitivity and altered central pain processing",
        ],
        commonSymptoms:
          "Recurrent abdominal pain minimally tied to bowel movements.",
        medicinesList: [
          {
            medicine:
              "Low-dose Amitriptyline + Gut-directed psychological therapies",
            drugClass: "Neuromodulators & Gut-brain behavioral therapy",
            mainAction: "Downregulates central pain signaling pathways.",
          },
        ],
      },
      {
        id: "functional-bloating",
        subtypeName: "6. Functional Bloating",
        whatItIs: "Recurrent bloating without identifiable structural disease.",
        whyItHappens: [
          "Visceral gas sensitivity and altered abdominal muscle-diaphragm coordination",
        ],
        commonSymptoms: "Feeling of abdominal swelling or fullness.",
        medicinesList: [
          {
            medicine:
              "Dietary management (low-FODMAP) + Simethicone / Mebeverine",
            drugClass: "Dietary therapy, antiflatulent & antispasmodic",
            mainAction: "Reduces fermentable gas and relaxes bowel tension.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    code: "08",
    title: "Type 8. Digestive Infections and Inflammatory Disorders",
    whatItIs:
      "Acute mucosal injury caused by enteric pathogens (viruses, bacteria, parasites) or chronic autoimmune/immune-mediated inflammation of the GI tract (IBD).",
    whyItHappens: [
      "Ingestion of infectious viruses, invasive bacteria (Salmonella, Shigella), or protozoa (Entamoeba, Giardia)",
      "Chronic dysregulated mucosal immune attack against gut flora in Crohn's disease and Ulcerative colitis",
      "Bacterial inflammation/micro-perforation of colonic diverticular pouches (diverticulitis)",
    ],
    commonSymptoms:
      "Diarrhea (often bloody/mucoid), fever, severe abdominal cramps, rectal urgency, weight loss.",
    medicineGroups: [
      "Antiprotozoals: metronidazole, tinidazole, paromomycin, nitazoxanide",
      "Antibiotics: pathogen-targeted agents (e.g., azithromycin, ciprofloxacin)",
      "5-ASA anti-inflammatories: mesalazine",
      "Corticosteroids: prednisolone, budesonide",
      "Immunomodulators & Biologics: azathioprine, infliximab, adalimumab",
    ],
    subtypes: [
      {
        id: "gastroenteritis",
        subtypeName: "1. Gastroenteritis",
        whatItIs:
          "Acute infectious inflammation of the stomach and intestines.",
        whyItHappens: ["Viral, bacterial, or parasitic enteric infection"],
        commonSymptoms: "Diarrhea, vomiting, abdominal cramps.",
        medicinesList: [
          {
            medicine:
              "Oral Rehydration Salts (ORS) + Cause-specific antimicrobials (only if indicated)",
            drugClass: "Rehydration & Targeted antimicrobials",
            mainAction:
              "Restores fluid/electrolyte balance (most cases are viral and self-limiting).",
          },
        ],
      },
      {
        id: "bacterial-intestinal-infection",
        subtypeName: "2. Bacterial Intestinal Infection",
        whatItIs: "Invasive bacterial enterocolitis.",
        whyItHappens: [
          "Bacteria such as Salmonella, Shigella, or Campylobacter",
        ],
        commonSymptoms: "Diarrhea, fever, abdominal pain, sometimes blood.",
        medicinesList: [
          {
            medicine:
              "ORS + Selected pathogen-targeted antibiotics (when indicated)",
            drugClass: "Rehydration & Antibiotics",
            mainAction: "Clears invasive bacteria in severe or febrile cases.",
          },
        ],
      },
      {
        id: "amoebiasis",
        subtypeName: "3. Amoebiasis",
        whatItIs: "Parasitic protozoal infection of the colon.",
        whyItHappens: [
          "Entamoeba histolytica parasite infection from contaminated water/food",
        ],
        commonSymptoms: "Diarrhea, abdominal pain, sometimes bloody stools.",
        medicinesList: [
          {
            medicine: "Metronidazole or Tinidazole followed by Paromomycin",
            drugClass: "Tissue nitroimidazole + Luminal amoebicide",
            mainAction:
              "Kills invasive tissue trophozoites and clears luminal cysts to prevent relapse.",
          },
        ],
      },
      {
        id: "giardiasis",
        subtypeName: "4. Giardiasis",
        whatItIs: "Small-intestinal protozoal infection.",
        whyItHappens: [
          "Giardia parasite coating the small-intestinal absorptive surface",
        ],
        commonSymptoms: "Greasy foul-smelling diarrhea, gas, bloating.",
        medicinesList: [
          {
            medicine: "Tinidazole, Metronidazole, or Nitazoxanide",
            drugClass: "Antiprotozoal agents",
            mainAction:
              "Eradicates Giardia parasites and restores nutrient absorption.",
          },
        ],
      },
      {
        id: "crohns-disease",
        subtypeName: "5. Crohn's Disease",
        whatItIs:
          "Chronic immune-mediated transmural inflammation affecting any part of the GI tract.",
        whyItHappens: [
          "Dysregulated mucosal immune response in genetically susceptible individuals",
        ],
        commonSymptoms: "Abdominal pain, chronic diarrhea, weight loss.",
        medicinesList: [
          {
            medicine:
              "Prednisolone / Budesonide (flares), Azathioprine, Infliximab / Adalimumab",
            drugClass: "Corticosteroids, Immunomodulators & Anti-TNF Biologics",
            mainAction:
              "Controls acute flares and maintains long-term mucosal remission.",
          },
        ],
      },
      {
        id: "ulcerative-colitis",
        subtypeName: "6. Ulcerative Colitis",
        whatItIs:
          "Chronic mucosal inflammation and ulcers restricted to the colon and rectum.",
        whyItHappens: ["Auto-inflammatory immune attack on the colonic lining"],
        commonSymptoms: "Bloody diarrhea, urgency, abdominal cramps.",
        medicinesList: [
          {
            medicine:
              "Mesalazine (5-ASA), Prednisolone, Azathioprine, Biologics",
            drugClass: "5-ASA anti-inflammatories, Steroids & Biologics",
            mainAction: "Heals colonic mucosal ulcers and maintains remission.",
          },
        ],
      },
      {
        id: "infectious-colitis-diverticulitis",
        subtypeName: "7. Infectious Colitis & Diverticulitis",
        whatItIs:
          "Colon infection (Infectious Colitis) or inflamed small pouches in the colon wall (Diverticulitis).",
        whyItHappens: [
          "Colonic pathogens or bacterial inflammation of diverticular pouches",
        ],
        commonSymptoms:
          "Lower-left abdominal pain, fever, diarrhea or bowel changes.",
        medicinesList: [
          {
            medicine:
              "Selected organism-specific antibiotics + Supportive care / Surgery (if severe)",
            drugClass: "Targeted antimicrobials & Supportive care",
            mainAction:
              "Treats bacterial inflammation and prevents perforation.",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    code: "09",
    title: "Type 9. Maldigestion and Malabsorption Disorders",
    whatItIs:
      "Two distinct failures of nutrient processing: Maldigestion (food is not broken down enzymatically) and Malabsorption (broken-down nutrients cannot cross the intestinal wall).",
    whyItHappens: [
      "Missing brush-border or pancreatic enzymes (lactase deficiency, chronic pancreatitis)",
      "Autoimmune destruction of intestinal villi (celiac disease triggered by gluten)",
      "Terminal ileal bile acid reabsorption failure or bacterial deconjugation (SIBO)",
      "Extensive surgical small-bowel loss (short bowel syndrome)",
    ],
    commonSymptoms:
      "Greasy floating stools (steatorrhea), chronic diarrhea, bloating, weight loss, vitamin/iron deficiencies.",
    medicineGroups: [
      "Pancreatic enzymes: pancreatin, pancrelipase",
      "Lactase enzyme supplements",
      "Bile acid binders: cholestyramine",
      "Nutritional supplements: vitamins (A, D, E, K, B12), iron, calcium & teduglutide",
    ],
    subtypes: [
      {
        id: "lactose-intolerance",
        subtypeName: "1. Lactose Intolerance",
        whatItIs: "Inability to digest milk sugar (lactose).",
        whyItHappens: ["Insufficient intestinal lactase enzyme"],
        commonSymptoms: "Gas, bloating, diarrhea after dairy intake.",
        medicinesList: [
          {
            medicine: "Lactase enzyme supplements + Dietary lactose reduction",
            drugClass: "Digestive enzyme replacement",
            mainAction:
              "Breaks down lactose sugar before colonic bacteria ferment it.",
          },
        ],
      },
      {
        id: "celiac-disease",
        subtypeName: "2. Celiac Disease",
        whatItIs:
          "Autoimmune gluten sensitivity damaging small-intestinal absorptive villi.",
        whyItHappens: [
          "Immune reaction to dietary gluten (wheat, barley, rye)",
        ],
        commonSymptoms:
          "Diarrhea, bloating, weight loss, iron/vitamin deficiencies.",
        medicinesList: [
          {
            medicine:
              "Strict lifelong gluten-free diet + Vitamin/mineral replacement",
            drugClass: "Medical nutrition therapy & Micronutrient repletion",
            mainAction:
              "Allows intestinal villi to heal and restores normal absorption.",
          },
        ],
      },
      {
        id: "epi",
        subtypeName: "3. Exocrine Pancreatic Insufficiency (EPI)",
        whatItIs:
          "Pancreas fails to secrete enough fat-, protein-, and starch-digesting enzymes.",
        whyItHappens: [
          "Chronic pancreatitis, cystic fibrosis, or pancreatic surgery",
        ],
        commonSymptoms: "Greasy stools, weight loss, malnutrition.",
        medicinesList: [
          {
            medicine: "Pancrelipase / Pancreatin (taken with every meal)",
            drugClass: "Pancreatic enzyme replacement therapy (PERT)",
            mainAction:
              "Replaces missing lipase, protease, and amylase to digest food.",
          },
        ],
      },
      {
        id: "steatorrhea",
        subtypeName: "4. Steatorrhea",
        whatItIs: "Excess undigested fat excreted in the stool.",
        whyItHappens: ["Fat maldigestion (EPI) or mucosal malabsorption"],
        commonSymptoms: "Pale, greasy, foul-smelling stools that float.",
        medicinesList: [
          {
            medicine:
              "Pancreatic enzymes (when indicated) + Fat-soluble vitamins (A, D, E, K)",
            drugClass: "Enzyme replacement & Nutritional support",
            mainAction:
              "Restores fat digestion and prevents fat-soluble vitamin deficiency.",
          },
        ],
      },
      {
        id: "bile-acid-malabsorption",
        subtypeName: "5. Bile Acid Malabsorption",
        whatItIs:
          "Bile acids fail to be reabsorbed in the small intestine and irritate the colon.",
        whyItHappens: ["Ileal disease/resection or post-gallbladder surgery"],
        commonSymptoms: "Chronic watery diarrhea.",
        medicinesList: [
          {
            medicine: "Cholestyramine",
            drugClass: "Bile acid sequestrant (binder)",
            mainAction:
              "Binds excess bile acids in the gut so they cannot trigger colonic water secretion.",
          },
        ],
      },
      {
        id: "sibo-malabsorption",
        subtypeName: "6. SIBO-Related Malabsorption",
        whatItIs:
          "Nutrient malabsorption caused by excess small-intestinal bacteria.",
        whyItHappens: [
          "Bacteria consume Vitamin B12 and deconjugate bile salts",
        ],
        commonSymptoms: "Bloating, diarrhea, B12/iron nutrient deficiencies.",
        medicinesList: [
          {
            medicine: "Rifaximin + Vitamin B12 replacement",
            drugClass: "Gut-selective antibiotic & Vitamin supplementation",
            mainAction:
              "Clears bacterial overgrowth and restores intestinal absorption.",
          },
        ],
      },
      {
        id: "short-bowel-syndrome",
        subtypeName: "7. Short Bowel Syndrome",
        whatItIs:
          "Insufficient functioning small-bowel length after surgery or disease.",
        whyItHappens: ["Loss of absorptive intestinal surface area"],
        commonSymptoms: "High-output diarrhea, dehydration, malnutrition.",
        medicinesList: [
          {
            medicine:
              "Nutritional/IV support, Vitamin replacement, Teduglutide",
            drugClass: "Nutritional support & GLP-2 intestinal growth analogue",
            mainAction: "Enhances mucosal nutrient/fluid absorption.",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    code: "10",
    title: "Type 10. Liver, Gallbladder and Pancreatic Disorders",
    whatItIs:
      "Disorders of the accessory hepatobiliary and pancreatic organs responsible for synthesizing bile salts, detoxifying blood, and secreting digestive enzymes.",
    whyItHappens: [
      "Metabolic insulin resistance causing hepatic fat accumulation (MASLD)",
      "Hepatotropic viral infections (Hepatitis B and C) or chronic alcohol injury leading to cirrhosis",
      "Cholesterol supersaturation forming gallstones that block cystic or common bile ducts",
      "Gallstone duct obstruction or alcohol triggering premature pancreatic autodigestion (pancreatitis)",
    ],
    commonSymptoms:
      "Jaundice, dark urine, pale stools, right-upper-quadrant pain, epigastric pain radiating to back, ascites.",
    medicineGroups: [
      "Antivirals: tenofovir, entecavir, sofosbuvir-based direct-acting antivirals",
      "Bile acid medicines: ursodeoxycholic acid",
      "Pancreatic enzyme replacement: pancrelipase",
      "Cirrhosis ascites diuretics: spironolactone, furosemide",
    ],
    subtypes: [
      {
        id: "masld",
        subtypeName: "1. Fatty Liver Disease (MASLD)",
        whatItIs:
          "Excess fat accumulation inside liver cells driven by metabolic risk factors.",
        whyItHappens: [
          "Insulin resistance, obesity, type 2 diabetes, high triglycerides",
        ],
        commonSymptoms:
          "Often asymptomatic; sometimes fatigue or mild upper-right discomfort.",
        medicinesList: [
          {
            medicine: "Structured weight management + Metabolic risk treatment",
            drugClass: "Lifestyle & Condition-specific hepatology care",
            mainAction: "Reduces liver fat inflammation and prevents fibrosis.",
          },
        ],
      },
      {
        id: "hepatitis-b",
        subtypeName: "2. Hepatitis B",
        whatItIs: "Viral infection of the liver caused by Hepatitis B virus.",
        whyItHappens: ["Hepatitis B virus infects hepatocytes"],
        commonSymptoms: "Fatigue, jaundice, sometimes asymptomatic.",
        medicinesList: [
          {
            medicine: "Tenofovir or Entecavir",
            drugClass: "Antiviral nucleos(t)ide analogues",
            mainAction:
              "Suppresses Hepatitis B viral replication and protects liver tissue.",
          },
        ],
      },
      {
        id: "hepatitis-c",
        subtypeName: "3. Hepatitis C",
        whatItIs: "Viral liver infection caused by Hepatitis C virus.",
        whyItHappens: [
          "Hepatitis C virus causes progressive liver inflammation",
        ],
        commonSymptoms: "Often silent initially; chronic liver inflammation.",
        medicinesList: [
          {
            medicine:
              "Direct-acting antivirals (e.g., Sofosbuvir-based combinations)",
            drugClass: "Direct-Acting Antivirals (DAAs)",
            mainAction: "Eradicates and cures Hepatitis C viral infection.",
          },
        ],
      },
      {
        id: "cirrhosis",
        subtypeName: "4. Cirrhosis",
        whatItIs:
          "Long-term liver damage resulting in permanent fibrosis and scarring.",
        whyItHappens: [
          "Chronic viral hepatitis, alcohol, or fatty liver scarring",
        ],
        commonSymptoms:
          "Abdominal swelling (ascites), jaundice, fluid retention.",
        medicinesList: [
          {
            medicine: "Spironolactone + Furosemide + Cause-specific treatment",
            drugClass: "Aldosterone antagonist & Loop diuretic",
            mainAction: "Removes excess portal-hypertension fluid retention.",
          },
        ],
      },
      {
        id: "gallstones",
        subtypeName: "5. Gallstones",
        whatItIs:
          "Hardened cholesterol or pigment deposits inside the gallbladder.",
        whyItHappens: [
          "Bile cholesterol supersaturation and gallbladder stasis",
        ],
        commonSymptoms:
          "Sometimes silent; biliary colic causes upper-right abdominal pain after fatty food.",
        medicinesList: [
          {
            medicine:
              "Laparoscopic cholecystectomy or Ursodeoxycholic acid (selected cases)",
            drugClass: "Surgical removal / Bile acid solubilizer",
            mainAction:
              "Eliminates symptomatic gallstones or dissolves small cholesterol stones.",
          },
        ],
      },
      {
        id: "cholecystitis",
        subtypeName: "6. Cholecystitis",
        whatItIs: "Acute inflammation of the gallbladder wall.",
        whyItHappens: [
          "Gallstone blocking the cystic duct with secondary infection",
        ],
        commonSymptoms: "Right upper abdominal pain, fever, nausea.",
        medicinesList: [
          {
            medicine: "Pain management + Antibiotics + Gallbladder surgery",
            drugClass: "Antimicrobial & Surgical therapy",
            mainAction:
              "Controls gallbladder infection and removes the inflamed organ.",
          },
        ],
      },
      {
        id: "bile-duct-obstruction",
        subtypeName: "7. Bile Duct Obstruction",
        whatItIs:
          "Blockage of bile flow from the liver/gallbladder into the intestine.",
        whyItHappens: [
          "Gallstones in the common bile duct, strictures, or tumors",
        ],
        commonSymptoms: "Jaundice, dark urine, pale stools, itching.",
        medicinesList: [
          {
            medicine: "Endoscopic (ERCP) or surgical decompression",
            drugClass: "Interventional endoscopic / surgical care",
            mainAction:
              "Removes obstructing stones or stents the duct to restore bile flow.",
          },
        ],
      },
      {
        id: "acute-pancreatitis",
        subtypeName: "8. Acute Pancreatitis",
        whatItIs: "Sudden acute inflammation of the pancreas.",
        whyItHappens: [
          "Gallstones or heavy alcohol intake triggering premature enzyme activation",
        ],
        commonSymptoms:
          "Severe upper abdominal pain radiating to the back, vomiting.",
        medicinesList: [
          {
            medicine:
              "Hospital IV fluids + Pain control + Cause-specific intervention",
            drugClass: "Inpatient supportive & endoscopic therapy",
            mainAction:
              "Stabilizes pancreatic perfusion and treats gallstone/metabolic triggers.",
          },
        ],
      },
      {
        id: "chronic-pancreatitis",
        subtypeName: "9. Chronic Pancreatitis",
        whatItIs:
          "Long-term pancreatic inflammation causing permanent enzyme loss.",
        whyItHappens: [
          "Recurrent alcohol, ductal blockage, or genetic pancreatic injury",
        ],
        commonSymptoms: "Recurrent pain, weight loss, greasy stools.",
        medicinesList: [
          {
            medicine:
              "Pancrelipase enzymes + Pain management + Nutritional support",
            drugClass: "Pancreatic enzyme replacement & Analgesia",
            mainAction:
              "Replaces lost digestive enzymes and controls chronic pain.",
          },
        ],
      },
    ],
  },
];

const STUDY_ORDER_STEPS = [
  {
    step: "01",
    title: "What is the disorder?",
    detail: "Define the core anatomical or physiological failure.",
  },
  {
    step: "02",
    title: "Types and subtypes",
    detail:
      "Separate functional phenotypes (e.g., IBS-C vs. IBS-D, gastric vs. duodenal ulcer).",
  },
  {
    step: "03",
    title: "Causes — how does it happen?",
    detail: "Identify infectious, chemical, enzymatic, or motility triggers.",
  },
  {
    step: "04",
    title: "Symptoms — patient clues",
    detail:
      "Translate patient phrasing (heartburn, early satiety, steatorrhea) into physiology.",
  },
  {
    step: "05",
    title: "How to distinguish similar disorders",
    detail:
      "Differentiate overlapping symptoms (e.g., bloating in IBS vs. lactose intolerance vs. SIBO).",
  },
  {
    step: "06",
    title: "Medicines used",
    detail: "Match specific drugs to the exact underlying mechanism.",
  },
  {
    step: "07",
    title: "Drug class and main action",
    detail:
      "Understand receptor/enzyme targets (PPI vs. antacid vs. prokinetic).",
  },
  {
    step: "08",
    title: "Side effects and precautions",
    detail: "Screen renal/hepatic limits, drug interactions, and red flags.",
  },
];

export default function DigestiveImpairmentPage() {
  const [activeTab, setActiveTab] = useState<PrimaryTab>("hierarchy-cards");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState<number | "All">("All");

  const filteredHierarchy = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return DIGESTIVE_HIERARCHY.filter((cat) => {
      if (selectedTypeId !== "All" && cat.id !== selectedTypeId) return false;
      if (!q) return true;

      const matchesCategory =
        cat.title.toLowerCase().includes(q) ||
        cat.whatItIs.toLowerCase().includes(q) ||
        cat.whyItHappens.some((w) => w.toLowerCase().includes(q)) ||
        cat.medicineGroups.some((m) => m.toLowerCase().includes(q));

      const matchesAnySubtype = cat.subtypes.some(
        (sub) =>
          sub.subtypeName.toLowerCase().includes(q) ||
          sub.whatItIs.toLowerCase().includes(q) ||
          sub.commonSymptoms.toLowerCase().includes(q) ||
          sub.whyItHappens.some((w) => w.toLowerCase().includes(q)) ||
          sub.medicinesList.some(
            (m) =>
              m.medicine.toLowerCase().includes(q) ||
              m.drugClass.toLowerCase().includes(q) ||
              m.mainAction.toLowerCase().includes(q),
          ),
      );

      return matchesCategory || matchesAnySubtype;
    }).map((cat) => {
      if (!q) return cat;
      // If query matches specific subtypes inside the category, narrow subtypes unless query matched the category title itself
      const categoryLevelMatch =
        cat.title.toLowerCase().includes(q) ||
        cat.whatItIs.toLowerCase().includes(q);
      if (categoryLevelMatch) return cat;

      const matchingSubtypes = cat.subtypes.filter(
        (sub) =>
          sub.subtypeName.toLowerCase().includes(q) ||
          sub.whatItIs.toLowerCase().includes(q) ||
          sub.commonSymptoms.toLowerCase().includes(q) ||
          sub.whyItHappens.some((w) => w.toLowerCase().includes(q)) ||
          sub.medicinesList.some(
            (m) =>
              m.medicine.toLowerCase().includes(q) ||
              m.drugClass.toLowerCase().includes(q) ||
              m.mainAction.toLowerCase().includes(q),
          ),
      );

      return matchingSubtypes.length > 0
        ? { ...cat, subtypes: matchingSubtypes }
        : cat;
    });
  }, [searchQuery, selectedTypeId]);

  const totalVisibleSubtypes = useMemo(() => {
    return filteredHierarchy.reduce((acc, cat) => acc + cat.subtypes.length, 0);
  }, [filteredHierarchy]);

  const jumpToTypeHierarchy = (id: number) => {
    setSelectedTypeId(id);
    setActiveTab("hierarchy-cards");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Clinical Overview</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-3">
              <Stethoscope className="w-3.5 h-3.5" /> Gastroenterology Master
              Codex &bull; Condition #04
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Digestive Impairment (Agni &amp; Koshtha)
            </h1>

            {/* Visual Hierarchy Breadcrumb Flow */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono mb-3">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-bold">
                Digestive Impairment
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-bold">
                10 Types (What &amp; Why)
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                60 Subtypes (Disease Card)
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-teal-500/15 border border-teal-500/30 text-teal-300 font-bold">
                Medicines Used (Medicine Card)
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              <strong>
                Digestive impairment is a broad term, not one specific disease.
              </strong>{" "}
              It means that some part of the digestive system is not working
              properly. It can affect how food is broken down, nutrients are
              absorbed, food moves through the digestive tract, or waste is
              eliminated.
            </p>
            <div className="text-slate-400 p-1 text-xs sm:text-sm max-w-3xl leading-relaxed">
              <p>For example:</p>
              <ul className="ml-7 list-disc mt-1 space-y-0.5">
                <li>Food is not digested properly.</li>
                <li>Stomach acid causes irritation or reflux.</li>
                <li>The stomach empties too slowly.</li>
                <li>The intestine cannot absorb nutrients properly.</li>
                <li>Bowel movements become difficult or too frequent.</li>
              </ul>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Full Card Tree
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                10 Types &bull; 60 Subtypes
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Related Module
              </span>
              <Link
                href="/conditions/acid-peptic"
                className="text-sm font-bold text-amber-300 hover:underline font-mono block mt-0.5"
              >
                APD Deep-Dive &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="w-full overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("hierarchy-cards")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "hierarchy-cards"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <LayoutGrid className="w-4 h-4 shrink-0" />
              <span>Types &rarr; Subtypes &rarr; Medicines (Card Tree)</span>
            </button>

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
              <span>Meaning, Key Rules &amp; Red Flags</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("anatomy")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "anatomy"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>1. Digestive Organs (9)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("quick-map")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "quick-map"
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <span>3. 10-Group Map</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("study-framework")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "study-framework"
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>4. 8-Step Framework</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN VIEW: DIGESTIVE IMPAIRMENT -> TYPES -> SUBTYPES -> MEDICINES (CARDS)  */}
        {/* ========================================================================= */}
        {activeTab === "hierarchy-cards" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Root Level Banner: Level 0 — Digestive Impairment */}
            <div className="p-5 rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-300 font-bold block mb-1">
                  Level 0 &bull; Root Umbrella Condition
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Digestive Impairment &rarr; 10 Types &rarr; Subtypes &rarr;
                  Medicines Used
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  Every Type card below shows <strong>What it is</strong> &amp;{" "}
                  <strong>Why it causes it</strong>, followed directly by its
                  nested <strong>Subtype Disease Cards</strong> and{" "}
                  <strong>Medicine Cards</strong>.
                </p>
              </div>
              <div className="text-xs font-mono text-slate-300 bg-slate-950/80 border border-slate-800 px-3.5 py-2 rounded-xl shrink-0">
                Showing{" "}
                <strong className="text-teal-300">
                  {filteredHierarchy.length}
                </strong>{" "}
                Types &bull;{" "}
                <strong className="text-amber-300">
                  {totalVisibleSubtypes}
                </strong>{" "}
                Subtypes
              </div>
            </div>

            {/* Search & 10-Type Filter Controls */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Type, Subtype (GERD, SIBO, IBS-C), Cause, or Medicine..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/60"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white bg-slate-800 px-1.5 py-0.5 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* 10 Type Filter Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                <button
                  type="button"
                  onClick={() => setSelectedTypeId("All")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedTypeId === "All"
                      ? "bg-teal-500 text-slate-950 font-bold"
                      : "bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  All 10 Types
                </button>
                {DIGESTIVE_HIERARCHY.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedTypeId(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedTypeId === cat.id
                        ? "bg-teal-500 text-slate-950 font-bold"
                        : "bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {cat.code}.{" "}
                    {cat.title.replace(/^Type \d+\.\s*/, "").split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* HIERARCHICAL TREE OF CARDS: TYPE CARD -> SUBTYPE DISEASE CARD + MEDICINE CARD */}
            <div className="space-y-10">
              {filteredHierarchy.map((typeItem) => (
                <div
                  key={typeItem.id}
                  className="p-6 rounded-3xl border border-indigo-500/30 bg-slate-900/45 backdrop-blur-md space-y-6 shadow-xl shadow-black/30"
                >
                  {/* LEVEL 1: TYPE CARD (WHAT IS IT + WHY IT CAUSES IT + MEDICINE GROUPS) */}
                  <div className="p-5 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-950/80 to-slate-950/60 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-bold">
                          Level 1 &bull; Main Type {typeItem.code} of 10
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">
                          {typeItem.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-amber-300 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0">
                        {typeItem.subtypes.length} Subtypes Below &darr;
                      </span>
                    </div>

                    {/* Type: What Is It + Why Does It Happen */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs leading-relaxed">
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                        <strong className="text-indigo-300 flex items-center gap-1.5 text-sm">
                          <HelpCircle className="w-4 h-4" /> What Is This Type?
                        </strong>
                        <p className="text-slate-200">{typeItem.whatItIs}</p>
                        <p className="text-slate-400 pt-1 border-t border-slate-800/70">
                          <strong className="text-cyan-300">
                            Typical Group Symptoms:{" "}
                          </strong>
                          {typeItem.commonSymptoms}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                        <strong className="text-amber-300 block text-sm">
                          Why Does It Happen? (Root Mechanisms &amp; Causes)
                        </strong>
                        <ul className="space-y-1 list-disc list-inside text-slate-300">
                          {typeItem.whyItHappens.map((reason, idx) => (
                            <li key={idx}>{reason}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Core Medicine Groups for this Type */}
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90 text-xs space-y-2">
                      <strong className="text-teal-300 font-mono uppercase text-[11px] block">
                        Core Medicine Classes Used Across {typeItem.title}:
                      </strong>
                      <div className="flex flex-wrap gap-2">
                        {typeItem.medicineGroups.map((grp, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px]"
                          >
                            {grp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {typeItem.clinicalAlert && (
                      <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/40 text-xs text-rose-200 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{typeItem.clinicalAlert}</span>
                      </div>
                    )}
                  </div>

                  {/* LEVEL 2 & LEVEL 3: NESTED SUBTYPE CARDS -> MEDICINES USED CARDS */}
                  <div className="pl-2 sm:pl-5 border-l-2 border-teal-500/40 space-y-4">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-teal-300 font-bold">
                      Level 2 &rarr; Level 3: Subtypes &amp; Medicines Used in{" "}
                      {typeItem.title}
                    </div>

                    <div className="space-y-4">
                      {typeItem.subtypes.map((sub) => (
                        <div
                          key={sub.id}
                          className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-950/60 space-y-4"
                        >
                          {/* Subtype Title */}
                          <div className="flex flex-wrap items-center gap-2 border-b border-slate-800/80 pb-2.5">
                            {sub.subgroupLabel && (
                              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                                {sub.subgroupLabel}
                              </span>
                            )}
                            <h4 className="text-base sm:text-lg font-bold text-white">
                              {sub.subtypeName}
                            </h4>
                          </div>

                          {/* Side-by-Side Cards: Left = Subtype Disease Card | Right = Medicines Used Card */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                            {/* SUBTYPE DISEASE CARD */}
                            <div className="p-4 rounded-xl border border-amber-500/25 bg-slate-900/70 space-y-2.5 leading-relaxed">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
                                Subtype Disease Card &bull; What It Is &amp; Why
                                It Happens
                              </span>

                              <div>
                                <strong className="text-white">
                                  What It Is:{" "}
                                </strong>
                                <span className="text-slate-300">
                                  {sub.whatItIs}
                                </span>
                              </div>

                              <div>
                                <strong className="text-amber-300 block mb-1">
                                  Why Does It Happen?
                                </strong>
                                <ul className="space-y-1 list-disc list-inside text-slate-300">
                                  {sub.whyItHappens.map((cause, idx) => (
                                    <li key={idx}>{cause}</li>
                                  ))}
                                </ul>
                              </div>

                              <div className="pt-2 border-t border-slate-800/80">
                                <strong className="text-cyan-300">
                                  Common Symptoms:{" "}
                                </strong>
                                <span className="text-slate-200">
                                  {sub.commonSymptoms}
                                </span>
                              </div>
                            </div>

                            {/* MEDICINES USED IN IT CARD */}
                            <div className="p-4 rounded-xl border border-teal-500/25 bg-slate-900/70 space-y-2.5 leading-relaxed">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-300 font-bold flex items-center gap-1.5">
                                <Pill className="w-3.5 h-3.5" /> Medicines Used
                                Card &bull; Drug Class &amp; Action
                              </span>

                              <div className="space-y-2">
                                {sub.medicinesList.map((med, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3 rounded-lg bg-slate-950/90 border border-slate-800 space-y-1"
                                  >
                                    <div className="flex flex-wrap items-center justify-between gap-1">
                                      <strong className="text-white">
                                        {med.medicine}
                                      </strong>
                                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                                        {med.drugClass}
                                      </span>
                                    </div>
                                    <p className="text-slate-300 text-[11px]">
                                      <strong className="text-emerald-300">
                                        Main Action:{" "}
                                      </strong>
                                      {med.mainAction}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Important Medicine Safety Callout */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Important Medicine Safety (Learning Guide — Not for
                  Self-Prescribing)
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200 list-disc list-inside leading-relaxed">
                <li>
                  <strong>Antibiotics are NOT required</strong> for every
                  diarrhea or stomach infection (most acute gastroenteritis is
                  viral).
                </li>
                <li>
                  <strong>Long-term PPIs</strong> must have a clear medical
                  indication and periodic physician review.
                </li>
                <li>
                  <strong>Domperidone and Metoclopramide</strong> carry
                  important cardiac (QT prolongation) and neurological (tardive
                  dyskinesia) safety restrictions.
                </li>
                <li>
                  <strong>Persistent abdominal symptoms</strong> should never be
                  masked blindly with chronic antacids or digestive enzymes
                  without medical evaluation.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: MEANING, 4 KEY CLINICAL RULES & RED FLAGS                          */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3">
                <div className="flex items-center gap-2 text-teal-400">
                  <Stethoscope className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    What Does &quot;Digestive Impairment&quot; Mean?
                  </h2>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Digestive impairment</strong> is a broad umbrella
                  term—not one single disease. It means that some part of the
                  gastrointestinal or hepatobiliary-pancreatic system is not
                  performing its normal physiological role.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Enzymatic Breakdown Failure:</strong> Food is not
                    digested properly (e.g., lactase deficiency, pancreatic
                    insufficiency).
                  </li>
                  <li>
                    <strong>Acid &amp; Mucosal Injury:</strong> Stomach acid
                    causes reflux, gastritis, or ulcers.
                  </li>
                  <li>
                    <strong>Motility Dysfunction:</strong> The stomach empties
                    too slowly (gastroparesis) or too rapidly (dumping
                    syndrome).
                  </li>
                  <li>
                    <strong>Nutrient Malabsorption:</strong> The small intestine
                    cannot absorb nutrients properly (e.g., celiac disease,
                    SIBO).
                  </li>
                  <li>
                    <strong>Elimination Disturbance:</strong> Bowel movements
                    become too difficult (constipation) or too frequent
                    (diarrhea).
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-3">
                <div className="flex items-center gap-2 text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    4 Important Clinical Points to Remember
                  </h2>
                </div>
                <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-amber-300 block mb-0.5">
                      1. Not every digestive problem is caused by excess stomach
                      acid:
                    </strong>
                    Giving a PPI for lactose intolerance, gallstones, or
                    slow-transit constipation treats the wrong mechanism.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-teal-300 block mb-0.5">
                      2. Different drug classes target completely different
                      mechanisms:
                    </strong>
                    Antacids neutralise existing acid, PPIs block acid pumps,
                    prokinetics speed emptying, antispasmodics relax smooth
                    muscle, and digestive enzymes break down food.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-cyan-300 block mb-0.5">
                      3. The same symptom can occur in several different
                      diseases:
                    </strong>
                    For example, <strong>bloating</strong> can occur in IBS,
                    chronic constipation, lactose intolerance, gastroparesis,
                    and SIBO.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-indigo-300 block mb-0.5">
                      4. Treating a symptom does not automatically cure the
                      underlying disease:
                    </strong>
                    Simethicone relieves gas bubbles, and Loperamide slows
                    diarrhea, but neither eradicates <em>H. pylori</em>, celiac
                    disease, or bacterial dysentery.
                  </div>
                </div>
              </div>
            </div>

            {/* Red Flag Warning Signs */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Digestive Red Flags: Alarm Symptoms Requiring Prompt Medical
                  Evaluation
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 text-xs text-slate-200">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    1. Blood in Stool
                  </strong>
                  Bright red rectal bleeding (hematochezia) or blood mixed with
                  diarrhea.
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    2. Black Tarry Stools
                  </strong>
                  Melena (or coffee-ground vomiting) indicating upper GI
                  bleeding.
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    3. Severe Abdominal Pain
                  </strong>
                  Sudden, sharp, or worsening pain with guarding/rigidity.
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    4. Persistent Vomiting
                  </strong>
                  Inability to keep fluids down or bilious/feculent vomiting.
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    5. Unexplained Weight Loss
                  </strong>
                  Unintentional weight loss or progressive iron-deficiency
                  anemia.
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    6. Difficulty Swallowing
                  </strong>
                  Dysphagia (food sticking) or painful swallowing (odynophagia).
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: STEP 1 — UNDERSTAND THE DIGESTIVE SYSTEM FIRST (9 ORGANS)          */}
        {/* ========================================================================= */}
        {activeTab === "anatomy" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-1">
                Step 1: Understand the Digestive System First
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                <strong>First way of thinking:</strong> Always identify{" "}
                <em>which organ and which digestive function</em> is affected
                before thinking about a medicine.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[640px]">
                <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5 text-cyan-300">Anatomical Organ</th>
                    <th className="p-3.5 text-teal-300">
                      Primary Physiological Function
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {DIGESTIVE_ORGANS.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="p-3.5 font-bold text-white font-mono">
                        {row.organ}
                      </td>
                      <td className="p-3.5 text-slate-200">{row.function}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: QUICK REVISION — 10 LEARNING CATEGORIES MAP                        */}
        {/* ========================================================================= */}
        {activeTab === "quick-map" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-1">
                Quick Revision: Overall 10-Category Digestive Learning Map
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Click any Type card below to open its full Type &rarr; Subtypes
                &rarr; Medicines card tree.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
              {DIGESTIVE_HIERARCHY.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => jumpToTypeHierarchy(cat.id)}
                  className="text-left p-4 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-emerald-500/50 hover:bg-slate-900/70 transition-all flex flex-col justify-between space-y-3"
                >
                  <div>
                    <span className="text-lg font-extrabold font-mono text-emerald-400 block mb-1">
                      {cat.code}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {cat.title.replace(/^Type \d+\.\s*/, "")}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {cat.subtypes
                      .slice(0, 3)
                      .map((s) => s.subtypeName.replace(/^\d+\.\s*/, ""))
                      .join(", ")}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: 8-STEP CLINICAL & PHARMACOLOGY STUDY FRAMEWORK                     */}
        {/* ========================================================================= */}
        {activeTab === "study-framework" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-1">
                Recommended 8-Step Order to Study Every Digestive Category &amp;
                Medicine
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Follow this systematic clinical sequence whenever learning a new
                GI disorder or drug class:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {STUDY_ORDER_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-2"
                >
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-bold">
                    Step {item.step}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
