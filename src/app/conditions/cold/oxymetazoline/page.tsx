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

export default function OxymetazolinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "why-nasal-only" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

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
              Imidazoline Topical Decongestant
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Oxymetazoline Hydrochloride
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-cyan-300 font-mono">
                  6-tert-butyl-3-(4,5-dihydro-1H-imidazol-2-ylmethyl)-2,4-dimethylphenol
                  hydrochloride
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-cyan-400 font-mono">
                    Oxymetazoline HCl
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / USAN / BAN) &bull; Direct Alpha-1 &amp; Alpha-2
                    Agonist
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Otrivin Oxy, Nasivion (0.05% / 0.025%), Afrin, Vicks Sinex,
                    Upneeq (Eye Drops)
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on potent direct alpha-1 and alpha-2 adrenergic
              mucosal vasoconstriction, rapid 5-minute onset with 12-hour airway
              patency, why modern physicians strictly restrict Oxymetazoline to
              localized topical nasal (and ophthalmic/dermal) routes rather than
              oral pills, <em>rhinitis medicamentosa</em> rebound congestion
              beyond 3–5 days, and pediatric imidazoline overdose toxicity.
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
              <span className="text-xl font-bold text-cyan-300 font-mono">
                5 min &bull; 12 Hours
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
              onClick={() => setActiveTab("why-nasal-only")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "why-nasal-only"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Why Only Used Topically / Nasally?</span>
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
                  <div className="flex items-center gap-2 text-cyan-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Oxymetazoline?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Oxymetazoline Hydrochloride (marketed globally as{" "}
                    <strong>Otrivin Oxy</strong>, <strong>Nasivion</strong>, or{" "}
                    <strong>Afrin</strong>) is a potent, long-acting{" "}
                    <strong>
                      imidazoline-derivative topical sympathomimetic
                      decongestant
                    </strong>
                    . Synthesized from xylometazoline in 1961, it is the fastest
                    and longest-lasting over-the-counter nasal spray available
                    for severe nasal blockage.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Applied directly onto the nasal lining as a{" "}
                    <strong>0.05% adult spray</strong> (or 0.025% / 0.01%
                    pediatric drops), it shrinks swollen nasal turbinates within{" "}
                    <strong>5 minutes</strong> and keeps nasal passages open for
                    up to <strong>12 hours</strong>—without causing the daytime
                    drowsiness of antihistamines or the insomnia of oral
                    Pseudoephedrine pills.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapid local mucosal onset within{" "}
                  <strong>5 to 10 minutes</strong>; peak nasal airflow reached
                  at 60 minutes; sustained duration of{" "}
                  <strong>10 to 12 hours</strong>. Minimal systemic absorption
                  when sprayed properly onto intact nasal mucosa (however,
                  accidental swallowing or excessive spraying causes rapid
                  GI/mucosal absorption with a terminal half-life of 5–8 hours).
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
                      Unlike Phenylephrine (which only stimulates alpha-1
                      receptors), Oxymetazoline directly activates both{" "}
                      <strong>
                        alpha-1 and postsynaptic alpha-2 adrenergic receptors
                      </strong>{" "}
                      on vascular smooth muscle cells lining the arterioles and
                      venous capacitance sinusoids of the nasal mucosa.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Profound Mucosal Arteriolar Vasoconstriction &amp;
                        Turbinate Shrinkage:
                      </strong>
                      Smooth muscle contraction narrows dilated nasal blood
                      vessels, reducing mucosal blood volume by up to 50%,
                      halting inflammatory plasma fluid leakage, shrinking
                      swollen inferior turbinates, and opening blocked sinus
                      drainage ostia and Eustachian tubes.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Specialized Ocular &amp; Cutaneous Vasoconstriction:
                      </strong>
                      In low-dose eye drops (0.1%, <em>Upneeq</em>), stimulates
                      alpha-adrenergic receptors on{" "}
                      <strong>M&uuml;ller&apos;s muscle</strong> to lift droopy
                      upper eyelids (blepharoptosis). In 1% topical cream (
                      <em>Rhofade</em>), constricts dilated superficial facial
                      capillaries to clear persistent rosacea erythema.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-amber-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Ultra-rapid (5 min), 12-hour{" "}
                  <strong>localized mucosal vasoconstriction</strong> that
                  physically opens severely blocked nasal airways.
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
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    The Golden 3-to-5-Day Rule:
                  </strong>
                  Never use Oxymetazoline nasal sprays/drops for more than{" "}
                  <strong>3 to 5 consecutive days</strong>. Continuous
                  alpha-receptor stimulation causes receptor downregulation and
                  severe{" "}
                  <strong>
                    rebound nasal congestion (rhinitis medicamentosa)
                  </strong>
                  .
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Keep Head Upright When Spraying:
                  </strong>
                  Spray into each nostril while keeping your head upright (do
                  not tilt backward) and sniff gently—tilting back drains
                  medication down the throat where swallowing causes systemic
                  side effects.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    Never Share Nasal Bottles:
                  </strong>
                  Each bottle must be used by <strong>one person only</strong>;
                  sharing nasal tips spreads rhinovirus and bacteria directly
                  between nostrils.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Bridge Therapy With Nasal Steroids:
                  </strong>
                  ENT specialists often pair Oxymetazoline for the{" "}
                  <strong>first 3 days only</strong> alongside
                  Fluticasone/Mometasone nasal spray—Oxymetazoline opens the
                  blocked nose immediately so the steroid spray can reach deep
                  sinus tissues.
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
                    <Wind className="w-3.5 h-3.5" /> 1. Acute Nasal &amp; Sinus
                    Blockage
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Severe nasal stuffiness during acute viral common colds
                    </li>
                    <li>
                      Acute rhinosinusitis (opens blocked maxillary &amp;
                      frontal sinus ostia)
                    </li>
                    <li>
                      Severe allergic rhinitis flare-ups (short-term 3-day
                      bridge)
                    </li>
                    <li>
                      Eustachian tube blockage before airplane descent / diving
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-rose-300 block mb-1 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" /> 2. ENT &amp; Emergency
                    Epistaxis (Nosebleeds)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      First-line topical hemostatic spray to stop active
                      anterior nosebleeds (epistaxis)
                    </li>
                    <li>
                      Pre-procedural nasal decongestion prior to nasal endoscopy
                      or nasotracheal intubation
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 3. Specialized
                    Ophthalmic &amp; Dermal Forms
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      0.025% ophthalmic drops for temporary relief of minor eye
                      redness
                    </li>
                    <li>
                      0.1% ophthalmic drops (Upneeq) for acquired upper eyelid
                      drooping (ptosis)
                    </li>
                    <li>
                      1% topical cream (Rhofade) for persistent facial redness
                      in rosacea
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY DOCTORS ONLY USE IT TOPICALLY / NASALLY */}
        {/* ========================================================================= */}
        {activeTab === "why-nasal-only" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Pharmacological Design: Why Oxymetazoline Is Used Only as a
                    Nasal Spray/Drop (Never Oral Tablets)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Unlike Pseudoephedrine or Phenylephrine,{" "}
                    <strong>
                      Oxymetazoline does not exist as an oral pill or syrup
                    </strong>
                    . Doctors strictly use it locally via the intranasal (or
                    ophthalmic/topical) route because its imidazoline chemistry
                    makes it far too potent for systemic oral administration.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Clinical Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
                  Reason 1 &bull; Severe Systemic Cardiovascular Toxicity If
                  Swallowed
                </span>
                <h3 className="text-base font-bold text-white">
                  Clonidine-Like Central Alpha-2 &amp; Peripheral Alpha-1
                  Toxicity
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Oxymetazoline is an <strong>imidazoline</strong>—closely
                  related to the blood-pressure drug <strong>Clonidine</strong>.
                  If taken systemically (orally), it triggers severe peripheral
                  alpha-1 vasoconstriction (hypertensive crisis and coronary
                  vasospasm) followed by central alpha-2 sympatholytic
                  depression (profound bradycardia, hypotension, hypothermia,
                  and coma).
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                  Reason 2 &bull; Microgram Precision Directly at Target Tissue
                </span>
                <h3 className="text-base font-bold text-white">
                  Delivers Instant Relief at Microgram Doses (~25–50 mcg)
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Spraying 0.05% Oxymetazoline directly onto the nasal
                  turbinates delivers just <strong>25 to 50 micrograms</strong>{" "}
                  right where needed—opening the airway in{" "}
                  <strong>5 minutes</strong> (vs. 30–60 minutes for oral pills)
                  while keeping blood levels near zero.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  Reason 3 &bull; Avoids Systemic Insomnia, Jitters &amp; BP
                  Spikes
                </span>
                <h3 className="text-base font-bold text-white">
                  Safer for Daytime Function &amp; Nighttime Sleep (When Used
                  &le; 3 Days)
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Because properly sprayed Oxymetazoline stays confined to the
                  nasal mucosa, patients avoid the hand tremors, racing heart,
                  urinary retention, and insomnia caused by oral decongestants
                  like Pseudoephedrine.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  Reason 4 &bull; 12-Hour Sustained Mucosal Binding
                </span>
                <h3 className="text-base font-bold text-white">
                  Longer Local Duration Than Phenylephrine or Ephedrine Drops
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Oxymetazoline binds tightly to mucosal alpha receptors for up
                  to <strong>12 hours</strong>, requiring only twice-daily
                  spraying (morning and bedtime) instead of every 3–4 hours.
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
                  Use Oxymetazoline Nasal Spray/Drops?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Children (&ge; 6 Years):</strong>{" "}
                    Standard 0.05% nasal spray/drops (2–3 sprays or drops per
                    nostril every 10–12 hours for max 3–5 days).
                  </li>
                  <li>
                    <strong>Young Children (2 to 5 Years):</strong> Pediatric
                    0.025% nasal drops (1–2 drops per nostril every 12 hours for
                    max 3 days) under strict parental/pediatric supervision.
                  </li>
                  <li>
                    <strong>
                      Infants (1 to 2 Years — Only Where 0.01% Drops Approved):
                    </strong>{" "}
                    Ultra-dilute 0.01% pediatric saline-oxymetazoline drops ONLY
                    if explicitly prescribed by a pediatrician (banned in many
                    countries under age 2–6).
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-400" /> Who CANNOT
                  Use It / Requires Extreme Caution?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>
                      Infants &amp; Children Under 2–6 Years (With 0.05% Adult
                      Strength):
                    </strong>{" "}
                    High risk of accidental swallowing or mucosal
                    over-absorption causing coma, bradycardia, and respiratory
                    arrest.
                  </li>
                  <li>
                    <strong>
                      Rhinitis Sicca (Dry Crusting Nasal Mucosa) &amp;
                      Trans-Sphenoidal Hypophysectomy:
                    </strong>{" "}
                    Strictly contraindicated in dry atrophic rhinitis or after
                    pituitary/cranial surgery.
                  </li>
                  <li>
                    <strong>
                      Patients Taking MAO Inhibitors (MAOIs) or Tricyclic
                      Antidepressants:
                    </strong>{" "}
                    Risk of hypertensive crisis if systemic absorption occurs.
                  </li>
                  <li>
                    <strong>
                      Severe Uncontrolled Hypertension, Coronary Artery Disease,
                      Hyperthyroidism &amp; Narrow-Angle Glaucoma:
                    </strong>{" "}
                    Use only under physician approval for &le; 3 days.
                  </li>
                  <li>
                    <strong>Pregnancy &amp; Breastfeeding:</strong> Avoid in 1st
                    trimester; use minimal short-term doses only if clearly
                    needed (saline sprays are preferred first-line).
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
                    Age &amp; Concentration Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-rose-300 border border-rose-900/50">
                  Strict Maximum Ceiling: 2 Doses / 24h &bull; Max 3 – 5 Days
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age Group &amp; Formulation</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Dosing Interval</th>
                      <th className="p-3.5">Maximum Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Infants Under 1 – 2 Years
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        AVOID OTC USE &bull; Use isotonic saline drops + bulb
                        suction instead
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (2 – 5 Years) — 0.025% Pediatric Drops
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        1 – 2 drops per nostril
                      </td>
                      <td className="p-3.5">
                        Every 10 – 12 hours (Max 2 doses / 24h)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Strict Max 3 Days
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Children (&ge; 6 Years) — 0.05% Spray
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        2 – 3 sprays or drops per nostril
                      </td>
                      <td className="p-3.5">
                        Every 10 – 12 hours (Max 2 doses / 24h)
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
                <AlertCircle className="w-5 h-5 text-cyan-400" />
                Common Side Effects (Therapeutic Doses)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    1. Local Nasal Mucosal Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Transient burning, stinging, or smarting inside the nose
                    </li>
                    <li>Reflex sneezing immediately after spraying</li>
                    <li>Dryness of nasal and pharyngeal mucosa</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-900/50 space-y-2">
                  <strong className="text-rose-300 block">
                    2. Overuse Rebound Effect (&gt; 3–5 Days)
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      <strong>Rhinitis Medicamentosa:</strong> Severe rebound
                      nasal swelling and total nasal blockage as the spray wears
                      off
                    </li>
                    <li>
                      Tachyphylaxis (each spray works for a shorter and shorter
                      time)
                    </li>
                    <li>Chronic nasal mucosal hypertrophy and crusting</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-amber-900/50 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Occasional Systemic Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Headache, dizziness, or mild insomnia</li>
                    <li>
                      Palpitations, mild tachycardia, or transient blood
                      pressure rise
                    </li>
                    <li>
                      Nausea or nervousness (if excess spray drips down throat)
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
                    Overusing Oxymetazoline causes two distinct clinical
                    problems: (1) chronic local overuse leads to{" "}
                    <strong>
                      Rhinitis Medicamentosa (Nasal Spray Addiction)
                    </strong>
                    , while (2) acute excessive spraying or accidental oral
                    ingestion (especially in children) triggers life-threatening{" "}
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
                  Using the spray daily for weeks/months traps the patient in a
                  vicious cycle of severe rebound congestion.{" "}
                  <strong>Treatment:</strong> Stop the spray immediately, use
                  isotonic saline rinses, and apply an intranasal steroid spray
                  (Fluticasone/Mometasone) for 1–2 weeks to restore normal
                  vascular tone.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" /> 2. Acute Pediatric
                  Imidazoline Overdose
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Swallowing even 1–2 mL of 0.05% solution in a toddler causes
                  biphasic toxicity: brief initial hypertension/pallor, followed
                  by{" "}
                  <strong>
                    profound CNS depression (lethargy/coma), pinpoint pupils
                    (miosis), severe bradycardia, hypotension, hypothermia, and
                    apnea
                  </strong>
                  .
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Acute Overdose Emergency Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>1. Airway &amp; Monitoring:</strong> Immediate ICU
                  cardiorespiratory monitoring (symptoms appear within 30–60
                  minutes). <strong>2. Bradycardia &amp; Hypotension:</strong>{" "}
                  Treat symptomatic bradycardia with{" "}
                  <strong>IV Atropine</strong> and hypotension with IV isotonic
                  fluids/vasopressors.{" "}
                  <strong>3. Severe CNS Depression:</strong> High-dose IV
                  Naloxone may occasionally reverse imidazoline-induced
                  coma/apnea when supportive care is insufficient.
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
                Topical decongestants are divided into short-acting{" "}
                <strong>phenylethylamines</strong> (Phenylephrine) and
                long-acting <strong>imidazoline derivatives</strong>{" "}
                (Oxymetazoline, Xylometazoline, Naphazoline, Tetrahydrozoline).
                Imidazolines bind with high affinity to both{" "}
                <strong>alpha-1 and alpha-2 adrenergic receptors</strong>,
                giving them superior duration (8–12 hours) and potent mucosal
                vasoconstriction.
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
                  <tr className="bg-cyan-950/15">
                    <td className="p-3.5 font-bold text-cyan-300">
                      Oxymetazoline (Otrivin Oxy / Afrin)
                    </td>
                    <td className="p-3.5 font-mono">
                      Nasal Spray (0.05%), Eye Drops, Cream
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      10 – 12 Hours (Longest)
                    </td>
                    <td className="p-3.5">
                      Fastest 5-min onset; also approved for ptosis &amp;
                      rosacea
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
                      Parent compound of Oxymetazoline; widely used in
                      Europe/Asia
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Naphazoline (Privine / Clear Eyes)
                    </td>
                    <td className="p-3.5 font-mono">
                      Ophthalmic Drops (0.012%–0.1%) / Nasal
                    </td>
                    <td className="p-3.5 font-mono">4 – 6 Hours</td>
                    <td className="p-3.5">
                      Primarily used as an ocular decongestant for red eyes
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
                      Ocular vasoconstrictor; high toxicity if accidentally
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
