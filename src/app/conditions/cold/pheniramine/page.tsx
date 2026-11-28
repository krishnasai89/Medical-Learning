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
  Droplets,
  Layers,
  Scale,
  Info,
  CheckCircle2,
  Syringe,
  HeartPulse,
} from "lucide-react";

export default function PheniraminePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "oral-vs-injection" | "dosing" | "safety" | "drug-class"
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
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Propylamine / Alkylamine Antihistamine
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Pheniramine Maleate (Avil)
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-cyan-300 font-mono">
                  N,N-dimethyl-3-phenyl-3-(pyridin-2-yl)propan-1-amine hydrogen
                  maleate
                </strong>
                .
              </p>

              {/* Brand & Manufacturer Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-cyan-400 font-mono">
                    Primary Brand: Avil
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    &bull; Manufactured by Sanofi (Global / India)
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Available Strengths
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    25 mg / 50 mg Tabs &bull; 22.75 mg/mL IM/IV Ampoule
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on H1 receptor inverse agonism, rapid
              muscarinic M3 anti-secretory drying, why modern clinical practice
              avoids oral tablets &amp; syrups (abuse liability &amp; sedation)
              while retaining parenteral Avil injections for emergency allergic
              crises, and acute overdose toxicity (anticholinergic delirium
              &amp; rhabdomyolysis).
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Max Daily Ceiling
              </span>
              <span className="text-xl font-bold text-cyan-400 font-mono">
                3 mg/kg (150 mg)
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Parenteral Ampoule
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                22.75 mg / mL
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
              onClick={() => setActiveTab("oral-vs-injection")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "oral-vs-injection"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Syringe className="w-4 h-4 shrink-0" />
              <span>Why Avoid Oral vs. Use Injection?</span>
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
              <span>1st-Gen Antihistamine Class</span>
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
                      What is Pheniramine Maleate?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Pheniramine Maleate (most famously marketed globally by{" "}
                    <strong>Sanofi</strong> as <strong>Avil</strong>) is a
                    fast-acting, alkylamine-class{" "}
                    <strong>first-generation H1 receptor antihistamine</strong>.
                    Chemically, it is the non-chlorinated parent analog of
                    Chlorpheniramine, possessing strong anti-allergic,
                    anti-secretory (drying), and anti-vertigo properties.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    In clinical medicine, Avil has long served as a frontline
                    acute anti-allergic agent—particularly via intramuscular
                    (IM) or slow intravenous (IV) injection—to rapidly abort
                    acute drug allergies, insect sting urticaria, blood
                    transfusion reactions, and vasomotor rhinitis.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapid onset within 15–30 minutes (oral/IM) and &lt; 5 minutes
                  (IV). Peak plasma levels occur at 1–2.5 hours. Hepatically
                  metabolized; terminal elimination half-life is 8–17 hours (IV)
                  and 16–19 hours (oral), with urinary excretion of metabolites.
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
                        1. Competitive H1 Receptor Inverse Agonism
                        (Anti-Allergic &amp; Anti-Pruritic):
                      </strong>
                      Stabilizes peripheral and central{" "}
                      <strong>Histamine H1 receptors</strong> in their inactive
                      state. Prevents histamine from binding to vascular
                      endothelial cells and sensory nerve endings—halting
                      capillary vasodilation, wheal-and-flare skin hives, nasal
                      mucosal swelling, and intense itching.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Muscarinic M3 &amp; M1 Anticholinergic Blockade
                        (Drying &amp; Anti-Vertigo):
                      </strong>
                      Competitively blocks acetylcholine at parasympathetic{" "}
                      <strong>muscarinic M3 receptors</strong> on nasal and
                      bronchial submucosal glands, rapidly drying profuse watery
                      secretions. Central M1 blockade in the vestibular
                      apparatus suppresses motion sickness and labyrinthine
                      vertigo.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Blood-Brain Barrier Penetration (Moderate Central
                        Sedation):
                      </strong>
                      Crosses the blood-brain barrier to occupy central
                      hypothalamic H1 wakefulness receptors, producing moderate
                      sedation, drowsiness, and psychomotor slowing.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-amber-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Rapid{" "}
                  <strong>
                    histamine H1 blockade + mucosal secretion drying +
                    labyrinthine stabilization
                  </strong>
                  .
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
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Take Oral Tablets With Food:
                  </strong>
                  Sanofi&apos;s official prescribing monograph specifies taking
                  Avil tablets <strong>with or immediately after meals</strong>{" "}
                  with plenty of water—never on an empty stomach—to prevent
                  epigastric irritation.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Slow IV Injection Mandatory:
                  </strong>
                  When given intravenously, Avil (22.75 mg/mL) must be injected{" "}
                  <strong>slowly (over 1–2 min)</strong> to prevent transient
                  hypotension, dizziness, and CNS excitation.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Adrenaline First in Anaphylaxis:
                  </strong>
                  In life-threatening anaphylactic shock, Avil injection is
                  strictly an <strong>adjunctive therapy</strong> given{" "}
                  <em>after</em> Intramuscular Epinephrine (Adrenaline)—it
                  cannot reverse airway bronchospasm or shock on its own.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Never Inject Subcutaneously:
                  </strong>
                  Pheniramine has strong local membrane-stabilizing/irritant
                  properties; subcutaneous injection causes severe local tissue
                  irritation. Use deep IM or slow IV only.
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
                    <Syringe className="w-3.5 h-3.5" /> 1. Acute Allergic
                    Emergencies (Injection)
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Acute drug hypersensitivity reactions &amp; contrast media
                      reactions
                    </li>
                    <li>
                      Blood transfusion allergic reactions (urticaria / febrile
                      non-hemolytic)
                    </li>
                    <li>
                      Severe insect bites, wasp/bee stings, and serum sickness
                    </li>
                    <li>
                      Adjunct to Epinephrine in anaphylaxis &amp; angioedema
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" /> 2. Respiratory &amp;
                    Secretory Conditions
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Acute viral rhinitis with profuse watery rhinorrhea</li>
                    <li>
                      Vasomotor rhinitis &amp; seasonal hay fever (allergic
                      rhinitis)
                    </li>
                    <li>
                      Paroxysmal sneezing fits and allergic conjunctivitis
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-teal-300 block mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> 3. Dermatology &amp;
                    Vestibular Disorders
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Acute and chronic urticaria (hives), eczema, and
                      neurodermatitis
                    </li>
                    <li>
                      Intense pruritus (itching in chickenpox, jaundice, or
                      contact dermatitis)
                    </li>
                    <li>
                      Motion sickness, nausea, vomiting, and Meniere&apos;s
                      disease vertigo
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY AVOID ORAL TABLETS & SYRUPS VS USE INJECTION */}
        {/* ========================================================================= */}
        {activeTab === "oral-vs-injection" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Clinical Practice Shift: Why Avoid Oral Tablets &amp; Syrups
                    Yet Use Injections?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    In contemporary outpatient practice, doctors rarely
                    prescribe oral Avil tablets or syrups for everyday allergies
                    or common colds—in fact,{" "}
                    <strong>
                      Avil syrup (15 mg/5 mL) was discontinued in several
                      markets
                    </strong>
                    —yet <strong>Avil Injection (22.75 mg/mL)</strong> remains a
                    staple in almost every emergency room and clinic crash cart.
                  </p>
                </div>
              </div>
            </div>

            {/* Side-by-Side Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Why Oral Tablets & Syrups Are Avoided */}
              <div className="p-6 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20 font-bold">
                    Superseded &amp; Misuse-Prone
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    25 mg / 50 mg Oral
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Avoid Oral Tablets &amp; Syrups Today
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      1. Recreational Abuse &amp; Hallucinogenic Misuse (Why
                      Syrup Was Pulled)
                    </strong>
                    <p className="text-slate-400">
                      Because Pheniramine crosses the blood-brain barrier and
                      produces central anticholinergic euphoria/hallucinations
                      at high doses, oral syrups and 25/50 mg tablets became
                      heavily abused—either swallowed in large quantities or
                      dissolved and injected alongside opioids/benzodiazepines.
                      Many regulators withdrew Avil syrup specifically to curb
                      substance abuse.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      2. Daytime Drowsiness &amp; Long Hangover (16–19h
                      Half-Life)
                    </strong>
                    <p className="text-slate-400">
                      Oral Pheniramine has a 16–19 hour elimination half-life,
                      causing prolonged sedation, impaired concentration, and
                      driving hazards. Modern 2nd-generation tablets
                      (Cetirizine, Levocetirizine, Fexofenadine, Bilastine)
                      control allergies for 24 hours with zero cognitive
                      impairment.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">
                      3. Anticholinergic Side Effects in Routine Outpatients
                    </strong>
                    <p className="text-slate-400">
                      Causes dry mouth, blurred vision, constipation, and
                      urinary retention in older men—side effects completely
                      avoided by modern non-anticholinergic antihistamines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Injection Is Still Widely Used */}
              <div className="p-6 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20 font-bold">
                    Emergency Hospital Workhorse
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    22.75 mg / mL (2 mL Ampoule)
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Why Doctors Still Rely on Avil Injection
                </h3>

                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-cyan-300 block mb-1">
                      1. 2nd-Generation Antihistamines Lack Fast Parenteral
                      Forms
                    </strong>
                    <p className="text-slate-400">
                      Drugs like Fexofenadine, Loratadine, and Bilastine are{" "}
                      <strong>oral-only tablets</strong>—they take 60–90 minutes
                      to absorb from the gut. In an emergency room, you cannot
                      give an oral tablet to a patient breaking out in acute
                      drug hives or transfusion reactions.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-cyan-300 block mb-1">
                      2. Immediate Onset (&lt; 5 Minutes IV / 15 Minutes IM)
                    </strong>
                    <p className="text-slate-400">
                      Parenteral Avil bypasses gut first-pass metabolism,
                      delivering immediate systemic H1 blockade alongside IV
                      Hydrocortisone/Dexamethasone to stop acute angioedema,
                      antibiotic reactions, and insect stings.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-cyan-300 block mb-1">
                      3. Controlled Clinical Supervision
                    </strong>
                    <p className="text-slate-400">
                      Administered directly by physicians or nurses in clinics
                      and hospitals—eliminating self-medication abuse while
                      calming anxious, itching patients via mild sedative
                      relief.
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
                  Use Pheniramine (Avil)?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    For acute allergic reactions, urticaria, motion sickness, or
                    parenteral emergency allergy management.
                  </li>
                  <li>
                    <strong>Children Aged 5 to 11 Years:</strong> Half adult
                    oral dose (12.5 mg BID–TID) or weight-adjusted parenteral
                    dose strictly under physician supervision.
                  </li>
                  <li>
                    <strong>Hospital / Emergency Patients:</strong> IM or slow
                    IV administration for acute drug allergies, transfusion
                    reactions, or wasp/bee stings.
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
                      Neonates, Infants &amp; Young Children (&lt; 2–5 Years):
                    </strong>{" "}
                    High risk of paradoxical CNS excitation, agitation,
                    convulsions, and respiratory depression.
                  </li>
                  <li>
                    <strong>
                      Symptomatic Benign Prostatic Hyperplasia (BPH):
                    </strong>{" "}
                    Explicit contraindication in Sanofi&apos;s product monograph
                    due to acute urinary retention risk.
                  </li>
                  <li>
                    <strong>Narrow-Angle Glaucoma:</strong> Anticholinergic
                    pupillary dilation spikes intraocular pressure.
                  </li>
                  <li>
                    <strong>Patients on MAO Inhibitors (MAOIs):</strong>{" "}
                    Concurrent use within 14 days dangerously prolongs and
                    intensifies anticholinergic toxicity.
                  </li>
                  <li>
                    <strong>Pregnancy &amp; Breastfeeding:</strong> Avoid in 1st
                    trimester and near term; excreted in breast milk (causes
                    infant drowsiness, irritability, or respiratory depression).
                  </li>
                  <li>
                    <strong>
                      Severe Hepatic Disease or Acute Asthma Attack:
                    </strong>{" "}
                    Impaired drug clearance in liver failure; airway drying
                    thickens bronchial mucus plugs in asthma.
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
                    Clinical Dosing Matrix (Sanofi Avil Prescribing Standards)
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Max Tolerated Ceiling: 3 mg/kg/day (150 mg/day)
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Route / Formulation</th>
                      <th className="p-3.5">Population</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Administration Guidelines</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-cyan-300">
                        Parenteral Injection (22.75 mg/mL)
                      </td>
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12y)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        1 – 2 mL (22.75 – 45.5 mg)
                      </td>
                      <td className="p-3.5 text-slate-300">
                        Deep IM or <strong>slow IV injection</strong> (1
                        mL/min); may repeat every 12 hours until acute symptoms
                        subside
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-cyan-300">
                        Parenteral Injection (22.75 mg/mL)
                      </td>
                      <td className="p-3.5 font-bold text-white">
                        Children (5 – 11 Years)
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        0.4 – 1 mL (0.3 mg/kg/dose)
                      </td>
                      <td className="p-3.5 text-slate-300">
                        Deep IM or slow IV under close cardiac/respiratory
                        monitoring
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Oral Tablets (25 mg)
                      </td>
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12y)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        25 mg (1 tablet) BID or TID
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Swallow whole with water{" "}
                        <strong>with or after food</strong> (max 150 mg/day)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Oral Tablets (50 mg)
                      </td>
                      <td className="p-3.5 font-bold text-white">
                        Adults (Severe Symptoms)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        50 mg (1 tablet) BID or TID
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Do not exceed 3 tablets (150 mg) in 24 hours; for travel
                        sickness take 30 min prior
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Oral Tablets (25 mg)
                      </td>
                      <td className="p-3.5 font-bold text-white">
                        Children (5 – 11 Years)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        12.5 mg (1/2 tablet) BID or TID
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Administer after food; avoid in children under 5 years
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
                  <strong className="text-cyan-300 block">
                    1. Central Nervous System Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Sedation, drowsiness, lassitude, and fatigue</li>
                    <li>
                      Dizziness, lightheadedness, and motor incoordination
                    </li>
                    <li>Inability to concentrate, tinnitus, and tremors</li>
                    <li>
                      Paradoxical restlessness, irritability, and insomnia in
                      children
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block">
                    2. Anticholinergic &amp; GI Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Dryness of mouth, nose, and throat</li>
                    <li>Blurred vision and increased intraocular pressure</li>
                    <li>Urinary hesitancy or acute urinary retention</li>
                    <li>
                      Epigastric pain, nausea, constipation, or increased
                      appetite
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-rose-300 block">
                    3. Cardiovascular &amp; Rare Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Transient hypotension (especially if IV injected too
                      rapidly)
                    </li>
                    <li>Palpitations and reflex sinus tachycardia</li>
                    <li>Muscular weakness</li>
                    <li>
                      Rare blood dyscrasias (agranulocytosis, hemolytic anemia)
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
                    Ingesting toxic amounts of Pheniramine Maleate (&gt; 3
                    mg/kg/day; intentional overdoses often involve 20–50+
                    tablets) produces severe{" "}
                    <strong>Anticholinergic Delirium</strong>,{" "}
                    <strong>Status Epilepticus</strong>,{" "}
                    <strong>Cardiotoxicity</strong>, and a well-documented
                    clinical complication:{" "}
                    <strong>
                      Non-Traumatic Rhabdomyolysis &amp; Acute Kidney Injury
                      (AKI)
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
                  1. Anticholinergic Toxidrome &amp; Seizures
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Fixed dilated pupils (mydriasis), hot dry flushed skin,
                  hyperthermia, urinary retention, agitated hallucinations,
                  disorientation, and refractory generalized tonic-clonic
                  convulsions followed by deep coma.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  2. Rhabdomyolysis &amp; Acute Renal Failure
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Direct skeletal myotoxicity and prolonged seizure/agitation
                  activity trigger massive muscle breakdown (CPK exceeding
                  100,000–200,000 U/L), dark tea-colored myoglobinuric urine,
                  and acute tubular necrosis requiring hemodialysis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" /> 3. Ventricular
                  Arrhythmias &amp; Collapse
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  High-dose sodium and potassium channel blockade causes severe
                  sinus tachycardia, ventricular tachycardia, QRS/QT
                  prolongation, hypotension, and terminal cardiorespiratory
                  collapse.
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
                  <strong>No specific antidote exists.</strong>{" "}
                  <strong>1. Decontamination:</strong> Activated charcoal if
                  within 1–2 hours of ingestion (do not induce vomiting due to
                  rapid seizure onset).{" "}
                  <strong>2. Seizure &amp; Agitation Control:</strong>{" "}
                  Intravenous Benzodiazepines (Lorazepam or Diazepam)—
                  <strong>never use stimulants</strong> as they precipitate
                  fatal convulsions.{" "}
                  <strong>3. Renal &amp; Cardiac Protection:</strong> Aggressive
                  IV isotonic fluid hydration to prevent myoglobinuric kidney
                  injury, continuous ECG monitoring, and early hemodialysis if
                  severe AKI or metabolic acidosis develops.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: 1ST-GEN ANTIHISTAMINE DRUG CLASS */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                First-Generation H1 Antihistamines (Alkylamine / Propylamine
                Subclass)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pheniramine belongs to the{" "}
                <strong>Alkylamine (Propylamine) subclass</strong> of
                first-generation H1 antihistamines alongside Chlorpheniramine
                and Brompheniramine. Alkylamines feature a chiral carbon atom
                linked to two aromatic rings and a dimethylaminoethyl side
                chain. Compared to ethanolamines (Diphenhydramine) and
                phenothiazines (Promethazine), alkylamines produce{" "}
                <strong>
                  strong H1 receptor potency with comparatively lower sedative
                  intensity
                </strong>
                , though they still cross the blood-brain barrier and retain
                marked muscarinic drying effects.
              </p>
            </div>

            {/* Alkylamine Subclass Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Alkylamine Member</th>
                    <th className="p-3.5">Key Structural Difference</th>
                    <th className="p-3.5">Standard Adult Dose</th>
                    <th className="p-3.5">Primary Clinical Niche</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-cyan-950/15">
                    <td className="p-3.5 font-bold text-cyan-300">
                      Pheniramine (Avil)
                    </td>
                    <td className="p-3.5 font-mono">
                      Non-halogenated parent ring
                    </td>
                    <td className="p-3.5 font-mono">
                      25 – 50 mg oral / 22.75 mg/mL inj
                    </td>
                    <td className="p-3.5">
                      Emergency IM/IV allergic reactions &amp; acute urticaria
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-teal-300">
                      Chlorpheniramine (Piriton)
                    </td>
                    <td className="p-3.5 font-mono">
                      Para-chloro substitution (6x more potent)
                    </td>
                    <td className="p-3.5 font-mono">4 mg oral Q4–6H</td>
                    <td className="p-3.5">
                      OTC multi-symptom cold &amp; flu combination tablets
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-300">
                      Brompheniramine
                    </td>
                    <td className="p-3.5 font-mono">Para-bromo substitution</td>
                    <td className="p-3.5 font-mono">4 mg oral Q4–6H</td>
                    <td className="p-3.5">
                      Pediatric &amp; adult cold/cough decongestant elixirs
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
