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
  Clock,
} from "lucide-react";

export default function DesloratadinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "why-declined" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull; Active
              Tricyclic 2nd-Gen Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Desloratadine
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-indigo-300 font-mono">
                  8-chloro-6,11-dihydro-11-(4-piperidinylidene)-5H-benzo[5,6]cyclohepta[1,2-b]pyridine
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-indigo-400 font-mono">
                    Desloratadine
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / USAN / BAN) &bull; Descarboethoxyloratadine (Active
                    Metabolite)
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Clarinex, Aerius, Deslor, Neoclarityn, Dazit
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on ultra-long-acting (27-hour half-life)
              selective peripheral H1 inverse agonism, anti-inflammatory
              cytokine &amp; mast-cell mediator inhibition, P-glycoprotein
              blood-brain barrier exclusion, why modern clinicians today favor
              Bilastine, Fexofenadine, or Levocetirizine combos over
              Desloratadine, and overdose management.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Adult Dose
              </span>
              <span className="text-xl font-bold text-indigo-400 font-mono">
                5 mg Once Daily
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Elimination Half-Life
              </span>
              <span className="text-xl font-bold text-cyan-300 font-mono">
                ~27 Hours
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
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Overview, Mechanism &amp; Uses</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("why-declined")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "why-declined"
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Why Doctors Rarely Prescribe It Today</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dosing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dosing"
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
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
                  <div className="flex items-center gap-2 text-indigo-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Desloratadine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Desloratadine (marketed globally as{" "}
                    <strong>Clarinex</strong>, <strong>Aerius</strong>, or{" "}
                    <strong>Dazit</strong>) is the primary active metabolite of
                    Loratadine and a long-acting, tricyclic{" "}
                    <strong>second-generation H1 receptor antihistamine</strong>
                    .
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    By administering the active metabolite directly rather than
                    its prodrug parent, <strong>5 mg of Desloratadine</strong>{" "}
                    achieves 3 to 4 times higher binding affinity at human H1
                    receptors than 10 mg of Loratadine, with a remarkably long{" "}
                    <strong>27-hour elimination half-life</strong> that prevents
                    early-morning breakthrough sneezing even if a daily dose is
                    delayed.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-indigo-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Well absorbed orally regardless of food or fruit juice intake;
                  onset within 1 hour, peak plasma levels (Tmax) at ~3 hours,
                  and sustained 24-hour duration. Metabolized via
                  glucuronidation and hydroxylation into 3-hydroxydesloratadine
                  (roughly 6% of the population are genetic &quot;slow
                  metabolizers&quot; with higher plasma exposure, though well
                  tolerated). Half-life: ~27 hours.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Mechanism of Action)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Potent, Slow-Dissociating Peripheral H1 Inverse
                        Agonism:
                      </strong>
                      Selectively binds to and stabilizes peripheral{" "}
                      <strong>Histamine H1 receptors</strong> in their inactive
                      conformation with slow dissociation kinetics—blocking
                      histamine-induced capillary vasodilation, sneezing bursts,
                      watery rhinorrhea, ocular itching, and skin hives for over
                      24 hours.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Mast-Cell &amp; Basophil Anti-Inflammatory
                        Inhibition:
                      </strong>
                      In vitro and clinical studies show Desloratadine inhibits
                      the release of pro-inflammatory cytokines (IL-4, IL-6,
                      IL-8, IL-13), leukotriene C4, prostaglandin D2, and
                      P-selectin adhesion molecules—blunting late-phase
                      eosinophil recruitment.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Blood-Brain Barrier Exclusion (Non-Drowsy Profile):
                      </strong>
                      Actively pumped out of brain capillaries by{" "}
                      <strong>P-glycoprotein (P-gp)</strong> efflux
                      transporters, resulting in negligible central H1 receptor
                      occupancy and placebo-level sedation (~2.1%).
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Ultra-long-acting (27h half-life){" "}
                  <strong>
                    peripheral H1 inverse agonism + mast-cell cytokine
                    suppression
                  </strong>
                  .
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-indigo-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-indigo-300 block mb-1">
                    No Food or Juice Restrictions:
                  </strong>
                  Unlike Bilastine (must take fasting) or Fexofenadine (blocked
                  by fruit juice), Desloratadine is completely unaffected by
                  meals, high-fat food, or grapefruit/orange juice.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    27-Hour Coverage Against Morning Sneezing:
                  </strong>
                  Its 27-hour half-life maintains high receptor blockade
                  overnight, making it strong for patients whose allergic
                  rhinitis peaks immediately upon waking.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    6% Slow Metabolizers (3x Exposure):
                  </strong>
                  Roughly 6% of people (higher in Black populations, ~17%) are
                  genetic slow metabolizers of Desloratadine, experiencing
                  3-fold higher blood levels—though clinical safety remains
                  unchanged.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Renal &amp; Hepatic Adjustment Needed:
                  </strong>
                  Unlike Bilastine or Fexofenadine, Desloratadine requires
                  alternate-day dosing (5 mg every 48 hours) in patients with
                  liver or kidney impairment.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-indigo-300 block mb-1 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5" /> 1. Seasonal &amp; Perennial
                    Allergic Rhinitis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Daytime hay fever (pollen, grass, and ragweed allergies)
                    </li>
                    <li>
                      Year-round dust mite, animal dander, and mold allergies
                    </li>
                    <li>
                      Morning sneezing paroxysms, clear rhinorrhea, and nasal
                      pruritus
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 2. Chronic Idiopathic
                    Urticaria (Hives)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Once-daily 5 mg relief of skin pruritus and raised hives
                    </li>
                    <li>
                      Non-sedating daytime maintenance for sensitive patients
                    </li>
                    <li>
                      Approved in young infants (&ge; 6 months) via oral syrup
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 3. Ocular &amp;
                    Decongestant Combos
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Allergic rhinoconjunctivitis (itchy, tearing eyes)</li>
                    <li>
                      Combined with Pseudoephedrine (Clarinex-D) for severe
                      sinus blockage
                    </li>
                    <li>
                      Combined with Montelukast (Deslor-M) in persistent
                      allergic rhinitis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY DOCTORS RARELY PRESCRIBE DESLORATADINE TODAY */}
        {/* ========================================================================= */}
        {activeTab === "why-declined" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Clinical Practice Shift: Why Modern Doctors Rarely Prescribe
                    Desloratadine Today
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Although Desloratadine is a clean, non-sedating upgrade over
                    Loratadine, modern outpatient prescribing has largely
                    shifted toward{" "}
                    <strong>Bilastine, Fexofenadine, and Levocetirizine</strong>{" "}
                    (and their Montelukast combinations). Four practical
                    pharmacological factors explain why:
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-indigo-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 font-bold">
                  Reason 1 &bull; Moderate Potency in Severe Flare-Ups
                </span>
                <h3 className="text-base font-bold text-white">
                  Weaker Acute Wheal &amp; Flare Suppression Than Cetirizine /
                  Levocetirizine
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  In comparative clinical trials of severe allergic rhinitis and
                  chronic urticaria,{" "}
                  <strong>
                    Levocetirizine (5 mg), Cetirizine (10 mg), and Bilastine (20
                    mg)
                  </strong>{" "}
                  demonstrate faster onset (20–30 min vs. 1–3 hours) and
                  stronger suppression of acute histamine skin wheals and
                  explosive sneezing bursts than Desloratadine 5 mg.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  Reason 2 &bull; Outclassed by Bilastine &amp; Fexofenadine in
                  Zero-Sedation Niche
                </span>
                <h3 className="text-base font-bold text-white">
                  0% Brain Occupancy &amp; Cleaner Organ Safety With Newer
                  Agents
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  When doctors specifically want a 100% non-sedating daytime
                  antihistamine, <strong>Fexofenadine (120/180 mg)</strong> and{" "}
                  <strong>Bilastine (20 mg)</strong> offer verified{" "}
                  <strong>0.0% cerebral H1 occupancy</strong> without requiring
                  alternate-day dosing in hepatic impairment.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
                  Reason 3 &bull; Hepatic &amp; Renal Dosing Adjustments
                </span>
                <h3 className="text-base font-bold text-white">
                  Requires Alternate-Day Dosing in Both Liver &amp; Kidney
                  Disease
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Desloratadine accumulates in both hepatic impairment and renal
                  insufficiency (requiring 5 mg every other day), whereas{" "}
                  <strong>Bilastine</strong> requires zero adjustment in liver
                  or kidney disease, and <strong>Fexofenadine</strong> requires
                  zero adjustment in liver disease.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                  Reason 4 &bull; Dominated by Modern Combination Formulations
                </span>
                <h3 className="text-base font-bold text-white">
                  Limited Prescribing Compared to Levocetirizine/Bilastine +
                  Montelukast
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  In everyday clinical practice, fixed-dose combinations like{" "}
                  <strong>Levocetirizine + Montelukast</strong>,{" "}
                  <strong>Fexofenadine + Montelukast</strong>, and{" "}
                  <strong>Bilastine + Montelukast</strong> dominate
                  prescriptions for allergic rhinitis, leaving Desloratadine as
                  a secondary niche option.
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
                  Use Desloratadine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    Standard 5 mg once daily (tablet, ODT, or 10 mL oral
                    solution) with or without food.
                  </li>
                  <li>
                    <strong>Children Aged 6 to 11 Years:</strong> 2.5 mg (5 mL
                    oral solution or 2.5 mg ODT) once daily.
                  </li>
                  <li>
                    <strong>Young Children (1 to 5 Years):</strong> 1.25 mg (2.5
                    mL oral solution) once daily for allergic rhinitis or
                    chronic hives.
                  </li>
                  <li>
                    <strong>Infants (6 to 11 Months):</strong> 1 mg (2 mL oral
                    solution) once daily for perennial allergic rhinitis or
                    chronic idiopathic urticaria.
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
                    <strong>
                      Hypersensitivity to Desloratadine or Loratadine:
                    </strong>{" "}
                    Strictly contraindicated in patients allergic to either
                    drug.
                  </li>
                  <li>
                    <strong>Infants Under 6 Months of Age:</strong> Safety and
                    efficacy have not been established.
                  </li>
                  <li>
                    <strong>Phenylketonuria (PKU) Patients:</strong> Avoid
                    orally disintegrating tablets (RediTabs) containing
                    aspartame (phenylalanine).
                  </li>
                  <li>
                    <strong>Hepatic or Renal Impairment:</strong> Requires
                    alternate-day dosing (5 mg every 48 hours in adults) due to
                    reduced drug clearance.
                  </li>
                  <li>
                    <strong>Pregnancy &amp; Breastfeeding:</strong> Prefer
                    Cetirizine or Loratadine during pregnancy (more extensive
                    human safety registries); Desloratadine passes into breast
                    milk.
                  </li>
                </ul>
              </div>
            </div>

            {/* Stratified Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Age &amp; Organ-Adjusted Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Tablets / ODT: 5 mg (2.5 mg ODT) &bull; Syrup: 2.5 mg / 5 mL
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age / Clinical Group</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Frequency</th>
                      <th className="p-3.5">Max 24h Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Infants (6 – 11 Months)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        1 mg (2 mL oral solution)
                      </td>
                      <td className="p-3.5">Once daily</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 1 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Young Children (1 – 5 Years)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        1.25 mg (2.5 mL oral solution)
                      </td>
                      <td className="p-3.5">Once daily</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 1.25 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (6 – 11 Years)
                      </td>
                      <td className="p-3.5 font-mono text-indigo-300 font-bold">
                        2.5 mg (5 mL solution or 2.5 mg ODT)
                      </td>
                      <td className="p-3.5">Once daily</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 2.5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12 Years)
                      </td>
                      <td className="p-3.5 font-mono text-indigo-300 font-bold">
                        5 mg (1 tablet / ODT / 10 mL)
                      </td>
                      <td className="p-3.5">Once daily with or without food</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-amber-200">
                        Adults: Hepatic or Renal Impairment
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        5 mg
                      </td>
                      <td className="p-3.5">
                        Every other day (Every 48 hours)
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        5 mg / 48h
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS & OVERDOSE */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Common Side Effects */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-indigo-400" />
                Common Side Effects (Therapeutic Doses)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-indigo-300 block">
                    1. Central Nervous System Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Headache (~14% vs. 13% placebo)</li>
                    <li>
                      Fatigue (~2.1%) and somnolence (~2.1% — placebo-level)
                    </li>
                    <li>Dizziness or mild insomnia</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    2. Mucosal &amp; Upper Respiratory Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Dry mouth (xerostomia — ~3%)</li>
                    <li>Pharyngitis / sore or dry throat (~4%)</li>
                    <li>
                      Fever, diarrhea, or irritability in infants/toddlers
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Musculoskeletal &amp; Rare Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Myalgia (muscle aches — ~2%) or dysmenorrhea</li>
                    <li>
                      Rare tachycardia, palpitations, or elevated liver enzymes
                    </li>
                    <li>
                      Zero QTc prolongation even at 45 mg/day (9x standard dose)
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
                    Desloratadine exhibits a wide margin of safety. In clinical
                    trials, multiple daily doses up to <strong>45 mg</strong> (9
                    times the standard 5 mg dose) for 10 days produced no
                    clinically relevant adverse effects or ECG QTc prolongation.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. Mild Somnolence &amp; Tachycardia
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Acute overdoses typically present with{" "}
                  <strong>
                    drowsiness, headache, dry mouth, and mild sinus tachycardia
                  </strong>{" "}
                  (small increases in heart rate).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. Watch Co-Formulated Decongestants
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  If a patient overdoses on{" "}
                  <strong>Clarinex-D (Desloratadine + Pseudoephedrine)</strong>,
                  severe hypertension, palpitations, and CNS excitation will
                  occur from the <em>Pseudoephedrine</em> component.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>No specific antidote exists</strong>. Consider
                  standard measures to remove unabsorbed drug (activated
                  charcoal if within 1 hour) and provide symptomatic/supportive
                  care. Note: Desloratadine is{" "}
                  <strong>NOT eliminated by hemodialysis</strong>.
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
                Active-Metabolite Second-Generation H1 Antihistamines
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Several modern second-generation antihistamines were discovered
                by isolating the purified active metabolites of earlier parent
                drugs:{" "}
                <strong>
                  Hydroxyzine &rarr; Cetirizine &rarr; Levocetirizine
                </strong>
                , <strong>Terfenadine &rarr; Fexofenadine</strong>, and{" "}
                <strong>Loratadine &rarr; Desloratadine</strong>. These active
                metabolites bypass first-pass bioactivation, offer predictable
                receptor binding, and eliminate cardiac arrhythmia liabilities.
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Active-Metabolite Agent</th>
                    <th className="p-3.5">Parent Drug</th>
                    <th className="p-3.5">Elimination Half-Life</th>
                    <th className="p-3.5">Key Distinguishing Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-indigo-950/15">
                    <td className="p-3.5 font-bold text-indigo-300">
                      Desloratadine (Clarinex)
                    </td>
                    <td className="p-3.5 font-mono">Loratadine</td>
                    <td className="p-3.5 font-mono text-cyan-300 font-bold">
                      ~27 Hours (Longest)
                    </td>
                    <td className="p-3.5">
                      Unaffected by food/juices; requires liver/renal adjustment
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-emerald-300">
                      Fexofenadine (Allegra)
                    </td>
                    <td className="p-3.5 font-mono">Terfenadine</td>
                    <td className="p-3.5 font-mono">~14.4 Hours</td>
                    <td className="p-3.5">
                      0.0% brain H1 occupancy; avoid fruit juices (OATP1A2)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Levocetirizine (Xyzal)
                    </td>
                    <td className="p-3.5 font-mono">
                      Hydroxyzine / Cetirizine
                    </td>
                    <td className="p-3.5 font-mono">~8 – 9 Hours</td>
                    <td className="p-3.5">
                      Purified R-enantiomer; high skin hive &amp; rhinitis
                      potency
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Bilastine (Bilaxten)
                    </td>
                    <td className="p-3.5 font-mono">
                      Novel Non-Metabolized Entity
                    </td>
                    <td className="p-3.5 font-mono">~14.5 Hours</td>
                    <td className="p-3.5">
                      0.0% brain entry; zero hepatic/renal metabolism; take
                      fasting
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
