"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import {
  Activity,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Search,
  Pill,
  BookmarkCheck,
  Package,
} from "lucide-react";

type SubItem =
  | { type?: "link"; label: string; href: string }
  | { type: "header"; label: string; href?: never }
  | { type: "divider"; label?: never; href?: never };

type NavLinkItem = {
  label: string;
  href?: string;
  items?: SubItem[];
  menuType?: "mega" | "compact";
};

const NAV_LINKS: NavLinkItem[] = [
  {
    label: "Disease",
    menuType: "mega",
    items: [
      { label: "Fever (Jwara)", href: "/conditions/fever" },
      { label: "Common Cold and Allergic Rhinitis", href: "/conditions/cold" },
      { label: "Cough & Bronchitis (Kasa)", href: "/conditions/cough" },
      { label: "Multivitamin", href: "/conditions/multivitamin" },
      {
        label: "Dizziness (తల తిరగడం) & Balance Disorders (Bhrama)",
        href: "/conditions/dizziness",
      },
      {
        label: "Migraine & Headaches (Shiroroga)",
        href: "/conditions/migraine",
      },
      {
        label: "Joint Pain & Arthritis (Sandhigata)",
        href: "/conditions/arthritis",
      },
      {
        label: "Digestive Impairment (Agni)",
        href: "/conditions/digestive-impairment",
      },
      {
        label: "Acid Peptic Disorder (Amlapitta)",
        href: "/conditions/acid-peptic",
      },
      { label: "Insomnia & Sleep (Anidra)", href: "/conditions/insomnia" },
      {
        label: "Hypertension & Hypotension (BP)",
        href: "/conditions/hypertension",
      },
      { label: "Chronic Fatigue (Klama)", href: "/conditions/chronic-fatigue" },
      { label: "Skin Disorders (Kushta)", href: "/conditions/skin-disorders" },
      {
        label: "Metabolic Syndrome (Prameha)",
        href: "/conditions/metabolic-syndrome",
      },
      { label: "TB", href: "/conditions/tb" },
      { label: "Thyroid Imbalance", href: "/conditions/thyroid" },
      { label: "Anxiety & Stress (Manovaha)", href: "/conditions/anxiety" },
      { label: "Liver Care (Yakrit)", href: "/conditions/liver-care" },
      { label: "Immunity Protocols (Ojas)", href: "/conditions/ojas-immunity" },
      {
        label: "Detox Protocols (Panchakarma)",
        href: "/conditions/panchakarma",
      },
      { label: "Hair & Scalp Health", href: "/conditions/hair-scalp" },
      { label: "Respiratory Asthma (Shwasa)", href: "/conditions/asthma" },
      { label: "Weight Management (Sthaulya)", href: "/conditions/weight" },
      {
        label: "Circadian Rhythm Disorders",
        href: "/conditions/circadian-disorders",
      },
    ],
  },
  {
    label: "ShortCuts",
    menuType: "compact",
    items: [
      { label: "Dosage Forms & Units", href: "/shortcuts/dosage-units" },
      { label: "Frequency & Timing", href: "/shortcuts/frequency-timing" },
      {
        label: "Injection Angles & Routes",
        href: "/shortcuts/Route-administration",
      },
      { label: "Tablet Forms & Release", href: "/shortcuts/tablet-form" },
    ],
  },
  {
    label: "Items",
    menuType: "compact",
    items: [
      { label: "Cannula Types & Gauges", href: "/Items/Cannula" },
      { label: "IV Set", href: "/Items/ivset" },
      { label: "Syringe", href: "/Items/syringe" },
      { label: "Needle", href: "/Items/needle" },
      { label: "Oxygen Flow", href: "/Items/oxygen-flow" },
      { label: "Catheters", href: "/Items/catheters" },
      { label: "Ryles Tube", href: "/Items/ryles-tube" },
    ],
  },
  {
    label: "Medical",
    menuType: "mega",
    items: [
      { type: "header", label: "Fever & Antipyretics" },
      { label: "Paracetamol", href: "/conditions/fever/paracetamol" },
      { label: "Ibuprofen", href: "/conditions/fever/ibuprofen" },
      { label: "Aspirin", href: "/conditions/fever/aspirin" },
      { label: "Lignocaine", href: "/conditions/fever/lignocaine" },
      { type: "divider" },
      { type: "header", label: "Common Cold & Allergy" },
      {
        label: "Vicks VapoRub / Vicks-Babyrub",
        href: "/conditions/cold/vicks",
      },
      {
        label: "Zandu Balm / Tiger Balm (Classic / Ultra Power)",
        href: "/conditions/cold/zandu-balm",
      },
      { label: "Vicks Inhaler", href: "/conditions/cold/vicks-inhaler" },
      { label: "Chlorpheniramine", href: "/conditions/cold/chlorpheniramine" },
      { label: "Diphenhydramine", href: "/conditions/cold/diphenhydramine" },
      { label: "promethazine", href: "/conditions/cold/promethazine" },
      {
        label: "Pheniramine Maleate (AVIL)",
        href: "/conditions/cold/pheniramine",
      },
      { label: "Cyproheptadine", href: "/conditions/cold/cyproheptadine" },
      { label: "Hydroxyzine (Atarax)", href: "/conditions/cold/hydroxyzine" },
      { label: "Cetirizine", href: "/conditions/cold/cetirizine" },
      { label: "LevoCetirizine", href: "/conditions/cold/levocetirizine" },
      { label: "Fexofenadine", href: "/conditions/cold/fexofenadine" },
      { label: "Loratadine", href: "/conditions/cold/loratadine" },
      { label: "Desloratadine", href: "/conditions/cold/desloratadine" },
      { label: "Bilastine", href: "/conditions/cold/bilastine" },
      { label: "Rupatadine", href: "/conditions/cold/rupatadine" },
      { label: "Ebastine", href: "/conditions/cold/ebastine" },
      { label: "Montelukast", href: "/conditions/cold/montelukast" },
      { label: "Phenylephrine", href: "/conditions/cold/phenylephrine" },
      { label: "Pseudoephedrine", href: "/conditions/cold/pseudoephedrine" },
      { label: "oxymetazoline", href: "/conditions/cold/oxymetazoline" },
      { label: "Xylometazoline", href: "/conditions/cold/xylometazoline" },
      { label: "Naphazoline", href: "/conditions/cold/naphazoline" },
      {
        label: "fluticasone-furoate",
        href: "/conditions/cold/fluticasone-furoate",
      },
      { label: "Azelastine", href: "/conditions/cold/azelastine" },
      {
        label: "Sodium Chloride Spray",
        href: "/conditions/cold/sodium-chloride-spray",
      },
      { label: "Allerbio", href: "/conditions/cold/allerbio" },
      { type: "divider" },
      { type: "header", label: "Cough & Bronchitis (Antitussives)" },
      { label: "Cough & Bronchitis Protocol", href: "/conditions/cough" },
      { label: "Dextromethorphan", href: "/medical/dextromethorphan" },
      { label: "Codeine Phosphate", href: "/medical/codeine" },
      { label: "Hydrocodone", href: "/medical/hydrocodone" },
      { label: "Dihydrocodeine", href: "/medical/dihydrocodeine" },
      { label: "Ethylmorphine", href: "/medical/ethylmorphine" },
      { label: "Pholcodine", href: "/medical/pholcodine" },
      { label: "Noscapine", href: "/medical/noscapine" },
      { label: "Butamirate Citrate", href: "/medical/butamirate" },
      {
        label: "Pentoxyverine (Carbetapentane)",
        href: "/medical/pentoxyverine",
      },
      { label: "Cloperastine", href: "/medical/cloperastine" },
      { label: "Levodropropizine", href: "/medical/levodropropizine" },
      { label: "Benzonatate (Tessalon)", href: "/medical/benzonatate" },
      { label: "Moguisteine", href: "/medical/moguisteine" },
      { label: "Prenoxdiazine", href: "/medical/prenoxdiazine" },
      { label: "Oxolamine", href: "/medical/oxolamine" },
      { label: "Oxeladin", href: "/medical/oxeladin" },
      { label: "Pipazetate", href: "/medical/pipazetate" },
      { label: "Menthol (TRPM8 Soother)", href: "/medical/menthol" },

      { type: "divider" },
      { type: "header", label: "Demulcents, Lozenges & Herbal (Cofaid)" },
      {
        label: "Demulcents & Throat Soothers Hub",
        href: "/medical/demulcents",
      },
      {
        label: "Cofaid Syrup (Herbal Sugar-Free)",
        href: "/medical/cofaid-syrup",
      },
      { label: "Glycerin (Glycerol) & Honey", href: "/medical/glycerin-honey" },
      {
        label: "Benzocaine & Lidocaine Lozenges",
        href: "/medical/anesthetic-lozenges",
      },
      {
        label: "Amylmetacresol + Dichlorobenzyl Alcohol",
        href: "/medical/antiseptic-lozenges",
      },

      { type: "divider" },
      { type: "header", label: "Expectorants & Mucolytics (Wet Cough)" },
      {
        label: "Guaifenesin (Glyceryl Guaiacolate)",
        href: "/medical/guaifenesin",
      },
      {
        label: "Ammonium Chloride & Citrates",
        href: "/medical/ammonium-chloride-citrates",
      },
      { label: "Potassium Iodide (SSKI)", href: "/medical/potassium-iodide" },
      {
        label: "Terpin Hydrate, Ipecac & Squill",
        href: "/medical/terpin-ipecac-squill",
      },
      { label: "N-Acetylcysteine (NAC)", href: "/medical/acetylcysteine" },
      { label: "Bromhexine HCl", href: "/medical/bromhexine" },
      { label: "Ambroxol HCl", href: "/medical/ambroxol" },
      { label: "Carbocisteine", href: "/medical/carbocisteine" },
      { label: "Erdosteine", href: "/medical/erdosteine" },
      { label: "Mesna (Mecysteine)", href: "/medical/mesna" },
      { label: "Dornase Alfa (Pulmozyme)", href: "/medical/dornase-alfa" },
      {
        label: "Hypertonic Saline (3%–7%) & Mannitol",
        href: "/medical/hypertonic-saline-mucolytics",
      },
      {
        label: "Herbal Expectorants (Vasaka, Ivy Leaf, Thyme)",
        href: "/medical/herbal-expectorants",
      },
    ],
  },
  { label: "Circadian Science", href: "#circadian" },
  { label: "Protocols", href: "#protocols" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<
    string | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeCategory = useMemo(() => {
    return NAV_LINKS.find((l) => l.label === activeDropdown);
  }, [activeDropdown]);

  const filteredItems = useMemo(() => {
    if (!activeCategory?.items) return [];
    const query = searchQuery.trim().toLowerCase();
    if (!query) return activeCategory.items;

    // When searching, filter links only
    return activeCategory.items.filter((item) => {
      if (item.type === "divider") return false;
      return item.label?.toLowerCase().includes(query);
    });
  }, [activeCategory, searchQuery]);

  const getMenuIcon = (label: string) => {
    switch (label) {
      case "Medical":
        return <Pill className="w-4 h-4 text-teal-400" />;
      case "ShortCuts":
        return <BookmarkCheck className="w-4 h-4 text-amber-400" />;
      case "Items":
        return <Package className="w-4 h-4 text-emerald-400" />;
      default:
        return <Activity className="w-4 h-4 text-teal-400" />;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500/20 via-teal-500/20 to-teal-400/30 border border-teal-500/30 flex items-center justify-center group-hover:border-teal-400/60 transition-colors">
            <Activity className="w-5 h-5 text-teal-400 group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight flex items-center gap-1.5">
              Fifth Veda
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 hidden sm:inline-block">
                MED
              </span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider font-medium uppercase hidden sm:block">
              Precision Longevity
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          ref={navRef}
          className="hidden md:flex items-center gap-1 p-1.5 rounded-full border border-slate-800/80 bg-slate-900/50 backdrop-blur-md relative"
        >
          {NAV_LINKS.map((link) => {
            const hasChildren = Boolean(link.items && link.items.length > 0);
            const isOpen = activeDropdown === link.label;
            const isMega = link.menuType === "mega";

            if (hasChildren) {
              return (
                <div key={link.label} className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveDropdown(isOpen ? null : link.label);
                      setSearchQuery("");
                    }}
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${
                      isOpen
                        ? "bg-slate-800 text-teal-300"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/70"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-teal-400" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Container */}
                  {isOpen && (
                    <div
                      className={`absolute top-full mt-3 rounded-2xl border border-slate-800 bg-slate-950/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/80 z-50 animate-in fade-in zoom-in-95 duration-150 ${
                        isMega
                          ? "left-1/2 -translate-x-1/2 w-[min(90vw,900px)]"
                          : "left-0 w-80"
                      }`}
                    >
                      {/* Menu Header */}
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800/80">
                        <div className="flex items-center gap-2">
                          {getMenuIcon(link.label)}
                          <span className="text-xs font-semibold text-slate-200">
                            {link.label} Index
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">
                          {
                            filteredItems.filter(
                              (i) => !i.type || i.type === "link",
                            ).length
                          }{" "}
                          items
                        </span>
                      </div>

                      {/* Search Bar for Mega Menus */}
                      {isMega && (
                        <div className="relative mb-3">
                          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={`Filter ${link.label.toLowerCase()}...`}
                            className="w-full bg-slate-900/80 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500/50"
                          />
                        </div>
                      )}

                      {/* Item Grid */}
                      <div
                        className={`grid gap-1.5 max-h-72 overflow-y-auto pr-1 ${
                          isMega ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                        }`}
                      >
                        {filteredItems.length > 0 ? (
                          filteredItems.map((item, idx) => {
                            // Section Header
                            if (item.type === "header") {
                              return (
                                <div
                                  key={`header-${idx}`}
                                  className="col-span-full pt-2 pb-1 px-2 text-[10px] font-mono font-semibold text-teal-400 uppercase tracking-wider border-b border-slate-800/60"
                                >
                                  {item.label}
                                </div>
                              );
                            }

                            // Visual Divider
                            if (item.type === "divider") {
                              return (
                                <div
                                  key={`divider-${idx}`}
                                  className="col-span-full my-1 border-t border-slate-850"
                                />
                              );
                            }

                            // Interactive Link
                            return (
                              <Link
                                key={`${item.label}-${idx}`}
                                href={item.href || "#"}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-900/90 transition-colors border border-transparent hover:border-slate-800"
                              >
                                <span className="truncate">{item.label}</span>
                                <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                              </Link>
                            );
                          })
                        ) : (
                          <div className="col-span-full py-4 text-center text-xs text-slate-500">
                            No matching items found.
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href!}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full transition-colors hover:bg-slate-800/70"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors"
          >
            Portal Login
          </Link>
          <Link
            href="/access"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 text-slate-950 text-xs font-bold hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Request Access</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/access"
            className="px-3 py-1.5 rounded-full bg-teal-500 text-slate-950 text-xs font-bold"
          >
            Access
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Accordion Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800/90 bg-slate-950/95 backdrop-blur-2xl px-6 py-6 transition-all max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              if (link.items) {
                const isExpanded = mobileExpandedSection === link.label;

                return (
                  <div
                    key={link.label}
                    className="border-b border-slate-900 pb-2"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpandedSection(isExpanded ? null : link.label)
                      }
                      className="w-full flex items-center justify-between py-2 text-sm font-medium text-slate-300 hover:text-teal-300"
                    >
                      <div className="flex items-center gap-2">
                        {getMenuIcon(link.label)}
                        <span>{link.label}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform ${
                          isExpanded ? "rotate-180 text-teal-400" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="mt-2 pl-3 border-l-2 border-teal-500/30 flex flex-col gap-1 max-h-60 overflow-y-auto">
                        {link.items.map((sub, i) => {
                          if (sub.type === "header") {
                            return (
                              <span
                                key={`m-header-${i}`}
                                className="pt-2 pb-0.5 text-[10px] font-mono font-bold text-fuchsia-500 uppercase tracking-wider"
                              >
                                {sub.label}
                              </span>
                            );
                          }

                          if (sub.type === "divider") {
                            return (
                              <hr
                                key={`m-divider-${i}`}
                                className="border-slate-850 my-1"
                              />
                            );
                          }

                          return (
                            <Link
                              key={`${sub.label}-${i}`}
                              href={sub.href || "#"}
                              onClick={() => setMobileMenuOpen(false)}
                              className="py-1 text-xs text-slate-400 hover:text-teal-300 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href!}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 text-sm font-medium text-slate-300 hover:text-teal-300 border-b border-slate-900"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl border border-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-900"
            >
              Patient &amp; Physician Portal
            </Link>
            <Link
              href="/access"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-colors"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
