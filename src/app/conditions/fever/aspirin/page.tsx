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
  Heart,
  Zap,
  Clock,
  Sparkles,
} from "lucide-react";

export default function AspirinPage() {
  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "antiplatelet-vs-fever" | "dosing" | "warnings" | "nsaid-class"

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-rose-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/fever"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-rose-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Pyrexia &amp; Antipyretics</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Irreversible Salicylate
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Aspirin (Acetylsalicylic Acid / ASA)
            </h1>

            {/* Nomenclature Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-rose-300 font-mono">
                  2-acetoxybenzoic acid
                </strong>{" "}
                [Acetylsalicylic Acid / ASA].
              </p>

              {/* Regional Naming Standards Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-rose-400 font-mono">Aspirin</strong>
                  <span className="text-slate-500 text-[11px]">
                    (USP / BAN / INN) &bull; Global Standard
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-teal-300 font-mono">
                    Common Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Bayer, Ecosprin, Disprin, Aspro, Bufferin
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/80 text-[11px] font-mono text-slate-400">
                  Acronym: <strong>ASA</strong>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on irreversible cyclooxygenase Serine
              acetylation, dual identity as an antiplatelet agent (75 mg – 81
              mg) and high-dose analgesic/antipyretic (325 mg – 650 mg),
              Reye&apos;s syndrome risks, and acute salicylate intoxication
              management.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Antiplatelet Window
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                75 – 81 mg / day
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Platelet Lifespan Block
              </span>
              <span className="text-xl font-bold text-rose-400 font-mono">
                7 – 10 Days
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
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Overview &amp; Mechanism</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("antiplatelet-vs-fever")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "antiplatelet-vs-fever"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Zap className="w-4 h-4 shrink-0" />
              <span>Why Avoid for Fever?</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dosing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dosing"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>Dose Stratification (75mg &ndash; 325mg+)</span>
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
              <span>Reye&apos;s Syndrome &amp; Overdose</span>
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
                  <div className="flex items-center gap-2 text-rose-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Aspirin?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Aspirin (acetylsalicylic acid or ASA) is a historic
                    salicylate medication derived originally from salicin found
                    in willow bark (<em>Salix alba</em>). Synthesized in its
                    stable acetylated form by Felix Hoffmann in 1897, it was the
                    world&apos;s first synthetic non-steroidal anti-inflammatory
                    drug.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    While originally used as an antipyretic and analgesic, in
                    modern medicine its primary clinical identity has
                    transformed into an{" "}
                    <strong>antiplatelet cardioprotective drug</strong> used
                    daily by millions to prevent heart attacks and ischemic
                    strokes.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-rose-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Rapid stomach and upper small intestine absorption. Hydrolyzed
                  rapidly by plasma and tissue esterases into active{" "}
                  <strong>salicylate</strong> (half-life of aspirin parent drug
                  is only 15–20 minutes, while salicylate half-life ranges from
                  2–3 hours at low doses to 15–30 hours at toxic doses due to
                  saturable hepatic glucuronidation).
                </div>
              </div>

              {/* How it works */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Unique Irreversible Covalent Block)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Irreversible Serine Acetylation:
                      </strong>
                      Unlike all other NSAIDs (which bind reversibly), Aspirin
                      covalently transfers its acetyl group to a specific serine
                      residue: <strong>Serine-529 on COX-1</strong> and{" "}
                      <strong>Serine-516 on COX-2</strong>. This physically
                      blocks the catalytic channel, permanently destroying the
                      enzyme&apos;s ability to bind arachidonic acid.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Platelet TXA2 Shutdown (The Antiplatelet Effect):
                      </strong>
                      Platelets lack a cell nucleus and cannot synthesize new
                      proteins. When Aspirin acetylates platelet COX-1, the
                      platelet can{" "}
                      <strong>never produce Thromboxane A2 (TXA2) again</strong>{" "}
                      for its entire 7 to 10-day lifespan. This prevents
                      arterial platelet aggregation and thrombus formation.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Central Antipyresis &amp; Analgesia (High Doses):
                      </strong>
                      At higher doses (325 mg – 650 mg), it suppresses COX-2 in
                      the hypothalamus and peripheral tissues, lowering PGE2 to
                      reset the fever thermostat and reduce inflammatory
                      swelling.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Why Low Doses Spare Prostacyclin:
                  </strong>
                  Vascular endothelial cells have nuclei and synthesize new
                  COX-2 enzymes within hours to keep producing protective
                  vasodilatory Prostacyclin (PGI2), while circulating platelets
                  remain permanently disabled.
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-rose-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    Pediatric Prohibition:
                  </strong>
                  <strong>NEVER administer to anyone under 19 years</strong>{" "}
                  with viral illnesses (flu, chickenpox) due to the fatal risk
                  of Reye&apos;s syndrome.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    Pre-Surgery Stop:
                  </strong>
                  Must be discontinued <strong>7 to 10 days</strong> before
                  elective major surgery to allow new platelets to form and
                  restore hemostasis.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    Chew in Acute MI:
                  </strong>
                  In acute myocardial infarction (heart attack),{" "}
                  <strong>chewing</strong> a non-enteric-coated 162–325 mg
                  tablet produces complete platelet inhibition within 15–20
                  minutes.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-300 block mb-1">
                    Enteric Coating Role:
                  </strong>
                  Enteric-coated (EC) formulations dissolve in the alkaline
                  duodenum to reduce direct stomach irritation, but they do{" "}
                  <em>not</em> eliminate systemic ulcer risk.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" /> Primary
                Clinical Uses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-teal-300 block mb-1">
                    1. Cardiovascular &amp; Cerebrovascular
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-400">
                    <li>Secondary prevention of myocardial infarction (MI)</li>
                    <li>Acute coronary syndromes (STEMI / NSTEMI)</li>
                    <li>
                      Ischemic stroke &amp; Transient Ischemic Attack (TIA)
                    </li>
                    <li>
                      Post-coronary artery bypass graft (CABG) &amp; stent
                      placement
                    </li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-amber-300 block mb-1">
                    2. Specialized Inflammatory Diseases
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-400">
                    <li>
                      Kawasaki Disease (pediatric coronary protection under
                      specialist care)
                    </li>
                    <li>Acute Rheumatic Fever with polyarthritis</li>
                    <li>Acute pericarditis (high-dose salicylate therapy)</li>
                    <li>
                      Preeclampsia prevention in high-risk pregnant women (from
                      12 weeks)
                    </li>
                  </ul>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-rose-300 block mb-1">
                    3. Analgesia / Fever (Historical Role)
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-400">
                    <li>Acute tension-type headaches and migraine cocktails</li>
                    <li>Adult mild-to-moderate somatic aches</li>
                    <li>
                      Largely replaced by Paracetamol &amp; Ibuprofen for simple
                      pyrexia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 2: WHY NOT ASPIRIN FOR FEVER? --- */}
        {activeTab === "antiplatelet-vs-fever" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-rose-500/30 bg-gradient-to-r from-rose-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Why Avoid Aspirin for Fever When Paracetamol or Ibuprofen
                    Are Available?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    A century ago, Aspirin was the sole antipyretic. Today,
                    modern clinical guidelines strictly discourage using Aspirin
                    for common fevers because its benefit-to-risk ratio is far
                    worse than Paracetamol or Ibuprofen.
                  </p>
                </div>
              </div>
            </div>

            {/* The 4 Decisive Clinical Reasons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div className="p-5 rounded-2xl border border-rose-500/40 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block mb-1">
                    Fatal Risk Factor 1
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    Reye&apos;s Syndrome in Children &amp; Adolescents
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    If an infant, child, or teenager with a viral fever (such as
                    influenza, common cold, or chickenpox) receives Aspirin, it
                    can trigger <strong>Reye&apos;s syndrome</strong>—a
                    catastrophic metabolic condition characterized by acute
                    microvesicular fatty liver degeneration and cerebral edema
                    leading to seizures, coma, and death in up to 30–40% of
                    cases.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    <strong>
                      Paracetamol and Ibuprofen carry zero risk of Reye&apos;s
                      syndrome
                    </strong>
                    , making them the only acceptable antipyretics for children.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-rose-300 font-semibold">
                  Rule: Zero Aspirin in anyone under 19 years with viral
                  symptoms.
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/40 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-1">
                    Risk Factor 2
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    Irreversible Bleeding &amp; Dengue Shock Danger
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Aspirin irreversibly disables platelets for up to 10 days.
                    In contrast, Paracetamol has no antiplatelet action, and
                    Ibuprofen&apos;s reversible antiplatelet effect clears
                    within 24 hours.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    In tropical fevers like{" "}
                    <strong>Dengue, Malaria, or Chikungunya</strong>,
                    thrombocytopenia (low platelet count) is common. Giving
                    Aspirin can turn mild capillary leakage into fatal
                    gastrointestinal hemorrhage or internal cerebral bleeding.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-amber-300 font-semibold">
                  Rule: Paracetamol is the only safe antipyretic in suspected
                  Dengue.
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-teal-400 font-bold block mb-1">
                    Risk Factor 3
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    Severe Direct &amp; Systemic Gastric Erosion
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Aspirin is an organic acid (pKa 3.5). In the stomach&apos;s
                    acidic environment, it remains un-ionized and lipophilic,
                    directly penetrating and damaging gastric epithelial cells
                    (topical damage).
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Simultaneously, its systemic COX-1 inhibition removes
                    protective mucus/bicarbonate production. At antipyretic
                    doses (650 mg), its rate of dyspepsia, occult GI blood loss,
                    and peptic ulceration is significantly higher than
                    Paracetamol (which is stomach-neutral) or Ibuprofen.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-teal-300">
                  Advantage: Paracetamol causes zero stomach irritation.
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-purple-400 font-bold block mb-1">
                    Risk Factor 4
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    Narrower Therapeutic Window &amp; Complex Overdose
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    At higher antipyretic doses, salicylate elimination shifts
                    from first-order linear kinetics to zero-order saturable
                    kinetics. A modest dose increase can cause sudden drug
                    accumulation in the blood.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Salicylate poisoning causes dangerous mixed respiratory
                    alkalosis and high anion-gap metabolic acidosis that is
                    notoriously challenging to treat compared to Paracetamol
                    (which has a clean specific antidote, N-Acetylcysteine).
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-purple-300">
                  Advantage: Paracetamol has a predictable antidote and safer
                  profile.
                </div>
              </div>
            </div>

            {/* 3-Way Antipyretic Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Clinical Parameter</th>
                    <th className="p-3.5 text-teal-300">
                      Paracetamol (Acetaminophen)
                    </th>
                    <th className="p-3.5 text-amber-300">Ibuprofen</th>
                    <th className="p-3.5 text-rose-300">Aspirin (ASA)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      First-Line Role for Fever
                    </td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      YES &bull; Global #1 Choice
                    </td>
                    <td className="p-3.5 text-teal-300 font-semibold">
                      YES &bull; Best if inflammatory/pain
                    </td>
                    <td className="p-3.5 text-rose-400 font-bold">
                      NO &bull; Obsolete for simple fever
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Reye&apos;s Syndrome Risk
                    </td>
                    <td className="p-3.5 text-emerald-400">ZERO RISK</td>
                    <td className="p-3.5 text-emerald-400">ZERO RISK</td>
                    <td className="p-3.5 text-rose-400 font-bold">
                      SEVERE &bull; Potentially fatal in &lt; 19y
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Platelet Action
                    </td>
                    <td className="p-3.5">None (Safe in Dengue)</td>
                    <td className="p-3.5">Reversible (Lasts ~24 hours)</td>
                    <td className="p-3.5 text-rose-300 font-bold">
                      Irreversible (Lasts 7–10 days)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Gastric Ulcer Risk
                    </td>
                    <td className="p-3.5 text-emerald-400">
                      None (Safe on empty stomach)
                    </td>
                    <td className="p-3.5 text-amber-300">
                      Moderate (Take with food)
                    </td>
                    <td className="p-3.5 text-rose-400 font-bold">
                      High (Direct acid + COX-1 loss)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">
                      Use in Viral Fevers
                    </td>
                    <td className="p-3.5 text-emerald-400 font-bold">
                      Preferred agent
                    </td>
                    <td className="p-3.5">Acceptable if &ge; 6 months</td>
                    <td className="p-3.5 text-rose-400 font-bold">
                      Contraindicated
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- VIEW 3: DOSING STRATIFICATION --- */}
        {activeTab === "dosing" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-start gap-3">
              <Info className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-0.5">
                  Dose-Dependent Pharmacological Behavior:
                </strong>
                Aspirin exhibits completely different clinical effects depending
                on the dose: <strong>low doses (75–81 mg)</strong> selectively
                block platelet TXA2 without impairing vascular prostacyclin;{" "}
                <strong>moderate doses (325–650 mg)</strong> provide analgesia
                and antipyresis; and{" "}
                <strong>high anti-inflammatory doses (3–4 g/day)</strong> are
                used in rheumatic diseases.
              </div>
            </div>

            {/* Dose Stratification Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* 75 mg Strength */}
              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-mono font-bold text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                      75 mg
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      UK / European Antiplatelet Standard
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Cardiovascular &amp; Stroke Prevention
                  </h3>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Primary Role:</span>
                      <span className="text-teal-300 font-bold">
                        Prevent blood clots / Thrombosis
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Dosing Regimen:</span>
                      <span className="text-slate-200">
                        75 mg ONCE daily with water
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    <strong>Clinical Role:</strong> The standard low-dose
                    antiplatelet formulation in the United Kingdom, Europe, and
                    India (e.g., Ecosprin 75). At 75 mg daily, it achieves &gt;
                    95% permanent platelet COX-1 inactivation while minimizing
                    gastric mucosal bleeding risk.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 text-[11px] text-slate-400">
                  <em>Indications:</em> Following ischemic stroke, heart attack,
                  stable angina, or carotid endarterectomy.
                </div>
              </div>

              {/* 81 mg Strength */}
              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-mono font-bold text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                      81 mg
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      USA / Canada &quot;Baby Aspirin&quot;
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Low-Dose Antiplatelet Standard (North America)
                  </h3>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Historical Origin:</span>
                      <span className="text-slate-200">
                        1/4th of 325 mg (5 grains) = 81.25 mg
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Dosing Regimen:</span>
                      <span className="text-teal-300 font-bold">
                        81 mg ONCE daily
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    <strong>Clinical Role:</strong> Universally known across
                    North America as &quot;Baby Aspirin&quot; (a misleading
                    historical name—it must <strong>NEVER</strong> be given to
                    babies or children). Provides identical platelet inhibition
                    to 75 mg; also used from 12 weeks of pregnancy to prevent
                    preeclampsia in high-risk women.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 text-[11px] text-amber-300/80">
                  <em>Important Warning:</em> The name &quot;Baby Aspirin&quot;
                  refers solely to the small 81 mg strength, NOT to pediatric
                  use.
                </div>
              </div>

              {/* 325 mg Strength */}
              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-mono font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                      325 mg (5 Grains)
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      Full-Strength Pain &amp; Emergency MI
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Adult Analgesic / Emergency Cardioprotection
                  </h3>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Emergency Heart Attack:</span>
                      <span className="text-rose-400 font-bold">
                        162 – 325 mg CHEWED immediately
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Pain / Fever:</span>
                      <span className="text-slate-200">
                        325 mg Q4–6H (Max 4000 mg/day)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    <strong>Clinical Role:</strong> Historical adult
                    regular-strength tablet. In modern cardiology, its most
                    critical emergency application is during a suspected acute
                    heart attack (AMI): chewing a single 325 mg tablet
                    (non-enteric) promotes buccal/gastric transmucosal
                    absorption, stopping coronary thrombus extension within
                    minutes.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 text-[11px] text-amber-300/80">
                  <em>Rule for MI:</em> Do NOT use enteric-coated tablets during
                  an acute heart attack because delayed release takes 2–4 hours
                  to work.
                </div>
              </div>

              {/* 500 mg – 650 mg Strength */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-mono font-bold text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">
                      500 mg – 650 mg
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                      High-Dose Adult Antipyretic
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Adult Antipyresis &amp; Anti-Inflammatory
                  </h3>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs space-y-1">
                    <div className="flex justify-between text-slate-400">
                      <span>Dose Regimen:</span>
                      <span className="text-slate-200">
                        500 mg – 650 mg Q4–6H with food
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Max Daily Ceiling:</span>
                      <span className="text-rose-400 font-bold">
                        Strictly 4000 mg / 24 hours
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    <strong>Clinical Role:</strong> Prescribed in adults for
                    acute migraines (often combined with acetaminophen and
                    caffeine), severe tension headaches, or acute pericarditis.
                    High risk of gastrointestinal heartburn, nausea, and
                    micro-bleeding.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-800/60 text-[11px] text-slate-400">
                  <em>Recommendation:</em> If fever or simple aches are present,
                  Paracetamol (650 mg) or Ibuprofen (400 mg) are strongly
                  preferred.
                </div>
              </div>
            </div>

            {/* Who Can and Cannot Use Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Who CAN
                  Use It?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  <li>
                    <strong>Adults with Cardiovascular Disease:</strong> Prior
                    stent, bypass, heart attack, or TIA.
                  </li>
                  <li>
                    <strong>Emergency Acute Coronary Syndrome:</strong> Any
                    adult with crushing retrosternal chest pain (chew 162–325
                    mg).
                  </li>
                  <li>
                    <strong>High-Risk Pregnant Women:</strong> Low-dose (81–150
                    mg) from week 12 to prevent preeclampsia (under OB/GYN
                    guidance).
                  </li>
                  <li>
                    <strong>Children with Kawasaki Disease ONLY:</strong> Under
                    pediatric cardiologist supervision to prevent coronary
                    aneurysms.
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
                    <strong>Children &amp; Teenagers (&lt; 19 Years):</strong>{" "}
                    Strict ban in viral fevers (Reye&apos;s syndrome).
                  </li>
                  <li>
                    <strong>Active Peptic Ulcers or GI Bleeding:</strong> Will
                    cause life-threatening hemorrhage.
                  </li>
                  <li>
                    <strong>Suspected Dengue or Hemorrhagic Fevers:</strong>{" "}
                    Triggers fatal systemic bleeding.
                  </li>
                  <li>
                    <strong>Bleeding Disorders:</strong> Hemophilia, von
                    Willebrand disease, severe thrombocytopenia.
                  </li>
                  <li>
                    <strong>
                      Aspirin-Exacerbated Respiratory Disease (AERD):
                    </strong>{" "}
                    Severe bronchospasm in triad asthma.
                  </li>
                  <li>
                    <strong>Gout:</strong> Low doses (&lt; 2 g/day) compete with
                    uric acid secretion in renal tubules, raising serum urate
                    and triggering gout flares.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 4: REYE'S SYNDROME & OVERDOSE --- */}
        {activeTab === "warnings" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Black Box Warning Header */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Black Box Warning &bull; Reye&apos;s Syndrome
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Aspirin is strictly forbidden in children and adolescents
                    recovering from chickenpox (varicella), influenza, or any
                    viral illness. The interaction between salicylates and viral
                    infection uncouples mitochondrial oxidative phosphorylation,
                    causing profound metabolic collapse.
                  </p>
                </div>
              </div>
            </div>

            {/* Reye's Syndrome Triad Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  1. Hepatic Mitochondrial Failure
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Salicylate metabolites poison the mitochondrial fatty acid
                  beta-oxidation enzymes inside hepatocytes.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 leading-snug">
                  Results in pan-lobular microvesicular hepatic steatosis (fatty
                  liver), massive hyperammonemia, and severe coagulopathy
                  without overt jaundice.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. Acute Toxic Encephalopathy
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  High circulating blood ammonia crosses the blood-brain barrier
                  into astrocytes, causing cytotoxic cerebral edema.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 leading-snug">
                  Manifests as persistent projectile vomiting, lethargy,
                  delirium, aggressive behavior, seizures, and herniation
                  leading to coma.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. The Historical Public Health Victory
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Following FDA warnings in the 1980s advising parents never to
                  give aspirin to children with fever, cases of Reye&apos;s
                  syndrome plummeted from hundreds annually to almost zero.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-teal-300 leading-snug">
                  Always use Paracetamol (10–15 mg/kg) or Ibuprofen (5–10 mg/kg
                  if &ge; 6m) for pediatric fevers.
                </div>
              </div>
            </div>

            {/* Overdose Toxicity: Salicylism */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-rose-400">
                <ShieldAlert className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Aspirin Overdose (Salicylism &amp; Severe Toxicity)
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Acute ingestion of &gt; 150 mg/kg causes mild-to-moderate
                toxicity; &gt; 300–500 mg/kg is potentially lethal. Salicylates
                act directly on the brainstem and cellular metabolism, producing
                a classic <strong>biphasic acid-base disturbance</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-0.5">
                    Early Phase (Salicylism)
                  </strong>
                  <span className="text-[10px] text-slate-400 block mb-1">
                    Tinnitus &amp; Hyperventilation
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Direct medullary respiratory center stimulation causes
                    tachypnea and hyperventilation &rarr;{" "}
                    <strong>Respiratory Alkalosis</strong>. Direct cochlear
                    sensory toxicity produces pathognomonic{" "}
                    <strong>tinnitus (ear ringing)</strong>, vertigo, and
                    nausea.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-400 block mb-0.5">
                    Late Phase (Metabolic Collapse)
                  </strong>
                  <span className="text-[10px] text-rose-300 block mb-1">
                    Mitochondrial Uncoupling
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Uncoupling of oxidative phosphorylation shifts cells into
                    anaerobic glycolysis, producing massive lactic acid, pyruvic
                    acid, and ketoacids &rarr; severe{" "}
                    <strong>High Anion-Gap Metabolic Acidosis</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-400 block mb-0.5">
                    Critical Complications
                  </strong>
                  <span className="text-[10px] text-rose-300 block mb-1">
                    Cerebral &amp; Pulmonary Edema
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Hyperthermia, neuroglycopenia (brain hypoglycemia despite
                    normal blood glucose), non-cardiogenic pulmonary edema,
                    seizures, coma, and cardiovascular collapse.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-teal-900/50">
                  <strong className="text-teal-300 block mb-0.5">
                    Antidote &amp; Treatment
                  </strong>
                  <span className="text-[10px] text-teal-400 block mb-1">
                    Urinary Alkalinization
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    <strong>IV Sodium Bicarbonate</strong> alkalinizes urine (pH
                    &ge; 7.5–8.0), causing &quot;ion trapping&quot; of charged
                    salicylate molecules to prevent renal reabsorption and force
                    excretion. Urgent <strong>hemodialysis</strong> if
                    refractory or altered mental status.
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
                Non-Steroidal Anti-Inflammatory Drugs (NSAIDs) are a broad class
                of therapeutic agents that suppress inflammation, pain, and
                fever by targeting cyclooxygenase enzymes. Aspirin was the
                founding member and remains unique because it is the{" "}
                <strong>only irreversible covalent inhibitor</strong> in the
                entire class.
              </p>
            </div>

            {/* How NSAID Doses Work (Ceiling Effect) */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-teal-400">
                <Activity className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  How Does an NSAID Dose Work? (The Dose-Response Thresholds)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    1. Antiplatelet &amp; Analgesic Thresholds (Low-to-Mid
                    Doses)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Very low doses of aspirin (75–81 mg) saturate platelet COX-1
                    in the portal circulation before hepatic metabolism.
                    Mid-range doses (325–650 mg) saturate central and peripheral
                    COX-2 enzymes to block pain perception and fever.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    2. Anti-Inflammatory Threshold (High Doses)
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Suppression of chronic inflammatory joint diseases requires
                    continuous high systemic concentrations (3000–4000 mg/day of
                    aspirin, or 2400 mg/day of ibuprofen). However, this high
                    dosage completely wipes out gastric cytoprotection and
                    severely strains renal blood flow.
                  </p>
                </div>
              </div>
            </div>

            {/* Chemical Taxonomy Matrix */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" /> Chemical Families
                of the NSAID Class
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-rose-500/30">
                  <strong className="text-rose-300 block mb-1">
                    Salicylates (Irreversible)
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Aspirin, Diflunisal, Salsalate
                  </p>
                  <p className="text-slate-400">
                    Irreversible Serine acetylators. Potent antiplatelet agents
                    used in cardiovascular prevention and Kawasaki disease.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-amber-300 block mb-1">
                    Propionic Acids (Reversible)
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Ibuprofen, Naproxen, Ketoprofen
                  </p>
                  <p className="text-slate-400">
                    Reversible competitive inhibitors. Naproxen has the most
                    favorable cardiovascular risk profile among non-selective
                    NSAIDs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-teal-300 block mb-1">
                    Acetic Acid Derivatives
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Diclofenac, Indomethacin, Ketorolac
                  </p>
                  <p className="text-slate-400">
                    Highly potent pain relievers. Ketorolac is limited to &le; 5
                    days use due to high renal and gastrointestinal ulceration
                    rates.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <strong className="text-cyan-300 block mb-1">
                    Selective COX-2 Inhibitors
                  </strong>
                  <p className="text-slate-300 mb-2 font-mono text-[11px]">
                    Celecoxib, Etoricoxib
                  </p>
                  <p className="text-slate-400">
                    Spares COX-1; drastically lowers stomach ulcer risk, but
                    lacks antiplatelet protection, leading to higher
                    cardiovascular risks.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Precautions & Drug Interactions */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" /> Major NSAID
                Drug Interactions to Avoid
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-rose-300 block mb-0.5">
                    Aspirin + Ibuprofen:
                  </strong>
                  Taking Ibuprofen <em>before</em> low-dose Aspirin physically
                  blocks Aspirin from reaching the Serine-529 site on COX-1,
                  neutralizing Aspirin&apos;s cardioprotective antiplatelet
                  effect.
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-amber-300 block mb-0.5">
                    Aspirin + Anticoagulants (Warfarin/DOACs):
                  </strong>
                  Combining antiplatelet action with systemic anticoagulation
                  spikes fatal gastrointestinal and intracranial bleeding risk
                  3- to 5-fold.
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-teal-300 block mb-0.5">
                    Aspirin + Methotrexate:
                  </strong>
                  Salicylates compete for organic anion transporters in the
                  kidney, decreasing renal clearance of Methotrexate and causing
                  severe bone marrow pancytopenia.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
