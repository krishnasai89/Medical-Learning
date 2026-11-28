"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Moon,
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
  LayoutGrid,
  ChevronRight,
  HelpCircle,
  Clock,
} from "lucide-react";

type PrimaryTab =
  | "hierarchy-cards"
  | "sleep-physiology"
  | "pharmacology"
  | "differential";

type InsomniaMedGroup =
  | "All"
  | "A. Sleep-Onset Insomnia Medicines"
  | "B. Sleep-Maintenance Insomnia Medicines"
  | "C. Selected Clinical Situations (Benzodiazepines & Antidepressants)";

interface MedicineCardItem {
  id: string;
  name: string;
  group: Exclude<InsomniaMedGroup, "All">;
  drugClass: string;
  mainAction: string;
  usedFor: string;
  sideEffectsAndRisks: string;
  clinicalNote: string;
}

interface SubtypeCardItem {
  id: string;
  subtypeName: string;
  whatItIs: string;
  whyItHappens: string[];
  patientClue: string;
  medicinesUsed: {
    medicine: string;
    drugClass: string;
    mainAction: string;
  }[];
}

interface InsomniaTypeHierarchy {
  id: number;
  code: string;
  classificationBasis: string;
  title: string;
  whatItIs: string;
  whyItHappens: string[];
  clinicalPearl: string;
  subtypes: SubtypeCardItem[];
}

const SLEEP_STAGES = [
  {
    category: "1. NREM Sleep (Non-Rapid Eye Movement)",
    stage: "N1 — Light Sleep",
    physiology:
      "Transition from awake to asleep; alpha waves shift to theta waves; easily awakened.",
  },
  {
    category: "1. NREM Sleep (Non-Rapid Eye Movement)",
    stage: "N2 — Stable Sleep",
    physiology:
      "Core sleep architecture (~45–55% of night); heart rate and core body temperature decrease; sleep spindles & K-complexes appear.",
  },
  {
    category: "1. NREM Sleep (Non-Rapid Eye Movement)",
    stage: "N3 — Deep Slow-Wave Sleep",
    physiology:
      "Deepest restorative stage; growth hormone release, tissue repair, immune strengthening, and physical recovery.",
  },
  {
    category: "2. REM Sleep (Rapid Eye Movement)",
    stage: "REM — Dream & Memory Sleep",
    physiology:
      "Brain activity becomes highly active; vivid dreaming occurs; memory consolidation & emotional processing; skeletal muscles temporarily paralyzed (atonia).",
  },
];

const FIVE_CAUSE_GROUPS = [
  {
    cause: "1. Stress and Anxiety",
    mechanism:
      "Hyperactive sympathetic nervous system and HPA-axis cortisol keep the brain hyper-alert and unable to wind down.",
  },
  {
    cause: "2. Depression",
    mechanism:
      "Alters serotonin, norepinephrine, and circadian sleep-architecture regulation—classically triggering early-morning awakening.",
  },
  {
    cause: "3. Poor Sleep Habits",
    mechanism:
      "Irregular bedtimes, blue-light screens before bed, late afternoon caffeine, and long daytime naps weaken homeostatic sleep drive.",
  },
  {
    cause: "4. Medical Conditions",
    mechanism:
      "Chronic pain, asthma/COPD breathing problems, hyperthyroidism (thyroid overactivity), GERD, and nocturia physically fragment sleep.",
  },
  {
    cause: "5. Medicines and Substances",
    mechanism:
      "Stimulants, corticosteroids, decongestants, caffeine, nicotine, and alcohol disrupt sleep architecture (alcohol induces early sedation but causes severe second-half sleep fragmentation).",
  },
];

// ============================================================================
// HIERARCHICAL TREE: INSOMNIA -> TYPES -> SUBTYPES -> MEDICINES USED
// ============================================================================
const INSOMNIA_HIERARCHY: InsomniaTypeHierarchy[] = [
  {
    id: 1,
    code: "TYPE A",
    classificationBasis: "Classification 1 • By Duration",
    title: "Type A. Duration-Based Insomnia (Acute vs. Chronic)",
    whatItIs:
      "Classifies insomnia according to how long the sleeping difficulty persists—distinguishing self-limiting stress-triggered episodes from persistent conditioned sleep disorders.",
    whyItHappens: [
      "Acute triggers: Temporary life stress, exams, hospitalization, acute pain, bereavement, or jet lag/travel",
      "Chronic perpetuating factors: Learned bedtime hyperarousal, conditioned anxiety about not sleeping, untreated mood disorders, or chronic medical illness",
    ],
    clinicalPearl:
      "For Chronic Insomnia (>= 3 nights/week for >= 3 months), Cognitive Behavioural Therapy for Insomnia (CBT-I) is the gold-standard first-line treatment before sleeping pills.",
    subtypes: [
      {
        id: "acute-insomnia",
        subtypeName: "1. Acute Insomnia (Short-Term Insomnia)",
        whatItIs:
          "Short-duration sleeping difficulty lasting days or weeks, strictly less than 3 months.",
        whyItHappens: [
          "Temporary psychological stress, travel/jet lag, acute illness, or sudden life changes",
          "Often resolves spontaneously once the triggering stressor disappears",
        ],
        patientClue:
          '"Ever since my work deadline / travel started last week, I haven\'t been able to sleep properly."',
        medicinesUsed: [
          {
            medicine:
              "Sleep hygiene + Melatonin / Short-term Z-drug (Zolpidem / Zopiclone)",
            drugClass:
              "Melatonin agonist / Non-benzodiazepine hypnotic (short-term only)",
            mainAction:
              "Bridges temporary acute sleep disruption for a few days to 2 weeks while stressor resolves.",
          },
        ],
      },
      {
        id: "chronic-insomnia",
        subtypeName: "2. Chronic Insomnia (Long-Term Insomnia)",
        whatItIs:
          "Persistent difficulty sleeping occurring at least 3 nights per week and continuing for at least 3 months.",
        whyItHappens: [
          "Underlying anxiety or depression",
          "Chronic medical conditions (pain, thyroid, cardiopulmonary)",
          "Learned maladaptive sleep-related behaviors and conditioned bedtime hyperarousal",
        ],
        patientClue:
          '"I have struggled to sleep 4–5 nights every week for the past six months."',
        medicinesUsed: [
          {
            medicine:
              "First-Line: CBT-I | Pharmacotherapy: Doxepin (low dose), Suvorexant, Lemborexant, Ramelteon",
            drugClass:
              "Behavioral therapy + Low-dose H1 blocker / Dual orexin antagonists (DORAs) / MT1-MT2 agonist",
            mainAction:
              "Targets chronic sleep maintenance or circadian initiation without benzodiazepine dependence.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    code: "TYPE B",
    classificationBasis: "Classification 2 • By Sleeping Difficulty Pattern",
    title:
      "Type B. Symptom-Pattern Insomnia (Onset, Maintenance, Early Awakening & Mixed)",
    whatItIs:
      "Classifies insomnia by the exact phase of the night where sleep breaks down—allowing clinicians to match each medicine's onset speed and duration of action to the patient's specific sleep failure.",
    whyItHappens: [
      "Cognitive hyperarousal, late caffeine, or delayed circadian clock preventing sleep initiation (Sleep-Onset)",
      "Nocturnal pain, nocturia, alcohol rebound, or orexin wake-drive surges fracturing middle-of-night sleep (Sleep-Maintenance)",
      "Depression, aging-related circadian phase advance, or cortisol surges causing premature waking (Early-Morning Awakening)",
    ],
    clinicalPearl:
      "These 4 patterns describe clinical symptoms rather than 4 separate diseases—a patient can experience more than one pattern simultaneously.",
    subtypes: [
      {
        id: "sleep-onset-insomnia",
        subtypeName: "1. Sleep-Onset Insomnia (Sleep Initiation Insomnia)",
        whatItIs:
          "Difficulty falling asleep after going to bed despite feeling tired.",
        whyItHappens: [
          "Anxiety and racing thoughts / overthinking in bed",
          "Acute stress or late caffeine consumption",
          "Irregular sleeping schedule or delayed internal body clock",
        ],
        patientClue: '"I go to bed at 10 PM, but I cannot sleep until 1 AM."',
        medicinesUsed: [
          {
            medicine: "Melatonin / Ramelteon",
            drugClass: "Hormone / Melatonin MT1 & MT2 receptor agonist",
            mainAction:
              "Regulates the body's circadian sleep-wake clock to initiate sleep.",
          },
          {
            medicine: "Zolpidem",
            drugClass: "Non-benzodiazepine hypnotic (Z-drug)",
            mainAction:
              "Rapidly enhances GABA-A inhibitory activity to induce sleep onset.",
          },
          {
            medicine: "Zopiclone",
            drugClass: "Non-benzodiazepine hypnotic (Z-drug)",
            mainAction:
              "Enhances GABA-A receptor activity to shorten sleep latency.",
          },
        ],
      },
      {
        id: "sleep-maintenance-insomnia",
        subtypeName: "2. Sleep-Maintenance Insomnia",
        whatItIs:
          "Difficulty staying asleep throughout the night, characterized by frequent nocturnal awakenings.",
        whyItHappens: [
          "Physical pain or nighttime discomfort",
          "Anxiety or frequent urination (nocturia)",
          "Obstructive sleep apnea or environmental noise/light disturbances",
          "Evening alcohol consumption (causes second-half rebound wakefulness)",
        ],
        patientClue:
          '"I fall asleep easily, but I wake up 3–4 times every night."',
        medicinesUsed: [
          {
            medicine: "Doxepin (low dose — 3 mg to 6 mg)",
            drugClass:
              "Tricyclic antidepressant (selective H1 blocker at ultra-low dose)",
            mainAction:
              "Selectively blocks histamine H1 wakefulness receptors to sustain sleep through the night.",
          },
          {
            medicine: "Suvorexant & Lemborexant",
            drugClass: "Dual Orexin Receptor Antagonists (DORAs)",
            mainAction:
              "Blocks orexin-1 and orexin-2 wake-promoting neuropeptides to prevent nocturnal awakenings.",
          },
          {
            medicine: "Zopiclone (selected cases)",
            drugClass: "Non-benzodiazepine hypnotic (Z-drug)",
            mainAction:
              "Enhances GABA-A activity to support both sleep onset and sleep continuity.",
          },
        ],
      },
      {
        id: "early-morning-awakening",
        subtypeName: "3. Early-Morning Awakening Insomnia",
        whatItIs:
          "Waking up much earlier than intended in the morning and being unable to fall back asleep.",
        whyItHappens: [
          "Underlying clinical depression (classic biological marker)",
          "Chronic psychological stress",
          "Age-related changes in sleep architecture & circadian rhythm phase advance",
        ],
        patientClue:
          '"I wake up at 3 AM, even though I need to sleep until 6 AM."',
        medicinesUsed: [
          {
            medicine: "Low-dose Doxepin / Suvorexant / Lemborexant",
            drugClass: "Low-dose H1 blocker / Dual Orexin Receptor Antagonists",
            mainAction:
              "Extends sleep duration into the final third of the night without morning hangover.",
          },
          {
            medicine: "Mirtazapine or Trazodone (when depression coexists)",
            drugClass: "NaSSA / SARI antidepressants",
            mainAction:
              "Treats underlying depression while restoring early-morning sleep continuity.",
          },
        ],
      },
      {
        id: "mixed-insomnia",
        subtypeName: "4. Mixed Insomnia",
        whatItIs:
          "A combination of multiple sleep difficulties (delayed onset + frequent awakenings + early waking).",
        whyItHappens: [
          "Coexisting anxiety or depression",
          "Chronic pain syndromes",
          "Multiple overlapping medical, behavioral, and circadian sleep disturbances",
        ],
        patientClue:
          '"I take a long time to fall asleep, wake up several times, and wake up too early."',
        medicinesUsed: [
          {
            medicine: "Suvorexant or Lemborexant (+ CBT-I)",
            drugClass: "Dual Orexin Receptor Antagonists (DORAs)",
            mainAction:
              "Approved for BOTH difficulty falling asleep and difficulty staying asleep.",
          },
          {
            medicine:
              "Mirtazapine / Trazodone / Temazepam (selected clinical cases)",
            drugClass: "Sedating antidepressants / Benzodiazepine hypnotic",
            mainAction:
              "Selected when comorbid depression/anxiety or short-term severe distress requires broad coverage.",
          },
        ],
      },
    ],
  },
];

// ============================================================================
// ALL 12 INSOMNIA MEDICINES (ORGANIZED BY CLINICAL GROUP A, B, C)
// ============================================================================
const INSOMNIA_MEDICINES: MedicineCardItem[] = [
  // A. Sleep-Onset Insomnia Medicines
  {
    id: "melatonin",
    name: "1. Melatonin (0.5 mg – 5 mg)",
    group: "A. Sleep-Onset Insomnia Medicines",
    drugClass: "Endogenous Pineal Hormone / Melatonin Receptor Agonist",
    mainAction:
      "Helps regulate and synchronize the body's internal circadian sleep-wake clock.",
    usedFor:
      "Certain circadian rhythm problems (jet lag, delayed sleep phase) and selected sleep-onset difficulties.",
    sideEffectsAndRisks:
      "Generally mild: daytime drowsiness, vivid dreams, headache, mild dizziness.",
    clinicalNote:
      "Important: Melatonin is a chronobiotic clock regulator—it is NOT a universal sedating sleeping pill.",
  },
  {
    id: "zolpidem",
    name: "2. Zolpidem (5 mg – 10 mg)",
    group: "A. Sleep-Onset Insomnia Medicines",
    drugClass: "Non-Benzodiazepine Hypnotic (Z-Drug — Imidazopyridine)",
    mainAction:
      "Selectively enhances GABA-A receptor (alpha-1 subunit) inhibitory activity, reducing brain arousal and promoting rapid sleep onset.",
    usedFor: "Difficulty falling asleep (sleep-onset insomnia).",
    sideEffectsAndRisks:
      "Drowsiness, dizziness, next-morning impairment, anterograde memory problems, and complex unusual sleep behaviors (sleep-walking, sleep-driving, sleep-eating).",
    clinicalNote:
      "Take immediately before getting into bed with at least 7–8 hours remaining before waking; lower starting dose (5 mg) required in women and elderly.",
  },
  {
    id: "zopiclone",
    name: "3. Zopiclone (3.75 mg – 7.5 mg)",
    group: "A. Sleep-Onset Insomnia Medicines",
    drugClass: "Non-Benzodiazepine Hypnotic (Z-Drug — Cyclopyrrolone)",
    mainAction:
      "Enhances GABA-A receptor chloride channel activity to quiet central nervous system arousal.",
    usedFor:
      "Difficulty falling asleep and sometimes difficulty maintaining sleep.",
    sideEffectsAndRisks:
      "Characteristic metallic or bitter taste (dysgeusia), dry mouth, dizziness, next-day drowsiness, and dependence/tolerance with prolonged use.",
    clinicalNote:
      "Limit to short-term use (<= 2–4 weeks); avoid alcohol and opioids due to additive CNS/respiratory depression.",
  },
  {
    id: "ramelteon",
    name: "4. Ramelteon (8 mg)",
    group: "A. Sleep-Onset Insomnia Medicines",
    drugClass: "Selective Melatonin MT1 and MT2 Receptor Agonist",
    mainAction:
      "Selectively activates suprachiasmatic nucleus MT1 (sleep-promoting) and MT2 (circadian phase-shifting) receptors without GABA binding.",
    usedFor: "Difficulty falling asleep (sleep-onset insomnia).",
    sideEffectsAndRisks:
      "Dizziness, fatigue, daytime sleepiness, nausea; avoid combining with Fluvoxamine (strong CYP1A2 inhibitor).",
    clinicalNote:
      "Non-scheduled (zero abuse/dependence potential and no rebound insomnia upon stopping); take 30 minutes before bedtime without a heavy high-fat meal.",
  },

  // B. Sleep-Maintenance Insomnia Medicines
  {
    id: "doxepin-low-dose",
    name: "5. Doxepin — Low Dose (3 mg – 6 mg)",
    group: "B. Sleep-Maintenance Insomnia Medicines",
    drugClass:
      "Tricyclic Antidepressant (Selective Histamine H1 Antagonist at Low Dose)",
    mainAction:
      "At ultra-low doses (3–6 mg), selectively blocks histamine H1 wake-promoting receptors with minimal anticholinergic or antidepressant activity.",
    usedFor:
      "Difficulty staying asleep (sleep-maintenance insomnia and early-morning awakening).",
    sideEffectsAndRisks:
      "Mild drowsiness, dry mouth, dizziness, nausea; avoid in severe urinary retention, untreated narrow-angle glaucoma, or within 14 days of MAOIs.",
    clinicalNote:
      "Do NOT confuse 3–6 mg insomnia dosing with 75–150 mg antidepressant dosing; take within 30 minutes of bedtime and at least 3 hours after a meal.",
  },
  {
    id: "suvorexant",
    name: "6. Suvorexant (10 mg – 20 mg)",
    group: "B. Sleep-Maintenance Insomnia Medicines",
    drugClass: "Dual Orexin Receptor Antagonist (DORA)",
    mainAction:
      "Blocks orexin-A and orexin-B neuropeptides from binding OX1R and OX2R receptors, turning off the brain's wakefulness drive.",
    usedFor: "Both difficulty falling asleep and difficulty staying asleep.",
    sideEffectsAndRisks:
      "Next-day sleepiness, dizziness, headache, unusual/vivid dreams, rare sleep paralysis or hypnagogic hallucinations; contraindicated in narcolepsy.",
    clinicalNote:
      "Works by suppressing wakefulness rather than globally sedating the brain via GABA; avoid strong CYP3A4 inhibitors.",
  },
  {
    id: "lemborexant",
    name: "7. Lemborexant (5 mg – 10 mg)",
    group: "B. Sleep-Maintenance Insomnia Medicines",
    drugClass: "Dual Orexin Receptor Antagonist (DORA)",
    mainAction:
      "Competitively blocks both orexin-1 (OX1R) and orexin-2 (OX2R) receptors to facilitate sleep onset and preserve sleep maintenance.",
    usedFor:
      "Difficulty falling asleep and staying asleep (sleep-onset & sleep-maintenance insomnia).",
    sideEffectsAndRisks:
      "Somnolence/daytime sleepiness, headache, dizziness, nightmares/abnormal dreams; contraindicated in narcolepsy and severe hepatic impairment.",
    clinicalNote:
      "Take immediately before going to bed with at least 7 hours remaining before planned awakening.",
  },

  // C. Medicines Used in Selected Cases
  {
    id: "clonazepam",
    name: "8. Clonazepam (0.25 mg – 1 mg)",
    group:
      "C. Selected Clinical Situations (Benzodiazepines & Antidepressants)",
    drugClass: "Long-Acting Benzodiazepine",
    mainAction:
      "Enhances GABA-A receptor inhibitory signaling, producing calming, anxiolytic, muscle-relaxant, and sedative effects.",
    usedFor:
      "Certain seizure disorders, panic disorder, and selected REM sleep behavior disorder cases.",
    sideEffectsAndRisks:
      "Physical dependence, tolerance, memory impairment, next-day hangover sedation, falls/ataxia, and dangerous respiratory depression with alcohol/opioids.",
    clinicalNote:
      "Not generally a preferred routine treatment for chronic insomnia due to long half-life and dependence risk.",
  },
  {
    id: "lorazepam",
    name: "9. Lorazepam (0.5 mg – 2 mg)",
    group:
      "C. Selected Clinical Situations (Benzodiazepines & Antidepressants)",
    drugClass: "Intermediate-Acting Benzodiazepine",
    mainAction:
      "Potentiates GABA-A receptor activity in the CNS to induce sedation and anxiolysis.",
    usedFor:
      "Acute severe anxiety and selected short-term acute clinical situations.",
    sideEffectsAndRisks:
      "Drowsiness, dependence, rebound insomnia/withdrawal on abrupt stopping, impaired coordination, and memory gaps.",
    clinicalNote:
      "Reserve strictly for short-term acute distress under physician supervision; never stop abruptly after prolonged use.",
  },
  {
    id: "temazepam",
    name: "10. Temazepam (7.5 mg – 30 mg)",
    group:
      "C. Selected Clinical Situations (Benzodiazepines & Antidepressants)",
    drugClass: "Benzodiazepine Hypnotic",
    mainAction:
      "Enhances central GABA-A receptor activity to shorten sleep latency and reduce nocturnal awakenings.",
    usedFor:
      "Short-term treatment (typically 7–10 days) of selected severe insomnia cases.",
    sideEffectsAndRisks:
      "Dependence, falls/fractures (especially in elderly), anterograde amnesia, and next-day residual sedation.",
    clinicalNote:
      "Requires ~30–60 minutes to reach peak effect; avoid in elderly patients (Beers Criteria) and respiratory insufficiency.",
  },
  {
    id: "trazodone",
    name: "11. Trazodone (25 mg – 100 mg)",
    group:
      "C. Selected Clinical Situations (Benzodiazepines & Antidepressants)",
    drugClass: "Serotonin Antagonist and Reuptake Inhibitor (SARI)",
    mainAction:
      "Blocks 5-HT2A serotonin, histamine H1, and alpha-1 adrenergic receptors at low doses to induce sedation.",
    usedFor:
      "Major depressive disorder; sometimes prescribed off-label for insomnia.",
    sideEffectsAndRisks:
      "Morning drowsiness, dizziness, orthostatic low blood pressure (alpha-1 blockade), dry mouth, and rare priapism.",
    clinicalNote:
      "Clinical guidelines (AASM) do not routinely recommend Trazodone as a standard primary insomnia medicine unless depression coexists.",
  },
  {
    id: "mirtazapine",
    name: "12. Mirtazapine (7.5 mg – 15 mg)",
    group:
      "C. Selected Clinical Situations (Benzodiazepines & Antidepressants)",
    drugClass: "Noradrenergic and Specific Serotonergic Antidepressant (NaSSA)",
    mainAction:
      "Potently blocks histamine H1, alpha-2 adrenergic, and 5-HT2/5-HT3 receptors—producing strong sedation at lower doses (7.5–15 mg).",
    usedFor:
      "Major depressive disorder; considered when depression, poor appetite/weight loss, and insomnia coexist.",
    sideEffectsAndRisks:
      "Pronounced daytime sleepiness, markedly increased appetite, significant weight gain, and dry mouth.",
    clinicalNote:
      "Not a routine standalone insomnia treatment; ideal specifically when comorbid depression and unintentional weight loss are present.",
  },
];

const MED_GROUPS: InsomniaMedGroup[] = [
  "All",
  "A. Sleep-Onset Insomnia Medicines",
  "B. Sleep-Maintenance Insomnia Medicines",
  "C. Selected Clinical Situations (Benzodiazepines & Antidepressants)",
];

const OTHER_SLEEP_DISORDERS = [
  {
    disorder: "Obstructive Sleep Apnea (OSA)",
    whatItIs:
      "Upper airway repeatedly collapses or becomes restricted during sleep, causing intermittent hypoxia and micro-arousals.",
    clue: "Loud snoring, witnessed breathing pauses, choking or gasping at night, morning headaches, daytime sleepiness.",
    management:
      "CPAP airway pressure therapy, weight management, mandibular advancement devices (sleeping pills worsen airway collapse).",
  },
  {
    disorder: "Restless Legs Syndrome (RLS)",
    whatItIs:
      "Sensorimotor neurological disorder causing an irresistible urge to move the legs accompanied by creeping/aching sensations.",
    clue: "Symptoms worsen during rest/inactivity and in the evening/night, and are temporarily relieved by walking or stretching.",
    management:
      "Check ferritin/iron stores (replace if < 75 ng/mL), alpha-2-delta ligands (gabapentin/pregabalin); avoid sedating antihistamines (worsen RLS).",
  },
  {
    disorder: "Narcolepsy",
    whatItIs:
      "Chronic neurological disorder caused by loss of hypothalamic orexin/hypocretin neurons regulating sleep-wake boundaries.",
    clue: "Sudden irresistible daytime sleep attacks, cataplexy (sudden muscle weakness triggered by emotion), sleep paralysis.",
    management:
      "Specialist neurology care (modafinil, pitolisant, sodium oxybate); orexin antagonists (suvorexant/lemborexant) are contraindicated.",
  },
  {
    disorder: "Circadian Rhythm Sleep Disorder",
    whatItIs:
      "Internal suprachiasmatic body clock is misaligned with the desired social/work sleep schedule (e.g., Delayed Sleep Phase or Shift Work).",
    clue: "Falling asleep very late (e.g., 3 AM – 11 AM) with completely normal sleep quality once asleep, but extreme difficulty waking early.",
    management:
      "Timed morning bright-light therapy, evening low-dose melatonin, and structured chronotherapy.",
  },
  {
    disorder: "Parasomnia",
    whatItIs:
      "Abnormal physical behaviors, movements, or vivid autonomic experiences occurring during transitions between sleep stages.",
    clue: "Sleepwalking (somnambulism), night terrors, sleep talking, or REM sleep behavior disorder (acting out dreams).",
    management:
      "Bedroom safety precautions, treating sleep deprivation/apnea triggers, specialist evaluation.",
  },
  {
    disorder: "Hypersomnia (Idiopathic)",
    whatItIs:
      "Excessive daytime sleepiness and prolonged sleep duration despite adequate or extended nighttime sleep.",
    clue: "Sleeping 10–11+ hours yet struggling intensely to wake up ('sleep drunkenness') and stay awake during the day.",
    management:
      "Sleep study (polysomnography + MSLT) to rule out OSA/narcolepsy; wake-promoting medications.",
  },
];

export default function InsomniaPage() {
  const [activeTab, setActiveTab] = useState<PrimaryTab>("hierarchy-cards");
  const [medSearch, setMedSearch] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<InsomniaMedGroup>("All");

  const filteredMeds = useMemo(() => {
    return INSOMNIA_MEDICINES.filter((med) => {
      const matchesGroup =
        selectedGroup === "All" || med.group === selectedGroup;
      const q = medSearch.trim().toLowerCase();
      const matchesQuery =
        !q ||
        med.name.toLowerCase().includes(q) ||
        med.drugClass.toLowerCase().includes(q) ||
        med.mainAction.toLowerCase().includes(q) ||
        med.usedFor.toLowerCase().includes(q);
      return matchesGroup && matchesQuery;
    });
  }, [medSearch, selectedGroup]);

  const jumpToMedGroup = (group: InsomniaMedGroup) => {
    setSelectedGroup(group);
    setActiveTab("pharmacology");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-slate-950">
      {/* Background Ambience */}
      <div className="fixed top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Clinical Overview</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-3">
              <Moon className="w-3.5 h-3.5" /> Sleep Medicine &amp;
              Neuropsychiatry Codex &bull; Condition #06
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Insomnia &amp; Sleep Architecture (Anidra)
            </h1>

            {/* Visual Hierarchy Flow */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono mb-3">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-bold">
                Insomnia (Anidra)
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-bold">
                2 Classification Types
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                6 Clinical Subtypes
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-teal-500/15 border border-teal-500/30 text-teal-300 font-bold">
                12 Targeted Medicines
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                1st-Line Chronic Tx
              </span>
              <span className="text-xl font-bold text-emerald-400 font-mono">
                CBT-I Therapy
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Sleep Formulary
              </span>
              <span className="text-xl font-bold text-indigo-300 font-mono">
                {INSOMNIA_MEDICINES.length} Medicines
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="w-full overflow-x-auto scrollbar-none py-1">
          <div className="inline-flex min-w-full sm:min-w-0 p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("hierarchy-cards")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "hierarchy-cards"
                  ? "bg-indigo-500 text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <LayoutGrid className="w-4 h-4 shrink-0" />
              <span>
                Insomnia &rarr; Types &rarr; Subtypes &rarr; Medicines
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("sleep-physiology")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "sleep-physiology"
                  ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>1. Normal Sleep (NREM/REM) &amp; 5 Causes</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("pharmacology")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "pharmacology"
                  ? "bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>2. All 12 Insomnia Medicines (Cards)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("differential")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "differential"
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>3. Other Sleep Disorders (Not Insomnia)</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: HIERARCHICAL TREE — INSOMNIA -> TYPES -> SUBTYPES -> MEDICINES     */}
        {/* ========================================================================= */}
        {activeTab === "hierarchy-cards" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Core Distinction Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl border border-teal-500/30 bg-slate-900/45 backdrop-blur-md space-y-2 text-xs leading-relaxed">
                <span className="text-[10px] font-mono uppercase text-teal-300 font-bold block">
                  Fundamental Distinction #1 &bull; Normal Biology
                </span>
                <h2 className="text-base font-bold text-white">
                  What Is Normal Sleep?
                </h2>
                <p className="text-slate-300">
                  <strong>Sleep</strong> is a recurring natural biological state
                  in which brain activity reorganizes across NREM and REM
                  cycles, muscles relax, tissues repair, memory and learning are
                  consolidated, and hormones and immune functions are regulated.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-indigo-500/30 bg-slate-900/45 backdrop-blur-md space-y-2 text-xs leading-relaxed">
                <span className="text-[10px] font-mono uppercase text-indigo-300 font-bold block">
                  Fundamental Distinction #2 &bull; Clinical Sleep Disorder
                </span>
                <h2 className="text-base font-bold text-white">
                  What Is Insomnia?
                </h2>
                <p className="text-slate-300">
                  <strong>Insomnia</strong> is a sleep disorder characterized by
                  difficulty falling asleep, staying asleep, or waking up too
                  early{" "}
                  <strong>
                    despite having adequate opportunity and environment to sleep
                  </strong>
                  , causing daytime fatigue, poor concentration, or
                  irritability.{" "}
                  <span className="text-amber-300 font-semibold">
                    Important: A person may sleep 7–8 hours yet suffer
                    unrefreshing poor-quality insomnia.
                  </span>
                </p>
              </div>
            </div>

            {/* HIERARCHICAL TREE OF CARDS: TYPE -> SUBTYPES -> MEDICINES USED */}
            <div className="space-y-10">
              {INSOMNIA_HIERARCHY.map((typeItem) => (
                <div
                  key={typeItem.id}
                  className="p-6 rounded-3xl border border-indigo-500/30 bg-slate-900/45 backdrop-blur-md space-y-6 shadow-xl shadow-black/30"
                >
                  {/* LEVEL 1: TYPE CARD */}
                  <div className="p-5 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-950/80 to-slate-950/60 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-bold">
                          {typeItem.classificationBasis}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">
                          {typeItem.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-amber-300 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0">
                        {typeItem.subtypes.length} Subtypes Below &darr;
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs leading-relaxed">
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                        <strong className="text-indigo-300 flex items-center gap-1.5 text-sm">
                          <HelpCircle className="w-4 h-4" /> What Is This
                          Classification?
                        </strong>
                        <p className="text-slate-200">{typeItem.whatItIs}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                        <strong className="text-amber-300 block text-sm">
                          Why Does It Happen? (Mechanisms &amp; Drivers)
                        </strong>
                        <ul className="space-y-1 list-disc list-inside text-slate-300">
                          {typeItem.whyItHappens.map((reason, idx) => (
                            <li key={idx}>{reason}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-500/30 text-xs text-emerald-200 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Clinical Rule:</strong> {typeItem.clinicalPearl}
                      </span>
                    </div>
                  </div>

                  {/* LEVEL 2 & LEVEL 3: NESTED SUBTYPE CARDS -> MEDICINES USED CARDS */}
                  <div className="pl-2 sm:pl-5 border-l-2 border-indigo-500/40 space-y-4">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-300 font-bold">
                      Subtypes &rarr; Medicines Used in {typeItem.title}
                    </div>

                    <div className="space-y-4">
                      {typeItem.subtypes.map((sub) => (
                        <div
                          key={sub.id}
                          className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-950/60 space-y-4"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                            <h4 className="text-base sm:text-lg font-bold text-white">
                              {sub.subtypeName}
                            </h4>
                            <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded">
                              {sub.patientClue}
                            </span>
                          </div>

                          {/* Left = Subtype Disease Card | Right = Medicines Used Card */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                            {/* SUBTYPE DISEASE CARD */}
                            <div className="p-4 rounded-xl border border-amber-500/25 bg-slate-900/70 space-y-2.5 leading-relaxed">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
                                Subtype Card &bull; What It Is &amp; Why It
                                Happens
                              </span>

                              <div>
                                <strong className="text-white">
                                  What It Is:{" "}
                                </strong>
                                <span className="text-slate-300">
                                  {sub.whatItIs}
                                </span>
                              </div>

                              <div>
                                <strong className="text-amber-300 block mb-1">
                                  Why Does It Happen?
                                </strong>
                                <ul className="space-y-1 list-disc list-inside text-slate-300">
                                  {sub.whyItHappens.map((cause, idx) => (
                                    <li key={idx}>{cause}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* MEDICINES USED IN IT CARD */}
                            <div className="p-4 rounded-xl border border-teal-500/25 bg-slate-900/70 space-y-2.5 leading-relaxed">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-300 font-bold flex items-center gap-1.5">
                                  <Pill className="w-3.5 h-3.5" /> Medicines
                                  Used Card &bull; Class &amp; Action
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setActiveTab("pharmacology")}
                                  className="text-[11px] font-bold text-indigo-300 hover:underline"
                                >
                                  Full Drug Cards &rarr;
                                </button>
                              </div>

                              <div className="space-y-2">
                                {sub.medicinesUsed.map((med, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3 rounded-lg bg-slate-950/90 border border-slate-800 space-y-1"
                                  >
                                    <div className="flex flex-wrap items-center justify-between gap-1">
                                      <strong className="text-white">
                                        {med.medicine}
                                      </strong>
                                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                                        {med.drugClass}
                                      </span>
                                    </div>
                                    <p className="text-slate-300 text-[11px]">
                                      <strong className="text-emerald-300">
                                        Main Action:{" "}
                                      </strong>
                                      {med.mainAction}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Safety Reminder */}
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md space-y-2">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">
                  Critical Medication Safety Reminder
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Benzodiazepines and Z-drugs can cause physical dependence,
                tolerance, memory impairment, falls, and{" "}
                <strong>life-threatening respiratory sedation</strong>
                —particularly when combined with{" "}
                <strong>alcohol or opioids</strong>. They should only be used
                under physician supervision. Never combine sleeping medicines
                yourself.
              </p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: NORMAL SLEEP PHYSIOLOGY (NREM/REM) & 5 CAUSE GROUPS                */}
        {/* ========================================================================= */}
        {activeTab === "sleep-physiology" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Sleep Architecture Table */}
            <div className="space-y-3">
              <div>
                <h2 className="text-xl font-bold text-white">
                  1. Types &amp; Stages of Normal Sleep (NREM &amp; REM Cycles)
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Normal sleep cycles between NREM (N1 &rarr; N2 &rarr; N3) and
                  REM every 90–110 minutes throughout the night.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30">
                <table className="w-full text-xs text-left text-slate-300 min-w-[680px]">
                  <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5 text-teal-300">Sleep Category</th>
                      <th className="p-3.5 text-indigo-300">Stage</th>
                      <th className="p-3.5">
                        Physiological Changes &amp; Function
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    {SLEEP_STAGES.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-900/40 transition-colors"
                      >
                        <td className="p-3.5 font-semibold text-teal-300">
                          {row.category}
                        </td>
                        <td className="p-3.5 font-bold text-white font-mono">
                          {row.stage}
                        </td>
                        <td className="p-3.5 text-slate-200">
                          {row.physiology}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5 Core Symptoms & 5 Cause Groups */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3 text-xs">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" /> 5 Main Symptoms
                  of Insomnia
                </h3>
                <ol className="space-y-2 text-slate-300 list-decimal list-inside leading-relaxed">
                  <li>Difficulty falling asleep after going to bed.</li>
                  <li>Frequently waking up during the night.</li>
                  <li>
                    Waking up too early in the morning without returning to
                    sleep.
                  </li>
                  <li>Feeling unrefreshed and non-restored after sleeping.</li>
                  <li>
                    Daytime tiredness, poor concentration, or irritability.
                  </li>
                </ol>
              </div>

              <div className="lg:col-span-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3 text-xs">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-indigo-400" /> What
                  Causes Insomnia? (The 5 Core Groups)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {FIVE_CAUSE_GROUPS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800 space-y-1"
                    >
                      <strong className="text-indigo-300 block">
                        {item.cause}
                      </strong>
                      <p className="text-slate-300 leading-relaxed">
                        {item.mechanism}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="p-3 rounded-xl bg-amber-950/25 border border-amber-500/30 text-amber-200">
                  <strong>Remember:</strong> Alcohol may make someone feel
                  sleepy initially, but as it is metabolized it triggers
                  sympathetic rebound and fragmented sleep in the second half of
                  the night.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: ALL 12 INSOMNIA MEDICINES (FILTERABLE CARDS)                       */}
        {/* ========================================================================= */}
        {activeTab === "pharmacology" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Search & Group Filter Bar */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={medSearch}
                    onChange={(e) => setMedSearch(e.target.value)}
                    placeholder="Search Melatonin, Zolpidem, Doxepin, Suvorexant, Lemborexant..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60"
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
                  <strong className="text-indigo-300">
                    {filteredMeds.length}
                  </strong>{" "}
                  of <strong>{INSOMNIA_MEDICINES.length}</strong> medicines
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {MED_GROUPS.map((grp) => (
                  <button
                    key={grp}
                    type="button"
                    onClick={() => setSelectedGroup(grp)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedGroup === grp
                        ? "bg-indigo-500 text-slate-950 shadow-[0_0_12px_rgba(99,102,241,0.35)]"
                        : "bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {grp}
                  </button>
                ))}
              </div>
            </div>

            {/* 12 Medicine Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMeds.map((med) => (
                <div
                  key={med.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-bold">
                        {med.group}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-2">
                        {med.name}
                      </h3>
                      <p className="text-[11px] font-mono text-amber-300 mt-0.5">
                        Drug Class: {med.drugClass}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800/70 pt-3">
                      <div>
                        <strong className="text-teal-300">Main Action: </strong>
                        <span>{med.mainAction}</span>
                      </div>
                      <div>
                        <strong className="text-white">
                          Used For / Clinical Role:{" "}
                        </strong>
                        <span>{med.usedFor}</span>
                      </div>
                      <div>
                        <strong className="text-rose-300">
                          Side Effects &amp; Risks:{" "}
                        </strong>
                        <span>{med.sideEffectsAndRisks}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-[11px] text-slate-300">
                    <Info className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-indigo-300">
                        Clinical Pearl:
                      </strong>{" "}
                      {med.clinicalNote}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: OTHER SLEEP DISORDERS (DIFFERENTIAL DIAGNOSIS — NOT INSOMNIA)      */}
        {/* ========================================================================= */}
        {activeTab === "differential" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-1">
                Other Sleep Disorders (Not the Same as Insomnia)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Not every person with a sleep problem has insomnia. These
                distinct sleep disorders require different diagnostic studies
                and treatments—for example, sleeping pills do NOT fix airway
                obstruction in sleep apnea and can actually worsen hypoxia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
              {OTHER_SLEEP_DISORDERS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-2.5 leading-relaxed"
                >
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
                    Differential #{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {item.disorder}
                  </h3>
                  <p className="text-slate-300">
                    <strong className="text-teal-300">What It Is: </strong>
                    {item.whatItIs}
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-amber-300">Common Clue: </strong>
                    {item.clue}
                  </p>
                  <p className="text-slate-400 pt-2 border-t border-slate-800/80">
                    <strong className="text-indigo-300">
                      Targeted Approach:{" "}
                    </strong>
                    {item.management}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
