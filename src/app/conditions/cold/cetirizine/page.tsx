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
  Droplets,
  Wind,
} from "lucide-react";

export default function CetirizinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "clinical-shift" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

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
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              2nd-Generation Piperazine Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Cetirizine Hydrochloride
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-teal-300 font-mono">
                  (±)-[2-[4-[(4-chlorophenyl)phenylmethyl]-1-piperazinyl]ethoxy]acetic
                  acid dihydrochloride
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-teal-400 font-mono">
                    Cetirizine HCl
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / USAN / BAN) &bull; Active Metabolite of Hydroxyzine
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Zyrtec, Cetzine, Alerid, Okacet, Reactine
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on selective peripheral H1 receptor inverse
              agonism, zwitterionic blood-brain barrier exclusion, non-CYP450
              renal excretion, why modern physicians sometimes favor newer
              non-sedating 2nd-gen options (Bilastine/Fexofenadine) yet rely on
              Cetirizine for urticaria and pregnancy, and the FDA
              withdrawal-pruritus safety warning.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Adult Dose
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                10 mg Once Daily
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Onset &amp; Duration
              </span>
              <span className="text-xl font-bold text-cyan-300 font-mono">
                20 min &bull; 24 Hours
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
              onClick={() => setActiveTab("clinical-shift")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "clinical-shift"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Why Avoid vs. When Doctors Prefer It</span>
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
              <span>Side Effects, FDA Warning &amp; Overdose</span>
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
                  <div className="flex items-center gap-2 text-teal-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Cetirizine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Cetirizine Hydrochloride is a potent, fast-acting{" "}
                    <strong>second-generation H1 receptor antihistamine</strong>
                    . Chemically, it is the active carboxylated human metabolite
                    of the first-generation antihistamine{" "}
                    <strong>Hydroxyzine (Atarax)</strong>.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    By replacing Hydroxyzine&apos;s terminal alcohol group with
                    a negatively charged carboxylic acid group, Cetirizine
                    becomes a polar <strong>zwitterion</strong> at physiological
                    pH. This limits its ability to cross the blood-brain barrier
                    and eliminates significant muscarinic anticholinergic
                    activity—delivering rapid, 24-hour peripheral allergy
                    control without dry mouth, urinary retention, or heavy
                    sedation.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapid GI absorption; onset within 20 minutes (50% of patients)
                  to 60 minutes (95%). Peak plasma concentration (Tmax): ~1 hour
                  (delayed by 1.7 hours with food, though total absorption is
                  unaffected). Not metabolized by hepatic CYP450 enzymes; ~70%
                  excreted unchanged in urine. Half-life: 8.3 hours.
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
                        1. Selective Peripheral H1 Receptor Inverse Agonism:
                      </strong>
                      Binds with high selectivity to peripheral{" "}
                      <strong>Histamine H1 G-protein coupled receptors</strong>{" "}
                      on vascular endothelial cells, bronchial smooth muscle,
                      and sensory nerve terminals, stabilizing them in their
                      inactive state. This blocks histamine-mediated
                      vasodilation, vascular permeability (nasal edema and skin
                      hives), and pruritus (sneezing and itching).
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Late-Phase Eosinophil &amp; Cytokine Inhibition:
                      </strong>
                      Beyond blocking histamine, Cetirizine inhibits eosinophil
                      chemotaxis, reduces ICAM-1 adhesion molecule expression,
                      and blunts inflammatory cytokine release (IL-4, IL-8)
                      during the late-phase allergic response.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Zwitterionic &amp; P-Glycoprotein Brain Exclusion:
                      </strong>
                      Polar molecular charge and active efflux by blood-brain
                      barrier <strong>P-glycoprotein (P-gp)</strong> pumps keep
                      cerebral H1 receptor occupancy low (~10–25% at 10 mg),
                      minimizing CNS sedation compared to 1st-generation agents.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Rapid-onset (20 min), 24-hour{" "}
                  <strong>
                    peripheral H1 inverse agonism + anti-inflammatory eosinophil
                    suppression
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
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Fastest 2nd-Gen Onset:
                  </strong>
                  Starts working in <strong>20 minutes</strong>—significantly
                  faster than Loratadine or Fexofenadine (which take 1–2 hours),
                  making it ideal for sudden allergic flare-ups.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Zero Hepatic CYP450 Interactions:
                  </strong>
                  Because it bypasses liver cytochrome P450 metabolism,
                  Cetirizine does not interact with macrolides (Azithromycin),
                  antifungals (Ketoconazole), or statins.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    Dose at Bedtime If Sensitive:
                  </strong>
                  While classified as &quot;non-sedating,&quot; Cetirizine
                  causes dose-dependent drowsiness in{" "}
                  <strong>~11% (at 5 mg) to 14% (at 10 mg)</strong> of adults.
                  Taking it at night turns mild drowsiness into an advantage.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Taper After Long-Term Daily Use:
                  </strong>
                  Per FDA safety advisories, stopping daily Cetirizine abruptly
                  after months or years of continuous use can trigger severe
                  rebound whole-body itching (withdrawal pruritus).
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
                    <Wind className="w-3.5 h-3.5" /> 1. Allergic Rhinitis &amp;
                    Rhinorrhea
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Seasonal allergic rhinitis (hay fever from tree, grass,
                      and weed pollens)
                    </li>
                    <li>
                      Perennial allergic rhinitis (dust mites, pet dander, mold
                      spores)
                    </li>
                    <li>
                      Paroxysmal sneezing bursts, nasal itching, and clear
                      allergic rhinorrhea
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 2. Acute &amp; Chronic
                    Urticaria (Hives)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      First-line daily maintenance for Chronic Spontaneous
                      Urticaria (CSU)
                    </li>
                    <li>Acute hives, angioedema, and dermatographism</li>
                    <li>
                      Pruritic allergic skin rashes, insect bite reactions, and
                      atopic eczema itch
                    </li>
                    <li>
                      FDA-approved IV formulation (10 mg) for acute urticaria in
                      emergency settings
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" /> 3. Ocular &amp;
                    Combination Therapies
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Allergic conjunctivitis (oral tablets or 0.24% ophthalmic
                      solution)
                    </li>
                    <li>
                      Combined with Pseudoephedrine (Zyrtec-D) for severe
                      allergic nasal blockage
                    </li>
                    <li>
                      Combined with Montelukast for concurrent allergic rhinitis
                      and asthma
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY AVOID VS WHEN DOCTORS PREFER IT */}
        {/* ========================================================================= */}
        {activeTab === "clinical-shift" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Clinical Nuance: Why Doctors Sometimes Avoid Cetirizine Yet
                    Still Rely on It in Key Cases
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Cetirizine sits right on the boundary between classic
                    sedating antihistamines and newer zero-sedation agents
                    (Fexofenadine, Bilastine, Loratadine). Because of this
                    unique profile, physicians selectively avoid it in certain
                    daytime or viral cases while actively preferring it in other
                    clinical scenarios:
                  </p>
                </div>
              </div>
            </div>

            {/* Side-by-Side Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* When Doctors Avoid Cetirizine */}
              <div className="p-6 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20 font-bold">
                    When Newer Agents or 1st-Gen Are Chosen Instead
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    ~14% Somnolence Rate
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Avoid Cetirizine in Certain Cases
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      1. High-Alert Daytime Professions (Drivers, Pilots,
                      Students)
                    </strong>
                    <p className="text-slate-400">
                      Unlike Fexofenadine or Bilastine (0% brain H1 occupancy),
                      Cetirizine still crosses the blood-brain barrier in small
                      amounts, causing drowsiness in{" "}
                      <strong>14% of patients</strong> (vs. 6% on placebo). For
                      daytime workers or exam-taking students, doctors prefer
                      Fexofenadine or Bilastine.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      2. Simple Viral Common Cold (No Anticholinergic Drying)
                    </strong>
                    <p className="text-slate-400">
                      Because Cetirizine lacks muscarinic M3 anticholinergic
                      blockade, it does{" "}
                      <strong>
                        not dry up a non-allergic viral runny nose
                      </strong>
                      . For a pure viral cold, doctors prefer saline sprays or
                      short-term Chlorpheniramine.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      3. Moderate-to-Severe Renal Impairment &amp; Long-Term
                      Rebound Itch
                    </strong>
                    <p className="text-slate-400">
                      Because 70% of Cetirizine is cleared unchanged by the
                      kidneys, it accumulates in kidney disease (requiring dose
                      reduction). Additionally, chronic daily users risk severe
                      rebound itching upon abrupt discontinuation.
                    </p>
                  </div>
                </div>
              </div>

              {/* When Doctors Prefer Cetirizine */}
              <div className="p-6 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20 font-bold">
                    High Potency &amp; Proven Safety Niches
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Urticaria &bull; Pregnancy &bull; Liver Disease
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Still Prefer Cetirizine in Key Cases
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      1. Acute &amp; Chronic Urticaria (Strongest Skin Wheal
                      Suppression)
                    </strong>
                    <p className="text-slate-400">
                      In dermatological histamine-wheal studies, Cetirizine
                      consistently outperforms Loratadine and Fexofenadine in
                      speed (20 min) and potency of skin hive suppression, and
                      its mild evening sedation helps itchy patients sleep.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      2. First-Line Antihistamine in Pregnancy (ACOG / ACAAI
                      Recommended)
                    </strong>
                    <p className="text-slate-400">
                      Backed by decades of human safety data, major obstetrics
                      and allergy societies (ACOG-ACAAI) explicitly recommend{" "}
                      <strong>Cetirizine (or Loratadine)</strong> as the
                      preferred antihistamine when allergy treatment is required
                      during pregnancy.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-teal-300 block mb-1">
                      3. Patients on Multiple Medications or With Liver Disease
                    </strong>
                    <p className="text-slate-400">
                      Because Cetirizine does not rely on hepatic CYP450 enzymes
                      for activation (unlike Loratadine or Ebastine), it works
                      reliably in liver disease without CYP drug interactions.
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
                  Use Cetirizine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Children (&ge; 6 Years):</strong>{" "}
                    Standard 5 mg to 10 mg once daily for allergic rhinitis and
                    urticaria.
                  </li>
                  <li>
                    <strong>
                      Young Children &amp; Infants (&ge; 6 Months):
                    </strong>{" "}
                    Liquid syrup/drops (2.5 mg once or twice daily) approved for
                    perennial allergic rhinitis and chronic urticaria.
                  </li>
                  <li>
                    <strong>Pregnant Patients (When Clinically Needed):</strong>{" "}
                    Recommended by ACOG-ACAAI as a preferred 2nd-generation
                    antihistamine in pregnancy.
                  </li>
                  <li>
                    <strong>
                      Breastfeeding Mothers (Occasional Low-Dose Use):
                    </strong>{" "}
                    Occasional small doses are considered acceptable, though
                    prolonged high doses may cause mild infant drowsiness.
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
                      Hypersensitivity to Cetirizine or Hydroxyzine:
                    </strong>{" "}
                    Strictly contraindicated in anyone allergic to Hydroxyzine
                    (Atarax), as Cetirizine is its direct metabolite.
                  </li>
                  <li>
                    <strong>
                      End-Stage Renal Disease (CrCl &lt; 10 mL/min) &amp;
                      Hemodialysis:
                    </strong>{" "}
                    Contraindicated or requires strict dose reduction (5 mg once
                    daily or every other day) due to renal accumulation.
                  </li>
                  <li>
                    <strong>Infants Under 6 Months of Age:</strong> Safety and
                    efficacy have not been established.
                  </li>
                  <li>
                    <strong>Concurrent CNS Depressants / Alcohol:</strong> Avoid
                    combining with alcohol, opioids, benzodiazepines, or
                    gabapentinoids due to additive drowsiness.
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
                    Age &amp; Organ-Adjusted Clinical Dosing Matrix
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Tablets: 5 mg, 10 mg &bull; Syrup: 5 mg / 5 mL
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age / Clinical Group</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Frequency</th>
                      <th className="p-3.5">Max 24h Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Infants (6 – 11 Months)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        2.5 mg (2.5 mL syrup)
                      </td>
                      <td className="p-3.5">Once daily</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 2.5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Young Children (1 – 5 Years)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        2.5 mg (2.5 mL syrup)
                      </td>
                      <td className="p-3.5">Once or twice daily</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Children (&ge; 6 Years)
                      </td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        5 mg or 10 mg (1 tablet)
                      </td>
                      <td className="p-3.5">
                        Once daily (evening preferred if drowsy)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 10 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-amber-200">
                        Moderate Renal / Hepatic Impairment (CrCl 11–31 mL/min)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        5 mg (1/2 tablet)
                      </td>
                      <td className="p-3.5">Once daily</td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        Max 5 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-purple-200">
                        Refractory Chronic Urticaria (Specialist Off-Label)
                      </td>
                      <td className="p-3.5 font-mono text-purple-300 font-bold">
                        10 mg – 20 mg
                      </td>
                      <td className="p-3.5">
                        Up to 2–4x standard dose per EAACI/GA²LEN guidelines
                      </td>
                      <td className="p-3.5 font-mono text-purple-300 font-bold">
                        Up to 40 mg / day (Monitored)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS, FDA WARNING & OVERDOSE */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* FDA Drug Safety Communication Box */}
            <div className="p-6 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                      FDA Safety Communication (May 2025)
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-1.5">
                    Severe Rebound Itching (Pruritus) After Stopping Long-Term
                    Daily Use
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    The U.S. FDA requires a label warning regarding rare but
                    severe, widespread itching (pruritus) occurring within{" "}
                    <strong>
                      1 to 3 days of discontinuing Cetirizine (or
                      Levocetirizine)
                    </strong>{" "}
                    in patients who took the medication daily for several months
                    or years. Restarting the medication and gradually tapering
                    the dose resolves the withdrawal reaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Side Effects */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Info className="w-5 h-5 text-teal-400" />
                Common Side Effects (Therapeutic Doses)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-teal-300 block">
                    1. Central Nervous System Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Somnolence / drowsiness (~14% at 10 mg vs. 6% placebo)
                    </li>
                    <li>Fatigue, tiredness, and mild headache</li>
                    <li>Dizziness or lightheadedness</li>
                    <li>Mild restlessness or irritability in young children</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    2. Mucosal &amp; Upper Respiratory Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Mild xerostomia (dry mouth — ~5% incidence)</li>
                    <li>Pharyngitis (dry or scratchy throat)</li>
                    <li>
                      Occasional mild epistaxis (nosebleed) in pediatric syrup
                      users
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Gastrointestinal Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Mild abdominal discomfort or nausea</li>
                    <li>Diarrhea or mild constipation</li>
                    <li>
                      Does NOT cause significant weight gain or QT prolongation
                      at standard doses
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
                    Cetirizine has a wide therapeutic safety margin compared to
                    first-generation antihistamines. However, acute massive
                    ingestions (e.g., 150 mg to 300+ mg—15 to 30 tablets)
                    overwhelm P-glycoprotein efflux pumps, flooding central H1
                    and muscarinic receptors.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. Biphasic CNS Excitation &rarr; Somnolence
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  In documented overdoses (~180 mg), patients initially exhibit{" "}
                  <strong>restlessness, agitation, and irritability</strong>{" "}
                  (especially children), followed rapidly by profound
                  drowsiness, lethargy, and stupor.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. Mild-to-Moderate Anticholinergic Signs
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Sinus tachycardia, dilated pupils (mydriasis), dry flushed
                  skin, urinary retention, and headache. Severe arrhythmias and
                  seizures are rare unless co-ingested with other drugs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>No specific antidote exists</strong>. Provide
                  symptomatic and supportive care (activated charcoal if within
                  1–2 hours, ECG monitoring, IV fluids). Note: Hemodialysis is{" "}
                  <strong>ineffective</strong> because Cetirizine is 93%
                  plasma-protein bound.
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
                Second-Generation H1 Receptor Antihistamines
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Second-generation antihistamines were engineered with polar,
                hydrophilic side chains so they cannot easily cross the lipid
                blood-brain barrier and remain selective for peripheral H1
                receptors without blocking acetylcholine, serotonin, or
                alpha-adrenergic receptors. Within this class,{" "}
                <strong>Cetirizine</strong> is the fastest-acting and most
                potent anti-urticarial agent, while{" "}
                <strong>Levocetirizine</strong> is its purified active
                (R)-enantiomer.
              </p>
            </div>

            {/* 2nd-Gen Head-to-Head Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">2nd-Gen Agent</th>
                    <th className="p-3.5">Onset of Action</th>
                    <th className="p-3.5">Drowsiness Risk</th>
                    <th className="p-3.5">Elimination Route &amp; Key Pearl</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-teal-950/15">
                    <td className="p-3.5 font-bold text-teal-300">
                      Cetirizine (Zyrtec)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      20 – 60 min (Fastest)
                    </td>
                    <td className="p-3.5 text-amber-300">Low-to-Mild (~14%)</td>
                    <td className="p-3.5">
                      70% Renal unchanged &bull; Best for hives &amp; pregnancy
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Levocetirizine (Xyzal)
                    </td>
                    <td className="p-3.5 font-mono">30 – 60 min</td>
                    <td className="p-3.5 text-amber-300">Low (~6–8%)</td>
                    <td className="p-3.5">
                      Active R-enantiomer (5 mg equals 10 mg cetirizine)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-emerald-300">
                      Fexofenadine (Allegra)
                    </td>
                    <td className="p-3.5 font-mono">60 – 120 min</td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      Zero (0% BBB entry)
                    </td>
                    <td className="p-3.5">
                      Fecal/Biliary &bull; Avoid fruit juices (blocks
                      absorption)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-indigo-300">
                      Bilastine (Bilaxten)
                    </td>
                    <td className="p-3.5 font-mono">30 – 60 min</td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      Zero (0% BBB entry)
                    </td>
                    <td className="p-3.5">
                      Unchanged excretion &bull; Take strictly on empty stomach
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-purple-300">
                      Loratadine (Claritin)
                    </td>
                    <td className="p-3.5 font-mono">1 – 3 hours</td>
                    <td className="p-3.5 text-emerald-400">Minimal (~2–4%)</td>
                    <td className="p-3.5">
                      Hepatic CYP3A4/2D6 &bull; Safe daytime &amp; pregnancy
                      option
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
