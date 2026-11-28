"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Scale,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  Activity,
  Users,
  Clock,
  Layers,
  Info,
} from "lucide-react";

type ComparisonSubTab = "label-table" | "factcheck" | "safety-overuse";

interface NutrientComparisonRow {
  nutrient: string;
  regularThreptin: string;
  threptinLite: string;
  clinicalTakeaway: string;
}

const CORE_INGREDIENTS_BREAKDOWN = [
  {
    ingredient: "Micellar Casein & Milk Solids (30 g / 100 g)",
    role: "Slow-digesting milk protein providing sustained amino acid release over several hours.",
  },
  {
    ingredient:
      "Precooked Rice Flour, Bengal Gram & Malt Extract (~48 g Carbs)",
    role: "Baked biscuit structural matrix and rapid energy source (23 g added sucrose in Regular Threptin; 0 g sucrose in Lite).",
  },
  {
    ingredient:
      "Edible Vegetable Fat / Oil (14 g Total Fat; 7 g Saturated Fat)",
    role: "Provides crisp diskette texture and dense caloric energy (9 kcal/g), with 0 g trans fat and 0 mg cholesterol.",
  },
  {
    ingredient: "B-Complex & Antioxidant Vitamins",
    role: "Regular Threptin includes B1, B2, B3 for carbohydrate metabolism; Threptin Lite upgrades to Vitamins A, C, E, B6, Folic Acid, B12, Chromium, and Potassium.",
  },
  {
    ingredient: "Sweeteners & Prebiotic Fibre (Threptin Lite Only)",
    role: "Replaces table sugar with Mannitol polyol (INS 421) + Stevia (INS 960), plus 3.0 g Dietary Fibre, 1.2 g Fructo-oligosaccharides (FOS), and 1.14 g L-Arginine.",
  },
];

const WHY_IT_IS_USED = [
  {
    number: "01",
    title: "Between-Meal Calorie & Protein Bridge",
    detail:
      "Taken mid-morning (11 AM) and evening (4 PM) to prevent hunger dips and supply ~4.5 g protein + ~65 kcal per 3 diskettes without spoiling main meal appetite.",
  },
  {
    number: "02",
    title: "Convalescence & Post-Illness Recovery",
    detail:
      "Helps patients recovering from infections, tuberculosis, fever, or surgery regain lost body weight when solid meal portions are small.",
  },
  {
    number: "03",
    title: "Elderly / Geriatric Nutritional Support",
    detail:
      "Easy-to-chew diskettes for older adults with poor dentition or reduced appetite who struggle to meet daily protein and energy needs.",
  },
  {
    number: "04",
    title: "Pregnancy, Lactation & Vegetarian Gaps",
    detail:
      "Supplements cereal-heavy vegetarian diets lacking complete essential amino acids (while Threptin Lite serves individuals restricting sucrose).",
  },
];

const NUTRITION_LABEL_ROWS: NutrientComparisonRow[] = [
  {
    nutrient: "Energy Value (per 100 g)",
    regularThreptin: "438.00 kcal (1834.00 kJ)",
    threptinLite: "418.00 kcal (1754.00 kJ)",
    clinicalTakeaway:
      "Calorie-dense like a standard bakery biscuit (~420–438 kcal/100g)—NOT a low-calorie weight-loss snack.",
  },
  {
    nutrient: "Protein (Mainly Casein)",
    regularThreptin: "30.00 g",
    threptinLite: "30.00 g (+ L-Arginine 1.14 g)",
    clinicalTakeaway:
      "30% protein by weight (~4.5 g protein per 3 diskettes / 15 g)—higher than ordinary biscuits (~6–8 g), but much lower than whey/casein powder (~75–85 g).",
  },
  {
    nutrient: "Total Carbohydrate",
    regularThreptin: "48.00 g",
    threptinLite: "~48.00 g (Flour + Polyol/Mannitol base)",
    clinicalTakeaway:
      "Carbohydrates remain the largest macronutrient (~48%) in BOTH variants.",
  },
  {
    nutrient: "Sugar (Sucrose)",
    regularThreptin: "23.00 g (nearly 6 tsp sugar / 100 g)",
    threptinLite: "0.00 g (Mannitol INS 421 + Stevia INS 960)",
    clinicalTakeaway:
      "Regular Threptin is nearly 1/4th table sugar; Threptin Lite eliminates sucrose completely.",
  },
  {
    nutrient: "Total Fat",
    regularThreptin: "14.00 g",
    threptinLite: "14.00 g",
    clinicalTakeaway: "Identical 14% fat content across both formulations.",
  },
  {
    nutrient: "Fat Breakdown (Sat / MUFA / PUFA)",
    regularThreptin: "Saturated: 7.00 g | MUFA: 5.88 g | PUFA: 1.12 g",
    threptinLite: "Saturated: 7.00 g | MUFA: 5.88 g | PUFA: 1.12 g",
    clinicalTakeaway:
      "Half of the fat (7.00 g/100g) is saturated fat—exceeding the > 5 g/100g high-saturated-fat threshold.",
  },
  {
    nutrient: "Cholesterol & Trans Fatty Acids",
    regularThreptin: "Cholesterol: 0 g | Trans Fat: 0 g",
    threptinLite: "Cholesterol: 0 g | Trans Fat: 0 g",
    clinicalTakeaway:
      "Free from trans fats and dietary cholesterol in both variants.",
  },
  {
    nutrient: "Dietary Fibre & Prebiotic FOS",
    regularThreptin: "Not fortified (trace only)",
    threptinLite: "Dietary Fibre: 3.00 g | FOS: 1.20 g",
    clinicalTakeaway:
      "Threptin Lite adds prebiotic fructo-oligosaccharides (FOS) and wheat fibre to slow glucose absorption.",
  },
  {
    nutrient: "B-Vitamins (B1, B2, B3, B6, B9, B12)",
    regularThreptin:
      "Thiamine (B1): 1.06 mg | Riboflavin (B2): 1.26 mg | Nicotinamide (B3): 14.00 mg",
    threptinLite:
      "Vitamin B6: 1.50 mg | Folic Acid (B9): 200.00 mcg | Vitamin B12: 1.00 mcg",
    clinicalTakeaway:
      "Regular Threptin has basic B1/B2/B3; Lite shifts to neuro-metabolic B6, Folate, and B12 (note: 418 kcal on the label is Energy Value, not B12).",
  },
  {
    nutrient: "Antioxidant Vitamins (A, C, E)",
    regularThreptin: "None added (0 mg)",
    threptinLite:
      "Vitamin C: 45.00 mg | Vitamin E: 11.00 mg | Vitamin A: 400.00 mcg",
    clinicalTakeaway:
      "Threptin Lite adds full antioxidant vitamin protection (A, C, E) absent from Regular Threptin.",
  },
  {
    nutrient: "Minerals (Potassium & Chromium)",
    regularThreptin: "None fortified on label",
    threptinLite: "Potassium: 350.00 mg | Chromium: 35.00 mcg",
    clinicalTakeaway:
      "Chromium supports insulin sensitivity in Threptin Lite; Potassium (350 mg/100g) requires caution in advanced kidney disease.",
  },
];

const FACT_CHECK_MYTHS = [
  {
    myth: '"Threptin is a pure, lean protein supplement like whey protein."',
    reality:
      "FACT-CHECK: Per 100 g, Threptin is 48 g Carbohydrates (including 23 g pure sugar in Regular Threptin) + 14 g Fat (7 g saturated fat) + 30 g Protein. Only ~27% of its calories come from protein—the remaining ~73% come from carbs, sugar, and fat.",
  },
  {
    myth: '"Eating 3 diskettes gives a huge daily dose of protein."',
    reality:
      "FACT-CHECK: Each diskette weighs ~5 g. Three diskettes (15 g) deliver only ~4.5 g of protein alongside ~66 kcal and ~3.5 g of sugar (less protein than a single boiled egg, which has 6 g protein and 0 g sugar).",
  },
  {
    myth: '"Regular Threptin is a healthy everyday snack for diabetics and weight loss."',
    reality:
      "FACT-CHECK: Regular Threptin contains 23 g sucrose (nearly 6 teaspoons of sugar per 100 g) and 438 kcal/100 g. It is a high-calorie, high-sugar convalescence biscuit—NOT a diabetic or weight-loss food.",
  },
  {
    myth: '"Threptin Lite (Sugar-Free) has zero carbs and unlimited safety."',
    reality:
      "FACT-CHECK: Threptin Lite has 0 g sucrose, but still contains ~48 g total carbohydrates (from flour + mannitol polyol) and 418 kcal/100 g. Overeating polyols (INS 421) and FOS triggers bloating, gas, and osmotic diarrhea.",
  },
];

export default function ThreptinComparisonPage() {
  const [activeTab, setActiveTab] = useState<ComparisonSubTab>("label-table");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-amber-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/multivitamin"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Multivitamins &amp; Formulations</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Clinical Nutrition Monograph
              &amp; Label Audit
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Threptin vs. Threptin Lite
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Complete breakdown of what Threptin diskettes actually are, what
              ingredients are used inside them, why clinicians prescribe them,
              and a head-to-head nutrition label comparison between{" "}
              <strong className="text-amber-300">Regular Threptin</strong> and{" "}
              <strong className="text-teal-300">
                Threptin Lite (Sugar-Free)
              </strong>
              .
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-950/20 backdrop-blur-md">
              <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest block">
                Regular Threptin
              </span>
              <span className="text-lg font-bold text-white font-mono">
                438 kcal &bull; 23g Sugar
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-teal-500/30 bg-teal-950/20 backdrop-blur-md">
              <span className="text-[10px] font-mono text-teal-300 uppercase tracking-widest block">
                Threptin Lite
              </span>
              <span className="text-lg font-bold text-white font-mono">
                418 kcal &bull; 0g Sucrose
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 1: WHAT IS IT, WHAT IS USED IN IT & WHY IS IT USED                   */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          {/* What Is It + What Is Used In It */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 5 cols: What Is It? */}
            <div className="lg:col-span-5 p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-400">
                  <Layers className="w-5 h-5" />
                  <h2 className="text-xl font-bold text-white">
                    1. What Is Threptin?
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong>Threptin</strong> is a baked, high-calorie nutritional
                  supplement diskette (biscuit) formulated with{" "}
                  <strong>30% milk casein protein</strong>, carbohydrates,
                  vegetable fats, and fortified vitamins.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  While commonly perceived by consumers as a &quot;lean protein
                  biscuit,&quot; it is actually a{" "}
                  <strong className="text-amber-300">
                    calorie-dense protein-energy supplement (418–438 kcal per
                    100 g)
                  </strong>{" "}
                  where carbohydrates (~48%) and fats (14%) supply ~73% of total
                  calories and casein protein supplies ~27%.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                <strong className="text-teal-300 block">
                  Serving Weight Math:
                </strong>
                <span className="text-slate-300">
                  1 Diskette &asymp; <strong>5 g</strong> &bull; Standard
                  Serving (3 Diskettes = 15 g) provides{" "}
                  <strong className="text-white">4.5 g Protein</strong> +{" "}
                  <strong className="text-amber-300">63–66 kcal</strong>.
                </span>
              </div>
            </div>

            {/* Right 7 cols: What Is Used in It? (Ingredients) */}
            <div className="lg:col-span-7 p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <Info className="w-5 h-5" />
                <h2 className="text-xl font-bold text-white">
                  2. What Is Used in It? (Core Ingredients &amp; Actives)
                </h2>
              </div>

              <div className="space-y-2.5 text-xs">
                {CORE_INGREDIENTS_BREAKDOWN.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/75 border border-slate-800/90 leading-relaxed"
                  >
                    <strong className="text-cyan-300 block">
                      {item.ingredient}
                    </strong>
                    <span className="text-slate-300">{item.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Is It Used? (4 Clinical & Nutritional Indications) */}
          <div className="space-y-3">
            <div>
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
                Clinical &amp; Nutritional Purpose
              </span>
              <h2 className="text-xl font-bold text-white">
                3. Why Is Threptin Used?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {WHY_IT_IS_USED.map((reason) => (
                <div
                  key={reason.number}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-2 leading-relaxed"
                >
                  <span className="text-lg font-extrabold font-mono text-teal-400 block">
                    {reason.number}
                  </span>
                  <h3 className="text-sm font-bold text-white">
                    {reason.title}
                  </h3>
                  <p className="text-slate-300">{reason.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PART 2: THREPTIN VS. THREPTIN LITE (HEAD-TO-HEAD COMPARISON)              */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Side-by-Side Formulation Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                4. Threptin vs. Threptin Lite (Sugar-Free)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Both contain <strong>30 g Casein Protein</strong> and{" "}
                <strong>14 g Fat (7 g Saturated Fat)</strong> per 100 g—the
                critical differences lie in{" "}
                <strong>
                  sucrose sugar, sweeteners, fibre, and micronutrient
                  fortification
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Quick Side-by-Side Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-6 rounded-2xl border border-amber-500/35 bg-gradient-to-br from-amber-950/25 via-slate-900/70 to-slate-900/40 space-y-2.5 leading-relaxed">
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                Standard Variant &bull; High Sugar
              </span>
              <h3 className="text-lg font-bold text-white">
                Threptin Diskettes (Regular)
              </h3>
              <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                <li>
                  <strong>Energy:</strong> 438.00 kcal (1834.00 kJ) per 100 g
                </li>
                <li>
                  <strong>Protein &amp; Fat:</strong> 30.00 g Casein Protein |
                  14.00 g Fat (7.00 g Saturated)
                </li>
                <li>
                  <strong>Carbs &amp; Sugar:</strong> 48.00 g Carbs including{" "}
                  <strong className="text-rose-300">
                    23.00 g Sucrose (table sugar)
                  </strong>
                </li>
                <li>
                  <strong>Vitamins:</strong> Basic B1 (1.06 mg), B2 (1.26 mg),
                  B3 (14.00 mg) only
                </li>
                <li>
                  <strong>Best Suited For:</strong> Underweight, convalescing,
                  or elderly patients needing extra calories + protein without
                  diabetes.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-teal-500/35 bg-gradient-to-br from-teal-950/25 via-slate-900/70 to-slate-900/40 space-y-2.5 leading-relaxed">
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-teal-500/15 border border-teal-500/30 text-teal-300 font-bold">
                Sugar-Free Variant &bull; Fortified Antioxidants + Fibre
              </span>
              <h3 className="text-lg font-bold text-white">
                Threptin Lite Diskettes (Sugar-Free)
              </h3>
              <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                <li>
                  <strong>Energy:</strong> 418.00 kcal (1754.00 kJ) per 100 g
                </li>
                <li>
                  <strong>Protein &amp; Fat:</strong> 30.00 g Casein (+ 1.14 g
                  L-Arginine) | 14.00 g Fat (7.00 g Saturated)
                </li>
                <li>
                  <strong>Carbs &amp; Sweetener:</strong>{" "}
                  <strong className="text-emerald-300">0.00 g Sucrose</strong>{" "}
                  (sweetened with Mannitol polyol + Stevia) +{" "}
                  <strong>3.00 g Fibre &amp; 1.20 g FOS</strong>
                </li>
                <li>
                  <strong>Vitamins &amp; Minerals:</strong> Vitamins A, C, E,
                  B6, Folic Acid, B12 (1.00 mcg), Potassium (350 mg) &amp;
                  Chromium (35 mcg)
                </li>
                <li>
                  <strong>Best Suited For:</strong> Individuals avoiding
                  sucrose/table sugar (including controlled diabetics within
                  carb limits).
                </li>
              </ul>
            </div>
          </div>

          {/* Sub-Tabs for Full Label Table, FactCheck & Safety */}
          <div className="inline-flex flex-wrap p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("label-table")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "label-table"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>Full Per-100g Nutrition Label Table</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("factcheck")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "factcheck"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Marketing Myth vs. Label Fact-Check</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("safety-overuse")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "safety-overuse"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Side Effects, Who Should Avoid &amp; Overuse</span>
            </button>
          </div>

          {/* SUB-TAB 1: FULL PER-100G NUTRITION LABEL TABLE */}
          {activeTab === "label-table" && (
            <div className="overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-2xl border border-slate-800 bg-slate-900/30 animate-in fade-in duration-200">
              <table className="w-full overflow-hidden text-xs text-left text-slate-300 min-w-[780px]">
                <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5 text-white">Nutrient (per 100 g)</th>
                    <th className="p-3.5 text-amber-300">Threptin (Regular)</th>
                    <th className="p-3.5 text-teal-300">
                      Threptin Lite (Sugar-Free)
                    </th>
                    <th className="p-3.5 text-cyan-300">Clinical Takeaway</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {NUTRITION_LABEL_ROWS.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="p-3.5 font-bold text-white">
                        {row.nutrient}
                      </td>
                      <td className="p-3.5 font-mono text-amber-200">
                        {row.regularThreptin}
                      </td>
                      <td className="p-3.5 font-mono text-teal-200">
                        {row.threptinLite}
                      </td>
                      <td className="p-3.5 text-slate-300 leading-relaxed">
                        {row.clinicalTakeaway}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* SUB-TAB 2: FACT-CHECK */}
          {activeTab === "factcheck" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs animate-in fade-in duration-200">
              {FACT_CHECK_MYTHS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3 leading-relaxed"
                >
                  <div className="flex items-start gap-2 text-rose-300">
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <strong className="text-sm">{item.myth}</strong>
                  </div>
                  <div className="flex items-start gap-2 text-emerald-200 pt-2 border-t border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.reality}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SUB-TAB 3: SIDE EFFECTS, WHO SHOULD AVOID & OVERUSE */}
          {activeTab === "safety-overuse" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
                <div className="p-5 rounded-2xl border border-amber-500/30 bg-slate-900/50 space-y-2.5 leading-relaxed">
                  <strong className="text-amber-300 text-sm block">
                    1. Important Side Effects
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                    <li>
                      <strong>
                        Bloating, Gas &amp; Loose Stools (Threptin Lite):
                      </strong>{" "}
                      Mannitol polyol (INS 421) and FOS prebiotic fibre cause
                      osmotic loose stools if overconsumed.
                    </li>
                    <li>
                      <strong>Constipation (Regular Threptin):</strong>{" "}
                      Slow-digesting casein with minimal fibre can slow bowel
                      transit if hydration is inadequate.
                    </li>
                    <li>
                      <strong>Blood Sugar Spike (Regular Threptin):</strong> 23
                      g sucrose + refined rice flour rapidly elevates blood
                      glucose.
                    </li>
                    <li>
                      <strong>Allergens:</strong> Milk protein (casein/whey),
                      soy lecithin, and wheat fibre (Lite).
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border border-rose-500/30 bg-slate-900/50 space-y-2.5 leading-relaxed">
                  <strong className="text-rose-300 text-sm block">
                    2. Who Should Avoid or Use Caution?
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                    <li>
                      <strong>Diabetes Mellitus:</strong> Strictly{" "}
                      <strong>AVOID Regular Threptin</strong> (23% sucrose).
                      Count Threptin Lite (~48 g carbs/100g) within daily carb
                      limits.
                    </li>
                    <li>
                      <strong>
                        Milk Protein Allergy / Severe Lactose Intolerance:
                      </strong>{" "}
                      Contraindicated due to milk casein/whey.
                    </li>
                    <li>
                      <strong>Chronic Kidney Disease (Non-Dialysis):</strong>{" "}
                      Requires protein restriction and potassium caution
                      (Threptin Lite has 350 mg Potassium/100g).
                    </li>
                    <li>
                      <strong>
                        Obesity, Fatty Liver &amp; High Triglycerides:
                      </strong>{" "}
                      High calorie density (418–438 kcal) + 7 g saturated fat
                      worsen metabolic load.
                    </li>
                    <li>
                      <strong>IBS:</strong> Polyols (mannitol) and FOS in
                      Threptin Lite are high-FODMAP triggers.
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border border-purple-500/30 bg-slate-900/50 space-y-2.5 leading-relaxed">
                  <strong className="text-purple-300 text-sm block">
                    3. Risks of Overuse
                  </strong>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                    <li>
                      <strong>Unintended Weight Gain:</strong> Eating 100 g (~20
                      diskettes) adds 418–438 extra calories on top of meals.
                    </li>
                    <li>
                      <strong>Worsened Insulin Resistance &amp; Lipids:</strong>{" "}
                      Excess sucrose (23 g) and saturated fat (7 g) raise
                      triglycerides and LDL cholesterol.
                    </li>
                    <li>
                      <strong>Polyol Diarrhea:</strong> Exceeding daily
                      mannitol/FOS tolerance in Threptin Lite causes abdominal
                      cramps and osmotic diarrhea.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Recommended Label Portion:</strong> 3 to 5 diskettes
                  (15–25 g = ~65–110 kcal and ~4.5–7.5 g protein) mid-morning
                  and evening—not as a meal replacement or unlimited snack.
                </span>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
