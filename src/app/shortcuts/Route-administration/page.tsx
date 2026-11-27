"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Syringe,
  Search,
  Copy,
  CheckCircle2,
  Compass,
  AlertCircle,
  Activity,
  Layers,
} from "lucide-react";

interface InjectionRouteItem {
  abbr: string;
  fullName: string;
  angle: string;
  targetTissue: string;
  needleSpecs: string;
  maxVolume: string;
  commonSites: string[];
  ayurvedicParallel?: string;
  clinicalNote: string;
}

const INJECTION_DATA: InjectionRouteItem[] = [
  {
    abbr: "IM",
    fullName: "Intramuscular",
    angle: "90°",
    targetTissue: "Deep Muscular Vascular Bed",
    needleSpecs: '20G – 23G | 1" to 1.5"',
    maxVolume: "Deltoid: ≤ 1 mL | Ventrogluteal: ≤ 3–4 mL",
    commonSites: ["Deltoid muscle", "Ventrogluteal", "Vastus lateralis"],
    ayurvedicParallel: "Mamsa Dhatu Vedhana (मांस धातु)",
    clinicalNote:
      "Rapid systemic vascular uptake due to rich capillary perfusion. Use the Z-track technique to prevent medication leakage into subcutaneous tissue.",
  },
  {
    abbr: "SC / Sub-Q",
    fullName: "Subcutaneous",
    angle: "45° (or 90° with short needle)",
    targetTissue: "Adipose / Subcutaneous Tissue",
    needleSpecs: '25G – 31G | 3/8" to 5/8"',
    maxVolume: "≤ 1.5 mL",
    commonSites: [
      "Abdomen (2 inches from umbilicus)",
      "Outer posterior arm",
      "Anterior thigh",
    ],
    ayurvedicParallel: "Medas Dhatu Shoshana (मेदस् धातु)",
    clinicalNote:
      "Slow, sustained, and predictable absorption. Essential route for insulin and low-molecular-weight heparin (LMWH). Do not aspirate or massage post-injection.",
  },
  {
    abbr: "IV",
    fullName: "Intravenous",
    angle: "15° – 30° (insertion angle)",
    targetTissue: "Superficial Venous Lumen",
    needleSpecs: "14G – 24G Peripheral Cannula / Catheter",
    maxVolume: "Infusion bolus to continuous liters",
    commonSites: [
      "Median cubital vein",
      "Cephalic vein",
      "Basilic vein",
      "Dorsal venous arch",
    ],
    ayurvedicParallel: "Siravyadha (सिराव्यध - Classical Venipuncture)",
    clinicalNote:
      "100% immediate systemic bioavailability. Carries highest risk of anaphylaxis, extravasation, phlebitis, or volumetric fluid overload.",
  },
  {
    abbr: "ID",
    fullName: "Intradermal",
    angle: "10° – 15°",
    targetTissue: "Dermis (directly beneath epidermis)",
    needleSpecs: '26G – 27G | 3/8" to 1/2"',
    maxVolume: "≤ 0.1 mL (creates distinct bleb/wheal)",
    commonSites: [
      "Volar aspect of forearm",
      "Upper dorsal aspect below scapula",
    ],
    ayurvedicParallel: "Twak Avacharana (त्वचा - Avabhasini layer)",
    clinicalNote:
      "Lowest rate of vascular absorption; ideal for diagnostic antigen testing (Mantoux tuberculin PPD, allergy scratch panels) and BCG vaccination.",
  },
  {
    abbr: "SL",
    fullName: "Sublingual",
    angle: "Under the Tongure (0° Mucosal Placement)",
    targetTissue: "Ventral Sublingual Capillary Bed",
    needleSpecs: "Non-invasive (Liquid / Oro-dispersible tablet)",
    maxVolume: "1–2 sublingual drops / micro-tablets",
    commonSites: ["Sublingual mucosa beneath frenulum of the tongue"],
    ayurvedicParallel: "Jihva Lepa / Kavalagraha (जिह्वा मूल)",
    clinicalNote:
      "Rapid transmucosal venous absorption straight into the superior vena cava, completely bypassing first-pass hepatic degradation (e.g., Nitroglycerin for angina).",
  },
  {
    abbr: "Top",
    fullName: "Topical",
    angle: "Surface application / Applied to Skin",
    targetTissue: "Epidermis & Stratum Corneum",
    needleSpecs: "Non-invasive (Cream, ointment, transdermal patch)",
    maxVolume: "Fingertip Unit (FTU) ≈ 0.5 g",
    commonSites: ["Intact dermal surface", "Mucous membranes"],
    ayurvedicParallel: "Bahir-Parimarjana / Lepa (लेप)",
    clinicalNote:
      "Delivers localized therapeutic concentrations with minimal systemic load. Absorption varies based on dermal thickness, occlusion, and epidermal hydration.",
  },
];

export default function InjectionDegreesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedAbbr, setCopiedAbbr] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return INJECTION_DATA;
    return INJECTION_DATA.filter(
      (item) =>
        item.abbr.toLowerCase().includes(q) ||
        item.fullName.toLowerCase().includes(q) ||
        item.angle.toLowerCase().includes(q) ||
        item.targetTissue.toLowerCase().includes(q) ||
        item.commonSites.some((s) => s.toLowerCase().includes(q)),
    );
  }, [searchQuery]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAbbr(text);
    setTimeout(() => setCopiedAbbr(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Breadcrumb & Return */}
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
              <Syringe className="w-3.5 h-3.5" /> Clinical Codex &bull; ShortCut
              #03
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Injection Angles & Administration Routes
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Standardized parenteral needle angles, target tissue layers,
              maximum volume thresholds, and non-invasive transmucosal pathways.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Parenteral Spectrum
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                10° – 90°
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Classical Origin
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                Sushruta
              </span>
            </div>
          </div>
        </div>

        {/* Needle Angle Visual Cross-Reference Banner */}
        <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="w-4 h-4 text-teal-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Parenteral Insertion Angle Spectrum
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-teal-500/30">
              <span className="text-2xl font-bold font-mono text-teal-300">
                90°
              </span>
              <span className="text-xs font-semibold block text-white mt-0.5">
                Intramuscular (IM)
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                Muscle tissue
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-amber-500/30">
              <span className="text-2xl font-bold font-mono text-amber-300">
                45°
              </span>
              <span className="text-xs font-semibold block text-white mt-0.5">
                Subcutaneous (SC)
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                Adipose layer
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-blue-500/30">
              <span className="text-2xl font-bold font-mono text-blue-300">
                25°
              </span>
              <span className="text-xs font-semibold block text-white mt-0.5">
                Intravenous (IV)
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                Venous vessel
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-emerald-500/30">
              <span className="text-2xl font-bold font-mono text-emerald-300">
                10°–15°
              </span>
              <span className="text-xs font-semibold block text-white mt-0.5">
                Intradermal (ID)
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                Dermis wheal
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search route (IM, IV, SC), angle, or site..."
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/60 transition-colors shadow-inner"
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

          <div className="text-xs text-slate-500">
            Showing{" "}
            <strong className="text-slate-300">{filteredData.length}</strong>{" "}
            standardized routes
          </div>
        </div>

        {/* Route Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredData.map((item, index) => (
            <div
              key={`${item.abbr}-${index}`}
              className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700/80 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                {/* Header: Abbr, Angle Badge & Copy */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold font-mono text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                        {item.abbr}
                      </span>
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
                        {item.angle}
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-white mt-2 group-hover:text-teal-200 transition-colors">
                      {item.fullName}
                    </h2>
                  </div>

                  <button
                    onClick={() => copyToClipboard(item.abbr)}
                    title="Copy abbreviation"
                    aria-label={`Copy ${item.abbr}`}
                    className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-teal-300 hover:bg-slate-800/80 transition-colors shrink-0"
                  >
                    {copiedAbbr === item.abbr ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Subtitles: Target Tissue & Vedic Parallel */}
                <div className="space-y-1 mb-3 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Layers className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span className="text-slate-300 font-medium">
                      {item.targetTissue}
                    </span>
                  </div>
                  {item.ayurvedicParallel && (
                    <div className="flex items-center gap-1.5 text-amber-300/90 pl-5">
                      <span className="font-mono text-[10px] text-amber-500/80 uppercase">
                        Vedic:
                      </span>
                      <span>{item.ayurvedicParallel}</span>
                    </div>
                  )}
                </div>

                {/* Technical Specifications */}
                <div className="my-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 space-y-1.5 text-[11px] font-mono">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Gauge & Length:</span>
                    <span className="text-slate-200">{item.needleSpecs}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Max Volume:</span>
                    <span className="text-teal-300">{item.maxVolume}</span>
                  </div>
                </div>

                {/* Common Anatomical Sites */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mb-1.5">
                    Target Sites:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.commonSites.map((site, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300"
                      >
                        {site}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clinical Protocol Alert */}
              <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <AlertCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item.clinicalNote}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
