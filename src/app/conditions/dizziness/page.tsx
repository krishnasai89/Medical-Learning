"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Compass,
  Activity,
  AlertCircle,
  AlertTriangle,
  ShieldAlert,
  Brain,
  Info,
  CheckCircle2,
  HeartPulse,
  Footprints,
  Sparkles,
  Pill,
  Search,
  BookOpen,
  Layers,
  Stethoscope,
} from "lucide-react";

type DizzinessTypeTab =
  | "vertigo"
  | "presyncope"
  | "disequilibrium"
  | "non-specific";

type VertigoSubTab = "peripheral" | "central";

type MedClassFilter =
  | "All"
  | "Antihistamines / Vestibular Suppressants"
  | "Antiemetics"
  | "Histamine Analogue"
  | "Benzodiazepines"
  | "Migraine Medicines"
  | "Triptans"
  | "CGRP Antagonists"
  | "BP-Supporting Medicines"
  | "Neuropathic Medicines"
  | "Vitamin Preparations"
  | "Iron Preparations"
  | "Antidepressants (SSRI / SNRI)";

interface DizzinessMedicine {
  id: string;
  name: string;
  drugClass: Exclude<MedClassFilter, "All">;
  targetTypes: string;
  mainAction: string;
  usedFor: string;
  cautionAndSideEffects: string;
  keyPearl: string;
}

const DIZZINESS_MEDICINES: DizzinessMedicine[] = [
  // 1. Antihistamines / Vestibular Suppressants
  {
    id: "cinnarizine",
    name: "Cinnarizine (25 mg / 75 mg)",
    drugClass: "Antihistamines / Vestibular Suppressants",
    targetTypes: "Peripheral Vertigo (BPPV, Ménière's, Motion Sickness)",
    mainAction:
      "Dual H1 antihistamine and L-type calcium channel blocker on vestibular hair cells; suppresses labyrinthine firing and improves inner-ear microcirculation.",
    usedFor:
      "Motion sickness prophylaxis, acute peripheral vertigo, Ménière's disease, and tinnitus.",
    cautionAndSideEffects:
      "Drowsiness, dry mouth, weight gain; avoid in Parkinson's disease (blocks striatal D2 receptors and induces drug-induced parkinsonism with chronic use).",
    keyPearl:
      "Do not prescribe for > 2–3 weeks continuously in elderly patients due to extrapyramidal tremor risk.",
  },
  {
    id: "dimenhydrinate",
    name: "Dimenhydrinate (50 mg)",
    drugClass: "Antihistamines / Vestibular Suppressants",
    targetTypes: "Peripheral Vertigo (Motion Sickness, Acute Labyrinthitis)",
    mainAction:
      "Salt of diphenhydramine + 8-chlorotheophylline; blocks central H1 and muscarinic M1 receptors in the vestibular nuclei and vomiting center.",
    usedFor:
      "Motion sickness prevention (take 30–60 min before travel) and acute spinning vertigo with nausea.",
    cautionAndSideEffects:
      "Marked sedation, dry mouth, blurred vision, urinary retention in BPH, narrow-angle glaucoma; avoid driving.",
    keyPearl:
      "Most effective when taken 30–60 minutes prior to travel rather than after vomiting begins.",
  },
  {
    id: "meclizine",
    name: "Meclizine HCl (12.5 mg – 25 mg)",
    drugClass: "Antihistamines / Vestibular Suppressants",
    targetTypes:
      "Peripheral Vertigo (Vestibular Neuritis, Labyrinthitis, Motion Sickness)",
    mainAction:
      "Piperazine H1 antagonist with central anticholinergic activity that reduces labyrinthine excitability and vestibular-cerebellar conduction.",
    usedFor:
      "Acute peripheral vertigo attacks, vestibular neuritis, and motion sickness.",
    cautionAndSideEffects:
      "Less sedating than dimenhydrinate, but still causes drowsiness, dry mouth, and caution in elderly (Beers Criteria), glaucoma, and BPH.",
    keyPearl:
      "Stop vestibular suppressants after 48–72 hours in vestibular neuritis so the brain can complete central vestibular compensation.",
  },
  {
    id: "promethazine",
    name: "Promethazine HCl (12.5 mg – 25 mg)",
    drugClass: "Antihistamines / Vestibular Suppressants",
    targetTypes: "Peripheral Vertigo (Severe Acute Vertigo & Vomiting)",
    mainAction:
      "Phenothiazine H1, muscarinic, and dopamine D2 antagonist; suppresses vestibular nuclei and chemoreceptor trigger zone (CTZ).",
    usedFor:
      "Severe acute vertigo accompanied by intractable nausea and vomiting.",
    cautionAndSideEffects:
      "Profound sedation, extrapyramidal dystonia, orthostatic hypotension; FDA Boxed Warning: STRICTLY CONTRAINDICATED in children < 2 years.",
    keyPearl:
      "Reserve for severe acute vestibular crises where oral intake is compromised by vomiting.",
  },

  // 2. Antiemetics
  {
    id: "ondansetron",
    name: "Ondansetron (4 mg – 8 mg ODT / IV)",
    drugClass: "Antiemetics",
    targetTypes: "Peripheral & Central Vertigo (Acute Nausea & Vomiting)",
    mainAction:
      "Selective 5-HT3 serotonin receptor antagonist in the medullary chemoreceptor trigger zone (CTZ) and vagal GI afferents.",
    usedFor:
      "Controlling severe nausea and vomiting during acute vertigo attacks without causing drowsiness.",
    cautionAndSideEffects:
      "Constipation, headache, QTc interval prolongation (avoid in congenital Long QT or with other QT-prolonging drugs).",
    keyPearl:
      "Stops vomiting without impairing central vestibular compensation or causing heavy sedation.",
  },
  {
    id: "prochlorperazine",
    name: "Prochlorperazine (5 mg – 10 mg)",
    drugClass: "Antiemetics",
    targetTypes: "Peripheral Vertigo (Severe Labyrinthitis / Ménière's Crisis)",
    mainAction:
      "Phenothiazine dopamine D2 receptor antagonist in the CTZ and vestibular pathways; rapidly halts severe vertigo-induced emesis.",
    usedFor:
      "Severe acute vertigo with intractable vomiting (short-term 1–3 days).",
    cautionAndSideEffects:
      "Acute dystonic reactions (oculogyric crisis, torticollis), akathisia, sedation, hypotension; avoid in Parkinson's disease and children < 2 years.",
    keyPearl:
      "Buccal/sublingual formulations bypass the stomach when vomiting prevents swallowing tablets.",
  },

  // 3. Histamine Analogue
  {
    id: "betahistine",
    name: "Betahistine Dihydrochloride (8 mg / 16 mg / 24 mg)",
    drugClass: "Histamine Analogue",
    targetTypes: "Peripheral Vertigo (Ménière's Disease)",
    mainAction:
      "Weak postsynaptic H1 receptor agonist and potent presynaptic H3 receptor antagonist; increases histamine turnover, dilates cochlear/vestibular stria vascularis capillaries, and reduces endolymphatic hydrops pressure.",
    usedFor:
      "Ménière's disease maintenance (reducing vertigo attack frequency, tinnitus, and aural fullness).",
    cautionAndSideEffects:
      "Gastric dyspepsia/heartburn (take with food), headache; contraindicated in pheochromocytoma; use caution in bronchial asthma and active peptic ulcer.",
    keyPearl:
      "Unlike sedating antihistamines, Betahistine promotes central vestibular compensation and causes zero drowsiness.",
  },

  // 4. Benzodiazepines
  {
    id: "diazepam",
    name: "Diazepam (2 mg – 5 mg) / Lorazepam (0.5 mg – 1 mg)",
    drugClass: "Benzodiazepines",
    targetTypes:
      "Peripheral Vertigo (Severe Acute Vestibular Crisis — Short-Term)",
    mainAction:
      "Potentiates GABA-A inhibitory neurotransmission across the vestibular nuclei and vestibulocerebellum, rapidly quieting asymmetric vestibular firing.",
    usedFor:
      "Severe, incapacitating acute vestibular neuritis or Ménière's attack (strictly 24–72 hours).",
    cautionAndSideEffects:
      "Sedation, ataxia/falls, respiratory depression (with opioids/alcohol), physical dependence; delays central vestibular recovery if used > 3 days.",
    keyPearl:
      "Taper off within 48–72 hours so the brainstem can recalibrate balance naturally.",
  },

  // 5. Migraine Medicines (Prophylactics)
  {
    id: "propranolol",
    name: "Propranolol (40 mg – 160 mg/day)",
    drugClass: "Migraine Medicines",
    targetTypes:
      "Central Vertigo (Vestibular Migraine) & Non-Specific Dizziness (Anxiety/Somatic)",
    mainAction:
      "Non-selective beta-1/beta-2 adrenergic antagonist; stabilizes cortical spreading depression, dampens trigeminovascular hypersensitivity, and blunts somatic sympathetic palpitations.",
    usedFor:
      "Vestibular migraine prophylaxis and anxiety-driven somatic dizziness.",
    cautionAndSideEffects:
      "Bradycardia, hypotension, fatigue, cold extremities; STRICTLY CONTRAINDICATED in bronchial asthma, severe bradycardia, and 2nd/3rd-degree AV heart block.",
    keyPearl:
      "Ideal dual-purpose prophylactic when vestibular migraine coexists with hypertension or performance anxiety.",
  },
  {
    id: "topiramate",
    name: "Topiramate (25 mg – 100 mg/day)",
    drugClass: "Migraine Medicines",
    targetTypes: "Central Vertigo (Vestibular Migraine Prophylaxis)",
    mainAction:
      "Blocks voltage-gated Na+ channels, enhances GABA-A activity, antagonizes AMPA/kainate glutamate receptors, and inhibits carbonic anhydrase.",
    usedFor: "Preventive therapy for frequent vestibular migraine episodes.",
    cautionAndSideEffects:
      "Paresthesias (tingling in fingers/toes), cognitive slowing ('word-finding difficulty'), weight loss, kidney stones, acute angle-closure glaucoma; teratogenic in pregnancy.",
    keyPearl:
      "Start low (25 mg at night) and titrate slowly weekly to minimize cognitive brain fog.",
  },
  {
    id: "amitriptyline",
    name: "Amitriptyline (10 mg – 50 mg at bedtime)",
    drugClass: "Migraine Medicines",
    targetTypes:
      "Central Vertigo (Vestibular Migraine) & Non-Specific Dizziness (PPPD)",
    mainAction:
      "Tricyclic antidepressant (SNRI mechanism) that inhibits serotonin and norepinephrine reuptake in descending brainstem pain/vestibular modulatory pathways.",
    usedFor:
      "Vestibular migraine prophylaxis, tension headache dizziness, and PPPD with insomnia.",
    cautionAndSideEffects:
      "Dry mouth, morning drowsiness, constipation, weight gain, orthostatic hypotension, QT prolongation; avoid in elderly (Beers Criteria) and narrow-angle glaucoma.",
    keyPearl:
      "Low bedtime doses (10–25 mg) often prevent vestibular migraine without full antidepressant dosing.",
  },
  {
    id: "venlafaxine",
    name: "Venlafaxine XR (37.5 mg – 150 mg/day)",
    drugClass: "Migraine Medicines",
    targetTypes:
      "Central Vertigo (Vestibular Migraine) & Non-Specific Dizziness (PPPD / Anxiety)",
    mainAction:
      "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI) that stabilizes brainstem vestibular-trigeminal circuits and reduces postural hypervigilance.",
    usedFor:
      "First-line evidence-based prophylaxis for vestibular migraine and Persistent Postural-Perceptual Dizziness (PPPD).",
    cautionAndSideEffects:
      "Nausea, insomnia, dose-dependent blood pressure elevation, sweating; do not stop abruptly (causes severe discontinuation dizziness/brain zaps).",
    keyPearl:
      "Taper gradually when discontinuing to avoid rebound withdrawal dizziness.",
  },

  // 6. Triptans
  {
    id: "sumatriptan",
    name: "Sumatriptan (50 mg – 100 mg PO / 20 mg Nasal)",
    drugClass: "Triptans",
    targetTypes: "Central Vertigo (Acute Vestibular Migraine Attack)",
    mainAction:
      "Selective 5-HT1B/1D serotonin receptor agonist; constricts dilated meningeal blood vessels and inhibits trigeminal CGRP/Substance P release.",
    usedFor:
      "Abortive treatment of acute vestibular migraine attacks (especially when headache accompanies vertigo).",
    cautionAndSideEffects:
      "Chest/neck tightness ('triptan sensations'), flushing, tingling; CONTRAINDICATED in coronary artery disease, uncontrolled hypertension, hemiplegic/basilar migraine, and stroke/TIA history.",
    keyPearl:
      "Nasal spray or subcutaneous forms work best when acute vertigo-induced nausea prevents swallowing pills.",
  },

  // 7. CGRP Antagonists
  {
    id: "ubrogepant-rimegepant",
    name: "Ubrogepant (50–100 mg) & Rimegepant (75 mg ODT)",
    drugClass: "CGRP Antagonists",
    targetTypes: "Central Vertigo (Acute & Preventive Vestibular Migraine)",
    mainAction:
      "Small-molecule Calcitonin Gene-Related Peptide (CGRP) receptor antagonists ('gepants'); block neurogenic vasodilation and trigeminovascular pain/vestibular sensitization without vasoconstriction.",
    usedFor:
      "Acute vestibular migraine attacks (and every-other-day prevention with Rimegepant), especially in patients with cardiovascular contraindications to triptans.",
    cautionAndSideEffects:
      "Mild nausea, somnolence, dry mouth; avoid concomitant strong CYP3A4 inhibitors (ketoconazole, clarithromycin).",
    keyPearl:
      "Safe in patients with coronary artery disease or stroke history because gepants do not constrict blood vessels.",
  },

  // 8. BP-Supporting Medicines
  {
    id: "ors-iv-saline",
    name: "Oral Rehydration Solution (ORS) & IV Normal Saline (0.9% NaCl)",
    drugClass: "BP-Supporting Medicines",
    targetTypes: "Presyncope (Dehydration, Orthostatic Hypotension, Vasovagal)",
    mainAction:
      "Restores intravascular plasma volume, venous return (preload), and cardiac output to maintain cerebral perfusion pressure.",
    usedFor:
      "Hypovolemic presyncope, dehydration, heat exhaustion, and acute orthostatic lightheadedness.",
    cautionAndSideEffects:
      "Monitor fluid volume in decompensated heart failure, severe renal failure, or hypernatremia.",
    keyPearl:
      "Drinking 500 mL of water rapidly over 5 minutes triggers an acute osmopressor reflex that raises standing BP within 15–20 minutes.",
  },
  {
    id: "midodrine",
    name: "Midodrine HCl (2.5 mg – 10 mg TID)",
    drugClass: "BP-Supporting Medicines",
    targetTypes: "Presyncope (Neurogenic Orthostatic Hypotension)",
    mainAction:
      "Prodrug converted to desglymidodrine, a selective peripheral alpha-1 adrenergic agonist that constricts arterioles and venous capacitance beds to raise standing blood pressure.",
    usedFor:
      "Symptomatic neurogenic orthostatic hypotension (Parkinson's, diabetic autonomic neuropathy, MSA).",
    cautionAndSideEffects:
      "Supine hypertension (high BP when lying flat), scalp tingling/piloerection (goosebumps), urinary retention; take last dose at least 4 hours before bedtime and sleep with head elevated.",
    keyPearl:
      "Never take Midodrine within 4 hours of lying down to sleep due to severe supine hypertension risk.",
  },
  {
    id: "fludrocortisone",
    name: "Fludrocortisone Acetate (0.1 mg – 0.2 mg OD)",
    drugClass: "BP-Supporting Medicines",
    targetTypes: "Presyncope (Chronic Orthostatic Hypotension)",
    mainAction:
      "Potent synthetic mineralocorticoid; promotes renal distal-tubule sodium and water reabsorption, expanding plasma volume and sensitizing vascular alpha-receptors.",
    usedFor:
      "Chronic orthostatic hypotension unresponsive to salt/fluid loading and compression stockings.",
    cautionAndSideEffects:
      "Hypokalemia (low potassium—monitor electrolytes), peripheral edema, supine hypertension, heart failure exacerbation.",
    keyPearl:
      "Takes 1–2 weeks to reach full volume-expanding effect; monitor serum potassium regularly.",
  },
  {
    id: "glucose-dextrose",
    name: "Oral Glucose (15–20 g) / IV Dextrose (D10W / D50W)",
    drugClass: "BP-Supporting Medicines",
    targetTypes: "Presyncope (Hypoglycemia)",
    mainAction:
      "Rapidly restores blood glucose concentration (> 70 mg/dL) to reverse neuroglycopenic cerebral energy deprivation.",
    usedFor:
      "Diabetic or fasting hypoglycemic presyncope, diaphoresis, tremor, and near-fainting.",
    cautionAndSideEffects:
      "Follow the '15–15 Rule' (15 g fast carbs, recheck in 15 min) and follow with complex carbohydrate/protein to prevent rebound hypoglycemia.",
    keyPearl:
      "If the patient is drowsy or unable to swallow safely, administer IV Dextrose or IM/intranasal Glucagon—never force oral liquids.",
  },

  // 9. Neuropathic Medicines
  {
    id: "gabapentin-pregabalin",
    name: "Gabapentin (100–300 mg) & Pregabalin (50–150 mg)",
    drugClass: "Neuropathic Medicines",
    targetTypes:
      "Disequilibrium (Painful Peripheral Neuropathy) & Central/PPPD Dizziness",
    mainAction:
      "Binds alpha-2-delta subunits of voltage-gated calcium channels on hyperexcitable sensory neurons, reducing excitatory neurotransmitter release (glutamate, Substance P).",
    usedFor:
      "Diabetic peripheral neuropathy causing sensory ataxia/imbalance and burning foot pain.",
    cautionAndSideEffects:
      "Paradoxically causes dose-dependent dizziness, somnolence, peripheral edema, and gait unsteadiness—start with low bedtime doses and adjust in renal impairment.",
    keyPearl:
      "Start low at night because Gabapentin/Pregabalin themselves can worsen unsteadiness during the first week.",
  },

  // 10. Vitamin Preparations
  {
    id: "methylcobalamin",
    name: "Methylcobalamin / Cyanocobalamin (Vitamin B12 — 1,000–1,500 mcg)",
    drugClass: "Vitamin Preparations",
    targetTypes:
      "Disequilibrium (Peripheral Neuropathy / Dorsal Column Ataxia) & Presyncope (Megaloblastic Anemia)",
    mainAction:
      "Essential cofactor for methionine synthase and myelin sheath synthesis in peripheral sensory nerves and spinal dorsal columns (proprioception) plus red blood cell DNA maturation.",
    usedFor:
      "Vitamin B12 deficiency neuropathy, loss of joint position sense (sensory ataxia), and megaloblastic anemia.",
    cautionAndSideEffects:
      "Exceptionally safe; rare mild acneiform rash or injection-site soreness (IM route).",
    keyPearl:
      "Check serum B12 and methylmalonic acid in elderly patients with unexplained disequilibrium or Metformin/PPI use.",
  },

  // 11. Iron Preparations
  {
    id: "iron-preparations",
    name: "Ferrous Sulfate / Ferrous Ascorbate / IV Ferric Carboxymaltose",
    drugClass: "Iron Preparations",
    targetTypes: "Presyncope (Iron-Deficiency Anemia)",
    mainAction:
      "Replenishes elemental iron stores required for hemoglobin synthesis, restoring arterial oxygen-carrying capacity to the brain.",
    usedFor:
      "Iron-deficiency anemia causing exertional lightheadedness, presyncope, pallor, and fatigue.",
    cautionAndSideEffects:
      "Dark/black stools (harmless), constipation, epigastric nausea; separate by 2 hours from antacids, calcium, tea/coffee, and levothyroxine.",
    keyPearl:
      "Taking oral iron on alternate mornings with Vitamin C improves fractional gut absorption and halves GI upset.",
  },

  // 12. Antidepressants (SSRI / SNRI)
  {
    id: "sertraline-escitalopram",
    name: "Sertraline (25–100 mg) & Escitalopram (5–20 mg)",
    drugClass: "Antidepressants (SSRI / SNRI)",
    targetTypes: "Non-Specific Dizziness (PPPD & Anxiety-Related Dizziness)",
    mainAction:
      "Selective Serotonin Reuptake Inhibitors (SSRIs) that downregulate maladaptive visual-vestibular hypersensitivity and limbic threat hypervigilance in Persistent Postural-Perceptual Dizziness (PPPD).",
    usedFor:
      "First-line pharmacological treatment for PPPD and chronic anxiety-induced dizziness (paired with vestibular rehabilitation).",
    cautionAndSideEffects:
      "Initial transient nausea, mild jitteriness/dizziness during weeks 1–2 (start at half dose), insomnia, sexual side effects, QTc caution with high-dose Escitalopram.",
    keyPearl:
      "Takes 6–8 weeks for full PPPD stabilization; always start at half-dose for the first 7 days.",
  },
];

const MED_CLASSES: MedClassFilter[] = [
  "All",
  "Antihistamines / Vestibular Suppressants",
  "Antiemetics",
  "Histamine Analogue",
  "Benzodiazepines",
  "Migraine Medicines",
  "Triptans",
  "CGRP Antagonists",
  "BP-Supporting Medicines",
  "Neuropathic Medicines",
  "Vitamin Preparations",
  "Iron Preparations",
  "Antidepressants (SSRI / SNRI)",
];

const QUICK_MATCH_TABLE = [
  {
    problem: "BPPV (Positional Spinning < 1 min)",
    treatment: "Epley Manoeuvre (Canalith Repositioning)",
    detail:
      "Physically moves dislodged otoconia crystals out of the semicircular canal; medications do NOT cure BPPV.",
  },
  {
    problem: "Ménière's Disease (Vertigo + Tinnitus + Hearing Loss)",
    treatment: "Betahistine (Selected Cases) + Low-Salt Diet",
    detail:
      "Reduces endolymphatic inner-ear pressure and attack frequency without causing daytime drowsiness.",
  },
  {
    problem: "Motion Sickness (Car, Boat, Flight)",
    treatment: "Dimenhydrinate / Cinnarizine / Meclizine",
    detail:
      "Administer 30–60 minutes before travel to block vestibular H1 and muscarinic receptors.",
  },
  {
    problem: "Acute Vertigo Nausea & Vomiting",
    treatment: "Ondansetron / Prochlorperazine",
    detail:
      "Ondansetron halts vomiting rapidly via 5-HT3 blockade without sedating the brain or slowing recovery.",
  },
  {
    problem: "Vestibular Migraine (Vertigo + Photophobia / Headache)",
    treatment: "Migraine-Specific Treatment (Propranolol, Topiramate, Gepants)",
    detail:
      "Targets trigeminovascular & CGRP pathways rather than standard inner-ear suppressants.",
  },
  {
    problem: "Orthostatic Hypotension (Standing Drop in BP)",
    treatment: "Treat Underlying Cause + ORS / Midodrine / Fludrocortisone",
    detail:
      "Stop offending antihypertensives/diuretics, hydrate with ORS/water bolus, and use compression or Midodrine.",
  },
  {
    problem: "Vitamin B12 Deficiency (Sensory Ataxia / Anemia)",
    treatment: "Vitamin B12 Replacement (Methylcobalamin)",
    detail:
      "Restores dorsal-column proprioceptive myelin sheaths and red blood cell oxygen delivery.",
  },
];

export default function DizzinessPage() {
  const [activeTypeTab, setActiveTypeTab] =
    useState<DizzinessTypeTab>("vertigo");
  const [vertigoSubTab, setVertigoSubTab] =
    useState<VertigoSubTab>("peripheral");

  // Medicine Quick-Revision Filter States
  const [medSearch, setMedSearch] = useState("");
  const [selectedMedClass, setSelectedMedClass] =
    useState<MedClassFilter>("All");

  const filteredMeds = useMemo(() => {
    return DIZZINESS_MEDICINES.filter((med) => {
      const matchesClass =
        selectedMedClass === "All" || med.drugClass === selectedMedClass;
      const q = medSearch.trim().toLowerCase();
      const matchesQuery =
        !q ||
        med.name.toLowerCase().includes(q) ||
        med.drugClass.toLowerCase().includes(q) ||
        med.targetTypes.toLowerCase().includes(q) ||
        med.mainAction.toLowerCase().includes(q) ||
        med.usedFor.toLowerCase().includes(q);
      return matchesClass && matchesQuery;
    });
  }, [medSearch, selectedMedClass]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
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
              <Compass className="w-3.5 h-3.5" /> Neuro-Otology &amp; Balance
              Codex &bull; Condition #04
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Dizziness &amp; Balance Disorders (Bhrama)
            </h1>

            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Ayurvedic Parallel:{" "}
                <strong className="text-amber-300 font-mono">
                  Bhrama (भ्रम) — Vata-Pitta Aggravation in Murdha &amp; Indriya
                  Srotas
                </strong>
                .
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveTypeTab("vertigo")}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 text-xs transition-colors"
                >
                  <strong className="text-cyan-400 font-mono">
                    1. Vertigo
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Peripheral &amp; Central
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTypeTab("presyncope")}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-rose-500/50 text-slate-300 text-xs transition-colors"
                >
                  <strong className="text-rose-400 font-mono">
                    2. Presyncope
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Cerebral Hypoperfusion
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTypeTab("disequilibrium")}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-300 text-xs transition-colors"
                >
                  <strong className="text-amber-400 font-mono">
                    3. Disequilibrium
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Gait / Postural Instability
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTypeTab("non-specific")}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-300 text-xs transition-colors"
                >
                  <strong className="text-indigo-400 font-mono">
                    4. Non-Specific
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    PPPD / Anxiety / Metabolic
                  </span>
                </button>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Structured diagnostic &amp; pharmacology guide separating true{" "}
              <strong>Vertigo (Peripheral vs. Central)</strong>,{" "}
              <strong>Presyncope</strong>, <strong>Disequilibrium</strong>, and{" "}
              <strong>Non-Specific Dizziness</strong>—with targeted medications,
              stroke red flags (HINTS exam), and a complete{" "}
              <strong>
                {DIZZINESS_MEDICINES.length}-agent Dizziness Pharmacology
                Quick-Revision Index
              </strong>
              .
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Clinical Phenotypes
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                4 Core Types
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Dizziness Formulary
              </span>
              <span className="text-xl font-bold text-cyan-300 font-mono">
                {DIZZINESS_MEDICINES.length} Drugs
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1: GENERAL OVERVIEW (WHAT IS DIZZINESS, MECHANISM & TRIAGE)       */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-teal-400 mb-3">
                  <Stethoscope className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    1. What Is Dizziness &amp; How Does Balance Work?
                  </h2>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong>Dizziness</strong> is an umbrella symptom—not a single
                  disease—encompassing four distinct physiological disturbances:
                  false spinning motion (<strong>Vertigo</strong>), impending
                  fainting (<strong>Presyncope</strong>), unsteady walking (
                  <strong>Disequilibrium</strong>), or floating lightheadedness
                  (<strong>Non-Specific Dizziness</strong>).
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>How Balance Works (Tri-Sensory Integration):</strong>{" "}
                  Human spatial orientation relies on continuous real-time
                  agreement between three inputs integrated in the brainstem
                  vestibular nuclei and cerebellum: (1){" "}
                  <strong>Inner-Ear Vestibular Labyrinth</strong> (semicircular
                  canals + otolith organs), (2) <strong>Visual System</strong>{" "}
                  (retina &amp; vestibulo-ocular reflex), and (3){" "}
                  <strong>Proprioception</strong> (joint/muscle stretch
                  receptors via spinal dorsal columns).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                <strong className="text-teal-300 block mb-0.5">
                  Diagnostic Golden Rule (TiTrATE Approach):
                </strong>
                Focus on <strong>Timing &amp; Triggers</strong> (episodic vs.
                continuous; positional vs. standing) rather than vague patient
                descriptions alone to separate benign inner-ear causes from
                stroke or arrhythmia.
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 mb-3">
                  <Brain className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    2. Why Does It Happen? (Core Mechanisms &amp; Safety Rules)
                  </h2>
                </div>
                <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                  <div>
                    <strong className="text-cyan-300">
                      Vestibular Mismatch (Vertigo):
                    </strong>{" "}
                    Asymmetric firing between left and right inner-ear
                    labyrinths or brainstem/cerebellar pathways creates an
                    illusion of spinning movement and involuntary eye jerking (
                    <strong>nystagmus</strong>).
                  </div>
                  <div>
                    <strong className="text-rose-300">
                      Cerebral Hypoperfusion (Presyncope):
                    </strong>{" "}
                    Transient drop in systemic blood pressure, blood volume,
                    glucose, or oxygen delivery starves the cerebral cortex of
                    perfusion—relieved by lying flat.
                  </div>
                  <div>
                    <strong className="text-amber-300">
                      Sensorimotor Failure (Disequilibrium):
                    </strong>{" "}
                    Loss of peripheral nerve proprioception, cerebellar
                    coordination, or basal ganglia motor control causes
                    off-balance walking without head spinning.
                  </div>
                  <div>
                    <strong className="text-indigo-300">
                      Network Hypervigilance (Non-Specific / PPPD):
                    </strong>{" "}
                    Maladaptive visual-vestibular processing, anxiety, or
                    medication side effects produce persistent rocking/floating
                    sensations.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-amber-900/50 mt-4 text-[11px] text-amber-300">
                <strong>Important Point to Remember:</strong> Vestibular
                suppressants (Cinnarizine, Meclizine, Diazepam) treat acute
                symptoms only—limit to <strong>&le; 3 days</strong> in acute
                vestibular loss so the brain can re-learn balance via central
                compensation.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: 4 TABS OF DIZZINESS (VERTIGO | PRESYNCOPE | DISEQUILIBRIUM | NON-SPECIFIC) */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4 border-t border-slate-800/80">
          <div>
            <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
              7-Point Structured Clinical Breakdown
            </span>
            <h2 className="text-2xl font-bold text-white">
              The 4 Types of Dizziness (Subtypes, Mechanisms &amp; Targeted
              Drugs)
            </h2>
          </div>

          {/* 4 Primary Type Tabs */}
          <div className="w-full overflow-x-auto scrollbar-none py-1">
            <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTypeTab("vertigo")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeTypeTab === "vertigo"
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Compass className="w-4 h-4 shrink-0" />
                <span>1. VERTIGO</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTypeTab("presyncope")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeTypeTab === "presyncope"
                    ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <HeartPulse className="w-4 h-4 shrink-0" />
                <span>2. PRESYNCOPE</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTypeTab("disequilibrium")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeTypeTab === "disequilibrium"
                    ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Footprints className="w-4 h-4 shrink-0" />
                <span>3. DISEQUILIBRIUM</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTypeTab("non-specific")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeTypeTab === "non-specific"
                    ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>4. NON-SPECIFIC DIZZINESS</span>
              </button>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* TAB 1: VERTIGO (WITH 2 SUB-TABS: PERIPHERAL VERTIGO & CENTRAL VERTIGO)  */}
          {/* ======================================================================= */}
          {activeTypeTab === "vertigo" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Vertigo 7-Point Master Overview */}
              <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                      Type 01 &bull; Rotational / Illusion of Movement
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Vertigo — Complete 7-Point Clinical Profile
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300 leading-relaxed">
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-cyan-300 block mb-1">
                      1. What Is the Disease?
                    </strong>
                    A false sensation of spinning, whirling, tilting, or
                    swaying—either of oneself or the surrounding room—when
                    completely stationary.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-cyan-300 block mb-1">
                      2. Why Does It Happen? (Mechanism)
                    </strong>
                    Acute asymmetry in tonic neural firing between the left and
                    right inner-ear vestibular labyrinths (peripheral) or
                    brainstem/cerebellar vestibular nuclei (central), triggering
                    the vestibulo-ocular reflex (nystagmus).
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-cyan-300 block mb-1">
                      3. Symptoms &amp; Patient Clues
                    </strong>
                    &quot;The room is spinning around me,&quot; nystagmus,
                    severe nausea/vomiting, sweating, head-motion intolerance,
                    and optional hearing loss/tinnitus.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-emerald-300 block mb-1">
                      4. Medicines &amp; Maneuvers Used
                    </strong>
                    Epley manoeuvre (BPPV), Betahistine (Ménière&apos;s),
                    Cinnarizine, Dimenhydrinate, Meclizine, Promethazine,
                    Prochlorperazine, Ondansetron, Diazepam, or Migraine therapy
                    (central).
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      5. Drug Class &amp; Main Action
                    </strong>
                    Vestibular suppressants (H1/M1 blockers, Ca2+ channel
                    blockers), H3 antagonists (Betahistine), and 5-HT3
                    antiemetics dampen asymmetric labyrinthine firing and halt
                    vomiting.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-amber-900/50">
                    <strong className="text-amber-300 block mb-1">
                      6. Side Effects, Precautions &amp; Distinguishing
                    </strong>
                    <strong>Distinguishing:</strong> True rotational spinning
                    (unlike presyncope fainting or leg-only disequilibrium).{" "}
                    <strong>Precaution:</strong> Stop sedating suppressants
                    after 48–72h to allow brain compensation.
                  </div>
                </div>
              </div>

              {/* 2 Sub-Tabs Inside Vertigo: Peripheral Vertigo vs Central Vertigo */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 gap-1">
                    <button
                      type="button"
                      onClick={() => setVertigoSubTab("peripheral")}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        vertigoSubTab === "peripheral"
                          ? "bg-cyan-500 text-slate-950"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      1A. Peripheral Vertigo (Inner Ear / CN VIII)
                    </button>
                    <button
                      type="button"
                      onClick={() => setVertigoSubTab("central")}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        vertigoSubTab === "central"
                          ? "bg-rose-500 text-slate-950"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      1B. Central Vertigo (Brainstem / Cerebellum)
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">
                    {vertigoSubTab === "peripheral"
                      ? "85% of Vertigo Cases • Unidirectional Horizontal Nystagmus"
                      : "15% of Vertigo Cases • Rule Out Posterior Stroke Immediately"}
                  </span>
                </div>

                {/* SUB-TAB 1A: PERIPHERAL VERTIGO */}
                {vertigoSubTab === "peripheral" && (
                  <div className="space-y-6 text-xs text-slate-300 leading-relaxed">
                    {/* 7-Point Clinical Summary for Peripheral Vertigo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                        <h4 className="text-sm font-bold text-cyan-300">
                          Peripheral Vertigo — Mechanism, Clues &amp;
                          Distinguishing Features
                        </h4>
                        <p>
                          <strong>1. What It Is &amp; 2. Mechanism:</strong>{" "}
                          Dysfunction of the inner-ear semicircular canals,
                          otolith organs (utricle/saccule), or vestibular
                          division of Cranial Nerve VIII.
                        </p>
                        <p>
                          <strong>3. Symptoms &amp; Patient Clues:</strong>{" "}
                          Sudden, intense spinning triggered by head turns,
                          severe nausea/vomiting, unidirectional
                          horizontal-torsional nystagmus suppressed by visual
                          fixation, and optional tinnitus/hearing loss.
                        </p>
                        <p>
                          <strong>
                            7. How to Distinguish From Central Vertigo:
                          </strong>{" "}
                          Normal neurological exam, ability to walk/stand with
                          support, positive Dix-Hallpike (BPPV), or abnormal
                          unilateral Head Impulse Test (vestibular neuritis).
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                        <h4 className="text-sm font-bold text-emerald-300">
                          4. Medicines Used, 5. Drug Class &amp; 6. Precautions
                        </h4>
                        <p>
                          <strong>Medicines Used:</strong>{" "}
                          <strong>Betahistine</strong> (H3 antagonist / H1
                          agonist), <strong>Cinnarizine</strong> (H1 + Ca2+
                          blocker),{" "}
                          <strong>
                            Dimenhydrinate, Meclizine, Promethazine
                          </strong>{" "}
                          (vestibular antihistamines),{" "}
                          <strong>Prochlorperazine, Ondansetron</strong>{" "}
                          (antiemetics), and <strong>Diazepam</strong> (GABA-A
                          vestibular suppressant).
                        </p>
                        <p>
                          <strong>6. Side Effects &amp; Precautions:</strong>{" "}
                          Drowsiness, dry mouth, extrapyramidal stiffness
                          (Cinnarizine/Prochlorperazine), and delayed central
                          compensation if suppressants are taken &gt; 3 days.
                        </p>
                      </div>
                    </div>

                    {/* 5 Subtypes of Peripheral Vertigo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-900/50 space-y-1.5">
                        <strong className="text-cyan-300 block">
                          1. BPPV (Benign Paroxysmal Positional Vertigo)
                        </strong>
                        <p>
                          <strong>Mechanism:</strong> Dislodged calcium
                          carbonate crystals (otoconia) migrate from the utricle
                          into the posterior semicircular canal.
                        </p>
                        <p>
                          <strong>Clues &amp; Treatment:</strong> Brief spinning
                          (&lt; 60 seconds) triggered by rolling over in bed or
                          looking up. Cured by <strong>Epley Manoeuvre</strong>{" "}
                          (drugs only for severe nausea).
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-900/50 space-y-1.5">
                        <strong className="text-cyan-300 block">
                          2. Ménière&apos;s Disease
                        </strong>
                        <p>
                          <strong>Mechanism:</strong> Endolymphatic hydrops
                          (excess fluid pressure distending the membranous
                          labyrinth).
                        </p>
                        <p>
                          <strong>Clues &amp; Treatment:</strong> Classic triad
                          of episodic vertigo (20 min – 12h) + fluctuating
                          low-frequency hearing loss + roaring tinnitus &amp;
                          ear fullness. Managed with low-salt diet +{" "}
                          <strong>Betahistine</strong>.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-900/50 space-y-1.5">
                        <strong className="text-cyan-300 block">
                          3. Vestibular Neuritis
                        </strong>
                        <p>
                          <strong>Mechanism:</strong> Acute viral/post-viral
                          inflammation of the vestibular nerve (sparing the
                          cochlear hearing nerve).
                        </p>
                        <p>
                          <strong>Clues &amp; Treatment:</strong> Continuous
                          severe vertigo for days with vomiting,{" "}
                          <strong>NO hearing loss</strong>. Short-term
                          Meclizine/Ondansetron (&le; 3 days) + early vestibular
                          rehab.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-900/50 space-y-1.5">
                        <strong className="text-cyan-300 block">
                          4. Labyrinthitis
                        </strong>
                        <p>
                          <strong>Mechanism:</strong> Viral or bacterial
                          inflammation of BOTH the vestibular labyrinth and
                          cochlea.
                        </p>
                        <p>
                          <strong>Clues &amp; Treatment:</strong> Continuous
                          vertigo identical to vestibular neuritis{" "}
                          <strong>
                            PLUS acute unilateral hearing loss/tinnitus
                          </strong>
                          . Treated with antiemetics, vestibular suppressants
                          (&le; 3d), and antibiotics if bacterial otitis media.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-900/50 space-y-1.5">
                        <strong className="text-cyan-300 block">
                          5. Motion Sickness
                        </strong>
                        <p>
                          <strong>Mechanism:</strong> Sensory conflict between
                          visual input (e.g., reading inside a moving car) and
                          semicircular canal motion signals.
                        </p>
                        <p>
                          <strong>Clues &amp; Treatment:</strong> Cold sweats,
                          pallor, yawning, nausea, and vomiting during travel.
                          Prevented with{" "}
                          <strong>
                            Dimenhydrinate, Cinnarizine, or Meclizine
                          </strong>{" "}
                          30–60 min pre-travel.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* SUB-TAB 1B: CENTRAL VERTIGO */}
                {vertigoSubTab === "central" && (
                  <div className="space-y-6 text-xs text-slate-300 leading-relaxed">
                    {/* 7-Point Clinical Summary for Central Vertigo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-900/50 space-y-2">
                        <h4 className="text-sm font-bold text-rose-300">
                          Central Vertigo — Mechanism, Clues &amp; Stroke
                          Differentiation
                        </h4>
                        <p>
                          <strong>1. What It Is &amp; 2. Mechanism:</strong>{" "}
                          Dysfunction of central vestibular nuclei in the
                          brainstem, vestibulocerebellum, or cortical vestibular
                          pathways.
                        </p>
                        <p>
                          <strong>3. Symptoms &amp; Patient Clues:</strong>{" "}
                          Milder spinning than peripheral vertigo but{" "}
                          <strong>
                            severe inability to stand/walk unsupported (truncal
                            ataxia)
                          </strong>
                          , direction-changing or purely vertical nystagmus not
                          suppressed by visual fixation, plus &quot;Deadly
                          D&apos;s&quot; (Diplopia, Dysarthria, Dysphagia,
                          Dysmetria).
                        </p>
                        <p>
                          <strong>7. How to Distinguish (HINTS Exam):</strong>{" "}
                          Normal Head Impulse Test + Direction-changing
                          Nystagmus + Skew Deviation ={" "}
                          <strong>Central Posterior Stroke</strong> until proven
                          otherwise by urgent MRI.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                        <h4 className="text-sm font-bold text-amber-300">
                          4. Medicines Used, 5. Drug Class &amp; 6. Precautions
                        </h4>
                        <p>
                          <strong>Medicines Used (Vestibular Migraine):</strong>{" "}
                          <strong>Propranolol</strong> (beta-blocker),{" "}
                          <strong>Topiramate</strong> (anticonvulsant),{" "}
                          <strong>Amitriptyline</strong> (TCA),{" "}
                          <strong>Venlafaxine</strong> (SNRI),{" "}
                          <strong>Sumatriptan</strong> (triptan), and{" "}
                          <strong>Ubrogepant / Rimegepant</strong> (CGRP
                          receptor antagonists).
                        </p>
                        <p>
                          <strong>6. Side Effects &amp; Precautions:</strong>{" "}
                          Emergency neuroimaging (CT/MRI) is mandatory before
                          giving migraine drugs if stroke signs exist; triptans
                          are contraindicated in stroke, CAD, and basilar
                          migraine.
                        </p>
                      </div>
                    </div>

                    {/* 5 Subtypes of Central Vertigo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-900/50 space-y-1.5">
                        <strong className="text-amber-300 block">
                          1. Vestibular Migraine
                        </strong>
                        <p>
                          <strong>Mechanism:</strong> Trigeminovascular CGRP
                          release and cortical spreading depression sensitizing
                          central vestibular nuclei.
                        </p>
                        <p>
                          <strong>Clues &amp; Treatment:</strong> Episodic
                          vertigo (5 min – 72h) with photophobia, phonophobia,
                          visual aura, or migraine history (headache may be
                          absent in 30%). Treated with{" "}
                          <strong>
                            Propranolol, Topiramate, Venlafaxine, Amitriptyline,
                            Ubrogepant, Rimegepant
                          </strong>
                          .
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/80 border border-rose-900/60 space-y-1.5">
                        <strong className="text-rose-300 block">
                          2. Cerebellar Stroke (PICA / AICA / SCA)
                        </strong>
                        <p>
                          <strong>Mechanism:</strong> Acute ischemic occlusion
                          or hemorrhage in the cerebellum compressing the 4th
                          ventricle and brainstem.
                        </p>
                        <p>
                          <strong>Clues &amp; Action:</strong> Sudden-onset
                          vertigo, occipital headache, limb dysmetria
                          (finger-to-nose past-pointing), and inability to
                          stand. <strong>MEDICAL EMERGENCY:</strong> Urgent
                          stroke protocol / neuroimaging.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/80 border border-rose-900/60 space-y-1.5">
                        <strong className="text-rose-300 block">
                          3. Brainstem Stroke (Wallenberg / Lateral Medullary)
                        </strong>
                        <p>
                          <strong>Mechanism:</strong> Vertebrobasilar / PICA
                          ischemia damaging lateral medullary vestibular nuclei
                          and cranial nerve tracts.
                        </p>
                        <p>
                          <strong>Clues &amp; Action:</strong> Vertigo with
                          hoarseness, dysphagia, Horner&apos;s syndrome
                          (ptosis/miosis), and crossed facial/body
                          pain-temperature loss.{" "}
                          <strong>EMERGENCY STROKE CARE.</strong>
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-900/50 space-y-1.5">
                        <strong className="text-indigo-300 block">
                          4. Multiple Sclerosis (MS)
                        </strong>
                        <p>
                          <strong>Mechanism:</strong> Autoimmune demyelinating
                          plaques at the 8th nerve root entry zone or brainstem
                          vestibular pathways.
                        </p>
                        <p>
                          <strong>Clues &amp; Action:</strong> Subacute vertigo
                          in young adults accompanied by internuclear
                          ophthalmoplegia (INO), optic neuritis, or limb
                          numbness; treated with IV methylprednisolone +
                          disease-modifying therapy.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-900/50 space-y-1.5">
                        <strong className="text-indigo-300 block">
                          5. Cerebellar Disorders (Degenerative / Tumor)
                        </strong>
                        <p>
                          <strong>Mechanism:</strong> Spinocerebellar
                          degeneration, Chiari malformation, or posterior fossa
                          mass lesions impairing vestibulocerebellar
                          integration.
                        </p>
                        <p>
                          <strong>Clues &amp; Action:</strong> Progressive
                          downbeat nystagmus, wide-based ataxic gait, and
                          scanning dysarthria; requires MRI and neurology
                          referral.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ======================================================================= */}
          {/* TAB 2: PRESYNCOPE                                                       */}
          {/* ======================================================================= */}
          {activeTypeTab === "presyncope" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* 7-Point Master Profile */}
              <div className="p-6 rounded-2xl border border-rose-500/30 bg-gradient-to-r from-rose-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest block mb-1">
                      Type 02 &bull; Near-Fainting / Transient Cerebral
                      Hypoperfusion
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Presyncope — Complete 7-Point Clinical Profile
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300 leading-relaxed">
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      1. What Is the Disease?
                    </strong>
                    The prodromal sensation of impending fainting or losing
                    consciousness without actual complete loss of consciousness
                    (syncope).
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      2. Why Does It Happen? (Mechanism)
                    </strong>
                    Global reduction in cerebral blood flow, arterial blood
                    pressure, glucose, or oxygen delivery to the reticular
                    activating system and cerebral cortex.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      3. Symptoms &amp; Patient Clues
                    </strong>
                    &quot;I feel like I am about to black out,&quot; tunnel
                    vision / graying out, cold clammy sweat, pallor,
                    palpitations, triggered by standing up quickly—
                    <strong>immediately relieved by lying flat</strong>.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-emerald-300 block mb-1">
                      4. Medicines Used
                    </strong>
                    <strong>Oral Rehydration Solution (ORS)</strong>,{" "}
                    <strong>IV Normal Saline</strong>,{" "}
                    <strong>Midodrine</strong>, <strong>Fludrocortisone</strong>
                    , <strong>Glucose / Dextrose</strong>,{" "}
                    <strong>Iron preparations</strong>, and{" "}
                    <strong>Vitamin B12</strong>.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      5. Drug Class &amp; Main Action
                    </strong>
                    Crystalloid volume expanders (ORS/Saline), alpha-1
                    vasoconstrictors (Midodrine), mineralocorticoids
                    (Fludrocortisone), and hematinics/glucose restore cerebral
                    perfusion and oxygenation.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-amber-900/50">
                    <strong className="text-amber-300 block mb-1">
                      6. Side Effects, Precautions &amp; Distinguishing
                    </strong>
                    <strong>Distinguishing:</strong> Occurs upright/standing, no
                    room spinning, resolves supine. <strong>Precaution:</strong>{" "}
                    Always perform 12-lead ECG to rule out lethal cardiac
                    arrhythmias; avoid Midodrine within 4h of bedtime (supine
                    hypertension).
                  </div>
                </div>
              </div>

              {/* 6 Subtypes / Causes of Presyncope */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-rose-300 block">
                    1. Orthostatic Hypotension
                  </strong>
                  <p>
                    Drop in systolic BP &ge; 20 mmHg or diastolic BP &ge; 10
                    mmHg within 3 minutes of standing due to autonomic failure
                    or antihypertensive/diuretic drugs. Managed by stopping
                    culprit drugs, ORS, <strong>Midodrine</strong>, or{" "}
                    <strong>Fludrocortisone</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-rose-300 block">
                    2. Dehydration / Hypovolemia
                  </strong>
                  <p>
                    Intravascular fluid depletion from diarrhea, vomiting,
                    fever, heat, or diuretics reduces cardiac preload. Treated
                    with <strong>Oral Rehydration Solution (ORS)</strong> or{" "}
                    <strong>IV Normal Saline (0.9% NaCl)</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-rose-300 block">
                    3. Hypoglycemia
                  </strong>
                  <p>
                    Blood glucose &lt; 70 mg/dL (insulin/sulfonylurea excess or
                    prolonged fasting) causes tremor, sweating, and
                    near-fainting. Reversed immediately with{" "}
                    <strong>Oral Glucose (15–20 g)</strong> or{" "}
                    <strong>IV Dextrose</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-rose-900/60 space-y-1.5">
                  <strong className="text-rose-300 block">
                    4. Cardiac Arrhythmia (Red Flag)
                  </strong>
                  <p>
                    Bradyarrhythmias (AV block, sick sinus) or
                    ventricular/supraventricular tachycardias abruptly drop
                    cardiac output even while seated/supine. Requires urgent{" "}
                    <strong>12-lead ECG</strong> and
                    cardiology/antiarrhythmic/pacemaker care.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-rose-300 block">
                    5. Vasovagal Episode (Neurocardiogenic)
                  </strong>
                  <p>
                    Reflex parasympathetic surge + sympathetic withdrawal
                    triggered by pain, fear, prolonged standing, or sight of
                    blood—causing sudden bradycardia and vasodilation. Managed
                    with supine leg elevation, counter-pressure maneuvers, and{" "}
                    <strong>ORS hydration</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-rose-300 block">
                    6. Anemia (Iron or Vitamin B12 Deficiency)
                  </strong>
                  <p>
                    Low hemoglobin reduces oxygen delivery to the brain during
                    exertion or standing. Treated with{" "}
                    <strong>Iron preparations</strong> (iron-deficiency) or{" "}
                    <strong>Vitamin B12</strong> (megaloblastic anemia).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================================= */}
          {/* TAB 3: DISEQUILIBRIUM                                                   */}
          {/* ======================================================================= */}
          {activeTypeTab === "disequilibrium" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* 7-Point Master Profile */}
              <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Footprints className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                      Type 03 &bull; Postural Instability &amp; Gait
                      Unsteadiness
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Disequilibrium — Complete 7-Point Clinical Profile
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300 leading-relaxed">
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-amber-300 block mb-1">
                      1. What Is the Disease?
                    </strong>
                    A sensation of physical unsteadiness, wobbliness, or loss of
                    balance while standing or walking, without any head spinning
                    or fainting sensation.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-amber-300 block mb-1">
                      2. Why Does It Happen? (Mechanism)
                    </strong>
                    Impaired sensorimotor integration due to peripheral sensory
                    nerve damage (loss of foot proprioception), cerebellar
                    coordination deficits, extrapyramidal rigidity, or bilateral
                    vestibular/visual loss.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-amber-300 block mb-1">
                      3. Symptoms &amp; Patient Clues
                    </strong>
                    &quot;My dizziness is in my legs/feet, not my head,&quot;
                    veering when walking, markedly worse in the dark or on
                    uneven ground (positive Romberg sign), and{" "}
                    <strong>absent when sitting or lying down</strong>.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-emerald-300 block mb-1">
                      4. Medicines Used
                    </strong>
                    <strong>Gabapentin</strong>, <strong>Pregabalin</strong>,{" "}
                    <strong>Methylcobalamin (Vitamin B12)</strong>,{" "}
                    <strong>Levodopa + Carbidopa</strong>, and disease-specific
                    therapies + physical/balance therapy.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      5. Drug Class &amp; Main Action
                    </strong>
                    Alpha-2-delta calcium channel modulators
                    (Gabapentin/Pregabalin), neurotropic myelin cofactors
                    (Methylcobalamin), and dopaminergic precursors (Levodopa)
                    restore nerve conduction and motor control.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-amber-900/50">
                    <strong className="text-amber-300 block mb-1">
                      6. Side Effects, Precautions &amp; Distinguishing
                    </strong>
                    <strong>Distinguishing:</strong> Occurs strictly on
                    feet/walking; disappears completely when seated.{" "}
                    <strong>Precaution:</strong> Avoid sedating
                    antihistamines/benzodiazepines—they sharply increase fall
                    and hip-fracture risk in elderly patients.
                  </div>
                </div>
              </div>

              {/* 6 Subtypes / Causes of Disequilibrium */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-amber-300 block">
                    1. Peripheral Neuropathy (Diabetic / B12)
                  </strong>
                  <p>
                    Loss of large-fiber proprioception and vibration sense in
                    the feet causes &quot;sensory ataxia&quot; (worse in dark).
                    Managed with glycemic control,{" "}
                    <strong>Methylcobalamin</strong>, and{" "}
                    <strong>Gabapentin / Pregabalin</strong> for neuropathic
                    pain.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-amber-300 block">
                    2. Cerebellar Ataxia
                  </strong>
                  <p>
                    Cerebellar degeneration, alcohol toxicity, phenytoin/lithium
                    toxicity, or stroke causes wide-based drunken gait and
                    past-pointing. Managed by removing toxins, physical therapy,
                    and disease-specific neurology care.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-amber-300 block">
                    3. Parkinsonism
                  </strong>
                  <p>
                    Substantia nigra dopamine depletion causes shuffling gait,
                    freezing, stooped posture, and loss of postural righting
                    reflexes. Treated with <strong>Levodopa + Carbidopa</strong>{" "}
                    and gait rehabilitation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-amber-300 block">
                    4. Vision-Related Imbalance
                  </strong>
                  <p>
                    Cataracts, macular degeneration, or new
                    multifocal/progressive eyeglass prescriptions deprive the
                    brain of visual spatial anchors. Managed via ophthalmology
                    correction.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-amber-300 block">
                    5. Bilateral Vestibular Dysfunction
                  </strong>
                  <p>
                    Ototoxic antibiotics (gentamicin) or bilateral labyrinthine
                    loss cause oscillopsia (bouncing vision when walking) and
                    severe unsteadiness in the dark. Treated with{" "}
                    <strong>vestibular rehabilitation therapy</strong> (avoid
                    suppressants).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-amber-300 block">
                    6. Age-Related Balance Impairment (Presbyastasis)
                  </strong>
                  <p>
                    Multifactorial decline in vision, inner-ear hair cells,
                    ankle proprioception, and quadriceps strength. Managed with
                    strength/balance exercises, assistive canes, and
                    deprescribing sedatives.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================================= */}
          {/* TAB 4: NON-SPECIFIC DIZZINESS                                           */}
          {/* ======================================================================= */}
          {activeTypeTab === "non-specific" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* 7-Point Master Profile */}
              <div className="p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block mb-1">
                      Type 04 &bull; Floating, Rocking, Wooziness &amp;
                      Visual-Vestibular Hypersensitivity
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Non-Specific Dizziness — Complete 7-Point Clinical Profile
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300 leading-relaxed">
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-indigo-300 block mb-1">
                      1. What Is the Disease?
                    </strong>
                    A persistent, vague sensation of internal swaying, rocking,
                    floating, &quot;brain fog,&quot; or wooziness that does not
                    fit true rotational vertigo, near-fainting, or pure leg
                    ataxia.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-indigo-300 block mb-1">
                      2. Why Does It Happen? (Mechanism)
                    </strong>
                    Maladaptive central sensory re-weighting (over-reliance on
                    visual motion cues), limbic-vestibular hypervigilance,
                    medication side effects, or mild metabolic shifts.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-indigo-300 block mb-1">
                      3. Symptoms &amp; Patient Clues
                    </strong>
                    &quot;I feel like I&apos;m rocking on a boat,&quot; worsened
                    in busy supermarkets, scrolling screens, or crowds; normal
                    bedside neurological and ear exams.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-emerald-300 block mb-1">
                      4. Medicines Used
                    </strong>
                    <strong>Sertraline</strong>, <strong>Escitalopram</strong>{" "}
                    (SSRIs), <strong>Venlafaxine</strong> (SNRI),{" "}
                    <strong>Amitriptyline</strong> (TCA), and{" "}
                    <strong>Propranolol</strong> (beta-blocker) + vestibular
                    habituation therapy.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      5. Drug Class &amp; Main Action
                    </strong>
                    SSRIs and SNRIs recalibrate serotonergic/noradrenergic
                    vestibular-limbic networks, reducing postural hypervigilance
                    and visual motion sensitivity.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/75 border border-amber-900/50">
                    <strong className="text-amber-300 block mb-1">
                      6. Side Effects, Precautions &amp; Distinguishing
                    </strong>
                    <strong>Distinguishing:</strong> Chronic (&ge; 3 months)
                    non-spinning rocking worsened by complex visual
                    environments. <strong>Precaution:</strong> Start SSRIs/SNRIs
                    at half-dose for week 1 and never stop Venlafaxine abruptly.
                  </div>
                </div>
              </div>

              {/* 5 Subtypes / Causes of Non-Specific Dizziness */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-indigo-900/50 space-y-1.5">
                  <strong className="text-indigo-300 block">
                    1. Persistent Postural-Perceptual Dizziness (PPPD)
                  </strong>
                  <p>
                    Chronic (&ge; 3 months) functional vestibular disorder
                    triggered after an acute vertigo event; worsened by upright
                    posture, active/passive motion, and complex visual patterns
                    (grocery aisles). Treated with{" "}
                    <strong>Sertraline, Escitalopram, or Venlafaxine</strong> +
                    CBT &amp; vestibular habituation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-indigo-300 block">
                    2. Anxiety-Related Dizziness
                  </strong>
                  <p>
                    Panic attacks, generalized anxiety, or hyperventilation
                    (hypocapnic cerebral vasoconstriction) cause
                    lightheadedness, chest tightness, and tingling fingers.
                    Managed with{" "}
                    <strong>Sertraline, Escitalopram, or Propranolol</strong> +
                    breathing retraining.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-indigo-300 block">
                    3. Medication-Induced Dizziness
                  </strong>
                  <p>
                    Polypharmacy side effect from antihypertensives, sedatives,
                    anticholinergics, anticonvulsants, or SSRI withdrawal.
                    Managed by auditing and deprescribing/adjusting offending
                    drugs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-indigo-300 block">
                    4. Vestibular Migraine (Non-Spinning Variant)
                  </strong>
                  <p>
                    Presents with chronic motion sensitivity, visual aura, and
                    rocking unsteadiness between or instead of spinning attacks.
                    Treated with{" "}
                    <strong>Venlafaxine, Amitriptyline, or Propranolol</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                  <strong className="text-indigo-300 block">
                    5. Metabolic Dizziness
                  </strong>
                  <p>
                    Mild hyponatremia, hypothyroidism, uremia, or subclinical
                    hypoxia causing diffuse mental fogginess and wooziness.
                    Managed by correcting underlying electrolyte or endocrine
                    labs.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: WHICH MEDICINE TREATS WHICH PROBLEM? (CLINICAL MATCH TABLE)    */}
        {/* ========================================================================= */}
        <section className="space-y-4 pt-6 border-t border-slate-800/80">
          <div>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
              Targeted Condition-to-Therapy Matrix
            </span>
            <h2 className="text-2xl font-bold text-white">
              Which Medicine (or Maneuver) Treats Which Problem?
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
            <table className="w-full text-xs text-left text-slate-300 min-w-[720px]">
              <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                <tr>
                  <th className="p-3.5 text-cyan-300">Clinical Problem</th>
                  <th className="p-3.5 text-emerald-300">
                    First-Line Treatment / Medicine
                  </th>
                  <th className="p-3.5">Clinical Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {QUICK_MATCH_TABLE.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-900/40 transition-colors"
                  >
                    <td className="p-3.5 font-bold text-white">
                      {row.problem}
                    </td>
                    <td className="p-3.5 font-mono text-emerald-300 font-bold">
                      {row.treatment}
                    </td>
                    <td className="p-3.5 text-slate-300">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: COMPLETE DIZZINESS MEDICINE LIST – QUICK REVISION              */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-6 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-400 uppercase tracking-wider mb-1">
                <BookOpen className="w-3.5 h-3.5" /> Quick-Revision Pharmacology
                Index
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Complete Dizziness Medicine List — Quick Revision
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Filter across all 12 pharmacological drug classes used in
                Vertigo, Presyncope, Disequilibrium, and PPPD.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
              Showing{" "}
              <strong className="text-teal-300">{filteredMeds.length}</strong>{" "}
              of <strong>{DIZZINESS_MEDICINES.length}</strong> entries
            </span>
          </div>

          {/* Search & Drug Class Filter Chips */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={medSearch}
                onChange={(e) => setMedSearch(e.target.value)}
                placeholder="Search Betahistine, Cinnarizine, Midodrine, Gepants..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/60"
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

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {MED_CLASSES.map((cls) => (
                <button
                  key={cls}
                  type="button"
                  onClick={() => setSelectedMedClass(cls)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedMedClass === cls
                      ? "bg-teal-500 text-slate-950 shadow-[0_0_12px_rgba(20,184,166,0.35)]"
                      : "bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          {/* Medicine Quick-Revision Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredMeds.map((med) => (
              <div
                key={med.id}
                className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-300 font-bold">
                      {med.drugClass}
                    </span>
                    <h3 className="text-base font-bold text-white mt-2">
                      {med.name}
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-300 mt-0.5">
                      Target Phenotype: {med.targetTypes}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/70 pt-2.5">
                    <div>
                      <strong className="text-teal-300">Main Action: </strong>
                      <span>{med.mainAction}</span>
                    </div>
                    <div>
                      <strong className="text-white">Used For: </strong>
                      <span>{med.usedFor}</span>
                    </div>
                    <div>
                      <strong className="text-amber-300">
                        Side Effects &amp; Precautions:{" "}
                      </strong>
                      <span>{med.cautionAndSideEffects}</span>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-[11px] text-slate-300">
                  <Info className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-teal-300">Clinical Pearl:</strong>{" "}
                    {med.keyPearl}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: EMERGENCY RED FLAGS (STROKE / CARDIAC TRIAGE)                  */}
        {/* ========================================================================= */}
        <section className="p-6 rounded-2xl border border-rose-500/40 bg-slate-900/50 backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="text-base font-bold text-white">
              Emergency Red Flags: When Dizziness Requires Immediate Hospital
              Triage
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/40">
              <strong className="text-rose-300 block mb-1">
                1. Posterior Stroke &quot;Deadly D&apos;s&quot;
              </strong>
              Diplopia (double vision), Dysarthria (slurred speech), Dysphagia
              (trouble swallowing), Dysmetria (limb clumsiness), or inability to
              walk/stand unassisted.
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/40">
              <strong className="text-rose-300 block mb-1">
                2. Sudden Thunderclap / Neck Pain
              </strong>
              Severe occipital headache or neck pain with acute vertigo (rule
              out cerebellar hemorrhage or vertebral artery dissection).
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/40">
              <strong className="text-amber-300 block mb-1">
                3. Cardiac Syncope / Chest Pain
              </strong>
              Dizziness during exertion, chest pain, palpitations, resting heart
              rate &lt; 45 or &gt; 130 bpm, or known structural heart disease.
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/40">
              <strong className="text-amber-300 block mb-1">
                4. Sudden Hearing Loss + Vertigo
              </strong>
              Acute unilateral sensorineural hearing loss with vertigo (rule out
              AICA inner-ear stroke vs. labyrinthitis).
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
