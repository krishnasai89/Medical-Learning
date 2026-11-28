"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Wind,
  Droplets,
  Activity,
  Layers,
  Info,
  Pill,
  Search,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export interface ColdMedication {
  id: string;
  name: string;
  brandExample: string;
  classType:
    | "1st-Gen Antihistamine"
    | "2nd-Gen Antihistamine"
    | "Leukotriene Antagonist"
    | "Oral Decongestant"
    | "Topical Decongestant"
    | "Intranasal Corticosteroid / Combo"
    | "Nasal Saline"
    | "Topical Counterirritant / Rub"
    | "Nasal Inhalant";
  appliesTo: ("rhinorrhea" | "sneezing" | "allergy")[];
  dosageForm: string;
  adultDose: string;
  mechanism: string;
  clinicalNote: string;
  sedationLevel: "High Sedation" | "Low/Non-Sedating" | "Non-Sedating" | "None";
  href?: string; // Optional target route for existing monographs
}

export const COLD_MEDICATIONS: ColdMedication[] = [
  // --- TOPICAL COUNTERIRRITANTS & BALMS ---
  {
    id: "vicks-vaporub",
    name: "Vicks VapoRub / vicks-babyrub",
    href: "/medical/vicks",
    brandExample:
      "Vicks VapoRub (Menthol 2.82%, Camphor 5.26%, Eucalyptus Oil 1.33%)",
    classType: "Topical Counterirritant / Rub",
    appliesTo: ["rhinorrhea", "sneezing"],
    dosageForm: "Topical Ointment / Steam Inhalant",
    adultDose:
      "Apply topically to chest, neck & back TID–QID; or 1–2 tsp in hot (not boiling) water for steam inhalation",
    mechanism:
      "Volatile aromatic vapors stimulate nasal TRPM8 (cold/menthol) and TRPV1/TRPV3 receptors, creating a subjective sensation of improved airflow, cooling, and mild local antitussive sensory suppression.",
    clinicalNote:
      "Contraindicated in children < 2 years (risk of acute laryngospasm and chemical bronchoconstriction). Never place inside nostrils, heat in a microwave, or apply to broken skin.",
    sedationLevel: "None",
  },
  {
    id: "zandu-balm",
    name: "Zandu Balm / Tiger Balm (Classic / Ultra Power)",
    href: "/medical/zandu-balm",
    brandExample:
      "Zandu Balm (Mentha Satva 12–17%, Gaultheria/Wintergreen Oil 12–25%, Eucalyptus 0.8%)",
    classType: "Topical Counterirritant / Rub",
    appliesTo: ["rhinorrhea", "allergy"],
    dosageForm: "Ayurvedic Analgesic Balm",
    adultDose:
      "Gently massage a thin film over forehead, temples, and bridge of nose BID–TID",
    mechanism:
      "High concentration of Methyl Salicylate (Gaultheria) inhibits peripheral cutaneous prostaglandin synthesis, while Menthol acts as a counterirritant, depleting substance P and distracting from cold-induced frontal sinus headache.",
    clinicalNote:
      "Exceptional for tension and sinus headaches associated with common cold. Wash hands thoroughly after application; avoid accidental contact with conjunctiva or mucous membranes.",
    sedationLevel: "None",
  },
  // --- NASAL INHALANTS ---
  {
    id: "vicks-inhaler",
    name: "Vicks Inhaler Nasal Stick",
    href: "/medical/vicks-inhaler",
    brandExample:
      "Vicks Inhaler (Menthol 41.54%, Camphor 41.54%, Siberian Pine Needle Oil 4.61%)",
    classType: "Nasal Inhalant",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Pocket Nasal Inhaler Stick",
    adultDose:
      "1 – 2 deep inhalations per nostril while closing the other nostril; as needed",
    mechanism:
      "Direct vaporization of high-potency menthol and camphor activates trigeminal cold receptors in the nasal mucosa, triggering sensory feedback of patent, unblocked nasal passages without systemic cardiovascular stimulation.",
    clinicalNote:
      "Provides rapid perceived relief from nasal stuffiness without the rebound risks of topical alpha-agonist sprays. Personal hygienic use only—do not share sticks between patients.",
    sedationLevel: "None",
  },
  // --- 1st Generation H1 Antihistamines ---
  {
    id: "chlorpheniramine",
    name: "Chlorpheniramine (Chlorphenamine Maleate)",
    href: "/medical/chlorpheniramine",
    brandExample: "Piriton, Zeet, Cadistin",
    classType: "1st-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet / Syrup",
    adultDose: "4 mg PO every 4–6 hrs (Max 24 mg/day)",
    mechanism:
      "Crosses blood-brain barrier; competitive H1 receptor inverse agonist with potent central anticholinergic (antimuscarinic) action, drying up watery secretions.",
    clinicalNote:
      "Significant sedation and dry mouth. Frequently paired in OTC cold combination tablets with paracetamol and phenylephrine.",
    sedationLevel: "High Sedation",
  },
  {
    id: "diphenhydramine",
    name: "Diphenhydramine HCl",
    href: "/medical/diphenhydramine",
    brandExample: "Benadryl, ZzzQuil",
    classType: "1st-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Capsule / Elixir / IV",
    adultDose: "25 mg – 50 mg PO every 6–8 hrs (Max 300 mg/day)",
    mechanism:
      "Competitive H1 antagonist with strong central sedative and anticholinergic properties; suppresses medullary cough center.",
    clinicalNote:
      "Marked somnolence and psychomotor slowing. Avoid driving, operating machinery, or combining with alcohol/sedatives.",
    sedationLevel: "High Sedation",
  },
  {
    id: "promethazine",
    name: "Promethazine HCl",
    href: "/medical/promethazine",
    brandExample: "Phenergan, Avomine",
    classType: "1st-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet / Syrup / IM",
    adultDose: "25 mg PO at bedtime or 12.5–25 mg BID",
    mechanism:
      "Phenothiazine derivative with potent H1 blockade, anticholinergic, antiemetic, and alpha-adrenergic blocking effects.",
    clinicalNote:
      "FDA Boxed Warning: Strictly contraindicated in children < 2 years due to fatal respiratory depression.",
    sedationLevel: "High Sedation",
  },
  {
    id: "pheniramine",
    name: "Pheniramine Maleate",
    href: "/medical/pheniramine",
    brandExample: "Avil",
    classType: "1st-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet / Injection (IV/IM)",
    adultDose: "25 mg – 50 mg PO BID or TID (Max 150 mg/day)",
    mechanism:
      "Alkylamine class H1 antagonist providing rapid anti-secretory relief via muscarinic receptor antagonism.",
    clinicalNote:
      "Fast-acting relief for acute allergic paroxysms and cold symptoms. Causes marked drowsiness and urinary retention in BPH.",
    sedationLevel: "High Sedation",
  },
  {
    id: "cyproheptadine",
    name: "Cyproheptadine HCl",
    href: "/medical/cyproheptadine",
    brandExample: "Periactin, Ciplactin",
    classType: "1st-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet / Syrup",
    adultDose: "4 mg PO every 8 hrs (Max 20–32 mg/day)",
    mechanism:
      "Dual H1 antihistaminic and 5-HT2 (serotonin) receptor antagonist; blocks capillary permeability and stimulates hypothalamic appetite centers.",
    clinicalNote:
      "Frequently causes weight gain and hyperphagia alongside sedation. Useful in cold-induced urticaria.",
    sedationLevel: "High Sedation",
  },
  {
    id: "hydroxyzine",
    name: "Hydroxyzine Hydrochloride",
    href: "/medical/hydroxyzine",
    brandExample: "Atarax 10mg / 25mg",
    classType: "1st-Gen Antihistamine",
    appliesTo: ["allergy"],
    dosageForm: "Oral Tablet (10 mg, 25 mg)",
    adultDose: "25 mg – 50 mg at night or divided Q8H (Max 100 mg/day)",
    mechanism:
      "Piperazine derivative H1 blocker with anxiolytic and central sedative properties; suppresses subcortical histamine signaling.",
    clinicalNote:
      "Specialized for severe allergic pruritus, chronic urticaria, and dermatographism. Caution for QT prolongation.",
    sedationLevel: "High Sedation",
  },

  // --- 2nd Generation H1 Antihistamines ---
  {
    id: "cetirizine",
    name: "Cetirizine HCl",
    href: "/medical/cetirizine",
    brandExample: "Zyrtec, Cetzine, Alerid",
    classType: "2nd-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet (10 mg) / Syrup",
    adultDose: "10 mg PO once daily (or 5 mg BID)",
    mechanism:
      "Carboxylated metabolite of hydroxyzine; selective peripheral H1 receptor antagonist with minimal anticholinergic activity.",
    clinicalNote:
      "Most potent 2nd-gen agent, but carries ~10% mild somnolence risk. Best taken at bedtime.",
    sedationLevel: "Low/Non-Sedating",
  },
  {
    id: "levocetirizine",
    name: "Levocetirizine Dihydrochloride",
    href: "/medical/levocetirizine",
    brandExample: "Xyzal, Levocet, 1-AL",
    classType: "2nd-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet (5 mg) / Syrup",
    adultDose: "5 mg PO once daily in the evening",
    mechanism:
      "Active (R)-enantiomer of cetirizine; exhibits 2-fold higher affinity for human H1 receptors with slower dissociation kinetics.",
    clinicalNote:
      "Achieves full symptom suppression at half the molecular dose of cetirizine with slightly lower daytime drowsiness.",
    sedationLevel: "Low/Non-Sedating",
  },
  {
    id: "fexofenadine",
    name: "Fexofenadine HCl",
    href: "/medical/fexofenadine",
    brandExample: "Allegra 120mg / 180mg",
    classType: "2nd-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet (120 mg, 180 mg)",
    adultDose: "120 mg once daily (Rhinitis) or 180 mg once daily (Urticaria)",
    mechanism:
      "Active metabolite of terfenadine; true nonsedating peripheral H1 antagonist with zero blood-brain barrier penetration.",
    clinicalNote:
      "Zero psychomotor impairment (pilot/driver safe). Do NOT take with fruit juices (OATP1A2 inhibition drops bioavailability by 40%).",
    sedationLevel: "Non-Sedating",
  },
  {
    id: "loratadine",
    name: "Loratadine",
    href: "/medical/loratadine",
    brandExample: "Claritin, Lorfast",
    classType: "2nd-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet (10 mg) / Syrup",
    adultDose: "10 mg PO once daily on empty stomach",
    mechanism:
      "Long-acting tricyclic peripheral H1 antagonist; metabolized by CYP3A4/CYP2D6 into active desloratadine.",
    clinicalNote:
      "Reliable non-drowsy daytime choice with clean cardiovascular and central safety profile.",
    sedationLevel: "Non-Sedating",
  },
  {
    id: "desloratadine",
    name: "Desloratadine",
    href: "/medical/desloratadine",
    brandExample: "Clarinex, Deslor",
    classType: "2nd-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet (5 mg)",
    adultDose: "5 mg PO once daily with or without food",
    mechanism:
      "Major active descarboethoxyl metabolite of loratadine; 3–4x higher affinity for H1 receptors with anti-inflammatory cytokine blunting.",
    clinicalNote:
      "Long 27-hour half-life; effective for morning sneezing bursts and ocular symptoms of perennial rhinitis.",
    sedationLevel: "Non-Sedating",
  },
  {
    id: "bilastine",
    name: "Bilastine",
    href: "/medical/bilastine",
    brandExample: "Bilaxten, Bilasure",
    classType: "2nd-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet (20 mg)",
    adultDose: "20 mg PO once daily (1 hr before or 2 hrs after meals)",
    mechanism:
      "Highly selective peripheral H1 blocker; not metabolized by hepatic CYPs and excreted almost entirely unchanged.",
    clinicalNote:
      "Strict food interaction: Must be taken on an empty stomach. Demonstrates negligible brain H1 receptor occupancy.",
    sedationLevel: "Non-Sedating",
  },
  {
    id: "rupatadine",
    name: "Rupatadine Fumarate",
    href: "/medical/rupatadine",
    brandExample: "Rupafin, Smarti",
    classType: "2nd-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet (10 mg)",
    adultDose: "10 mg PO once daily",
    mechanism:
      "Dual-action antagonist: blocks both histamine H1 receptors and Platelet-Activating Factor (PAF) receptors.",
    clinicalNote:
      "Addresses both histamine-induced sneezing and PAF-induced persistent nasal congestion and tissue hyper-reactivity.",
    sedationLevel: "Non-Sedating",
  },
  {
    id: "ebastine",
    name: "Ebastine",
    href: "/medical/ebastine",
    brandExample: "Ebast, Kestine",
    classType: "2nd-Gen Antihistamine",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet (10 mg, 20 mg) / Fast-dissolving",
    adultDose: "10 mg – 20 mg PO once daily",
    mechanism:
      "Piperidine derivative converted via CYP3A4 to active carebastine, selectively inhibiting peripheral H1 receptors for 24+ hours.",
    clinicalNote:
      "Fast-dissolving oral melt formulation available. Excellent option for pollen-induced allergic flare-ups.",
    sedationLevel: "Non-Sedating",
  },

  // --- Leukotriene Receptor Antagonists ---
  {
    id: "montelukast",
    name: "Montelukast Sodium",
    href: "/medical/montelukast",
    brandExample: "Singulair, Montair 10mg",
    classType: "Leukotriene Antagonist",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet (10 mg) / Chewable (4 mg, 5 mg)",
    adultDose: "10 mg PO once daily at bedtime",
    mechanism:
      "Selective CysLT1 receptor antagonist; blocks cysteinyl leukotrienes (LTC4, LTD4, LTE4) to reduce nasal airway edema, mucus hypersecretion, and bronchoconstriction.",
    clinicalNote:
      "FDA Boxed Warning: Monitor for neuropsychiatric changes. Frequently combined with levocetirizine for combined rhinitis + asthma.",
    sedationLevel: "None",
  },

  // --- Oral & Systemic Decongestants ---
  {
    id: "phenylephrine",
    name: "Phenylephrine HCl (Oral)",
    href: "/medical/phenylephrine",
    brandExample: "Sudafed PE, Sinarest component",
    classType: "Oral Decongestant",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet (10 mg) / Liquid",
    adultDose: "10 mg PO every 4 hrs PRN (Max 60 mg/day)",
    mechanism:
      "Selective direct alpha-1 adrenergic receptor agonist; induces vascular smooth muscle constriction in nasal venous sinusoids.",
    clinicalNote:
      "High first-pass gut metabolism gives oral formulations limited efficacy. Contraindicated in uncontrolled severe hypertension.",
    sedationLevel: "None",
  },
  {
    id: "pseudoephedrine",
    name: "Pseudoephedrine HCl",
    href: "/medical/pseudoephedrine",
    brandExample: "Sudafed (Behind-the-counter)",
    classType: "Oral Decongestant",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Oral Tablet (30 mg, 60 mg, 120 mg ER)",
    adultDose: "60 mg PO every 4–6 hrs (Max 240 mg/day)",
    mechanism:
      "Direct and indirect sympathomimetic; stimulates alpha and beta-adrenergic receptors and releases endogenous norepinephrine.",
    clinicalNote:
      "Highly effective oral decongestant. Side effects: tachycardia, insomnia, palpitations, elevated blood pressure.",
    sedationLevel: "None",
  },

  // --- Topical Nasal Decongestants ---
  {
    id: "oxymetazoline",
    name: "Oxymetazoline HCl (0.05%)",
    href: "/medical/oxymetazoline",
    brandExample: "Afrin, Otrivin Oxy, Vicks Sinex",
    classType: "Topical Decongestant",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Nasal Spray / Drops (0.05%)",
    adultDose: "2 – 3 sprays in each nostril BID (Every 10–12 hrs)",
    mechanism:
      "Direct-acting alpha-1 and partial alpha-2 adrenergic agonist; produces intense local vasoconstriction within 2 minutes.",
    clinicalNote:
      "CRITICAL: Strict maximum 3 to 5 consecutive days. Continued use triggers refractory rebound congestion (Rhinitis Medicamentosa).",
    sedationLevel: "None",
  },
  {
    id: "xylometazoline",
    name: "Xylometazoline HCl (0.1% Adult / 0.05% Peds)",
    href: "/medical/xylometazoline",
    brandExample: "Otrivin, Decon",
    classType: "Topical Decongestant",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Nasal Spray / Drops",
    adultDose: "1 – 2 sprays per nostril every 8–10 hrs (Max 3x/day)",
    mechanism:
      "Imidazoline derivative; binds alpha-adrenergic receptors in nasal mucosa, rapidly shrinking swollen turbinate tissues.",
    clinicalNote:
      "Rapid onset (5 min) with 8–10 hr duration. Rebound hyperemic swelling occurs if used beyond 3–5 days.",
    sedationLevel: "None",
  },
  {
    id: "naphazoline",
    name: "Naphazoline HCl (0.05% – 0.1%)",
    href: "/medical/naphazoline",
    brandExample: "Privine, Naphcon",
    classType: "Topical Decongestant",
    appliesTo: ["rhinorrhea", "sneezing", "allergy"],
    dosageForm: "Nasal Spray / Ophthalmic Drops",
    adultDose: "1 – 2 drops/sprays every 6 hrs PRN",
    mechanism:
      "Potent sympathomimetic with predominant alpha-receptor stimulating activity, blunting local blood flow.",
    clinicalNote:
      "Higher risk of central CNS depression and severe hypotension if accidentally swallowed by young children.",
    sedationLevel: "None",
  },

  // --- Intranasal Steroids & Modern Combos ---
  {
    id: "fluticasone-furoate",
    name: "Fluticasone Furoate Nasal Spray",
    href: "/medical/fluticasone-furoate",
    brandExample: "Avamys, Flomist (27.5 mcg/spray), Spiroflut",
    classType: "Intranasal Corticosteroid / Combo",
    appliesTo: ["allergy"],
    dosageForm: "Nasal Spray (Aerosol Suspension)",
    adultDose:
      "2 sprays per nostril once daily (110 mcg total); reduce to 1 spray once controlled",
    mechanism:
      "Synthetic fluorinated corticosteroid with high glucocorticoid receptor affinity; turns off inflammatory cytokine gene transcription (IL-4, IL-5, IL-13) and halts mucosal eosinophil recruitment.",
    clinicalNote:
      "Gold standard 1st-line therapy for moderate-to-severe Allergic Rhinitis. Takes 12–48 hours for onset; full clinical benefit requires 4–7 days of continuous daily use.",
    sedationLevel: "None",
  },
  {
    id: "azelastine-fluticasone",
    name: "Azelastine HCl + Fluticasone Propionate",
    href: "/medical/azelastine",
    brandExample: "Dymista, Duonase (137 mcg / 50 mcg)",
    classType: "Intranasal Corticosteroid / Combo",
    appliesTo: ["allergy"],
    dosageForm: "Fixed-Dose Combination Nasal Spray",
    adultDose: "1 spray per nostril BID",
    mechanism:
      "Synergistic dual action: Azelastine provides rapid-onset local H1 antihistamine block (< 15 min), while Fluticasone provides sustained steroid anti-inflammatory control.",
    clinicalNote:
      "Clinically superior to either agent alone. Common side effect: transient bitter taste (dysgeusia) if swallowed down the throat.",
    sedationLevel: "Low/Non-Sedating",
  },

  // --- Saline Preparations ---
  {
    id: "sodium-chloride-spray",
    name: "Sodium Chloride Nasal Spray IP (Isotonic / Hypertonic 0.9% - 2.3%)",
    href: "/medical/sodium-chloride-spray",
    brandExample: "Nasoclear",
    classType: "Nasal Saline",
    appliesTo: ["rhinorrhea", "sneezing"],
    dosageForm: "Isotonic (0.9%) / Hypertonic (2.3%) Mist or Rinse",
    adultDose: "2 – 3 sprays or rinses per nostril TID or PRN",
    mechanism:
      "Restores mucosal hydration, mechanically thins tenacious mucus, flushes out trapped allergens/virions, and accelerates ciliary beat frequency.",
    clinicalNote:
      "Completely drug-free and safe for all age groups (infants, pregnancy, elderly). No rebound effect or drug interactions.",
    sedationLevel: "None",
  },

  // --- Immunomodulatory Probiotics ---
  {
    id: "lactobacillus-paracasei-fermentum",
    name: "Lactobacillus paracasei & Lactobacillus fermentum",
    href: "/medical/allerbio",
    brandExample: "Allerbio (LP-33 / GMNL-133 & GM-090 Probiotic Strains)",
    classType: "Immunomodulatory Probiotic",
    appliesTo: ["allergy"],
    dosageForm: "Oral Capsule / Sachet",
    adultDose:
      "1 capsule (2–5 Billion CFU) PO once or twice daily for 4–12 weeks",
    mechanism:
      "Modulates gut-associated lymphoid tissue (GALT) to rebalance Th1/Th2 immune responses—enhancing regulatory T-cells (IL-10, IFN-gamma) while suppressing Th2-driven IgE synthesis, eosinophil recruitment, and mast-cell histamine release.",
    clinicalNote:
      "Adjunctive immunomodulator for perennial and seasonal allergic rhinitis; requires 4–8 weeks of daily intake for full mucosal immune tolerance. Separate by 2 hours from oral antibiotics.",
    sedationLevel: "None",
  },
];

export default function CommonColdPage() {
  const [activeSection, setActiveSection] = useState<
    "all" | "rhinorrhea" | "sneezing" | "allergy"
  >("all");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Clinical Index</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-3">
              <Wind className="w-3.5 h-3.5" /> Respiratory &bull; Module 02
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Common Cold &amp; Upper Airway Reflexes
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Clinical breakdown of upper respiratory defense adaptations:
              Rhinorrhea (mucosal transudation), Sternutation (the trigeminal
              sneeze reflex), and Allergic Rhinitis (Type I IgE
              hypersensitivity).
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Sneeze Velocity
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                up to 160 km/h
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Daily Nasal Mucus
              </span>
              <span className="text-xl font-bold text-cyan-300 font-mono">
                1 – 1.5 Liters
              </span>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="w-full overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1">
            <button
              type="button"
              onClick={() => setActiveSection("all")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeSection === "all"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>All Pathologies</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveSection("rhinorrhea")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeSection === "rhinorrhea"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Droplets className="w-4 h-4 shrink-0" />
              <span>Runny Nose (Rhinorrhea)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveSection("sneezing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeSection === "sneezing"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Wind className="w-4 h-4 shrink-0" />
              <span>Sneezing (Sternutation)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveSection("allergy")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeSection === "allergy"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Allergy (Allergic Rhinitis)</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODULE 1: RUNNY NOSE (RHINORRHEA) */}
        {/* ========================================================================= */}
        {(activeSection === "all" || activeSection === "rhinorrhea") && (
          <section className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    1. Runny Nose (Rhinorrhea)
                  </h2>
                  <span className="text-xs text-slate-400 font-mono">
                    Hypersecretion &bull; Microvascular Transudation
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                ICD-10: R09.82
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                <strong className="text-sm font-bold text-cyan-300 block">
                  What is Rhinorrhea?
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  Rhinorrhea is the excessive discharge of thin, watery, or
                  thick mucopurulent fluid from the nasal cavities. Under normal
                  conditions, nasal goblet cells and submucosal seromucinous
                  glands produce approximately 1 to 1.5 liters of mucus daily to
                  humidify inspired air and trap particulate matter (cleared
                  invisibly toward the pharynx via the mucociliary escalator).
                  Rhinorrhea occurs when output exceeds backward clearance
                  capacity, resulting in anterior drainage.
                </p>
                <div className="pt-2 border-t border-slate-900 text-[11px] text-slate-400">
                  <em>Key Distinction:</em> <strong>Rhinorrhea</strong> is fluid
                  discharge; <strong>Rhinitis</strong> refers to the underlying
                  inflammatory edema of the mucous membranes.
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                <strong className="text-sm font-bold text-cyan-300 block">
                  How Does It Work? (Pathophysiology)
                </strong>
                <ol className="space-y-2 text-slate-300 list-decimal list-inside leading-relaxed">
                  <li>
                    <strong className="text-white">
                      Capillary Vasodilation &amp; Extravasation:
                    </strong>{" "}
                    Inflammatory mediators (Histamine, Bradykinin, Leukotrienes)
                    relax vascular smooth muscle and widen endothelial junctions
                    in the submucosal venous sinusoids, generating excessive
                    plasma transudate.
                  </li>
                  <li>
                    <strong className="text-white">
                      Glandular Hypersecretion:
                    </strong>{" "}
                    Sensory vagal/trigeminal stimulation triggers an axonal
                    reflex that stimulates the{" "}
                    <strong>
                      Vidian nerve (parasympathetic secretomotor fibers)
                    </strong>
                    , releasing Acetylcholine onto muscarinic M3 receptors on
                    submucosal serous glands.
                  </li>
                  <li>
                    <strong className="text-white">Color Evolution:</strong>{" "}
                    Clear watery fluid indicates early viral transudation or
                    allergy; yellow or green color indicates the influx of
                    myeloperoxidase-rich dead neutrophils during the normal
                    clearance phase of viral or bacterial infection (not an
                    automatic indicator for antibiotics).
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <strong className="text-amber-300 font-bold block mb-2">
                  Common Causes
                </strong>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Viral Rhinitis:</strong> Rhinovirus (&gt; 50%),
                    Coronaviruses, RSV, Influenza.
                  </li>
                  <li>
                    <strong>Allergic Triggers:</strong> Pollens, dust mites,
                    animal dander, mold spores.
                  </li>
                  <li>
                    <strong>Vasomotor / Physical:</strong> Cold dry air
                    (skier&apos;s nose), spicy foods (gustatory rhinitis via
                    capsular sensory pathways).
                  </li>
                  <li>
                    <strong>Medication-Induced:</strong> Rhinitis medicamentosa
                    from topical alpha-agonist rebound (e.g., oxymetazoline
                    overuse &gt; 3–5 days).
                  </li>
                  <li>
                    <strong>Critical Red Flag:</strong> Unilateral crystal-clear
                    drainage after head trauma (suspect Cribriform plate
                    fracture &amp; CSF leak; beta-2 transferrin positive).
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <strong className="text-teal-300 font-bold block mb-2">
                  Physiological Purpose &amp; Benefits
                </strong>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Mechanical Lavage:</strong> Dilutes pathogens,
                    irritants, and toxic viral enzymes, continuously washing
                    them out of the nasal vaults.
                  </li>
                  <li>
                    <strong>Immune Delivery:</strong> The fluid carries
                    antimicrobial peptides, Lysozyme, Lactoferrin, and secretory
                    Immunoglobulin A (sIgA) to neutralize microbes.
                  </li>
                  <li>
                    <strong>Thermal Protection:</strong> Enhances heat and
                    moisture exchange to protect the delicate lower bronchial
                    epithelium from desiccating cold air.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <strong className="text-rose-300 font-bold block mb-2">
                  Clinical Consequences &amp; Complications
                </strong>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Nares Dermatitis:</strong> Constant friction from
                    wiping causes superficial epidermal denudation, maceration,
                    and excoriation around the philtrum.
                  </li>
                  <li>
                    <strong>Post-Nasal Drip (PND):</strong> Drainage down the
                    posterior hypopharynx directly stimulates vagal sensory
                    fibers, provoking nocturnal coughing and hoarseness.
                  </li>
                  <li>
                    <strong>Secondary Ostial Obstruction:</strong> Edema
                    obstructs sinus ostia and Eustachian tubes, risking acute
                    bacterial rhinosinusitis and otitis media.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* MODULE 2: SNEEZING (STERNUTATION) */}
        {/* ========================================================================= */}
        {(activeSection === "all" || activeSection === "sneezing") && (
          <section className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Wind className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    2. Sneezing (Sternutation)
                  </h2>
                  <span className="text-xs text-slate-400 font-mono">
                    Brainstem-Mediated High-Velocity Expulsive Reflex
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-950 text-teal-300 border border-slate-800">
                Trigeminal Reflex Arc
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                <strong className="text-sm font-bold text-teal-300 block">
                  What is Sneezing?
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  Sternutation (sneezing) is an involuntary, coordinated
                  convulsive neuro-muscular reflex designed to forcefully expel
                  foreign particles, irritants, allergens, and excess mucus from
                  the nasal cavity. It represents the respiratory tract&apos;s
                  primary anterior aerodynamic defense mechanism (analogous to
                  the cough reflex for the lower bronchial tree).
                </p>
                <div className="pt-2 border-t border-slate-900 text-[11px] text-slate-400">
                  <em>Physical Parameters:</em> Generates intra-thoracic
                  pressures exceeding 100 mmHg, expelling up to 40,000 aerosol
                  droplets at exit velocities reaching 100–160 km/h (60–100
                  mph).
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                <strong className="text-sm font-bold text-teal-300 block">
                  How Does It Work? (The Reflex Arc)
                </strong>
                <ol className="space-y-2 text-slate-300 list-decimal list-inside leading-relaxed">
                  <li>
                    <strong className="text-white">
                      Sensory Afferent Limb:
                    </strong>{" "}
                    Chemical or mechanical stimulation triggers unmyelinated
                    C-fibers and Adelta sensory terminals of the{" "}
                    <strong>
                      Ethmoidal and Maxillary branches of the Trigeminal Nerve
                      (Cranial Nerve V)
                    </strong>
                    .
                  </li>
                  <li>
                    <strong className="text-white">
                      Central Brainstem Integration:
                    </strong>{" "}
                    Afferent impulses travel to the spinal trigeminal nucleus
                    and ascend to the <strong>&quot;Sneeze Center&quot;</strong>{" "}
                    in the lateral rostral medulla oblongata.
                  </li>
                  <li>
                    <strong className="text-white">
                      Motor Efferent Burst:
                    </strong>{" "}
                    The medulla triggers a synchronized motor firing: deep
                    inspiratory gasp (Phrenic nerve) &rarr; glottic closure
                    &rarr; intense contraction of abdominal rectus and internal
                    intercostal muscles (intercostal nerves) &rarr; soft palate
                    (uvula) descends to close the oral cavity forcing the blast
                    predominantly through the nose &rarr; explosive glottic
                    opening.
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <strong className="text-amber-300 font-bold block mb-2">
                  Common Causes
                </strong>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Mucosal Inflammation:</strong> Viral shedding during
                    acute viral coryza (common cold).
                  </li>
                  <li>
                    <strong>Allergic Irritation:</strong> Histaminergic
                    stimulation of sensory nerve terminals in allergic rhinitis.
                  </li>
                  <li>
                    <strong>Physical Irritants:</strong> Airborne dust, ground
                    black pepper (piperine activation of TRPV1 channels), smoke,
                    dry cold wind.
                  </li>
                  <li>
                    <strong>Photic Sneeze Reflex:</strong> Autosomal dominant
                    cholinergic cross-talk (ACHOO syndrome) where sudden bright
                    sunlight stimulates optic nerve fibers that cross-activate
                    the adjacent trigeminal tract.
                  </li>
                  <li>
                    <strong>Snatiation:</strong> Paroxysmal sneezing occurring
                    immediately after a large meal due to gastric distension.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <strong className="text-teal-300 font-bold block mb-2">
                  Physiological Purpose &amp; Benefits
                </strong>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Clearance of Macro-Irritants:</strong> Purges
                    particulate matter and microbes lodged in the turbinates
                    before they reach pulmonary alveoli.
                  </li>
                  <li>
                    <strong>Biochemical Reset:</strong> Sudden aerodynamic shear
                    stress prompts epithelial cilia to beat synchronously and
                    stimulates fresh protective mucus production.
                  </li>
                  <li>
                    <strong>Airway De-obstruction:</strong> Clears thick crusts
                    and mucus plugs that impede laminar nasal breathing.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <strong className="text-rose-300 font-bold block mb-2">
                  Clinical Consequences &amp; Complications
                </strong>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Airborne Transmission:</strong> Generates massive
                    high-velocity bio-aerosol plumes that transmit rhinoviruses,
                    influenza, and SARS-CoV-2 up to 6–8 meters.
                  </li>
                  <li>
                    <strong>Barotrauma from Suppressing Sneezes:</strong>{" "}
                    Pinching the nose and closing the mouth during a sneeze
                    drives high-pressure air backward: can cause{" "}
                    <strong>tympanic membrane rupture</strong>, orbital
                    emphysema, epistaxis, or rarely pharyngeal perforation.
                  </li>
                  <li>
                    <strong>Musculoskeletal Strain:</strong> Violent
                    uncontrolled flexions can trigger acute cervical spine
                    sprains or rib micro-fractures in osteoporotic patients.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* MODULE 3: ALLERGIC RHINITIS (ALLERGY) */}
        {/* ========================================================================= */}
        {(activeSection === "all" || activeSection === "allergy") && (
          <section className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    3. Allergy (Allergic Rhinitis)
                  </h2>
                  <span className="text-xs text-slate-400 font-mono">
                    Type I IgE-Mediated Hypersensitivity Cascade
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-950 text-amber-300 border border-slate-800">
                Gell &amp; Coombs: Type I
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                <strong className="text-sm font-bold text-amber-300 block">
                  What is Allergic Rhinitis?
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  Allergic rhinitis is an immunologically mediated inflammatory
                  disorder of the nasal mucosa triggered by exposure to airborne
                  environmental allergens in genetically predisposed (atopic)
                  individuals. It is characterized clinically by the classic
                  tetrad:{" "}
                  <strong>
                    clear rhinorrhea, paroxysmal sneezing bursts, nasal pruritus
                    (itching), and bilateral nasal congestion
                  </strong>
                  .
                </p>
                <div className="pt-2 border-t border-slate-900 text-[11px] text-slate-400">
                  <em>Subtypes:</em> <strong>Seasonal (Hay Fever)</strong>{" "}
                  driven by pollens vs. <strong>Perennial</strong> driven by
                  year-round indoor antigens (dust mites, animal dander, molds).
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                <strong className="text-sm font-bold text-amber-300 block">
                  How Does It Work? (The Biphasic Immune Cascade)
                </strong>
                <ol className="space-y-2 text-slate-300 list-decimal list-inside leading-relaxed">
                  <li>
                    <strong className="text-white">Sensitization Phase:</strong>{" "}
                    Inhaled allergens are captured by dendritic cells and
                    presented to naive T-cells, promoting differentiation into{" "}
                    <strong>Th2 helper cells</strong>. Th2 cytokines (IL-4,
                    IL-13) induce B-lymphocytes to class-switch and produce{" "}
                    <strong>Allergen-specific IgE</strong>, which binds tightly
                    to high-affinity FcepsilonRI receptors on tissue{" "}
                    <strong>Mast Cells</strong>.
                  </li>
                  <li>
                    <strong className="text-white">
                      Early-Phase Reaction (Minutes):
                    </strong>{" "}
                    Upon re-exposure, the allergen cross-links surface IgE,
                    causing immediate mast cell degranulation. Release of
                    pre-formed <strong>Histamine</strong> acts on H1 receptors
                    on sensory nerves (pruritus, reflex sneezing) and vascular
                    endothelial cells (edema, rhinorrhea).
                  </li>
                  <li>
                    <strong className="text-white">
                      Late-Phase Reaction (4–8 Hours):
                    </strong>{" "}
                    Newly synthesized lipid mediators (Leukotrienes LTC4/LTD4,
                    Prostaglandin D2) and chemotactic cytokines (IL-5) recruit{" "}
                    <strong>Eosinophils, Basophils, and Monocytes</strong>,
                    creating chronic persistent mucosal swelling and refractory
                    nasal obstruction.
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <strong className="text-amber-300 font-bold block mb-2">
                  Common Etiological Triggers
                </strong>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Aeroallergens:</strong> Tree, grass, and weed
                    pollens (Ragweed, Birch, Timothy grass).
                  </li>
                  <li>
                    <strong>House Dust Mites:</strong> Dermatophagoides
                    pteronyssinus fecal pellet antigens.
                  </li>
                  <li>
                    <strong>Indoor Dander:</strong> Feline saliva proteins (Fel
                    d 1) and canine can f 1 proteins.
                  </li>
                  <li>
                    <strong>Fungal Spores:</strong> Alternaria, Cladosporium,
                    and Aspergillus molds.
                  </li>
                  <li>
                    <strong>Occupational Sensitizers:</strong> Flour dust
                    (baker&apos;s asthma/rhinitis), latex, laboratory animals.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <strong className="text-teal-300 font-bold block mb-2">
                  Evolutionary Context &amp; Host Utility
                </strong>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Toxin &amp; Parasite Defense:</strong> The IgE-mast
                    cell axis originally evolved to detect, expel, and
                    neutralize macro-parasites (helminths, roundworms) and
                    environmental venoms.
                  </li>
                  <li>
                    <strong>Aggressive Barrier Flushing:</strong> It
                    orchestrates rapid barrier expulsion through intense
                    secretomotor washing (rhinorrhea) and mechanical blowing
                    (sneezing).
                  </li>
                  <li>
                    <strong>Immunological &quot;False Alarm&quot;:</strong> In
                    developed urban societies, hygiene shifts and lack of
                    parasitic exposure leave the primed Th2 axis to misidentify
                    harmless plant proteins as noxious invaders.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <strong className="text-rose-300 font-bold block mb-2">
                  Clinical Consequences &amp; Sequelae
                </strong>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Atopic Stigmata:</strong> &quot;Allergic
                    Shiners&quot; (infra-orbital venous stasis rings),
                    &quot;Dennie-Morgan folds&quot; (lower eyelid creases), and
                    the transverse nasal crease from frequent upward palm
                    rubbing (&quot;Allergic Salute&quot;).
                  </li>
                  <li>
                    <strong>Sleep Architecture Fragmentation:</strong> Nocturnal
                    turbinate hypertrophy forces chronic mouth breathing, dry
                    mouth, micro-arousals, daytime somnolence, and impaired
                    school/work performance.
                  </li>
                  <li>
                    <strong>United Airway Progression:</strong> Up to 40% of
                    patients with allergic rhinitis have or develop{" "}
                    <strong>Bronchial Asthma</strong>; allergic post-nasal
                    discharge destabilizes lower airway hyper-responsiveness.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 4: COMPARATIVE DIAGNOSTIC MATRIX */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-teal-400" />
            <h3 className="text-base font-bold text-white">
              Differential Diagnosis: Viral Common Cold vs. Allergic Rhinitis
            </h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
            <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
              <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                <tr>
                  <th className="p-3.5">Clinical Feature</th>
                  <th className="p-3.5 text-cyan-300">
                    Viral Common Cold (Acute Coryza)
                  </th>
                  <th className="p-3.5 text-amber-300">
                    Allergic Rhinitis (Hay Fever)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Onset</td>
                  <td className="p-3.5">
                    Gradual over 24–48 hours; begins with scratchy throat
                  </td>
                  <td className="p-3.5 text-amber-300 font-semibold">
                    Immediate / Paroxysmal upon allergen contact
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">
                    Nasal Discharge Quality
                  </td>
                  <td className="p-3.5">
                    Starts clear/watery &rarr; thickens &amp; turns yellow/green
                    by Day 3–5
                  </td>
                  <td className="p-3.5 text-cyan-300 font-bold">
                    Consistently clear, thin, watery (never turns thick/opaque)
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">
                    Sneezing Pattern
                  </td>
                  <td className="p-3.5">Occasional, scattered sneezes</td>
                  <td className="p-3.5 text-teal-300 font-semibold">
                    Explosive bursts (10–20 sneezes consecutively)
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">
                    Itching (Pruritus)
                  </td>
                  <td className="p-3.5 text-slate-400">Absent or minimal</td>
                  <td className="p-3.5 text-rose-300 font-bold">
                    Intense itching of nose, palate, eyes, and inner ear canals
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">
                    Constitutional Symptoms
                  </td>
                  <td className="p-3.5 text-teal-300">
                    Mild low-grade fever, malaise, myalgias, headache
                  </td>
                  <td className="p-3.5 text-slate-400">
                    No fever; fatigue related solely to poor sleep
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Duration</td>
                  <td className="p-3.5">
                    Self-limiting: resolves in 7–10 days
                  </td>
                  <td className="p-3.5 text-amber-300">
                    Persists as long as allergen exposure continues
                    (weeks/months)
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">
                    First-Line Pharmacotherapy
                  </td>
                  <td className="p-3.5">
                    Saline nasal irrigation, oral decongestants, paracetamol
                  </td>
                  <td className="p-3.5 text-emerald-300 font-semibold">
                    Intranasal corticosteroids (Fluticasone), 2nd-gen oral
                    antihistamines
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Clinical Pearls Banner */}
        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-start gap-3">
          <Info className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed space-y-1">
            <strong className="text-white block">
              Clinical Red Flag: Rhinitis Medicamentosa Alert
            </strong>
            <p className="text-slate-400">
              Topical vasoconstrictor sprays (such as Oxymetazoline or
              Xylometazoline) provide near-instant relief by stimulating alpha-1
              and alpha-2 adrenergic receptors. However, continuous use beyond{" "}
              <strong>3 to 5 days</strong> down-regulates endogenous adrenergic
              receptors, producing severe secondary rebound vasodilation and
              chronic mucosal hypertrophy (<em>Rhinitis Medicamentosa</em>) that
              requires oral steroids to break.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 5: PHARMACOTHERAPY & MEDICATION CATALOG */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[11px] font-semibold mb-1.5">
                <Pill className="w-3.5 h-3.5" /> Evidence-Based Therapeutics
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Rhinology &amp; Cold Medication Codex
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Targeted formulations categorized across First/Second-Generation
                Antihistamines, Decongestants, LTRAs, and Intranasal Sprays.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-[11px] font-mono text-slate-400">
                Context:
              </span>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg border bg-slate-900 capitalize border-slate-800 text-teal-300">
                {activeSection === "all"
                  ? "All Conditions (23 Meds)"
                  : activeSection === "rhinorrhea"
                    ? "Runny Nose (Rhinorrhea)"
                    : activeSection === "sneezing"
                      ? "Sneezing (Sternutation)"
                      : "Allergy (Allergic Rhinitis)"}
              </span>
            </div>
          </div>

          <MedicationDirectory
            initialSection={activeSection}
            onSelectCondition={(tab) => setActiveSection(tab)}
          />
        </section>
      </div>
    </div>
  );
}

function MedicationDirectory({
  initialSection,
  onSelectCondition,
}: {
  initialSection: "all" | "rhinorrhea" | "sneezing" | "allergy";
  onSelectCondition: (
    tab: "all" | "rhinorrhea" | "sneezing" | "allergy",
  ) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState<string>("All");

  const classes = [
    "All",
    "1st-Gen Antihistamine",
    "2nd-Gen Antihistamine",
    "Leukotriene Antagonist",
    "Oral Decongestant",
    "Topical Decongestant",
    "Intranasal Corticosteroid / Combo",
    "Nasal Saline",
    "Topical Counterirritant / Rub",
    "Nasal Inhalant",
  ];

  const filteredMeds = useMemo(() => {
    return COLD_MEDICATIONS.filter((med) => {
      const matchesCondition =
        initialSection === "all" || med.appliesTo.includes(initialSection);

      const matchesClass =
        selectedClass === "All" || med.classType === selectedClass;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        med.name.toLowerCase().includes(q) ||
        med.brandExample.toLowerCase().includes(q) ||
        med.classType.toLowerCase().includes(q) ||
        med.mechanism.toLowerCase().includes(q) ||
        med.adultDose.toLowerCase().includes(q);

      return matchesCondition && matchesClass && matchesSearch;
    });
  }, [initialSection, selectedClass, searchQuery]);

  return (
    <div className="space-y-5">
      {/* Search and Class Filter Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by drug (e.g. Cetirizine, Fluticasone, Oxymetazoline)..."
            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/60 transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 bg-slate-800 hover:bg-slate-700 px-1.5 py-0.5 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Drug Class Selector Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors ${
                selectedClass === cls
                  ? "bg-teal-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(20,184,166,0.3)]"
                  : "bg-slate-900/70 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>
          Showing{" "}
          <strong className="text-slate-200 font-mono">
            {filteredMeds.length}
          </strong>{" "}
          therapeutics matching criteria
        </span>
        {initialSection !== "all" && (
          <button
            onClick={() => onSelectCondition("all")}
            className="text-teal-400 hover:text-teal-300 underline font-medium"
          >
            Show All 23 Medications
          </button>
        )}
      </div>

      {/* Medications 3-Column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMeds.map((drug) => {
          const isSedating = drug.sedationLevel === "High Sedation";
          const isTopicalDecongestant =
            drug.classType === "Topical Decongestant";
          const isSteroid =
            drug.classType === "Intranasal Corticosteroid / Combo";
          const isBalmOrInhaler =
            drug.classType === "Topical Counterirritant / Rub" ||
            drug.classType === "Nasal Inhalant";
          const isSaline = drug.classType === "Nasal Saline";

          return (
            <div
              key={drug.id}
              className={`p-5 rounded-2xl border bg-slate-900/40 backdrop-blur-md flex flex-col justify-between group transition-all shadow-lg shadow-black/20 ${
                isTopicalDecongestant
                  ? "border-rose-500/30 hover:border-rose-400/60"
                  : isSteroid
                    ? "border-amber-500/30 hover:border-amber-400/60"
                    : isSaline
                      ? "border-emerald-500/30 hover:border-emerald-400/60"
                      : "border-slate-800/80 hover:border-teal-500/40"
              }`}
            >
              <div>
                {/* Header: Class Badge & Sedation Tag */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      isTopicalDecongestant
                        ? "bg-rose-500/10 text-rose-300 border-rose-500/20"
                        : isSteroid
                          ? "bg-amber-500/10 text-amber-300 border-amber-500/20"
                          : isSaline
                            ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                            : "bg-teal-500/10 text-teal-300 border-teal-500/20"
                    }`}
                  >
                    {drug.classType}
                  </span>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                      isSedating
                        ? "bg-rose-950/60 text-rose-300 border-rose-800/60"
                        : drug.sedationLevel === "Low/Non-Sedating"
                          ? "bg-amber-950/60 text-amber-300 border-amber-800/60"
                          : "bg-slate-950 text-slate-400 border-slate-800"
                    }`}
                  >
                    {drug.sedationLevel}
                  </span>
                </div>

                {/* Drug Name & Brand Examples */}
                {/* ✅ Conditional Link or Plain Title: */}
                <h3 className="text-base font-bold text-white transition-colors">
                  {drug.href ? (
                    <Link
                      href={drug.href}
                      className="inline-flex items-center gap-1.5 hover:text-teal-300 transition-colors group-hover:underline decoration-teal-500/50 underline-offset-4"
                    >
                      <span>{drug.name}</span>
                      <span className="text-[10px] text-teal-400 font-mono font-normal opacity-0 group-hover:opacity-100 transition-opacity">
                        &rarr;
                      </span>
                    </Link>
                  ) : (
                    <span className="group-hover:text-teal-200 transition-colors">
                      {drug.name}
                    </span>
                  )}
                </h3>
                <span className="text-xs text-slate-400 block font-mono mt-0.5 mb-3">
                  e.g., {drug.brandExample}
                </span>

                {/* Indication Scope Tags */}
                <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                  {drug.appliesTo.map((app) => (
                    <span
                      key={app}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-slate-300 border border-slate-800/80 flex items-center gap-1"
                    >
                      {app === "rhinorrhea" && (
                        <Droplets className="w-2.5 h-2.5 text-cyan-400" />
                      )}
                      {app === "sneezing" && (
                        <Wind className="w-2.5 h-2.5 text-teal-400" />
                      )}
                      {app === "allergy" && (
                        <Activity className="w-2.5 h-2.5 text-amber-400" />
                      )}
                      <span className="capitalize">{app}</span>
                    </span>
                  ))}
                </div>

                {/* Dosage & Administration */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-3 font-mono text-xs space-y-1">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Format:</span>
                    <span className="text-slate-200 font-semibold">
                      {drug.dosageForm}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2 pt-1 border-t border-slate-900">
                    <span className="text-slate-400 shrink-0">Adult Dose:</span>
                    <span className="text-teal-300 font-bold text-right leading-tight">
                      {drug.adultDose}
                    </span>
                  </div>
                </div>

                {/* Pharmacodynamics */}
                <div className="mb-3 text-xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold block mb-0.5">
                    Mechanism of Action:
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {drug.mechanism}
                  </p>
                </div>
              </div>

              {/* Clinical Pearl / Warnings */}
              <div
                className={`pt-2.5 border-t text-[11px] p-2.5 rounded-xl flex items-start gap-2 ${
                  isTopicalDecongestant ||
                  drug.clinicalNote.includes("Warning") ||
                  drug.clinicalNote.includes("Contraindicated")
                    ? "bg-rose-950/20 border-rose-900/50 text-rose-300"
                    : "bg-slate-950/40 border-slate-800/60 text-slate-400"
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
                <span className="leading-snug">{drug.clinicalNote}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty Search Fallback */}
      {filteredMeds.length === 0 && (
        <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl">
          <Pill className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-300 mb-1">
            No matching cold or allergy therapeutics found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
            Try adjusting your search query or reset the drug class filter to
            view all formulations.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedClass("All");
              onSelectCondition("all");
            }}
            className="px-4 py-1.5 rounded-lg bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
