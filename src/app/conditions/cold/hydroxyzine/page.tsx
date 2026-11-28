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
  HeartPulse,
  Moon,
} from "lucide-react";

export default function HydroxyzinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "cold-vs-skin" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-purple-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Piperazine Antihistamine &amp; Anxiolytic
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Hydroxyzine Hydrochloride (Atarax)
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-purple-300 font-mono">
                  2-[2-[4-[(4-chlorophenyl)phenylmethyl]piperazin-1-yl]ethoxy]ethanol
                  dihydrochloride
                </strong>
                .
              </p>

              {/* Brand & Manufacturer Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-purple-400 font-mono">
                    Primary Brand: Atarax
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    &bull; Dr. Reddy&apos;s Laboratories / UCB Pharma
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Core Strengths
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Atarax 10 mg &amp; 25 mg Tablets &bull; 10 mg/5 mL Syrup
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on potent H1 inverse agonism, subcortical
              limbic anxiolytic suppression, hepatic metabolic conversion into
              active Cetirizine, why modern clinicians avoid Hydroxyzine for
              simple colds while relying on Atarax 10 mg / 25 mg as a
              dermatological gold standard for severe skin allergies and
              pruritus, plus QTc prolongation and overdose management.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Max Adult Ceiling
              </span>
              <span className="text-xl font-bold text-purple-400 font-mono">
                100 mg / 24h
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Active Metabolite
              </span>
              <span className="text-xl font-bold text-teal-300 font-mono">
                Cetirizine (45%)
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
                  ? "bg-purple-500 text-slate-950 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Overview, Mechanism &amp; Uses</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("cold-vs-skin")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "cold-vs-skin"
                  ? "bg-purple-500 text-slate-950 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Why Avoid for Cold vs. Use for Skin Allergy?</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dosing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dosing"
                  ? "bg-purple-500 text-slate-950 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>Dosing (10/25 mg) &amp; Eligibility</span>
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
              <span>Side Effects, QTc &amp; Overdose</span>
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
              <span>Piperazine &amp; 1st-Gen Class</span>
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
                  <div className="flex items-center gap-2 text-purple-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Hydroxyzine Hydrochloride (Atarax)?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Hydroxyzine Hydrochloride—most widely prescribed under the
                    flagship brand <strong>Atarax (10 mg &amp; 25 mg)</strong>
                    —is a potent, piperazine-class{" "}
                    <strong>
                      first-generation H1 receptor antihistamine
                    </strong>{" "}
                    with distinct{" "}
                    <strong>
                      anxiolytic (anti-anxiety), sedative, and antiemetic
                    </strong>{" "}
                    properties.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Biochemically, Hydroxyzine is the metabolic parent drug of{" "}
                    <strong>Cetirizine</strong>: once ingested, hepatic alcohol
                    dehydrogenase converts roughly 45% of Hydroxyzine directly
                    into active Cetirizine. Unlike pure non-sedating
                    antihistamines, Hydroxyzine penetrates the central nervous
                    system to suppress subcortical limbic hyperexcitability,
                    making it uniquely effective at breaking the severe{" "}
                    <strong>itch-anxiety-scratch cycle</strong> in dermatology.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-purple-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapidly absorbed from the GI tract. Onset of antipruritic
                  &amp; sedative action: 15–30 minutes; peak plasma levels at 2
                  hours. Duration of itch suppression: 6–8 hours (up to 24 hours
                  for wheal-and-flare suppression via its active metabolite
                  Cetirizine). Elimination half-life: ~20 hours in adults (7
                  hours in young children; up to 29 hours in elderly).
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Mechanism of Action)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Potent H1 Receptor Inverse Agonism (Cutaneous
                        Anti-Itch &amp; Anti-Urticarial):
                      </strong>
                      Stabilizes peripheral{" "}
                      <strong>Histamine H1 receptors</strong> on dermal
                      mast-cell targets, blood vessels, and unmyelinated C-fiber
                      itch neurons in their inactive conformation—blocking
                      histamine-induced wheal formation, flare redness, and
                      burning pruritus.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Subcortical CNS Suppression (Anxiolytic &amp;
                        Sedative Action):
                      </strong>
                      Crosses the blood-brain barrier to inhibit central
                      hypothalamic H1 arousal neurons and suppress activity
                      within key subcortical regions of the limbic
                      system—calming acute anxiety and tension without acting on
                      GABA/benzodiazepine receptors (zero physical addiction).
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Weak Anticholinergic &amp; Serotonergic Modulation:
                      </strong>
                      Exhibits much weaker muscarinic M3 drying activity than
                      Diphenhydramine or Chlorpheniramine, combined with mild
                      5-HT2A antagonism that further dampens central itch
                      signaling.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-amber-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Dual-action{" "}
                  <strong>
                    potent cutaneous antipruritic (anti-itch) +
                    non-habit-forming subcortical anxiolytic
                  </strong>
                  .
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-purple-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-purple-300 block mb-1">
                    10 mg vs. 25 mg Strategy:
                  </strong>
                  <strong>Atarax 10 mg</strong> is used for mild daytime
                  itching, elderly sensitivity, or pediatric titration;{" "}
                  <strong>Atarax 25 mg</strong> is dosed at bedtime to stop
                  severe nocturnal scratching.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    QTc Prolongation Cap (100 mg/day):
                  </strong>
                  European (EMA) and global safety guidelines cap adult dosing
                  at <strong>100 mg/day</strong> (50 mg/day in elderly) due to
                  dose-dependent cardiac hERG potassium channel blockade.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Non-Addictive Anxiolytic:
                  </strong>
                  Unlike Alprazolam or Diazepam, Hydroxyzine does not bind
                  benzodiazepine receptors—making it a safe, non-habit-forming
                  option for acute situational anxiety and pruritus.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Allergy Skin Test Washout:
                  </strong>
                  Because its active metabolite (Cetirizine) lingers in skin
                  tissues, discontinue Hydroxyzine at least{" "}
                  <strong>5 to 7 days</strong> before allergy skin-prick
                  testing.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-purple-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 1. Severe Skin
                    Allergies &amp; Pruritus
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Acute and chronic spontaneous urticaria (hives &amp;
                      angioedema)
                    </li>
                    <li>
                      Atopic dermatitis (eczema) and allergic contact dermatitis
                    </li>
                    <li>Cholinergic urticaria and physical dermatographism</li>
                    <li>
                      Intense pruritus from scabies, chickenpox, drug rashes, or
                      cholestasis
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Moon className="w-3.5 h-3.5" /> 2. Anxiety &amp;
                    Pre-Operative Sedation
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Symptomatic relief of generalized anxiety and
                      psychoneurosis tension
                    </li>
                    <li>
                      Pre-operative and post-operative sedation (dental / minor
                      surgery)
                    </li>
                    <li>Adjunct in acute alcohol withdrawal agitation</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> 3. Antiemetic &amp;
                    Adjunctive Roles
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Prevention of post-operative nausea and vomiting (PONV)
                    </li>
                    <li>Motion sickness and vestibular nausea</li>
                    <li>
                      Potentiation of opioid analgesia in acute pain settings
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY AVOID FOR COLD VS USE FOR SKIN ALLERGY */}
        {/* ========================================================================= */}
        {activeTab === "cold-vs-skin" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Clinical Practice Distinction: Why Avoid Atarax for a Cold
                    Yet Prescribe It for Skin Allergies?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Although Hydroxyzine is an antihistamine, doctors{" "}
                    <strong>
                      never prescribe Atarax 10 mg or 25 mg for a common cold
                    </strong>
                    , yet dermatologists prescribe it daily as a primary
                    therapeutic for{" "}
                    <strong>hives, eczema, and allergic skin rashes</strong>.
                    This distinction stems from receptor selectivity and tissue
                    pharmacology:
                  </p>
                </div>
              </div>
            </div>

            {/* Side-by-Side Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Why Doctors Avoid Hydroxyzine for a Cold */}
              <div className="p-6 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20 font-bold">
                    Ineffective for Viral Rhinorrhea
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Weak M3 Drying + Heavy Sedation
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Avoid Hydroxyzine for a Common Cold
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      1. Weak Anticholinergic (M3) Drying Action
                    </strong>
                    <p className="text-slate-400">
                      To stop a viral runny nose, a drug must strongly block
                      parasympathetic muscarinic M3 receptors on nasal glands
                      (like Chlorpheniramine does). Hydroxyzine has{" "}
                      <strong>minimal muscarinic receptor affinity</strong>—so
                      it fails to dry up a viral cold while still causing heavy
                      drowsiness.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      2. Excessive Sedation &amp; 20-Hour Half-Life
                    </strong>
                    <p className="text-slate-400">
                      Using a subcortical anxiolytic-sedative with a 20-hour
                      half-life for a mild viral sniffle is clinically
                      inappropriate, leaving patients fatigued and impaired at
                      work or school.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      3. Unnecessary Cardiac QTc Risk for a Minor Illness
                    </strong>
                    <p className="text-slate-400">
                      Regulatory warnings restrict Hydroxyzine use to clear
                      indications where benefits outweigh its QTc-prolonging
                      potential; self-limiting viral colds do not justify that
                      risk.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Doctors Use Hydroxyzine for Skin Allergies */}
              <div className="p-6 rounded-2xl border border-purple-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/20 font-bold">
                    Dermatological Gold Standard
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Urticaria &bull; Eczema &bull; Pruritus
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Prefer Atarax for Skin Allergies
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-purple-300 block mb-1">
                      1. Dual Immediate + 24-Hour Skin Protection (Pro-Drug
                      Effect)
                    </strong>
                    <p className="text-slate-400">
                      Hydroxyzine rapidly enters dermal tissue within 20 minutes
                      to stop acute histamine itching, and then converts into{" "}
                      <strong>Cetirizine</strong>—providing sustained 24-hour
                      suppression of cutaneous wheals and eosinophil
                      infiltration.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-purple-300 block mb-1">
                      2. Breaks the Nocturnal &quot;Itch-Anxiety-Scratch&quot;
                      Cycle
                    </strong>
                    <p className="text-slate-400">
                      Severe eczema and chronic hives worsen at night due to
                      stress and subconscious scratching (which causes bleeding
                      and bacterial skin infections). Taking{" "}
                      <strong>Atarax 25 mg at night</strong> calms central
                      anxiety and ensures uninterrupted, scratch-free sleep.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-purple-300 block mb-1">
                      3. Superior Antipruritic Efficacy Over 2nd-Gen Agents
                      Alone
                    </strong>
                    <p className="text-slate-400">
                      Dermatologists routinely pair a non-sedating antihistamine
                      (like Fexofenadine or Cetirizine) in the morning with{" "}
                      <strong>Atarax 10–25 mg at bedtime</strong> for refractory
                      urticaria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: DOSING & ELIGIBILITY */}
        {/* ========================================================================= */}
        {activeTab === "dosing" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Who Can & Cannot Use Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Who CAN
                  Use Hydroxyzine (Atarax)?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults (&ge; 18 Years):</strong> For acute/chronic
                    urticaria, allergic dermatitis, severe pruritus, and
                    short-term situational anxiety (up to 100 mg/day).
                  </li>
                  <li>
                    <strong>
                      Children &amp; Adolescents (&ge; 1 Year / &gt; 6 Months):
                    </strong>{" "}
                    Weight-based syrup or 10 mg tablet dosing (2 mg/kg/day
                    divided) for severe atopic eczema or urticaria under
                    pediatric supervision.
                  </li>
                  <li>
                    <strong>Surgical / Dental Patients:</strong> Pre-medication
                    to reduce pre-procedural anxiety and post-operative nausea.
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
                      Patients with Known or Acquired QT Interval Prolongation:
                    </strong>{" "}
                    Congenital Long QT syndrome, bradycardia, hypokalemia,
                    hypomagnesemia, or recent myocardial infarction.
                  </li>
                  <li>
                    <strong>Concurrent QT-Prolonging Medications:</strong> Class
                    IA/III antiarrhythmics (Amiodarone, Sotalol), macrolides
                    (Azithromycin, Erythromycin), fluoroquinolones, or
                    antipsychotics.
                  </li>
                  <li>
                    <strong>
                      Early Pregnancy (First Trimester) &amp; Breastfeeding:
                    </strong>{" "}
                    Contraindicated in early pregnancy (teratogenic risk in
                    high-dose animal studies) and during lactation.
                  </li>
                  <li>
                    <strong>
                      Neonates &amp; Infants (&lt; 6 Months) &amp; Porphyria:
                    </strong>{" "}
                    Unsafe in neonates; porphyrinogenic in acute porphyria.
                  </li>
                  <li>
                    <strong>
                      Narrow-Angle Glaucoma &amp; Urinary Retention (BPH):
                    </strong>{" "}
                    Use with extreme caution or avoid.
                  </li>
                </ul>
              </div>
            </div>

            {/* Stratified Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-purple-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Clinical Dosing Matrix (Atarax 10 mg &amp; 25 mg Standards)
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  EMA Safety Cap: Adult Max 100 mg/day &bull; Elderly Max 50
                  mg/day
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Population / Indication</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Dosing Schedule</th>
                      <th className="p-3.5">Max 24h Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults: Skin Allergy / Urticaria / Pruritus
                      </td>
                      <td className="p-3.5 font-mono text-purple-300 font-bold">
                        25 mg (1 tab) at night
                      </td>
                      <td className="p-3.5">
                        Start 25 mg at bedtime; may increase to 25 mg TID or QID
                        if severe
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 100 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Adults: Mild Daytime Itch / Sensitivity
                      </td>
                      <td className="p-3.5 font-mono text-purple-300 font-bold">
                        10 mg (1 tab)
                      </td>
                      <td className="p-3.5">Every 6 – 8 hours PRN</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 100 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Adults: Symptomatic Anxiety / Tension
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        25 mg – 50 mg
                      </td>
                      <td className="p-3.5">
                        2 to 3 times daily (or 50 mg at bedtime)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 100 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (&le; 40 kg): Pruritus / Urticaria
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        0.5 – 0.6 mg/kg/dose (Syrup or 10 mg)
                      </td>
                      <td className="p-3.5">Divided every 6 – 8 hours</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 2 mg/kg/day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-amber-200">
                        Elderly (&ge; 65 Years) &amp; Hepatic Impairment
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        10 mg – 25 mg
                      </td>
                      <td className="p-3.5">
                        Once or twice daily (reduce dose by 33–50% in
                        liver/renal disease)
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        Strict Max 50 mg / day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS, QTc & OVERDOSE */}
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
                  <strong className="text-purple-300 block">
                    1. Central Nervous System Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Drowsiness, somnolence, and lethargy (usually resolves
                      after several days)
                    </li>
                    <li>
                      Dizziness, headache, and impaired motor coordination
                    </li>
                    <li>
                      Involuntary motor tremor (rare, typically at high doses)
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    2. Mild Anticholinergic &amp; GI Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Xerostomia (dry mouth)</li>
                    <li>Mild blurred vision or dry eyes</li>
                    <li>Constipation or mild epigastric discomfort</li>
                    <li>Urinary hesitancy in elderly men</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-900/50 space-y-2">
                  <strong className="text-rose-300 block">
                    3. Cardiac Electrophysiology Warning
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Dose-dependent <strong>QTc interval prolongation</strong>
                    </li>
                    <li>Palpitations or sinus tachycardia</li>
                    <li>
                      Risk of Torsades de Pointes arrhythmia in predisposed
                      patients
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
                    Exceeding the 100 mg/day ceiling or ingesting an acute
                    overdose of Hydroxyzine produces profound{" "}
                    <strong>CNS Depression (Hypersedation / Coma)</strong>,{" "}
                    <strong>
                      Paradoxical Anticholinergic Delirium &amp; Seizures
                    </strong>
                    , and{" "}
                    <strong>
                      hERG Potassium Channel Blockade (Torsades de Pointes
                      Arrhythmia)
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  1. Profound CNS Depression &amp; Convulsions
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Initial extreme stupor, respiratory depression, and coma; in
                  children or massive ingestions, paradoxical CNS excitation
                  leads to tremors, hallucinations, and generalized tonic-clonic
                  seizures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" /> 2. QTc Prolongation
                  &amp; Torsades de Pointes
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  High plasma concentrations block cardiac IKr (hERG) potassium
                  channels, delaying ventricular repolarization (QTc &gt; 500
                  ms) and triggering polymorphic ventricular tachycardia
                  (Torsades de Pointes) and hypotension.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  3. Anticholinergic Signs
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Dilated pupils (mydriasis), severe dry mucous membranes,
                  flushing, urinary retention, and paralytic ileus.
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
                  <strong>1. Airway &amp; Decontamination:</strong> Protect
                  airway; administer activated charcoal if within 1–2 hours of
                  ingestion (do not induce vomiting).{" "}
                  <strong>2. Cardiac &amp; Electrolyte Stabilization:</strong>{" "}
                  Continuous 12-lead ECG telemetry; correct potassium and
                  magnesium aggressively, and administer{" "}
                  <strong>IV Magnesium Sulfate (2 g)</strong> immediately if
                  Torsades de Pointes occurs.{" "}
                  <strong>3. Seizure &amp; Hypotension Control:</strong> IV
                  Benzodiazepines for convulsions; IV isotonic fluids and
                  Norepinephrine for hypotension (avoid Epinephrine). Note:
                  Dialysis is ineffective due to high tissue protein binding.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: PIPERAZINE & 1ST-GEN DRUG CLASS */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Piperazine-Class First-Generation H1 Antihistamines (The Parent
                of Cetirizine)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hydroxyzine belongs to the <strong>Piperazine subclass</strong>{" "}
                of first-generation H1 antihistamines (alongside Meclizine and
                Cyclizine). Structurally, replacing Hydroxyzine&apos;s terminal
                alcohol group with a negatively charged carboxylic acid group
                creates <strong>Cetirizine</strong>—preventing blood-brain
                barrier entry and launching the entire second generation of
                non-sedating antihistamines.
              </p>
            </div>

            {/* Piperazine Evolutionary Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Piperazine Agent</th>
                    <th className="p-3.5">Generation &amp; BBB Entry</th>
                    <th className="p-3.5">Key Pharmacological Action</th>
                    <th className="p-3.5">Primary Clinical Niche</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-purple-950/15">
                    <td className="p-3.5 font-bold text-purple-300">
                      Hydroxyzine (Atarax)
                    </td>
                    <td className="p-3.5 font-mono">
                      1st-Gen &bull; High CNS Entry
                    </td>
                    <td className="p-3.5">
                      H1 Inverse Agonist + Subcortical Anxiolytic
                    </td>
                    <td className="p-3.5">
                      Severe skin pruritus, chronic hives, situational anxiety
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Cetirizine (Zyrtec)
                    </td>
                    <td className="p-3.5 font-mono">
                      2nd-Gen Metabolite &bull; Low CNS Entry
                    </td>
                    <td className="p-3.5">Selective Peripheral H1 Blocker</td>
                    <td className="p-3.5">
                      Daytime allergic rhinitis, sneezing, and mild urticaria
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Levocetirizine (Xyzal)
                    </td>
                    <td className="p-3.5 font-mono">
                      2nd-Gen R-Enantiomer &bull; Minimal CNS
                    </td>
                    <td className="p-3.5">
                      2x Higher H1 Affinity Peripheral Blocker
                    </td>
                    <td className="p-3.5">
                      Perennial allergic rhinitis and chronic idiopathic
                      urticaria
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-300">
                      Meclizine / Cyclizine
                    </td>
                    <td className="p-3.5 font-mono">
                      1st-Gen &bull; Vestibular CNS Entry
                    </td>
                    <td className="p-3.5">
                      H1 + Vestibular M1 Anticholinergic
                    </td>
                    <td className="p-3.5">
                      Motion sickness, labyrinthitis, and inner-ear vertigo
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
