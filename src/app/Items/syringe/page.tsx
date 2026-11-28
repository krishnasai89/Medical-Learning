"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Copy,
  CheckCircle2,
  Syringe,
  Layers,
  AlertCircle,
  ShieldCheck,
  Activity,
  Droplets,
  Info,
  Lock,
  Unlock,
  Sliders,
  Beaker,
} from "lucide-react";

// --- ANATOMICAL PARTS OF A SYRINGE ---
const SYRINGE_PARTS = [
  {
    name: "Plunger (Piston Shaft)",
    function:
      "The movable piston rod fitted inside the barrel. Depressing it expels medication; pulling it creates negative pressure to aspirate fluids, blood, or reconstituted medication.",
    clinicalTip:
      "Aseptic field: The stem and internal stopper of the plunger must never be touched by gloved or bare fingers to maintain sterility.",
  },
  {
    name: "Rubber Gasket / Piston Seal",
    function:
      "A flexible, synthetic elastomer seal fitted onto the leading tip of the plunger creating an airtight, leak-proof hermetic seal against the inner barrel wall.",
    clinicalTip:
      "Read volumetric measurement strictly at the top ring (leading edge) of the black gasket, not the bottom edge or the center dome.",
  },
  {
    name: "Graduated Barrel",
    function:
      "A transparent, medical-grade polypropylene or polymethylpentene cylinder marked with calibrated volumetric graduation lines (in mL, cc, or International Units).",
    clinicalTip:
      "High transparency allows instant visual inspection of solution clarity, particulate contamination, precipitation, and air bubbles.",
  },
  {
    name: "Finger Flange (Collar / Wings)",
    function:
      "Flared lateral wings situated at the proximal opening of the barrel providing two-finger stabilization during one-handed injection or aspiration.",
    clinicalTip:
      "Provides ergonomic leverage necessary to overcome tissue resistance, viscous solutions, or dense gluteal fascia.",
  },
  {
    name: "Tip / Nozzle Adapter",
    function:
      "The distal tapered aperture that connects to a needle hub, IV port, extension tubing, or catheter connection.",
    clinicalTip:
      "Available as concentric (centered) or eccentric (offset). Eccentric tips allow shallow, near-parallel vascular entry and smooth aspiration.",
  },
  {
    name: "Dead Space (Residual Volume)",
    function:
      "The small residual fluid volume remaining inside the nozzle and needle hub after the plunger has been completely depressed.",
    clinicalTip:
      "Low dead space (LDS) syringes minimize drug loss, which is critical during expensive biologic infusions, pediatric doses, and mRNA vaccination.",
  },
];

// --- 14 CLINICAL SYRINGE TYPES ---
const SYRINGE_DATA = [
  {
    id: "disposable",
    name: "Disposable Syringe (Standard 2-Part / 3-Part)",
    category: "General Practice",
    capacities: "1 mL, 2 mL, 3 mL, 5 mL, 10 mL, 20 mL",
    tipType: "Luer Lock or Luer Slip (Concentric)",
    compatibleGauges: "18G – 25G (Interchangeable)",
    primaryUses:
      "Routine Intramuscular (IM), Subcutaneous (SC), and Intravenous (IV) drug injections, antibiotic reconstitution, blood draws.",
    features:
      "Single-use EO gas sterilized; available with or without a latex-free rubber piston seal (3-part vs 2-part design).",
    clinicalNote:
      "3-part syringes offer smooth, stutter-free gliding necessary for precise titrations.",
  },
  {
    id: "insulin",
    name: "Insulin Syringe (U-100 / U-40)",
    category: "Specialized & Diabetology",
    capacities: "0.3 mL (30 units), 0.5 mL (50 units), 1.0 mL (100 units)",
    tipType: "Fixed Integrated Needle (Zero Dead Space)",
    compatibleGauges: "29G, 30G, 31G (lengths: 6 mm, 8 mm, 12.7 mm)",
    primaryUses:
      "Daily self-administration of regular, NPH, and analog insulin; micro-dosing growth hormone.",
    features:
      "Calibrated strictly in Units (U-100 = 100 units per mL) rather than metric mL. Welded ultra-fine needle eliminates dead-space wastage.",
    clinicalNote:
      "Never confuse U-100 with veterinary U-40 syringes. Mixing them up causes a 2.5-fold dosing error resulting in severe hypoglycemia.",
  },
  {
    id: "tuberculin",
    name: "Tuberculin Syringe (TB Syringe)",
    category: "Diagnostic & Allergy",
    capacities: "1.0 mL (Graduated in 0.01 mL increments)",
    tipType: "Luer Slip or Integrated Fixed Needle",
    compatibleGauges: '26G – 27G (3/8" to 1/2")',
    primaryUses:
      "Mantoux tuberculin skin test (PPD 0.1 mL injection), intradermal allergen testing, pediatric micro-dose anesthetics.",
    features:
      "Narrow bore barrel allowing precise measurement down to one-hundredth of a milliliter (0.01 mL).",
    clinicalNote:
      "Bevel must point upward at a 10°–15° angle to create the classic 6–10 mm pale intradermal wheal.",
  },
  {
    id: "luer-lock",
    name: "Luer Lock Syringe",
    category: "Safety & Connection",
    capacities: "1 mL, 3 mL, 5 mL, 10 mL, 20 mL, 30 mL, 50/60 mL",
    tipType: "Threaded Double-Helix Locking Collar",
    compatibleGauges: "All hubbed needles (14G – 30G), IV cannula ports",
    primaryUses:
      "High-pressure injections, viscous drug delivery, IV piggyback connections, central line medication pushes.",
    features:
      "Needle twists into the collar and locks securely. Prevents needle pop-off caused by backpressure or viscous fluids.",
    clinicalNote:
      "Mandatory when injecting dense hormonal oils, contrast agents, or chemotherapy where toxic splashback is hazardous.",
  },
  {
    id: "luer-slip",
    name: "Luer Slip Syringe",
    category: "Rapid Access & Phlebotomy",
    capacities: "1 mL, 2 mL, 5 mL, 10 mL, 20 mL",
    tipType: "Friction-Fit 6% Tapered Male Tip",
    compatibleGauges: "All standard female hub needles (18G – 23G)",
    primaryUses:
      "Routine diagnostic phlebotomy, rapid needle detachment, skin preparation washes, aspiration of superficial cysts.",
    features:
      "Needle slides on and stays via smooth friction fit. Enables rapid one-handed ejection into sharps disposals.",
    clinicalNote:
      "Avoid high-pressure injections; excessive forward plunger force can dislodge the needle, spraying medication.",
  },
  {
    id: "oral-enteral",
    name: "Oral / Enteral Syringe (ENFit Standard)",
    category: "Pediatric & Gastrointestinal",
    capacities: "1 mL, 2.5 mL, 5 mL, 10 mL, 20 mL, 60 mL",
    tipType: "Non-Luer Enteral Tip (Purple / Amber Colored Tip)",
    compatibleGauges: "Incompatible with hypodermic needles (Safety Standard)",
    primaryUses:
      "Oral liquid syrup dosing in pediatric/geriatric patients, feeding tube medication delivery (NG / PEG tubes).",
    features:
      "Physically incompatible with standard IV Luer connections (ISO 80369-3 ENFit). Vivid purple or amber coloring.",
    clinicalNote:
      "Engineered specifically to prevent fatal medical errors where oral liquid suspensions are accidentally injected into an IV line.",
  },
  {
    id: "spinal",
    name: "Spinal / Lumbar Puncture Syringe",
    category: "Anesthesia & Neurology",
    capacities: "2 mL, 3 mL, 5 mL (Low dead space)",
    tipType:
      "Specialized Luer Lock (Non-reactive glass or ultra-clear plastic)",
    compatibleGauges:
      "22G, 25G, 27G Quincke or Whitacre (Pencil-point) Spinal Needles",
    primaryUses:
      "Spinal subarachnoid anesthesia, diagnostic lumbar punctures, intrathecal chemotherapy, CSF manometry.",
    features:
      "Ultra-low friction plunger with crystal clarity to detect immediate CSF flashback and fluid crystal shimmer.",
    clinicalNote:
      "Check spinal needle stylet alignment before insertion to prevent introducing epidermal tissue cores into the subarachnoid space.",
  },
  {
    id: "auto-disable",
    name: "Auto-Disable (AD) Syringe",
    category: "Public Health & Immunization",
    capacities: "0.1 mL, 0.5 mL, 1.0 mL",
    tipType: "Fixed Integrated Needle with Internal Locking Ring",
    compatibleGauges: "23G – 25G (Vaccine standard)",
    primaryUses:
      "Mass immunization programs (WHO/UNICEF standard), COVID-19, BCG, Hepatitis B, Measles vaccines.",
    features:
      "Internal locking mechanism automatically snaps the plunger or retracts the needle after a single injection stroke.",
    clinicalNote:
      "Completely prevents syringe reuse, cross-contamination, and blood-borne virus transmission (HIV, HBV, HCV).",
  },
  {
    id: "pre-filled",
    name: "Pre-Filled Syringe (PFS)",
    category: "Emergency & Anticoagulation",
    capacities: "0.2 mL to 10 mL (Factory unit dose)",
    tipType: "Integrated needle with rubber shield or Luer Lock cap",
    compatibleGauges: "Pre-attached micro-needle (typically 27G – 29G)",
    primaryUses:
      "Low-molecular-weight heparin (Enoxaparin / Clexane), emergency epinephrine, biologic monoclonal antibodies, vaccines.",
    features:
      "Pre-loaded with exact weight-adjusted drug volume and a pre-calculated nitrogen air bubble.",
    clinicalNote:
      "Do NOT expel the small air bubble before injecting enoxaparin; the bubble acts as an air lock sealing the drug in the subcutaneous layer.",
  },
  {
    id: "heparin",
    name: "Heparinized Syringe (ABG Syringe)",
    category: "Critical Care & Pulmonology",
    capacities: "1 mL, 2 mL, 3 mL",
    tipType: "Luer Lock with Venting Filter Cap",
    compatibleGauges: "22G – 25G (Short bevel with safety cover)",
    primaryUses:
      "Arterial Blood Gas (ABG) sampling from the radial, brachial, or femoral artery; acid-base/lactate assessment.",
    features:
      "Pre-coated internally with spray-dried, balanced lithium or calcium heparin powder to prevent sample coagulation without diluting electrolytes.",
    clinicalNote:
      "After arterial draw, expel air bubbles immediately and cap with the anaerobic seal. Roll the syringe between palms to ensure complete heparin mixing.",
  },
  {
    id: "safety",
    name: "Safety Syringe (Retractable / Shielded)",
    category: "Occupational Safety",
    capacities: "1 mL, 3 mL, 5 mL, 10 mL",
    tipType: "Integrated Spring-Loaded Retraction or Sliding Sheath",
    compatibleGauges: "21G – 25G",
    primaryUses:
      "Hospital-wide injections, high-risk patient phlebotomy (HIV, Hepatitis), emergency department trauma care.",
    features:
      "Spring-activated mechanism pulls the sharp needle back into the plunger barrel upon full stroke, or has a manual hinged locking guard.",
    clinicalNote:
      "Complies with OSHA and sharps injury protection regulations, reducing accidental needle-stick injuries by up to 90%.",
  },
  {
    id: "perfusion",
    name: "Perfusion / Syringe Pump Syringe",
    category: "Critical Care & Anesthesia",
    capacities: "50 mL / 60 mL",
    tipType: "Luer Lock (Centered or Eccentric)",
    compatibleGauges: "Dedicated extension tubing / 3-way stopcock connection",
    primaryUses:
      "Continuous micro-infusion pumps (ICU syringe drivers): inotropes (Noradrenaline, Dobutamine), sedation (Propofol), insulin.",
    features:
      "Heavy-duty, ultra-smooth uniform polypropylene walls designed to withstand mechanical motorized pump force without warping.",
    clinicalNote:
      "Always calibrate the syringe driver pump to the exact manufacturer brand loaded (e.g., BD, Braun, Terumo) to maintain accurate flow rates.",
  },
  {
    id: "irrigation",
    name: "Irrigation Syringe (Catheter / Piston Tip)",
    category: "Surgical & Wound Care",
    capacities: "50 mL, 60 mL, 100 mL",
    tipType: "Long Tapered Catheter Tip (or Bulb / Toomey Tip)",
    compatibleGauges:
      "Non-needle; connects directly to Foley catheters and wound drains",
    primaryUses:
      "Wound debridement, surgical cavity flushing, urinary Foley catheter bladder washouts, enteral feeding tube unclogging.",
    features:
      "Elongated, wide-bore tapered nozzle that fits into catheter funnels and large surgical evacuation tubes.",
    clinicalNote:
      "Use gentle, steady piston pressure during wound irrigation to avoid forcing debris deeper into tissue planes.",
  },
  {
    id: "eccentric",
    name: "Eccentric Tip Syringe",
    category: "Phlebotomy & Vascular",
    capacities: "10 mL, 20 mL, 50 mL",
    tipType: "Off-Center / Lateral Luer Slip Tip",
    compatibleGauges: "18G – 22G",
    primaryUses:
      "Large-volume arterial/venous blood sampling, superficial vein cannulation, fluid aspiration parallel to skin surface.",
    features:
      "The tip is positioned flush against the outer rim of the barrel rather than centered.",
    clinicalNote:
      "Allows the needle to enter veins at an extremely shallow angle without the barrel bumping into the patient's skin.",
  },
];

const CATEGORIES = [
  "All",
  "General Practice",
  "Specialized & Diabetology",
  "Safety & Connection",
  "Critical Care & Pulmonology",
  "Diagnostic & Allergy",
  "Pediatric & Gastrointestinal",
];

export default function SyringesPage() {
  const [activeTab, setActiveTab] = useState("types"); // "types" | "anatomy" | "tips"
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  const filteredData = useMemo(() => {
    return SYRINGE_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.capacities.toLowerCase().includes(q) ||
        item.tipType.toLowerCase().includes(q) ||
        item.primaryUses.toLowerCase().includes(q) ||
        item.compatibleGauges.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Ambient Lighting */}
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

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-3">
              <Syringe className="w-3.5 h-3.5" /> Clinical Inventory &bull; Item
              #03
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Syringes: Clinical Engineering & Codex
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Standard volumetric capacities (0.1 mL to 100 mL), anatomical
              components, nozzle locking mechanisms, and clinical
              specializations (Insulin, ABG Heparin, Auto-Disable, ENFit
              Enteral, and Syringe Driver Perfusion).
            </p>
          </div>

          {/* Quick Stat Badges */}
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Total Types
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                {SYRINGE_DATA.length} Standardized
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Safety Spec
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                ISO 7886
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="inline-flex p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md overflow-x-auto">
            <button
              onClick={() => {
                setActiveTab("types");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "types"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Syringe className="w-4 h-4" />
              <span>Syringe Variations ({SYRINGE_DATA.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("anatomy");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "anatomy"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Anatomical Parts ({SYRINGE_PARTS.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("tips");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "tips"
                  ? "bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>Tip & Connection Types</span>
            </button>
          </div>

          {/* Search Field */}
          {activeTab === "types" && (
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search syringe, capacity (e.g. 50mL), use..."
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
          )}
        </div>

        {/* --- VIEW 1: SYRINGE TYPES --- */}
        {activeTab === "types" && (
          <div className="mt-6 space-y-6">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
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

            {/* Syringe Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredData.map((item) => (
                <div
                  key={item.id}
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
                        onClick={() => copyToClipboard(item.name, item.id)}
                        title="Copy syringe name"
                        className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-teal-300 hover:bg-slate-800/80 transition-colors shrink-0"
                      >
                        {copiedId === item.id ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Specification Box */}
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 my-3 font-mono text-xs space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Capacities:</span>
                        <span className="font-bold text-amber-300 text-right">
                          {item.capacities}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Tip Style:</span>
                        <span className="text-slate-200 text-right">
                          {item.tipType}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Gauges / Fit:</span>
                        <span className="text-teal-300 text-right">
                          {item.compatibleGauges}
                        </span>
                      </div>
                    </div>

                    {/* Features & Description */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {item.features}
                    </p>

                    {/* Primary Tests / Uses */}
                    <div className="text-[11px] text-slate-400 mb-3">
                      <strong className="text-slate-300 block mb-0.5 font-mono uppercase text-[10px]">
                        Target Uses & Clinical Scope:
                      </strong>
                      {item.primaryUses}
                    </div>
                  </div>

                  {/* Clinical Alert Note */}
                  <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                    <AlertCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item.clinicalNote}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW 2: ANATOMICAL PARTS --- */}
        {activeTab === "anatomy" && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {SYRINGE_PARTS.map((part, index) => (
              <div
                key={part.name}
                className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-6 h-6 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono text-xs flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {part.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {part.function}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 p-2.5 rounded-xl bg-slate-950/60 text-xs">
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-0.5">
                    Clinical Best Practice:
                  </span>
                  <span className="text-slate-300">{part.clinicalTip}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- VIEW 3: TIP & CONNECTION TYPES --- */}
        {activeTab === "tips" && (
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/50 backdrop-blur-md">
                <div className="flex items-center gap-2 text-teal-400 mb-2">
                  <Lock className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">
                    Luer Lock Tip
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Equipped with an internal threaded collar. The needle hub is
                  twisted 90 degrees clockwise to lock securely.
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1 text-slate-300">
                  <div>
                    <strong>Best For:</strong> High-viscosity injections,
                    chemotherapy, central venous access.
                  </div>
                  <div className="text-teal-300">
                    <strong>Safety Advantage:</strong> Eliminates needle pop-off
                    under hydraulic backpressure.
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <Unlock className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">
                    Luer Slip Tip
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  A smooth 6% tapered conical fitting that stays attached via
                  outward friction tension.
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1 text-slate-300">
                  <div>
                    <strong>Best For:</strong> Quick diagnostic phlebotomy,
                    superficial intramuscular shots.
                  </div>
                  <div className="text-amber-300">
                    <strong>Safety Alert:</strong> Not recommended for thick
                    hormonal oils or forceful pushes.
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Droplets className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">
                    Catheter / Piston Tip
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  An elongated, wide-bore tapered plastic nozzle (~25 mm long)
                  lacking needle locking threads.
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1 text-slate-300">
                  <div>
                    <strong>Best For:</strong> Urinary Foley catheter flushing,
                    irrigation, G-tube feeding.
                  </div>
                  <div className="text-blue-300">
                    <strong>Connection:</strong> Plugs directly into flexible
                    silicone catheter funnels.
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Sliders className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">
                    Eccentric Tip
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  The nozzle is placed off-center, flush along the lower
                  curvature of the barrel cylinder.
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1 text-slate-300">
                  <div>
                    <strong>Best For:</strong> Shallow vascular cannulation,
                    blood draws, thoracic aspiration.
                  </div>
                  <div className="text-purple-300">
                    <strong>Clinical Advantage:</strong> Keeps needle parallel
                    to skin without barrel tilt.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredData.length === 0 && activeTab === "types" && (
          <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl mt-6">
            <Syringe className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-300 mb-1">
              No matching syringe types found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Try searching by capacity (e.g., "50 mL", "1 mL"), type
              ("insulin", "heparin"), or feature.
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
