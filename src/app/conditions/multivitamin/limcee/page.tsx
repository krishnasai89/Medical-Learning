"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  ShieldAlert,
  Pill,
  Users,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  Info,
  Scale,
} from "lucide-react";

type LimceeTab =
  | "overview-label"
  | "factcheck"
  | "uses-who"
  | "side-effects-overuse";

const LABEL_BREAKDOWN_ROWS = [
  {
    ingredient: "Ascorbic Acid I.P.",
    strength: "100 mg",
    role: "Direct acidic form of Vitamin C (L-ascorbic acid) providing immediate water-soluble antioxidant activity.",
  },
  {
    ingredient: "Sodium Ascorbate I.P.",
    strength: "450 mg (eq. to Ascorbic Acid 400 mg)",
    role: "Buffered mineral salt form of Vitamin C—reduces tablet acidity for better stomach tolerability while delivering 400 mg active Vitamin C (~50 mg sodium per tablet).",
  },
  {
    ingredient: "Total Elemental Vitamin C",
    strength: "500 mg per chewable tablet",
    role: "5.5x to 6.5x the standard adult daily RDA (65–80 mg/day in India / 75–90 mg/day globally).",
  },
  {
    ingredient: "Excipients & Colour",
    strength: "q.s. • Colour: Sunset Yellow FCF",
    role: "Chewable orange-flavored tablet base; Sunset Yellow FCF (E110) gives the characteristic orange color.",
  },
];

const FACT_CHECK_CLAIMS = [
  {
    claim:
      '"Limcee prevents the common cold and makes you immune to viral infections."',
    verdict: "PARTIAL MYTH / OVERSTATED",
    reality:
      "FACT-CHECK: Regular daily Vitamin C does NOT prevent the general population from catching colds. Clinical trials show it only modestly shortens cold duration by ~8% in adults (roughly half a day) and only reduces cold incidence in people under extreme physical stress (e.g., marathon runners, soldiers in subarctic conditions).",
  },
  {
    claim:
      "\"Chewing Limcee every day gives instant 'glass skin' glow and lightens skin tone.\"",
    verdict: "MARKETING EXAGGERATION",
    reality:
      "FACT-CHECK: Oral Vitamin C supports internal collagen synthesis and protects against oxidative UV stress, which helps skin health if you are deficient. However, oral 500 mg tablets do NOT bleach melanin or create dramatic 'skin glow'—topical L-ascorbic acid serums + sunscreen act directly on skin, while excess oral Vitamin C is simply peed out.",
  },
  {
    claim: '"Limcee stops hair fall on its own."',
    verdict: "INDIRECT ONLY",
    reality:
      "FACT-CHECK: Vitamin C is NOT a primary hair-growth vitamin. Its only hair-related role is enhancing non-heme iron absorption in the gut—so it helps ONLY if your hair fall is specifically caused by iron deficiency (low ferritin).",
  },
  {
    claim:
      '"Because it is water-soluble, taking 3–4 Limcee tablets a day is completely harmless."',
    verdict: "FALSE — RISK OF STONES & GI UPSET",
    reality:
      "FACT-CHECK: Intestinal Vitamin C transporters saturate around 200–400 mg/day. Mega-dosing (> 1,000–2,000 mg/day) unabsorbed ascorbic acid causes osmotic diarrhea, acid reflux, and increases urinary oxalate excretion—raising calcium oxalate kidney stone risk.",
  },
];

const CLINICAL_USES = [
  {
    number: "01",
    title: "Vitamin C Deficiency & Scurvy Prevention",
    detail:
      "Treats and prevents clinical Vitamin C deficiency (bleeding/spongy gums, poor wound healing, petechiae, fatigue) in people with low fruit/vegetable intake.",
  },
  {
    number: "02",
    title: "Enhancing Oral Iron Absorption (Anemia Adjunct)",
    detail:
      "Converts dietary non-heme ferric iron (Fe3+) into absorbable ferrous iron (Fe2+) in the duodenum—commonly paired with iron therapy.",
  },
  {
    number: "03",
    title: "Wound Healing & Tissue Collagen Synthesis",
    detail:
      "Essential cofactor for prolyl and lysyl hydroxylase enzymes required to cross-link collagen fibers after surgery, burns, or dental extractions.",
  },
  {
    number: "04",
    title: "Antioxidant & Normal Immune Cell Support",
    detail:
      "Protects neutrophils and lymphocytes from oxidative free radicals during acute illness, smoking-induced oxidative stress, or convalescence.",
  },
];

export default function LimceeFactCheckPage() {
  const [activeTab, setActiveTab] = useState<LimceeTab>("overview-label");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-orange-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/multivitamin"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-orange-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Multivitamins &amp; Formulations</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Clinical Monograph &amp;
              Social Media Fact-Check
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Limcee (Vitamin C 500 mg Chewable)
            </h1>

            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                What It Actually Is:{" "}
                <strong className="text-orange-300">Limcee</strong> is a
                buffered, uncoated chewable{" "}
                <strong>500 mg Vitamin C tablet</strong> combining{" "}
                <span className="font-mono text-amber-300">
                  Ascorbic Acid I.P. 100 mg
                </span>{" "}
                +{" "}
                <span className="font-mono text-amber-300">
                  Sodium Ascorbate I.P. 450 mg
                </span>{" "}
                (equivalent to 400 mg Ascorbic Acid).
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-orange-400 font-mono">
                    Standard Dose
                  </strong>
                  <span className="text-slate-400 text-[11px]">
                    1 Tablet (500 mg) Daily &bull; Chew &amp; Rinse Mouth
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-rose-400 font-mono">
                    GI Precaution
                  </strong>
                  <span className="text-slate-400 text-[11px]">
                    Avoid on empty stomach if prone to acidity/gastritis
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-orange-500/30 bg-orange-950/20 backdrop-blur-md">
              <span className="text-[10px] font-mono text-orange-300 uppercase tracking-widest block">
                Total Vitamin C
              </span>
              <span className="text-xl font-bold text-white font-mono">
                500 mg / Tab
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Adult Daily RDA
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                65–90 mg/day
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="w-full overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-1">
          <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("overview-label")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "overview-label"
                  ? "bg-orange-500 text-slate-950 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Pill className="w-4 h-4 shrink-0" />
              <span>1. What Is It &amp; Exact Label Composition</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("factcheck")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "factcheck"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>
                2. /FactCheck: Immunity, Skin Glow, Cold &amp; Hair Fall
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("uses-who")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "uses-who"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              <span>3. Clinical Uses, Who Uses It &amp; Dosing Timing</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("side-effects-overuse")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "side-effects-overuse"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>4. Side Effects, Precautions &amp; Overuse</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: WHAT IS IT & EXACT LABEL COMPOSITION                               */}
        {/* ========================================================================= */}
        {activeTab === "overview-label" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 rounded-2xl border border-orange-500/30 bg-slate-900/40 backdrop-blur-md space-y-3 leading-relaxed">
                <h2 className="text-lg font-bold text-white">
                  What Is Limcee (500 mg)?
                </h2>
                <p className="text-slate-300">
                  <strong>Limcee</strong> is a widely prescribed Indian
                  pharmaceutical chewable tablet containing{" "}
                  <strong>500 mg of Vitamin C (Ascorbic Acid)</strong>. Unlike
                  pure ascorbic acid tablets that can be harsh on the stomach,
                  Limcee blends <strong>20% free Ascorbic Acid (100 mg)</strong>{" "}
                  with{" "}
                  <strong>
                    80% buffered Sodium Ascorbate (450 mg = 400 mg Vitamin C)
                  </strong>{" "}
                  to lower gastric acidity.
                </p>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-[11px] space-y-1 text-slate-300">
                  <strong className="text-orange-300 block">
                    Official Pack Composition:
                  </strong>
                  <div>&bull; Ascorbic Acid I.P.: 100 mg</div>
                  <div>
                    &bull; Sodium Ascorbate I.P.: 450 mg (eq. to Ascorbic Acid
                    400 mg)
                  </div>
                  <div>&bull; Excipients: q.s. | Colour: Sunset Yellow FCF</div>
                  <div>&bull; Dosage: As prescribed by the Physician</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4 leading-relaxed">
                <div className="space-y-3">
                  <h2 className="text-lg font-bold text-white">
                    How to Take Limcee Properly
                  </h2>
                  <ul className="space-y-2 list-disc list-inside text-slate-300">
                    <li>
                      <strong>Standard Adult Dose:</strong> Take{" "}
                      <strong>1 tablet (500 mg) per day</strong>. You can take
                      it at any time of day, preferably{" "}
                      <strong>after a meal</strong>.
                    </li>
                    <li>
                      <strong>GI Issue Precaution:</strong> People with acidity,
                      gastritis, GERD, or peptic ulcers should{" "}
                      <strong>avoid taking it on an empty stomach</strong>.
                    </li>
                    <li>
                      <strong>Protect Tooth Enamel:</strong> Because Limcee is
                      an uncoated chewable acidic tablet,{" "}
                      <strong>
                        rinse your mouth with plain water after chewing
                      </strong>{" "}
                      so ascorbic acid does not erode dental enamel over time.
                    </li>
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[11px] text-amber-200">
                  <strong>Absorption Fact:</strong> The human gut absorbs
                  ~70–90% of Vitamin C up to 200 mg, dropping to &lt; 50% at
                  single doses above 500–1,000 mg—the excess is excreted
                  unchanged in urine.
                </div>
              </div>
            </div>

            {/* Label Breakdown Table */}
            <div className="overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[680px]">
                <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5 text-orange-300">Ingredient</th>
                    <th className="p-3.5 text-amber-300">Label Strength</th>
                    <th className="p-3.5 text-white">
                      Pharmaceutical &amp; Clinical Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {LABEL_BREAKDOWN_ROWS.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="p-3.5 font-bold text-white">
                        {row.ingredient}
                      </td>
                      <td className="p-3.5 font-mono text-amber-300">
                        {row.strength}
                      </td>
                      <td className="p-3.5 text-slate-300 leading-relaxed">
                        {row.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: /FACTCHECK — IMMUNITY, SKIN GLOW, COLD & HAIR FALL                 */}
        {/* ========================================================================= */}
        {activeTab === "factcheck" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/35 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest block mb-1">
                /FactCheck &amp; /Future Clinical Perspective
              </span>
              <h2 className="text-xl font-bold text-white mb-1">
                Social Media Hype vs. Evidence-Based Medicine
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Online reels frequently promote Limcee as a miracle daily pill
                for{" "}
                <strong>
                  &quot;immunity boost, glowing skin, preventing colds, and
                  stopping hair fall.&quot;
                </strong>{" "}
                Here is what clinical pharmacology actually shows:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {FACT_CHECK_CLAIMS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-3 leading-relaxed"
                >
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/15 border border-rose-500/30 text-rose-300 font-bold inline-block">
                      {item.verdict}
                    </span>
                    <div className="flex items-start gap-2 text-rose-200">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <strong className="text-sm">{item.claim}</strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-emerald-200 pt-3 border-t border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.reality}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/50 text-xs text-slate-300 leading-relaxed">
              <strong className="text-teal-300 block mb-1">
                /Future Smart Nutrition Takeaway:
              </strong>
              Whole foods—such as{" "}
              <strong>1 medium guava (~200 mg Vitamin C)</strong>,{" "}
              <strong>1 Indian gooseberry / amla (~250–300 mg)</strong>, or{" "}
              <strong>1 orange/bell pepper (~70–120 mg)</strong>—naturally
              supply your full daily Vitamin C along with polyphenols and fiber
              without synthetic dyes or excess oxalate load. Use Limcee for
              targeted deficiency, iron absorption, or short-term recovery
              rather than permanent blind self-medication.
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: CLINICAL USES & WHO USES IT                                        */}
        {/* ========================================================================= */}
        {activeTab === "uses-who" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {CLINICAL_USES.map((use) => (
                <div
                  key={use.number}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-2 leading-relaxed"
                >
                  <span className="text-lg font-extrabold font-mono text-orange-400 block">
                    {use.number}
                  </span>
                  <h3 className="text-sm font-bold text-white">{use.title}</h3>
                  <p className="text-slate-300">{use.detail}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-3 text-xs leading-relaxed">
              <h3 className="text-lg font-bold text-white">
                Who Typically Uses Limcee?
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside text-slate-300">
                <li>
                  <strong>Patients Taking Iron Supplements:</strong> Prescribed
                  alongside ferrous iron tablets to maximize intestinal iron
                  absorption in iron-deficiency anemia.
                </li>
                <li>
                  <strong>Individuals With Low Fruit/Vegetable Intake:</strong>{" "}
                  People on restricted diets, elderly adults, or smokers
                  (smoking increases daily Vitamin C turnover by ~35 mg/day).
                </li>
                <li>
                  <strong>
                    Post-Surgery, Dental Extraction &amp; Wound Recovery
                    Patients:
                  </strong>{" "}
                  Short-term support for collagen tissue repair and gum healing.
                </li>
                <li>
                  <strong>Convalescing Patients:</strong> Used during recovery
                  from acute infections or fever as recommended by a physician.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: SIDE EFFECTS, WHO SHOULD AVOID & OVERUSE RISKS                     */}
        {/* ========================================================================= */}
        {activeTab === "side-effects-overuse" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/50 space-y-2.5 leading-relaxed">
                <strong className="text-amber-300 text-sm block">
                  1. Common Side Effects
                </strong>
                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                  <li>
                    <strong>Acidity, Heartburn &amp; Nausea:</strong> Especially
                    if chewed on an empty stomach.
                  </li>
                  <li>
                    <strong>Dental Enamel Erosion:</strong> Frequent chewing
                    without rinsing exposes teeth to citric/ascorbic acid.
                  </li>
                  <li>
                    <strong>Abdominal Cramps &amp; Diarrhea:</strong> Unabsorbed
                    Vitamin C pulls water into the colon at higher doses.
                  </li>
                  <li>
                    <strong>Allergic Sensitivity:</strong> Rare reaction to{" "}
                    <strong>Sunset Yellow FCF</strong> coloring agent.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/50 space-y-2.5 leading-relaxed">
                <strong className="text-rose-300 text-sm block">
                  2. Who Should Use Caution or Avoid?
                </strong>
                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                  <li>
                    <strong>
                      History of Calcium Oxalate Kidney Stones or CKD:
                    </strong>{" "}
                    Vitamin C metabolizes into oxalate, raising stone recurrence
                    risk.
                  </li>
                  <li>
                    <strong>G6PD Deficiency:</strong> High-dose intravenous or
                    excessive Vitamin C can trigger hemolytic anemia in
                    G6PD-deficient individuals.
                  </li>
                  <li>
                    <strong>Hemochromatosis (Iron Overload):</strong> Vitamin C
                    increases gut iron absorption and worsens tissue iron
                    accumulation.
                  </li>
                  <li>
                    <strong>Strict Low-Sodium Diets:</strong> Each tablet
                    contains 450 mg Sodium Ascorbate (~50 mg sodium).
                  </li>
                  <li>
                    <strong>GERD / Active Peptic Ulcer:</strong> Avoid
                    empty-stomach dosing.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-purple-500/30 bg-slate-900/50 space-y-2.5 leading-relaxed">
                <strong className="text-purple-300 text-sm block">
                  3. What Happens If You Overuse It? (&gt; 2,000 mg/day)
                </strong>
                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                  <li>
                    <strong>Hyperoxaluria &amp; Kidney Stones:</strong> Excess
                    Vitamin C is converted to urinary oxalate, crystallizing
                    into painful kidney stones.
                  </li>
                  <li>
                    <strong>Osmotic Diarrhea &amp; Gastritis:</strong> Taking
                    3–4+ tablets daily overwhelms gut absorption, causing watery
                    diarrhea and epigastric pain.
                  </li>
                  <li>
                    <strong>False Lab Test Readings:</strong> High Vitamin C
                    levels can interfere with urine glucose dipsticks and stool
                    occult blood tests.
                  </li>
                </ul>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/70 space-y-2 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <Info className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Important Medical &amp; Educational Note</span>
              </div>
              <p>
                Always consult your physician or dermatologist before starting
                any supplement—especially if you have underlying kidney,
                gastric, or metabolic conditions, are pregnant or breastfeeding,
                or take regular medications. This clinical reference monograph
                is provided strictly for educational and informational purposes
                and is not a substitute for professional medical diagnosis or
                treatment.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
