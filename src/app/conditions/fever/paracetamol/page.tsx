"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Pill,
  Activity,
  AlertCircle,
  AlertTriangle,
  ShieldCheck,
  HeartPulse,
  Brain,
  Droplets,
  Layers,
  Clock,
  Scale,
  Sparkles,
  Info,
  CheckCircle2,
  Syringe,
} from "lucide-react";

export default function ParacetamolPage() {
  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "strengths" | "toxicity"

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/fever"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Pyrexia &amp; Antipyretics</span>
          </Link>
        </div>
        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              First-Line Antipyretic
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Paracetamol (Acetaminophen / APAP)
            </h1>

            {/* Nomenclature Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-teal-300 font-mono">
                  para-acetylaminophenol
                </strong>{" "}
                [N-(4-hydroxyphenyl)acetamide].
              </p>

              {/* Regional Naming Standards Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-teal-400 font-mono">
                    Paracetamol
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (INN / BAN) &bull; UK, India, Commonwealth, Europe
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Acetaminophen
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    (USAN / JAN) &bull; USA, Canada, Japan
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/80 text-[11px] font-mono text-slate-400">
                  Acronym: <strong>APAP</strong>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on central prostaglandin inhibition, strength
              stratification (350 mg to 1000 mg IV), therapeutic window, and
              hepatic toxicity management.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Max Daily Ceiling
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                4000 mg / 24h
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Specific Antidote
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                N-Acetylcysteine
              </span>
            </div>
          </div>
        </div>
        {/* Section Navigation Tabs */}
        {/* Responsive Segmented Tabs Container */}
        <div className="w-full overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Mechanism &amp; Indications</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("strengths")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "strengths"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>Dose Stratification (350mg &ndash; 1g)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("toxicity")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "toxicity"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Overdose &amp; Liver Toxicity</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("drugclass")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "drugclass"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Brain className="w-4 h-4 shrink-0" />
              <span>Drug Class &amp; COX Enzymes</span>
            </button>
          </div>
        </div>
        {/* --- VIEW 1: OVERVIEW & MECHANISM --- */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* What is it & How it works */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Paracetamol?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Paracetamol (known internationally as{" "}
                    <strong>Acetaminophen</strong> or <strong>APAP</strong>) is
                    a non-opioid, aniline-derived analgesic and antipyretic
                    agent. It is classified under the WHO Model List of
                    Essential Medicines as the primary therapeutic baseline for
                    pyrexia and mild-to-moderate somatic pain.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Unlike non-steroidal anti-inflammatory drugs (NSAIDs like
                    Ibuprofen or Aspirin), paracetamol has{" "}
                    <strong>minimal peripheral anti-inflammatory action</strong>
                    , does not cause gastrointestinal ulceration, does not
                    impair renal blood flow, and does not inhibit platelet
                    aggregation.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Primary Clearance Pathway:
                  </strong>
                  Hepatic glucuronidation (55%) and sulfation (30%), with ~5–10%
                  converted via CYP2E1 into NAPQI.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Pharmacodynamics)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Central Hypothalamic Reset (Antipyretic Effect):
                      </strong>
                      Inhibits central cyclooxygenase enzymes (COX-1/COX-2
                      variants and peroxidase catalytic sites) in the vascular
                      endothelial cells of the brain, stopping the conversion of
                      arachidonic acid into{" "}
                      <strong>Prostaglandin E2 (PGE2)</strong> in the preoptic
                      hypothalamus. This drops the elevated thermal set-point
                      back to 37°C, triggering peripheral vasodilation and
                      sweating.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Cannabinoid &amp; Serotonergic Modulation (Analgesic
                        Effect):
                      </strong>
                      Deacetylated in the liver and brain to p-aminophenol,
                      which conjugates with arachidonic acid to form{" "}
                      <strong>AM404</strong>. AM404 activates cannabinoid CB1
                      receptors, acts as a TRPV1 agonist, and stimulates
                      descending inhibitory serotonergic spinal pathways to
                      blunt pain transmission.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-amber-300 block mb-0.5">
                    Why does it fail on peripheral swelling?
                  </strong>
                  High concentrations of peroxides present in peripheral
                  inflammatory exudates (e.g., infected joints) neutralize
                  paracetamol&apos;s inhibitory effect on COX enzymes.
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
                    Dosing Interval:
                  </strong>
                  Maintain minimum <strong>4 to 6 hours</strong> between oral
                  doses. Never exceed 4 doses in any 24-hour window.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Onset of Action:
                  </strong>
                  Oral tablets take effect within <strong>30–60 minutes</strong>
                  ; peak plasma levels occur at 60–90 min. IV paracetamol begins
                  working within <strong>10–15 minutes</strong>.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Pediatric Gold Rule:
                  </strong>
                  Always dose by <strong>weight (10–15 mg/kg)</strong>, NEVER by
                  age alone. Age-based guesses frequently lead to underdosing or
                  accidental toxicity.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Pregnancy &amp; Lactation:
                  </strong>
                  Safest first-line analgesic and antipyretic in all trimesters
                  of pregnancy and during breastfeeding when used at lowest
                  therapeutic doses.
                </div>
              </div>
            </div>

            {/* Common Uses vs Adverse Effects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> Common
                  Clinical Indications
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Pyrexia (Fever):</strong> Viral infections (Dengue,
                    Influenza, Common Cold, COVID-19), post-vaccination febrile
                    episodes.
                  </li>
                  <li>
                    <strong>Mild-to-Moderate Somatic Pain:</strong> Tension
                    headaches, migraine attacks (in combination with caffeine),
                    dental extractions.
                  </li>
                  <li>
                    <strong>Musculoskeletal Pain:</strong> Mild osteoarthritis,
                    post-exercise myalgia, tension-type backaches.
                  </li>
                  <li>
                    <strong>Dysmenorrhea:</strong> Primary menstrual cramps
                    (often combined with antispasmodics like dicyclomine).
                  </li>
                  <li>
                    <strong>Multimodal Post-Operative Analgesia:</strong>{" "}
                    Co-administered as IV paracetamol alongside opioids to
                    reduce opioid consumption by 20–30%.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" /> Documented
                  Side Effects
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Therapeutic Doses:</strong> Extremely well
                    tolerated; rare nausea, transient asymptomatic rise in serum
                    transaminases (ALT/AST).
                  </li>
                  <li>
                    <strong>Allergic / Hypersensitivity:</strong> Rare
                    erythematous skin rash, urticaria; extremely rare
                    Stevens-Johnson syndrome (SJS) and Toxic Epidermal
                    Necrolysis (TEN).
                  </li>
                  <li>
                    <strong>Intravenous-Specific:</strong> Transient flushing,
                    tachycardia, and mild transient hypotension if infused too
                    rapidly (&lt; 15 minutes).
                  </li>
                  <li>
                    <strong>Hematologic (Chronic high use):</strong> Rare
                    leukopenia, neutropenia, or thrombocytopenic purpura.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* --- VIEW 2: DOSE STRATIFICATION (350mg, 500mg, 650mg, 1000mg) --- */}
        {activeTab === "strengths" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Top Clinical Rule Banner */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-start gap-3">
              <Info className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-0.5">
                  Universal Dosing Principles &amp; Age-Weight Correlation:
                </strong>
                Always dose pediatric patients by{" "}
                <strong className="text-teal-300">
                  actual body weight (10–15 mg/kg per dose)
                </strong>{" "}
                rather than age alone. Never exceed 4 doses in 24 hours, and
                maintain a strict minimum interval of 4 to 6 hours between
                administrations.
              </div>
            </div>

            {/* Comprehensive Pediatric-to-Adult Weight-Based Master Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Pediatric to Adult Stratified Dosing Guide
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Standard Rule: 10–15 mg/kg/dose | Max 4 times/day
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age Bracket</th>
                      <th className="p-3.5">Body Weight</th>
                      <th className="p-3.5">Formulation &amp; Dose</th>
                      <th className="p-3.5">Standard Volume</th>
                      <th className="p-3.5">Interval &amp; Max Limit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    {/* 0 - 3 Months */}
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        0 – 3 months
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        3 – 5 kg
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 font-mono text-[11px]">
                          Infant Drops (100 mg/mL)
                        </span>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        0.5 mL (50 mg)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6–8H &bull; Max 4 times/day
                      </td>
                    </tr>

                    {/* 4 - 9 Months */}
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        4 – 9 months
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        6 – 8 kg
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 font-mono text-[11px]">
                          Infant Drops (100 mg/mL)
                        </span>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        1.0 mL (100 mg)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6–8H &bull; Max 4 times/day
                      </td>
                    </tr>

                    {/* 10 Months - 2 Years */}
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        10 months – 2 years
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        9 – 12 kg
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono text-[11px]">
                          Oral Syrup (120 mg/5 mL)
                        </span>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        5.0 mL (1 tsp / 120 mg)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6H &bull; Max 4 times/day
                      </td>
                    </tr>

                    {/* 2 - 4 Years */}
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        2 – 4 years
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        13 – 16 kg
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono text-[11px]">
                          Syrup Forte (250 mg/5 mL)
                        </span>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        3.5 – 4.0 mL (175–200 mg)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6H &bull; Max 4 times/day
                      </td>
                    </tr>

                    {/* 4 - 6 Years */}
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        4 – 6 years
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        17 – 20 kg
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono text-[11px]">
                          Syrup Forte (250 mg/5 mL)
                        </span>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        5.0 mL (1 tsp / 250 mg)
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6H &bull; Max 4 times/day
                      </td>
                    </tr>

                    {/* 6 - 8 Years */}
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        6 – 8 years
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        21 – 25 kg
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono text-[11px]">
                          Syrup Forte OR 325 mg Tablet
                        </span>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        6.5 mL Syrup OR 1x 325 mg Tab
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6H &bull; Also used for pain relief
                      </td>
                    </tr>

                    {/* 8 - 11 Years */}
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        8 – 11 years
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        26 – 34 kg
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono text-[11px]">
                          Chewable / Dispersible Tab
                        </span>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        250 mg – 375 mg
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Every 4 to 6 hours as needed
                      </td>
                    </tr>

                    {/* 11 - 15 Years */}
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        11 – 15 years
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-semibold">
                        35 – 49 kg
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-mono text-[11px]">
                          Standard Adult Tablet
                        </span>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        500 mg Tablet
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6H &bull; Max 2000 mg/24h
                      </td>
                    </tr>

                    {/* 16+ Years (Adult) */}
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        16+ years (Adults)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        50+ kg
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono text-[11px]">
                          Oral Tab / Caplet
                        </span>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        500 mg – 650 mg
                      </td>
                      <td className="p-3.5 text-slate-400">
                        Q6–8H &bull; Max 3–4 tabs/day
                      </td>
                    </tr>

                    {/* Refractory Adult High-Dose */}
                    <tr className="hover:bg-slate-900/40 transition-colors bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-200">
                        Refractory Fever (Adults)
                      </td>
                      <td className="p-3.5 font-mono text-rose-300 font-bold">
                        &gt; 50 kg
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 font-mono text-[11px]">
                          1000 mg (1 g) Tab OR IV
                        </span>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-rose-300">
                        1000 mg (2x 500mg or 100mL IV)
                      </td>
                      <td className="p-3.5 text-rose-300/80">
                        Only if 650mg fails &bull; Max 2x/day (or Q8H, &le;4g/d)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Solid Oral & IV Dose Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* 325 mg - 350 mg Strength */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-mono font-bold text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                      325 mg – 350 mg
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                      Pain Relief / Combo / Older Children
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Low-Dose Analgesic &amp; Pediatric Solid Transition
                  </h3>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Primary Roles:</span>
                      <span className="text-slate-200">
                        Pain relief &amp; 6–8y fever
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Target Weight:</span>
                      <span className="text-teal-300 font-bold">
                        21–25 kg (Peds) OR Adult Combo
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    <strong>Clinical Role:</strong> Serves dual clinical
                    utility: (1) Primary analgesic dose in fixed-dose
                    combinations (FDCs) with NSAIDs (e.g., Aceclofenac 100 mg +
                    Paracetamol 325 mg) or Tramadol (37.5 mg + 325 mg) to
                    provide synergistic multimodal pain relief without
                    hepatotoxic cumulative load. (2) Standalone antipyretic
                    tablet for children aged 6–8 years (21–25 kg) transitioning
                    away from oral liquid syrups.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 text-[11px] text-slate-400">
                  <em>Frequency:</em> 1 tablet every 6 hours as needed; maximum
                  4 times in 24 hours.
                </div>
              </div>

              {/* 500 mg Strength */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      500 mg
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                      Adolescents (11–15y) &amp; Light Adults
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Pediatric/Adolescent Standard &amp; Light Adult Dose
                  </h3>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Target Age &amp; Weight:</span>
                      <span className="text-slate-200">
                        11–15 years (35–49 kg)
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Adult Threshold:</span>
                      <span className="text-cyan-300 font-bold">
                        First choice for adults &lt; 50 kg
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    <strong>Clinical Role:</strong> Widely prescribed for
                    teenagers and adolescents (35–49 kg) who require a solid
                    oral antipyretic to control fever. Also represents the
                    safest initial starting strength for underweight adults
                    (&lt; 50 kg), elderly patients with impaired baseline
                    nutrition, or patients with mild chronic renal
                    insufficiency.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 text-[11px] text-slate-400">
                  <em>Guideline:</em> Do not exceed 4 tablets (2000 mg) per 24
                  hours in adolescents weighing under 50 kg.
                </div>
              </div>

              {/* 650 mg Strength */}
              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-mono font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                      650 mg
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      Adult Standard (16+ Years / 50+ kg)
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    First-Line Adult Febrile Standard (Dolo / Crocin 650)
                  </h3>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Target Population:</span>
                      <span className="text-slate-200">
                        Adults 16+ years (&ge; 50 kg)
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Dosing Regimen:</span>
                      <span className="text-amber-300 font-bold">
                        1 tablet Q6–8H (Max 3–4 tabs/day)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    <strong>Clinical Role:</strong> The gold standard
                    prescription strength in primary and secondary outpatient
                    care for adult viral fevers (Dengue, Influenza, COVID-19,
                    Malaria prodrome). 650 mg reaches the necessary therapeutic
                    plasma concentration (10–20 &micro;g/mL) to reset the adult
                    hypothalamic thermostat and alleviate concurrent febrile
                    myalgias and headaches.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 text-[11px] text-amber-300/80">
                  <em>Daily Limit:</em> 1 tablet of 650 mg taken 4 times daily
                  equals 2600 mg/day, remaining safely below the 4000 mg
                  absolute hepatic ceiling.
                </div>
              </div>

              {/* 1000 mg / 1 g Strength */}
              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-mono font-bold text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20">
                      1000 mg (1 g)
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                      Refractory Adult Fever / IV Infusion
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    High-Grade Refractory Pyrexia &amp; Hospital IV Regimen
                  </h3>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Presentations:</span>
                      <span className="text-slate-200">
                        2x 500 mg Tabs OR 100 mL IV Infusion
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Schedule:</span>
                      <span className="text-rose-300 font-bold">
                        Typically 2 times/day (or Q8H if severe)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    <strong>Clinical Role:</strong> Reserved exclusively for
                    adults (&gt; 50 kg) when a 650 mg dose fails to break a
                    high-grade fever (&gt; 39.5°C / 103°F), or for hospitalized
                    surgical/ICU patients who are NPO (nil per os). The 1 g IV
                    formulation (100 mL ready-to-use vial) is infused over 15
                    minutes, achieving immediate antipyresis without GI
                    first-pass degradation.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 text-[11px] text-rose-300/80">
                  <em>Safety Rule:</em> Strictly restricted to adults. Never
                  combine two 650 mg tablets (1300 mg exceeds the single-dose
                  safety ceiling).
                </div>
              </div>
            </div>
          </div>
        )}
        {/* --- VIEW 3: TOXICITY & OVERDOSE --- */}
        {activeTab === "toxicity" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Paracetamol Toxicity &amp; Hepatic Necrosis Pathway
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Paracetamol overdose is the leading cause of acute liver
                    failure (ALF) in the Western world and a major emergency in
                    global critical care. Toxicity occurs when normal metabolic
                    pathways are overwhelmed, leading to massive centrilobular
                    liver necrosis.
                  </p>
                </div>
              </div>
            </div>

            {/* Pathophysiology of Overdose */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  Normal Therapeutic Doses
                </span>
                <p className="text-slate-300 leading-relaxed">
                  90% of paracetamol is safely conjugated in hepatocytes into
                  non-toxic glucuronide and sulfate metabolites and excreted in
                  urine. Only ~5–10% is oxidized by <strong>CYP2E1</strong> into
                  the toxic intermediate <strong>NAPQI</strong>{" "}
                  (N-acetyl-p-benzoquinone imine).
                </p>
                <div className="mt-3 p-2 rounded bg-slate-950 border border-slate-800 text-[11px] text-teal-300">
                  NAPQI is immediately neutralized by binding to hepatic{" "}
                  <strong>Glutathione (GSH)</strong>, forming harmless
                  mercapturic acid conjugates.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  Overdose (&gt; 150 mg/kg or &gt; 7.5–10 g)
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Sulfate and glucuronide pathways become saturated. Excess drug
                  is shunted to CYP2E1, creating massive quantities of NAPQI.
                  Once hepatic glutathione stores are depleted by &gt; 70%, free
                  NAPQI accumulates unchecked.
                </p>
                <div className="mt-3 p-2 rounded bg-slate-950 border border-rose-900/60 text-[11px] text-rose-300">
                  Free NAPQI binds covalently to cysteinyl proteins on
                  hepatocyte membranes, causing mitochondrial oxidative collapse
                  and acute centrilobular hepatic necrosis.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  The Specific Antidote: NAC
                </span>
                <p className="text-slate-300 leading-relaxed">
                  <strong>N-Acetylcysteine (NAC)</strong> provides cysteine, a
                  direct precursor for the de novo synthesis of cellular
                  glutathione (GSH). It directly detoxifies free NAPQI and
                  restores hepatic microcirculation.
                </p>
                <div className="mt-3 p-2 rounded bg-slate-950 border border-amber-900/60 text-[11px] text-amber-300">
                  Most effective when given within <strong>8 hours</strong> of
                  ingestion. Plotted on the{" "}
                  <strong>Rumack-Matthew Nomogram</strong> at 4 hours
                  post-ingestion.
                </div>
              </div>
            </div>

            {/* 4 Stages of Paracetamol Toxicity */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose-400" /> The 4 Clinical
                Stages of Overdose
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-slate-200 block mb-0.5">
                    Stage 1 (0.5 – 24 Hours)
                  </strong>
                  <span className="text-[11px] text-slate-400 block mb-1">
                    Preclinical Phase
                  </span>
                  <p className="text-slate-400">
                    Often asymptomatic or mild non-specific symptoms: anorexia,
                    nausea, vomiting, malaise, pallor. Serum transaminases
                    (AST/ALT) are still normal.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-0.5">
                    Stage 2 (24 – 72 Hours)
                  </strong>
                  <span className="text-[11px] text-slate-400 block mb-1">
                    Onset of Liver Injury
                  </span>
                  <p className="text-slate-400">
                    Right upper quadrant (RUQ) abdominal pain and liver
                    tenderness. Serum AST/ALT and Bilirubin begin exponential
                    rise; prothrombin time (PT/INR) becomes prolonged.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-400 block mb-0.5">
                    Stage 3 (72 – 96 Hours)
                  </strong>
                  <span className="text-[11px] text-rose-300 block mb-1">
                    Peak Hepatic Failure
                  </span>
                  <p className="text-slate-400">
                    Jaundice, coagulopathy (spontaneous bleeding), hepatic
                    encephalopathy, hypoglycemia, acute tubular necrosis (renal
                    failure). AST/ALT frequently exceed 10,000 IU/L.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-teal-900/50">
                  <strong className="text-teal-300 block mb-0.5">
                    Stage 4 (&gt; 96 Hours)
                  </strong>
                  <span className="text-[11px] text-teal-400 block mb-1">
                    Recovery or Demise
                  </span>
                  <p className="text-slate-400">
                    Survivors experience complete histologic liver regeneration
                    over weeks without chronic cirrhosis. In severe refractory
                    poisoning, liver transplantation is required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* --- VIEW: DRUG CLASS & COX ENZYME SCIENCE --- */}
        {activeTab === "drugclass" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Header Banner: Terminology Breakdown */}
            <div className="p-6 rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Non-Opioid Analgesic &amp; Antipyretic
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block text-sm mb-1">
                    Non-Opioid
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Does <strong>not</strong> bind to mu (&mu;), kappa
                    (&kappa;), or delta (&delta;) opioid receptors in the
                    central nervous system. Relieves mild-to-moderate pain
                    without producing physical dependence, addiction, tolerance,
                    or respiratory depression.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block text-sm mb-1">
                    Analgesic
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Greek: <em>an-</em> (without) + <em>algesis</em> (pain).
                    Selectively blunts pain sensation and lowers pain
                    sensitivity thresholds without inducing unconsciousness or
                    anesthesia.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-300 block text-sm mb-1">
                    Antipyretic
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Greek: <em>anti-</em> (against) + <em>pyretos</em> (fever).
                    Lowers an abnormally elevated body temperature set-point
                    back to normal physiological baseline (37°C / 98.6°F). Does{" "}
                    <strong>not</strong> lower normal core body temperature.
                  </p>
                </div>
              </div>
            </div>

            {/* How Non-Opioid Analgesics & Antipyretics Work */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-teal-400">
                <Activity className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  How Do Non-Opioid Analgesics &amp; Antipyretics Work?
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                When tissues are injured or inflamed, cell membrane
                phospholipids are broken down by{" "}
                <strong>Phospholipase A2</strong> into{" "}
                <strong>Arachidonic Acid (Fatty Acid)</strong>. The
                cyclooxygenase (COX) enzyme machinery converts this arachidonic
                acid into pro-inflammatory lipid messengers called{" "}
                <strong>Prostaglandins (PGs)</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                  <strong className="text-amber-300 block font-semibold">
                    1. Pain Relief Mechanism (Analgesia)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Prostaglandin E2 (PGE2) and Prostacyclin (PGI2) do not
                    directly cause pain by themselves; instead, they{" "}
                    <strong>
                      sensitize peripheral nociceptors (pain receptors)
                    </strong>{" "}
                    to mechanical touch, heat, bradykinin, and histamine.
                  </p>
                  <p className="text-slate-300">
                    By blocking COX enzymes, non-opioids prevent this
                    sensitization, blunting the pain signal before it ascends
                    the spinal cord to the brain. Paracetamol also creates{" "}
                    <strong>AM404</strong> in the central nervous system,
                    reinforcing descending pain-inhibitory pathways.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                  <strong className="text-rose-300 block font-semibold">
                    2. Fever Reduction Mechanism (Antipyresis)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Circulating inflammatory cytokines (IL-1, TNF-&alpha;, IL-6)
                    stimulate vascular endothelium in the brain&apos;s{" "}
                    <strong>
                      OVLT (Organum Vasculosum of the Lamina Terminalis)
                    </strong>{" "}
                    to synthesize PGE2 via COX-2.
                  </p>
                  <p className="text-slate-300">
                    PGE2 commands the preoptic anterior hypothalamus to elevate
                    the thermostat set-point. Non-opioids inhibit central COX
                    activity, clearing brain PGE2, resetting the thermostat to
                    37°C, and stimulating{" "}
                    <strong>
                      cutaneous vasodilation and sweating (diaphoresis)
                    </strong>{" "}
                    to dissipate heat.
                  </p>
                </div>
              </div>
            </div>

            {/* How COX Enzymes Work (Catalytic Steps) */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-teal-400">
                <Layers className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  How Does the Cyclooxygenase (COX) Enzyme Work?
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cyclooxygenase (officially{" "}
                <em>Prostaglandin-Endoperoxide Synthase</em> /{" "}
                <strong>PTGS</strong>) is a bifunctional homodimer enzyme
                embedded in the membranes of the endoplasmic reticulum and
                nuclear envelope. It performs a rapid two-step enzymatic
                reaction:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-teal-400 font-bold block mb-1">
                    STEP 1 &bull; Cyclooxygenase Active Site
                  </span>
                  <div className="text-slate-200 font-bold mb-1">
                    Arachidonic Acid &rarr; Prostaglandin G2 (PGG2)
                  </div>
                  <p className="text-slate-400 font-sans text-[11px] leading-relaxed">
                    The enzyme extracts a hydrogen atom from carbon-13 of
                    arachidonic acid and inserts two molecules of molecular
                    oxygen (O2), cyclizing it into the unstable endoperoxide
                    PGG2.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-amber-400 font-bold block mb-1">
                    STEP 2 &bull; Peroxidase Active Site
                  </span>
                  <div className="text-slate-200 font-bold mb-1">
                    Prostaglandin G2 (PGG2) &rarr; Prostaglandin H2 (PGH2)
                  </div>
                  <p className="text-slate-400 font-sans text-[11px] leading-relaxed">
                    The adjoining heme peroxidase active site rapidly reduces
                    the 15-hydroperoxyl group of PGG2 into PGH2. Specific
                    downstream tissue synthases then convert PGH2 into PGE2,
                    PGD2, PGF2&alpha;, PGI2 (prostacyclin), or TXA2
                    (thromboxane).
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-teal-500/20 text-xs text-slate-300 flex items-start gap-2">
                <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Where does Paracetamol act?</strong> While traditional
                  NSAIDs block the primary cyclooxygenase channel, Paracetamol
                  acts primarily by{" "}
                  <strong>
                    reducing the protoporphyrin radical at the peroxidase active
                    site
                  </strong>{" "}
                  in the central nervous system, effectively acting as an enzyme
                  antioxidant.
                </span>
              </div>
            </div>

            {/* COX-1 vs COX-2 Comparison Matrix */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400">
                <Scale className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  COX-1 vs. COX-2: Physiological Comparison
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* COX-1 Card */}
                <div className="p-5 rounded-2xl border border-blue-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                        Constitutive Enzyme
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        PTGS1 Gene
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      COX-1 (&quot;Housekeeping Enzyme&quot;)
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Constantly produced and expressed at baseline levels in
                      almost all normal human tissues. Responsible for
                      steady-state baseline physiological homeostasis:
                    </p>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                        <strong className="text-blue-300 block mb-0.5">
                          Gastric Cytoprotection:
                        </strong>
                        Synthesizes PGE2 and PGI2 in gastric mucosa, stimulating
                        protective alkaline bicarbonate mucus secretion and
                        maintaining mucosal blood flow to prevent acid erosion.
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                        <strong className="text-blue-300 block mb-0.5">
                          Platelet Aggregation:
                        </strong>
                        Exclusively expressed in platelets to synthesize{" "}
                        <strong>Thromboxane A2 (TXA2)</strong>, which causes
                        platelet clumping and vasoconstriction to stop bleeding.
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                        <strong className="text-blue-300 block mb-0.5">
                          Renal Perfusion:
                        </strong>
                        Maintains baseline renal blood flow and glomerular
                        filtration rate (GFR) by dilating the afferent
                        arterioles.
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 mt-4 text-[11px] text-rose-300/90 font-mono">
                    <strong>Inhibition Penalty:</strong> Blocking COX-1 causes
                    peptic ulcers, GI bleeding, and platelet dysfunction.
                  </div>
                </div>

                {/* COX-2 Card */}
                <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        Inducible Enzyme
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        PTGS2 Gene
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      COX-2 (&quot;Inflammatory Enzyme&quot;)
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Normally silent or present in minimal amounts in most
                      tissues. Rapidly upregulated (induced 10- to 80-fold) by
                      cytokines, endotoxins, and growth factors during cellular
                      trauma:
                    </p>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                        <strong className="text-amber-300 block mb-0.5">
                          Pain &amp; Inflammation:
                        </strong>
                        Produces high concentrations of PGE2 at injury sites,
                        leading to localized edema, redness, heat, and
                        hyperalgesia (pain sensitization).
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                        <strong className="text-amber-300 block mb-0.5">
                          Hypothalamic Pyresis:
                        </strong>
                        Induced directly in the brain&apos;s preoptic anterior
                        hypothalamus by IL-1&beta; and TNF-&alpha;, synthesizing
                        the PGE2 that drives fever.
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                        <strong className="text-amber-300 block mb-0.5">
                          Endothelial Prostacyclin:
                        </strong>
                        Constitutively active in vascular endothelium to
                        generate <strong>Prostacyclin (PGI2)</strong>, which
                        inhibits platelet aggregation and dilates blood vessels.
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 mt-4 text-[11px] text-amber-300/90 font-mono">
                    <strong>Therapeutic Goal:</strong> Selective COX-2
                    inhibition relieves fever and pain without causing direct
                    stomach ulcers.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Summary Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3">Feature</th>
                    <th className="p-3">COX-1 (Cyclooxygenase-1)</th>
                    <th className="p-3">COX-2 (Cyclooxygenase-2)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr>
                    <td className="p-3 font-semibold text-white">Expression</td>
                    <td className="p-3 text-blue-300">
                      Constitutive (Always active baseline)
                    </td>
                    <td className="p-3 text-amber-300">
                      Inducible (Turned on by inflammation)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">
                      Primary Role
                    </td>
                    <td className="p-3">
                      Stomach mucus, platelet TXA2, kidney GFR
                    </td>
                    <td className="p-3">
                      Fever (hypothalamus), pain, inflammation
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">
                      Inhibition Effect
                    </td>
                    <td className="p-3 text-rose-300">
                      Stomach irritation, ulceration, bleeding
                    </td>
                    <td className="p-3 text-teal-300">
                      Analgesia (pain relief) and Antipyresis (fever break)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">
                      Paracetamol Interaction
                    </td>
                    <td className="p-3">
                      Minimal peripheral inhibition (stomach safe)
                    </td>
                    <td className="p-3">
                      Strong central inhibition in brain/spinal cord
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
