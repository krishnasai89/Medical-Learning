"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Copy,
  CheckCircle2,
  Wind,
  Activity,
  Layers,
  AlertCircle,
  Gauge,
  Flame,
  ShieldAlert,
  Sliders,
  HelpCircle,
  Eye,
  HeartPulse,
  Radio,
} from "lucide-react";

const OXYGEN_EQUIPMENT_DATA = [
  // --- OXYGEN DELIVERY INTERFACES & MASKS ---
  {
    name: "Simple Face Mask",
    category: "Oxygen Mask",
    flowRate: "5 – 10 L/min",
    fio2: "35% – 50%",
    features:
      "Clear plastic mask body with lateral exhalation perforations, adjustable aluminum nose clip, and elastic head strap. Operates as an open oxygen reservoir.",
    uses: "Mild-to-moderate hypoxemia, mouth-breathing patients, post-anesthesia recovery room emergence.",
    clinicalTip:
      "CRITICAL: Never run below 5 L/min. Lower flow rates cause expired carbon dioxide accumulation inside the mask volume, leading to hypercapnic rebreathing.",
  },
  {
    name: "Venturi Mask (Air-Entrainment Mask)",
    category: "Oxygen Mask",
    flowRate: "2 – 15 L/min (Calibrated by nozzle insert)",
    fio2: "24%, 28%, 31%, 35%, 40%, 50% (Fixed precise delivery)",
    features:
      "Color-coded, interchangeable plastic venturi valves based on Bernoulli's principle. High-velocity oxygen drags in a predictable ratio of room air through entrainment ports.",
    uses: "COPD patients with chronic hypercapnia where precise FiO2 titration is vital to prevent blunting the hypoxic respiratory drive.",
    clinicalTip:
      "Never allow blankets or clothing to drape over the air-entrainment window ports; blocking them increases oxygen concentration unpredictably.",
  },
  {
    name: "Non-Rebreather Mask (NRBM)",
    category: "Oxygen Mask",
    flowRate: "10 – 15 L/min (Must keep reservoir 2/3 inflated)",
    fio2: "60% – 90% (Approaching 95% with an airtight seal)",
    features:
      "Equipped with a 1-liter plastic reservoir bag and two one-way flutter valves: one between bag and mask, and one on the lateral exhalation port.",
    uses: "Acute severe hypoxemic respiratory distress, carbon monoxide poisoning, acute pulmonary edema, pre-oxygenation before rapid sequence intubation (RSI).",
    clinicalTip:
      "Pre-fill the reservoir bag with oxygen before placing it over the patient's face. If the bag collapses completely during inspiration, increase the flow rate immediately.",
  },
  {
    name: "Partial Rebreather Mask",
    category: "Oxygen Mask",
    flowRate: "8 – 12 L/min",
    fio2: "50% – 70%",
    features:
      "Similar to NRBM but omits the one-way valve between the reservoir bag and the mask, allowing the patient to re-breathe the first 1/3 of expired gas (anatomical dead space rich in O2).",
    uses: "Patients needing high concentrations of oxygen when a full non-rebreather mask with functional valves is unavailable.",
    clinicalTip:
      "Keep flow rate high enough to prevent bag collapse beyond half its volume during inhalation to prevent alveolar CO2 retention.",
  },
  {
    name: "Oxygen Nebulizer Mask",
    category: "Oxygen Mask",
    flowRate: "6 – 8 L/min (Driven by compressed O2 source)",
    fio2: "Variable (~28% – 40%)",
    features:
      "Integrated medication cup with micro-jet capillary nozzle designed to atomize liquid bronchodilators into aerosolized particles (1–5 µm mass median diameter).",
    uses: "Acute bronchospasm in bronchial asthma, acute exacerbation of COPD, post-extubation stridor, croup.",
    clinicalTip:
      "Maintain a gas flow of 6–8 L/min; flow below 6 L/min fails to generate adequate aerosol particle sizes for alveolar deposition.",
  },
  {
    name: "Simple Nasal Mask",
    category: "Oxygen Mask",
    flowRate: "Continuous flow titrated to airway pressure (2 – 15 L/min)",
    fio2: "21% – 100% (Blender or circuit dependent)",
    features:
      "Soft silicone or gel cushion that seals over the external nose only. Preserves speech and oral access.",
    uses: "Nocturnal obstructive sleep apnea (OSA), mild nocturnal hypoventilation, non-mouth breathers requiring CPAP.",
    clinicalTip:
      "Ineffective if the patient mouth-breathes, as air leaks will vent out of the oral cavity, dropping airway pressure.",
  },
  {
    name: "High-Flow Oxygen Mask (OxyMask™)",
    category: "Oxygen Mask",
    flowRate: "1 – 15+ L/min (Broad flow span)",
    fio2: "24% – 90%",
    features:
      "Open-architecture diffuser technology with large lateral openings. Directs a focused jet of oxygen toward the nose and mouth without retaining carbon dioxide.",
    uses: "Patients who require rapid FiO2 adjustment without device changes; claustrophobic patients; allows drinking with a straw and coughing.",
    clinicalTip:
      "Eliminates CO2 rebreathing even at very low flow rates (1–2 L/min), making it safer than traditional closed simple face masks.",
  },
  {
    name: "CPAP Mask (Continuous Positive Airway Pressure)",
    category: "Oxygen Mask",
    flowRate:
      "Delivers 5 – 15 cmH2O continuous positive end-expiratory pressure",
    fio2: "21% – 100% via mechanical blender",
    features:
      "Rigid plastic shell with inflatable dual-wall silicone perimeter seal, forehead stabilization spacer, and 4-point headgear harness.",
    uses: "Acute cardiogenic pulmonary edema, atelectasis, severe obstructive sleep apnea (OSA), acute hypoxic lung collapse.",
    clinicalTip:
      "Splints the alveoli open during both inspiration and expiration, recruiting functional residual capacity (FRC) and improving gas exchange.",
  },
  {
    name: "BiPAP Mask (Bilevel Positive Airway Pressure)",
    category: "Oxygen Mask",
    flowRate: "Dual-pressure delivery: IPAP (8–20 cmH2O) + EPAP (4–8 cmH2O)",
    fio2: "21% – 100%",
    features:
      "Full-face or oronasal seal with anti-asphyxia valve and port for external oxygen bleeding. Manages inspiratory and expiratory pressure differentials.",
    uses: "Hypercapnic respiratory failure (COPD exacerbations, ALS, obesity-hypoventilation syndrome), acute cardiogenic pulmonary edema.",
    clinicalTip:
      "IPAP augments tidal volume and clears CO2; EPAP prevents alveolar collapse and optimizes oxygenation.",
  },
  {
    name: "Full Face Mask (Oronasal / Total Face)",
    category: "Oxygen Mask",
    flowRate: "Circuit-driven by ventilator / NIV turbine",
    fio2: "21% – 100%",
    features:
      "Seals either over both the nose and mouth or over the entire perimeter of the face (eyes, nose, mouth), avoiding pressure on the nasal bridge.",
    uses: "Acute respiratory failure in obligate mouth-breathers, patients with nasal skin breakdown, emergency non-invasive ventilation.",
    clinicalTip:
      "Equipped with quick-release pull cords to enable immediate removal in the event of vomiting, preventing pulmonary aspiration.",
  },
  {
    name: "Tracheostomy Mask / Collar (T-Piece / Venturi Collar)",
    category: "Oxygen Mask",
    flowRate: "8 – 12 L/min",
    fio2: "35% – 60%",
    features:
      "Semi-rigid curved neck cup with an adjustable elastic neck band and a wide-bore 22 mm corrugated tubing connector.",
    uses: "Spontaneously breathing patients with a tracheostomy tube or laryngectomy stoma requiring supplemental oxygen.",
    clinicalTip:
      "MANDATORY: High-humidity active aerosolization must be used. Cold, dry gas directly entering a tracheostomy causes dry mucus crusting and fatal tracheal obstruction.",
  },
  {
    name: "Nasal Cannula (Nasal Prongs)",
    category: "Oxygen Mask",
    flowRate: "1 – 6 L/min",
    fio2: "24% – 44% (~4% increase per 1 L/min: 1L=24%, 2L=28%, 3L=32%, 4L=36%, 5L=40%, 6L=44%)",
    features:
      "Flexible lightweight dual-prong plastic tubing positioned inside the anterior nares, looped over the ears and secured beneath the chin.",
    uses: "First-line stable hypoxemia, general medical wards, ambulatory chronic home oxygen therapy.",
    clinicalTip:
      "Flows above 4 L/min require a bubble humidifier to prevent nasal mucosal drying, irritation, and epistaxis.",
  },

  // --- HIGH FLOW & VENTILATION PLATFORMS ---
  {
    name: "HFNC (High-Flow Nasal Cannula)",
    category: "Advanced Ventilation",
    flowRate: "Up to 60 – 80 L/min",
    fio2: "21% – 100% (Blender-controlled)",
    features:
      "Specialized wide-bore soft silicone prongs, heated breathing circuit, integrated active humidifier (37°C, 44 mg/L water vapor), and air-oxygen blender.",
    uses: "Acute hypoxemic respiratory failure (e.g., severe pneumonia, ARDS), post-extubation support, pre-oxygenation in difficult airways.",
    clinicalTip:
      "Generates continuous low-level PEEP (~0.7 cmH2O per 10 L/min with mouth closed), flushes nasopharyngeal anatomical dead space, and reduces inspiratory work of breathing.",
  },
  {
    name: "NIV (Non-Invasive Ventilation Unit)",
    category: "Advanced Ventilation",
    flowRate: "Dynamic turbine-generated flow (up to 200 L/min peak)",
    fio2: "21% – 100%",
    features:
      "Microprocessor-controlled positive pressure generator with leak-compensation software, sensitive flow triggers, and automated alarm matrix.",
    uses: "Acute respiratory acidosis in COPD exacerbation (pH < 7.35, PaCO2 > 45 mmHg), acute cardiogenic pulmonary edema, weaning failure.",
    clinicalTip:
      "Contraindicated in patients with severe altered consciousness (GCS < 8), facial trauma, vomiting, copious secretions, or high aspiration risk.",
  },
  {
    name: "Mechanical Ventilator (Invasive ICU Ventilator)",
    category: "Advanced Ventilation",
    flowRate: "Controlled by modes: VCV, PCV, SIMV, PRVC, PSV",
    fio2: "21% – 100%",
    features:
      "Dual-limb closed breathing circuit with inspiratory/expiratory microprocessor valves, active heated humidifier, inline bacterial filters, and graphics screens.",
    uses: "Apnea, acute respiratory failure, cardiac arrest resuscitation, general anesthesia, severe ARDS, neurotrauma requiring controlled PaCO2.",
    clinicalTip:
      "Follow lung-protective ventilation: target tidal volume 6 mL/kg predicted body weight (PBW) and maintain plateau pressure < 30 cmH2O to prevent ventilator-induced lung injury (VILI).",
  },
  {
    name: "BVM (Bag-Valve-Mask / Ambu Bag)",
    category: "Advanced Ventilation",
    flowRate: "15 L/min with reservoir bag attached",
    fio2: "90% – 100% (with O2 reservoir) | 21% (on room air)",
    features:
      "Self-inflating silicone bag (approx. 1500–1600 mL adult volume), one-way duckbill non-rebreathing patient valve, safety pop-off valve, and optional PEEP valve connector.",
    uses: "Emergency manual ventilation during cardiopulmonary arrest, acute apnea, respiratory arrest, transport of ventilated patients.",
    clinicalTip:
      "Use the two-person 'two-thumb-down' / 'E-C clamp' technique to maintain an airtight face seal. Squeeze the bag gently over 1 second just until visible chest rise occurs.",
  },

  // --- INVASIVE AIRWAY TUBES ---
  {
    name: "ET Tube (Endotracheal Tube / ETT)",
    category: "Invasive Airway",
    flowRate: "Continuous mechanical / BVM ventilation",
    fio2: "21% – 100%",
    features:
      "Curved polyvinyl chloride (PVC) tube, 15 mm universal machine connector, radiopaque line, Murphy eye, depth centimeter markings, and high-volume low-pressure (HVLP) cuff.",
    uses: "Definitive airway management: mechanical ventilation, aspiration prevention, general anesthesia, comatose state (GCS ≤ 8).",
    clinicalTip:
      "Maintain cuff pressure strictly between 20 – 30 cmH2O. Tube depth rule: Internal Diameter (mm) × 3 (typically 21–23 cm at teeth in adults).",
  },
  {
    name: "Tracheostomy Tube",
    category: "Invasive Airway",
    flowRate: "Continuous mechanical / T-piece ventilation",
    fio2: "21% – 100%",
    features:
      "Surgically placed cannula with outer shaft, removable inner cannula (can be cleaned of secretions), pilot balloon, neck flange, and obturator.",
    uses: "Long-term mechanical ventilation (> 10–14 days), severe upper airway obstruction, subglottic stenosis, chronic airway toilet.",
    clinicalTip:
      "Bypasses the upper airway anatomical dead space, reducing airway resistance and facilitating weaning from prolonged mechanical ventilation.",
  },

  // --- SUPRAGLOTTIC AIRWAYS (SGA) ---
  {
    name: "LMA (Laryngeal Mask Airway - Classic / ProSeal)",
    category: "Supraglottic Airway",
    flowRate: "Spontaneous or positive pressure ventilation",
    fio2: "21% – 100%",
    features:
      "Elliptical silicone inflatable cuff connected to an airway shaft that seats over the hypopharynx to form a seal over the laryngeal inlet.",
    uses: "Elective general anesthesia for fasting patients, 'Cannot Intubate, Cannot Oxygenate' (CICO) emergency rescue airway.",
    clinicalTip:
      "Cuff pressure must not exceed 60 cmH2O to prevent ischemic injury to the lingual and recurrent laryngeal nerves. Does not fully protect against regurgitation/aspiration.",
  },
  {
    name: "i-gel® / I Gel Supraglottic Airway",
    category: "Supraglottic Airway",
    flowRate: "Spontaneous or mechanical ventilation",
    fio2: "21% – 100%",
    features:
      "Anatomically shaped non-inflatable cuff made from medical-grade thermoplastic elastomer (gel-like). Includes a separate gastric suction channel and built-in bite block.",
    uses: "Emergency resuscitation during out-of-hospital cardiac arrest (OHCA), difficult airway rescue, routine general anesthesia.",
    clinicalTip:
      "No cuff to inflate or monitor. Fast insertion: lubricate the back of the device and advance until firm resistance is met.",
  },

  // --- AIRWAY ADJUNCTS & INTUBATION TOOLS ---
  {
    name: "OPA (Oropharyngeal Airway / Guedel Airway)",
    category: "Airway Adjunct",
    flowRate: "Passive airflow conduit",
    fio2: "Passive",
    features:
      "Rigid, anatomically curved plastic tube with a flared proximal flange and hard bite block section.",
    uses: "Prevents the tongue from obstructing the posterior pharynx; serves as a bite block in intubated patients.",
    clinicalTip:
      "Use ONLY in deeply unconscious patients with an absent gag reflex. Sizing: measure from the corner of the mouth to the angle of the mandible.",
  },
  {
    name: "NPA (Nasopharyngeal Airway / Nasal Trumpet)",
    category: "Airway Adjunct",
    flowRate: "Passive airflow conduit",
    fio2: "Passive",
    features:
      "Flexible rubber or soft plastic tube with a beveled tip and flared proximal collar to prevent loss inside the nares.",
    uses: "Relieves upper airway obstruction in semi-conscious patients with trismus, intact gag reflex, or clenched teeth.",
    clinicalTip:
      "Sizing: measure from the tip of the nose to the tragus of the ear. Contraindicated in suspected basilar skull fractures (halo sign / battle sign).",
  },
  {
    name: "Laryngoscope (Macintosh & Miller Blades)",
    category: "Intubation Tool",
    flowRate: "Procedural visualization instrument",
    fio2: "N/A",
    features:
      "Handle housing batteries connected to curved (Macintosh) or straight (Miller) stainless steel blades with fiberoptic LED illumination.",
    uses: "Direct visualization of the vocal cords (glottis) to guide endotracheal tube placement.",
    clinicalTip:
      "The Macintosh blade tip rests in the vallecula (indirectly lifts the epiglottis). The Miller blade directly scoops and lifts the epiglottis (preferred in infants and pediatric larynxes).",
  },
  {
    name: "Video Laryngoscope (GlideScope, C-MAC, King Vision)",
    category: "Intubation Tool",
    flowRate: "Procedural visualization instrument",
    fio2: "N/A",
    features:
      "Integrated micro-digital camera and anti-fog LED light source at the blade tip connected to a color display screen.",
    uses: "First-line tool for anticipated or unexpected difficult intubations, cervical spine immobilization, bariatric intubation.",
    clinicalTip:
      "Provides a clear view around anatomical curves without requiring alignment of the oral, pharyngeal, and laryngeal axes.",
  },
  {
    name: "Endotracheal Stylet",
    category: "Intubation Tool",
    flowRate: "Mechanical guide",
    fio2: "N/A",
    features:
      "Malleable aluminum rod encased in smooth medical plastic that can be bent to hold a specific curve.",
    uses: "Maintains a predetermined 'hockey stick' bend in an endotracheal tube to navigate an anteriorly positioned larynx.",
    clinicalTip:
      "The distal tip of the stylet MUST NEVER extend past the tip or Murphy eye of the ETT to avoid tracheal mucosal laceration or puncture.",
  },
  {
    name: "Bougie (Gum Elastic Bougie / Tracheal Tube Introducer)",
    category: "Intubation Tool",
    flowRate: "Procedural guide",
    fio2: "N/A",
    features:
      "Flexible, straight 60–70 cm resin introducer with a 35-degree angled coudé tip.",
    uses: "Assists blind or difficult intubation when only the epiglottis or partial vocal cords are visible (Cormack-Lehane Grade 2/3).",
    clinicalTip:
      "Tracheal confirmation: tactile vibrations ('clicks') as the coudé tip rubs against the tracheal rings and firm 'hold-up' at the carina (~30–40 cm).",
  },
  {
    name: "Capnography (EtCO2 Monitor / Colorimetric Detector)",
    category: "Airway Monitor",
    flowRate: "Continuous sidestream / mainstream sampling",
    fio2: "Monitors expired CO2 (Normal: 35 – 45 mmHg)",
    features:
      "Infrared spectrophotometric sensor analyzing exhaled CO2. Displays continuous real-time square-wave capnograms and digital EtCO2 values.",
    uses: "The gold standard for verification of endotracheal tube placement; monitoring CPR quality (target EtCO2 > 15–20 mmHg).",
    clinicalTip:
      "A sustained 4-phase waveform over at least 5–6 consecutive breaths confirms the tube is in the trachea and completely excludes esophageal placement.",
  },
  {
    name: "Suction Catheter & Yankauer Suction Tip",
    category: "Airway Clearance",
    flowRate:
      "Negative pressure vacuum: Adult: -80 to -120 mmHg | Pediatric: -60 to -80 mmHg",
    fio2: "N/A",
    features:
      "Rigid curved plastic suction handle (Yankauer) for oropharyngeal clearance; flexible endobronchial catheters with thumb vacuum-relief ports.",
    uses: "Clearing vomit, blood, saliva, and thick tracheobronchial mucus to prevent aspiration and maintain airway patency.",
    clinicalTip:
      "Limit suction passes to less than 10–15 seconds and pre-oxygenate prior to suctioning to prevent acute hypoxia and vagal bradycardia.",
  },
];

const CATEGORIES = [
  "All",
  "Oxygen Mask",
  "Advanced Ventilation",
  "Invasive Airway",
  "Supraglottic Airway",
  "Airway Adjunct",
  "Intubation Tool",
  "Airway Monitor",
  "Airway Clearance",
];

export default function OxygenFlowPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedName, setCopiedName] = useState(null);

  const filteredData = useMemo(() => {
    return OXYGEN_EQUIPMENT_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.flowRate.toLowerCase().includes(q) ||
        item.fio2.toLowerCase().includes(q) ||
        item.uses.toLowerCase().includes(q) ||
        item.features.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
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
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

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
              <Wind className="w-3.5 h-3.5" /> Clinical Inventory &bull; Item
              #05
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Oxygen Flow & Airway Management Codex
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Standard gas flow rates (1 to 80+ L/min), delivered FiO2
              percentages, mask interfaces, non-invasive systems, advanced
              airway tubes, and intubation adjuncts.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Total Devices
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                {OXYGEN_EQUIPMENT_DATA.length} Standardized
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Max HFNC Flow
              </span>
              <span className="text-xl font-bold text-cyan-300 font-mono">
                80 L/min
              </span>
            </div>
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
              placeholder="Search by device, flow rate (e.g. 15 L/min), or use..."
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
            airway and oxygen devices
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
                    title="Copy device name"
                    className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-teal-300 hover:bg-slate-800/80 transition-colors shrink-0"
                  >
                    {copiedName === item.name ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Flow Rate & FiO2 Metrics */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 my-3 font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-teal-400" /> Flow Rate:
                    </span>
                    <span className="font-bold text-amber-300 text-right">
                      {item.flowRate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-cyan-400" /> FiO2:
                    </span>
                    <span className="font-bold text-cyan-300 text-right">
                      {item.fio2}
                    </span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold block mb-0.5">
                    Engineering & Design Features:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.features}
                  </p>
                </div>

                {/* Clinical Uses */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-teal-400 font-semibold block mb-0.5">
                    Primary Clinical Uses:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.uses}
                  </p>
                </div>
              </div>

              {/* Clinical Protocol / Rule Callout */}
              <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                <AlertCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item.clinicalTip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl mt-6">
            <Wind className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-300 mb-1">
              No matching airway or oxygen devices found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Try searching by flow rate (e.g., "15 L/min"), device name
              ("NRBM", "ETT", "Bougie"), or clinical use.
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
