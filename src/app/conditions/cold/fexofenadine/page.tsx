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

export default function FexofenadinePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "levocet-switch-combo" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-emerald-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

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
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull; Truly
              Non-Sedating 2nd-Gen Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Fexofenadine Hydrochloride (Allegra)
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-emerald-300 font-mono">
                  (±)-4-[1-hydroxy-4-[4-(hydroxydiphenylmethyl)-1-piperidinyl]-butyl]-α,α-dimethyl
                  benzeneacetic acid hydrochloride
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-emerald-400 font-mono">
                    Fexofenadine Hydrochloride
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (USP / IP Official Monohydrochloride Salt) &bull; Active
                    Metabolite of Terfenadine
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Allegra (120/180 mg), Telfast, Fexova &bull; Combos:
                    Allegra-M, Montair-FX
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on selective peripheral H1 receptor inverse
              agonism with zero blood-brain barrier penetration (pilot &amp;
              driver approved), non-hepatic biliary/fecal excretion, why
              physicians switch patients to Fexofenadine + Montelukast Sodium
              (120 mg + 10 mg) when Levocetirizine causes breakthrough
              allergies, drowsiness, or rebound itching, and the OATP1A2
              fruit-juice absorption interaction.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Adult Dose
              </span>
              <span className="text-xl font-bold text-emerald-400 font-mono">
                120 mg / 180 mg OD
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Brain H1 Occupancy
              </span>
              <span className="text-xl font-bold text-cyan-300 font-mono">
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
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Overview, Mechanism &amp; Uses</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("levocet-switch-combo")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "levocet-switch-combo"
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Switch From Levocetirizine &amp; + Montelukast</span>
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
              <span>Side Effects, Juice Rule &amp; Overdose</span>
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
                  <div className="flex items-center gap-2 text-emerald-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Fexofenadine Hydrochloride?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Fexofenadine Hydrochloride (marketed globally as{" "}
                    <strong>Allegra</strong> or <strong>Telfast</strong>) is a
                    selective, piperidine-class{" "}
                    <strong>second-generation H1 receptor antihistamine</strong>
                    . Chemically, it is the active carboxylic acid metabolite of
                    Terfenadine, engineered to retain full peripheral
                    anti-allergic potency while completely eliminating cardiac
                    hERG potassium-channel toxicity and central sedation.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Among all antihistamines, Fexofenadine is considered the
                    benchmark{" "}
                    <strong>&quot;truly non-sedating&quot; agent</strong>: PET
                    neuroimaging studies prove it occupies{" "}
                    <strong>0.0% of central brain H1 receptors</strong> even at
                    supratherapeutic doses, making it officially approved by
                    aviation and transport authorities (FAA / ICAO) for
                    commercial pilots, air traffic controllers, and
                    heavy-machinery operators.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-emerald-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapid oral absorption via intestinal OATP1A2 uptake
                  transporters; onset within 60 minutes, peak plasma
                  concentration (Tmax) at 1–2.6 hours, and full 24-hour
                  duration. Minimal metabolism (~5% hepatic); ~80% excreted
                  unchanged in feces via biliary P-glycoprotein transport and
                  ~11% in urine. Terminal elimination half-life: 14.4 hours.
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
                        1. Selective Peripheral H1 Receptor Inverse Agonism:
                      </strong>
                      Competitively binds to and stabilizes peripheral{" "}
                      <strong>Histamine H1 receptors</strong> on nasal mucosal
                      blood vessels, conjunctival capillaries, dermal mast-cell
                      targets, and sensory C-fiber itch nerves in their inactive
                      conformation. Halts histamine-driven vasodilation, tissue
                      swelling, sneezing, rhinorrhea, and urticarial wheals.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Strict Blood-Brain Barrier Exclusion (Zero CNS
                        Sedation):
                      </strong>
                      Because Fexofenadine is a large, hydrophilic zwitterion
                      actively pumped out of cerebral capillaries by{" "}
                      <strong>P-glycoprotein (P-gp)</strong> efflux
                      transporters, it cannot enter the brain—producing zero
                      drowsiness, zero psychomotor impairment, and zero
                      anticholinergic dry mouth.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Anti-Inflammatory Mediator Attenuation:
                      </strong>
                      At therapeutic concentrations, reduces mast-cell mediator
                      release, eosinophil chemotaxis, and epithelial ICAM-1
                      expression during prolonged allergen exposure.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  24-hour{" "}
                  <strong>
                    pure peripheral H1 histamine blockade with zero central
                    sedation or anticholinergic effects
                  </strong>
                  .
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
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Take ONLY With Plain Water:
                  </strong>
                  Never swallow Fexofenadine with{" "}
                  <strong>orange, apple, or grapefruit juice</strong>. Fruit
                  juices inhibit intestinal OATP1A2 uptake transporters,
                  slashing drug absorption by <strong>36% to 40%</strong> and
                  making the tablet seem ineffective.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Separate From Antacids by 2 Hours:
                  </strong>
                  Aluminum- and magnesium-containing antacids (e.g., Gelusil,
                  Digene) bind Fexofenadine in the gut and reduce
                  bioavailability by ~40%. Space them at least 2 hours apart.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-emerald-300 block mb-1">
                    Hydrochloride Salt Clarification:
                  </strong>
                  Fexofenadine is chemically formulated as{" "}
                  <strong>Fexofenadine Hydrochloride</strong> (monohydrochloride
                  salt)—unlike Levocetirizine, which is a{" "}
                  <em>Dihydrochloride</em> salt.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Safe in Liver &amp; Kidney Impairment:
                  </strong>
                  Because 80% is cleared unchanged in feces via bile,
                  Fexofenadine requires{" "}
                  <strong>no dose reduction in liver disease</strong> and
                  minimal adjustment in renal disease.
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
                    <Wind className="w-3.5 h-3.5" /> 1. Seasonal &amp; Perennial
                    Allergic Rhinitis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Daytime hay fever (pollen, ragweed, grass allergies)
                    </li>
                    <li>
                      Year-round dust mite, mold, and pet dander allergies
                    </li>
                    <li>
                      Sneezing, clear watery rhinorrhea, and itchy
                      nose/palate/throat
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
                      180 mg once-daily maintenance for chronic idiopathic
                      urticaria
                    </li>
                    <li>
                      Reduces pruritus severity and number of raised skin wheals
                    </li>
                    <li>
                      Safe long-term daily skin allergy control without
                      withdrawal itch
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> 3. High-Alert
                    Occupations &amp; Combos
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Preferred daytime allergy drug for pilots, surgeons,
                      drivers, and students
                    </li>
                    <li>
                      Combined with Montelukast (120 mg + 10 mg) for severe
                      allergic rhinitis + congestion
                    </li>
                    <li>
                      Combined with Pseudoephedrine (Allegra-D) for acute sinus
                      blockage
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY SWITCH FROM LEVOCETIRIZINE + MONTELUKAST COMBO */}
        {/* ========================================================================= */}
        {activeTab === "levocet-switch-combo" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                    Clinical Upgrade Strategy &bull; e.g., Allegra-M,
                    Montair-FX, Fexona-M
                  </span>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Why Doctors Switch From Levocetirizine to Fexofenadine
                    Hydrochloride + Montelukast Sodium
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    When patients experience persistent breakthrough allergies
                    (&quot;getting even more allergy symptoms after regular
                    tablets&quot;), daytime brain fog, or severe rebound itching
                    after stopping Levocetirizine, ENT specialists and
                    allergists routinely step up therapy to{" "}
                    <strong>
                      Fexofenadine Hydrochloride (120 mg) + Montelukast Sodium
                      (10 mg)
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Clinical Reasons for Switching */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                  Reason 1 &bull; Receptor Tolerance &amp; Breakthrough
                  Allergies
                </span>
                <h3 className="text-base font-bold text-white">
                  Overcoming Antihistamine Tachyphylaxis &amp; Unblocked
                  Leukotrienes
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Taking Levocetirizine alone only blocks{" "}
                  <strong>Histamine H1 receptors</strong>. During ongoing
                  allergen exposure, eosinophils ramp up production of{" "}
                  <strong>Cysteinyl Leukotrienes (LTC4, LTD4, LTE4)</strong>
                  —causing worsening nasal blockage, post-nasal drip, and sinus
                  pressure despite daily antihistamine pills.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Switching to a different chemical scaffold (
                  <strong>Piperidine Fexofenadine</strong> instead of Piperazine
                  Levocetirizine) while adding{" "}
                  <strong>Montelukast (10 mg)</strong> blocks <em>both</em>{" "}
                  histamine and leukotriene inflammatory pathways
                  simultaneously—producing superior reductions in Total Nasal
                  Symptom Scores (TNSS).
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  Reason 2 &bull; Avoiding Rebound Pruritus &amp; Sedation
                </span>
                <h3 className="text-base font-bold text-white">
                  Zero Withdrawal Itching &amp; Zero Daytime Brain Fog
                </h3>
                <ul className="space-y-2 text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Eliminates Rebound Pruritus:</strong> Unlike
                    Cetirizine and Levocetirizine (which carry FDA warnings for
                    severe rebound itching upon discontinuation), Fexofenadine
                    does <strong>not</strong> trigger withdrawal pruritus when
                    stopped.
                  </li>
                  <li>
                    <strong>Eliminates Residual Drowsiness:</strong> Even 5 mg
                    Levocetirizine causes fatigue in ~6–8% of patients;
                    Fexofenadine has <strong>0% brain penetration</strong>,
                    keeping patients sharp all day.
                  </li>
                  <li>
                    <strong>Protects Lower Airways:</strong> Montelukast
                    prevents allergic rhinitis from progressing into bronchial
                    wheezing or cough-variant asthma.
                  </li>
                </ul>
              </div>
            </div>

            {/* Salt Nomenclature Clarification Box */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-start gap-3 text-xs text-slate-300">
              <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">
                  Pharmaceutical Salt Clarification: Fexofenadine Hydrochloride
                  (Not Dihydrochloride)
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  While <em>Levocetirizine</em> carries two basic piperazine
                  nitrogens and is formulated as{" "}
                  <strong>Levocetirizine Dihydrochloride</strong>,{" "}
                  <em>Fexofenadine</em> has a single piperidine nitrogen and is
                  universally formulated as{" "}
                  <strong>Fexofenadine Hydrochloride</strong> (120 mg) paired
                  with <strong>Montelukast Sodium</strong> (10 mg).
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
                  Use Fexofenadine?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    120 mg once daily (or 60 mg BID) for allergic rhinitis; 180
                    mg once daily for chronic urticaria.
                  </li>
                  <li>
                    <strong>Children Aged 2 to 11 Years:</strong> Oral
                    suspension (30 mg twice daily for &ge; 2y; 15 mg twice daily
                    for 6 months to &lt; 2y in chronic hives).
                  </li>
                  <li>
                    <strong>Commercial Pilots, Drivers &amp; Surgeons:</strong>{" "}
                    Approved for safety-critical duties due to zero psychomotor
                    sedation.
                  </li>
                  <li>
                    <strong>Patients with Hepatic (Liver) Disease:</strong> Safe
                    at full standard doses without adjustment.
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
                    <strong>Known Hypersensitivity to Fexofenadine:</strong>{" "}
                    Contraindicated in patients with prior allergic reactions to
                    any tablet ingredient.
                  </li>
                  <li>
                    <strong>
                      Children Under 12 Years (for 120 mg / 180 mg Tablets &amp;
                      Montelukast Combos):
                    </strong>{" "}
                    High-strength adult tablets and Fexofenadine + Montelukast
                    combos are not approved under age 12.
                  </li>
                  <li>
                    <strong>
                      Severe Renal Impairment (CrCl &lt; 30 mL/min):
                    </strong>{" "}
                    Requires lower starting dose (60 mg once daily in adults; 30
                    mg once daily in children) due to reduced renal clearance.
                  </li>
                  <li>
                    <strong>Pregnancy &amp; Breastfeeding:</strong> Use only if
                    clearly needed when Cetirizine or Loratadine are unsuitable
                    (limited human pregnancy registry data compared to
                    Cetirizine).
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
                    Clinical Dosing Matrix by Indication &amp; Formulation
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Administer strictly with plain water (No fruit juices)
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Indication / Population</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Frequency</th>
                      <th className="p-3.5">Max 24h Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12y): Allergic Rhinitis
                      </td>
                      <td className="p-3.5 font-mono text-emerald-300 font-bold">
                        120 mg (or 60 mg BID)
                      </td>
                      <td className="p-3.5">Once daily with water</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 180 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12y): Chronic Urticaria
                      </td>
                      <td className="p-3.5 font-mono text-emerald-300 font-bold">
                        180 mg (1 tablet)
                      </td>
                      <td className="p-3.5">Once daily with water</td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 180 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-teal-200">
                        Adult Combo: Fexofenadine + Montelukast (&ge; 12–15y)
                      </td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        120 mg + 10 mg (1 FDC tab)
                      </td>
                      <td className="p-3.5">
                        Once daily in the evening with water
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        1 tablet / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (2 – 11 Years): Suspension (30 mg/5 mL)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        30 mg (5 mL suspension)
                      </td>
                      <td className="p-3.5">Twice daily (every 12 hours)</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 60 mg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-amber-200">
                        Adults with Impaired Renal Function
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        60 mg
                      </td>
                      <td className="p-3.5">Once daily starting dose</td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        Max 60 mg / day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS, JUICE RULE & OVERDOSE */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Fruit Juice & Antacid Interaction Banner */}
            <div className="p-6 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white mb-1.5">
                    Critical Drug-Food Interaction: Why Fruit Juices &amp;
                    Antacids Block Fexofenadine
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Unlike most drugs, Fexofenadine relies on intestinal{" "}
                    <strong>
                      OATP1A2 (Organic Anion Transporting Polypeptide 1A2)
                    </strong>{" "}
                    uptake channels to enter the bloodstream. Flavonoids in{" "}
                    <strong>grapefruit, orange, and apple juice</strong>{" "}
                    directly inhibit OATP1A2, reducing Fexofenadine blood levels
                    by up to <strong>40%</strong> and causing apparent treatment
                    failure. Always take with plain water and separate from
                    Al/Mg antacids by 2 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Side Effects */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Info className="w-5 h-5 text-emerald-400" />
                Common Side Effects (Placebo-Level Tolerability)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-emerald-300 block">
                    1. Neurological &amp; General Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Mild headache (~10.6% vs. 7.5% placebo)</li>
                    <li>
                      Drowsiness / fatigue (~1.3% — identical to sugar placebo)
                    </li>
                    <li>Occasional mild dizziness</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    2. Gastrointestinal &amp; Musculoskeletal
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Mild nausea or dyspepsia (~1.6%)</li>
                    <li>Back pain or mild viral upper respiratory symptoms</li>
                    <li>
                      Dry mouth (~1–2% — far lower than 1st-gen antihistamines)
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Combination-Specific (+ Montelukast)
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Abdominal discomfort or diarrhea</li>
                    <li>
                      Vivid dreams, sleep disturbance, or mood changes (from
                      Montelukast)
                    </li>
                    <li>Zero cardiac QTc prolongation even at high doses</li>
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
                    Fexofenadine has one of the highest safety margins in
                    clinical pharmacology. In clinical trials, single doses up
                    to <strong>800 mg</strong> and repeated doses of{" "}
                    <strong>690 mg twice daily</strong> for 1 month produced no
                    clinically significant adverse events or ECG QTc changes
                    compared to placebo.
                  </p>
                </div>
              </div>
            </div>

            {/* Overdose Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. Mild CNS &amp; Autonomic Signs
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Reported symptoms in acute overdoses include{" "}
                  <strong>dizziness, drowsiness, and dry mouth</strong>. Unlike
                  Terfenadine or Diphenhydramine, it does not cause ventricular
                  arrhythmias or seizures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. Watch Co-Formulated Ingredients
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  If a patient overdoses on{" "}
                  <strong>Allegra-D (Fexofenadine + Pseudoephedrine)</strong>,
                  severe hypertension, tachycardia, and agitation will occur
                  from the <em>Pseudoephedrine</em> component.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overdose Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>No specific antidote exists</strong>. Standard
                  supportive measures to remove unabsorbed drug (activated
                  charcoal if within 1 hour) and symptomatic monitoring. Note:
                  Hemodialysis does <strong>not</strong> effectively remove
                  Fexofenadine (&lt; 1.7% cleared).
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
                Non-Sedating Second-Generation H1 Antihistamines (Piperidine
                Metabolite Class)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Second-generation H1 antihistamines are selectively engineered
                peripheral inverse agonists that avoid central nervous system
                penetration and muscarinic receptor blockade. Within this class,{" "}
                <strong>Fexofenadine</strong> and <strong>Bilastine</strong> sit
                at the top of the non-sedating spectrum with{" "}
                <strong>0% cerebral H1 receptor occupancy</strong>, making them
                ideal for daytime cognitive performance.
              </p>
            </div>

            {/* 2nd-Gen Head-to-Head Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">2nd-Gen Agent</th>
                    <th className="p-3.5">Brain H1 Occupancy</th>
                    <th className="p-3.5">Administration Rule</th>
                    <th className="p-3.5">Primary Clinical Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-emerald-950/15">
                    <td className="p-3.5 font-bold text-emerald-300">
                      Fexofenadine (Allegra)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      ~0.0% (Zero Sedation)
                    </td>
                    <td className="p-3.5 text-amber-300">
                      Plain water only (avoid fruit juices)
                    </td>
                    <td className="p-3.5">
                      Pilot/driver approved; safe in liver disease; no
                      withdrawal itch
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Levocetirizine (Xyzal)
                    </td>
                    <td className="p-3.5 font-mono">~6 – 8%</td>
                    <td className="p-3.5">With or without food (evening)</td>
                    <td className="p-3.5">
                      High potency at 5 mg; strong skin wheal suppression
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Cetirizine (Zyrtec)
                    </td>
                    <td className="p-3.5 font-mono">~10 – 25%</td>
                    <td className="p-3.5">With or without food (evening)</td>
                    <td className="p-3.5">
                      Fastest onset (20 min); extensive pregnancy safety data
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-indigo-300">
                      Bilastine (Bilaxten)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      ~0.0% (Zero Sedation)
                    </td>
                    <td className="p-3.5 text-amber-300">
                      Strictly fasting (1h before / 2h after meal)
                    </td>
                    <td className="p-3.5">
                      Zero hepatic or renal metabolism; clean safety profile
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
