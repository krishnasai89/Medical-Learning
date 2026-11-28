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
  Sliders,
} from "lucide-react";

const CATHETER_DATA = [
  {
    name: "Foley's Catheter (Indwelling 2-Way & 3-Way)",
    category: "Indwelling Urethral",
    frenchSizes: "12 Fr – 24 Fr (Pediatric: 6 Fr – 10 Fr)",
    balloonSize:
      "Standard: 5 – 10 mL (Inflate with 10 mL sterile water) | Hemostatic / TURP: 30 mL",
    retentionMechanism: "Inflatable retention balloon at distal tip",
    materials:
      "Silicone-coated latex or 100% medical-grade silicone (hypoallergenic)",
    features:
      "Available as 2-way (one drainage lumen, one balloon inflation lumen) or 3-way (additional continuous bladder irrigation [CBI] lumen). Dual drainage eyes placed opposingly above balloon.",
    uses: "Continuous urine output monitoring in critical care/ICU, acute urinary retention, post-operative bladder decompression, continuous bladder irrigation following TURP/prostatectomy to prevent clot retention.",
    clinicalTip:
      "NEVER inflate balloon with saline (crystallizes and jams valve) or air (floats and causes catheter displacement). Inflate ONLY with sterile water. Check for free urine flow before balloon inflation to avoid urethral rupture.",
  },
  {
    name: "Intermittent Catheter (In-and-Out / Self-Catheter)",
    category: "Short-Term / Intermittent",
    frenchSizes: "10 Fr – 16 Fr (Length: Male ~40 cm, Female ~15–20 cm)",
    balloonSize: "Non-retaining (0 mL / No Balloon)",
    retentionMechanism:
      "None (Manual insertion and immediate removal once bladder empties)",
    materials: "Uncoated PVC, hydrophilic-coated, or pre-lubricated silicone",
    features:
      "Straight hollow catheter with smooth, fire-polished lateral drainage eyes. Hydrophilic variants activate instantly in water to generate an ultra-low friction barrier without manual lubricant jelly.",
    uses: "Clean Intermittent Self-Catheterization (CISC) in neurogenic bladder (spinal cord injury, multiple sclerosis, spina bifida), diagnostic clean-catch residual volume tests.",
    clinicalTip:
      "Significantly reduces long-term Catheter-Associated Urinary Tract Infections (CAUTI) and bladder calculi compared to chronic indwelling Foley catheters.",
  },
  {
    name: "Nelaton Catheter (Simple Straight Catheter)",
    category: "Short-Term / Diagnostic",
    frenchSizes: "8 Fr – 20 Fr (Universal ISO color-coded funnel connectors)",
    balloonSize: "Non-retaining (0 mL / No Balloon)",
    retentionMechanism: "None (Single-use immediate evacuation)",
    materials: "Medical-grade thermosensitive PVC or red rubber (flexible)",
    features:
      "Soft, straight, flexible tube with a rounded blunt closed tip and two staggered oval drainage eyes. Terminated with a universal conical connector that fits standard drainage bags or suction adapters.",
    uses: "Immediate single-event bladder decompression, instillation of intravesical chemotherapy (e.g., BCG/Mitomycin for bladder cancer), collecting sterile urine specimens, emergency gastric or meconium aspiration.",
    clinicalTip:
      "Single-use only. Do not leave unattended in the bladder; lacks any retention anchor and can migrate or slip out during position changes.",
  },
  {
    name: "Malecot Catheter (Self-Retaining Bat-Wing)",
    category: "Percutaneous & Surgical Drain",
    frenchSizes: "14 Fr – 32 Fr (Wide-bore)",
    balloonSize: "Balloonless (Retained by mechanical wings)",
    retentionMechanism:
      "2 or 4 expandable flexible rubber wings (petals) at the tip",
    materials: "Natural red rubber latex or radio-opaque silicone",
    features:
      "Large-caliber hollow lumen with a slotted tip featuring 2 to 4 expandable wings. Inserting an introducer stylet stretches the wings flat; removing the stylet causes the wings to expand inside the cavity.",
    uses: "Percutaneous cystostomy (suprapubic drainage), nephrostomy drainage, open surgical gastrostomy or cecostomy tube feeding, thick viscous or purulent pus drainage.",
    clinicalTip:
      "Ideal for draining thick, viscous fluids, pus, and mucus plugs that would easily obstruct a standard small Foley eye. To remove, insert a blunt stylet to flatten wings before withdrawing.",
  },
  {
    name: "Coudé Catheter (Coudé-Tip / Tiemann)",
    category: "Difficult Urethral Access",
    frenchSizes: "12 Fr – 18 Fr",
    balloonSize:
      "Available with 5 – 10 mL balloon (Indwelling) or balloonless (Intermittent)",
    retentionMechanism: "Optional retention balloon or straight removal",
    materials: "Silicone, polyurethane, or latex",
    features:
      "Distinct 45-degree tapered upward curved beak tip. A raised tactile ridge or indicator dot on the proximal funnel aligns with the direction of the curved tip.",
    uses: "Catheterization in males with benign prostatic hyperplasia (BPH), elevated bladder neck, false urethral passages, or enlarged median lobe obstruction where straight catheters buckle.",
    clinicalTip:
      "Technique: Keep the indicator ridge pointing straight up toward the patient's ceiling (12 o'clock position) during insertion. This guides the curved beak up and over the enlarged prostatic median lobe.",
  },
  {
    name: "Suprapubic Catheter (Cystostomy Line)",
    category: "Percutaneous Bladder Access",
    frenchSizes: "14 Fr – 20 Fr",
    balloonSize: "5 – 10 mL (Standard) | Up to 20 mL",
    retentionMechanism:
      "Inflatable balloon or external locking pig-tail/suture disc",
    materials: "100% Medical Silicone (resists encrustation)",
    features:
      "Inserted percutaneously through the anterior abdominal wall directly into the bladder 2–3 cm above the pubic symphysis under ultrasound guidance or trocar cystostomy.",
    uses: "Long-term bladder drainage when urethral catheterization is contraindicated (urethral stricture, pelvic trauma, urethral false passage), active sexual rehabilitation, chronic neurogenic incontinence.",
    clinicalTip:
      "Associated with lower urethral stricture rates and higher patient comfort. During scheduled tract changes, re-insert replacement catheter within 10–15 minutes before the cystostomy tract begins to close.",
  },
  {
    name: "Pigtail Catheter (Percutaneous Nephrostomy / Abscess)",
    category: "Percutaneous Locking Drain",
    frenchSizes: "6 Fr – 14 Fr (Length: 20 – 40 cm)",
    balloonSize: "Balloonless (Locking string loop coil)",
    retentionMechanism:
      "Internal tension thread locks the curled 'pigtail' tip in place",
    materials: "Polyurethane with Hydrophilic Lubricious Coating",
    features:
      "Multiple side holes along the inner curve of a tight 360-degree memory curl. Fitted with an internal monofilament suture thread that locks the curl tightly via a proximal luer-lock hub latch.",
    uses: "Percutaneous nephrostomy (PCN) for obstructive uropathy/hydronephrosis, drainage of intra-abdominal abscesses, pleural effusion evacuation, pneumothorax decompression.",
    clinicalTip:
      "CRITICAL: To remove or exchange the catheter, the proximal hub locking suture MUST be unlocked and cut. Attempting to pull an engaged pigtail will tear renal parenchyma or tissue beds.",
  },
];

const FRENCH_SCALE_DATA = [
  {
    fr: "6 Fr – 10 Fr",
    mm: "2.0 – 3.3 mm",
    pop: "Neonates & Pediatric patients",
    color: "Light Green / Blue / Black",
  },
  {
    fr: "12 Fr – 14 Fr",
    mm: "4.0 – 4.7 mm",
    pop: "Standard adult females & small-lumen males",
    color: "White / Green",
  },
  {
    fr: "16 Fr – 18 Fr",
    mm: "5.3 – 6.0 mm",
    pop: "Standard adult males / general ward standard",
    color: "Orange / Red",
  },
  {
    fr: "20 Fr – 24 Fr",
    mm: "6.7 – 8.0 mm",
    pop: "Hematuria, active bleeding, blood clots, TURP",
    color: "Yellow / Purple / Blue",
  },
];

export default function CatheterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedName, setCopiedName] = useState(null);

  const categories = ["All", ...new Set(CATHETER_DATA.map((c) => c.category))];

  const filteredData = useMemo(() => {
    return CATHETER_DATA.filter((item) => {
      const matchesCat =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.frenchSizes.toLowerCase().includes(q) ||
        item.balloonSize.toLowerCase().includes(q) ||
        item.uses.toLowerCase().includes(q) ||
        item.features.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedName(text);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Ambient Lighting */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

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
              <Droplets className="w-3.5 h-3.5" /> Clinical Inventory &bull;
              Item #06
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Clinical Catheters & Drainage Codex
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Standard French (Fr/Ch) outer diameters, balloon capacities (5–30
              mL), retention profiles (Foley's, Coudé, Malecot, Pigtail),
              materials, and bladder irrigation protocols.
            </p>
          </div>

          {/* Quick Stat Badges */}
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Scale Formula
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                1 Fr = 0.33 mm
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                TURP Irrigation
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                30 mL Balloon
              </span>
            </div>
          </div>
        </div>

        {/* French Scale Rapid Calibration Reference */}
        <div className="mt-8 p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-3">
            <Gauge className="w-4 h-4 text-teal-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              French (Fr / Ch) Outer Diameter & Population Sizing Guide
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {FRENCH_SCALE_DATA.map((item) => (
              <div
                key={item.fr}
                className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white">
                      {item.fr}
                    </span>
                    <span className="text-xs font-mono text-teal-300">
                      {item.mm}
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 mt-1 block">
                    {item.pop}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-2 block">
                  Hub: {item.color}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catheter (e.g. Foley, Coude, Pigtail), Fr size, use..."
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
            clinical catheter lines
          </span>
          {selectedCategory !== "All" && (
            <span>
              Filtered by:{" "}
              <strong className="text-teal-400">{selectedCategory}</strong>
            </span>
          )}
        </div>

        {/* Catheters Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredData.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700/80 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 border border-slate-700">
                      {item.category}
                    </span>
                    <h2 className="text-base font-bold text-white mt-1.5 group-hover:text-teal-200 transition-colors">
                      {item.name}
                    </h2>
                  </div>

                  <button
                    onClick={() => copyToClipboard(item.name)}
                    title="Copy catheter name"
                    className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-teal-300 hover:bg-slate-800/80 transition-colors shrink-0"
                  >
                    {copiedName === item.name ? (
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
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <CircleDot className="w-3.5 h-3.5 text-cyan-400" />{" "}
                      Balloon Volume:
                    </span>
                    <span className="font-bold text-cyan-300 text-right">
                      {item.balloonSize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Retention:</span>
                    <span className="text-slate-300 text-right">
                      {item.retentionMechanism}
                    </span>
                  </div>
                </div>

                {/* Features & Material */}
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
                    Clinical Indications & Uses:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.uses}
                  </p>
                </div>
              </div>

              {/* Safety & Clinical Protocol Callout */}
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
            <Droplets className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-300 mb-1">
              No matching catheter types found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Try searching by catheter name ("Foley", "Coude", "Pigtail"), size
              ("16 Fr"), or indication.
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
