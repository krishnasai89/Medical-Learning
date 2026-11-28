"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Pill,
  Activity,
  AlertCircle,
  AlertTriangle,
  ShieldAlert,
  Brain,
  Droplets,
  Layers,
  Scale,
  Info,
  CheckCircle2,
  Wind,
  Moon,
} from "lucide-react";

export default function ChlorpheniraminePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Alkylamine Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Chlorpheniramine (Chlorphenamine Maleate)
            </h1>

            {/* Nomenclature Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-teal-300 font-mono">
                  3-(4-chlorophenyl)-N,N-dimethyl-3-pyridin-2-ylpropan-1-amine
                </strong>
                .
              </p>

              {/* Regional Naming Standards Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-teal-400 font-mono">
                    Chlorphenamine
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / BAN) &bull; UK, India, Europe
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Chlorpheniramine
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (USAN) &bull; USA, Canada, Global
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/80 text-[11px] font-mono text-slate-400">
                  Brands:{" "}
                  <strong>Piriton, Zeet, Cadistin, Chlor-Trimeton</strong>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on H1 histamine inverse agonism, potent
              muscarinic M3 anticholinergic secretion drying, stratified
              pediatric-to-adult dosing, CNS sedation profiles, and acute
              anticholinergic overdose management.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Max Adult Ceiling
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                24 mg / 24h
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Dosing Interval
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                Every 4 – 6 Hours
              </span>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs (Responsive Desktop & Mobile) */}
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
              <span>Overview, Mechanism &amp; Uses</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dosing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dosing"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>Dosing &amp; Who Can Use It</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("safety")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "safety"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Side Effects &amp; Overdose</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("drug-class")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "drug-class"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>1st-Gen Antihistamine Class Deep Dive</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: OVERVIEW, MECHANISM & USES */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* What is it & How it works */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Chlorpheniramine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Chlorpheniramine (internationally designated{" "}
                    <strong>Chlorphenamine</strong>) is an alkylamine-class,{" "}
                    <strong>first-generation H1 receptor antihistamine</strong>.
                    First patented in 1948, it remains one of the most widely
                    prescribed over-the-counter therapeutics worldwide for acute
                    upper respiratory tract symptoms and allergic reactions.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Unlike newer second-generation antihistamines (such as
                    Cetirizine or Fexofenadine) which only block allergic
                    histamine, Chlorpheniramine possesses strong{" "}
                    <strong>
                      anticholinergic (antimuscarinic) drying properties
                    </strong>
                    . This makes it uniquely effective at stopping non-allergic,
                    viral runny noses (common cold rhinorrhea), which is why it
                    serves as the core ingredient in multi-symptom cold tablets
                    (paired with Paracetamol and Phenylephrine).
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Well absorbed orally (bioavailability 25–50% due to hepatic
                  first-pass metabolism). Onset of action: 15–30 minutes; peak
                  plasma levels at 2–3 hours. Metabolized via hepatic CYP2D6 and
                  CYP3A4; long elimination half-life of 14–25 hours.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Mechanism of Action)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. H1 Receptor Inverse Agonism (Anti-Allergic Action):
                      </strong>
                      Binds selectively to peripheral and central{" "}
                      <strong>Histamine H1 G-protein coupled receptors</strong>,
                      stabilizing them in their inactive conformation. This
                      blocks endogenous histamine released by mast cells from
                      inducing capillary vasodilation, vascular permeability
                      (tissue edema), and sensory nerve pruritus (itching and
                      sneezing).
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Muscarinic M3 Receptor Antagonism (Secretion Drying):
                      </strong>
                      Competitively blocks acetylcholine at{" "}
                      <strong>parasympathetic muscarinic M3 receptors</strong>{" "}
                      on nasal submucosal seromucinous glands and salivary
                      glands. Shutting off parasympathetic secretomotor tone
                      directly halts profuse watery nasal discharge (rhinorrhea)
                      and post-nasal drip.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Blood-Brain Barrier Penetration (Central Sedation):
                      </strong>
                      Because it is lipophilic and not pumped out by
                      P-glycoprotein efflux transporters, it readily enters the
                      CNS and blocks central hypothalamic H1 arousal neurons,
                      producing drowsiness.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-amber-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Dual-action{" "}
                  <strong>anti-allergic + anti-secretory drying agent</strong>{" "}
                  with moderate central sedative effects.
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-teal-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Drying Power vs. 2nd-Gen:
                  </strong>
                  2nd-gen drugs (Cetirizine) do NOT dry up viral common cold
                  rhinorrhea because they lack anticholinergic M3 blockade.
                  Chlorpheniramine dries secretions effectively.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Watch Hidden Combo Doses:
                  </strong>
                  Chlorpheniramine is hidden inside dozens of multi-symptom flu
                  tablets (e.g., Sinarest, Wickoryl). Never take plain Piriton
                  alongside combination cold pills.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    Driving &amp; Alcohol Hazard:
                  </strong>
                  Impairs reaction time and psychomotor coordination even if the
                  patient does not subjectively feel sleepy. Strictly avoid
                  alcohol, sedatives, or driving.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Lowest Sedation in 1st-Gen:
                  </strong>
                  Among first-generation antihistamines, alkylamines
                  (Chlorpheniramine) cause noticeably less drowsiness than
                  ethanolamines (Diphenhydramine) or phenothiazines
                  (Promethazine).
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" /> 1. Common Cold &amp;
                    Rhinorrhea
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Profuse watery nasal discharge (acute viral coryza)</li>
                    <li>Paroxysmal sneezing fits</li>
                    <li>
                      Post-nasal drip triggering nocturnal throat tickle and
                      cough
                    </li>
                    <li>Excessive tearing (lacrimation) during viral URTIs</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5" /> 2. Allergic Rhinitis &amp;
                    Conjunctivitis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Seasonal allergic rhinitis (hay fever from pollens)</li>
                    <li>
                      Perennial allergic rhinitis (dust mites, pet dander)
                    </li>
                    <li>Allergic conjunctivitis (itchy, red, watery eyes)</li>
                    <li>Vasomotor rhinitis flare-ups</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-teal-300 block mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> 3. Dermatologic &amp;
                    Acute Hypersensitivity
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Acute and chronic urticaria (hives and angioedema)</li>
                    <li>
                      Pruritic allergic skin rashes, insect bites, and contact
                      dermatitis
                    </li>
                    <li>Chickenpox (varicella) intense cutaneous itching</li>
                    <li>
                      Adjunctive therapy (IV/IM) following epinephrine in
                      anaphylaxis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: DOSING & WHO CAN USE IT */}
        {/* ========================================================================= */}
        {activeTab === "dosing" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Who Can & Cannot Use Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Who CAN
                  Use Chlorpheniramine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    Safe for acute cold rhinorrhea, sneezing, hives, and
                    allergic flare-ups.
                  </li>
                  <li>
                    <strong>Children Aged 6 to 11 Years:</strong> Standard
                    half-dose (2 mg every 4–6 hours) under parental supervision.
                  </li>
                  <li>
                    <strong>Children Aged 2 to 5 Years:</strong> Low dose (1 mg
                    every 4–6 hours) ONLY if explicitly prescribed by a
                    pediatrician.
                  </li>
                  <li>
                    <strong>
                      Pregnant Patients (When Clinically Indicated):
                    </strong>{" "}
                    Historically classified as FDA Category B; considered one of
                    the safest 1st-gen antihistamines in pregnancy if 2nd-gen
                    agents fail (avoid near term due to neonatal irritability).
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-400" /> Who CANNOT
                  Use It? (Contraindications)
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Infants &amp; Toddlers Under 2 Years:</strong>{" "}
                    Strictly contraindicated in OTC cold products due to risk of
                    paradoxical CNS excitation, respiratory depression, and
                    fatal overdose.
                  </li>
                  <li>
                    <strong>Narrow-Angle Glaucoma:</strong> Anticholinergic
                    pupillary dilation (mydriasis) blocks aqueous humor
                    drainage, spiking intraocular pressure.
                  </li>
                  <li>
                    <strong>
                      Benign Prostatic Hyperplasia (BPH) / Bladder Neck
                      Obstruction:
                    </strong>{" "}
                    Relaxes detrusor muscle and tightens bladder sphincter,
                    precipitating acute urinary retention.
                  </li>
                  <li>
                    <strong>Patients Taking MAO Inhibitors (MAOIs):</strong>{" "}
                    Concurrent use within 14 days intensifies and prolongs
                    severe anticholinergic and hypotensive effects.
                  </li>
                  <li>
                    <strong>
                      Severe Asthma Exacerbations / Thick Mucus Plugs:
                    </strong>{" "}
                    Drying action thickens bronchial sputum, worsening mucus
                    plugging in acute lower airway obstruction.
                  </li>
                  <li>
                    <strong>
                      Elderly Patients (&ge; 65 Years &bull; Beers Criteria):
                    </strong>{" "}
                    High risk of acute confusion, delirium, dizziness,
                    orthostatic falls, and constipation.
                  </li>
                </ul>
              </div>
            </div>

            {/* Age-Stratified Master Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-teal-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Age-Stratified Clinical Dosing Schedule
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Standard Tablet: 4 mg &bull; Syrup: 2 mg / 5 mL
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age Group</th>
                      <th className="p-3.5">Single Dose</th>
                      <th className="p-3.5">Dosing Interval</th>
                      <th className="p-3.5">Max 24-Hour Ceiling</th>
                      <th className="p-3.5">Clinical Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Under 2 Years
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={4}>
                        CONTRAINDICATED &bull; Do not use OTC cough/cold
                        antihistamines in infants/toddlers
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        2 – 5 Years
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        1 mg (2.5 mL syrup)
                      </td>
                      <td className="p-3.5">Every 4 – 6 hours</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 6 mg / 24h
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Prescription guidance only; use calibrated oral syringe
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        6 – 11 Years
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        2 mg (1/2 tab or 5 mL)
                      </td>
                      <td className="p-3.5">Every 4 – 6 hours</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 12 mg / 24h
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Do not administer sustained-release tablets
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        12+ Years &amp; Adults (IR)
                      </td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        4 mg (1 tablet)
                      </td>
                      <td className="p-3.5">Every 4 – 6 hours</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 24 mg / 24h (6 tabs)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Standard immediate-release adult regimen
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Adults (Extended Release)
                      </td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        8 mg or 12 mg ER Tab
                      </td>
                      <td className="p-3.5">Every 8 – 12 hours</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 24 mg / 24h
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Swallow whole; never crush or chew ER tablets
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-amber-200">
                        Elderly (&ge; 65 Years)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        2 mg – 4 mg
                      </td>
                      <td className="p-3.5">Every 6 – 12 hours</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 12 mg / 24h
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Prefer 2nd-gen (Loratadine/Fexofenadine) to avoid falls
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: SIDE EFFECTS & OVERDOSE */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Common Side Effects Grid */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                Common Side Effects (Therapeutic Doses)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block flex items-center gap-1.5">
                    <Moon className="w-3.5 h-3.5" /> 1. Central Nervous System
                    Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Drowsiness, sedation, and daytime somnolence</li>
                    <li>
                      Dizziness, lightheadedness, and impaired coordination
                    </li>
                    <li>Difficulty concentrating and slowed reaction times</li>
                    <li>
                      <strong>Paradoxical Excitation (Children):</strong>{" "}
                      Restlessness, insomnia, nervousness, and hyperactivity
                      instead of sleepiness
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" /> 2. Anticholinergic
                    Drying Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Xerostomia (dry mouth, dry throat, dry nasal passages)
                    </li>
                    <li>
                      Blurred vision and impaired near-accommodation
                      (cycloplegia)
                    </li>
                    <li>Thickened, tenacious bronchial secretions</li>
                    <li>Decreased sweating (anhidrosis)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-rose-300 block flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> 3. GI &amp;
                    Genitourinary Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Constipation (reduced intestinal smooth muscle
                      peristalsis)
                    </li>
                    <li>Mild epigastric discomfort, nausea, or anorexia</li>
                    <li>
                      Urinary hesitancy or acute urinary retention (especially
                      in older men)
                    </li>
                    <li>Mild reflex sinus tachycardia</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overdose Section */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Overdose Toxicity: What Happens If Overused?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Taking excessive doses of Chlorpheniramine overwhelms
                    muscarinic and central histaminergic receptors,
                    precipitating the classic{" "}
                    <strong>Anticholinergic Toxidrome</strong> alongside
                    dangerous central nervous system excitation and cardiac
                    conduction delays.
                  </p>
                </div>
              </div>
            </div>

            {/* Classic Anticholinergic Toxidrome Mnemonic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <strong className="text-rose-400 block mb-1 font-mono">
                  &quot;Red as a Beet&quot;
                </strong>
                <p className="text-slate-300">
                  Cutaneous vasodilation and facial flushing as the body
                  attempts to dissipate trapped heat without sweating.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <strong className="text-amber-400 block mb-1 font-mono">
                  &quot;Dry as a Bone&quot;
                </strong>
                <p className="text-slate-300">
                  Extreme parched mucous membranes, absent axillary sweat,
                  absent bowel sounds (paralytic ileus).
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <strong className="text-rose-400 block mb-1 font-mono">
                  &quot;Hot as a Hare&quot;
                </strong>
                <p className="text-slate-300">
                  Anticholinergic hyperthermia due to total blockade of eccrine
                  sweat glands (anhidrosis).
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <strong className="text-cyan-400 block mb-1 font-mono">
                  &quot;Blind as a Bat&quot;
                </strong>
                <p className="text-slate-300">
                  Fixed, widely dilated pupils (mydriasis) unreactive to light,
                  causing severe photophobia.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <strong className="text-purple-400 block mb-1 font-mono">
                  &quot;Mad as a Hatter&quot;
                </strong>
                <p className="text-slate-300">
                  Agitated delirium, visual hallucinations, picking at imaginary
                  objects, generalized seizures, and coma.
                </p>
              </div>
            </div>

            {/* Emergency Management Box */}
            <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-950/20 backdrop-blur-md flex items-start gap-3 text-xs text-slate-300">
              <ShieldAlert className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">
                  Overdose Emergency Management Protocol:
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  <strong>1. Supportive Care &amp; Airway Protection:</strong>{" "}
                  Activated charcoal if ingestion occurred within 1–2 hours and
                  airway reflexes are intact.{" "}
                  <strong>2. Seizure &amp; Agitation Control:</strong>{" "}
                  Intravenous Benzodiazepines (Lorazepam or Diazepam) are
                  first-line for agitation, hyperthermia, and convulsions.{" "}
                  <strong>3. Cardiac Monitoring:</strong> 12-lead ECG monitoring
                  for sinus tachycardia and QRS/QT prolongation (treat sodium
                  channel blockade with IV Sodium Bicarbonate).{" "}
                  <strong>4. Specific Reversal (Severe Cases Only):</strong>{" "}
                  Physostigmine (central acetylcholinesterase inhibitor) is
                  reserved strictly for refractory central anticholinergic
                  delirium without cardiac conduction defects.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: 1ST-GEN ANTIHISTAMINE DRUG CLASS DEEP DIVE */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Class Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                First-Generation H1 Receptor Antihistamines
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                First-generation antihistamines are classic lipophilic small
                molecules that block histamine H1 receptors throughout both the
                peripheral body and the central nervous system. Because they
                lack the ionized polar side-chains engineered into
                second-generation agents, they freely cross the blood-brain
                barrier and interact with multiple non-histamine receptors
                (muscarinic, alpha-adrenergic, and serotonergic).
              </p>
            </div>

            {/* 1st-Gen vs 2nd-Gen Comparison Matrix */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Feature</th>
                    <th className="p-3.5 text-amber-300">
                      1st-Generation (e.g., Chlorpheniramine)
                    </th>
                    <th className="p-3.5 text-teal-300">
                      2nd-Generation (e.g., Cetirizine, Fexofenadine)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Chemical Structure
                    </td>
                    <td className="p-3.5 text-amber-300">
                      Lipophilic (fat-soluble) &bull; Small molecular size
                    </td>
                    <td className="p-3.5 text-teal-300">
                      Hydrophilic / Zwitterionic &bull; P-gp efflux substrates
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Blood-Brain Barrier Crossing
                    </td>
                    <td className="p-3.5 text-rose-300 font-bold">
                      High (Blocks &gt; 50–70% of brain H1 receptors)
                    </td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      Minimal to Zero (&lt; 10% brain occupancy)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Sedation &amp; Drowsiness
                    </td>
                    <td className="p-3.5 text-rose-300">
                      Moderate to High (Impairs driving &amp; REM sleep)
                    </td>
                    <td className="p-3.5 text-emerald-400">
                      Non-sedating to minimal
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Anticholinergic Drying Action
                    </td>
                    <td className="p-3.5 text-teal-300 font-bold">
                      Strong (Dries viral common cold runny nose)
                    </td>
                    <td className="p-3.5 text-slate-400">
                      Negligible (Ineffective for non-allergic colds)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Dosing Frequency
                    </td>
                    <td className="p-3.5">
                      Multiple daily doses (Every 4 – 6 hours)
                    </td>
                    <td className="p-3.5 text-teal-300">
                      Convenient once-daily dosing (Every 24 hours)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Chemical Subclasses of 1st-Gen Antihistamines */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-400" /> Major Chemical
                Subclasses of 1st-Generation Agents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-teal-500/30">
                  <strong className="text-teal-300 block mb-1">
                    1. Alkylamines
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Chlorpheniramine, Pheniramine, Brompheniramine
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Potent H1 blockers with the{" "}
                    <strong>lowest sedation profile</strong> in the
                    1st-generation class; preferred for daytime OTC cold and
                    allergy relief.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    2. Ethanolamines
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Diphenhydramine, Dimenhydrinate, Doxylamine
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Extreme sedation and strong anticholinergic drying; widely
                    used as nighttime sleep aids, cough suppressants, and motion
                    sickness remedies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    3. Phenothiazines
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Promethazine
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Profound sedation plus dopamine D2 and alpha-adrenergic
                    blockade; used for severe allergic nausea, vertigo, and
                    nocturnal cough (banned &lt; 2 years).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    4. Piperazines &amp; Piperidines
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Hydroxyzine, Meclizine, Cyproheptadine
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Hydroxyzine excels in severe skin pruritus/anxiety;
                    Meclizine treats vestibular vertigo; Cyproheptadine adds
                    5-HT2 serotonin blockade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
