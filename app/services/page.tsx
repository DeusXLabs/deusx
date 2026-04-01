"use client";

import React, {useState, useRef} from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  MoveRight,
  Activity,
  Plus,
  CheckCircle2,
  ChevronRight,
  Users,
  Compass,
  Zap,
  ShieldCheck,
  PlusCircle,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Link from "next/link";

// ─── DATA ──────────────────────────────────────────────────────────

const servicePillars = [
  {
    id: "product",
    title: "Product Engineering",
    tagline: "Built to handle growth and high demand.",
    impact: "Turn technical debt into a competitive advantage.",
    description:
      "Building software is more than adding features. It’s about making sure your system keeps working as your business grows and more people use it. We build systems where speed and accuracy are very important.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
    services: [
      {
        name: "FinTech Development",
        detail:
          "Secure systems built for handling payments and financial data, designed to be reliable and compliant.",
      },
      {
        name: "Frontend & Backend Development",
        detail:
          "We build the user interface and the systems behind it, making sure your product looks good, works properly & runs smoothly as more people use it",
      },
      {
        name: "System Integration",
        detail:
          "We connect your tools and systems so that everything works together as one smooth platform.",
      },
    ],
    accentColor: "#2563EB",
    pillarIcon: Zap,
  },
  {
    id: "leadership",
    title: "Technology Leadership",
    tagline: "Technical guidance for start up founders and enterprise-level teams.",
    impact: "Align your technical roadmap with commercial reality.",
    description:
      "We work with founders and teams to make better technical decisions early. From choosing the right technology to planning how your product grows, we help you avoid costly mistakes and build with confidence.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000",
    services: [
      {
        name: "Strategic Technology Consulting",
        detail:
          "From doing proper consultations, we guide your product, technology choices and long-term direction ro grow your businesses",
      },
      {
        name: "End-to-End Support",
        detail:
          "Bridging the gap from initial prototype to Series-A readiness with production-grade discipline.",
      },
      {
        name: "System Planning",
        detail:
          "We review your existing systems, analyse, make fixes and upgrades needed",
      },
    ],
    accentColor: "#0f172a",
    pillarIcon: Activity,
  },
  {
    id: "trust",
    title: "Trust & Infrastructure",
    tagline: "Security and stability as a competitive advantage.",
    impact: "Hardening the foundation of your digital assets.",
    description:
      "In modern software, trust is your most fragile asset. We treat infrastructure as a security perimeter—hardening your cloud environment, automating compliance, and ensuring your quality standards meet the expectations of enterprise-level scrutiny.",
    image:
      "/security.jpg",
    services: [
      {
        name: "Security Review",
        detail:
          "We check your system for risks and vulnerabilities and fix issues before they become serious problems.",
      },
      {
        name: "Cloud Setup & Improvement",
        detail:
          "We improve how your system runs in the cloud, making it more secure, efficient, and cost-effective",
      },
      {
        name: "Software Health Check",
        detail:
          "We review your system to find performance issues, messy code and areas that could cause problems later—and help you fix them.",
      },
    ],
    accentColor: "#1d4ed8",
    pillarIcon: ShieldCheck,
  },
];

const trustPoints = [
  {
    title: "Technical Rigor",
    desc: "Every line of code is benchmarked for performance and security before it ever reaches production.",
  },
  {
    title: "Transparent Process",
    desc: "No black boxes. You have full visibility into our architectural decisions and progress.",
  },
  {
    title: "Selective Partnership",
    desc: "We only take on a few projects at a time to ensure your system gets our full attention.",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────

const SectionLabel = ({text}: {text: string}) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
    <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-slate-400">
      {text}
    </span>
  </div>
);

// ─── PAGE ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  // ── FIX: type ease as a const tuple so TS satisfies Framer Motion's
  //    Easing type. number[] is too wide — it needs [n,n,n,n] exactly.
  const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.1, delayChildren: 0.2},
    },
  };

  const itemVariants: Variants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const Icon = servicePillars[activeSlide].pillarIcon;

  return (
    <div className="bg-white">
      <Navbar />

      <main className="text-slate-900 selection:bg-blue-600 selection:text-white">
        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 overflow-hidden border-b border-slate-100">
          <div className="container px-6 mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative z-10">
              <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                className="inline-flex items-center gap-3 px-3 py-1 mb-8 bg-slate-50 border border-slate-200"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-slate-500">
                  Available to work with you
                </span>
              </motion.div>

              <motion.h1
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="text-4xl md:text-8xl lg:text-[7.5rem] font-large tracking-tighter leading-[0.9] mb-10"
              >
                We take
                <br />
                <span className="text-blue-600 italic font-light">
                  your Ideas
                </span>{" "}
                & <br />
                build the product.
              </motion.h1>

              <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2, duration: 0.8}}
                className="max-w-xl text-xl md:text-1xl text-slate-500 leading-relaxed mb-12"
              >
                At DeusX Lab, we help businesses turn their ideas into working
                websites and software. We focus on building solutions that solve
                real problems give your customers a seamless experience. Every
                project is customized to match your own goals and ensure your
                business stands out.
              </motion.p>

              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.4}}
                className="flex flex-wrap items-center gap-6"
              >
              <Link href="contact">
                <button className="bg-slate-900 text-white px-10 py-5 text-sm font-bold hover:bg-blue-600 transition-all active:scale-95 flex items-center gap-4 shadow-xl shadow-slate-200">
                  Initialize Consultation
                  <MoveRight size={18} />
                </button>
              </Link>
                <div className="flex items-center gap-4 px-4 border-l border-slate-200">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Trusted by Global Teams
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{scale: 1.1, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 1.2}}
                className="aspect-[4/5] relative overflow-hidden shadow-2xl"
              >
                <Image
                  src="/ui.jpg"
                  alt="DeusX Strategic Session"
                  fill
                  className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>
        {/* ── TRUST STRIP ── */}
        <section className="py-12 border-b border-slate-100 bg-slate-50/50">
          <div className="container px-6 mx-auto">
            <div className="flex flex-wrap justify-between gap-8 opacity-50 grayscale">
              {[
                "FinTech Systems & Infrastructure",
                "Upgrade Existing Systems",
                "System Reviews & Optimization",
                "Security & Cloud Protection",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono uppercase tracking-[0.3em] font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
        {/* ── SERVICE SHOWCASE ── */}
        <section className="py-32 bg-white overflow-hidden border-b border-slate-100">
          <div className="container px-6 mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-slate-400">
                    Service Spectrum
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900">
                  Our Core Capabilities
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  {servicePillars.map((pillar, i) => (
                    <button
                      key={pillar.id}
                      onClick={() => setActiveSlide(i)}
                      className="group flex flex-col items-start gap-2 focus:outline-none"
                    >
                      <span
                        className={`text-[9px] font-mono font-bold tracking-widest uppercase transition-colors duration-300 ${activeSlide === i ? "text-blue-600" : "text-slate-300 group-hover:text-slate-500"}`}
                      >
                        0{i + 1}
                      </span>
                      <div
                        className={`h-[2px] transition-all duration-500 relative overflow-hidden ${activeSlide === i ? "w-32 bg-blue-600" : "w-12 bg-slate-100 group-hover:bg-slate-200"}`}
                      >
                        {activeSlide === i && (
                          <motion.div
                            layoutId="nav-glow"
                            className="absolute inset-0 bg-blue-400 blur-sm opacity-50"
                          />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                  {servicePillars[activeSlide].title} / Active Pillar
                </p>
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{opacity: 0, x: -20, transition: {duration: 0.3}}}
                  className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start"
                >
                  <div className="lg:col-span-6 group relative">
                    <motion.div
                      variants={itemVariants}
                      className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden shadow-2xl"
                    >
                      <motion.img
                        initial={{scale: 1.1}}
                        animate={{scale: 1}}
                        transition={{duration: 1.5, ease: "easeOut"}}
                        src={servicePillars[activeSlide].image}
                        alt={servicePillars[activeSlide].title}
                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-8 left-8 text-white z-10">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon size={18} className="text-blue-400" />
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
                            Capability_Node / {servicePillars[activeSlide].id}
                          </span>
                        </div>
                        <p className="text-sm font-medium opacity-80 max-w-[240px]">
                          Ensuring engineering integrity in high-stakes
                          technical environments.
                        </p>
                      </div>

                      <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{delay: 0.8}}
                        className="absolute -top-2 -right-6 w-40 h-20 border border-slate-100 rounded-1xl hidden xl:flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm"
                      >
                        <div className="text-center">
                          <span className="block text-[10px] font-mono font-bold text-blue-600 tracking-tighter uppercase leading-none">
                            Status
                          </span>
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-900">
                            Elite
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-6 flex flex-col pt-4">
                    <motion.div variants={itemVariants} className="mb-6">
                      <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-[0.3em] block mb-4">
                        [{servicePillars[activeSlide].impact}]
                      </span>
                      <h3 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[0.95] mb-8 text-slate-900">
                        {servicePillars[activeSlide].tagline}
                      </h3>
                      <p className="text-xl text-slate-500 leading-relaxed mb-12 font-normal border-l-2 border-slate-100 pl-8">
                        {servicePillars[activeSlide].description}
                      </p>
                    </motion.div>

                    <div className="space-y-4">
                      {servicePillars[activeSlide].services.map(
                        (service, idx) => (
                          <motion.div
                            key={idx}
                            variants={itemVariants}
                            custom={idx}
                            className="group/item flex gap-6 p-6 transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <PlusCircle
                                size={20}
                                className="text-slate-300 group-hover/item:text-blue-600 group-hover/item:rotate-90 transition-all duration-500"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-xl mb-2 text-slate-900">
                                {service.name}
                              </h4>
                              <p className="text-base text-slate-400 leading-relaxed max-w-lg">
                                {service.detail}
                              </p>
                            </div>
                          </motion.div>
                        ),
                      )}
                    </div>

                    <motion.div
                      variants={itemVariants}
                      className="mt-12 pt-8 border-t border-slate-100"
                    >
                      <button className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                          <ArrowUpRight
                            size={20}
                            className="text-slate-900 group-hover:text-white transition-colors"
                          />
                        </div>
                        <div>
                          <span className="block text-sm font-bold text-slate-900 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                            Request a consultation
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                            Speak with our team
                          </span>
                        </div>
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
        {/* ── TEXT RIGHT / IMAGE LEFT ── */}
        <section className="relative py-32 md:py-48 bg-slate-50 overflow-visible">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 pointer-events-none hidden lg:block" />

          <div className="container px-6 mx-auto">
            <div className="relative grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
              <div className="lg:col-span-6 relative group">
                <div className="relative overflow-visible">
                  <motion.div
                    initial={{opacity: 0, clipPath: "inset(100% 0% 0% 0%)"}}
                    whileInView={{opacity: 1, clipPath: "inset(0% 0% 0% 0%)"}}
                    viewport={{once: true}}
                    transition={{
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1] as [
                        number,
                        number,
                        number,
                        number,
                      ],
                    }}
                    className="relative z-10 aspect-[4/5] shadow-3xl overflow-hidden"
                  >
                    <motion.img
                      initial={{scale: 1.1}}
                      whileInView={{scale: 1}}
                      transition={{duration: 1.5}}
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
                      alt="Engineering Process"
                      className="w-full h-full object-cover"
                    />

                    <motion.div
                    initial={{opacity: 0, y: 40, x: 20}}
                    whileInView={{opacity: 1, y: 0, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.6, duration: 0.8, ease: "easeOut"}}
                    className="absolute -bottom-2 -right-15 md:-right-12 z-20 w-85 bg-white p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.08)] border-l-4 border-blue-600"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <div
                            key={s}
                            className="w-1 h-1 bg-blue-600 rounded-full"
                          />
                        ))}
                      </div>
                      <p className="text-base font-medium leading-relaxed text-slate-900 tracking-tight italic">
                        We work as an integrated unit 
                        <br/> within your team, not an
                        isolated vendor.
                      </p>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                        Partnership Principle
                      </span>
                    </div>
                  </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: 0.5, duration: 1}}
                    className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 -z-10 hidden md:block"
                  />

                  
                </div>
              </div>

              <div className="lg:col-span-5 lg:offset-1 flex flex-col pt-8 lg:pt-20">
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.8}}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-10 h-px bg-blue-600" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-slate-400">
                      The Advantage
                    </span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.95] mb-10 text-slate-900">
                    Engineering clarity <br />
                    <span className="text-blue-600 italic font-light">
                      for high-growth
                    </span>{" "}
                    teams.
                  </h2>

                  <p className="text-xl text-slate-500 leading-relaxed mb-16 max-w-lg font-normal">
                    Generic agencies optimize for billable hours. We optimize
                    for system health and engineering velocity. Our goal is to
                    leave your codebase and your team in a better position than
                    we found them.
                  </p>
                </motion.div>

                <div className="space-y-10 relative">
                  <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-100 hidden md:block" />

                  {trustPoints.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{opacity: 0, x: 20}}
                      whileInView={{opacity: 1, x: 0}}
                      viewport={{once: true}}
                      transition={{delay: i * 0.2 + 0.4, duration: 0.6}}
                      className="relative flex gap-8 group"
                    >
                      <div className="relative flex-shrink-0 w-12 h-12 bg-white flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 duration-500">
                        <CheckCircle2 size={20} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h4 className="text-xl font-bold tracking-tight text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 text-base leading-relaxed max-w-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ── FULL-WIDTH IMAGE MOMENT ── */}
        <section className="h-[70vh] relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Collaborative Technical Environment"
            className="w-full h-full object-cover brightness-[0.8] group-hover:scale-105 transition-transform duration-[3s]"
          />
          <div className="absolute inset-0 bg-slate-900/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl text-white font-medium tracking-tight mb-8">
                Building the future of software, <br />
                one <span className="italic">resilient</span> system at a time.
              </h2>
              <div className="inline-block h-px w-24 bg-white/50" />
            </div>
          </div>
        </section>
        {/* ── PROCESS ── */}
       
        <section className="py-40 bg-white">
          <div className="container px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <SectionLabel text="Operational Model" />
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight">
                How we work together.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Technical Discovery",
                  desc: "We begin with an exhaustive audit of your current stack, team structure, and commercial goals to identify immediate bottlenecks.",
                  icon: Compass,
                },
                {
                  step: "02",
                  title: "Focused Execution",
                  desc: "Our engineers embed with your team, implementing high-integrity code while establishing better standards and practices.",
                  icon: Zap,
                },
                {
                  step: "03",
                  title: "Handover & Scale",
                  desc: "We ensure your team is fully equipped to maintain and scale the system, providing long-term strategic oversight as needed.",
                  icon: ShieldCheck,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-10 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-2xl hover:shadow-blue-50"
                >
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-3xl font-mono text-slate-200 group-hover:text-blue-600 transition-colors">
                      {item.step}
                    </span>
                    <div className="h-px flex-grow bg-slate-100" />
                  </div>
                  <item.icon size={36} className="text-slate-900 mb-8" />
                  <h4 className="text-2xl font-medium mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── CTA ── */}
        <section className="py-40 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover"
              alt="Background context"
            />
          </div>

          <div className="container px-6 mx-auto relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex justify-center mb-10">
                <div className="px-4 py-1 border border-blue-500/50 rounded-full text-[10px] font-mono tracking-widest text-blue-400 font-bold uppercase">
                  Direct Channel
                </div>
              </div>
              <h2 className="text-6xl md:text-[8rem] font-medium tracking-tighter leading-[0.85] mb-12">
                Ready to stabilize <br />
                your <span className="text-blue-500 italic">vision?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-16 font-normal">
                If you are facing a critical technical challenge or planning a
                major architectural shift, Let us discuss the strategy. We speak
                engineer, not sales.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="w-full md:w-auto bg-blue-600 text-white px-12 py-6 text-lg font-bold hover:bg-white hover:text-slate-900 transition-all active:scale-95 flex items-center justify-center gap-3">
                  Schedule a Deep Dive
                  <ArrowRight size={20} />
                </button>
                <a
                  href="mailto:engineering@deusx.com"
                  className="w-full md:w-auto px-12 py-6 text-lg font-bold border border-white/20 hover:border-white transition-all text-white"
                >
                  Email the Engineering Team
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ── FOOTER ── */}
        <Footer />
      </main>
    </div>
  );
}
