"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Wind,
  ThermometerSnowflake,
  Brain,
  Activity,
  Layers,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  Info,
  CheckCircle2,
  Zap,
  Sparkles,
} from "lucide-react";

export default function VicksInhalerMonographPage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "mechanism" | "indications" | "safety"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
            href="/conditions/cold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-3">
              <Wind className="w-3.5 h-3.5" /> Nasal Inhalant &bull;
              Neurosensory Thermoreception
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Vicks Inhaler (Nasal Stick)
            </h1>

            {/* Subtitle / Classification */}
            <div className="flex flex-wrap items-center gap-2 pt-1 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                <strong className="text-cyan-400">Class:</strong> Volatile
                Aromatic Nasal Inhalant
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                <strong className="text-teal-400">Active Terpenes:</strong>{" "}
                Menthol 41.54% &bull; Camphor 41.54%
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on the high-potency volatile terpene delivery
              system: electrophysiology of trigeminal TRPM8 cooling, TRPV1
              desensitization, Siberian Pine needle oil aromatics, the
              subjective illusion of patent nasal airflow, and risks of habitual
              receptor tachyphylaxis.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Onset of Relief
              </span>
              <span className="text-xl font-bold text-cyan-400 font-mono">
                &lt; 30 Seconds
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Age Safety Threshold
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                &ge; 6 Years Only
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
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
              <Layers className="w-4 h-4 shrink-0" />
              <span>Formulation &amp; Device Architecture</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("mechanism")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "mechanism"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Brain className="w-4 h-4 shrink-0" />
              <span>Menthol &amp; Camphor Electrophysiology</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("indications")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "indications"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Clinical Uses &amp; Key Benefits</span>
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
              <span>Side Effects &amp; Overuse Risks</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: FORMULATION & DEVICE ARCHITECTURE */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Specifications */}
              <div className="p-6 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                      Cylindrical Wick Delivery System
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      0.5 mL Liquid Equivalent
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2">
                    Vicks Inhaler Stick
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    The Vicks Inhaler is an enclosed pocket inhaler stick
                    containing an internal absorbent cellulose wick saturated
                    with a volatile non-aqueous solution of crystalline
                    monoterpenes. Unlike ointments or sprays, it delivers pure
                    aerosolized vapors directly into the upper nasal airway
                    during tidal inhalation without depositing liquid petrolatum
                    on the respiratory mucosa.
                  </p>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">
                        Menthol (Levomenthol):
                      </span>
                      <span className="text-cyan-300 font-bold">
                        41.54% w/w
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">
                        Camphor (Synthetic/Natural):
                      </span>
                      <span className="text-amber-300 font-bold">
                        41.54% w/w
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">
                        Bornyl Acetate (Pine Oil):
                      </span>
                      <span className="text-emerald-300 font-bold">
                        4.61% w/w
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">
                        Methyl Salicylate &amp; Excipients:
                      </span>
                      <span className="text-slate-300">q.s. to 100%</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 mt-4 text-[11px] text-teal-300/90 font-mono">
                  Physical Feature: Vent holes at base and tip allow inspired
                  air to sweep across the vapor-saturated wick.
                </div>
              </div>

              {/* Inhaler vs Topical Sprays vs Balms */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      Comparative Pharmacology
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Nasal Therapeutics
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2">
                    How It Compares
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Patients often conflate the Vicks Inhaler with topical
                    vasoconstrictor sprays (Oxymetazoline) or chest balms
                    (VapoRub). Their physiological behaviors are entirely
                    distinct:
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <strong className="text-teal-300 block mb-0.5 font-mono text-[11px]">
                        Vs. Decongestant Sprays (Oxymetazoline /
                        Xylometazoline):
                      </strong>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Topical sprays are chemical vasoconstrictors acting on
                        alpha-1 receptors to physically shrink blood vessels.
                        They carry a strict 3–5 day limit to avoid rhinitis
                        medicamentosa. The Vicks Inhaler does not cause rebound
                        vascular engorgement.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <strong className="text-amber-300 block mb-0.5 font-mono text-[11px]">
                        Vs. Vicks VapoRub Ointment:
                      </strong>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        VapoRub contains 5.26% camphor in a petrolatum base
                        designed for skin application. The inhaler features a
                        much higher relative terpene concentration (41.5%
                        menthol + 41.5% camphor) but delivers only trace
                        volatile micro-doses per sniff, eliminating lipoid
                        pneumonia risks associated with petrolatum ointment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 mt-4 text-[11px] text-cyan-300/90 font-mono">
                  Primary Distinction: Modulates sensory airflow perception
                  rather than venous vascular tone.
                </div>
              </div>
            </div>

            {/* Quick Summary Spec Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-slate-500 uppercase font-mono text-[10px] block mb-1">
                  Recommended Age
                </span>
                <strong className="text-white text-sm block mb-1">
                  Adults &amp; Children &ge; 6y
                </strong>
                <p className="text-slate-400 text-[11px]">
                  Contraindicated in children under 6 years due to risk of
                  laryngospasm.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-slate-500 uppercase font-mono text-[10px] block mb-1">
                  Standard Dose
                </span>
                <strong className="text-cyan-300 text-sm block mb-1">
                  1 – 2 Inhalations / Nostril
                </strong>
                <p className="text-slate-400 text-[11px]">
                  Inhale deeply while occluding the opposite nostril; use as
                  needed.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-slate-500 uppercase font-mono text-[10px] block mb-1">
                  Max Daily Frequency
                </span>
                <strong className="text-amber-300 text-sm block mb-1">
                  Every 2 Hours PRN
                </strong>
                <p className="text-slate-400 text-[11px]">
                  Limit excessive hourly use to prevent drying of the nasal
                  mucosa.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-slate-500 uppercase font-mono text-[10px] block mb-1">
                  Device Hygiene
                </span>
                <strong className="text-emerald-300 text-sm block mb-1">
                  Single-Patient Use
                </strong>
                <p className="text-slate-400 text-[11px]">
                  Never share between individuals to prevent viral
                  cross-contamination.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: MENTHOL & CAMPHOR ELECTROPHYSIOLOGY */}
        {/* ========================================================================= */}
        {activeTab === "mechanism" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Mechanism Header Banner */}
            <div className="p-6 rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    How Does the Vicks Inhaler Work? (The Sensory Patency
                    Illusion)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Objective rhinomanometry proves that inhaling menthol and
                    camphor vapors does <strong>not</strong> shrink swollen
                    mucosal tissue or reduce cross-sectional airway resistance.
                    Instead, it alters
                    <strong> trigeminal neurosensory perception</strong>,
                    converting subjective feelings of stuffiness into a
                    sensation of crisp, unrestricted, cold nasal airflow.
                  </p>
                </div>
              </div>
            </div>

            {/* Deep-Dive Active Terpene Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              {/* Menthol Mechanism */}
              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                      TRPM8 Channel Agonist
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      41.54% Concentration
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    How Menthol Works
                  </h3>
                  <div className="space-y-2.5 text-slate-300 leading-relaxed">
                    <p>
                      <strong>1. Targeting the Nasal Cold Sensor:</strong>{" "}
                      Menthol molecules bind directly to
                      <strong>
                        {" "}
                        TRPM8 (Transient Receptor Potential Melastatin 8)
                      </strong>{" "}
                      cation channels located on the peripheral nerve endings of
                      the{" "}
                      <strong>
                        ethmoidal branch of the Trigeminal Nerve (Cranial Nerve
                        V1)
                      </strong>{" "}
                      in the anterior nasal vestibule.
                    </p>
                    <p>
                      <strong>2. Lowering Activation Threshold:</strong> TRPM8
                      is a thermal sensor that normally fires only when ambient
                      air cools the mucosa below 25°C–28°C. Menthol shifts the
                      channel&apos;s activation curve, opening it at
                      <strong> normal body temperature (37°C)</strong>.
                    </p>
                    <p className="text-slate-400">
                      <strong>3. The Airflow Illusion:</strong> The brain
                      receives an intense burst of cold-receptor impulses, which
                      the central sensory cortex interprets as a high-velocity,
                      icy-cold stream of air rushing through a patent, unblocked
                      nostril.
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-cyan-300 font-mono">
                  Clinical Pearl: Relieves the &quot;air hunger&quot; and
                  claustrophobia of nasal congestion within seconds.
                </div>
              </div>

              {/* Camphor Mechanism */}
              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                      TRPV1 / TRPV3 Sensory Modulator
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      41.54% Concentration
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    How Camphor Works
                  </h3>
                  <div className="space-y-2.5 text-slate-300 leading-relaxed">
                    <p>
                      <strong>1. TRPV1 Warmth Activation:</strong> Camphor
                      stimulates{" "}
                      <strong>TRPV1 (capsaicin/heat receptor)</strong> and
                      <strong> TRPV3</strong> channels on mucosal sensory
                      neurons, producing an initial mild warming tingling
                      sensation that balances menthol&apos;s cold bite.
                    </p>
                    <p>
                      <strong>2. TRPA1 Desensitization:</strong> Prolonged
                      camphor binding rapidly desensitizes irritant-sensing
                      <strong> TRPA1 receptors</strong> on the respiratory
                      epithelium, blunting local sensory hyper-reactivity.
                    </p>
                    <p className="text-slate-400">
                      <strong>3. Counterirritant Nociceptive Gating:</strong>{" "}
                      This dual warm-cool sensory volley overrides dull,
                      throbbing ache signals from frontal sinus pressure through
                      the Gate Control mechanism at the spinal trigeminal
                      nucleus.
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-amber-300 font-mono">
                  Clinical Pearl: Desensitizes nasal tickling and aborts nascent
                  paroxysmal sneezing reflexes.
                </div>
              </div>

              {/* Siberian Pine Needle Oil & Methyl Salicylate */}
              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                      Bornyl Acetate &bull; 4.61%
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Botanical Fraction
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Role of Pine Needle Oil
                  </h3>
                  <div className="space-y-2.5 text-slate-300 leading-relaxed">
                    <p>
                      <strong>1. Secretomotor Stimulation:</strong> Derived from{" "}
                      <em>Abies sibirica</em>, the volatile bornyl acetate
                      stimulates seromucinous glands, promoting thinning of
                      stagnant mucus plugs along the middle turbinate.
                    </p>
                    <p>
                      <strong>2. Olfactory Aromatherapy:</strong> Inhaled pine
                      monoterpenes stimulate olfactory bulb mitral cells,
                      reducing autonomic sympathetic stress tone and easing the
                      anxiety of breathlessness.
                    </p>
                    <p className="text-slate-400">
                      <strong>3. Trace Salicylates:</strong> Minor methyl
                      salicylate fractions offer local membrane stabilization
                      against mucosal friction from repeated nose blowing.
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-emerald-300 font-mono">
                  Clinical Pearl: Imparts the crisp balsamic aroma and prevents
                  excessive mucosal desiccation.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: CLINICAL USES & KEY BENEFITS */}
        {/* ========================================================================= */}
        {activeTab === "indications" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Primary Triggers Grid */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-400" />
                Common Causes &amp; Primary Indications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 text-sm block">
                    1. Acute Viral Nasal Blockage
                  </strong>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside leading-relaxed">
                    <li>
                      <strong>Common Cold (Acute Coryza):</strong>{" "}
                      Rhinovirus-induced stuffiness and mucosal swelling.
                    </li>
                    <li>
                      <strong>Sinus Pressure:</strong> Frontal sinus fullness
                      where the nose feels congested despite minimal mucus.
                    </li>
                    <li>
                      <strong>Post-Viral Congestion:</strong> Lingering
                      perception of nasal blockage following resolution of
                      active rhinorrhea.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 text-sm block">
                    2. Environmental &amp; Vasomotor Triggers
                  </strong>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside leading-relaxed">
                    <li>
                      <strong>Allergic Rhinitis:</strong> Daytime hay fever
                      exacerbations triggered by pollen, dust, or animal dander.
                    </li>
                    <li>
                      <strong>Dry Air Congestion:</strong> Air-conditioned
                      offices or high-altitude aircraft cabin air drying out
                      turbinates.
                    </li>
                    <li>
                      <strong>Sudden Temperature Shifts:</strong> Moving from
                      warm outdoor heat into cold indoor environments.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-teal-300 text-sm block">
                    3. Travel &amp; Motion Fatigue
                  </strong>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside leading-relaxed">
                    <li>
                      <strong>Motion Sickness / Nausea:</strong> Sharp menthol
                      vapor stimulation helps distract from vestibular nausea.
                    </li>
                    <li>
                      <strong>Mental Fatigue / Drowsiness:</strong> Deep
                      trigeminal inhalation acts as an alerting, invigorating
                      stimulus during long drives or study sessions.
                    </li>
                    <li>
                      <strong>Mask Airway Fatigue:</strong> Relieves subjective
                      stuffiness experienced during prolonged surgical or N95
                      mask wear.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <strong className="text-teal-300 block mb-1">
                  Zero Rebound Swelling
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Does not act on vascular alpha-adrenergic receptors;
                  completely avoids the rebound nasal swelling (rhinitis
                  medicamentosa) caused by chemical sprays like oxymetazoline.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <strong className="text-cyan-300 block mb-1">
                  Instantaneous Action
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  While oral antihistamines or decongestants require 30 to 60
                  minutes for systemic absorption, direct trigeminal nerve
                  stimulation takes effect within 5 to 15 seconds.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <strong className="text-amber-300 block mb-1">
                  No Systemic Side Effects
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Unlike pseudoephedrine tablets, the inhaler does not enter
                  systemic circulation in significant amounts, causing no
                  elevation in heart rate, palpitations, or blood pressure
                  spikes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <strong className="text-purple-300 block mb-1">
                  Portable &amp; Non-Drowsy
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Compact pocket design for on-demand use. Completely free of
                  central H1 sedative properties, making it safe for daytime
                  work, drivers, and students.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS, PRECAUTIONS & OVERUSE */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Boxed Warning Header */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Safety Precautions, Side Effects &amp; Overuse Risks
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    While non-addictive in the opioid sense, the Vicks Inhaler
                    is frequently abused through compulsive, habitual
                    &quot;sniffing.&quot; Overuse alters nasal physiology,
                    induces mucosal dryness, and can trigger severe sensory
                    receptor fatigue.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Clinical Danger Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  1. Strict Pediatric Ban (&lt; 6 Years)
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>Risk of Acute Laryngospasm:</strong> In infants and
                  young children, concentrated camphor and menthol vapors can
                  trigger an immediate, life-threatening reflex glottic closure
                  and apnea.
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px]">
                  Keep strictly out of reach of toddlers. Accidental chewing or
                  swallowing of the internal saturated wick causes acute
                  systemic camphor poisoning and seizures.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  2. Sensory Tachyphylaxis (Habituation)
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>Receptor Desensitization:</strong> Inhaling vapors
                  every 15–20 minutes exhausts mucosal TRPM8 receptors, causing
                  them to internalize and stop firing.
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px]">
                  The user no longer feels the cooling sensation, assumes their
                  nose is becoming &quot;more blocked,&quot; and sniffs even
                  more compulsively—creating a psychological dependency loop.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  3. Mucosal Desiccation &amp; Epistaxis
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>Chronic Airway Drying:</strong> Concentrated volatile
                  terpenes stripped across the nasal mucosa evaporate the
                  protective watery sol-layer of the mucus blanket.
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px]">
                  Leads to dry crusting, painful mucosal fissures, epithelial
                  atrophy, and recurrent nosebleeds (epistaxis) from
                  Kiesselbach&apos;s plexus on the anterior septum.
                </div>
              </div>
            </div>

            {/* Overuse Sequelae Matrix */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                Common Side Effects &amp; Overuse Manifestations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Burning Stinging Sensation:
                  </strong>
                  Occurs if inhaled too vigorously or if the nasal mucosa is
                  already excoriated and raw from frequent blowing during acute
                  rhinitis.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    Contact Dermatitis around Nares:
                  </strong>
                  Pressing the plastic tip directly against the skin of the
                  nostrils can transfer oily terpene residue, causing red,
                  flaking, irritated contact dermatitis.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Reflex Lacrimation &amp; Eye Stinging:
                  </strong>
                  Vapors escaping up through the nasolacrimal duct into the eyes
                  cause sudden reflex tearing, burning, and conjunctival
                  redness.
                </div>
              </div>
            </div>

            {/* Practical Rules of Administration */}
            <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-950/20 backdrop-blur-md flex items-start gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">
                  Golden Clinical Rules for Vicks Inhaler Use:
                </strong>
                <ol className="list-decimal list-inside space-y-1 text-slate-400">
                  <li>
                    Hold the inhaler upright near the nostril without forcing
                    the tip deeply into the nasal cavity.
                  </li>
                  <li>
                    Occlude the opposite nostril with your finger and inhale
                    deeply through the nose; exhale through the mouth.
                  </li>
                  <li>
                    Wipe the nozzle clean with a tissue and always replace the
                    screw cap tightly after use to prevent terpene evaporation.
                  </li>
                  <li>
                    Do not use continuously for more than 7 consecutive days; if
                    stuffiness persists, evaluate for chronic sinusitis or nasal
                    polyposis.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
