"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bone,
  Activity,
  AlertTriangle,
  Info,
  Search,
  BookOpen,
  Layers,
  Stethoscope,
  ShieldCheck,
  Scale,
  HelpCircle,
  Pill,
} from "lucide-react";

type PrimaryTab =
  | "overview"
  | "arthritis-types"
  | "differences"
  | "non-arthritis"
  | "symptom-clues"
  | "joint-pain-medicines";

type ArthritisCategoryFilter =
  | "All"
  | "Degenerative"
  | "Autoimmune / Inflammatory"
  | "Crystal-Induced"
  | "Infectious (Emergency)";

interface ArthritisTypeCard {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: Exclude<ArthritisCategoryFilter, "All">;
  cause: string;
  commonAreas: string;
  clues: string;
  extraNote: string;
  isEmergency?: boolean;
}

type JointMedGroupFilter =
  | "All"
  | "1. NSAIDs – Anti-inflammatory pain medicines"
  | "2. Muscle relaxants + pain relief"
  | "3. Centrally acting pain medicines";

interface JointPainMedicineCard {
  no: number;
  id: string;
  medicine: string;
  ingredients: string;
  mainRole: string;
  groups: Exclude<JointMedGroupFilter, "All">[];
  mechanism: string;
  cautionAndSideEffects: string;
  isRestricted?: boolean;
}

interface ArthritisSpecificMedicine {
  id: string;
  medicine: string;
  ingredient: string;
  drugClass: string;
  role: string;
  mechanismAndMonitoring: string;
}

const JOINT_PAIN_MEDICINES: JointPainMedicineCard[] = [
  {
    no: 1,
    id: "thionach-p",
    medicine: "Thionach-P 4/325",
    ingredients: "Paracetamol (325 mg) + Thiocolchicoside (4 mg)",
    mainRole: "Muscle spasm with pain",
    groups: ["2. Muscle relaxants + pain relief"],
    mechanism:
      "Thiocolchicoside acts on spinal GABA-A/glycine inhibitory receptors to relieve painful skeletal muscle contractures, while Paracetamol inhibits central prostaglandin synthesis.",
    cautionAndSideEffects:
      "Drowsiness, GI upset; Thiocolchicoside is strictly contraindicated in pregnancy/lactation and limited to short-term courses (<= 7 days) due to aneuploidy/seizure precautions.",
  },
  {
    no: 2,
    id: "doloxicam-dt",
    medicine: "Doloxicam DT",
    ingredients: "Piroxicam (20 mg Dispersible Tablet)",
    mainRole: "Inflammatory joint pain",
    groups: ["1. NSAIDs – Anti-inflammatory pain medicines"],
    mechanism:
      "Long-acting oxicam NSAID that inhibits COX-1 and COX-2 enzymes, reducing synovial prostaglandin synthesis, swelling, and joint stiffness.",
    cautionAndSideEffects:
      "High risk of gastric ulceration/GI bleeding, kidney injury, and fluid retention/BP rise; take after meals with gastroprotection if prescribed.",
  },
  {
    no: 3,
    id: "painvon-plus",
    medicine: "Painvon Plus",
    ingredients: "Polmacoxib (2 mg) + Paracetamol (325 mg)",
    mainRole: "Inflammatory pain (Osteoarthritis)",
    groups: ["1. NSAIDs – Anti-inflammatory pain medicines"],
    mechanism:
      "Polmacoxib is a dual COX-2 selective inhibitor and carbonic anhydrase inhibitor designed to concentrate anti-inflammatory activity in joint tissues while sparing gastric COX-1.",
    cautionAndSideEffects:
      "Cardiovascular thrombotic risk (avoid in ischemic heart disease/stroke), hypertension, renal impairment, and hepatic paracetamol limits.",
  },
  {
    no: 4,
    id: "flupikem-p",
    medicine: "Flupikem-P",
    ingredients: "Flupirtine Maleate (100 mg) + Paracetamol (325 mg)",
    mainRole: "Pain relief (Non-opioid centrally acting)",
    groups: ["3. Centrally acting pain medicines"],
    mechanism:
      "Selective neuronal potassium channel opener (SNEPCO) that hyperpolarizes spinal nociceptive neurons and indirectly antagonizes NMDA pain receptors.",
    cautionAndSideEffects:
      "CRITICAL LIVER-SAFETY CAUTION: Flupirtine carries serious risk of drug-induced liver injury (hepatotoxicity) and is NOT a routine painkiller (restricted/withdrawn in several regions; limit <= 2 weeks with LFT monitoring).",
    isRestricted: true,
  },
  {
    no: 5,
    id: "ultrazac",
    medicine: "Ultrazac",
    ingredients: "Paracetamol (325 mg) + Tramadol Hydrochloride (37.5 mg)",
    mainRole: "Moderate to severe pain",
    groups: ["3. Centrally acting pain medicines"],
    mechanism:
      "Tramadol binds central mu-opioid receptors and inhibits serotonin/norepinephrine reuptake, synergizing with Paracetamol for acute or refractory musculoskeletal pain.",
    cautionAndSideEffects:
      "Nausea, dizziness, constipation, sedation, dependence potential, and lowered seizure threshold (avoid combining with SSRIs/MAOIs due to serotonin syndrome risk).",
  },
  {
    no: 6,
    id: "myosone-plus",
    medicine: "Myosone Plus",
    ingredients: "Eperisone Hydrochloride (50 mg) + Paracetamol (325 mg)",
    mainRole: "Muscle spasm with pain",
    groups: ["2. Muscle relaxants + pain relief"],
    mechanism:
      "Eperisone relaxes skeletal muscle hypertonia via spinal reflex suppression and improves intramuscular microcirculation, paired with Paracetamol analgesia.",
    cautionAndSideEffects:
      "Generally less sedating than traditional muscle relaxants; occasional dizziness, lightheadedness, or stomach discomfort.",
  },
  {
    no: 7,
    id: "sagiflam",
    medicine: "Sagiflam",
    ingredients:
      "Aceclofenac (100 mg) + Paracetamol (325 mg) + Serratiopeptidase (15 mg)",
    mainRole: "Inflammatory musculoskeletal pain & swelling",
    groups: ["1. NSAIDs – Anti-inflammatory pain medicines"],
    mechanism:
      "Aceclofenac (preferential COX-2 NSAID) and Paracetamol block inflammatory pain, while Serratiopeptidase (proteolytic enzyme) breaks down inflammatory exudates and soft-tissue edema.",
    cautionAndSideEffects:
      "Gastric acidity/ulcer risk, renal/hepatic caution, and bleeding risk (avoid Serratiopeptidase in active peptic ulcer or bleeding disorders).",
  },
  {
    no: 8,
    id: "chymomax",
    medicine: "Chymomax",
    ingredients:
      "Aceclofenac (100 mg) + Paracetamol (325 mg) + Trypsin-Chymotrypsin",
    mainRole: "Inflammatory musculoskeletal pain & post-traumatic edema",
    groups: ["1. NSAIDs – Anti-inflammatory pain medicines"],
    mechanism:
      "Combines Aceclofenac + Paracetamol anti-inflammatory analgesia with proteolytic Trypsin-Chymotrypsin enzymes to clear fibrin clots and accelerate tissue swelling resolution.",
    cautionAndSideEffects:
      "Epigastric discomfort, nausea, renal/hepatic caution, and rare hypersensitivity to proteolytic enzymes.",
  },
  {
    no: 9,
    id: "flexura-d",
    medicine: "Flexura-D",
    ingredients: "Diclofenac Potassium (50 mg) + Metaxalone (400 mg)",
    mainRole: "Pain with muscle spasm",
    groups: [
      "1. NSAIDs – Anti-inflammatory pain medicines",
      "2. Muscle relaxants + pain relief",
    ],
    mechanism:
      "Fast-acting Diclofenac Potassium suppresses prostaglandin joint/muscle inflammation while Metaxalone depresses polysynaptic spinal reflexes to relieve acute spasm.",
    cautionAndSideEffects:
      "Drowsiness, dizziness, gastric irritation, cardiovascular/renal NSAID risks, and hemolytic anemia caution in G6PD deficiency (Metaxalone).",
  },
];

const ARTHRITIS_SPECIFIC_MEDICINES: ArthritisSpecificMedicine[] = [
  {
    id: "oxcq-200",
    medicine: "OXCQ 200",
    ingredient: "Hydroxychloroquine (200 mg)",
    drugClass:
      "Conventional Synthetic DMARD (Disease-Modifying Antirheumatic Drug)",
    role: "DMARD for autoimmune arthritis (Rheumatoid Arthritis, Lupus/SLE)",
    mechanismAndMonitoring:
      "Modulates lysosomal pH and Toll-like receptor antigen presentation to slow autoimmune joint damage over 8–12 weeks. Requires baseline and periodic dilated retinal eye screening (maculopathy precaution).",
  },
  {
    id: "denzkort-6",
    medicine: "Denzkort-6",
    ingredient: "Deflazacort (6 mg)",
    drugClass: "Systemic Glucocorticoid (Corticosteroid)",
    role: "Corticosteroid used to rapidly control inflammatory arthritis flares",
    mechanismAndMonitoring:
      "Potently suppresses inflammatory cytokines and immune cell migration; slightly lower bone/glucose impact than prednisolone, but still requires tapering and monitoring for hyperglycemia, infection, and osteoporosis.",
  },
  {
    id: "omnacortil",
    medicine: "Omnacortil (5 mg / 10 mg / 20 mg)",
    ingredient: "Prednisolone",
    drugClass: "Systemic Glucocorticoid (Corticosteroid)",
    role: "Corticosteroid used for short-term bridging control of acute joint inflammation",
    mechanismAndMonitoring:
      "Rapidly relieves severe synovitis while slower DMARDs (like Hydroxychloroquine or Methotrexate) take effect. Never stop abruptly after prolonged use (adrenal crisis risk).",
  },
];

const JOINT_ANATOMY_PARTS = [
  {
    part: "Bone",
    function: "Provides structural framework and weight-bearing support",
  },
  {
    part: "Articular Cartilage",
    function:
      "Smooth, shock-absorbing tissue that cushions bone ends and prevents friction",
  },
  {
    part: "Synovial Fluid",
    function:
      "Viscous lubricant inside the joint cavity that nourishes cartilage and reduces friction",
  },
  {
    part: "Synovial Membrane",
    function:
      "Inner joint capsule lining that produces lubricating synovial fluid",
  },
  {
    part: "Ligaments",
    function:
      "Tough fibrous bands connecting bone to bone to stabilize the joint",
  },
  {
    part: "Tendons",
    function:
      "Fibrous cords connecting muscle to bone to transmit movement force",
  },
];

const FIVE_CAUSES_OF_JOINT_PAIN = [
  {
    number: "01",
    title: "Cartilage Damage",
    mechanism:
      "Protective articular cartilage gradually wears down, causing bone ends to rub with less cushioning.",
    example: "Osteoarthritis (OA)",
  },
  {
    number: "02",
    title: "Autoimmune Inflammation",
    mechanism:
      "The synovial joint lining becomes inflamed by immune cells, leading to warmth, swelling, pain, and stiffness.",
    example: "Rheumatoid Arthritis (RA)",
  },
  {
    number: "03",
    title: "Crystal Accumulation",
    mechanism:
      "Sharp microscopic crystals (uric acid or calcium pyrophosphate) precipitate inside the joint space and trigger intense acute inflammation.",
    example: "Gout & Pseudogout",
  },
  {
    number: "04",
    title: "Joint Infection",
    mechanism:
      "Bacteria or other microorganisms invade the joint cavity, rapidly destroying cartilage if not treated urgently.",
    example: "Septic Arthritis (Medical Emergency)",
  },
  {
    number: "05",
    title: "Injury or Overuse",
    mechanism:
      "Mechanical trauma, stretching, or repetitive stress damages ligaments, tendons, or periarticular structures.",
    example: "Ligament Sprain or Sports Injury",
  },
];

const ARTHRITIS_TYPES: ArthritisTypeCard[] = [
  {
    id: "osteoarthritis",
    number: "01",
    name: "1. Osteoarthritis (OA)",
    subtitle: "Degenerative 'Wear-and-Tear' Arthritis",
    category: "Degenerative",
    cause:
      "Gradual breakdown of protective articular cartilage and remodeling changes in underlying subchondral bone.",
    commonAreas:
      "Knees, hips, hands (DIP/PIP joints, base of thumb), and cervical/lumbar spine.",
    clues:
      "Pain worsens with weight-bearing activity and improves with rest; brief stiffness (< 30 min) occurs after inactivity.",
    extraNote:
      "Key risk factors: Increasing age, excess body weight/obesity, previous joint injury, and genetics.",
  },
  {
    id: "rheumatoid-arthritis",
    number: "02",
    name: "2. Rheumatoid Arthritis (RA)",
    subtitle: "Systemic Autoimmune Arthritis",
    category: "Autoimmune / Inflammatory",
    cause:
      "Immune system mistakenly attacks the synovial joint lining (synovitis), forming invasive pannus that erodes cartilage and bone.",
    commonAreas: "Small joints of hands (MCP, PIP), wrists, and feet.",
    clues:
      "Prolonged morning stiffness (> 60 minutes), boggy joint swelling, and characteristically symmetrical joint involvement (both sides).",
    extraNote:
      "Systemic disease—can also affect extra-articular organs such as lungs, eyes, blood vessels, and skin (rheumatoid nodules).",
  },
  {
    id: "gouty-arthritis",
    number: "03",
    name: "3. Gouty Arthritis (Gout)",
    subtitle: "Uric Acid Crystal-Induced Arthritis",
    category: "Crystal-Induced",
    cause:
      "Elevated blood uric acid leads to needle-shaped monosodium urate crystals accumulating inside joints.",
    commonAreas:
      "Classic big toe base (podagra — 1st MTP joint), midfoot, ankle, and knee.",
    clues:
      "Sudden, excruciating overnight pain, bright redness, intense heat, and extreme tenderness (even a bedsheet hurts).",
    extraNote:
      "Risk factors: High serum uric acid, kidney impairment, diuretics, dehydration, alcohol, and purine-rich foods.",
  },
  {
    id: "psoriatic-arthritis",
    number: "04",
    name: "4. Psoriatic Arthritis (PsA)",
    subtitle: "Psoriasis-Associated Inflammatory Arthritis",
    category: "Autoimmune / Inflammatory",
    cause:
      "Immune-system-mediated joint and entheseal inflammation linked to psoriasis.",
    commonAreas:
      "Fingers, toes, spine, sacroiliac joints, and tendon insertions (enthesitis).",
    clues:
      "Joint pain paired with scaly silvery-red psoriasis skin patches or nail pitting; sometimes an entire finger or toe swells uniformly ('sausage digit' / dactylitis).",
    extraNote:
      "Can occasionally appear before visible skin psoriasis plaques develop.",
  },
  {
    id: "ankylosing-spondylitis",
    number: "05",
    name: "5. Ankylosing Spondylitis (AS)",
    subtitle: "Chronic Inflammatory Spinal Arthritis",
    category: "Autoimmune / Inflammatory",
    cause:
      "Chronic immune-mediated inflammation (strongly associated with HLA-B27) affecting spinal joints and ligaments, leading to progressive bony fusion.",
    commonAreas:
      "Lumbar/thoracic spine and sacroiliac (SI) joints (where the spine meets the pelvis).",
    clues:
      "Long-lasting inflammatory lower-back pain and marked morning stiffness in young adults that characteristically IMPROVES with exercise/movement and worsens with rest.",
    extraNote:
      "Opposite of mechanical back pain, which worsens with activity and improves with rest.",
  },
  {
    id: "septic-arthritis",
    number: "06",
    name: "6. Septic Arthritis (Infectious Arthritis)",
    subtitle: "MEDICAL EMERGENCY • Joint Cavity Infection",
    category: "Infectious (Emergency)",
    cause:
      "Direct bacterial (most commonly Staphylococcus aureus) or microbial infection inside a joint space.",
    commonAreas:
      "Knee and hip (typically a single large joint — monoarthritis).",
    clues:
      "Sudden severe pain, a hot, red, tensely swollen joint, inability to bear weight or move the joint, and systemic fever/chills.",
    extraNote:
      "Requires URGENT hospital evaluation, joint-fluid aspiration, and IV antibiotics to prevent permanent joint destruction and sepsis.",
    isEmergency: true,
  },
  {
    id: "juvenile-idiopathic-arthritis",
    number: "07",
    name: "7. Juvenile Idiopathic Arthritis (JIA)",
    subtitle: "Childhood Autoimmune Arthritis",
    category: "Autoimmune / Inflammatory",
    cause:
      "Abnormal immune-system activity causing chronic synovial inflammation in children.",
    commonAreas:
      "Knees, ankles, wrists, hands, or systemic multi-joint involvement.",
    clues:
      "Persistent joint swelling, morning limp/stiffness, and pain lasting >= 6 weeks in children beginning before age 16.",
    extraNote:
      "Requires pediatric rheumatology monitoring, including routine eye exams to screen for painless uveitis.",
  },
  {
    id: "pseudogout",
    number: "08",
    name: "8. Pseudogout (CPPD Arthritis)",
    subtitle: "Calcium Pyrophosphate Crystal Arthritis",
    category: "Crystal-Induced",
    cause:
      "Rhomboid-shaped calcium pyrophosphate dihydrate (CPPD) crystals deposit in articular cartilage (chondrocalcinosis) and shed into the joint.",
    commonAreas: "Knee and wrist (most common), shoulder, and ankle.",
    clues:
      "Sudden acute pain, warmth, and swelling closely mimicking a gout attack, typically in adults over age 60.",
    extraNote:
      "Confirmed via polarized light microscopy of aspirated joint fluid (weakly positively birefringent rhomboid crystals).",
  },
];

const MAIN_DIFFERENCES_TABLE = [
  {
    type: "Osteoarthritis (OA)",
    problem: "Mechanical cartilage degeneration & bone remodeling",
  },
  {
    type: "Rheumatoid Arthritis (RA)",
    problem: "Autoimmune system attacks synovial joint lining symmetrically",
  },
  {
    type: "Gout",
    problem: "Monosodium urate (uric acid) needle crystals in joint",
  },
  {
    type: "Psoriatic Arthritis (PsA)",
    problem: "Immune-mediated joint/entheseal inflammation linked to psoriasis",
  },
  {
    type: "Ankylosing Spondylitis (AS)",
    problem:
      "Chronic axial inflammation affecting spine & sacroiliac pelvis joints",
  },
  {
    type: "Septic Arthritis",
    problem:
      "Acute bacterial/microbial infection inside the joint cavity (Emergency)",
  },
  {
    type: "Pseudogout (CPPD)",
    problem: "Calcium pyrophosphate crystal accumulation in cartilage/joint",
  },
];

const OTHER_JOINT_PAIN_CAUSES = [
  {
    condition: "Bursitis",
    description:
      "Inflammation of fluid-filled cushioning sacs (bursae) near joints (e.g., shoulder, elbow, hip, knee) from repetitive friction or pressure.",
  },
  {
    condition: "Tendinitis",
    description:
      "Inflammation or micro-tear irritation of tendons connecting muscle to bone (e.g., Achilles tendinitis, rotator cuff, tennis elbow).",
  },
  {
    condition: "Ligament Sprain",
    description:
      "Overstretching or tearing of tough ligaments connecting bone to bone after a twist or fall (e.g., ankle sprain, ACL sprain).",
  },
  {
    condition: "Muscle Strain",
    description:
      "Overstretching or tearing of muscle fibers or musculotendinous junctions due to sudden force or overuse.",
  },
  {
    condition: "Fibromyalgia",
    description:
      "Central pain-processing disorder causing widespread musculoskeletal aching, tender points, fatigue, and sleep disturbance—without true joint inflammation.",
  },
  {
    condition: "Vitamin D Deficiency",
    description:
      "Low Vitamin D levels can cause diffuse bone ache (osteomalacia) and proximal muscle weakness, but does NOT automatically mean arthritis.",
  },
];

const SYMPTOM_PATTERN_CLUES = [
  {
    patientDescribes:
      "Knee pain when walking or climbing stairs, eased by rest",
    possibleCondition: "Osteoarthritis (OA)",
  },
  {
    patientDescribes:
      "Finger and wrist swelling on BOTH hands with prolonged morning stiffness",
    possibleCondition: "Rheumatoid Arthritis (RA)",
  },
  {
    patientDescribes:
      "Sudden, severe, red, hot pain at the base of the big toe",
    possibleCondition: "Gouty Arthritis",
  },
  {
    patientDescribes:
      "Joint pain paired with scaly skin patches or swollen 'sausage' finger/toe",
    possibleCondition: "Psoriatic Arthritis (PsA)",
  },
  {
    patientDescribes:
      "Long-lasting lower-back stiffness in a young adult, better with exercise/movement",
    possibleCondition: "Ankylosing Spondylitis (AS)",
  },
  {
    patientDescribes:
      "Sudden hot, red, swollen single joint accompanied by fever",
    possibleCondition: "Septic Arthritis (URGENT — Rule out immediately)",
  },
  {
    patientDescribes:
      "Sudden acute swollen, warm knee or wrist in an older adult",
    possibleCondition: "Gout or Pseudogout (CPPD)",
  },
];

export default function JointPainArthritisPage() {
  const [activeTab, setActiveTab] = useState<PrimaryTab>("overview");
  const [arthritisSearch, setArthritisSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<ArthritisCategoryFilter>("All");

  const [medSearch, setMedSearch] = useState("");
  const [selectedMedGroup, setSelectedMedGroup] =
    useState<JointMedGroupFilter>("All");

  const filteredJointMeds = useMemo(() => {
    return JOINT_PAIN_MEDICINES.filter((item) => {
      const matchesGroup =
        selectedMedGroup === "All" || item.groups.includes(selectedMedGroup);
      const q = medSearch.trim().toLowerCase();
      const matchesQuery =
        !q ||
        item.medicine.toLowerCase().includes(q) ||
        item.ingredients.toLowerCase().includes(q) ||
        item.mainRole.toLowerCase().includes(q);
      return matchesGroup && matchesQuery;
    });
  }, [medSearch, selectedMedGroup]);

  const filteredArthritis = useMemo(() => {
    return ARTHRITIS_TYPES.filter((item) => {
      const matchesCat =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = arthritisSearch.trim().toLowerCase();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.cause.toLowerCase().includes(q) ||
        item.commonAreas.toLowerCase().includes(q) ||
        item.clues.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [arthritisSearch, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-amber-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Clinical Overview</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-3">
              <Bone className="w-3.5 h-3.5" /> Rheumatology &amp; Orthopedics
              Codex &bull; Condition #09
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Joint Pain &amp; Arthritis (Sandhivata / Amavata)
            </h1>

            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Foundational Distinction:{" "}
                <strong className="text-teal-300">
                  Joint Pain (Arthralgia)
                </strong>{" "}
                is a symptom (pain in one or more joints), whereas{" "}
                <strong className="text-amber-300">Arthritis</strong> is active
                joint inflammation or structural joint disease causing pain,
                swelling, stiffness, and restricted motion.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-teal-400 font-mono">
                    6 Joint Structures
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Bone &bull; Cartilage &bull; Synovial Fluid &bull; Membrane
                    &bull; Ligaments &bull; Tendons
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-400 font-mono">
                    8 Major Arthritis Types
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    OA &bull; RA &bull; Gout &bull; PsA &bull; AS &bull; Septic
                    &bull; JIA &bull; Pseudogout
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Step-by-step beginner&apos;s clinical guide to synovial joint
              anatomy, the 5 root causes of joint pain, 8 major types of
              arthritis, non-arthritis soft-tissue mimics, symptom-pattern
              recognition, and septic arthritis red-flag triage.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Total Known Types
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                100+ Types
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-rose-500/30 bg-rose-950/20 backdrop-blur-md">
              <span className="text-[10px] font-mono text-rose-300 uppercase tracking-widest block">
                Red Flag Priority
              </span>
              <span className="text-sm font-bold text-rose-300 font-mono block mt-0.5">
                Hot Swollen Joint
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="w-full overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>1 &amp; 2. Joint Anatomy &amp; 5 Causes</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("arthritis-types")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "arthritis-types"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>3. Types of Arthritis (8 Cards)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("differences")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "differences"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>4. Main Differences Table</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("non-arthritis")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "non-arthritis"
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>5. Non-Arthritis Joint Pain (6)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("symptom-clues")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "symptom-clues"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>6. Symptom Clues &amp; Warning</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("joint-pain-medicines")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "joint-pain-medicines"
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(34,197,94,0.9)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Pill className="w-4 h-4 shrink-0" />
              <span>7. Joint &amp; Pain Medicines</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: JOINT ANATOMY (6 PARTS) & 5 CAUSES OF JOINT PAIN                   */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Arthralgia vs Arthritis Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2 leading-relaxed">
                <span className="text-[10px] font-mono uppercase text-teal-300 font-bold block">
                  Key Distinction #1 &bull; Symptom
                </span>
                <h2 className="text-lg font-bold text-white">
                  Joint Pain (Arthralgia)
                </h2>
                <p className="text-slate-300">
                  <strong>Arthralgia</strong> simply means pain in one or more
                  joints. It is a <strong>symptom</strong>, not necessarily a
                  structural joint disease—for example, viral fever, sprains, or
                  Vitamin D deficiency can cause joint aching without true
                  arthritis.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-amber-500/30 bg-slate-900/40 backdrop-blur-md space-y-2 leading-relaxed">
                <span className="text-[10px] font-mono uppercase text-amber-300 font-bold block">
                  Key Distinction #2 &bull; Joint Disease
                </span>
                <h2 className="text-lg font-bold text-white">Arthritis</h2>
                <p className="text-slate-300">
                  <strong>Arthritis</strong> means active inflammation or
                  degenerative disease affecting a joint—causing pain, swelling,
                  warmth, stiffness, and reduced range of motion.{" "}
                  <span className="text-amber-300 font-semibold">
                    Important: Not every joint pain is arthritis, and treatment
                    depends on the exact underlying cause.
                  </span>
                </p>
              </div>
            </div>

            {/* 1. What Is a Joint? (6 Main Parts) */}
            <div className="space-y-3">
              <div>
                <h2 className="text-xl font-bold text-white">
                  1. What Is a Joint? (6 Main Structural Parts)
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  A joint is the junction where two or more bones meet, allowing
                  your body to move, bend, bear weight, and rotate smoothly.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[600px]">
                  <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5 text-teal-300">Joint Part</th>
                      <th className="p-3.5 text-white">
                        Anatomical &amp; Mechanical Function
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    {JOINT_ANATOMY_PARTS.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-900/40 transition-colors"
                      >
                        <td className="p-3.5 font-bold font-mono text-amber-300">
                          {row.part}
                        </td>
                        <td className="p-3.5 text-slate-200">{row.function}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2. What Causes Joint Pain? (5 Core Mechanisms) */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">
                2. What Causes Joint Pain? (5 Core Mechanisms)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
                {FIVE_CAUSES_OF_JOINT_PAIN.map((item) => (
                  <div
                    key={item.number}
                    className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-3 leading-relaxed"
                  >
                    <div className="space-y-2">
                      <span className="text-lg font-extrabold font-mono text-amber-400 block">
                        {item.number}
                      </span>
                      <h3 className="text-sm font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-slate-300">{item.mechanism}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-teal-300">
                      Example: {item.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: 3. TYPES OF ARTHRITIS (8 FILTERABLE CARDS)                         */}
        {/* ========================================================================= */}
        {activeTab === "arthritis-types" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Search & Category Filter */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={arthritisSearch}
                    onChange={(e) => setArthritisSearch(e.target.value)}
                    placeholder="Search Osteoarthritis, Rheumatoid, Gout, Big toe, Spine..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60"
                  />
                  {arthritisSearch && (
                    <button
                      type="button"
                      onClick={() => setArthritisSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white bg-slate-800 px-1.5 py-0.5 rounded"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <span className="text-xs font-mono text-slate-400">
                  Showing{" "}
                  <strong className="text-amber-300">
                    {filteredArthritis.length}
                  </strong>{" "}
                  of <strong>{ARTHRITIS_TYPES.length}</strong> major arthritis
                  types (100+ exist overall)
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {(
                  [
                    "All",
                    "Degenerative",
                    "Autoimmune / Inflammatory",
                    "Crystal-Induced",
                    "Infectious (Emergency)",
                  ] as ArthritisCategoryFilter[]
                ).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? "bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.35)]"
                        : "bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 8 Arthritis Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredArthritis.map((item) => (
                <div
                  key={item.id}
                  className={`p-6 rounded-2xl border backdrop-blur-md flex flex-col justify-between space-y-4 ${
                    item.isEmergency
                      ? "border-rose-500/50 bg-rose-950/20"
                      : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                  }`}
                >
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-bold ${
                            item.isEmergency
                              ? "bg-rose-500/20 border-rose-500/40 text-rose-300"
                              : "bg-amber-500/10 border-amber-500/20 text-amber-300"
                          }`}
                        >
                          {item.category}
                        </span>
                        <span className="text-[11px] font-mono text-teal-300">
                          {item.subtitle}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {item.name}
                      </h3>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800/70 pt-3">
                      <div>
                        <strong className="text-amber-300">Cause: </strong>
                        <span>{item.cause}</span>
                      </div>
                      <div>
                        <strong className="text-cyan-300">
                          Common Areas:{" "}
                        </strong>
                        <span>{item.commonAreas}</span>
                      </div>
                      <div>
                        <strong className="text-white">Clinical Clues: </strong>
                        <span>{item.clues}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-3 rounded-xl border flex items-start gap-2 text-[11px] ${
                      item.isEmergency
                        ? "bg-rose-950/60 border-rose-500/40 text-rose-200"
                        : "bg-slate-950/70 border-slate-800 text-slate-300"
                    }`}
                  >
                    <Info
                      className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                        item.isEmergency ? "text-rose-400" : "text-amber-400"
                      }`}
                    />
                    <span>{item.extraNote}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: 4. UNDERSTAND THE MAIN DIFFERENCES                                 */}
        {/* ========================================================================= */}
        {activeTab === "differences" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <h2 className="text-xl font-bold text-white">
                4. Understand the Main Underlying Differences
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Quick comparison of the primary pathology driving each major
                type of arthritis.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[640px]">
                <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5 text-amber-300">Arthritis Type</th>
                    <th className="p-3.5 text-teal-300">
                      Main Underlying Problem
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {MAIN_DIFFERENCES_TABLE.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="p-3.5 font-bold text-white">{row.type}</td>
                      <td className="p-3.5 text-slate-200">{row.problem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: 5. OTHER CAUSES OF JOINT PAIN (NOT NECESSARILY ARTHRITIS)          */}
        {/* ========================================================================= */}
        {activeTab === "non-arthritis" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-1">
                5. Other Causes of Joint Pain (Not Necessarily Arthritis)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Pain felt around a joint often originates in surrounding soft
                tissues (bursae, tendons, ligaments, muscles) or systemic
                deficiencies rather than intra-articular joint inflammation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
              {OTHER_JOINT_PAIN_CAUSES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-2 leading-relaxed"
                >
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-bold">
                    Periarticular / Systemic Cause #{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {item.condition}
                  </h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: 6. SYMPTOM PATTERN CLUES & URGENT RED-FLAG WARNING                 */}
        {/* ========================================================================= */}
        {activeTab === "symptom-clues" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="text-xl font-bold text-white">
                6. How Can You Identify the Type From Symptom Patterns?
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Recognize clinical patterns rather than assuming every joint
                pain is the same disease. These are diagnostic clues—a clinician
                confirms with physical exam, blood tests, X-ray/ultrasound, or
                joint-fluid analysis.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[660px]">
                <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5 text-cyan-300">
                      What the Patient Describes
                    </th>
                    <th className="p-3.5 text-amber-300">Possible Condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {SYMPTOM_PATTERN_CLUES.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="p-3.5 text-slate-200">
                        &ldquo;{row.patientDescribes}&rdquo;
                      </td>
                      <td className="p-3.5 font-bold font-mono text-amber-300">
                        {row.possibleCondition}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Important Warning Banner */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Important Red-Flag Warning: Rule Out Septic Arthritis
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  A <strong>suddenly hot, red, swollen joint</strong>
                  —particularly when accompanied by{" "}
                  <strong>fever or severe inability to move the joint</strong>
                  —requires urgent medical assessment to rule out{" "}
                  <strong>septic arthritis</strong>. Do not wait for it to
                  resolve on its own.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* NEW SECTION: JOINT PAIN & ARTHRITIS – MEDICINES (9 + 3 FORMULARY)         */}
        {/* ========================================================================= */}
        {activeTab === "joint-pain-medicines" && (
          <section
            id="joint-pain-medicines"
            className="space-y-8 pt-8 border-t border-slate-800/80 scroll-mt-28"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                  Pharmacology Reference &bull; 9 Pain Medicines + 3
                  Arthritis-Specific Agents
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Joint Pain &amp; Arthritis – Medicines
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
                  Compare symptomatic musculoskeletal pain formulations (NSAIDs,
                  muscle relaxants, centrally acting analgesics) against true
                  disease-modifying and anti-inflammatory arthritis medicines.
                </p>
              </div>

              <span className="text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-xl shrink-0">
                Study Set:{" "}
                <strong className="text-teal-300">9 Pain Meds</strong> +{" "}
                <strong className="text-amber-300">3 Arthritis Meds</strong>
              </span>
            </div>

            {/* 9 Musculoskeletal Pain Medicines Summary Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
              <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3.5 text-slate-400">No.</th>
                    <th className="p-3.5 text-amber-300">Medicine</th>
                    <th className="p-3.5 text-cyan-300">Ingredients</th>
                    <th className="p-3.5 text-teal-300">
                      Main Therapeutic Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {JOINT_PAIN_MEDICINES.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="p-3.5 font-mono text-slate-400">
                        {row.no}
                      </td>
                      <td className="p-3.5 font-bold text-white">
                        {row.medicine}
                      </td>
                      <td className="p-3.5 font-mono text-cyan-300">
                        {row.ingredients}
                      </td>
                      <td className="p-3.5 text-teal-300 font-medium">
                        {row.mainRole}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Search & 3 Pharmacological Group Filter Chips */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={medSearch}
                    onChange={(e) => setMedSearch(e.target.value)}
                    placeholder="Search Thionach-P, Sagiflam, Aceclofenac, Tramadol..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/60"
                  />
                  {medSearch && (
                    <button
                      type="button"
                      onClick={() => setMedSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white bg-slate-800 px-1.5 py-0.5 rounded"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <span className="text-xs font-mono text-slate-400">
                  Showing{" "}
                  <strong className="text-teal-300">
                    {filteredJointMeds.length}
                  </strong>{" "}
                  of <strong>{JOINT_PAIN_MEDICINES.length}</strong> pain
                  formulations
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {(
                  [
                    "All",
                    "1. NSAIDs – Anti-inflammatory pain medicines",
                    "2. Muscle relaxants + pain relief",
                    "3. Centrally acting pain medicines",
                  ] as JointMedGroupFilter[]
                ).map((grp) => (
                  <button
                    key={grp}
                    type="button"
                    onClick={() => setSelectedMedGroup(grp)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedMedGroup === grp
                        ? "bg-teal-500 text-slate-950 shadow-[0_0_12px_rgba(20,184,166,0.35)]"
                        : "bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {grp}
                  </button>
                ))}
              </div>
            </div>

            {/* 9 Pain Medicine Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-xs">
              {filteredJointMeds.map((med) => (
                <div
                  key={med.id}
                  className={`p-5 rounded-2xl border backdrop-blur-md flex flex-col justify-between space-y-3 leading-relaxed ${
                    med.isRestricted
                      ? "border-rose-500/40 bg-rose-950/15"
                      : "border-slate-800 bg-slate-900/40"
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-950 border border-slate-700 text-slate-300 font-bold">
                        #{med.no}
                      </span>
                      {med.groups.map((g, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-300 font-bold"
                        >
                          {g}
                        </span>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white">
                        {med.medicine}
                      </h3>
                      <p className="font-mono text-amber-300 text-[11px] mt-0.5">
                        {med.ingredients}
                      </p>
                    </div>

                    <p className="text-slate-300">
                      <strong className="text-cyan-300">
                        Role &amp; Mechanism:{" "}
                      </strong>
                      {med.mainRole} — {med.mechanism}
                    </p>
                  </div>

                  <div
                    className={`p-3 rounded-xl border text-[11px] ${
                      med.isRestricted
                        ? "bg-rose-950/50 border-rose-500/40 text-rose-200"
                        : "bg-slate-950/70 border-slate-800 text-slate-300"
                    }`}
                  >
                    <strong
                      className={
                        med.isRestricted ? "text-rose-300" : "text-amber-300"
                      }
                    >
                      Safety &amp; Side Effects:{" "}
                    </strong>
                    {med.cautionAndSideEffects}
                  </div>
                </div>
              ))}
            </div>

            {/* Important: Arthritis-Specific Medicines (3 Agents) */}
            <div className="p-6 rounded-2xl border border-amber-500/35 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-5">
              <div>
                <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest block mb-1">
                  Disease-Modifying &amp; Anti-Inflammatory Arthritis Control (3
                  Medicines)
                </span>
                <h3 className="text-xl font-bold text-white">
                  Important: Arthritis-Specific Medicines (Beyond Pain Relief)
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  <strong>The Key Difference:</strong> Painkillers and NSAIDs
                  only reduce symptoms.{" "}
                  <strong>Hydroxychloroquine (OXCQ 200)</strong> modifies the
                  autoimmune disease process in rheumatoid arthritis, while{" "}
                  <strong>Corticosteroids (Denzkort-6 / Omnacortil)</strong>{" "}
                  suppress acute inflammation but are not a substitute for
                  long-term DMARD therapy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
                {ARTHRITIS_SPECIFIC_MEDICINES.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-2 leading-relaxed"
                  >
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold inline-block">
                      {item.drugClass}
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {item.medicine}
                    </h4>
                    <p className="font-mono text-teal-300 text-[11px]">
                      Ingredient: {item.ingredient}
                    </p>
                    <p className="text-slate-200">
                      <strong className="text-amber-300">Role: </strong>
                      {item.role}
                    </p>
                    <p className="text-slate-400 pt-2 border-t border-slate-800/80">
                      {item.mechanismAndMonitoring}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
