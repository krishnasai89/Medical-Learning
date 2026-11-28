"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Copy,
  CheckCircle2,
  Syringe,
  Activity,
  Layers,
  AlertCircle,
  Gauge,
  Droplets,
  HeartPulse,
} from "lucide-react";

const IV_CANNULA_DATA = [
  {
    gauge: "14G",
    colorName: "Orange",
    colorHex: "#f97316",
    flowRate: "~240 – 290 mL/min",
    flowRateNum: 290,
    outerDiameter: "2.1 mm",
    length: "45 mm",
    category: "Resuscitation / Trauma",
    uses: "Major trauma, rapid fluid resuscitation, massive blood transfusions, emergency shock therapy.",
    clinicalNote:
      "Highest flow rate peripheral catheter. Requires large, stable peripheral veins (e.g., antecubital fossa).",
    ayurvedicParallel: "Tikshna Shastra Siravyadha (तीक्ष्ण शस्त्र सिराव्यध)",
  },
  {
    gauge: "16G",
    colorName: "Grey",
    colorHex: "#64748b",
    flowRate: "~176 – 180 mL/min",
    flowRateNum: 180,
    outerDiameter: "1.8 mm",
    length: "45 mm",
    category: "Resuscitation / Trauma",
    uses: "Surgical suites, intensive care units (ICU), rapid blood & colloid replacement, obstetric emergencies.",
    clinicalNote:
      "Standard emergency trauma line for patients unable to accommodate 14G.",
    ayurvedicParallel: "Siravyadha Madhyama Pramana",
  },
  {
    gauge: "18G",
    colorName: "Green",
    colorHex: "#22c55e",
    flowRate: "~76 – 90 mL/min",
    flowRateNum: 90,
    outerDiameter: "1.3 mm",
    length: "32 – 45 mm",
    category: "Standard Adult / Infusion",
    uses: "Packed red blood cell (PRBC) transfusions, parenteral nutrition, pre-op surgical admissions, CT contrast protocols.",
    clinicalNote:
      "Minimum recommended gauge for blood products to prevent hemolysis under pressure infusion.",
    ayurvedicParallel: "Rakta Dhatu Vardhana Marga",
  },
  {
    gauge: "20G",
    colorName: "Pink",
    colorHex: "#ec4899",
    flowRate: "~54 – 60 mL/min",
    flowRateNum: 60,
    outerDiameter: "1.1 mm",
    length: "32 mm",
    category: "Standard Adult / Infusion",
    uses: "General IV medications, elective surgery, routine IV fluid hydration, emergency analgesics, routine blood sampling.",
    clinicalNote:
      "The most versatile and universally deployed gauge in medical and surgical wards.",
    ayurvedicParallel: "Sadharana Aushadha Marga",
  },
  {
    gauge: "22G",
    colorName: "Blue",
    colorHex: "#3b82f6",
    flowRate: "~31 – 35 mL/min",
    flowRateNum: 35,
    outerDiameter: "0.9 mm",
    length: "25 mm",
    category: "Fragile Veins / Geriatric",
    uses: "Elderly patients, pediatric patients, small or sclerosed veins, low-volume continuous maintenance infusions.",
    clinicalNote:
      "Low risk of vessel phlebitis in delicate tissue beds; not suitable for rapid bolus fluid challenges.",
    ayurvedicParallel: "Sookshma Srotas Anusari",
  },
  {
    gauge: "24G",
    colorName: "Yellow",
    colorHex: "#eab308",
    flowRate: "~14 – 20 mL/min",
    flowRateNum: 20,
    outerDiameter: "0.7 mm",
    length: "19 mm",
    category: "Pediatric / Neonatal",
    uses: "Neonates, infants, small pediatric patients, severely fragile or tortuous veins.",
    clinicalNote:
      "Gentle vessel insertion profile. Fragile stylet; avoid forceful advancement if resistance is met.",
    ayurvedicParallel: "Bala Roga Srotas",
  },
  {
    gauge: "26G",
    colorName: "Violet / Purple",
    colorHex: "#a855f7",
    flowRate: "~13 mL/min",
    flowRateNum: 13,
    outerDiameter: "0.6 mm",
    length: "19 mm",
    category: "Pediatric / Neonatal",
    uses: "Neonatal Intensive Care Units (NICU), premature infants, ultra-fragile micro-capillary access.",
    clinicalNote:
      "Extremely narrow lumen. High thrombotic risk; require continuous micro-infusion to maintain patency.",
    ayurvedicParallel: "Ati-Sookshma Siravedhana",
  },
];

const SCALP_VEIN_DATA = [
  {
    gauge: "18G",
    colorName: "Green",
    colorHex: "#22c55e",
    outerDiameter: "1.20 mm",
    uses: "Rapid fluid infusion, urgent blood transfusions, emergency fluid draw.",
    category: "Rapid Infusion",
    clinicalNote:
      "Rigid stainless needle tip; immobilization required to prevent vein wall perforation.",
  },
  {
    gauge: "20G",
    colorName: "Yellow",
    colorHex: "#eab308",
    outerDiameter: "0.90 mm",
    uses: "General IV infusions, therapeutic medication delivery, and blood sampling.",
    category: "General Infusion",
    clinicalNote:
      "Ideal for single-session drug administration or outpatient short infusions.",
  },
  {
    gauge: "21G",
    colorName: "Green (Light)",
    colorHex: "#10b981",
    outerDiameter: "0.80 mm",
    uses: "Standard diagnostic venipuncture, routine blood sampling, general adult infusion.",
    category: "Diagnostic / Blood Draw",
    clinicalNote:
      "Optimal balance between patient comfort and low hemolysis rates during vacuum-draw collection.",
  },
  {
    gauge: "22G",
    colorName: "Black",
    colorHex: "#475569",
    outerDiameter: "0.70 mm",
    uses: "Adults with small, fragile, or roll-prone veins, mild dehydration hydration lines.",
    category: "Fragile Veins",
    clinicalNote: "Flexible wings allow shallow-angle skin stabilization.",
  },
  {
    gauge: "23G",
    colorName: "Deep Blue",
    colorHex: "#2563eb",
    outerDiameter: "0.60 mm",
    uses: "Pediatric venipuncture, geriatric hand vein blood sampling.",
    category: "Pediatric / Geriatric",
    clinicalNote:
      "Extensively used for butterfly phlebotomy in hand and wrist dorsal arches.",
  },
  {
    gauge: "25G",
    colorName: "Orange",
    colorHex: "#f97316",
    outerDiameter: "0.50 mm",
    uses: "Neonatal blood sampling, scalp vein infusion in infants, ultra-delicate pediatric vessels.",
    category: "Pediatric / Geriatric",
    clinicalNote:
      "Smallest butterfly bore. Pull plunger gently to prevent specimen hemolysis.",
  },
];

export default function CannulaPage() {
  const [activeTab, setActiveTab] = useState("cannula"); // "cannula" | "scalp"
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedGauge, setCopiedGauge] = useState(null);

  const activeDataset =
    activeTab === "cannula" ? IV_CANNULA_DATA : SCALP_VEIN_DATA;

  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return activeDataset;
    return activeDataset.filter(
      (item) =>
        item.gauge.toLowerCase().includes(q) ||
        item.colorName.toLowerCase().includes(q) ||
        item.uses.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.flowRate && item.flowRate.toLowerCase().includes(q)),
    );
  }, [searchQuery, activeDataset]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedGauge(text);
    setTimeout(() => setCopiedGauge(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Overview</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-3">
              <Syringe className="w-3.5 h-3.5" /> Clinical Inventory &bull; Item
              #01
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Cannula & Winged Infusion Codex
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Standardized ISO color codings, outer lumen diameters, dynamic
              flow rates, and vascular access protocols for emergency trauma,
              surgery, and neonatal care.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Scale
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                14G – 26G
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Max Resuscitation
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                290 mL/min
              </span>
            </div>
          </div>
        </div>

        {/* Tab Switcher: Cannula vs Butterfly */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="inline-flex p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md">
            <button
              onClick={() => {
                setActiveTab("cannula");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "cannula"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Syringe className="w-4 h-4" />
              <span>IV Cannula (Over-the-Needle)</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("scalp");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "scalp"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>Scalp Vein / Butterfly Set</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gauge (14G, 20G), color, or use..."
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 hover:text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Quick Triage Bar for Cannulas */}
        {activeTab === "cannula" && (
          <div className="mt-6 p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-3">
              <Gauge className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Clinical Gauge Rapid Selection Guide
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {IV_CANNULA_DATA.map((item) => (
                <div
                  key={item.gauge}
                  className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-950/60 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white">
                      {item.gauge}
                    </span>
                    <span
                      className="w-3 h-3 rounded-full shadow-sm"
                      style={{ backgroundColor: item.colorHex }}
                      title={item.colorName}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 font-mono">
                    {item.flowRate.split(" ")[0]} mL/m
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Grid View */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredData.map((item, index) => (
            <div
              key={`${item.gauge}-${index}`}
              className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700/80 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                {/* Header: Gauge, Color Chip, Copy */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl font-bold font-mono text-white">
                        {item.gauge}
                      </span>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-slate-700 bg-slate-800/80">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.colorHex }}
                        />
                        <span className="text-[11px] font-semibold text-slate-200">
                          {item.colorName}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-teal-400/90 uppercase tracking-wider block mt-1">
                      {item.category}
                    </span>
                  </div>

                  <button
                    onClick={() => copyToClipboard(item.gauge)}
                    title={`Copy ${item.gauge}`}
                    className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-teal-300 hover:bg-slate-800/80 transition-colors shrink-0"
                  >
                    {copiedGauge === item.gauge ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Flow Rate & Dimension Specification Banner */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/70 my-3 font-mono text-xs space-y-1.5">
                  {item.flowRate && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Droplets className="w-3.5 h-3.5 text-teal-400" /> Flow
                        Rate:
                      </span>
                      <span className="font-bold text-amber-300">
                        {item.flowRate}
                      </span>
                    </div>
                  )}
                  {item.outerDiameter && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-slate-400" /> Outer
                        Dia:
                      </span>
                      <span className="text-slate-200">
                        {item.outerDiameter}
                      </span>
                    </div>
                  )}
                  {item.length && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Catheter Length:</span>
                      <span className="text-slate-200">{item.length}</span>
                    </div>
                  )}
                </div>

                {/* Common Applications */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mb-1">
                    Primary Indications:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.uses}
                  </p>
                </div>

                {/* Ayurvedic Correlate */}
                {item.ayurvedicParallel && (
                  <div className="mb-3 text-[11px] text-amber-300/90 flex items-center gap-1.5">
                    <span className="font-mono text-[10px] text-amber-500/80 uppercase">
                      Vedic:
                    </span>
                    <span>{item.ayurvedicParallel}</span>
                  </div>
                )}
              </div>

              {/* Bottom Clinical Insight */}
              <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <AlertCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item.clinicalNote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl mt-6">
            <Syringe className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-300 mb-1">
              No matching needles or cannulas found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Try searching for specific gauge numbers like "18G", "20G", or
              keywords like "blood", "trauma", or "pediatric".
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-4 py-1.5 rounded-lg bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-colors"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
