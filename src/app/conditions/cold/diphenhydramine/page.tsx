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
  Moon,
  Syringe,
  HeartPulse,
} from "lucide-react";

export default function DiphenhydraminePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "tablets-vs-syrups" | "dosing" | "safety" | "drug-class"
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
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Ethanolamine Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Diphenhydramine Hydrochloride
            </h1>

            {/* Nomenclature Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-indigo-300 font-mono">
                  2-(diphenylmethoxy)-N,N-dimethylethan-1-amine
                </strong>
                .
              </p>

              {/* Regional Naming Standards Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-indigo-400 font-mono">
                    Diphenhydramine HCl
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / USAN / BAN) &bull; Global Standard
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Benadryl, ZzzQuil, Unisom SleepGels, Nytol
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on potent central H1 inverse agonism, strong
              muscarinic M3 anticholinergic drying, medullary antitussive
              suppression, why modern clinical practice avoids standalone
              tablets in favor of nocturnal cough syrups, and acute overdose
              cardiotoxicity.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Max Adult Ceiling
              </span>
              <span className="text-xl font-bold text-indigo-400 font-mono">
                300 mg / 24h
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Sedation Profile
              </span>
              <span className="text-xl font-bold text-rose-400 font-mono">
                Profound CNS Block
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
              onClick={() => setActiveTab("tablets-vs-syrups")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "tablets-vs-syrups"
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Droplets className="w-4 h-4 shrink-0" />
              <span>Why Avoid Tablets vs. Use Syrups?</span>
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
              <span>1st-Gen Antihistamine Class</span>
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
                      What is Diphenhydramine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Diphenhydramine is a potent{" "}
                    <strong>
                      ethanolamine-class first-generation H1 antihistamine
                    </strong>{" "}
                    with pronounced central sedative, anticholinergic
                    (antimuscarinic), antitussive, and antiemetic properties.
                    Approved in 1946, it is the classic active ingredient in
                    original <strong>Benadryl</strong> formulations.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Because it is highly lipophilic, Diphenhydramine rapidly
                    crosses the blood-brain barrier and occupies over{" "}
                    <strong>
                      70% of central hypothalamic H1 arousal receptors
                    </strong>
                    . Consequently, it is one of the most sedating
                    over-the-counter antihistamines available—so much so that it
                    is widely repurposed and marketed directly as a
                    non-prescription nighttime sleep aid.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-indigo-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Oral bioavailability: 40–60% (hepatic first-pass). Rapid
                  onset: 15–30 minutes; peak plasma levels at 1–4 hours.
                  Duration of action: 4–6 hours. Metabolized by hepatic CYP2D6;
                  elimination half-life: 3–9 hours in adults (up to 13–18 hours
                  in the elderly).
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
                        1. Potent H1 Receptor Inverse Agonism (Anti-Allergic
                        &amp; Sedative):
                      </strong>
                      Stabilizes both peripheral and central{" "}
                      <strong>Histamine H1 receptors</strong> in their inactive
                      state. Peripherally, this blocks histamine-driven
                      vasodilation, capillary permeability (urticaria), and
                      nerve itching. Centrally, silencing tuberomammillary
                      nucleus histaminergic neurons induces deep drowsiness.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Muscarinic M3 &amp; M1 Receptor Blockade (Drying
                        &amp; Antiemetic):
                      </strong>
                      Competitively antagonizes acetylcholine at{" "}
                      <strong>muscarinic cholinergic receptors</strong>.
                      Blocking M3 receptors on nasal glands dries up runny noses
                      and post-nasal drip; blocking M1 receptors in the
                      vestibular nucleus suppresses motion sickness and vertigo.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Medullary Cough Center &amp; C-Fiber Suppression
                        (Antitussive):
                      </strong>
                      Acts directly on the brainstem cough center and peripheral
                      vagal airway sensory fibers to raise the cough reflex
                      threshold, reducing dry, hacking nocturnal coughs.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-amber-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Rapid{" "}
                  <strong>
                    allergy &amp; itch blockade + secretion drying + cough
                    suppression + strong sedation
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
                    Extreme Impairment Risk:
                  </strong>
                  Clinical driving studies show 50 mg of Diphenhydramine impairs
                  driving performance{" "}
                  <strong>more than a 0.10% blood alcohol concentration</strong>{" "}
                  (legally intoxicated).
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Never Use Topically + Orally:
                  </strong>
                  Avoid applying Diphenhydramine anti-itch creams (Caladryl)
                  over large skin areas while taking oral
                  tablets/syrups—transdermal absorption causes cumulative
                  toxicity.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    Rapid Sleep Tolerance:
                  </strong>
                  When used for insomnia, tolerance to its sedative effect
                  develops within <strong>3 to 4 consecutive nights</strong>,
                  while anticholinergic side effects persist.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Beers Criteria Warning:
                  </strong>
                  Strongly avoided in adults &ge; 65 years due to acute
                  delirium, urinary retention, constipation, and increased
                  long-term dementia risk with chronic anticholinergic load.
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
                    <Droplets className="w-3.5 h-3.5" /> 1. Nocturnal Cough
                    &amp; Cold Symptoms
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Dry, irritating nocturnal cough (combined in cough syrups)
                    </li>
                    <li>Profuse watery rhinorrhea and post-nasal drip</li>
                    <li>Paroxysmal sneezing fits preventing sleep</li>
                    <li>Acute allergic rhinitis flare-ups</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Syringe className="w-3.5 h-3.5" /> 2. Acute Allergic
                    Reactions &amp; Pruritus
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Acute urticaria (hives), angioedema, and severe skin
                      itching
                    </li>
                    <li>
                      Adjunctive IV/IM therapy after Epinephrine in anaphylaxis
                    </li>
                    <li>
                      Prevention of mild blood transfusion allergic reactions
                    </li>
                    <li>Contact dermatitis and insect bite reactions</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-teal-300 block mb-1 flex items-center gap-1.5">
                    <Moon className="w-3.5 h-3.5" /> 3. Neurological &amp;
                    Vestibular Uses
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Short-term management of occasional insomnia</li>
                    <li>Motion sickness, vertigo, and vestibular nausea</li>
                    <li>
                      <strong>Acute Dystonic Reactions:</strong> IV/IM reversal
                      of drug-induced extrapyramidal symptoms (oculogyric
                      crisis, torticollis) caused by antipsychotics or
                      metoclopramide
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY DOCTORS AVOID TABLETS BUT USE SYRUPS */}
        {/* ========================================================================= */}
        {activeTab === "tablets-vs-syrups" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Clinical Practice Shift: Why Avoid Standalone Tablets Yet
                    Prescribe Syrups?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    In modern outpatient practice, doctors rarely prescribe
                    plain Diphenhydramine tablets (25 mg / 50 mg) for routine
                    allergies or daytime colds, yet Diphenhydramine remains a
                    staple ingredient in{" "}
                    <strong>multi-ingredient cough syrups</strong> (e.g.,
                    Benadryl Cough Formula). This clinical divergence comes down
                    to{" "}
                    <strong>
                      dosage, formulation synergy, and time-of-day targeting
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Side-by-Side Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Why Tablets Are Avoided */}
              <div className="p-6 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20 font-bold">
                    Superseded by 2nd-Gen Agents
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    25 mg – 50 mg Standalone
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Avoid Standalone Tablets Today
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      1. Disabling Daytime Sedation &amp; &quot;Hangover&quot;
                    </strong>
                    <p className="text-slate-400">
                      A single 25–50 mg tablet causes severe drowsiness, brain
                      fog, and next-day grogginess while suppressing restorative
                      REM sleep. Modern 2nd-generation tablets (Cetirizine,
                      Fexofenadine, Loratadine, Bilastine) provide 24-hour
                      allergy relief with virtually zero sedation.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      2. Short Half-Life (Inconvenient Dosing)
                    </strong>
                    <p className="text-slate-400">
                      Tablets wear off in 4 to 6 hours, requiring 3 to 4 doses
                      daily—every dose re-triggering peak sedation and dry
                      mouth.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      3. High Anticholinergic Burden &amp; Abuse Potential
                    </strong>
                    <p className="text-slate-400">
                      High-strength standalone tablets carry elevated risks of
                      urinary retention, blurred vision, constipation, and
                      intentional high-dose recreational misuse.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Syrups Are Still Used */}
              <div className="p-6 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20 font-bold">
                    Targeted Multi-Action Synergy
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    ~12.5 mg – 14 mg per 5 mL
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Still Prescribe It in Cough Syrups
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      1. Lower Fractional Dose + Local Demulcent Soothing
                    </strong>
                    <p className="text-slate-400">
                      Cough syrups typically deliver a gentler dose (
                      <strong>12.5 mg to 14.08 mg per 5 mL</strong>) suspended
                      in a viscous syrup base that physically coats and soothes
                      inflamed pharyngeal cough receptors upon swallowing.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      2. Stops Post-Nasal Drip Cough + Sedation Becomes a
                      Benefit
                    </strong>
                    <p className="text-slate-400">
                      2nd-generation antihistamines do NOT dry up viral
                      post-nasal drip. Diphenhydramine&apos;s M3 anticholinergic
                      action dries secretions dripping onto the vocal cords,
                      while its sedative effect{" "}
                      <strong>
                        helps coughing patients fall asleep at night
                      </strong>
                      .
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      3. Synergistic Combination Formulations
                    </strong>
                    <p className="text-slate-400">
                      In syrups, it is paired with expectorants (Ammonium
                      Chloride), mucolytics, or cooling agents (Menthol) to
                      simultaneously dry upper airway drip while clearing lower
                      airway phlegm.
                    </p>
                  </div>
                </div>
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
                  Use Diphenhydramine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    For acute allergic reactions, severe pruritus, motion
                    sickness, or nocturnal cough syrups.
                  </li>
                  <li>
                    <strong>Children Aged 6 to 11 Years:</strong>{" "}
                    Weight-adjusted dosing (12.5 mg – 25 mg every 6 hours)
                    strictly under pediatric guidance.
                  </li>
                  <li>
                    <strong>Hospital / Emergency Patients:</strong> IV/IM
                    administration for anaphylaxis adjunct or acute
                    antipsychotic-induced dystonia.
                  </li>
                  <li>
                    <strong>Pregnancy (Short-Term Acute Use):</strong> FDA
                    Category B; acceptable for short-term acute allergic
                    reactions or severe pruritus when benefits outweigh risks.
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
                      Neonates, Infants &amp; Children &lt; 2 Years (and &lt; 6
                      Years for OTC Cough/Cold):
                    </strong>{" "}
                    Risk of fatal respiratory depression, convulsions, and
                    paradoxical excitation.
                  </li>
                  <li>
                    <strong>Breastfeeding Mothers:</strong> Excreted into breast
                    milk; causes infant irritability, drowsiness, and decreases
                    maternal prolactin/milk supply.
                  </li>
                  <li>
                    <strong>Narrow-Angle Glaucoma:</strong> Mydriasis
                    precipitates acute angle-closure crisis.
                  </li>
                  <li>
                    <strong>
                      Prostatic Hypertrophy (BPH) / Urinary Retention:
                    </strong>{" "}
                    Blocks bladder detrusor contraction.
                  </li>
                  <li>
                    <strong>
                      Stenosing Peptic Ulcer or Pyloroduodenal Obstruction:
                    </strong>{" "}
                    Anticholinergic gut slowing worsens gastric stasis.
                  </li>
                  <li>
                    <strong>Elderly (&ge; 65 Years):</strong> Strongly
                    discouraged due to acute delirium, confusion, and
                    fall-related hip fractures.
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
                    Clinical Dosing Matrix by Age &amp; Indication
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Pediatric Rule: 1 – 1.25 mg/kg/dose (Max 5 mg/kg/day)
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Population / Indication</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Frequency</th>
                      <th className="p-3.5">Max 24h Limit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Infants &amp; Children &lt; 6 Years (OTC)
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        AVOID OTC USE &bull; Strict pediatrician supervision
                        only if &ge; 2 years (6.25 mg Q6H)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (6 – 11 Years)
                      </td>
                      <td className="p-3.5 font-mono text-indigo-300 font-bold">
                        12.5 mg – 25 mg
                      </td>
                      <td className="p-3.5">Every 4 – 6 hours</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 150 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults: Allergy / Urticaria
                      </td>
                      <td className="p-3.5 font-mono text-indigo-300 font-bold">
                        25 mg – 50 mg
                      </td>
                      <td className="p-3.5">Every 4 – 6 hours</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 300 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Adults: Cough Syrup Formula
                      </td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        5 mL – 10 mL (12.5–25 mg)
                      </td>
                      <td className="p-3.5">Every 6 – 8 hours (or bedtime)</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 4 doses / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Adults: Occasional Insomnia
                      </td>
                      <td className="p-3.5 font-mono text-indigo-300 font-bold">
                        50 mg
                      </td>
                      <td className="p-3.5">Once daily, 30 min before bed</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        50 mg / night
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Emergency IV / IM (Dystonia / Anaphylaxis)
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        25 mg – 50 mg slow IV/IM
                      </td>
                      <td className="p-3.5">Every 4 – 6 hours PRN</td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        Max 400 mg / day (Hospital)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS & OVERDOSE TOXICITY */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Common Side Effects */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                Common Side Effects (Therapeutic Doses)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-indigo-300 block">
                    1. Neurological &amp; Cognitive
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Marked drowsiness, sedation, and lethargy</li>
                    <li>
                      Dizziness, ataxia (unsteadiness), and impaired
                      coordination
                    </li>
                    <li>Memory impairment and daytime cognitive hangover</li>
                    <li>
                      Paradoxical agitation and insomnia in young children
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    2. Anticholinergic Mucosal &amp; Ocular
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Severe xerostomia (cotton-mouth) and dry throat</li>
                    <li>Mydriasis (dilated pupils) and blurred near vision</li>
                    <li>
                      Dry eyes (reduced lacrimation—irritates contact lenses)
                    </li>
                    <li>Thickened, hard-to-clear bronchial phlegm</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-rose-300 block">
                    3. Cardiovascular &amp; Autonomic
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Sinus tachycardia and palpitations</li>
                    <li>Orthostatic hypotension (dizziness upon standing)</li>
                    <li>Constipation and epigastric fullness</li>
                    <li>Urinary hesitancy or acute urinary retention</li>
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
                    Diphenhydramine overdose is particularly dangerous
                    because—unlike many other antihistamines—high concentrations
                    also block{" "}
                    <strong>
                      cardiac fast voltage-gated sodium (Na+) channels
                    </strong>{" "}
                    and <strong>hERG potassium channels</strong>, combining
                    severe <strong>Anticholinergic Delirium</strong> with
                    life-threatening{" "}
                    <strong>Tricyclic-like Cardiac Arrhythmias</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Toxicity Triad */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  1. Severe Anticholinergic Delirium
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Hot, flushed, bone-dry skin; widely dilated non-reactive
                  pupils; hyperthermia (&gt; 40°C); absent bowel sounds; urinary
                  retention; severe agitated psychosis, phantom picking, and
                  visual hallucinations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" /> 2. Cardiac Sodium
                  Channel Blockade
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Causes wide-complex tachycardia (
                  <strong>QRS widening &gt; 100 ms</strong>), QTc prolongation,
                  Torsades de Pointes, refractory hypotension, and sudden
                  ventricular fibrillation / cardiac arrest.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  3. Status Epilepticus &amp; Rhabdomyolysis
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Ingestions &gt; 1.0–1.5 g in adults trigger refractory
                  generalized tonic-clonic seizures, coma, respiratory
                  depression, and severe muscle breakdown (rhabdomyolysis)
                  leading to acute kidney failure.
                </p>
              </div>
            </div>

            {/* Emergency Treatment Protocol */}
            <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-950/20 backdrop-blur-md flex items-start gap-3 text-xs text-slate-300">
              <ShieldAlert className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">
                  Overdose Resuscitation Protocol:
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  <strong>1. QRS Widening (&gt; 100 ms):</strong> Administer{" "}
                  <strong>IV Sodium Bicarbonate (1–2 mEq/kg bolus)</strong>{" "}
                  immediately to overcome cardiac sodium channel blockade.{" "}
                  <strong>2. Seizures &amp; Agitation:</strong> High-dose IV
                  Benzodiazepines (Lorazepam/Diazepam) and active external
                  cooling for hyperthermia.{" "}
                  <strong>3. Strict Caution with Physostigmine:</strong> Unlike
                  pure anticholinergics, Physostigmine is generally avoided in
                  severe Diphenhydramine overdose if any QRS widening or cardiac
                  conduction delay is present, as it can precipitate asystole.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: 1ST-GEN ANTIHISTAMINE DRUG CLASS */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                First-Generation H1 Antihistamines (Ethanolamine Subclass)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                First-generation H1 antihistamines are lipophilic inverse
                agonists that cross the blood-brain barrier freely. Within this
                generation, the <strong>Ethanolamine subclass</strong>{" "}
                (Diphenhydramine, Dimenhydrinate, Doxylamine) exhibits the
                highest ratio of central sedation and muscarinic anticholinergic
                blockade relative to histamine receptor antagonism.
              </p>
            </div>

            {/* Ethanolamine Sibling Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-5 rounded-2xl border border-indigo-500/30 bg-slate-900/40">
                <strong className="text-indigo-300 text-sm block mb-1">
                  Diphenhydramine (Benadryl)
                </strong>
                <span className="text-[10px] font-mono text-slate-400 block mb-2">
                  Parent Ethanolamine
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Used for acute allergic reactions, urticaria, nocturnal cough
                  syrups, dystonic reactions, and short-term insomnia.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
                <strong className="text-cyan-300 text-sm block mb-1">
                  Dimenhydrinate (Dramamine)
                </strong>
                <span className="text-[10px] font-mono text-slate-400 block mb-2">
                  Diphenhydramine + 8-Chlorotheophylline Salt
                </span>
                <p className="text-slate-300 leading-relaxed">
                  A 1:1 molecular salt of Diphenhydramine paired with a mild
                  stimulant (8-chlorotheophylline) to partially offset
                  drowsiness; specialized for motion sickness and vertigo.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
                <strong className="text-teal-300 text-sm block mb-1">
                  Doxylamine Succinate (Unisom)
                </strong>
                <span className="text-[10px] font-mono text-slate-400 block mb-2">
                  Ethanolamine Derivative
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Even stronger sedative profile than diphenhydramine; used as
                  an OTC sleep aid and combined with Vitamin B6 (Pyridoxine) as
                  first-line therapy for morning sickness in pregnancy.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
