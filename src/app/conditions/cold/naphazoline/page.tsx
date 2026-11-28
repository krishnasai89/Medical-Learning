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
  Eye,
} from "lucide-react";

export default function NaphazolinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "why-topical-only" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-3">
              <Droplets className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              First-Generation Imidazoline Vasoconstrictor
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Naphazoline Hydrochloride
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-teal-300 font-mono">
                  2-(1-naphthylmethyl)-4,5-dihydro-1H-imidazole hydrochloride
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-teal-400 font-mono">
                    Naphazoline HCl
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / USAN / BAN) &bull; Direct Alpha-1 &amp; Alpha-2
                    Adrenergic Agonist
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Privine (Nasal), Clear Eyes, Naphcon-A, I-Kul, Ocurest
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on rapid-onset direct alpha-1 and alpha-2
              adrenergic mucosal vasoconstriction, why modern clinicians
              restrict Naphazoline exclusively to localized topical nasal and
              ophthalmic routes (never systemic oral pills) due to severe
              Clonidine-like central alpha-2 toxicity if swallowed,{" "}
              <em>rhinitis medicamentosa</em> / rebound conjunctival hyperemia
              beyond 3–5 days, and pediatric overdose resuscitation.
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
              <span className="text-xl font-bold text-teal-300 font-mono">
                5–10m &bull; 4–6 Hrs
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
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Overview, Mechanism &amp; Uses</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("why-topical-only")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "why-topical-only"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Why Only Used Topically (Nasal / Ocular)?</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dosing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dosing"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
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
                  <div className="flex items-center gap-2 text-teal-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Naphazoline?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Naphazoline Hydrochloride (originally patented in 1934 and
                    marketed as <strong>Privine</strong> for nasal congestion
                    and <strong>Clear Eyes / Naphcon-A</strong> for ocular
                    redness) is the original first-generation{" "}
                    <strong>
                      imidazoline-derivative sympathomimetic vasoconstrictor
                    </strong>
                    .
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Applied topically as a{" "}
                    <strong>0.05% nasal spray/drop</strong> or{" "}
                    <strong>0.012%–0.1% ophthalmic eye drop</strong>, it rapidly
                    constricts dilated mucosal and conjunctival blood vessels
                    within <strong>5 to 10 minutes</strong> for a duration of{" "}
                    <strong>4 to 6 hours</strong>. Because it is shorter-acting
                    and has a narrower pediatric safety margin than
                    Oxymetazoline or Xylometazoline, modern clinical use is
                    largely focused on short-term nasal decongestion and acute
                    allergic eye redness.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapid local mucosal and conjunctival vasoconstriction within{" "}
                  <strong>5 to 10 minutes</strong>; sustained duration of{" "}
                  <strong>4 to 6 hours</strong>. Intended strictly for local
                  surface action, though Naphazoline is readily absorbed across
                  damaged nasal mucosa or via accidental swallowing, producing
                  systemic cardiovascular and central nervous system effects
                  within 15–30 minutes.
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
                      venous capacitance sinusoids of the nasal mucosa and
                      ocular conjunctiva, triggering intracellular calcium
                      influx and smooth muscle contraction.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Nasal Turbinate Shrinkage &amp; Conjunctival
                        Blanching:
                      </strong>
                      In the nose, arteriolar constriction reduces blood flow
                      and fluid exudation, shrinking swollen turbinates to open
                      blocked airways. In the eye, constricting engorged
                      superficial conjunctival vessels rapidly clears bloodshot
                      redness without affecting deep scleral vessels.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Central Alpha-2 &amp; Imidazoline-1 Receptor Affinity
                        (Toxicity Pathway):
                      </strong>
                      If absorbed systemically, Naphazoline crosses the
                      blood-brain barrier and stimulates brainstem{" "}
                      <strong>
                        alpha-2 adrenergic and I1-imidazoline receptors
                      </strong>{" "}
                      (identical to Clonidine), inhibiting sympathetic outflow
                      and causing severe bradycardia, hypotension, and sedation.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-amber-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Rapid (5–10 min), 4–6 hour{" "}
                  <strong>
                    localized nasal and conjunctival arteriolar vasoconstriction
                  </strong>
                  .
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-teal-400">
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
                  Never use Naphazoline nasal or eye drops for more than{" "}
                  <strong>3 to 5 consecutive days</strong>. Overuse triggers
                  severe rebound nasal stuffiness (
                  <em>rhinitis medicamentosa</em>) or rebound bloodshot eyes (
                  <em>conjunctivitis medicamentosa</em>).
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    High Pediatric Swallowing Hazard:
                  </strong>
                  Even a single small swallow (1–2 mL) of Naphazoline nasal or
                  eye drops by a toddler can trigger life-threatening{" "}
                  <strong>
                    bradycardia, hypothermia, respiratory depression, and coma
                  </strong>
                  .
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Remove Contact Lenses First:
                  </strong>
                  When using Naphazoline eye drops, remove soft contact lenses
                  beforehand and wait at least <strong>15 minutes</strong>{" "}
                  before reinserting to prevent benzalkonium chloride
                  preservative staining.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Discard Discolored Solutions:
                  </strong>
                  Never use Naphazoline drops if the solution turns cloudy or
                  changes color—indicates chemical degradation or microbial
                  contamination.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-teal-300 block mb-1 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5" /> 1. Acute Nasal &amp; Sinus
                    Congestion
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Temporary relief of nasal blockage during acute viral
                      common colds
                    </li>
                    <li>
                      Acute rhinosinusitis and seasonal hay fever nasal
                      stuffiness
                    </li>
                    <li>
                      Short-term drainage of blocked paranasal sinus ostia
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> 2. Ocular Redness &amp;
                    Allergic Conjunctivitis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Temporary relief of minor eye redness caused by smoke,
                      dust, wind, or swimming
                    </li>
                    <li>
                      Combined with <strong>Pheniramine Maleate</strong> (e.g.,{" "}
                      <em>Naphcon-A, Opcon-A</em>) to stop both allergic eye
                      itching and conjunctival redness
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-rose-300 block mb-1 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" /> 3. ENT Epistaxis &amp;
                    Mucosal Preparation
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Topical vasoconstriction to help control minor anterior
                      nosebleeds (epistaxis)
                    </li>
                    <li>
                      Mucosal shrinkage prior to diagnostic nasal examination
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY DOCTORS ONLY USE IT TOPICALLY (NASAL / OCULAR) */}
        {/* ========================================================================= */}
        {activeTab === "why-topical-only" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Pharmacological Design: Why Naphazoline Is Used Only
                    Topically (Nasal / Ocular — Never Oral Pills)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Like Oxymetazoline and Xylometazoline,{" "}
                    <strong>
                      Naphazoline is formulated exclusively for local topical
                      application
                    </strong>{" "}
                    (nasal drops/sprays and ophthalmic eye drops) and is never
                    given as an oral tablet or syrup. Furthermore, for nasal
                    congestion, most modern doctors now prefer longer-acting{" "}
                    <strong>Oxymetazoline or Xylometazoline</strong> over
                    Naphazoline. Here is why:
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Clinical Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
                  Reason 1 &bull; Severe Systemic Clonidine-Like Toxicity If
                  Swallowed
                </span>
                <h3 className="text-base font-bold text-white">
                  Systemic Absorption Causes Bradycardia, Hypotension &amp; Coma
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Naphazoline is an <strong>imidazoline</strong> with strong
                  affinity for central brainstem alpha-2 and I1-imidazoline
                  receptors. If taken systemically (orally), it causes dangerous
                  peripheral vasoconstriction (acute hypertension) followed
                  rapidly by central sympathetic shutdown—resulting in{" "}
                  <strong>
                    profound bradycardia, hypotension, hypothermia, and
                    respiratory arrest
                  </strong>
                  .
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                  Reason 2 &bull; Direct Local Vasoconstriction at Microgram
                  Doses
                </span>
                <h3 className="text-base font-bold text-white">
                  Acts Directly on Surface Nasal &amp; Conjunctival Vessels
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Applying 0.05% drops directly onto nasal turbinates or 0.012%
                  drops onto the eye constricts superficial arterioles within{" "}
                  <strong>5 minutes</strong> without requiring systemic blood
                  levels—eliminating the insomnia and jitters of oral
                  decongestants.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  Reason 3 &bull; Shorter Duration Than Oxymetazoline /
                  Xylometazoline
                </span>
                <h3 className="text-base font-bold text-white">
                  4–6 Hour Duration Requires More Frequent Dosing
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Naphazoline nasal drops last only{" "}
                  <strong>4 to 6 hours</strong> (requiring up to 4 doses daily),
                  whereas newer imidazolines like{" "}
                  <strong>Oxymetazoline (12 hours)</strong> and{" "}
                  <strong>Xylometazoline (8–10 hours)</strong> last twice as
                  long with lower systemic absorption risk.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                  Reason 4 &bull; Higher Rebound &amp; Pediatric Risk Profile
                </span>
                <h3 className="text-base font-bold text-white">
                  Narrower Therapeutic Safety Margin in Children
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Because Naphazoline has higher mucosal absorption and central
                  alpha-2 potency than Xylometazoline, it carries a higher risk
                  of pediatric CNS depression and rebound congestion—prompting
                  most ENT physicians to favor Xylometazoline, Oxymetazoline, or
                  saline sprays for nasal use.
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
                  Use Naphazoline?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>
                      Adults &amp; Adolescents (&ge; 12 Years) — Nasal (0.05%):
                    </strong>{" "}
                    1–2 drops or sprays per nostril every 6 hours as needed for
                    a maximum of <strong>3 to 5 days</strong>.
                  </li>
                  <li>
                    <strong>
                      Adults &amp; Children (&ge; 6 Years) — Ophthalmic (0.012%
                      – 0.025%):
                    </strong>{" "}
                    1–2 drops in the affected eye(s) up to 4 times daily for max{" "}
                    <strong>3 to 4 days</strong>.
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
                      Infants &amp; Children Under 6–12 Years (for 0.05% Nasal
                      Drops):
                    </strong>{" "}
                    Strictly contraindicated in infants and young children due
                    to life-threatening CNS depression, bradycardia, and coma.
                  </li>
                  <li>
                    <strong>Narrow-Angle (Angle-Closure) Glaucoma:</strong>{" "}
                    Pupillary dilation can precipitate an acute
                    sight-threatening glaucoma attack.
                  </li>
                  <li>
                    <strong>
                      Rhinitis Sicca (Dry Crusting Nasal Mucosa) &amp;
                      Post-Pituitary Surgery:
                    </strong>{" "}
                    Contraindicated in dry atrophic nasal lining.
                  </li>
                  <li>
                    <strong>
                      Patients Taking MAO Inhibitors (MAOIs) or Tricyclic
                      Antidepressants:
                    </strong>{" "}
                    Risk of severe hypertensive crisis if systemic absorption
                    occurs.
                  </li>
                  <li>
                    <strong>
                      Severe Hypertension, Coronary Artery Disease,
                      Hyperthyroidism, Diabetes &amp; Pregnancy:
                    </strong>{" "}
                    Avoid in pregnancy and use extreme caution in cardiovascular
                    or thyroid disorders.
                  </li>
                </ul>
              </div>
            </div>

            {/* Stratified Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-teal-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Route &amp; Age-Stratified Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-rose-300 border border-rose-900/50">
                  Strict Maximum Duration: 3 – 5 Days (Nasal &amp; Ocular)
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Route &amp; Strength</th>
                      <th className="p-3.5">Approved Age</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Frequency &amp; Max Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Nasal Drops / Spray (0.05%)
                      </td>
                      <td className="p-3.5 font-bold text-rose-300">
                        Children Under 12 Years
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={2}>
                        CONTRAINDICATED &bull; High risk of severe pediatric CNS
                        &amp; cardiac toxicity
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Nasal Drops / Spray (0.05%)
                      </td>
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12y)
                      </td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        1 – 2 drops or sprays / nostril
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        Every 6 hours PRN (Max 3–5 Days)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-cyan-200">
                        Ophthalmic Drops (0.012% – 0.025%)
                      </td>
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Children (&ge; 6y)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        1 – 2 drops in affected eye(s)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Up to 4 times daily (Max 3–4 Days)
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
                <AlertCircle className="w-5 h-5 text-teal-400" />
                Common Side Effects (Therapeutic Doses)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-teal-300 block">
                    1. Local Nasal &amp; Ocular Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Transient stinging, burning, or smarting in the nose or
                      eyes
                    </li>
                    <li>Sneezing or nasal mucosal dryness</li>
                    <li>
                      Temporary mild pupil dilation (mydriasis) and blurred
                      vision (eye drops)
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-900/50 space-y-2">
                  <strong className="text-rose-300 block">
                    2. Overuse Rebound Effects (&gt; 3–5 Days)
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      <strong>Rhinitis Medicamentosa:</strong> Severe rebound
                      nasal swelling and stuffiness once the drops wear off
                    </li>
                    <li>
                      <strong>Rebound Conjunctival Hyperemia:</strong> Worse
                      bloodshot eye redness after stopping chronic eye drop use
                    </li>
                    <li>
                      Tachyphylaxis (progressive loss of vasoconstrictor
                      response)
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-amber-900/50 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Occasional Systemic Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Headache, dizziness, nervousness, or drowsiness</li>
                    <li>Nausea, sweating, or facial pallor</li>
                    <li>
                      Palpitations, blood pressure elevation, or reflex
                      bradycardia
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
                    Chronic overuse causes{" "}
                    <strong>Rhinitis Medicamentosa</strong>, whereas excessive
                    nasal/ocular dosing or accidental oral ingestion (especially
                    in infants and toddlers—as little as{" "}
                    <strong>1 to 2 mL</strong>) precipitates acute,
                    life-threatening{" "}
                    <strong>Imidazoline (Clonidine-Like) Toxicity</strong>.
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
                  Continuous daily use beyond 5 days induces chronic rebound
                  vasodilation. <strong>Treatment:</strong> Discontinue
                  Naphazoline immediately, irrigate with isotonic saline, and
                  apply an intranasal corticosteroid spray
                  (Fluticasone/Mometasone) for 1–2 weeks to restore normal
                  vascular receptor tone.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" /> 2. Acute Pediatric
                  Imidazoline Overdose
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Rapid onset (within 15–60 minutes) of{" "}
                  <strong>
                    profound CNS depression (lethargy, stupor, coma), pinpoint
                    pupils (miosis), severe bradycardia, initial hypertension
                    followed by shock/hypotension, hypothermia, and apnea
                  </strong>
                  .
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Acute Overdose Emergency Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>1. Immediate ICU Airway &amp; ECG Monitoring:</strong>{" "}
                  Support ventilation if apneic.{" "}
                  <strong>2. Hemodynamic Rescue:</strong> Administer{" "}
                  <strong>IV Atropine</strong> for symptomatic bradycardia;
                  treat severe initial hypertension with IV Phentolamine and
                  subsequent hypotension with IV isotonic fluids/vasopressors.{" "}
                  <strong>3. Naloxone Consideration:</strong> High-dose IV
                  Naloxone may help reverse severe imidazoline-induced
                  coma/respiratory depression when supportive measures fail.
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
                Naphazoline is the prototype first-generation{" "}
                <strong>imidazoline vasoconstrictor</strong>. While structurally
                related to Xylometazoline and Oxymetazoline, Naphazoline acts
                for a shorter duration (4–6 hours) and carries higher systemic
                alpha-2 toxicity if swallowed—which is why modern nasal care
                favors Xylometazoline/Oxymetazoline, while Naphazoline remains
                widely used in ophthalmic redness drops.
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Imidazoline Agent</th>
                    <th className="p-3.5">Primary Clinical Route</th>
                    <th className="p-3.5">Duration of Action</th>
                    <th className="p-3.5">Key Clinical Distinction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-teal-950/15">
                    <td className="p-3.5 font-bold text-teal-300">
                      Naphazoline (Privine / Clear Eyes)
                    </td>
                    <td className="p-3.5 font-mono">
                      Ophthalmic Drops (0.012%) &amp; Nasal (0.05%)
                    </td>
                    <td className="p-3.5 font-mono">4 – 6 Hours</td>
                    <td className="p-3.5">
                      Prototype imidazoline; mostly used in eye redness drops
                      today
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Oxymetazoline (Otrivin Oxy / Afrin)
                    </td>
                    <td className="p-3.5 font-mono">
                      Nasal Spray (0.05%), Eye Drops, Cream
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      10 – 12 Hours
                    </td>
                    <td className="p-3.5">
                      Longest-acting nasal spray; 5-min onset; lower systemic
                      absorption
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-indigo-300">
                      Xylometazoline (Otrivin)
                    </td>
                    <td className="p-3.5 font-mono">
                      Nasal Spray / Drops (0.1% / 0.05%)
                    </td>
                    <td className="p-3.5 font-mono">8 – 10 Hours</td>
                    <td className="p-3.5">
                      Standard nasal spray across Europe/Asia (strictly &le; 3–5
                      days)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-300">
                      Tetrahydrozoline (Visine)
                    </td>
                    <td className="p-3.5 font-mono">
                      Ophthalmic Drops (0.05%)
                    </td>
                    <td className="p-3.5 font-mono">4 – 6 Hours</td>
                    <td className="p-3.5">
                      Ocular vasoconstrictor; high pediatric toxicity if
                      swallowed
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
