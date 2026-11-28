"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Copy,
  CheckCircle2,
  Activity,
  Layers,
  AlertCircle,
  Gauge,
  Droplets,
  ShieldAlert,
  Info,
  CircleDot,
  Radio,
  FileText,
  Compass,
} from "lucide-react";

interface TubeData {
  id: string;
  name: string;
  subType: string;
  category:
    | "Gastric Access"
    | "Intestinal Decompression"
    | "Post-Pyloric Feeding";
  frenchSizes: string;
  tubeLength: string;
  lumenCount: "Single Lumen" | "Double Lumen" | "Triple Lumen";
  depthMarkings: string;
  features: string;
  uses: string;
  clinicalTip: string;
}

const TUBE_DATA: TubeData[] = [
  {
    id: "ryles-standard",
    name: "Classic Ryle's Tube",
    subType: "Standard Nasogastric Tube",
    category: "Gastric Access",
    frenchSizes:
      "10 Fr – 18 Fr (Adult Standard: 14 Fr – 16 Fr; Pediatric: 6 Fr – 10 Fr)",
    tubeLength: "105 cm",
    lumenCount: "Single Lumen",
    depthMarkings:
      "Ring 1 at 45 cm, Ring 2 at 55 cm, Ring 3 at 65 cm, Ring 4 at 75 cm",
    features:
      "Medical-grade silicone or thermosensitive PVC with a distal weighted tip containing stainless steel or lead-free ball bearings. Four staggered lateral drainage eyes and continuous radiopaque longitudinal stripe (X-ray visible).",
    uses: "Aspiration of gastric contents in bowel obstruction, gastric decompression during surgery, enteral nutrition and drug administration, diagnostic gastric fluid analysis, gastric lavage in acute poisoning.",
    clinicalTip:
      "Depth formula: Measure from the tip of the nose to the earlobe, then down to the xiphoid process (NEX measurement) + add 5–10 cm. The 55 cm mark should generally sit at the incisors when reaching the stomach body. Always verify placement via aspirate pH (≤ 5.5) or abdominal X-ray prior to administering feeds.",
  },
  {
    id: "levin",
    name: "Levin Tube",
    subType: "Smooth-Tip Nasogastric Tube",
    category: "Gastric Access",
    frenchSizes: "12 Fr – 18 Fr",
    tubeLength: "120 cm – 125 cm",
    lumenCount: "Single Lumen",
    depthMarkings: "45 cm, 55 cm, 65 cm, and 75 cm circular rings",
    features:
      "Straight, unweighted, solid round tip with staggered side circular perforations along the distal 10 cm. Flexible plastic funnel connector with integral attached plug.",
    uses: "Intermittent low-pressure gastric suction, administration of liquid diets, diagnostic gastric sampling, intraoperative stomach decompression.",
    clinicalTip:
      "Because it is a single-lumen tube without an air vent, continuous high vacuum suction causes the mucosal lining of the stomach to be sucked into the side eyes, producing petechiae and mucosal ulceration. Use intermittent low suction (30–40 mmHg) only.",
  },
  {
    id: "salem-sump",
    name: "Salem Sump Tube",
    subType: "Vented Double-Lumen Gastric Tube",
    category: "Gastric Access",
    frenchSizes: "10 Fr – 18 Fr (Most common: 14 Fr, 16 Fr)",
    tubeLength: "120 cm",
    lumenCount: "Double Lumen",
    depthMarkings: "45 cm, 55 cm, 65 cm, and 75 cm from distal tip",
    features:
      "Double-lumen design: one large primary drainage lumen and one secondary smaller blue atmospheric air vent lumen ('pigtail'). The blue vent lumen equalizes vacuum pressure by drawing in room air.",
    uses: "Continuous gastric suctioning/decompression in bowel obstruction, ileus, upper GI bleeding, persistent post-operative vomiting.",
    clinicalTip:
      "CRITICAL: The blue pigtail vent must NEVER be clamped, capped, or connected to suction. If gastric fluid leaks from the blue vent, inject 20 mL of air through the blue port to clear the siphon effect. Keep the blue vent elevated above the level of the patient's stomach.",
  },
  {
    id: "foleys-ryles",
    name: "Foley's-Type Retaining Ryle's / G-Tube",
    subType: "Balloon-Anchored Gastrostomy / Enteral Tube",
    category: "Gastric Access",
    frenchSizes: "12 Fr – 24 Fr",
    tubeLength: "30 cm – 100 cm",
    lumenCount: "Double Lumen",
    depthMarkings:
      "Graduated centimeter markings along the shaft with external bolster",
    features:
      "Equipped with a distal silicone retention balloon (3–5 mL or 10–20 mL water inflation capacity) and a circular radiopaque bolster collar that rests against the abdominal wall.",
    uses: "Direct percutaneous gastrostomy replacement line, long-term enteral nutrition where trans-nasal tubes cause sinusitis or ulceration, mechanical anchoring in localized stomas.",
    clinicalTip:
      "Inflate the retention balloon strictly with sterile water (NOT saline or air). Daily rotate the tube 360 degrees when well-healed to prevent 'Buried Bumper Syndrome'.",
  },
  {
    id: "miller-abbott",
    name: "Miller-Abbott Tube",
    subType: "Weighted Intestinal Decompression Tube",
    category: "Intestinal Decompression",
    frenchSizes: "16 Fr – 18 Fr",
    tubeLength: "300 cm (approx. 10 feet)",
    lumenCount: "Double Lumen",
    depthMarkings: "Centimeter graduations from 45 cm up to 300 cm",
    features:
      "Dual lumen: one lumen for continuous gastrointestinal aspiration and irrigation; second lumen connected to an inflatable distal balloon (filled with metallic tungsten or water/air). Peristalsis carries the inflated balloon down into the small bowel.",
    uses: "Decompression of mechanical small bowel obstruction (SBO), paralytic ileus, diagnosis and treatment of obstructive lesions proximal to the ileocecal valve.",
    clinicalTip:
      "Do not tape the tube to the patient's nose until it has traveled to its target intestinal destination. Advance the tube 5–10 cm every 1–2 hours as peristalsis propels the weighted balloon. Place patient in right lateral decubitus position to encourage passage through the pylorus.",
  },
  {
    id: "duodenal",
    name: "Duodenal Tube (Einhorn / Rehfuss Pattern)",
    subType: "Post-Gastric Diagnostic & Drainage Tube",
    category: "Post-Pyloric Feeding",
    frenchSizes: "10 Fr – 14 Fr",
    tubeLength: "125 cm – 150 cm",
    lumenCount: "Single Lumen",
    depthMarkings:
      "55 cm (Stomach), 65 cm (Pylorus), 75 cm (Duodenum), 85 cm (Treitz ligament)",
    features:
      "Small-bore, pliable tube tipped with a perforated metal capsule (olive) or weighted silicone tip. Hydrodynamic design allows passage across the pyloric sphincter into the C-loop of the duodenum.",
    uses: "Biliary tract fluid collection, pancreatic enzyme analysis, post-pyloric feeding in patients with severe gastro-esophageal reflux or gastroparesis.",
    clinicalTip:
      "Aspirate verification: Golden-yellow, clear, bile-stained alkaline aspirate (pH > 7.0) confirms correct duodenal position, whereas cloudy, acidic aspirate (pH < 5.0) confirms the tube is still coiled in the stomach.",
  },
  {
    id: "post-pyloric",
    name: "Post-Pyloric Feeding Tube (Dobhoff / Tiger Tube)",
    subType: "Small-Bore Trans-Pyloric Enteral Line",
    category: "Post-Pyloric Feeding",
    frenchSizes: "8 Fr – 12 Fr (Ultra-flexible)",
    tubeLength: "110 cm – 140 cm",
    lumenCount: "Single Lumen",
    depthMarkings:
      "Centimeter graduations along length with radiopaque tungsten-weighted tip",
    features:
      "Made of ultra-soft polyurethane or silicone with an internal stiffening guidewire (stylet) coated with water-activated lubricant. Often features self-advancing silicone flaps ('Tiger Tube') that catch peristaltic waves.",
    uses: "Enteral nutrition in patients with impaired gastric motility (gastroparesis), recurrent high gastric residual volumes (GRVs), severe pancreatitis, high aspiration risk, or acute head injury.",
    clinicalTip:
      "NEVER re-insert the stiffening guidewire while the tube is inside the patient; doing so can puncture the esophagus, stomach, or duodenum. Flush thoroughly with 30 mL sterile water every 4 hours to prevent clumping of elemental feeding formulas.",
  },
  {
    id: "naso-jejunal",
    name: "Naso-Jejunal Tube (NJ Tube / Bengmark)",
    subType: "Deep Intestinal Enteral Access Tube",
    category: "Post-Pyloric Feeding",
    frenchSizes:
      "8 Fr – 12 Fr (Dual or Triple lumen variants available: Gastric Decompress + Jejunal Feed)",
    tubeLength: "130 cm – 160 cm",
    lumenCount: "Double Lumen",
    depthMarkings: "Numbered depth markings every 5 cm up to 150 cm",
    features:
      "Extended length with distal self-anchoring spiral memory loops (Bengmark spiral) that uncoil past the ligament of Treitz. May have dual ports allowing simultaneous gastric suction and jejunal feeding.",
    uses: "Severe acute necrotizing pancreatitis (feeding past the ampulla of Vater avoids stimulating exocrine pancreatic secretion), hyperemesis gravidarum, prolonged post-operative gastroparesis, refractory aspiration pneumonia.",
    clinicalTip:
      "Jejunal feeds must always be administered continuously via an infusion pump (e.g., 20–80 mL/hr). NEVER administer large bolus feeds into the jejunum, as this triggers acute dumping syndrome, abdominal cramping, and osmotic diarrhea.",
  },
];

const DEPTH_STANDARDS = [
  {
    mark: "45 cm (Ring I)",
    loc: "Cardia / Gastro-Esophageal Junction (GEJ)",
    note: "Tube enters stomach entrance",
  },
  {
    mark: "55 cm (Ring II)",
    loc: "Body of the Stomach",
    note: "Standard resting position for NG feeding",
  },
  {
    mark: "65 cm (Ring III)",
    loc: "Pylorus / Pyloric Antrum",
    note: "Tube reaches exit of stomach",
  },
  {
    mark: "75 cm (Ring IV)",
    loc: "Duodenum (C-Loop)",
    note: "Post-pyloric alkaline transition",
  },
  {
    mark: "85 – 105+ cm",
    loc: "Jejunum (Past Ligament of Treitz)",
    note: "Target position for NJ tubes",
  },
];

export default function RylesTubePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    "All",
    "Gastric Access",
    "Intestinal Decompression",
    "Post-Pyloric Feeding",
  ];

  const filteredData = useMemo(() => {
    return TUBE_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.subType.toLowerCase().includes(q) ||
        item.frenchSizes.toLowerCase().includes(q) ||
        item.uses.toLowerCase().includes(q) ||
        item.features.toLowerCase().includes(q) ||
        item.lumenCount.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" /> Clinical Inventory &bull; Item
              #07
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Ryle's Tubes & Enteral Access Codex
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Standardized nasogastric, vented sump, intestinal decompression,
              and post-pyloric feeding tubes. Dimensional calibers (6 Fr to 24
              Fr), depth ring markings (45 cm to 105 cm), lumen dynamics, and
              clinical verification protocols.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Verification Gold Standard
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                pH ≤ 5.5 / X-Ray
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Length
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                105 cm – 300 cm
              </span>
            </div>
          </div>
        </div>

        {/* Depth Marking Cross-Reference Banner */}
        <div className="mt-8 p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-3">
            <Radio className="w-4 h-4 text-teal-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Standard Ryle's Tube Insertion Depth Markers (Measured from Tip)
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {DEPTH_STANDARDS.map((d) => (
              <div
                key={d.mark}
                className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-sm font-bold text-teal-300">
                    {d.mark}
                  </span>
                  <span className="text-xs font-semibold text-white block mt-1">
                    {d.loc}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 mt-2 block leading-snug">
                  {d.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tube (Levin, Salem Sump, Miller-Abbott), Fr, use..."
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
            {categories.map((cat) => (
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
            enteral tube models
          </span>
          {selectedCategory !== "All" && (
            <span>
              Filtered by:{" "}
              <strong className="text-teal-400">{selectedCategory}</strong>
            </span>
          )}
        </div>

        {/* Main Grid View */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700/80 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                {/* Header: Title, Category Badge, Copy */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 border border-slate-700">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {item.lumenCount}
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-white mt-1.5 group-hover:text-teal-200 transition-colors">
                      {item.name}
                    </h2>
                    <span className="text-xs text-slate-400 block font-medium">
                      {item.subType}
                    </span>
                  </div>

                  <button
                    onClick={() => copyToClipboard(item.name, item.id)}
                    title="Copy tube name"
                    className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-teal-300 hover:bg-slate-800/80 transition-colors shrink-0"
                  >
                    {copiedId === item.id ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Technical Specifications */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 my-3 font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-teal-400" /> French
                      Caliber:
                    </span>
                    <span className="font-bold text-amber-300 text-right">
                      {item.frenchSizes}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Total Length:</span>
                    <span className="text-slate-200 font-bold">
                      {item.tubeLength}
                    </span>
                  </div>
                  <div className="pt-1 border-t border-slate-900 text-[11px] text-slate-400">
                    <span className="block text-[10px] uppercase text-slate-500 font-semibold mb-0.5">
                      Depth Markings:
                    </span>
                    <span className="text-slate-300 leading-snug block">
                      {item.depthMarkings}
                    </span>
                  </div>
                </div>

                {/* Engineering Features */}
                <div className="mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold block mb-0.5">
                    Engineering & Design:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.features}
                  </p>
                </div>

                {/* Primary Indications */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-teal-400 font-semibold block mb-0.5">
                    Clinical Uses & Scope:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.uses}
                  </p>
                </div>
              </div>

              {/* Clinical Protocol Note */}
              <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <AlertCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item.clinicalTip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredData.length === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl mt-6">
            <Compass className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-300 mb-1">
              No matching enteral tube types found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Try searching by tube name (e.g., "Salem Sump", "Levin",
              "Miller-Abbott") or size ("16 Fr").
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
