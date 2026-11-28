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
  Clock,
  Scale,
  Sparkles,
  Info,
  CheckCircle2,
  Heart,
  Flame,
  Zap,
} from "lucide-react";

export default function IbuprofenPage() {
  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "vs-paracetamol" | "dosing" | "warnings" | "nsaid-class"

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-amber-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/fever"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Pyrexia &amp; Antipyretics</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull; Core
              NSAID
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Ibuprofen (Propionic Acid NSAID)
            </h1>

            {/* Nomenclature Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-amber-300 font-mono">
                  isobutylphenylpropionic acid
                </strong>{" "}
                [2-(4-isobutylphenyl)propanoic acid].
              </p>

              {/* Regional Naming Standards Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-400 font-mono">
                    Ibuprofen
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / BAN / USAN) &bull; Global Standard
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-teal-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Advil, Motrin, Brufen, Nurofen
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on dual competitive COX-1/COX-2 inhibition,
              anti-inflammatory superiority, dosing ladders (100 mg to 800 mg
              Rx), gastro-renal safety warnings, and cardiovascular alerts.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Max Daily Ceiling
              </span>
              <span className="text-xl font-bold text-amber-400 font-mono">
                1200 mg (OTC) / 2400 mg (Rx)
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Duration of Action
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                6 – 8 Hours
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
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Overview &amp; Mechanism</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("vs-paracetamol")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "vs-paracetamol"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Zap className="w-4 h-4 shrink-0" />
              <span>Why Ibuprofen vs. Paracetamol?</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dosing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dosing"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>Dose Stratification &amp; Age</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("warnings")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "warnings"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Side Effects, Boxed Warnings &amp; Overdose</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("nsaid-class")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "nsaid-class"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>NSAID Class Deep Dive</span>
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
                  <div className="flex items-center gap-2 text-amber-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Ibuprofen?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Ibuprofen is a prototypical{" "}
                    <strong>
                      Non-Steroidal Anti-Inflammatory Drug (NSAID)
                    </strong>{" "}
                    derived from propionic acid. It possesses a clinical triad
                    of properties: <strong>antipyretic</strong> (reduces fever),{" "}
                    <strong>analgesic</strong> (relieves pain), and{" "}
                    <strong>anti-inflammatory</strong> (reduces tissue swelling,
                    erythema, and edema).
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Developed in the 1960s by the Boots Group as a safer
                    alternative to Aspirin, it has a broader therapeutic margin,
                    though it retains the characteristic NSAID organ risks:
                    gastric mucosal erosion and renal hemodynamic alterations.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-amber-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapid oral absorption (&gt; 80% bioavailability). Peak plasma
                  concentration reached in 1–2 hours (taken with food delays
                  peak). Protein bound: 99% (albumin). Hepatic metabolism via
                  CYP2C9; excreted renally (&gt; 90%).
                </div>
              </div>

              {/* How it works */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Pharmacodynamics)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Reversible Cyclooxygenase (COX) Inhibition:
                      </strong>
                      Non-selectively and competitively inhibits both{" "}
                      <strong>COX-1</strong> and <strong>COX-2</strong> enzymes.
                      This stops the conversion of cellular arachidonic acid
                      into <strong>Prostaglandin H2 (PGH2)</strong>, the
                      precursor to all inflammatory prostaglandins and
                      thromboxanes.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Central Antipyresis (Fever Relief):
                      </strong>
                      Inhibits COX-2 in the endothelial vasculature of the
                      hypothalamic preoptic area, shutting off{" "}
                      <strong>Prostaglandin E2 (PGE2)</strong> synthesis. This
                      drops the elevated thermostat set-point, triggering
                      cutaneous vasodilation and heat loss.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Peripheral Analgesia &amp; Anti-Inflammation:
                      </strong>
                      Prevents PGE2 and PGI2 from sensitizing peripheral A-delta
                      and C-fiber pain receptors to bradykinin and histamine at
                      injury sites, while reducing local microvascular
                      permeability.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Key Distinction:
                  </strong>
                  Unlike Aspirin, Ibuprofen binds <em>reversibly</em> to COX
                  enzymes; its antiplatelet effect wears off once the drug
                  clears circulation (~24 hours).
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-amber-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Take With Food / Milk:
                  </strong>
                  Always administer with or after food, milk, or a full glass of
                  water to reduce direct chemical irritation of the gastric
                  mucosa.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Age Cutoff (6 Months):
                  </strong>
                  Strictly contraindicated in infants under{" "}
                  <strong>6 months of age</strong> due to immature renal tubular
                  function and altered drug clearance.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Hydration Mandatory:
                  </strong>
                  Never give to dehydrated or vomiting patients without
                  restoring fluids. Hypovolemia + NSAID = acute pre-renal
                  ischemic kidney failure.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Lowest Dose, Shortest Time:
                  </strong>
                  Prescribe the lowest effective therapeutic dose for the
                  shortest duration necessary to minimize cardiovascular and
                  gastrointestinal event risk.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Primary
                Clinical Uses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-white block mb-1">
                    1. Inflammatory Fevers &amp; Infections
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-400">
                    <li>Acute Otitis Media (ear infections)</li>
                    <li>Acute Pharyngitis &amp; Tonsillitis</li>
                    <li>High-grade fever where paracetamol fails</li>
                    <li>Viral fever with severe joint/muscle pain</li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-white block mb-1">
                    2. Musculoskeletal &amp; Joint Pain
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-400">
                    <li>Osteoarthritis &amp; Rheumatoid Arthritis</li>
                    <li>Ankylosing spondylitis</li>
                    <li>Acute sprains, strains &amp; sports injuries</li>
                    <li>Tendonitis and bursitis</li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-white block mb-1">
                    3. Somatic &amp; Gynecological Pain
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-400">
                    <li>Primary Dysmenorrhea (menstrual cramps)</li>
                    <li>Dental pain &amp; post-extraction inflammation</li>
                    <li>Tension headaches &amp; acute migraine attacks</li>
                    <li>
                      Closure of Patent Ductus Arteriosus (IV in preterms)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 2: WHY IBUPROFEN VS. PARACETAMOL? --- */}
        {activeTab === "vs-paracetamol" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Why Use Ibuprofen When Paracetamol Exists for Fever?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Paracetamol is the safer universal first-line antipyretic,
                    but it only acts centrally in the brain. Ibuprofen possesses
                    unique pharmacological advantages that make it clinically
                    superior in specific inflammatory and high-grade febrile
                    conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-1">
                    Advantage 1
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    True Anti-Inflammatory Power
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    <strong>
                      Paracetamol has zero peripheral anti-inflammatory action
                    </strong>{" "}
                    because cellular peroxides in inflamed tissues deactivate
                    it.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    If a child or adult has a fever{" "}
                    <em>driven by localized physical inflammation</em> (e.g.,
                    severe ear pain in otitis media, swollen tonsils, dental
                    abscess, swollen joints),{" "}
                    <strong>
                      Ibuprofen treats both the fever and the inflamed tissue
                      swelling
                    </strong>
                    , yielding far better pain relief.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-amber-300">
                  <em>Clinical Pick:</em> Earache + fever &rarr; Choose
                  Ibuprofen.
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-teal-400 font-bold block mb-1">
                    Advantage 2
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    Longer Duration of Action
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Paracetamol lasts approximately{" "}
                    <strong>4 to 6 hours</strong>. High-grade fevers often
                    bounce back at hour 4.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Ibuprofen suppresses temperature curves for{" "}
                    <strong>6 to 8 hours</strong>. This extended therapeutic
                    window is ideal for <strong>overnight fever control</strong>
                    , allowing sick pediatric patients and adults to sleep
                    through the night without febrile awakening.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-teal-300">
                  <em>Clinical Pick:</em> Bedtime dose for persistent fever
                  &rarr; Choose Ibuprofen.
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block mb-1">
                    Advantage 3
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    Potency in Refractory Fever
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Clinical trials demonstrate that Ibuprofen achieves a
                    slightly faster rate of temperature decline and greater
                    overall thermal reduction than Paracetamol at recommended
                    weight-based doses.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    When paracetamol monotherapy fails to control stubborn
                    fevers (&gt; 39°C / 102.2°F), switching to or alternating
                    with Ibuprofen provides effective antipyresis.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-rose-300">
                  <em>Caution:</em> Routine alternating therapy increases dosing
                  error risk; only do so under medical guidance.
                </div>
              </div>
            </div>

            {/* Head-to-Head Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[650px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Feature</th>
                    <th className="p-3.5 text-teal-300">
                      Paracetamol (Acetaminophen)
                    </th>
                    <th className="p-3.5 text-amber-300">Ibuprofen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Drug Class</td>
                    <td className="p-3.5">
                      Non-Opioid Analgesic / Antipyretic
                    </td>
                    <td className="p-3.5">
                      Non-Steroidal Anti-Inflammatory Drug (NSAID)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Anti-Inflammatory Effect
                    </td>
                    <td className="p-3.5 text-slate-400">
                      None (Inactive in peripheral tissue)
                    </td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      Strong (Inhibits peripheral COX-1 &amp; COX-2)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Duration of Fever Relief
                    </td>
                    <td className="p-3.5">4 – 6 hours</td>
                    <td className="p-3.5 text-amber-300 font-bold">
                      6 – 8 hours (Longer nocturnal coverage)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Age Limit</td>
                    <td className="p-3.5 text-teal-300">
                      Safe from birth / neonates (weight-based)
                    </td>
                    <td className="p-3.5 text-rose-300 font-bold">
                      Strictly &ge; 6 months of age
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Stomach / GI Safety
                    </td>
                    <td className="p-3.5 text-teal-300">
                      Very safe (Does not cause ulcers)
                    </td>
                    <td className="p-3.5 text-rose-400">
                      Risk of gastritis, ulcers, bleeding (take with food)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Kidney / Hydration Safety
                    </td>
                    <td className="p-3.5 text-teal-300">
                      Safe in mild dehydration
                    </td>
                    <td className="p-3.5 text-rose-400 font-bold">
                      DANGEROUS in dehydration (renal failure risk)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Organ at Risk in Overdose
                    </td>
                    <td className="p-3.5 text-rose-400">
                      Liver (Hepatotoxicity &bull; NAPQI)
                    </td>
                    <td className="p-3.5 text-amber-300">
                      Stomach, Kidneys &amp; Metabolic Acidosis
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Pregnancy Safety
                    </td>
                    <td className="p-3.5 text-teal-300">
                      Safe in all trimesters
                    </td>
                    <td className="p-3.5 text-rose-400 font-bold">
                      Avoid in 3rd trimester (premature DA closure)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- VIEW 3: DOSING & WHO CAN USE IT --- */}
        {activeTab === "dosing" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Who Can and Cannot Use */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Who CAN
                  Use It?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Infants &ge; 6 Months:</strong> Weighing at least
                    5–6 kg with well-hydrated status.
                  </li>
                  <li>
                    <strong>Children &amp; Teenagers:</strong> Excellent for
                    pediatric otitis media, tonsillitis, and high fevers.
                  </li>
                  <li>
                    <strong>Healthy Adults:</strong> With fever, headaches,
                    toothaches, menstrual cramps, or sprains.
                  </li>
                  <li>
                    <strong>Patients with Liver Disease:</strong> In
                    mild-to-moderate stable hepatic impairment where Paracetamol
                    is restricted (under physician guidance).
                  </li>
                  <li>
                    <strong>Breastfeeding Mothers:</strong> Compatible with
                    breastfeeding; negligible amounts enter breast milk.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-400" /> Who CANNOT
                  Use It? (Contraindications)
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Infants Under 6 Months:</strong> Absolute
                    contraindication.
                  </li>
                  <li>
                    <strong>Active Peptic Ulcer Disease or GI Bleeding:</strong>{" "}
                    Can cause catastrophic perforation.
                  </li>
                  <li>
                    <strong>
                      Severe Chronic Kidney Disease (CKD) or Dehydration:
                    </strong>{" "}
                    Triggers acute kidney injury.
                  </li>
                  <li>
                    <strong>Severe Heart Failure (NYHA III/IV):</strong> Causes
                    sodium and fluid retention.
                  </li>
                  <li>
                    <strong>
                      Third Trimester of Pregnancy (&ge; 20–30 Weeks):
                    </strong>{" "}
                    Causes premature closure of ductus arteriosus and
                    oligohydramnios.
                  </li>
                  <li>
                    <strong>
                      Aspirin-Exacerbated Respiratory Disease (AERD):
                    </strong>{" "}
                    NSAIDs trigger severe bronchospasm in triad asthma.
                  </li>
                </ul>
              </div>
            </div>

            {/* Pediatric Weight-Based Master Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Pediatric Weight-Based Dosing Ladder
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Golden Formula: 5 to 10 mg/kg per dose &bull; Every 6 to 8
                  Hours
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age Bracket</th>
                      <th className="p-3.5">Body Weight</th>
                      <th className="p-3.5">Formulation Concentration</th>
                      <th className="p-3.5">Dose Volume (mL / mg)</th>
                      <th className="p-3.5">Frequency &amp; Max Limit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        0 – 5 months
                      </td>
                      <td className="p-3.5 font-mono text-rose-400">
                        &lt; 5 kg
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        CONTRAINDICATED &bull; Use Paracetamol (10–15 mg/kg) if
                        &ge; 1 month
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        6 – 11 months
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        6 – 8 kg
                      </td>
                      <td className="p-3.5">
                        Infant Drops (50 mg/1.25 mL) or Syrup (100 mg/5 mL)
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        50 mg – 75 mg (2.5 – 3.75 mL syrup)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6–8H &bull; Max 3–4 times/day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        12 – 23 months
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        9 – 11 kg
                      </td>
                      <td className="p-3.5">Oral Suspension (100 mg/5 mL)</td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        100 mg (5.0 mL / 1 tsp)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6–8H &bull; Max 4 times/day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        2 – 3 years
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        12 – 15 kg
                      </td>
                      <td className="p-3.5">Oral Suspension (100 mg/5 mL)</td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        120 mg – 150 mg (6.0 – 7.5 mL)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6–8H &bull; Max 4 times/day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        4 – 5 years
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        16 – 19 kg
                      </td>
                      <td className="p-3.5">Oral Suspension (100 mg/5 mL)</td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        160 mg – 190 mg (8.0 – 9.5 mL)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6–8H &bull; Max 4 times/day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        6 – 8 years
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        20 – 25 kg
                      </td>
                      <td className="p-3.5">Suspension OR Chewable Tablet</td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        200 mg (10 mL syrup OR 1x 200mg Tab)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6–8H &bull; Max 4 times/day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        9 – 11 years
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        26 – 35 kg
                      </td>
                      <td className="p-3.5">Tablets / Caplets (200 mg)</td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        250 mg – 300 mg
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6–8H &bull; Max 4 times/day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        12+ years &amp; Adults
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        &gt; 40 – 50 kg
                      </td>
                      <td className="p-3.5">
                        Standard Adult Tablets (200 mg / 400 mg)
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        200 mg – 400 mg per dose
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q4–6H (OTC max 1200 mg/day)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Adult Strength Cards (200mg, 400mg, 600mg, 800mg) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
                <div>
                  <span className="text-base font-mono font-bold text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                    200 mg
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2 mb-1">
                    OTC Starting Dose
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    First-line over-the-counter dose for mild fever, tension
                    headaches, and mild dental aches. Excellent safety margin
                    with lowest GI irritation risk.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-3 pt-2 border-t border-slate-800">
                  Dose: 1 tablet Q4–6H
                </span>
              </div>

              <div className="p-4 rounded-xl border border-amber-500/30 bg-slate-900/40 flex flex-col justify-between">
                <div>
                  <span className="text-base font-mono font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    400 mg
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2 mb-1">
                    Standard Adult Therapeutic
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    The standard dose for acute high fever, primary
                    dysmenorrhea, migraine attacks, and acute soft tissue
                    sprains. Provides robust antipyresis for 6–8 hours.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-amber-300 mt-3 pt-2 border-t border-slate-800">
                  Dose: 1 tablet Q6–8H (OTC max 1200mg)
                </span>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
                <div>
                  <span className="text-base font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    600 mg
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2 mb-1">
                    Prescription Anti-Inflammatory
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Prescribed for moderate rheumatoid arthritis, osteoarthritis
                    flares, and post-surgical orthopedics. Not typically used
                    for simple fever.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 mt-3 pt-2 border-t border-slate-800">
                  Dose: 1 tablet Q8H (Rx only)
                </span>
              </div>

              <div className="p-4 rounded-xl border border-rose-500/30 bg-slate-900/40 flex flex-col justify-between">
                <div>
                  <span className="text-base font-mono font-bold text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    800 mg
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2 mb-1">
                    Maximum Single Dose (Rx)
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Maximum single oral dose for severe inflammatory joint
                    destruction. Taking 800 mg TID reaches the absolute daily
                    ceiling (2400 mg). Requires gastroprotection (PPI).
                  </p>
                </div>
                <span className="text-[10px] font-mono text-rose-400 mt-3 pt-2 border-t border-slate-800">
                  Dose: 1 tab TID (Strict max 2400mg/day)
                </span>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 4: SIDE EFFECTS, WARNINGS & OVERDOSE --- */}
        {activeTab === "warnings" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Black Box Warnings Header */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    FDA Black Box Warnings &amp; Clinical Safety Red Flags
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    All non-steroidal anti-inflammatory drugs (NSAIDs),
                    including Ibuprofen, carry mandatory black box warnings
                    regarding two major organ systems: the{" "}
                    <strong>Cardiovascular System</strong> and the{" "}
                    <strong>Gastrointestinal Tract</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* The 3 Core Safety Threats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              {/* Gastrointestinal Danger */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  1. Gastrointestinal Risk (Bleeding &amp; Ulcers)
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Inhibiting COX-1 depletes protective mucosal PGE2 and PGI2,
                  halting gastric bicarbonate secretion and reducing mucosal
                  blood flow.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 leading-snug">
                  Can cause peptic ulceration, massive upper GI hemorrhage, or
                  perforation without warning. Highest risk in elderly,
                  alcoholics, or patients taking oral
                  corticosteroids/anticoagulants.
                </div>
              </div>

              {/* Cardiovascular Danger */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  2. Cardiovascular Risk (MI &amp; Stroke)
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Inhibiting endothelial COX-2 reduces vasodilatory,
                  anti-thrombotic <strong>Prostacyclin (PGI2)</strong> without
                  completely suppressing platelet COX-1{" "}
                  <strong>Thromboxane A2 (TXA2)</strong>.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 leading-snug">
                  This imbalance favors vasoconstriction and platelet
                  aggregation, increasing the relative risk of acute myocardial
                  infarction and stroke, especially with high doses (&ge; 2400
                  mg/day) and prolonged use.
                </div>
              </div>

              {/* Renal Danger */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Renal Hemodynamic Collapse (AKI)
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Prostaglandins normally dilate the renal afferent arteriole to
                  maintain glomerular capillary perfusion pressure when blood
                  volume drops.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 leading-snug">
                  Blocking prostaglandins causes afferent arteriolar
                  constriction and a sudden collapse in GFR. In a dehydrated
                  child or elderly patient, this causes acute kidney injury
                  (AKI).
                </div>
              </div>
            </div>

            {/* Overdose / What Happens When Overused */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-rose-400">
                <ShieldAlert className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Overdose Toxicity: What Happens if You Take Too Much?
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Unlike Paracetamol, which causes delayed centrilobular liver
                necrosis, Ibuprofen overdose primarily produces{" "}
                <strong>
                  neurological depression, severe metabolic acidosis, acute
                  renal failure, and gastrointestinal toxicity
                </strong>
                . Toxicity typically occurs with acute ingestions &gt; 100 mg/kg
                (mild) and becomes severe &gt; 400 mg/kg.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-white block mb-0.5">
                    Mild Overdose (&lt; 100 mg/kg)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Nausea, epigastric vomiting, abdominal pain, lethargy,
                    tinnitus (ringing in ears), mild drowsiness.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-0.5">
                    Moderate (100 – 400 mg/kg)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Marked CNS depression, stupor, loss of consciousness, sinus
                    bradycardia, hypotension, hypokalemia.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-400 block mb-0.5">
                    Severe (&gt; 400 mg/kg)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Refractory high anion-gap metabolic acidosis, seizures,
                    coma, acute tubular necrosis, apnea, cardiovascular
                    collapse.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-teal-900/50">
                  <strong className="text-teal-300 block mb-0.5">
                    Management Protocol
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    <strong>No specific antidote exists.</strong> Activated
                    charcoal if within 1–2 hours. Aggressive IV fluid
                    rehydration, sodium bicarbonate for acidosis, and supportive
                    hemodialysis if refractory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 5: NSAID CLASS DEEP DIVE --- */}
        {activeTab === "nsaid-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
                Class Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                What is the NSAID Drug Class?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Non-Steroidal Anti-Inflammatory Drugs (NSAIDs) are among the
                most widely consumed therapeutic agents worldwide. They are
                distinct from corticosteroids (like Prednisone or Dexamethasone)
                because they lack a steroidal molecular ring structure, avoiding
                steroidal immunosuppression and endocrine disruption, while
                retaining potent anti-inflammatory, analgesic, and antipyretic
                capabilities.
              </p>
            </div>

            {/* How NSAID Dose Works */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-teal-400">
                <Activity className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  How Does an NSAID Dose Work? (The Dose-Response Ceiling)
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                NSAIDs exhibit a unique pharmacological phenomenon called the{" "}
                <strong>Analgesic Ceiling Effect</strong>:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    1. The Analgesic Ceiling (Lower Doses)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    At lower doses (e.g., Ibuprofen 200 mg – 400 mg), maximum
                    relief of acute pain and fever is achieved. Increasing the
                    dose beyond 400 mg does <strong>not</strong> produce
                    additional pain relief for simple headaches or fevers; it
                    only saturates the enzymes and prolongs the duration.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    2. The Anti-Inflammatory Threshold (Higher Doses)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    To suppress chronic tissue swelling in rheumatoid arthritis
                    or severe osteoarthritis, sustained high tissue saturation
                    is required (e.g., Ibuprofen 600 mg – 800 mg TID). However,
                    this high dose sharply escalates gastric ulcer and
                    cardiovascular event rates.
                  </p>
                </div>
              </div>
            </div>

            {/* Major Chemical Subclasses of NSAIDs */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" /> Chemical
                Classification of NSAIDs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Propionic Acids
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Ibuprofen, Naproxen, Ketoprofen
                  </p>
                  <p className="text-slate-400">
                    Well-balanced non-selective inhibitors. Naproxen has the
                    safest cardiovascular profile among non-selective NSAIDs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Acetic Acids
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Diclofenac, Indomethacin, Ketorolac
                  </p>
                  <p className="text-slate-400">
                    Extremely potent analgesics. Ketorolac is limited to 5 days
                    max due to high renal/GI toxicity. Indomethacin is
                    first-line for gout.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Oxicams &amp; Enolic Acids
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Piroxicam, Meloxicam
                  </p>
                  <p className="text-slate-400">
                    Very long half-lives allowing once-daily dosing. Meloxicam
                    exhibits preferential COX-2 selectivity at lower doses.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-purple-300 block mb-1">
                    Selective COX-2 Inhibitors
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Celecoxib, Etoricoxib, Parecoxib
                  </p>
                  <p className="text-slate-400">
                    Spares COX-1; minimal stomach ulcer risk. However, lacks
                    antiplatelet protection, carrying elevated cardiovascular
                    thrombotic risks.
                  </p>
                </div>
              </div>
            </div>

            {/* The Classic Triple Whammy Warning */}
            <div className="p-5 rounded-2xl border border-rose-500/40 bg-rose-950/20 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2 text-rose-400">
                <AlertCircle className="w-5 h-5" />
                <h4 className="text-sm font-bold text-white">
                  The Deadly &quot;Triple Whammy&quot; Drug Interaction
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Combining an <strong>NSAID (like Ibuprofen)</strong> with an{" "}
                <strong>ACE Inhibitor or ARB</strong> (e.g., Enalapril,
                Telmisartan) plus a <strong>Diuretic</strong> (e.g., Furosemide,
                Hydrochlorothiazide) causes acute, severe renal failure:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-amber-300 block mb-0.5">
                    Diuretic:
                  </strong>
                  Decreases circulating plasma volume (hypovolemia).
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-rose-300 block mb-0.5">NSAID:</strong>
                  Constricts afferent arteriole (cuts off blood entering
                  glomerulus).
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-purple-300 block mb-0.5">
                    ACE-I / ARB:
                  </strong>
                  Dilates efferent arteriole (collapses glomerulus pressure).
                </div>
              </div>
              <span className="text-[11px] text-rose-300 block mt-3 font-sans">
                <strong>Result:</strong> Filtration pressure collapses to zero,
                precipitating severe Acute Tubular Necrosis and permanent
                dialysis dependence.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
