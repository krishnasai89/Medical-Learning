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

export default function LevocetirizinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "montelukast-combo" | "dosing" | "safety" | "drug-class"
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
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull; Active
              (R)-Enantiomer Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Levocetirizine (Dihydrochloride / HCl)
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-cyan-300 font-mono">
                  (R)-[2-[4-[(4-chlorophenyl)phenylmethyl]-1-piperazinyl]ethoxy]acetic
                  acid dihydrochloride
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-cyan-400 font-mono">
                    Levocetirizine Dihydrochloride
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (USP / IP Official Salt) &bull; Often shortened to
                    &quot;Hydrochloride&quot; on labels
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Xyzal, Levocet, 1-AL, Vozet &bull; Combos: Montair-LC,
                    Lezyncet-M
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on chiral (R)-enantiomer H1 inverse agonism (2x
              higher receptor affinity than racemic Cetirizine at half the
              dose), non-hepatic renal excretion, why modern physicians
              routinely combine Levocetirizine (5 mg) with Montelukast Sodium
              (10 mg) for dual-pathway allergic rhinitis &amp; asthma, and FDA
              withdrawal-pruritus &amp; neuropsychiatric precautions.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Adult Dose
              </span>
              <span className="text-xl font-bold text-cyan-400 font-mono">
                5 mg Once Daily
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                H1 Receptor Affinity
              </span>
              <span className="text-xl font-bold text-teal-300 font-mono">
                2x vs. Cetirizine
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
              onClick={() => setActiveTab("montelukast-combo")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "montelukast-combo"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Levocetirizine + Montelukast Combo</span>
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
              <span>Side Effects, Warnings &amp; Overdose</span>
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
              <span>2nd-Gen Antihistamine Class</span>
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
                      What is Levocetirizine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Levocetirizine is the purified{" "}
                    <strong>active (R)-enantiomer of racemic Cetirizine</strong>{" "}
                    and is classified as a potent, selective{" "}
                    <strong>second-generation H1 receptor antihistamine</strong>{" "}
                    (sometimes referred to in clinical literature as an
                    enantiomeric or &quot;third-generation&quot; refinement).
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Standard Cetirizine (10 mg) is a 50:50 mixture of active{" "}
                    <em>levocetirizine</em> (R-isomer) and inactive{" "}
                    <em>dextrocetirizine</em> (S-isomer). By isolating only the
                    active R-enantiomer, <strong>5 mg of Levocetirizine</strong>{" "}
                    delivers the exact same 24-hour anti-allergic efficacy as 10
                    mg of Cetirizine while eliminating the inactive S-isomer
                    metabolic load and reducing daytime drowsiness.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapidly and extensively absorbed orally; peak plasma
                  concentration (Tmax) reached in 0.9 hours without food
                  interference. Minimal hepatic metabolism (&lt; 14%
                  metabolized); ~85.4% excreted unchanged via kidneys
                  (glomerular filtration and active tubular secretion).
                  Half-life: 8–9 hours.
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
                        1. High-Affinity Peripheral H1 Inverse Agonism (2x
                        Potency):
                      </strong>
                      Exhibits <strong>2-fold higher affinity</strong> for human
                      peripheral <strong>Histamine H1 receptors</strong> than
                      Cetirizine, with slow dissociation kinetics (staying bound
                      to the receptor for 24+ hours). Stabilizes H1 receptors in
                      their inactive state, blocking histamine-mediated
                      vasodilation, mucosal swelling, sneezing, and skin wheals.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Late-Phase Eosinophil &amp; Adhesion Molecule
                        Suppression:
                      </strong>
                      Downregulates pro-inflammatory cytokines (IL-4, IL-6,
                      IL-8), inhibits ICAM-1/VCAM-1 endothelial adhesion
                      molecules, and blunts eosinophil migration into nasal and
                      dermal tissues.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Zwitterionic &amp; P-Glycoprotein Brain Exclusion:
                      </strong>
                      Carries a polar zwitterionic charge and acts as a
                      substrate for blood-brain barrier{" "}
                      <strong>P-glycoprotein (P-gp)</strong> efflux pumps,
                      resulting in low cerebral H1 receptor occupancy and
                      minimal sedation (~6% vs. ~14% with Cetirizine).
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Long-acting (24h), high-affinity{" "}
                  <strong>
                    peripheral H1 inverse agonism + eosinophil anti-inflammatory
                    blockade
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
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Dihydrochloride vs. Hydrochloride:
                  </strong>
                  Both refer to the <strong>exact same active drug</strong>.
                  Technically, the molecule binds two HCl groups (
                  <em>Levocetirizine Dihydrochloride</em> per USP/IP), though
                  many commercial brands abbreviate it as{" "}
                  <em>Levocetirizine Hydrochloride</em>.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    5 mg = 10 mg Cetirizine:
                  </strong>
                  Never double-dose Levocetirizine to 10 mg for routine
                  allergies unless directed by a specialist for refractory
                  urticaria—5 mg is already equipotent to 10 mg Cetirizine.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    Evening Dosing Preferred:
                  </strong>
                  Taking the 5 mg tablet in the evening targets early-morning
                  histamine surges (sneezing upon waking) while sleeping through
                  any mild drowsiness.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    FDA Taper Warning (May 2025):
                  </strong>
                  Stopping daily Levocetirizine abruptly after months or years
                  of continuous use can trigger severe rebound whole-body
                  itching (withdrawal pruritus).
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
                    <Wind className="w-3.5 h-3.5" /> 1. Seasonal &amp; Perennial
                    Allergic Rhinitis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Hay fever triggered by tree, grass, and weed pollens
                    </li>
                    <li>
                      Year-round perennial rhinitis (house dust mites, pet
                      dander, molds)
                    </li>
                    <li>
                      Paroxysmal sneezing bursts, clear watery rhinorrhea, and
                      nasal itching
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-teal-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 2. Chronic &amp; Acute
                    Urticaria (Hives)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      First-line daily management of Chronic Idiopathic /
                      Spontaneous Urticaria
                    </li>
                    <li>
                      Acute hives, angioedema, and physical dermatographism
                    </li>
                    <li>
                      Pruritic allergic skin rashes, eczema itching, and insect
                      bite reactions
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> 3. Ocular &amp; Lower
                    Airway Adjuncts
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Allergic conjunctivitis (itchy, red, watery eyes)</li>
                    <li>
                      Combined with Montelukast for concurrent allergic rhinitis
                      &amp; mild asthma
                    </li>
                    <li>Adjunct in post-viral airway hyper-reactivity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: LEVOCETIRIZINE + MONTELUKAST COMBINATION */}
        {/* ========================================================================= */}
        {activeTab === "montelukast-combo" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
                    Fixed-Dose Combination (FDC) &bull; e.g., Montair-LC,
                    Lezyncet-M, Telekast-L
                  </span>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Why Do Doctors Commonly Prescribe Levocetirizine (5 mg) +
                    Montelukast Sodium (10 mg)?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Allergic inflammation is not driven by a single chemical—it
                    operates through{" "}
                    <strong>two independent inflammatory pathways</strong>.
                    Monotherapy with an antihistamine alone leaves half the
                    allergic cascade untreated. Combining{" "}
                    <strong>
                      Levocetirizine Dihydrochloride/Hydrochloride (5 mg) +
                      Montelukast Sodium (10 mg)
                    </strong>{" "}
                    creates a synergistic dual-blockade across both upper and
                    lower airways.
                  </p>
                </div>
              </div>
            </div>

            {/* Dual Pathway Mechanism Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                  Pathway 1 &bull; Early-Phase Mast Cell Mediator
                </span>
                <h3 className="text-base font-bold text-white">
                  Levocetirizine (5 mg): Blocks Histamine H1 Receptors
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Within minutes of allergen exposure, mast cells release
                  pre-formed <strong>Histamine</strong>. Levocetirizine blocks
                  peripheral H1 receptors to stop:
                </p>
                <ul className="space-y-1 list-disc list-inside text-slate-400">
                  <li>Explosive sneezing fits</li>
                  <li>Clear, watery runny nose (rhinorrhea)</li>
                  <li>Intense nasal, palatal, and ocular itching</li>
                </ul>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-amber-300">
                  <strong>Limitation Alone:</strong> Antihistamines poorly
                  relieve severe <strong>nasal blockage (congestion)</strong> or
                  lower bronchial wheezing.
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                  Pathway 2 &bull; Late-Phase Lipid Mediator
                </span>
                <h3 className="text-base font-bold text-white">
                  Montelukast Sodium (10 mg): Blocks CysLT1 Leukotriene
                  Receptors
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Hours after allergen contact, eosinophils and mast cells
                  synthesize{" "}
                  <strong>Cysteinyl Leukotrienes (LTC4, LTD4, LTE4)</strong>
                  —inflammatory lipid mediators 1,000 times more potent than
                  histamine at causing tissue swelling and bronchospasm.
                  Montelukast blocks CysLT1 receptors to stop:
                </p>
                <ul className="space-y-1 list-disc list-inside text-slate-400">
                  <li>
                    Refractory late-phase nasal mucosal swelling &amp;
                    stuffiness
                  </li>
                  <li>Thick mucus hypersecretion and post-nasal drip</li>
                  <li>
                    Lower airway bronchial smooth muscle constriction (asthma /
                    wheezing)
                  </li>
                </ul>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-teal-300">
                  <strong>Synergy Result:</strong> Together, they relieve all 4
                  nasal symptoms (sneezing, itching, drip, AND blockage) while
                  protecting the lower lungs (&quot;United Airway
                  Concept&quot;).
                </div>
              </div>
            </div>

            {/* 4 Key Reasons Doctors Prescribe This FDC */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-cyan-300 block mb-1">
                  1. Solves Nasal Congestion
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Patients complain most about a blocked nose at night.
                  Montelukast reduces turbinate edema without causing the
                  rebound congestion (rhinitis medicamentosa) of nasal
                  decongestant sprays.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-teal-300 block mb-1">
                  2. &quot;United Airway&quot; Protection
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Up to 40% of allergic rhinitis patients also have bronchial
                  asthma or exercise-induced wheezing. This combo treats nose
                  and lungs in one evening tablet.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-amber-300 block mb-1">
                  3. Matched 24-Hour Pharmacokinetics
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Both drugs have matching 24-hour durations of action and are
                  ideally taken once daily in the evening—improving patient
                  adherence compared to taking two separate pills.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <strong className="text-rose-300 block mb-1">
                  4. Important FDA Boxed Warning
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Montelukast carries an <strong>FDA Boxed Warning</strong> for
                  rare neuropsychiatric side effects (vivid dreams, agitation,
                  depression). Doctors reserve the combo for moderate-to-severe
                  allergies or concurrent asthma rather than mild colds.
                </p>
              </div>
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
                  Use Levocetirizine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    Standard 5 mg once daily in the evening for allergic
                    rhinitis or chronic urticaria.
                  </li>
                  <li>
                    <strong>Children Aged 6 to 11 Years:</strong> 2.5 mg (1/2
                    tablet or 5 mL oral solution) once daily in the evening.
                  </li>
                  <li>
                    <strong>
                      Infants &amp; Young Children (6 Months – 5 Years):
                    </strong>{" "}
                    1.25 mg (2.5 mL oral solution) once daily in the evening for
                    perennial allergic rhinitis or chronic hives.
                  </li>
                  <li>
                    <strong>Patients with Liver Disease:</strong> Safe without
                    dose adjustment because it is not metabolized by hepatic
                    cytochrome P450 enzymes.
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
                    <strong>
                      End-Stage Renal Disease (CrCl &lt; 10 mL/min) &amp;
                      Hemodialysis Patients:
                    </strong>{" "}
                    Strictly contraindicated because ~85% of the drug relies on
                    kidney clearance.
                  </li>
                  <li>
                    <strong>
                      Children Aged 6 Months to 11 Years with ANY Renal
                      Impairment:
                    </strong>{" "}
                    Contraindicated in pediatric patients with impaired kidney
                    function.
                  </li>
                  <li>
                    <strong>Infants Under 6 Months of Age:</strong> Safety and
                    efficacy have not been established.
                  </li>
                  <li>
                    <strong>
                      Hypersensitivity to Levocetirizine, Cetirizine, or
                      Hydroxyzine:
                    </strong>{" "}
                    Cross-allergy across piperazine derivatives.
                  </li>
                  <li>
                    <strong>Breastfeeding Mothers:</strong> Excreted into human
                    breast milk; generally not recommended during lactation.
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
                    Age &amp; Renal-Adjusted Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Tablet: 5 mg &bull; Oral Solution: 2.5 mg / 5 mL
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age / Clinical Group</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Frequency / Timing</th>
                      <th className="p-3.5">Max 24h Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Infants &amp; Toddlers (6 Months – 5 Years)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        1.25 mg (2.5 mL solution)
                      </td>
                      <td className="p-3.5">Once daily in the evening</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 1.25 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (6 – 11 Years)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        2.5 mg (1/2 tab or 5 mL)
                      </td>
                      <td className="p-3.5">Once daily in the evening</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 2.5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12 Years)
                      </td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        5 mg (1 tablet)
                      </td>
                      <td className="p-3.5">Once daily in the evening</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-teal-200">
                        Adult Combo: Levocetirizine + Montelukast (&ge; 15y)
                      </td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        5 mg + 10 mg (1 FDC tab)
                      </td>
                      <td className="p-3.5">Once daily in the evening</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        1 tablet / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-amber-200">
                        Adults: Moderate Renal Impairment (CrCl 30–49 mL/min)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        2.5 mg (1/2 tablet)
                      </td>
                      <td className="p-3.5">
                        Once daily (CrCl 10–29: 2.5 mg every 48h)
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        Max 2.5 mg / day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS, WARNINGS & OVERDOSE */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* FDA Drug Safety Communication Box */}
            <div className="p-6 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                      FDA Safety Warning &bull; Discontinuation Pruritus
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-1.5">
                    Severe Rebound Itching After Stopping Long-Term Daily Use
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Patients who take Levocetirizine (or Cetirizine) daily for
                    several months to years may experience severe, generalized
                    whole-body itching (pruritus) within{" "}
                    <strong>1 to 3 days of abrupt cessation</strong>. Restarting
                    the medication and gradually tapering the dose resolves the
                    withdrawal symptoms.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Side Effects */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Info className="w-5 h-5 text-cyan-400" />
                Common Side Effects (Therapeutic Doses)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    1. Central Nervous System Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Somnolence / mild drowsiness (~6% at 5 mg vs. 2% placebo)
                    </li>
                    <li>Fatigue, tiredness, and asthenia</li>
                    <li>Mild dizziness or headache</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-teal-300 block">
                    2. Mucosal &amp; Upper Airway Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Dry mouth (xerostomia — ~3% incidence)</li>
                    <li>Nasopharyngitis / dry throat</li>
                    <li>
                      Cough or mild epistaxis (occasionally reported in
                      children)
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Combination-Specific Effects (+ Montelukast)
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Abdominal pain, diarrhea, or nausea</li>
                    <li>
                      Vivid dreams, insomnia, irritability, or mood changes
                      (from Montelukast)
                    </li>
                    <li>
                      Rare urinary retention in patients with BPH or spinal cord
                      lesions
                    </li>
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
                    Levocetirizine possesses a broad therapeutic index, and
                    severe life-threatening toxicity is rare. However, acute
                    massive ingestions overwhelm peripheral selectivity and
                    P-glycoprotein efflux, producing central histaminergic and
                    mild anticholinergic symptoms.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. Adults: Marked Somnolence &amp; Lethargy
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  In adult overdoses, the primary clinical manifestation is
                  profound drowsiness, stupor, headache, and mild sinus
                  tachycardia.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. Children: Initial Agitation &rarr; Drowsiness
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  In pediatric overdoses, children often display a biphasic
                  reaction: initial{" "}
                  <strong>agitation, restlessness, and irritability</strong>,
                  followed by deep somnolence and dry mucous membranes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>No specific antidote exists</strong>. Provide
                  symptomatic and supportive care (gastric decontamination /
                  activated charcoal if recent). Note: Levocetirizine is{" "}
                  <strong>NOT effectively removed by hemodialysis</strong> (&lt;
                  10% cleared).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: 2ND-GEN ANTIHISTAMINE DRUG CLASS */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Chiral Second-Generation H1 Antihistamines (Active Enantiomer
                Evolution)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Levocetirizine represents the chiral evolution of
                second-generation piperazine antihistamines:
                <strong>
                  {" "}
                  Hydroxyzine (1st-Gen Parent) &rarr; Cetirizine (2nd-Gen
                  Racemate) &rarr; Levocetirizine (Purified R-Enantiomer)
                </strong>
                . By removing the pharmacologically inactive S-enantiomer (
                <em>dextrocetirizine</em>), Levocetirizine achieves higher
                receptor selectivity, half the chemical load (5 mg vs. 10 mg),
                and lower drowsiness rates while preserving 24-hour peripheral
                anti-allergic protection.
              </p>
            </div>

            {/* Enantiomer & 2nd-Gen Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Agent</th>
                    <th className="p-3.5">Equipotent Adult Dose</th>
                    <th className="p-3.5">Somnolence Incidence</th>
                    <th className="p-3.5">Key Clinical Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-cyan-950/15">
                    <td className="p-3.5 font-bold text-cyan-300">
                      Levocetirizine (Xyzal)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      5 mg Once Daily
                    </td>
                    <td className="p-3.5 text-emerald-300">Low (~5–6%)</td>
                    <td className="p-3.5">
                      Pure R-enantiomer; half the chemical load; ideal with
                      Montelukast
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Cetirizine (Zyrtec)
                    </td>
                    <td className="p-3.5 font-mono">10 mg Once Daily</td>
                    <td className="p-3.5 text-amber-300">Low-to-Mild (~14%)</td>
                    <td className="p-3.5">
                      Fastest onset (20 min); extensive pregnancy safety data
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-emerald-300">
                      Fexofenadine (Allegra)
                    </td>
                    <td className="p-3.5 font-mono">120 mg / 180 mg Daily</td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      Zero (0% BBB entry)
                    </td>
                    <td className="p-3.5">
                      Pilot/driver safe; avoid fruit juices (blocks OATP1A2
                      uptake)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-indigo-300">
                      Bilastine (Bilaxten)
                    </td>
                    <td className="p-3.5 font-mono">20 mg Once Daily</td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      Zero (0% BBB entry)
                    </td>
                    <td className="p-3.5">
                      No renal/hepatic metabolism; take strictly on empty
                      stomach
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
