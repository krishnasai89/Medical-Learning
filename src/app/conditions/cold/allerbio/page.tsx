"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Pill,
  Activity,
  AlertCircle,
  AlertTriangle,
  ShieldAlert,
  Brain,
  Layers,
  Scale,
  Info,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function AllerbioPage() {
  const [activeTab, setActiveTab] = useState<
    "paracasei" | "fermentum" | "combination"
  >("combination");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-emerald-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/conditions/cold"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Common Cold &amp; Rhinology Codex</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> Pharmacology Codex &bull;
              Immunomodulatory Probiotic
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Allerbio (L. paracasei &amp; L. fermentum)
            </h1>

            {/* Nomenclature & Brand Breakdown */}
            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Taxonomic Classification:{" "}
                <strong className="text-emerald-300 font-mono">
                  Lacticaseibacillus paracasei (LP-33 / GMNL-133) +
                  Limosilactobacillus fermentum (GM-090)
                </strong>
                .
              </p>

              {/* Naming & Brand Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-emerald-400 font-mono">
                    Brand: Allerbio
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    &bull; Dual-Strain Anti-Allergic Immunobiotic Capsule /
                    Sachet
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-300 font-mono">
                    Immune Target
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    GALT Th1 / Th2 Rebalancing &bull; IgE &amp; Mast-Cell
                    Downregulation
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical monograph on strain-specific gut-airway immunomodulation
              via <strong>Lactobacillus paracasei</strong> and{" "}
              <strong>Lactobacillus fermentum</strong>—covering individual
              strain mechanisms, combined Th1/Treg immune tolerance in allergic
              rhinitis and atopic dermatitis, dosing regimens, immunocompromised
              precautions, and administration rules.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Standard Adult Dose
              </span>
              <span className="text-xl font-bold text-emerald-400 font-mono">
                1 Cap OD / BID
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Course Duration
              </span>
              <span className="text-xl font-bold text-teal-300 font-mono">
                4 – 12 Weeks
              </span>
            </div>
          </div>
        </div>

        {/* 3 Navigation Tabs */}
        <div className="w-full overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1.5">
            <button
              type="button"
              onClick={() => setActiveTab("paracasei")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "paracasei"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>1. Lactobacillus paracasei</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("fermentum")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "fermentum"
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>2. Lactobacillus fermentum</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("combination")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "combination"
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>3. Allerbio Combination (L. paracasei + L. fermentum)</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: LACTOBACILLUS PARACASEI                                            */}
        {/* ========================================================================= */}
        {activeTab === "paracasei" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Card */}
            <div className="p-6 rounded-2xl border border-teal-500/30 bg-gradient-to-r from-teal-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">
                    Strain 01 &bull; Lacticaseibacillus paracasei (e.g., LP-33 /
                    GMNL-133)
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    Lactobacillus paracasei
                  </h2>
                  <p className="text-xs font-mono text-amber-300 mt-1">
                    Drug Class: Immunomodulatory Probiotic / Live Biotherapeutic
                    Immunobiotic (Gram-Positive Lactic Acid Bacterium)
                  </p>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-teal-300">
                  Primary Role: Th1 Cytokine Induction (IFN-&gamma; / IL-12)
                </div>
              </div>
            </div>

            {/* Mechanism & How It Works */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3 leading-relaxed">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Brain className="w-4 h-4 text-teal-400" /> Mechanism of
                  Action &amp; How It Works
                </h3>
                <p className="text-slate-300">
                  <strong>Mechanism of Action:</strong> Survives gastric acidity
                  and bile salts to colonize the small intestinal mucosa, where
                  bacterial cell-wall peptidoglycans and lipoteichoic acids
                  interact with <strong>Toll-Like Receptor 2 (TLR2)</strong> on
                  intestinal dendritic cells and macrophages within Peyer&apos;s
                  patches.
                </p>
                <p className="text-slate-300">
                  <strong>How It Works:</strong> Stimulates antigen-presenting
                  cells to secrete <strong>Interleukin-12 (IL-12)</strong> and{" "}
                  <strong>Interferon-gamma (IFN-&gamma;)</strong>, driving naive
                  T-cells toward a protective{" "}
                  <strong>Th1 immune phenotype</strong> while suppressing
                  allergy-driving{" "}
                  <strong>Th2 cytokines (IL-4, IL-5, IL-13)</strong>.
                  Downregulates B-cell{" "}
                  <strong>IgE antibody class-switching</strong>, lowers blood
                  eosinophil counts, and reduces nasal mast-cell histamine
                  release via the gut-lung immune axis.
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-teal-300">
                  <strong>Main Action:</strong> Shifts allergic Th2
                  hyper-reactivity back toward balanced Th1/Treg mucosal
                  tolerance, reducing nasal sneezing, watery rhinorrhea, and
                  ocular itching.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3 leading-relaxed">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                  Indications &amp; Who Can Use It
                </h3>
                <p className="text-slate-300">
                  <strong>Diseases / Conditions Used For:</strong> Perennial
                  allergic rhinitis (dust mite, mold, pet dander), seasonal hay
                  fever (pollen allergies), allergic rhinoconjunctivitis, atopic
                  dermatitis (eczema), and post-antibiotic gut dysbiosis.
                </p>
                <p className="text-slate-300">
                  <strong>Which Types of People Use It:</strong> Adults,
                  adolescents, and children (&ge; 2 years) seeking non-sedating,
                  steroid-sparing maintenance relief for chronic nasal or skin
                  allergies—or patients who experience breakthrough allergies on
                  antihistamines alone.
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300">
                  <strong className="text-emerald-300">
                    Typical Strain Dose:
                  </strong>{" "}
                  2 to 5 Billion CFU once or twice daily for 4–12 weeks.
                </div>
              </div>
            </div>

            {/* Caution, Side Effects, Overuse & Key Pearls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-amber-900/50 space-y-1.5">
                <strong className="text-amber-300 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" /> Who Should Use Caution
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  Severely immunocompromised patients (chemotherapy, advanced
                  HIV, organ transplant), patients with central venous
                  catheters, short-bowel syndrome, or acute severe pancreatitis
                  (rare risk of bacteremia/translocation).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                <strong className="text-cyan-300 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" /> Common Side Effects
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  Transient mild abdominal bloating, flatulence, borborygmi (gut
                  rumbling), or mild loose stools during the first 3–5 days of
                  gut microbiome adaptation. Zero drowsiness or dry mouth.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-rose-900/50 space-y-1.5">
                <strong className="text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Overused It (Overdose
                  Risk)
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  No acute toxic overdose ceiling exists in healthy individuals.
                  Excessive intake (e.g., 5–10x recommended capsules) causes
                  temporary osmotic bloating, gas, abdominal cramping, or mild
                  diarrhea—resolves spontaneously upon reducing dose.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-teal-900/50 space-y-1.5">
                <strong className="text-teal-300 flex items-center gap-1.5">
                  <Info className="w-4 h-4" /> Important Points to Remember
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  <strong>Not an instant rescue pill:</strong> Takes{" "}
                  <strong>2 to 4 weeks</strong> of daily intake to remodel
                  mucosal immunity. Always space at least{" "}
                  <strong>2 hours apart</strong> from oral antibiotics and
                  swallow with cool/room-temperature water (hot liquids kill
                  live bacteria).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: LACTOBACILLUS FERMENTUM                                            */}
        {/* ========================================================================= */}
        {activeTab === "fermentum" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Header Card */}
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                    Strain 02 &bull; Limosilactobacillus fermentum (e.g., GM-090
                    / CECT5716)
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    Lactobacillus fermentum
                  </h2>
                  <p className="text-xs font-mono text-amber-300 mt-1">
                    Drug Class: Immunomodulatory &amp; Epithelial-Barrier
                    Probiotic (Heterofermentative Lactic Acid Bacterium)
                  </p>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-cyan-300">
                  Primary Role: Treg / IL-10 Tolerance &amp; Gut Barrier
                  Tightening
                </div>
              </div>
            </div>

            {/* Mechanism & How It Works */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3 leading-relaxed">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Brain className="w-4 h-4 text-cyan-400" /> Mechanism of
                  Action &amp; How It Works
                </h3>
                <p className="text-slate-300">
                  <strong>Mechanism of Action:</strong> Adheres strongly to
                  intestinal epithelial mucin, synthesizes antimicrobial
                  bacteriocins and antioxidant glutathione, and stimulates
                  mucosal <strong>FOXP3+ Regulatory T-cells (Tregs)</strong> to
                  secrete anti-inflammatory{" "}
                  <strong>Interleukin-10 (IL-10)</strong> and{" "}
                  <strong>TGF-&beta;</strong>.
                </p>
                <p className="text-slate-300">
                  <strong>How It Works:</strong> Upregulates intestinal
                  tight-junction proteins (occludin, zonula occludens-1) to seal
                  &quot;leaky&quot; mucosal barriers—preventing intact food and
                  environmental aeroallergens from crossing into systemic
                  circulation and triggering mast-cell degranulation.
                  Simultaneously boosts secretory <strong>IgA (sIgA)</strong> on
                  upper respiratory and intestinal surfaces to neutralize
                  incoming viruses and allergens.
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-cyan-300">
                  <strong>Main Action:</strong> Induces IL-10 regulatory immune
                  tolerance, seals mucosal epithelial tight junctions, and
                  strengthens secretory IgA antiviral/anti-allergic defense.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3 leading-relaxed">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                  Indications &amp; Who Can Use It
                </h3>
                <p className="text-slate-300">
                  <strong>Diseases / Conditions Used For:</strong> Pediatric and
                  adult atopic dermatitis (eczema), allergic rhinitis, recurrent
                  upper respiratory tract infections (URIs), cow&apos;s milk /
                  food protein sensitivity, and antibiotic-associated diarrhea.
                </p>
                <p className="text-slate-300">
                  <strong>Which Types of People Use It:</strong> Children and
                  adults with atopic skin/respiratory allergies, individuals
                  prone to frequent seasonal colds/sinusitis, and patients
                  recovering from broad-spectrum antibiotic courses.
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300">
                  <strong className="text-cyan-300">
                    Typical Strain Dose:
                  </strong>{" "}
                  1 to 3 Billion CFU once or twice daily for 4–12 weeks.
                </div>
              </div>
            </div>

            {/* Caution, Side Effects, Overuse & Key Pearls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-amber-900/50 space-y-1.5">
                <strong className="text-amber-300 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" /> Who Should Use Caution
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  Patients with severe immunosuppression, indwelling central
                  venous lines, prosthetic heart valves with active endocarditis
                  risk, or premature neonates outside specialist NICU protocols.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                <strong className="text-cyan-300 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" /> Common Side Effects
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  Mild initial gas, abdominal fullness, or soft stools during
                  the first few days of colonization. Completely non-sedating
                  and free of anticholinergic or cardiovascular effects.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-rose-900/50 space-y-1.5">
                <strong className="text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Overused It (Overdose
                  Risk)
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  No systemic toxicity in healthy individuals; taking excessive
                  capsules causes transient GI bloating, flatulence, or mild
                  loose stools that subside once normal dosing resumes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-900/50 space-y-1.5">
                <strong className="text-cyan-300 flex items-center gap-1.5">
                  <Info className="w-4 h-4" /> Important Points to Remember
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  Because <em>L. fermentum</em> is heterofermentative (produces
                  lactic acid + trace CO2), mild initial gas is normal and fades
                  within 3–4 days. Store in a cool, dry place below 25&deg;C to
                  preserve live CFU viability.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: ALLERBIO COMBINATION (L. PARACASEI + L. FERMENTUM)                 */}
        {/* ========================================================================= */}
        {activeTab === "combination" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Combination Banner */}
            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                    Dual-Strain Immunobiotic Combination &bull; Allerbio Capsule
                    / Sachet
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    Allerbio (Lactobacillus paracasei + Lactobacillus fermentum)
                  </h2>
                  <p className="text-xs font-mono text-amber-300 mt-1">
                    Drug Class: Synergistic Dual-Strain Immunomodulatory
                    Probiotic / Anti-Allergic Biotherapeutic
                  </p>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-emerald-800/50 text-xs font-mono text-emerald-300">
                  Synergy: Th1 Activation + Treg/IL-10 Suppression
                </div>
              </div>
            </div>

            {/* Mechanism & How It Works */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3 leading-relaxed">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Brain className="w-4 h-4 text-emerald-400" /> Mechanism of
                  Action &amp; How It Works
                </h3>
                <p className="text-slate-300">
                  <strong>Dual-Strain Mechanism of Action:</strong> Combines{" "}
                  <strong>Lactobacillus paracasei</strong> (which stimulates
                  TLR2/IL-12/IFN-&gamma; Th1 pathways) with{" "}
                  <strong>Lactobacillus fermentum</strong> (which activates
                  FOXP3+ Treg cells, IL-10 secretion, and intestinal
                  tight-junction repair).
                </p>
                <p className="text-slate-300">
                  <strong>How It Works Together:</strong> Allergic rhinitis and
                  asthma are driven by an overactive{" "}
                  <strong>Th2 immune bias</strong> (high IL-4, IL-5, IL-13, and
                  IgE). While <em>L. paracasei</em> actively boosts
                  counter-balancing <strong>Th1 immunity</strong>,{" "}
                  <em>L. fermentum</em> generates calming{" "}
                  <strong>Regulatory T-cells (IL-10)</strong> and seals mucosal
                  barriers—attacking allergic sensitization at its immunological
                  root rather than merely blocking histamine receptors
                  temporarily.
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-emerald-300">
                  <strong>Main Action:</strong> Comprehensive gut-lung axis
                  immune rebalancing—lowers serum IgE, reduces eosinophilic
                  airway/nasal inflammation, and decreases allergy flare
                  frequency.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3 leading-relaxed">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Scale className="w-4 h-4 text-teal-400" /> Indications, Who
                  Can Use It &amp; Dosing
                </h3>
                <p className="text-slate-300">
                  <strong>Diseases / Conditions Used For:</strong> Perennial
                  &amp; seasonal allergic rhinitis, allergic
                  rhinoconjunctivitis, chronic idiopathic urticaria (hives),
                  atopic dermatitis (eczema), allergic asthma adjunct, and
                  recurrent viral upper respiratory infections.
                </p>
                <p className="text-slate-300">
                  <strong>Which Types of People Use It:</strong> Adults, elderly
                  patients, pregnant/lactating women (under physician guidance),
                  and children (&ge; 2–5 years) who want a{" "}
                  <strong>
                    100% non-sedating, steroid-free, long-term preventive
                  </strong>{" "}
                  adjunct alongside or after antihistamine therapy.
                </p>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300 space-y-1">
                  <div>
                    <strong className="text-emerald-300">
                      Adults &amp; Adolescents (&ge; 12y):
                    </strong>{" "}
                    1 capsule once or twice daily after meals with
                    room-temperature water for <strong>4 to 12 weeks</strong>.
                  </div>
                  <div>
                    <strong className="text-teal-300">
                      Children (2 – 11y):
                    </strong>{" "}
                    1 sachet or opened capsule mixed in cool water/milk/curd
                    once daily.
                  </div>
                </div>
              </div>
            </div>

            {/* Caution, Side Effects, Overuse & Key Pearls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-amber-900/50 space-y-1.5">
                <strong className="text-amber-300 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" /> Who Should Use Caution
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  Severely immunocompromised patients (active chemotherapy,
                  neutropenia, advanced HIV, transplant immunosuppressants),
                  patients with central venous lines, or critically ill ICU
                  patients.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5">
                <strong className="text-cyan-300 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" /> Common Side Effects
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  Exceptionally well tolerated (&lt; 2% incidence): mild
                  temporary bloating, flatulence, or slight change in stool
                  consistency during the first 3–5 days. Zero sedation, dry
                  mouth, or weight gain.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-rose-900/50 space-y-1.5">
                <strong className="text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Overused It (Overdose
                  Risk)
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  No life-threatening overdose toxicity exists. Ingesting
                  multiple extra capsules causes only transient abdominal gas,
                  mild cramping, or loose stools—no antidote needed; hydrate and
                  resume standard 1-capsule daily schedule.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-emerald-900/50 space-y-1.5">
                <strong className="text-emerald-300 flex items-center gap-1.5">
                  <Info className="w-4 h-4" /> Important Points to Remember
                </strong>
                <p className="text-slate-300 leading-relaxed">
                  <strong>1. Pair Early With Antihistamines:</strong> Start
                  Allerbio alongside Cetirizine or Bilastine during week 1—the
                  antihistamine gives immediate relief while Allerbio builds
                  lasting immune tolerance over 4–8 weeks.{" "}
                  <strong>2. Antibiotic Rule:</strong> Separate by 2+ hours from
                  oral antibiotics and never mix with hot tea/coffee.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
