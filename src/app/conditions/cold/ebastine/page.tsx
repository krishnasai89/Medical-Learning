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
  HeartPulse,
} from "lucide-react";

export default function EbastinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "why-declined" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-sky-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Piperidine Prodrug 2nd-Gen Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Ebastine
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-sky-300 font-mono">
                  1-[4-(1,1-dimethylethyl)phenyl]-4-[4-(diphenylmethoxy)-1-piperidinyl]-1-butanone
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-sky-400 font-mono">
                    Ebastine (10 mg / 20 mg)
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / BAN) &bull; Hepatic Prodrug of Active Carebastine
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Ebast, Kestine, Evastin, Ebatin (Fast-Melt Lyophilisate
                    &amp; Tablets)
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on selective peripheral H1 receptor inverse
              agonism via rapid CYP3A4 conversion into active Carebastine,
              P-glycoprotein blood-brain barrier exclusion, fast-dissolving oral
              lyophilisate formulations, why modern clinicians today favor
              Bilastine, Fexofenadine, or Levocetirizine combos over Ebastine
              due to CYP3A4 drug interactions and QTc precautions, and overdose
              management.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Adult Dose
              </span>
              <span className="text-xl font-bold text-sky-400 font-mono">
                10 mg / 20 mg OD
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Active Metabolite
              </span>
              <span className="text-xl font-bold text-cyan-300 font-mono">
                Carebastine (15–19h)
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
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_15px_rgba(14,165,233,0.4)]"
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
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_15px_rgba(14,165,233,0.4)]"
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
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_15px_rgba(14,165,233,0.4)]"
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
                  <div className="flex items-center gap-2 text-sky-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Ebastine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Ebastine (marketed globally as <strong>Ebast</strong> or{" "}
                    <strong>Kestine</strong>) is a long-acting, piperidine-class{" "}
                    <strong>second-generation H1 receptor antihistamine</strong>
                    . Chemically, it is a butyrophenone-piperidine derivative
                    designed to relieve allergic rhinitis and chronic urticaria
                    over 24 hours without central sedation or anticholinergic
                    dry mouth.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Like Loratadine, Ebastine functions as a{" "}
                    <strong>hepatic prodrug</strong>: upon oral absorption,
                    first-pass liver metabolism rapidly converts almost all
                    parent Ebastine into its active carboxylic acid metabolite,{" "}
                    <strong>Carebastine</strong>, which delivers potent
                    peripheral H1 blockade with a 15-to-19-hour elimination
                    half-life.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-sky-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapidly absorbed orally (taking with food increases
                  Carebastine AUC by ~50% without altering peak time). Onset of
                  action: ~1 hour; peak Carebastine plasma concentration (Tmax)
                  at 2.6–4 hours; full 24-hour coverage. Converted via hepatic{" "}
                  <strong>CYP3A4</strong> (and CYP2J2) into active Carebastine
                  (half-life: 15–19 hours), excreted primarily in urine (60–70%
                  as conjugated metabolites).
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Mechanism of Action)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Hepatic Bioactivation Into Active Carebastine:
                      </strong>
                      First-pass hydroxylation and oxidation via hepatic{" "}
                      <strong>CYP3A4</strong> convert parent Ebastine into{" "}
                      <strong>Carebastine</strong>—a polar carboxylic acid
                      metabolite with high selectivity for peripheral H1
                      receptors.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Selective Peripheral H1 Receptor Inverse Agonism:
                      </strong>
                      Carebastine competitively binds to and stabilizes
                      peripheral <strong>Histamine H1 receptors</strong> on
                      nasal mucosal blood vessels, ocular conjunctiva, dermal
                      mast-cell targets, and sensory itch fibers in their
                      inactive conformation—blocking sneezing, watery
                      rhinorrhea, nasal edema, and skin hives.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Blood-Brain Barrier Exclusion (Non-Sedating Profile):
                      </strong>
                      Carebastine&apos;s polar carboxylic acid group and efflux
                      via blood-brain barrier{" "}
                      <strong>P-glycoprotein (P-gp)</strong> pumps prevent
                      central nervous system entry, yielding minimal drowsiness
                      and zero anticholinergic effects.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-indigo-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Once-daily, non-sedating{" "}
                  <strong>
                    peripheral H1 inverse agonism via active Carebastine
                    conversion
                  </strong>
                  .
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-sky-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-sky-300 block mb-1">
                    10 mg vs. 20 mg Step-Up Dosing:
                  </strong>
                  Standard maintenance is <strong>10 mg once daily</strong>, but
                  in severe pollen flare-ups or stubborn perennial rhinitis,
                  doctors step up to <strong>20 mg once daily</strong> for
                  superior symptom control.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Fast-Dissolving Lyophilisate (Kestine Lyo):
                  </strong>
                  Available as a freeze-dried oral wafer that melts instantly on
                  the tongue without water—useful for patients with swallowing
                  difficulty or on-the-go allergy attacks.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    CYP3A4 Inhibitors &amp; QTc Caution:
                  </strong>
                  Co-administering Ketoconazole, Itraconazole, Erythromycin, or
                  Clarithromycin blocks CYP3A4 clearance and increases parent
                  Ebastine exposure, which can mildly prolong the cardiac QTc
                  interval.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    Cap at 10 mg in Severe Liver Disease:
                  </strong>
                  In patients with severe hepatic impairment (Child-Pugh C),
                  maximum daily dosing must not exceed{" "}
                  <strong>10 mg/day</strong>.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-sky-300 block mb-1 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5" /> 1. Seasonal &amp; Perennial
                    Allergic Rhinitis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Seasonal hay fever (tree, grass, and weed pollen
                      allergies)
                    </li>
                    <li>
                      Perennial allergic rhinitis (house dust mites, animal
                      dander, mold)
                    </li>
                    <li>
                      Sneezing bursts, clear watery rhinorrhea, and nasal
                      pruritus
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-indigo-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 2. Chronic Idiopathic
                    Urticaria (Hives)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Once-daily 10 mg relief of skin pruritus and raised hives
                    </li>
                    <li>
                      Non-sedating daytime maintenance for sensitive patients
                    </li>
                    <li>
                      Approved in children &ge; 2 years via pediatric oral
                      solution (1 mg/mL)
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> 3. Ocular &amp;
                    Combination Formulations
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Allergic rhinoconjunctivitis (itchy, tearing, red eyes)
                    </li>
                    <li>
                      Combined with Montelukast (10 mg + 10 mg, e.g., Ebast-M)
                      for persistent rhinitis
                    </li>
                    <li>
                      Combined with Phenylephrine for acute allergic nasal
                      blockage
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY DOCTORS RARELY PRESCRIBE EBASTINE TODAY */}
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
                    Ebastine Today
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Although Ebastine is an effective non-sedating antihistamine
                    (and is not marketed in the US/UK, though available in
                    Europe and Asia), modern outpatient prescribing has largely
                    shifted to{" "}
                    <strong>Bilastine, Fexofenadine, and Levocetirizine</strong>
                    . Four pharmacological factors explain why Ebastine sees
                    limited routine use today:
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
                  Reason 1 &bull; CYP3A4 Drug Interactions &amp; QTc Precaution
                </span>
                <h3 className="text-base font-bold text-white">
                  Requires Hepatic CYP3A4 Conversion &amp; Carries QTc Cautions
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Because Ebastine relies on liver <strong>CYP3A4</strong> to
                  convert into Carebastine, common CYP3A4 inhibitors
                  (Ketoconazole, Itraconazole, Erythromycin, Clarithromycin)
                  elevate parent Ebastine levels and can cause dose-dependent{" "}
                  <strong>QTc interval prolongation</strong>. Modern agents like{" "}
                  <strong>Bilastine, Fexofenadine, and Levocetirizine</strong>{" "}
                  have 0% CYP3A4 interactions and cleaner cardiac profiles.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-sky-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 font-bold">
                  Reason 2 &bull; Slower Peak Action Than Cetirizine / Bilastine
                </span>
                <h3 className="text-base font-bold text-white">
                  Prodrug Conversion Delays Peak Receptor Blockade
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Because Ebastine must first undergo hepatic conversion into
                  Carebastine (reaching peak levels at 2.6–4 hours),
                  direct-acting agents like{" "}
                  <strong>Cetirizine (20 min onset)</strong>,{" "}
                  <strong>Levocetirizine</strong>, and{" "}
                  <strong>Bilastine (30–60 min)</strong> provide noticeably
                  faster relief during acute allergic flare-ups.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  Reason 3 &bull; Superseded by Newer Zero-Sedation Standards
                </span>
                <h3 className="text-base font-bold text-white">
                  Fexofenadine &amp; Bilastine Offer 0% Brain Entry Without
                  Prodrug Delays
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  When doctors specifically want a 100% non-sedating daytime
                  antihistamine, <strong>Bilastine (20 mg)</strong> and{" "}
                  <strong>Fexofenadine (120/180 mg)</strong> offer verified{" "}
                  <strong>0.0% cerebral H1 occupancy</strong> without hepatic
                  bioactivation or liver dose caps.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                  Reason 4 &bull; Dominated by Mainstream Montelukast Combos
                </span>
                <h3 className="text-base font-bold text-white">
                  Limited Prescribing Compared to Levocetirizine/Bilastine +
                  Montelukast
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  In clinical practice, physicians overwhelmingly prescribe{" "}
                  <strong>Levocetirizine + Montelukast</strong>,{" "}
                  <strong>Fexofenadine + Montelukast</strong>, or{" "}
                  <strong>Bilastine + Montelukast</strong> for persistent
                  allergic rhinitis, leaving Ebastine as a secondary backup
                  choice.
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
                  Use Ebastine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    10 mg once daily for mild-to-moderate symptoms; 20 mg once
                    daily for severe allergic rhinitis.
                  </li>
                  <li>
                    <strong>Children Aged 6 to 11 Years:</strong> 5 mg (5 mL
                    oral solution) once daily.
                  </li>
                  <li>
                    <strong>Young Children (2 to 5 Years):</strong> 2.5 mg (2.5
                    mL oral solution) once daily for allergic rhinitis or
                    chronic urticaria.
                  </li>
                  <li>
                    <strong>
                      Mild-to-Moderate Renal or Hepatic Impairment:
                    </strong>{" "}
                    Safe at standard doses without reduction (only severe liver
                    disease requires a 10 mg cap).
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
                      Hypersensitivity to Ebastine or Carebastine:
                    </strong>{" "}
                    Strictly contraindicated in allergic patients.
                  </li>
                  <li>
                    <strong>Severe Hepatic Impairment (Child-Pugh C):</strong>{" "}
                    20 mg dose is contraindicated; do not exceed 10 mg/day due
                    to reduced clearance.
                  </li>
                  <li>
                    <strong>
                      Children Under 2 Years (and Under 12 Years for 10/20 mg
                      Tablets):
                    </strong>{" "}
                    Safety and efficacy not established under age 2.
                  </li>
                  <li>
                    <strong>
                      Long QT Syndrome, Hypokalemia &amp; Potent CYP3A4
                      Inhibitors:
                    </strong>{" "}
                    Exercise caution in patients with QTc prolongation, low
                    potassium, or concurrent Ketoconazole/Erythromycin.
                  </li>
                  <li>
                    <strong>Pregnancy &amp; Breastfeeding:</strong> Avoid during
                    pregnancy and lactation due to limited human safety data
                    (prefer Cetirizine or Loratadine).
                  </li>
                </ul>
              </div>
            </div>

            {/* Stratified Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-sky-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Age &amp; Organ-Adjusted Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Tablets / Lyophilisate: 10 mg, 20 mg &bull; Oral Solution: 1
                  mg / mL
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age / Clinical Group</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Frequency / Administration</th>
                      <th className="p-3.5">Max 24h Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Children Under 2 Years
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        NOT APPROVED &bull; Safety and efficacy not established
                        under 2 years of age
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (2 – 5 Years)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        2.5 mg (2.5 mL oral solution)
                      </td>
                      <td className="p-3.5">Once daily with or without food</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 2.5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (6 – 11 Years)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        5 mg (5 mL oral solution)
                      </td>
                      <td className="p-3.5">Once daily with or without food</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12 Years)
                      </td>
                      <td className="p-3.5 font-mono text-sky-300 font-bold">
                        10 mg (or 20 mg if severe)
                      </td>
                      <td className="p-3.5">Once daily with or without food</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 20 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-amber-200">
                        Severe Hepatic Impairment (Child-Pugh C)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        10 mg (1 tablet)
                      </td>
                      <td className="p-3.5">
                        Once daily (20 mg dose contraindicated)
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        Strict Max 10 mg / day
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
                <AlertCircle className="w-5 h-5 text-sky-400" />
                Common Side Effects (Therapeutic Doses)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-sky-300 block">
                    1. Central Nervous System Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Headache (~7.9% vs. 7.3% placebo)</li>
                    <li>Somnolence / drowsiness (~3.0% vs. 2.1% placebo)</li>
                    <li>
                      Dizziness, asthenia (fatigue), or mild insomnia (rare)
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    2. Mucosal &amp; Gastrointestinal Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Dry mouth (xerostomia — ~2.1%)</li>
                    <li>Pharyngitis, rhinitis, or epistaxis (mild)</li>
                    <li>Abdominal pain, dyspepsia, or nausea (&lt; 1%)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-900/50 space-y-2">
                  <strong className="text-rose-300 block">
                    3. Rare Cardiac &amp; Systemic Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Palpitations or sinus tachycardia (&lt; 0.1%)</li>
                    <li>
                      Supratherapeutic QTc prolongation (at 100 mg/day or with
                      CYP3A4 inhibitors)
                    </li>
                    <li>Rare hypersensitivity rash or edema</li>
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
                    In clinical studies conducted at high dosages, no clinically
                    meaningful signs or symptoms were observed up to{" "}
                    <strong>100 mg given once daily</strong> (5 to 10 times the
                    therapeutic dose). However, massive ingestions or
                    accumulation with CYP3A4 inhibitors require cardiac ECG
                    monitoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. CNS Sedation &amp; Anticholinergic Signs
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Massive overdoses can cause{" "}
                  <strong>
                    marked drowsiness, headache, dry mouth, and dizziness
                  </strong>
                  .
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" /> 2. Dose-Dependent QTc
                  Prolongation (&ge; 100 mg)
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  While 10–20 mg has no clinically significant effect on QTc,
                  doses of <strong>100 mg/day</strong> produce a mild
                  statistically significant increase in QTc interval (~10 ms),
                  warranting ECG surveillance in overdose.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>No specific antidote exists</strong>. Perform gastric
                  decontamination (activated charcoal if within 1 hour), monitor
                  vital functions including <strong>12-lead ECG</strong>, and
                  provide symptomatic supportive treatment.
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
                Piperidine-Class Second-Generation H1 Antihistamines (Prodrug
                Family)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ebastine belongs to the <strong>piperidine subclass</strong> of
                second-generation H1 antihistamines alongside Fexofenadine and
                Bilastine. Like Loratadine, Ebastine relies on hepatic CYP3A4
                bioactivation into a polar carboxylic acid metabolite (
                <strong>Carebastine</strong>) to prevent blood-brain barrier
                penetration and sustain 24-hour peripheral allergy control.
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Piperidine 2nd-Gen Agent</th>
                    <th className="p-3.5">Metabolic Status</th>
                    <th className="p-3.5">Standard Adult Dose</th>
                    <th className="p-3.5">Key Clinical Distinction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-sky-950/15">
                    <td className="p-3.5 font-bold text-sky-300">
                      Ebastine (Ebast / Kestine)
                    </td>
                    <td className="p-3.5 font-mono">
                      CYP3A4 Prodrug &rarr; Carebastine
                    </td>
                    <td className="p-3.5 font-mono">
                      10 mg or 20 mg Once Daily
                    </td>
                    <td className="p-3.5">
                      Fast-melt lyophilisate available; CYP3A4 &amp; QTc
                      cautions
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-emerald-300">
                      Fexofenadine (Allegra)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400">
                      Direct Active Metabolite (No CYP)
                    </td>
                    <td className="p-3.5 font-mono">
                      120 mg or 180 mg Once Daily
                    </td>
                    <td className="p-3.5">
                      0.0% brain occupancy; avoid fruit juices (OATP1A2)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-violet-300">
                      Bilastine (Bilaxten)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400">
                      Unchanged (0% Hepatic/Renal)
                    </td>
                    <td className="p-3.5 font-mono">20 mg Once Daily</td>
                    <td className="p-3.5">
                      0.0% brain occupancy; take strictly on empty stomach
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
