"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  HeartPulse,
  Activity,
  AlertTriangle,
  Info,
  Sparkles,
  Pill,
  Search,
  BookOpen,
  Layers,
  Stethoscope,
  ShieldCheck,
  Scale,
  ArrowUpCircle,
  ArrowDownCircle,
} from "lucide-react";

type PrimaryTab =
  | "overview"
  | "hypertension"
  | "hypotension"
  | "antihypertensives"
  | "comparison"
  | "medicines";

type BpClassFilter =
  | "All"
  | "A. Beta Blockers (β-Blockers)"
  | "B. Alpha Blockers (α-Blockers)"
  | "C. Calcium Channel Blockers (CCBs)"
  | "D. Angiotensin Receptor Blockers (ARBs)"
  | "E. ACE Inhibitors"
  | "F. Diuretics (Water Tablets)"
  | "G. Other Important BP Medicines";

interface BpMedicineCard {
  id: string;
  code: string;
  name: string;
  group: Exclude<BpClassFilter, "All">;
  mainAction: string;
  howItWorks: string[];
  examples: string;
  usedFor: string;
  sideEffectsAndCaution: string;
  clinicalPearl: string;
}

interface BpBrandDrugCard {
  id: string;
  genericName: string;
  tabCategory: "brand-combo" | "individual";
  drugClass: string;
  brandExamples: string;
  uses: string;
  sideEffects: string;
  supportingVitaminsAndNutrients: string;
  clinicalNote: string;
}

const BP_FORMULATION_CARDS: BpBrandDrugCard[] = [
  // =========================================================================
  // TAB 1: BRAND / FIXED-DOSE COMBINATIONS
  // =========================================================================
  {
    id: "cilnidipine-telmisartan",
    genericName: "Cilnidipine & Telmisartan Tablets IP (10 mg / 40 mg)",
    tabCategory: "brand-combo",
    drugClass: "L/N-Type Calcium Channel Blocker + ARB",
    brandExamples:
      "Telinor-CL 40 | Cilidin T | Lndip-T (Note: TwinBlok-M 25 is Metoprolol + Cilnidipine)",
    uses: "Stage 1 & Stage 2 hypertension, hypertension with proteinuria/diabetic nephropathy, and patients who develop ankle swelling on Amlodipine.",
    sideEffects:
      "Dizziness, mild headache, flushing, fatigue, and hyperkalemia (high potassium from Telmisartan). Far less pedal edema than Amlodipine.",
    supportingVitaminsAndNutrients:
      "Coenzyme Q10 (CoQ10) for cellular vascular energy, Magnesium (supports vascular smooth muscle relaxation), and Vitamin D3. AVOID potassium supplements or potassium-rich salt substitutes (Telmisartan retains potassium).",
    clinicalNote:
      "Cilnidipine blocks both vascular L-type and sympathetic N-type calcium channels—preventing reflex tachycardia and ankle swelling.",
  },
  {
    id: "telmisartan-amlodipine-hctz",
    genericName:
      "Telmisartan, Amlodipine & Hydrochlorothiazide Tablets IP (40 mg / 5 mg / 12.5 mg)",
    tabCategory: "brand-combo",
    drugClass:
      "Triple Combination: ARB + Dihydropyridine CCB + Thiazide Diuretic",
    brandExamples:
      "Telsyd AM | Cortel Trio | Telzox Trio | Sartel AM | TAH 40 (verify 2-drug vs 3-drug pack)",
    uses: "Moderate-to-severe or uncontrolled hypertension requiring triple-mechanism BP control (RAAS blockade + vasodilation + volume excretion).",
    sideEffects:
      "Ankle edema (Amlodipine), orthostatic dizziness, increased urination, mild hyponatremia/hypokalemia (HCTZ) balanced by Telmisartan, elevated uric acid.",
    supportingVitaminsAndNutrients:
      "Vitamin B1 (Thiamine — thiazides increase urinary B1 loss), Magnesium, Zinc, and Vitamin D3. Check serum potassium before taking any potassium supplement.",
    clinicalNote:
      "Take in the morning with breakfast so Hydrochlorothiazide diuresis does not disturb nighttime sleep.",
  },
  {
    id: "amlodipine-atenolol",
    genericName: "Amlodipine & Atenolol Tablets IP (5 mg / 50 mg)",
    tabCategory: "brand-combo",
    drugClass: "Dihydropyridine CCB + Cardioselective Beta-1 Blocker",
    brandExamples: "Amlosafe-AT | Betacard-AM",
    uses: "Hypertension accompanied by chronic stable angina (chest pain), coronary artery disease, or fast resting heart rate.",
    sideEffects:
      "Slow heart rate (bradycardia), fatigue, cold hands/feet, ankle swelling (Amlodipine), dizziness.",
    supportingVitaminsAndNutrients:
      "Coenzyme Q10 (CoQ10 — beta blockers can reduce endogenous myocardial CoQ10 levels), Magnesium, and Vitamin B-Complex.",
    clinicalNote:
      "Do not stop abruptly; Atenolol blunts the reflex tachycardia normally triggered by Amlodipine.",
  },
  {
    id: "olmesartan-chlorthalidone",
    genericName:
      "Olmesartan Medoxomil & Chlorthalidone Tablets IP (20 mg / 12.5 mg or 40 mg / 12.5 mg)",
    tabCategory: "brand-combo",
    drugClass: "ARB + Long-Acting Thiazide-Like Diuretic",
    brandExamples: "Olmetrack CT 6.25 / 12.5",
    uses: "Stage 2 hypertension and volume-dependent high blood pressure requiring 24-hour sustained diuretic + ARB action.",
    sideEffects:
      "Dizziness/lightheadedness on standing, increased urination, electrolyte shifts (low sodium/potassium or high potassium), elevated uric acid, rare sprue-like enteropathy (chronic diarrhea with Olmesartan).",
    supportingVitaminsAndNutrients:
      "Vitamin B1 (Thiamine), Magnesium, and Vitamin D3. Monitor serum electrolytes before adding potassium.",
    clinicalNote:
      "Chlorthalidone has a much longer half-life (~40–60 hours) than Hydrochlorothiazide, providing superior overnight BP control.",
  },
  {
    id: "metoprolol-amlodipine",
    genericName:
      "Metoprolol Succinate PR & Amlodipine Tablets IP (25 mg / 5 mg or 50 mg / 5 mg)",
    tabCategory: "brand-combo",
    drugClass: "Extended-Release Beta-1 Blocker + Dihydropyridine CCB",
    brandExamples:
      "Embeta AM 25 | Prolomet AM 25 | Vinicor-AM 25/2.5 | Best-Beta-AM 25 | Bitmet-AM 25 (Prolomet XL 25 is plain Metoprolol)",
    uses: "Hypertension with ischemic heart disease, angina, post-MI cardioprotection, or palpitations.",
    sideEffects: "Bradycardia, fatigue, ankle edema, flushing, mild dizziness.",
    supportingVitaminsAndNutrients:
      "Coenzyme Q10 (CoQ10), Magnesium, and Vitamin B12 / B-Complex.",
    clinicalNote:
      "Swallow prolonged-release (PR/XL) tablets whole—never crush or chew.",
  },
  {
    id: "telmisartan-metoprolol",
    genericName:
      "Telmisartan & Metoprolol Succinate PR Tablets IP (40 mg / 25 mg or 40 mg / 50 mg)",
    tabCategory: "brand-combo",
    drugClass: "ARB + Extended-Release Beta-1 Blocker",
    brandExamples:
      "Metosartan 25 | Cirqtel Beta 25 | Telinor-MT 25 | Bylenta M 25 | Bylenta M 50 | Tsart-M 40/25",
    uses: "Hypertension with coexisting coronary artery disease, heart failure with reduced ejection fraction, or sympathetic tachycardia.",
    sideEffects:
      "Dizziness, slow pulse (bradycardia), fatigue, cold extremities, hyperkalemia.",
    supportingVitaminsAndNutrients:
      "Coenzyme Q10 (CoQ10), Magnesium, and Vitamin D3 (avoid potassium supplements).",
    clinicalNote:
      "Combines RAAS vascular protection with cardiac rate control without causing ankle edema.",
  },
  {
    id: "cilnidipine-telmisartan-metoprolol",
    genericName:
      "Cilnidipine, Telmisartan & Metoprolol Succinate (ER) Tablets IP (10 mg / 40 mg / 25 mg)",
    tabCategory: "brand-combo",
    drugClass:
      "Triple Combination: L/N-Type CCB + ARB + Extended-Release Beta-1 Blocker",
    brandExamples: "Telnyle-LNB 25",
    uses: "Uncontrolled Stage 2 hypertension with elevated heart rate, high sympathetic tone, or cardiovascular risk.",
    sideEffects: "Dizziness, bradycardia, fatigue, headache, hyperkalemia.",
    supportingVitaminsAndNutrients:
      "Coenzyme Q10 (CoQ10), Magnesium, and Vitamin D3 (avoid extra potassium).",
    clinicalNote:
      "Swallow ER tablet whole in the morning; monitor resting pulse and standing BP during the first 2 weeks.",
  },
  {
    id: "telmisartan-chlorthalidone",
    genericName: "Telmisartan & Chlorthalidone Tablets IP (40 mg / 12.5 mg)",
    tabCategory: "brand-combo",
    drugClass: "ARB + Thiazide-Like Diuretic",
    brandExamples: "Cirqtel CT 40 | Telnyle-CH",
    uses: "Moderate-to-severe essential hypertension, salt-sensitive hypertension, and left ventricular hypertrophy.",
    sideEffects:
      "Morning polyuria (frequent urination), postural dizziness, fatigue, mild electrolyte imbalance (sodium/potassium/magnesium), hyperuricemia.",
    supportingVitaminsAndNutrients:
      "Vitamin B1 (Thiamine), Magnesium, and Vitamin D3.",
    clinicalNote:
      "Take in the morning with food; Telmisartan counterbalances Chlorthalidone-induced potassium loss.",
  },

  // =========================================================================
  // TAB 2: OTHER MEDICINES (INDIVIDUAL / SINGLE-INGREDIENT AGENTS)
  // =========================================================================
  {
    id: "telmisartan-40",
    genericName: "Telmisartan Tablets IP 40 mg",
    tabCategory: "individual",
    drugClass: "Angiotensin II Type 1 Receptor Blocker (ARB)",
    brandExamples: "Tsart 40 | Telzox 40 | Tazloc-40 | Sartel-40",
    uses: "First-line adult hypertension, diabetic kidney protection (reduces microalbuminuria), and cardiovascular risk reduction in patients intolerant to ACE inhibitors.",
    sideEffects:
      "Dizziness, elevated blood potassium (hyperkalemia), back/sinus discomfort, rare renal creatinine rise; STRICTLY CONTRAINDICATED in pregnancy.",
    supportingVitaminsAndNutrients:
      "Vitamin D3, Magnesium, and CoQ10 (supports endothelial nitric oxide). AVOID potassium supplements and high-potassium salt substitutes.",
    clinicalNote:
      "Longest half-life (~24 hours) among all ARBs, providing smooth early-morning BP surge protection.",
  },
  {
    id: "telmisartan-20",
    genericName: "Telmisartan Tablets IP 20 mg",
    tabCategory: "individual",
    drugClass:
      "Angiotensin II Type 1 Receptor Blocker (ARB — Low Starting Dose)",
    brandExamples: "Tsart 20 | Telnyle 20",
    uses: "Mild Stage 1 hypertension, initial dose titration in elderly or volume-depleted patients, and renal proteinuria protection.",
    sideEffects:
      "Mild lightheadedness, hyperkalemia, fatigue; contraindicated in pregnancy.",
    supportingVitaminsAndNutrients:
      "Vitamin D3, Magnesium, and Vitamin B-Complex (avoid potassium supplements).",
    clinicalNote:
      "Ideal starting strength for older adults or patients sensitive to standard 40 mg dosing.",
  },
  {
    id: "amlodipine-2-5-5",
    genericName: "Amlodipine Tablets IP (2.5 mg / 5 mg)",
    tabCategory: "individual",
    drugClass: "Dihydropyridine Calcium Channel Blocker (CCB)",
    brandExamples: "Amlosafe 2.5 | Amlosafe 5",
    uses: "First-line hypertension (especially in older adults and isolated systolic hypertension) and chronic stable/vasospastic angina.",
    sideEffects:
      "Dose-dependent ankle/foot swelling (pedal edema), facial flushing, headache, palpitations, gum overgrowth (rare).",
    supportingVitaminsAndNutrients:
      "Magnesium (natural physiological calcium antagonist), CoQ10, and Vitamin D3. Avoid grapefruit juice in large quantities.",
    clinicalNote:
      "Ankle swelling is caused by selective precapillary arteriolar dilation (not fluid overload)—diuretics do not fix it, whereas adding an ARB/ACEi resolves it.",
  },
  {
    id: "nebivolol-2-5-5",
    genericName: "Nebivolol Hydrochloride Tablets IP (2.5 mg / 5 mg)",
    tabCategory: "individual",
    drugClass:
      "3rd-Generation Cardioselective Beta-1 Blocker + Nitric Oxide Vasodilator",
    brandExamples:
      "Nebijoy 2.5 | Nebi 2.5 | Nebi 5 (Note: Nebijoy-AM / Nebi-AM are Nebivolol + Amlodipine)",
    uses: "Hypertension (especially in younger/middle-aged patients with elevated heart rate) and chronic heart failure.",
    sideEffects:
      "Mild headache, fatigue, bradycardia, dizziness (much lower risk of cold extremities or erectile dysfunction than older beta blockers).",
    supportingVitaminsAndNutrients:
      "Coenzyme Q10 (CoQ10), L-Arginine / Vitamin C (supports endothelial nitric oxide synthase), and Magnesium.",
    clinicalNote:
      "Unique among beta blockers because it stimulates endothelial Nitric Oxide (NO) release, widening blood vessels while gently lowering heart rate.",
  },
  {
    id: "carvedilol-3-125",
    genericName: "Carvedilol Tablets IP (3.125 mg)",
    tabCategory: "individual",
    drugClass: "Non-Selective Beta + Alpha-1 Adrenergic Blocker",
    brandExamples: "Cardivas 3.125",
    uses: "Heart failure with reduced ejection fraction (initiating titration dose), post-MI left ventricular dysfunction, and hypertension.",
    sideEffects:
      "Dizziness/postural hypotension (alpha-1 blockade), fatigue, bradycardia, weight gain/fluid retention during early titration; caution in asthma.",
    supportingVitaminsAndNutrients:
      "Coenzyme Q10 (CoQ10 — critical for failing myocardial ATP energy), Vitamin B1 (Thiamine), and Vitamin D3.",
    clinicalNote:
      "Always take WITH food to slow absorption and prevent orthostatic dizziness; 3.125 mg twice daily is the standard starting dose.",
  },
  {
    id: "metoprolol-succinate-25",
    genericName: "Metoprolol Succinate Extended-Release Tablets IP (25 mg)",
    tabCategory: "individual",
    drugClass: "Cardioselective Beta-1 Blocker (Extended Release)",
    brandExamples: "Embeta XR-25 | Metozox 25 | Prolomet XL 25",
    uses: "Hypertension, angina pectoris, supraventricular tachycardia/palpitations, chronic heart failure, and migraine prophylaxis.",
    sideEffects:
      "Slow heart rate, tiredness, cold hands/feet, dizziness, vivid dreams.",
    supportingVitaminsAndNutrients:
      "Coenzyme Q10 (CoQ10), Magnesium, and Vitamin B-Complex.",
    clinicalNote:
      "Metoprolol Succinate is once-daily extended release (unlike short-acting Metoprolol Tartrate); never stop abruptly.",
  },
  {
    id: "propranolol-er-40-80",
    genericName:
      "Propranolol Hydrochloride Prolonged-Release Capsules IP (40 mg / 80 mg)",
    tabCategory: "individual",
    drugClass: "Non-Selective Beta-1 & Beta-2 Adrenergic Blocker",
    brandExamples: "Inderal LA 40 | Betacap TR 40 / 80",
    uses: "Hypertension with sympathetic overdrive, migraine prevention, essential tremor, performance/somatic anxiety, and thyrotoxicosis symptom control.",
    sideEffects:
      "Fatigue, bradycardia, cold extremities, vivid dreams/insomnia, bronchospasm (STRICTLY CONTRAINDICATED in bronchial asthma/COPD), masks hypoglycemia tremor in diabetics.",
    supportingVitaminsAndNutrients:
      "Coenzyme Q10 (CoQ10), Vitamin B2 (Riboflavin — synergistic for migraine prevention), and Magnesium.",
    clinicalNote:
      "Crosses the blood-brain barrier (lipophilic), making it uniquely effective for migraine and tremor alongside BP/heart-rate control.",
  },
  {
    id: "prazosin-sr-2-5-5",
    genericName:
      "Prazosin Hydrochloride Sustained-Release Tablets IP (2.5 mg / 5 mg)",
    tabCategory: "individual",
    drugClass: "Selective Alpha-1 Adrenergic Receptor Blocker",
    brandExamples:
      "Prazopill XL 2.5 | Prazopill XL 5 | Minipress XL 2.5 | Minipress XL 5",
    uses: "Resistant hypertension (add-on vasodilator), Benign Prostatic Hyperplasia (BPH) urinary symptoms, and PTSD-related nightmares.",
    sideEffects:
      "'First-dose syncope' / orthostatic dizziness when standing up rapidly, headache, drowsiness, nasal stuffiness, palpitations.",
    supportingVitaminsAndNutrients:
      "Magnesium and Vitamin B-Complex (maintain adequate hydration and rise slowly from bed).",
    clinicalNote:
      "Administer at bedtime when initiating or increasing dose to prevent first-dose postural hypotension.",
  },
  {
    id: "torsemide-10-20",
    genericName: "Torsemide Tablets IP (10 mg / 20 mg)",
    tabCategory: "individual",
    drugClass: "Loop Diuretic (High-Ceiling Ascending Limb Inhibitor)",
    brandExamples: "Dytor 10 | Dytor 20 | Tide 10",
    uses: "Hypertension in patients with chronic kidney disease (CKD) or fluid overload, and edema due to heart failure, cirrhosis, or renal disease.",
    sideEffects:
      "Frequent urination, dehydration/hypotension, low potassium (hypokalemia), low magnesium, elevated uric acid/gout, mild blood sugar rise.",
    supportingVitaminsAndNutrients:
      "Vitamin B1 (Thiamine — loop diuretics deplete thiamine), Magnesium, Vitamin C, and dietary Potassium (bananas, coconut water, spinach) unless on an ARB/ACEi with high K+.",
    clinicalNote:
      "Torsemide has more predictable oral bioavailability (~80–90%) and longer duration than Furosemide; take in the morning.",
  },
];

const BP_CLASSIFICATION_TABLE = [
  {
    category: "Normal",
    reading: "Below 120 AND below 80 mmHg",
    tone: "text-emerald-300",
    note: "Maintain heart-healthy lifestyle, balanced salt intake, and regular physical activity.",
  },
  {
    category: "Elevated (ACC/AHA)",
    reading: "120–129 AND below 80 mmHg",
    tone: "text-cyan-300",
    note: "Lifestyle modification (DASH diet, sodium reduction, exercise) to prevent progression.",
  },
  {
    category: "Stage 1 Hypertension",
    reading: "130–139 OR 80–89 mmHg",
    tone: "text-amber-300",
    note: "Lifestyle changes; start medication if high cardiovascular risk, diabetes, or CKD.",
  },
  {
    category: "Stage 2 Hypertension",
    reading: "140 or higher OR 90 or higher mmHg",
    tone: "text-orange-300",
    note: "Lifestyle modification plus antihypertensive drug therapy (often dual combination).",
  },
  {
    category: "Severe Hypertension / Crisis",
    reading: "Above 180 and/or above 120 mmHg",
    tone: "text-rose-300",
    note: "Immediate medical evaluation to screen for acute target-organ damage (hypertensive emergency).",
  },
];

const HYPOTENSION_TYPES = [
  {
    type: "Orthostatic (Postural) Hypotension",
    meaning:
      "BP falls significantly (systolic drop >= 20 or diastolic >= 10 mmHg) within 3 minutes of standing up from sitting or lying down.",
    management:
      "Rise slowly in stages, hydrate with fluids/ORS, review culprit antihypertensives/diuretics, compression stockings or Midodrine/Fludrocortisone in neurogenic cases.",
  },
  {
    type: "Postprandial Hypotension",
    meaning:
      "BP falls within 1–2 hours after eating a large meal due to splanchnic blood pooling in the digestive tract (common in older adults).",
    management:
      "Eat smaller, more frequent low-carbohydrate meals and drink water before meals.",
  },
  {
    type: "Neurally Mediated (Vasovagal) Hypotension",
    meaning:
      "BP and heart rate suddenly drop due to an abnormal autonomic nervous-system reflex (triggered by prolonged standing, pain, fear, or heat).",
    management:
      "Lie flat immediately with legs elevated, physical counter-pressure maneuvers (leg crossing/handgrip), and fluid/salt hydration.",
  },
  {
    type: "Severe Acute Hypotension (Shock)",
    meaning:
      "Sudden, life-threatening BP drop depriving vital organs of oxygen—associated with sepsis, massive blood loss, cardiogenic failure, or anaphylaxis.",
    management:
      "IMMEDIATE HOSPITAL EMERGENCY: IV crystalloid resuscitation, vasopressors, and treating the underlying shock cause.",
  },
];

const BP_MEDICINE_CARDS: BpMedicineCard[] = [
  {
    id: "beta-blockers",
    code: "Group A",
    name: "A. Beta Blockers (β-Blockers)",
    group: "A. Beta Blockers (β-Blockers)",
    mainAction:
      "Reduce heart rate (negative chronotropy) and the force of heart contraction (negative inotropy).",
    howItWorks: [
      "1. Adrenaline (epinephrine) normally stimulates beta-1 receptors in the heart.",
      "2. This makes the heart beat faster and pump more forcefully.",
      "3. Beta blockers competitively block cardiac beta receptors.",
      "4. The heart works less intensely, lowering cardiac output and blood pressure.",
    ],
    examples:
      "Atenolol, Metoprolol, Bisoprolol, Propranolol, Nebivolol, Carvedilol (blocks beta + alpha-1 receptors)",
    usedFor:
      "Hypertension in selected patients, certain heart rhythm problems (arrhythmias), angina (chest pain), heart failure (Bisoprolol, Carvedilol, Metoprolol succinate), and migraine prevention (Propranolol).",
    sideEffectsAndCaution:
      "Fatigue, slow heart rate (bradycardia), cold hands/feet, dizziness; non-selective beta blockers (Propranolol) are contraindicated in bronchial asthma/COPD. Never stop abruptly (rebound angina/tachycardia).",
    clinicalPearl:
      "Carvedilol and Labetalol block BOTH beta and alpha-1 receptors, adding blood-vessel relaxation to heart-rate control.",
  },
  {
    id: "alpha-blockers",
    code: "Group B",
    name: "B. Alpha Blockers (α1-Blockers)",
    group: "B. Alpha Blockers (α-Blockers)",
    mainAction:
      "Relax arterial and venous blood vessels (vasodilation) and relax bladder-neck smooth muscle.",
    howItWorks: [
      "1. Noradrenaline normally stimulates alpha-1 adrenergic receptors on vascular smooth muscle.",
      "2. Blood vessels constrict and become narrower, raising resistance.",
      "3. Alpha blockers selectively block alpha-1 receptors.",
      "4. Blood vessels relax and widen (lower peripheral vascular resistance), decreasing BP.",
    ],
    examples:
      "Prazosin, Doxazosin, Terazosin (plus uroselective Tamsulosin / Silodosin for BPH)",
    usedFor:
      "Hypertension (usually add-on rather than first-line) and Benign Prostatic Hyperplasia (BPH — improves urine flow in enlarged prostate).",
    sideEffectsAndCaution:
      "'First-dose orthostatic hypotension' (sudden dizziness or fainting when standing up after the initial dose), nasal congestion, headache.",
    clinicalPearl:
      "Give the very first dose at bedtime to prevent first-dose standing dizziness/syncope.",
  },
  {
    id: "calcium-channel-blockers",
    code: "Group C",
    name: "C. Calcium Channel Blockers (CCBs)",
    group: "C. Calcium Channel Blockers (CCBs)",
    mainAction:
      "Relax arterial blood vessels (Dihydropyridines) and, depending on the medicine, also slow heart rate (Non-Dihydropyridines).",
    howItWorks: [
      "1. Calcium ions enter vascular smooth-muscle and cardiac cells through L-type calcium channels.",
      "2. Intracellular calcium triggers muscle contraction.",
      "3. CCBs block voltage-gated L-type calcium channels.",
      "4. Arterial blood vessel muscles relax and dilate, lowering blood pressure.",
    ],
    examples:
      "Dihydropyridines: Amlodipine, Cilnidipine, Nifedipine | Non-Dihydropyridines: Diltiazem, Verapamil",
    usedFor:
      "First-line hypertension (especially in older adults), chronic stable angina, and supraventricular arrhythmias (Diltiazem / Verapamil).",
    sideEffectsAndCaution:
      "Dihydropyridines (Amlodipine): ankle/pedal edema (swelling), flushing, headache. Non-dihydropyridines (Verapamil/Diltiazem): constipation, bradycardia, AV heart block (avoid combining with beta blockers).",
    clinicalPearl:
      "Important difference: Amlodipine mainly relaxes blood vessels (and can slightly reflex-raise heart rate), whereas Diltiazem and Verapamil also slow the heart rate.",
  },
  {
    id: "arbs",
    code: "Group D",
    name: "D. Angiotensin Receptor Blockers (ARBs)",
    group: "D. Angiotensin Receptor Blockers (ARBs)",
    mainAction:
      "Selectively block Angiotensin-II Type 1 (AT1) receptors to dilate blood vessels and lower aldosterone.",
    howItWorks: [
      "1. The body produces the potent vasoconstrictor peptide Angiotensin II.",
      "2. Angiotensin II binds AT1 receptors, narrowing blood vessels and retaining sodium.",
      "3. ARBs selectively block the AT1 receptors where Angiotensin II acts.",
      "4. Blood vessels relax and aldosterone drops, decreasing BP without causing dry cough.",
    ],
    examples:
      "Telmisartan, Losartan, Olmesartan, Valsartan, Candesartan, Irbesartan",
    usedFor:
      "First-line hypertension, diabetic kidney protection (nephroprotection), heart failure, and patients who develop dry cough on ACE inhibitors.",
    sideEffectsAndCaution:
      "Elevated potassium (hyperkalemia), dizziness, kidney function changes in bilateral renal artery stenosis; STRICTLY CONTRAINDICATED in pregnancy.",
    clinicalPearl:
      "ARBs achieve the same RAAS protection as ACE inhibitors WITHOUT blocking bradykinin breakdown—so they do not cause dry cough.",
  },
  {
    id: "ace-inhibitors",
    code: "Group E",
    name: "E. ACE Inhibitors (Angiotensin-Converting Enzyme Inhibitors)",
    group: "E. ACE Inhibitors",
    mainAction:
      "Reduce the production of Angiotensin II by inhibiting Angiotensin-Converting Enzyme.",
    howItWorks: [
      "1. ACE is an enzyme that converts inactive Angiotensin I into active Angiotensin II.",
      "2. Angiotensin II narrows blood vessels and stimulates aldosterone.",
      "3. ACE inhibitors block the ACE enzyme.",
      "4. Less Angiotensin II is produced, so blood vessels relax and BP decreases.",
    ],
    examples: "Ramipril, Enalapril, Lisinopril, Perindopril, Captopril",
    usedFor:
      "First-line hypertension, heart failure with reduced ejection fraction, post-myocardial infarction remodeling, and diabetic nephropathy.",
    sideEffectsAndCaution:
      "Persistent dry hacking cough (due to bradykinin accumulation), hyperkalemia (high potassium), serum creatinine rise, and rare life-threatening angioedema (lip/tongue/airway swelling). STRICTLY CONTRAINDICATED in pregnancy.",
    clinicalPearl:
      "Never combine an ACE inhibitor and an ARB together (dual RAAS blockade increases kidney injury and hyperkalemia).",
  },
  {
    id: "diuretics",
    code: "Group F",
    name: "F. Diuretics (Water Tablets)",
    group: "F. Diuretics (Water Tablets)",
    mainAction:
      "Help the kidneys excrete excess sodium (salt) and water through urine, reducing blood volume and vascular resistance.",
    howItWorks: [
      "1. Inhibit specific sodium reabsorption channels/cotransporters along the renal nephron tubules.",
      "2. Sodium and water remain in the urine and are excreted from the body.",
      "3. Intravascular plasma volume and arterial wall sodium stiffness decrease.",
      "4. Blood pressure lowers steadily (not technically receptor blockers, but core antihypertensives).",
    ],
    examples:
      "Thiazide / Thiazide-like: Hydrochlorothiazide, Chlorthalidone, Indapamide | Loop: Furosemide, Torsemide | Potassium-sparing: Spironolactone, Eplerenone, Amiloride",
    usedFor:
      "First-line hypertension (Thiazide/Thiazide-like), heart failure & renal edema (Loop diuretics), and resistant hypertension / primary hyperaldosteronism (Spironolactone).",
    sideEffectsAndCaution:
      "Thiazides & Loops: low potassium (hypokalemia), low sodium (hyponatremia), dehydration, elevated uric acid/gout (thiazides). Potassium-sparing: high potassium (hyperkalemia) and gynecomastia (Spironolactone).",
    clinicalPearl:
      "Take diuretics in the morning so increased urination does not disrupt nighttime sleep.",
  },
  {
    id: "other-bp-medicines",
    code: "Group G",
    name: "G. Other Important BP Medicines (Aldosterone, Renin, Central α2 & Direct Vasodilators)",
    group: "G. Other Important BP Medicines",
    mainAction:
      "Target specialized hormonal, central brainstem sympathetic, or direct vascular smooth-muscle pathways.",
    howItWorks: [
      "Aldosterone Antagonists (Spironolactone, Eplerenone): Block mineralocorticoid aldosterone receptors in renal collecting ducts to excrete salt/water while retaining potassium.",
      "Direct Renin Inhibitor (Aliskiren): Blocks the renin enzyme at the very top of the RAAS cascade before Angiotensin I forms.",
      "Central Alpha-2 Agonists (Clonidine, Methyldopa): Stimulate brainstem alpha-2 autoreceptors to reduce sympathetic nerve outflow to heart and vessels.",
      "Direct Vasodilators (Hydralazine, Minoxidil): Directly relax arteriolar smooth muscle.",
    ],
    examples:
      "Spironolactone, Eplerenone | Aliskiren | Clonidine, Methyldopa (safe in pregnancy) | Hydralazine, Minoxidil",
    usedFor:
      "Resistant hypertension (Spironolactone), hypertension in pregnancy (Methyldopa, Hydralazine, Labetalol, Nifedipine), and severe refractory hypertension.",
    sideEffectsAndCaution:
      "Clonidine: severe rebound hypertension if stopped abruptly, dry mouth, sedation. Hydralazine: reflex tachycardia, drug-induced lupus. Minoxidil: fluid retention and excess hair growth (hypertrichosis).",
    clinicalPearl:
      "Methyldopa (alongside Labetalol and extended-release Nifedipine) is a classic pregnancy-safe antihypertensive, whereas ACE inhibitors, ARBs, and Aliskiren are teratogenic.",
  },
];

const BP_CLASS_FILTERS: BpClassFilter[] = [
  "All",
  "A. Beta Blockers (β-Blockers)",
  "B. Alpha Blockers (α-Blockers)",
  "C. Calcium Channel Blockers (CCBs)",
  "D. Angiotensin Receptor Blockers (ARBs)",
  "E. ACE Inhibitors",
  "F. Diuretics (Water Tablets)",
  "G. Other Important BP Medicines",
];

const QUICK_COMPARISON_ROWS = [
  {
    medicineClass: "Beta Blockers (β-blockers)",
    target: "Heart rate and force of contraction",
    examples:
      "Atenolol, Metoprolol, Bisoprolol, Propranolol, Nebivolol, Carvedilol",
  },
  {
    medicineClass: "Alpha Blockers (α-blockers)",
    target: "Blood vessel alpha-1 contraction (+ prostate smooth muscle)",
    examples: "Prazosin, Doxazosin, Terazosin",
  },
  {
    medicineClass: "Calcium Channel Blockers (CCBs)",
    target: "Calcium entry into vascular (& cardiac) muscle cells",
    examples: "Amlodipine, Cilnidipine, Nifedipine | Diltiazem, Verapamil",
  },
  {
    medicineClass: "ARBs",
    target: "Angiotensin-II AT1 receptors",
    examples:
      "Telmisartan, Losartan, Olmesartan, Valsartan, Candesartan, Irbesartan",
  },
  {
    medicineClass: "ACE Inhibitors",
    target: "Angiotensin-II production (ACE enzyme)",
    examples: "Ramipril, Enalapril, Lisinopril, Perindopril, Captopril",
  },
  {
    medicineClass: "Diuretics",
    target: "Kidney salt and water removal",
    examples:
      "Hydrochlorothiazide, Chlorthalidone, Indapamide, Furosemide, Spironolactone",
  },
  {
    medicineClass: "Central Alpha-2 Agonists",
    target: "Brain-controlled sympathetic nerve signals",
    examples: "Clonidine, Methyldopa",
  },
  {
    medicineClass: "Direct Vasodilators",
    target: "Arteriolar blood vessel smooth muscle directly",
    examples: "Hydralazine, Minoxidil",
  },
];

export default function HypertensionHypotensionPage() {
  const [activeTab, setActiveTab] = useState<PrimaryTab>("overview");
  const [medSearch, setMedSearch] = useState("");
  const [selectedBpClass, setSelectedBpClass] = useState<BpClassFilter>("All");
  const [formulationSubTab, setFormulationSubTab] = useState<
    "brand-combo" | "individual"
  >("brand-combo");
  const [brandSearch, setBrandSearch] = useState("");

  const filteredFormulations = useMemo(() => {
    const q = brandSearch.trim().toLowerCase();
    return BP_FORMULATION_CARDS.filter((item) => {
      if (item.tabCategory !== formulationSubTab) return false;
      if (!q) return true;
      return (
        item.genericName.toLowerCase().includes(q) ||
        item.brandExamples.toLowerCase().includes(q) ||
        item.drugClass.toLowerCase().includes(q) ||
        item.uses.toLowerCase().includes(q) ||
        item.supportingVitaminsAndNutrients.toLowerCase().includes(q)
      );
    });
  }, [formulationSubTab, brandSearch]);

  const filteredCards = useMemo(() => {
    return BP_MEDICINE_CARDS.filter((card) => {
      const matchesGroup =
        selectedBpClass === "All" || card.group === selectedBpClass;
      const q = medSearch.trim().toLowerCase();
      const matchesQuery =
        !q ||
        card.name.toLowerCase().includes(q) ||
        card.examples.toLowerCase().includes(q) ||
        card.mainAction.toLowerCase().includes(q) ||
        card.usedFor.toLowerCase().includes(q);
      return matchesGroup && matchesQuery;
    });
  }, [medSearch, selectedBpClass]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-rose-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-rose-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Clinical Overview</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold mb-3">
              <HeartPulse className="w-3.5 h-3.5" /> Cardiovascular Hemodynamics
              Codex &bull; Condition #08
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Hypertension &amp; Hypotension (Raktagata Vata)
            </h1>

            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Core Hemodynamic Principle:{" "}
                <strong className="text-rose-300">Blood Pressure (BP)</strong>{" "}
                is the lateral force of blood pushing against arterial walls (
                <strong>
                  BP = Cardiac Output &times; Systemic Vascular Resistance
                </strong>
                ).
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-emerald-400 font-mono">
                    120 / 80 mmHg
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    120 Systolic (Heart Contracts) / 80 Diastolic (Heart
                    Relaxes)
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-400 font-mono">
                    7 Drug Classes
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    β-Blockers &bull; α-Blockers &bull; CCBs &bull; ARBs &bull;
                    ACEi &bull; Diuretics &bull; Vasodilators
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Structured cardiovascular module covering arterial pressure
              physiology, <strong>Hypertension</strong> (Primary vs. Secondary,
              BP staging, silent organ damage), <strong>Hypotension</strong> (4
              clinical types), all{" "}
              <strong>7 antihypertensive drug classes</strong>, and a
              quick-revision comparison matrix.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Normal Adult BP
              </span>
              <span className="text-xl font-bold text-emerald-400 font-mono">
                &lt; 120 / 80
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Severe Crisis
              </span>
              <span className="text-xl font-bold text-rose-400 font-mono">
                &gt; 180 / 120
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
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>1. What Is Blood Pressure (120 / 80)?</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("hypertension")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "hypertension"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <ArrowUpCircle className="w-4 h-4 shrink-0" />
              <span>2. Hypertension (High BP)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("hypotension")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "hypotension"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <ArrowDownCircle className="w-4 h-4 shrink-0" />
              <span>3. Hypotension (Low BP)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("antihypertensives")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "antihypertensives"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Pill className="w-4 h-4 shrink-0" />
              <span>4. Types of BP Medicines (7 Groups)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("comparison")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "comparison"
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>5. Quick Comparison Matrix</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("medicines")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "medicines"
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Pill className="w-4 h-4 shrink-0" />
              <span>6. Medicines</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: WHAT IS BLOOD PRESSURE (WATER PIPE ANALOGY & 120 / 80)             */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center gap-2 text-teal-400">
                  <HeartPulse className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    What Is Blood Pressure (BP)?
                  </h2>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Blood pressure</strong> is the physical force of
                  circulating blood pushing against the elastic walls of your
                  arteries as your heart pumps blood throughout the body.
                </p>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                  <strong className="text-teal-300 block">
                    Think of It Like Water Flowing Through a Pipe:
                  </strong>
                  <div className="grid grid-cols-2 gap-2 text-slate-300">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <strong className="text-rose-300">Heart</strong> = Water
                      pump
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <strong className="text-cyan-300">Blood</strong> = Water
                      volume
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <strong className="text-amber-300">Arteries</strong> =
                      Elastic pipes
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <strong className="text-emerald-300">
                        Blood Pressure
                      </strong>{" "}
                      = Force on pipe walls
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-white">
                    Understanding the Two Numbers (e.g., 120 / 80 mmHg)
                  </h2>

                  <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-rose-300 text-sm">
                        120 — Systolic Pressure (Top Number)
                      </strong>
                      <span className="font-mono text-rose-300 font-bold">
                        Heart Contracts
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      The peak arterial pressure generated when the left
                      ventricle contracts and ejects blood into the aorta.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-cyan-300 text-sm">
                        80 — Diastolic Pressure (Bottom Number)
                      </strong>
                      <span className="font-mono text-cyan-300 font-bold">
                        Heart Relaxes
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      The resting baseline pressure inside the arteries while
                      the heart relaxes and refills with blood between beats.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab("hypertension")}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 hover:bg-rose-500 hover:text-slate-950 text-xs font-bold transition-colors"
                  >
                    Explore Hypertension &rarr;
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("hypotension")}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-xs font-bold transition-colors"
                  >
                    Explore Hypotension &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: HYPERTENSION (HIGH BP — STAGING, CAUSES & ORGAN DAMAGE)            */}
        {/* ========================================================================= */}
        {activeTab === "hypertension" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* BP Classification Table */}
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest block mb-1">
                  Adult Blood Pressure Categories
                </span>
                <h2 className="text-xl font-bold text-white">
                  What Is Hypertension &amp; Adult BP Classification
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  <strong>Hypertension</strong> means blood pushes against
                  arterial walls with consistently higher-than-normal pressure.
                  Diagnosis requires properly measured, repeated readings across
                  separate visits—not a single isolated reading. (Note: Indian
                  and European guidelines may use slightly different thresholds
                  such as &ge; 140/90 mmHg).
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[680px]">
                  <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5 text-white">Category</th>
                      <th className="p-3.5 text-amber-300">
                        BP Reading (mmHg)
                      </th>
                      <th className="p-3.5">Clinical Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    {BP_CLASSIFICATION_TABLE.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-900/40 transition-colors"
                      >
                        <td className={`p-3.5 font-bold ${row.tone}`}>
                          {row.category}
                        </td>
                        <td className="p-3.5 font-mono font-bold text-white">
                          {row.reading}
                        </td>
                        <td className="p-3.5 text-slate-300">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Primary vs Secondary Hypertension */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5 leading-relaxed">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
                  ~90–95% of Cases
                </span>
                <h3 className="text-lg font-bold text-white">
                  A. Primary (Essential) Hypertension
                </h3>
                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                  <li>
                    No single identifiable medical cause; develops gradually
                    over years.
                  </li>
                  <li>Family history and polygenic susceptibility.</li>
                  <li>Excess dietary salt (sodium) intake.</li>
                  <li>Obesity, physical inactivity, and increasing age.</li>
                  <li>Excess alcohol consumption and chronic stress.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5 leading-relaxed">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300 font-bold">
                  ~5–10% of Cases &bull; Treat Underlying Cause
                </span>
                <h3 className="text-lg font-bold text-white">
                  B. Secondary Hypertension
                </h3>
                <p className="text-slate-300">
                  High BP caused directly by another underlying medical
                  condition or medication:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                  <li>
                    Chronic kidney disease (CKD) or renal artery stenosis.
                  </li>
                  <li>
                    Thyroid disorders (hypothyroidism or hyperthyroidism).
                  </li>
                  <li>
                    Adrenal gland disorders (primary hyperaldosteronism,
                    pheochromocytoma, Cushing&apos;s).
                  </li>
                  <li>Obstructive sleep apnea (OSA).</li>
                  <li>
                    Medicines/substances: NSAIDs, systemic corticosteroids, oral
                    contraceptives, decongestants.
                  </li>
                </ul>
              </div>
            </div>

            {/* Target-Organ Damage & Silent Killer Warning */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  What Can Untreated Hypertension Cause? (Target-Organ Damage)
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs text-slate-200">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50 font-semibold text-center">
                  1. Heart Attack (MI)
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50 font-semibold text-center">
                  2. Heart Failure
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50 font-semibold text-center">
                  3. Stroke (Ischemic / Hemorrhagic)
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/50 font-semibold text-center">
                  4. Kidney Damage (CKD)
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/50 font-semibold text-center">
                  5. Eye Damage (Retinopathy)
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/50 font-semibold text-center">
                  6. Peripheral Artery Disease
                </div>
              </div>
              <p className="text-xs text-amber-200">
                <strong>Important:</strong> Hypertension is called a{" "}
                <strong>&quot;silent condition&quot;</strong> because most
                people feel completely normal and have zero symptoms even when
                their blood pressure is dangerously high.
              </p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: HYPOTENSION (LOW BP — CAUSES, SYMPTOMS & 4 TYPES)                  */}
        {/* ========================================================================= */}
        {activeTab === "hypotension" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md space-y-3 leading-relaxed">
                <h2 className="text-lg font-bold text-white">
                  What Is Hypotension &amp; What Causes It?
                </h2>
                <p className="text-slate-300">
                  <strong>Hypotension</strong> means arterial blood pressure is
                  lower than normal (often &lt; 90/60 mmHg), reducing blood flow
                  to the brain and vital organs.
                </p>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                    &bull; Dehydration / fluid loss
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                    &bull; Acute blood loss / anemia
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                    &bull; Heart problems (arrhythmia, HF)
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                    &bull; Severe infections (sepsis)
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                    &bull; Certain medicines (BP drugs, diuretics)
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                    &bull; Hormonal disorders (adrenal/thyroid)
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                    &bull; Prolonged bed rest
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                    &bull; Pregnancy (normal vascular dilation)
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4 leading-relaxed">
                <div className="space-y-3">
                  <h2 className="text-lg font-bold text-white">
                    Common Symptoms of Low BP
                  </h2>
                  <ul className="grid grid-cols-2 gap-2 text-slate-300">
                    <li className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                      1. Dizziness / lightheadedness
                    </li>
                    <li className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                      2. Fainting (syncope)
                    </li>
                    <li className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                      3. Blurred or tunneling vision
                    </li>
                    <li className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                      4. Generalized weakness
                    </li>
                    <li className="p-2.5 rounded-lg bg-slate-950/75 border border-slate-800">
                      5. Nausea &amp; cold clammy skin
                    </li>
                    <li className="p-2.5 rounded-lg bg-slate-950/75 border border-rose-900/50 text-rose-300">
                      6. Confusion in severe cases
                    </li>
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-cyan-950/25 border border-cyan-500/30 text-cyan-200">
                  <strong>Clinical Rule:</strong> Not everyone with a low BP
                  number needs medication (for example, healthy athletes often
                  have resting BP around 95/60 mmHg).{" "}
                  <strong>Symptoms and the underlying cause</strong> determine
                  treatment.
                </div>
              </div>
            </div>

            {/* 4 Types of Hypotension */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                4 Clinical Types of Hypotension
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                {HYPOTENSION_TYPES.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-2 leading-relaxed"
                  >
                    <h4 className="text-base font-bold text-cyan-300">
                      {item.type}
                    </h4>
                    <p className="text-slate-300">
                      <strong className="text-white">Meaning: </strong>
                      {item.meaning}
                    </p>
                    <p className="text-slate-400 pt-2 border-t border-slate-800/80">
                      <strong className="text-emerald-300">Approach: </strong>
                      {item.management}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: TYPES OF BP MEDICINES (7 GROUPS AS FILTERABLE CARDS)               */}
        {/* ========================================================================= */}
        {activeTab === "antihypertensives" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Important Distinction Banner */}
            <div className="p-5 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <strong className="text-amber-300 text-xs uppercase font-mono block mb-1">
                Important Pharmacology Distinction
              </strong>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Not all BP medicines are receptor &quot;blockers.&quot; Some
                block adrenergic or angiotensin receptors (
                <strong>Beta blockers, Alpha blockers, ARBs</strong>), some
                block ion channels or enzymes (
                <strong>CCBs, ACE inhibitors</strong>), and others remove excess
                salt and water via the kidneys (<strong>Diuretics</strong>).
              </p>
            </div>

            {/* Search & Group Filter Bar */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={medSearch}
                    onChange={(e) => setMedSearch(e.target.value)}
                    placeholder="Search Amlodipine, Telmisartan, Ramipril, Metoprolol, Chlorthalidone..."
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
                    {filteredCards.length}
                  </strong>{" "}
                  of <strong>{BP_MEDICINE_CARDS.length}</strong>{" "}
                  antihypertensive groups
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {BP_CLASS_FILTERS.map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => setSelectedBpClass(cls)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedBpClass === cls
                        ? "bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.35)]"
                        : "bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>

            {/* 7 Drug Group Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCards.map((card) => (
                <div
                  key={card.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
                        {card.code}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-2">
                        {card.name}
                      </h3>
                    </div>

                    <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/70 pt-3">
                      <div>
                        <strong className="text-teal-300">Main Action: </strong>
                        <span>{card.mainAction}</span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                        <strong className="text-cyan-300 block">
                          How Do They Work?
                        </strong>
                        <ul className="space-y-1 text-slate-300">
                          {card.howItWorks.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <strong className="text-amber-300">Examples: </strong>
                        <span className="font-mono text-slate-200">
                          {card.examples}
                        </span>
                      </div>

                      <div>
                        <strong className="text-white">Used For: </strong>
                        <span>{card.usedFor}</span>
                      </div>

                      <div>
                        <strong className="text-rose-300">
                          Important Side Effects &amp; Precautions:{" "}
                        </strong>
                        <span>{card.sideEffectsAndCaution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-[11px] text-slate-300">
                    <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-300">
                        Clinical Pearl:
                      </strong>{" "}
                      {card.clinicalPearl}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: QUICK COMPARISON — ALL MAJOR BP MEDICINE CLASSES                   */}
        {/* ========================================================================= */}
        {activeTab === "comparison" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <h2 className="text-xl font-bold text-white">
                Quick Comparison — All Major BP Medicine Classes
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Rapid revision summary matching each antihypertensive class to
                its primary physiological target and prototype examples.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5 text-amber-300">Medicine Class</th>
                    <th className="p-3.5 text-teal-300">
                      What Does It Mainly Affect?
                    </th>
                    <th className="p-3.5 text-cyan-300">Key Drug Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {QUICK_COMPARISON_ROWS.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="p-3.5 font-bold text-white">
                        {row.medicineClass}
                      </td>
                      <td className="p-3.5 font-semibold text-teal-300">
                        {row.target}
                      </td>
                      <td className="p-3.5 font-mono text-slate-300">
                        {row.examples}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {/* ========================================================================= */}
        {/* NEW SECTION: MEDICINES USES, SIDE EFFECTS & SUPPORTING VITAMINS (2 TABS)  */}
        {/* ========================================================================= */}
        {activeTab === "medicines" && (
          <section
            id="bp-medicines-vitamins"
            className="space-y-6 pt-8 border-t border-slate-800/80 scroll-mt-28"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                  Indian Formulary &amp; Micronutrient Synergy
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  BP Medicines: Uses, Side Effects &amp; Supporting Vitamins
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
                  Switch between{" "}
                  <strong>Brand / Fixed-Dose Combinations</strong> and{" "}
                  <strong>Individual Single-Ingredient Medicines</strong> to
                  inspect clinical uses, side effects, and supportive
                  vitamins/minerals (including potassium precautions).
                </p>
              </div>

              <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl shrink-0">
                Showing{" "}
                <strong className="text-emerald-300">
                  {filteredFormulations.length}
                </strong>{" "}
                {formulationSubTab === "brand-combo"
                  ? "combinations"
                  : "individual medicines"}
              </span>
            </div>

            {/* 2 Sub-Tabs + Search Bar */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              <div className="inline-flex p-1.5 rounded-xl border border-slate-800 bg-slate-950 gap-1.5">
                <button
                  type="button"
                  onClick={() => setFormulationSubTab("brand-combo")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    formulationSubTab === "brand-combo"
                      ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  1. Brand / Combinations (
                  {
                    BP_FORMULATION_CARDS.filter(
                      (c) => c.tabCategory === "brand-combo",
                    ).length
                  }
                  )
                </button>

                <button
                  type="button"
                  onClick={() => setFormulationSubTab("individual")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    formulationSubTab === "individual"
                      ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  2. Other Medicines — Individuals (
                  {
                    BP_FORMULATION_CARDS.filter(
                      (c) => c.tabCategory === "individual",
                    ).length
                  }
                  )
                </button>
              </div>

              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  placeholder="Search Tsart, Amlosafe, Nebi, Embeta, CoQ10..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/60"
                />
                {brandSearch && (
                  <button
                    type="button"
                    onClick={() => setBrandSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white bg-slate-800 px-1.5 py-0.5 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Medicine Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredFormulations.map((med) => (
                <div
                  key={med.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-bold">
                          {med.drugClass}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {med.genericName}
                      </h3>
                      <div className="mt-2 p-2.5 rounded-xl bg-slate-950/85 border border-slate-800 text-xs">
                        <span className="text-[10px] font-mono uppercase text-amber-300 font-bold block mb-0.5">
                          Brand Examples (CP):
                        </span>
                        <span className="font-mono text-slate-200">
                          {med.brandExamples}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800/70 pt-3">
                      <div>
                        <strong className="text-teal-300">Uses: </strong>
                        <span>{med.uses}</span>
                      </div>
                      <div>
                        <strong className="text-rose-300">
                          Side Effects &amp; Precautions:{" "}
                        </strong>
                        <span>{med.sideEffects}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-indigo-950/25 border border-indigo-500/30">
                        <strong className="text-indigo-300 block mb-0.5">
                          Supporting Vitamins &amp; Nutrients to Use:
                        </strong>
                        <span className="text-slate-200">
                          {med.supportingVitaminsAndNutrients}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-[11px] text-slate-300">
                    <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-emerald-300">
                        Clinical Pearl:
                      </strong>{" "}
                      {med.clinicalNote}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
