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

export default function SodiumChlorideSprayPage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "why-nasal-only" | "dosing" | "safety" | "drug-class"
  >("overview");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-sky-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-semibold mb-3">
              <Droplets className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Isotonic / Hypertonic Nasal Saline
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Sodium Chloride Nasal Spray (Nasoclear)
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Chemical root:{" "}
                <strong className="text-sky-300 font-mono">
                  Sodium Chloride (NaCl) 0.65% w/v or 0.9% w/v Isotonic Buffered
                  Aqueous Solution
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-sky-400 font-mono">
                    Primary Brand: Nasoclear
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    &bull; Manufactured by Dr. Reddy&apos;s Laboratories
                    (Isotonic 0.65% w/v Drops &amp; Mist)
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Other Global Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Otrivin Breathe Clean, Ayr Saline, Ocean Nasal Spray, Simply
                    Saline (0.9% – 3%)
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on physical mucolytic hydration, mucociliary
              escalator clearance, mechanical allergen/viral lavage, zero
              drug-receptor pharmacology (100% safe for newborns, pregnant
              mothers, and hypertensive patients), why clinicians apply it
              strictly via the intranasal topical route rather than oral salt
              water, and chronic overuse effects.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Approved Minimum Age
              </span>
              <span className="text-xl font-bold text-emerald-400 font-mono">
                Day 1 Newborn
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Rebound Congestion
              </span>
              <span className="text-xl font-bold text-sky-300 font-mono">
                0% (Drug-Free)
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
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_15px_rgba(14,165,233,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Overview, Mechanism &amp; Uses</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("why-nasal-only")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "why-nasal-only"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_15px_rgba(14,165,233,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Why Doctors Use It Nasally</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dosing")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dosing"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_15px_rgba(14,165,233,0.4)]"
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
              <span>Side Effects &amp; Overuse</span>
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
              <span>Saline Tonicity Class</span>
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
                  <div className="flex items-center gap-2 text-sky-400 mb-3">
                    <Pill className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      What is Sodium Chloride Nasal Spray (Nasoclear)?
                    </h2>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Sodium Chloride Nasal Spray—most widely prescribed in India
                    and Asia under Dr. Reddy&apos;s flagship brand{" "}
                    <strong>
                      Nasoclear (0.65% w/v isotonic buffered solution)
                    </strong>
                    —is a sterile, drug-free, pH-balanced aqueous salt solution
                    formulated to match the natural osmotic tonicity of human
                    nasal secretions.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Because it contains{" "}
                    <strong>
                      zero vasoconstrictors, zero steroids, and zero
                      antihistamines
                    </strong>
                    , it hydrates dry crusted nasal passages, thins tenacious
                    thick mucus, and flushes out trapped viruses, pollens, and
                    dust particles without causing rebound congestion (
                    <em>rhinitis medicamentosa</em>) or systemic side
                    effects—making it the universal first-line nasal therapy for
                    infants, pregnant women, and adults.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-sky-300 block mb-0.5">
                    Pharmacokinetics &amp; Tonicity:
                  </strong>
                  Acts purely via local biophysical hydration and mechanical
                  lavage on the nasal mucosa; immediate onset within{" "}
                  <strong>1 to 2 minutes</strong> of instillation. No systemic
                  drug receptor binding or hepatic/renal metabolism; excess
                  solution is either cleared via mucociliary drainage into the
                  oropharynx or expelled when blowing the nose.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 mb-3">
                    <Brain className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-white">
                      How Does It Work? (4-Step Biophysical Mechanism)
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <strong className="text-white block mb-0.5">
                        1. Mucus Viscosity Reduction (Physical Mucolytic
                        Hydration):
                      </strong>
                      Adds water directly to dehydrated, thick, sticky nasal
                      mucin polymers, reducing surface tension and breaking down
                      hardened nasal crusts so trapped phlegm can drain
                      effortlessly.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        2. Mucociliary Escalator &amp; Ciliary Beat Restoration:
                      </strong>
                      Restores the periciliary sol layer depth, allowing
                      microscopic respiratory{" "}
                      <strong>cilia (hair-like projections)</strong> to beat
                      rhythmically and sweep mucus, bacteria, and viral debris
                      out of the nasal cavity and sinus ostia.
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">
                        3. Mechanical Lavage &amp; Osmotic Edema Reduction:
                      </strong>
                      Physically washes away inhaled allergens (pollen, dust
                      mites), inflammatory mediators (histamine, leukotrienes),
                      and viral particles. Hypertonic formulations (2%–3% NaCl)
                      additionally draw excess interstitial water out of swollen
                      turbinate cells via osmosis.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <strong className="text-cyan-300 block mb-0.5">
                    Main Therapeutic Action Summary:
                  </strong>
                  Drug-free{" "}
                  <strong>
                    mucosal hydration, mucus thinning, ciliary clearance, and
                    mechanical allergen/viral lavage
                  </strong>
                  .
                </div>
              </div>
            </div>

            {/* Key Clinical Pearls */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-sky-400">
                <Info className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Key Points to Remember
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-900/50">
                  <strong className="text-emerald-300 block mb-1">
                    100% Safe for Newborns &amp; Pregnancy:
                  </strong>
                  Unlike Oxymetazoline or Xylometazoline (contraindicated in
                  infants), Nasoclear saline drops are the{" "}
                  <strong>
                    only safe nasal decongestant for newborn babies
                  </strong>{" "}
                  before breastfeeding or sleep.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <strong className="text-sky-300 block mb-1">
                    No 3-Day Limit / Zero Rebound:
                  </strong>
                  Because it contains no alpha-adrenergic vasoconstrictor, it
                  causes <strong>zero rhinitis medicamentosa</strong> and can be
                  used safely multiple times daily for months.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    Apply 10–15 Min BEFORE Medicated Sprays:
                  </strong>
                  Always spray Nasoclear saline <em>first</em> to clear thick
                  mucus crusts, blow gently, and then apply medicated sprays
                  (Fluticasone or Azelastine) so the drug reaches bare nasal
                  mucosa.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    Single-User Bottle Hygiene:
                  </strong>
                  Never share a nasal dropper or spray nozzle between family
                  members, and wipe the tip clean after each use to prevent
                  bacterial contamination.
                </div>
              </div>
            </div>

            {/* Main Clinical Uses */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> What Is It
                Used For? (Main Clinical Indications)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-sky-300 block mb-1 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5" /> 1. Common Cold, Sinusitis
                    &amp; Infant Stuffy Nose
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Clearing thick mucus plugs in newborns &amp; infants prior
                      to feeding (with bulb suction)
                    </li>
                    <li>
                      Viral common cold nasal congestion &amp; post-nasal drip
                    </li>
                    <li>Acute and chronic rhinosinusitis mucus drainage</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-cyan-300 block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> 2. Allergic Rhinitis
                    &amp; Environmental Dryness
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Flushing out pollen, dust mites, smoke, and air pollution
                      from nasal passages
                    </li>
                    <li>
                      Relieving dry, crusted nasal lining from air conditioning,
                      winter heating, or airplane flights
                    </li>
                    <li>
                      Pregnancy rhinitis (safe non-drug relief throughout all
                      trimesters)
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <strong className="text-emerald-300 block mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> 3. Post-Operative
                    ENT Care &amp; Rebound Recovery
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>
                      Preventing crust formation after septoplasty or functional
                      endoscopic sinus surgery (FESS)
                    </li>
                    <li>
                      Weaning patients off Xylometazoline/Oxymetazoline spray
                      addiction (<em>rhinitis medicamentosa</em>)
                    </li>
                    <li>
                      Preventing minor nosebleeds (epistaxis) caused by dry
                      nasal crusting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: WHY DOCTORS USE IT TOPICALLY / NASALLY */}
        {/* ========================================================================= */}
        {activeTab === "why-nasal-only" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-6 rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Clinical Rationale: Why Doctors Prescribe Sodium Chloride
                    Directly in the Nose (Nasoclear)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    While Sodium Chloride is used intravenously for systemic
                    hydration, for upper respiratory and sinus conditions
                    doctors prescribe it exclusively via the{" "}
                    <strong>intranasal spray/drop route</strong>. Swallowing
                    salt water does nothing to clear nasal mucus—direct topical
                    contact with the respiratory epithelium is essential:
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Clinical Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-sky-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 font-bold">
                  Reason 1 &bull; Direct Physical Contact With Mucus &amp; Cilia
                </span>
                <h3 className="text-base font-bold text-white">
                  Mucus Thinning Requires Direct Surface Hydration
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Tenacious nasal phlegm and dried crusts sit on the exterior
                  surface of the nasal epithelium. Spraying buffered 0.65%–0.9%
                  NaCl directly onto the mucosa immediately hydrates mucin
                  polymers and restores ciliary beating within seconds—an effect
                  impossible to achieve via oral tablets.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                  Reason 2 &bull; Mechanical Lavage of Allergens &amp; Viruses
                </span>
                <h3 className="text-base font-bold text-white">
                  Physically Flushes Out Trigger Particles From the Nose
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Topical nasal irrigation physically rinses away pollen grains,
                  dust mite allergens, viral particles, and inflammatory
                  cytokines before they can bind to nasal mast cells—reducing
                  overall reliance on antihistamines and steroids.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  Reason 3 &bull; Zero Systemic Sodium Load
                </span>
                <h3 className="text-base font-bold text-white">
                  Safe for Hypertensive, Cardiac &amp; Renal Patients
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Because each nasal spray delivers only microliters of isotonic
                  saline locally, it does not raise systemic blood sodium levels
                  or blood pressure—making it completely safe for patients on
                  low-sodium diets, antihypertensives, or diuretics.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  Reason 4 &bull; First-Line Pediatric &amp; Pregnancy Standard
                </span>
                <h3 className="text-base font-bold text-white">
                  Replaces Unsafe Decongestants in Vulnerable Groups
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Because medicated decongestants (Oxymetazoline,
                  Xylometazoline, Pseudoephedrine) are banned or restricted in
                  infants and pregnancy, doctors rely on topical nasal saline as
                  the universal safe alternative.
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
                  Use Sodium Chloride Spray (Nasoclear)?
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Newborns &amp; Infants (Day 1 Onward):</strong> 1 to
                    2 drops per nostril before feeding and bedtime (wait 1
                    minute, then gently clear softened mucus with a soft rubber
                    bulb syringe).
                  </li>
                  <li>
                    <strong>Children (2 to 11 Years):</strong> 1 to 2 sprays or
                    2–3 drops per nostril as often as needed.
                  </li>
                  <li>
                    <strong>Adults &amp; Elderly (&ge; 12 Years):</strong> 2 to
                    3 sprays per nostril up to 3–6 times daily or as needed.
                  </li>
                  <li>
                    <strong>
                      Pregnant &amp; Breastfeeding Mothers, Hypertensive &amp;
                      Cardiac Patients:
                    </strong>{" "}
                    100% safe without restriction or drug interactions.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400" /> Precautions
                  &amp; When Not to Use
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  <li>
                    <strong>
                      Known Allergy to Preservatives (e.g., Benzalkonium
                      Chloride):
                    </strong>{" "}
                    Multi-dose bottles often contain mild preservatives;
                    patients with sensitivity should choose{" "}
                    <strong>preservative-free</strong> single-dose vials or
                    sterile pressurized mists.
                  </li>
                  <li>
                    <strong>
                      Never Use Homemade Tap Water in Sinus Rinses:
                    </strong>{" "}
                    Always use sterile commercial saline (Nasoclear) or
                    distilled/boiled-and-cooled water—unsterile tap water
                    carries rare risk of amoebic sinus infection (
                    <em>Naegleria fowleri</em>).
                  </li>
                  <li>
                    <strong>
                      Severe Complete Nasal Obstruction / Active Heavy
                      Epistaxis:
                    </strong>{" "}
                    Avoid forceful high-volume irrigation into a completely
                    blocked nostril (can force fluid into the Eustachian tube
                    and cause ear discomfort).
                  </li>
                </ul>
              </div>
            </div>

            {/* Stratified Dosing Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-sky-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Age &amp; Formulation Clinical Dosing Matrix (Nasoclear
                    0.65% w/v)
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-emerald-300 border border-emerald-900/50">
                  No Strict Maximum Daily Limit &bull; Safe for Long-Term Daily
                  Use
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Age Group</th>
                      <th className="p-3.5">Standard Dose</th>
                      <th className="p-3.5">Frequency / Timing</th>
                      <th className="p-3.5">Administration Pearl</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Newborns &amp; Infants (0 – 23 Months)
                      </td>
                      <td className="p-3.5 font-mono text-sky-300 font-bold">
                        1 – 2 drops per nostril
                      </td>
                      <td className="p-3.5">
                        3 – 4 times daily (especially 10 min before feeding)
                      </td>
                      <td className="p-3.5 text-slate-300">
                        Use gentle dropper mode; follow with soft bulb suction
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">
                        Children (2 – 11 Years)
                      </td>
                      <td className="p-3.5 font-mono text-sky-300 font-bold">
                        1 – 2 sprays or 2–3 drops / nostril
                      </td>
                      <td className="p-3.5">3 – 6 times daily as needed</td>
                      <td className="p-3.5 text-slate-300">
                        Have child blow nose gently 1 minute after spraying
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40 transition-colors bg-slate-950/40">
                      <td className="p-3.5 font-bold text-white">
                        Adults &amp; Pregnancy (&ge; 12 Years)
                      </td>
                      <td className="p-3.5 font-mono text-emerald-300 font-bold">
                        2 – 3 sprays per nostril
                      </td>
                      <td className="p-3.5">
                        Every 3 – 4 hours or PRN (unlimited duration)
                      </td>
                      <td className="p-3.5 text-slate-300">
                        Apply 10–15 min before medicated steroid/antihistamine
                        sprays
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: SIDE EFFECTS & OVERUSE */}
        {/* ========================================================================= */}
        {activeTab === "safety" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Common Side Effects */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-sky-400" />
                Common Side Effects (Minimal &amp; Transient)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-sky-300 block">
                    1. Initial Mucosal Sensations
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Brief mild tingling, stinging, or tickling sensation
                      (especially if nasal lining is cracked or inflamed)
                    </li>
                    <li>Reflex sneezing immediately after spraying</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <strong className="text-cyan-300 block">
                    2. Drainage Sensations
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Mild salty taste in the back of the throat as loosened
                      mucus drains
                    </li>
                    <li>Temporary watery drip as thick crusts liquefy</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-900/50 space-y-2">
                  <strong className="text-emerald-300 block">
                    3. Systemic Safety
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    <li>
                      Zero drowsiness, zero blood pressure elevation, and zero
                      heart rate changes
                    </li>
                    <li>Zero rebound nasal congestion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overuse Section */}
            <div className="p-6 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Overdose &amp; Chronic Overuse: What Happens If Overused?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Acute toxic overdose from isotonic Sodium Chloride nasal
                    spray is virtually impossible—even if a child accidentally
                    drinks an entire 20 mL bottle of 0.65% Nasoclear, it
                    contains only <strong>~130 mg of table salt</strong> (less
                    than a pinch of dietary salt). However, excessive chronic
                    overuse (spraying 15–20+ times daily for months) can produce
                    minor local effects:
                  </p>
                </div>
              </div>
            </div>

            {/* Overuse Complication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-900/50">
                <span className="font-mono text-amber-400 font-bold block mb-1">
                  1. Protective Mucus Blanket Washout
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Excessively frequent spraying washes away the nasal
                  cavity&apos;s natural antimicrobial mucus layer (which
                  contains protective lysozyme, lactoferrin, and secretory IgA),
                  causing paradoxical mucosal dryness and irritation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-900/50">
                <span className="font-mono text-rose-400 font-bold block mb-1">
                  2. Hypertonic Stinging &amp; Preservative Irritation
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Overusing hypertonic sprays (2.2%–3% NaCl) or
                  benzalkonium-preserved sprays many times a day can trigger
                  nasal burning, mild epistaxis, or ciliary slowing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-teal-900/50">
                <span className="font-mono text-teal-400 font-bold block mb-1">
                  3. Overuse Resolution
                </span>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Simply reduce spraying frequency back to 2–4 times daily and
                  allow the natural nasal mucosal blanket to regenerate over
                  24–48 hours. No medical antidote is required.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: SALINE TONICITY DRUG CLASS */}
        {/* ========================================================================= */}
        {activeTab === "drug-class" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Pharmacological &amp; Biophysical Classification
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Intranasal Saline Solutions (Isotonic vs. Hypertonic
                Formulations)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Intranasal saline solutions are categorized by their sodium
                chloride concentration (osmolarity) relative to human
                physiological fluids (0.9% NaCl).{" "}
                <strong>Isotonic sprays (0.65%–0.9%)</strong> focus on gentle
                daily hydration and infant safety, whereas{" "}
                <strong>Hypertonic sprays (2.0%–3.0%)</strong> pull osmotic
                water out of swollen sinus tissues for stronger decongestion.
              </p>
            </div>

            {/* Comparative Tonicity Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Saline Category</th>
                    <th className="p-3.5">NaCl Concentration</th>
                    <th className="p-3.5">Primary Biophysical Action</th>
                    <th className="p-3.5">Best Clinical Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr className="bg-sky-950/15">
                    <td className="p-3.5 font-bold text-sky-300">
                      Buffered Isotonic (Nasoclear)
                    </td>
                    <td className="p-3.5 font-mono text-emerald-400 font-bold">
                      0.65% w/v NaCl
                    </td>
                    <td className="p-3.5">
                      Gentle mucosal hydration &amp; crust softening (zero
                      stinging)
                    </td>
                    <td className="p-3.5">
                      Newborns, infants, daily allergy lavage, &amp; dry AC
                      environments
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-cyan-300">
                      Physiological Normal Saline
                    </td>
                    <td className="p-3.5 font-mono">0.9% w/v NaCl</td>
                    <td className="p-3.5">
                      Iso-osmotic mucociliary clearance &amp; sinus rinsing
                    </td>
                    <td className="p-3.5">
                      Post-op sinus care, Neti-pot irrigation, &amp; daily
                      rhinitis care
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-amber-300">
                      Hypertonic Sea Water / Saline
                    </td>
                    <td className="p-3.5 font-mono text-amber-300">
                      2.0% – 3.0% w/v NaCl
                    </td>
                    <td className="p-3.5">
                      Osmotic water extraction from swollen turbinates
                      (decongestant)
                    </td>
                    <td className="p-3.5">
                      Stubborn sinusitis congestion &amp; pregnancy rhinitis
                      blockage
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
