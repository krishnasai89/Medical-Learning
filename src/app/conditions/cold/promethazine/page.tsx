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

export default function PromethazinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "tablets-vs-syrups" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-rose-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-rose-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Phenothiazine Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Promethazine Hydrochloride
            </h1>

            {/* Nomenclature Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-rose-300 font-mono">
                  (RS)-N,N-dimethyl-1-(10H-phenothiazin-10-yl)propan-2-amine
                </strong>
                .
              </p>

              {/* Regional Naming Standards Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-rose-400 font-mono">
                    Promethazine HCl
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
                    Phenergan, Avomine (Theoclate), Romergan, Phenadoz
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on multi-receptor phenothiazine pharmacology
              (H1 inverse agonism, Dopamine D2 antiemetic blockade, muscarinic
              M1/M3 drying, and alpha-1 antagonism), why modern clinicians avoid
              standalone tablets in favor of multi-ingredient cough &amp;
              pediatric syrups, FDA Black Box respiratory warnings (&lt; 2
              years), and Neuroleptic Malignant Syndrome (NMS) toxicity.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Strict Pediatric Cutoff
              </span>
              <span className="text-xl font-bold text-rose-400 font-mono">
                Banned &lt; 2 Years
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Duration of Action
              </span>
              <span className="text-xl font-bold text-purple-300 font-mono">
                6 – 12 Hours
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
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
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
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
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
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
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
              <span>Black Box Warnings &amp; Overdose</span>
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
              <span>Phenothiazine &amp; 1st-Gen Class</span>
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
                  <div className="flex items-center gap-2 text-rose-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Promethazine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Promethazine is a potent, long-acting{" "}
                    <strong>
                      phenothiazine-derivative first-generation H1 antihistamine
                    </strong>
                    . Synthesized in the 1940s alongside early antipsychotic
                    drugs (like Chlorpromazine), it features a tricyclic
                    phenothiazine ring structure that gives it broad
                    multi-receptor activity far beyond simple allergy relief.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Unlike standard antihistamines that only target histamine
                    and acetylcholine, Promethazine also blocks{" "}
                    <strong>central Dopamine D2 receptors</strong> and{" "}
                    <strong>peripheral Alpha-1 adrenergic receptors</strong>.
                    This makes it one of the most powerful sedating, antiemetic
                    (anti-vomiting), and secretion-drying agents in outpatient
                    and hospital medicine.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-rose-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Well absorbed orally, but extensive hepatic first-pass
                  metabolism yields ~25% systemic bioavailability. Onset: 20
                  minutes (oral/IM), 3–5 minutes (IV). Duration: 4–6 hours (up
                  to 12 hours for antihistaminic effects). Metabolized by
                  hepatic CYP2D6 and CYP2B6; half-life: 10–14 hours.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-purple-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (4-Receptor Mechanism)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Potent H1 Receptor Inverse Agonism (Anti-Allergic
                        &amp; Heavy Sedation):
                      </strong>
                      Competitively blocks peripheral H1 receptors to stop
                      histamine-induced capillary leakage, itching, and
                      sneezing, while crossing the blood-brain barrier to
                      silence central hypothalamic H1 wakefulness neurons.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Dopamine D2 Antagonism in the CTZ (Powerful
                        Antiemetic):
                      </strong>
                      Blocks <strong>Dopamine D2 receptors</strong> in the
                      brainstem&apos;s{" "}
                      <strong>Chemoreceptor Trigger Zone (CTZ)</strong> (area
                      postrema), suppressing severe nausea, vomiting, and
                      vertigo.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Muscarinic M1/M3 &amp; Alpha-1 Blockade (Drying &amp;
                        Vasodilation):
                      </strong>
                      Strong anticholinergic M3 blockade dries up profuse viral
                      rhinorrhea and post-nasal drip, while M1 blockade prevents
                      motion sickness. Peripheral{" "}
                      <strong>Alpha-1 adrenergic blockade</strong> relaxes
                      vascular smooth muscle (causing orthostatic hypotension).
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-purple-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Quadruple-action{" "}
                  <strong>
                    anti-allergic + antiemetic + mucosal drying + deep sedative
                  </strong>
                  .
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-rose-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-400 block mb-1">
                    Absolute Age Ban (&lt; 2 Years):
                  </strong>
                  Never administer Promethazine in any form (syrup, tablet,
                  suppository, injection) to children under{" "}
                  <strong>2 years of age</strong> due to fatal respiratory
                  depression.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    2 Salts (HCl vs. Theoclate):
                  </strong>
                  <strong>Promethazine HCl</strong> (Phenergan) is used for
                  allergy, cough, and sedation.{" "}
                  <strong>Promethazine Theoclate</strong> (Avomine) is bound to
                  8-chlorotheophylline specifically for motion sickness and
                  vertigo.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-purple-300 block mb-1">
                    Extrapyramidal (EPS) Risk:
                  </strong>
                  Unlike Diphenhydramine (which <em>treats</em> dystonia),
                  Promethazine&apos;s D2 dopamine blockade can{" "}
                  <strong>cause</strong> acute dystonic spasms, akathisia, and
                  oculogyric crisis in young patients.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Photosensitivity Warning:
                  </strong>
                  Phenothiazine rings absorb UV radiation; patients taking
                  Promethazine can develop exaggerated sunburn reactions upon
                  direct sunlight exposure.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-rose-300 block mb-1 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" /> 1. Severe Nocturnal
                    Cough &amp; Rhinorrhea
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Hacking nocturnal cough triggered by post-nasal drip
                    </li>
                    <li>Profuse watery rhinorrhea and paroxysmal sneezing</li>
                    <li>Severe seasonal or perennial allergic rhinitis</li>
                    <li>Allergic conjunctivitis and anaphylaxis adjunct</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-purple-300 block mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> 2. Antiemetic &amp;
                    Vestibular Disorders
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Prevention and treatment of motion sickness (sea/air/car
                      travel)
                    </li>
                    <li>Post-operative nausea and vomiting (PONV)</li>
                    <li>
                      Acute viral gastroenteritis vomiting (children &ge; 2
                      years)
                    </li>
                    <li>Labyrinthitis and Meniere&apos;s vertigo attacks</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Moon className="w-3.5 h-3.5" /> 3. Pre-Operative &amp;
                    Obstetric Sedation
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Pre-anesthetic nighttime sedation to relieve surgical
                      anxiety
                    </li>
                    <li>
                      Potentiation of opioid analgesics during labor or post-op
                    </li>
                    <li>Severe pruritic dermatoses (urticaria, drug rashes)</li>
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
                    Today, physicians rarely prescribe standalone Promethazine
                    tablets (10 mg or 25 mg) for daytime colds or allergies, yet
                    Promethazine remains widely prescribed in{" "}
                    <strong>cough syrups</strong> (e.g., Phenergan Cough Syrup,
                    Promethazine + Codeine/Pholcodine or Expectorant combos) and{" "}
                    <strong>pediatric antiemetic elixirs</strong>.
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
                    Excessive Multi-Receptor Burden
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    10 mg – 25 mg Tablets
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Avoid Standalone Tablets Today
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      1. Heavy, Long-Lasting Sedation (10–14 Hour Half-Life)
                    </strong>
                    <p className="text-slate-400">
                      A full 25 mg tablet produces profound central nervous
                      system depression, cognitive fog, and morning hangover
                      lasting well into the next workday. Non-sedating 2nd-gen
                      tablets (Bilastine, Fexofenadine, Levocetirizine) control
                      allergies without impairing alertness.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      2. Unwanted Dopamine D2 &amp; Alpha-1 Side Effects
                    </strong>
                    <p className="text-slate-400">
                      For a simple runny nose or hay fever, blocking dopamine
                      and alpha-1 receptors is pharmacological overkill—exposing
                      patients unnecessarily to orthostatic dizziness, lowered
                      seizure threshold, and extrapyramidal muscle spasms.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      3. Recreational Misuse Potential (&quot;Purple Drank /
                      Lean&quot;)
                    </strong>
                    <p className="text-slate-400">
                      High-dose tablets and codeine-promethazine formulations
                      have high street abuse liability when combined with
                      opioids or alcohol to potentiate euphoria and sedation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Syrups Are Still Used */}
              <div className="p-6 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20 font-bold">
                    Precision Titration &amp; Nocturnal Synergy
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    5 mg / 5 mL Syrup
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Still Prescribe It in Syrups
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      1. Low Micro-Dosing (5 mg per 5 mL) + Throat Coating
                    </strong>
                    <p className="text-slate-400">
                      Syrups deliver a gentle, titratable{" "}
                      <strong>5 mg per 5 mL</strong> dose in a soothing viscous
                      liquid base that coats irritated pharyngeal mucosa
                      directly while drying post-nasal drip.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      2. Dual Action for Vomiting + Cough in Children (&ge; 2
                      Years)
                    </strong>
                    <p className="text-slate-400">
                      Children with severe post-tussive vomiting (coughing so
                      hard they gag and vomit) benefit uniquely from
                      Promethazine syrup because it simultaneously{" "}
                      <strong>dries airway drip</strong>,{" "}
                      <strong>blocks the brainstem vomiting center (D2)</strong>
                      , and <strong>promotes uninterrupted sleep</strong>.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      3. Exact Weight-Based Pediatric Titration
                    </strong>
                    <p className="text-slate-400">
                      Liquid syrups allow pediatricians to measure exact
                      milligram-per-kilogram doses (0.25–0.5 mg/kg) for children
                      aged 2–11 years who cannot swallow solid tablets.
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
                  Use Promethazine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    For acute allergic reactions, nocturnal cough, motion
                    sickness, or severe nausea/vomiting.
                  </li>
                  <li>
                    <strong>Children Aged 2 to 11 Years:</strong> Weight-based
                    syrup dosing (0.25–0.5 mg/kg) ONLY under physician
                    prescription and close parental observation.
                  </li>
                  <li>
                    <strong>Surgical / Hospital Patients:</strong> Pre-operative
                    sedation or deep intramuscular (IM) antiemetic therapy.
                  </li>
                  <li>
                    <strong>
                      Pregnancy (2nd-Line Hyperemesis Gravidarum):
                    </strong>{" "}
                    Used cautiously under obstetric supervision for severe
                    pregnancy-related nausea/vomiting when Pyridoxine/Doxylamine
                    fails (avoid within 2 weeks of delivery due to neonatal
                    platelet/respiratory effects).
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
                    <strong>Infants &amp; Children Under 2 Years:</strong>{" "}
                    Absolute FDA Black Box contraindication (fatal respiratory
                    depression).
                  </li>
                  <li>
                    <strong>Comatose or CNS-Depressed Patients:</strong>{" "}
                    Patients intoxicated with alcohol, opioids, barbiturates, or
                    benzodiazepines.
                  </li>
                  <li>
                    <strong>
                      Lower Respiratory Tract Obstruction / Acute Asthma:
                    </strong>{" "}
                    Thickens bronchial mucus, risking fatal mucous plugging.
                  </li>
                  <li>
                    <strong>
                      Narrow-Angle Glaucoma &amp; Prostatic Hypertrophy (BPH):
                    </strong>{" "}
                    Precipitates acute glaucoma crisis and urinary retention.
                  </li>
                  <li>
                    <strong>Subcutaneous or Intra-Arterial Injection:</strong>{" "}
                    Strictly forbidden (causes severe chemical tissue gangrene).
                  </li>
                  <li>
                    <strong>Elderly (&ge; 65 Years):</strong> High risk of acute
                    delirium, severe orthostatic hypotension, and falls.
                  </li>
                </ul>
              </div>
            </div>

            {/* Stratified Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-rose-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Clinical Dosing Matrix by Indication &amp; Age
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Syrup: 5 mg/5 mL &bull; Tablets: 10 mg, 25 mg
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Indication / Population</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Frequency / Timing</th>
                      <th className="p-3.5">Max 24h Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Children Under 2 Years
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        CONTRAINDICATED &bull; Absolute Black Box Ban (Fatal
                        Respiratory Depression)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (2 – 11 Years): Allergy / Vomiting
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        0.25 – 0.5 mg/kg (Max 12.5–25 mg)
                      </td>
                      <td className="p-3.5">Every 6 – 8 hours (or bedtime)</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 25–37.5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults: Nocturnal Cough / Allergy
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        12.5 mg – 25 mg (or 5–10 mL syrup)
                      </td>
                      <td className="p-3.5">At bedtime (or 12.5 mg Q6–8H)</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 50 – 75 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Adults: Motion Sickness
                      </td>
                      <td className="p-3.5 font-mono text-purple-300 font-bold">
                        25 mg PO
                      </td>
                      <td className="p-3.5">
                        30 – 60 min before travel, then Q12H
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 50 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Adults: Acute Nausea &amp; Vomiting
                      </td>
                      <td className="p-3.5 font-mono text-purple-300 font-bold">
                        12.5 mg – 25 mg PO / PR / IM
                      </td>
                      <td className="p-3.5">Every 4 – 6 hours PRN</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 100 mg / day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: BLACK BOX WARNINGS & OVERDOSE TOXICITY */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Dual Black Box Warning Header */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Dual FDA Black Box Warnings
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed pt-1">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50">
                      <strong className="text-rose-400 block mb-1">
                        1. Fatal Pediatric Respiratory Depression (&lt; 2 Years)
                      </strong>
                      Post-marketing reports document fatal apnea and
                      respiratory arrest in children under 2 years of age across
                      all routes of administration. Use the lowest effective
                      dose in children &ge; 2 years and avoid concurrent
                      respiratory depressants.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50">
                      <strong className="text-rose-400 block mb-1">
                        2. Severe Tissue Injury &amp; Gangrene (IV
                        Extravasation)
                      </strong>
                      Promethazine is highly caustic (pH 4.0–5.5). Inadvertent
                      intra-arterial injection or perivascular IV extravasation
                      causes severe chemical arteriospasm, tissue necrosis, and
                      gangrene requiring amputation.{" "}
                      <strong>Deep IM injection is preferred over IV.</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Side Effects */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                Common Side Effects (Therapeutic Doses)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-rose-300 block">
                    1. Central Nervous System &amp; EPS
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Profound drowsiness, sedation, and psychomotor slowing
                    </li>
                    <li>Dizziness, disorientation, and blurred vision</li>
                    <li>
                      <strong>Extrapyramidal Symptoms (EPS):</strong> Akathisia
                      (inner restlessness), torticollis (neck spasm), or
                      oculogyric crisis due to D2 blockade
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    2. Anticholinergic Drying Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Marked xerostomia (dry mouth) and dry throat</li>
                    <li>Thickened bronchial secretions</li>
                    <li>Urinary hesitancy or retention in BPH</li>
                    <li>Constipation and dilated pupils (mydriasis)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-purple-300 block">
                    3. Cardiovascular &amp; Dermatologic
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Orthostatic hypotension (alpha-1 blockade) and reflex
                      tachycardia
                    </li>
                    <li>QTc interval prolongation on ECG</li>
                    <li>Cutaneous photosensitivity (severe sunburn rash)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overdose Section */}
            <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-rose-400">
                <ShieldAlert className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Overdose Toxicity: What Happens If Overused?
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Promethazine overdose produces a dangerous overlap of{" "}
                <strong>Anticholinergic Delirium</strong>,{" "}
                <strong>Alpha-Adrenergic Vasodilatory Shock</strong>,{" "}
                <strong>Extrapyramidal Dystonia</strong>, and{" "}
                <strong>Neuroleptic Malignant Syndrome (NMS)</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    1. CNS Depression vs. Delirium
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Mild-to-moderate overdose causes deep coma and respiratory
                    depression. Higher doses trigger anticholinergic delirium,
                    visual hallucinations, severe agitation, and tonic-clonic
                    seizures (lowers seizure threshold).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-400 block mb-1">
                    2. Refractory Hypotension &amp; Arrhythmias
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Alpha-1 blockade causes severe vasodilation and hypotension,
                    accompanied by sinus tachycardia, QRS widening, and QTc
                    prolongation (Torsades de Pointes).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-purple-900/50">
                  <strong className="text-purple-300 block mb-1">
                    3. Neuroleptic Malignant Syndrome (NMS)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Rare but lethal phenothiazine reaction:
                    &quot;lead-pipe&quot; muscle rigidity, extreme hyperthermia
                    (&gt; 41°C), autonomic instability, and rhabdomyolysis.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-teal-950/20 border border-teal-500/30 text-xs text-slate-300">
                <strong className="text-teal-300">
                  Overdose Management Protocol:
                </strong>{" "}
                Supportive airway management and activated charcoal (if early).
                Treat hypotension with{" "}
                <strong>IV isotonic fluids and Norepinephrine</strong> (avoid
                Epinephrine, which can cause paradoxical hypotension via
                unopposed beta-2 vasodilation in alpha-blocked patients). Treat
                dystonic spasms with IV Diphenhydramine or Benztropine; treat
                seizures with IV Benzodiazepines.
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: PHENOTHIAZINE & 1ST-GEN DRUG CLASS */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Phenothiazine-Derivative First-Generation H1 Antihistamines
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Within the first-generation H1 antihistamine family,{" "}
                <strong>Phenothiazines</strong> (Promethazine,
                Trimeprazine/Alimemazine, Methdilazine) are structurally related
                to typical antipsychotic drugs (Chlorpromazine,
                Prochlorperazine). While structural modification of the side
                chain shifted their primary potency toward{" "}
                <strong>H1 histamine receptors</strong> rather than dopamine
                receptors, they retain clinically significant D2 antiemetic,
                M1/M3 anticholinergic, and alpha-1 adrenergic blocking
                properties.
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">1st-Gen Agent</th>
                    <th className="p-3.5">Chemical Subclass</th>
                    <th className="p-3.5">Unique Receptor Profile</th>
                    <th className="p-3.5">Primary Clinical Niche</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-rose-950/10">
                    <td className="p-3.5 font-bold text-rose-300">
                      Promethazine
                    </td>
                    <td className="p-3.5 font-mono">Phenothiazine</td>
                    <td className="p-3.5">
                      H1 + M1/M3 + Dopamine D2 + Alpha-1
                    </td>
                    <td className="p-3.5">
                      Vomiting/motion sickness + nocturnal cough syrup
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-indigo-300">
                      Diphenhydramine
                    </td>
                    <td className="p-3.5 font-mono">Ethanolamine</td>
                    <td className="p-3.5">H1 + Strong M1/M3 + Na+ Channel</td>
                    <td className="p-3.5">
                      Acute allergic reactions, sleep aid, dystonia reversal
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Chlorpheniramine
                    </td>
                    <td className="p-3.5 font-mono">Alkylamine</td>
                    <td className="p-3.5">
                      H1 + Moderate M3 (Lowest sedation)
                    </td>
                    <td className="p-3.5">
                      Daytime OTC multi-symptom cold &amp; flu tablets
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-300">
                      Hydroxyzine
                    </td>
                    <td className="p-3.5 font-mono">Piperazine</td>
                    <td className="p-3.5">
                      H1 + Subcortical anxiolytic action
                    </td>
                    <td className="p-3.5">
                      Severe allergic skin pruritus, chronic urticaria, anxiety
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
