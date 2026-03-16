"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowUpRight, 
 
  ShieldCheck,
  Zap, 
  Cpu,
  Terminal, 
  ChevronRight,
  Activity,
  Layers,
  Search,
  Lock,
  Workflow
} from "lucide-react";

// ─── DATA ──────────────────────────────────────────────────────────

const capabilities = [
  {
    category: "Product Engineering",
    icon: Cpu,
    description: "Building resilient, high-scale technical foundations for global markets.",
    items: [
      { title: "FinTech Development", details: "Ledger systems, payment rails, and high-compliance architecture." },
      { title: "Modern Backends", details: "Distributed systems built for sub-second latency and infinite scale." },
      { title: "Systems Integration", details: "Connecting fragmented legacy stacks into unified, high-performance flows." }
    ]
  },
  {
    category: "Technology Leadership",
    icon: Activity,
    description: "Strategic engineering partnership for high-growth executive teams.",
    items: [
      { title: "Fractional CTO", details: "Executive-level technical strategy without the full-time overhead." },
      { title: "E2E Partnership", details: "Taking products from napkin sketches to series-A ready infrastructure." },
      { title: "Architecture Strategy", details: "Designing systems that won't require a total rewrite in 12 months." }
    ]
  },
  {
    category: "Trust & Infrastructure",
    icon: ShieldCheck,
    description: "Hardening your stack against the modern, evolving threat landscape.",
    items: [
      { title: "Cybersecurity Audits", details: "Deep-packet inspection and penetration testing for critical systems." },
      { title: "Cloud Modernization", details: "Migrating legacy technical debt to secure, automated cloud native envs." },
      { title: "Software Quality Audit", details: "Root-cause analysis for failing performance and architectural rot." }
    ]
  }
];

const principles = [
  { title: "Scalability First", desc: "We build for the load you expect, and the spikes you don't.", icon: Layers },
  { title: "Secure by Design", desc: "Security isn't a feature; it's the foundation of every line written.", icon: Lock },
  { title: "Clarity over Complexity", desc: "Simple code is maintainable code. We eliminate technical debt at the root.", icon: Search },
  { title: "Performance as a Feature", desc: "Speed is a competitive advantage. We optimize for every millisecond.", icon: Zap }
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────

const SectionLabel = ({ text }: { text: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-10"
  >
    <div className="w-3 h-[2px] bg-blue-600" />
    <span className="text-[12px] font-mono uppercase tracking-[0.4em] text-slate-500 font-bold">{text}</span>
  </motion.div>
);

const HeroBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Base Grid */}
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
    
    {/* Animated Connection Lines */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.15]">
      <motion.path
        d="M -100 200 L 400 600 L 1200 100"
        stroke="#2563EB"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M 1400 800 L 800 200 L 0 500"
        stroke="#2563EB"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "linear" }}
      />
    </svg>

    {/* Orbital Rings / Node visual */}
    <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[600px] h-[600px] hidden lg:block">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border border-blue-600/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
          style={{ padding: `${i * 60}px` }}
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
        </motion.div>
      ))}
    </div>
  </div>
);

export default function HomePage() {
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="bg-white selection:bg-blue-600 selection:text-white antialiased">
      
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b border-slate-100">
        <HeroBackground />
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 px-4 py-2 mb-12 border border-slate-200 bg-white/90 backdrop-blur-md shadow-sm"
            >
              <Activity size={14} className="text-blue-600 animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-slate-700">System Status: Operational / Node_Elite_V3</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl lg:text-[11rem] font-medium tracking-tight leading-[0.82] mb-12 text-slate-900"
            >
              Engineering <br />
              <span className="text-blue-600 font-light italic">Complex</span> Systems.
            </motion.h1>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="max-w-2xl text-xl md:text-2xl text-slate-500 leading-relaxed font-normal"
              >
                DeusX builds and scales high-integrity software for teams who require technical authority over generic marketing solutions.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-5"
              >
                <button className="bg-slate-900 text-white px-10 py-5 text-base font-bold hover:bg-blue-600 transition-all active:scale-95 flex items-center gap-4 shadow-xl shadow-slate-200 hover:shadow-blue-200">
                  Start a Conversation
                  <ArrowUpRight size={18} />
                </button>
                <button className="border-2 border-slate-200 px-10 py-5 text-base font-bold hover:bg-slate-50 transition-all text-slate-700">
                  Capabilities
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div style={{ opacity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400">Scroll to Explore</span>
          <div className="w-px h-12 bg-slate-200 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute top-0 left-0 w-full h-1/2 bg-blue-600" 
            />
          </div>
        </motion.div>
      </section>

      {/* ── NEW: TECHNICAL PRINCIPLES ── */}
      <section className="py-32 border-b border-slate-100">
        <div className="container px-6 mx-auto">
          <SectionLabel text="The Standard" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {principles.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-14 h-14 bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <p.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-medium mb-4 text-slate-900">{p.title}</h4>
                <p className="text-slate-500 leading-relaxed text-base">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


     

    

      {/* ── CTA SECTION ── */}
     

    </main>
  );
}