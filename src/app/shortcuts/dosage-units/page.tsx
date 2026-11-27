"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Search,
  Copy,
  CheckCircle2,
  Sun,
  Moon,
  Utensils,
  AlertCircle,
} from "lucide-react";

interface TimingItem {
  abbr: string;
  fullName: string;
  latinOrigin?: string;
  meaning: string;
  category:
    | "Standard Frequency"
    | "Administration Route"
    | "Meal Correlation"
    | "Circadian & Sleep"
    | "Vedic Dosing (Kala)";
  vedicParallel?: string;
  clinicalNote: string;
}

const CATEGORIES = [
  "All",
  "Standard Frequency",
  "Administration Route",
  "Meal Correlation",
  "Circadian & Sleep",
  "Vedic Dosing (Kala)",
] as const;

const TIMING_DATA: TimingItem[] = [
  // Standard Frequencies
  {
    abbr: "QD / OD",
    fullName: "Once Daily",
    latinOrigin: "Quaque die / Omni die",
    meaning: "Administer once every 24 hours.",
    category: "Standard Frequency",
    clinicalNote:
      "Best taken at the same time each day for steady-state plasma concentrations.",
  },
  {
    abbr: "BID / BD",
    fullName: "Twice a Day",
    latinOrigin: "Bis in die",
    meaning: "Administer 2 times within 24 hours (roughly every 12 hours).",
    category: "Standard Frequency",
    clinicalNote: "Typically scheduled morning and evening.",
  },
  {
    abbr: "TID / TDS",
    fullName: "Three Times a Day",
    latinOrigin: "Ter in die / Ter die sumendum",
    meaning: "Administer 3 times within waking hours (approx. every 8 hours).",
    category: "Standard Frequency",
    clinicalNote:
      "Common for antibiotics, anti-inflammatories, and herbal digestive decoctions.",
  },
  {
    abbr: "QID",
    fullName: "Four Times a Day",
    latinOrigin: "Quater in die",
    meaning:
      "Administer 4 times evenly spaced across waking hours (approx. every 4–6 hours).",
    category: "Standard Frequency",
    clinicalNote:
      "Reserved for short half-life compounds or rapid mucosal soothing.",
  },
  {
    abbr: "Q4H",
    fullName: "Every 4 Hours",
    latinOrigin: "Quaque 4 hora",
    meaning:
      "Administer once every four hours around the clock or while awake.",
    category: "Standard Frequency",
    clinicalNote:
      "Common for analgesics, antipyretics (e.g., paracetamol), and rapid-acting bronchodilators.",
  },
  {
    abbr: "Q6H",
    fullName: "Every 6 Hours",
    latinOrigin: "Quaque 6 hora",
    meaning: "Administer once every six hours (total 4 doses in 24 hours).",
    category: "Standard Frequency",
    clinicalNote:
      "Standard interval for round-the-clock antibiotics and sustained systemic symptom suppression.",
  },
  {
    abbr: "Q12H",
    fullName: "Every 12 Hours",
    latinOrigin: "Quaque 12 hora",
    meaning: "Administer once every six hours (total 2 doses in 24 hours).",
    category: "Standard Frequency",
    clinicalNote:
      "Standard interval for round-the-clock antibiotics and sustained systemic symptom suppression.",
  },
  {
    abbr: "PRN",
    fullName: "As Needed",
    latinOrigin: "Pro re nata",
    meaning: "Administer only when clinical circumstances or symptoms require.",
    category: "Standard Frequency",
    clinicalNote:
      "Prescriptions must define clear maximum limits per 24 hours (e.g., SOS / PRN max 3x).",
  },
  {
    abbr: "STAT",
    fullName: "Immediately / Urgent",
    latinOrigin: "Statim",
    meaning: "Administer immediately as a single critical dose.",
    category: "Standard Frequency",
    clinicalNote:
      "Used during acute flare-ups, anaphylaxis, or acute pain triage.",
  },

  // Administration Routes
  {
    abbr: "PO",
    fullName: "By Mouth (Oral)",
    latinOrigin: "Per os",
    meaning: "Administer orally swallowed through the mouth.",
    category: "Administration Route",
    clinicalNote:
      "Most common route; undergoes first-pass hepatic metabolism unless sublingual or buccal.",
  },
  {
    abbr: "NPO",
    fullName: "Nothing by Mouth",
    latinOrigin: "Nil per os",
    meaning: "Withhold all food, liquid, and oral medication.",
    category: "Administration Route",
    clinicalNote:
      "Standard preoperative order (usually 6–8 hrs) or during bowel rest, acute pancreatitis, and aspiration risk.",
  },
  {
    abbr: "AD / AS / AU",
    fullName: "Right / Left / Both Ears (Otic)",
    latinOrigin: "Auris dextra / Auris sinistra / Auris utraque",
    meaning: "AD = Right ear, AS = Left ear, AU = Both ears.",
    category: "Administration Route",
    vedicParallel: "Karna Poorana (कर्णपूरण)",
    clinicalNote:
      "Warm eardrops to body temperature before installation to avoid vestibular caloric reflex (dizziness).",
  },
  {
    abbr: "OD / OS / OU",
    fullName: "Right / Left / Both Eyes (Ophthalmic)",
    latinOrigin: "Oculus dexter / Oculus sinister / Oculus uterque",
    meaning: "OD = Right eye, OS = Left eye, OU = Both eyes.",
    category: "Administration Route",
    vedicParallel: "Netra Tarpana / Aschyotana (आश्च्योतन)",
    clinicalNote:
      "Wait 5 minutes between different drops to prevent washout. Do not confuse 'OD (eye)' with 'OD (once daily)'.",
  },

  // Meal Correlations
  {
    abbr: "AC",
    fullName: "Before Meals",
    latinOrigin: "Ante cibum",
    meaning: "Administer 30–60 minutes prior to a meal.",
    category: "Meal Correlation",
    vedicParallel: "Abhakta / Pragbhakta (अभक्त)",
    clinicalNote:
      "Prevents food interference with gastric absorption; stimulates basal digestive fire (Agni).",
  },
  {
    abbr: "PC",
    fullName: "After Meals",
    latinOrigin: "Post cibum",
    meaning: "Administer 15–30 minutes following food consumption.",
    category: "Meal Correlation",
    vedicParallel: "Adhobhakta (अधोभक्त)",
    clinicalNote:
      "Mitigates gastric irritation; ideal for lipid-soluble extracts, NSAIDs, and mineral bhasmas.",
  },
  {
    abbr: "IC",
    fullName: "Between Meals",
    latinOrigin: "Inter cibos",
    meaning:
      "Administer mid-cycle when the stomach is empty (approx. 2 hours post-meal).",
    category: "Meal Correlation",
    vedicParallel: "Antarabhakta (अन्तराभक्त)",
    clinicalNote:
      "Targeted at metabolic and circulatory assimilation cycles (Vyana Vata).",
  },
  {
    abbr: "CC",
    fullName: "With Food",
    latinOrigin: "Cum cibo",
    meaning: "Consume mixed directly into food or with the first morsel.",
    category: "Meal Correlation",
    vedicParallel: "Samabhakta / Sabhakta (समभक्त)",
    clinicalNote:
      "Gentle on sensitive gastric linings; improves lipid uptake of lipophilic botanicals.",
  },

  // Circadian & Sleep
  {
    abbr: "HS / QHS",
    fullName: "At Bedtime",
    latinOrigin: "Hora somni",
    meaning: "Administer 30 minutes before sleep at night.",
    category: "Circadian & Sleep",
    vedicParallel: "Nishi (निशि काल)",
    clinicalNote:
      "Used for nervous system modulators (Medhya Rasayana), nighttime detoxifiers (Triphala), and sedatives.",
  },
  {
    abbr: "OM",
    fullName: "Every Morning",
    latinOrigin: "Omni mane",
    meaning: "Administer immediately at sunrise / upon waking.",
    category: "Circadian & Sleep",
    vedicParallel: "Pratah Kala / Ushahpana",
    clinicalNote:
      "Coordinates with cortisol awakening response, thyroid medication, and early Kapha clearance.",
  },
  {
    abbr: "ON",
    fullName: "Every Night",
    latinOrigin: "Omni nocte",
    meaning: "Administer once during night hours.",
    category: "Circadian & Sleep",
    clinicalNote:
      "Common for cholesterol synthesis inhibitors (statins) and bedtime metabolic protocols.",
  },

  // Classical Vedic Dosing Times (Aushadha Sevana Kala)
  {
    abbr: "Abhakta",
    fullName: "Early Morning Empty Stomach",
    meaning: "Taken at dawn without any food in the stomach.",
    category: "Vedic Dosing (Kala)",
    vedicParallel: "अभक्त (First of 10 Kalas)",
    clinicalNote:
      "Strongest therapeutic potency; indicated in Kapha aggravation and heavy cleansing protocols.",
  },
  {
    abbr: "Kavalantare",
    fullName: "Between Morsels",
    meaning: "Administered in small doses between bites during a meal.",
    category: "Vedic Dosing (Kala)",
    vedicParallel: "कवलान्तरे (Prana Vata)",
    clinicalNote:
      "Specifically targeted for cardiopulmonary conditions, cough, and thoracic disorders.",
  },
  {
    abbr: "Muhurmuhuh",
    fullName: "Frequent Small Sips",
    meaning: "Administered repeatedly in micro-quantities throughout the day.",
    category: "Vedic Dosing (Kala)",
    vedicParallel: "मुहुर्मुहुः",
    clinicalNote:
      "Used during acute breathlessness (Shwasa), hiccough (Hikka), severe dehydration, and vomiting.",
  },
];

export default function TimingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedAbbr, setCopiedAbbr] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    return TIMING_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.abbr.toLowerCase().includes(query) ||
        item.fullName.toLowerCase().includes(query) ||
        (item.latinOrigin && item.latinOrigin.toLowerCase().includes(query)) ||
        (item.vedicParallel &&
          item.vedicParallel.toLowerCase().includes(query)) ||
        item.meaning.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

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
              <Clock className="w-3.5 h-3.5" /> Clinical Codex &bull; ShortCut
              #02
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Frequency & Timing Prescriptions
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Standard pharmacological schedule sig codes correlated with
              classical circadian chronobiology and the 10 Vedic administration
              times (*Aushadha Sevana Kala*).
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Total Signals
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                {TIMING_DATA.length} Standardized
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Circadian Logic
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                Dinacharya
              </span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search QD, BID, bedtime, Latin or Vedic terms..."
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

          {/* Category Tabs */}
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
            timing protocols
          </span>
          {selectedCategory !== "All" && (
            <span>
              Filtered by:{" "}
              <strong className="text-teal-400">{selectedCategory}</strong>
            </span>
          )}
        </div>

        {/* Dynamic Timing Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredData.map((item, index) => (
            <div
              key={`${item.abbr}-${index}`}
              className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700/80 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                {/* Header: Abbr & Copy Button */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold font-mono text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                        {item.abbr}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        {item.category}
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

                {/* Subtitles: Latin & Vedic Parallel */}
                <div className="space-y-1 mb-3 text-xs">
                  {item.latinOrigin && (
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <span className="font-mono text-[10px] text-slate-500 uppercase">
                        Latin:
                      </span>
                      <span className="italic text-slate-300">
                        {item.latinOrigin}
                      </span>
                    </div>
                  )}
                  {item.vedicParallel && (
                    <div className="flex items-center gap-1.5 text-amber-300/90">
                      <span className="font-mono text-[10px] text-amber-500/80 uppercase">
                        Vedic:
                      </span>
                      <span className="font-medium">{item.vedicParallel}</span>
                    </div>
                  )}
                </div>

                {/* Meaning */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.meaning}
                </p>
              </div>

              {/* Bottom Clinical Insight Pill */}
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
            <Clock className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-300 mb-1">
              No timing protocols found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Try searching for standard sigs like <q>BID</q>,<q>AC</q>,
              <q>PC</q>, or words like <q>night</q> and <q>meals</q>.
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
