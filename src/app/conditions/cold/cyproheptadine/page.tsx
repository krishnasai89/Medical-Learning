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
  Utensils,
  Sparkles,
} from "lucide-react";

export default function CyproheptadinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "tablets-vs-syrups" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-emerald-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Piperidine Antihistamine &amp; Antiserotonergic
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Cyproheptadine Hydrochloride
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-emerald-300 font-mono">
                  4-(5H-dibenzo[a,d]cyclohepten-5-ylidene)-1-methylpiperidine
                  hydrochloride
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-emerald-400 font-mono">
                    Cyproheptadine HCl
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
                    Periactin, Ciplactin, Practin, Peritol, Apetamin (Combo)
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on dual H1 histamine inverse agonism and 5-HT2
              serotonin receptor antagonism, hypothalamic appetite center
              disinhibition, off-label Serotonin Syndrome antidote rescue, why
              modern doctors avoid standalone adult tablets while prescribing
              pediatric syrups, and anticholinergic overdose toxicity.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Max Adult Ceiling
              </span>
              <span className="text-xl font-bold text-emerald-400 font-mono">
                0.5 mg/kg (32 mg)
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Unique Action
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                H1 + 5-HT2 Block
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
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
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
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
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
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
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
                  <div className="flex items-center gap-2 text-emerald-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Cyproheptadine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Cyproheptadine is a unique tricyclic benzocycloheptene{" "}
                    <strong>first-generation H1 antihistamine</strong> with
                    potent <strong>antiserotonergic (5-HT2 antagonist)</strong>{" "}
                    and <strong>anticholinergic</strong> properties. Introduced
                    in 1961, it is structurally related to pizotifen, ketotifen,
                    and tricyclic antidepressants.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    While initially developed to treat allergic rhinitis and
                    cold-induced urticaria, its powerful ability to block
                    serotonin receptors in the hypothalamus produces a
                    pronounced{" "}
                    <strong>appetite-stimulating and weight-gain effect</strong>
                    . Today, it is equally famous as a pediatric appetite
                    stimulant, migraine prophylactic, and the specific antidote
                    for life-threatening <strong>Serotonin Syndrome</strong>.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-emerald-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Well absorbed following oral ingestion. Onset of action: 15–60
                  minutes; peak plasma concentration reached in 1–4 hours.
                  Extensively metabolized in the liver into a quaternary
                  ammonium glucuronide conjugate; elimination half-life is
                  approximately 8–9 hours.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Dual Receptor Mechanism)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. H1 Receptor Inverse Agonism (Anti-Allergic &amp;
                        Sedative):
                      </strong>
                      Competitively blocks peripheral{" "}
                      <strong>Histamine H1 receptors</strong>, preventing
                      mast-cell histamine from triggering capillary
                      permeability, nasal congestion, sneezing, and itching.
                      Centrally, crossing the blood-brain barrier silences
                      hypothalamic H1 arousal neurons, causing sedation.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Serotonin 5-HT2A &amp; 5-HT2C Antagonism (Appetite
                        Stimulation):
                      </strong>
                      Normally, serotonin (5-HT) binds to{" "}
                      <strong>5-HT2C receptors</strong> on pro-opiomelanocortin
                      (POMC) neurons in the arcuate nucleus of the hypothalamus
                      to signal satiety (fullness). Cyproheptadine blocks these
                      receptors, turning off the satiety signal and stimulating
                      hunger.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Muscarinic M1/M3 Anticholinergic Blockade (Drying
                        Action):
                      </strong>
                      Antagonizes acetylcholine at parasympathetic muscarinic
                      receptors, drying watery rhinorrhea and post-nasal drip.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-amber-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Triad of{" "}
                  <strong>
                    H1 anti-allergic blockade + 5-HT2 appetite stimulation +
                    anticholinergic drying
                  </strong>
                  .
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-emerald-300 block mb-1">
                    Give 15–30 Min Before Meals:
                  </strong>
                  When prescribed as an appetite stimulant, administer{" "}
                  <strong>15 to 30 minutes prior to meals</strong> so peak
                  hypothalamic 5-HT2 blockade coincides with mealtime.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Serotonin Syndrome Antidote:
                  </strong>
                  In emergency toxicology, high-dose Cyproheptadine (12 mg
                  initial, then 2 mg Q2H) is the primary pharmacological
                  antidote to block excessive 5-HT2A activation in Serotonin
                  Syndrome.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Not a True &quot;Height-Booster&quot;:
                  </strong>
                  While marketed in combinations for pediatric growth lag, it
                  does not directly elongate bones—it simply increases caloric
                  intake so undernourished children reach their genetic
                  potential.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Initial Drowsiness Fades:
                  </strong>
                  Sedation is strongest during the first 3 to 4 days of therapy
                  and typically diminishes as receptor tolerance develops.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-emerald-300 block mb-1 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5" /> 1. Appetite Stimulation
                    &amp; Weight Gain
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Pediatric anorexia, failure to thrive, and undernutrition
                    </li>
                    <li>
                      Offsetting stimulant-induced appetite suppression in
                      children taking ADHD medications (Methylphenidate /
                      Amphetamines)
                    </li>
                    <li>
                      Convalescence recovery following severe infections
                      (typhoid, pneumonia, TB)
                    </li>
                    <li>Cachexia in oncology or cystic fibrosis patients</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" /> 2. Allergic &amp;
                    Rhinological Conditions
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Perennial and seasonal allergic rhinitis (hay fever)
                    </li>
                    <li>Vasomotor rhinitis and acute cold rhinorrhea</li>
                    <li>
                      <strong>
                        Cold-Induced Urticaria &amp; Dermatographism:
                      </strong>{" "}
                      First-line agent for physical hives triggered by cold
                      temperatures
                    </li>
                    <li>Allergic conjunctivitis and transfusion reactions</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5" /> 3. Neurological &amp;
                    Toxicology Uses
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      <strong>Serotonin Syndrome Antidote:</strong> Blocks
                      central 5-HT2A hyperstimulation from SSRI / MAOI toxicity
                    </li>
                    <li>
                      Pediatric migraine and cyclic vomiting syndrome
                      prophylaxis
                    </li>
                    <li>
                      SSRI-induced sexual dysfunction / anorgasmia (off-label)
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
                    Clinical Practice Shift: Why Avoid Adult Tablets Yet
                    Prescribe Pediatric Syrups?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    In modern practice, clinicians rarely prescribe standalone
                    Cyproheptadine 4 mg tablets to adults for colds or
                    allergies, yet{" "}
                    <strong>Cyproheptadine pediatric syrups and drops</strong>{" "}
                    (often combined with Tricholine Citrate and Sorbitol, e.g.,
                    Practin / Cypon) remain top-prescribed formulations in
                    pediatrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Side-by-Side Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Why Adult Tablets Are Avoided */}
              <div className="p-6 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20 font-bold">
                    Undesirable Weight Gain &amp; Sedation
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    4 mg Oral Tablets
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Avoid Standalone Tablets in Adults
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      1. Unwanted Rapid Weight Gain &amp; Hyperphagia
                    </strong>
                    <p className="text-slate-400">
                      For an adult seeking relief from hay fever or a runny
                      nose, taking 4 mg TID triggers intense carbohydrate
                      cravings and rapid weight gain—a major undesirable side
                      effect compared to weight-neutral 2nd-generation
                      antihistamines (Cetirizine, Fexofenadine, Loratadine).
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      2. Cosmetic &amp; Steroid-Stacking Misuse
                    </strong>
                    <p className="text-slate-400">
                      Over-the-counter 4 mg tablets (and illicit blends like
                      Apetamin) are frequently self-medicated or combined with
                      oral corticosteroids (Dexamethasone) by adults seeking
                      rapid cosmetic weight gain—leading to Cushingoid obesity,
                      diabetes, and adrenal suppression.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      3. Sedation &amp; Anticholinergic Burden
                    </strong>
                    <p className="text-slate-400">
                      Causes significant daytime drowsiness, dry mouth,
                      constipation, and urinary hesitancy, whereas modern
                      2nd-generation tablets offer 24-hour relief without
                      drowsiness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Syrups Are Still Used */}
              <div className="p-6 rounded-2xl border border-emerald-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 font-bold">
                    Pediatric Nutritional &amp; Synergistic Niche
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    2 mg / 5 mL Syrup &bull; 1.5 mg Drops
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Still Prescribe It in Syrups
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-emerald-300 block mb-1">
                      1. Turning the &quot;Side Effect&quot; into the Primary
                      Cure in Children
                    </strong>
                    <p className="text-slate-400">
                      In picky eaters, undernourished toddlers, and children on
                      ADHD stimulants, appetite stimulation is the exact
                      therapeutic goal. Liquid syrups (2 mg/5 mL) and calibrated
                      drops (1.5 mg/mL) allow exact micro-titration for children
                      who cannot swallow pills.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-emerald-300 block mb-1">
                      2. Hepatobiliary Synergy with Tricholine Citrate
                    </strong>
                    <p className="text-slate-400">
                      Pediatric syrups commonly combine{" "}
                      <strong>
                        Cyproheptadine (2 mg) + Tricholine Citrate (275 mg)
                      </strong>
                      . While Cyproheptadine increases hunger (caloric intake),
                      Tricholine Citrate acts as a lipotropic bile-acid
                      stimulator that improves hepatic fat digestion and
                      prevents fatty liver congestion.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-emerald-300 block mb-1">
                      3. Short-Course Controlled Regimens (4–8 Weeks)
                    </strong>
                    <p className="text-slate-400">
                      Pediatricians prescribe syrups in time-limited 4-to-8-week
                      nutritional catch-up courses alongside balanced
                      protein/micronutrient diets, minimizing long-term
                      tolerance.
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
                  Use Cyproheptadine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Children (&ge; 2 Years) &amp; Adolescents:</strong>{" "}
                    For allergic rhinitis, cold urticaria, migraine prophylaxis
                    (&gt; 3 years), and physician-monitored appetite
                    stimulation.
                  </li>
                  <li>
                    <strong>Adults (&ge; 18 Years):</strong> For cold urticaria,
                    dermatographism, refractory allergic pruritus, or Serotonin
                    Syndrome rescue.
                  </li>
                  <li>
                    <strong>Pregnancy (FDA Category B):</strong> Animal studies
                    show no fetal harm; may be used during pregnancy only if
                    clearly needed under obstetric guidance.
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
                      Newborn, Premature Infants &amp; Children &lt; 2 Years:
                    </strong>{" "}
                    Strictly contraindicated due to heightened sensitivity to
                    central anticholinergic toxicity, convulsions, and
                    respiratory arrest.
                  </li>
                  <li>
                    <strong>Breastfeeding / Nursing Mothers:</strong>{" "}
                    Contraindicated—excreted in breast milk and can cause severe
                    irritability, drowsiness, or apnea in nursing infants, while
                    inhibiting lactation.
                  </li>
                  <li>
                    <strong>Angle-Closure Glaucoma:</strong> Anticholinergic
                    mydriasis precipitates acute intraocular pressure spikes.
                  </li>
                  <li>
                    <strong>
                      Symptomatic Prostatic Hypertrophy (BPH) / Bladder Neck
                      Obstruction:
                    </strong>{" "}
                    Precipitates acute urinary retention.
                  </li>
                  <li>
                    <strong>
                      Stenosing Peptic Ulcer / Pyloroduodenal Obstruction:
                    </strong>{" "}
                    Anticholinergic gut slowing worsens gastric outlet
                    obstruction.
                  </li>
                  <li>
                    <strong>
                      Patients on MAO Inhibitors (MAOIs) &amp; Debilitated
                      Elderly:
                    </strong>{" "}
                    MAOIs dangerously intensify anticholinergic toxicity;
                    elderly patients face severe confusion and falls.
                  </li>
                </ul>
              </div>
            </div>

            {/* Stratified Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Clinical Dosing Matrix by Indication &amp; Age
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Max Adult Daily Ceiling: 0.5 mg/kg/day (32 mg/day)
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Population / Indication</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Frequency / Timing</th>
                      <th className="p-3.5">Max 24h Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Neonates &amp; Children &lt; 2 Years
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        CONTRAINDICATED &bull; Safety and efficacy not
                        established; high toxicity risk
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (2 – 6 Years): Allergy / Appetite
                      </td>
                      <td className="p-3.5 font-mono text-emerald-300 font-bold">
                        2 mg (5 mL syrup / 1/2 tab)
                      </td>
                      <td className="p-3.5">
                        2 to 3 times daily (15–30 min pre-meal)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 12 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (7 – 14 Years): Allergy / Appetite
                      </td>
                      <td className="p-3.5 font-mono text-emerald-300 font-bold">
                        4 mg (10 mL syrup / 1 tab)
                      </td>
                      <td className="p-3.5">2 to 3 times daily</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 16 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults: Allergy / Urticaria
                      </td>
                      <td className="p-3.5 font-mono text-emerald-300 font-bold">
                        4 mg (1 tablet)
                      </td>
                      <td className="p-3.5">
                        3 times daily (typical 12–16 mg/day)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 0.5 mg/kg (32 mg/day)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Emergency: Serotonin Syndrome (Adult)
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        12 mg initial loading dose
                      </td>
                      <td className="p-3.5">
                        Then 2 mg Q2H until response, then 8 mg Q6H
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        Max 32 mg / day (Hospital)
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
                  <strong className="text-emerald-300 block">
                    1. Metabolic &amp; Central Nervous System
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Increased appetite (hyperphagia) and weight gain</li>
                    <li>
                      Drowsiness, somnolence, and fatigue (often transient)
                    </li>
                    <li>Dizziness, disturbed coordination, and confusion</li>
                    <li>
                      Paradoxical restlessness, irritability, or excitation in
                      young children
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    2. Anticholinergic Drying Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Dryness of mouth, nose, and throat</li>
                    <li>Blurred vision and diplopia (double vision)</li>
                    <li>
                      Thickening of bronchial secretions and chest tightness
                    </li>
                    <li>Constipation and epigastric distress</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-rose-300 block">
                    3. Genitourinary, Cardiac &amp; Hepatic
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Urinary hesitancy or acute urinary retention</li>
                    <li>Palpitations, sinus tachycardia, and hypotension</li>
                    <li>Cutaneous photosensitivity rash</li>
                    <li>
                      Rare cholestatic jaundice or transient liver enzyme
                      elevations
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
                    Overdosing on Cyproheptadine—most frequently seen in
                    accidental pediatric syrup ingestion or intentional
                    high-dose tablet misuse—produces a severe{" "}
                    <strong>Anticholinergic Toxidrome</strong> coupled with
                    unpredictable{" "}
                    <strong>CNS Depression or Stimulant Hallucinations</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Manifestations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  1. Atropine-Like Anticholinergic Signs
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Fixed, widely dilated pupils (mydriasis), hot dry flushed
                  skin, severe dry mouth, hyperthermia, absent bowel sounds
                  (ileus), and acute urinary retention.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  2. Hallucinations &amp; CNS Excitation (Children)
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  High doses interact across central 5-HT2 and muscarinic
                  receptors to cause vivid visual hallucinations, agitated
                  delirium, tremors, ataxia, and generalized convulsions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  3. Coma &amp; Cardiorespiratory Collapse
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  In adults or massive ingestions, CNS stimulation gives way to
                  profound coma, hypotension, sinus tachycardia, respiratory
                  depression, and cardiac arrest.
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
                  <strong>1. Decontamination:</strong> Administer activated
                  charcoal if within 1–2 hours of ingestion and airway reflexes
                  are protected.{" "}
                  <strong>2. Seizure &amp; Delirium Control:</strong>{" "}
                  Intravenous Benzodiazepines (Lorazepam or Diazepam)—
                  <strong>strictly avoid central stimulants</strong>.{" "}
                  <strong>3. Cardiovascular &amp; Thermal Support:</strong>{" "}
                  Treat hypotension with IV isotonic fluids and vasopressors
                  (Norepinephrine); use active external cooling for
                  anticholinergic hyperthermia.
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
                Piperidine-Class First-Generation H1 Antihistamines
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cyproheptadine belongs to the{" "}
                <strong>Piperidine subclass</strong> of first-generation H1
                antihistamines (alongside Azatadine and Ketotifen).
                Structurally, its tricyclic dibenzo-cycloheptene ring resembles
                tricyclic antidepressants and antiserotonergic migraine drugs
                (Pizotifen), granting it high affinity for{" "}
                <strong>5-HT2 serotonin receptors</strong> alongside H1
                histamine and muscarinic cholinergic receptors.
              </p>
            </div>

            {/* Piperidine Class Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Agent</th>
                    <th className="p-3.5">Generation &amp; Subclass</th>
                    <th className="p-3.5">Receptor Selectivity</th>
                    <th className="p-3.5">Primary Clinical Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-emerald-950/15">
                    <td className="p-3.5 font-bold text-emerald-300">
                      Cyproheptadine
                    </td>
                    <td className="p-3.5 font-mono">1st-Gen Piperidine</td>
                    <td className="p-3.5">H1 + 5-HT2A/2C + Muscarinic M1/M3</td>
                    <td className="p-3.5">
                      Appetite stimulant, cold urticaria, Serotonin Syndrome
                      antidote
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">Ketotifen</td>
                    <td className="p-3.5 font-mono">
                      1st-Gen Benzocycloheptathiophene
                    </td>
                    <td className="p-3.5">H1 Blocker + Mast Cell Stabilizer</td>
                    <td className="p-3.5">
                      Allergic conjunctivitis eye drops &amp; pediatric asthma
                      prophylaxis
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Loratadine / Desloratadine
                    </td>
                    <td className="p-3.5 font-mono">2nd-Gen Piperidine</td>
                    <td className="p-3.5">
                      Selective Peripheral H1 Only (Non-sedating)
                    </td>
                    <td className="p-3.5">
                      Daytime allergic rhinitis without weight gain or sedation
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
