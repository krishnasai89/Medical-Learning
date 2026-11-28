"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Flame,
  Thermometer,
  AlertTriangle,
  Activity,
  HeartPulse,
  Brain,
  ShieldAlert,
  UtensilsCrossed,
  Wind,
  Layers,
  HelpCircle,
  Stethoscope,
  Info,
  Pill,
  AlertCircle,
} from "lucide-react";

export default function FeverPage() {
  const [tempScale, setTempScale] = useState("both"); // "celsius" | "fahrenheit" | "both"

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Clinical Index</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold mb-3">
              <Flame className="w-3.5 h-3.5" /> Pathology &bull; Module 01 (Part
              1/4)
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Pyrexia (Fever) & Thermal Dysregulation
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Clinical classification of core body temperature variations,
              hypothalamic set-point resetting, systemic cytokine cascades,
              sensory alteration, and respiratory involvement.
            </p>
          </div>

          {/* Unit Toggle */}
          <div className="flex items-center gap-2 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setTempScale("both")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                tempScale === "both"
                  ? "bg-rose-500 text-slate-950"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              °C & °F
            </button>
            <button
              onClick={() => setTempScale("celsius")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                tempScale === "celsius"
                  ? "bg-rose-500 text-slate-950"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Celsius (°C)
            </button>
            <button
              onClick={() => setTempScale("fahrenheit")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                tempScale === "fahrenheit"
                  ? "bg-rose-500 text-slate-950"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Fahrenheit (°F)
            </button>
          </div>
        </div>

        {/* SECTION 1: TEMPERATURE CLASSIFICATION MATRIX */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-rose-400" />
            <h2 className="text-xl font-bold text-white">
              1. Clinical Temperature Classifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Low-Grade Fever */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold block mb-1">
                  Sub-Febrile State
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Low-Grade Fever
                </h3>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs">
                  {(tempScale === "celsius" || tempScale === "both") && (
                    <div className="text-amber-300 font-bold">
                      37.5°C – 38.3°C
                    </div>
                  )}
                  {(tempScale === "fahrenheit" || tempScale === "both") && (
                    <div className="text-slate-300">99.5°F – 100.9°F</div>
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Mild elevation above the normal diurnal variation (normal oral
                  baseline: ~36.8°C &plusmn; 0.4°C / 98.2°F &plusmn; 0.7°F).
                </p>
              </div>
              <span className="text-[11px] text-slate-400 mt-4 pt-2 border-t border-slate-800/60 block">
                Seen in: Early viral prodromes, chronic granulomatous disease,
                early tuberculosis, mild autoimmune flares.
              </span>
            </div>

            {/* Febricula */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-semibold block mb-1">
                  Transient State
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Febricula
                </h3>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs">
                  {(tempScale === "celsius" || tempScale === "both") && (
                    <div className="text-amber-300 font-bold">
                      37.5°C – 38.0°C
                    </div>
                  )}
                  {(tempScale === "fahrenheit" || tempScale === "both") && (
                    <div className="text-slate-300">99.5°F – 100.4°F</div>
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A transient, short-lived, low-intensity fever lasting under
                  24–48 hours without marked constitutional symptoms or visceral
                  localizing signs.
                </p>
              </div>
              <span className="text-[11px] text-slate-400 mt-4 pt-2 border-t border-slate-800/60 block">
                Seen in: Mild physical exertion in heat, minor post-vaccination
                reactions, physiological teething, mild dehydration.
              </span>
            </div>

            {/* Pyrexia */}
            <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest font-semibold block mb-1">
                  True Pyrexia
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Pyrexia (Fever)
                </h3>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs">
                  {(tempScale === "celsius" || tempScale === "both") && (
                    <div className="text-rose-400 font-bold">
                      &ge; 38.3°C – 41.0°C
                    </div>
                  )}
                  {(tempScale === "fahrenheit" || tempScale === "both") && (
                    <div className="text-slate-300">&ge; 101.0°F – 105.8°F</div>
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clinically significant thermal elevation orchestrated by
                  pyrogen-mediated upward resetting of the hypothalamic preoptic
                  set-point.
                </p>
              </div>
              <span className="text-[11px] text-slate-400 mt-4 pt-2 border-t border-slate-800/60 block">
                Seen in: Acute bacterial, viral, fungal, or parasitic
                infections, active collagen vascular diseases, drug reactions.
              </span>
            </div>

            {/* Hyperpyrexia */}
            <div className="p-5 rounded-2xl border border-rose-600 bg-rose-950/20 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-rose-300 uppercase tracking-widest font-semibold block mb-1">
                  Critical Emergency
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Hyperpyrexia
                </h3>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-3 font-mono text-xs">
                  {(tempScale === "celsius" || tempScale === "both") && (
                    <div className="text-rose-400 font-bold">
                      &gt; 41.5°C (&gt; 41.0°C in some criteria)
                    </div>
                  )}
                  {(tempScale === "fahrenheit" || tempScale === "both") && (
                    <div className="text-rose-300 font-bold">
                      &gt; 106.0°F – 106.7°F
                    </div>
                  )}
                </div>
                <p className="text-xs text-rose-200/90 leading-relaxed">
                  Life-threatening medical emergency. High risk of
                  encephalopathy, generalized seizures, direct cellular protein
                  denaturation, and multiorgan failure.
                </p>
              </div>
              <span className="text-[11px] text-rose-300/80 mt-4 pt-2 border-t border-rose-900/60 block">
                Seen in: Severe central CNS hemorrhage, thyroid storm, malignant
                neuroleptic syndrome, malignant hyperthermia, heat stroke.
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 2: PATHOPHYSIOLOGY (WHY DOES IT HAPPEN?) */}
        <section className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-6">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-teal-400" />
            <h2 className="text-xl font-bold text-white">
              2. Pathophysiological Mechanism: The Hypothalamic Thermostat
            </h2>
          </div>

          {/* Detailed 4-Step Biochemical Cascade */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="w-6 h-6 rounded-full bg-teal-500/10 text-teal-400 font-mono font-bold flex items-center justify-center mb-2">
                1
              </span>
              <strong className="text-white block mb-1">
                Pyrogen Induction
              </strong>
              <p className="text-slate-400 leading-relaxed">
                Exogenous pyrogens (bacterial lipopolysaccharide [LPS], viral
                capsids) trigger monocytes, macrophages, and endothelial cells
                to synthesize endogenous pyrogenic cytokines:{" "}
                <strong className="text-teal-300">
                  IL-1β, TNF-α, IL-6, and IFN-γ
                </strong>
                .
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="w-6 h-6 rounded-full bg-teal-500/10 text-teal-400 font-mono font-bold flex items-center justify-center mb-2">
                2
              </span>
              <strong className="text-white block mb-1">
                Organum Vasculosum (OVLT)
              </strong>
              <p className="text-slate-400 leading-relaxed">
                Circulating cytokines reach the{" "}
                <strong className="text-teal-300">OVLT</strong>, a
                circumventricular organ lacking a blood-brain barrier.
                Endothelial enzymes (COX-2 &amp; mPGES-1) convert arachidonic
                acid into{" "}
                <strong className="text-rose-300">
                  Prostaglandin E2 (PGE2)
                </strong>
                .
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="w-6 h-6 rounded-full bg-teal-500/10 text-teal-400 font-mono font-bold flex items-center justify-center mb-2">
                3
              </span>
              <strong className="text-white block mb-1">
                Thermostat Reset (Preoptic Area)
              </strong>
              <p className="text-slate-400 leading-relaxed">
                PGE2 binds to EP3 receptors on thermoregulatory neurons in the
                anterior hypothalamus, elevating the baseline reference
                set-point from 37°C to e.g. 39°C.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="w-6 h-6 rounded-full bg-teal-500/10 text-teal-400 font-mono font-bold flex items-center justify-center mb-2">
                4
              </span>
              <strong className="text-white block mb-1">
                Heat Generation &amp; Chills
              </strong>
              <p className="text-slate-400 leading-relaxed">
                The body perceives normal core temp as cold. It initiates{" "}
                <strong className="text-amber-300">
                  peripheral vasoconstriction
                </strong>{" "}
                (cold extremities),{" "}
                <strong className="text-amber-300">
                  shivering thermogenesis (rigors)
                </strong>
                , and behavioral heat-seeking until the new set-point is
                reached.
              </p>
            </div>
          </div>

          {/* Simple Patient-Friendly / Quick Explainer Card */}
          <div className="p-5 rounded-xl bg-slate-950/90 border border-teal-500/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30 uppercase tracking-wider">
                Quick Summary
              </span>
              <h3 className="text-sm font-bold text-white">
                How Fever Works in 5 Simple Steps:
              </h3>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
              <li className="p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-teal-400 font-bold block mb-1">
                    Step 1
                  </span>
                  <strong className="text-slate-200 block mb-1">
                    Infection Enters
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Microbes (bacteria, viruses, fungi, or parasites) invade the
                    body tissues.
                  </p>
                </div>
              </li>

              <li className="p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-teal-400 font-bold block mb-1">
                    Step 2
                  </span>
                  <strong className="text-slate-200 block mb-1">
                    Immune Alarm
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    White blood cells detect the threat and send signals via
                    chemical messengers and nerves (like the vagus nerve) up to
                    the brain.
                  </p>
                </div>
              </li>

              <li className="p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-teal-400 font-bold block mb-1">
                    Step 3
                  </span>
                  <strong className="text-slate-200 block mb-1">
                    Thermostat Reset
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    In the Brain&apos;s hypothalamus(a small, almond-sized
                    structure located deep in the center of the brain (part of
                    the diencephalon) & Spinal Card that acts as the body's main
                    control center for maintaining internal balance, or
                    homeostasis), enzymes (COX-1 &amp; COX-2) produce PGE2,
                    raising the body&apos;s internal target temperature dial.
                  </p>
                </div>
              </li>

              <li className="p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-teal-400 font-bold block mb-1">
                    Step 4
                  </span>
                  <strong className="text-slate-200 block mb-1">
                    Muscle Shivering
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    To reach this higher temperature, skin blood vessels narrow
                    to conserve heat, and skeletal muscles rapidly vibrate
                    (shivering) to generate warmth.
                  </p>
                </div>
              </li>

              <li className="p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-amber-400 font-bold block mb-1">
                    Step 5
                  </span>
                  <strong className="text-slate-200 block mb-1">
                    The Result: Fever
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Core body temperature rises into a febrile state, creating a
                    hot environment that slows microbial replication and
                    activates immune cells.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* SECTION 3: COMMON CAUSES */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-bold text-white">
              3. Etiological Spectrum (Common Causes)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-teal-300 text-sm mb-2">
                Infectious (Most Common)
              </h3>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                <li>
                  <strong>Viral:</strong> Influenza, RSV, SARS-CoV-2, Dengue,
                  Chikungunya, Epstein-Barr (EBV).
                </li>
                <li>
                  <strong>Bacterial:</strong> Pneumonia, UTI/pyelonephritis,
                  enteric fever (Typhoid), cellulitis, septicemia.
                </li>
                <li>
                  <strong>Parasitic:</strong> Malaria (Plasmodium cyclical
                  spikes), amoebic abscess.
                </li>
                <li>
                  <strong>Mycobacterial:</strong> Tuberculosis (evening rise
                  with night sweats).
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-rose-300 text-sm mb-2">
                Inflammatory & Autoimmune
              </h3>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                <li>Systemic Lupus Erythematosus (SLE).</li>
                <li>Rheumatoid Arthritis & Adult-onset Still's Disease.</li>
                <li>
                  Systemic Vasculitis (Giant cell arteritis, Kawasaki disease).
                </li>
                <li>Inflammatory Bowel Disease (Crohn's flare).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-purple-300 text-sm mb-2">
                Neoplastic (B-Symptoms)
              </h3>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                <li>
                  Hodgkin & Non-Hodgkin Lymphoma (Pel-Ebstein cyclical pattern).
                </li>
                <li>Leukemia (acute and chronic phases).</li>
                <li>
                  Renal Cell Carcinoma (paraneoplastic cytokine secretion).
                </li>
                <li>Hepatic metastases.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-amber-300 text-sm mb-2">
                Drug-Induced & Environmental
              </h3>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                <li>
                  <strong>Drug Fever:</strong> Beta-lactams, sulfonamides,
                  anticonvulsants, allopurinol.
                </li>
                <li>
                  Serotonin syndrome, Neuroleptic Malignant Syndrome (NMS).
                </li>
                <li>
                  Heat stroke (loss of sweating, thermoregulatory collapse).
                </li>
                <li>Endocrine: Thyroid storm, acute adrenal insufficiency.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE DEEP QUESTIONS (ANOREXIA, COUGH/COLD, MYALGIA) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-teal-400" />
            <h2 className="text-xl font-bold text-white">
              4. Physiological Phenomena Explained
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Anorexia of Infection */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-amber-400">
                  <UtensilsCrossed className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">
                    Why Does Food Taste Bad &amp; Appetite Drop?
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 block mb-2">
                  Anorexia of Infection &amp; Dysgeusia
                </span>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  <strong>1. Hypothalamic Appetite Suppression:</strong>{" "}
                  Pro-inflammatory cytokines (
                  <strong className="text-white">TNF-α, IL-1β</strong>) cross
                  into the hypothalamic arcuate nucleus, stimulating
                  pro-opiomelanocortin (POMC) satiety neurons while inhibiting
                  neuropeptide Y (NPY) hunger neurons.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  <strong>2. Olfactory-Taste Blunting:</strong> Taste is &gt;70%
                  smell. Viral shedding in the nasal mucosa causes micro-edema
                  of olfactory neuroepithelium, attenuating retro-nasal aroma
                  detection.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>3. Hepatic Trace Element Shift:</strong> The
                  acute-phase response downregulates serum zinc and iron
                  (stashing them inside ferritin and liver cells to starve
                  bacteria), impairing the zinc-dependent enzyme{" "}
                  <strong className="text-white">
                    carbonic anhydrase VI (gustin)
                  </strong>{" "}
                  in salivary buds, rendering foods metallic or tasteless.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/60 mt-4 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <em>Evolutionary Advantage:</em> Reduces gut digestive energy
                expenditure and sequesters free micronutrients that invading
                pathogens require for binary fission.
              </div>
            </div>

            {/* 2. Why Cold, Cough, or Both? */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-cyan-400">
                  <Wind className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">
                    Why Sometimes Cold, Cough, or Both?
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 block mb-2">
                  Anatomical Tropism &amp; Secretion Cascades
                </span>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  <strong>1. Receptor Tropism:</strong> Pathogens exhibit
                  preferential cellular affinity. Rhinoviruses bind{" "}
                  <strong className="text-white">ICAM-1</strong> in the upper
                  nasopharynx &rarr; causing localized rhinorrhea, sneezing, and
                  nasal congestion (the &quot;cold&quot;) without lower airway
                  spread.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  <strong>2. Lower Airway Tropism:</strong> Viruses like
                  Influenza or Mycoplasma target sialic acid or bronchial
                  ciliated epithelium &rarr; causing tracheobronchitis and
                  direct stimulation of rapid-adapting stretch receptors &rarr;
                  isolated dry or productive &quot;cough&quot;.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>3. Why Both Occur Together:</strong> Post-nasal drip
                  (upper nasal mucus draining over the posterior hypopharynx)
                  triggers sensory glossopharyngeal and vagal cough reflexes.
                  Simultaneously, systemic viremia (e.g., Influenza, SARS-CoV-2)
                  infects both upper and lower respiratory epithelia
                  simultaneously.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/60 mt-4 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <em>Clinical Diagnostic Clue:</em> Fever + Cold only &rarr;
                Upper Respiratory Tract Infection (URTI). Fever + Deep
                Productive Cough + Dyspnea &rarr; Lower Respiratory
                (Bronchitis/Pneumonia).
              </div>
            </div>

            {/* 3. Body Pains / Myalgias */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-rose-400">
                  <Activity className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">
                    Why Do We Get Severe Body Aches &amp; Myalgia?
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 block mb-2">
                  PGE2 Nociceptor Sensitization &amp; Proteolysis
                </span>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  <strong>1. Nociceptor Hyper-sensitization:</strong> Systemic{" "}
                  <strong className="text-white">PGE2</strong> directly acts on
                  peripheral sensory nerve terminals, lowering the activation
                  threshold of polymodal nociceptors in skeletal muscle,
                  tendons, and joints. Normal movements register as deep aches.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  <strong>2. Muscle Proteolysis (Hypercatabolism):</strong>{" "}
                  Interleukin-1 and TNF-α stimulate the ubiquitin-proteasome
                  pathway in myocytes to break down muscle protein into amino
                  acids for hepatic acute-phase reactant synthesis (CRP,
                  fibrinogen). This breakdown causes intense muscle soreness.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>3. Lactic Accumulation:</strong> Shivering
                  thermogenesis causes rapid anaerobic myofibrillar contraction
                  cycles, producing localized micro-fatigue and mild lactate
                  buildup.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/60 mt-4 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <em>Therapeutic Correlate:</em> NSAIDs and Paracetamol relieve
                body aches because they inhibit COX-mediated peripheral PGE2
                synthesis in both muscle beds and spinal cord dorsal horns.
              </div>
            </div>

            {/* 4. Febrile Headache */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-400">
                  <Brain className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">
                    Why Does Fever Cause a Throbbing Headache?
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 block mb-2">
                  Cerebral Vasodilation &amp; Meningeal Sensitization
                </span>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  <strong>
                    1. Meningeal Vasodilation (Throbbing Sensation):
                  </strong>{" "}
                  Elevated core temperature increases cerebral blood flow
                  demand. Circulating{" "}
                  <strong className="text-white">
                    PGE2 and Nitric Oxide (NO)
                  </strong>{" "}
                  trigger direct smooth muscle relaxation in dural and cerebral
                  blood vessels. Each arterial systolic pulse stretches these
                  dilated vessels, creating a rhythmic, throbbing pain.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  <strong>2. Trigeminal Nerve Sensitization:</strong>{" "}
                  Pain-sensitive nerve endings of the ophthalmic division of the{" "}
                  <strong className="text-white">
                    Trigeminal Nerve (CN V1)
                  </strong>{" "}
                  wrap around the dural and pial vasculature. Pro-inflammatory
                  cytokines lower their firing threshold, causing sensory
                  hyper-responsiveness.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>3. Intracranial Dynamics &amp; Dehydration:</strong>{" "}
                  Fever-driven perspiration and rapid breathing cause acute
                  hypovolemia, altering intracranial pressure gradients and
                  causing extra mechanical pull on the pain-sensitive dural
                  venous sinuses.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/60 mt-4 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <em>Critical Warning:</em> Standard febrile headache is
                generalized and throbbing. If accompanied by neck stiffness
                (nuchal rigidity), photophobia, or altered consciousness,
                immediately suspect <strong>Meningitis</strong>.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: RED FLAGS & WHEN TO WORRY */}
        <section className="p-6 sm:p-8 rounded-2xl border border-rose-500/30 bg-gradient-to-r from-rose-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
          <div className="flex items-center gap-2 text-rose-400">
            <ShieldAlert className="w-6 h-6" />
            <h2 className="text-xl font-bold text-white">
              5. Triage Alert: When to Worry (Red Flag Symptoms)
            </h2>
          </div>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Fever is an adaptive immune defense, but the presence of the
            following signs indicates critical invasive infection, impending
            shock, or central neurological compromise requiring urgent clinical
            escalation:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/40 text-slate-200">
              <strong className="text-rose-300 block mb-1">
                Neurological & Sensorium
              </strong>
              <ul className="space-y-1 list-disc list-inside text-slate-400">
                <li>Altered mental status / confusion</li>
                <li>Neck stiffness (Meningismus)</li>
                <li>New-onset seizures (non-febrile or adult)</li>
                <li>Photophobia with severe headache</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/40 text-slate-200">
              <strong className="text-rose-300 block mb-1">
                Hemodynamic & Perfusion
              </strong>
              <ul className="space-y-1 list-disc list-inside text-slate-400">
                <li>Systolic BP &lt; 90 mmHg (Septic Shock)</li>
                <li>Persistent tachycardia (&gt; 120 bpm at rest)</li>
                <li>Mottled skin or capillary refill &gt; 3 sec</li>
                <li>Cold, clammy peripheries during high fever</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/40 text-slate-200">
              <strong className="text-rose-300 block mb-1">
                Respiratory Compromise
              </strong>
              <ul className="space-y-1 list-disc list-inside text-slate-400">
                <li>Tachypnea (&gt; 24–30 breaths/min)</li>
                <li>Pulse oximetry SpO2 &lt; 92% – 94% on air</li>
                <li>Stridor or intercostal retractions</li>
                <li>Cyanosis of lips or nail beds</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/40 text-slate-200">
              <strong className="text-rose-300 block mb-1">
                Special Populations
              </strong>
              <ul className="space-y-1 list-disc list-inside text-slate-400">
                <li>Neonates &le; 28 days with temp &ge; 38.0°C</li>
                <li>Febrile neutropenia (ANC &lt; 500/µL)</li>
                <li>Petechial or purpuric non-blanching rash</li>
                <li>Fever lasting &gt; 5–7 continuous days without source</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: COMMON FEVER MEDICATIONS (PHARMACOTHERAPY) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-teal-400" />
              <h2 className="text-xl font-bold text-white">
                5. Common Antipyretic Medications &amp; Clinical Pharmacology
              </h2>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
              Evidence-Based Antipyresis
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Paracetamol / Acetaminophen */}
            <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between group hover:border-teal-400/50 transition-all shadow-lg shadow-black/20">
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      1st Line Antipyretic
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1.5 group-hover:text-teal-200 transition-colors">
                      <Link href="/medical/paracetamol">
                        Paracetamol (Acetaminophen)
                      </Link>
                    </h3>
                    <span className="text-xs text-slate-400 block font-mono">
                      APAP / Acetaminophen
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-teal-300 bg-slate-950/80 px-2 py-1 rounded-lg border border-slate-800">
                    Oral / IV / PR
                  </span>
                </div>

                {/* Dosing Specs */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 my-3 font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Adult Dose:</span>
                    <span className="text-teal-300 font-bold">
                      500 mg – 1000 mg Q4–6H
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Pediatric Dose:</span>
                    <span className="text-amber-300 font-bold">
                      10 – 15 mg/kg Q4–6H
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Max 24h Ceiling:</span>
                    <span className="text-rose-300 font-bold">
                      4000 mg (Adult) / 60 mg/kg (Peds)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-900">
                    <span className="text-slate-400">Onset / Duration:</span>
                    <span className="text-slate-200">30–60 min | 4–6 hrs</span>
                  </div>
                </div>

                {/* Mechanism */}
                <div className="mb-3 text-xs">
                  <strong className="text-slate-200 block mb-0.5 font-mono text-[10px] uppercase">
                    Mechanism of Action:
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Centrally acts on the hypothalamic thermoregulatory center
                    by inhibiting CNS cyclooxygenase (COX-3/peroxidase variant),
                    blocking PGE2 synthesis. Minimal peripheral
                    anti-inflammatory activity; does not inhibit peripheral
                    platelet aggregation.
                  </p>
                </div>

                {/* Primary Uses */}
                <div className="mb-3 text-xs">
                  <strong className="text-teal-400 block mb-0.5 font-mono text-[10px] uppercase">
                    Preferred Indications:
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    First-line agent across all age groups (including neonates
                    and pregnant patients); mild-to-moderate pyrexia,
                    post-immunization fever, headaches, mild musculoskeletal
                    pain.
                  </p>
                </div>
              </div>

              {/* Clinical Warning */}
              <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong className="text-rose-300">Toxicity Alert:</strong>{" "}
                  Hepatic metabolism saturation forms toxic metabolite{" "}
                  <span className="font-mono text-white">NAPQI</span>.
                  Contraindicated in severe hepatic impairment or chronic
                  alcoholism. Antidote for overdose is{" "}
                  <strong>N-Acetylcysteine (NAC)</strong>.
                </span>
              </div>
            </div>

            {/* 2. Ibuprofen */}
            <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between group hover:border-amber-400/50 transition-all shadow-lg shadow-black/20">
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      NSAID &bull; Antipyretic + Anti-Inflammatory
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1.5 group-hover:text-amber-200 transition-colors">
                      <Link href="/medical/ibuprofen">Ibuprofen</Link>
                    </h3>
                    <span className="text-xs text-slate-400 block font-mono">
                      Propionic Acid Derivative
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300 bg-slate-950/80 px-2 py-1 rounded-lg border border-slate-800">
                    Oral / IV
                  </span>
                </div>

                {/* Dosing Specs */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 my-3 font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Adult Dose:</span>
                    <span className="text-amber-300 font-bold">
                      200 mg – 400 mg Q6–8H
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Pediatric Dose:</span>
                    <span className="text-teal-300 font-bold">
                      5 – 10 mg/kg Q6–8H (&gt; 6 months)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Max 24h Ceiling:</span>
                    <span className="text-rose-300 font-bold">
                      1200 mg (OTC) / 2400 mg (Rx)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-900">
                    <span className="text-slate-400">Onset / Duration:</span>
                    <span className="text-slate-200">30–60 min | 6–8 hrs</span>
                  </div>
                </div>

                {/* Mechanism */}
                <div className="mb-3 text-xs">
                  <strong className="text-slate-200 block mb-0.5 font-mono text-[10px] uppercase">
                    Mechanism of Action:
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Non-selective, reversible competitive inhibition of both
                    cyclooxygenase-1 (COX-1) and cyclooxygenase-2 (COX-2)
                    enzymes, halting conversion of arachidonic acid to PGE2 both
                    in hypothalamic thermoregulatory centers and peripheral
                    inflammatory tissue beds.
                  </p>
                </div>

                {/* Primary Uses */}
                <div className="mb-3 text-xs">
                  <strong className="text-amber-400 block mb-0.5 font-mono text-[10px] uppercase">
                    Preferred Indications:
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Fever accompanied by significant inflammatory pain (otitis
                    media, pharyngitis, acute tonsillitis, dental pain, viral
                    arthralgia/myalgia); longer duration of fever suppression
                    than paracetamol.
                  </p>
                </div>
              </div>

              {/* Clinical Warning */}
              <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong className="text-amber-300">
                    Renal &amp; GI Alert:
                  </strong>{" "}
                  Causes gastric mucosal erosion and reduces renal blood flow
                  via afferent arteriolar constriction. Contraindicated in
                  dehydration, peptic ulcer disease, severe CKD, third-trimester
                  pregnancy, and infants &lt; 6 months.
                </span>
              </div>
            </div>

            {/* 3. Aspirin */}
            <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between group hover:border-rose-400/50 transition-all shadow-lg shadow-black/20">
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                      Irreversible Salicylate
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1.5 group-hover:text-rose-200 transition-colors">
                      <Link href="/medical/aspirin">
                        Aspirin (Acetylsalicylic Acid)
                      </Link>
                    </h3>
                    <span className="text-xs text-slate-400 block font-mono">
                      ASA / Salicylate
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-rose-300 bg-slate-950/80 px-2 py-1 rounded-lg border border-slate-800">
                    Oral / Enteric Coated
                  </span>
                </div>

                {/* Dosing Specs */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 my-3 font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Adult Antipyretic:</span>
                    <span className="text-rose-300 font-bold">
                      325 mg – 650 mg Q4–6H
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Pediatric Dose:</span>
                    <span className="text-rose-400 font-bold font-sans tracking-wide">
                      CONTRAINDICATED
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Max 24h Ceiling:</span>
                    <span className="text-rose-300 font-bold">
                      4000 mg (Adults Only)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-900">
                    <span className="text-slate-400">Onset / Duration:</span>
                    <span className="text-slate-200">20–30 min | 4–6 hrs</span>
                  </div>
                </div>

                {/* Mechanism */}
                <div className="mb-3 text-xs">
                  <strong className="text-slate-200 block mb-0.5 font-mono text-[10px] uppercase">
                    Mechanism of Action:
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Irreversible acetylation of Serine-529 on COX-1 and
                    Serine-516 on COX-2 enzymes. Permanently inactivates
                    platelet thromboxane A2 (TXA2) generation for the entire
                    7–10 day lifespan of the circulating platelet.
                  </p>
                </div>

                {/* Primary Uses */}
                <div className="mb-3 text-xs">
                  <strong className="text-rose-400 block mb-0.5 font-mono text-[10px] uppercase">
                    Current Clinical Role:
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Largely superseded by Paracetamol and Ibuprofen for routine
                    fevers due to safety profile. Retains specialized
                    antipyretic/anti-inflammatory use in Rheumatic Fever and
                    Kawasaki Disease (under close specialist supervision).
                  </p>
                </div>
              </div>

              {/* Clinical Warning */}
              <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong className="text-rose-400">
                    Black Box Warning &bull; Reye&apos;s Syndrome:
                  </strong>{" "}
                  Strictly forbidden in children and adolescents (&lt; 19 years)
                  suffering from viral illnesses (varicella/chickenpox,
                  influenza) due to the fatal risk of{" "}
                  <strong>Reye&apos;s syndrome</strong> (acute encephalopathy
                  with microvesicular fatty liver failure).
                </span>
              </div>
            </div>

            {/* 4. Lignocaine / Lidocaine */}
            <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between group hover:border-cyan-400/50 transition-all shadow-lg shadow-black/20">
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Amide Local Anesthetic &bull; Class Ib
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1.5 group-hover:text-cyan-200 transition-colors">
                      <Link href="/medical/lignocaine">
                        Lignocaine (Lidocaine HCl)
                      </Link>
                    </h3>
                    <span className="text-xs text-slate-400 block font-mono">
                      Aminoamide / Sodium Channel Blocker
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-slate-950/80 px-2 py-1 rounded-lg border border-slate-800">
                    Topical / Viscous / IV
                  </span>
                </div>

                {/* Dosing Specs */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 my-3 font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Oral/Mucosal Dose:</span>
                    <span className="text-cyan-300 font-bold">
                      2% Viscous: 5 – 15 mL Q3–4H PRN
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Pediatric (Mucosal):</span>
                    <span className="text-amber-300 font-bold">
                      Strictly &le; 4 mg/kg (Topical)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Max Adult Ceiling:</span>
                    <span className="text-rose-300 font-bold">
                      300 mg (4.5 mg/kg plain)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-900">
                    <span className="text-slate-400">Onset / Duration:</span>
                    <span className="text-slate-200">2–5 min | 30–60 min</span>
                  </div>
                </div>

                {/* Mechanism */}
                <div className="mb-3 text-xs">
                  <strong className="text-slate-200 block mb-0.5 font-mono text-[10px] uppercase">
                    Mechanism of Action:
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Reversibly blocks voltage-gated fast sodium (Na+) channels
                    along peripheral neuronal membranes. Prevents sodium influx,
                    arrests action potential generation and propagation, and
                    completely halts afferent nociceptive pain signaling without
                    altering hypothalamic PGE2 or core thermoregulatory
                    thresholds.
                  </p>
                </div>

                {/* Primary Uses in Febrile States */}
                <div className="mb-3 text-xs">
                  <strong className="text-cyan-400 block mb-0.5 font-mono text-[10px] uppercase">
                    Clinical Role in Febrile Illness:
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    Not a direct fever reducer. Indicated for symptomatic
                    topical pain relief in severe febrile mucosal infections
                    (herpetic gingivostomatitis, hand-foot-and-mouth ulcers,
                    viral pharyngitis) allowing oral rehydration, and
                    second-line IV therapy in ICU for refractory febrile status
                    epilepticus.
                  </p>
                </div>
              </div>

              {/* Clinical Warning */}
              <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong className="text-rose-400">
                    FDA Boxed Warning &bull; LAST &amp; Aspiration:
                  </strong>{" "}
                  Avoid excessive viscous mucosal application in
                  infants/toddlers. Systemic absorption can cause{" "}
                  <strong>Local Anesthetic Systemic Toxicity (LAST)</strong>{" "}
                  (seizures, cardiac arrest) and pharyngeal numbing abolishes
                  gag reflex, causing aspiration of fluids.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CLINICAL FEVER PATTERNS & THERMAL ARCHITECTURE */}
        <section className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-400" />
              <h2 className="text-xl font-bold text-white">
                6. Clinical Fever Patterns (Thermal Curve Diagnostics)
              </h2>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
              Semiology &bull; Classical Temperature Curves
            </span>
          </div>

          <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
            Serial charting of core body temperature reveals reproducible
            circadian and cyclical waveforms. Recognizing these pathognomonic
            thermal signatures aids in bedside differential diagnosis before
            microbiological cultures and serological assays return.
          </p>

          {/* Primary Temperature Fluctuation Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Continuous / Sustained */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                    &Delta; &lt; 1°C (24h)
                  </span>
                  <span className="text-[10px] font-semibold uppercase text-slate-400">
                    Zero Baseline Return
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  Continuous / Sustained Fever
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Temperature remains consistently elevated throughout the
                  24-hour cycle. Diurnal fluctuations are minimal and strictly{" "}
                  <strong>less than 1°C (1.5°F)</strong>, never touching the
                  normal baseline.
                </p>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
                  <div>
                    <strong className="text-teal-400">Classic Etiology:</strong>{" "}
                    Lobar Pneumonia (Streptococcus pneumoniae)
                  </div>
                  <div>
                    <strong className="text-slate-400">Also Seen In:</strong>{" "}
                    Acute Scrub Typhus, Erysipelas, Severe UTI
                  </div>
                </div>
              </div>
              <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-slate-400">
                <em>Pathophysiology:</em> Sustained intravascular pyrogenemia
                maintaining unbroken hypothalamic endoperoxide synthesis.
              </div>
            </div>

            {/* Remittent */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    &Delta; &gt; 1°C (24h)
                  </span>
                  <span className="text-[10px] font-semibold uppercase text-slate-400">
                    Zero Baseline Return
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  Remittent Fever
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Temperature fluctuates widely by{" "}
                  <strong>more than 1°C (1.5°F–2°F)</strong> across the day, but
                  despite large swings, it{" "}
                  <strong>never touches the normal baseline</strong>, remaining
                  febrile 24/7.
                </p>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
                  <div>
                    <strong className="text-amber-400">
                      Classic Etiology:
                    </strong>{" "}
                    Infective Endocarditis (IE), Viral URTI/LRTI
                  </div>
                  <div>
                    <strong className="text-slate-400">Also Seen In:</strong>{" "}
                    Visceral Leishmaniasis (Kala-Azar), Acute Rheumatic Fever
                  </div>
                </div>
              </div>
              <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-slate-400">
                <em>Clinical Pearl:</em> In Kala-Azar, a &quot;double
                quotidian&quot; pattern (two distinct temperature spikes within
                a single 24-hour cycle) can occur.
              </div>
            </div>

            {/* Intermittent */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Spike &rarr; Baseline
                  </span>
                  <span className="text-[10px] font-semibold uppercase text-emerald-400">
                    Returns to Normal
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  Intermittent Fever
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Temperature elevation is episodic and paroxysmal. The fever
                  curve{" "}
                  <strong>
                    regularly touches or drops below the normal baseline
                  </strong>{" "}
                  between spikes, providing distinct periods of apyrexia.
                </p>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
                  <div>
                    <strong className="text-cyan-400">Classic Etiology:</strong>{" "}
                    Malaria (Plasmodium species)
                  </div>
                  <div>
                    <strong className="text-slate-400">Also Seen In:</strong>{" "}
                    Pyogenic Liver Abscess, Ascending Cholangitis
                    (Charcot&apos;s triad)
                  </div>
                </div>
              </div>
              <div className="pt-2.5 border-t border-slate-800/60 mt-3 text-[11px] text-slate-400">
                <em>Mechanism:</em> Paroxysmal synchronous erythrocyte lysis
                releasing hemozoin, cellular debris, and TNF-α boluses into the
                circulation.
              </div>
            </div>
          </div>

          {/* Malaria Periodicity Breakdown Sub-Card */}
          <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/50 backdrop-blur-md space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Malarial Periodicity: Erythrocytic Schizogony Cycle
                </h3>
              </div>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800 px-2 py-0.5 rounded">
                Pathognomonic Rhythms
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-cyan-300">Tertian Fever</strong>
                  <span className="font-mono text-[10px] text-slate-400">
                    48-Hour Interval
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Fever spikes on <strong>Day 1</strong>, subsides on{" "}
                  <strong>Day 2</strong>, and recurs on <strong>Day 3</strong>{" "}
                  (every 48 hours).
                </p>
                <div className="text-[11px] font-mono text-teal-400 bg-slate-900 p-1.5 rounded border border-slate-800/80">
                  Species: Plasmodium vivax &bull; Plasmodium ovale
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-cyan-300">Quartan Fever</strong>
                  <span className="font-mono text-[10px] text-slate-400">
                    72-Hour Interval
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Fever spikes on <strong>Day 1</strong>, followed by two
                  afebrile days (Days 2 &amp; 3), recurring on{" "}
                  <strong>Day 4</strong> (every 72 hours).
                </p>
                <div className="text-[11px] font-mono text-amber-400 bg-slate-900 p-1.5 rounded border border-slate-800/80">
                  Species: Plasmodium malariae
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-cyan-300">
                    Subtertian / Irregular
                  </strong>
                  <span className="font-mono text-[10px] text-rose-400">
                    Asynchronous (Continuous/Remittent)
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Continuous or irregular jagged spikes lacking a clean cyclical
                  rhythm due to multiple overlapping parasite broods rupturing
                  unsynchronized.
                </p>
                <div className="text-[11px] font-mono text-rose-400 bg-slate-900 p-1.5 rounded border border-slate-800/80">
                  Species: Plasmodium falciparum (Malignant Tertian)
                </div>
              </div>
            </div>
          </div>

          {/* Master Clinical Pattern Classification Grid */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-400" /> Specialized Clinical
              Pattern Catalog
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              {/* Step-Ladder */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white">Step-Ladder Fever</h4>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                      Typhoid Curve
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    Temperature creeps insidiously upward in a daily stair-step
                    progression (each morning cooler than the night before, but
                    higher than the previous morning) over 7–10 days, settling
                    into sustained plateau.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-teal-300">
                  <strong>Classic Example:</strong> Typhoid Fever (Enteric fever
                  &bull; Salmonella enterica serovar Typhi)
                </div>
              </div>

              {/* Biphasic / Saddleback */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white">
                      Biphasic / Saddleback Pattern
                    </h4>
                    <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded">
                      Camel-Hump
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    Fever lasts 2–3 days, abates completely to normal for 24–48
                    hours (&quot;the saddle&quot;), then rebounds with a
                    secondary febrile spike accompanied by immune-mediated rash.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-rose-300">
                  <strong>Classic Example:</strong> Dengue Fever (Breakbone
                  fever), Yellow Fever, Colorado Tick Fever
                </div>
              </div>

              {/* Biphasic Illness */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white">
                      Biphasic Illness Course
                    </h4>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                      Septicemic &rarr; Immune
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    Acute initial bacteremic phase (high fever, severe
                    conjunctival suffusion, calf myalgias) lasting 4–7 days,
                    brief remission, followed by secondary immune phase with
                    aseptic meningitis or renal/hepatic failure.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-cyan-300">
                  <strong>Classic Example:</strong> Leptospirosis (Weil&apos;s
                  Disease), Poliovirus
                </div>
              </div>

              {/* Pel-Ebstein */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white">Pel-Ebstein Fever</h4>
                    <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded">
                      Neoplastic Cycle
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    Cyclical fever that remains high for 3 to 10 days, followed
                    by an equally long apyrexial remission phase (3–10 days of
                    normal temperature), repeating regularly over months.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-purple-300">
                  <strong>Classic Example:</strong> Hodgkin Lymphoma (B-symptom
                  cytokine cycling from Reed-Sternberg cells)
                </div>
              </div>

              {/* Undulant Fever */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white">Undulant Fever</h4>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      Wave-Like Profile
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    Wave-like thermal curve where temperature rises slowly in
                    late afternoon, peaks at night with drenching diaphoresis,
                    and falls by morning, gradually cresting and troughing over
                    weeks.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-emerald-300">
                  <strong>Classic Example:</strong> Brucellosis (Malta fever /
                  Mediterranean fever &bull; unpasteurized dairy)
                </div>
              </div>

              {/* Relapsing Fever */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white">Relapsing Fever</h4>
                    <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded">
                      Antigenic Variation
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    Acute high fever lasting ~3–5 days, terminating with crisis
                    (shivering followed by profuse diaphoresis), an afebrile
                    interval of 7–10 days, then reappearing due to spirochetal
                    surface antigen switching.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-rose-300">
                  <strong>Classic Example:</strong> Borrelia recurrentis
                  (Louse-borne) &bull; Borrelia hermsii (Tick-borne)
                </div>
              </div>

              {/* Low-Grade Prolonged */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white">
                      Prolonged Low-Grade Fever
                    </h4>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded">
                      Evening Rise
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    Chronic low-level temperature elevations (37.5°C – 38.3°C),
                    typically showing a characteristic late afternoon or evening
                    rise with drenching night sweats and weight loss.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-amber-300">
                  <strong>Classic Example:</strong> Tuberculosis (Pulmonary
                  &amp; Extrapulmonary TB)
                </div>
              </div>

              {/* Acute Sustained with Eschar */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white">
                      Acute Sustained High Fever
                    </h4>
                    <span className="text-[10px] font-mono text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded">
                      Trombiculid Mite
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    Abrupt, unrelenting high fever accompanied by severe
                    headache, retro-orbital pain, generalized lymphadenopathy,
                    and a pathognomonic cigarette-burn necrotic skin lesion
                    (eschar).
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-teal-300">
                  <strong>Classic Example:</strong> Scrub Typhus (Orientia
                  tsutsugamushi)
                </div>
              </div>

              {/* Low-Grade / Intermittent Endocarditis */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white">
                      Subacute Remittent / Intermittent
                    </h4>
                    <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded">
                      Valvular Vegetations
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    Indolent, irregular low-grade fever with night sweats,
                    anorexia, embolic stigmata (Osler nodes, Janeway lesions,
                    splinter hemorrhages), and a new or changing regurgitant
                    cardiac murmur.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-rose-300">
                  <strong>Classic Example:</strong> Subacute Bacterial
                  Endocarditis (SBE &bull; Viridans Streptococci)
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Diagnostic Summary Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
            <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
              <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                <tr>
                  <th className="p-3.5">Pattern</th>
                  <th className="p-3.5">Thermal Characteristics</th>
                  <th className="p-3.5">Primary Diagnostic Signatures</th>
                  <th className="p-3.5">Classic Etiology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Continuous</td>
                  <td className="p-3.5">
                    &Delta; &lt; 1°C in 24h, never touches baseline
                  </td>
                  <td className="p-3.5 text-slate-300">
                    Consistently elevated plateaus
                  </td>
                  <td className="p-3.5 font-mono text-teal-300">
                    Lobar Pneumonia, Typhus
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Remittent</td>
                  <td className="p-3.5">
                    &Delta; &gt; 1°C in 24h, never touches baseline
                  </td>
                  <td className="p-3.5 text-slate-300">
                    Wide daily excursions without apyrexia
                  </td>
                  <td className="p-3.5 font-mono text-amber-300">
                    Endocarditis, Kala-Azar, Viruses
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">
                    Intermittent (Tertian)
                  </td>
                  <td className="p-3.5">
                    Spikes every 48 hours, normal baseline between
                  </td>
                  <td className="p-3.5 text-slate-300">
                    Cold &rarr; Hot &rarr; Sweating stages
                  </td>
                  <td className="p-3.5 font-mono text-cyan-300">
                    P. vivax, P. ovale
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">
                    Intermittent (Quartan)
                  </td>
                  <td className="p-3.5">
                    Spikes every 72 hours, normal baseline between
                  </td>
                  <td className="p-3.5 text-slate-300">
                    Two complete afebrile days between spikes
                  </td>
                  <td className="p-3.5 font-mono text-cyan-300">P. malariae</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Step-Ladder</td>
                  <td className="p-3.5">
                    Incremental step-wise daily rise over 1st week
                  </td>
                  <td className="p-3.5 text-slate-300">
                    Relative bradycardia (Faget&apos;s sign), rose spots
                  </td>
                  <td className="p-3.5 font-mono text-teal-300">
                    Typhoid Fever
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">
                    Saddleback / Biphasic
                  </td>
                  <td className="p-3.5">
                    Fever &rarr; 1–2 afebrile days &rarr; Rebound fever
                  </td>
                  <td className="p-3.5 text-slate-300">
                    Retro-orbital pain, secondary petechial rash
                  </td>
                  <td className="p-3.5 font-mono text-rose-300">
                    Dengue, Yellow Fever
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Undulant</td>
                  <td className="p-3.5">Wave-like rise and fall over weeks</td>
                  <td className="p-3.5 text-slate-300">
                    Profuse nocturnal sweats, arthralgia
                  </td>
                  <td className="p-3.5 font-mono text-emerald-300">
                    Brucellosis
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Pel-Ebstein</td>
                  <td className="p-3.5">
                    3–10 days febrile alternating with 3–10 days afebrile
                  </td>
                  <td className="p-3.5 text-slate-300">
                    Painless lymphadenopathy, pruritus
                  </td>
                  <td className="p-3.5 font-mono text-purple-300">
                    Hodgkin Lymphoma
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Relapsing</td>
                  <td className="p-3.5">
                    Days of fever alternating with a week of apyrexia
                  </td>
                  <td className="p-3.5 text-slate-300">
                    Terminates with shaking rigors &amp; diaphoresis
                  </td>
                  <td className="p-3.5 font-mono text-rose-300">
                    Borrelia recurrentis / hermsii
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
