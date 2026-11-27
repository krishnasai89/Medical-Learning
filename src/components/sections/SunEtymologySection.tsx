"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sun, HeartPulse, BookOpenCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SunEtymologySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const sunGlowRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const ayuCardRef = useRef<HTMLDivElement>(null);
  const vedaCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet (Horizontal cards, full pinning)
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
          },
        });

        tl.to(
          sunRef.current,
          {
            y: "-45%",
            scale: 1.15,
            ease: "power2.out",
          },
          0,
        )
          .to(
            sunGlowRef.current,
            {
              opacity: 0.85,
              scale: 1.35,
              ease: "sine.inOut",
            },
            0,
          )
          .to(
            skyRef.current,
            {
              background:
                "radial-gradient(circle at 50% 65%, rgba(245, 158, 11, 0.28) 0%, rgba(180, 83, 9, 0.12) 42%, rgba(2, 6, 23, 1) 85%)",
              ease: "none",
            },
            0,
          )
          .fromTo(
            ayuCardRef.current,
            { opacity: 0, y: 40, scale: 0.94 },
            { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.8 },
            0.25,
          )
          .fromTo(
            vedaCardRef.current,
            { opacity: 0, y: 40, scale: 0.94 },
            { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.8 },
            0.55,
          );
      });

      // Mobile (Vertical screens: shorter scroll distance, adjusted offsets)
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=160%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        tl.to(
          sunRef.current,
          {
            y: "-30%",
            scale: 1.1,
            ease: "power2.out",
          },
          0,
        )
          .to(
            sunGlowRef.current,
            {
              opacity: 0.75,
              scale: 1.25,
              ease: "sine.inOut",
            },
            0,
          )
          .to(
            skyRef.current,
            {
              background:
                "radial-gradient(circle at 50% 70%, rgba(245, 158, 11, 0.22) 0%, rgba(180, 83, 9, 0.1) 45%, rgba(2, 6, 23, 1) 90%)",
              ease: "none",
            },
            0,
          )
          .fromTo(
            ayuCardRef.current,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.7 },
            0.2,
          )
          .fromTo(
            vedaCardRef.current,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.7 },
            0.5,
          );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex flex-col justify-between py-10 sm:py-16 px-4 sm:px-6"
    >
      {/* Dynamic Dawn Atmosphere */}
      <div
        ref={skyRef}
        className="absolute inset-0 transition-colors pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 100%, rgba(245, 158, 11, 0.05) 0%, rgba(2, 6, 23, 1) 75%)",
        }}
      />

      {/* Surya / Rising Sun Element */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-0">
        <div
          ref={sunRef}
          className="relative translate-y-[60%] sm:translate-y-[65%] w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-t from-amber-600 via-amber-400 to-yellow-200 shadow-[0_0_80px_rgba(245,158,11,0.45)] sm:shadow-[0_0_120px_rgba(245,158,11,0.6)] flex items-center justify-center will-change-transform"
        >
          <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-t from-yellow-300 to-white/90 blur-md opacity-80" />
        </div>

        <div
          ref={sunGlowRef}
          className="absolute translate-y-[60%] sm:translate-y-[65%] w-[380px] h-[380px] sm:w-[580px] sm:h-[580px] lg:w-[800px] lg:h-[800px] rounded-full bg-amber-500/20 blur-3xl opacity-20 pointer-events-none will-change-transform"
        />
      </div>

      {/* Header Context */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mt-2 sm:mt-4">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[11px] sm:text-xs tracking-wider uppercase font-semibold mb-3 sm:mb-4">
          <Sun className="w-3.5 h-3.5 animate-spin-slow shrink-0" />
          <span>Surya Namaskar &times; Chronobiology</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 sm:mb-3">
          The Origin of Healing
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed px-2">
          For millennia, morning reverence to the sun honored the source of
          circadian balance, cellular vitality, and metabolic longevity.
        </p>
      </div>

      {/* Dual Cards: Ayu & Veda */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 w-full max-w-4xl mx-auto my-auto pt-6 sm:pt-0">
        {/* Ayu Card */}
        <div
          ref={ayuCardRef}
          className="p-5 sm:p-7 rounded-2xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-xl shadow-xl relative overflow-hidden will-change-transform"
        >
          <div className="absolute top-0 right-1 sm:right-2 p-3 sm:p-5 opacity-10 font-serif text-6xl sm:text-7xl lg:text-8xl text-amber-200 select-none pointer-events-none">
            आयु
          </div>
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3 sm:mb-4 text-amber-400">
            <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-400/90 font-semibold block">
            Root Meaning
          </span>
          <h3 className="text-lg sm:text-2xl font-bold text-white mt-0.5 mb-1 sm:mb-2">
            Ayu (आयु)
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
            Signifies <strong className="text-amber-200">Life</strong>,
            continuous biological vitality, or{" "}
            <strong className="text-amber-200">Longevity</strong>. The span of
            awareness embodied in the physical vessel.
          </p>
          <div className="inline-block text-[10px] sm:text-xs px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300">
            Clinical analogue: Cellular longevity & metabolic lifespan
          </div>
        </div>

        {/* Veda Card */}
        <div
          ref={vedaCardRef}
          className="p-5 sm:p-7 rounded-2xl border border-teal-500/20 bg-slate-900/60 backdrop-blur-xl shadow-xl relative overflow-hidden will-change-transform"
        >
          <div className="absolute top-0 right-1 sm:right-2 p-3 sm:p-5 opacity-10 font-serif text-6xl sm:text-7xl lg:text-8xl text-teal-200 select-none pointer-events-none">
            वेद
          </div>
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-3 sm:mb-4 text-teal-400">
            <BookOpenCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-teal-400/90 font-semibold block">
            Root Meaning
          </span>
          <h3 className="text-lg sm:text-2xl font-bold text-white mt-0.5 mb-1 sm:mb-2">
            Veda (वेद)
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
            Signifies <strong className="text-teal-200">Science</strong>,
            codified knowledge, or{" "}
            <strong className="text-teal-200">Sacred Lore</strong>. The
            empirical study of nature and universal laws.
          </p>
          <div className="inline-block text-[10px] sm:text-xs px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300">
            Clinical analogue: Evidence-based protocol & clinical intelligence
          </div>
        </div>
      </div>

      {/* Bottom spacer for clean pinning offset */}
      <div className="h-2 sm:h-4 w-full" />
    </section>
  );
}
