"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Droplets,
  HeartPulse,
  Activity,
  Layers,
  ShieldAlert,
  Sliders,
  Filter,
  CheckCircle2,
  Copy,
  Info,
  Beaker,
  AlertTriangle,
} from "lucide-react";

// --- IV SET ANATOMICAL PARTS ---
const IV_PARTS = [
  {
    name: "Perforator Spike",
    description:
      "A rigid, tapered plastic needle designed to puncture the rubber bung or septum of the fluid container with minimal coring.",
    function: "Establishes primary fluid access from bottle or bag.",
  },
  {
    name: "Air Vent with Filter",
    description:
      "A capped breathing channel fitted with a 0.2–1.2 µm hydrophobic, bacteria-retentive membrane located adjacent to the spike.",
    function:
      "Equalizes negative pressure inside rigid glass or semi-rigid plastic bottles so fluid drains smoothly.",
  },
  {
    name: "Drip Chamber (Micro / Macro)",
    description:
      "A flexible, transparent cylindrical reservoir calibrated to count drops per minute (gtt/min) and visually inspect flow.",
    function:
      "Prevents air ingress into the downstream tubing by trapping buoyant air bubbles.",
  },
  {
    name: "Fluid Particle Filter",
    description:
      "A disc filter (typically 15 µm pore rating) embedded at the bottom floor of the drip chamber.",
    function:
      "Traps micro-particulates, precipitation flakes, and glass shards before they enter the venous line.",
  },
  {
    name: "PVC / Non-DEHP Infusion Tubing",
    description:
      "Kink-resistant, transparent medical-grade flexible tubing (typically 150–200 cm length, ~3 mm internal diameter).",
    function:
      "Transports sterile fluid from the chamber to the patient access site.",
  },
  {
    name: "Roller Clamp (Flow Regulator)",
    description:
      "A calibrated plastic clamp housing a wheel mechanism that compresses or releases the lumen of the tubing.",
    function:
      "Allows manual fine-tuning and rate throttling of the infusion speed or immediate full occlusion.",
  },
  {
    name: "Y-Injection Port / Flashbulb Site",
    description:
      "A self-sealing latex or polyisoprene port placed near the terminal end of the line.",
    function:
      "Permits intermittent needleless or needle-based IV push bolus drug injections without interrupting primary fluid flow.",
  },
  {
    name: "Luer-Lock / Luer-Slip Terminal Connector",
    description:
      "A male threaded or tapered plastic adapter capped with a sterile protective shroud.",
    function:
      "Connects securely to the IV cannula hub, three-way stopcock, or extension line.",
  },
];

// --- IV SET TYPES ---
const IV_TYPES = [
  {
    id: "macro",
    name: "Macro Drip Set",
    dripFactor: "10, 15, or 20 drops/mL (gtt/mL)",
    target:
      "Adult resuscitation, rapid rehydration, standard maintenance infusions",
    features:
      "Large-caliber orifice inside the drip chamber delivering heavy fluid volumes quickly.",
    clinicalNote:
      "Calculate flow rate: (Total Volume in mL × Drip Factor) ÷ Total Time in minutes = drops/min.",
    category: "General Infusion",
  },
  {
    id: "micro",
    name: "Micro Drip Set (Pediatric Line)",
    dripFactor: "60 drops/mL (gtt/mL) (Rule: 1 gtt/min = 1 mL/hr)",
    target:
      "Pediatric, neonatal, intensive care (ICU), and precise medication titrations",
    features:
      "Equipped with a micro-capillary stainless steel metal needle dropper inside the chamber.",
    clinicalNote:
      "Eliminates mental conversion arithmetic: counting 30 drops/minute equals exactly 30 mL per hour.",
    category: "Precision & Pediatric",
  },
  {
    id: "vented",
    name: "Vented IV Set",
    dripFactor: "15 – 20 gtt/mL",
    target: "Rigid glass bottles and hard polyethylene containers",
    features:
      "Includes an integrated air vent port with a hydrophobic anti-bacterial filter cap.",
    clinicalNote:
      "Open vent cap when using glass bottles. If using collapsible soft bags, keep vent cap closed to prevent leakage.",
    category: "Container Matching",
  },
  {
    id: "non-vented",
    name: "Non-Vented IV Set",
    dripFactor: "15 – 20 gtt/mL",
    target: "Collapsible plastic infusion bags (PVC, Polyolefin, EVA)",
    features:
      "No air vent. Fluid drains as atmospheric pressure collapses the external flexible walls of the bag.",
    clinicalNote:
      "Never use with rigid glass bottles; a vacuum lock will form and completely halt fluid delivery.",
    category: "Container Matching",
  },
  {
    id: "burette",
    name: "Burette Set (Volumetric Infusion / Buretrol)",
    dripFactor: "60 gtt/mL",
    target:
      "Pediatric patients, neonates, strict fluid restriction, intermittent drug dosing",
    features:
      "Features a 100 mL or 150 mL calibrated graduated plastic cylinder with automatic shut-off floating valve.",
    clinicalNote:
      "Prevents accidental massive over-infusion (fluid overload); limits fluid exposure to only what is measured into the chamber.",
    category: "Specialized",
  },
  {
    id: "photophore",
    name: "Light-Resistant / Amber (Photophore) Set",
    dripFactor: "20 or 60 gtt/mL",
    target:
      "Photosensitive, UV-labile drugs (Nitroprusside, Amphotericin B, Dacarbazine, Vitamin B complex)",
    features:
      "Tubing and chamber extruded from amber/opaque UV-blocking polymer (shields 290–450 nm wavelength light).",
    clinicalNote:
      "Prevents photo-degradation, photo-oxidation, and loss of therapeutic potency during administration.",
    category: "Specialized",
  },
  {
    id: "disposable",
    name: "Standard Disposable Gravity Set",
    dripFactor: "20 gtt/mL",
    target:
      "General ward short-stay infusions, normal saline, dextrose replacements",
    features:
      "Sterile single-use EO (Ethylene Oxide) sterilized PVC tubing meant for routine disposal after 72–96 hours.",
    clinicalNote:
      "Discard immediately if line integrity is compromised, clouding appears, or phlebitis occurs.",
    category: "General Infusion",
  },
];

// --- BT SET DATA ---
const BT_DETAILS = {
  definition:
    "A Blood Transfusion (BT) Set is a specialized parenteral administration device engineered to infuse whole blood, packed red blood cells (PRBCs), fresh frozen plasma (FFP), and platelets safely into human venous circulation while filtering micro-aggregates and cellular debris.",
  keyDifference:
    "Standard IV sets use a 15 µm particle filter that instantly clogs or shears erythrocytes. BT sets integrate a wide-bore 170–200 µm cylindrical mesh screen filter and a wide-bore drip chamber specifically designed to preserve red cell membrane integrity.",
  parts: [
    {
      name: "Wide-Bore Puncture Spike",
      detail:
        "Large lumen puncture spike to accommodate the thick viscosity of packed red blood cells without mechanical hemolyzation.",
    },
    {
      name: "Dual / Large-Volume Drip Chamber",
      detail:
        "Larger chamber volume (often dual-chamber) allowing blood level to submerge the filter completely, minimizing turbulence and mechanical trauma to RBCs.",
    },
    {
      name: "170–200 Micron Mesh Screen Filter",
      detail:
        "The hallmark defining component. Traps blood clots, fibrin strands, cellular debris, and platelet-leukocyte aggregates before they enter the patient's bloodstream.",
    },
    {
      name: "Kink-Resistant Wide Bore Tubing",
      detail:
        "Higher internal diameter tubing (~4 mm) to reduce shear stress and peripheral resistance during rapid transfusion.",
    },
    {
      name: "Heavy-Duty Roller Clamp",
      detail:
        "Calibrated for high frictional control against viscous cellular blood products.",
    },
    {
      name: "Latex / Polyisoprene Injection Site & Luer Lock",
      detail:
        "Positioned for emergency saline flushing (0.9% Normal Saline ONLY).",
    },
  ],
  types: [
    {
      title: "Single Chamber BT Set",
      subtitle: "Standard single line",
      desc: "Standard blood line featuring a single 170–200 µm mesh cylinder within one large drip chamber. Most common across general inpatient wards for 1–2 unit transfusions.",
    },
    {
      title: "Y-Type / Dual Lead BT Set",
      subtitle: "Two spikes + Dual leads",
      desc: "Features two separate spikes converging into one chamber: one arm for 0.9% Normal Saline (priming & flushing) and one arm for the blood bag. Allows rapid line priming and post-transfusion clearance without disconnecting lines.",
    },
    {
      title: "Microaggregate BT Filter Set",
      subtitle: "20–40 Micron Filter",
      desc: "Ultra-fine secondary screen used in massive transfusion protocols (MTP), cardiac surgery, or pulmonary-compromised patients to prevent micro-emboli accumulation in the pulmonary microvasculature.",
    },
    {
      title: "Pressure Infusion BT Set",
      subtitle: "Rapid resuscitation set",
      desc: "Reinforced wall tubing with integrated hand pump or compatible with external pneumatic pressure infusers for active trauma and intraoperative hemoperitoneum.",
    },
  ],
  goldenRules: [
    "Prime ONLY with 0.9% Normal Saline (0.9% NaCl). NEVER prime with Dextrose (causes hemolysis) or Ringer's Lactate (calcium causes clotting).",
    "Change the BT set every 4 hours or after every 2 units of blood to prevent bacterial proliferation and filter saturation.",
    "Transfusion must start within 30 minutes of removing blood from the cold chain (2–6°C) and finish within 4 hours.",
  ],
};

export default function IVSetPage() {
  const [activeTab, setActiveTab] = useState("iv-types"); // "iv-types" | "iv-parts" | "bt-set"
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedText, setCopiedText] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const filteredIVTypes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return IV_TYPES;
    return IV_TYPES.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.target.toLowerCase().includes(q) ||
        item.dripFactor.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const filteredIVParts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return IV_PARTS;
    return IV_PARTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.function.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

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
              Item #02
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              IV Infusion Sets & Blood Transfusion (BT) Sets
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Complete clinical index of intravenous delivery apparatus:
              anatomical engineering, drip calibrations (Macro 20 vs Micro 60
              gtt/mL), specialized lines (Burette, Photophore), and high-caliber
              170–200 µm Blood Transfusion apparatus.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                IV Mesh Filter
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                15 Micron
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                BT Mesh Filter
              </span>
              <span className="text-xl font-bold text-rose-400 font-mono">
                170–200 µm
              </span>
            </div>
          </div>
        </div>

        {/* Main Tab Controller */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="inline-flex p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md overflow-x-auto">
            <button
              onClick={() => {
                setActiveTab("iv-types");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "iv-types"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>Types of IV Sets ({IV_TYPES.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("iv-parts");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "iv-parts"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Main Anatomical Parts ({IV_PARTS.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("bt-set");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "bt-set"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <HeartPulse className="w-4 h-4" />
              <span>BT (Blood Transfusion) Set</span>
            </button>
          </div>

          {/* Search Box */}
          {activeTab !== "bt-set" && (
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search set name, factor, or function..."
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

        {/* --- VIEW 1: TYPES OF IV SETS --- */}
        {activeTab === "iv-types" && (
          <div className="mt-8">
            {/* Quick Macro vs Micro Callout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-500/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-teal-300 uppercase">
                    Macro Drip Calibration
                  </span>
                  <span className="text-xs font-mono text-teal-200 font-bold">
                    10 / 15 / 20 gtt/mL
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Standard line for adult resuscitation. Requires fewer, larger
                  droplets to equal 1 mL. Used for saline, ringers, and rapid
                  volume.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-amber-300 uppercase">
                    Micro Drip Calibration
                  </span>
                  <span className="text-xs font-mono text-amber-200 font-bold">
                    60 gtt/mL (1 gtt/min = 1 mL/hr)
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Contains a fine internal stainless needle inside the chamber.
                  Formulates small droplets for pediatric security and inotropic
                  drug titration.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredIVTypes.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700/80 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 border border-slate-700">
                          {item.category}
                        </span>
                        <h2 className="text-base font-bold text-white mt-2 group-hover:text-teal-200 transition-colors">
                          {item.name}
                        </h2>
                      </div>

                      <button
                        onClick={() => copyToClipboard(item.name)}
                        title="Copy name"
                        className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-teal-300 hover:bg-slate-800/80 transition-colors shrink-0"
                      >
                        {copiedText === item.name ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Drip Factor Badge */}
                    <div className="my-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 font-mono text-xs flex items-center justify-between">
                      <span className="text-slate-400">Drip Factor:</span>
                      <span className="font-bold text-amber-300">
                        {item.dripFactor}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {item.features}
                    </p>

                    <div className="text-[11px] text-slate-400 mb-3">
                      <strong className="text-slate-300 block mb-0.5">
                        Primary Target:
                      </strong>
                      {item.target}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                    <Info className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item.clinicalNote}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW 2: ANATOMICAL PARTS --- */}
        {activeTab === "iv-parts" && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredIVParts.map((part, index) => (
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
                    {part.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 p-2.5 rounded-xl bg-slate-950/60 text-xs">
                  <span className="text-[10px] font-mono uppercase text-teal-400 font-bold block mb-0.5">
                    Operational Clinical Function:
                  </span>
                  <span className="text-slate-300">{part.function}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- VIEW 3: BLOOD TRANSFUSION (BT) SET --- */}
        {activeTab === "bt-set" && (
          <div className="mt-8 space-y-8">
            {/* BT Header Banner */}
            <div className="p-6 rounded-2xl border border-rose-500/30 bg-gradient-to-r from-rose-500/10 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                      Blood Transfusion Protocol
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 border border-rose-800 text-rose-300">
                      Standard: 170–200 µm
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    What is a Blood Transfusion (BT) Set?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    {BT_DETAILS.definition}
                  </p>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-rose-500/30 text-xs text-rose-200">
                    <strong className="text-white block mb-0.5">
                      Critical Filter Distinction:
                    </strong>
                    {BT_DETAILS.keyDifference}
                  </div>
                </div>
              </div>
            </div>

            {/* BT Set Types Grid */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-rose-400" /> Types of Blood
                Transfusion Sets
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {BT_DETAILS.types.map((type) => (
                  <div
                    key={type.title}
                    className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest block mb-1">
                        {type.subtitle}
                      </span>
                      <h4 className="text-sm font-bold text-white mb-2">
                        {type.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {type.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Parts of BT Set */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-rose-400" /> Anatomical Parts of
                a BT Set
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {BT_DETAILS.parts.map((p) => (
                  <div
                    key={p.name}
                    className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/60"
                  >
                    <h5 className="text-xs font-bold font-mono text-rose-300 uppercase mb-1">
                      {p.name}
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Golden Clinical Rules for BT */}
            <div className="p-5 rounded-2xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-3 text-amber-300 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" /> Golden Clinical Rules for
                Blood Transfusion Lines
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                {BT_DETAILS.goldenRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">&bull;</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
