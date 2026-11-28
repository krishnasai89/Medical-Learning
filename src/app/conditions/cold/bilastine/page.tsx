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
  ShieldCheck,
} from "lucide-react";

export default function BilastinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "montelukast-combo" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-violet-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-violet-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull; Modern
              Non-Sedating 2nd-Gen Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Bilastine
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-violet-300 font-mono">
                  2-[4-[2-[4-[1-(2-ethoxyethyl)-1H-benzimidazol-2-yl]piperidin-1-yl]ethyl]phenyl]-2-methylpropanoic
                  acid
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-violet-400 font-mono">
                    Bilastine (20 mg)
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / USAN / BAN) &bull; Zero Hepatic CYP450 Metabolism
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Bilaxten, Bilasure, Blexten, Ilaxten &bull; Combos:
                    Bilasure-M, Bilazest-M
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on ultra-selective peripheral H1 receptor
              inverse agonism with ~0.0% brain H1 occupancy (PET-verified zero
              sedation), unchanged renal/fecal clearance without liver
              metabolism, why physicians avoid routine standalone use due to
              strict fasting rules yet prescribe{" "}
              <strong>Bilastine (20 mg) + Montelukast Sodium (10 mg)</strong>{" "}
              when patients specifically demand zero daytime drowsiness, and
              overdose management.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Adult Dose
              </span>
              <span className="text-xl font-bold text-violet-400 font-mono">
                20 mg Once Daily
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Brain H1 Occupancy
              </span>
              <span className="text-xl font-bold text-emerald-300 font-mono">
                ~0.0% (Zero Sedation)
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
                  ? "bg-violet-500 text-slate-950 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Overview, Mechanism &amp; Uses</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("montelukast-combo")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "montelukast-combo"
                  ? "bg-violet-500 text-slate-950 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Zero-Sleepiness Niche &amp; + Montelukast</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dosing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dosing"
                  ? "bg-violet-500 text-slate-950 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
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
              <span>Side Effects, Fasting Rule &amp; Overdose</span>
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
              <span>2nd-Gen Antihistamine Class</span>
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
                  <div className="flex items-center gap-2 text-violet-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Bilastine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Bilastine (marketed globally as <strong>Bilaxten</strong>,{" "}
                    <strong>Bilasure</strong>, or <strong>Blexten</strong>) is a
                    newer-generation, piperidinyl-benzimidazole{" "}
                    <strong>second-generation H1 receptor antihistamine</strong>
                    . Unlike Cetirizine or Fexofenadine, Bilastine is not
                    derived from an older sedating parent drug—it was newly
                    synthesized from the ground up for maximum peripheral H1
                    selectivity and zero central nervous system penetration.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Positron Emission Tomography (PET) neuroimaging proves that
                    Bilastine 20 mg achieves{" "}
                    <strong>~0.0% cerebral H1 receptor occupancy</strong> (even
                    lower than Cetirizine and equal to Fexofenadine), producing
                    zero drowsiness, zero psychomotor slowing, and no
                    potentiation of alcohol or benzodiazepines.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-violet-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapid oral absorption when taken fasting; onset within 30–60
                  minutes, peak plasma levels (Tmax) at 1.3 hours, and full
                  24-hour duration.{" "}
                  <strong>
                    Not metabolized by the liver (0% CYP450 metabolism)
                  </strong>
                  ; excreted unchanged in feces (~67%) and urine (~33%).
                  Terminal elimination half-life: 14.5 hours.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Mechanism of Action)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Ultra-Selective Peripheral H1 Receptor Inverse
                        Agonism:
                      </strong>
                      Exhibits 3-fold higher affinity for human{" "}
                      <strong>Histamine H1 receptors</strong> than Cetirizine
                      and 5-fold higher affinity than Fexofenadine, with zero
                      affinity for H2, H3, H4, muscarinic cholinergic,
                      serotonergic, or adrenergic receptors. Stabilizes H1
                      receptors in their inactive state to block sneezing,
                      rhinorrhea, nasal edema, and skin wheals.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Strict P-Glycoprotein Blood-Brain Barrier Exclusion:
                      </strong>
                      Because Bilastine is a high-affinity substrate for
                      blood-brain barrier <strong>P-glycoprotein (P-gp)</strong>{" "}
                      efflux pumps and carries a polar zwitterionic charge, it
                      is actively excluded from brain tissue—yielding zero
                      sedation and zero driving impairment.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Mast-Cell &amp; Inflammatory Mediator Suppression:
                      </strong>
                      Inhibits histamine, IL-4, and TNF-alpha release from human
                      mast cells and basophils during allergic inflammation.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  24-hour{" "}
                  <strong>
                    high-affinity peripheral H1 blockade with 0% brain entry and
                    0% hepatic metabolism
                  </strong>
                  .
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-violet-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Strict Empty-Stomach Rule:
                  </strong>
                  Take Bilastine{" "}
                  <strong>
                    1 hour before or 2 hours after food or fruit juice
                  </strong>
                  . Meals and fruit juices (orange, apple, grapefruit) inhibit
                  intestinal OATP1A2 uptake, cutting absorption by{" "}
                  <strong>30%</strong>.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-violet-300 block mb-1">
                    Zero Dose Adjustment in Liver/Kidney Disease:
                  </strong>
                  Unlike Cetirizine, Levocetirizine, or Desloratadine, Bilastine
                  requires{" "}
                  <strong>
                    no dose reduction in hepatic or renal impairment
                  </strong>{" "}
                  because it is not metabolized and uses dual fecal/renal
                  clearance.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-emerald-300 block mb-1">
                    Zero Rebound Withdrawal Pruritus:
                  </strong>
                  Does not carry the FDA discontinuation-pruritus warning
                  associated with long-term Cetirizine or Levocetirizine use.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    P-gp Inhibitor Caution:
                  </strong>
                  In patients with moderate-to-severe kidney impairment, avoid
                  strong P-gp inhibitors (Ketoconazole, Erythromycin,
                  Cyclosporine, Ritonavir) as they elevate plasma Bilastine
                  levels.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-violet-300 block mb-1 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5" /> 1. Seasonal &amp; Perennial
                    Allergic Rhinitis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Daytime hay fever (pollen, grass, weed allergies)</li>
                    <li>
                      Year-round dust mite, animal dander, and mold allergies
                    </li>
                    <li>
                      Sneezing paroxysms, watery rhinorrhea, and nasal itching
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-teal-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 2. Chronic Spontaneous
                    Urticaria (Hives)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      20 mg once-daily maintenance for chronic hives and
                      angioedema
                    </li>
                    <li>
                      Equipotent to Cetirizine 10 mg in skin wheal suppression
                      with zero sedation
                    </li>
                    <li>
                      Can be up-dosed (up to 40–80 mg/day) by specialists in
                      refractory urticaria
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> 3. Zero-Sleepiness
                    Daytime &amp; Combo Therapy
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Preferred daytime choice for students, drivers, surgeons,
                      and shift workers
                    </li>
                    <li>Allergic rhinoconjunctivitis (itchy, tearing eyes)</li>
                    <li>
                      Combined with Montelukast (20 mg + 10 mg) for complete
                      nasal + airway relief
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY AVOID ROUTINELY VS ZERO-SLEEPINESS BILASTINE + MONTELUKAST */}
        {/* ========================================================================= */}
        {activeTab === "montelukast-combo" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-400 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest block mb-1">
                    Clinical Positioning &bull; e.g., Bilasure-M, Bilazest-M,
                    Bilargic-M (20 mg + 10 mg)
                  </span>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Why Doctors Don&apos;t Prescribe It for Every Cold, Yet
                    Choose Bilastine + Montelukast When Patients Say &quot;I
                    Don&apos;t Want to Feel Sleepy&quot;
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    In everyday outpatient care, doctors do not hand out
                    Bilastine for every routine cold—mainly due to its{" "}
                    <strong>strict empty-stomach timing requirement</strong>,
                    higher cost, and lack of viral secretion drying. However,
                    when an allergy patient explicitly says{" "}
                    <strong>
                      &quot;I cannot afford to feel sleepy at work or while
                      studying,&quot;
                    </strong>{" "}
                    <strong>
                      Bilastine (20 mg) + Montelukast Sodium (10 mg)
                    </strong>{" "}
                    is the gold-standard non-drowsy combination.
                  </p>
                </div>
              </div>
            </div>

            {/* Side-by-Side Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Why Doctors Avoid Routine Use */}
              <div className="p-6 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20 font-bold">
                    Practical Limitations
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Fasting Rule &bull; Viral Colds
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Avoid Bilastine for Routine Colds
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      1. Strict Fasting Requirement (Compliance Hurdle)
                    </strong>
                    <p className="text-slate-400">
                      Bilastine must be taken{" "}
                      <strong>
                        1 hour before or 2 hours after eating or drinking juice
                      </strong>
                      . If a patient swallows it right after breakfast,
                      bioavailability drops by ~30%. By contrast, Levocetirizine
                      and Cetirizine can be taken anytime with or without meals.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      2. Does Not Dry Up Viral Common Cold Rhinorrhea
                    </strong>
                    <p className="text-slate-400">
                      Because Bilastine has{" "}
                      <strong>0% muscarinic anticholinergic activity</strong>,
                      it will not dry up a non-allergic viral runny nose—making
                      first-generation agents (like Chlorpheniramine) or saline
                      sprays better for simple viral colds.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      3. Higher Cost &amp; Regional Availability
                    </strong>
                    <p className="text-slate-400">
                      As a newer patented/specialty molecule, Bilastine costs
                      noticeably more than generic Cetirizine or Levocetirizine
                      (and is not yet marketed in the United States).
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Bilastine + Montelukast is the Zero-Sleepiness Choice */}
              <div className="p-6 rounded-2xl border border-violet-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-violet-300 bg-violet-500/10 px-2.5 py-0.5 rounded border border-violet-500/20 font-bold">
                    Zero-Sedation Dual Blockade
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Bilastine 20 mg + Montelukast 10 mg
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Prescribe Bilastine + Montelukast for Alertness
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-violet-300 block mb-1">
                      1. 0.0% Brain Penetration = Zero Daytime Sleepiness
                    </strong>
                    <p className="text-slate-400">
                      Even Levocetirizine (5 mg) causes mild drowsiness in ~6–8%
                      of people and Cetirizine (10 mg) in ~14%. Bilastine has{" "}
                      <strong>0.0% brain H1 receptor occupancy</strong>, and
                      Montelukast is completely non-sedating—giving full allergy
                      relief with 100% mental sharpness.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-violet-300 block mb-1">
                      2. Blocks Both Histamine (H1) &amp; Leukotrienes (CysLT1)
                    </strong>
                    <p className="text-slate-400">
                      Bilastine stops sneezing, itching, and watery discharge,
                      while <strong>Montelukast (10 mg)</strong> blocks
                      late-phase leukotrienes (LTC4/LTD4/LTE4) to relieve nasal
                      blockage/stuffiness and prevent lower airway wheezing.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-violet-300 block mb-1">
                      3. No Rebound Pruritus When Stopping
                    </strong>
                    <p className="text-slate-400">
                      Ideal for patients who previously experienced grogginess
                      or withdrawal itching on Cetirizine or Levocetirizine.
                      (Note: Montelukast carries an FDA Boxed Warning for rare
                      neuropsychiatric mood changes).
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
                  Use Bilastine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    Standard 20 mg tablet once daily (1 hour before or 2 hours
                    after food/juice).
                  </li>
                  <li>
                    <strong>
                      Children Aged 6 to 11 Years (Body Weight &ge; 20 kg):
                    </strong>{" "}
                    10 mg orodispersible tablet (ODT) or 4 mL oral solution (2.5
                    mg/mL) once daily under fasting rule.
                  </li>
                  <li>
                    <strong>Patients with Liver or Kidney Impairment:</strong>{" "}
                    Safe at full 20 mg dose without dose reduction.
                  </li>
                  <li>
                    <strong>Drivers, Pilots, Surgeons &amp; Students:</strong>{" "}
                    Ideal for tasks demanding full psychomotor alertness.
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
                    <strong>Hypersensitivity to Bilastine:</strong>{" "}
                    Contraindicated in anyone allergic to Bilastine or its
                    tablet excipients.
                  </li>
                  <li>
                    <strong>
                      Children Under 6 Years (or Weighing &lt; 20 kg):
                    </strong>{" "}
                    Safety and efficacy have not been established.
                  </li>
                  <li>
                    <strong>
                      Moderate-to-Severe Renal Impairment Taking P-gp
                      Inhibitors:
                    </strong>{" "}
                    Avoid concurrent Ketoconazole, Erythromycin, Cyclosporine,
                    Diltiazem, or Ritonavir in kidney disease.
                  </li>
                  <li>
                    <strong>Pregnancy &amp; Breastfeeding:</strong> Avoid during
                    pregnancy and lactation as a precautionary measure due to
                    limited human clinical data (prefer Cetirizine or
                    Loratadine).
                  </li>
                </ul>
              </div>
            </div>

            {/* Stratified Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-violet-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Clinical Dosing Matrix (Fasting Timing Mandatory)
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Administer 1 hour before or 2 hours after food/juice
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age / Clinical Group</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Timing &amp; Administration</th>
                      <th className="p-3.5">Max 24h Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Children Under 6 Years (&lt; 20 kg)
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        NOT APPROVED &bull; Safety and efficacy not established
                        under 6 years of age
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (6 – 11 Years, &ge; 20 kg)
                      </td>
                      <td className="p-3.5 font-mono text-violet-300 font-bold">
                        10 mg (ODT or 4 mL solution)
                      </td>
                      <td className="p-3.5">
                        Once daily (1h before or 2h after meals/juice)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 10 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12 Years)
                      </td>
                      <td className="p-3.5 font-mono text-violet-300 font-bold">
                        20 mg (1 tablet)
                      </td>
                      <td className="p-3.5">
                        Once daily with water (1h before or 2h after meals)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 20 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-teal-200">
                        Adult Combo: Bilastine + Montelukast (&ge; 15y)
                      </td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        20 mg + 10 mg (1 FDC tab)
                      </td>
                      <td className="p-3.5">
                        Once daily (1h before dinner or 2h after dinner)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        1 tablet / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-emerald-200">
                        Elderly, Renal, or Hepatic Impairment
                      </td>
                      <td className="p-3.5 font-mono text-emerald-300 font-bold">
                        20 mg (1 tablet)
                      </td>
                      <td className="p-3.5">No dose adjustment required</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 20 mg / day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS, FASTING RULE & OVERDOSE */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Food & Juice Interaction Banner */}
            <div className="p-6 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white mb-1.5">
                    Critical Absorption Rule: Why Food &amp; Fruit Juices Reduce
                    Bilastine Effectiveness
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Food and fruit juices (
                    <strong>grapefruit, orange, and apple juice</strong>)
                    inhibit intestinal{" "}
                    <strong>OATP1A2 uptake transporters</strong>, reducing
                    Bilastine oral bioavailability by <strong>30%</strong>.
                    Taking Bilastine right after a meal weakens symptom
                    relief—always take it with plain water on an empty stomach
                    (1 hour before or 2 hours after eating).
                  </p>
                </div>
              </div>
            </div>

            {/* Common Side Effects */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Info className="w-5 h-5 text-violet-400" />
                Common Side Effects (Placebo-Level Tolerability)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-violet-300 block">
                    1. Neurological &amp; General Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Headache (~4.0% vs. 3.6% placebo)</li>
                    <li>
                      Somnolence / drowsiness (~3.0% — identical to sugar
                      placebo)
                    </li>
                    <li>Dizziness or mild fatigue (~0.8%)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    2. Gastrointestinal &amp; Mucosal Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Mild abdominal pain or epigastric discomfort</li>
                    <li>
                      Dry mouth (~1.2% — negligible anticholinergic activity)
                    </li>
                    <li>Nausea or diarrhea (&lt; 1%)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Combination-Specific (+ Montelukast)
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Vivid dreams, insomnia, irritability, or mood changes
                      (from Montelukast)
                    </li>
                    <li>
                      Zero QTc interval prolongation at therapeutic doses (20
                      mg)
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
                    Bilastine has an exceptionally wide therapeutic safety
                    margin. In clinical safety studies, single doses up to{" "}
                    <strong>220 mg</strong> (11 times the standard 20 mg dose)
                    and repeated doses of <strong>200 mg/day for 7 days</strong>{" "}
                    produced no serious adverse events or clinically significant
                    ECG QTc prolongation.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. Mild CNS &amp; GI Overdose Signs
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  In documented overdoses (4 to 11 times standard dose), the
                  most common symptoms are{" "}
                  <strong>dizziness, headache, drowsiness, and nausea</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. Supratherapeutic QTc Caution (&ge; 100 mg + P-gp Block)
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  While 20 mg does not affect cardiac rhythm, massive doses (100
                  mg+) co-administered with potent P-gp inhibitors
                  (Ketoconazole) can mildly prolong QTc interval.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>No specific antidote exists</strong>. Provide
                  symptomatic and supportive treatment (activated charcoal if
                  within 1 hour of ingestion and standard ECG monitoring in
                  massive ingestions).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: 2ND-GEN ANTIHISTAMINE DRUG CLASS */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Modern Zero-Sedation Second-Generation H1 Antihistamines
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Bilastine represents the newest generation of peripheral H1
                inverse agonists. By combining zwitterionic polarity, high
                P-glycoprotein brain efflux, and zero hepatic CYP450 metabolism,
                it achieves <strong>0.0% cerebral H1 occupancy</strong>{" "}
                alongside effortless clearance in both liver and kidney disease.
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">2nd-Gen Agent</th>
                    <th className="p-3.5">Brain H1 Occupancy</th>
                    <th className="p-3.5">Metabolism &amp; Organ Safety</th>
                    <th className="p-3.5">Administration Rule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-violet-950/15">
                    <td className="p-3.5 font-bold text-violet-300">
                      Bilastine (Bilaxten)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      ~0.0% (Zero Sedation)
                    </td>
                    <td className="p-3.5 text-emerald-300">
                      0% Metabolized &bull; Safe in Liver &amp; Kidney disease
                    </td>
                    <td className="p-3.5 text-amber-300">
                      Strictly fasting (1h before / 2h after food/juice)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-emerald-300">
                      Fexofenadine (Allegra)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      ~0.0% (Zero Sedation)
                    </td>
                    <td className="p-3.5">
                      80% Biliary/Fecal &bull; Safe in Liver disease
                    </td>
                    <td className="p-3.5 text-amber-300">
                      Plain water only (avoid fruit juices)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Levocetirizine (Xyzal)
                    </td>
                    <td className="p-3.5 font-mono">~6 – 8%</td>
                    <td className="p-3.5">
                      85% Renal &bull; Adjust in kidney disease
                    </td>
                    <td className="p-3.5">
                      With or without food (evening preferred)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Cetirizine (Zyrtec)
                    </td>
                    <td className="p-3.5 font-mono">~10 – 25%</td>
                    <td className="p-3.5">
                      70% Renal &bull; Adjust in kidney disease
                    </td>
                    <td className="p-3.5">
                      With or without food (evening preferred)
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
