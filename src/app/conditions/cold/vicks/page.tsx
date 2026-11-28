"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Wind,
  Droplets,
  AlertTriangle,
  AlertCircle,
  ShieldAlert,
  ShieldCheck,
  Activity,
  Layers,
  Scale,
  Sparkles,
  Info,
  CheckCircle2,
  Flame,
  Brain,
  Baby,
  ThermometerSnowflake,
} from "lucide-react";

export default function VicksMonographPage() {
  const [activeTab, setActiveTab] = useState<
    "formulations" | "mechanism" | "indications" | "toxicity"
  >("formulations");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

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
              <ThermometerSnowflake className="w-3.5 h-3.5" /> Topical
              Counterirritants &bull; Aromatherapy
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Vicks VapoRub &amp; Vicks BabyRub
            </h1>

            {/* Subtitle / Classification */}
            <div className="flex flex-wrap items-center gap-2 pt-1 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                <strong className="text-cyan-400">Class:</strong> Topical
                Counterirritant / Volatile Inhalant
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                <strong className="text-amber-400">Target Channels:</strong>{" "}
                TRPM8 &bull; TRPV1 &bull; TRPV3
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph evaluating active therapeutic components
              (Menthol, Camphor, Eucalyptus Oil, Nutmeg Oil, Cedarleaf Oil,
              Thymol), the neurosensory illusion of airflow patency, pediatric
              contraindications (&lt; 2 years vs. 3+ months), camphor-induced
              neurotoxicity, and chemical lipoid pneumonitis.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                VapoRub Age Limit
              </span>
              <span className="text-xl font-bold text-rose-400 font-mono">
                &ge; 2 Years Only
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                BabyRub Age Limit
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                &ge; 3 Months+
              </span>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="w-full overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("formulations")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "formulations"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>VapoRub vs. BabyRub Formulations</span>
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
              <span>TRP Channel Electrophysiology</span>
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
              <span>Clinical Indications &amp; Usage</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("toxicity")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "toxicity"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Adverse Effects, Warnings &amp; Toxicity</span>
            </button>
          </div>
        </div>

        {/* --- VIEW 1: VAPORUB VS BABYRUB FORMULATIONS --- */}
        {activeTab === "formulations" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Direct Formulation Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vicks VapoRub Card */}
              <div className="p-6 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                      Standard Therapeutic Ointment
                    </span>
                    <span className="text-[10px] font-mono text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded border border-rose-900/50">
                      Ages &ge; 2 Years &amp; Adults
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2">
                    Vicks VapoRub
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    A pharmacologically active, aromatic volatile ointment in a
                    petrolatum-microcrystalline wax base. Relies on three
                    primary plant-derived terpenes that readily vaporize at skin
                    surface temperature (33°C–37°C):
                  </p>

                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <div className="flex justify-between items-center text-teal-300 font-bold mb-1">
                        <span>1. Camphor (Synthetic/Natural)</span>
                        <span className="text-amber-300 font-sans">
                          4.8% – 5.26% w/w
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                        Topical rubefacient and counterirritant. Dilates local
                        capillaries, producing warm erythema, followed by
                        sensory nerve desensitization. Rapidly penetrates
                        central lipid barriers if swallowed.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <div className="flex justify-between items-center text-teal-300 font-bold mb-1">
                        <span>2. Levomenthol (Menthol)</span>
                        <span className="text-cyan-300 font-sans">
                          2.6% – 2.82% w/w
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                        Selective TRPM8 cold-receptor agonist. Induces an
                        intense neurosensory sensation of cooling and perceived
                        airflow patency without physically decongesting swollen
                        turbinate vessels.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <div className="flex justify-between items-center text-teal-300 font-bold mb-1">
                        <span>3. Eucalyptus Oil (Cineole / Eucalyptol)</span>
                        <span className="text-emerald-300 font-sans">
                          1.2% – 1.33% w/w
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                        Contains &gt; 70% 1,8-cineole. Acts as a mild
                        secretolytic agent, decreasing mucus viscosity and
                        enhancing ciliary clearance while providing a
                        characteristic balsamic aroma.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px]">
                      <span className="text-slate-400 block font-bold mb-0.5">
                        Inactive / Synergistic Excipients:
                      </span>
                      <span className="text-slate-300 font-sans">
                        Nutmeg Oil (0.54% – 0.69%), Cedarleaf Oil (0.44% –
                        0.55%), Thymol (0.09%), and White Soft Paraffin
                        (Petrolatum base).
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 mt-4 text-[11px] text-rose-300/90 font-mono">
                  Strict Rule: Never place inside or around the nostrils; never
                  ingest or heat in boiling water.
                </div>
              </div>

              {/* Vicks BabyRub Card */}
              <div className="p-6 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      Pediatric Non-Medicinal Soothing Balm
                    </span>
                    <span className="text-[10px] font-mono text-teal-400 bg-teal-950/40 px-2 py-0.5 rounded border border-teal-900/50">
                      Infants &ge; 3 Months to 5 Years
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2">
                    Vicks BabyRub
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    A non-medicated, non-irritating emollient balm engineered
                    specifically to bypass the fatal neurotoxic and
                    bronchospastic hazards associated with camphor and menthol
                    in babies:
                  </p>

                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-rose-900/50">
                      <div className="flex justify-between items-center text-rose-400 font-bold mb-1">
                        <span>ZERO Camphor &amp; ZERO Menthol</span>
                        <span className="text-rose-300 font-sans">
                          0.0% w/w
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                        Infant airways are hyper-reactive; camphor and menthol
                        can cause acute glottic closure, severe laryngospasm,
                        and transdermal seizures. BabyRub completely excludes
                        both terpenes.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <div className="flex justify-between items-center text-cyan-300 font-bold mb-1">
                        <span>1. Aloe Vera &amp; Coconut Oil</span>
                        <span className="text-slate-300 font-sans">
                          Emollient Base
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                        Hydrating lipid barrier that conditions delicate
                        neonatal and infant skin during massage, preventing
                        trans-epidermal water loss.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <div className="flex justify-between items-center text-cyan-300 font-bold mb-1">
                        <span>2. Lavender &amp; Rosemary Fragrances</span>
                        <span className="text-slate-300 font-sans">
                          Mild Aromatics
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                        Gentle botanical extracts known to stimulate
                        parasympathetic tone, reducing autonomic arousal,
                        crying, and restlessness to promote infant sleep.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px]">
                      <span className="text-slate-400 block font-bold mb-0.5">
                        Application Sites:
                      </span>
                      <span className="text-slate-300 font-sans">
                        Chest, neck, upper back, and soles of feet (covered with
                        socks to prevent the baby from touching feet and rubbing
                        eyes).
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 mt-4 text-[11px] text-teal-300/90 font-mono">
                  Safety Pearl: Safe for infants from 3 months of age. Do not
                  apply directly to nostrils or broken skin.
                </div>
              </div>
            </div>

            {/* Side-by-Side Summary Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Parameter</th>
                    <th className="p-3.5 text-teal-300">Vicks VapoRub</th>
                    <th className="p-3.5 text-cyan-300">Vicks BabyRub</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Regulatory Status
                    </td>
                    <td className="p-3.5">
                      OTC Therapeutic Drug / Topical Ointment
                    </td>
                    <td className="p-3.5 text-cyan-300 font-semibold">
                      Cosmetic Soothing Ointment
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Minimum Age Limit
                    </td>
                    <td className="p-3.5 text-rose-400 font-bold">
                      &ge; 2 Years (Strict Prohibition &lt; 24 mo)
                    </td>
                    <td className="p-3.5 text-teal-300 font-bold">
                      &ge; 3 Months Old
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Camphor Content
                    </td>
                    <td className="p-3.5 font-mono text-amber-300">
                      ~5.26% w/w (High neurotoxic potential)
                    </td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      0.0% (Completely Camphor-Free)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Menthol Content
                    </td>
                    <td className="p-3.5 font-mono text-cyan-300">
                      ~2.82% w/w (TRPM8 agonist)
                    </td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      0.0% (Completely Menthol-Free)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Eucalyptus Oil
                    </td>
                    <td className="p-3.5 font-mono text-emerald-300">
                      ~1.33% w/w (1,8-cineole active)
                    </td>
                    <td className="p-3.5 text-slate-400">
                      Trace/None (Uses mild lavender &amp; rosemary)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Steam Inhalation Use
                    </td>
                    <td className="p-3.5 text-teal-300 font-bold">
                      YES &bull; Adults &amp; Children &ge; 6 Years
                    </td>
                    <td className="p-3.5 text-rose-400 font-bold">
                      NO &bull; Topical massage only
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- VIEW 2: TRP CHANNEL ELECTROPHYSIOLOGY --- */}
        {activeTab === "mechanism" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* The Great Medical Paradox Banner */}
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Wind className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    The Clinical Paradox: Subjective Sensation vs. Objective
                    Decongestion
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Acoustic rhinometry and anterior rhinomanometry studies
                    consistently reveal a surprising fact:
                    <strong>
                      {" "}
                      Vicks VapoRub does NOT reduce nasal airway resistance,
                      does NOT shrink turbinate venous sinusoids, and does NOT
                      physically unblock the nasal passage.
                    </strong>
                    Patients, however, report immediate, dramatic relief. How
                    does this work?
                  </p>
                </div>
              </div>
            </div>

            {/* Neurosensory Mechanism Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-1">
                    Trigeminal TRPM8 Activation
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    1. Menthol &amp; The Cold Receptor Trick
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Inhaled menthol molecules bind directly to{" "}
                    <strong>
                      Transient Receptor Potential Melastatin 8 (TRPM8)
                    </strong>{" "}
                    ion channels located on unmyelinated sensory nerve fibers of
                    the{" "}
                    <strong>
                      ethmoidal branch of the Trigeminal Nerve (CN V1)
                    </strong>{" "}
                    inside the nasal vestibule.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Normally, TRPM8 channels open only when ambient temperature
                    drops below 25°C–28°C (cooling). Menthol shifts the
                    voltage-activation curve, forcing the channel open at body
                    temperature.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-cyan-300">
                  <em>Result:</em> The brainstem interprets this massive influx
                  of cold-sensor signals as high-velocity, icy-cold air rushing
                  through a wide-open, clear nasal cavity.
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block mb-1">
                    TRPV1 &amp; TRPV3 Warmth Sensation
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    2. Camphor &amp; Counterirritant Gating
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Camphor stimulates{" "}
                    <strong>TRPV1 (capsaicin heat receptor)</strong> and{" "}
                    <strong>TRPV3</strong> channels on sensory nerve terminals
                    in the skin, generating warmth and localized hyperemia
                    (rubefacient effect).
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Continued stimulation desensitizes these peripheral
                    nociceptive fibers. Through the{" "}
                    <em>Gate Control Theory of Pain</em>, this intense cutaneous
                    sensory input closes the spinal dorsal horn gate to deeper
                    visceral pain signals arising from sinus pressure and
                    intercostal coughing strain.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-amber-300">
                  <em>Result:</em> Substantially blunts sinus pressure headaches
                  and chest tightness associated with acute tracheobronchitis.
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest font-bold block mb-1">
                    Medullary Cough Suppression
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    3. Eucalyptus &amp; Antitussive Action
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Vaporized 1,8-cineole (eucalyptol) and menthol act as{" "}
                    <strong>mild local anesthetics</strong> across the vocal
                    cords and laryngeal mucosa.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    They desensitize rapid-adapting stretch receptors and
                    chemical C-fiber cough receptors in the larynx, raising the
                    trigger threshold in the brainstem respiratory center. In
                    clinical trials, inhaling VapoRub vapors reduced
                    citric-acid-induced cough frequency by &gt; 50%.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-teal-300">
                  <em>Result:</em> Suppresses non-productive, hacking nocturnal
                  dry cough to facilitate unbroken restorative sleep.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 3: CLINICAL INDICATIONS & USAGE --- */}
        {activeTab === "indications" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Who Can Use What */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> Who Can Use
                  Vicks VapoRub?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 years):</strong>{" "}
                    Topical chest/throat application or steam inhalation.
                  </li>
                  <li>
                    <strong>Children aged 2 to 11 years:</strong> Topical
                    chest/throat application ONLY under adult supervision. Never
                    use steam inhalation in children &lt; 6 years (burn hazard).
                  </li>
                  <li>
                    <strong>Patients with Nocturnal Cold Cough:</strong> Applied
                    prior to sleep to blunt the cough reflex and provide
                    subjective breathing ease.
                  </li>
                  <li>
                    <strong>Patients with Frontal Sinus Headaches:</strong>{" "}
                    Rubbed over temples and forehead (away from eyes) to provide
                    counterirritant pain distraction.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <Baby className="w-4 h-4 text-cyan-400" /> Who Can Use Vicks
                  BabyRub?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Infants &ge; 3 Months of Age:</strong> Fretful,
                    congested babies who need soothing emollient massage before
                    bedtime.
                  </li>
                  <li>
                    <strong>
                      Toddlers &amp; Pre-schoolers (up to 5 years):
                    </strong>{" "}
                    As a gentle botanical alternative when parents wish to avoid
                    medicated camphor rubs.
                  </li>
                  <li>
                    <strong>Application Protocol:</strong> Massage gently into
                    the chest, neck, back, and the soles of the feet. Always
                    cover feet with socks to prevent accidental ingestion or eye
                    rubbing.
                  </li>
                  <li>
                    <strong>Dry Skin / Post-Bath Massage:</strong> The aloe vera
                    and coconut oil base doubles as a skin moisturizer.
                  </li>
                </ul>
              </div>
            </div>

            {/* Administration Methods Matrix */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-400" />
                Correct Administration Routes &amp; Dosages
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-teal-300 font-bold block text-sm">
                    Method 1: Topical Chest Rub (Adults &amp; Children &ge; 2y)
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Rub a thick layer over the <strong>chest and throat</strong>
                    . Leave clothing loose around the throat and chest so vapors
                    can easily rise toward the nose and mouth. May be applied up
                    to 3 to 4 times daily.
                  </p>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                    <strong className="text-rose-300">Never:</strong> Do not
                    cover with tight bandages, tight clothing, or heating pads.
                    Heat increases transdermal terpene absorption exponentially.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 font-bold text-sm">
                    Method 2: Medicated Steam Inhalation (Adults &amp; Children
                    &ge; 6y)
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Add 1 to 2 teaspoonfuls (5–10 g) of Vicks VapoRub to a bowl
                    of <strong>hot (NOT boiling)</strong> water. Lean over the
                    bowl at a safe distance (20–30 cm), drape a towel over the
                    head, and gently inhale the rising vapors for 10–15 minutes.
                  </p>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                    <strong className="text-rose-300">Microwave Hazard:</strong>{" "}
                    NEVER heat Vicks VapoRub in a microwave oven or reheat the
                    mixture. The petrolatum base can erupt violently, causing
                    severe facial burns.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 4: ADVERSE EFFECTS, WARNINGS & TOXICITY --- */}
        {activeTab === "toxicity" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Boxed Hazard Header */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Critical Toxicological Warnings &amp; Black Box Hazards
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Although available over-the-counter, Vicks VapoRub contains
                    active volatile terpenes—predominantly{" "}
                    <strong>Camphor</strong>—that exert rapid, severe central
                    nervous system excitation and neurotoxicity if swallowed,
                    placed in nostrils, or applied to broken skin.
                  </p>
                </div>
              </div>
            </div>

            {/* The 4 Core Clinical Danger Zones */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  1. Fatal Pediatric Seizures
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>Camphor Toxicity:</strong> Ingestion of as little as{" "}
                  <strong>1 teaspoon (5 mL / ~250 mg camphor)</strong> of Vicks
                  VapoRub can induce lethal grand mal seizures in toddlers.
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px]">
                  Camphor crosses the blood-brain barrier within 5 minutes,
                  blocking GABAergic inhibition and causing generalized
                  convulsions without prior warning.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. Acute Bronchospasm &amp; Apnea
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>The Wake Forest Study:</strong> In infants &lt; 2
                  years, applying VapoRub around the nostrils triggers immediate
                  reflex glottic spasm and reflex apnea via trigeminal-vagal
                  sensory loops.
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px]">
                  Studies show a 59% increase in tracheal mucus secretion
                  combined with a 36% drop in ciliary clearance, choking small
                  airways.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  3. Exogenous Lipoid Pneumonia
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>Never Put in Nostrils:</strong> The petrolatum base
                  consists of long-chain petroleum hydrocarbons.
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px]">
                  When smeared inside the nostrils, minute oil droplets are
                  invisibly aspirated into the lungs over weeks, causing
                  permanent foreign-body granulomatous{" "}
                  <strong>Lipoid Pneumonia</strong>.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  4. Accidental Poisoning Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>No Specific Antidote:</strong> Do NOT induce vomiting
                  (risk of chemical aspiration into lungs and rapid seizure
                  onset during emesis).
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-teal-300 text-[11px]">
                  Administer activated charcoal if within 1 hour. Control
                  seizures immediately with IV benzodiazepines
                  (Lorazepam/Diazepam).
                </div>
              </div>
            </div>

            {/* Overuse & Chronic Application Risks */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                What Happens if Vicks VapoRub is Overused?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Contact Irritant Dermatitis:
                  </strong>
                  Continuous friction and high terpene concentrations break down
                  the stratum corneum, causing erythema, chemical burns,
                  peeling, and vesicular blistering over the chest and neck.
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    Ocular Keratoconjunctivitis:
                  </strong>
                  Applying close to the eyes or rubbing eyes with
                  ointment-coated fingers causes excruciating burning, chemosis,
                  tearing, and corneal epithelial micro-abrasions. Flush
                  immediately with copious saline.
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Sensory Receptor Fatigue:
                  </strong>
                  Overuse exhausts and down-regulates nasal TRPM8 receptors,
                  causing the subjective sensation of cold airflow to vanish,
                  prompting patients to apply even more ointment and escalating
                  toxicity risk.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
