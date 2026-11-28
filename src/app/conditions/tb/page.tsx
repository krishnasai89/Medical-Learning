"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Wind,
  Activity,
  AlertTriangle,
  Info,
  Sparkles,
  Pill,
  Search,
  BookOpen,
  Layers,
  Stethoscope,
  ShieldCheck,
  Microscope,
  Package,
  AlertCircle,
} from "lucide-react";

type PrimaryTab =
  | "overview"
  | "types"
  | "first-line-att"
  | "brand-kits"
  | "dr-tb-diagnosis";

interface FirstLineDrugCard {
  id: string;
  letter: string;
  name: string;
  drugClass: string;
  mainAction: string;
  mechanism: string;
  usedIn: string;
  sideEffects: string;
  clinicalPearl: string;
}

interface BrandKitCard {
  id: string;
  brandName: string;
  drugCount: string;
  comboCode: string;
  ingredients: string[];
  drugClass: string;
  mainAction: string;
  howItWorks: string[];
  usedFor: string;
  sideEffects: string;
  importantDistinction: string;
}

const EXTRAPULMONARY_SITES = [
  {
    id: "pulmonary",
    badge: "Primary Site • Contagious",
    title: "1. Pulmonary TB (Lungs)",
    clues: [
      "Cough lasting 2 weeks or more",
      "Cough with sputum or blood (hemoptysis)",
      "Chest pain, evening fever & drenching night sweats",
      "Unexplained weight loss & fatigue",
    ],
    urgent: false,
  },
  {
    id: "lymph-node",
    badge: "Most Common Extrapulmonary TB",
    title: "2. Lymph Node TB (TB Lymphadenitis)",
    clues: [
      "Painless, firm swelling in the neck (cervical lymph nodes)",
      "Enlarged, matted lymph nodes",
      "Sometimes low-grade fever and weight loss",
    ],
    urgent: false,
  },
  {
    id: "bone-spine",
    badge: "Skeletal / Pott's Spine",
    title: "3. Bone and Spine TB",
    clues: [
      "Persistent localized back pain or bone pain",
      "Spinal deformity (gibbus) in advanced cases",
      "Difficulty moving or neurological limb weakness",
    ],
    urgent: false,
  },
  {
    id: "tb-meningitis",
    badge: "MEDICAL EMERGENCY",
    title: "4. TB Meningitis (Brain & Spinal Cord Membranes)",
    clues: [
      "Persistent, worsening headache & fever",
      "Neck stiffness (meningismus)",
      "Vomiting, confusion, or altered consciousness",
    ],
    urgent: true,
  },
  {
    id: "genitourinary",
    badge: "Extrapulmonary • Renal & Reproductive",
    title: "5. Genitourinary TB",
    clues: [
      "Blood in urine (sterile pyuria / hematuria)",
      "Painful urination (dysuria) & frequent urination",
      "Sometimes male or female infertility",
    ],
    urgent: false,
  },
  {
    id: "abdominal",
    badge: "Extrapulmonary • GI & Peritoneum",
    title: "6. Abdominal TB",
    clues: [
      "Chronic abdominal pain & loss of appetite",
      "Unexplained weight loss",
      "Abdominal swelling (ascites) & sometimes diarrhoea",
    ],
    urgent: false,
  },
  {
    id: "miliary",
    badge: "SERIOUS DISSEMINATED CONDITION",
    title: "7. Miliary TB (Disseminated TB)",
    clues: [
      "TB bacteria spread via bloodstream to multiple organs simultaneously",
      "Persistent high fever & severe weakness",
      "Profound weight loss & multi-organ involvement",
    ],
    urgent: true,
  },
];

const DRUG_RESISTANCE_TYPES = [
  {
    type: "Drug-Sensitive TB (DS-TB)",
    meaning:
      "TB bacteria respond fully to standard first-line TB medicines (HRZE).",
  },
  {
    type: "Mono-Resistant TB",
    meaning: "Resistant to a single first-line anti-TB medicine.",
  },
  {
    type: "Poly-Resistant TB",
    meaning:
      "Resistant to more than one first-line medicine, but NOT both Isoniazid and Rifampicin together.",
  },
  {
    type: "MDR-TB (Multidrug-Resistant)",
    meaning:
      "Resistant to at least BOTH Isoniazid (H) and Rifampicin (R)—the two most potent first-line drugs.",
  },
  {
    type: "Pre-XDR-TB",
    meaning:
      "MDR/RR-TB with additional resistance to any fluoroquinolone (Moxifloxacin / Levofloxacin).",
  },
  {
    type: "XDR-TB (Extensively Drug-Resistant)",
    meaning:
      "MDR/RR-TB with fluoroquinolone resistance PLUS resistance to at least one additional Group A drug (Bedaquiline or Linezolid).",
  },
];

const FIRST_LINE_DRUGS: FirstLineDrugCard[] = [
  {
    id: "isoniazid",
    letter: "H",
    name: "1. Isoniazid (H / INH)",
    drugClass: "Antimycobacterial Antibiotic (Hydrazide Prodrug)",
    mainAction:
      "Prevents TB bacteria from making mycolic acid, an essential structural component of their cell wall.",
    mechanism:
      "Activated by bacterial catalase-peroxidase (KatG) to inhibit InhA, blocking mycolic acid synthesis and causing bactericidal cell-wall collapse.",
    usedIn:
      "Active TB combination treatment (2HRZE/4HRE) and selected latent TB preventive regimens.",
    sideEffects:
      "Liver injury (hepatotoxicity) and peripheral neuropathy (tingling or numbness in hands and feet).",
    clinicalPearl:
      "Doctors routinely prescribe Vitamin B6 (Pyridoxine 10–50 mg/day) alongside Isoniazid to prevent peripheral neuropathy.",
  },
  {
    id: "rifampicin",
    letter: "R",
    name: "2. Rifampicin (R / RIF)",
    drugClass: "Rifamycin Antimycobacterial Antibiotic",
    mainAction:
      "Blocks bacterial RNA production by inhibiting DNA-dependent RNA polymerase.",
    mechanism:
      "Binds the beta-subunit of mycobacterial DNA-dependent RNA polymerase, halting mRNA transcription and killing both actively dividing and semi-dormant persister bacilli.",
    usedIn:
      "Active TB combination treatment (Intensive & Continuation phases) and selected latent TB regimens.",
    sideEffects:
      "Liver injury, harmless orange-red discoloration of urine, sweat, saliva, and tears (stains contact lenses), and potent CYP450 enzyme induction causing major drug interactions.",
    clinicalPearl:
      "Warn patients that orange-red urine/tears are normal, and check drug interactions (reduces effectiveness of oral contraceptives, warfarin, antiretrovirals, and steroids).",
  },
  {
    id: "pyrazinamide",
    letter: "Z",
    name: "3. Pyrazinamide (Z / PZA)",
    drugClass: "Antimycobacterial Antibiotic (Sterilizing Agent)",
    mainAction:
      "Converted inside susceptible TB bacteria into active pyrazinoic acid, disrupting bacterial energy and membrane functions.",
    mechanism:
      "Activated by bacterial pyrazinamidase in acidic inflammatory macrophage environments, collapsing membrane proton-motive force and killing intracellular persisters.",
    usedIn:
      "Initial 2-month intensive phase (HRZE) of drug-sensitive TB regimens (stopped after month 2).",
    sideEffects:
      "Liver injury (hepatotoxicity), increased blood uric acid (hyperuricemia), and joint pain (arthralgia / gout flares).",
    clinicalPearl:
      "Used strictly during the first 2-month intensive phase to shorten total TB therapy from 9–12 months down to 6 months.",
  },
  {
    id: "ethambutol",
    letter: "E",
    name: "4. Ethambutol (E / EMB)",
    drugClass:
      "Antimycobacterial Antibiotic (Cell-Wall Arabinogalactan Blocker)",
    mainAction:
      "Blocks arabinosyl transferase enzymes, interfering with TB bacterial cell-wall formation.",
    mechanism:
      "Inhibits mycobacterial arabinosyl transferases (EmbA/B/C), halting arabinogalactan polymerization in the cell wall and preventing emergence of resistance to companion drugs.",
    usedIn:
      "Combination treatment for drug-sensitive TB (both intensive and Indian NTEP continuation phases).",
    sideEffects:
      "Optic neuritis (dose-dependent optic nerve inflammation), blurred vision, reduced visual acuity, and difficulty distinguishing red and green colors.",
    clinicalPearl:
      "Test baseline visual acuity and red-green color vision before starting; stop immediately and report any blurred vision.",
  },
];

const BRAND_KITS: BrandKitCard[] = [
  {
    id: "combunex-800",
    brandName: "1. Combunex 800",
    drugCount: "2-Drug Combination",
    comboCode: "EH (Ethambutol + Isoniazid)",
    ingredients: [
      "Ethambutol Hydrochloride (E) 800 mg",
      "Isoniazid (H) 300 mg",
    ],
    drugClass: "Antimycobacterial Antibiotics (Dual Cell-Wall Combination)",
    mainAction:
      "Attacks TB bacterial cell-wall formation through two different mechanisms.",
    howItWorks: [
      "Ethambutol (E): Interferes with bacterial cell-wall arabinogalactan formation.",
      "Isoniazid (H): Blocks mycolic acid production, essential for the TB bacterial cell wall.",
    ],
    usedFor: "Used as part of selected combination regimens for TB.",
    sideEffects:
      "Vision changes (red-green color loss/blurred vision), tingling or numbness, liver injury.",
    importantDistinction:
      "This two-drug combination (EH) alone is NOT a complete standard treatment for active drug-sensitive TB by itself.",
  },
  {
    id: "akt-4",
    brandName: "2. AKT-4",
    drugCount: "4-Drug Combination Kit",
    comboCode: "HRZE (Ethambutol + Isoniazid + Pyrazinamide + Rifampicin)",
    ingredients: [
      "Ethambutol (E)",
      "Isoniazid (H)",
      "Pyrazinamide (Z)",
      "Rifampicin (R)",
    ],
    drugClass:
      "First-Line Antimycobacterial Antibiotics (4-Drug Intensive Kit)",
    mainAction:
      "Attacks TB bacteria simultaneously through four distinct survival mechanisms.",
    howItWorks: [
      "H (Isoniazid): Blocks mycolic acid cell-wall production.",
      "R (Rifampicin): Blocks bacterial RNA transcription.",
      "Z (Pyrazinamide): Disrupts bacterial energy and acidic membrane functions.",
      "E (Ethambutol): Interferes with cell-wall arabinosyl transferase formation.",
    ],
    usedFor:
      "Intensive phase (first 2 months) of standard drug-sensitive TB regimens.",
    sideEffects:
      "Liver injury, vision changes, tingling/numbness, joint pain (uric acid), orange-red body fluids.",
    importantDistinction:
      "Attacks TB bacilli at multiple metabolic stages simultaneously to rapidly lower bacterial load and prevent drug resistance.",
  },
  {
    id: "akt-2",
    brandName: "3. AKT-2",
    drugCount: "2-Drug Combination",
    comboCode: "RH (Rifampicin 450 mg + Isoniazid 300 mg — verify pack)",
    ingredients: ["Rifampicin (R)", "Isoniazid (H)"],
    drugClass: "Rifamycin Antibiotic + Antimycobacterial Antibiotic",
    mainAction:
      "Blocks bacterial RNA production and mycolic acid cell-wall synthesis.",
    howItWorks: [
      "Rifampicin (R): Stops TB bacteria from producing RNA needed to make proteins.",
      "Isoniazid (H): Prevents TB bacteria from producing essential mycolic acid cell-wall blocks.",
    ],
    usedFor: "TB treatment as part of an appropriate multidrug regimen.",
    sideEffects:
      "Liver injury, orange-red urine/sweat/tears, tingling or numbness, drug interactions.",
    importantDistinction:
      "AKT-2 contains only TWO medicines (RH)—it should NOT automatically be treated as a complete continuation-phase regimen under India's NTEP, which uses 3 drugs (HRE, including Ethambutol).",
  },
  {
    id: "solonex",
    brandName: "4. Solonex (300 mg / Solonex DT 100 mg)",
    drugCount: "Single-Drug Medicine",
    comboCode: "H Only (Isoniazid)",
    ingredients: [
      "Isoniazid (H / INH) — check exact pack strength (300 mg or 100 mg DT)",
    ],
    drugClass: "Antimycobacterial Antibiotic",
    mainAction:
      "Inhibits mycolic acid synthesis in the mycobacterial cell wall.",
    howItWorks: [
      "Isoniazid prevents TB bacteria from making mycolic acid, a vital structural building block of the TB cell wall—without proper cell-wall formation, susceptible TB bacteria cannot survive.",
    ],
    usedFor:
      "TB preventive treatment (latent TB) in selected people and as part of multidrug TB treatment plans.",
    sideEffects:
      "Liver injury, peripheral neuropathy (tingling/numbness), nausea.",
    importantDistinction:
      "Never adequate alone for treating active TB; Vitamin B6 (pyridoxine) is often prescribed alongside to reduce nerve damage risk.",
  },
];

const FOUR_BRAND_COMPARISON = [
  {
    medicine: "Combunex 800",
    ingredients: "Ethambutol + Isoniazid (EH)",
    count: "2",
    role: "Selected combination regimens (incomplete alone for active DS-TB)",
  },
  {
    medicine: "AKT-4",
    ingredients: "Ethambutol + Isoniazid + Pyrazinamide + Rifampicin (HRZE)",
    count: "4",
    role: "Intensive phase (2 months) of drug-sensitive TB",
  },
  {
    medicine: "AKT-2",
    ingredients: "Rifampicin + Isoniazid (RH)",
    count: "2",
    role: "Part of multidrug therapy (note: Indian NTEP continuation phase uses 3-drug HRE)",
  },
  {
    medicine: "Solonex",
    ingredients: "Isoniazid (H)",
    count: "1",
    role: "Selected TB preventive therapy (LTBI) or individualized multidrug plans",
  },
];

const DRUG_RESISTANT_MEDICINES = [
  {
    medicine: "Bedaquiline",
    role: "Inhibits mycobacterial ATP synthase energy production (core Group A drug in BPaLM)",
  },
  {
    medicine: "Pretomanid",
    role: "Acts against replicating and hypoxic non-replicating TB bacteria through multiple mechanisms (nitroimidazole)",
  },
  {
    medicine: "Linezolid",
    role: "Oxazolidinone antibiotic that inhibits bacterial 50S ribosomal protein synthesis (core Group A drug)",
  },
  {
    medicine: "Moxifloxacin",
    role: "Fluoroquinolone that inhibits bacterial DNA gyrase / DNA replication (core Group A drug)",
  },
  {
    medicine: "Levofloxacin",
    role: "Fluoroquinolone that inhibits bacterial DNA replication",
  },
  {
    medicine: "Clofazimine",
    role: "Riminophenazine dye with antimycobacterial redox-cycling activity (causes reversible skin/conjunctival pigmentation)",
  },
  {
    medicine: "Cycloserine",
    role: "Inhibits D-alanine racemase/ligase involved in bacterial cell-wall peptidoglycan formation",
  },
  {
    medicine: "Delamanid",
    role: "Nitro-dihydro-imidazooxazole that interferes with methoxy- and keto-mycolic acid production",
  },
  {
    medicine: "Amikacin",
    role: "Injectable aminoglycoside antibiotic inhibiting 30S protein synthesis in selected resistant cases",
  },
];

const DIAGNOSTIC_TESTS = [
  {
    test: "Sputum Microscopy (AFB Smear)",
    identifies: "Acid-fast TB bacilli directly in sputum samples",
  },
  {
    test: "CBNAAT / GeneXpert",
    identifies:
      "Rapid molecular detection of TB bacterial DNA AND Rifampicin resistance within ~2 hours",
  },
  {
    test: "Truenat",
    identifies:
      "Point-of-care chip-based molecular detection of TB genetic material and selected resistance markers",
  },
  {
    test: "Chest X-Ray",
    identifies:
      "Upper-lobe infiltrates, cavities, or miliary lung abnormalities suggestive of TB (cannot confirm alone)",
  },
  {
    test: "Mycobacterial Culture (MGIT / LJ)",
    identifies:
      "Gold-standard live growth of Mycobacterium tuberculosis bacteria",
  },
  {
    test: "Drug Susceptibility Testing (DST)",
    identifies:
      "Determines exact sensitivity or resistance to first- and second-line TB medicines",
  },
  {
    test: "Biopsy / Tissue & Fluid Testing (FNAC / CSF / Pleural)",
    identifies:
      "Histopathology (caseating granulomas) and molecular testing for extrapulmonary TB",
  },
];

export default function TuberculosisPage() {
  const [activeTab, setActiveTab] = useState<PrimaryTab>("overview");
  const [drSearch, setDrSearch] = useState("");

  const filteredDrMeds = useMemo(() => {
    const q = drSearch.trim().toLowerCase();
    if (!q) return DRUG_RESISTANT_MEDICINES;
    return DRUG_RESISTANT_MEDICINES.filter(
      (item) =>
        item.medicine.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q),
    );
  }, [drSearch]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Clinical Overview</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-3">
              <Wind className="w-3.5 h-3.5" /> Infectious Disease &amp;
              Pulmonology Codex &bull; Condition #07
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Tuberculosis (TB / Rajayakshma)
            </h1>

            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Causative Organism:{" "}
                <strong className="text-teal-300 font-mono">
                  Mycobacterium tuberculosis
                </strong>{" "}
                — an airborne bacterial infectious disease primarily affecting
                the lungs (<strong>Pulmonary TB</strong>), but capable of
                spreading to lymph nodes, spine/bones, brain meninges, kidneys,
                abdomen, and bloodstream (
                <strong>Extrapulmonary &amp; Miliary TB</strong>).
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-400 font-mono">
                    NTEP Standard DS-TB
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    2HRZE (Intensive) / 4HRE (Continuation) &bull; 6 Months
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-rose-400 font-mono">
                    MDR / XDR-TB
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    BPaLM (Bedaquiline, Pretomanid, Linezolid, Moxifloxacin)
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Complete clinical guide on airborne transmission, Latent vs.
              Active TB, Pulmonary &amp; 6 Extrapulmonary sites, Drug-Resistance
              classification, First-Line ATT (H, R, Z, E), commercial
              combinations (<strong>Combunex 800, AKT-4, AKT-2, Solonex</strong>
              ), and molecular diagnostics.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Indian NTEP Regimen
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                2HRZE / 4HRE
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Rapid Molecular Test
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                CBNAAT / Truenat
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
              <span>Causes, Spread &amp; Safety Precautions</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("types")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "types"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>Types of TB (Activity, Organ &amp; Resistance)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("first-line-att")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "first-line-att"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Pill className="w-4 h-4 shrink-0" />
              <span>First-Line ATT (H, R, Z, E) &amp; NTEP</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("brand-kits")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "brand-kits"
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Package className="w-4 h-4 shrink-0" />
              <span>Combunex, AKT-4, AKT-2 &amp; Solonex</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("dr-tb-diagnosis")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "dr-tb-diagnosis"
                  ? "bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Microscope className="w-4 h-4 shrink-0" />
              <span>Drug-Resistant TB &amp; Diagnosis</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CAUSES, AIRBORNE TRANSMISSION & IMPORTANT PRECAUTIONS              */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3">
                <div className="flex items-center gap-2 text-teal-400">
                  <Stethoscope className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    What Is Tuberculosis &amp; What Causes It?
                  </h2>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Tuberculosis (TB)</strong> is a serious bacterial
                  infectious disease caused by{" "}
                  <strong>Mycobacterium tuberculosis</strong>. While it most
                  commonly infects the lungs (<em>Pulmonary TB</em>), it can
                  travel via lymphatics or blood to affect almost any
                  organ—including lymph nodes, spine, bones, brain meninges,
                  kidneys, and intestines.
                </p>
                <div className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800 text-xs space-y-1 text-slate-300">
                  <div>
                    <strong className="text-teal-300">Bacterium:</strong>{" "}
                    Mycobacterium tuberculosis (acid-fast bacillus)
                  </div>
                  <div>
                    <strong className="text-teal-300">Disease Type:</strong>{" "}
                    Bacterial infectious disease
                  </div>
                  <div>
                    <strong className="text-teal-300">Transmission:</strong>{" "}
                    Mainly through the air via droplet nuclei
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Wind className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    How Does TB Spread? (4-Step Airborne Chain)
                  </h2>
                </div>
                <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside leading-relaxed">
                  <li>
                    A person with infectious active TB in their lungs or throat
                    coughs, sneezes, speaks, or sings.
                  </li>
                  <li>
                    Microscopic TB bacteria enter the air suspended in tiny
                    aerosol droplet nuclei.
                  </li>
                  <li>
                    Another person inhales those airborne droplet particles.
                  </li>
                  <li>
                    The bacteria reach the lung alveoli and begin multiplying
                    (or are contained by immunity as Latent TB).
                  </li>
                </ol>
                <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 text-[11px] text-emerald-200">
                  <strong>Important Infection-Control Fact:</strong> TB does{" "}
                  <strong>NOT</strong> normally spread by shaking hands, sharing
                  food or utensils, touching clothes/bedsheets, or using the
                  same toilet.
                </div>
              </div>
            </div>

            {/* Section 9: Important Precautions With TB Medicines */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Important Precautions With Anti-Tuberculosis Medicines (ATT)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-200 leading-relaxed">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    1. Never Stop Early
                  </strong>
                  Never stop TB medicines when symptoms improve after a few
                  weeks—incomplete therapy causes relapse and deadly
                  drug-resistant TB.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-900/50">
                  <strong className="text-rose-300 block mb-1">
                    2. Never Use Monotherapy
                  </strong>
                  Never use one or two medicines on your own to treat active TB;
                  combination multidrug therapy is mandatory.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    3. Monitor Liver Function
                  </strong>
                  Isoniazid, Rifampicin, and Pyrazinamide are
                  hepatotoxic—promptly report{" "}
                  <strong>
                    yellow eyes (jaundice), severe nausea, vomiting, or right
                    upper abdominal pain
                  </strong>
                  .
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-900/50">
                  <strong className="text-amber-300 block mb-1">
                    4. Ethambutol Eye Check
                  </strong>
                  Report{" "}
                  <strong>
                    blurred vision or loss of red-green color vision
                  </strong>{" "}
                  immediately when taking Ethambutol (optic neuritis risk).
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-teal-900/50">
                  <strong className="text-teal-300 block mb-1">
                    5. Isoniazid Nerve Protection
                  </strong>
                  Report tingling or numbness in hands/feet; doctors routinely
                  prescribe <strong>Vitamin B6 (Pyridoxine)</strong> to prevent
                  neuropathy.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-cyan-900/50">
                  <strong className="text-cyan-300 block mb-1">
                    6. Rifampicin Fluid Color &amp; Interactions
                  </strong>
                  Rifampicin harmlessly turns{" "}
                  <strong>urine, sweat, and tears orange-red</strong> and causes
                  major drug interactions with many medicines.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: TYPES OF TB (ACTIVITY, AFFECTED ORGAN & DRUG RESISTANCE)           */}
        {/* ========================================================================= */}
        {activeTab === "types" && (
          <div className="space-y-10 animate-in fade-in duration-200">
            {/* A. Based on Bacterial Activity */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
                  Classification A &bull; Based on Bacterial Activity
                </span>
                <h2 className="text-xl font-bold text-white">
                  Latent TB Infection (LTBI) vs. Active TB Disease
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="p-6 rounded-2xl border border-teal-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5 leading-relaxed">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-teal-500/15 border border-teal-500/30 text-teal-300 font-bold">
                    Inactive &bull; Non-Contagious
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    1. Latent TB Infection (LTBI)
                  </h3>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                    <li>
                      TB bacteria are present inside the body but remain
                      dormant/inactive.
                    </li>
                    <li>
                      The host immune system walls them off and keeps them under
                      control.
                    </li>
                    <li>
                      <strong>No symptoms</strong> and normal chest X-ray.
                    </li>
                    <li>
                      <strong>Usually NOT contagious</strong> (cannot spread to
                      others).
                    </li>
                    <li>
                      Can reactivate into active TB disease later if immunity
                      weakens (e.g., HIV, diabetes, steroids).
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl border border-rose-500/30 bg-slate-900/40 backdrop-blur-md space-y-2.5 leading-relaxed">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-rose-500/15 border border-rose-500/30 text-rose-300 font-bold">
                    Multiplying &bull; Requires Full ATT
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    2. Active TB Disease
                  </h3>
                  <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                    <li>
                      TB bacteria actively multiply and cause tissue
                      inflammation/destruction.
                    </li>
                    <li>
                      Clinical symptoms develop (cough, fever, night sweats,
                      weight loss).
                    </li>
                    <li>
                      <strong>Contagious</strong> when infectious TB affects the
                      lungs or larynx/throat.
                    </li>
                    <li>
                      Requires full multidrug Anti-Tuberculosis Treatment (ATT).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* B. Based on Affected Body Part (Pulmonary vs Extrapulmonary) */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  Classification B &bull; Based on Affected Body Site
                </span>
                <h2 className="text-xl font-bold text-white">
                  Pulmonary TB vs. Extrapulmonary TB Sites
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  <strong>Remember:</strong> Pulmonary TB (lungs) and
                  Extrapulmonary TB (any organ outside the lungs) are the two
                  main anatomical categories.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
                {EXTRAPULMONARY_SITES.map((site) => (
                  <div
                    key={site.id}
                    className={`p-5 rounded-2xl border backdrop-blur-md space-y-2.5 leading-relaxed ${
                      site.urgent
                        ? "border-rose-500/40 bg-rose-950/15"
                        : "border-slate-800 bg-slate-900/40"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-bold inline-block ${
                        site.urgent
                          ? "bg-rose-500/20 border-rose-500/40 text-rose-300"
                          : "bg-amber-500/10 border-amber-500/20 text-amber-300"
                      }`}
                    >
                      {site.badge}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {site.title}
                    </h3>
                    <ul className="space-y-1 list-disc list-inside text-slate-300">
                      {site.clues.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* C. Based on Drug Resistance */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest block mb-1">
                  Classification C &bull; Drug Susceptibility Spectrum
                </span>
                <h2 className="text-xl font-bold text-white">
                  Types of TB Based on Drug Resistance &amp; Why Resistance
                  Happens
                </h2>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[680px]">
                  <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5 text-rose-300">
                        Resistance Category
                      </th>
                      <th className="p-3.5 text-white">Clinical Definition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    {DRUG_RESISTANCE_TYPES.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-900/40 transition-colors"
                      >
                        <td className="p-3.5 font-bold font-mono text-amber-300 whitespace-nowrap">
                          {row.type}
                        </td>
                        <td className="p-3.5 text-slate-200">{row.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 text-xs space-y-2 leading-relaxed">
                <strong className="text-rose-300 block text-sm">
                  Why Does Drug Resistance Happen?
                </strong>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-slate-300">
                  <li>Taking TB medicines irregularly or skipping doses.</li>
                  <li>Stopping treatment early once fever/cough improves.</li>
                  <li>Incorrect drug combinations or inadequate dosing.</li>
                  <li>
                    Poor gastrointestinal drug absorption or major drug
                    interactions.
                  </li>
                  <li>
                    <strong>Primary transmission:</strong> Breathing in
                    drug-resistant TB bacteria directly from another infected
                    person (does not always come from a patient&apos;s own
                    treatment mistake).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: FIRST-LINE ATT (H, R, Z, E) & STANDARD INDIAN NTEP REGIMEN         */}
        {/* ========================================================================= */}
        {activeTab === "first-line-att" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Standard NTEP Regimen Banner (2HRZE / 4HRE) */}
            <div className="p-6 rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-950/35 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-4">
              <div>
                <span className="text-[10px] font-mono text-teal-300 uppercase tracking-widest block mb-1">
                  India&apos;s National Tuberculosis Elimination Programme
                  (NTEP)
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Standard Drug-Sensitive TB Treatment Regimen: 2HRZE / 4HRE (6
                  Months)
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-amber-500/30 space-y-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-bold">
                    Phase 1 &bull; First 2 Months
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Intensive Phase — 2 HRZE (All 4 Drugs Together)
                  </h3>
                  <ul className="space-y-1 font-mono text-slate-200">
                    <li>
                      <strong className="text-amber-300">H</strong> = Isoniazid
                    </li>
                    <li>
                      <strong className="text-amber-300">R</strong> = Rifampicin
                    </li>
                    <li>
                      <strong className="text-amber-300">Z</strong> =
                      Pyrazinamide
                    </li>
                    <li>
                      <strong className="text-amber-300">E</strong> = Ethambutol
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 font-bold">
                    Phase 2 &bull; Next 4 Months
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Continuation Phase — 4 HRE (Pyrazinamide Stopped)
                  </h3>
                  <ul className="space-y-1 font-mono text-slate-200">
                    <li>
                      <strong className="text-cyan-300">H</strong> = Isoniazid
                    </li>
                    <li>
                      <strong className="text-cyan-300">R</strong> = Rifampicin
                    </li>
                    <li>
                      <strong className="text-cyan-300">E</strong> = Ethambutol
                    </li>
                  </ul>
                  <p className="text-slate-400 font-sans pt-1">
                    Note: CNS TB (meningitis) and bone/spine TB typically
                    require longer (9–12+ months) or modified regimens.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 First-Line ATT Drug Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {FIRST_LINE_DRUGS.map((drug) => (
                <div
                  key={drug.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold">
                          First-Line ATT &bull; Code &quot;{drug.letter}&quot;
                        </span>
                        <h3 className="text-lg font-bold text-white mt-1.5">
                          {drug.name}
                        </h3>
                        <p className="text-[11px] font-mono text-amber-300 mt-0.5">
                          Drug Class: {drug.drugClass}
                        </p>
                      </div>
                      <span className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-lg font-extrabold font-mono text-teal-300 shrink-0">
                        {drug.letter}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800/70 pt-3">
                      <div>
                        <strong className="text-teal-300">Main Action: </strong>
                        <span>{drug.mainAction}</span>
                      </div>
                      <div>
                        <strong className="text-cyan-300">
                          Mechanism of Action:{" "}
                        </strong>
                        <span>{drug.mechanism}</span>
                      </div>
                      <div>
                        <strong className="text-white">Used In: </strong>
                        <span>{drug.usedIn}</span>
                      </div>
                      <div>
                        <strong className="text-rose-300">
                          Important Side Effects:{" "}
                        </strong>
                        <span>{drug.sideEffects}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-[11px] text-slate-300">
                    <Info className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-teal-300">Clinical Pearl:</strong>{" "}
                      {drug.clinicalPearl}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: COMMERCIAL BRAND EXAMPLES (COMBUNEX 800, AKT-4, AKT-2, SOLONEX)    */}
        {/* ========================================================================= */}
        {activeTab === "brand-kits" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* 4 Brand Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {BRAND_KITS.map((kit) => (
                <div
                  key={kit.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold">
                          {kit.drugCount}
                        </span>
                        <span className="text-[10px] font-mono text-amber-300 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                          {kit.comboCode}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {kit.brandName}
                      </h3>
                      <p className="text-[11px] font-mono text-cyan-300 mt-0.5">
                        Drug Class: {kit.drugClass}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                      <strong className="text-white block mb-1">
                        Active Ingredients:
                      </strong>
                      <div className="flex flex-wrap gap-1.5">
                        {kit.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-teal-300 font-mono text-[11px]"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                      <div>
                        <strong className="text-teal-300">Main Action: </strong>
                        <span>{kit.mainAction}</span>
                      </div>
                      <div>
                        <strong className="text-cyan-300 block mb-1">
                          How the Medicines Work:
                        </strong>
                        <ul className="space-y-1 list-disc list-inside">
                          {kit.howItWorks.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <strong className="text-white">Used For: </strong>
                        <span>{kit.usedFor}</span>
                      </div>
                      <div>
                        <strong className="text-rose-300">
                          Important Side Effects:{" "}
                        </strong>
                        <span>{kit.sideEffects}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[11px] text-amber-200">
                    <strong>Important Clinical Distinction: </strong>
                    {kit.importantDistinction}
                  </div>
                </div>
              ))}
            </div>

            {/* Side-by-Side Comparison Table of All 4 Brands */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                Compare All Four TB Medicine Examples &amp; Where They Fit in
                Treatment
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[700px]">
                  <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5 text-emerald-300">Medicine</th>
                      <th className="p-3.5 text-cyan-300">Ingredients</th>
                      <th className="p-3.5 text-amber-300">Number of Drugs</th>
                      <th className="p-3.5 text-white">Clinical Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    {FOUR_BRAND_COMPARISON.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-900/40 transition-colors"
                      >
                        <td className="p-3.5 font-bold text-white">
                          {row.medicine}
                        </td>
                        <td className="p-3.5 font-mono text-cyan-300">
                          {row.ingredients}
                        </td>
                        <td className="p-3.5 font-mono font-bold text-amber-300">
                          {row.count}
                        </td>
                        <td className="p-3.5 text-slate-300">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong>Important to Understand:</strong> A tablet containing
                two TB drugs is not automatically a complete continuation-phase
                medicine, and a four-drug kit is not suitable for every TB
                patient. Always verify exact ingredients/strengths on the pack;
                the treating TB team determines the regimen based on drug
                susceptibility testing, body weight, age, and disease site.
              </p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: DRUG-RESISTANT TB MEDICINES (BPaLM) & DIAGNOSTIC TESTS             */}
        {/* ========================================================================= */}
        {activeTab === "dr-tb-diagnosis" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Drug-Resistant TB Medicines */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest block mb-1">
                    Second-Line &amp; Novel Agents &bull; BPaLM Regimen
                  </span>
                  <h2 className="text-xl font-bold text-white">
                    Medicines Used for Drug-Resistant TB (MDR / Pre-XDR /
                    XDR-TB)
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    For eligible MDR/RR-TB patients, India uses specialized
                    all-oral regimens including{" "}
                    <strong className="text-rose-300 font-mono">
                      BPaLM (Bedaquiline + Pretomanid + Linezolid +
                      Moxifloxacin)
                    </strong>{" "}
                    under specialist supervision and Drug Susceptibility Testing
                    (DST).
                  </p>
                </div>

                <div className="relative w-full md:w-72">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={drSearch}
                    onChange={(e) => setDrSearch(e.target.value)}
                    placeholder="Filter Bedaquiline, Linezolid..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-rose-500/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {filteredDrMeds.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-1.5 leading-relaxed"
                  >
                    <strong className="text-rose-300 font-mono text-sm block">
                      {item.medicine}
                    </strong>
                    <p className="text-slate-300">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 8: How Is TB Diagnosed? */}
            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              <div>
                <h2 className="text-xl font-bold text-white">
                  How Is TB Diagnosed? (Microscopy, Molecular NAAT &amp; DST)
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  A chest X-ray alone cannot confirm TB. Molecular testing (
                  <strong>CBNAAT / GeneXpert</strong> and{" "}
                  <strong>Truenat</strong>) is essential for confirming TB DNA
                  and rapidly detecting Rifampicin resistance.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[660px]">
                  <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5 text-teal-300">Diagnostic Test</th>
                      <th className="p-3.5 text-white">
                        What It Helps Identify
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    {DIAGNOSTIC_TESTS.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-900/40 transition-colors"
                      >
                        <td className="p-3.5 font-bold font-mono text-cyan-300">
                          {row.test}
                        </td>
                        <td className="p-3.5 text-slate-200">
                          {row.identifies}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
