"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Wind,
  Activity,
  AlertCircle,
  AlertTriangle,
  ShieldAlert,
  Brain,
  Info,
  CheckCircle2,
  Droplets,
  Flame,
  Stethoscope,
  Pill,
  Search,
  ExternalLink,
  BookOpen,
} from "lucide-react";

type CoughCategory =
  | "All"
  | "Antitussive / Suppressants"
  | "Demulcents / Throat Soothers"
  | "Expectorants"
  | "Mucolytics"
  | "Prescription-Strength Antitussives";

interface CoughMedicine {
  id: string;
  name: string;
  subGroup: string;
  category: Exclude<CoughCategory, "All">;
  drugClass: string;
  routeSlug?: string;
  mechanism: string;
  mainAction: string;
  usedFor: string;
  whoCanUse: string;
  caution: string;
  sideEffects: string;
  overuse: string;
  keyPearl: string;
}

const COUGH_MEDICINES: CoughMedicine[] = [
  // =========================================================================
  // 1. ANTITUSSIVE / COUGH SUPPRESSANTS
  // =========================================================================
  {
    id: "dextromethorphan",
    name: "Dextromethorphan (DXM)",
    subGroup: "Central Non-Opioid Antitussive",
    category: "Antitussive / Suppressants",
    drugClass: "Morphinan Derivative (Sigma-1 Agonist / NMDA Antagonist)",
    routeSlug: "/medical/dextromethorphan",
    mechanism:
      "Acts centrally in the brainstem medulla (Nucleus Tractus Solitarius) as a sigma-1 receptor agonist and uncompetitive NMDA receptor antagonist, elevating the threshold required to fire a cough reflex without binding mu-opioid receptors at therapeutic doses.",
    mainAction: "Central cough reflex suppression (6–8 hours).",
    usedFor:
      "Acute dry, hacking, non-productive cough from viral URIs or post-viral throat irritation.",
    whoCanUse:
      "Adults & adolescents >= 12y: 10–20 mg q4h or 30 mg q6–8h (Max 120 mg/day). Children 6–11y: 5–10 mg q4h (Max 60 mg/day).",
    caution:
      "Avoid in children < 4–6y, productive wet cough, chronic asthma/COPD, and patients taking MAOIs or SSRIs/SNRIs.",
    sideEffects: "Mild drowsiness, dizziness, nausea, GI upset.",
    overuse:
      "High doses (> 150–300+ mg) cause dissociative hallucinations ('robo-tripping'), ataxia, tachycardia, hypertension, serotonin syndrome (with SSRIs), and respiratory depression.",
    keyPearl:
      "Strict 14-day washout required with MAO inhibitors to prevent fatal Serotonin Syndrome.",
  },
  {
    id: "codeine",
    name: "Codeine Phosphate",
    subGroup: "Central Opioid Antitussive",
    category: "Antitussive / Suppressants",
    drugClass: "Opioid Alkaloid Antitussive (Schedule H / Controlled)",
    routeSlug: "/medical/codeine",
    mechanism:
      "Hepatic CYP2D6 demethylates ~10% of codeine into morphine, which binds brainstem mu-opioid receptors to directly depress medullary cough-center excitability.",
    mainAction: "Potent central medullary cough suppression + mild analgesia.",
    usedFor:
      "Severe, painful, sleep-destroying refractory dry cough in adults when non-opioids fail.",
    whoCanUse:
      "Adults >= 18 years only: 10–20 mg every 4–6 hours (Max 120 mg/24h) for short-term (< 3–5 days) use.",
    caution:
      "Contraindicated in children < 18 years, breastfeeding mothers, CYP2D6 ultra-rapid metabolizers, asthma/COPD, and wet phlegmy cough.",
    sideEffects: "Constipation, sedation, nausea, dry mouth, dizziness.",
    overuse:
      "Respiratory depression, pinpoint pupils (miosis), coma, physical dependence, and fatal apnea (reversed by IV Naloxone).",
    keyPearl:
      "FDA strictly contraindicates Codeine in anyone under 18 years due to fatal pediatric respiratory arrest.",
  },
  {
    id: "pholcodine",
    name: "Pholcodine",
    subGroup: "Central Opioid Antitussive",
    category: "Antitussive / Suppressants",
    drugClass:
      "Morphine-Derivative Central Antitussive (Withdrawn in EU/UK/India)",
    routeSlug: "/medical/pholcodine",
    mechanism:
      "Directly depresses the medullary cough center with minimal conversion to morphine, producing cough suppression without significant analgesia or euphoria.",
    mainAction: "Long-acting central cough reflex inhibition.",
    usedFor:
      "Historically used for dry non-productive cough (now withdrawn in many countries).",
    whoCanUse: "Adults (where still permitted): 5–15 mg up to 3–4 times daily.",
    caution:
      "Withdrawn across Europe, UK, Australia, and India due to cross-sensitization anaphylaxis with neuromuscular blocking agents (NMBAs) during general anesthesia.",
    sideEffects: "Drowsiness, constipation, dizziness, nausea.",
    overuse:
      "CNS depression, respiratory slowing, and severe perioperative anaphylactic risk if general anesthesia is needed within 12 months.",
    keyPearl:
      "Patients who took Pholcodine within the past 12 months face elevated anaphylaxis risk during surgical anesthesia.",
  },
  {
    id: "noscapine",
    name: "Noscapine",
    subGroup: "Central Non-Narcotic Alkaloid",
    category: "Antitussive / Suppressants",
    drugClass: "Benzylisoquinoline Opium Alkaloid (Non-Addictive Antitussive)",
    routeSlug: "/medical/noscapine",
    mechanism:
      "Acts centrally via sigma-1 opioid receptors and bradykinin-pathway modulation to suppress the cough reflex without binding mu-opioid receptors—producing zero analgesia, zero euphoria, and zero respiratory depression.",
    mainAction: "Non-sedating central cough suppression.",
    usedFor:
      "Dry irritative cough, post-viral cough, and ACE-inhibitor-related cough.",
    whoCanUse:
      "Adults: 15–30 mg 3–4 times daily. Children 6–12y: 7.5–15 mg 3 times daily.",
    caution:
      "Warfarin interaction (inhibits CYP2C9 and elevates INR), pregnancy, and wet productive cough.",
    sideEffects: "Mild headache, dizziness, nausea, occasional drowsiness.",
    overuse:
      "Nausea, vomiting, tachycardia, hypotension, and CNS excitation/agitation at massive doses.",
    keyPearl:
      "Derived from opium poppy latex but completely non-narcotic and non-constipating.",
  },
  {
    id: "butamirate",
    name: "Butamirate Citrate",
    subGroup: "Central Non-Opioid + Bronchospasmolytic",
    category: "Antitussive / Suppressants",
    drugClass:
      "Non-Opioid Central Antitussive & Anticholinergic Bronchodilator",
    routeSlug: "/medical/butamirate",
    mechanism:
      "Acts centrally on the brainstem cough center to reduce cough frequency while exerting direct musculotropic and anticholinergic bronchodilation that lowers airway resistance.",
    mainAction:
      "Central cough suppression + mild bronchial smooth muscle relaxation.",
    usedFor:
      "Acute dry cough, whooping-like paroxysmal cough, and pre/post-bronchoscopy cough suppression.",
    whoCanUse:
      "Adults: 15 mg syrup QID or 50 mg SR tablet BID. Children >= 3y: weight-adjusted syrup.",
    caution:
      "First trimester of pregnancy, children < 3 years (for standard syrups), and productive sputum retention.",
    sideEffects: "Rare drowsiness (< 1%), nausea, diarrhea, or skin rash.",
    overuse:
      "Somnolence, nausea, vomiting, dizziness, diarrhea, and mild hypotension (treated with activated charcoal + supportive care).",
    keyPearl:
      "Does not depress respiration or cause constipation; safe alternative to codeine.",
  },
  {
    id: "pentoxyverine",
    name: "Pentoxyverine (Carbetapentane)",
    subGroup: "Mixed Central & Peripheral Antitussive",
    category: "Antitussive / Suppressants",
    drugClass:
      "Non-Opioid Central Sigma-1 Agonist & Local Anesthetic Antitussive",
    routeSlug: "/medical/pentoxyverine",
    mechanism:
      "Combines central sigma-1 receptor cough-center inhibition with mild peripheral local anesthetic and antispasmodic effects on bronchial stretch receptors.",
    mainAction: "Dual central + peripheral dry cough suppression.",
    usedFor: "Dry, spasmodic, non-productive cough in acute tracheobronchitis.",
    whoCanUse:
      "Adults: 15–30 mg 3–4 times daily (Max 120 mg/day). Children >= 6y: weight-adjusted.",
    caution:
      "Narrow-angle glaucoma, urinary retention (mild anticholinergic effect), pregnancy, and children < 6y.",
    sideEffects:
      "Dry mouth, mild drowsiness, dizziness, epigastric discomfort.",
    overuse:
      "Anticholinergic agitation, tachycardia, blurred vision, respiratory depression in young children.",
    keyPearl:
      "Classified as mixed-acting due to combined medullary suppression and mild local airway spasmolysis.",
  },
  {
    id: "cloperastine",
    name: "Cloperastine",
    subGroup: "Central Antitussive + H1 Antihistamine",
    category: "Antitussive / Suppressants",
    drugClass:
      "Dual Central Cough Suppressant & Peripheral H1 Receptor Antagonist",
    routeSlug: "/medical/cloperastine",
    mechanism:
      "Selectively inhibits the bulbar cough center while exerting mild peripheral H1 antihistaminic and papaverine-like antispasmodic actions on bronchial smooth muscle.",
    mainAction: "Central cough suppression + allergic throat-tickle relief.",
    usedFor:
      "Dry cough associated with allergic rhinitis, post-nasal drip, or acute viral laryngotracheitis.",
    whoCanUse:
      "Adults: 10–20 mg 3 times daily (especially effective before bedtime). Children >= 2y: weight-adjusted suspension.",
    caution:
      "Concurrent CNS depressants, alcohol, narrow-angle glaucoma, and prostatic hypertrophy.",
    sideEffects: "Mild drowsiness, dry mouth, transient GI discomfort.",
    overuse:
      "CNS sedation, anticholinergic dry mouth, dizziness, and restlessness.",
    keyPearl:
      "Particularly useful when nocturnal allergic post-nasal drip triggers dry coughing.",
  },
  {
    id: "levodropropizine",
    name: "Levodropropizine",
    subGroup: "Peripheral Non-Opioid Antitussive",
    category: "Antitussive / Suppressants",
    drugClass: "Peripherally Acting Vagal C-Fiber Antitussive",
    routeSlug: "/medical/levodropropizine",
    mechanism:
      "Acts peripherally in the tracheobronchial tree by inhibiting sensory vagal C-fiber activation and blocking neuropeptide release (Substance P, CGRP), without crossing the blood-brain barrier.",
    mainAction: "Zero-sedation peripheral cough reflex inhibition.",
    usedFor:
      "Dry non-productive cough in acute bronchitis, post-viral cough, and daytime workers/drivers.",
    whoCanUse:
      "Adults & adolescents >= 12y: 60 mg (10 mL) up to 3 times daily (at least 6h apart). Children >= 2y: 1 mg/kg TID.",
    caution:
      "Excessive bronchial mucus hypersecretion, Kartagener syndrome / ciliary dyskinesia, severe liver impairment, pregnancy/lactation.",
    sideEffects:
      "Nausea, dyspepsia, mild fatigue, dizziness, palpitations (rare).",
    overuse:
      "Transient tachycardia, dizziness, nausea, and mild somnolence (no respiratory depression).",
    keyPearl:
      "Gold-standard non-sedating peripheral alternative to Dextromethorphan and Codeine.",
  },
  {
    id: "benzonatate",
    name: "Benzonatate (Tessalon Perles)",
    subGroup: "Peripheral Stretch-Receptor Anesthetic",
    category: "Antitussive / Suppressants",
    drugClass:
      "Tetracaine-Derivative Peripheral Local Anesthetic Antitussive (Rx)",
    routeSlug: "/medical/benzonatate",
    mechanism:
      "Chemically related to tetracaine; selectively anesthetizes vagal pulmonary stretch receptors in the lungs, pleura, and airways—dampening the cough impulse at its peripheral source without central CNS depression.",
    mainAction:
      "Peripheral airway stretch-receptor anesthesia (onset 15–20 min; lasts 3–8 hours).",
    usedFor:
      "Refractory dry cough in acute bronchitis, pneumonia, pleurisy, or post-thoracic procedures.",
    whoCanUse:
      "Adults & children >= 10 years: 100–200 mg 3 times daily as needed (Max 600 mg/day).",
    caution:
      "Strictly contraindicated in children < 10 years; NEVER bite, chew, cut, or dissolve capsules.",
    sideEffects:
      "Mild sedation, headache, dizziness, nasal congestion, GI upset.",
    overuse:
      "Biting capsules or overdose causes rapid oral/pharyngeal numbness, choking, laryngospasm, seizures, cardiac arrhythmias, and sudden death.",
    keyPearl:
      "Swallow liquid-filled capsules strictly whole with water; fatal toxicity can occur within minutes if chewed.",
  },
  {
    id: "moguisteine",
    name: "Moguisteine",
    subGroup: "Peripheral Non-Narcotic Antitussive",
    category: "Antitussive / Suppressants",
    drugClass: "Peripherally Acting Non-Opioid Antitussive",
    routeSlug: "/medical/moguisteine",
    mechanism:
      "Acts peripherally on tracheobronchial rapidly adapting irritant receptors (RARs) via ATP-sensitive potassium channel modulation, suppressing cough without central nervous system or opioid receptor activity.",
    mainAction: "Peripheral non-sedating cough suppression.",
    usedFor:
      "Dry cough associated with acute upper respiratory infections, chronic bronchitis, or pulmonary fibrosis.",
    whoCanUse: "Adults: 100–200 mg 3 times daily (Max 600 mg/day).",
    caution:
      "Pregnancy, lactation, children, and productive wet cough with heavy sputum.",
    sideEffects: "Nausea, epigastric pain, vomiting, dry mouth, mild headache.",
    overuse: "Gastrointestinal distress, vomiting, and mild dizziness.",
    keyPearl:
      "Metabolized rapidly into active R-(+) and S-(-) carboxylic acid metabolites with zero dependence liability.",
  },
  {
    id: "prenoxdiazine",
    name: "Prenoxdiazine",
    subGroup: "Peripheral Local Anesthetic + Antispasmodic",
    category: "Antitussive / Suppressants",
    drugClass: "Peripherally Acting Antitussive & Bronchospasmolytic",
    routeSlug: "/medical/prenoxdiazine",
    mechanism:
      "Exerts a local anesthetic effect on bronchial stretch receptors and relaxes bronchial smooth muscle without depressing the central medullary respiratory center.",
    mainAction:
      "Peripheral cough suppression + bronchial spasm relief (3–4 hours).",
    usedFor:
      "Dry, spasmodic cough in acute/chronic bronchitis and pre-bronchoscopy preparation.",
    whoCanUse:
      "Adults: 100 mg 3–4 times daily (up to 200 mg TID in severe cases).",
    caution:
      "Swallow tablets whole (chewing causes temporary tongue numbness); avoid in excessive bronchial secretions.",
    sideEffects:
      "Temporary oral/tongue numbness if chewed, dry mouth, mild nausea.",
    overuse: "Mild sedation, nausea, and transient oral paresthesia.",
    keyPearl:
      "Equipotent to codeine in peripheral cough suppression without respiratory depression or constipation.",
  },
  {
    id: "oxolamine",
    name: "Oxolamine",
    subGroup: "Peripheral Anti-Inflammatory Antitussive",
    category: "Antitussive / Suppressants",
    drugClass:
      "Oxadiazole-Derivative Peripheral Antitussive & Airway Anti-Inflammatory",
    routeSlug: "/medical/oxolamine",
    mechanism:
      "Reduces tracheobronchial mucosal inflammation, capillary permeability, and sensory nerve ending irritation locally in the respiratory tract without central narcotic action.",
    mainAction: "Peripheral anti-inflammatory cough relief.",
    usedFor:
      "Dry irritative cough in acute laryngitis, tracheitis, and viral bronchitis.",
    whoCanUse:
      "Adults: 100–200 mg 3–4 times daily. Children: weight-adjusted syrup.",
    caution:
      "Patients taking anticoagulants (rare reports of prolonged prothrombin time) and wet productive cough.",
    sideEffects:
      "Nausea, heartburn, drowsiness, rare visual hallucinations in high pediatric doses.",
    overuse: "Dizziness, agitation, nausea, and rare transient hallucinations.",
    keyPearl:
      "Combines mild analgesic/anti-inflammatory mucosal soothing with peripheral cough suppression.",
  },
  {
    id: "diphenhydramine",
    name: "Diphenhydramine",
    subGroup: "1st-Gen Antihistamine Cough Suppressant",
    category: "Antitussive / Suppressants",
    drugClass: "First-Generation Ethanolamine H1 Antihistamine & Antitussive",
    routeSlug: "/medical/diphenhydramine",
    mechanism:
      "Crosses the blood-brain barrier to block central H1 and muscarinic M1/M3 receptors—drying post-nasal drip secretions and raising the central brainstem cough threshold.",
    mainAction: "Nocturnal cough suppression + secretion drying + sedation.",
    usedFor:
      "Nighttime cough triggered by post-nasal drip, allergic rhinitis, or viral upper respiratory infections.",
    whoCanUse:
      "Adults: 25 mg every 4–6 hours (Max 150 mg/day for cough). Children 6–11y: 12.5 mg q4–6h.",
    caution:
      "Contraindicated in children < 6y, narrow-angle glaucoma, BPH urinary retention, elderly (Beers Criteria), and daytime driving.",
    sideEffects:
      "Marked drowsiness, dry mouth, blurred vision, constipation, urinary hesitancy.",
    overuse:
      "Anticholinergic delirium ('mad as a hatter'), hyperthermia, tachycardia, mydriasis, seizures, and QTc prolongation.",
    keyPearl:
      "FDA-approved as an OTC antitussive, but best reserved strictly for bedtime dosing.",
  },
  {
    id: "promethazine",
    name: "Promethazine",
    subGroup: "Phenothiazine Antihistamine Antitussive",
    category: "Antitussive / Suppressants",
    drugClass: "First-Generation Phenothiazine H1 Antagonist (Rx)",
    routeSlug: "/medical/promethazine",
    mechanism:
      "Blocks central H1, muscarinic cholinergic, and dopamine D2 receptors—suppressing nocturnal cough reflexes, drying upper airway secretions, and preventing cough-induced vomiting.",
    mainAction:
      "Potent nocturnal sedation + central cough & emesis suppression.",
    usedFor:
      "Severe nocturnal dry cough with post-nasal drip or cough-triggered nausea/vomiting.",
    whoCanUse:
      "Adults & children >= 6 years: 6.25–12.5 mg every 4–6 hours (Max 75 mg/day).",
    caution:
      "FDA Boxed Warning: STRICTLY CONTRAINDICATED in children < 2 years (fatal respiratory depression); use caution in asthma/COPD.",
    sideEffects:
      "Heavy sedation, dry mouth, dizziness, extrapyramidal dystonia, orthostatic hypotension.",
    overuse:
      "Severe CNS depression, respiratory arrest, neuroleptic malignant syndrome, and anticholinergic delirium.",
    keyPearl:
      "Never use in toddlers under 2 years due to fatal respiratory depression risk.",
  },
  {
    id: "menthol",
    name: "Menthol (Topical / Lozenge / Vapor)",
    subGroup: "TRPM8 Cold-Receptor Counterirritant",
    category: "Antitussive / Suppressants",
    drugClass: "Monoterpene TRPM8 Agonist & Local Anesthetic Antitussive",
    routeSlug: "/medical/vicks-inhaler",
    mechanism:
      "Activates cold-sensitive TRPM8 ion channels on trigeminal and laryngeal sensory nerves, desensitizing C-fiber cough receptors and creating an immediate cooling sensation of open airflow.",
    mainAction: "Rapid local throat cooling + sensory cough desensitization.",
    usedFor:
      "Throat tickle, dry irritative cough, and nasal congestion in viral common colds.",
    whoCanUse:
      "Adults & children >= 2 years (for topical chest rubs); >= 5–6 years for lozenges.",
    caution:
      "Never apply directly into nostrils or face of infants/toddlers (< 2 years)—can trigger reflex laryngospasm and apnea.",
    sideEffects:
      "Mild skin/mucosal cooling irritation, heartburn (if swallowed in excess).",
    overuse:
      "Oral ingestion of concentrated camphor/menthol rubs causes seizures, ataxia, and mucosal burns.",
    keyPearl:
      "Improves subjective airflow perception via TRPM8 nerve stimulation without shrinking blood vessels.",
  },

  // =========================================================================
  // 2. DEMULCENTS / THROAT SOOTHERS
  // =========================================================================
  {
    id: "glycerin",
    name: "Glycerin (Glycerol)",
    subGroup: "Common Demulcent Base",
    category: "Demulcents / Throat Soothers",
    drugClass: "Hygroscopic Polyol Mucosal Demulcent",
    mechanism:
      "Forms a viscous, moisture-retaining protective film over inflamed pharyngeal mucosa, shielding exposed TRPV1 cough nerve endings from dry air and mechanical irritation.",
    mainAction: "Physical pharyngeal coating + mucosal hydration.",
    usedFor: "Dry, scratchy throat, pharyngitis, and dry hacking cough.",
    whoCanUse: "Safe for adults, pregnant mothers, and children >= 1 year.",
    caution:
      "Generally recognized as safe; high oral osmotic doses may cause mild loose stools.",
    sideEffects: "Rare mild GI upset or transient sweet aftertaste.",
    overuse: "Mild osmotic diarrhea or nausea if an entire bottle is ingested.",
    keyPearl:
      "Primary soothing vehicle in pediatric cough syrups (e.g., Simple Linctus / Glycerin-Honey-Lemon).",
  },
  {
    id: "honey",
    name: "Honey (Medical / Buckwheat / Raw)",
    subGroup: "Common Demulcent & Lozenge Base",
    category: "Demulcents / Throat Soothers",
    drugClass: "Natural Hyperosmolar Mucilaginous Demulcent & Antioxidant",
    mechanism:
      "High viscosity coats pharyngeal nerve endings, hyperosmolarity draws fluid to soothe inflamed tissue, and natural sweetness triggers reflex salivation/swallowing that inhibits brainstem cough firing.",
    mainAction:
      "Superior nocturnal dry cough soothing (outperforms DXM in pediatric trials).",
    usedFor:
      "Nocturnal dry cough, sore throat, and acute viral URI throat irritation.",
    whoCanUse:
      "Adults & children >= 1 year: 1–2 teaspoons (5–10 mL) 30 minutes before bedtime.",
    caution:
      "STRICTLY CONTRAINDICATED in infants < 12 months (risk of fatal infant botulism from Clostridium botulinum spores); monitor glucose in diabetics.",
    sideEffects:
      "Dental caries if used nightly without rinsing; blood glucose spike in diabetes.",
    overuse: "Hyperglycemia and gastrointestinal upset.",
    keyPearl:
      "Recommended by WHO and AAP as first-line bedtime cough relief for children over 1 year old.",
  },
  {
    id: "pectin",
    name: "Pectin",
    subGroup: "Common Demulcent & Lozenge Base",
    category: "Demulcents / Throat Soothers",
    drugClass: "Plant-Derived Polysaccharide Mucilage Demulcent",
    mechanism:
      "Swells in saliva to form a soothing, protective hydrogel layer over irritated oropharyngeal mucosa, preventing dry-air friction on cough receptors.",
    mainAction: "Long-lasting lozenge mucosal coating.",
    usedFor:
      "Dry throat tickle, hoarseness, and non-productive cough in throat lozenges.",
    whoCanUse:
      "Adults and children >= 5 years (lozenge choking precaution in younger children).",
    caution:
      "Avoid hard lozenges in children < 4–5 years due to choking hazard.",
    sideEffects:
      "Virtually none (mild bloating if consumed in massive quantities).",
    overuse: "Mild flatulence or loose stools from soluble fiber fermentation.",
    keyPearl:
      "Ideal non-mentholated throat lozenge option for patients who dislike strong mint.",
  },
  {
    id: "liquid-glucose-sucrose",
    name: "Liquid Glucose & Sucrose Syrup",
    subGroup: "Syrup Demulcent Vehicles",
    category: "Demulcents / Throat Soothers",
    drugClass: "Hyperosmolar Carbohydrate Demulcent Vehicles",
    mechanism:
      "Provides thick, viscous pharyngeal coating while stimulating gustatory sweet taste receptors (glossopharyngeal/vagus nerves) to trigger reflex salivation and swallow-induced cough inhibition.",
    mainAction:
      "Immediate physical throat lubrication + gustatory cough reflex dampening.",
    usedFor:
      "Dry, tickling throat cough and base vehicle for pediatric cough linctuses.",
    whoCanUse: "Non-diabetic adults and children >= 1 year.",
    caution:
      "Diabetic patients (use sugar-free sorbitol/xylitol syrups like Sugar-Free COFAID instead) and dental hygiene.",
    sideEffects: "Blood sugar elevation, dental plaque.",
    overuse: "Hyperglycemia and osmotic GI upset.",
    keyPearl:
      "Up to 80% of the benefit of classic OTC cough syrups comes from the viscous sweet demulcent vehicle itself.",
  },
  {
    id: "acacia-tragacanth",
    name: "Acacia (Gum Arabic) & Tragacanth",
    subGroup: "Botanical Gum Demulcents",
    category: "Demulcents / Throat Soothers",
    drugClass: "Natural Hydrocolloid Polysaccharide Demulcents",
    mechanism:
      "Forms a tenacious, soothing mucilaginous film over inflamed mucous membranes, reducing mechanical irritation in the pharynx and larynx.",
    mainAction: "Sustained mucosal barrier protection.",
    usedFor: "Sore throat pastilles, pharyngitis, and dry irritative cough.",
    whoCanUse: "Adults and children >= 5 years.",
    caution:
      "Rare botanical gum allergy; choking risk with hard pastilles in toddlers.",
    sideEffects: "Minimal; occasional mild bloating.",
    overuse: "Mild gastrointestinal gas or soft stools.",
    keyPearl:
      "Classic pharmaceutical suspending and demulcent agents in throat pastilles.",
  },
  {
    id: "marshmallow-slippery-elm-iceland-moss",
    name: "Marshmallow Root, Slippery Elm & Iceland Moss",
    subGroup: "Herbal Mucilage Demulcents",
    category: "Demulcents / Throat Soothers",
    drugClass: "Botanical Polysaccharide Mucilage Demulcents",
    mechanism:
      "Rich in soluble mucilage polysaccharides that absorb water and coat irritated pharyngeal and laryngeal tissues with a protective bio-adhesive gel layer.",
    mainAction: "Soothing bio-adhesive throat protection.",
    usedFor: "Dry cough, laryngitis, vocal strain, and pharyngitis.",
    whoCanUse: "Adults and children >= 3–6 years (in syrups/teas).",
    caution:
      "May delay GI absorption of concurrent oral medications if taken simultaneously—space by 1–2 hours.",
    sideEffects: "Rare mild stomach upset or allergic sensitivity.",
    overuse: "Mild laxative/bloating effect from mucilage fiber.",
    keyPearl:
      "Space oral prescription drugs 1–2 hours apart from heavy mucilage herbs to ensure full drug absorption.",
  },
  {
    id: "liquorice-mulethi",
    name: "Liquorice / Mulethi (Glycyrrhiza glabra / Yashtimadhu)",
    subGroup: "Herbal Demulcent & Expectorant",
    category: "Demulcents / Throat Soothers",
    drugClass: "Triterpenoid Saponin (Glycyrrhizin) & Flavonoid Demulcent",
    mechanism:
      "Coatings of glycyrrhizin and mucilage soothe pharyngeal inflammation, reduce mucosal edema, and stimulate tracheal mucus secretion to loosen dry throat irritation.",
    mainAction:
      "Mucosal anti-inflammatory + throat demulcent + mild expectorant.",
    usedFor:
      "Sore throat, hoarseness, dry cough, and Ayurvedic Kasa formulations.",
    whoCanUse: "Adults and children (short-term therapeutic lozenges/syrups).",
    caution:
      "Avoid high-dose prolonged use in hypertension, heart failure, hypokalemia, kidney disease, and pregnancy (glycyrrhizin mimics aldosterone).",
    sideEffects:
      "Minimal at standard lozenge doses; chronic high intake causes sodium/water retention and low potassium.",
    overuse:
      "Pseudoaldosteronism (hypertension, hypokalemia, edema, muscle weakness).",
    keyPearl:
      "Deglycyrrhizinated licorice (DGL) removes the blood-pressure risk while keeping mucosal soothing.",
  },
  {
    id: "benzocaine-lidocaine-lozenges",
    name: "Benzocaine & Lidocaine (Anesthetic Lozenges)",
    subGroup: "Throat-Soothing Lozenge Anesthetics",
    category: "Demulcents / Throat Soothers",
    drugClass:
      "Topical Voltage-Gated Sodium Channel Blockers (Local Anesthetics)",
    mechanism:
      "Reversibly block voltage-gated Na+ channels on pharyngeal sensory nerve endings, numbing painful throat receptors and silencing the afferent cough trigger.",
    mainAction: "Rapid local throat numbing and pain/tickle relief.",
    usedFor:
      "Painful pharyngitis, tonsillitis, and severe throat-tickle dry cough.",
    whoCanUse:
      "Adults & children >= 6–12 years (allow lozenge to dissolve slowly; do not chew).",
    caution:
      "FDA Warning: Avoid Benzocaine in children < 2 years (risk of life-threatening Methemoglobinemia); avoid eating/drinking while throat is numb (aspiration risk).",
    sideEffects:
      "Temporary numbness of tongue/throat, altered taste, rare allergic contact dermatitis.",
    overuse:
      "Methemoglobinemia (chocolate-brown blood, cyanosis, hypoxia—treated with IV Methylene Blue) or systemic CNS/cardiac toxicity.",
    keyPearl:
      "Wait until throat numbness wears off before eating or drinking hot liquids to prevent choking or burns.",
  },
  {
    id: "amylmetacresol-dichlorobenzyl",
    name: "Amylmetacresol & 2,4-Dichlorobenzyl Alcohol (Strepsils / Lemon Lozenges)",
    subGroup: "Antiseptic & Citrus Throat Lozenges",
    category: "Demulcents / Throat Soothers",
    drugClass: "Topical Oropharyngeal Antiseptics & Mild Local Anesthetics",
    mechanism:
      "Exerts broad-spectrum bactericidal/virucidal antiseptic activity in saliva while blocking voltage-gated sodium channels (paired with citric/lemon sialagogues) to soothe sore throat pain.",
    mainAction:
      "Local throat antisepsis + gustatory salivation + mild pharyngeal analgesia.",
    usedFor:
      "Acute sore throat, pharyngitis, and minor mouth/throat infections.",
    whoCanUse:
      "Adults & children >= 6 years: dissolve 1 lozenge slowly every 2–3 hours (Max 8–12 lozenges/day).",
    caution:
      "Children < 6 years (choking hazard) and diabetic patients (check sugar-free variants).",
    sideEffects:
      "Occasional tongue soreness, mild GI upset, rare hypersensitivity.",
    overuse:
      "Gastrointestinal irritation and osmotic diarrhea from excess lozenge excipients.",
    keyPearl:
      "Dissolve slowly in the mouth rather than chewing for sustained pharyngeal contact.",
  },
  {
    id: "herbal-soothers-tulsi-ginger-turmeric",
    name: "Tulsi, Vasaka, Ginger (Sunthi) & Turmeric (Haridra)",
    subGroup: "Herbal Throat-Soothing Actives",
    category: "Demulcents / Throat Soothers",
    drugClass: "Phyto-Pharmaceutical Anti-Inflammatory & Bronchodilator Herbs",
    mechanism:
      "Eugenol (Tulsi), gingerols (Ginger), curcumin (Turmeric), and vasicine (Vasaka) inhibit mucosal COX-2/NF-kB inflammation, relax bronchial smooth muscle, and soothe pharyngeal irritation.",
    mainAction:
      "Natural anti-inflammatory, antimicrobial, and airway-soothing synergy.",
    usedFor:
      "Viral sore throat, allergic throat tickle, and early acute bronchitis.",
    whoCanUse:
      "Adults and children (in standardized syrups, teas, or lozenges).",
    caution:
      "High-dose ginger/turmeric may mildly potentiate antiplatelet/anticoagulant bleeding risk.",
    sideEffects: "Mild heartburn or warm gastric sensation.",
    overuse: "Gastric acidity or reflux symptoms.",
    keyPearl:
      "Core botanical pillars in traditional Ayurvedic respiratory care.",
  },
  {
    id: "cofaid-syrup",
    name: "COFAID Syrup (Sugar-Free Herbal Cough Formula)",
    subGroup: "Polyherbal Demulcent & Expectorant Syrup Example",
    category: "Demulcents / Throat Soothers",
    drugClass: "Sugar-Free Ayurvedic Polyherbal Cough & Throat Formula",
    mechanism:
      "Combines 7 synergistic natural herbs—Vasa (Adhatoda vasica: bronchodilator/expectorant), Yasti (Liquorice: demulcent), Tulasi (antimicrobial/anti-allergic), Sunthi (Ginger: anti-inflammatory), Haridra (Turmeric: mucosal healing), Lavanga (Clove: eugenol throat anesthetic), and Amalaki (Amla: vitamin C antioxidant)—in a sugar-free base.",
    mainAction:
      "Non-drowsy, sugar-free throat soothing + mucus clearance + bronchial relaxation.",
    usedFor:
      "Dry & productive cough, smoker's cough, sore throat, and diabetic patients needing sugar-free relief.",
    whoCanUse:
      "Adults: 10 mL (2 teaspoons) 2–3 times daily. Children: 5 mL 2–3 times daily (safe for diabetics).",
    caution:
      "Check sorbitol/sweetener tolerance in IBS; consult physician in pregnancy.",
    sideEffects: "Well tolerated; rare mild GI discomfort.",
    overuse: "Mild osmotic loose stools from sugar-free polyol base.",
    keyPearl:
      "Ideal non-sedating, diabetic-safe polyherbal option bridging dry throat soothing and wet phlegm clearance.",
  },

  // =========================================================================
  // 3. EXPECTORANTS
  // =========================================================================
  {
    id: "guaifenesin",
    name: "Guaifenesin (Glyceryl Guaiacolate)",
    subGroup: "Primary Oral Expectorant",
    category: "Expectorants",
    drugClass: "Propanediol-Derivative Secretomotor Expectorant",
    routeSlug: "/medical/guaifenesin",
    mechanism:
      "Stimulates gastric vagal receptors to trigger a gastro-pulmonary reflex, increasing serous bronchial fluid output, lowering mucus viscosity/adhesiveness, and enhancing mucociliary clearance.",
    mainAction:
      "Increases respiratory tract fluid volume to loosen chest congestion.",
    usedFor:
      "Wet, productive cough with thick, sticky bronchial phlegm in acute bronchitis or sinusitis.",
    whoCanUse:
      "Adults & >= 12y: 200–400 mg q4h or 600–1200 mg ER q12h (Max 2,400 mg/day). Children 6–11y: 100–200 mg q4h.",
    caution:
      "Children < 4–6y, persistent chronic cough from smoking/asthma without evaluation, and dehydration.",
    sideEffects: "Nausea, vomiting, dizziness, headache, mild GI upset.",
    overuse:
      "Severe nausea, vomiting, drowsiness, and rare renal calculi (kidney stones) with chronic massive abuse.",
    keyPearl:
      "Always drink a full 250 mL glass of water with every dose—hydration is required for it to work.",
  },
  {
    id: "ammonium-chloride",
    name: "Ammonium Chloride",
    subGroup: "Saline Reflex Expectorant",
    category: "Expectorants",
    drugClass: "Acid-Forming Inorganic Saline Expectorant",
    mechanism:
      "Mildly irritates gastric mucosa to stimulate vagal reflex bronchial gland secretion, increasing watery respiratory tract fluid and thinning tenacious sputum.",
    mainAction: "Reflex bronchial fluid secretion.",
    usedFor:
      "Wet cough syrups (often combined with Diphenhydramine or Guaifenesin).",
    whoCanUse: "Adults: 250–500 mg every 4–6 hours in combination syrups.",
    caution:
      "Strictly contraindicated in severe liver disease (precipitates hepatic encephalopathy/ammonia toxicity) and renal insufficiency (metabolic acidosis).",
    sideEffects: "Nausea, gastric irritation, epigastric pain, thirst.",
    overuse:
      "Hyperchloremic metabolic acidosis, hyperammonemia, confusion, hyperventilation, and vomiting.",
    keyPearl:
      "Never use Ammonium Chloride cough syrups in patients with cirrhosis or kidney failure.",
  },
  {
    id: "potassium-iodide",
    name: "Potassium Iodide (SSKI)",
    subGroup: "Direct Glandular Secretory Expectorant",
    category: "Expectorants",
    drugClass: "Halide Salt Direct-Acting Expectorant",
    mechanism:
      "Directly stimulates bronchial submucosal glands to secrete watery fluid while enhancing protease-mediated breakdown of thick mucoproteins.",
    mainAction: "Potent liquefaction of thick, tenacious sputum.",
    usedFor:
      "Refractory thick mucus in chronic bronchitis, bronchiectasis, or cystic fibrosis (specialist use).",
    whoCanUse: "Adults: 300–650 mg 3–4 times daily diluted in water/juice.",
    caution:
      "Thyroid disorders (causes Wolff-Chaikoff hypothyroidism or Jod-Basedow hyperthyroidism), pregnancy (fetal goiter), hyperkalemia, and iodine allergy.",
    sideEffects:
      "Metallic taste, salivary gland swelling ('iodism'), acneiform rash, GI upset.",
    overuse:
      "Iodism (burning mouth, coryza, conjunctivitis), thyroid dysfunction, and hyperkalemic arrhythmias.",
    keyPearl:
      "Rarely used for routine colds today due to thyroid side effects; reserved for specialized pulmonary cases.",
  },
  {
    id: "sodium-potassium-citrate",
    name: "Sodium Citrate & Potassium Citrate",
    subGroup: "Saline Alkalanizing Expectorants",
    category: "Expectorants",
    drugClass: "Alkaline Saline Expectorants & Mucus Solubilizers",
    mechanism:
      "Stimulates salivary and bronchial serous secretions via mild osmotic/vagal reflex action while alkalinizing bronchial mucus pH to reduce mucin viscosity.",
    mainAction: "Gentle mucus thinning and bronchial secretion hydration.",
    usedFor: "Pediatric and adult productive cough syrups.",
    whoCanUse:
      "Adults and children (in standardized multi-ingredient cough syrups).",
    caution:
      "Hyperkalemia or severe renal impairment (Potassium Citrate); severe hypertension/heart failure (Sodium Citrate).",
    sideEffects: "Mild nausea, salty/alkaline taste, mild diuresis.",
    overuse:
      "Metabolic alkalosis or electrolyte imbalance (hyperkalemia/hypernatremia).",
    keyPearl:
      "Commonly paired with Guaifenesin or Menthol in gentle wet-cough syrups.",
  },
  {
    id: "terpin-hydrate",
    name: "Terpin Hydrate",
    subGroup: "Volatile Oil-Derived Expectorant",
    category: "Expectorants",
    drugClass: "Turpentine-Derived Direct Bronchial Secretory Expectorant",
    mechanism:
      "Directly stimulates bronchial secretory cells to increase low-viscosity serous fluid output in the lower respiratory tract.",
    mainAction: "Loosens thick phlegm in chronic bronchitis.",
    usedFor:
      "Historically used in elixirs for chronic bronchitis (largely replaced by Guaifenesin today).",
    whoCanUse: "Adults (where still marketed): 85–170 mg 3–4 times daily.",
    caution:
      "Elixir formulations contain high alcohol content (up to 40%); avoid in children, pregnancy, and liver disease.",
    sideEffects: "Nausea, vomiting, epigastric distress.",
    overuse: "Gastric irritation and alcohol-elixir intoxication.",
    keyPearl:
      "FDA removed OTC approval in the US due to lack of modern efficacy data vs. Guaifenesin.",
  },
  {
    id: "ipecacuanha-squill",
    name: "Ipecacuanha & Squill (Urginea maritima)",
    subGroup: "Classic Botanical Reflex Expectorants",
    category: "Expectorants",
    drugClass: "Sub-Emetic Reflex Vagal Expectorants",
    mechanism:
      "Sub-emetic micro-doses of emetine/cephaeline (Ipecac) or cardiac glycosides (Squill) stimulate gastric vagal afferents to trigger reflex bronchial fluid secretion.",
    mainAction: "Reflex mucus loosening (legacy botanical formulations).",
    usedFor: "Legacy cough mixtures for dry-to-wet transition bronchitis.",
    whoCanUse: "Adults only in strictly standardized sub-emetic micro-doses.",
    caution:
      "Narrow therapeutic window—slightly higher doses trigger violent vomiting; Squill contains bufadienolide cardiac glycosides (arrhythmia risk with Digoxin).",
    sideEffects: "Nausea, salivation, sweating, stomach cramps.",
    overuse:
      "Intractable vomiting, diarrhea, hypotension, and cardiotoxicity (arrhythmias).",
    keyPearl:
      "Superseded in modern medicine by safer Guaifenesin and Ambroxol.",
  },
  {
    id: "herbal-expectorants",
    name: "Vasaka, Ivy Leaf (Hedera helix), Thyme, Tulsi, Liquorice & Eucalyptus",
    subGroup: "Modern Standardized Herbal Expectorants",
    category: "Expectorants",
    drugClass: "Saponin / Alkaloid / Essential Oil Phyto-Expectorants",
    mechanism:
      "Vasicine (Vasaka), alpha-hederin (Ivy leaf), thymol (Thyme), and 1,8-cineole (Eucalyptus) activate beta-2 adrenergic signaling on alveolar Type II cells to secrete surfactant, relax bronchial smooth muscle, and speed up ciliary mucus clearance.",
    mainAction: "Evidence-based herbal expectoration + bronchodilation.",
    usedFor:
      "Acute viral bronchitis, productive wet cough, and pediatric/adult chest congestion.",
    whoCanUse:
      "Adults & children >= 2 years (standardized Ivy leaf / Thyme / Vasaka syrups).",
    caution:
      "Avoid applying pure Eucalyptus oil near nostrils of infants (< 2y); avoid high-dose Vasaka in pregnancy (uterotonic potential).",
    sideEffects: "Mild GI upset or rare herbal hypersensitivity.",
    overuse:
      "Nausea, vomiting, or diarrhea (from saponins in excessive Ivy leaf intake).",
    keyPearl:
      "Standardized Ivy leaf (Hedera helix) + Thyme extract has strong European clinical trial backing for acute bronchitis.",
  },

  // =========================================================================
  // 4. MUCOLYTICS
  // =========================================================================
  {
    id: "acebrophylline",
    name: "Acebrophylline",
    subGroup: "Airway Mucoregulator & Xanthine Bronchodilator",
    category: "Mucolytics",
    drugClass:
      "Ambroxol-Theophylline-7-Acetic Acid Salt (Mucoregulator + Anti-Inflammatory Bronchodilator)",
    routeSlug: "/medical/acebrophylline",
    mechanism:
      "Salt complex combining Ambroxol and Theophylline-7-acetic acid: stimulates alveolar Type II pneumocytes to synthesize pulmonary surfactant (reducing mucus viscosity and wall adhesion), enhances mucociliary clearance, inhibits phospholipase A2 and inflammatory cytokines (LTB4, TNF-alpha), and relaxes bronchial smooth muscle.",
    mainAction:
      "Mucus liquefaction + bronchial smooth muscle relaxation + airway anti-inflammatory control.",
    usedFor:
      "Productive wet cough with bronchospasm, acute and chronic bronchitis, bronchial asthma, and COPD.",
    whoCanUse:
      "Adults & adolescents >= 12y: 100 mg capsule twice daily (or 200 mg SR tablet once daily). Children 6–11y: 50 mg syrup twice daily; 1–5y: 25 mg syrup twice daily.",
    caution:
      "Hypersensitivity to xanthines/ambroxol, acute myocardial infarction, severe hypotension, arrhythmias, hyperthyroidism, seizure disorders, and active peptic ulcer disease.",
    sideEffects:
      "Nausea, epigastric discomfort, heartburn, mild headache, dizziness, palpitations, or restlessness.",
    overuse:
      "Xanthine-like toxicity causing severe nausea/vomiting, sinus tachycardia, arrhythmias, tremors, agitation, hypotension, and seizures at massive doses.",
    keyPearl:
      "Provides far cleaner airway bronchodilation and mucus clearance than plain Theophylline with minimal cardiac or CNS stimulation.",
  },
  {
    id: "acetylcysteine",
    name: "Acetylcysteine (N-Acetylcysteine / NAC)",
    subGroup: "Thiol Disulfide-Cleaving Mucolytic",
    category: "Mucolytics",
    drugClass: "Sulfhydryl (-SH) Mucolytic & Glutathione Precursor",
    routeSlug: "/medical/acetylcysteine",
    mechanism:
      "Free sulfhydryl (-SH) groups directly cleave disulfide (-S-S-) cross-links within thick mucin glycoprotein polymers, depolymerizing mucus into low-viscosity liquid while replenishing intracellular antioxidant glutathione.",
    mainAction:
      "Rapid liquefaction of thick purulent sputum + antioxidant airway protection.",
    usedFor:
      "Thick viscid mucus in acute/chronic bronchitis, COPD, bronchiectasis, cystic fibrosis (nebulized), and Paracetamol overdose.",
    whoCanUse:
      "Adults: 600 mg effervescent tablet once daily (or 200 mg TID). Children >= 2y: 100–200 mg BID/TID.",
    caution:
      "Active peptic ulcer disease (thins protective gastric mucus) and acute asthma (nebulized NAC can trigger bronchospasm—pre-treat with bronchodilator).",
    sideEffects:
      "Sulfur ('rotten egg') odor, nausea, heartburn, diarrhea, rare bronchospasm (inhaled).",
    overuse:
      "Severe GI irritation, vomiting, and anaphylactoid flushing/hypotension (with rapid high-dose IV infusion).",
    keyPearl:
      "Effervescent 600 mg tablets dissolve in water to break down thick chest phlegm and biofilms.",
  },
  {
    id: "bromhexine",
    name: "Bromhexine Hydrochloride",
    subGroup: "Vasicine-Derivative Mucoregulator",
    category: "Mucolytics",
    drugClass: "Synthetic Benzylamine Mucolytic (Prodrug of Ambroxol)",
    routeSlug: "/medical/bromhexine",
    mechanism:
      "Stimulates lysosomal enzyme release to hydrolyze acid mucopolysaccharide fibers in sputum, increases serous bronchial secretion, and converts in vivo into active Ambroxol.",
    mainAction: "Thins sticky phlegm and enhances ciliary transport.",
    usedFor:
      "Productive wet cough in acute/chronic bronchitis, sinusitis, and bronchiectasis.",
    whoCanUse:
      "Adults & >= 12y: 8–16 mg 3 times daily. Children 6–11y: 4–8 mg TID; 2–5y: 4 mg BID.",
    caution:
      "Active gastric/duodenal ulceration, first trimester of pregnancy, and rare severe skin reactions (SJS/TEN warning).",
    sideEffects:
      "Mild nausea, epigastric discomfort, diarrhea, headache, rare skin rash.",
    overuse: "Nausea, vomiting, dizziness, and gastric mucosal irritation.",
    keyPearl:
      "Originally synthesized from vasicine, the active alkaloid of the Ayurvedic herb Vasaka (Adhatoda vasica).",
  },
  {
    id: "ambroxol",
    name: "Ambroxol Hydrochloride",
    subGroup: "Active Metabolite Mucolytic & Surfactant Stimulator",
    category: "Mucolytics",
    drugClass:
      "Secretolytic Mucolytic, Surfactant Activator & Local Na+ Channel Blocker",
    routeSlug: "/medical/ambroxol",
    mechanism:
      "Active metabolite of Bromhexine; depolymerizes acid mucopolysaccharides, stimulates Type II pneumocytes to synthesize pulmonary surfactant (preventing mucus adhesion to airway walls), accelerates ciliary beat frequency, and exerts local pharyngeal pain relief.",
    mainAction:
      "Gold-standard mucus liquefaction + surfactant anti-adhesion + ciliary clearance.",
    usedFor:
      "Acute & chronic bronchitis, wet productive cough, sinusitis, and sore throat lozenges.",
    whoCanUse:
      "Adults: 30 mg 2–3 times daily (or 75 mg SR capsule once daily). Children: 1.2–1.6 mg/kg/day in divided doses.",
    caution:
      "Active peptic ulcer disease, first trimester of pregnancy, and severe hepatic/renal impairment.",
    sideEffects:
      "Mild heartburn, dyspepsia, nausea, altered taste, rare skin rash.",
    overuse:
      "Nausea, vomiting, diarrhea, and abdominal cramping (symptomatic supportive care).",
    keyPearl:
      "Widely paired with Levosalbutamol + Guaifenesin (e.g., Ascoril LS) or Cefixime/Amoxicillin to boost antibiotic lung penetration.",
  },
  {
    id: "carbocisteine",
    name: "Carbocisteine (S-Carboxymethylcysteine)",
    subGroup: "Intracellular Mucoregulator",
    category: "Mucolytics",
    drugClass: "Blocked-Thiol Mucoregulator & Sialomucin Balancer",
    routeSlug: "/medical/carbocisteine",
    mechanism:
      "Modulates goblet-cell glycoprotein synthesis inside airway epithelial cells—shifting mucus production from thick, viscous fucomucins to thin, elastic sialomucins while reducing airway inflammation.",
    mainAction:
      "Restores normal viscoelastic mucus balance & reduces COPD exacerbations.",
    usedFor:
      "Chronic bronchitis, COPD maintenance, glue ear (otitis media with effusion), and thick sputum.",
    whoCanUse:
      "Adults: 750 mg 3 times daily initially, tapering to 375 mg 3–4 times daily. Children >= 2y: weight-adjusted syrup.",
    caution:
      "STRICTLY CONTRAINDICATED in active peptic ulcer disease (disrupts gastric mucosal barrier).",
    sideEffects:
      "Gastric discomfort, nausea, diarrhea, rare GI bleeding or skin rash.",
    overuse: "Epigastric pain, vomiting, and gastrointestinal mucosal erosion.",
    keyPearl:
      "Unlike NAC (which breaks mucus after secretion), Carbocisteine reprograms cells to secrete thinner mucus.",
  },
  {
    id: "erdosteine",
    name: "Erdosteine",
    subGroup: "Prodrug Thiol Mucolytic & Anti-Adhesin",
    category: "Mucolytics",
    drugClass: "Thiolactone Prodrug Mucolytic (Gastric-Sparing)",
    routeSlug: "/medical/erdosteine",
    mechanism:
      "Remains inactive in the stomach (preventing gastric ulcer irritation) until hepatic conversion opens its thiolactone ring into active Metabolite I, which cleaves mucus disulfide bonds, scavenges free radicals, and blocks bacterial fimbrial adhesion to airway cells.",
    mainAction: "Gastric-friendly mucus cleavage + anti-bacterial adhesion.",
    usedFor:
      "Acute bronchitis, acute exacerbations of chronic bronchitis/COPD.",
    whoCanUse:
      "Adults: 300 mg twice daily (for up to 10 days in acute bronchitis).",
    caution:
      "Severe hepatic cirrhosis, severe renal failure (CrCl < 25 mL/min), homocystinuria, and active peptic ulcer.",
    sideEffects: "Mild epigastric pain, nausea, headache, altered taste.",
    overuse: "Sweating, vertigo, flushing, and GI upset.",
    keyPearl:
      "Prodrug design protects the stomach lining far better than plain N-Acetylcysteine.",
  },
  {
    id: "mesna-mecysteine",
    name: "Mesna (Inhaled) & Mecysteine Sodium",
    subGroup: "Specialty Disulfide-Breaking Mucolytics",
    category: "Mucolytics",
    drugClass: "Sulfhydryl Mucolytic Agents",
    mechanism:
      "Free sulfhydryl groups reduce disulfide bonds in tenacious bronchial secretions, rapidly decreasing sputum viscosity in severe airway plugging.",
    mainAction: "Rapid mucolysis of inspissated airway plugs.",
    usedFor:
      "Post-operative mucus plugging, bronchiectasis, and cystic fibrosis (nebulized/instilled).",
    whoCanUse: "Hospitalized or specialist-managed respiratory patients.",
    caution: "Asthmatic patients (inhaled Mesna can provoke bronchospasm).",
    sideEffects: "Cough irritation, bronchospasm, unpleasant sulfur taste.",
    overuse: "Airway irritation and bronchoconstriction.",
    keyPearl:
      "Systemic IV Mesna is used to prevent hemorrhagic cystitis from cyclophosphamide, while nebulized Mesna clears thick airway plugs.",
  },
  {
    id: "dornase-alfa",
    name: "Dornase Alfa (Pulmozyme)",
    subGroup: "Recombinant Human DNase Enzyme",
    category: "Mucolytics",
    drugClass: "Recombinant Human Deoxyribonuclease I (rhDNase) Nebulizer",
    mechanism:
      "Selectively cleaves extracellular neutrophil DNA strands that accumulate in infected, purulent airway secretions—dramatically reducing sputum viscosity in cystic fibrosis.",
    mainAction:
      "Enzymatic hydrolysis of purulent neutrophil DNA in thick sputum.",
    usedFor: "Cystic Fibrosis (CF) daily pulmonary maintenance.",
    whoCanUse:
      "Adults & children >= 5 years with Cystic Fibrosis: 2.5 mg nebulized once or twice daily.",
    caution:
      "Not effective for routine viral bronchitis or non-CF COPD; use dedicated jet/vibrating-mesh nebulizer.",
    sideEffects:
      "Voice alteration (hoarseness), pharyngitis, laryngitis, chest pain, rash.",
    overuse:
      "Localized upper airway/vocal cord irritation (well tolerated up to 10 mg/day in trials).",
    keyPearl:
      "Ineffective in normal viral cough because viral mucus lacks the massive neutrophil DNA load of Cystic Fibrosis.",
  },
  {
    id: "hypertonic-saline-mannitol-bicarbonate",
    name: "Hypertonic Saline (3%, 6%, 7%), Inhaled Mannitol & Sodium Bicarbonate",
    subGroup: "Osmotic & Alkalanizing Mucus-Clearing Agents",
    category: "Mucolytics",
    drugClass: "Osmotic Airway Hydrators & Mucin-Unfolding Agents",
    mechanism:
      "Hypertonic saline and inhaled Mannitol (Bronchitol) create an osmotic gradient that draws water into the airway surface liquid layer, rehydrating dehydrated mucus and stimulating productive cough clearance. Nebulized Sodium Bicarbonate raises airway pH to unfold compacted mucin chains.",
    mainAction: "Osmotic airway surface rehydration & mucociliary clearance.",
    usedFor:
      "Cystic fibrosis, bronchiectasis, infant bronchiolitis (3% nebulized saline), and thick mucus plugging.",
    whoCanUse:
      "Hospitalized infants (3% nebulized saline for bronchiolitis) and CF/bronchiectasis adults (pre-treat with Salbutamol).",
    caution:
      "Can trigger acute bronchospasm in asthmatics—always administer a bronchodilator (Salbutamol) 15 minutes prior.",
    sideEffects:
      "Coughing paroxysms, throat irritation, chest tightness, salty taste.",
    overuse: "Bronchoconstriction and airway mucosal irritation.",
    keyPearl:
      "3% nebulized hypertonic saline is a mainstay in pediatric wards to clear thick mucus plugs in acute bronchiolitis.",
  },
  {
    id: "herbal-mucus-clearers",
    name: "Ivy Leaf (Hedera helix), Vasaka, Thyme, Liquorice & Eucalyptus (Mucolytic Action)",
    subGroup: "Botanical Mucus-Clearing Agents",
    category: "Mucolytics",
    drugClass: "Phyto-Secretolytic & Ciliary-Stimulating Botanicals",
    mechanism:
      "Alpha-hederin, vasicine, thymol, and 1,8-cineole lower sputum viscoelasticity, stimulate alveolar surfactant secretion, and enhance mucociliary beat frequency.",
    mainAction: "Natural mucus liquefaction + airway clearance.",
    usedFor: "Productive wet cough in acute bronchitis and sinusitis.",
    whoCanUse: "Adults & children >= 2 years (standardized syrups/lozenges).",
    caution:
      "Avoid undiluted essential oils in infants < 2 years; high-dose licorice caution in hypertension.",
    sideEffects: "Rare mild GI upset.",
    overuse: "Nausea or loose stools from excess saponin intake.",
    keyPearl:
      "Frequently combined with Ambroxol or Guaifenesin in integrative respiratory protocols.",
  },

  // =========================================================================
  // 5. PRESCRIPTION-STRENGTH ANTITUSSIVES
  // =========================================================================
  {
    id: "hydrocodone",
    name: "Hydrocodone Bitartrate (often + Chlorpheniramine / Homatropine)",
    subGroup: "Centrally Acting Schedule II Opioid Antitussive",
    category: "Prescription-Strength Antitussives",
    drugClass: "Semi-Synthetic Opioid Agonist Antitussive (Controlled Rx)",
    mechanism:
      "Directly binds central mu-opioid receptors in the medullary cough center, profoundly suppressing cough reflex sensitivity.",
    mainAction:
      "High-potency central opioid cough suppression (up to 12 hours in ER suspensions).",
    usedFor:
      "Severe, refractory, painful dry cough in adults unresponsive to all non-opioid therapies.",
    whoCanUse:
      "Strictly adults >= 18 years: 5 mg every 4–6 hours (or 10 mg ER every 12 hours) for short-term use.",
    caution:
      "FDA Boxed Warning: Contraindicated < 18 years; high risk of addiction, overdose, fatal respiratory depression, and additive coma with alcohol/benzodiazepines.",
    sideEffects:
      "Profound drowsiness, constipation, nausea, dizziness, urinary retention.",
    overuse:
      "Life-threatening respiratory arrest, pinpoint pupils, coma, hypotension (emergency IV Naloxone rescue).",
    keyPearl:
      "Homatropine is often co-formulated in small amounts solely to deter intentional overdose abuse.",
  },
  {
    id: "ethylmorphine-dihydrocodeine",
    name: "Ethylmorphine & Dihydrocodeine",
    subGroup: "Centrally Acting Semi-Synthetic Opioid Antitussives",
    category: "Prescription-Strength Antitussives",
    drugClass: "Schedule H / Controlled Opioid Antitussives",
    mechanism:
      "Act directly on central medullary mu-opioid receptors (and via hepatic CYP2D6 active metabolites) to suppress severe brainstem cough reflexes.",
    mainAction: "Central opioid cough suppression + mild analgesia.",
    usedFor:
      "Severe dry cough in pleurisy, rib fracture pain, or advanced pulmonary malignancy.",
    whoCanUse: "Adults >= 18 years only under strict specialist prescription.",
    caution:
      "Contraindicated in children < 18y, asthma/COPD exacerbations, pregnancy/lactation, and hepatic failure.",
    sideEffects:
      "Sedation, severe constipation, nausea, respiratory slowing, dependence.",
    overuse: "Apnea, stupor/coma, bradycardia, and fatal opioid overdose.",
    keyPearl:
      "Largely replaced in modern practice by non-opioid Levodropropizine or Benzonatate.",
  },
  {
    id: "oxeladin-pipazetate",
    name: "Oxeladin Citrate & Pipazetate",
    subGroup: "Mixed / Centrally Acting Non-Opioid Rx Antitussives",
    category: "Prescription-Strength Antitussives",
    drugClass: "Non-Narcotic Synthetic Central/Peripheral Antitussives",
    mechanism:
      "Oxeladin selectively depresses the medullary cough center with mild peripheral spasmolytic action; Pipazetate acts centrally on the cough center while exerting mild local anesthetic and bronchodilator effects.",
    mainAction:
      "Non-opioid cough reflex suppression without respiratory depression.",
    usedFor: "Acute and chronic dry, spasmodic cough in adults and children.",
    whoCanUse: "Adults: Oxeladin 10–20 mg TID; Pipazetate 20–40 mg TID.",
    caution:
      "Wet productive cough with heavy phlegm, pregnancy, and first-trimester caution.",
    sideEffects: "Mild drowsiness, nausea, dry mouth, dizziness.",
    overuse:
      "Somnolence, GI upset, and mild dizziness (no narcotic respiratory arrest).",
    keyPearl:
      "Offer clean non-opioid suppression without codeine's constipation or dependence risks.",
  },
];

const MEDICINE_CATEGORIES: CoughCategory[] = [
  "All",
  "Antitussive / Suppressants",
  "Demulcents / Throat Soothers",
  "Expectorants",
  "Mucolytics",
  "Prescription-Strength Antitussives",
];

export default function CoughBronchitisPage() {
  // Primary 3 Clinical Tabs (Dry Cough, Wet Cough, Prescription-Strength Antitussives)
  const [primaryTab, setPrimaryTab] = useState<
    "dry-cough" | "wet-cough" | "prescription-rx"
  >("dry-cough");

  // Nested 2 Sub-tabs inside Dry Cough
  const [drySubTab, setDrySubTab] = useState<"antitussives" | "demulcents">(
    "antitussives",
  );

  // Nested 2 Sub-tabs inside Wet Cough
  const [wetSubTab, setWetSubTab] = useState<"expectorants" | "mucolytics">(
    "expectorants",
  );

  // Medicine Directory Filter States
  const [medSearch, setMedSearch] = useState("");
  const [selectedMedCategory, setSelectedMedCategory] =
    useState<CoughCategory>("All");

  const filteredMedicines = useMemo(() => {
    return COUGH_MEDICINES.filter((med) => {
      const matchesCat =
        selectedMedCategory === "All" || med.category === selectedMedCategory;
      const q = medSearch.trim().toLowerCase();
      const matchesSearch =
        !q ||
        med.name.toLowerCase().includes(q) ||
        med.subGroup.toLowerCase().includes(q) ||
        med.drugClass.toLowerCase().includes(q) ||
        med.mechanism.toLowerCase().includes(q) ||
        med.usedFor.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [medSearch, selectedMedCategory]);

  const jumpToMedicineCategory = (cat: CoughCategory) => {
    setSelectedMedCategory(cat);
    const el = document.getElementById("cough-medicine-directory");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

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
              <Wind className="w-3.5 h-3.5" /> Respiratory &amp; Pulmonology
              Codex &bull; Condition #03
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Cough &amp; Acute Bronchitis (Kasa)
            </h1>

            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Ayurvedic Parallel:{" "}
                <strong className="text-amber-300 font-mono">
                  Kasa Roga (कास रोग) — Vataja (Dry/Spasmodic) &amp; Kaphaja
                  (Productive/Wet)
                </strong>
                .
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-400 font-mono">
                    Dry Cough (Non-Productive)
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Antitussives &bull; Demulcents
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-cyan-400 font-mono">
                    Wet Cough (Productive)
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Expectorants &bull; Mucolytics
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-rose-400 font-mono">
                    Prescription Rx
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Central &amp; Peripheral Suppressants
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Complete clinical protocol on the vagal cough reflex arc, acute
              tracheobronchial inflammation, phenotypic differentiation between{" "}
              <strong>Dry (Non-Productive)</strong> and{" "}
              <strong>Wet (Productive)</strong> cough, prescription-strength
              antitussives, and a searchable{" "}
              <strong>
                {COUGH_MEDICINES.length}-agent Cough Pharmacology Directory
              </strong>
              .
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Primary Reflex Arc
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                Vagus Nerve (CN X)
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Cough Formulary
              </span>
              <span className="text-xl font-bold text-cyan-300 font-mono">
                {COUGH_MEDICINES.length} Agents
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1: CORE OVERVIEW (WHAT IS IT, HOW IT WORKS, CAUSES, WHO, SOOTHE) */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-teal-400 mb-3">
                  <Stethoscope className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    What Are Cough &amp; Acute Bronchitis (Kasa)?
                  </h2>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong>Cough</strong> is a vital protective airway-clearance
                  reflex designed to expel inhaled irritants, foreign particles,
                  and excess mucus from the larynx, trachea, and bronchi at
                  airflow velocities exceeding <strong>80–100 mph</strong>.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Acute Bronchitis</strong> is a self-limiting
                  inflammation of the large tracheobronchial airways—caused in{" "}
                  <strong>&gt; 90% of cases by respiratory viruses</strong>
                  —characterized by mucosal edema, epithelial shedding, and
                  transient bronchial hyper-responsiveness lasting{" "}
                  <strong>1 to 3 weeks</strong>. In Ayurveda, this correlates
                  with <strong>Kasa Roga</strong> (upward dysregulation of{" "}
                  <em>Prana</em> and <em>Udana Vata</em>).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                <strong className="text-teal-300 block mb-0.5">
                  Clinical Timeline:
                </strong>
                <strong>Acute Cough:</strong> &lt; 3 weeks (viral URI, acute
                bronchitis) &bull; <strong>Subacute Cough:</strong> 3 – 8 weeks
                (post-viral airway hyper-reactivity) &bull;{" "}
                <strong>Chronic Cough:</strong> &gt; 8 weeks (post-nasal drip,
                asthma, GERD, ACE inhibitors).
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 mb-3">
                  <Brain className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    How Does It Work? (Main Action, Trigger &amp; Reflex
                    Mechanism)
                  </h2>
                </div>
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <div>
                    <strong className="text-white block mb-0.5">
                      1. Afferent Trigger Phase (Vagus Nerve CN X):
                    </strong>
                    Chemical irritants (bradykinin, prostaglandins, acid, smoke)
                    stimulate{" "}
                    <strong>
                      TRPV1 / TRPA1 chemoreceptors on sensory C-fibers
                    </strong>
                    , while thick phlegm activates{" "}
                    <strong>Rapidly Adapting Stretch Receptors (RARs)</strong>.
                    Signals travel via the Vagus nerve to the{" "}
                    <strong>Nucleus Tractus Solitarius (NTS)</strong> in the
                    brainstem medulla.
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">
                      2. Compressive Glottic Closure Phase:
                    </strong>
                    Deep inspiration (~2.5 L) is followed by vocal cord
                    (glottic) closure and forceful expiratory muscle
                    contraction, building intrathoracic pressure up to{" "}
                    <strong>100–300 mmHg</strong>.
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">
                      3. Explosive Efferent Expulsion Phase:
                    </strong>
                    Sudden glottic opening releases high-velocity airflow that
                    shears mucus and irritants off bronchial walls.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                <strong className="text-cyan-300 block mb-0.5">
                  Core Clinical Rule:
                </strong>
                <strong>Suppress</strong> dry, sleep-disrupting coughs;{" "}
                <strong>thin &amp; mobilize</strong> wet, mucus-producing coughs
                (never paralyze a wet cough with heavy opioids).
              </div>
            </div>
          </div>

          {/* Common Causes, Who Is Affected & How to Manage/Soothe */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-2">
              <strong className="text-amber-300 text-sm flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Common Causes &amp; Triggers
              </strong>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside leading-relaxed">
                <li>
                  Viral respiratory infections (&gt; 90%: Rhinovirus, Influenza,
                  RSV, SARS-CoV-2)
                </li>
                <li>
                  Upper Airway Cough Syndrome (allergic rhinitis / sinusitis
                  post-nasal drip)
                </li>
                <li>
                  Cigarette/vape smoke, PM2.5 pollution, cold dry air, and
                  chemical fumes
                </li>
                <li>
                  GERD acid reflux or ACE-inhibitor blood pressure drugs
                  (Ramipril/Enalapril)
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-2">
              <strong className="text-cyan-300 text-sm flex items-center gap-1.5">
                <Activity className="w-4 h-4" /> Who Is Most Affected?
              </strong>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside leading-relaxed">
                <li>Young children (6–8 viral URIs/year, narrower airways)</li>
                <li>Elderly adults &amp; immunocompromised individuals</li>
                <li>
                  Active/passive smokers, COPD, and bronchial asthma patients
                </li>
                <li>
                  Teachers, singers, and commuters exposed to dry AC air or
                  urban dust
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-2">
              <strong className="text-emerald-300 text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> How to Manage &amp; Soothe
                It
              </strong>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside leading-relaxed">
                <li>Warm hydration (2.5–3 L/day) to lower mucus viscosity</li>
                <li>
                  Steam inhalation / cool-mist humidification &amp; saline nasal
                  rinses
                </li>
                <li>
                  Honey (5–10 mL at bedtime for adults &amp; children &ge; 1
                  year)
                </li>
                <li>
                  Avoid antibiotics in uncomplicated viral acute bronchitis
                  (&gt; 90% viral)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: 3 PRIMARY TABS (DRY COUGH | WET COUGH | PRESCRIPTION RX)       */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4 border-t border-slate-800/80">
          <div>
            <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
              Clinical Phenotypes &amp; Therapeutic Classes
            </span>
            <h2 className="text-2xl font-bold text-white">
              Cough Classification &amp; Targeted Pharmacology
            </h2>
          </div>

          {/* 3 Primary Tabs */}
          <div className="w-full overflow-x-auto scrollbar-none py-1">
            <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1.5">
              <button
                type="button"
                onClick={() => setPrimaryTab("dry-cough")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  primaryTab === "dry-cough"
                    ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Flame className="w-4 h-4 shrink-0" />
                <span>1. Dry Cough (Non-Productive)</span>
              </button>

              <button
                type="button"
                onClick={() => setPrimaryTab("wet-cough")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  primaryTab === "wet-cough"
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Droplets className="w-4 h-4 shrink-0" />
                <span>2. Wet Cough (Productive)</span>
              </button>

              <button
                type="button"
                onClick={() => setPrimaryTab("prescription-rx")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  primaryTab === "prescription-rx"
                    ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>3. Prescription-Strength Antitussives</span>
              </button>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 1: DRY COUGH + ITS 2 NESTED SUB-TABS (ANTITUSSIVES & DEMULCENTS)    */}
          {/* ----------------------------------------------------------------------- */}
          {primaryTab === "dry-cough" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Dry Cough Master Card */}
              <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                      Phenotype 01 &bull; Non-Productive Cough (Vataja Kasa)
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      What Is Dry Cough? (Mechanism, Triggers, Causes, Who Is
                      Affected &amp; Soothing)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong>What It Is &amp; How It Works:</strong> A
                      non-productive, hacking, or tickling cough that expels
                      zero sputum. Viral epithelial shedding exposes bare{" "}
                      <strong>
                        TRPV1 / TRPA1 sensory C-fiber nerve endings
                      </strong>{" "}
                      in the pharynx and trachea.{" "}
                      <strong>Main Action / Trigger:</strong> Dry air, smoke, or
                      post-nasal drip fires repetitive vagal cough impulses,
                      traumatizing vocal cords and sustaining an exhausting
                      cough-irritation cycle.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-amber-300 block mb-1">
                      Common Causes:
                    </strong>
                    Early viral cold (days 1–3), post-viral bronchial
                    hyper-reactivity, dry AC environments, smoke/dust, GERD
                    reflux, and ACE-inhibitor medications.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-amber-300 block mb-1">
                      Who Is Affected:
                    </strong>
                    Post-URI patients, teachers/vocalists, individuals sleeping
                    in dry air-conditioned rooms, and hypertensive patients on
                    ACE inhibitors.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-amber-300 block mb-1">
                      How to Manage &amp; Soothe:
                    </strong>
                    Use <strong>Demulcents</strong> to coat exposed throat nerve
                    endings and <strong>Antitussives</strong> to raise the
                    brainstem/peripheral cough threshold—paired with warm fluids
                    and steam.
                  </div>
                </div>
              </div>

              {/* Dry Cough 2 Nested Sub-Tabs */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 gap-1">
                    <button
                      type="button"
                      onClick={() => setDrySubTab("antitussives")}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        drySubTab === "antitussives"
                          ? "bg-amber-500 text-slate-950"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      1. Antitussives / Cough Suppressants
                    </button>
                    <button
                      type="button"
                      onClick={() => setDrySubTab("demulcents")}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        drySubTab === "demulcents"
                          ? "bg-teal-500 text-slate-950"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      2. Demulcents / Throat Soothers
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      jumpToMedicineCategory(
                        drySubTab === "antitussives"
                          ? "Antitussive / Suppressants"
                          : "Demulcents / Throat Soothers",
                      )
                    }
                    className="text-xs font-bold text-teal-300 hover:underline"
                  >
                    Filter Matching Medicines Below &darr;
                  </button>
                </div>

                {drySubTab === "antitussives" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-300 leading-relaxed">
                    <div className="space-y-2.5">
                      <h4 className="text-base font-bold text-amber-300">
                        Antitussives / Cough Suppressants
                      </h4>
                      <p>
                        <strong>What It Is &amp; How It Works:</strong>{" "}
                        Neuromodulating medications that directly inhibit the
                        cough reflex arc—either centrally in the medullary cough
                        center (
                        <em>
                          Dextromethorphan, Noscapine, Butamirate, Cloperastine,
                          Codeine
                        </em>
                        ) or peripherally at tracheobronchial C-fibers and
                        stretch receptors (
                        <em>
                          Levodropropizine, Benzonatate, Prenoxdiazine,
                          Moguisteine, Oxolamine
                        </em>
                        ).
                      </p>
                      <p>
                        <strong>Main Action / Trigger:</strong> Elevates the
                        firing threshold of medullary sigma-1 / NMDA receptors
                        or silences peripheral vagal C-fiber neuropeptide
                        release (Substance P).
                      </p>
                    </div>
                    <div className="space-y-2.5">
                      <p>
                        <strong>Common Causes &amp; Who Is Affected:</strong>{" "}
                        Used for severe dry, non-productive viral cough,
                        post-viral cough, and sleep-disrupting nocturnal throat
                        tickle in adults and children &ge; 6 years
                        (Levodropropizine &ge; 2 years).
                      </p>
                      <p>
                        <strong>How to Manage &amp; Soothe Safely:</strong>{" "}
                        Select non-sedating peripheral agents (
                        <strong>Levodropropizine</strong>) for daytime
                        drivers/workers, or{" "}
                        <strong>Dextromethorphan / Diphenhydramine</strong> at
                        night. Never use in wet phlegmy coughs or with
                        MAOIs/SSRIs.
                      </p>
                    </div>
                  </div>
                )}

                {drySubTab === "demulcents" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-300 leading-relaxed">
                    <div className="space-y-2.5">
                      <h4 className="text-base font-bold text-teal-300">
                        Demulcents / Throat Soothers (Syrups, Lozenges &amp;
                        Herbal Formulas)
                      </h4>
                      <p>
                        <strong>What It Is &amp; How It Works:</strong>{" "}
                        High-viscosity mucilaginous syrups (
                        <em>
                          Glycerin, Honey, Pectin, Liquid Glucose, Acacia,
                          Marshmallow root, Slippery elm, Iceland moss,
                          Liquorice/Mulethi
                        </em>
                        ), medicated lozenges (
                        <em>
                          Menthol, Benzocaine, Lidocaine, Amylmetacresol,
                          2,4-Dichlorobenzyl alcohol
                        </em>
                        ), and polyherbal formulas (
                        <em>
                          COFAID Syrup: Vasa, Yasti, Tulasi, Sunthi, Haridra,
                          Lavanga, Amalaki
                        </em>
                        ).
                      </p>
                      <p>
                        <strong>Main Action / Trigger:</strong> Forms a
                        protective bio-adhesive film over exposed pharyngeal
                        TRPV1 nerve endings, stimulates reflex
                        salivation/swallowing, and activates cooling TRPM8
                        channels.
                      </p>
                    </div>
                    <div className="space-y-2.5">
                      <p>
                        <strong>Common Causes &amp; Who Is Affected:</strong>{" "}
                        Ideal for sore throat pharyngitis, vocal strain, dry
                        throat tickle, children (&ge; 1 year for
                        honey/glycerin), pregnant women, and diabetics (using
                        sugar-free formulas like <strong>COFAID</strong>).
                      </p>
                      <p>
                        <strong>How to Manage &amp; Soothe Safely:</strong>{" "}
                        Dissolve lozenges slowly; take 5–10 mL honey or
                        demulcent syrup 30 minutes before bed. Never give honey
                        to infants &lt; 12 months or Benzocaine to children &lt;
                        2 years.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 2: WET COUGH + ITS 2 NESTED SUB-TABS (EXPECTORANTS & MUCOLYTICS)    */}
          {/* ----------------------------------------------------------------------- */}
          {primaryTab === "wet-cough" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Wet Cough Master Card */}
              <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                      Phenotype 02 &bull; Productive Cough (Kaphaja Kasa)
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      What Is Wet Cough? (Mechanism, Triggers, Causes, Who Is
                      Affected &amp; Soothing)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong>What It Is &amp; How It Works:</strong> A chesty,
                      rattling cough that expels phlegm or sputum. Bronchial
                      inflammation stimulates goblet cells and submucosal glands
                      to hypersecrete thick, disulfide-linked{" "}
                      <strong>mucin glycoproteins</strong>.{" "}
                      <strong>Main Action / Trigger:</strong> Pooled mucus
                      stretches bronchial Rapidly Adapting Receptors (RARs),
                      firing productive coughs to clear the airway.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-cyan-300 block mb-1">
                      Common Causes:
                    </strong>
                    Secretory phase of acute viral bronchitis (days 3–10),
                    acute/chronic rhinosinusitis, bacterial bronchitis, COPD
                    exacerbations, and bronchiectasis.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-cyan-300 block mb-1">
                      Who Is Affected:
                    </strong>
                    Patients with viral chest colds, smokers, COPD/chronic
                    bronchitis patients, and dehydrated individuals with sticky,
                    hard-to-clear sputum.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-cyan-300 block mb-1">
                      How to Manage &amp; Soothe:
                    </strong>
                    <strong>Never suppress</strong> with opioids. Pair{" "}
                    <strong>Expectorants</strong> (to add water volume) +{" "}
                    <strong>Mucolytics</strong> (to cleave thick mucin bonds)
                    with high oral fluid intake and steam.
                  </div>
                </div>
              </div>

              {/* Wet Cough 2 Nested Sub-Tabs */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 gap-1">
                    <button
                      type="button"
                      onClick={() => setWetSubTab("expectorants")}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        wetSubTab === "expectorants"
                          ? "bg-cyan-500 text-slate-950"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      1. Expectorants (Secretomotors)
                    </button>
                    <button
                      type="button"
                      onClick={() => setWetSubTab("mucolytics")}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        wetSubTab === "mucolytics"
                          ? "bg-teal-500 text-slate-950"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      2. Mucolytics (Mucus Depolymerizers)
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      jumpToMedicineCategory(
                        wetSubTab === "expectorants"
                          ? "Expectorants"
                          : "Mucolytics",
                      )
                    }
                    className="text-xs font-bold text-cyan-300 hover:underline"
                  >
                    Filter Matching Medicines Below &darr;
                  </button>
                </div>

                {wetSubTab === "expectorants" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-300 leading-relaxed">
                    <div className="space-y-2.5">
                      <h4 className="text-base font-bold text-cyan-300">
                        Expectorants (Guaifenesin, Saline &amp; Herbal
                        Secretomotors)
                      </h4>
                      <p>
                        <strong>What It Is &amp; How It Works:</strong> Agents
                        that increase the hydration, water content, and serous
                        fluid volume of respiratory secretions—including{" "}
                        <em>
                          Guaifenesin, Ammonium Chloride, Potassium Iodide,
                          Sodium/Potassium Citrate, Terpin Hydrate
                        </em>
                        , and standardized herbal expectorants (
                        <em>
                          Vasaka, Ivy leaf / Hedera helix, Thyme, Tulsi,
                          Liquorice, Eucalyptus
                        </em>
                        ).
                      </p>
                      <p>
                        <strong>Main Action / Trigger:</strong> Stimulates
                        gastro-pulmonary vagal reflexes or alveolar surfactant
                        release to lower mucus adhesiveness and boost ciliary
                        transport.
                      </p>
                    </div>
                    <div className="space-y-2.5">
                      <p>
                        <strong>Common Causes &amp; Who Is Affected:</strong>{" "}
                        Used in acute viral bronchitis, sinusitis post-nasal
                        drip, and chest congestion in adults and children &ge;
                        2–6 years.
                      </p>
                      <p>
                        <strong>How to Manage &amp; Soothe Safely:</strong>{" "}
                        Always swallow Guaifenesin with a{" "}
                        <strong>full 250 mL glass of water</strong>. Avoid
                        Ammonium Chloride in liver/kidney disease and Potassium
                        Iodide in thyroid disorders.
                      </p>
                    </div>
                  </div>
                )}

                {wetSubTab === "mucolytics" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-300 leading-relaxed">
                    <div className="space-y-2.5">
                      <h4 className="text-base font-bold text-teal-300">
                        Mucolytics (Ambroxol, Bromhexine, Acetylcysteine,
                        Carbocisteine &amp; Osmotics)
                      </h4>
                      <p>
                        <strong>What It Is &amp; How It Works:</strong>{" "}
                        Biochemically active agents that break down the polymer
                        structure of thick sputum—cleaving disulfide bonds (
                        <em>
                          N-Acetylcysteine, Carbocisteine, Erdosteine, Mesna
                        </em>
                        ), stimulating surfactant and lysosomal hydrolysis (
                        <em>Ambroxol, Bromhexine</em>), cleaving neutrophil DNA
                        (<em>Dornase alfa</em>), or drawing osmotic water (
                        <em>
                          Hypertonic Saline 3–7%, Inhaled Mannitol, Sodium
                          Bicarbonate
                        </em>
                        ).
                      </p>
                      <p>
                        <strong>Main Action / Trigger:</strong> Directly
                        depolymerizes thick mucin chains, liquefying tenacious
                        purulent phlegm.
                      </p>
                    </div>
                    <div className="space-y-2.5">
                      <p>
                        <strong>Common Causes &amp; Who Is Affected:</strong>{" "}
                        Thick viscid phlegm in acute/chronic bronchitis, COPD,
                        bronchiectasis, infant bronchiolitis (3% nebulized
                        saline), and cystic fibrosis.
                      </p>
                      <p>
                        <strong>How to Manage &amp; Soothe Safely:</strong> Use
                        caution in active peptic ulcer disease (mucolytics thin
                        the protective gastric mucus layer). Pre-treat
                        asthmatics with Salbutamol before nebulized NAC or
                        hypertonic saline.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 3: PRESCRIPTION-STRENGTH ANTITUSSIVES                               */}
          {/* ----------------------------------------------------------------------- */}
          {primaryTab === "prescription-rx" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                      <Pill className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest block mb-1">
                        Phenotype 03 &bull; Schedule H / Controlled Refractory
                        Cough Therapy
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">
                        What Are Prescription-Strength Antitussives? (Mechanism,
                        Classification &amp; Safety)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                        <strong>What It Is &amp; How It Works:</strong>{" "}
                        High-potency antitussive agents prescribed when severe,
                        painful, or sleep-destroying dry cough fails OTC
                        remedies. <strong>Main Action / Trigger:</strong>{" "}
                        Suppresses either medullary &mu;-opioid/sigma cough
                        centers centrally or vagal stretch/C-fiber receptors
                        peripherally.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      jumpToMedicineCategory(
                        "Prescription-Strength Antitussives",
                      )
                    }
                    className="px-4 py-2 rounded-xl bg-rose-500 text-slate-950 text-xs font-bold hover:bg-rose-400 transition-colors"
                  >
                    View Rx Suppressant Cards &darr;
                  </button>
                </div>

                {/* Site-of-Action Classification Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-rose-900/50 space-y-1.5">
                    <strong className="text-rose-300 block">
                      1. Centrally Acting Rx Antitussives
                    </strong>
                    <p className="text-slate-300">
                      <strong>Opioid:</strong> Codeine, Hydrocodone, Pholcodine,
                      Ethylmorphine, Dihydrocodeine.
                    </p>
                    <p className="text-slate-400">
                      <strong>Non-Opioid:</strong> Noscapine, Butamirate,
                      Cloperastine.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-900/50 space-y-1.5">
                    <strong className="text-cyan-300 block">
                      2. Peripherally Acting Rx Antitussives
                    </strong>
                    <p className="text-slate-300">
                      <strong>Agents:</strong> Benzonatate (stretch-receptor
                      anesthetic) &amp; Levodropropizine (vagal C-fiber
                      blocker).
                    </p>
                    <p className="text-slate-400">
                      Zero central respiratory depression or narcotic
                      dependence.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-900/50 space-y-1.5">
                    <strong className="text-amber-300 block">
                      3. Mixed / Variable Acting Antitussives
                    </strong>
                    <p className="text-slate-300">
                      <strong>Agents:</strong> Pentoxyverine (Carbetapentane),
                      Oxeladin, Pipazetate.
                    </p>
                    <p className="text-slate-400">
                      Combine central cough-center suppression with local
                      bronchial spasmolysis.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      Common Causes &amp; Indications:
                    </strong>
                    Severe refractory dry cough, pleurisy, rib fractures,
                    post-thoracic surgery, or severe pertussis/post-viral
                    paroxysms.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      Who Can Use:
                    </strong>
                    Opioids (Codeine/Hydrocodone) strictly adults{" "}
                    <strong>&ge; 18 years</strong>; Benzonatate{" "}
                    <strong>&ge; 10 years</strong>; Levodropropizine{" "}
                    <strong>&ge; 2 years</strong>.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      How to Manage &amp; Soothe Safely:
                    </strong>
                    Use lowest effective dose for &le; 3–5 days; never chew
                    Benzonatate capsules; avoid opioids in children,
                    asthma/COPD, and wet phlegmy cough.
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: INTERACTIVE COUGH MEDICINE DIRECTORY & FILTER                  */}
        {/* ========================================================================= */}
        <section
          id="cough-medicine-directory"
          className="space-y-6 pt-6 border-t border-slate-800/80 scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                <BookOpen className="w-3.5 h-3.5" /> Interactive Cough Formulary
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Cough Medicines, Demulcents, Expectorants &amp; Mucolytics
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Filter by therapeutic class or search any active ingredient,
                herb, or mechanism—with direct links to dedicated drug
                monographs.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
              Showing{" "}
              <strong className="text-teal-300">
                {filteredMedicines.length}
              </strong>{" "}
              of <strong>{COUGH_MEDICINES.length}</strong> agents
            </span>
          </div>

          {/* Search & Filter Controls */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={medSearch}
                onChange={(e) => setMedSearch(e.target.value)}
                placeholder="Search medicine (e.g., Dextromethorphan, COFAID, Ambroxol)..."
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

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {MEDICINE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedMedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedMedCategory === cat
                      ? "bg-teal-500 text-slate-950 shadow-[0_0_12px_rgba(20,184,166,0.35)]"
                      : "bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Medicine Monograph Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMedicines.map((med) => (
              <div
                key={med.id}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Card Header & Dedicated Monograph Link */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-300 font-bold">
                          {med.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {med.subGroup}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {med.name}
                      </h3>
                      <p className="text-[11px] font-mono text-amber-300 mt-0.5">
                        Drug Class: {med.drugClass}
                      </p>
                    </div>

                    {med.routeSlug && (
                      <Link
                        href={med.routeSlug}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-500/15 border border-teal-500/30 text-teal-300 hover:bg-teal-500 hover:text-slate-950 text-xs font-bold transition-colors shrink-0"
                      >
                        <span>Full Page</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                  </div>

                  {/* All Requested Clinical Fields */}
                  <div className="space-y-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800/70 pt-3">
                    <div>
                      <strong className="text-cyan-300">
                        Mechanism of Action (How It Works):{" "}
                      </strong>
                      <span>{med.mechanism}</span>
                    </div>
                    <div>
                      <strong className="text-teal-300">Main Action: </strong>
                      <span>{med.mainAction}</span>
                    </div>
                    <div>
                      <strong className="text-white">
                        Diseases / Conditions It May Be Used For:{" "}
                      </strong>
                      <span>{med.usedFor}</span>
                    </div>
                    <div>
                      <strong className="text-emerald-300">
                        Which Types of People May Use It &amp; How Much:{" "}
                      </strong>
                      <span>{med.whoCanUse}</span>
                    </div>
                    <div>
                      <strong className="text-amber-300">
                        Who Should Use Caution:{" "}
                      </strong>
                      <span>{med.caution}</span>
                    </div>
                    <div>
                      <strong className="text-slate-200">
                        Common Side Effects:{" "}
                      </strong>
                      <span>{med.sideEffects}</span>
                    </div>
                    <div>
                      <strong className="text-rose-400">
                        Overused It (Overdose Toxicity):{" "}
                      </strong>
                      <span>{med.overuse}</span>
                    </div>
                  </div>
                </div>

                {/* Important Points to Remember */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-[11px] text-slate-300">
                  <Info className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-teal-300">
                      Important Points to Remember:
                    </strong>{" "}
                    {med.keyPearl}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: CLINICAL RED FLAGS                                             */}
        {/* ========================================================================= */}
        <section className="p-6 rounded-2xl border border-rose-500/40 bg-slate-900/50 backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="text-base font-bold text-white">
              Clinical Red Flags: When Cough Requires Immediate Medical
              Evaluation
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/40">
              <strong className="text-rose-300 block mb-1">
                1. Hemoptysis &amp; Dyspnea
              </strong>
              Coughing up blood or pink frothy sputum, shortness of breath at
              rest, or resting SpO2 <strong>&lt; 92%</strong>.
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/40">
              <strong className="text-rose-300 block mb-1">
                2. High Fever &amp; Pleuritic Pain
              </strong>
              Persistent fever &gt; 38.5&deg;C (101.3&deg;F) lasting &gt; 3
              days, sharp chest pain on breathing, or focal crackles (suspected
              pneumonia).
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/40">
              <strong className="text-amber-300 block mb-1">
                3. Duration &gt; 3 Weeks + B-Symptoms
              </strong>
              Cough lasting beyond 3 weeks accompanied by drenching night
              sweats, unexplained weight loss, or hoarseness (rule out TB or
              malignancy).
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-900/40">
              <strong className="text-amber-300 block mb-1">
                4. Pediatric Stridor / Barking
              </strong>
              Inspiratory stridor, intercostal retractions, cyanosis, or
              whooping paroxysms in infants/children (croup, pertussis, or
              foreign body aspiration).
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
