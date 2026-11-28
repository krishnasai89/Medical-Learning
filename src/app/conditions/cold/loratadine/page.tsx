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
  ShieldCheck,
} from "lucide-react";

export default function LoratadinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "why-declined" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-sky-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

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
              Tricyclic Piperidine 2nd-Gen Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Loratadine
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-sky-300 font-mono">
                  ethyl
                  4-(8-chloro-5,6-dihydro-11H-benzo[5,6]cyclohepta[1,2-b]pyridin-11-ylidene)-1-piperidinecarboxylate
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-sky-400 font-mono">Loratadine</strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / USAN / BAN) &bull; Hepatic Prodrug of Desloratadine
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Claritin, Lorfast, Alaspan, Lomilan, Alavert
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on long-acting tricyclic peripheral H1 inverse
              agonism, CYP3A4/CYP2D6 hepatic bioactivation into Desloratadine,
              P-glycoprotein blood-brain barrier exclusion, why modern
              clinicians favor newer direct-acting 2nd-generation agents
              (Desloratadine, Bilastine, Fexofenadine) over Loratadine today,
              and overdose management.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Adult Dose
              </span>
              <span className="text-xl font-bold text-sky-400 font-mono">
                10 mg Once Daily
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Onset &amp; Duration
              </span>
              <span className="text-xl font-bold text-teal-300 font-mono">
                1 – 3 hrs &bull; 24 Hours
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
                      What is Loratadine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Loratadine (famously marketed over-the-counter as{" "}
                    <strong>Claritin</strong> or <strong>Lorfast</strong>) is a
                    long-acting, tricyclic piperidine-class{" "}
                    <strong>second-generation H1 receptor antihistamine</strong>
                    . Approved in 1993, it was one of the pioneering non-drowsy
                    allergy medications engineered to relieve daytime hay fever
                    and hives without the heavy sedation or anticholinergic dry
                    mouth of first-generation drugs.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pharmacologically, Loratadine functions largely as a{" "}
                    <strong>hepatic prodrug</strong>: once absorbed from the
                    gut, liver enzymes rapidly convert it into its primary
                    active metabolite, <strong>Desloratadine</strong>, which is
                    3 to 4 times more potent at peripheral H1 receptors and
                    drives the majority of its 24-hour therapeutic effect.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-sky-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapidly absorbed orally; onset of action occurs within{" "}
                  <strong>1 to 3 hours</strong>, peaking at 8–12 hours and
                  lasting 24+ hours. Extensively metabolized by hepatic{" "}
                  <strong>CYP3A4 and CYP2D6</strong> into active Desloratadine.
                  High plasma protein binding (97–99%). Elimination half-life:
                  ~8.4 hours for Loratadine and ~28 hours for Desloratadine.
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
                        1. Selective Peripheral H1 Receptor Inverse Agonism:
                      </strong>
                      Competitively binds to and stabilizes peripheral{" "}
                      <strong>Histamine H1 receptors</strong> on nasal mucosal
                      blood vessels, ocular conjunctiva, dermal mast-cell
                      targets, and sensory C-fiber itch nerves in their inactive
                      conformation—blocking histamine-induced sneezing, clear
                      rhinorrhea, watery eyes, and skin hives.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Hepatic Conversion Into Active Desloratadine:
                      </strong>
                      First-pass liver oxidation via CYP3A4 and CYP2D6 cleaves
                      Loratadine&apos;s carbethoxy group to generate{" "}
                      <strong>Desloratadine</strong>, sustaining potent H1
                      receptor occupancy across a full 24-hour cycle.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Blood-Brain Barrier Exclusion (Non-Drowsy Profile):
                      </strong>
                      High affinity for blood-brain barrier{" "}
                      <strong>P-glycoprotein (P-gp)</strong> efflux pumps and
                      low affinity for central nervous system H1 receptors keep
                      brain occupancy minimal (&lt; 10%), preventing daytime
                      sedation and psychomotor slowing.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Once-daily, non-drowsy{" "}
                  <strong>
                    peripheral H1 histamine blockade via active Desloratadine
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
                    Slower Onset (1–3 Hours):
                  </strong>
                  Unlike Cetirizine (which works in 20 minutes), Loratadine
                  takes <strong>1 to 3 hours</strong> to reach clinical effect
                  because it requires liver conversion into Desloratadine.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Safe in Pregnancy (ACOG / ACAAI):
                  </strong>
                  Alongside Cetirizine, Loratadine is one of the most
                  extensively studied and recommended 2nd-generation
                  antihistamines during pregnancy.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    CYP3A4 / CYP2D6 Drug Interactions:
                  </strong>
                  Because it relies on liver CYP enzymes, drugs like
                  Ketoconazole, Erythromycin, and Cimetidine spike Loratadine
                  blood levels (though without the fatal arrhythmias of older
                  Terfenadine).
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Check ODT Tablets for Phenylalanine:
                  </strong>
                  Orally disintegrating tablets (Claritin RediTabs) often
                  contain aspartame (phenylalanine)—avoid in patients with{" "}
                  <strong>Phenylketonuria (PKU)</strong>.
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
                      Daytime hay fever triggered by tree, grass, and weed
                      pollens
                    </li>
                    <li>Indoor dust mite, mold, and pet dander allergies</li>
                    <li>
                      Sneezing, clear watery rhinorrhea, and itchy nose or
                      throat
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-teal-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 2. Chronic Idiopathic
                    Urticaria (Hives)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Relief of mild-to-moderate skin itching and raised red
                      hives
                    </li>
                    <li>
                      Daytime non-drowsy maintenance for sensitive patients
                    </li>
                    <li>
                      Off-label prophylaxis for bone pain caused by
                      Pegfilgrastim (Neulasta) in oncology
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> 3. Ocular &amp;
                    Decongestant Combos
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Allergic conjunctivitis (itchy, red, tearing eyes)</li>
                    <li>
                      Combined with Pseudoephedrine (Claritin-D) for severe
                      sinus congestion
                    </li>
                    <li>
                      Preferred OTC option for patients who get drowsy on
                      Cetirizine
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY DOCTORS RARELY PRESCRIBE LORATADINE TODAY */}
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
                    Clinical Evolution: Why Modern Doctors Rarely Prescribe
                    Plain Loratadine Today
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    While Loratadine remains a massive over-the-counter seller
                    (Claritin), physicians writing prescriptions in clinics
                    today largely bypass plain Loratadine in favor of{" "}
                    <strong>
                      Desloratadine, Levocetirizine, Fexofenadine, or Bilastine
                    </strong>
                    . Four clear pharmacological limitations explain this shift:
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-sky-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 font-bold">
                  Reason 1 &bull; Replaced by Its Own Active Metabolite
                </span>
                <h3 className="text-base font-bold text-white">
                  Desloratadine (5 mg) Directly Replaces the Prodrug
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Loratadine is an inactive/weakly active prodrug that depends
                  on liver enzymes to turn into <strong>Desloratadine</strong>.
                  Today, doctors simply prescribe{" "}
                  <strong>Desloratadine 5 mg directly</strong>—delivering 3 to 4
                  times higher H1 receptor affinity, faster reliability, and
                  additional anti-inflammatory cytokine suppression without
                  waiting for hepatic conversion.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  Reason 2 &bull; Slow Onset &amp; Lower Potency
                </span>
                <h3 className="text-base font-bold text-white">
                  1–3 Hour Delay &amp; Weaker Skin Wheal Suppression
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Patients suffering acute sneezing bursts or hives want relief
                  in 20–30 minutes, not 2–3 hours. In comparative clinical
                  trials, Loratadine consistently shows{" "}
                  <strong>
                    weaker histamine skin-wheal suppression and lower overall
                    symptom relief
                  </strong>{" "}
                  than Cetirizine, Levocetirizine, Fexofenadine, and Bilastine.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
                  Reason 3 &bull; Hepatic CYP450 &amp; Liver Disease Burden
                </span>
                <h3 className="text-base font-bold text-white">
                  CYP3A4 / CYP2D6 Interactions &amp; Poor Liver Clearance
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Loratadine relies heavily on liver CYP3A4 and CYP2D6
                  metabolism, requiring alternate-day dosing in hepatic
                  impairment and causing drug-drug interactions. Modern agents
                  like{" "}
                  <strong>Bilastine, Fexofenadine, and Levocetirizine</strong>{" "}
                  bypass CYP450 enzymes completely.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                  Reason 4 &bull; Better Fixed-Dose Combinations Available
                </span>
                <h3 className="text-base font-bold text-white">
                  Superseded in Modern Multi-Pathway Prescribing
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  For moderate-to-severe allergic rhinitis, clinicians prefer
                  potent fixed-dose combinations like{" "}
                  <strong>Levocetirizine + Montelukast</strong>,{" "}
                  <strong>Fexofenadine + Montelukast</strong>, or{" "}
                  <strong>Bilastine + Montelukast</strong>, leaving plain
                  Loratadine mostly as a self-purchased OTC remedy.
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
                  Use Loratadine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Children (&ge; 6 Years):</strong>{" "}
                    Standard 10 mg once daily (tablet, ODT, or 10 mL syrup).
                  </li>
                  <li>
                    <strong>Young Children (2 to 5 Years):</strong> 5 mg (5 mL
                    oral syrup) once daily for seasonal allergic rhinitis or
                    chronic hives.
                  </li>
                  <li>
                    <strong>
                      Pregnant &amp; Breastfeeding Patients (When Clinically
                      Needed):
                    </strong>{" "}
                    Widely recommended alongside Cetirizine as a preferred
                    2nd-generation antihistamine in pregnancy and lactation
                    (minimal milk transfer).
                  </li>
                  <li>
                    <strong>Daytime Workers Sensitive to Cetirizine:</strong>{" "}
                    Patients who experience drowsiness on Cetirizine but want an
                    inexpensive OTC alternative.
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
                      Hypersensitivity to Loratadine or Desloratadine:
                    </strong>{" "}
                    Strictly contraindicated in patients allergic to either
                    compound.
                  </li>
                  <li>
                    <strong>Children Under 2 Years of Age:</strong> Safety and
                    efficacy have not been established.
                  </li>
                  <li>
                    <strong>Phenylketonuria (PKU) Patients:</strong> Avoid
                    orally disintegrating tablets (RediTabs) that contain
                    aspartame (a source of phenylalanine).
                  </li>
                  <li>
                    <strong>
                      Severe Hepatic Impairment or Renal Failure (CrCl &lt; 30
                      mL/min):
                    </strong>{" "}
                    Requires extended-interval dosing (every 48 hours) due to
                    delayed drug clearance.
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
                  Tablets / ODT: 10 mg &bull; Syrup: 5 mg / 5 mL
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
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Children Under 2 Years
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        NOT RECOMMENDED &bull; Safety and efficacy not
                        established under 24 months
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (2 – 5 Years)
                      </td>
                      <td className="p-3.5 font-mono text-sky-300 font-bold">
                        5 mg (5 mL oral syrup)
                      </td>
                      <td className="p-3.5">Once daily (avoid ODT tablets)</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Children (&ge; 6 Years)
                      </td>
                      <td className="p-3.5 font-mono text-sky-300 font-bold">
                        10 mg (1 tablet / ODT / 10 mL)
                      </td>
                      <td className="p-3.5">
                        Once daily (or 5 mg twice daily)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 10 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-amber-200">
                        Adults: Hepatic Impairment or Renal Failure (CrCl &lt;
                        30)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        10 mg
                      </td>
                      <td className="p-3.5">
                        Every other day (Every 48 hours)
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        10 mg / 48h
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-amber-200">
                        Children (2 – 5 Years): Hepatic or Renal Impairment
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        5 mg (5 mL syrup)
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
                <AlertCircle className="w-5 h-5 text-sky-400" />
                Common Side Effects (Therapeutic Doses)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-sky-300 block">
                    1. Central Nervous System Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Headache (~12% — most frequent reported complaint)</li>
                    <li>Somnolence / drowsiness (~8% vs. 6% placebo)</li>
                    <li>
                      Fatigue (~4%) and nervousness or hyperkinesia in children
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-teal-300 block">
                    2. Mucosal &amp; Gastrointestinal Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Xerostomia (dry mouth — ~3%)</li>
                    <li>Mild abdominal pain, nausea, or diarrhea</li>
                    <li>
                      Occasional epistaxis (nosebleed) or pharyngitis in
                      children
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Rare Post-Marketing Events (&lt; 1%)
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Palpitations, dizziness, or mild sinus tachycardia</li>
                    <li>Transient abnormal liver function tests</li>
                    <li>Does NOT cause QTc prolongation at standard doses</li>
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
                    Loratadine has a wide safety index—single ingestions up to{" "}
                    <strong>160 mg</strong> (16 tablets) in adults have been
                    tolerated without life-threatening toxicity. However, larger
                    overdoses (40 mg to 180+ mg) overcome peripheral
                    selectivity, producing central sedation and mild-to-moderate{" "}
                    <strong>anticholinergic symptoms</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. CNS &amp; Cardiovascular Manifestations
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Drowsiness (somnolence), headache, and{" "}
                  <strong>sinus tachycardia</strong> (elevated heart rate). In
                  pediatric overdoses (&gt; 10 mg in young children),
                  extrapyramidal signs, agitation, and palpitations have been
                  reported.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. Anticholinergic Signs &amp; Combo Hazard
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  High doses may cause mydriasis (dilated pupils), skin
                  flushing, dry mouth, and urinary retention. If overdosed on{" "}
                  <strong>Claritin-D (Loratadine + Pseudoephedrine)</strong>,
                  severe hypertension and arrhythmias occur from
                  Pseudoephedrine.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>No specific antidote exists</strong>. Provide
                  symptomatic and supportive care: activated charcoal slurry if
                  within 1–2 hours of ingestion and continuous ECG monitoring.
                  Note: Loratadine is{" "}
                  <strong>NOT cleared by hemodialysis</strong>.
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
                Tricyclic Second-Generation H1 Antihistamines (Loratadine &rarr;
                Desloratadine)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Loratadine belongs to the{" "}
                <strong>tricyclic piperidine subclass</strong> of
                second-generation H1 antihistamines (structurally derived from
                Azatadine). By replacing Azatadine&apos;s basic tertiary amine
                with a neutral carbamate group, chemists prevented central
                blood-brain barrier penetration—and subsequently refined
                Loratadine into its direct active metabolite,{" "}
                <strong>Desloratadine</strong>.
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">2nd-Gen Agent</th>
                    <th className="p-3.5">Metabolic Status</th>
                    <th className="p-3.5">Onset of Action</th>
                    <th className="p-3.5">Clinical Positioning Today</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-sky-950/15">
                    <td className="p-3.5 font-bold text-sky-300">
                      Loratadine (Claritin)
                    </td>
                    <td className="p-3.5 font-mono">
                      Hepatic Prodrug (CYP3A4/2D6)
                    </td>
                    <td className="p-3.5">1 – 3 hours (Slow)</td>
                    <td className="p-3.5">
                      Legacy OTC daytime option; safe in pregnancy
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Desloratadine (Clarinex)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400">
                      Direct Active Metabolite
                    </td>
                    <td className="p-3.5">1 hour (27h half-life)</td>
                    <td className="p-3.5">
                      3–4x more potent H1 affinity; directly replaces Loratadine
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-emerald-300">
                      Fexofenadine (Allegra)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400">
                      Active Metabolite (No CYP)
                    </td>
                    <td className="p-3.5">1 – 2 hours</td>
                    <td className="p-3.5">
                      Zero sedation (pilot approved); take with plain water
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-indigo-300">
                      Bilastine (Bilaxten)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400">
                      Unchanged (No CYP/Renal)
                    </td>
                    <td className="p-3.5">30 – 60 min</td>
                    <td className="p-3.5">
                      Modern zero-sedation standard (take on empty stomach)
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
