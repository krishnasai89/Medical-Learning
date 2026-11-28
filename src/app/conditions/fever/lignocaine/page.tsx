"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Syringe,
  Activity,
  AlertCircle,
  AlertTriangle,
  ShieldAlert,
  Brain,
  Layers,
  Scale,
  Info,
  CheckCircle2,
  Heart,
  Zap,
  Clock,
  Droplets,
  Stethoscope,
  Pill,
} from "lucide-react";

export default function LignocainePage() {
  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "fever-context" | "dosing" | "warnings-last" | "paracetamol-combo"

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/fever"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Clinical Index</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-3">
              <Syringe className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Membrane Stabilizer
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Lignocaine (Lidocaine HCl)
            </h1>

            {/* Nomenclature Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-cyan-300 font-mono">
                  2-(diethylamino)-N-(2,6-dimethylphenyl)acetamide
                </strong>
                .
              </p>

              {/* Regional Standards Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-cyan-400 font-mono">
                    Lignocaine
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (BAN / IP) &bull; UK, India, Commonwealth
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-teal-300 font-mono">Lidocaine</strong>
                  <span className="text-slate-500 text-[11px]">
                    (USP / INN / JAN) &bull; USA, Japan, Global
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/80 text-[11px] font-mono text-slate-400">
                  Class:{" "}
                  <strong>
                    Amide Local Anesthetic &bull; Class Ib Antiarrhythmic
                  </strong>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on voltage-gated fast sodium channel blockade,
              procedural infiltration (1%–2%), mucosal analgesia, antiarrhythmic
              management, LAST toxicity protocols, and specialized
              co-formulation in IV infusions.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Plain Max Ceiling
              </span>
              <span className="text-xl font-bold text-cyan-400 font-mono">
                300 mg (4.5 mg/kg)
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                With Adrenaline
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                500 mg (7 mg/kg)
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
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Overview &amp; Mechanism</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("fever-context")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "fever-context"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Zap className="w-4 h-4 shrink-0" />
              <span>Lignocaine in Fever? (Clinical Reality)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dosing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dosing"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>Dose Stratification &amp; Sizing</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("warnings-last")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "warnings-last"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>LAST Toxicity &amp; Precautions</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("paracetamol-combo")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "paracetamol-combo"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>Paracetamol + Lignocaine IV Combo</span>
            </button>
          </div>
        </div>

        {/* --- VIEW 1: OVERVIEW & MECHANISM --- */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What is it? */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Lignocaine?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Lignocaine (Lidocaine) is a synthetic{" "}
                    <strong>aminoamide-type local anesthetic</strong> and{" "}
                    <strong>Vaughan-Williams Class Ib antiarrhythmic</strong>{" "}
                    agent. Synthesized in 1943 by Nils Löfgren, it displaced
                    procaine and cocaine due to its rapid onset, greater
                    stability, and minimal allergenic profile.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    It acts as a universal neuronal membrane stabilizer. It
                    causes reversible loss of sensory sensation (touch, pain,
                    temperature) in a localized anatomical territory without
                    causing loss of consciousness when applied topically or
                    infiltrated subcutaneously.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Hepatic dealkylation via CYP1A2 and CYP3A4 into active
                  metabolites (monoethylglycinexylidide [MEGX] and
                  glycinexylidide [GX]). Elimination half-life: 1.5–2 hours.
                  High hepatic first-pass metabolism (~70% extraction),
                  rendering plain oral tablets clinically ineffective.
                </div>
              </div>

              {/* How does it work? */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Electrophysiology)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Fast Voltage-Gated Sodium Channel Block (Nav1.5 /
                        Nav1.7):
                      </strong>
                      In uncharged base form, it crosses the lipid neuronal
                      membrane, re-ionizes inside the cytoplasm, and binds
                      directly to the intracellular S6 segment of domain IV on{" "}
                      <strong>voltage-gated Na+ channels</strong>.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Prevention of Action Potential Generation:
                      </strong>
                      By physically plugging the open and inactivated states of
                      the sodium channel, it halts rapid inward Na+ influx.
                      Depolarization fails to reach threshold; nerve action
                      potentials cannot fire or propagate.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Differential Nerve Block Sequence:
                      </strong>
                      Blocks small, unmyelinated or lightly myelinated pain
                      fibers first (Type C &amp; A-delta), followed by
                      temperature, touch, and finally deep motor proprioception
                      fibers (Type A-alpha).
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Cardiac Class Ib Electrophysiology:
                  </strong>
                  In myocardial tissue, it shortens Phase 3 repolarization and
                  decreases Action Potential Duration (APD) in ischemic
                  ventricular myocytes without blunting conduction velocity.
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
                    Onset &amp; Duration:
                  </strong>
                  Rapid onset (1–3 minutes on mucosal/infiltration sites).
                  Duration: 30–60 minutes plain, extended to 2–4 hours when
                  combined with Adrenaline.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Adrenaline Restriction:
                  </strong>
                  <strong>NEVER</strong> use Lignocaine + Adrenaline
                  (Epinephrine) on terminal end-artery structures (fingers,
                  toes, penis, nose, earlobes) to prevent gangrene.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Infected Tissue Failure:
                  </strong>
                  Fails in purulent abscesses. Acidic infected tissues (pH &lt;
                  6.0) ionize the drug outside the cell, preventing lipid
                  membrane entry.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Amide vs. Ester Rule:
                  </strong>
                  Amides contain an &quot;i&quot; before the &quot;-caine&quot;
                  (L<strong>i</strong>docaine, Bup<strong>i</strong>vacaine).
                  True anaphylaxis is rare compared to ester anesthetics.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" /> Main Clinical
                Indications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1">
                    1. Local &amp; Regional Anesthesia
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-400">
                    <li>
                      Subcutaneous local infiltration for suturing lacerations
                    </li>
                    <li>
                      Digital nerve blocks, dental extractions, femoral blocks
                    </li>
                    <li>Epidural and spinal regional anesthesia</li>
                    <li>Intravenous Regional Anesthesia (Bier&apos;s block)</li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1">
                    2. Topical Mucosal Anesthesia
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-400">
                    <li>
                      2% Viscous oral solution for severe stomatitis / mucositis
                    </li>
                    <li>
                      2% Gel for urethral catheterization (lubricating +
                      numbing)
                    </li>
                    <li>
                      10% Aerosol spray for upper endoscopy / awake intubation
                    </li>
                    <li>
                      EMLA cream (Lidocaine + Prilocaine) for venipuncture
                    </li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-rose-300 block mb-1">
                  <strong className="text-rose-300 block mb-1">
                    3. Emergency Cardiology &amp; ICU
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-400">
                    <li>
                      Class Ib antiarrhythmic for Ventricular Fibrillation (VF)
                    </li>
                    <li>
                      Refractory pulseless Ventricular Tachycardia (pVT) in ACLS
                    </li>
                    <li>
                      Post-MI hemodynamically significant ventricular ectopy
                    </li>
                    <li>Blunting ICP spike during endotracheal suctioning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 2: LIGNOCAINE IN FEVER? --- */}
        {activeTab === "fever-context" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Why Use or Not Use Lignocaine When Fever is Present?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong>
                      Critical Pharmacological Fact: Lignocaine is NOT an
                      antipyretic.
                    </strong>{" "}
                    It has zero action on cyclooxygenase, zero effect on
                    interleukin cytokines, and cannot reset the hypothalamic
                    thermal set-point. It does not reduce body temperature.
                  </p>
                </div>
              </div>
            </div>

            {/* Why NOT use it as an antipyretic */}
            <div className="p-5 rounded-2xl border border-rose-500/40 bg-slate-900/40 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-rose-400">
                <ShieldAlert className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Why You Must NEVER Use Lignocaine as an Antipyretic
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    1. Zero Hypothalamic Activity
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Fever is driven by central PGE2 resetting the preoptic
                    thermostat dial. Paracetamol, Ibuprofen, and Aspirin block
                    COX enzymes to lower this set-point. Lignocaine blocks
                    sodium channels on nerve axons; it has{" "}
                    <strong>
                      zero ability to clear PGE2 or lower temperature
                    </strong>
                    .
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    2. Fatal Toxicity Risk (LAST)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Administering systemic local anesthetics off-label for fever
                    carries massive risk of seizures, central nervous system
                    depression, and refractory cardiac arrest. Paracetamol has
                    an enormous therapeutic window; Lignocaine does not.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    3. Aspiration Pneumonia Danger
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Giving oral viscous lidocaine to febrile infants or toddlers
                    to numb sore throats numbs the pharynx and abolishes the
                    protective gag reflex, causing pulmonary aspiration of
                    secretions or liquids.
                  </p>
                </div>
              </div>
            </div>

            {/* Where Lignocaine DOES intersect with febrile conditions */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Where Does Lignocaine Actually Intersect with Febrile Illness?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                While it never treats the temperature, Lignocaine is utilized in
                specialized, acute clinical scenarios that coincide with severe
                febrile pathology:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    1. Oral Ulceration Analgesia
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    In severe pediatric viral fevers (Herpetic
                    Gingivostomatitis, Hand-Foot-and-Mouth Disease, Herpangina),
                    oral pain is so excruciating that children refuse fluids,
                    leading to dangerous dehydration. Very dilute, monitored
                    mucosal topical application relieves pain sufficiently to
                    allow oral hydration.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    2. ICU Febrile Status Epilepticus
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    In pediatric and adult ICU patients with super-refractory
                    status epilepticus triggered by severe encephalitis or
                    febrile infection-related epilepsy syndrome (FIRES),
                    intravenous continuous Lidocaine infusions are deployed as
                    an adjunctive third-line membrane stabilizer.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    3. Infusion Vein Protection (IV Combo)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Certain IV drug infusions (including high-concentration
                    paracetamol, potassium, or propofol) cause severe vascular
                    burning pain. Trace amounts of preservative-free lignocaine
                    are added to suppress local peripheral venous pain
                    nociceptors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 3: DOSING STRATIFICATION --- */}
        {activeTab === "dosing" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Header Guidelines */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-start gap-3">
              <Scale className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-0.5">
                  Universal Maximum Safe Dosage Ceilings:
                </strong>
                Lignocaine dosing is strictly calculated by lean body weight.
                The absolute toxic threshold depends on whether a
                vasoconstrictor (Adrenaline 1:200,000) is co-administered to
                delay systemic vascular absorption.
              </div>
            </div>

            {/* Ceiling Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      PLAIN (Without Adrenaline)
                    </span>
                    <span className="text-[10px] font-semibold uppercase text-slate-400">
                      Standard Infiltration
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    4.5 mg/kg (Absolute Max: 300 mg)
                  </h3>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>1% Solution (10 mg/mL):</span>
                      <span className="text-cyan-300 font-bold">
                        Max 30 mL (70 kg adult)
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>2% Solution (20 mg/mL):</span>
                      <span className="text-cyan-300 font-bold">
                        Max 15 mL (70 kg adult)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Used for routine minor surgical closures, skin biopsies,
                    lumbar punctures, and peripheral nerve blocks where
                    vasoconstriction is not required.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 text-[11px] text-slate-400">
                  <em>Duration:</em> Approximately 30 to 60 minutes before
                  sensation recovers.
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-mono font-bold text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      WITH ADRENALINE (1:200,000)
                    </span>
                    <span className="text-[10px] font-semibold uppercase text-slate-400">
                      Vasoconstricted
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    7.0 mg/kg (Absolute Max: 500 mg)
                  </h3>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>1% with Adr (10 mg/mL):</span>
                      <span className="text-teal-300 font-bold">
                        Max 50 mL (70 kg adult)
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>2% with Adr (20 mg/mL):</span>
                      <span className="text-teal-300 font-bold">
                        Max 25 mL (70 kg adult)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Adrenaline constricts local arterioles, dramatically slowing
                    systemic drug uptake. This reduces blood toxicity while
                    doubling duration to 2–4 hours and providing a bloodless
                    surgical field.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 text-[11px] text-rose-300 font-semibold">
                  <em>Contraindicated:</em> Never use on end-arteries (fingers,
                  toes, penis, nose).
                </div>
              </div>
            </div>

            {/* Preparation Concentrations Matrix */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Concentration</th>
                    <th className="p-3.5">Mg per mL</th>
                    <th className="p-3.5">Primary Clinical Application</th>
                    <th className="p-3.5">Onset / Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-bold text-white">
                      0.5% Injection
                    </td>
                    <td className="p-3.5 font-mono text-cyan-300 font-semibold">
                      5 mg / mL
                    </td>
                    <td className="p-3.5 text-slate-300">
                      Large area infiltration, subcutaneous tumescent anesthesia
                    </td>
                    <td className="p-3.5 text-slate-400">2–5 min | 45 min</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-bold text-white">
                      1.0% Injection
                    </td>
                    <td className="p-3.5 font-mono text-cyan-300 font-semibold">
                      10 mg / mL
                    </td>
                    <td className="p-3.5 text-slate-300">
                      Standard wound suturing, punch biopsy, digital ring blocks
                    </td>
                    <td className="p-3.5 text-slate-400">1–3 min | 60 min</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-bold text-white">
                      2.0% Injection / Gel
                    </td>
                    <td className="p-3.5 font-mono text-cyan-300 font-semibold">
                      20 mg / mL
                    </td>
                    <td className="p-3.5 text-slate-300">
                      Foley catheter urethral lubrication (gel), dental nerve
                      blocks
                    </td>
                    <td className="p-3.5 text-slate-400">
                      1–2 min | 60–90 min
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-bold text-white">
                      2.0% Viscous Solution
                    </td>
                    <td className="p-3.5 font-mono text-amber-300 font-semibold">
                      20 mg / mL
                    </td>
                    <td className="p-3.5 text-slate-300">
                      Severe aphthous stomatitis, esophagitis (swish &amp; spit
                      &le; 15 mL)
                    </td>
                    <td className="p-3.5 text-slate-400">5 min | 30–60 min</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3.5 font-bold text-white">
                      4.0% – 10% Spray
                    </td>
                    <td className="p-3.5 font-mono text-rose-300 font-semibold">
                      40 – 100 mg / mL
                    </td>
                    <td className="p-3.5 text-slate-300">
                      Awake fiberoptic bronchoscopy, upper GI endoscopy
                    </td>
                    <td className="p-3.5 text-slate-400">
                      Rapid (&lt; 1 min) | 15–30 min
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors bg-rose-950/20">
                    <td className="p-3.5 font-bold text-rose-200">
                      2.0% IV Cardiac Bolus
                    </td>
                    <td className="p-3.5 font-mono text-rose-300 font-semibold">
                      100 mg / 5 mL
                    </td>
                    <td className="p-3.5 text-rose-300">
                      ACLS Cardiac Arrest (VF/pVT): 1 – 1.5 mg/kg IV push
                    </td>
                    <td className="p-3.5 text-rose-300/80">
                      Immediate | 10–20 min
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- VIEW 4: LAST TOXICITY & PRECAUTIONS --- */}
        {activeTab === "warnings-last" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Boxed Warning Header */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    LAST: Local Anesthetic Systemic Toxicity
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Accidental intravascular injection or exceeding safe dose
                    limits allows free Lignocaine to surge through systemic
                    circulation. Because sodium channels in the brain and heart
                    are sensitive to blockade, toxicity proceeds in a
                    predictable biphasic progression from neurological
                    excitation to fatal cardiovascular collapse.
                  </p>
                </div>
              </div>
            </div>

            {/* Stepwise Cascade of LAST */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-300 font-mono font-bold flex items-center justify-center mb-2">
                  1
                </span>
                <strong className="text-amber-300 block mb-1">
                  Prodromal CNS Signs
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Circumoral numbness, metallic taste on tongue,
                  lightheadedness, visual disturbances, tinnitus (ringing ears).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-300 font-mono font-bold flex items-center justify-center mb-2">
                  2
                </span>
                <strong className="text-rose-300 block mb-1">
                  CNS Excitation (Seizures)
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Blocks inhibitory cortical interneurons first &rarr; unopposed
                  excitatory transmission &rarr; muscle twitching, tremors,
                  generalized tonic-clonic convulsions.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 font-mono font-bold flex items-center justify-center mb-2">
                  3
                </span>
                <strong className="text-rose-400 block mb-1">
                  CNS Depression
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Blockade spreads to all cerebral pathways &rarr; sudden
                  lethargy, unconsciousness, coma, and central respiratory
                  arrest (apnea).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                <span className="w-6 h-6 rounded-full bg-rose-600/20 text-rose-300 font-mono font-bold flex items-center justify-center mb-2">
                  4
                </span>
                <strong className="text-rose-300 block mb-1">
                  Cardiovascular Collapse
                </strong>
                <p className="text-slate-400 leading-relaxed">
                  Myocardial Nav1.5 shutdown &rarr; wide QRS, severe
                  bradycardia, AV block, refractory hypotension, ventricular
                  arrhythmias, and asystole.
                </p>
              </div>
            </div>

            {/* The Specific Antidote: Intralipid */}
            <div className="p-5 rounded-2xl border border-teal-500/40 bg-teal-950/20 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 text-teal-400">
                <Droplets className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  The Specific Antidote for LAST: Intravenous Lipid Emulsion
                  (ILE)
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Standard CPR often fails in LAST because the local anesthetic is
                bound tightly to myocardial sodium channels. The definitive
                antidote is{" "}
                <strong>20% Intralipid (Lipid Emulsion Therapy)</strong>:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-1">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-teal-300 font-bold block mb-1">
                    1. &quot;Lipid Sink&quot; Mechanism:
                  </span>
                  <p className="text-slate-400 font-sans text-[11px] leading-relaxed">
                    Lipid emulsion creates an intravascular hydrophobic lipid
                    compartment that pulls lipophilic Lignocaine molecules out
                    of heart and brain tissue into the bloodstream, freeing up
                    cardiac sodium channels.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-teal-300 font-bold block mb-1">
                    2. Standard Resuscitation Dosing:
                  </span>
                  <p className="text-slate-400 font-sans text-[11px] leading-relaxed">
                    Bolus <strong>1.5 mL/kg of 20% Lipid Emulsion</strong> over
                    1 minute &rarr; follow with continuous infusion of{" "}
                    <strong>0.25 mL/kg/min</strong> (repeat bolus twice if
                    asystolic). Continue until circulation is restored.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 5: PARACETAMOL + LIGNOCAINE IV COMBO --- */}
        {activeTab === "paracetamol-combo" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
                Specialized Hospital Formulation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Paracetamol + Lignocaine IV Infusion
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                In acute post-surgical, trauma, and ICU settings, intravenous
                Paracetamol (1000 mg / 100 mL) is frequently paired or
                co-formulated with trace Lignocaine (often 10 mg / 1 mL). This
                combination addresses a critical clinical problem during rapid
                IV infusions.
              </p>
            </div>

            {/* Why Combine Them? Mechanism */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-teal-400" />
                How Does the Combination Work &amp; What Does It Do?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-teal-300 block font-semibold">
                    1. Eliminates Venous Burning / Thrombophlebitis
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Rapid intravenous infusion of paracetamol frequently
                    triggers severe burning along the peripheral vein wall
                    (endothelial irritation).
                  </p>
                  <p className="text-slate-300">
                    Adding trace Lignocaine reversibly anesthetizes the local
                    vascular endothelium and unmyelinated C-fiber nociceptors
                    inside the vein lumen, allowing{" "}
                    <strong>painless, smooth peripheral infusion</strong>{" "}
                    without localized venospasm.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-amber-300 block font-semibold">
                    2. Multimodal Post-Surgical Analgesic Synergy
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Paracetamol resets the hypothalamic set-point and stimulates
                    central descending serotonergic inhibitory pathways via
                    AM404.
                  </p>
                  <p className="text-slate-300">
                    Systemic low-dose Lignocaine provides secondary membrane
                    stabilization, reducing ectopic central neural
                    sensitization. Together, they provide synergistic
                    opioid-sparing analgesia (reducing morphine requirements by
                    25–40%).
                  </p>
                </div>
              </div>
            </div>

            {/* Dosing, Uses & Overdose Protocol */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-white block mb-1">
                  Standard Regimen
                </strong>
                <p className="text-slate-300 mb-2">
                  100 mL glass vial or flex-bag containing:
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-teal-300 mb-2">
                  Paracetamol 1000 mg + Lignocaine HCl 10–20 mg
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Infuse intravenously over 15 minutes. Administer every 6 hours
                  as needed (Max paracetamol 4000 mg/24h).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong className="text-white block mb-1">
                  Who Can Use It?
                </strong>
                <ul className="space-y-1 list-disc list-inside text-slate-300">
                  <li>
                    Adults (&gt; 50 kg) undergoing orthopedic, abdominal, or
                    gynecological surgery
                  </li>
                  <li>Trauma patients who are NPO (nil per os)</li>
                  <li>Patients sensitive to severe IV cannula pain</li>
                  <li>ICU patients requiring non-opioid pain relief</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <strong className="text-rose-300 block mb-1">
                  Dual Overdose Profile
                </strong>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Overdosing this combination presents two distinct toxic
                  crises:
                </p>
                <div className="text-[11px] text-slate-400 space-y-1">
                  <div>
                    <strong className="text-rose-400">
                      Acute Phase (Minutes):
                    </strong>{" "}
                    Lignocaine neurotoxicity (convulsions, hypotension,
                    arrhythmias).
                  </div>
                  <div>
                    <strong className="text-amber-300">
                      Delayed Phase (24–72h):
                    </strong>{" "}
                    Paracetamol hepatotoxicity (centrilobular necrosis from
                    NAPQI).
                  </div>
                </div>
              </div>
            </div>

            {/* Precaution Warning Banner */}
            <div className="p-4 rounded-xl border border-amber-500/30 bg-slate-900/50 backdrop-blur-md flex items-start gap-3 text-xs text-slate-300">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">
                  Clinical Precaution:
                </strong>
                Avoid this IV combination in patients with severe sinus node
                dysfunction, second- or third-degree AV block (without a
                pacemaker), severe hepatic failure, or known amide local
                anesthetic allergy.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
