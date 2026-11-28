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
  Lock,
} from "lucide-react";

export default function PseudoephedrinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "why-restricted" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-emerald-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

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
              Sympathomimetic Nasal Decongestant
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Pseudoephedrine Hydrochloride
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-emerald-300 font-mono">
                  (1S,2S)-2-(methylamino)-1-phenylpropan-1-ol hydrochloride
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-emerald-400 font-mono">
                    Pseudoephedrine HCl
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / USAN / BAN) &bull; Diastereomer of Ephedrine
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Sudafed, Actifed, Allegra-D, Claritin-D, Zyrtec-D, Sinufed
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on indirect presynaptic norepinephrine release
              and direct alpha-1/beta-2 adrenergic agonism, resistance to gut
              MAO-A inactivation (~95% oral bioavailability), why modern doctors
              and regulators tightly restrict routine prescribing
              (cardiovascular hypertension, insomnia, and illicit
              methamphetamine precursor controls), and sympathomimetic overdose
              toxicity.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Max Adult Ceiling
              </span>
              <span className="text-xl font-bold text-emerald-400 font-mono">
                240 mg / 24h
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Oral Bioavailability
              </span>
              <span className="text-xl font-bold text-cyan-300 font-mono">
                ~95% (MAO-Resistant)
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
              onClick={() => setActiveTab("why-restricted")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "why-restricted"
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Lock className="w-4 h-4 shrink-0" />
              <span>Why Doctors Rarely Prescribe It Today</span>
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
                  <div className="flex items-center gap-2 text-emerald-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Pseudoephedrine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Pseudoephedrine Hydrochloride (famously marketed as{" "}
                    <strong>Sudafed</strong>) is a potent, orally active{" "}
                    <strong>sympathomimetic amine nasal decongestant</strong>.
                    Chemically, it is a natural alkaloid found in{" "}
                    <em>Ephedra</em> plants and the stereo-isomer (diastereomer)
                    of ephedrine, engineered to deliver strong nasal mucosal
                    shrinkage with significantly less central nervous system
                    stimulation and blood pressure elevation than ephedrine.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Unlike oral Phenylephrine (which is destroyed in the gut
                    before reaching the bloodstream), Pseudoephedrine resists
                    intestinal Monoamine Oxidase (MAO-A) breakdown—achieving{" "}
                    <strong>~95% oral bioavailability</strong> and making it the
                    true pharmacological gold-standard oral decongestant.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-emerald-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapid and near-complete GI absorption (~95% bioavailability).
                  Onset of nasal decongestion: 15–30 minutes; peak plasma levels
                  at 1.5–2 hours (IR) or 4–6 hours (12h ER). Duration: 4–6 hours
                  (IR) or 12–24 hours (extended-release). Minimal hepatic
                  metabolism (&lt; 10% to norpseudoephedrine);{" "}
                  <strong>70–90% excreted unchanged in urine</strong> (renal
                  clearance accelerates in acidic urine). Half-life: 5–8 hours.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Dual Indirect + Direct Mechanism)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Indirect Presynaptic Norepinephrine Release (Primary
                        Mechanism):
                      </strong>
                      Enters sympathetic postganglionic nerve terminals in the
                      nasal mucosa via the norepinephrine transporter (NET) and
                      displaces stored endogenous{" "}
                      <strong>norepinephrine (noradrenaline)</strong> from
                      synaptic vesicles into the synaptic cleft.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Alpha-1 &amp; Alpha-2 Adrenergic Mucosal
                        Vasoconstriction:
                      </strong>
                      Released norepinephrine—alongside direct weak agonism by
                      Pseudoephedrine—activates{" "}
                      <strong>alpha-1 and alpha-2 adrenergic receptors</strong>{" "}
                      on venous capacitance sinusoids and arterioles lining the
                      nasal turbinates. Smooth muscle contraction shrinks
                      swollen nasal mucosa, drains engorged venous blood, and
                      widens blocked nasal and sinus passages.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Weak Beta-Adrenergic &amp; Eustachian Tube Opening:
                      </strong>
                      Mildly stimulates beta-2 receptors (bronchial relaxation)
                      and beta-1 cardiac receptors (mild heart rate elevation),
                      while shrinking inflamed mucosa around the{" "}
                      <strong>Eustachian tube</strong> to equalize middle-ear
                      pressure.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Systemic{" "}
                  <strong>
                    norepinephrine-driven nasal &amp; sinus vasoconstriction
                  </strong>{" "}
                  (unblocks severe stuffiness without topical spray rebound).
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
                    Take Last Dose Before 4:00 PM:
                  </strong>
                  Because Pseudoephedrine stimulates central adrenergic arousal
                  pathways, taking tablets in the late evening frequently causes{" "}
                  <strong>insomnia and racing thoughts</strong>.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    No Rebound Nasal Swelling:
                  </strong>
                  Unlike topical nasal sprays (Oxymetazoline / Xylometazoline),
                  oral Pseudoephedrine does <strong>not</strong> cause{" "}
                  <em>rhinitis medicamentosa</em> (rebound congestion) when
                  stopped.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Strict 14-Day MAOI Washout:
                  </strong>
                  Never combine with Monoamine Oxidase Inhibitors (Phenelzine,
                  Selegiline, Linezolid) or within 14 days of stopping
                  them—massive norepinephrine surge causes fatal hypertensive
                  crisis.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    Never Crush Extended-Release (ER) Tabs:
                  </strong>
                  12-hour (120 mg) and 24-hour (240 mg) matrix tablets must be
                  swallowed whole—crushing dumps the entire daily dose at once,
                  causing acute tachycardia and hypertension.
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
                    <Wind className="w-3.5 h-3.5" /> 1. Severe Nasal &amp; Sinus
                    Congestion
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Acute viral common cold nasal obstruction</li>
                    <li>
                      Acute and chronic rhinosinusitis (opens blocked sinus
                      ostia)
                    </li>
                    <li>
                      Allergic rhinitis stuffiness (combined in Allegra-D,
                      Claritin-D, Zyrtec-D)
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> 2. Eustachian Tube
                    &amp; Ear Pressure
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Eustachian tube dysfunction with muffled hearing /
                      middle-ear fullness
                    </li>
                    <li>
                      Prevention of barotrauma (ear pain) during airplane
                      descent or scuba diving
                    </li>
                    <li>Adjunct in acute serous otitis media</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 3. Specialized
                    Off-Label Clinical Uses
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Stuttering / recurrent ischemic priapism prophylaxis
                      (alpha-1 smooth muscle contraction)
                    </li>
                    <li>
                      Mild urinary stress incontinence (increases urethral
                      sphincter tone)
                    </li>
                    <li>Orthostatic hypotension (off-label pressor support)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY DOCTORS RARELY PRESCRIBE PSEUDOEPHEDRINE TODAY */}
        {/* ========================================================================= */}
        {activeTab === "why-restricted" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Regulatory & Clinical Header Banner */}
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Clinical &amp; Regulatory Shift: Why Doctors Rarely
                    Prescribe Pseudoephedrine Today
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Even though Pseudoephedrine is clinically proven to unblock
                    a stuffy nose far better than oral Phenylephrine, doctors
                    today avoid prescribing it routinely—and in many countries
                    (including India, the US, UK, and Australia) it is either{" "}
                    <strong>strictly regulated behind pharmacy counters</strong>{" "}
                    or <strong>banned in fixed-dose cold combinations</strong>.
                    Four major reasons explain why:
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
                  Reason 1 &bull; Illicit Methamphetamine Precursor Controls
                </span>
                <h3 className="text-base font-bold text-white">
                  Global Precursor Laws &amp; Fixed-Dose Combination Bans
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Because Pseudoephedrine can be chemically reduced into illicit{" "}
                  <strong>methamphetamine</strong>, governments worldwide placed
                  strict purchase limits, ID-tracking logs (Combat
                  Methamphetamine Epidemic Act in the US), and narcotics
                  precursor controls on it. In India, regulatory authorities
                  prohibited irrational multi-ingredient Pseudoephedrine cold
                  combinations, prompting manufacturers to reformulate products
                  with Phenylephrine instead.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  Reason 2 &bull; Cardiovascular &amp; Blood Pressure Risks
                </span>
                <h3 className="text-base font-bold text-white">
                  Systemic Vasoconstriction, Tachycardia &amp; Arrhythmias
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Pseudoephedrine constricts blood vessels throughout the entire
                  body—not just the nose. In patients with borderline
                  hypertension, coronary artery disease, or thyroid issues, it
                  spikes blood pressure, triggers palpitations, and increases
                  myocardial oxygen demand.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                  Reason 3 &bull; Insomnia, Anxiety &amp; BPH Urinary Retention
                </span>
                <h3 className="text-base font-bold text-white">
                  Disrupts Sleep &amp; Worsens Prostate Symptoms
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Patients with a cold need deep sleep to recover, yet
                  Pseudoephedrine causes restlessness, hand tremors, and
                  insomnia. In older men with benign prostatic hyperplasia
                  (BPH), alpha-1 contraction of the bladder neck frequently
                  precipitates acute urinary retention.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                  Reason 4 &bull; Safer Targeted Alternatives Exist
                </span>
                <h3 className="text-base font-bold text-white">
                  Replaced by Intranasal Steroids, Montelukast, or Saline Rinses
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  For allergic congestion, doctors now prescribe{" "}
                  <strong>Montelukast + 2nd-gen antihistamines</strong> or{" "}
                  <strong>intranasal corticosteroid sprays</strong>{" "}
                  (Fluticasone, Mometasone), which unblock the nose locally
                  without raising blood pressure or causing insomnia.
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
                  Use Pseudoephedrine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>
                      Healthy, Normotensive Adults &amp; Adolescents (&ge; 12
                      Years):
                    </strong>{" "}
                    60 mg every 4–6 hours (or 120 mg ER every 12 hours; 240 mg
                    ER once daily) for short-term severe nasal or sinus
                    congestion.
                  </li>
                  <li>
                    <strong>Children Aged 6 to 11 Years:</strong> 30 mg every
                    4–6 hours (max 120 mg/day) strictly under physician
                    guidance.
                  </li>
                  <li>
                    <strong>
                      Air Travelers / Divers With Eustachian Tube Dysfunction:
                    </strong>{" "}
                    Single 60 mg dose 30–60 minutes before flight
                    takeoff/landing to prevent ear barotrauma.
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
                    Tranylcypromine, Selegiline, or Linezolid (fatal
                    hypertensive crisis).
                  </li>
                  <li>
                    <strong>
                      Severe / Uncontrolled Hypertension &amp; Severe Coronary
                      Artery Disease:
                    </strong>{" "}
                    Precipitates hypertensive urgency, angina, or myocardial
                    infarction.
                  </li>
                  <li>
                    <strong>
                      Children Under 4–6 Years (OTC Cough &amp; Cold Products):
                    </strong>{" "}
                    Banned in infants and young children due to risk of
                    convulsions, tachycardia, and fatal toxicity.
                  </li>
                  <li>
                    <strong>
                      Hyperthyroidism, Narrow-Angle Glaucoma &amp; Symptomatic
                      BPH:
                    </strong>{" "}
                    Worsens thyrotoxic arrhythmias, intraocular pressure, and
                    urinary retention.
                  </li>
                  <li>
                    <strong>
                      Pregnancy (Especially 1st Trimester) &amp; Breastfeeding:
                    </strong>{" "}
                    Associated with rare fetal gastroschisis risk in early
                    pregnancy; suppresses maternal milk production (decreases
                    prolactin) and causes infant irritability during lactation.
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
                    Age &amp; Formulation Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  IR Tablets: 30 mg, 60 mg &bull; ER Tablets: 120 mg (12h), 240
                  mg (24h)
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age / Formulation</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Dosing Interval</th>
                      <th className="p-3.5">Max 24-Hour Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Children Under 4 – 6 Years
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        CONTRAINDICATED &bull; Do not use OTC oral decongestants
                        in infants and young children
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (6 – 11 Years) — IR
                      </td>
                      <td className="p-3.5 font-mono text-emerald-300 font-bold">
                        30 mg PO
                      </td>
                      <td className="p-3.5">
                        Every 4 – 6 hours PRN (avoid ER tablets)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 120 mg / 24h
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12y) — IR
                      </td>
                      <td className="p-3.5 font-mono text-emerald-300 font-bold">
                        60 mg PO
                      </td>
                      <td className="p-3.5">
                        Every 4 – 6 hours PRN (last dose before 4 PM)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 240 mg / 24h
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-cyan-200">
                        Adults (&ge; 12y) — 12-Hour Extended Release
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        120 mg ER Tablet
                      </td>
                      <td className="p-3.5">
                        Every 12 hours (swallow whole; do not crush)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 240 mg / 24h
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-cyan-200">
                        Adults (&ge; 12y) — 24-Hour Extended Release
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        240 mg ER Tablet
                      </td>
                      <td className="p-3.5">
                        Once daily in the morning (swallow whole)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 240 mg / 24h
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
                  <strong className="text-amber-300 block">
                    1. Central Nervous System Stimulation
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Insomnia and difficulty falling asleep</li>
                    <li>Nervousness, restlessness, anxiety, and jitteriness</li>
                    <li>Fine hand tremors, dizziness, and headache</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-rose-300 block">
                    2. Cardiovascular &amp; Autonomic Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Sinus tachycardia (elevated heart rate) and palpitations
                    </li>
                    <li>
                      Mild-to-moderate elevation in systolic blood pressure
                    </li>
                    <li>Facial pallor, sweating, and dry mouth</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    3. GI &amp; Genitourinary Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Nausea, vomiting, or decreased appetite (anorexia)</li>
                    <li>
                      Acute urinary hesitancy or retention (especially in older
                      men with BPH)
                    </li>
                    <li>
                      Suppression of breast milk supply in nursing mothers
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
                    Overdosing on Pseudoephedrine (e.g., crushing
                    extended-release tablets or ingesting excessive doses)
                    triggers a severe <strong>Sympathomimetic Toxidrome</strong>{" "}
                    characterized by extreme catecholamine surge, hypertensive
                    crisis, cardiac arrhythmias, and central nervous system
                    excitation.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" /> 1. Hypertensive Crisis
                  &amp; Arrhythmias
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Severe hypertension, marked sinus or supraventricular
                  tachycardia, ventricular premature beats, myocardial
                  ischemia/vasospasm, and risk of intracerebral hemorrhage.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  2. Sympathomimetic Delirium &amp; Seizures
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Extreme agitation, paranoia, visual/tactile hallucinations,
                  dilated reactive pupils (mydriasis), hyperthermia, muscle
                  rigidity, and generalized tonic-clonic convulsions (especially
                  in children).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>1. Agitation &amp; Seizures:</strong> First-line{" "}
                  <strong>IV Benzodiazepines</strong> (Lorazepam/Diazepam) calm
                  CNS excitation and lower blood pressure.{" "}
                  <strong>2. Severe Hypertension:</strong> Use{" "}
                  <strong>IV Phentolamine</strong> (alpha-blocker) or
                  Nitroprusside—avoid pure beta-blockers alone due to unopposed
                  alpha-vasoconstriction. <strong>3. Renal Clearance:</strong>{" "}
                  Note that Pseudoephedrine is <strong>not</strong> removed by
                  dialysis.
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
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Sympathomimetic Amines (Oral &amp; Topical Adrenergic
                Decongestants)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sympathomimetic decongestants mimic sympathetic nervous system
                stimulation to constrict engorged nasal mucosal blood vessels.{" "}
                <strong>Pseudoephedrine</strong> is a mixed-acting
                phenylethylamine (releasing norepinephrine + directly
                stimulating alpha-1/beta receptors) that resists gut MAO
                destruction, whereas <strong>Phenylephrine</strong> is a direct
                alpha-1 agonist destroyed in the gut.
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Decongestant Agent</th>
                    <th className="p-3.5">
                      Mechanism &amp; Oral Bioavailability
                    </th>
                    <th className="p-3.5">Rebound Swelling Risk</th>
                    <th className="p-3.5">Clinical &amp; Regulatory Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-emerald-950/15">
                    <td className="p-3.5 font-bold text-emerald-300">
                      Pseudoephedrine (Sudafed)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400">
                      Indirect NE Release + Alpha-1 (~95% Oral)
                    </td>
                    <td className="p-3.5 text-emerald-300">
                      None (Oral route)
                    </td>
                    <td className="p-3.5">
                      Clinically effective; behind-counter / precursor-regulated
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-300">
                      Phenylephrine (Oral)
                    </td>
                    <td className="p-3.5 font-mono text-rose-300">
                      Direct Alpha-1 (&lt; 38% — Gut MAO-A Destroyed)
                    </td>
                    <td className="p-3.5 text-emerald-300">
                      None (Oral route)
                    </td>
                    <td className="p-3.5 text-rose-300">
                      Shown ineffective vs. placebo in oral tablets
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Oxymetazoline (Otrivin / Afrin)
                    </td>
                    <td className="p-3.5 font-mono">
                      Topical Imidazoline Alpha-1/2 Agonist
                    </td>
                    <td className="p-3.5 text-rose-400 font-bold">
                      High if used &gt; 3–5 days
                    </td>
                    <td className="p-3.5">
                      Fastest 12-hour topical nasal spray (strictly &le; 3–5
                      days)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-indigo-300">
                      Xylometazoline (Otrivin)
                    </td>
                    <td className="p-3.5 font-mono">
                      Topical Imidazoline Alpha-1/2 Agonist
                    </td>
                    <td className="p-3.5 text-rose-400 font-bold">
                      High if used &gt; 3–5 days
                    </td>
                    <td className="p-3.5">
                      Effective 8–10 hour topical nasal spray (strictly &le; 3–5
                      days)
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
