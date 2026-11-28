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
  Scissors,
  Compass,
  ShieldAlert,
  Flame,
  Info,
  Beaker,
} from "lucide-react";

// --- ISO 6009 NEEDLE COLOR CODES (16G TO 30G) ---
const NEEDLE_COLOR_SPECS = [
  {
    gauge: "16G",
    color: "White",
    colorHex: "#f8fafc",
    outerDia: "1.65 mm",
    innerDia: "1.19 mm",
    bevelLength: "Regular / Short Bevel",
    wallType: "Regular / Thin Wall",
    primaryUse:
      "Blood donor phlebotomy, bone marrow harvest, rapid viscous fluid aspiration.",
  },
  {
    gauge: "17G",
    color: "Red-Violet",
    colorHex: "#9333ea",
    outerDia: "1.47 mm",
    innerDia: "1.06 mm",
    bevelLength: "Regular Bevel",
    wallType: "Thin Wall",
    primaryUse:
      "Apheresis, vascular surgery blood lines, cellular component harvesting.",
  },
  {
    gauge: "18G",
    color: "Pink",
    colorHex: "#ec4899",
    outerDia: "1.27 mm",
    innerDia: "0.84 mm",
    bevelLength: "Beveled / Blunt Fill",
    wallType: "Thin Wall",
    primaryUse:
      "Reconstitution of lyophilized powders, compounding, therapeutic paracentesis.",
  },
  {
    gauge: "19G",
    color: "Cream / Ivory",
    colorHex: "#fef08a",
    outerDia: "1.07 mm",
    innerDia: "0.69 mm",
    bevelLength: "Regular Bevel with 5µ Filter",
    wallType: "Thin Wall",
    primaryUse:
      "Aspiration from glass ampoules (filter needle), viscous medication compounding.",
  },
  {
    gauge: "20G",
    color: "Yellow",
    colorHex: "#eab308",
    outerDia: "0.91 mm",
    innerDia: "0.60 mm",
    bevelLength: "Regular Bevel",
    wallType: "Regular / Thin Wall",
    primaryUse:
      "Deep gluteal Intramuscular (IM) injection of viscous oils (testosterone, haloperidol).",
  },
  {
    gauge: "21G",
    color: "Deep Green",
    colorHex: "#15803d",
    outerDia: "0.82 mm",
    innerDia: "0.51 mm",
    bevelLength: "Regular Bevel",
    wallType: "Regular Wall",
    primaryUse:
      "Universal adult diagnostic venipuncture, routine adult IM injections.",
  },
  {
    gauge: "22G",
    color: "Black",
    colorHex: "#334155",
    outerDia: "0.72 mm",
    innerDia: "0.41 mm",
    bevelLength: "Regular Bevel",
    wallType: "Regular Wall",
    primaryUse:
      "Standard adult Intramuscular (IM) injections, antibiotic suspensions, vaccinations.",
  },
  {
    gauge: "23G",
    color: "Deep Blue",
    colorHex: "#1d4ed8",
    outerDia: "0.64 mm",
    innerDia: "0.34 mm",
    bevelLength: "Regular Bevel",
    wallType: "Regular Wall",
    primaryUse:
      "Pediatric Intramuscular (IM), adult deltoid vaccinations, hand vein venipuncture.",
  },
  {
    gauge: "24G",
    color: "Medium Purple",
    colorHex: "#7e22ce",
    outerDia: "0.57 mm",
    innerDia: "0.31 mm",
    bevelLength: "Short Bevel",
    wallType: "Regular Wall",
    primaryUse:
      "Pediatric vaccinations, fine-vein diagnostic blood collection.",
  },
  {
    gauge: "25G",
    color: "Orange",
    colorHex: "#ea580c",
    outerDia: "0.51 mm",
    innerDia: "0.26 mm",
    bevelLength: "Regular / Short Bevel",
    wallType: "Regular / Thin Wall",
    primaryUse:
      "Subcutaneous (SC) injections, local anesthetic infiltration, heparin dosing.",
  },
  {
    gauge: "26G",
    color: "Brown",
    colorHex: "#78350f",
    outerDia: "0.46 mm",
    innerDia: "0.26 mm",
    bevelLength: "Intradermal Bevel",
    wallType: "Regular Wall",
    primaryUse:
      "Mantoux tuberculin skin test (PPD), diagnostic allergy prick and wheal panels.",
  },
  {
    gauge: "27G",
    color: "Medium Grey",
    colorHex: "#94a3b8",
    outerDia: "0.41 mm",
    innerDia: "0.21 mm",
    bevelLength: "Ultra-Short Bevel",
    wallType: "Regular Wall",
    primaryUse:
      "Subcutaneous micro-injections, dental local blocks, facial aesthetic botulinum toxin.",
  },
  {
    gauge: "28G",
    color: "Blue-Green",
    colorHex: "#0f766e",
    outerDia: "0.36 mm",
    innerDia: "0.18 mm",
    bevelLength: "Facet Tri-Bevel",
    wallType: "Ultra-Thin Wall",
    primaryUse:
      "Pediatric insulin administration, capillary lancet capillary blood draws.",
  },
  {
    gauge: "29G",
    color: "Red / Magenta",
    colorHex: "#be123c",
    outerDia: "0.34 mm",
    innerDia: "0.18 mm",
    bevelLength: "Micro-Bevel",
    wallType: "Ultra-Thin Wall",
    primaryUse:
      "Insulin syringes, low-molecular-weight heparin, fine dermatological injections.",
  },
  {
    gauge: "30G",
    color: "Light Yellow",
    colorHex: "#facc15",
    outerDia: "0.31 mm",
    innerDia: "0.16 mm",
    bevelLength: "Tri-Bevel Micro",
    wallType: "Extra-Thin Wall",
    primaryUse:
      "Scleral intravitreal ophthalmic injections, dental nerve blocks, facial botox.",
  },
];

// --- CLINICAL NEEDLE TYPES ---
const CLINICAL_NEEDLE_TYPES = [
  {
    id: "hypodermic",
    name: "Hypodermic Needle",
    category: "General Administration",
    gauges: "18G – 27G",
    lengths: '0.5" to 1.5" (13 – 38 mm)',
    features:
      "Hollow stainless-steel shaft with tri-beveled tip and lubricated silicone coat for atraumatic tissue slicing.",
    primaryUses:
      "Subcutaneous, intramuscular, and intravenous medication administration and fluid withdrawal.",
    clinicalNote:
      "Select gauge by viscosity: 18G–20G for thick oils; 21G–23G for aqueous; 25G–27G for subcutaneous.",
  },
  {
    id: "iv-needle",
    name: "IV Introducer Needle (Catheter Stylet)",
    category: "Vascular Access",
    gauges: "14G – 26G",
    lengths: "19 mm to 45 mm",
    features:
      "Internal rigid stainless-steel stylet seated inside a flexible polyurethane or PTFE catheter sleeve with flashback chamber.",
    primaryUses:
      "Peripheral intravenous cannulation for fluid resuscitation, parenteral nutrition, and drug access.",
    clinicalNote:
      "Upon flashback visualization, lower angle to 10°–15° and advance catheter over the needle into the vein lumen.",
  },
  {
    id: "blood-collection",
    name: "Multi-Sample Blood Collection Needle",
    category: "Phlebotomy & Diagnostics",
    gauges: "21G (Green), 22G (Black)",
    lengths: '1" to 1.5" (25 – 38 mm)',
    features:
      "Double-ended needle with threaded hub: patient-end tri-bevel and evacuated-tube puncture end shielded by a rubber sleeve.",
    primaryUses:
      "Vacuum-tube phlebotomy (Vacutainer) allowing multiple tube draws without blood leakage.",
    clinicalNote:
      "The elastomeric rubber sleeve automatically reseals when tubes are switched, maintaining an airtight system.",
  },
  {
    id: "butterfly",
    name: "Butterfly Needle (Winged Infusion Set)",
    category: "Phlebotomy & Diagnostics",
    gauges: "21G, 22G, 23G, 25G",
    lengths: '0.5" to 0.75" with flexible tubing (15–30 cm)',
    features:
      "Flexible textured bilateral 'wings' for low-angle skin stabilization connected to clear extension tubing.",
    primaryUses:
      "Phlebotomy and short infusions in fragile, small, or rolling dorsal hand/pediatric veins.",
    clinicalNote:
      "Always prime the tubing when drawing blood cultures or using vacuum tubes to avoid underfilling the first tube.",
  },
  {
    id: "insulin-needle",
    name: "Insulin Pen / Syringe Needle",
    category: "Diabetology",
    gauges: "29G, 30G, 31G, 32G",
    lengths: "4 mm, 5 mm, 6 mm, 8 mm, 12.7 mm",
    features:
      "Micro-polished, silicone-lubricated ultra-thin-wall needle engineered for shallow subcutaneous deposit.",
    primaryUses:
      "Daily subcutaneous self-administration of insulin, GLP-1 receptor agonists, and growth hormone.",
    clinicalNote:
      "4 mm to 6 mm needles eliminate the need for skin pinching in most adults and prevent accidental intramuscular injection.",
  },
  {
    id: "spinal",
    name: "Spinal Needle (Quincke vs. Whitacre)",
    category: "Anesthesia & Neurology",
    gauges: "22G, 25G, 27G",
    lengths: '3.5" (90 mm) to 5" (120 mm)',
    features:
      "Fitted with matched internal stylet. Available as cutting (Quincke) or pencil-point atraumatic (Whitacre, Sprotte).",
    primaryUses:
      "Subarachnoid lumbar spinal anesthesia, diagnostic cerebrospinal fluid (CSF) collection, CSF manometry.",
    clinicalNote:
      "Pencil-point needles (Whitacre) separate dural fibers rather than cutting them, reducing post-dural puncture headache (PDPH) to under 1%.",
  },
  {
    id: "epidural",
    name: "Epidural Needle (Tuohy / Hustead)",
    category: "Anesthesia & Obstetrics",
    gauges: "16G, 17G, 18G",
    lengths: '3.5" (90 mm) with 1 cm graduation depth markings',
    features:
      "Curved directional tip (Tuohy curve) preventing dural puncture; accepts flexible epidural catheter passage.",
    primaryUses:
      "Epidural anesthesia and analgesia for labor and delivery, thoracic surgery, and chronic pain management.",
    clinicalNote:
      "Identified using the 'Loss of Resistance' (LOR) technique with saline or air when penetrating the ligamentum flavum.",
  },
  {
    id: "bone-marrow",
    name: "Bone Marrow Aspiration & Biopsy Needle (Jamshidi)",
    category: "Hematology & Oncology",
    gauges: "8G, 11G (Adults); 13G (Pediatric)",
    lengths: '2" to 4" (50 – 100 mm)',
    features:
      "Heavy-gauge reinforced cannula with ergonomic T-handle, trocar-point stylet, and internal core-extraction cannula.",
    primaryUses:
      "Posterior superior iliac crest (PSIS) bone marrow aspiration and trephine core biopsy for hematologic malignancy diagnosis.",
    clinicalNote:
      "Always aspirate marrow before cutting the core biopsy to prevent micro-architectural distortion of the core specimen.",
  },
  {
    id: "huber",
    name: "Huber Needle (Non-Coring Needle)",
    category: "Oncology & Chemotherapy",
    gauges: "19G, 20G, 22G",
    lengths: '0.5" to 1.5" (Straight or 90° Right-Angle)',
    features:
      "Deflected, non-coring bevel point that parts silicone elastomeric septum without carving out silicone plugs.",
    primaryUses:
      "Accessing implanted port-a-cath reservoirs for chemotherapy, total parenteral nutrition (TPN), and frequent blood draws.",
    clinicalNote:
      "Using standard beveled needles will core and ruin the port's self-sealing silicone septum, resulting in internal extravasation.",
  },
  {
    id: "fistula",
    name: "AV Fistula Needle (AVF Needle)",
    category: "Nephrology & Dialysis",
    gauges: "14G, 15G, 16G, 17G",
    lengths: '1" to 1.25" with textured wing and tubing clamp',
    features:
      "Ultra-wide bore with silicone-lubricated wall and optional back-eye slit for high-volume laminar blood flow.",
    primaryUses:
      "Cannulation of arteriovenous fistulas or synthetic grafts for hemodialysis blood circuit exchange (250–500 mL/min).",
    clinicalNote:
      "Rotate puncture sites (buttonhole or rope-ladder technique) to avoid pseudoaneurysm formation and vascular wall stenosis.",
  },
  {
    id: "veress",
    name: "Veress Needle",
    category: "Laparoscopic Surgery",
    gauges: "14G, 15G",
    lengths: "120 mm, 150 mm, 180 mm",
    features:
      "Spring-loaded blunt inner stylet inside a sharp outer cutting cannula. Retracts when penetrating fascia, springs forward upon entering peritoneal cavity.",
    primaryUses:
      "Pneumoperitoneum creation via CO2 insufflation in closed-access laparoscopic abdominal surgery.",
    clinicalNote:
      "Confirm entry with the 'hanging drop test' or low initial insufflation pressures (< 10 mmHg) before initiating high CO2 gas flow.",
  },
  {
    id: "amniocentesis",
    name: "Amniocentesis Needle",
    category: "Obstetrics & Fetal Medicine",
    gauges: "20G, 22G",
    lengths: "90 mm to 150 mm",
    features:
      "Ultrasonically reflective echogenic tip with matched internal stylet to ensure clear ultrasound visualization.",
    primaryUses:
      "Ultrasound-guided transabdominal aspiration of amniotic fluid for fetal karyotyping, genetic analysis, and lung maturity tests.",
    clinicalNote:
      "Discard the first 1–2 mL of amniotic fluid to avoid maternal cell contamination during diagnostic polymerase chain reaction (PCR).",
  },
  {
    id: "thoracentesis",
    name: "Thoracentesis / Paracentesis Catheter Needle",
    category: "Pulmonology & Critical Care",
    gauges: "14G – 16G (over-the-needle catheter) or 8 Fr catheter",
    lengths: '3" to 5" (75 – 120 mm)',
    features:
      "Catheter over a self-sealing spring-loaded blunt-tip safety needle with side-ports and 3-way stopcock connection.",
    primaryUses:
      "Diagnostic and therapeutic evacuation of pleural effusions (hemothorax, empyema) or peritoneal ascites.",
    clinicalNote:
      "Insert needle immediately above the upper rib border to avoid injuring the intercostal neurovascular bundle running along the rib groove.",
  },
  {
    id: "biopsy",
    name: "Core Biopsy Needle (Tru-Cut / Automated Gun)",
    category: "Oncology & Pathology",
    gauges: "14G, 16G, 18G",
    lengths: "10 cm to 20 cm with 10–20 mm specimen notch",
    features:
      "Inner slotted specimen stylet paired with a rapid spring-actuated outer cutting cannula that slices and captures tissue cores.",
    primaryUses:
      "Percutaneous tissue core biopsies of breast masses, liver, prostate, lung nodules, and soft tissue sarcomas.",
    clinicalNote:
      "Ensure post-biopsy ultrasound or manual compression for 10–15 minutes to prevent hematoma and track seeding.",
  },
  {
    id: "dental",
    name: "Dental Local Anesthesia Needle",
    category: "Dentistry & Oral Surgery",
    gauges: "25G, 27G, 30G",
    lengths: "Short (20–25 mm), Long (30–35 mm), Ultra-short (10 mm)",
    features:
      "Pre-threaded plastic or metal hub compatible with dental aspirating cartridge syringes; metric or imperial thread.",
    primaryUses:
      "Inferior alveolar nerve blocks, infiltration, and palatal periodontal injections.",
    clinicalNote:
      "Always aspirate in two planes before injecting local anesthetic to prevent accidental intravascular injection into the inferior alveolar artery.",
  },
  {
    id: "safety-needle",
    name: "Engineered Sharps Safety Needle",
    category: "Occupational Safety",
    gauges: "18G – 25G",
    lengths: '1" to 1.5"',
    features:
      "Hinged safety shield or spring-loaded retraction mechanism activated with single-finger stroke post-injection.",
    primaryUses:
      "Hospital-wide injections and blood sampling to eliminate accidental needle-stick injuries and bloodborne pathogen transmission.",
    clinicalNote:
      "Audible click confirms irreversible lock; never attempt to bypass or reopen the safety sheath.",
  },
  {
    id: "needle-destroyer",
    name: "Electric / Mechanical Needle Destroyer",
    category: "Waste Management & Biomedical Safety",
    gauges: "Accepts 16G – 30G needles",
    lengths: "Universal port",
    features:
      "High-temperature electrical electro-melting arc (1400°C) or heavy-duty mechanical cutting alloy blade.",
    primaryUses:
      "Instant destruction of needle shafts immediately post-procedure at the point of care, sterilizing and incinerating the sharps element.",
    clinicalNote:
      "Melts the stainless shaft down to the plastic hub within 2 seconds, rendering the syringe permanently unusable and non-hazardous.",
  },
];

// --- SURGICAL NEEDLES COMPREHENSIVE DATA ---
const SURGICAL_NEEDLES_SPECS = {
  definition:
    "A surgical needle is an engineered alloy instrument designed to carry suture material through living biological tissue with minimal friction, controlled penetration force, and zero tissue disruption. Manufactured primarily from AISI 300-series martensitic stainless steel or high-nickel alloys (Ethalloy).",
  anatomy: [
    {
      part: "Swaged End (Eye)",
      desc: "The suture thread is mechanically crimped directly into the hollow rear cavity of the needle, creating an eyeless, uniform single-strand profile that matches needle caliber.",
    },
    {
      part: "Needle Body (Shaft)",
      desc: "The grasping region designed with flat, ribbed, or grooved lateral facets to prevent twisting, rolling, or slippage inside the jaws of the needle holder.",
    },
    {
      part: "Needle Point",
      desc: "The distal tapered or ground cutting tip extending from the body to the extreme vertex, dictating whether tissue is parted or sliced.",
    },
    {
      part: "Radius & Chord Length",
      desc: "Radius determines curvature arc; chord length represents the straight-line linear distance between needle point and swaged end.",
    },
  ],
  types: [
    {
      name: "Round Bodied Needle",
      pointType: "Tapered Conical Point",
      crossSection: "Round / Circular",
      tissueType:
        "Soft, parenchymal tissues (Gastrointestinal, bladder, myocardium, peritoneum, subcutaneous fat).",
      features:
        "Pierces and stretches tissue fibers apart without cutting them. Leaves minimal puncture leak.",
      clinicalNote:
        "Never use on skin, tendon, or dense fascia; will cause extreme bending and blunt tissue trauma.",
    },
    {
      name: "Conventional Cutting Needle",
      pointType: "Triangular Cutting Apex",
      crossSection: "Triangle with cutting edge on inside curve",
      tissueType: "Skin closures, tough dense fibrous tissue.",
      features:
        "Three cutting edges. Inside edge cuts toward the incision margin as the needle is driven through.",
      clinicalNote:
        "Risk of 'cut-out': inside blade edge can accidentally pull through the incision line under tension.",
    },
    {
      name: "Reverse Cutting Needle",
      pointType: "Inverted Triangular Apex",
      crossSection:
        "Triangle with flat face inside, third cutting edge on outside curve",
      tissueType:
        "Cutaneous skin, subcuticular plastic surgery, fascia, tendon sheaths, oral mucosa.",
      features:
        "Third cutting edge is on the outer convex curvature. Leaves flat wound edge facing suture tension.",
      clinicalNote:
        "Gold standard for skin closure; resists cut-out and tissue tearing under wound tension.",
    },
    {
      name: "Taper Point Needle",
      pointType: "Gradual Smooth Taper",
      crossSection: "Smooth circular body tapering to sharp vertex",
      tissueType:
        "Delicate vascular anastomosis, bowel anastomoses, visceral organ capsules.",
      features:
        "Spreads tissue laterally without incising collagen scaffolding. Prevents vascular suture hole bleeding.",
      clinicalNote:
        "Standard needle for coronary artery bypass graft (CABG) micro-vascular sutures.",
    },
    {
      name: "Tapercut (Taper Cutting) Needle",
      pointType: "Reverse cutting tip with round body",
      crossSection:
        "Miniature cutting vertex transitioning immediately to smooth round body",
      tissueType:
        "Calcified vascular tissue, heart valves, dense connective fascia, orthopedic capsulorraphy.",
      features:
        "Penetrates dense fibrous plaques easily, while the round body prevents suture track enlargement.",
      clinicalNote:
        "Ideal for prosthetic valve replacement sutures passing through dense fibrous annuli.",
    },
    {
      name: "Trocar Point Needle",
      pointType: "Three-edged sharpened trocar facet",
      crossSection: "Heavy triangular cutting tip on strong cylindrical body",
      tissueType:
        "Dense cartilage, cortical bone holes, tough ligamentous structures.",
      features:
        "High rigidity and piercing strength to bore through dense cartilaginous structures.",
      clinicalNote:
        "Used in orthopedic joint reconstruction and nasal septal cartilage reconstruction.",
    },
    {
      name: "Spatula (Side-Cutting) Needle",
      pointType: "Flat Side-Cutting Spatulate",
      crossSection: "Trapezoidal / Flat hexagonal with lateral cutting edges",
      tissueType: "Ophthalmic surgery (Corneal and scleral lamellar layers).",
      features:
        "Flat upper and lower surfaces with lateral cutting edges that separate thin lamellar corneal planes without perforation.",
      clinicalNote:
        "Prevents accidental intraocular anterior chamber perforation during corneal transplantation.",
    },
    {
      name: "Blunt Point Needle",
      pointType: "Rounded Non-Cutting Vertex",
      crossSection: "Spherical blunt tip with cylindrical body",
      tissueType:
        "Friable parenchymal organs (Liver, spleen, kidney) and obstetric uterine repair.",
      features:
        "Pushes through fragile parenchymal liver tissue without slicing hepatic vessels or bile ducts.",
      clinicalNote:
        "OSHA-recommended safety needle for closing abdominal fascia to eliminate glove puncture risks.",
    },
  ],
  shapes: [
    {
      shape: "Straight Needle (Keith)",
      angle: "180° (Zero curve)",
      uses: "Skin closure where fingers hold needle directly; tendon repairs; abdominal wall mattress suturing.",
      manipulation:
        "Hand-held or with straight needle holder in direct-access superficial planes.",
    },
    {
      shape: "3/8 Circle Needle",
      angle: "135° Arc",
      uses: "Superficial wound closures, skin, ophthalmic anterior segment, facial plastic surgery.",
      manipulation:
        "Requires subtle wrist rotation; ideal for large, flat, superficial operative fields.",
    },
    {
      shape: "1/2 Circle Needle",
      angle: "180° Arc",
      uses: "Gastrointestinal tract, biliary repair, muscle approximation, peritoneum, cardiovascular lines.",
      manipulation:
        "Universal surgical workhorse; easily maneuvered in confined cavities with forearm pronation.",
    },
    {
      shape: "5/8 Circle Needle",
      angle: "225° Arc",
      uses: "Deep, confined surgical cavities (Pelvic floor, oral cavity, urology prostatectomy, anal canal).",
      manipulation:
        "Allows driving the needle through tissue where finger and holder excursions are severely restricted.",
    },
    {
      shape: "Compound Curved Needle",
      angle: "Variable Radius Arc",
      uses: "Anterior segment ophthalmic micro-surgery, deep micro-vascular bypass.",
      manipulation:
        "Tight tip radius allows precise tissue bite with flat shank clearing the corneal limbus.",
    },
    {
      shape: "J-Shaped Needle",
      angle: "Asymmetric Hook",
      uses: "Laparoscopic port site fascial closure (Endo-close), deep femoral ring repair.",
      manipulation:
        "Hooks back toward operator for closing peritoneal defects through trocar sleeves.",
    },
  ],
  configurations: [
    {
      name: "Single-Armed Suture",
      desc: "One swaged needle attached to one end of the suture thread. Used for standard continuous and interrupted closures.",
    },
    {
      name: "Double-Armed Suture",
      desc: "A surgical needle swaged to BOTH ends of the thread. Essential for circular end-to-end vascular anastomoses (parachute technique) and retinal cerclage.",
    },
    {
      name: "Micro-Needle (Atraumatic)",
      desc: "Ultra-fine wire needles (diameters down to 30–50 µm) swaged to 8-0 through 11-0 suture filaments for digital replantation and ophthalmic surgery.",
    },
  ],
};

export default function NeedlePage() {
  const [activeTab, setActiveTab] = useState("color-codes"); // "color-codes" | "clinical-types" | "surgical"
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredColorCodes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return NEEDLE_COLOR_SPECS;
    return NEEDLE_COLOR_SPECS.filter(
      (n) =>
        n.gauge.toLowerCase().includes(q) ||
        n.color.toLowerCase().includes(q) ||
        n.primaryUse.toLowerCase().includes(q) ||
        n.outerDia.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const filteredClinicalTypes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return CLINICAL_NEEDLE_TYPES;
    return CLINICAL_NEEDLE_TYPES.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.primaryUses.toLowerCase().includes(q) ||
        item.gauges.toLowerCase().includes(q) ||
        item.features.toLowerCase().includes(q),
    );
  }, [searchQuery]);

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
              #04
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Needle Science & Surgical Needles Codex
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Standardized ISO 6009 color codes (16G to 30G), complete clinical
              needle classifications (Spinal, Bone Marrow, Huber, Veress,
              Amniocentesis), and surgical suture needles (Round-bodied, Reverse
              Cutting, Tapercut, Curvature Arcs).
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Gauge Spectrum
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                16G – 30G
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Surgical Standards
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                ASTM / USP
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="inline-flex p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md overflow-x-auto">
            <button
              onClick={() => {
                setActiveTab("color-codes");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "color-codes"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Gauge className="w-4 h-4" />
              <span>ISO 6009 Color Codes (16G–30G)</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("clinical-types");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "clinical-types"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Syringe className="w-4 h-4" />
              <span>Clinical Needles ({CLINICAL_NEEDLE_TYPES.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("surgical");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "surgical"
                  ? "bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Scissors className="w-4 h-4" />
              <span>Surgical Suture Needles</span>
            </button>
          </div>

          {/* Search Box */}
          {activeTab !== "surgical" && (
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gauge (21G), color, clinical use..."
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

        {/* --- VIEW 1: ISO COLOR CODES (16G TO 30G) --- */}
        {activeTab === "color-codes" && (
          <div className="mt-8 space-y-6">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-start gap-3">
              <Info className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>ISO 6009 Gauge Standardization Law:</strong> Gauge
                numbers vary inversely with diameter. A 16G needle has an
                external diameter of 1.65 mm, whereas a 30G needle measures just
                0.31 mm. Hub color identification is globally harmonized to
                prevent misidentification during surgical, pediatric, and
                critical care procedures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredColorCodes.map((item) => (
                <div
                  key={item.gauge}
                  className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700/80 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl font-bold font-mono text-white">
                          {item.gauge}
                        </span>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-slate-700 bg-slate-800/80">
                          <span
                            className="w-3 h-3 rounded-full border border-white/20 shrink-0"
                            style={{ backgroundColor: item.colorHex }}
                          />
                          <span className="text-xs font-semibold text-slate-200">
                            {item.color}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => copyToClipboard(item.gauge, item.gauge)}
                        title="Copy gauge"
                        className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-teal-300 hover:bg-slate-800/80 transition-colors shrink-0"
                      >
                        {copiedId === item.gauge ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Specification Box */}
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 my-3 font-mono text-xs space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Outer Diameter:</span>
                        <span className="font-bold text-amber-300">
                          {item.outerDia}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Inner Diameter:</span>
                        <span className="text-slate-200">{item.innerDia}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Wall Profile:</span>
                        <span className="text-teal-300">{item.wallType}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      <strong className="text-slate-200 block mb-0.5 font-mono text-[10px] uppercase">
                        Clinical Applications:
                      </strong>
                      {item.primaryUse}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>Bevel:</span>
                    <span className="text-slate-300">{item.bevelLength}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW 2: CLINICAL NEEDLE TYPES --- */}
        {activeTab === "clinical-types" && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredClinicalTypes.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700/80 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
              >
                <div>
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
                      title="Copy needle name"
                      className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-teal-300 hover:bg-slate-800/80 transition-colors shrink-0"
                    >
                      {copiedId === item.id ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Spec Row */}
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 my-3 font-mono text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Standard Gauges:</span>
                      <span className="font-bold text-amber-300">
                        {item.gauges}
                      </span>
                    </div>
                    {item.lengths && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">
                          Available Lengths:
                        </span>
                        <span className="text-slate-200">{item.lengths}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {item.features}
                  </p>

                  <div className="text-[11px] text-slate-400 mb-3">
                    <strong className="text-slate-300 block mb-0.5 font-mono uppercase text-[10px]">
                      Target Procedures & Tests:
                    </strong>
                    {item.primaryUses}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl">
                  <AlertCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item.clinicalNote}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- VIEW 3: SURGICAL SUTURE NEEDLES --- */}
        {activeTab === "surgical" && (
          <div className="mt-8 space-y-10">
            {/* Surgical Overview Banner */}
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Scissors className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    What is a Surgical Needle?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {SURGICAL_NEEDLES_SPECS.definition}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    {SURGICAL_NEEDLES_SPECS.anatomy.map((a) => (
                      <div
                        key={a.part}
                        className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800"
                      >
                        <strong className="text-amber-300 block mb-0.5">
                          {a.part}
                        </strong>
                        <span className="text-slate-400">{a.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Surgical Needle Point Geometries */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-white">
                  Needle Point Geometries & Tissue Matching
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {SURGICAL_NEEDLES_SPECS.types.map((type) => (
                  <div
                    key={type.name}
                    className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
                        {type.crossSection}
                      </span>
                      <h4 className="text-sm font-bold text-white mb-2">
                        {type.name}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        {type.features}
                      </p>
                      <div className="text-[11px] text-slate-400 mb-2">
                        <strong className="text-slate-300 block">
                          Target Tissue:
                        </strong>
                        {type.tissueType}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 text-[10px] text-amber-300/90 font-mono">
                      {type.clinicalNote}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Needle Curvatures & Shapes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-teal-400" />
                <h3 className="text-lg font-bold text-white">
                  Needle Curvature Arcs & Cavity Access
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SURGICAL_NEEDLES_SPECS.shapes.map((s) => (
                  <div
                    key={s.shape}
                    className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/60"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h5 className="text-sm font-bold text-white">
                        {s.shape}
                      </h5>
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {s.angle}
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 mb-2">
                      <strong className="text-slate-400 block text-[10px] uppercase font-mono">
                        Indications:
                      </strong>
                      {s.uses}
                    </div>
                    <div className="text-[11px] text-slate-400 bg-slate-950/60 p-2 rounded-lg">
                      <strong className="text-teal-300 block text-[10px] uppercase font-mono">
                        Maneuver:
                      </strong>
                      {s.manipulation}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suture Arm Configurations */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">
                  Suture Strand Configurations & Micro-Needles
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SURGICAL_NEEDLES_SPECS.configurations.map((c) => (
                  <div
                    key={c.name}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-900/40"
                  >
                    <h5 className="text-sm font-bold text-purple-300 mb-1.5">
                      {c.name}
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty Search State */}
        {filteredColorCodes.length === 0 && activeTab === "color-codes" && (
          <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl mt-6">
            <Gauge className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-300 mb-1">
              No matching gauge color specifications found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Try searching by gauge number like "18G", "21G", or color name
              like "Pink" or "Green".
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
