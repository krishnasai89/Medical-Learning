"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Flame,
  Brain,
  Activity,
  Layers,
  ShieldAlert,
  AlertTriangle,
  Info,
  CheckCircle2,
  Zap,
} from "lucide-react";

export default function BalmsMonographPage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "ingredients" | "mechanism" | "indications" | "safety"
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
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-amber-300 transition-colors"
            href="/conditions/cold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-3">
              <Flame className="w-3.5 h-3.5" /> Herbal Counterirritants &bull;
              Neurosensory Analgesia
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Zandu Balm &amp; Tiger Balm
            </h1>

            {/* Subtitle / Classification */}
            <div className="flex flex-wrap items-center gap-2 pt-1 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                <strong className="text-amber-400">Class:</strong> Topical
                Counterirritant / Rubefacient
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                <strong className="text-cyan-400">Mechanism:</strong> TRPM8
                &bull; TRPV1 &bull; TRPV3 Gating
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on aromatic phytotherapeutic counterirritation:
              molecular pharmacology of Menthol, Camphor, Eucalyptus Oil, Nutmeg
              Oil, Cedarleaf Oil, and Thymol. Analysis of Gate Control
              nociceptive blocking, sinus pressure relief, tension headache
              mitigation, and toxicological parameters.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Onset of Action
              </span>
              <span className="text-xl font-bold text-amber-400 font-mono">
                2 – 5 Minutes
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Analgesic Duration
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                2 – 4 Hours
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
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>Overview &amp; Product Profiles</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ingredients")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "ingredients"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Zap className="w-4 h-4 shrink-0" />
              <span>The 6 Active Phytochemicals</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("mechanism")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "mechanism"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Brain className="w-4 h-4 shrink-0" />
              <span>How Counterirritation Works</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("indications")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "indications"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Uses, Causes &amp; Benefits</span>
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
              <span>Side Effects &amp; Overuse Toxicity</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: OVERVIEW & PRODUCT COMPARISON */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Zandu Balm Profile */}
              <div className="p-6 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                      Ayurvedic Pain Formulation
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Emami Ltd &bull; India
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2">
                    Zandu Balm
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Formulated originally in 1910, Zandu Balm is an Ayurvedic
                    topical analgesic ointment combining high concentrations of
                    natural wintergreen oil (Gaultheria / methyl salicylate)
                    with crystalline menthol and eucalyptus. It is optimized
                    specifically for{" "}
                    <strong>
                      headaches, cervical tension, and cold-related nasal
                      congestion
                    </strong>
                    .
                  </p>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">
                        Mentha Satva (Menthol):
                      </span>
                      <span className="text-cyan-300 font-bold">
                        14.0% – 16.0% w/w
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">
                        Gaultheria Oil (Methyl Salicylate):
                      </span>
                      <span className="text-amber-300 font-bold">
                        12.0% – 20.0% w/w
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">
                        Nilgiri Taila (Eucalyptus Oil):
                      </span>
                      <span className="text-teal-300 font-bold">
                        0.8% – 1.0% w/w
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Base:</span>
                      <span className="text-slate-300">
                        Microcrystalline Wax &amp; Paraffin
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 mt-4 text-[11px] text-amber-300/90 font-mono">
                  Primary Utility: Rapid relief of tension headaches, frontal
                  sinusitis, and stiff neck.
                </div>
              </div>

              {/* Tiger Balm Profile */}
              <div className="p-6 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20">
                      Traditional Herbal Ointment
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Haw Par Corp &bull; Singapore
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2">
                    Tiger Balm (White &amp; Red)
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Developed in the 1870s by herbalist Aw Chu Kin in Rangoon,
                    Tiger Balm contains higher percentages of volatile essential
                    terpenes (Camphor 11–25% and Cajuput Oil), imparting deep
                    penetrating heat and cooling counterirritation for{" "}
                    <strong>
                      musculoskeletal arthralgias, deep myalgias, and severe
                      nasal stuffiness
                    </strong>
                    .
                  </p>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Camphor:</span>
                      <span className="text-rose-300 font-bold">
                        11.0% (White) &bull; 25.0% (Red)
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Menthol:</span>
                      <span className="text-cyan-300 font-bold">
                        8.0% – 10.0% w/w
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Cajuput Oil:</span>
                      <span className="text-emerald-300 font-bold">
                        7.0% – 13.0% w/w
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">
                        Clove Oil &amp; Cinnamon Oil:
                      </span>
                      <span className="text-amber-300 font-bold">
                        1.5% – 5.0% w/w
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 mt-4 text-[11px] text-rose-300/90 font-mono">
                  Primary Utility: Deep muscular aches, athletic sprains, joint
                  pain, and severe chest congestion.
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Feature</th>
                    <th className="p-3.5 text-amber-300">Zandu Balm</th>
                    <th className="p-3.5 text-rose-300">Tiger Balm (White)</th>
                    <th className="p-3.5 text-red-400">Tiger Balm (Red)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Dominant Active
                    </td>
                    <td className="p-3.5 text-amber-300 font-mono">
                      Methyl Salicylate + Menthol
                    </td>
                    <td className="p-3.5 font-mono">
                      Camphor (11%) + Menthol (8%)
                    </td>
                    <td className="p-3.5 text-red-400 font-mono">
                      Camphor (25%) + Clove/Cassia
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Sensory Profile
                    </td>
                    <td className="p-3.5">Cooling &rarr; Mild Warmth</td>
                    <td className="p-3.5">
                      Fast Icy Cooling &rarr; Mild Warmth
                    </td>
                    <td className="p-3.5 text-red-300 font-bold">
                      Deep Penetrating Heat / Burning
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Ideal Indication
                    </td>
                    <td className="p-3.5">Frontal headache, sinusitis, cold</td>
                    <td className="p-3.5">
                      Headache, nasal stuffiness, insect bites
                    </td>
                    <td className="p-3.5">
                      Deep muscle spasm, backache, arthritis
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Clothing Staining
                    </td>
                    <td className="p-3.5 text-emerald-400">
                      No (Translucent white base)
                    </td>
                    <td className="p-3.5 text-emerald-400">
                      No (White ointment)
                    </td>
                    <td className="p-3.5 text-rose-400 font-semibold">
                      Yes (Red-brown herbal tint)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Minimum Age</td>
                    <td className="p-3.5">&ge; 2–5 Years</td>
                    <td className="p-3.5">&ge; 2 Years</td>
                    <td className="p-3.5 font-bold text-rose-300">
                      &ge; 12 Years (High Camphor)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: THE 6 ACTIVE PHYTOCHEMICALS */}
        {/* ========================================================================= */}
        {activeTab === "ingredients" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-0.5">
                  The Volatile Terpene Matrix:
                </strong>
                Balms and aromatic rubs rely on synergistic natural monoterpenes
                and phenolics that rapidly penetrate the stratum corneum to
                modulate cutaneous thermoreceptors and peripheral pain
                afferents.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* 1. Menthol */}
              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                      TRPM8 Agonist
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Monoterpene
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    1. Menthol (Mentha Satva)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Extracted from peppermint or wild mint (
                    <em>Mentha arvensis</em>).
                  </p>
                  <div className="space-y-2 text-xs text-slate-300">
                    <p>
                      <strong>How it works:</strong> Menthol selectively
                      activates{" "}
                      <strong>
                        TRPM8 (Transient Receptor Potential Melastatin 8)
                      </strong>{" "}
                      ion channels on cutaneous A-delta and C sensory nerve
                      fibers. TRPM8 is the body&apos;s natural cold-sensing
                      channel.
                    </p>
                    <p className="text-slate-400">
                      It causes a massive influx of calcium ions (Ca²⁺),
                      mimicking the sensory effect of freezing temperatures
                      without physically lowering tissue temperature. High
                      concentrations subsequently block voltage-gated sodium
                      (Na⁺) channels, producing{" "}
                      <strong>local anesthesia</strong>.
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-cyan-300 font-mono">
                  Effect: Immediate icy freshness, distraction from dull aching
                  pain, and perceived clearing of nasal airways.
                </div>
              </div>

              {/* 2. Camphor */}
              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                      TRPV1 / TRPV3 Agonist
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Bicyclic Ketone
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    2. Camphor (Karpoor)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Derived from wood of the camphor laurel (
                    <em>Cinnamomum camphora</em>) or synthesized.
                  </p>
                  <div className="space-y-2 text-xs text-slate-300">
                    <p>
                      <strong>How it works:</strong> Camphor stimulates{" "}
                      <strong>TRPV1 (heat/capsaicin receptor)</strong> and{" "}
                      <strong>TRPV3</strong> channels while desensitizing TRPA1
                      pain channels.
                    </p>
                    <p className="text-slate-400">
                      It induces rapid cutaneous microvascular vasodilation
                      (rubefacient effect), generating deep spreading warmth.
                      Continuous activation depletes sensory terminals of{" "}
                      <strong>Substance P</strong>, creating long-lasting local
                      desensitization against muscular spasm and arthralgia.
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-amber-300 font-mono">
                  Effect: Warming counterirritation, increased local blood
                  circulation, and muscle relaxation.
                </div>
              </div>

              {/* 3. Eucalyptus Oil */}
              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                      1,8-Cineole / Eucalyptol
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Secretolytic Terpenoid
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    3. Eucalyptus Oil (Nilgiri Taila)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Steam-distilled from leaves of <em>Eucalyptus globulus</em>.
                  </p>
                  <div className="space-y-2 text-xs text-slate-300">
                    <p>
                      <strong>How it works:</strong> The primary active fraction{" "}
                      <strong>1,8-cineole</strong> inhibits tumor necrosis
                      factor-alpha (TNF-α) and leukotriene B4 (LTB4) in human
                      monocytes, exerting anti-inflammatory properties.
                    </p>
                    <p className="text-slate-400">
                      When inhaled, its vapors stimulate serous bronchial
                      glands, increasing ciliary beat frequency and thinning
                      thick mucus secretions (mucolytic/secretomotor action),
                      while relieving bronchial smooth muscle spasm.
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-teal-300 font-mono">
                  Effect: Decongestion, mucus thinning, anti-inflammatory
                  soothing of sinus pressure.
                </div>
              </div>

              {/* 4. Nutmeg Oil */}
              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
                      Myristicin / Sabinene
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Essential Oil
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    4. Nutmeg Oil (Myristica fragrans)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Distilled from the seed kernels of the nutmeg tree (
                    <em>Myristica fragrans</em>).
                  </p>
                  <div className="space-y-2 text-xs text-slate-300">
                    <p>
                      <strong>How it works:</strong> Contains volatile
                      phenylpropenes (
                      <strong>myristicin, elemicin, safrole</strong>) and
                      monoterpenes (pinene, sabinene).
                    </p>
                    <p className="text-slate-400">
                      It inhibits prostaglandin E2 (PGE2) synthesis in
                      peripheral tissues, acting as a natural anti-inflammatory
                      agent. Applied topically, it penetrates deeply to calm
                      chronic joint aches, lumbago, and intercostal nerve
                      inflammation.
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-rose-300 font-mono">
                  Effect: Deep tissue analgesic, muscular anti-inflammatory, and
                  aromatic calming agent.
                </div>
              </div>

              {/* 5. Cedarleaf Oil */}
              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                      Thujone / Pinene
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Conifer Terpene
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    5. Cedarleaf Oil (Thuja occidentalis)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Steam-distilled from leaves of the Northern White Cedar (
                    <em>Thuja occidentalis</em>).
                  </p>
                  <div className="space-y-2 text-xs text-slate-300">
                    <p>
                      <strong>How it works:</strong> Rich in{" "}
                      <strong>
                        alpha-thujone, fenchone, and bornyl acetate
                      </strong>
                      . Acts as a cutaneous stimulant and natural
                      counterirritant.
                    </p>
                    <p className="text-slate-400">
                      It promotes superficial capillary circulation, helping
                      carry away inflammatory metabolic byproducts (lactic acid)
                      from fatigued muscles. Its sharp woody aroma also provides
                      mild bronchial smooth muscle relaxation when inhaled.
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-emerald-300 font-mono">
                  Effect: Enhanced cutaneous microcirculation, antimicrobial
                  vapor action, and respiratory ease.
                </div>
              </div>

              {/* 6. Thymol */}
              <div className="p-5 rounded-2xl border border-purple-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 font-bold">
                      Monoterpene Phenol
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Thymus vulgaris
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    6. Thymol (Ajwain Ka Phool)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Natural monoterpenoid phenol isolated from thyme (
                    <em>Thymus vulgaris</em>) or ajwain seeds.
                  </p>
                  <div className="space-y-2 text-xs text-slate-300">
                    <p>
                      <strong>How it works:</strong> Potent activator of{" "}
                      <strong>TRPV3 and TRPA1</strong> receptors, producing an
                      immediate warming, tingling sensation.
                    </p>
                    <p className="text-slate-400">
                      Thymol exhibits broad-spectrum{" "}
                      <strong>antiseptic and antibacterial</strong> activity by
                      disrupting microbial lipid cell membranes. It also
                      functions as an antioxidant and local membrane stabilizer,
                      calming neurogenic inflammation.
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-purple-300 font-mono">
                  Effect: Powerful antiseptic, warming sensation, and relief of
                  neurogenic skin itching/irritation.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: HOW COUNTERIRRITATION WORKS (NEUROPHYSIOLOGY) */}
        {/* ========================================================================= */}
        {activeTab === "mechanism" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* The Gate Control Theory Banner */}
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    How Counterirritation Suppresses Pain &amp; Congestion
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Balms do not treat pain by turning off systemic pain
                    receptors like oral NSAIDs. Instead, they operate on
                    <strong> counterirritation</strong>—deliberately creating a
                    harmless, competing sensory stimulus (icy cold + intense
                    heat) on superficial skin to &quot;drown out&quot; deeper
                    pathological pain signals traveling to the brain.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Step Physiological Mechanism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold block mb-1">
                    STEP 1 &bull; Gate Control Theory of Pain
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    1. Closing the Spinal Gate (Melzack &amp; Wall)
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Deep headache pain and muscular aches travel to the brain
                    along <strong>slow, unmyelinated C-fibers</strong>.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    When you rub balm onto your temples or forehead, menthol and
                    camphor stimulate{" "}
                    <strong>
                      fast, myelinated A-beta / A-delta sensory fibers
                    </strong>
                    . These fast sensory signals arrive at the{" "}
                    <em>substantia gelatinosa</em> in the spinal dorsal horn
                    first, activating inhibitory interneurons that{" "}
                    <strong>physically close the synaptic gate</strong>,
                    preventing slow pain signals from ascending to the cerebral
                    cortex.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-amber-300">
                  Result: Immediate, dramatic reduction in perceived pain
                  intensity.
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">
                    STEP 2 &bull; Thermal Receptor Switching
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    2. The &quot;Biphasic&quot; Cold-Heat Waveform
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Balms produce a paradoxical sensation where skin feels
                    freezing cold and burning hot at the same moment.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Menthol binds to <strong>TRPM8</strong> (cold receptor,
                    firing at &lt; 28°C), while Camphor and Thymol bind to{" "}
                    <strong>TRPV1 &amp; TRPV3</strong>
                    (heat receptors, firing at &gt; 43°C). The brain receives
                    simultaneous intense cold and burning signals, resulting in
                    total sensory overload that distracts consciousness away
                    from the dull, throbbing headache or sinus ache.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-cyan-300">
                  Result: Neurological distraction that overrides frontal sinus
                  pressure.
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-teal-400 font-bold block mb-1">
                    STEP 3 &bull; Vasomotor &amp; Biochemical
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    3. Local Prostaglandin Block &amp; Hyperemia
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    In Zandu Balm,{" "}
                    <strong>Methyl Salicylate (Gaultheria oil)</strong> is
                    absorbed through the skin where tissue esterases hydrolyze
                    it into free salicylic acid.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Salicylate locally inhibits cyclooxygenase (COX) enzymes,
                    stopping the production of inflammatory prostaglandins in
                    underlying periosteal and muscular tissues. Concurrently,
                    camphor and eucalyptus dilate capillaries, flushing out
                    trapped lactic acid and inflammatory metabolites.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-teal-300">
                  Result: True localized anti-inflammatory healing combined with
                  increased oxygen delivery.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: USES, CAUSES & BENEFITS */}
        {/* ========================================================================= */}
        {activeTab === "indications" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Primary Clinical Indications Grid */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-400" />
                Common Causes &amp; Primary Clinical Uses
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
                {/* 1. Headaches */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 text-sm block">
                    1. Headaches &amp; Sinus Pressure
                  </strong>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside leading-relaxed">
                    <li>
                      <strong>Tension-Type Headache:</strong> Bilateral
                      band-like tightening caused by scalp and neck muscle
                      contractions.
                    </li>
                    <li>
                      <strong>Frontal Sinusitis:</strong> Dull throbbing ache
                      above the eyebrows caused by clogged sinus ostia during
                      common colds.
                    </li>
                    <li>
                      <strong>Stress / Work Fatigue:</strong> Ocular strain and
                      temporal throbbing after prolonged screen time.
                    </li>
                  </ul>
                  <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-900">
                    <em>How to apply:</em> Rub a small dab over the temples,
                    forehead, and behind the ears. Avoid eyebrows and eyelid
                    margins.
                  </p>
                </div>

                {/* 2. Nasal Congestion */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 text-sm block">
                    2. Nasal Congestion &amp; Colds
                  </strong>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside leading-relaxed">
                    <li>
                      <strong>Stuffy Nose / Rhinorrhea:</strong> Cold-induced
                      nasal obstruction and persistent rhinorrhea.
                    </li>
                    <li>
                      <strong>Chest Tightness:</strong> Dry, non-productive
                      coughing spasms during acute viral tracheobronchitis.
                    </li>
                    <li>
                      <strong>Nocturnal Congestion:</strong> Blocked nasal
                      breathing preventing restful sleep.
                    </li>
                  </ul>
                  <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-900">
                    <em>How to apply:</em> Apply sparingly across the bridge of
                    the nose, neck, or upper chest. Inhale the rising volatile
                    vapors.
                  </p>
                </div>

                {/* 3. Musculoskeletal */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-rose-300 text-sm block">
                    3. Muscular Sprains &amp; Arthralgia
                  </strong>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside leading-relaxed">
                    <li>
                      <strong>Cervical Neck Stiffness:</strong> &quot;Wry
                      neck&quot; from sleeping in an awkward position or cold
                      air draft.
                    </li>
                    <li>
                      <strong>Lumbago / Low Back Pain:</strong> Post-exertional
                      muscular spasms and ligamentous strains.
                    </li>
                    <li>
                      <strong>Arthritis &amp; Joint Pain:</strong> Mild
                      osteoarthritic knee stiffness and weather-induced joint
                      discomfort.
                    </li>
                  </ul>
                  <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-900">
                    <em>How to apply:</em> Vigorously massage into the affected
                    muscle group until the skin warms up, followed by dry
                    flannel wrapping.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Benefits Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <strong className="text-teal-300 block mb-1">
                  Non-Systemic Relief
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Acts locally without passing through the gastrointestinal
                  tract, completely sparing the stomach lining from NSAID ulcers
                  and sparing the liver from first-pass toxicity.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <strong className="text-amber-300 block mb-1">
                  Immediate Sensory Onset
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  While oral painkillers (Paracetamol, Ibuprofen) require 30–60
                  minutes to absorb and reach peak blood levels, balms produce
                  neurosensory gating within 2 to 5 minutes.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <strong className="text-cyan-300 block mb-1">
                  Dual Action Sensation
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Combines refreshing icy cold with comforting deep heat,
                  relaxing contracted skeletal muscle fibers while soothing hot
                  inflamed nerve endings.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <strong className="text-purple-300 block mb-1">
                  Aromatherapy Inhalation
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Vaporizing terpenes stimulate olfactory and trigeminal sensory
                  nerve pathways, reducing sympathetic stress tone and promoting
                  deep nocturnal relaxation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: SIDE EFFECTS, PRECAUTIONS & TOXICITY */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Boxed Hazard Header */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Safety Precautions &amp; Toxicological Warnings
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Balms are strictly formulated for{" "}
                    <strong>external, intact skin use only</strong>. Because
                    they contain concentrated terpenes (Camphor, Menthol) and
                    salicylates, improper application, ingestion, or mucosal
                    exposure can cause severe chemical injury and neurotoxicity.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Danger Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  1. Severe Ocular Irritation
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>Accidental Eye Contact:</strong> Rubbing eyes with
                  balm-coated fingers transfers volatile menthol and camphor
                  directly to the conjunctival sac.
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px]">
                  Causes intense stinging pain, severe chemosis (conjunctival
                  swelling), reflex blepharospasm, and potential corneal
                  epithelial abrasions.
                  <strong> Remedy:</strong> Flush immediately with copious
                  saline or cold water; do NOT rub.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. Chemical Burns Under Occlusion
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>The Heating Pad / Tight Wrap Hazard:</strong> Applying
                  a heating pad or airtight plastic wrap over a balm-treated
                  skin area.
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px]">
                  Heat and occlusion exponentially increase transdermal
                  absorption of methyl salicylate and camphor, causing
                  full-thickness chemical burns, epidermal blistering, and
                  severe systemic salicylate toxicity.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  3. Pediatric Camphor Toxicity
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>Children Under 2 Years:</strong> Never apply
                  high-concentration camphor balms (like Tiger Balm or Zandu
                  Balm) on infants or toddlers.
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[11px]">
                  Camphor is absorbed rapidly through thin infant skin, crossing
                  the blood-brain barrier within minutes to trigger sudden grand
                  mal seizures, respiratory arrest, and acute glottic spasm.
                </div>
              </div>
            </div>

            {/* Overuse Sequelae */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                What Happens if Balms Are Overused?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Contact Dermatitis:
                  </strong>
                  Repeated application over the same skin patch causes stratum
                  corneum breakdown, resulting in red, scaly, itchy erythema and
                  burning contact dermatitis.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    Systemic Salicylism:
                  </strong>
                  Excessive application of methyl-salicylate-heavy balms (Zandu
                  Balm) over large body surfaces can lead to systemic salicylate
                  poisoning: tinnitus, nausea, vomiting, hyperventilation, and
                  metabolic acidosis.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Receptor Tachyphylaxis:
                  </strong>
                  Continuous overuse exhausts cutaneous TRPM8 and TRPV1 ion
                  channels. The skin becomes numb to the counterirritant
                  sensation, leading users to apply dangerously large amounts to
                  achieve the same relief.
                </div>
              </div>
            </div>

            {/* Practical Rules of Application */}
            <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-950/20 backdrop-blur-md flex items-start gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">
                  Golden Clinical Rules for Balm Use:
                </strong>
                <ol className="list-decimal list-inside space-y-1 text-slate-400">
                  <li>
                    Always wash hands thoroughly with soap and water immediately
                    after applying.
                  </li>
                  <li>
                    Never apply inside the nostrils, inside the mouth, or onto
                    broken, abraded, or eczematous skin.
                  </li>
                  <li>
                    Do not bandage tightly or apply external heat (heating pads,
                    hot water bottles) over balm.
                  </li>
                  <li>
                    Keep jars tightly capped and out of reach of children to
                    prevent accidental oral ingestion.
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
