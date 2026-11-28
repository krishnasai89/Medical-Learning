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
  Layers,
  Scale,
  Info,
  CheckCircle2,
  Sparkles,
  Wind,
} from "lucide-react";

export default function MontelukastPage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "combinations" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Leukotriene Receptor Antagonist (LTRA)
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Montelukast Sodium
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-cyan-300 font-mono">
                  sodium
                  2-[1-[[(1R)-1-[3-[(E)-2-(7-chloroquinolin-2-yl)ethenyl]phenyl]-3-[2-(2-hydroxypropan-2-yl)phenyl]propyl]sulfanylmethyl]cyclopropyl]acetate
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-cyan-400 font-mono">
                    Montelukast Sodium
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / USAN / BAN) &bull; Selective CysLT1 Receptor Blocker
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Singulair, Montair, Telekast, Romilast (10 mg Tabs &bull; 4
                    mg / 5 mg Chews)
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on selective Cysteinyl Leukotriene Type 1
              (CysLT1) receptor antagonism, late-phase airway edema and
              bronchoconstriction suppression, stratified fixed-dose
              combinations with 2nd-generation antihistamines and
              bronchodilators, FDA Boxed neuropsychiatric warnings, and overdose
              management.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Adult Dose
              </span>
              <span className="text-xl font-bold text-cyan-400 font-mono">
                10 mg Once Daily
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Primary Receptor
              </span>
              <span className="text-xl font-bold text-teal-300 font-mono">
                CysLT1 Antagonist
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
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Overview, Mechanism &amp; Uses</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("combinations")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "combinations"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Why Used in Combinations (Matrix)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dosing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dosing"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
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
              <span>FDA Boxed Warning, Side Effects &amp; Overdose</span>
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
              <span>LTRA Drug Class Deep Dive</span>
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
                  <div className="flex items-center gap-2 text-cyan-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Montelukast Sodium?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Montelukast Sodium (originally introduced as{" "}
                    <strong>Singulair</strong>) is a potent, orally active{" "}
                    <strong>Leukotriene Receptor Antagonist (LTRA)</strong>.
                    Unlike antihistamines (which block histamine), Montelukast
                    targets an entirely separate branch of the allergic
                    inflammatory cascade:{" "}
                    <strong>cysteinyl leukotrienes</strong>.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Because it causes zero sedation, zero rebound nasal
                    congestion, and works across both the upper nasal mucosa and
                    the lower bronchial tree (&quot;United Airway
                    Concept&quot;), it serves as a cornerstone maintenance
                    controller for chronic allergic rhinitis, persistent asthma,
                    and exercise-induced bronchoconstriction.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapidly absorbed orally (mean bioavailability 64% for 10 mg
                  film-coated tablet; unaffected by meals). Peak plasma
                  concentration (Tmax) reached in 3–4 hours; duration of action:
                  24 hours. Extensively metabolized by hepatic{" "}
                  <strong>CYP2C8, CYP3A4, and CYP2C9</strong>; &gt; 86% excreted
                  via bile into feces. Elimination half-life: 2.7–5.5 hours.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Mechanism of Action)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Selective Cysteinyl Leukotriene Type 1 (CysLT1)
                        Receptor Blockade:
                      </strong>
                      During allergic inflammation, eosinophils, mast cells, and
                      alveolar macrophages synthesize{" "}
                      <strong>Cysteinyl Leukotrienes (LTC4, LTD4, LTE4)</strong>{" "}
                      from arachidonic acid via the 5-lipoxygenase pathway.
                      Montelukast binds selectively with high affinity to{" "}
                      <strong>CysLT1 receptors</strong> on airway smooth muscle
                      and nasal vascular endothelium, blocking leukotriene
                      signaling.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Upper Airway Anti-Edema &amp; Anti-Secretory Action:
                      </strong>
                      Prevents leukotriene-driven microvascular permeability,
                      turbinate mucosal swelling (nasal blockage), and
                      goblet-cell mucus hypersecretion—relieving stubborn
                      congestion that antihistamines fail to clear.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Lower Airway Bronchodilation &amp; Anti-Inflammatory
                        Control:
                      </strong>
                      Inhibits LTD4-mediated bronchial smooth muscle
                      constriction (which is 1,000 times more potent than
                      histamine) and suppresses late-phase eosinophil
                      infiltration into the lungs.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  24-hour{" "}
                  <strong>
                    anti-inflammatory airway edema reduction +
                    bronchoconstriction prevention
                  </strong>
                  .
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    NOT a Rescue Inhaler for Asthma Attacks:
                  </strong>
                  Montelukast is a daily preventive controller—it will{" "}
                  <strong>never abort an acute asthma attack</strong>. Patients
                  must always carry a fast-acting rescue bronchodilator
                  (Salbutamol / Albuterol).
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    FDA Boxed Warning (Mood &amp; Sleep):
                  </strong>
                  Monitor patients (especially children and adolescents) for
                  vivid dreams, insomnia, agitation, anxiety, depression, or
                  suicidal thoughts. Stop immediately if neuropsychiatric
                  symptoms emerge.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Evening Dosing Advantage:
                  </strong>
                  Administering Montelukast once daily in the evening aligns
                  peak receptor blockade with nocturnal and early-morning
                  leukotriene surges.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Check Chewable Tablets for Aspartame:
                  </strong>
                  Pediatric 4 mg and 5 mg chewable tablets contain phenylalanine
                  (aspartame)—use caution in{" "}
                  <strong>Phenylketonuria (PKU)</strong> (oral granules are
                  phenylalanine-free).
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5" /> 1. Allergic Rhinitis
                    (Seasonal &amp; Perennial)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Relief of nasal congestion (stuffiness), rhinorrhea, and
                      post-nasal drip
                    </li>
                    <li>
                      Patients with inadequate response or intolerance to
                      antihistamines/nasal steroids
                    </li>
                    <li>
                      Approved down to 6 months of age (perennial) and 2 years
                      (seasonal)
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-teal-300 block mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> 2. Chronic Asthma &amp;
                    Exercise Bronchospasm
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Prophylaxis and chronic maintenance treatment of
                      persistent asthma (&ge; 12 months)
                    </li>
                    <li>
                      Prevention of Exercise-Induced Bronchoconstriction (EIB)
                      taken 2 hours prior
                    </li>
                    <li>
                      Aspirin-Exacerbated Respiratory Disease (AERD /
                      Samter&apos;s triad)
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 3. Adjunctive &amp;
                    Off-Label Uses
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Refractory chronic spontaneous urticaria (combined with H1
                      antihistamines)
                    </li>
                    <li>Post-viral reactive airway cough</li>
                    <li>
                      Mild pediatric obstructive sleep apnea / adenotonsillar
                      hypertrophy (specialist off-label)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY USED IN COMBINATIONS (TABLE FORM ONLY) */}
        {/* ========================================================================= */}
        {activeTab === "combinations" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[900px]">
                <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5 text-cyan-300">
                      Fixed-Dose Combination (FDC)
                    </th>
                    <th className="p-3.5">Standard Strength &amp; Brands</th>
                    <th className="p-3.5">Dual Mechanism Synergy</th>
                    <th className="p-3.5 text-teal-300">
                      Why Doctors Prescribe This Combination Today
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-bold text-white">
                      Levocetirizine Dihydrochloride &amp; Montelukast Sodium
                    </td>
                    <td className="p-3.5 font-mono text-cyan-300">
                      5 mg + 10 mg
                      <span className="block text-[10px] text-slate-400 font-sans mt-0.5">
                        e.g., Montair-LC, Lezyncet-M, Telekast-L
                      </span>
                    </td>
                    <td className="p-3.5">
                      Blocks early-phase <strong>Histamine H1</strong>{" "}
                      (sneezing, itch, watery drip) + late-phase{" "}
                      <strong>CysLT1 Leukotrienes</strong> (nasal congestion,
                      turbinate edema, bronchospasm).
                    </td>
                    <td className="p-3.5 text-slate-200">
                      Most widely prescribed frontline combo for
                      moderate-to-severe allergic rhinitis &amp; concurrent
                      asthma; evening dosing covers nocturnal blockage and
                      early-morning sneezing bursts.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-bold text-white">
                      Fexofenadine Hydrochloride &amp; Montelukast Sodium
                    </td>
                    <td className="p-3.5 font-mono text-emerald-300">
                      120 mg + 10 mg
                      <span className="block text-[10px] text-slate-400 font-sans mt-0.5">
                        e.g., Allegra-M, Montair-FX, Fexona-M
                      </span>
                    </td>
                    <td className="p-3.5">
                      0.0% brain-entry peripheral <strong>H1 blockade</strong> +{" "}
                      <strong>CysLT1 leukotriene inhibition</strong> without
                      crossing the blood-brain barrier.
                    </td>
                    <td className="p-3.5 text-slate-200">
                      Chosen when patients experience daytime drowsiness,
                      breakthrough allergies, or rebound itching on
                      Levocetirizine; provides full dual-pathway relief with
                      zero daytime sleepiness.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-bold text-white">
                      Bilastine &amp; Montelukast Sodium
                    </td>
                    <td className="p-3.5 font-mono text-violet-300">
                      20 mg + 10 mg
                      <span className="block text-[10px] text-slate-400 font-sans mt-0.5">
                        e.g., Bilasure-M, Bilazest-M, Bilargic-M
                      </span>
                    </td>
                    <td className="p-3.5">
                      Ultra-selective non-metabolized{" "}
                      <strong>H1 inverse agonism</strong> (0% brain occupancy) +{" "}
                      <strong>CysLT1 receptor blockade</strong>.
                    </td>
                    <td className="p-3.5 text-slate-200">
                      Prescribed for patients demanding 100% mental alertness
                      (drivers, surgeons, students) or those with liver/kidney
                      impairment needing zero-sedation nasal blockage and
                      allergy control.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-bold text-white">
                      Desloratadine / Ebastine / Rupatadine &amp; Montelukast
                      Sodium
                    </td>
                    <td className="p-3.5 font-mono text-indigo-300">
                      5/10/10 mg + 10 mg
                      <span className="block text-[10px] text-slate-400 font-sans mt-0.5">
                        e.g., Deslor-M, Ebast-M, Smarti-M
                      </span>
                    </td>
                    <td className="p-3.5">
                      24-hour non-drowsy <strong>H1 antagonism</strong> (plus
                      PAF blockade with Rupatadine) +{" "}
                      <strong>CysLT1 leukotriene suppression</strong>.
                    </td>
                    <td className="p-3.5 text-slate-200">
                      Alternative non-sedating dual-pathway options for
                      perennial allergic rhinitis when patients do not want
                      fasting restrictions (Bilastine) or fruit-juice
                      interactions (Fexofenadine).
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-bold text-white">
                      Acebrophylline &amp; Montelukast Sodium
                    </td>
                    <td className="p-3.5 font-mono text-amber-300">
                      200 mg SR + 10 mg
                      <span className="block text-[10px] text-slate-400 font-sans mt-0.5">
                        e.g., AB Phylline-M, Ambrodil-M
                      </span>
                    </td>
                    <td className="p-3.5">
                      Mucoregulator + xanthine bronchodilator (
                      <strong>Acebrophylline</strong>) +{" "}
                      <strong>
                        CysLT1 leukotriene anti-inflammatory blockade
                      </strong>
                      .
                    </td>
                    <td className="p-3.5 text-slate-200">
                      Used in allergic asthma, chronic bronchitis, and allergic
                      cough with thick phlegm to thin mucus, open bronchial
                      airways, and reduce airway hyper-responsiveness.
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-bold text-white">
                      Doxofylline / Bambuterol &amp; Montelukast Sodium
                    </td>
                    <td className="p-3.5 font-mono text-rose-300">
                      400/10 mg + 10 mg
                      <span className="block text-[10px] text-slate-400 font-sans mt-0.5">
                        e.g., Doxolin-M, Bambudil-M
                      </span>
                    </td>
                    <td className="p-3.5">
                      Long-acting bronchodilator (
                      <strong>PDE inhibitor or Beta-2 agonist</strong>) +{" "}
                      <strong>CysLT1 leukotriene antagonist</strong>.
                    </td>
                    <td className="p-3.5 text-slate-200">
                      Prescribed for nocturnal asthma and persistent
                      bronchospasm where dual bronchodilation and
                      anti-leukotriene inflammation control are required
                      overnight.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: DOSING & WHO CAN USE IT */}
        {/* ========================================================================= */}
        {activeTab === "dosing" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Who Can & Cannot Use Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Who CAN
                  Use Montelukast?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 15 Years):</strong>{" "}
                    Standard 10 mg film-coated tablet once daily in the evening.
                  </li>
                  <li>
                    <strong>Children Aged 6 to 14 Years:</strong> 5 mg chewable
                    tablet once daily in the evening.
                  </li>
                  <li>
                    <strong>Young Children (2 to 5 Years):</strong> 4 mg
                    chewable tablet or 4 mg oral granules once daily in the
                    evening.
                  </li>
                  <li>
                    <strong>Infants (6 to 23 Months):</strong> 4 mg oral
                    granules packet once daily in the evening (approved for
                    perennial allergic rhinitis &ge; 6 months and asthma &ge; 12
                    months).
                  </li>
                  <li>
                    <strong>
                      Renal Impairment &amp; Mild-to-Moderate Liver Disease:
                    </strong>{" "}
                    Safe at standard doses without dose adjustment.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-400" /> Who CANNOT
                  Use It / Requires Caution?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Hypersensitivity to Montelukast:</strong> Strictly
                    contraindicated in patients allergic to any tablet or
                    granule component.
                  </li>
                  <li>
                    <strong>
                      Patients With History of Severe Depression, Suicidality,
                      or Psychosis:
                    </strong>{" "}
                    Careful risk-benefit evaluation required due to FDA Boxed
                    Warning for neuropsychiatric events.
                  </li>
                  <li>
                    <strong>
                      Acute Status Asthmaticus / Sudden Asthma Attacks:
                    </strong>{" "}
                    Never use as acute rescue therapy.
                  </li>
                  <li>
                    <strong>Phenylketonuria (PKU) Patients:</strong> Avoid 4 mg
                    and 5 mg chewable tablets containing aspartame (use
                    phenylalanine-free oral granules instead).
                  </li>
                  <li>
                    <strong>Infants Under 6 Months of Age:</strong> Safety and
                    efficacy have not been established.
                  </li>
                </ul>
              </div>
            </div>

            {/* Stratified Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Age-Stratified Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Administer once daily in the evening (with or without food)
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age Group</th>
                      <th className="p-3.5">Formulation &amp; Strength</th>
                      <th className="p-3.5">Timing &amp; Administration</th>
                      <th className="p-3.5">Max 24h Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Infants (6 – 23 Months)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        4 mg Oral Granules Packet
                      </td>
                      <td className="p-3.5">
                        Once daily in evening (directly in mouth or mixed in
                        cold soft food)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 4 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Young Children (2 – 5 Years)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        4 mg Chewable Tablet or Granules
                      </td>
                      <td className="p-3.5">Once daily in the evening</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 4 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (6 – 14 Years)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        5 mg Chewable Tablet
                      </td>
                      <td className="p-3.5">
                        Once daily in the evening (or 2h before exercise for
                        EIB)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 15 Years)
                      </td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        10 mg Film-Coated Tablet
                      </td>
                      <td className="p-3.5">
                        Once daily in the evening (or 2h before exercise for
                        EIB)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 10 mg / day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: FDA BOXED WARNING, SIDE EFFECTS & OVERDOSE */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* FDA Boxed Warning Banner */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">
                      FDA Boxed Warning &bull; Serious Neuropsychiatric Events
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-1.5">
                    Behavioral, Mood &amp; Sleep Changes (Children &amp; Adults)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Serious neuropsychiatric events have been reported in
                    patients taking Montelukast, including{" "}
                    <strong>
                      agitation, aggression, anxiety, depression, vivid/abnormal
                      dreams, sleepwalking, hallucinations, and suicidal
                      thinking/behavior
                    </strong>
                    . For mild allergic rhinitis, benefits may not outweigh
                    these risks—advise patients and caregivers to discontinue
                    Montelukast immediately and contact a physician if mood or
                    behavioral changes occur.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Side Effects */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-cyan-400" />
                Common Side Effects (Therapeutic Doses)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    1. General &amp; Respiratory Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Headache (~18.4% vs. 18.1% placebo)</li>
                    <li>
                      Upper respiratory tract infection, cough, or sore throat
                    </li>
                    <li>Mild fever, fatigue, or ear infection in children</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-teal-300 block">
                    2. Gastrointestinal &amp; Hepatic Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Abdominal pain, dyspepsia, or diarrhea</li>
                    <li>
                      Nausea or mild elevation of liver transaminases (ALT/AST)
                    </li>
                    <li>Zero anticholinergic dry mouth or urinary retention</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-amber-900/50 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Neuropsychiatric &amp; Rare Immunologic
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Vivid dreams, nightmares, insomnia, or restlessness</li>
                    <li>Irritability, anxiety, or depressed mood</li>
                    <li>
                      <strong>
                        Eosinophilic Granulomatosis with Polyangiitis
                        (Churg-Strauss Syndrome):
                      </strong>{" "}
                      Rare systemic vasculitis typically unmasked when tapering
                      oral corticosteroids
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overdose Section */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Overdose Toxicity: What Happens If Overused?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Montelukast has a wide margin of safety in acute overdose.
                    In chronic adult studies, doses up to{" "}
                    <strong>200 mg/day for 22 weeks</strong> (20 times the
                    standard dose) and short-term doses up to{" "}
                    <strong>900 mg/day</strong> were administered without
                    clinically important adverse events. Accidental pediatric
                    ingestions up to <strong>1,000 mg</strong> have also been
                    reported without fatal toxicity.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. GI &amp; Autonomic Overdose Symptoms
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  The most frequently observed symptoms in acute overdoses are{" "}
                  <strong>
                    abdominal pain, thirst, mydriasis (dilated pupils),
                    vomiting, and headache
                  </strong>
                  .
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. CNS Hyperkinesia vs. Somnolence
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Children and adults may exhibit either{" "}
                  <strong>
                    psychomotor hyperactivity (agitation, restlessness)
                  </strong>{" "}
                  or <strong>somnolence (drowsiness)</strong> following massive
                  ingestions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>No specific antidote exists</strong>. Employ standard
                  supportive measures: remove unabsorbed material from the GI
                  tract (activated charcoal if within 1 hour), perform clinical
                  monitoring, and institute supportive therapy. (Dialysis
                  clearance is unknown).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: LTRA DRUG CLASS DEEP DIVE */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Leukotriene Modifiers (CysLT1 Receptor Antagonists &amp; 5-LOX
                Inhibitors)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Leukotriene modifiers block the inflammatory arachidonic acid{" "}
                <strong>5-lipoxygenase pathway</strong>. Unlike H1
                antihistamines (which target early-phase mast-cell histamine),
                LTRAs block{" "}
                <strong>Cysteinyl Leukotrienes (LTC4, LTD4, LTE4)</strong>—the
                lipid mediators responsible for late-phase nasal mucosal
                swelling, thick mucus production, eosinophil recruitment, and
                lower-airway bronchoconstriction.
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Leukotriene Modifier</th>
                    <th className="p-3.5">Mechanism Subclass</th>
                    <th className="p-3.5">Dosing Frequency</th>
                    <th className="p-3.5">Clinical Positioning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-cyan-950/15">
                    <td className="p-3.5 font-bold text-cyan-300">
                      Montelukast (Singulair)
                    </td>
                    <td className="p-3.5 font-mono">
                      Selective CysLT1 Receptor Antagonist
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      Once Daily (Evening)
                    </td>
                    <td className="p-3.5">
                      Dominant global LTRA; approved down to 6 months; no liver
                      lab monitoring
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Zafirlukast (Accolate)
                    </td>
                    <td className="p-3.5 font-mono">
                      Selective CysLT1 Receptor Antagonist
                    </td>
                    <td className="p-3.5 font-mono">Twice Daily (Fasting)</td>
                    <td className="p-3.5">
                      Requires empty stomach; inhibits CYP2C9/3A4 (warfarin
                      interaction)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-indigo-300">
                      Pranlukast (Onon)
                    </td>
                    <td className="p-3.5 font-mono">
                      Selective CysLT1 Receptor Antagonist
                    </td>
                    <td className="p-3.5 font-mono">Twice Daily</td>
                    <td className="p-3.5">
                      Used primarily in Japan/Asia for asthma and allergic
                      rhinitis
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-300">
                      Zileuton (Zyflo)
                    </td>
                    <td className="p-3.5 font-mono">
                      5-Lipoxygenase (5-LOX) Enzyme Inhibitor
                    </td>
                    <td className="p-3.5 font-mono">Twice Daily (CR) / QID</td>
                    <td className="p-3.5">
                      Blocks synthesis of all leukotrienes (including LTB4);
                      requires liver enzyme monitoring
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
