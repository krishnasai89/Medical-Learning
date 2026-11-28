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

export default function RupatadinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "why-declined" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-blue-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull; Dual H1
              + PAF Receptor Antagonist
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Rupatadine Fumarate
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-blue-300 font-mono">
                  8-chloro-6,11-dihydro-11-[1-[(5-methyl-3-pyridinyl)methyl]-4-piperidinylidene]-5H-benzo[5,6]cyclohepta[1,2-b]pyridine
                  fumarate
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-blue-400 font-mono">
                    Rupatadine Fumarate
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / BAN) &bull; Dual Histamine H1 + Platelet-Activating
                    Factor (PAF) Blocker
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Rupafin, Rupall, Smarti, Rupahist, Ralif
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on dual peripheral H1 histamine inverse agonism
              and Platelet-Activating Factor (PAF) receptor antagonism, CYP3A4
              metabolism into active Desloratadine, why modern clinicians today
              favor Bilastine, Fexofenadine, or Levocetirizine combos over
              Rupatadine due to hepatic/renal restrictions and CYP3A4 drug
              interactions, and overdose management.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Adult Dose
              </span>
              <span className="text-xl font-bold text-blue-400 font-mono">
                10 mg Once Daily
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Unique Dual Target
              </span>
              <span className="text-xl font-bold text-cyan-300 font-mono">
                H1 + PAF Block
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
                  ? "bg-blue-500 text-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
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
                  ? "bg-blue-500 text-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
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
                  ? "bg-blue-500 text-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
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
                  <div className="flex items-center gap-2 text-blue-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Rupatadine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Rupatadine Fumarate (marketed globally as{" "}
                    <strong>Rupafin</strong>, <strong>Rupall</strong>, or{" "}
                    <strong>Smarti</strong>) is a selective, long-acting{" "}
                    <strong>second-generation H1 receptor antihistamine</strong>{" "}
                    with a distinct secondary pharmacological target: it is also
                    a potent antagonist of{" "}
                    <strong>Platelet-Activating Factor (PAF) receptors</strong>.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Structurally derived from a tricyclic pyridine ring (related
                    to Loratadine and Desloratadine), Rupatadine was engineered
                    to tackle both early histamine-mediated allergy symptoms
                    (sneezing, itching) and PAF-mediated vascular leakage and
                    persistent nasal congestion in a single once-daily 10 mg
                    tablet.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-blue-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapidly absorbed orally; peak plasma concentration (Tmax)
                  reached in 0.75–1 hour (delayed by ~1 hour with food, though
                  total systemic absorption increases slightly). Extensively
                  metabolized by hepatic <strong>CYP3A4</strong> into active
                  metabolites including <strong>Desloratadine</strong> and
                  3-hydroxydesloratadine. Elimination half-life: ~6 hours for
                  parent Rupatadine (24-hour clinical coverage sustained via
                  active metabolites).
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Dual H1 + PAF Mechanism)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Selective Peripheral H1 Receptor Inverse Agonism:
                      </strong>
                      Competitively binds to and stabilizes peripheral{" "}
                      <strong>Histamine H1 receptors</strong> on vascular
                      endothelial cells, bronchial smooth muscle, and sensory
                      nerve terminals in their inactive state—preventing
                      histamine-driven sneezing, watery discharge, ocular itch,
                      and urticarial wheals.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Platelet-Activating Factor (PAF) Receptor Antagonism:
                      </strong>
                      During allergic inflammation, mast cells, eosinophils, and
                      neutrophils release <strong>PAF</strong>—a potent
                      phospholipid mediator that triggers microvascular
                      permeability, eosinophil recruitment, bronchial
                      hyper-reactivity, and stubborn{" "}
                      <strong>nasal blockage</strong>. Rupatadine blocks PAF
                      receptors to reduce mucosal swelling and vascular leakage.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Blood-Brain Barrier Exclusion (Low-Sedating Profile):
                      </strong>
                      Polar molecular structure and P-glycoprotein efflux limit
                      central nervous system penetration, resulting in low
                      daytime sedation (~8.8% somnolence vs. 2.0% placebo) and
                      zero anticholinergic effects.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Once-daily{" "}
                  <strong>
                    dual Histamine H1 + Platelet-Activating Factor (PAF)
                    receptor blockade
                  </strong>
                  .
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-blue-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Avoid Grapefruit Juice &amp; CYP3A4 Inhibitors:
                  </strong>
                  Unlike Fexofenadine (where grapefruit juice <em>blocks</em>{" "}
                  absorption), grapefruit juice{" "}
                  <strong>inhibits hepatic CYP3A4</strong> and boosts Rupatadine
                  blood exposure by <strong>3.5-fold</strong>, increasing
                  drowsiness and side effects.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    Not Recommended in Liver or Kidney Disease:
                  </strong>
                  Product monographs explicitly state Rupatadine is{" "}
                  <strong>
                    not recommended in hepatic or renal insufficiency
                  </strong>{" "}
                  due to lack of clinical safety data.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-blue-300 block mb-1">
                    Caution With Statins (CPK Elevation):
                  </strong>
                  Rupatadine can mildly elevate blood creatine phosphokinase
                  (CPK) and cause myalgia; exercise caution when
                  co-administering with statin cholesterol medications.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Can Be Taken With or Without Food:
                  </strong>
                  Unlike Bilastine (which requires strict fasting), Rupatadine
                  10 mg may be taken with or without meals (just avoid
                  grapefruit juice and alcohol).
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-blue-300 block mb-1 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5" /> 1. Seasonal &amp; Perennial
                    Allergic Rhinitis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Seasonal hay fever (tree, grass, and weed pollens)</li>
                    <li>
                      Perennial allergic rhinitis (dust mites, pet dander,
                      molds)
                    </li>
                    <li>
                      Sneezing, watery rhinorrhea, nasal itching, and PAF-driven
                      congestion
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 2. Chronic Spontaneous
                    Urticaria (Hives)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Symptomatic relief of chronic idiopathic hives and
                      pruritus
                    </li>
                    <li>
                      Reduces number of raised skin wheals and itching intensity
                    </li>
                    <li>
                      Approved in adults, adolescents (&ge; 12y), and children
                      (&ge; 2y via oral solution)
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> 3. Ocular &amp;
                    Combination Formulations
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Allergic conjunctivitis (itchy, tearing, red eyes)</li>
                    <li>
                      Combined with Montelukast (10 mg + 10 mg) in persistent
                      allergic rhinitis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY DOCTORS RARELY PRESCRIBE RUPATADINE TODAY */}
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
                    Rupatadine Today
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Although Rupatadine&apos;s dual H1 + PAF mechanism is
                    pharmacologically intriguing, modern allergy and ENT
                    prescribing has heavily favored{" "}
                    <strong>Bilastine, Fexofenadine, and Levocetirizine</strong>
                    . Four key clinical drawbacks explain why Rupatadine sees
                    limited routine use:
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-blue-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 font-bold">
                  Reason 1 &bull; Heavy CYP3A4 Drug Interactions
                </span>
                <h3 className="text-base font-bold text-white">
                  Extensive Hepatic CYP3A4 Metabolism &amp; Grapefruit
                  Interaction
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Rupatadine is metabolized almost entirely by liver{" "}
                  <strong>CYP3A4</strong>. Co-administering common antibiotics
                  (Erythromycin, Clarithromycin), antifungals (Ketoconazole,
                  Itraconazole), or grapefruit juice spikes Rupatadine plasma
                  concentrations by <strong>3.5- to 10-fold</strong>. Modern
                  doctors prefer{" "}
                  <strong>Bilastine, Fexofenadine, or Levocetirizine</strong>,
                  which have 0% CYP450 interactions.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  Reason 2 &bull; Slower Onset &amp; Lower Skin Potency Than
                  Bilastine
                </span>
                <h3 className="text-base font-bold text-white">
                  Comparative Trials Favor Bilastine &amp; Cetirizine for Wheal
                  &amp; Itch Relief
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Head-to-head histamine skin-challenge studies show{" "}
                  <strong>Bilastine 20 mg</strong> achieves faster onset (30–60
                  min vs. 4 hours for peak skin wheal inhibition) and
                  significantly greater suppression of itching and flare redness
                  (83% wheal inhibition vs. 37% with Rupatadine 10 mg).
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
                  Reason 3 &bull; Not Recommended in Renal or Hepatic Impairment
                </span>
                <h3 className="text-base font-bold text-white">
                  Restricted in Patients With Kidney or Liver Disease
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Official regulatory monographs state Rupatadine is{" "}
                  <strong>
                    not recommended in patients with either hepatic or renal
                    insufficiency
                  </strong>
                  , whereas Bilastine is safe in both liver and kidney disease
                  without dose adjustment.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                  Reason 4 &bull; Higher Somnolence Than Fexofenadine /
                  Bilastine
                </span>
                <h3 className="text-base font-bold text-white">
                  ~8.8% Drowsiness Rate vs. ~0% With Zero-Sedation Agents
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  In pivotal clinical trials, somnolence occurred in{" "}
                  <strong>8.8%</strong> of Rupatadine-treated patients (vs. 2.0%
                  on placebo)—meaning doctors seeking true non-drowsy
                  performance choose Fexofenadine or Bilastine instead.
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
                  Use Rupatadine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    Standard 10 mg tablet once daily with or without food.
                  </li>
                  <li>
                    <strong>
                      Children Aged 2 to 11 Years (Weighing &ge; 10 kg):
                    </strong>{" "}
                    Weight-based pediatric oral solution (1 mg/mL): 2.5 mL (2.5
                    mg) once daily for children 10–25 kg; 5 mL (5 mg) once daily
                    for children &ge; 25 kg.
                  </li>
                  <li>
                    <strong>
                      Patients With Normal Liver &amp; Kidney Function:
                    </strong>{" "}
                    Safe for seasonal/perennial allergic rhinitis and chronic
                    spontaneous urticaria.
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
                      Hypersensitivity to Rupatadine or Desloratadine:
                    </strong>{" "}
                    Strictly contraindicated in allergic patients.
                  </li>
                  <li>
                    <strong>Patients Taking Potent CYP3A4 Inhibitors:</strong>{" "}
                    Contraindicated or avoid with Ketoconazole, Itraconazole,
                    Voriconazole, Erythromycin, Clarithromycin, Ritonavir, or
                    grapefruit juice.
                  </li>
                  <li>
                    <strong>Hepatic or Renal Insufficiency:</strong> Not
                    recommended due to absence of clinical safety studies in
                    liver or kidney impairment.
                  </li>
                  <li>
                    <strong>
                      Children Under 2 Years (and Under 12 Years for 10 mg
                      Tablets):
                    </strong>{" "}
                    Safety not established under age 2.
                  </li>
                  <li>
                    <strong>
                      QTc Prolongation, Uncorrected Hypokalemia, Pregnancy &amp;
                      Breastfeeding:
                    </strong>{" "}
                    Use caution in arrhythmia-prone patients; avoid in pregnancy
                    and lactation due to limited human data.
                  </li>
                </ul>
              </div>
            </div>

            {/* Stratified Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Age &amp; Weight-Stratified Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Tablet: 10 mg &bull; Pediatric Oral Solution: 1 mg / mL
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age / Weight Group</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Frequency / Administration</th>
                      <th className="p-3.5">Max 24h Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Children Under 2 Years (&lt; 10 kg)
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        NOT APPROVED &bull; Safety and efficacy not established
                        under 2 years of age
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (2 – 11 Years, 10 to &lt; 25 kg)
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
                        Children (2 – 11 Years, &ge; 25 kg)
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
                      <td className="p-3.5 font-mono text-blue-300 font-bold">
                        10 mg (1 tablet)
                      </td>
                      <td className="p-3.5">
                        Once daily with or without food (no grapefruit juice)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 10 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-amber-200">
                        Hepatic or Renal Impairment
                      </td>
                      <td className="p-3.5 font-bold text-rose-300" colSpan={3}>
                        NOT RECOMMENDED &bull; Insufficient clinical safety data
                        in liver or kidney disease
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
                <AlertCircle className="w-5 h-5 text-blue-400" />
                Common Side Effects (Therapeutic Doses)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-blue-300 block">
                    1. Central Nervous System Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Somnolence / drowsiness (~8.8% vs. 2.0% placebo)</li>
                    <li>Headache (~5.8% vs. 4.9% placebo)</li>
                    <li>Fatigue, asthenia (weakness), and mild dizziness</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    2. Mucosal &amp; Gastrointestinal Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Dry mouth (xerostomia — ~1.2%)</li>
                    <li>Abdominal pain, nausea, or diarrhea</li>
                    <li>Pharyngitis, dry throat, or mild epistaxis</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-amber-900/50 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Musculoskeletal &amp; Lab Changes
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Increased blood creatine phosphokinase (CPK) &amp; myalgia
                    </li>
                    <li>
                      Transient elevation of liver enzymes (ALT, AST, GGT)
                    </li>
                    <li>Increased appetite or mild weight gain (uncommon)</li>
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
                    Rupatadine has a wide safety index in controlled human
                    studies—daily doses up to{" "}
                    <strong>100 mg for 6 consecutive days</strong> (10 times the
                    standard 10 mg dose) were well tolerated without
                    life-threatening toxicity or ECG QT prolongation.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. Dose-Dependent Somnolence &amp; Fatigue
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  The most frequent symptom in supratherapeutic overdoses (40 mg
                  to 100+ mg) is{" "}
                  <strong>
                    marked somnolence (drowsiness), concentration deficits, and
                    asthenia
                  </strong>
                  .
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" /> 2. Alcohol &amp; CYP3A4
                  Co-Ingestion Hazard
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  High doses combined with alcohol induce significant cognitive
                  and psychomotor deterioration, while concurrent CYP3A4
                  inhibitors amplify systemic drug exposure.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>No specific antidote exists</strong>. Administer
                  activated charcoal if ingestion occurred within 1 hour and
                  provide symptomatic, supportive care with vital sign and ECG
                  monitoring.
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
                Dual-Action Second-Generation H1 Antihistamines (H1 + PAF
                Antagonism)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Within the second-generation H1 antihistamine class,{" "}
                <strong>Rupatadine</strong> stands apart as a dual-receptor
                antagonist that blocks both <strong>Histamine H1</strong> and{" "}
                <strong>Platelet-Activating Factor (PAF)</strong> receptors,
                while generating active Desloratadine metabolites in the liver.
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">2nd-Gen Agent</th>
                    <th className="p-3.5">Receptor Target</th>
                    <th className="p-3.5">Metabolism &amp; Organ Safety</th>
                    <th className="p-3.5">Somnolence Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-blue-950/15">
                    <td className="p-3.5 font-bold text-blue-300">
                      Rupatadine (Rupafin)
                    </td>
                    <td className="p-3.5 font-mono text-cyan-300">
                      Dual H1 + PAF Antagonist
                    </td>
                    <td className="p-3.5 text-amber-300">
                      Heavy CYP3A4 &bull; Avoid in Liver/Kidney disease
                    </td>
                    <td className="p-3.5">~8.8%</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-violet-300">
                      Bilastine (Bilaxten)
                    </td>
                    <td className="p-3.5 font-mono">Selective Peripheral H1</td>
                    <td className="p-3.5 text-emerald-300">
                      0% Metabolized &bull; Safe in Liver &amp; Kidney disease
                    </td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      ~0% Brain Occupancy
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-emerald-300">
                      Fexofenadine (Allegra)
                    </td>
                    <td className="p-3.5 font-mono">Selective Peripheral H1</td>
                    <td className="p-3.5">
                      80% Biliary/Fecal &bull; Safe in Liver disease
                    </td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      ~0% Brain Occupancy
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Levocetirizine (Xyzal)
                    </td>
                    <td className="p-3.5 font-mono">Selective Peripheral H1</td>
                    <td className="p-3.5">
                      85% Renal &bull; Adjust in kidney disease
                    </td>
                    <td className="p-3.5">~6%</td>
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
