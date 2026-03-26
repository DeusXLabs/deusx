"use client";

import React, {useEffect, useState, useRef} from "react";
import {motion, useScroll, useTransform, useInView} from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Cpu,
  Terminal,
  ChevronRight,
  Activity,
  Database,
  Code2,
  Lock,
  Boxes,
  Server,
} from "lucide-react";

// ─── VISUAL COMPONENTS ──────────────────────────────────────────────────────

const SystemMapHero = () => (
  <div className="relative w-full h-full min-h-[500px] flex items-center justify-center pointer-events-none select-none">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-90"
    >
      {/* Structural Rings */}
      <circle cx="300" cy="300" r="120" stroke="#E2E8F0" strokeWidth="2.5" />
      <circle cx="300" cy="300" r="220" stroke="#F1F5F9" strokeWidth="3.5" />
      <circle cx="300" cy="300" r="320" stroke="#E2E8F0" strokeWidth="4.5" />

      {/* Animated Path 01 */}
      <motion.circle
        cx="300"
        cy="300"
        r="120"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="20 180"
        animate={{rotate: 360}}
        transition={{duration: 15, repeat: Infinity, ease: "linear"}}
      />

      <motion.circle
        cx="300"
        cy="300"
        r="220"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="20 340"
        animate={{rotate: 360}}
        transition={{duration: 40, repeat: Infinity, ease: "linear"}}
      />

      <motion.circle
        cx="300"
        cy="300"
        r="320"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="20 340"
        animate={{rotate: 360}}
        transition={{duration: 40, repeat: Infinity, ease: "linear"}}
      />

      {/* Pulsing Nodes */}
      {[
        {x: 300, y: 180, delay: 0},
        {x: 404, y: 360, delay: 0.5},
        {x: 196, y: 360, delay: 1},
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r="3" fill="#2563EB" />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="8"
            stroke="#2563EB"
            strokeWidth="0.5"
            animate={{scale: [1, 2, 1], opacity: [0.5, 0, 0.5]}}
            transition={{duration: 3, repeat: Infinity, delay: node.delay}}
          />
        </g>
      ))}

      {/* Connection Lines */}
      <motion.path
        d="M300 180 L404 360 L196 360 Z"
        stroke="#CBD5E1"
        strokeWidth="0.5"
        animate={{opacity: [0.2, 0.5, 0.2]}}
        transition={{duration: 5, repeat: Infinity}}
      />
    </svg>

    {/* Data Floating Text */}
    <div className="absolute inset-0 font-mono text-[9px] text-slate-400">
      <motion.div
        animate={{y: [0, -40], opacity: [0, 1, 0]}}
        transition={{duration: 5, repeat: Infinity}}
        className="absolute top-[40%] left-[20%] text-blue-600 font-bold"
      >
        {/* SYST_READY_V2 */}
      </motion.div>
      <motion.div
        animate={{y: [0, -30], opacity: [0, 1, 0]}}
        transition={{duration: 7, repeat: Infinity, delay: 1}}
        className="absolute top-[60%] right-[15%]"
      >
        LOAD_BAL: ACTIVE
      </motion.div>
    </div>
  </div>
);

// ─── DATA ────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    category: "Product Engineering",
    icon: Cpu,
    description:
      "Building resilient, high-scale technical foundations for serious platforms.",
    tag: "UNIT_01",
    items: [
      {
        title: "FinTech Development",
        details:
          "Ledger systems, payment rails, and high-compliance architecture.",
      },
      {
        title: "Modern Backends",
        details:
          "Distributed systems built for sub-second latency and infinite scale.",
      },
      {
        title: "Systems Integration",
        details:
          "Connecting fragmented legacy stacks into unified, high-performance flows.",
      },
    ],
  },
  {
    category: "Technology Leadership",
    icon: Activity,
    description:
      "Bridging the gap between business objectives and engineering reality.",
    tag: "UNIT_02",
    items: [
      {
        title: "Fractional CTO",
        details:
          "Executive-level technical strategy without the full-time overhead.",
      },
      {
        title: "E2E Partnership",
        details:
          "Taking products from napkin sketches to series-A ready infrastructure.",
      },
      {
        title: "Architecture Strategy",
        details:
          "Designing systems that won't require a total rewrite in 12 months.",
      },
    ],
  },
  {
    category: "Trust & Infrastructure",
    icon: ShieldCheck,
    description:
      "Hardening your infrastructure against the modern threat landscape.",
    tag: "UNIT_03",
    items: [
      {
        title: "Cybersecurity Audits",
        details:
          "Deep-packet inspection and penetration testing for critical systems.",
      },
      {
        title: "Cloud Modernization",
        details:
          "Migrating legacy technical debt to secure, automated cloud native envs.",
      },
      {
        title: "Software Quality Audit",
        details:
          "Root-cause analysis for failing performance and architectural rot.",
      },
    ],
  },
];

const principles = [
  {
    title: "Scalability First",
    desc: "We build with growth in mind so your software keeps up as your business expands.",
    icon: Zap,
  },
  {
    title: "Securely designed",
    desc: "Security is built in from the start so your business and your users are always protected.",
    icon: Lock,
  },
  {
    title: "Architecture & Structure",
    desc: "We build software that’s easy to manage, improve and rely on for years to come.",
    icon: Boxes,
  },
  {
    title: "Clarity over Complexity",
    desc: "We keep things clear and simple, so your software is easier to use, maintain and grow",
    icon: Terminal,
  },
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const SectionLabel = ({text}: {text: string}) => (
  <div className="flex items-center gap-3 mb-10">
    <div className="w-4 h-[1px] bg-blue-600" />
    <span className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-slate-500">
      {text}
    </span>
  </div>
);

export default function HomePage() {
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(
    null,
  );
  const {scrollYProgress} = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const solveSectionRef = useRef<HTMLDivElement | null>(null);
  const solveInView = useInView(solveSectionRef, {
    once: false,
    amount: 0.45,
  });

  const [solveReplayKey, setSolveReplayKey] = useState(0);

  useEffect(() => {
  if (!solveInView) return;

  setSolveReplayKey((prev) => prev + 1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [solveInView]);

  return (
    <main className="bg-white selection:bg-blue-600 selection:text-white antialiased">
      {/* ══════════════════════════════════════════════════════════════════════
          HERO: THE ARCHITECTURAL OPENING
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Dynamic Grid Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />

        <div className="container relative z-10 px-6 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              className="inline-flex items-center gap-4 px-4 py-2 mb-10 border border-slate-200 bg-white/80 backdrop-blur-sm"
            >
              <Activity size={14} className="text-blue-600" />
              <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-slate-500">
                Operational Status: Engineering Elite
              </span>
            </motion.div>

            <motion.h1
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              className="text-7xl md:text-8xl lg:text-[115px] font-medium tracking-tighter leading-[0.85] mb-12 text-slate-900"
              style={{fontFamily: "var(--font-dm-serif), serif"}}
            >
              Building <br />
              <span className="text-blue-600 italic font-light">
                Softwares
              </span>{" "}
              that Scale
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.1}}
              className="max-w-2xl text-xl md:text-2xl text-slate-500 leading-relaxed mb-12"
            >
              At DeusX, we design, build and scale software that helps
              businesses grow, run better and keep moving forward.
            </motion.p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-slate-900 text-white px-10 py-5 text-base font-bold hover:bg-blue-600 transition-all flex items-center gap-3 active:scale-95 shadow-xl shadow-slate-200">
                Contact Us
                <ArrowUpRight size={18} />
              </button>
              <button className="border border-slate-200 px-10 py-5 text-base font-bold hover:bg-slate-50 transition-colors">
                View our work
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block h-full relative">
            <div className="lg:col-span-5 hidden lg:block relative h-full min-h-[680px]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-[-22%] top-[50%] h-[760px] w-[760px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,96,193,0.30)_0%,rgba(56,96,193,0.18)_28%,rgba(56,96,193,0.10)_48%,rgba(56,96,193,0.04)_64%,transparent_76%)] blur-3xl" />

                <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_38%,rgba(56,96,193,0.10)_58%,rgba(96,165,250,0.12)_68%,transparent_84%)]" />

                <div className="absolute right-[2%] top-[10%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.16)_0%,rgba(96,165,250,0.07)_40%,transparent_74%)] blur-2xl" />

                <div className="absolute inset-y-0 left-[-6%] w-[42%] bg-gradient-to-r from-white via-white/65 to-transparent" />

                <div className="absolute bottom-[-10%] right-[-6%] h-[240px] w-[520px] bg-[radial-gradient(circle,rgba(56,96,193,0.12)_0%,transparent_72%)] blur-2xl" />
              </div>

              <div className="absolute inset-y-0 right-[-12%] w-[108%] flex items-center justify-center">
                <div className="relative h-[700px] md:h-[750px] w-full">
                  <SystemMapHero />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Footer: Credibility Strip */}
        <div className="absolute bottom-0 w-full border-t border-slate-100 py-10 bg-white/50 backdrop-blur-sm hidden lg:block">
          <div className="container mx-auto px-6 grid grid-cols-4 gap-8">
            {[
              {label: "01", val: "High-Scale Infrastructure"},
              {label: "02", val: "Strategic Tech Leadership"},
              {label: "03", val: "Security & Trust Compliance"},
              {label: "04", val: "End-to-End Modernization"},
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 border-l border-slate-200 pl-6"
              >
                <span className="text-[10px] font-mono text-blue-600 font-bold">
                  {item.label}
                </span>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          NEW: WHAT WE SOLVE (CONTEXT & AUTHORITY)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionLabel text="The Standard" />
              <h2 className="text-5xl md:text-6xl font-medium tracking-tighter leading-tight mb-8">
                If your business{" "}
                <span className="text-blue-600 italic">matters</span>, <br />
                it deserves to <br />
                be done properly.
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-xl text-slate-500 leading-relaxed mb-20">
                We don’t believe in shortcuts or one-size-fits-all solutions. We
                work closely with businesses,start-ups,companies to build
                software that’s reliable and scalable. Whether you’re fixing
                what’s not working or building something new, DeusX is here to
                build.
              </p>
              <div className="flex gap-12 font-mono text-[11px] font-bold text-slate-400">
                <span className="flex items-center gap-2">
                  {" "}
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />{" "}
                  SYSTEM_RESCUE
                </span>
                <span className="flex items-center gap-2">
                  {" "}
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />{" "}
                  SCALE_READY
                </span>
                <span className="flex items-center gap-2">
                  {" "}
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />{" "}
                  SECURITY_HARDENED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CAPABILITIES: THE THREE PILLARS (PRESERVED)
      ══════════════════════════════════════════════════════════════════════ */}

      {/* ── CAPABILITIES ── */}
      <section className="relative py-40  bg-slate-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-slate-300 to-slate-100/70" />
          <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(#dbe1ea_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:120px_120px]" />
          <div className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(56,96,193,0.08)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
              <SectionLabel text="Capabilities Matrix" />
              <h2 className="text-5xl font-medium text-slate-900 mb-8 tracking-tight">
                Explore <br />
                Our Services
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                We design and implement the mission-critical infrastructure that
                allows businesses to scale with total architectural confidence.
              </p>
              <div className="space-y-4">
                {capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className={`text-xs uppercase tracking-[0.3em] font-bold transition-all flex items-center gap-4 ${hoveredCapability === idx ? "text-blue-600" : "text-slate-500"}`}
                  >
                    <span className="w-8 h-px bg-current" />
                    {`0${idx + 1} — ${cap.category}`}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  onMouseEnter={() => setHoveredCapability(idx)}
                  onMouseLeave={() => setHoveredCapability(null)}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  className="group bg-white border border-slate-200 p-10 md:p-16 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-200/20"
                >
                  <div className="flex items-start justify-between mb-16">
                    <div className="p-4 bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <cap.icon size={36} strokeWidth={1} />
                    </div>
                    <span className="font-mono text-xs text-slate-300 tracking-widest">
                      SYSTEM_NODE_{cap.category.slice(0, 3).toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-5xl font-medium mb-6 text-slate-900 tracking-tight">
                    {cap.category}
                  </h3>
                  <p className="text-slate-500 text-xl mb-12 max-w-xl leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="grid grid-cols-1 gap-8 border-t border-slate-100 pt-10">
                    {cap.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between group/item py-2"
                      >
                        <div className="max-w-md">
                          <h4 className="font-bold text-slate-900 text-lg mb-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {item.details}
                          </p>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center border border-slate-100 group-hover/item:border-blue-600 group-hover/item:bg-blue-50 transition-all">
                          <ChevronRight
                            size={18}
                            className="text-slate-300 group-hover/item:text-blue-600"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          NEW: PRINCIPLES (ESTABLISHING AUTHORITY)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionLabel text="The DeusX Way" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-300 border border-slate-300">
            {principles.map((p, i) => (
              <div
                key={i}
                className="bg-white p-12 transition-all hover:bg-slate-50 group"
              >
                <p.icon
                  className="text-slate-300 group-hover:text-blue-600 transition-colors mb-12"
                  size={32}
                  strokeWidth={1.5}
                />
                <h4 className="text-xl font-bold mb-4 text-slate-900 tracking-tight uppercase">
                  {p.title}
                </h4>
                <p className="text-slate-500 leading-relaxed text-base">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW: WHAT WE SOLVE ── */}
      <section className="py-40 border-b border-slate-100">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionLabel text="Problem Space" />
              <h2 className="text-6xl font-medium tracking-tight mb-10 text-slate-900 leading-[1.1]">
                We solve the{" "}
                <span className="italic text-blue-600 font-light">
                  software challenges
                </span>{" "}
                that come with growth.
              </h2>
              <div className="space-y-12 mt-16">
                {[
                  {
                    q: "Scaling Issues",
                    a: "Your software may start struggling to keep up as your business grows, making updates slower and harder to manage.",
                  },
                  {
                    q: "Security Risks",
                    a: "Uncertainty whether your data and infromation are properly protected",
                  },
                  {
                    q: "Performance Delays",
                    a: "Your product may start to become slow, unreliable or starts breaking under real usage",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8">
                    <span className="text-blue-600 font-mono text-lg font-bold">
                      0{i + 1}.
                    </span>
                    <div>
                      <h4 className="text-2xl font-medium mb-2 text-slate-900">
                        {item.q}
                      </h4>
                      <p className="text-slate-500 text-lg leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div ref={solveSectionRef} className="relative">
              <div className="aspect-square bg-slate-900 p-12 overflow-hidden relative border border-slate-800">
                {/* subtle diagonal texture */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.04)_20px,rgba(255,255,255,0.04)_40px)]" />
                </div>

                {/* soft blue glow */}
                <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <Terminal className="text-blue-500" size={40} />

                  <div className="grid h-full grid-rows-[1fr_auto] gap-8 pt-10">
                    {/* animated code area */}
                    <div
                      key={solveReplayKey}
                      className="relative rounded-2xl border border-slate-800/80 bg-slate-950/55 p-6 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)] pointer-events-none" />

                      <div
                        className={`font-mono text-[13px] leading-7 text-slate-400 ${
                          solveInView
                            ? "animate-[codeExit_700ms_ease-in_4.6s_forwards]"
                            : ""
                        }`}
                      >
                        <div
                          className={`overflow-hidden whitespace-nowrap w-0 ${
                            solveInView
                              ? "animate-[typing1_1.2s_steps(29,end)_forwards]"
                              : ""
                          }`}
                        >
                          initializing product_engine...
                        </div>

                        <div
                          className={`mt-2 overflow-hidden whitespace-nowrap w-0 ${
                            solveInView
                              ? "animate-[typing2_1.2s_steps(36,end)_1.4s_forwards]"
                              : ""
                          }`}
                        >
                          loading auth, payments, analytics...
                        </div>

                        <div
                          className={`mt-2 overflow-hidden whitespace-nowrap w-0 ${
                            solveInView
                              ? "animate-[typing3_1s_steps(28,end)_2.8s_forwards]"
                              : ""
                          }`}
                        >
                          running deployment checks...
                        </div>

                        <div
                          className={`mt-2 overflow-hidden whitespace-nowrap w-0 text-blue-400 ${
                            solveInView
                              ? "animate-[typing4_0.8s_steps(16,end)_4s_forwards]"
                              : ""
                          }`}
                        >
                          build complete ✓
                        </div>
                      </div>

                      {/* real image reveal */}
                      <div
                        className={`pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 ${
                          solveInView
                            ? "animate-[revealScreen_900ms_ease-out_5s_forwards]"
                            : ""
                        }`}
                      >
                        <div className="relative transform-gpu [perspective:1400px]">
                          <div className="absolute inset-0 translate-x-8 translate-y-10 scale-90 rounded-[32px] bg-blue-500/20 blur-3xl" />

                          <img
                            src="new_tablet.png"
                            alt="Analytics dashboard preview"
                            className={`relative z-10 w-[340px] md:w-[390px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] [transform:rotate(-5deg)_skewY(-1deg)_scale(0.96)] ${
                              solveInView
                                ? "animate-[screenFloat_6s_ease-in-out_6s_infinite]"
                                : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* text area */}
                    <div>
                      <div className="text-blue-500 font-mono text-sm mb-4 tracking-tight">
                        #DEPLOYMENT_SEQUENCE
                      </div>

                      <h3 className="text-4xl text-white font-medium tracking-tight mb-4 max-w-xl">
                        We build software people can rely on.
                      </h3>

                      <p className="text-slate-400 text-base leading-relaxed max-w-md mb-6">
                        Built to work well, scale well, and feel ready for real
                        use.
                      </p>

                      <div className="flex gap-2">
                        <div className="h-1 w-12 bg-blue-600" />
                        <div className="h-1 w-4 bg-slate-700" />
                        <div className="h-1 w-4 bg-slate-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          METHODOLOGY: INDUSTRIAL PRECISION (PRESERVED)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-[120px] font-bold overflow-hidden whitespace-nowrap leading-none select-none">
          SYSTEM_ARCHITECTURE_V3_DEBUG_MODE_STABLE
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-4xl mb-24">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-[1px] bg-blue-500" />
              <span className="text-xs font-mono font-bold tracking-[0.4em] text-blue-500 uppercase">
                Operational Protocol
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.85] mb-12">
              Most ship code. <br />
              <span className="text-blue-500 italic font-light">
                We ship assets.
              </span>
            </h2>
            <p className="text-2xl text-slate-400 leading-relaxed max-w-2xl">
              Software is either a force multiplier or a liability. Our
              methodology ensures your system remains the former.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
            {[
              {
                step: "01",
                title: "Analyze",
                icon: Terminal,
                desc: "Deep technical audit and system constraint discovery.",
              },
              {
                step: "02",
                title: "Architect",
                icon: Database,
                desc: "Designing for 100x scale with modular integrity.",
              },
              {
                step: "03",
                title: "Engineer",
                icon: Code2,
                desc: "High-precision development with rigorous testing.",
              },
              {
                step: "04",
                title: "Scale",
                icon: Cpu,
                desc: "Automated deployment and performance optimization.",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-slate-900 p-12 hover:bg-slate-800 transition-all group"
              >
                <m.icon
                  size={28}
                  className="text-slate-600 group-hover:text-blue-500 transition-colors mb-16"
                />
                <span className="text-[10px] font-mono text-slate-500 block mb-4 tracking-widest">
                  {m.step}
                  {/* DISCOVERY */}
                </span>
                <h4 className="text-2xl font-medium mb-4">{m.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          NEW: ENGAGEMENT MODELS (CLARITY FOR CLIENTS)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionLabel text="Partnership Structures" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                label: "Strategic",
                title: "Fractional CTO",
                desc: "High-level technical roadmap, team scaling, and architectural oversight for ventures without full-time leadership.",
              },
              {
                label: "Execution",
                title: "Engineering Partner",
                desc: "Taking total ownership of a mission-critical platform or greenfield product from architecture to production.",
              },
              {
                label: "Advisory",
                title: "Technical Audit",
                desc: "Deep-dive analysis of existing codebases, performance bottlenecks, and security vulnerabilities with an actionable fix-map.",
              },
            ].map((model, i) => (
              <div
                key={i}
                className="p-10 border border-slate-100 hover:border-blue-200 transition-all bg-slate-50/30"
              >
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest mb-6 block">
                  [{model.label}]
                </span>
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-slate-900">
                  {model.title}
                </h3>
                <p className="text-lg text-slate-500 leading-relaxed">
                  {model.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA: THE HIGH-VALUE INVITATION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div
            initial={{opacity: 0, scale: 0.95}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            className="max-w-5xl mx-auto border-2 border-slate-900 p-12 md:p-24 relative"
          >
            {/* Corner Accents */}
            <div className="absolute -top-[2px] -left-[2px] w-8 h-8 border-t-4 border-l-4 border-blue-600" />
            <div className="absolute -bottom-[2px] -right-[2px] w-8 h-8 border-b-4 border-r-4 border-blue-600" />

            <SectionLabel text="Final Transmission" />
            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter mb-8 text-slate-900 leading-[0.9]">
              If your system matters, <br />
              build it properly.
            </h2>
            <p className="text-slate-500 text-xl md:text-2xl mb-14 leading-relaxed max-w-3xl mx-auto font-normal">
              We partner with a limited number of clients per year to ensure
              every line of code meets our standard of technical excellence.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="w-full md:w-auto bg-blue-600 text-white px-12 py-6 text-lg font-bold hover:bg-slate-900 transition-all active:scale-95 shadow-2xl shadow-blue-200 flex items-center justify-center gap-4">
                Initialize Consultation
                <ArrowUpRight size={20} />
              </button>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.4em] md:text-left">
                Average Response: &lt; 24 Hours <br />
                Availability: Q3/Q4 2024
              </div>
            </div>
          </motion.div>

          {/* Credibility Footer */}
          <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">
                Protocol Stable // Secure Connection
              </span>
            </div>
            <div className="flex gap-10">
              <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest hover:text-blue-600 cursor-pointer transition-colors">
                Documentation
              </span>
              <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest hover:text-blue-600 cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest hover:text-blue-600 cursor-pointer transition-colors">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
