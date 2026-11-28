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
  Droplets,
} from "lucide-react";

export default function XylometazolinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "why-nasal-only" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

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
              <Droplets className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Imidazoline Topical Decongestant
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Xylometazoline Hydrochloride
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-indigo-300 font-mono">
                  2-(4-tert-butyl-2,6-dimethylbenzyl)-4,5-dihydro-1H-imidazole
                  hydrochloride
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-indigo-400 font-mono">
                    Xylometazoline HCl
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / BAN) &bull; Direct Alpha-1 &amp; Alpha-2 Adrenergic
                    Agonist
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Otrivin (0.1% Adult / 0.05% Pediatric), Nasoclear-X, Olynth,
                    Sudafed Xylo
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on potent direct alpha-1 and alpha-2 adrenergic
              nasal mucosal vasoconstriction, 5-to-10-minute onset with
              8-to-10-hour airway patency, why modern physicians restrict
              Xylometazoline exclusively to localized topical nasal drops/sprays
              rather than systemic oral formulations,{" "}
              <em>rhinitis medicamentosa</em> rebound congestion beyond 3–5
              days, and pediatric imidazoline overdose toxicity.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Strict Duration Limit
              </span>
              <span className="text-xl font-bold text-rose-400 font-mono">
                Max 3 – 5 Days
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Onset &amp; Coverage
              </span>
              <span className="text-xl font-bold text-indigo-300 font-mono">
                5–10m &bull; 8–10 Hrs
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
              onClick={() => setActiveTab("why-nasal-only")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "why-nasal-only"
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Why Only Used Nasally?</span>
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
              <span>Side Effects, Rebound &amp; Overdose</span>
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
              <span>Imidazoline Drug Class</span>
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
                      What is Xylometazoline?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Xylometazoline Hydrochloride (famously marketed worldwide as{" "}
                    <strong>Otrivin</strong>) is a fast-acting, long-lasting{" "}
                    <strong>
                      imidazoline-derivative topical nasal decongestant
                    </strong>
                    . Patented in 1956, it is the direct structural parent of
                    Oxymetazoline (differing by a single phenolic hydroxyl
                    group) and remains one of the most widely used topical nasal
                    sprays and drops across Europe, India, and Asia.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Formulated as a{" "}
                    <strong>0.1% adult nasal spray/drops</strong> and a{" "}
                    <strong>0.05% pediatric solution</strong>, it shrinks
                    swollen nasal mucosal blood vessels within{" "}
                    <strong>5 to 10 minutes</strong> and restores unobstructed
                    nasal breathing for <strong>8 to 10 hours</strong>—without
                    causing daytime drowsiness or insomnia.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-indigo-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapid local mucosal onset within{" "}
                  <strong>5 to 10 minutes</strong>; peak nasal decongestion at
                  30–60 minutes; sustained duration of{" "}
                  <strong>8 to 10 hours</strong>. When sprayed correctly onto
                  intact nasal mucosa, systemic plasma levels remain near the
                  limit of detection (however, accidental swallowing or overuse
                  causes rapid systemic absorption).
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Dual Alpha-1 + Alpha-2 Mechanism)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Direct Postsynaptic Alpha-1 &amp; Alpha-2 Adrenergic
                        Agonism:
                      </strong>
                      Binds directly to postsynaptic{" "}
                      <strong>alpha-1 and alpha-2 adrenergic receptors</strong>{" "}
                      on vascular smooth muscle cells lining the arterioles and
                      venous capacitance sinusoids of the nasal mucosa,
                      triggering intracellular calcium influx and smooth muscle
                      contraction.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Turbinate Shrinkage &amp; Sinus Ostia Drainage:
                      </strong>
                      Constricting engorged nasal arterioles and venous
                      sinusoids reduces mucosal blood volume and capillary fluid
                      exudation, shrinking swollen inferior turbinates and
                      opening blocked sinus drainage openings and Eustachian
                      tubes.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Presynaptic Alpha-2 Autoreceptor Feedback:
                      </strong>
                      Also stimulates presynaptic alpha-2 receptors on
                      sympathetic nerve terminals, locally modulating endogenous
                      norepinephrine release while maintaining direct vascular
                      smooth muscle tone.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-amber-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Rapid (5–10 min), 8–10 hour{" "}
                  <strong>localized nasal mucosal vasoconstriction</strong> that
                  clears severe nasal and sinus congestion.
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
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Strict 3-to-5-Day Maximum Limit:
                  </strong>
                  Never use Xylometazoline nasal sprays/drops for more than{" "}
                  <strong>3 to 5 consecutive days</strong>. Prolonged daily use
                  causes receptor desensitization and severe{" "}
                  <strong>
                    rebound nasal congestion (rhinitis medicamentosa)
                  </strong>
                  .
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-indigo-300 block mb-1">
                    0.1% (Adult) vs. 0.05% (Pediatric):
                  </strong>
                  Always verify concentration on the bottle—using adult{" "}
                  <strong>0.1%</strong> drops in a young child causes severe
                  systemic imidazoline overdose toxicity.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    Keep Head Upright &amp; Never Share:
                  </strong>
                  Spray with head upright and sniff gently so liquid stays in
                  the nose rather than dripping down the throat. Never share
                  nasal applicators between family members.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Short-Term Bridge With Nasal Steroids:
                  </strong>
                  ENT doctors often prescribe Xylometazoline for{" "}
                  <strong>3 days only</strong> alongside a steroid nasal spray
                  (Fluticasone/Mometasone) to immediately open blocked passages
                  so the steroid can penetrate.
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
                    <Wind className="w-3.5 h-3.5" /> 1. Acute Nasal &amp; Sinus
                    Congestion
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Severe nasal blockage during acute viral common colds
                    </li>
                    <li>
                      Acute and chronic rhinosinusitis (facilitates paranasal
                      sinus drainage)
                    </li>
                    <li>
                      Allergic and vasomotor rhinitis flare-ups (short-term
                      3-day rescue)
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> 2. Middle-Ear &amp;
                    Eustachian Tube Relief
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Adjunct in acute otitis media to decongest the
                      nasopharyngeal Eustachian tube opening
                    </li>
                    <li>
                      Prevention of ear barotrauma during airplane descent or
                      scuba diving
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-rose-300 block mb-1 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" /> 3. Diagnostic
                    Rhinoscopy &amp; Epistaxis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Pre-procedural turbinate shrinkage prior to ENT nasal
                      endoscopy
                    </li>
                    <li>
                      Topical vasoconstriction to help control minor anterior
                      nosebleeds (epistaxis)
                    </li>
                    <li>
                      Available with Ipratropium Bromide (Otrivin Duo) to stop
                      both blockage AND runny nose
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY DOCTORS ONLY USE IT NASALLY */}
        {/* ========================================================================= */}
        {activeTab === "why-nasal-only" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Pharmacological Design: Why Xylometazoline Is Used Only
                    Nasally (Never Oral Pills)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Xylometazoline is formulated exclusively as a{" "}
                    <strong>topical nasal spray or drop</strong>—it is never
                    given as an oral tablet or syrup. Doctors rely on its
                    intranasal route because its imidazoline structure delivers
                    rapid local vasoconstriction at microgram doses while
                    avoiding dangerous systemic cardiovascular and central
                    nervous system toxicity.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Clinical Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
                  Reason 1 &bull; Severe Systemic Toxicity If Ingested Orally
                </span>
                <h3 className="text-base font-bold text-white">
                  Clonidine-Like Central Alpha-2 &amp; Peripheral Alpha-1
                  Toxicity
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  As an <strong>imidazoline</strong> structurally related to
                  Clonidine, systemic oral ingestion of Xylometazoline causes
                  severe peripheral alpha-1 vasoconstriction (hypertensive
                  crisis and coronary vasospasm) followed by central alpha-2
                  sympatholytic depression (profound bradycardia, hypotension,
                  hypothermia, respiratory depression, and coma).
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-indigo-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 font-bold">
                  Reason 2 &bull; Microgram Precision Directly on Turbinates
                </span>
                <h3 className="text-base font-bold text-white">
                  Unblocks the Nose in 5–10 Minutes With ~70–140 mcg
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Topical spraying deposits micrograms of drug directly onto
                  engorged nasal venous sinusoids—clearing nasal blockage in{" "}
                  <strong>5 to 10 minutes</strong> (compared to 30–60 minutes
                  for oral pills) while keeping systemic blood concentrations
                  near zero.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  Reason 3 &bull; Avoids Systemic Insomnia &amp; Blood Pressure
                  Spikes
                </span>
                <h3 className="text-base font-bold text-white">
                  Preserves Sleep &amp; Daytime Alertness (When Used &le; 3–5
                  Days)
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Unlike oral Pseudoephedrine (which causes insomnia, tremors,
                  palpitations, and elevated blood pressure), localized nasal
                  Xylometazoline allows patients to breathe freely and sleep
                  comfortably without central nervous system stimulation.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  Reason 4 &bull; Sustained 8–10 Hour Mucosal Action
                </span>
                <h3 className="text-base font-bold text-white">
                  Convenient 2–3 Times Daily Application
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Xylometazoline remains bound to nasal alpha-adrenergic
                  receptors for <strong>8 to 10 hours</strong>, providing
                  overnight congestion relief without frequent re-dosing.
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
                  Use Xylometazoline Nasal Spray/Drops?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    Standard 0.1% nasal spray or drops (1–2 sprays or 2–3 drops
                    per nostril every 8–10 hours, max 3 times/day for &le; 3–5
                    days).
                  </li>
                  <li>
                    <strong>Children Aged 6 to 11 Years:</strong> Pediatric
                    0.05% nasal drops/spray (1–2 drops or 1 spray per nostril up
                    to 2–3 times daily for max 3–5 days) under adult
                    supervision.
                  </li>
                  <li>
                    <strong>
                      Young Children (2 to 5 Years — Where Approved):
                    </strong>{" "}
                    Pediatric 0.05% drops (1–2 drops per nostril 1–2 times daily
                    for max 3 days) ONLY under pediatrician advice.
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
                      Infants &amp; Toddlers Under 2–6 Years (and Absolute Ban
                      on 0.1% Strength &lt; 12y):
                    </strong>{" "}
                    High risk of accidental swallowing or mucosal absorption
                    causing apnea, bradycardia, and coma.
                  </li>
                  <li>
                    <strong>
                      Rhinitis Sicca (Dry Atrophic Rhinitis) &amp;
                      Trans-Sphenoidal Pituitary Surgery:
                    </strong>{" "}
                    Strictly contraindicated in dry crusting nasal mucosa or
                    post-cranial/sinus surgery exposing dura mater.
                  </li>
                  <li>
                    <strong>Narrow-Angle Glaucoma:</strong> Alpha-adrenergic
                    stimulation can precipitate acute angle closure.
                  </li>
                  <li>
                    <strong>
                      Patients Taking MAO Inhibitors (MAOIs) or Tricyclic
                      Antidepressants:
                    </strong>{" "}
                    Risk of severe hypertensive reaction.
                  </li>
                  <li>
                    <strong>
                      Severe Hypertension, Coronary Artery Disease,
                      Hyperthyroidism, Pheochromocytoma &amp; Pregnancy:
                    </strong>{" "}
                    Avoid in pregnancy (potential fetal uterine
                    vasoconstriction) and use extreme caution in cardiovascular
                    disease.
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
                    Age &amp; Concentration Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-rose-300 border border-rose-900/50">
                  Strict Maximum Ceiling: 3 Doses / 24h &bull; Max 3 – 5 Days
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age Group &amp; Concentration</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Dosing Interval</th>
                      <th className="p-3.5">Maximum Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Infants Under 2 Years
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        CONTRAINDICATED &bull; Use isotonic saline drops + bulb
                        suction instead
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (6 – 11 Years) — 0.05% Pediatric
                      </td>
                      <td className="p-3.5 font-mono text-indigo-300 font-bold">
                        1 – 2 drops or 1 spray / nostril
                      </td>
                      <td className="p-3.5">
                        Every 8 – 10 hours (Max 2–3 doses / 24h)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Strict Max 3 – 5 Days
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12 Years) — 0.1% Adult
                      </td>
                      <td className="p-3.5 font-mono text-indigo-300 font-bold">
                        2 – 3 drops or 1–2 sprays / nostril
                      </td>
                      <td className="p-3.5">
                        Every 8 – 10 hours (Max 3 doses / 24h)
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        Strict Max 3 – 5 Days
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS, REBOUND & OVERDOSE */}
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
                    1. Local Nasal Mucosal Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Transient burning, stinging, or irritation in the
                      nose/throat
                    </li>
                    <li>Sneezing immediately after application</li>
                    <li>Dryness of the nasal mucosa</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-900/50 space-y-2">
                  <strong className="text-rose-300 block">
                    2. Overuse Rebound Effect (&gt; 3–5 Days)
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      <strong>Rhinitis Medicamentosa:</strong> Severe rebound
                      nasal swelling and total stuffiness as soon as the spray
                      wears off
                    </li>
                    <li>
                      Tachyphylaxis (progressive loss of effect requiring more
                      frequent sprays)
                    </li>
                    <li>
                      Chronic mucosal hypertrophy and epistaxis (nosebleeds)
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-amber-900/50 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Occasional Systemic Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Headache, nausea, or mild insomnia</li>
                    <li>
                      Palpitations, tachycardia, or transient blood pressure
                      elevation
                    </li>
                    <li>Transient visual disturbances (rare)</li>
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
                    Overdose Toxicity: What Happens If Overused or Swallowed?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Chronic overuse causes{" "}
                    <strong>Rhinitis Medicamentosa</strong>, whereas acute
                    excessive spraying or accidental oral ingestion (especially
                    in children) triggers life-threatening{" "}
                    <strong>Imidazoline (Clonidine-Like) Toxicity</strong>{" "}
                    characterized by paradoxical central nervous system
                    depression and cardiovascular collapse.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. Rhinitis Medicamentosa (Chronic Overuse)
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Using Otrivin continuously for weeks causes chronic rebound
                  vasodilation. <strong>Management:</strong> Discontinue
                  Xylometazoline immediately, irrigate with isotonic saline, and
                  use an intranasal corticosteroid spray
                  (Fluticasone/Mometasone) for 1–2 weeks to allow mucosal
                  alpha-receptors to recover.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" /> 2. Acute Pediatric
                  Imidazoline Overdose
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Accidental ingestion or over-instillation in children produces
                  rapid{" "}
                  <strong>
                    CNS depression (somnolence, lethargy, coma), constricted
                    pupils (miosis), severe bradycardia, initial hypertension
                    followed by hypotension, hypothermia, and apnea
                    (Cheyne-Stokes respiration)
                  </strong>
                  .
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Acute Overdose Emergency Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>1. ICU Cardiorespiratory Monitoring:</strong>{" "}
                  Immediate airway support and continuous ECG telemetry.{" "}
                  <strong>2. Hemodynamic Support:</strong> Treat symptomatic
                  bradycardia with <strong>IV Atropine</strong>; treat severe
                  initial hypertension with IV Phentolamine and subsequent
                  hypotension with IV fluids/vasopressors.{" "}
                  <strong>3. Decontamination:</strong> Activated charcoal only
                  if ingested very recently and airway is protected (do not
                  induce vomiting).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: IMIDAZOLINE DRUG CLASS */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Imidazoline-Derivative Topical Sympathomimetics
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Xylometazoline and its hydroxylated derivative Oxymetazoline
                form the core of modern topical nasal decongestants. Unlike
                short-acting phenylethylamines (Phenylephrine, 2–4 hours),
                imidazolines bind tightly to mucosal alpha-1 and alpha-2
                adrenergic receptors for 8–12 hours, delivering potent local
                turbinate shrinkage.
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Imidazoline Agent</th>
                    <th className="p-3.5">Standard Concentrations</th>
                    <th className="p-3.5">Duration of Action</th>
                    <th className="p-3.5">Key Clinical Distinction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-indigo-950/15">
                    <td className="p-3.5 font-bold text-indigo-300">
                      Xylometazoline (Otrivin)
                    </td>
                    <td className="p-3.5 font-mono">
                      0.1% Adult &bull; 0.05% Pediatric
                    </td>
                    <td className="p-3.5 font-mono">8 – 10 Hours</td>
                    <td className="p-3.5">
                      Parent compound; also paired with Ipratropium (Otrivin
                      Duo)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Oxymetazoline (Otrivin Oxy / Afrin)
                    </td>
                    <td className="p-3.5 font-mono">
                      0.05% Adult &bull; 0.025% Pediatric
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      10 – 12 Hours
                    </td>
                    <td className="p-3.5">
                      2x more potent per mg than Xylometazoline; 5-min onset
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Naphazoline (Privine / Clear Eyes)
                    </td>
                    <td className="p-3.5 font-mono">
                      0.012% – 0.1% Ophthalmic / Nasal
                    </td>
                    <td className="p-3.5 font-mono">4 – 6 Hours</td>
                    <td className="p-3.5">
                      Primarily used as an ocular vasoconstrictor for red eyes
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-300">
                      Tetrahydrozoline (Visine)
                    </td>
                    <td className="p-3.5 font-mono">0.05% Ophthalmic Drops</td>
                    <td className="p-3.5 font-mono">4 – 6 Hours</td>
                    <td className="p-3.5">
                      Ocular decongestant; severe toxicity if accidentally
                      ingested
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
