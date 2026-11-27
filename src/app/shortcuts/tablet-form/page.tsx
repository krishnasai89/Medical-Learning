"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Pill,
  Search,
  Copy,
  CheckCircle2,
  Clock,
  Sparkles,
  AlertTriangle,
  Layers,
  FlaskConical,
  Beaker,
} from "lucide-react";

const TABLET_DATA = [
  // --- Modified Release Profiles ---
  {
    abbr: "ER / XR / XL",
    fullName: "Extended Release",
    category: "Release Mechanism",
    pharmacokinetics: "Steady, zero-order release over 12–24 hours",
    canCrush: false,
    ayurvedicParallel: "Rasayana / Dirghakala Parinama (दीर्घकाल परिणाम)",
    description:
      "Formulated with an insoluble polymer matrix or semi-permeable membrane that gradually delivers the active drug over an extended duration.",
    clinicalNote:
      "Do NOT crush or chew. Crushing destroys the delivery matrix, causing rapid drug dumping ('dose dumping') and acute toxicity risk.",
  },
  {
    abbr: "SR",
    fullName: "Sustained Release",
    category: "Release Mechanism",
    pharmacokinetics: "Prolonged therapeutic window with reduced peaks",
    canCrush: false,
    ayurvedicParallel: "Mandagni Pachana (मन्द परिपाक)",
    description:
      "Releases medication at a predetermined, controlled rate to maintain a consistent therapeutic concentration over time without frequent redosing.",
    canCrush: false,
    clinicalNote:
      "Must be swallowed whole. Prevents peaks and troughs typical of short half-life compounds (e.g., Metoprolol SR).",
  },
  {
    abbr: "CR",
    fullName: "Controlled Release",
    category: "Release Mechanism",
    pharmacokinetics: "Zero-order constant plasma concentration",
    canCrush: false,
    ayurvedicParallel: "Sama Kala Vitarana",
    description:
      "Engineered delivery that maintains a constant drug level in the blood regardless of gastric pH, physiological state, or transit rate.",
    clinicalNote:
      "Never split, crush, or chew unless a functional division score is explicitly certified by manufacturer guidelines.",
  },
  {
    abbr: "PR",
    fullName: "Prolonged Release",
    category: "Release Mechanism",
    pharmacokinetics: "Slower onset, prolonged absorption window",
    canCrush: false,
    ayurvedicParallel: "Dirgha Kala Guna",
    description:
      "An extended dissolution profile designed so that therapeutic effect persists for longer intervals compared to an immediate-release counterpart.",
    clinicalNote:
      "Common in European Pharmacopoeia (Ph. Eur.) formulations. Swallow whole with adequate water.",
  },
  {
    abbr: "IR",
    fullName: "Immediate Release",
    category: "Release Mechanism",
    pharmacokinetics: "Rapid disintegration (< 15–30 min)",
    canCrush: true,
    ayurvedicParallel: "Sadhyo Phala / Tikshna Guna (सद्यः फल)",
    description:
      "Standard formulation that disintegrates rapidly in gastric fluid without deliberate rate-retarding polymers.",
    clinicalNote:
      "Can usually be halved or crushed for enteral tubes if clinically necessary. Rapid peak plasma concentration (Cmax).",
  },
  {
    abbr: "EC",
    fullName: "Enteric Coated",
    category: "Release Mechanism",
    pharmacokinetics:
      "pH-dependent release (bypasses stomach, dissolves in duodenum at pH > 5.5)",
    canCrush: false,
    ayurvedicParallel: "Pakwashaya Gamana (पक्वाशय गमन)",
    description:
      "Coated with an acid-resistant polymer (e.g., cellulose acetate phthalate) preventing gastric degradation or protecting gastric mucosa from irritation.",
    clinicalNote:
      "Never crush. Crushing neutralizes the enteric protection, exposing gastric lining to chemical erosion (e.g., Aspirin EC) or causing acid degradation (e.g., Pantoprazole).",
  },
  {
    abbr: "DT / Disp",
    fullName: "Dispersible Tablet",
    category: "Release Mechanism",
    pharmacokinetics: "Pre-dissolved rapid mucosal absorption",
    canCrush: true,
    ayurvedicParallel: "Ksheera / Toya Samyukta Churna",
    description:
      "Formulated with super-disintegrants that dissolve into a uniform suspension in water within 3 minutes before administration.",
    clinicalNote:
      "Designed specifically for pediatric and geriatric patients with dysphagia. Disperse in 5–10 mL of water before ingestion.",
  },

  // --- Salts & Active Conjugates ---
  {
    abbr: "HCl",
    fullName: "Hydrochloride Salt",
    category: "Salt Form / Conjugate",
    pharmacokinetics: "High aqueous solubility, optimized oral bioavailability",
    canCrush: true,
    ayurvedicParallel: "Lavana Samskara (लवण संस्कार)",
    description:
      "A basic amine drug reacted with hydrochloric acid to form an ionic chloride salt with enhanced crystalline stability and dissolution.",
    clinicalNote:
      "Most frequent pharmaceutical salt form. High water solubility facilitates rapid dissolution in gastric acid (e.g., Metformin HCl, Ranitidine HCl).",
  },
  {
    abbr: "Di-HCl",
    fullName: "Dihydrochloride Salt",
    category: "Salt Form / Conjugate",
    pharmacokinetics: "Dual-site ionized formulation for insoluble diamines",
    canCrush: true,
    ayurvedicParallel: "Dvi-Lavana Yukta",
    description:
      "Two molar equivalents of hydrochloric acid bound to a divalent basic amine molecule, drastically increasing aqueous ionization.",
    clinicalNote:
      "Standard for multi-amine compounds (e.g., Levocetirizine Dihydrochloride, Flunarizine 2HCl) to guarantee uniform intestinal permeation.",
  },
  {
    abbr: "Maleate",
    fullName: "Maleate Salt",
    category: "Salt Form / Conjugate",
    pharmacokinetics:
      "Organic dicarboxylic counter-ion with balanced lipophilicity",
    canCrush: true,
    ayurvedicParallel: "Amla Varga Samskara",
    description:
      "Formed with maleic acid (cis-butenedioic acid). Produces a stable, non-hygroscopic crystalline form with predictable gastrointestinal absorption.",
    clinicalNote:
      "Common in cardiovascular and antihistaminic agents (e.g., Enalapril Maleate, Chlorpheniramine Maleate).",
  },
  {
    abbr: "Succinate",
    fullName: "Succinate Salt",
    category: "Salt Form / Conjugate",
    pharmacokinetics:
      "Sustained ionic dissociation; prolonged plasma stability",
    canCrush: false,
    ayurvedicParallel: "Kshara-Lavana Anubandha",
    description:
      "Conjugated with succinic acid. In metoprolol formulations, the succinate salt provides slower, more consistent absorption than the tartrate salt.",
    clinicalNote:
      "Metoprolol Succinate is explicitly formulated for once-daily 24-hour control, whereas Metoprolol Tartrate requires BID dosing. Do not substitute interchangeably.",
  },
  {
    abbr: "HCTZ",
    fullName: "Hydrochlorothiazide",
    category: "Active Combination / Diuretic",
    pharmacokinetics:
      "Inhibits Na+/Cl- cotransporter in distal convoluted tubule",
    canCrush: true,
    ayurvedicParallel: "Mootrala Dravya (मूत्रल द्रव्य)",
    description:
      "A thiazide diuretic frequently combined with ACE inhibitors, ARBs, or beta-blockers in single-tablet fixed-dose combinations (FDCs).",
    clinicalNote:
      "Monitor serum potassium and renal clearance. Often labeled as 'H' or 'D' in combination brand names (e.g., Telmisartan + HCTZ).",
  },
  {
    abbr: "HCTZ / DHCT",
    fullName: "Hydrochlorothiazide (Dihydrochlorothiazide)",
    category: "Active Combination / Diuretic",
    pharmacokinetics:
      "Inhibits Na+/Cl- cotransporter in distal convoluted tubule",
    canCrush: true,
    ayurvedicParallel: "Mootrala Dravya (मूत्रल द्रव्य)",
    description:
      "A benzothiadiazine diuretic frequently combined with ACE inhibitors, ARBs, or beta-blockers in single-tablet fixed-dose combinations (FDCs).",
    clinicalNote:
      "Monitor serum electrolytes (potassium/sodium), uric acid, and eGFR. Typically indicated by 'H', 'D', or 'HCT' in combination brand naming conventions (e.g., Telmisartan-H).",
  },
];

const CATEGORIES = [
  "All",
  "Release Mechanism",
  "Salt Form / Conjugate",
  "Active Combination / Diuretic",
];

export default function TabletFormsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedAbbr, setCopiedAbbr] = useState(null);

  const filteredData = useMemo(() => {
    return TABLET_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.abbr.toLowerCase().includes(q) ||
        item.fullName.toLowerCase().includes(q) ||
        item.pharmacokinetics.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const copyToClipboard = (text) => {
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
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Overview</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-3">
              <Pill className="w-3.5 h-3.5" /> Clinical Codex &bull; ShortCut
              #04
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Tablet Formulations & Release Profiles
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Pharmacokinetic release acronyms (ER, SR, CR, EC), common chemical
              salt forms (HCl, Maleate, Succinate), and critical crushability
              safety guidelines.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                USP &bull; BP
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Safety Rule
              </span>
              <span className="text-xl font-bold text-rose-400 font-mono">
                Do Not Crush
              </span>
            </div>
          </div>
        </div>

        {/* Safety Banner */}
        <div className="mt-8 p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 backdrop-blur-md flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="text-xs text-rose-200 leading-relaxed">
            <strong className="text-white font-semibold block mb-0.5">
              Critical Patient Safety Rule:
            </strong>
            Formulations marked with{" "}
            <strong className="text-rose-300">DO NOT CRUSH</strong> (ER, XR, XL,
            SR, CR, EC) rely on intact polymer coats or matrices. Altering their
            physical structure can cause lethal dose-dumping or severe chemical
            damage to the upper GI tract.
          </div>
        </div>

        {/* Search & Categories */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search abbreviation (ER, HCl, EC), name, or salt..."
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

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-teal-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                    : "bg-slate-900/70 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing{" "}
            <strong className="text-slate-300">{filteredData.length}</strong>{" "}
            formulation items
          </span>
          {selectedCategory !== "All" && (
            <span>
              Filtered by:{" "}
              <strong className="text-teal-400">{selectedCategory}</strong>
            </span>
          )}
        </div>

        {/* Main Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredData.map((item, index) => (
            <div
              key={`${item.abbr}-${index}`}
              className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700/80 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                {/* Header: Abbr, Category, Safety Badge, Copy */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base font-bold font-mono text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                        {item.abbr}
                      </span>
                      {item.category === "Release Mechanism" && (
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                            item.canCrush
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                          }`}
                        >
                          {item.canCrush ? "CAN CRUSH" : "DO NOT CRUSH"}
                        </span>
                      )}
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

                {/* Subtitles: Vedic / Classical Correlation */}
                {item.ayurvedicParallel && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-300/90 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-mono text-[10px] text-amber-500/80 uppercase">
                      Classical:
                    </span>
                    <span className="font-medium">
                      {item.ayurvedicParallel}
                    </span>
                  </div>
                )}

                {/* Pharmacokinetics Tag */}
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] font-mono text-slate-300 mb-3">
                  <div className="text-[10px] uppercase text-slate-500 font-semibold mb-0.5">
                    Absorption & Dissolution:
                  </div>
                  <div>{item.pharmacokinetics}</div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Clinical Note */}
              <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <FlaskConical className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item.clinicalNote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl mt-6">
            <Pill className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-300 mb-1">
              No matching formulation forms found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Try searching for terms like "ER", "HCl", "EC", "succinate", or
              "crush".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-1.5 rounded-lg bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
