"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Activity,
  AlertCircle,
  AlertTriangle,
  ShieldAlert,
  Info,
  CheckCircle2,
  Sparkles,
  Pill,
  Search,
  BookOpen,
  Layers,
  Stethoscope,
  Flame,
  Eye,
  Compass,
  Clock,
} from "lucide-react";

type PrimaryTab =
  | "overview"
  | "headache-types"
  | "migraine-types"
  | "roadmap"
  | "pharmacology";

type MedClassFilter =
  | "All"
  | "Analgesics & NSAIDs"
  | "Triptans (5-HT1B/1D Agonists)"
  | "Gepants (CGRP Antagonists)"
  | "Ergot Derivatives"
  | "Migraine Preventives"
  | "Cluster & Special Treatments";

interface HeadacheMedicine {
  id: string;
  name: string;
  drugClass: Exclude<MedClassFilter, "All">;
  roadmapStep: string;
  mainAction: string;
  mechanism: string;
  conditionsTreated: string;
  patientType: string;
  sideEffects: string;
  caution: string;
  keyPearl: string;
}

const HEADACHE_MEDICINES: HeadacheMedicine[] = [
  // =========================================================================
  // STEP 1–2: ANALGESICS & NSAIDS (TENSION-TYPE & MILD MIGRAINE)
  // =========================================================================
  {
    id: "paracetamol",
    name: "Paracetamol (Acetaminophen — 500 mg / 1,000 mg)",
    drugClass: "Analgesics & NSAIDs",
    roadmapStep: "Step 1–2: Tension & Mild Migraine",
    mainAction:
      "Central analgesia and antipyresis without gastric irritation or antiplatelet bleeding.",
    mechanism:
      "Inhibits central prostaglandin synthesis (COX-3 / peroxidase site) in the CNS and activates descending serotonergic inhibitory pain pathways.",
    conditionsTreated:
      "Tension-type headache, mild-to-moderate episodic migraine, and headaches in pregnancy.",
    patientType:
      "Adults (500–1,000 mg every 6h; Max 4 g/day), pregnant women (first-line safe analgesic), and patients with peptic ulcers or asthma.",
    sideEffects: "Minimal at therapeutic doses; rare skin rash or mild nausea.",
    caution:
      "Severe hepatic impairment, chronic alcohol use, or unintentional duplication in multi-ingredient cold/headache tablets; limit to < 15 days/month to prevent Medication-Overuse Headache (MOH).",
    keyPearl:
      "Most frequently implicated single agent in Medication-Overuse Headache when taken >= 15 days per month.",
  },
  {
    id: "ibuprofen",
    name: "Ibuprofen (400 mg – 600 mg)",
    drugClass: "Analgesics & NSAIDs",
    roadmapStep: "Step 1–2: Tension & Acute Migraine",
    mainAction:
      "Peripheral & central anti-inflammatory analgesia via prostaglandin blockade.",
    mechanism:
      "Non-selectively inhibits COX-1 and COX-2 enzymes, reducing neurogenic meningeal prostaglandin synthesis and pericranial muscle nociception.",
    conditionsTreated:
      "Tension-type headache, acute migraine without aura, and migraine with aura.",
    patientType:
      "Adults (400–600 mg every 6–8h with food; Max 2,400 mg/day) and children >= 6 months.",
    sideEffects: "Gastric heartburn, dyspepsia, nausea, mild dizziness.",
    caution:
      "Active peptic ulcer/GI bleed, chronic kidney disease (CKD), heart failure, NSAID-exacerbated asthma, and 3rd trimester pregnancy.",
    keyPearl:
      "Soluble formulations (ibuprofen lysine/arginine) achieve faster peak absorption during acute migraine.",
  },
  {
    id: "naproxen",
    name: "Naproxen Sodium (500 mg – 550 mg)",
    drugClass: "Analgesics & NSAIDs",
    roadmapStep: "Step 1–2: Migraine & Menstrual Migraine",
    mainAction:
      "Long-acting (12-hour) anti-inflammatory prostaglandin suppression.",
    mechanism:
      "Reversibly inhibits COX-1 and COX-2 with a prolonged elimination half-life (~12–17 hours), preventing migraine headache recurrence.",
    conditionsTreated:
      "Acute migraine (with or without aura), tension-type headache, and short-term mini-prophylaxis of menstrual migraine.",
    patientType:
      "Adults (500–550 mg at onset; may repeat 250–275 mg after 6–8h; Max 1,100–1,375 mg/day) and women with predictable perimenstrual migraine.",
    sideEffects: "Epigastric pain, nausea, heartburn, fluid retention.",
    caution:
      "Peptic ulcer disease, renal impairment, cardiovascular disease, and 3rd trimester pregnancy; take with food or PPI gastroprotection.",
    keyPearl:
      "Often co-administered with Sumatriptan (Treximet synergy) because Naproxen's 12-hour coverage prevents 24-hour headache relapse.",
  },

  // =========================================================================
  // STEP 5–6: TRIPTANS (SUMATRIPTAN -> RIZATRIPTAN -> ZOLMITRIPTAN -> NARATRIPTAN)
  // =========================================================================
  {
    id: "sumatriptan",
    name: "Sumatriptan (50–100 mg PO / 20 mg Nasal / 6 mg SC)",
    drugClass: "Triptans (5-HT1B/1D Agonists)",
    roadmapStep: "Step 5–6: Prototype Triptan",
    mainAction:
      "Selective cranial vasoconstriction + trigeminal CGRP/Substance P blockade.",
    mechanism:
      "Agonizes vascular 5-HT1B receptors to constrict dilated meningeal blood vessels and presynaptic 5-HT1D/1F receptors to halt trigeminal vasoactive neuropeptide release.",
    conditionsTreated:
      "Acute moderate-to-severe migraine (with or without aura), menstrual migraine, and acute cluster headache attacks (6 mg SC injection or 20 mg nasal spray).",
    patientType:
      "Adults (50–100 mg oral at headache onset; may repeat once after 2h; Max 200 mg/day; SC 6 mg for cluster headache).",
    sideEffects:
      "Chest/throat tightness or heaviness ('triptan sensations'), flushing, tingling, drowsiness, dizziness.",
    caution:
      "STRICTLY CONTRAINDICATED in coronary artery disease, Prinzmetal angina, uncontrolled hypertension, prior stroke/TIA, peripheral vascular disease, hemiplegic migraine, and basilar/brainstem migraine.",
    keyPearl:
      "Subcutaneous Sumatriptan (6 mg) acts within 10–15 minutes—making it the fastest abortive medicine for Cluster Headache.",
  },
  {
    id: "rizatriptan",
    name: "Rizatriptan (5 mg – 10 mg Tablet / ODT)",
    drugClass: "Triptans (5-HT1B/1D Agonists)",
    roadmapStep: "Step 5–6: Fast-Acting Oral Triptan",
    mainAction:
      "Rapid-onset oral cranial vasoconstriction and trigeminovascular inhibition.",
    mechanism:
      "High-potency selective 5-HT1B/1D receptor agonist with rapid oral absorption (Tmax ~1 hour) and orally disintegrating tablet (ODT) convenience.",
    conditionsTreated:
      "Acute migraine with or without aura, episodic migraine, and acute menstrual migraine attacks.",
    patientType:
      "Adults & children >= 6 years (weight-based): Adults 10 mg at onset (may repeat after 2h; Max 30 mg/day).",
    sideEffects: "Drowsiness, dizziness, fatigue, chest/neck pressure, nausea.",
    caution:
      "Propranolol increases Rizatriptan plasma levels by 70%—patients taking Propranolol MUST use the 5 mg dose (Max 15 mg/day). Contraindicated in CAD, stroke, uncontrolled HTN, and hemiplegic migraine.",
    keyPearl:
      "Mandatory dose reduction to 5 mg in patients concurrently taking Propranolol for migraine prevention.",
  },
  {
    id: "zolmitriptan",
    name: "Zolmitriptan (2.5 mg – 5 mg PO / Nasal Spray)",
    drugClass: "Triptans (5-HT1B/1D Agonists)",
    roadmapStep: "Step 5–6: Central + Peripheral Triptan",
    mainAction:
      "Peripheral trigeminovascular + central brainstem trigeminal nucleus inhibition.",
    mechanism:
      "Lipophilic 5-HT1B/1D agonist that crosses the blood-brain barrier to inhibit both peripheral meningeal vessels and central trigeminal nucleus caudalis pain neurons.",
    conditionsTreated:
      "Acute migraine with or without aura, menstrual migraine, and acute cluster headache (5 mg nasal spray).",
    patientType:
      "Adults: 2.5 mg oral (or 5 mg nasal spray) at onset; may repeat after 2h (Max 10 mg/day).",
    sideEffects:
      "Tingling/paresthesia, warm sensation, chest/jaw tightness, dry mouth, somnolence.",
    caution:
      "Contraindicated in CAD, uncontrolled hypertension, stroke/TIA, Wolff-Parkinson-White syndrome, hemiplegic/brainstem migraine, and with MAO inhibitors.",
    keyPearl: "Nasal spray bypasses migraine-induced gastroparesis and nausea.",
  },
  {
    id: "naratriptan",
    name: "Naratriptan (1 mg – 2.5 mg) & Frovatriptan (2.5 mg)",
    drugClass: "Triptans (5-HT1B/1D Agonists)",
    roadmapStep: "Step 5–6: Gentle / Long-Acting Triptans",
    mainAction:
      "Smooth, prolonged 5-HT1B/1D agonism with low headache recurrence rates.",
    mechanism:
      "Longer elimination half-life (Naratriptan ~6h; Frovatriptan ~26h) provides sustained receptor binding with fewer 'triptan chest/flushing' side effects.",
    conditionsTreated:
      "Slow-building migraine attacks, patients intolerant of Sumatriptan side effects, and perimenstrual migraine mini-prophylaxis (Frovatriptan 2.5 mg BID).",
    patientType:
      "Adults: Naratriptan 2.5 mg at onset (may repeat once after 4h; Max 5 mg/day).",
    sideEffects:
      "Very well tolerated (placebo-like side effect rate); mild fatigue or dizziness.",
    caution:
      "Contraindicated in severe renal impairment (CrCl < 15 mL/min), severe liver disease, CAD, stroke/TIA, and hemiplegic/brainstem migraine.",
    keyPearl:
      "Naratriptan and Frovatriptan have the lowest side-effect burden and lowest 24-hour relapse rates among triptans.",
  },

  // =========================================================================
  // STEP 7–8: GEPANTS & ERGOT DERIVATIVES
  // =========================================================================
  {
    id: "ubrogepant",
    name: "Ubrogepant (50 mg – 100 mg)",
    drugClass: "Gepants (CGRP Antagonists)",
    roadmapStep: "Step 7–8: Oral Acute Gepant",
    mainAction:
      "Blocks CGRP-mediated neurogenic inflammation and vasodilation without vasoconstriction.",
    mechanism:
      "Selective small-molecule Calcitonin Gene-Related Peptide (CGRP) receptor antagonist; prevents CGRP from triggering trigeminal pain signaling and meningeal mast-cell degranulation.",
    conditionsTreated:
      "Acute migraine attacks (with or without aura) in adults.",
    patientType:
      "Adults (50 mg or 100 mg PO; may take a second dose after >= 2h; Max 200 mg/day), especially patients with heart disease or stroke history who cannot take triptans.",
    sideEffects: "Mild nausea (~2–4%), somnolence (~2%), dry mouth.",
    caution:
      "Contraindicated with strong CYP3A4 inhibitors (Ketoconazole, Itraconazole, Clarithromycin); avoid in end-stage renal disease (CrCl < 15 mL/min).",
    keyPearl:
      "Does NOT cause blood vessel constriction and does NOT cause Medication-Overuse Headache (MOH).",
  },
  {
    id: "rimegepant",
    name: "Rimegepant (75 mg ODT)",
    drugClass: "Gepants (CGRP Antagonists)",
    roadmapStep: "Step 7–8: Dual Acute + Preventive Gepant",
    mainAction:
      "Dual-purpose CGRP receptor blockade for both acute rescue and migraine prevention.",
    mechanism:
      "Orally disintegrating CGRP receptor antagonist with a ~11-hour half-life that aborts active migraine pain and prevents cortical/trigeminal sensitization when dosed every other day.",
    conditionsTreated:
      "Both acute treatment of migraine AND preventive treatment of episodic migraine in adults.",
    patientType:
      "Adults: 75 mg ODT once daily as needed for acute attacks, OR 75 mg ODT every other day for prevention.",
    sideEffects:
      "Nausea (~2%), mild abdominal discomfort, rare hypersensitivity rash.",
    caution:
      "Avoid strong CYP3A4 inhibitors, strong CYP3A4 inducers (Rifampin), severe hepatic impairment (Child-Pugh C), and CrCl < 15 mL/min.",
    keyPearl:
      "The only oral migraine medicine approved for both acute attack rescue and preventive therapy.",
  },
  {
    id: "ergotamine-dhe",
    name: "Ergotamine Tartrate & Dihydroergotamine (DHE — Nasal / IV)",
    drugClass: "Ergot Derivatives",
    roadmapStep: "Step 7–8: Legacy / Refractory Rescue",
    mainAction:
      "Potent, sustained non-selective cranial vasoconstriction and trigeminal inhibition.",
    mechanism:
      "Ergot alkaloids acting as agonists at 5-HT1B/1D, alpha-adrenergic, and dopamine D2 receptors, causing prolonged constriction of intracranial arteries.",
    conditionsTreated:
      "Severe, prolonged, refractory migraine status or cluster headache (DHE IV/nasal; oral Ergotamine is largely superseded by triptans/gepants).",
    patientType:
      "Carefully screened adults without vascular disease under specialist supervision.",
    sideEffects:
      "Severe nausea/vomiting (often requires pre-treatment antiemetic), leg cramps, tingling, chest tightness.",
    caution:
      "STRICTLY CONTRAINDICATED in pregnancy (Category X — stimulates uterine contractions), CAD, hypertension, peripheral vascular disease, liver/kidney failure, and within 24 hours of any triptan or strong CYP3A4 inhibitor (risk of ergotism gangrene).",
    keyPearl:
      "Never take an ergot derivative and a triptan within 24 hours of each other due to additive vasospasm.",
  },

  // =========================================================================
  // STEP 9–10: MIGRAINE PREVENTION (PROPRANOLOL -> TOPIRAMATE -> AMITRIPTYLINE -> VALPROATE -> CANDESARTAN)
  // =========================================================================
  {
    id: "flunarizine",
    name: "Flunarizine Tablets (5 mg / 10 mg — Sibelium)",
    drugClass: "Migraine Preventives",
    roadmapStep: "Step 9–10: Preventive #6 (Ca2+ Channel Blocker)",
    mainAction:
      "Prevents cortical spreading depression, cerebral vasospasm, and vestibular hyperexcitability.",
    mechanism:
      "Selective piperazine-derivative T-type and L-type calcium channel blocker (with mild H1 antihistamine and D2 dopamine receptor blocking activity); prevents intracellular neuronal calcium overload during hypoxia/cortical spreading depression and stabilizes cerebrovascular smooth muscle.",
    conditionsTreated:
      "Episodic and chronic migraine prophylaxis, vestibular migraine, and peripheral/central vertigo.",
    patientType:
      "Adults (5 mg – 10 mg once daily at bedtime; patients > 65 years should start and stay at 5 mg/day) and children >= 6 years (5 mg at night).",
    sideEffects:
      "Drowsiness/somnolence (~20%), increased appetite and weight gain, fatigue, dry mouth, and depressed mood.",
    caution:
      "STRICTLY CONTRAINDICATED in patients with a history of clinical depression, Parkinson's disease, or pre-existing extrapyramidal symptoms (blocks striatal D2 receptors); evaluate response after 2 months and discontinue if no improvement.",
    keyPearl:
      "Always take at bedtime to minimize daytime drowsiness, and monitor for new-onset depression or stiffness/tremor if used beyond 2–3 months.",
  },
  {
    id: "propranolol",
    name: "Propranolol (40 mg – 160 mg/day)",
    drugClass: "Migraine Preventives",
    roadmapStep: "Step 9–10: Preventive #1 (Beta-Blocker)",
    mainAction:
      "Reduces migraine attack frequency and severity by stabilizing cortical and vascular tone.",
    mechanism:
      "Non-selective beta-1/beta-2 adrenergic blocker; inhibits central beta-receptors, reduces cortical spreading depression, and dampens sympathetic trigeminovascular firing.",
    conditionsTreated:
      "Episodic migraine prevention, chronic migraine, vestibular migraine, and migraine with coexisting hypertension or anxiety.",
    patientType:
      "Adults: Start 40 mg/day in divided doses (or ER once daily), titrating to 80–160 mg/day.",
    sideEffects:
      "Fatigue, exercise intolerance, cold hands/feet, bradycardia, hypotension, vivid dreams.",
    caution:
      "STRICTLY CONTRAINDICATED in bronchial asthma/COPD (causes bronchospasm), sinus bradycardia, decompensated heart failure, and 2nd/3rd-degree AV block; reduces Rizatriptan dose ceiling to 5 mg.",
    keyPearl:
      "Taper off gradually over 1–2 weeks rather than stopping abruptly to avoid rebound tachycardia.",
  },
  {
    id: "topiramate",
    name: "Topiramate (25 mg – 100 mg/day)",
    drugClass: "Migraine Preventives",
    roadmapStep: "Step 9–10: Preventive #2 (Anticonvulsant)",
    mainAction:
      "Blocks cortical hyperexcitability and prevents chronic migraine transformation.",
    mechanism:
      "Blocks voltage-gated Na+ channels, enhances GABA-A inhibition, antagonizes AMPA/kainate glutamate receptors, and inhibits carbonic anhydrase.",
    conditionsTreated:
      "Episodic migraine prevention, chronic migraine (>= 15 headache days/month), and vestibular migraine.",
    patientType:
      "Adults & adolescents >= 12y: Start 25 mg at bedtime, increasing by 25 mg weekly to target 50 mg BID.",
    sideEffects:
      "Paresthesias (pins-and-needles in fingers/toes), cognitive slowing ('word-finding difficulty'), appetite/weight loss, altered taste of carbonated drinks.",
    caution:
      "TERATOGENIC in pregnancy (cleft lip/palate—requires reliable contraception), kidney stones (nephrolithiasis), metabolic acidosis, and acute angle-closure glaucoma.",
    keyPearl:
      "Slow weekly titration starting at 25 mg at night dramatically reduces cognitive 'brain fog'.",
  },
  {
    id: "amitriptyline",
    name: "Amitriptyline (10 mg – 50 mg at bedtime)",
    drugClass: "Migraine Preventives",
    roadmapStep: "Step 9–10: Preventive #3 (Tricyclic Antidepressant)",
    mainAction:
      "Enhances descending brainstem pain inhibition and prevents mixed tension-migraine.",
    mechanism:
      "Inhibits presynaptic serotonin and norepinephrine reuptake in descending antinociceptive pathways while modulating central H1 and alpha-adrenergic receptors.",
    conditionsTreated:
      "Migraine prevention (especially when combined with tension-type headache, insomnia, or depression) and vestibular migraine.",
    patientType:
      "Selected adults: Start 10 mg at bedtime, titrating slowly to 25–50 mg at night.",
    sideEffects:
      "Dry mouth, morning drowsiness, constipation, weight gain, blurred vision.",
    caution:
      "QTc prolongation / recent MI, narrow-angle glaucoma, urinary retention (BPH), elderly patients (Beers Criteria), and concurrent MAOIs/SSRIs.",
    keyPearl:
      "Low bedtime doses (10–25 mg) achieve migraine prevention without needing full antidepressant doses.",
  },
  {
    id: "valproate",
    name: "Sodium Valproate / Divalproex Sodium (500 mg – 1,000 mg/day)",
    drugClass: "Migraine Preventives",
    roadmapStep: "Step 9–10: Preventive #4 (GABA Neuromodulator)",
    mainAction:
      "Increases brain GABA levels to suppress trigeminovascular neurogenic inflammation.",
    mechanism:
      "Inhibits GABA transaminase and blocks voltage-gated Na+ and T-type Ca2+ channels, dampening cortical spreading depression and dural plasma protein extravasation.",
    conditionsTreated:
      "Episodic and chronic migraine prevention in refractory adult cases.",
    patientType:
      "Adult males and women without childbearing potential: 250–500 mg twice daily.",
    sideEffects:
      "Weight gain, hair thinning (alopecia), tremor, nausea, thrombocytopenia, hepatotoxicity.",
    caution:
      "ABSOLUTE CONTRAINDICATION in pregnancy and women of childbearing potential without strict pregnancy-prevention program (causes severe neural tube defects and neurodevelopmental delay); contraindicated in liver disease and urea cycle disorders.",
    keyPearl:
      "Never prescribe Valproate as a first-line migraine preventive in women of childbearing age.",
  },
  {
    id: "candesartan",
    name: "Candesartan (8 mg – 16 mg once daily)",
    drugClass: "Migraine Preventives",
    roadmapStep: "Step 9–10: Preventive #5 (ARB)",
    mainAction:
      "Well-tolerated neurovascular migraine prevention without fatigue or weight gain.",
    mechanism:
      "Angiotensin II Type 1 (AT1) receptor blocker; modulates cerebrovascular tone, nitric oxide signaling, and central trigeminal glutamate/CGRP release.",
    conditionsTreated:
      "Episodic and chronic migraine prevention (including patients with mild hypertension).",
    patientType:
      "Adults: Start 4–8 mg once daily, titrating to 16 mg once daily.",
    sideEffects:
      "Placebo-like tolerability; occasional mild dizziness or hypotension.",
    caution:
      "STRICTLY CONTRAINDICATED in pregnancy (fetal renal toxicity), bilateral renal artery stenosis, and hyperkalemia.",
    keyPearl:
      "Preferred modern alternative to Propranolol in asthmatics and athletes because it causes zero fatigue or bronchospasm.",
  },
  {
    id: "botox-cgrp-mabs",
    name: "OnabotulinumtoxinA (Botox) & Anti-CGRP Monoclonal Antibodies",
    drugClass: "Migraine Preventives",
    roadmapStep: "Step 9–10: Chronic Migraine Biologics",
    mainAction:
      "Targeted peripheral neuropeptide / CGRP blockade for Chronic Migraine (>= 15 days/month).",
    mechanism:
      "OnabotulinumtoxinA cleaves SNAP-25 proteins to block CGRP/Substance P exocytosis from pericranial sensory nerves; Anti-CGRP mAbs (Erenumab, Fremanezumab, Galcanezumab) neutralize CGRP ligand or receptor.",
    conditionsTreated:
      "Chronic migraine (>= 15 headache days/month for > 3 months) and refractory episodic migraine.",
    patientType:
      "Adults failing >= 2 oral preventive classes (Botox 155–195 units every 12 weeks; CGRP mAbs monthly/quarterly SC).",
    sideEffects:
      "Injection-site pain, neck stiffness (Botox), constipation (Erenumab).",
    caution:
      "Specialist neurologist administration; avoid anti-CGRP mAbs in pregnancy/lactation.",
    keyPearl:
      "Require 3 to 6 months (2 injection cycles for Botox) to evaluate full preventive response.",
  },

  // =========================================================================
  // STEP 11–12: CLUSTER HEADACHE & SPECIAL TREATMENTS
  // =========================================================================
  {
    id: "oxygen-100",
    name: "100% High-Flow Normobaric Oxygen (12 – 15 L/min)",
    drugClass: "Cluster & Special Treatments",
    roadmapStep: "Step 11–12: Cluster Acute #1",
    mainAction:
      "Aborts acute cluster headache attacks within 15 minutes with zero drug side effects.",
    mechanism:
      "Hyperoxia triggers direct cerebral vasoconstriction and inhibits parasympathetic trigeminal-autonomic reflex outflow in the superior salivatory nucleus.",
    conditionsTreated:
      "First-line acute abortive treatment for Cluster Headache.",
    patientType:
      "All patients with acute cluster headache: Inhale 100% oxygen at 12–15 L/min via a non-rebreather face mask while seated leaning slightly forward for 15–20 minutes.",
    sideEffects: "None when used intermittently for 15–20 minutes.",
    caution:
      "Keep away from open flames/cigarettes (fire hazard); use caution in severe hypercapnic COPD.",
    keyPearl:
      "Must use a tight-fitting non-rebreather mask at 12–15 L/min—low-flow nasal prongs at 2 L/min do NOT work.",
  },
  {
    id: "verapamil",
    name: "Verapamil (240 mg – 480+ mg/day)",
    drugClass: "Cluster & Special Treatments",
    roadmapStep: "Step 11–12: Cluster Preventive #1",
    mainAction:
      "Gold-standard preventive therapy to stop cluster headache cycles.",
    mechanism:
      "Non-dihydropyridine L-type calcium channel blocker that modulates hypothalamic circadian pacemaker excitability and trigeminovascular neurotransmission.",
    conditionsTreated:
      "First-line preventive treatment for episodic and chronic Cluster Headache.",
    patientType:
      "Adults: Start 80 mg three times daily (IR), titrating upward under specialist ECG monitoring.",
    sideEffects:
      "Constipation, peripheral ankle edema, dizziness, bradycardia, hypotension.",
    caution:
      "Causes PR-interval prolongation and AV heart block—mandatory baseline and serial 12-lead ECG before every dose increase; contraindicated in severe LV dysfunction and sick sinus syndrome.",
    keyPearl:
      "Always obtain an ECG before initiating and after each upward dose titration of Verapamil.",
  },
];

const MED_CLASSES: MedClassFilter[] = [
  "All",
  "Analgesics & NSAIDs",
  "Triptans (5-HT1B/1D Agonists)",
  "Gepants (CGRP Antagonists)",
  "Ergot Derivatives",
  "Migraine Preventives",
  "Cluster & Special Treatments",
];

const ROADMAP_STEPS = [
  {
    step: "01 – 02",
    title: "Tension-Type Headache & Core Analgesics",
    focus:
      "Symptoms, stress/muscle triggers, Paracetamol, Ibuprofen, and Naproxen.",
    filter: "Analgesics & NSAIDs" as MedClassFilter,
  },
  {
    step: "03 – 04",
    title: "Migraine Phenotypes (Without Aura & With Aura)",
    focus:
      "Cortical spreading depression, 5–60 min reversible aura, 4–72h headache, early acute therapy.",
    filter: "All" as MedClassFilter,
  },
  {
    step: "05 – 06",
    title: "Triptan Progression Ladder",
    focus:
      "Sumatriptan -> Rizatriptan -> Zolmitriptan -> Naratriptan (5-HT1B/1D vascular contraindications).",
    filter: "Triptans (5-HT1B/1D Agonists)" as MedClassFilter,
  },
  {
    step: "07 – 08",
    title: "Gepants & Ergot Derivatives",
    focus:
      "Ubrogepant, Rimegepant (non-vasoconstrictive CGRP blockers) vs. Ergotamine & Dihydroergotamine.",
    filter: "Gepants (CGRP Antagonists)" as MedClassFilter,
  },
  {
    step: "09 – 10",
    title: "Migraine Prevention Ladder",
    focus:
      "Propranolol -> Topiramate -> Amitriptyline -> Valproate -> Candesartan -> Botox / CGRP mAbs.",
    filter: "Migraine Preventives" as MedClassFilter,
  },
  {
    step: "11 – 12",
    title: "Cluster Headache & Secondary Headaches",
    focus:
      "100% Oxygen (12–15 L/min), SC Sumatriptan, Verapamil (+ ECG), Sinus, Cervicogenic & MOH.",
    filter: "Cluster & Special Treatments" as MedClassFilter,
  },
];

export default function MigraineHeadachesPage() {
  const [activeTab, setActiveTab] = useState<PrimaryTab>("overview");
  const [medSearch, setMedSearch] = useState("");
  const [selectedMedClass, setSelectedMedClass] =
    useState<MedClassFilter>("All");

  const filteredMeds = useMemo(() => {
    return HEADACHE_MEDICINES.filter((med) => {
      const matchesClass =
        selectedMedClass === "All" || med.drugClass === selectedMedClass;
      const q = medSearch.trim().toLowerCase();
      const matchesQuery =
        !q ||
        med.name.toLowerCase().includes(q) ||
        med.drugClass.toLowerCase().includes(q) ||
        med.conditionsTreated.toLowerCase().includes(q) ||
        med.mechanism.toLowerCase().includes(q);
      return matchesClass && matchesQuery;
    });
  }, [medSearch, selectedMedClass]);

  const jumpToPharmacology = (cls: MedClassFilter) => {
    setSelectedMedClass(cls);
    setActiveTab("pharmacology");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-3">
              <Brain className="w-3.5 h-3.5" /> Neurology &amp; Cephalalgia
              Codex &bull; Condition #09
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Migraine &amp; Headaches (Shiroroga)
            </h1>

            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Core Clinical Distinction:{" "}
                <strong className="text-teal-300">Headache</strong> is a general
                symptom with many causes, whereas{" "}
                <strong className="text-indigo-300">Migraine</strong> is a
                complex, genetically influenced{" "}
                <strong>neurological disorder</strong> involving
                trigeminovascular and cortical sensitization.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-400 font-mono">
                    6 Headache Types
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Tension &bull; Migraine &bull; Cluster &bull; Sinus &bull;
                    Cervicogenic &bull; MOH
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-indigo-400 font-mono">
                    9 Migraine Subtypes
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    With/Without Aura &bull; Chronic &bull; Menstrual &bull;
                    Vestibular &bull; Hemiplegic
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Comprehensive clinical module covering primary and secondary
              headaches, all 9 ICHD-3 migraine subtypes, a structured 12-step
              Headache &amp; Migraine Learning Roadmap, and a complete{" "}
              <strong>
                {HEADACHE_MEDICINES.length}-agent 9-Point Pharmacology Index
              </strong>
              .
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Migraine Duration
              </span>
              <span className="text-xl font-bold text-indigo-400 font-mono">
                4 – 72 Hours
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Pharmacology Index
              </span>
              <span className="text-xl font-bold text-teal-300 font-mono">
                {HEADACHE_MEDICINES.length} Medicines
              </span>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="w-full overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Headache vs. Migraine &amp; Red Flags</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("headache-types")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "headache-types"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>6 Types of Headaches</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("migraine-types")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "migraine-types"
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Brain className="w-4 h-4 shrink-0" />
              <span>9 Types of Migraine</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("roadmap")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "roadmap"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>12-Step Learning Roadmap</span>
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
              <span>9-Point Medicine Index ({HEADACHE_MEDICINES.length})</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: HEADACHE VS. MIGRAINE OVERVIEW & SNOOP10 RED FLAGS                 */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3">
                <div className="flex items-center gap-2 text-amber-400">
                  <Stethoscope className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    Headache: A General Clinical Symptom
                  </h2>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Headache</strong> is a broad symptom arising from
                  pain-sensitive structures around the skull—including
                  pericranial muscles, meningeal blood vessels,
                  trigeminal/cervical nerves, and paranasal sinuses (note: brain
                  parenchyma itself has no pain receptors).
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  It can occur as a <strong>primary disorder</strong>{" "}
                  (Tension-type, Migraine, Cluster) or as a{" "}
                  <strong>secondary symptom</strong> triggered by dehydration,
                  fever, sinus infection, cervical spine strain, medication
                  overuse, hypertension, or intracranial emergencies.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-indigo-500/30 bg-slate-900/40 backdrop-blur-md space-y-3">
                <div className="flex items-center gap-2 text-indigo-400">
                  <Brain className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    Migraine: A Complex Neurological Disorder
                  </h2>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Migraine</strong> is NOT simply a bad headache—it is a
                  chronic, episodic{" "}
                  <strong>neurovascular brain disorder</strong> characterized by
                  hyperexcitable sensory processing across 4 phases:{" "}
                  <em>Prodrome</em> (yawning, food cravings, neck stiffness),{" "}
                  <em>Aura</em> (cortical spreading depression),{" "}
                  <em>Headache</em> (trigeminovascular CGRP release), and{" "}
                  <em>Postdrome</em> (&quot;migraine hangover&quot;).
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Because migraine activates trigeminal autonomic fibers, over{" "}
                  <strong>
                    80% of self-diagnosed &quot;sinus headaches&quot;
                  </strong>{" "}
                  are actually migraines presenting with facial pressure and
                  watery nasal discharge.
                </p>
              </div>
            </div>

            {/* Quick Comparison Table: Tension vs Migraine vs Cluster */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[740px]">
                <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Clinical Feature</th>
                    <th className="p-3.5 text-amber-300">
                      Tension-Type Headache
                    </th>
                    <th className="p-3.5 text-indigo-300">Migraine Headache</th>
                    <th className="p-3.5 text-rose-300">Cluster Headache</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Pain Quality</td>
                    <td className="p-3.5">
                      Dull tightness, pressing, non-pulsating (&quot;tight
                      band&quot;)
                    </td>
                    <td className="p-3.5">
                      Moderate-to-severe throbbing / pulsating
                    </td>
                    <td className="p-3.5">
                      Excruciating, piercing, stabbing, or burning
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Location</td>
                    <td className="p-3.5">
                      Bilateral (both sides, forehead, or occiput)
                    </td>
                    <td className="p-3.5">Unilateral (60–70%) or bilateral</td>
                    <td className="p-3.5">
                      Strictly unilateral around/behind one eye
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Duration</td>
                    <td className="p-3.5">30 minutes to 7 days</td>
                    <td className="p-3.5 font-mono text-indigo-300 font-bold">
                      4 – 72 hours (adults)
                    </td>
                    <td className="p-3.5 font-mono text-rose-300 font-bold">
                      15 – 180 minutes (up to 8x/day)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Behavior &amp; Symptoms
                    </td>
                    <td className="p-3.5">
                      No nausea/vomiting; normal routine activity tolerated
                    </td>
                    <td className="p-3.5">
                      Nausea, vomiting, photophobia, phonophobia; prefers dark
                      quiet room
                    </td>
                    <td className="p-3.5">
                      Restless pacing; same-side red tearing eye, ptosis, nasal
                      congestion
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      First-Line Acute Tx
                    </td>
                    <td className="p-3.5">Paracetamol, Ibuprofen, Naproxen</td>
                    <td className="p-3.5">NSAIDs, Triptans, Gepants</td>
                    <td className="p-3.5">
                      100% Oxygen (12–15 L/min) + SC Sumatriptan
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Emergency Red Flags */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-slate-900/50 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Secondary Headache Red Flags (Urgent Neuroimaging / Emergency
                  Evaluation)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/40">
                  <strong className="text-rose-300 block mb-1">
                    1. &quot;Thunderclap&quot; Sudden Peak
                  </strong>
                  Maximum pain intensity reached within{" "}
                  <strong>&lt; 60 seconds</strong> (rule out subarachnoid
                  hemorrhage).
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/40">
                  <strong className="text-rose-300 block mb-1">
                    2. Fever, Neck Stiffness &amp; Rash
                  </strong>
                  Meningismus, altered mental status, or petechial rash (rule
                  out meningitis / encephalitis).
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/40">
                  <strong className="text-amber-300 block mb-1">
                    3. New Headache &gt; Age 50 + Jaw Pain
                  </strong>
                  Temporal artery tenderness, jaw claudication, or vision
                  changes (rule out Giant Cell Arteritis).
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/40">
                  <strong className="text-amber-300 block mb-1">
                    4. Papilledema / Focal Deficit / Cancer
                  </strong>
                  Headache worsened by coughing/Valsalva, persistent motor
                  weakness, or history of malignancy.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: 6 TYPES OF HEADACHES                                               */}
        {/* ========================================================================= */}
        {activeTab === "headache-types" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200 text-xs">
            {/* 1. Tension-Type Headache */}
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
              <div className="space-y-2.5 text-slate-300 leading-relaxed">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
                  Type 01 &bull; Most Common Primary Headache
                </span>
                <h3 className="text-lg font-bold text-white">
                  1. Tension-Type Headache
                </h3>
                <p>
                  <strong className="text-amber-300">
                    Pain &amp; Feeling:
                  </strong>{" "}
                  Mild-to-moderate tightness or pressing pressure—feels like a{" "}
                  <strong>tight band or vise around the head</strong>{" "}
                  (non-throbbing).
                </p>
                <p>
                  <strong className="text-white">Location:</strong> Both sides
                  (bilateral), forehead, temples, or back of the head/neck.
                </p>
                <p>
                  <strong className="text-white">Common Triggers:</strong>{" "}
                  Psychological stress, poor sleep, eye strain, dehydration, and
                  pericranial muscle tension.
                </p>
                <p>
                  <strong className="text-emerald-300">Medicines:</strong>{" "}
                  Paracetamol, Ibuprofen, or Naproxen (when appropriate).
                </p>
              </div>
              <button
                type="button"
                onClick={() => jumpToPharmacology("Analgesics & NSAIDs")}
                className="text-left text-[11px] font-bold text-amber-300 hover:underline pt-2 border-t border-slate-800/70"
              >
                Study Paracetamol, Ibuprofen &amp; Naproxen &rarr;
              </button>
            </div>

            {/* 2. Migraine Headache */}
            <div className="p-6 rounded-2xl border border-indigo-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
              <div className="space-y-2.5 text-slate-300 leading-relaxed">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-bold">
                  Type 02 &bull; Neurovascular Disorder
                </span>
                <h3 className="text-lg font-bold text-white">
                  2. Migraine Headache
                </h3>
                <p>
                  <strong className="text-indigo-300">
                    Pain &amp; Location:
                  </strong>{" "}
                  Moderate to severe, often throbbing or pulsating; frequently
                  on one side (unilateral), but can affect both sides.
                </p>
                <p>
                  <strong className="text-white">Symptoms:</strong> Nausea,
                  vomiting, and marked sensitivity to light (photophobia) and
                  sound (phonophobia); worsened by routine physical activity.
                </p>
                <p>
                  <strong className="text-white">Duration:</strong> Usually{" "}
                  <strong>4–72 hours</strong> in adults.
                </p>
                <p>
                  <strong className="text-emerald-300">Medicines:</strong>{" "}
                  Paracetamol, NSAIDs, Triptans, Gepants; preventive medicines
                  when needed.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  jumpToPharmacology("Triptans (5-HT1B/1D Agonists)")
                }
                className="text-left text-[11px] font-bold text-indigo-300 hover:underline pt-2 border-t border-slate-800/70"
              >
                Study Triptans, Gepants &amp; Preventives &rarr;
              </button>
            </div>

            {/* 3. Cluster Headache */}
            <div className="p-6 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
              <div className="space-y-2.5 text-slate-300 leading-relaxed">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300 font-bold">
                  Type 03 &bull; Trigeminal Autonomic Cephalalgia
                </span>
                <h3 className="text-lg font-bold text-white">
                  3. Cluster Headache
                </h3>
                <p>
                  <strong className="text-rose-300">
                    Pain &amp; Location:
                  </strong>{" "}
                  Extremely severe, excruciating, stabbing or burning pain
                  strictly around one eye on one side.
                </p>
                <p>
                  <strong className="text-white">Symptoms:</strong> Same-side
                  watery eye (lacrimation), red eye, eyelid droop/swelling, and
                  blocked or runny nose, accompanied by intense restlessness.
                </p>
                <p>
                  <strong className="text-white">Pattern:</strong> Repeated
                  attacks (15–180 min) occurring in clusters over weeks, often
                  at the exact same clock time (including waking from sleep).
                </p>
                <p>
                  <strong className="text-emerald-300">Treatment:</strong> 100%
                  high-flow oxygen, Sumatriptan injection or nasal spray;
                  Verapamil for prevention.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  jumpToPharmacology("Cluster & Special Treatments")
                }
                className="text-left text-[11px] font-bold text-rose-300 hover:underline pt-2 border-t border-slate-800/70"
              >
                Study 100% Oxygen &amp; Verapamil &rarr;
              </button>
            </div>

            {/* 4. Sinus-Related Headache */}
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
              <div className="space-y-2.5 text-slate-300 leading-relaxed">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold">
                  Type 04 &bull; Rhinogenic Cephalalgia
                </span>
                <h3 className="text-lg font-bold text-white">
                  4. Sinus-Related Headache
                </h3>
                <p>
                  <strong className="text-cyan-300">
                    Pain &amp; Symptoms:
                  </strong>{" "}
                  Deep fullness or pressure around the forehead, cheeks, or
                  bridge of nose/eyes accompanied by nasal blockage, thick
                  purulent nasal discharge, and reduced smell (hyposmia).
                </p>
                <p>
                  <strong className="text-white">Cause &amp; Treatment:</strong>{" "}
                  Acute viral or bacterial rhinosinusitis. Treated with saline
                  nasal irrigation and intranasal corticosteroids; antibiotics
                  ONLY for confirmed bacterial sinusitis.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-amber-900/50 text-[11px] text-amber-300">
                <strong>Important:</strong> Many headaches mistaken for
                &quot;sinus headaches&quot; are actually migraines triggering
                cranial autonomic nasal symptoms.
              </div>
            </div>

            {/* 5. Cervicogenic Headache */}
            <div className="p-6 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
              <div className="space-y-2.5 text-slate-300 leading-relaxed">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-300 font-bold">
                  Type 05 &bull; Referred Cervical Spine Pain
                </span>
                <h3 className="text-lg font-bold text-white">
                  5. Cervicogenic Headache
                </h3>
                <p>
                  <strong className="text-teal-300">
                    Pain &amp; Location:
                  </strong>{" "}
                  Starts in the neck or occipital base and spreads forward
                  toward the temple/forehead; typically one-sided (side-locked)
                  and provoked by neck movement or sustained awkward posture.
                </p>
                <p>
                  <strong className="text-white">Cause:</strong> Referred pain
                  from upper cervical spine joints (C1–C3), discs, or myofascial
                  trigger points converging on the trigeminocervical nucleus.
                </p>
                <p>
                  <strong className="text-emerald-300">Treatment:</strong>{" "}
                  Targeted physiotherapy, cervical postural exercises, selected
                  pain medicines, and treating the underlying neck disorder.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400">
                Reduced cervical range of motion and tenderness over upper
                cervical facets are key exam clues.
              </div>
            </div>

            {/* 6. Medication-Overuse Headache (MOH) */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
              <div className="space-y-2.5 text-slate-300 leading-relaxed">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/15 border border-rose-500/30 text-rose-300 font-bold">
                  Type 06 &bull; Rebound Headache (&ge; 15 Days / Month)
                </span>
                <h3 className="text-lg font-bold text-white">
                  6. Medication-Overuse Headache (MOH)
                </h3>
                <p>
                  <strong className="text-rose-300">Pain &amp; Cause:</strong>{" "}
                  Frequent or nearly daily chronic headaches (&ge; 15 days/month
                  for &gt; 3 months) caused by regular overuse of acute headache
                  relief medicines.
                </p>
                <p>
                  <strong className="text-white">Associated Medicines:</strong>{" "}
                  Paracetamol/NSAIDs (&ge; 15 days/month), or Triptans, opioids,
                  and caffeine/butalbital combination painkillers (&ge; 10
                  days/month).
                </p>
                <p>
                  <strong className="text-emerald-300">Treatment:</strong>{" "}
                  Clinician-guided reduction or withdrawal of the overused acute
                  medicine paired with appropriate preventive therapy.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-rose-900/50 text-[11px] text-rose-300">
                <strong>Prevention Rule:</strong> Limit triptans/combination
                analgesics to &lt; 10 days/month and simple analgesics to &lt;
                15 days/month.
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: 9 TYPES OF MIGRAINE                                                */}
        {/* ========================================================================= */}
        {activeTab === "migraine-types" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200 text-xs">
            {/* 1. Migraine Without Aura */}
            <div className="p-5 rounded-2xl border border-indigo-500/30 bg-slate-900/40 backdrop-blur-md space-y-2 text-slate-300 leading-relaxed">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-bold">
                Subtype 01 &bull; ~75% of Migraines
              </span>
              <h3 className="text-base font-bold text-white">
                1. Migraine Without Aura
              </h3>
              <p>
                Most common migraine type. Moderate-to-severe
                throbbing/pulsating headache lasting <strong>4–72 hours</strong>{" "}
                in adults, accompanied by nausea and sensitivity to light or
                sound.
              </p>
              <p>
                <strong className="text-emerald-300">Medicines:</strong>{" "}
                Paracetamol, Ibuprofen, Naproxen, Sumatriptan, Rizatriptan,
                Zolmitriptan, Ubrogepant / Rimegepant.
              </p>
            </div>

            {/* 2. Migraine With Aura */}
            <div className="p-5 rounded-2xl border border-indigo-500/30 bg-slate-900/40 backdrop-blur-md space-y-2 text-slate-300 leading-relaxed">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-bold">
                Subtype 02 &bull; Reversible Aura (5 – 60 Min)
              </span>
              <h3 className="text-base font-bold text-white">
                2. Migraine With Aura
              </h3>
              <p>
                Temporary, fully reversible neurological symptoms (cortical
                spreading depression) occurring before or during headache for{" "}
                <strong>5–60 minutes</strong>: flashing lights, zigzag
                fortification spectra, blind spots (scotomas),
                tingling/numbness, or difficulty speaking.
              </p>
              <p>
                <strong className="text-emerald-300">Medicines:</strong>{" "}
                Naproxen, Ibuprofen, Sumatriptan, Rizatriptan, and Gepants.
              </p>
            </div>

            {/* 3. Chronic Migraine */}
            <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2 text-slate-300 leading-relaxed">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 font-bold">
                Subtype 03 &bull; &ge; 15 Days / Month (&gt; 3 Months)
              </span>
              <h3 className="text-base font-bold text-white">
                3. Chronic Migraine
              </h3>
              <p>
                Headache occurring on <strong>15 or more days per month</strong>{" "}
                for more than 3 months, with at least 8 days per month having
                migraine features.
              </p>
              <p>
                <strong className="text-emerald-300">
                  Preventive Medicines:
                </strong>{" "}
                Topiramate, Propranolol, Amitriptyline (selected patients),
                Candesartan, OnabotulinumtoxinA (Botox), and CGRP-targeting
                medicines.
              </p>
            </div>

            {/* 4. Episodic Migraine */}
            <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2 text-slate-300 leading-relaxed">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 font-bold">
                Subtype 04 &bull; &lt; 15 Days / Month
              </span>
              <h3 className="text-base font-bold text-white">
                4. Episodic Migraine
              </h3>
              <p>
                Migraine occurs on <strong>fewer than 15 days per month</strong>
                , with discrete attacks separated by completely symptom-free
                days.
              </p>
              <p>
                <strong className="text-emerald-300">Medicines:</strong>{" "}
                Paracetamol, Ibuprofen, Naproxen, Triptans, Gepants; preventive
                therapy added if attacks are frequent (&ge; 4/month) or
                disabling.
              </p>
            </div>

            {/* 5. Menstrual Migraine */}
            <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2 text-slate-300 leading-relaxed">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-bold">
                Subtype 05 &bull; Estrogen-Withdrawal Triggered
              </span>
              <h3 className="text-base font-bold text-white">
                5. Menstrual Migraine
              </h3>
              <p>
                Triggered by the natural premenstrual drop in estrogen around
                the onset of menstruation (Day -2 to Day +3); can occur without
                aura or with aura.
              </p>
              <p>
                <strong className="text-emerald-300">Medicines:</strong>{" "}
                Naproxen, Sumatriptan, Frovatriptan, Rizatriptan (plus
                short-term perimenstrual mini-prophylaxis in selected patients).
              </p>
            </div>

            {/* 6. Vestibular Migraine */}
            <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md space-y-2 text-slate-300 leading-relaxed">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-bold">
                Subtype 06 &bull; Vertigo-Predominant Migraine
              </span>
              <h3 className="text-base font-bold text-white">
                6. Vestibular Migraine
              </h3>
              <p>
                Spinning vertigo or dizziness is the dominant symptom alongside
                nausea, imbalance, and motion sensitivity; throbbing headache
                may or may not be present during every episode.
              </p>
              <p>
                <strong className="text-emerald-300">Treatment Options:</strong>{" "}
                Propranolol, Topiramate, Amitriptyline, Venlafaxine, and
                individualized migraine preventives.
              </p>
            </div>

            {/* 7. Hemiplegic Migraine */}
            <div className="p-5 rounded-2xl border border-rose-500/40 bg-slate-900/40 backdrop-blur-md space-y-2 text-slate-300 leading-relaxed">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 font-bold">
                Subtype 07 &bull; Rare Motor Aura &bull; No Triptans/Ergots
              </span>
              <h3 className="text-base font-bold text-white">
                7. Hemiplegic Migraine
              </h3>
              <p>
                Rare familial or sporadic subtype featuring temporary motor
                weakness (hemiplegia) on one side of the body accompanied by
                visual, sensory, or speech aura and headache.
              </p>
              <p className="text-rose-300 font-semibold">
                Treatment: Specialist-guided treatment ONLY. Do NOT
                independently use triptans or ergot medicines due to
                vasoconstrictive stroke concern.
              </p>
            </div>

            {/* 8. Migraine With Brainstem Aura */}
            <div className="p-5 rounded-2xl border border-rose-500/40 bg-slate-900/40 backdrop-blur-md space-y-2 text-slate-300 leading-relaxed">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 font-bold">
                Subtype 08 &bull; Rare Brainstem Symptoms
              </span>
              <h3 className="text-base font-bold text-white">
                8. Migraine With Brainstem Aura
              </h3>
              <p>
                Rare subtype with reversible brainstem aura symptoms: vertigo,
                double vision (diplopia), ringing in the ears (tinnitus), poor
                coordination (ataxia), or slurred speech (dysarthria) without
                motor weakness.
              </p>
              <p className="text-amber-300 font-semibold">
                Treatment: Specialist neurological assessment (rule out
                posterior TIA/stroke first) and individualized migraine
                treatment (avoid triptans/ergots).
              </p>
            </div>

            {/* 9. Retinal Migraine */}
            <div className="p-5 rounded-2xl border border-rose-500/40 bg-slate-900/40 backdrop-blur-md space-y-2 text-slate-300 leading-relaxed">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 font-bold">
                Subtype 09 &bull; Monocular Visual Disturbance
              </span>
              <h3 className="text-base font-bold text-white">
                9. Retinal Migraine
              </h3>
              <p>
                Rare condition involving repeated attacks of temporary visual
                disturbance or blindness strictly in <strong>one eye</strong>{" "}
                (monocular) associated with migraine headache.
              </p>
              <p className="text-rose-300 font-semibold">
                Treatment: Urgent ophthalmological/neurological assessment first
                to exclude retinal ischemia, amaurosis fugax, or optic nerve
                pathology.
              </p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: 12-STEP HEADACHE & MIGRAINE LEARNING ROADMAP                       */}
        {/* ========================================================================= */}
        {activeTab === "roadmap" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-1">
                12-Step Headache &amp; Migraine Clinical Learning Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Progressive study sequence starting from Tension-Type Headache
                and simple analgesics, advancing through Triptans, Gepants,
                Preventive Ladders, and Cluster Headache protocols. Click any
                module to jump straight to its 9-point drug monographs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
              {ROADMAP_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold">
                      Steps {item.step}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {item.focus}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => jumpToPharmacology(item.filter)}
                    className="inline-flex items-center justify-between w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-teal-500/50 text-teal-300 font-bold transition-colors"
                  >
                    <span>Open 9-Point Drug Cards</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: 9-POINT HEADACHE & MIGRAINE MEDICINE INDEX                         */}
        {/* ========================================================================= */}
        {activeTab === "pharmacology" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Search & Class Filter Bar */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={medSearch}
                    onChange={(e) => setMedSearch(e.target.value)}
                    placeholder="Search Sumatriptan, Rimegepant, Propranolol, Verapamil..."
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

                <span className="text-xs font-mono text-slate-400">
                  Showing{" "}
                  <strong className="text-teal-300">
                    {filteredMeds.length}
                  </strong>{" "}
                  of <strong>{HEADACHE_MEDICINES.length}</strong> medicines
                </span>
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

            {/* 9-Point Medicine Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMeds.map((med) => (
                <div
                  key={med.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-bold">
                          2. {med.drugClass}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {med.roadmapStep}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        1. {med.name}
                      </h3>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800/70 pt-3">
                      <div>
                        <strong className="text-teal-300">
                          3. Main Action:{" "}
                        </strong>
                        <span>{med.mainAction}</span>
                      </div>
                      <div>
                        <strong className="text-cyan-300">
                          4. How It Works (Mechanism):{" "}
                        </strong>
                        <span>{med.mechanism}</span>
                      </div>
                      <div>
                        <strong className="text-white">
                          5. Which Condition It Treats:{" "}
                        </strong>
                        <span>{med.conditionsTreated}</span>
                      </div>
                      <div>
                        <strong className="text-emerald-300">
                          6. Which Type of Patient May Use It:{" "}
                        </strong>
                        <span>{med.patientType}</span>
                      </div>
                      <div>
                        <strong className="text-slate-200">
                          7. Side Effects:{" "}
                        </strong>
                        <span>{med.sideEffects}</span>
                      </div>
                      <div>
                        <strong className="text-rose-400">
                          8. Who Should Use Caution:{" "}
                        </strong>
                        <span>{med.caution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-[11px] text-slate-300">
                    <Info className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-teal-300">
                        9. Important Points to Remember:
                      </strong>{" "}
                      {med.keyPearl}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
