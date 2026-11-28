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
  Droplets,
  Eye,
} from "lucide-react";

export default function AzelastinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "duonase-combo" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

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
              <Droplets className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Topical Intranasal &amp; Ocular Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Azelastine Hydrochloride (Spiroflut / Duonase)
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-cyan-300 font-mono">
                  (±)-1-(2H)-phthalazinone,4-[(4-chlorophenyl)methyl]-2-(hexahydro-1-methyl-1H-azepin-4-yl)-,
                  monohydrochloride
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-cyan-400 font-mono">
                    Azelastine HCl
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / USAN / BAN) &bull; Phthalazinone H1 Blocker &amp;
                    Mast-Cell Stabilizer
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Key Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Spiroflut (Mono/Line) &bull; Duonase (Azelastine +
                    Fluticasone Propionate) &bull; Astelin / Optivar
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on ultra-rapid (15-minute onset) topical H1
              inverse agonism and mast-cell degranulation blockade, efficacy in
              both allergic and non-allergic (vasomotor) rhinitis, the
              synergistic{" "}
              <strong>Azelastine HCl + Fluticasone Propionate (Duonase)</strong>{" "}
              fixed-dose nasal spray, bitter dysgeusia prevention technique, and
              overdose safety.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Onset of Action
              </span>
              <span className="text-xl font-bold text-cyan-400 font-mono">
                15 Minutes (Topical)
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Rebound Risk
              </span>
              <span className="text-xl font-bold text-emerald-300 font-mono">
                Zero (Non-Decongestant)
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
              onClick={() => setActiveTab("duonase-combo")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "duonase-combo"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Duonase Combo (Azelastine + Fluticasone)</span>
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
              <span>Side Effects, Bitter Taste &amp; Overdose</span>
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
              <span>Topical Antihistamine Class</span>
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
                      What is Azelastine Hydrochloride?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Azelastine Hydrochloride (available in single-agent
                    respiratory lines such as <strong>Spiroflut</strong> /{" "}
                    <strong>Astelin</strong> and prominently in fixed-dose
                    steroid combinations such as <strong>Duonase</strong>) is a
                    potent, fast-acting{" "}
                    <strong>
                      phthalazinone-derivative second-generation topical H1
                      antihistamine
                    </strong>
                    .
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Unlike oral antihistamine tablets (which take 60–180 minutes
                    to reach the nose via the bloodstream), spraying Azelastine
                    directly onto the nasal mucosa delivers high local drug
                    concentrations within <strong>15 minutes</strong>—rapidly
                    halting sneezing, runny nose, nasal itching, and vasomotor
                    congestion for up to <strong>12 hours</strong> without
                    causing rebound nasal swelling.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapid local mucosal onset within <strong>15 minutes</strong>;
                  peak effect at 2–3 hours; sustained duration of{" "}
                  <strong>12 hours</strong>. Systemic bioavailability after
                  intranasal spraying is ~40% (primarily from swallowed
                  post-nasal droplets). Metabolized oxidatively by hepatic{" "}
                  <strong>CYP3A4, CYP2D6, and CYP1A2</strong> into an active
                  metabolite, <strong>desmethylazelastine</strong>; elimination
                  half-life: ~22 hours (54 hours for active metabolite),
                  excreted ~75% in feces.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Multi-Target Mechanism)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Selective Peripheral H1 Receptor Inverse Agonism:
                      </strong>
                      Competitively binds to and stabilizes nasal and
                      conjunctival <strong>Histamine H1 receptors</strong> in
                      their inactive state—blocking mast-cell histamine from
                      stimulating sensory C-fiber sneeze/itch nerves and leaky
                      mucosal capillaries.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Mast-Cell &amp; Basophil Degranulation Stabilization:
                      </strong>
                      Inhibits intracellular calcium influx in activated mast
                      cells, preventing the release of pre-formed histamine,
                      leukotrienes (LTC4/LTD4), cytokines (IL-4, IL-6,
                      TNF-&alpha;), and ICAM-1 adhesion molecules.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Substance P &amp; TRPV1 Neuropeptide Desensitization
                        (Vasomotor Action):
                      </strong>
                      Uniquely downregulates nasal sensory nerve release of{" "}
                      <strong>Substance P</strong> and desensitizes{" "}
                      <strong>TRPV1 irritant channels</strong>—explaining why
                      Azelastine works for both allergic rhinitis AND
                      non-allergic vasomotor rhinitis (triggered by cold air,
                      perfumes, or smoke).
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-indigo-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Rapid (15 min){" "}
                  <strong>
                    topical H1 blockade + mast-cell stabilization + sensory
                    neuropeptide suppression
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
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    Preventing the Bitter Taste (Dysgeusia):
                  </strong>
                  Azelastine tastes intensely bitter if it drips down the throat
                  (~20% incidence). Keep your head{" "}
                  <strong>tilted slightly forward</strong> while spraying and
                  sniff gently—never tilt back or snort hard.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-900/50">
                  <strong className="text-emerald-300 block mb-1">
                    Zero Rebound Nasal Swelling:
                  </strong>
                  Unlike Oxymetazoline or Xylometazoline (restricted to 3–5
                  days), Azelastine is an antihistamine, not a
                  vasoconstrictor—it causes{" "}
                  <strong>zero rhinitis medicamentosa</strong> and is safe
                  long-term.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Treats Non-Allergic (Vasomotor) Rhinitis:
                  </strong>
                  Unlike oral antihistamine tablets (which fail in non-allergic
                  rhinitis), Azelastine nasal spray is FDA-approved for
                  vasomotor rhinitis triggered by weather changes, smoke, or
                  strong odors.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Watch Additive Drowsiness (~11%):
                  </strong>
                  Because ~40% of swallowed spray enters systemic circulation,
                  Azelastine can cause mild drowsiness in ~11% of users—avoid
                  combining with alcohol or sedatives.
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
                      Rapid 15-minute rescue for sneezing, watery rhinorrhea,
                      and nasal itching
                    </li>
                    <li>
                      Effective monotherapy for mild-to-moderate allergic
                      rhinitis (&ge; 5–6 years)
                    </li>
                    <li>
                      Works even when oral antihistamine pills fail to control
                      breakthrough nasal symptoms
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-indigo-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 2. Non-Allergic
                    (Vasomotor) Rhinitis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Chronic runny/stuffy nose triggered by cold air, humidity
                      shifts, perfumes, or exhaust fumes
                    </li>
                    <li>
                      Desensitizes hyper-reactive nasal TRPV1 sensory nerves
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-teal-300 block mb-1 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> 3. Ocular Allergy &amp;
                    Steroid Combination (Duonase)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      0.05% ophthalmic solution (Optivar) for allergic
                      conjunctivitis eye itching
                    </li>
                    <li>
                      Combined with Fluticasone Propionate (
                      <strong>Duonase</strong>) for severe allergic rhinitis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: DUONASE COMBINATION (AZELASTINE + FLUTICASONE PROPIONATE) */}
        {/* ========================================================================= */}
        {activeTab === "duonase-combo" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block mb-1">
                    Fixed-Dose Intranasal Combination &bull; Duonase (Cipla) /
                    Dymista (Global)
                  </span>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Azelastine HCl (140 mcg) + Fluticasone Propionate (50 mcg) —
                    Duonase Nasal Spray
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Clinical guidelines (ARIA / AAAAI) recognize fixed-dose{" "}
                    <strong>
                      Azelastine HCl + Fluticasone Propionate (Duonase)
                    </strong>{" "}
                    as the single most potent intranasal therapy available for
                    moderate-to-severe allergic rhinitis—outperforming either
                    intranasal steroids alone or oral antihistamine + steroid
                    regimens in speed and symptom reduction.
                  </p>
                </div>
              </div>
            </div>

            {/* Dual Mechanism Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                  Component 1 &bull; 140 mcg / Actuation
                </span>
                <h3 className="text-base font-bold text-white">
                  Azelastine Hydrochloride: Immediate 15-Minute Symptom Rescue
                </h3>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Rapid Onset (15 Minutes):</strong> Bridges the
                    3-to-7-day lag time required for nasal steroids to reach
                    peak anti-inflammatory action.
                  </li>
                  <li>
                    <strong>Neurogenic &amp; Histamine Blockade:</strong>{" "}
                    Immediately halts explosive sneezing fits, nasal itching,
                    watery drip, and Substance P sensory irritation.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                  Component 2 &bull; 50 mcg / Actuation
                </span>
                <h3 className="text-base font-bold text-white">
                  Fluticasone Propionate: Deep Genomic Anti-Inflammatory Control
                </h3>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Sustained Congestion &amp; Edema Clearance:</strong>{" "}
                    Suppresses NF-&kappa;B cytokines, eosinophils, and
                    leukotrienes to shrink chronic turbinate swelling and clear
                    stubborn nasal blockage.
                  </li>
                  <li>
                    <strong>Single-Device Compliance:</strong> Delivering both
                    drugs in a single mist doubles mucosal retention compared to
                    spraying two separate bottles sequentially (which washes out
                    the first spray).
                  </li>
                </ul>
              </div>
            </div>

            {/* Duonase Dosing & Clinical Summary Box */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-300">
              <div>
                <strong className="text-white block mb-0.5">
                  Standard Duonase Dosing (Adults &amp; Children &ge; 6–12
                  Years):
                </strong>
                <span className="text-slate-400">
                  <strong>1 spray per nostril twice daily</strong> (morning and
                  evening). Each actuation delivers{" "}
                  <strong>
                    140 mcg Azelastine HCl + 50 mcg Fluticasone Propionate
                  </strong>{" "}
                  (total daily dose: 560 mcg Azelastine + 200 mcg Fluticasone).
                </span>
              </div>
              <span className="font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 px-3 py-1.5 rounded-lg shrink-0 font-bold">
                1 Spray / Nostril BID
              </span>
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
                  Use Azelastine (&amp; Duonase)?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong> 1
                    to 2 sprays per nostril twice daily (0.1% / 137–140 mcg per
                    spray) for seasonal, perennial, or vasomotor rhinitis; or 1
                    spray per nostril twice daily for Duonase.
                  </li>
                  <li>
                    <strong>Children Aged 6 to 11 Years:</strong> 1 spray per
                    nostril twice daily (0.1% Azelastine or Duonase) under adult
                    supervision (0.15% Azelastine is approved down to age 6 for
                    seasonal rhinitis).
                  </li>
                  <li>
                    <strong>Ophthalmic Allergy Patients (&ge; 3 Years):</strong>{" "}
                    1 drop of 0.05% Azelastine eye solution in each affected eye
                    twice daily.
                  </li>
                  <li>
                    <strong>Hypertensive &amp; Cardiac Patients:</strong>{" "}
                    Safe—does not elevate blood pressure or heart rate like oral
                    decongestants.
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
                      Hypersensitivity to Azelastine (or Fluticasone in
                      Duonase):
                    </strong>{" "}
                    Strictly contraindicated in allergic patients.
                  </li>
                  <li>
                    <strong>Children Under 5–6 Years (Intranasal):</strong>{" "}
                    Safety and efficacy of intranasal Azelastine / Duonase are
                    not established under 5–6 years of age.
                  </li>
                  <li>
                    <strong>Concurrent Alcohol or CNS Depressants:</strong>{" "}
                    Additive somnolence and impaired mental alertness when
                    combined with alcohol, opioids, or sedatives.
                  </li>
                  <li>
                    <strong>
                      Recent Nasal Ulcers, Trauma, or Surgery (for Duonase):
                    </strong>{" "}
                    Corticosteroid component delays mucosal wound healing; avoid
                    until healed.
                  </li>
                  <li>
                    <strong>Pregnancy &amp; Breastfeeding:</strong> Avoid during
                    pregnancy unless clearly needed (high-dose animal studies
                    showed developmental toxicity); bitter taste in breast milk
                    may cause infant feeding aversion.
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
                    Formulation &amp; Age-Stratified Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Azelastine 0.1%: 137–140 mcg / spray &bull; Duonase: 140 mcg +
                  50 mcg / spray
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Formulation &amp; Indication</th>
                      <th className="p-3.5">Age Group</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Max 24-Hour Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Azelastine 0.1% Nasal Spray (Allergic Rhinitis)
                      </td>
                      <td className="p-3.5">Children (6 – 11 Years)</td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        1 spray per nostril BID
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        4 sprays / day (~550 mcg)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Azelastine 0.1% Nasal Spray (Allergic / Vasomotor)
                      </td>
                      <td className="p-3.5">
                        Adults &amp; Adolescents (&ge; 12y)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        1 – 2 sprays per nostril BID
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        8 sprays / day (~1,100 mcg)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-indigo-300">
                        Duonase Spray (Azelastine 140 mcg + Fluticasone 50 mcg)
                      </td>
                      <td className="p-3.5">
                        Adults &amp; Children (&ge; 6–12y)
                      </td>
                      <td className="p-3.5 font-mono text-indigo-300 font-bold">
                        1 spray per nostril BID
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        4 sprays / day (560/200 mcg)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-teal-300">
                        Azelastine 0.05% Ophthalmic Eye Drops
                      </td>
                      <td className="p-3.5">Adults &amp; Children (&ge; 3y)</td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        1 drop in affected eye(s) BID
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        2 drops / eye / day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS, BITTER TASTE & OVERDOSE */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Common Side Effects */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-cyan-400" />
                Common Side Effects (Therapeutic Doses)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-amber-900/50 space-y-2">
                  <strong className="text-amber-300 block">
                    1. Taste &amp; Local Nasal Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      <strong>
                        Dysgeusia (Bitter / Metallic Taste — ~19.7%):
                      </strong>{" "}
                      The single most common side effect when spray drains onto
                      the back of the tongue
                    </li>
                    <li>
                      Transient nasal burning, stinging, or sneezing (~4.5%)
                    </li>
                    <li>
                      Mild epistaxis (nosebleed — ~2%) or dry nasal passages
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    2. Central Nervous System Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Somnolence / mild drowsiness (~11.5% vs. 5.4% placebo)
                    </li>
                    <li>Headache (~14.8%) and fatigue (~2.3%)</li>
                    <li>Dizziness or dry mouth (~2.8%)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-indigo-900/50 space-y-2">
                  <strong className="text-indigo-300 block">
                    3. Combination-Specific (Duonase)
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Mild pharyngitis / throat irritation</li>
                    <li>
                      Localized nasal <em>Candida</em> thrush (rare)
                    </li>
                    <li>
                      Septal crusting if sprayed directly onto center cartilage
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
                    Overdose Toxicity: What Happens If Overused or Swallowed?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    A single nasal spray bottle contains roughly{" "}
                    <strong>17 mg to 30 mg of Azelastine HCl</strong>. While
                    accidental ingestion of a full bottle by an adult is
                    unlikely to cause life-threatening toxicity (oral clinical
                    trials tested doses up to 16 mg/day), excessive spraying or
                    toddler ingestion produces central H1 sedation.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. Primary Overdose Symptom: Somnolence
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Acute oral or intranasal overdose manifests predominantly as{" "}
                  <strong>
                    marked somnolence (drowsiness), lethargy, dizziness, dry
                    mouth, and mild nausea
                  </strong>
                  .
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. Chronic Overuse of Duonase (Steroid Load)
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Chronically exceeding recommended sprays of{" "}
                  <strong>Duonase</strong> adds excess Fluticasone Propionate,
                  risking nasal septal ulceration/epistaxis and mild HPA-axis
                  cortisol suppression.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>No specific antidote exists</strong>. Provide general
                  supportive and symptomatic care (activated charcoal if a large
                  amount was swallowed very recently; monitor airway and
                  alertness).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: TOPICAL ANTIHISTAMINE DRUG CLASS */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Topical Intranasal &amp; Ophthalmic Second-Generation H1
                Antihistamines
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Topical intranasal antihistamines (
                <strong>Azelastine, Olopatadine</strong>) deliver high local
                tissue concentrations directly onto the nasal mucosa, achieving
                a <strong>15-minute onset</strong>—far faster than oral
                antihistamines or intranasal steroids—and offering dual efficacy
                in both allergic and non-allergic vasomotor rhinitis.
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Topical Antihistamine</th>
                    <th className="p-3.5">Onset of Action</th>
                    <th className="p-3.5">Vasomotor Rhinitis Approved?</th>
                    <th className="p-3.5">Key Clinical Distinction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-cyan-950/15">
                    <td className="p-3.5 font-bold text-cyan-300">
                      Azelastine (Spiroflut / Astelin)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      15 Minutes
                    </td>
                    <td className="p-3.5 text-emerald-300 font-bold">
                      Yes (FDA Approved)
                    </td>
                    <td className="p-3.5">
                      Bitter taste if tilted back; paired with Fluticasone in
                      Duonase
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-indigo-300">
                      Olopatadine (Patanase / Pataday)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      15 – 30 Minutes
                    </td>
                    <td className="p-3.5 text-slate-400">
                      Allergic Rhinitis Only
                    </td>
                    <td className="p-3.5">
                      Less bitter taste than Azelastine; paired with Mometasone
                      (Ryaltris)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Duonase (Azelastine + Fluticasone)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      15 – 30 Minutes
                    </td>
                    <td className="p-3.5 text-cyan-300">
                      Severe Allergic Rhinitis
                    </td>
                    <td className="p-3.5">
                      Most potent single-device nasal spray therapy in ENT
                      guidelines
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
