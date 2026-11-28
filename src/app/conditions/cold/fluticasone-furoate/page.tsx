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
  Droplets,
  ShieldCheck,
} from "lucide-react";

export default function FluticasoneFuroatePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "administration" | "dosing" | "safety" | "drug-class"
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
              <Droplets className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Intranasal Corticosteroid (INCS)
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Fluticasone Furoate (Spiroflut)
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-teal-300 font-mono">
                  (6α,11β,16α,17α)-6,9-difluoro-17-[(fluoromethyl)sulfanyl]carbonyl-11-hydroxy-16-methyl-3-oxoandrosta-1,4-dien-17-yl
                  furan-2-carboxylate
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-teal-400 font-mono">
                    Primary Brand: Spiroflut
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    &bull; 27.5 mcg / Actuation Nasal Mist (Global: Avamys /
                    Veramyst)
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Key Distinction
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Furoate Ester (Once-Daily) vs. Propionate Ester (Flonase)
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on ultra-high-affinity intracellular
              Glucocorticoid Receptor (GR) agonism, multi-pathway genomic
              suppression of cytokines, eosinophils, and mast cells, less than
              0.5% systemic bioavailability (minimal HPA-axis suppression),
              proper lateral-wall nasal spray technique to prevent epistaxis,
              and chronic overuse complications.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Adult Dose
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                110 mcg (2 Sprays/Nostril OD)
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Systemic Absorption
              </span>
              <span className="text-xl font-bold text-emerald-300 font-mono">
                &lt; 0.5% (Ultra-Low)
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
              onClick={() => setActiveTab("administration")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "administration"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Spray Technique &amp; Clinical Pearls</span>
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
              <span>Side Effects &amp; Overuse Risks</span>
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
              <span>Intranasal Steroid Class</span>
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
                      What is Fluticasone Furoate (Spiroflut)?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Fluticasone Furoate—marketed under brand names such as{" "}
                    <strong>Spiroflut</strong>, <strong>Avamys</strong>, and{" "}
                    <strong>Veramyst</strong>—is a modern, synthetic{" "}
                    <strong>
                      trifluorinated intranasal corticosteroid (INCS)
                    </strong>{" "}
                    engineered specifically for once-daily topical treatment of
                    allergic rhinitis and nasal mucosal inflammation.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Its specialized <strong>furoate ester side chain</strong>{" "}
                    gives it 1.7-fold higher affinity for human glucocorticoid
                    receptors than Fluticasone Propionate and prolonged
                    retention inside nasal epithelial cells—allowing a fine,
                    low-volume (50 &mu;L), scent-free mist to suppress nasal
                    congestion, sneezing, watery rhinorrhea, and allergic eye
                    symptoms for a full <strong>24 hours</strong> without
                    causing rebound swelling or systemic steroid side effects.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-teal-300 block mb-0.5">
                    Pharmacokinetics:
                  </strong>
                  Initial symptom relief begins as early as{" "}
                  <strong>8 hours</strong> after the first spray, though maximum
                  anti-inflammatory benefit requires{" "}
                  <strong>several days to 2 weeks</strong> of daily use.
                  Absolute systemic bioavailability is{" "}
                  <strong>&lt; 0.5%</strong> due to incomplete gut absorption of
                  swallowed droplets and extensive first-pass hepatic metabolism
                  via <strong>CYP3A4</strong> into an inactive
                  17&beta;-carboxylic acid metabolite (excreted in feces).
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (Genomic Mechanism of Action)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Ultra-High-Affinity Intracellular Glucocorticoid
                        Receptor (GR) Binding:
                      </strong>
                      Lipophilic molecules diffuse across nasal mucosal cell
                      membranes and bind with extraordinarily high affinity to
                      cytoplasmic <strong>Glucocorticoid Receptors (GR)</strong>
                      . The activated drug-receptor complex translocates into
                      the cell nucleus to modulate gene transcription.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Multi-Mediator Cytokine, Leukotriene &amp;
                        Prostaglandin Suppression:
                      </strong>
                      Inhibits pro-inflammatory transcription factors
                      (NF-&kappa;B and AP-1), shutting down synthesis of{" "}
                      <strong>
                        IL-4, IL-5, IL-13, TNF-&alpha;, leukotrienes, and
                        prostaglandins
                      </strong>
                      , while upregulating anti-inflammatory proteins (Annexin
                      A1 / Lipocortin-1).
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Eosinophil, Mast Cell &amp; Vasomotor Nerve
                        Stabilization:
                      </strong>
                      Reduces nasal mucosal infiltration of eosinophils,
                      basophils, and mast cells, decreases capillary vascular
                      permeability (turbinate swelling), and dampens trigeminal
                      sensory nerve hyper-reactivity—relieving both nasal and
                      ocular allergy symptoms.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Broad-spectrum{" "}
                  <strong>local anti-inflammatory mucosal stabilization</strong>{" "}
                  (relieves nasal blockage, sneezing, runny nose, post-nasal
                  drip, and itchy eyes without rebound congestion).
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
                    Controller, Not an Instant Spray:
                  </strong>
                  Unlike Oxymetazoline (which opens the nose in 5 minutes),
                  Fluticasone Furoate builds full anti-inflammatory protection
                  over <strong>3 to 14 days</strong>. Use it consistently every
                  day during allergy season.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-900/50">
                  <strong className="text-emerald-300 block mb-1">
                    Zero Rebound Congestion (Safe Long-Term):
                  </strong>
                  Unlike decongestant sprays (limited to 3–5 days), Fluticasone
                  Furoate <strong>does NOT cause rhinitis medicamentosa</strong>{" "}
                  and is safe for months of continuous daily use.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    Aim Away From the Nasal Septum:
                  </strong>
                  Point the nozzle slightly outward toward the{" "}
                  <strong>outer corner of the eye (lateral wall)</strong>
                  —spraying directly onto the central nasal septum causes
                  nosebleeds (epistaxis) and mucosal crusting.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Avoid Strong CYP3A4 Inhibitors (Ritonavir):
                  </strong>
                  Co-administration with potent CYP3A4 inhibitors (Ritonavir,
                  Cobicistat, Ketoconazole) blocks liver clearance and can
                  trigger systemic Cushing&apos;s syndrome and adrenal
                  suppression.
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
                    <Wind className="w-3.5 h-3.5" /> 1. Seasonal &amp; Perennial
                    Allergic Rhinitis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Gold-standard first-line monotherapy for
                      moderate-to-severe allergic rhinitis
                    </li>
                    <li>
                      Relieves all 4 nasal symptoms: congestion, sneezing,
                      rhinorrhea, and nasal itching
                    </li>
                    <li>
                      Approved in adults and children aged{" "}
                      <strong>2 years and older</strong>
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 2. Allergic Ocular
                    Symptoms &amp; Sinusitis
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Reduces itchy, watery, red eyes (naso-ocular reflex
                      dampening)
                    </li>
                    <li>
                      Adjunct in acute and chronic rhinosinusitis &amp; nasal
                      polyposis
                    </li>
                    <li>
                      Eustachian tube dysfunction and allergic post-nasal drip
                      cough
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-emerald-300 block mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> 3. Weaning Off Nasal
                    Spray Addiction
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Primary therapy to cure <em>rhinitis medicamentosa</em>{" "}
                      caused by Oxymetazoline/Xylometazoline overuse
                    </li>
                    <li>
                      Restores normal nasal mucosal vascular tone over 1–2 weeks
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: SPRAY TECHNIQUE & CLINICAL PEARLS */}
        {/* ========================================================================= */}
        {activeTab === "administration" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Correct Intranasal Administration Protocol (Maximizing
                    Efficacy &amp; Preventing Nosebleeds)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Over 50% of intranasal steroid treatment failures and
                    nosebleeds occur due to improper nozzle aiming. Follow this
                    4-step clinical protocol for{" "}
                    <strong>Spiroflut (27.5 mcg/spray)</strong>:
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3">
                <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
                  Steps 1 &amp; 2 &bull; Priming &amp; Head Position
                </span>
                <h3 className="text-base font-bold text-white">
                  Shake Gently, Prime &amp; Tilt Head Forward
                </h3>
                <ul className="space-y-2 text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Shake &amp; Prime:</strong> Shake the bottle gently
                    before every use. Before first use (or if unused for &gt; 30
                    days), press the side-actuated lever ~6 times into the air
                    until a fine mist appears.
                  </li>
                  <li>
                    <strong>Clear &amp; Lean Forward:</strong> Gently blow your
                    nose to clear mucus, then tilt your head{" "}
                    <strong>slightly forward (chin toward chest)</strong>—do NOT
                    tilt your head backward.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3">
                <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                  Steps 3 &amp; 4 &bull; Contralateral Hand Aiming
                </span>
                <h3 className="text-base font-bold text-white">
                  Aim Toward Outer Eye Corner &amp; Sniff Gently
                </h3>
                <ul className="space-y-2 text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Cross-Hand Technique:</strong> Use your{" "}
                    <strong>right hand to spray the left nostril</strong> and
                    your <strong>left hand to spray the right nostril</strong>
                    —this naturally aims the mist outward toward the nasal
                    turbinates and away from the fragile center septum.
                  </li>
                  <li>
                    <strong>Gentle Sniff:</strong> Press the button while
                    breathing in gently through the nose, then exhale through
                    the mouth. Avoid hard snorting (which pulls medicine into
                    the throat).
                  </li>
                </ul>
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
                  Use Fluticasone Furoate (Spiroflut)?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Adults &amp; Adolescents (&ge; 12 Years):</strong>{" "}
                    Start at 110 mcg once daily (2 sprays per nostril); once
                    symptoms are controlled, step down to 55 mcg once daily (1
                    spray per nostril).
                  </li>
                  <li>
                    <strong>Children Aged 2 to 11 Years:</strong> Start at 55
                    mcg once daily (1 spray per nostril); may increase to 110
                    mcg once daily if needed, then step back down to 55 mcg once
                    controlled.
                  </li>
                  <li>
                    <strong>
                      Patients With Hypertension, Heart Disease, or BPH:
                    </strong>{" "}
                    Completely safe—unlike oral decongestants
                    (Pseudoephedrine/Phenylephrine), it does not raise blood
                    pressure or cause urinary retention.
                  </li>
                  <li>
                    <strong>
                      Renal or Mild-to-Moderate Hepatic Impairment:
                    </strong>{" "}
                    No dose adjustment required.
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
                      Hypersensitivity to Fluticasone Furoate or Excipients:
                    </strong>{" "}
                    Strictly contraindicated in allergic patients.
                  </li>
                  <li>
                    <strong>Children Under 2 Years of Age:</strong> Safety and
                    efficacy have not been established.
                  </li>
                  <li>
                    <strong>
                      Recent Nasal Septal Ulcers, Nasal Surgery, or Nasal
                      Trauma:
                    </strong>{" "}
                    Avoid until complete mucosal healing occurs (corticosteroids
                    impair wound healing).
                  </li>
                  <li>
                    <strong>
                      Untreated Localized Fungal/Bacterial Nasal Infections or
                      Ocular Herpes Simplex:
                    </strong>{" "}
                    Treat active infections before initiating intranasal
                    steroids.
                  </li>
                  <li>
                    <strong>
                      Concurrent Potent CYP3A4 Inhibitors (Ritonavir,
                      Ketoconazole):
                    </strong>{" "}
                    Avoid due to increased systemic corticosteroid exposure.
                  </li>
                  <li>
                    <strong>Glaucoma / Cataracts &amp; Pregnancy:</strong>{" "}
                    Monitor intraocular pressure in glaucoma; during pregnancy,
                    use lowest effective dose if clearly needed (Budesonide or
                    Fluticasone Propionate have slightly larger pregnancy
                    registries).
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
                    Age-Stratified Clinical Dosing Matrix (27.5 mcg / Spray)
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Each actuation delivers 27.5 mcg Fluticasone Furoate
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age Group</th>
                      <th className="p-3.5">Starting Dose</th>
                      <th className="p-3.5">Maintenance / Step-Down Dose</th>
                      <th className="p-3.5">Max 24-Hour Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="bg-rose-950/20">
                      <td className="p-3.5 font-bold text-rose-300">
                        Children Under 2 Years
                      </td>
                      <td className="p-3.5 font-bold text-rose-400" colSpan={3}>
                        NOT APPROVED &bull; Safety and efficacy not established
                        under 2 years of age
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (2 – 11 Years)
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300 font-bold">
                        55 mcg OD (1 spray per nostril)
                      </td>
                      <td className="p-3.5">
                        If inadequate, increase to 110 mcg OD (2
                        sprays/nostril), then step down to 55 mcg OD
                      </td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">
                        Max 110 mcg / day
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Adolescents (&ge; 12 Years)
                      </td>
                      <td className="p-3.5 font-mono text-teal-300 font-bold">
                        110 mcg OD (2 sprays per nostril)
                      </td>
                      <td className="p-3.5">
                        Once controlled, reduce to 55 mcg OD (1 spray per
                        nostril)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-400 font-bold">
                        Max 110 mcg / day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS & OVERUSE RISKS */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Common Side Effects */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-teal-400" />
                Common Side Effects (Therapeutic Doses)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-teal-300 block">
                    1. Local Nasal Mucosal Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Epistaxis (minor nosebleeds or blood-tinged mucus — ~6%
                      vs. 4% placebo)
                    </li>
                    <li>Nasal mucosal dryness, irritation, or crusting</li>
                    <li>
                      Rare nasal septal ulceration (prevented by aiming
                      laterally)
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    2. Upper Respiratory &amp; General Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>Headache (~9% vs. 7% placebo)</li>
                    <li>
                      Pharyngolaryngeal pain (mild sore/scratchy throat — ~2%)
                    </li>
                    <li>Cough or mild fever in young children</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-amber-900/50 space-y-2">
                  <strong className="text-amber-300 block">
                    3. Rare Local Infections &amp; Ocular Effects
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Localized nasal/pharyngeal <em>Candida albicans</em>{" "}
                      (thrush)
                    </li>
                    <li>
                      Rare increase in intraocular pressure (glaucoma) or
                      posterior subcapsular cataracts with prolonged high-dose
                      use
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overuse Section */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Overdose &amp; Chronic Overuse: What Happens If Overused?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Acute single-bottle overdose is unlikely to cause immediate
                    life-threatening toxicity (in clinical trials, intranasal
                    doses up to{" "}
                    <strong>
                      2,640 mcg/day—24 times the recommended adult dose
                    </strong>
                    —for 3 days produced no acute systemic adverse effects).
                    However,{" "}
                    <strong>chronic overuse beyond recommended doses</strong>{" "}
                    causes local mucosal injury and systemic hypercorticism:
                  </p>
                </div>
              </div>
            </div>

            {/* Overuse Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  1. Nasal Septal Erosion &amp; Perforation
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Excessive daily spraying—especially directed toward the
                  midline cartilage—causes mucosal atrophy, recurrent epistaxis,
                  septal ulceration, and rare nasal septal perforation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  2. HPA-Axis Suppression &amp; Pediatric Growth Velocity
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Chronic supratherapeutic dosing (or combining intranasal +
                  inhaled + topical steroids) can suppress endogenous adrenal
                  cortisol production (Cushingoid features) and slightly slow
                  linear growth velocity in children—always titrate down to the
                  lowest effective dose (55 mcg/day).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overuse Management Protocol
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  <strong>1. Acute Ingestion:</strong> No specific antidote
                  required; observe clinically.{" "}
                  <strong>2. Chronic Overuse:</strong> Gradually taper the dose
                  down to standard maintenance (55–110 mcg/day) rather than
                  stopping abruptly if HPA-axis suppression is suspected, and
                  inspect the nasal septum for mucosal healing.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: INTRANASAL STEROID DRUG CLASS */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Second-Generation Intranasal Corticosteroids
                (Low-Bioavailability INCS)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Intranasal corticosteroids are the most effective medical
                therapy for allergic rhinitis. Modern second-generation agents (
                <strong>
                  Fluticasone Furoate, Mometasone Furoate, Fluticasone
                  Propionate, Ciclesonide
                </strong>
                ) feature high lipophilicity and rapid hepatic first-pass
                inactivation, keeping systemic bioavailability below
                1%—dramatically safer than older first-generation sprays like
                Beclomethasone (44% systemic bioavailability).
              </p>
            </div>

            {/* Comparative Class Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Intranasal Steroid</th>
                    <th className="p-3.5">Systemic Bioavailability</th>
                    <th className="p-3.5">Approved Minimum Age</th>
                    <th className="p-3.5">Key Clinical Distinction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-teal-950/15">
                    <td className="p-3.5 font-bold text-teal-300">
                      Fluticasone Furoate (Spiroflut / Avamys)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      &lt; 0.5%
                    </td>
                    <td className="p-3.5 font-mono">&ge; 2 Years</td>
                    <td className="p-3.5">
                      Highest GR affinity; scent-free fine mist; strong eye
                      symptom relief
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Mometasone Furoate (Nasonex / Metaspray)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      &lt; 0.1%
                    </td>
                    <td className="p-3.5 font-mono">&ge; 2 Years</td>
                    <td className="p-3.5">
                      Lowest systemic absorption; also approved for adult nasal
                      polyps
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-indigo-300">
                      Fluticasone Propionate (Flonase / Flomist)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-300">
                      &lt; 2.0%
                    </td>
                    <td className="p-3.5 font-mono">&ge; 4 Years</td>
                    <td className="p-3.5">
                      Widely available OTC; also paired with Azelastine
                      (Dymista)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-300">
                      Budesonide (Rhinocort)
                    </td>
                    <td className="p-3.5 font-mono text-amber-300">~34%</td>
                    <td className="p-3.5 font-mono">&ge; 6 Years</td>
                    <td className="p-3.5">
                      Preferred intranasal steroid during pregnancy due to
                      extensive data
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
