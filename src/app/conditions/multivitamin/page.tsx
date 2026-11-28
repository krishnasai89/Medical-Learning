"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Pill,
  AlertTriangle,
  Info,
  Sparkles,
  Search,
  BookOpen,
  Layers,
  ShieldCheck,
} from "lucide-react";

type BottomTab = "brands" | "micronutrients";

type VitaminSolubilityFilter =
  | "All"
  | "Water-Soluble Vitamins"
  | "Fat-Soluble Vitamins"
  | "Essential Minerals";

interface MultivitaminClassCard {
  id: string;
  code: string;
  name: string;
  composition: string;
  brandExamples: string;
  usedFor: string;
  clinicalNote: string;
}

interface MicronutrientCard {
  id: string;
  name: string;
  category: Exclude<VitaminSolubilityFilter, "All">;
  mainAction: string;
  deficiencyClues: string;
  toxicityOrCaution: string;
}

interface BrandComboCard {
  id: string;
  brandName: string;
  link?: string;
  group: string;
  keyIngredients: string;
  primaryUse: string;
  timingAndTip: string;
}

type NutrientCategoryFilter =
  | "All"
  | "Water-Soluble"
  | "Fat-Soluble"
  | "Minerals & Trace Elements"
  | "Fatty Acids & Proteins";

interface VitaminGroupRow {
  type: string;
  name: string;
  solubility: Exclude<NutrientCategoryFilter, "All">;
  mainFunction: string;
  keySources: string;
}

const VITAMIN_GROUPS_DATA: VitaminGroupRow[] = [
  // Water-Soluble Vitamins (B-Complex & C)
  {
    type: "Vitamin B1 supplement",
    name: "Thiamine / Benfotiamine (lipid-soluble B1 derivative)",
    solubility: "Water-Soluble",
    mainFunction:
      "Nerve function, carbohydrate energy metabolism (ATP synthesis), and peripheral neuropathy protection",
    keySources: "Whole grains, legumes, nuts, pork, fortified cereals",
  },
  {
    type: "Vitamin B2 supplement",
    name: "Riboflavin",
    solubility: "Water-Soluble",
    mainFunction:
      "Cellular redox reactions (FAD/FMN coenzymes), skin & mucosal integrity",
    keySources: "Dairy, eggs, lean meats, green leafy vegetables, almonds",
  },
  {
    type: "Vitamin B3 supplement",
    name: "Niacin / Niacinamide",
    solubility: "Water-Soluble",
    mainFunction:
      "NAD+/NADP+ coenzyme synthesis, DNA repair, skin & nervous system health",
    keySources: "Poultry, fish, peanuts, whole grains, mushrooms",
  },
  {
    type: "Vitamin B5 supplement",
    name: "Pantothenic Acid",
    solubility: "Water-Soluble",
    mainFunction:
      "Coenzyme A (CoA) synthesis, fatty acid metabolism, and steroid hormone production",
    keySources: "Eggs, avocado, chicken, broccoli, whole grains",
  },
  {
    type: "Vitamin B6 supplement",
    name: "Pyridoxine",
    solubility: "Water-Soluble",
    mainFunction:
      "Neurotransmitter synthesis (serotonin, dopamine, GABA), amino acid metabolism & hemoglobin formation",
    keySources: "Chickpeas, bananas, fish, poultry, potatoes",
  },
  {
    type: "Vitamin B7 supplement",
    name: "Biotin",
    solubility: "Water-Soluble",
    mainFunction:
      "Carboxylase enzyme cofactor for fatty acid synthesis, gluconeogenesis, and hair/nail keratin health",
    keySources: "Egg yolk, nuts, seeds, sweet potatoes, salmon",
  },
  {
    type: "Vitamin B9 supplement",
    name: "Folic Acid / Folate",
    solubility: "Water-Soluble",
    mainFunction:
      "DNA/RNA synthesis, red blood cell maturation, and fetal neural tube development",
    keySources:
      "Dark leafy greens, lentils, beans, citrus fruits, fortified grains",
  },
  {
    type: "Vitamin B12 supplement",
    name: "Cobalamin (Methylcobalamin / Cyanocobalamin)",
    solubility: "Water-Soluble",
    mainFunction:
      "Peripheral & spinal nerve myelin sheath maintenance, DNA synthesis, and RBC formation",
    keySources: "Fish, meat, eggs, dairy, fortified nutritional yeast/cereals",
  },
  {
    type: "Vitamin C supplement",
    name: "Ascorbic Acid",
    solubility: "Water-Soluble",
    mainFunction:
      "Potent antioxidant, collagen synthesis, wound healing, immune defense & non-heme iron absorption",
    keySources:
      "Citrus fruits, amla (Indian gooseberry), guava, bell peppers, strawberries",
  },

  // Fat-Soluble Vitamins (A, D, E, K)
  {
    type: "Vitamin A supplement",
    name: "Retinol / Beta-Carotene",
    solubility: "Fat-Soluble",
    mainFunction:
      "Retinal rhodopsin night vision, epithelial mucosal barrier integrity, and immune regulation",
    keySources:
      "Carrots, sweet potatoes, spinach, liver, dairy, fish liver oil",
  },
  {
    type: "Vitamin D3 supplement",
    name: "Cholecalciferol (D3)",
    solubility: "Fat-Soluble",
    mainFunction:
      "Potent animal-derived form; increases intestinal calcium/phosphate absorption, bone mineralization, and immune modulation",
    keySources:
      "Sunlight UV-B skin synthesis, fatty fish, egg yolk, cod liver oil",
  },
  {
    type: "Vitamin D2 supplement",
    name: "Ergocalciferol (D2)",
    solubility: "Fat-Soluble",
    mainFunction:
      "Plant/fungal-derived form converted in liver/kidney to active calcitriol to maintain calcium homeostasis and bone strength",
    keySources:
      "UV-exposed mushrooms, fortified plant milks, fortified cereals",
  },
  {
    type: "Vitamin E supplement",
    name: "Tocopherol / Tocotrienol",
    solubility: "Fat-Soluble",
    mainFunction:
      "Lipid-soluble membrane antioxidant protecting red blood cells and neurons from oxidative damage",
    keySources: "Almonds, sunflower seeds, wheat germ oil, spinach, avocado",
  },
  {
    type: "Vitamin K1 supplement",
    name: "Phylloquinone (K1)",
    solubility: "Fat-Soluble",
    mainFunction:
      "Primary dietary form; activates hepatic blood clotting factors (II, VII, IX, X) and reverses warfarin anticoagulation",
    keySources: "Kale, spinach, broccoli, cabbage, green leafy vegetables",
  },
  {
    type: "Vitamin K2 supplement",
    name: "Menaquinone (MK-4 / MK-7)",
    solubility: "Fat-Soluble",
    mainFunction:
      "Activates osteocalcin and matrix Gla-protein (MGP) to direct calcium into bones and prevent arterial calcification",
    keySources:
      "Fermented foods (natto), aged cheeses, egg yolk, gut bacterial synthesis",
  },
  {
    type: "Vitamin K3 supplement",
    name: "Menadione (Synthetic K3)",
    solubility: "Fat-Soluble",
    mainFunction:
      "Synthetic provitamin precursor converted in vivo to K2; NOT used in human supplements due to hemolytic anemia & liver toxicity risk",
    keySources:
      "Synthetic chemical compound (restricted to veterinary/animal feed use only)",
  },

  // Minerals & Trace Elements
  {
    type: "Calcium supplement",
    name: "Calcium Carbonate / Calcium Citrate / Coral Calcium",
    solubility: "Minerals & Trace Elements",
    mainFunction:
      "Bone and tooth hydroxyapatite mineralization, skeletal/cardiac muscle contraction, nerve impulse transmission, and blood clotting cascade",
    keySources:
      "Milk, curd/yogurt, cheese, ragi (finger millet), sesame seeds, tofu, dark leafy greens",
  },
  {
    type: "Iron supplement",
    name: "Ferrous Ascorbate / Ferrous Sulfate / Ferric Maltol",
    solubility: "Minerals & Trace Elements",
    mainFunction:
      "Hemoglobin and myoglobin oxygen transport, cellular cytochrome ATP production, and anemia correction",
    keySources:
      "Red meat, liver, spinach, lentils, chickpeas, jaggery, fortified cereals",
  },
  {
    type: "Zinc supplement",
    name: "Zinc Sulfate / Zinc Acetate / Zinc Gluconate",
    solubility: "Minerals & Trace Elements",
    mainFunction:
      "Cofactor for 300+ enzymes, immune cell signaling, DNA synthesis, skin wound healing, and taste/smell perception",
    keySources: "Pumpkin seeds, oysters, meat, chickpeas, cashews, dairy",
  },
  {
    type: "Selenium supplement",
    name: "Selenomethionine / Sodium Selenite",
    solubility: "Minerals & Trace Elements",
    mainFunction:
      "Glutathione peroxidase antioxidant defense and deiodinase enzyme conversion of thyroid T4 into active T3",
    keySources: "Brazil nuts, seafood, eggs, sunflower seeds, whole grains",
  },
  {
    type: "Copper supplement",
    name: "Cupric Oxide / Copper Gluconate",
    solubility: "Minerals & Trace Elements",
    mainFunction:
      "Iron mobilization (ceruloplasmin), red blood cell formation, collagen/elastin cross-linking, and nerve myelin maintenance",
    keySources:
      "Shellfish, liver, dark chocolate, cashews, sesame seeds, lentils",
  },
  {
    type: "Potassium supplement",
    name: "Potassium Chloride / Potassium Citrate",
    solubility: "Minerals & Trace Elements",
    mainFunction:
      "Primary intracellular cation maintaining cardiac rhythm, nerve impulse transmission, skeletal muscle contraction, and BP balance",
    keySources:
      "Bananas, coconut water, potatoes, spinach, oranges, beans (caution with ARBs/ACE inhibitors)",
  },
  {
    type: "Iodine supplement",
    name: "Potassium Iodide / Kelp Iodine",
    solubility: "Minerals & Trace Elements",
    mainFunction:
      "Essential building block for thyroid hormones Thyroxine (T4) and Triiodothyronine (T3) regulating basal metabolic rate and fetal brain development",
    keySources: "Iodized salt, sea fish, shrimp, dairy products, eggs, seaweed",
  },

  // Essential Fatty Acids & Proteins
  {
    type: "Omega-3 supplement",
    name: "EPA (Eicosapentaenoic Acid) & DHA (Docosahexaenoic Acid) / ALA",
    solubility: "Fatty Acids & Proteins",
    mainFunction:
      "Lowers serum triglycerides, resolves vascular inflammation, and supports retinal and neuronal membrane fluidity",
    keySources:
      "Fatty fish (salmon, mackerel, sardines), fish oil, algal oil, flaxseeds, walnuts, chia seeds",
  },
  {
    type: "Protein / Albumin supplement",
    name: "Whey / Casein Protein Isolate & Essential Amino Acids (Albumin Support)",
    solubility: "Fatty Acids & Proteins",
    mainFunction:
      "Provides essential amino acids for hepatic albumin synthesis, plasma oncotic pressure, muscle tissue repair, enzymes, and antibodies",
    keySources:
      "Eggs (egg white albumin), milk/whey/casein, lean poultry, fish, soy, lentils",
  },
];

const USE_REASONS = [
  {
    number: "01",
    title: "Nutritional Deficiencies",
    description:
      "Helps correct documented or suspected vitamin and mineral deficiencies when the formulation supplies the specific missing micronutrient.",
  },
  {
    number: "02",
    title: "Older Adults",
    description:
      "Aging reduces gastric acid secretion and intestinal absorption (especially Vitamin B12, Vitamin D, and Calcium), increasing supplementation needs.",
  },
  {
    number: "03",
    title: "Pregnancy & Lactation",
    description:
      "Specific prenatal formulations supply critical nutrients such as Folic Acid (preventing neural tube defects) and Iron to support maternal-fetal demands.",
  },
  {
    number: "04",
    title: "Restricted Diets",
    description:
      "Individuals following strict vegan/vegetarian diets, allergy-elimination diets, or limited food choices may require targeted B12, Iron, Zinc, or Vitamin D.",
  },
  {
    number: "05",
    title: "Increased Nutritional Requirements",
    description:
      "Post-surgical recovery, chronic illness, malabsorption disorders, or heavy physical stress may warrant clinical nutritional assessment and repletion.",
  },
];

const MULTIVITAMIN_CLASSES: MultivitaminClassCard[] = [
  {
    id: "multivitamin-multimineral",
    code: "Class 01",
    name: "1. Multivitamin + Multimineral",
    composition:
      "Combines water-soluble vitamins (B-complex, Vitamin C), fat-soluble vitamins (A, D3, E), and essential trace minerals (Zinc, Magnesium, Selenium, Copper, Manganese).",
    brandExamples: "Zincovit, Supradyn, Revital H",
    usedFor:
      "General nutritional supplementation, convalescence/recovery, and prevention of broad micronutrient deficiencies.",
    clinicalNote:
      "Take after a meal with water to maximize absorption of fat-soluble vitamins and prevent mild zinc/mineral nausea.",
  },
  {
    id: "vitamin-b-complex",
    code: "Class 02",
    name: "2. Vitamin B-Complex",
    composition:
      "Contains water-soluble B-group vitamins: B1 (Thiamine), B2 (Riboflavin), B3 (Niacinamide), B5 (Pantothenic acid), B6 (Pyridoxine), B7 (Biotin), B9 (Folic acid), and B12 (Methylcobalamin / Cyanocobalamin).",
    brandExamples: "Becosules, Neurobion Forte, Optineuron",
    usedFor:
      "Prevention or correction of B-vitamin deficiencies, peripheral neuropathy support, mouth ulcers (aphthous stomatitis), and antibiotic-associated flora depletion.",
    clinicalNote:
      "Excess water-soluble B-vitamins (especially Riboflavin/B2) are excreted in urine, harmlessly turning urine bright yellow.",
  },
  {
    id: "fat-soluble-vitamins",
    code: "Class 03",
    name: "3. Fat-Soluble Vitamin Combinations (A, D, E, K)",
    composition:
      "Vitamins A (Retinol / Beta-carotene), D (Cholecalciferol / Ergocalciferol), E (Tocopherol), and K (Phytomenadione / Menaquinone).",
    brandExamples: "DEKAs, AquADEKs, targeted A+D / D3+K2 formulations",
    usedFor:
      "Specific fat-soluble vitamin deficiencies, fat malabsorption disorders (chronic pancreatitis, celiac disease, cystic fibrosis, cholestatic liver disease).",
    clinicalNote:
      "Requires dietary fat/bile for absorption and stores in liver/adipose tissue—excess intake carries hypervitaminosis toxicity risk (especially Vitamins A and D).",
  },
  {
    id: "vitamin-c-zinc",
    code: "Class 04",
    name: "4. Vitamin C + Zinc",
    composition:
      "Ascorbic Acid (Vitamin C 500 mg) paired with Elemental Zinc (Zinc Sulfate / Zinc Acetate / Zinc Gluconate).",
    brandExamples: "Limcee Plus, Celin + Zinc, Zincovit-C",
    usedFor:
      "Correcting Vitamin C or Zinc deficiencies, supporting normal epithelial/immune barrier function, wound healing, and pediatric diarrhea adjunct (Zinc).",
    clinicalNote:
      "Chronic excessive zinc intake (> 40 mg/day long-term) can deplete body copper stores and cause anemia or neuropathy.",
  },
  {
    id: "calcium-vitamin-d3",
    code: "Class 05",
    name: "5. Calcium + Vitamin D3",
    composition:
      "Elemental Calcium (Calcium Carbonate or Calcium Citrate) combined with Cholecalciferol (Vitamin D3) to enhance intestinal calcium absorption.",
    brandExamples: "Shelcal 500, Cipcal 500, Gemcal",
    usedFor:
      "Calcium and Vitamin D supplementation, osteopenia, osteoporosis, postmenopausal bone health, and pregnancy/lactation.",
    clinicalNote:
      "Calcium Carbonate requires stomach acid (take WITH meals); Calcium Citrate absorbs well with or without food (preferred in patients taking PPIs). Separate by 2–4 hours from Iron and Levothyroxine.",
  },
  {
    id: "iron-folic-acid-b12",
    code: "Class 06",
    name: "6. Iron + Folic Acid + Vitamin B12 (Hematinics)",
    composition:
      "Elemental Iron (Ferrous Ascorbate, Ferrous Sulfate, Ferrous Fumarate) + Folic Acid (Vitamin B9) + Vitamin B12 (Methylcobalamin / Cyanocobalamin).",
    brandExamples: "Autrin, Orofer-XT, Dexorange, Fefol-Z",
    usedFor:
      "Iron-deficiency anemia, megaloblastic anemia (folate/B12 deficiency), pregnancy/prenatal hematinic supplementation, and chronic blood loss.",
    clinicalNote:
      "Harmlessly turns stools dark black/green. Avoid tea, coffee, milk, or calcium supplements within 2 hours of iron intake (blocks gut absorption).",
  },
];

const BRAND_COMBINATIONS: BrandComboCard[] = [
  {
    id: "threptin",
    brandName: "Threptin / Threptin Lite (Sugar-Free, Low-Carb)",
    link: "/medical/multivitamin/threptin",
    group: "High-Calorie Casein Protein & B-Vitamin Nutritional Diskettes",
    keyIngredients:
      "Micellar Casein Protein (~30 g/100 g), Vitamins B1, B2, B3, and Dietary Fiber (Threptin Lite uses sugar-free maltitol/sucralose base)",
    primaryUse:
      "Protein-energy malnutrition, convalescence/post-surgery recovery, elderly muscle wasting, pregnancy protein supplementation, and diabetic protein snacking (Threptin Lite).",
    timingAndTip:
      "3 to 5 diskettes mid-morning and evening between meals so it supplements rather than replaces main meal appetite.",
  },
  {
    id: "limcee",
    brandName: "Limcee (500 mg)",
    link: "/medical/multivitamin/limcee",
    group: "Vitamin C Chewable Tablets (500 mg)",
    keyIngredients:
      "Ascorbic Acid (Vitamin C) 100 mg + Sodium Ascorbate 450 mg (equivalent to 500 mg Vitamin C)",
    primaryUse:
      "Vitamin C deficiency/scurvy prevention, immune antioxidant support, wound/gum healing, and enhancing dietary non-heme iron absorption.",
    timingAndTip:
      "Chew 1 tablet once daily after a meal; rinse mouth with water afterward to protect tooth enamel from ascorbic acidity.",
  },
  {
    id: "zincovit",
    brandName: "Zincovit Tablet / Syrup",
    group: "Multivitamin + Multimineral + Grape Seed Extract",
    keyIngredients:
      "Vitamins A, B1, B2, B3, B5, B6, B7, B9, B12, C, D3, E + Zinc, Magnesium, Manganese, Selenium, Copper, Chromium + Grape Seed Extract",
    primaryUse:
      "General nutritional supplementation, post-illness convalescence, and immune/antioxidant support.",
    timingAndTip:
      "1 tablet once daily after a main meal to prevent zinc-related stomach queasiness.",
  },
  {
    id: "supradyn",
    brandName: "Supradyn Daily",
    group: "High-Potency Multivitamin + Multimineral",
    keyIngredients:
      "11 Vitamins (B-Complex, C, A, D3, E) + 5 Minerals (Calcium, Magnesium, Iron, Zinc, Copper) + Trace Elements",
    primaryUse:
      "Daily micronutrient replenishment during physical fatigue, restricted diets, and recovery.",
    timingAndTip:
      "Take after breakfast; contains small amounts of Iron and Calcium—separate from thyroid tablets by 4 hours.",
  },
  {
    id: "becosules",
    brandName: "Becosules Capsules / Z",
    group: "Vitamin B-Complex + Vitamin C (± Zinc)",
    keyIngredients:
      "Thiamine (B1), Riboflavin (B2), Niacinamide (B3), Calcium Pantothenate (B5), Pyridoxine (B6), Biotin (B7), Folic Acid (B9), B12 + Vitamin C (± Zinc)",
    primaryUse:
      "Mouth ulcers (aphthous stomatitis), glossitis, antibiotic-associated B-vitamin depletion, and tissue repair.",
    timingAndTip:
      "Bright yellow urine is a harmless, normal sign of Riboflavin (Vitamin B2) excretion.",
  },
  {
    id: "neurobion-forte",
    brandName: "Neurobion Forte",
    group: "Neurotropic Vitamin B-Complex",
    keyIngredients:
      "High-dose Vitamin B1 (Thiamine 10 mg), Vitamin B6 (Pyridoxine 3 mg), Vitamin B12 (Cyanocobalamin 15 mcg) + B2, B3, B5",
    primaryUse:
      "Diabetic or drug-induced peripheral neuropathy, tingling/numbness in extremities, and B-vitamin nerve support.",
    timingAndTip:
      "Swallow whole with water after food; avoid excessive cumulative Vitamin B6 from multiple overlapping brands.",
  },
  {
    id: "shelcal-500",
    brandName: "Shelcal 500 / Cipcal 500",
    group: "Calcium + Vitamin D3 Combination",
    keyIngredients:
      "Elemental Calcium 500 mg (from Calcium Carbonate) + Vitamin D3 (Cholecalciferol 250–500 IU)",
    primaryUse:
      "Osteopenia, osteoporosis, postmenopausal bone density support, and pregnancy calcium supplementation.",
    timingAndTip:
      "Take WITH meals for optimal acid-dependent absorption; keep 2+ hours away from Iron supplements.",
  },
  {
    id: "orofer-xt-dexorange",
    brandName: "Orofer-XT / Autrin / Dexorange",
    group: "Iron + Folic Acid + Vitamin B12 (Hematinic)",
    keyIngredients:
      "Elemental Iron 100 mg (Ferrous Ascorbate / Ferrous Fumarate / Ferric Ammonium Citrate) + Folic Acid 1.5 mg ± Vitamin B12",
    primaryUse:
      "Iron-deficiency anemia, megaloblastic anemia, and prenatal/postpartum hemoglobin restoration.",
    timingAndTip:
      "Ferrous Ascorbate offers high GI tolerability and absorption without needing extra Vitamin C; avoid tea/milk around dosing.",
  },
  {
    id: "stanergy",
    brandName: "Stanergy",
    group: "Antioxidants with Multivitamins Softgel Capsules",
    keyIngredients:
      "Beta-Carotene (Pro-Vitamin A), Vitamin C, Vitamin E, Selenium, Zinc, Copper, Manganese & B-Complex Vitamins",
    primaryUse:
      "Oxidative stress reduction, chronic fatigue, convalescence, and cellular antioxidant protection.",
    timingAndTip:
      "Swallow 1 softgel daily after a fat-containing meal so Beta-Carotene and Vitamin E absorb completely.",
  },
  {
    id: "ne",
    brandName: "NE-400 (Evion 400 Equivalent)",
    group: "Vitamin E Acetate Soft Gelatin Capsules (400 IU)",
    keyIngredients: "Tocopheryl Acetate (Vitamin E) 400 mg / IU",
    primaryUse:
      "Vitamin E deficiency, nocturnal leg muscle cramps, non-alcoholic fatty liver (MASLD) adjunct, and lipid membrane antioxidant support.",
    timingAndTip:
      "Take with meals for lipid absorption; use caution if taking Warfarin, Aspirin, or Clopidogrel (high-dose Vitamin E mildly increases bleeding tendency).",
  },
  {
    id: "zestovit",
    brandName: "Zestovit 4G",
    group:
      "Omega-3 + 4 Herbal Extracts (4G) + Multivitamin & Multimineral Softgels",
    keyIngredients:
      "Omega-3 Fatty Acids (EPA/DHA), Green Tea Extract, Ginkgo Biloba, Ginseng Extract, Grape Seed Extract + Multivitamins, Multiminerals & Trace Elements",
    primaryUse:
      "Physical and mental fatigue, cognitive/memory focus, cardiovascular antioxidant support, and general vitality.",
    timingAndTip:
      "Take after breakfast (Ginseng may cause mild insomnia if taken late at night); avoid before surgery or with anticoagulants due to Ginkgo/Omega-3.",
  },
  {
    id: "talwar",
    brandName: "Talwar 4G",
    group: "Plant Omega-3 + 4G Botanicals + Wheat Germ Oil + Choline Softgels",
    keyIngredients:
      "Flax Seed Oil (ALA Omega-3), Ginseng, Green Tea Extract, Ginkgo Biloba, Grape Seed Extract, Wheat Germ Oil, Choline Hydrogen Tartrate + Vitamins & Trace Elements",
    primaryUse:
      "Neuro-cognitive support (Choline + Ginkgo), physical stamina, antioxidant defense, and nutritional supplementation.",
    timingAndTip:
      "Take after lunch or breakfast with water; stop 7 days prior to elective surgical procedures due to Ginkgo/plant oil antiplatelet activity.",
  },
  {
    id: "omeglo",
    brandName: "Omeglo Plus",
    group:
      "Marine Omega-3 + 4G Herbal Extracts + Multivitamin & Mineral Capsules",
    keyIngredients:
      "Omega-3 Marine Triglycerides (EPA + DHA), Green Tea Extract, Ginkgo Dry Extract, Ginseng Dry Extract, Grape Seed Extract + Antioxidants, Vitamins & Minerals",
    primaryUse:
      "Cardioprotective triglyceride support, mental alertness, antioxidant recovery, and daily micronutrient replenishment.",
    timingAndTip:
      "Swallow whole with food to prevent fishy aftertaste and improve fat-soluble absorption.",
  },
  {
    id: "joylife",
    brandName: "JoyLife 12G",
    group:
      "Multi-Herbal (Omega-3, Garlic, Ginseng, Ginkgo, Green Tea, Grape Seed) + Multivitamin Softgels",
    keyIngredients:
      "Omega-3 Fatty Acids, Garlic Extract (Allium sativum), Green Tea Extract, Ginkgo Biloba, Ginseng, Grape Seed Extract + Vitamins & Minerals",
    primaryUse:
      "Cardiovascular lipid/circulation support, stamina, and broad antioxidant micronutrient supplementation.",
    timingAndTip:
      "Take after a main meal; caution in patients on blood thinners (Warfarin/Clopidogrel) due to combined Garlic, Ginkgo, and Omega-3.",
  },
  {
    id: "o32",
    brandName: "O32",
    group: "Omega-3 + Biotin + 4G Botanicals + Multivitamin & Mineral Softgels",
    keyIngredients:
      "Omega-3 Fatty Acids, Biotin (Vitamin B7), Green Tea Extract, Ginkgo Biloba, Ginseng, Grape Seed Extract + Multivitamins, Minerals & Trace Elements",
    primaryUse:
      "Hair/skin/nail keratin support (Biotin + Omega-3), cognitive focus, and general fatigue recovery.",
    timingAndTip:
      "Stop at least 48–72 hours before thyroid or cardiac troponin blood tests because Biotin can falsely interfere with lab immunoassays.",
  },
  {
    id: "trumeco",
    brandName: "TRUMECO-CD3",
    group:
      "Neuro-Metabolic & Bone Combination (Calcium + D3 + Benfotiamine + ALA + Inositol + Chromium)",
    keyIngredients:
      "Calcium Carbonate, Benfotiamine (lipid-soluble B1), Alpha Lipoic Acid (ALA), Inositol, Chromium Picolinate, Methylcobalamin (B12), Folic Acid, Pyridoxine (B6) & Vitamin D3",
    primaryUse:
      "Diabetic peripheral neuropathy paired with insulin resistance/metabolic syndrome and Vitamin D/Calcium bone support.",
    timingAndTip:
      "Take after meals; Chromium and Alpha Lipoic Acid can enhance insulin sensitivity—monitor blood glucose in diabetic patients.",
  },
  {
    id: "fourts",
    brandName: "Fourts B2 Plus",
    group:
      "Active Vitamins + Natural Extracts + Minerals & Amino Acids Tablets",
    keyIngredients:
      "Active B-Vitamins (Methylcobalamin, Pyridoxal-5-Phosphate, L-Methylfolate), Natural Antioxidant Extracts, Essential Minerals & L-Amino Acids",
    primaryUse:
      "Convalescence, tissue protein synthesis, chronic fatigue, and nutritional depletion.",
    timingAndTip:
      "1 tablet daily after meals; active coenzyme vitamins bypass hepatic conversion steps.",
  },
  {
    id: "joybion",
    brandName: "JOYBION",
    group: "Neurotropic Antioxidant + Vitamin D3 Combination",
    keyIngredients:
      "Methylcobalamin (1,500 mcg), Alpha Lipoic Acid (100 mg), Pyridoxine HCl (B6), Folic Acid & Vitamin D3",
    primaryUse:
      "Diabetic neuropathy, sciatica/radiculopathy, burning/tingling paresthesias, and coexisting Vitamin D deficiency.",
    timingAndTip:
      "Best taken 30 minutes before or after food with water; Alpha Lipoic Acid neutralizes nerve oxidative free radicals.",
  },
  {
    id: "benfonyle",
    brandName: "Benfonyle",
    group: "Diabetic Neuropathy & Insulin-Sensitizing Softgel Capsules",
    keyIngredients:
      "Benfotiamine, Methylcobalamin, Alpha Lipoic Acid, Chromium Picolinate & Inositol",
    primaryUse:
      "Diabetic peripheral neuropathy, glycemic insulin-resistance support (Chromium + Inositol), and nerve myelin repair.",
    timingAndTip:
      "Take once daily after a meal; monitor capillary blood glucose if combined with insulin or sulfonylureas.",
  },
  {
    id: "bfit",
    brandName: "B-Fit-CD",
    group:
      "Cardio-Metabolic Antioxidant (Astaxanthin + Policosanol + Omega-3) + Multivitamins",
    keyIngredients:
      "Astaxanthin (carotenoid antioxidant), Policosanol (cholesterol/lipid modulator), Omega-3 Fatty Acids, Multivitamins, Minerals & Antioxidants",
    primaryUse:
      "Cardiovascular protection, dyslipidemia adjunct, endothelial oxidative stress, and diabetic vascular health.",
    timingAndTip:
      "Take with the main meal of the day for optimal absorption of fat-soluble Astaxanthin and Omega-3.",
  },
  {
    id: "knervegold",
    brandName: "K Nerve Gold",
    group: "6-Component Neuroprotective & Myelin-Repair Tablets",
    keyIngredients:
      "Benfotiamine, Methylcobalamin, Pyridoxine (B6), Alpha Lipoic Acid, Folic Acid & Inositol",
    primaryUse:
      "Moderate-to-severe diabetic neuropathy, alcoholic neuropathy, and nerve conduction recovery.",
    timingAndTip:
      "1 tablet daily after food; Benfotiamine achieves 5x higher intracellular nerve thiamine levels than water-soluble B1.",
  },
  {
    id: "knerve",
    brandName: "K NERVE",
    group: "Core Neurotropic B-Vitamins + Alpha Lipoic Acid Tablets",
    keyIngredients:
      "Methylcobalamin (1,500 mcg), Vitamin B6 (Pyridoxine), Folic Acid & Alpha Lipoic Acid",
    primaryUse:
      "Peripheral neuropathy, hyperhomocysteinemia, and drug-induced nerve tingling (e.g., Isoniazid/Metformin B12 depletion).",
    timingAndTip:
      "1 tablet once daily; pairs well with long-term Metformin therapy which depletes intestinal Vitamin B12.",
  },
  {
    id: "sydnerve",
    brandName: "SydNerve D",
    group:
      "Neuro-Protective B-Vitamins + Alpha Lipoic Acid + Vitamin D3 Tablets",
    keyIngredients:
      "Alpha Lipoic Acid, Folic Acid, Methylcobalamin, Pyridoxine Hydrochloride & Vitamin D3",
    primaryUse:
      "Neuropathic pain/numbness accompanied by Vitamin D3 deficiency and musculoskeletal weakness.",
    timingAndTip:
      "Take after a meal containing healthy fats to maximize Vitamin D3 absorption.",
  },
  {
    id: "benlee",
    brandName: "BENLEE FORTE",
    group: "Comprehensive Neuro-Metabolic & Calcium-D3 Formula",
    keyIngredients:
      "Methylcobalamin, Alpha Lipoic Acid, Inositol, Folic Acid, Pyridoxine HCl, Vitamin D3, Chromium Polynicotinate, Calcium Carbonate & Benfotiamine",
    primaryUse:
      "Diabetic neuropathy with metabolic syndrome and bone-mineral support in a single daily tablet.",
    timingAndTip:
      "Take after lunch/dinner; separate by at least 2–4 hours from Levothyroxine or Iron tablets due to Calcium Carbonate.",
  },
  {
    id: "benfoglit",
    brandName: "Benfoglit-CD3",
    group:
      "Neuro-Vascular & Metabolic Support (Benfotiamine + Myo-Inositol + Chromium + Selenium + Ca-D3)",
    keyIngredients:
      "Methylcobalamin, Alpha Lipoic Acid, Benfotiamine, Myo-Inositol, Calcium Carbonate, Pyridoxine HCl, Folic Acid, Vitamin D3, Chromium & Selenium",
    primaryUse:
      "Diabetic peripheral neuropathy, insulin resistance/PCOS metabolic support (Myo-Inositol + Chromium), and antioxidant thyroid/bone care.",
    timingAndTip:
      "Take with meals; keep 2+ hours apart from iron or fluoroquinolone antibiotics.",
  },
  {
    id: "setmax",
    brandName: "SETMAX-V",
    group: "Multivitamin + Essential Amino Acids & Minerals Tablets",
    keyIngredients:
      "Essential L-Amino Acids (L-Leucine, L-Lysine, L-Methionine, L-Valine, etc.) + Multivitamins & Essential Minerals",
    primaryUse:
      "Tissue repair, post-operative recovery, sarcopenia/muscle weakness, and protein-deficient vegetarian diets.",
    timingAndTip:
      "1 tablet once or twice daily after meals with a full glass of water.",
  },
  {
    id: "reconerver",
    brandName: "Reconerver-D",
    group: "Nerve Regeneration + Vitamin D3 Combination Tablets",
    keyIngredients:
      "Methylcobalamin, Alpha Lipoic Acid, Vitamin D3, Pyridoxine Hydrochloride & Folic Acid",
    primaryUse:
      "Peripheral nerve regeneration, sciatica, cervical/lumbar radiculopathy, and Vitamin D3 insufficiency.",
    timingAndTip:
      "Take once daily after food; consistent 8–12 week course is typically required for nerve symptom improvement.",
  },
  {
    id: "liferaise",
    brandName: "Liferaise D3",
    group:
      "Cholecalciferol (Vitamin D3) Oral Nano-Shot / Solution (60,000 IU / 5 mL)",
    keyIngredients:
      "Cholecalciferol (Vitamin D3) 60,000 IU in sugar-free micellar/nano-droplet oral solution",
    primaryUse:
      "Rapid correction of moderate-to-severe Vitamin D3 deficiency, osteomalacia, and patients who have difficulty swallowing capsules.",
    timingAndTip:
      "Drink 1 mini-bottle (60,000 IU) ONCE A WEEK for 6–8 weeks after a fatty meal—NEVER take daily (risk of Vitamin D hypercalcemia).",
  },
  {
    id: "oris",
    brandName: "Oris-D3 / Fulrise-D3",
    group: "High-Dose Cholecalciferol Soft Gelatin Capsules (60,000 IU)",
    keyIngredients:
      "Cholecalciferol (Vitamin D3) 60,000 IU dissolved in lipid softgel base",
    primaryUse:
      "Weekly loading therapy for Vitamin D3 deficiency, osteoporosis adjunct, and hypocalcemia management.",
    timingAndTip:
      "Swallow 1 softgel ONCE WEEKLY after a main meal for 6–8 weeks, then switch to monthly maintenance as advised.",
  },
  {
    id: "furnext",
    brandName: "Fur-Next",
    group: "Non-Ionic Ferric Maltol + Hematinic & Moringa Botanical Capsules",
    keyIngredients:
      "Ferric Maltol (gentle iron complex), Folic Acid, Vitamin B12, Vitamin D2 & Moringa Leaf Extract",
    primaryUse:
      "Iron-deficiency anemia in patients intolerant to traditional ferrous salts (IBD, gastritis, sensitive stomach).",
    timingAndTip:
      "Ferric Maltol causes far less constipation and nausea than Ferrous Sulfate; avoid tea/coffee/calcium within 2 hours.",
  },
  {
    id: "hemostimneo",
    brandName: "HEMOSTIM NEO",
    group:
      "Liposomal Ferric Pyrophosphate + Vitamin C + Folic Acid + B12 Tablets",
    keyIngredients:
      "Liposomal Ferric Pyrophosphate (micro-encapsulated iron), Vitamin C (Ascorbic Acid), Folic Acid & Vitamin B12",
    primaryUse:
      "Iron-deficiency anemia and prenatal hemoglobin support with superior GI tolerability and zero metallic aftertaste.",
    timingAndTip:
      "Liposomal encapsulation protects the stomach lining from free iron irritation and prevents teeth staining.",
  },
  {
    id: "folisure",
    brandName: "Folisure",
    group:
      "Active Bio-Methylated B-Vitamins (L-Methylfolate + Methylcobalamin + P-5-P)",
    keyIngredients:
      "L-Methylfolate Calcium (active B9), Methylcobalamin (active B12) & Pyridoxal-5-Phosphate (active B6)",
    primaryUse:
      "Patients with MTHFR genetic polymorphism (unable to convert synthetic folic acid), hyperhomocysteinemia, prenatal neural tube protection, and neuropathy.",
    timingAndTip:
      "100% biologically active coenzyme forms—ready for immediate cellular use without liver activation.",
  },
  {
    id: "arorise",
    brandName: "Arorise",
    group:
      "Standard Hematinic + Zinc Combination (Iron + Zinc + Folic Acid + B12)",
    keyIngredients:
      "Elemental Iron (Ferrous Ascorbate/Fumarate), Elemental Zinc, Folic Acid & Vitamin B12",
    primaryUse:
      "Nutritional iron-deficiency anemia, pregnancy hematinic supplementation, and combined iron-zinc deficiency.",
    timingAndTip:
      "Harmlessly darkens stools; avoid taking alongside milk, antacids, or calcium tablets.",
  },
  {
    id: "garcibio",
    brandName: "GarciBIO",
    group: "Herbal Weight & Lipid Management Supplement (Garcinia cambogia)",
    keyIngredients:
      "Garcinia cambogia Fruit Rind Extract standardized to Hydroxycitric Acid (HCA)",
    primaryUse:
      "Adjunctive appetite control and weight/lipid management alongside calorie-controlled diet and exercise.",
    timingAndTip:
      "Take 30–60 minutes before meals with water; avoid in pregnancy/lactation and use caution in patients with pre-existing liver disease.",
  },
  {
    id: "theraspine",
    brandName: "Thera Spine",
    group:
      "Neuromuscular & Spinal Relaxation Nutraceutical (GABA + Griffonia 5-HTP + Choline + Whey + Botanicals)",
    keyIngredients:
      "Gamma-Aminobutyric Acid (GABA), Griffonia simplicifolia Extract (5-HTP), Choline Bitartrate, Whey Protein Isolate, Cocoa Extract, Grape Seed Extract, Cinnamon & Amino Acids",
    primaryUse:
      "Adjunctive support for spinal/neck muscular tension, neuromuscular recovery, sleep-pain relaxation, and tissue repair.",
    timingAndTip:
      "Do NOT combine with prescription SSRIs, SNRIs, or MAO inhibitors because Griffonia simplicifolia contains 5-HTP (serotonin precursor).",
  },
  {
    id: "cornica",
    brandName: "CORNICA D3",
    group: "Marine Coral Calcium + Vitamin D3 Tablets",
    keyIngredients:
      "Coral Calcium (naturally derived calcium carbonate + trace marine minerals) + Cholecalciferol (Vitamin D3)",
    primaryUse:
      "Bone mineral density maintenance, osteopenia, osteoporosis, and daily calcium/Vitamin D3 supplementation.",
    timingAndTip:
      "Take WITH meals for optimal absorption; separate by 2+ hours from Iron and 4 hours from Levothyroxine.",
  },
  {
    id: "cornicaplus",
    brandName: "CORNICA Plus",
    group: "Marine Coral Calcium + Bone-Active Vitamins Capsules",
    keyIngredients:
      "Coral Calcium + Vitamin D3, Methylcobalamin (B12) & Folic Acid",
    primaryUse:
      "Combined bone mineralization and homocysteine-lowering bone matrix support in postmenopausal and elderly adults.",
    timingAndTip: "Swallow after meals with water; stay well hydrated.",
  },
  {
    id: "corcell",
    brandName: "CORCELL",
    group: "Pure Marine Coral Calcium Tablets",
    keyIngredients:
      "Natural Marine Coral Calcium (providing elemental calcium + naturally occurring trace magnesium/minerals)",
    primaryUse:
      "Calcium supplementation in patients who already receive separate high-dose Vitamin D3 therapy.",
    timingAndTip:
      "Divide doses if taking > 500 mg elemental calcium/day (the gut absorbs max ~500 mg calcium at one time).",
  },
  {
    id: "bio",
    brandName: "Bio-D3 Plus",
    group: "Active Calcitriol (1,25-Dihydroxyvitamin D3) + Calcium Capsules",
    keyIngredients:
      "Calcitriol (0.25 mcg — active hormonal Vitamin D) + Calcium Carbonate (500 mg)",
    primaryUse:
      "Postmenopausal osteoporosis, hypoparathyroidism, and chronic kidney disease (CKD) bone disease where kidneys cannot activate regular Vitamin D3.",
    timingAndTip:
      "Contains active Calcitriol (much more potent than plain Cholecalciferol)—monitor serum calcium periodically to prevent hypercalcemia.",
  },
  {
    id: "calcipol",
    brandName: "Calcipol-K27",
    group:
      "Complete Bone-Matrix Softgels (Calcium + Calcitriol + Vitamin K2-7 + Methylcobalamin + Minerals)",
    keyIngredients:
      "Calcium Carbonate, Calcitriol (active D3), Vitamin K2-7 (Menaquinone-7), Methylcobalamin (B12), Magnesium, Boron & Zinc",
    primaryUse:
      "Advanced osteoporosis and fracture-healing therapy—Vitamin K2-7 activates osteocalcin to lock calcium into bone rather than arteries.",
    timingAndTip:
      "Strictly avoid or consult a cardiologist if taking Warfarin (Vitamin K2 antagonizes Warfarin anticoagulation).",
  },
  {
    id: "astymin",
    brandName: "Astymin M Forte",
    group:
      "Essential Amino Acids, Vitamins, Methylcobalamin & Minerals Capsules",
    keyIngredients:
      "Essential L-Amino Acids (L-Leucine, L-Isoleucine, L-Lysine, L-Methionine, L-Phenylalanine, L-Threonine, L-Tryptophan, L-Valine, L-Histidine) + Methylcobalamin (Vitamin B12), B-Complex, Vitamins A, C, D3, E & Trace Minerals (Zinc, Iron, Copper, Manganese, Selenium)",
    primaryUse:
      "Protein-amino acid malnutrition, post-illness/post-surgical convalescence, chronic fatigue, vegetarian dietary gaps, and tissue/immune recovery.",
    timingAndTip:
      "1 capsule once or twice daily after meals with water; contains trace iron and minerals—separate by 2–4 hours from thyroid medications.",
  },
];

const MICRONUTRIENT_REFERENCE: MicronutrientCard[] = [
  {
    id: "vit-b-group",
    name: "Vitamin B-Complex (B1, B2, B3, B5, B6, B7, B9, B12)",
    category: "Water-Soluble Vitamins",
    mainAction:
      "Essential enzymatic cofactors for cellular ATP energy metabolism, red blood cell synthesis (B9/B12), and peripheral nerve myelin integrity (B1/B6/B12).",
    deficiencyClues:
      "Fatigue, mouth corner cracks (angular cheilitis), glossitis, tingling/numbness in hands & feet (B12/B1), megaloblastic anemia.",
    toxicityOrCaution:
      "Excess is renally excreted; however, chronic mega-doses of Vitamin B6 (> 100–200 mg/day) can paradoxically cause sensory peripheral neuropathy.",
  },
  {
    id: "vit-c",
    name: "Vitamin C (Ascorbic Acid)",
    category: "Water-Soluble Vitamins",
    mainAction:
      "Water-soluble antioxidant required for collagen cross-linking, wound healing, immune leukocyte function, and enhancing non-heme iron absorption.",
    deficiencyClues:
      "Bleeding gums, poor wound healing, easy bruising, follicular hyperkeratosis (scurvy).",
    toxicityOrCaution:
      "High doses (> 2,000 mg/day) cause osmotic diarrhea, abdominal cramps, and increased oxalate kidney stone risk in susceptible individuals.",
  },
  {
    id: "vit-a",
    name: "Vitamin A (Retinol / Beta-Carotene)",
    category: "Fat-Soluble Vitamins",
    mainAction:
      "Essential for retinal rhodopsin night vision, epithelial mucosal integrity, and immune cell differentiation.",
    deficiencyClues:
      "Night blindness (nyctalopia), dry conjunctiva/cornea (Bitot's spots), frequent infections.",
    toxicityOrCaution:
      "TERATOGENIC in high preformed retinol doses during pregnancy; chronic excess causes hepatotoxicity, intracranial hypertension, and dry peeling skin.",
  },
  {
    id: "vit-d3",
    name: "Vitamin D3 (Cholecalciferol)",
    category: "Fat-Soluble Vitamins",
    mainAction:
      "Regulates intestinal calcium and phosphate absorption, bone mineralization, neuromuscular strength, and immune modulation.",
    deficiencyClues:
      "Bone/back pain, proximal muscle weakness, osteomalacia (adults), rickets (children).",
    toxicityOrCaution:
      "Excessive mega-dosing causes hypercalcemia, hypercalciuria, kidney stones, nausea, and vascular calcification.",
  },
  {
    id: "vit-e-k",
    name: "Vitamin E (Tocopherol) & Vitamin K (K1 / K2)",
    category: "Fat-Soluble Vitamins",
    mainAction:
      "Vitamin E protects cell membranes from lipid peroxidation; Vitamin K activates hepatic clotting factors (II, VII, IX, X) and bone osteocalcin.",
    deficiencyClues:
      "Vitamin E: hemolytic anemia, ataxia/neuropathy; Vitamin K: easy bruising, mucosal bleeding, prolonged PT/INR.",
    toxicityOrCaution:
      "High-dose Vitamin E (> 400–800 IU/day) increases bleeding risk with anticoagulants; Vitamin K1 antagonizes Warfarin.",
  },
  {
    id: "iron-zinc-calcium",
    name: "Essential Minerals (Iron, Zinc, Calcium, Magnesium)",
    category: "Essential Minerals",
    mainAction:
      "Iron builds hemoglobin oxygen transport; Zinc supports > 300 metalloenzymes & wound/immune repair; Calcium & Magnesium support bone structure and neuromuscular signaling.",
    deficiencyClues:
      "Iron: pallor, fatigue, dyspnea; Zinc: impaired taste, delayed wound healing, diarrhea; Calcium/Mg: muscle cramps, tetany, osteopenia.",
    toxicityOrCaution:
      "Accidental iron overdose is a leading cause of fatal poisoning in young children—keep iron/multivitamin bottles locked out of reach.",
  },
];

export default function MultivitaminPage() {
  const [activeTab, setActiveTab] = useState<BottomTab>("brands");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSolubility, setSelectedSolubility] =
    useState<VitaminSolubilityFilter>("All");
  const [vitaminGroupFilter, setVitaminGroupFilter] =
    useState<NutrientCategoryFilter>("All");

  const filteredVitaminGroups = useMemo(() => {
    return VITAMIN_GROUPS_DATA.filter((v) => {
      const matchesSolubility =
        vitaminGroupFilter === "All" || v.solubility === vitaminGroupFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        v.type.toLowerCase().includes(q) ||
        v.name.toLowerCase().includes(q) ||
        v.mainFunction.toLowerCase().includes(q);
      return matchesSolubility && matchesQuery;
    });
  }, [vitaminGroupFilter, searchQuery]);

  const filteredBrands = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return BRAND_COMBINATIONS;
    return BRAND_COMBINATIONS.filter(
      (item) =>
        item.brandName.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.keyIngredients.toLowerCase().includes(q) ||
        item.primaryUse.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const filteredMicronutrients = useMemo(() => {
    return MICRONUTRIENT_REFERENCE.filter((item) => {
      const matchesCat =
        selectedSolubility === "All" || item.category === selectedSolubility;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.mainAction.toLowerCase().includes(q) ||
        item.deficiencyClues.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [searchQuery, selectedSolubility]);

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
              <Sparkles className="w-3.5 h-3.5" /> Pharmacology &amp; Clinical
              Nutrition Codex
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Multivitamins &amp; Micronutrient Formulations
            </h1>

            <div className="mb-3 space-y-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              <p>
                Core Definition:{" "}
                <strong className="text-teal-300">A multivitamin</strong> is a
                dietary or clinical supplement combining multiple vitamins—and
                often essential minerals—in a single tablet, capsule, syrup, or
                injection to help meet physiological nutrient requirements.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-amber-400 font-mono">
                    6 Major Formulations
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Multivitamin+Mineral &bull; B-Complex &bull; A-D-E-K &bull;
                    Vit C+Zinc &bull; Ca+D3 &bull; Hematinics
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  <strong className="text-teal-400 font-mono">
                    Key Brands
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Zincovit &bull; Supradyn &bull; Becosules &bull; Neurobion
                    Forte &bull; Shelcal
                  </span>
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Clinical guide covering why multivitamins are used across life
              stages, the 6 major formulation categories, water-soluble vs.
              fat-soluble vitamin pharmacology, drug-nutrient spacing rules, and
              hypervitaminosis safety.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Formulation Groups
              </span>
              <span className="text-xl font-bold text-teal-400 font-mono">
                6 Core Classes
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Dosage Forms
              </span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                Tab / Cap / Syp / Inj
              </span>
            </div>
          </div>
        </div>

        {/* Section Jump Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="#Do-People-Use"
            className="px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-xs font-semibold text-teal-300 hover:border-teal-500/50 hover:bg-slate-800 transition-colors"
          >
            1. Why Do People Use Multivitamins?
          </a>
          <a
            href="#categories"
            className="px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-xs font-semibold text-amber-300 hover:border-amber-500/50 hover:bg-slate-800 transition-colors"
          >
            2. 6 Formulation Categories
          </a>
          <a
            href="#Safety"
            className="px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-xs font-semibold text-rose-300 hover:border-rose-500/50 hover:bg-slate-800 transition-colors"
          >
            3. Drug Interactions, Overuse &amp; Safety
          </a>
          <a
            href="#vitamin-groups"
            className="px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-xs font-semibold text-emerald-300 hover:border-emerald-500/50 hover:bg-slate-800 transition-colors"
          >
            4. Vitamin &amp; Nutrient Groups
          </a>
          <a
            href="#brand-reference"
            className="px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-xs font-semibold text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-800 transition-colors"
          >
            5. Brand Formulations &amp; Micronutrients
          </a>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1: WHAT IS A MULTIVITAMIN & WHY PEOPLE USE IT                     */}
        {/* ========================================================================= */}
        <div className="space-y-10 pt-6 border-t border-slate-800/80">
          {/* What is it card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-400">
                  <Pill className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    What Is a Multivitamin?
                  </h2>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A <strong>multivitamin</strong> is a dietary or therapeutic
                  supplement containing a combination of different essential
                  vitamins and—in many formulations—trace minerals designed to
                  help the body meet its daily metabolic and nutritional
                  requirements.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>In simple words:</strong> Your body needs specific
                  micronutrients every day for cellular energy production, nerve
                  signaling, immunity, red blood cell formation, and tissue
                  repair. A multivitamin delivers several of these nutrients
                  together in a single{" "}
                  <strong>
                    tablet, capsule, syrup, drop, or parenteral injection
                  </strong>{" "}
                  depending on the patient&apos;s clinical needs.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px] text-slate-400">
                <strong className="text-teal-300 block mb-0.5">
                  How Multivitamins Are Classified:
                </strong>
                Categorized primarily according to (1){" "}
                <strong>vitamin composition</strong>, (2){" "}
                <strong>mineral content</strong>, (3){" "}
                <strong>intended clinical use</strong>, and (4){" "}
                <strong>target age/physiological group</strong> (pediatric
                drops, adult daily, prenatal, geriatric).
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white">
                    Core Clinical Principle: Supplements Support, Not Replace,
                    Food
                  </h2>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Multivitamins are formulated to bridge nutritional gaps—they
                  do not replace whole-food macronutrients (protein, healthy
                  fats, complex carbohydrates, dietary fiber) or phytonutrients.
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                    <strong className="text-cyan-300">
                      Water-Soluble Vitamins (B-Complex &amp; C):
                    </strong>{" "}
                    Dissolve in water, are not stored in large reserves (except
                    Vitamin B12 in the liver), and excess amounts are filtered
                    into urine.
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                    <strong className="text-amber-300">
                      Fat-Soluble Vitamins (A, D, E, K):
                    </strong>{" "}
                    Require dietary lipids and bile salts for gut absorption and
                    accumulate in liver/adipose tissues—making chronic
                    over-supplementation toxic.
                  </div>
                </div>
              </div>

              <a
                href="#categories"
                className="w-full py-2.5 px-4 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300 hover:bg-teal-500 hover:text-slate-950 text-xs font-bold transition-colors text-center block"
              >
                Explore All 6 Multivitamin Formulation Classes &darr;
              </a>
            </div>
          </div>

          {/* 5 Reasons Why People Use Multivitamins */}
          <div
            className="space-y-4 scroll-mt-28 pt-6 border-t border-slate-800/80"
            id="Do-People-Use"
          >
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Clinical &amp; Nutritional Indications
              </span>
              <h2 className="text-xl font-bold text-white">
                Why Do People Use Multivitamins? (5 Key Groups)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
              {USE_REASONS.map((reason) => (
                <div
                  key={reason.number}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-2 leading-relaxed"
                >
                  <span className="text-lg font-extrabold font-mono text-teal-400 block">
                    {reason.number}
                  </span>
                  <h3 className="text-sm font-bold text-white">
                    {reason.title}
                  </h3>
                  <p className="text-slate-300">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Formulation Categories */}
          <div
            id="categories"
            className="space-y-4 scroll-mt-28 pt-6 border-t border-slate-800/80"
          >
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Formulation Classification
              </span>
              <h2 className="text-xl font-bold text-white">
                6 Major Multivitamin &amp; Micronutrient Categories
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {MULTIVITAMIN_CLASSES.map((cls) => (
                <div
                  key={cls.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
                          {cls.code}
                        </span>
                        <span className="text-[10px] font-mono text-teal-300 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                          Examples: {cls.brandExamples}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {cls.name}
                      </h3>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800/70 pt-3">
                      <div>
                        <strong className="text-cyan-300">Composition: </strong>
                        <span>{cls.composition}</span>
                      </div>
                      <div>
                        <strong className="text-emerald-300">Used For: </strong>
                        <span>{cls.usedFor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2 text-[11px] text-slate-300">
                    <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-300">
                        Clinical Administration Note:
                      </strong>{" "}
                      {cls.clinicalNote}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drug Interactions, Overuse & Safety */}
          <div
            id="Safety"
            className="space-y-6 scroll-mt-28 pt-6 border-t border-slate-800/80"
          >
            <div className="p-6 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-rose-300 uppercase tracking-widest block mb-1">
                    Drug Interactions, Overuse &amp; Safety
                  </span>
                  <h2 className="text-xl font-bold text-white mb-2">
                    Multivitamin Safety, Drug Interactions &amp; Overuse
                    Precautions
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    &quot;More vitamins&quot; is not always better. While
                    water-soluble B-vitamins and Vitamin C have wide safety
                    margins, fat-soluble vitamins (<strong>A, D, E, K</strong>)
                    and minerals (<strong>Iron, Zinc, Calcium</strong>) can
                    accumulate or block the absorption of prescription
                    medications.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-amber-900/50 space-y-2 leading-relaxed">
                <strong className="text-amber-300 block text-sm">
                  1. Medication Absorption Spacing (2–4 Hours)
                </strong>
                <p className="text-slate-300">
                  Minerals inside multivitamins (
                  <strong>Iron, Calcium, Magnesium, Zinc</strong>) chelate and
                  block gut absorption of{" "}
                  <strong>Levothyroxine (thyroid tablets)</strong>,{" "}
                  <strong>Fluoroquinolone/Tetracycline antibiotics</strong>, and{" "}
                  <strong>Bisphosphonates</strong>. Always separate by 2–4
                  hours.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-rose-900/50 space-y-2 leading-relaxed">
                <strong className="text-rose-300 block text-sm">
                  2. Fat-Soluble Hypervitaminosis (A &amp; D) &amp; Pediatric
                  Iron Risk
                </strong>
                <p className="text-slate-300">
                  Taking multiple overlapping supplements risks Vitamin A
                  liver/teratogenic toxicity or Vitamin D hypercalcemia.
                  Accidental ingestion of adult{" "}
                  <strong>Iron-containing multivitamins</strong> by toddlers is
                  a severe medical emergency.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-teal-900/50 space-y-2 leading-relaxed">
                <strong className="text-teal-300 block text-sm">
                  3. Lab Test Interference (High-Dose Biotin / B7)
                </strong>
                <p className="text-slate-300">
                  High-dose <strong>Biotin</strong> (often found in
                  hair/skin/nail multivitamins) can falsely distort blood test
                  results for <strong>Troponin</strong> (heart attack marker)
                  and <strong>Thyroid Function Tests (TSH, Free T3/T4)</strong>
                  —stop 48–72 hours before lab draws.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VITAMIN & NUTRIENT GROUPS REFERENCE TABLE                                 */}
        {/* ========================================================================= */}
        <section
          id="vitamin-groups"
          className="space-y-6 pt-6 border-t border-slate-800/80 scroll-mt-28"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                Complete Micronutrient Breakdown &bull; Vitamins, Minerals,
                Omega-3 &amp; Protein
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Vitamin &amp; Nutrient Groups: Supplement Type, Name &amp; Main
                Function
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Quick-reference table covering water-soluble vitamins (B1–B12,
                C), fat-soluble vitamins (A, D, E, K), trace minerals, Omega-3,
                and Protein/Albumin.
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center p-1 rounded-xl border border-slate-800 bg-slate-900/80 gap-1 self-start">
              {(
                [
                  "All",
                  "Water-Soluble",
                  "Fat-Soluble",
                  "Minerals & Trace Elements",
                  "Fatty Acids & Proteins",
                ] as NutrientCategoryFilter[]
              ).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setVitaminGroupFilter(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    vitaminGroupFilter === tab
                      ? "bg-emerald-500 text-slate-950"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
            <table className="w-full text-xs text-left text-slate-300 min-w-[720px]">
              <thead className="bg-slate-950/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                <tr>
                  <th className="p-3.5 text-teal-300">Type</th>
                  <th className="p-3.5 text-amber-300">Name</th>
                  <th className="p-3.5 text-cyan-300">Category</th>
                  <th className="p-3.5 text-white">Main Function</th>
                  <th className="p-3.5 text-slate-400">Dietary Sources</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {filteredVitaminGroups.map((vit, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-900/60 transition-colors"
                  >
                    <td className="p-3.5 font-mono font-bold text-teal-300 whitespace-nowrap">
                      {vit.type}
                    </td>
                    <td className="p-3.5 font-bold text-white">{vit.name}</td>
                    <td className="p-3.5 whitespace-nowrap">
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-bold ${
                          vit.solubility === "Water-Soluble"
                            ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                            : vit.solubility === "Fat-Soluble"
                              ? "bg-amber-500/10 border-amber-500/20 text-amber-300"
                              : vit.solubility === "Minerals & Trace Elements"
                                ? "bg-teal-500/10 border-teal-500/20 text-teal-300"
                                : "bg-indigo-500/10 border-indigo-500/20 text-indigo-300"
                        }`}
                      >
                        {vit.solubility}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-200 leading-relaxed">
                      {vit.mainFunction}
                    </td>
                    <td className="p-3.5 text-slate-400">{vit.keySources}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE BOTTOM TABS: BRAND COMBINATIONS & INDIVIDUAL MICRONUTRIENTS   */}
        {/* ========================================================================= */}
        <section
          id="brand-reference"
          className="space-y-6 pt-6 border-t border-slate-800/80 scroll-mt-28"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="inline-flex p-1.5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("brands")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "brands"
                    ? "bg-teal-500 text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Layers className="w-4 h-4 shrink-0" />
                <span>
                  Brand Formulations &amp; Combinations ({filteredBrands.length}
                  )
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("micronutrients")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "micronutrients"
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Water vs. Fat-Soluble Vitamins &amp; Minerals</span>
              </button>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search brand, vitamin, or mineral..."
                className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/60"
              />
            </div>
          </div>

          {/* TAB 1: BRAND FORMULATIONS & COMBINATIONS */}
          {activeTab === "brands" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs animate-in fade-in duration-200">
              {filteredBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between space-y-3 leading-relaxed"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-300 font-bold inline-block">
                      {brand.group}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {brand.link ? (
                        <Link
                          href={brand.link}
                          className="hover:text-teal-300 hover:underline decoration-teal-500/40 underline-offset-4 transition-colors inline-flex items-center gap-1"
                        >
                          <span>{brand.brandName}</span>
                          <span className="text-xs text-teal-400">&rarr;</span>
                        </Link>
                      ) : (
                        brand.brandName
                      )}
                    </h3>
                    <p className="text-slate-300">
                      <strong className="text-cyan-300">Composition: </strong>
                      {brand.keyIngredients}
                    </p>
                    <p className="text-slate-300">
                      <strong className="text-emerald-300">
                        Primary Use:{" "}
                      </strong>
                      {brand.primaryUse}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-amber-200">
                    <strong>Dosing Tip: </strong>
                    {brand.timingAndTip}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: WATER VS. FAT-SOLUBLE VITAMINS & MINERALS */}
          {activeTab === "micronutrients" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {(
                  [
                    "All",
                    "Water-Soluble Vitamins",
                    "Fat-Soluble Vitamins",
                    "Essential Minerals",
                  ] as VitaminSolubilityFilter[]
                ).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedSolubility(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedSolubility === cat
                        ? "bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.35)]"
                        : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                {filteredMicronutrients.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md space-y-3 leading-relaxed"
                  >
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="text-slate-300">
                      <strong className="text-teal-300">
                        Main Physiological Action:{" "}
                      </strong>
                      {item.mainAction}
                    </p>
                    <p className="text-slate-300">
                      <strong className="text-amber-300">
                        Deficiency Clues:{" "}
                      </strong>
                      {item.deficiencyClues}
                    </p>
                    <p className="text-rose-300 pt-2 border-t border-slate-800/80">
                      <strong>Overuse / Toxicity Caution: </strong>
                      {item.toxicityOrCaution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
