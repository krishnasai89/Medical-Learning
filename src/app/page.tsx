"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { Activity, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import SunEtymologySection from "@/components/sections/SunEtymologySection";

// Dynamically import Three.js canvas to prevent SSR hydration mismatches
const HeroVisual = dynamic(() => import("@/components/canvas/HeroVisual"), {
  ssr: false,
});

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".reveal-text", {
        opacity: 0,
        y: 24,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".bento-card", {
        opacity: 0,
        scale: 0.96,
        y: 20,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.4,
      });
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-teal-500 selection:text-white"
    >
      {/* Background Gradient Blurs */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mt-10 mx-auto px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="reveal-text inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Traditional Science &times;
            Modern AI
          </div>
          <h1 className="reveal-text text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Where Ancient Wisdom Meets Precision Healthcare.
          </h1>
          <p className="reveal-text text-slate-400 text-lg leading-relaxed mb-8">
            Fifth Veda bridges holistic therapeutic protocols with clinical
            diagnostics, data-backed molecular insights, and continuous patient
            care telemetry.
          </p>
          <div className="reveal-text flex items-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold transition">
              Explore Platform
            </button>
            <button className="px-6 py-3 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 text-slate-200 transition">
              Clinical Validation
            </button>
          </div>
        </div>

        {/* 3D Visual */}
        <div className="relative">
          <HeroVisual />
        </div>
      </section>
      <SunEtymologySection />

      {/* Bento Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-8 text-slate-200">
          System Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bento-card md:col-span-2 p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md">
            <Stethoscope className="w-8 h-8 text-teal-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Automated Clinical Telemetry
            </h3>
            <p className="text-slate-400 text-sm">
              Continuous multi-variable biometric assessment harmonized with
              chronobiological routines.
            </p>
          </div>
          <div className="bento-card p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">HIPAA & GDPR Ready</h3>
            <p className="text-slate-400 text-sm">
              Enterprise-grade encryption with tokenized patient data
              protection.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
