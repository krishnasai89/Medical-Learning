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
  Eye,
} from "lucide-react";

export default function PhenylephrinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "why-declined" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-amber-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Selective Alpha-1 Adrenergic Agonist
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Phenylephrine Hydrochloride
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-amber-300 font-mono">
                  (R)-3-[-1-hydroxy-2-(methylamino)ethyl]phenol hydrochloride
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-400 font-mono">
                    Phenylephrine HCl
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / USAN / BAN) &bull; Sympathomimetic Vasoconstrictor
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-cyan-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Sudafed PE, Neo-Synephrine (Spray), Sinarest / Wickoryl /
                    Cheston Cold (Combos)
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on selective postsynaptic alpha-1 adrenergic
              receptor agonism, mucosal arteriolar vasoconstriction, why modern
              clinicians and the FDA have moved away from oral Phenylephrine
              tablets due to extensive gut MAO-A inactivation (&lt; 38%
              bioavailability), rhinitis medicamentosa rebound congestion from
              nasal sprays, and hypertensive overdose management.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Max Oral Ceiling
              </span>
              <span className="text-xl font-bold text-amber-400 font-mono">
                60 mg / 24h
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Primary Receptor
              </span>
              <span className="text-xl font-bold text-rose-300 font-mono">
                Alpha-1 Agonist
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
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
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
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Why Doctors Avoid Oral Tablets Today</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dosing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dosing"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
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
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>Sympathomimetic Drug Class</span>
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
                  <div className="flex items-center gap-2 text-amber-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Phenylephrine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Phenylephrine Hydrochloride is a direct-acting{" "}
                    <strong>sympathomimetic amine</strong> and{" "}
                    <strong>
                      selective alpha-1 adrenergic receptor agonist
                    </strong>
                    . Structurally, it differs from epinephrine (adrenaline)
                    only by lacking a single hydroxyl group on the benzene
                    ring—making it a pure vasoconstrictor with minimal
                    beta-adrenergic cardiac stimulation.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    It is formulated across four distinct clinical routes:{" "}
                    <strong>oral cold/sinus tablets &amp; syrups</strong> (5 mg
                    or 10 mg), <strong>topical nasal sprays/drops</strong>{" "}
                    (0.125% to 1%),{" "}
                    <strong>ophthalmic mydriatic eye drops</strong> (2.5% to
                    10%), and{" "}
                    <strong>
                      intravenous ICU/surgical vasopressor infusions
                    </strong>{" "}
                    to reverse severe hypotension.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-amber-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  <strong>Oral:</strong> Undergoes massive first-pass
                  degradation by intestinal and hepatic{" "}
                  <strong>Monoamine Oxidase (MAO-A)</strong> and
                  sulfotransferase enzymes, resulting in erratic, low systemic
                  bioavailability (~38%) and short duration (2–4 hours).{" "}
                  <strong>Topical Nasal / IV:</strong> Immediate onset (&lt; 1–5
                  minutes) by bypassing gut MAO destruction. Elimination
                  half-life: ~2.5 hours.
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
                        1. Selective Postsynaptic Alpha-1 Adrenergic Receptor
                        Agonism:
                      </strong>
                      Binds directly to Gq-coupled{" "}
                      <strong>alpha-1 adrenergic receptors</strong> on vascular
                      smooth muscle cells lining the venous capacitance vessels
                      of the nasal mucosa. Activation triggers intracellular
                      calcium release and smooth muscle contraction (
                      <strong>vasoconstriction</strong>).
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Nasal Turbinate Shrinkage &amp; Fluid Reduction:
                      </strong>
                      Constricting engorged nasal arterioles and venous
                      sinusoids reduces mucosal blood volume, decreases vascular
                      fluid leakage into tissues, shrinks swollen inferior
                      turbinates, and opens blocked nasal and sinus drainage
                      ostia.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Ocular Iris Dilator &amp; Systemic Pressor Effects:
                      </strong>
                      In the eye, stimulates alpha-1 receptors on the radial
                      dilator pupillae muscle to produce{" "}
                      <strong>
                        mydriasis (pupil dilation) without cycloplegia
                      </strong>
                      . Intravenously, increases systemic vascular resistance
                      (SVR) to raise mean arterial blood pressure (triggering
                      reflex vagal bradycardia).
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Direct{" "}
                  <strong>alpha-1 receptor arteriolar vasoconstriction</strong>{" "}
                  (mucosal decongestion, ocular mydriasis, and systemic blood
                  pressure elevation).
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-amber-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    3-Day Limit on Nasal Sprays:
                  </strong>
                  Never use topical Phenylephrine nasal sprays/drops for more
                  than <strong>3 consecutive days</strong>. Longer use causes
                  receptor desensitization and severe rebound nasal swelling (
                  <em>rhinitis medicamentosa</em>).
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    Check Multi-Symptom Cold Pills:
                  </strong>
                  Phenylephrine (5 mg or 10 mg) is bundled inside dozens of
                  combination cold tablets (e.g., Sinarest, Wickoryl, Cheston
                  Cold). Taking two brands simultaneously risks dangerous blood
                  pressure spikes.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Reflex Bradycardia (Not Tachycardia):
                  </strong>
                  Unlike Pseudoephedrine or Epinephrine, high-dose Phenylephrine
                  raises blood pressure so selectively via alpha-1 vessels that
                  baroreceptors trigger a{" "}
                  <strong>slow heart rate (reflex bradycardia)</strong>.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Strict 14-Day MAOI Washout:
                  </strong>
                  Because gut MAO-A normally destroys 60% of oral Phenylephrine,
                  taking it with an <strong>MAO inhibitor</strong> causes
                  massive systemic absorption and life-threatening hypertensive
                  crisis.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5" /> 1. Nasal &amp; Sinus
                    Decongestion
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Topical nasal sprays/drops (0.25%–1%) for acute cold &amp;
                      sinus stuffiness
                    </li>
                    <li>
                      Eustachian tube congestion during ear infections or air
                      travel
                    </li>
                    <li>
                      Oral combination cold/flu tablets (5–10 mg) for temporary
                      stuffiness
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> 2. Ophthalmology &amp;
                    Proctology
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      2.5% &amp; 10% ophthalmic drops to dilate pupils for
                      retinal fundoscopy &amp; cataract surgery
                    </li>
                    <li>
                      0.12% ophthalmic drops for temporary relief of minor eye
                      redness
                    </li>
                    <li>
                      Topical hemorrhoidal ointments/suppositories (0.25%) to
                      shrink swollen hemorrhoidal vessels
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-rose-300 block mb-1 flex items-center gap-1.5">
                    <HeartPulse className="w-3.5 h-3.5" /> 3. Anesthesia &amp;
                    ICU Critical Care (IV)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      IV bolus or continuous infusion to treat spinal/general
                      anesthesia hypotension
                    </li>
                    <li>Vasopressor support in septic or vasodilatory shock</li>
                    <li>
                      Prolonging local anesthetic action when mixed into
                      spinal/regional blocks
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY DOCTORS AVOID ORAL PHENYLEPHRINE TODAY */}
        {/* ========================================================================= */}
        {activeTab === "why-declined" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* FDA Advisory Banner */}
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                    U.S. FDA Advisory &amp; Proposed Removal Order (2023 – 2025)
                  </span>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Why Modern Doctors &amp; the FDA Concluded Oral
                    Phenylephrine Tablets Are Ineffective
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Following an extensive review of modern clinical trials, the
                    U.S. FDA Nonprescription Drugs Advisory Committee
                    unanimously concluded—and the FDA formally proposed—that{" "}
                    <strong>
                      oral Phenylephrine (10 mg) is NO more effective than a
                      sugar placebo
                    </strong>{" "}
                    for relieving nasal congestion. (Note: This applies strictly
                    to <em>oral</em> pills/syrups; topical nasal sprays, eye
                    drops, and IV injections remain highly effective).
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
                  Reason 1 &bull; Gut &amp; Liver Destruction (&lt; 38%
                  Bioavailability)
                </span>
                <h3 className="text-base font-bold text-white">
                  Destroyed by Intestinal MAO-A Before Reaching the Nose
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Phenylephrine was only put into cold tablets in 2006 as a
                  replacement when Pseudoephedrine was moved behind pharmacy
                  counters. However, when swallowed,{" "}
                  <strong>
                    monoamine oxidase (MAO-A) enzymes in the gut wall and liver
                    destroy over 60–90% of active Phenylephrine
                  </strong>{" "}
                  into inactive metabolites before it ever reaches nasal blood
                  vessels.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  Reason 2 &bull; Large Trials Showed Zero Benefit Over Placebo
                </span>
                <h3 className="text-base font-bold text-white">
                  Failed Dose-Ranging Studies Even at 40 mg
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Modern randomized controlled trials testing oral Phenylephrine
                  at 10 mg, 20 mg, 30 mg, and even 40 mg every 4 hours
                  demonstrated{" "}
                  <strong>
                    no statistically significant improvement in nasal congestion
                    scores
                  </strong>{" "}
                  compared to placebo—while high doses risked cardiovascular
                  blood pressure spikes.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                  Reason 3 &bull; Cardiovascular &amp; Pediatric Risks Without
                  Benefit
                </span>
                <h3 className="text-base font-bold text-white">
                  Unnecessary Hypertension, Insomnia &amp; Restlessness
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Prescribing a systemic vasoconstrictor that fails to unblock
                  the nose while still causing nervousness, insomnia,
                  palpitations, and blood pressure elevation in hypertensive or
                  elderly patients offers a poor risk-to-benefit ratio.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                  Reason 4 &bull; Far Superior Alternatives Exist
                </span>
                <h3 className="text-base font-bold text-white">
                  Replaced by Pseudoephedrine, Nasal Steroids, or Oxymetazoline
                  Sprays
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  For true nasal congestion, clinicians now recommend{" "}
                  <strong>oral Pseudoephedrine</strong> (which resists gut MAO
                  destruction),{" "}
                  <strong>intranasal corticosteroid sprays</strong> (Fluticasone
                  / Mometasone), short-term{" "}
                  <strong>Oxymetazoline nasal sprays (&le; 3 days)</strong>, or
                  hypertonic saline rinses.
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
                  Use Phenylephrine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>
                      Healthy Adults &amp; Adolescents (&ge; 12 Years):
                    </strong>{" "}
                    Short-term topical nasal spray (&le; 3 days) or oral 10 mg
                    every 4 hours (max 60 mg/day) if normotensive and free of
                    heart disease.
                  </li>
                  <li>
                    <strong>Children Aged 6 to 11 Years:</strong> 5 mg oral
                    every 4 hours (max 30 mg/day) or 0.25% nasal spray strictly
                    under pediatric supervision.
                  </li>
                  <li>
                    <strong>Ophthalmic &amp; Surgical Patients:</strong> Eye
                    dilation for retinal exams or IV vasopressor support during
                    anesthesia under direct specialist monitoring.
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
                    <strong>Patients Taking MAO Inhibitors (MAOIs):</strong>{" "}
                    Absolute contraindication during or within{" "}
                    <strong>14 days</strong> of stopping Phenelzine,
                    Tranylcypromine, Selegiline, or Linezolid (precipitates
                    fatal hypertensive crisis).
                  </li>
                  <li>
                    <strong>
                      Uncontrolled Hypertension &amp; Severe Coronary Artery
                      Disease (CAD):
                    </strong>{" "}
                    Systemic vasoconstriction spikes blood pressure, triggers
                    angina, and worsens heart failure.
                  </li>
                  <li>
                    <strong>
                      Children Under 4 Years (Oral OTC Cold Products):
                    </strong>{" "}
                    Contraindicated in infants and toddlers due to risk of
                    severe agitation, hypertension, and arrhythmias.
                  </li>
                  <li>
                    <strong>
                      Hyperthyroidism, Narrow-Angle Glaucoma &amp; BPH Urinary
                      Retention:
                    </strong>{" "}
                    Worsens thyrotoxic tachycardia, spikes intraocular pressure,
                    and contracts the bladder neck sphincter.
                  </li>
                  <li>
                    <strong>Pregnancy (Especially First Trimester):</strong>{" "}
                    Avoid oral decongestants during early pregnancy due to
                    potential uterine artery vasoconstriction.
                  </li>
                </ul>
              </div>
            </div>

            {/* Stratified Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Route &amp; Age-Stratified Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Oral: 5 mg, 10 mg &bull; Nasal Spray: 0.25% – 1% (&le; 3 Days
                  Max)
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Route / Population</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Dosing Interval</th>
                      <th className="p-3.5">Max Ceiling / Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Children Under 4 Years (Oral OTC)
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        CONTRAINDICATED &bull; Do not administer oral OTC
                        decongestants under 4 years of age
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Oral: Children (6 – 11 Years)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        5 mg PO
                      </td>
                      <td className="p-3.5">Every 4 hours PRN</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 30 mg / 24h
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Oral: Adults &amp; Adolescents (&ge; 12 Years)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        10 mg PO (or 20 mg ER Q8H)
                      </td>
                      <td className="p-3.5">Every 4 hours PRN</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 60 mg / 24h (&le; 7 days)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-cyan-200">
                        Topical Nasal Spray (0.25% – 1%): Adults (&ge; 12y)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        2 – 3 sprays or drops / nostril
                      </td>
                      <td className="p-3.5">
                        Not more often than every 4 hours
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        Strict Max 3 Days
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-purple-200">
                        Ophthalmic Drops (2.5% or 10%): Mydriasis
                      </td>
                      <td className="p-3.5 font-mono text-purple-300 font-bold">
                        1 drop in conjunctival sac
                      </td>
                      <td className="p-3.5">
                        15–30 min prior to exam (may repeat once)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Avoid 10% in infants &amp; cardiac patients
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
                <AlertCircle className="w-5 h-5 text-amber-400" />
                Common Side Effects (Therapeutic Doses)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    1. Central Nervous System Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Nervousness, restlessness, and jitteriness</li>
                    <li>
                      Insomnia (difficulty falling asleep if taken at night)
                    </li>
                    <li>Headache, dizziness, and mild hand tremor</li>
                    <li>Excitability and loss of appetite in children</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-rose-300 block">
                    2. Cardiovascular &amp; Autonomic Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Elevated blood pressure (hypertension)</li>
                    <li>
                      Reflex sinus bradycardia (slowed heart rate) or
                      palpitations
                    </li>
                    <li>
                      Facial flushing, pallor, or goosebumps (piloerection)
                    </li>
                    <li>Urinary hesitancy in men with enlarged prostates</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-900/50 space-y-2">
                  <strong className="text-cyan-300 block">
                    3. Topical Nasal &amp; Ocular Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Transient nasal burning, stinging, or sneezing after spray
                    </li>
                    <li>
                      <strong>Rhinitis Medicamentosa:</strong> Severe rebound
                      nasal swelling if spray is overused beyond 3 days
                    </li>
                    <li>
                      Transient eye stinging and blurred near vision (eye drops)
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
                    Overdosing on Phenylephrine—either from taking excessive
                    cold tablets, combining multiple decongestants, or
                    accidental systemic absorption of high-concentration 10% eye
                    drops / nasal sprays in children—causes severe{" "}
                    <strong>Alpha-1 Adrenergic Hypertensive Crisis</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" /> 1. Hypertensive Crisis
                  &amp; Stroke Risk
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Rapid, extreme elevation in systolic and diastolic blood
                  pressure accompanied by throbbing occipital headache,
                  sensation of fullness in the head, vomiting, myocardial
                  ischemia, pulmonary edema, and risk of hemorrhagic stroke.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  2. Reflex Bradycardia &amp; Arrhythmias
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Severe baroreceptor-mediated <strong>bradycardia</strong>, AV
                  heart block, ventricular premature beats, and cold, pale,
                  tingling extremities due to intense peripheral
                  vasoconstriction.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>1. Vasodilator Rescue:</strong> Treat severe
                  hypertension immediately with an{" "}
                  <strong>IV alpha-adrenergic antagonist (Phentolamine)</strong>{" "}
                  or IV Nitroprusside.{" "}
                  <strong>2. Avoid Pure Beta-Blockers Alone:</strong>{" "}
                  Non-selective beta-blockers can worsen unopposed alpha-1
                  vasoconstriction. Treat symptomatic reflex bradycardia with IV
                  Atropine.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: SYMPATHOMIMETIC DRUG CLASS */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Sympathomimetic Nasal Decongestants (Alpha-Adrenergic Agonists)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Nasal decongestants shrink swollen turbinate blood vessels by
                stimulating vascular <strong>alpha-adrenergic receptors</strong>
                . They are divided into short-acting{" "}
                <strong>phenylethylamines</strong> (Phenylephrine,
                Pseudoephedrine) and long-acting topical{" "}
                <strong>imidazoline derivatives</strong> (Oxymetazoline,
                Xylometazoline).
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Decongestant Agent</th>
                    <th className="p-3.5">Route &amp; Receptor Action</th>
                    <th className="p-3.5">Duration of Action</th>
                    <th className="p-3.5">Clinical Reality Today</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-amber-950/15">
                    <td className="p-3.5 font-bold text-amber-300">
                      Phenylephrine (Oral / Spray)
                    </td>
                    <td className="p-3.5 font-mono">
                      Selective Alpha-1 Agonist
                    </td>
                    <td className="p-3.5 font-mono">2 – 4 Hours</td>
                    <td className="p-3.5 text-rose-300">
                      Oral form ineffective (gut MAO destruction); spray &le; 3
                      days
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-emerald-300">
                      Pseudoephedrine (Sudafed)
                    </td>
                    <td className="p-3.5 font-mono">
                      Indirect + Direct Alpha/Beta Agonist
                    </td>
                    <td className="p-3.5 font-mono">4 – 6 Hours (12–24h ER)</td>
                    <td className="p-3.5 text-emerald-300">
                      Gold-standard effective oral decongestant (resists gut
                      MAO)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Oxymetazoline (Otrivin / Afrin)
                    </td>
                    <td className="p-3.5 font-mono">
                      Topical Imidazoline Alpha-1/2 Agonist
                    </td>
                    <td className="p-3.5 font-mono text-cyan-300 font-bold">
                      Up to 12 Hours
                    </td>
                    <td className="p-3.5">
                      Fastest, strongest topical spray (strictly &le; 3–5 days
                      max)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-indigo-300">
                      Xylometazoline (Otrivin)
                    </td>
                    <td className="p-3.5 font-mono">
                      Topical Imidazoline Alpha-1/2 Agonist
                    </td>
                    <td className="p-3.5 font-mono">8 – 10 Hours</td>
                    <td className="p-3.5">
                      Effective topical nasal decongestant (strictly &le; 3–5
                      days max)
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
