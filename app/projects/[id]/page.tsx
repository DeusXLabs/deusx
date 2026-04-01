"use client";

import React, {useRef, useState} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Zap,
  Terminal,
  Activity,
  ChevronDown,
  Maximize2,
  MousePointer2,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

// ─── DATA STRUCTURE ────────────────────────────────────────────────────────
interface GalleryImage {
  src: string;
  label: string;
  sub: string;
  size: "standard" | "tall" | "wide";
}

const PROJECT_IMAGES: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&h=800&q=80",
    label: "Core Dashboard",
    sub: "System Overview",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&w=800&h=1100&q=80",
    label: "Infrastructure",
    sub: "Server-side Architecture",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600&q=80",
    label: "Network Map",
    sub: "Latency Visualizer",
    size: "standard",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600&q=80",
    label: "Node Logic",
    sub: "Edge Computing",
    size: "standard",
  },
];

const project = {
  title: "Aghcloud.ai",
  client: "African GPU Hub",
  year: "2024",
  url: "https://aghcloud.ai",
  accent: "#2563EB",
  tags: ["Rust", "Kubernetes", "Next.js", "WebRTC"],
  problem:
    "High-performance GPU computing in Africa was gated by extreme latency and fragmented resource allocation. Local AI startups were forced to use distant EU/US nodes, killing real-time inference capabilities.",
  solution:
    "We engineered a sovereign orchestration layer that abstracts bare-metal GPU clusters into a seamless, low-latency cloud. Using a custom Rust-based scheduler, we reduced node provisioning time by 85%.",
  metrics: [
    {
      label: "Provisioning",
      value: "12",
      unit: "s",
      desc: "Down from 3 minutes",
    },
    {label: "Latency", value: "18", unit: "ms", desc: "Regional round-trip"},
    {label: "Uptime", value: "99.99", unit: "%", desc: "Enterprise SLA"},
    {
      label: "Throughput",
      value: "100",
      unit: "Gbps",
      desc: "Inter-node fabric",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&h=800&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&w=800&h=1100&q=80",
  ],
};

// ─── REUSABLE COMPONENTS ───────────────────────────────────────────────────

const SectionLabel = ({text}: {text: string}) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="w-2 h-2 rounded-full bg-blue-600" />
    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-slate-400 font-bold">
      {text}
    </span>
  </div>
);

// ─── INTERACTIVE GALLERY ITEM ──────────────────────────────────────────────

const InteractiveGalleryItem = ({
  img,
  index,
}: {
  img: GalleryImage;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"});

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const {left, top, width, height} = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMouseX(x);
    setMouseY(y);
  };

  const springConfig = {damping: 20, stiffness: 150};
  const rotateX = useSpring(mouseY * 10, springConfig);
  const rotateY = useSpring(mouseX * -10, springConfig);
  const translateX = useSpring(mouseX * 20, springConfig);
  const translateY = useSpring(mouseY * 20, springConfig);

  return (
    // Perspective lives on the OUTER wrapper so transform never fights overflow-hidden
    <div
      ref={ref}
      className="relative w-full h-full cursor-pointer"
      style={{perspective: "1000px"}}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setMouseX(0);
        setMouseY(0);
        setHovered(false);
      }}
    >
      <motion.div
        initial={{opacity: 0, y: 50, scale: 0.9}}
        animate={isInView ? {opacity: 1, y: 0, scale: 1} : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        // This wrapper handles the 3D tilt — NO overflow-hidden here
        style={{rotateX, rotateY, width: "100%", height: "100%"}}
        className="relative group"
      >
        {/* overflow-hidden is on THIS inner div, not on the tilt wrapper */}
        <div className="relative w-full h-full overflow-hidden">
          <motion.img
            src={img.src}
            alt={img.label}
            className="w-full h-full object-cover"
            style={{
              x: translateX,
              y: translateY,
              scale: hovered ? 1.1 : 1.04,
              filter: hovered ? "grayscale(0%)" : "grayscale(55%)",
              transition: "filter 0.6s ease",
            }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.15) 50%, transparent 100%)",
              opacity: hovered ? 0.9 : 0.35,
            }}
          />

          {/* Floating Caption */}
          <motion.div
            className="absolute inset-x-0 bottom-0 p-6 md:p-8 pointer-events-none"
            animate={{y: hovered ? 0 : 14, opacity: hovered ? 1 : 0}}
            transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-6 bg-blue-500" />
              <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-widest">
                {img.sub}
              </span>
            </div>
            <h4 className="text-xl md:text-2xl font-medium text-white tracking-tight">
              {img.label}
            </h4>
          </motion.div>

          {/* Top-right icon */}
          <motion.div
            className="absolute top-5 right-5 pointer-events-none"
            animate={{opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.75}}
            transition={{duration: 0.25}}
          >
            <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Maximize2 size={14} className="text-white" />
            </div>
          </motion.div>

          {/* Index */}
          <div className="absolute top-5 left-5 text-[9px] font-mono text-white/25 select-none pointer-events-none">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────

export default function CaseStudyPage() {
  const containerRef = useRef(null);
  const {scrollYProgress} = useScroll({target: containerRef});
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const heroImageY = useTransform(smoothProgress, [0, 0.3], ["0%", "25%"]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="bg-white selection:bg-blue-600 selection:text-white antialiased"
    >
      <Navbar />

      {/* ── 1. HERO ── */}
      <section className="relative min-h-screen w-full flex flex-col justify-start pt-24 overflow-hidden border-b border-slate-100">
  {/* Dot grid background */}
  <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
  </div>

  {/* Back to Archive / Visit Live Site */}
  <div className="container relative z-10 px-6 mx-auto">
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
      <motion.div initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}}>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          Back to Archive
        </Link>
      </motion.div>

      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{opacity: 0, x: 20}}
        animate={{opacity: 1, x: 0}}
        className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-blue-600 font-bold group"
      >
        Visit Live Site
        <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </motion.a>
    </div>
  </div>

  {/* Hero Image */}
  <motion.div
    style={{y: heroImageY, opacity: heroOpacity}}
    className="relative z-0 inset-x-0 mx-auto container px-6 h-[55vh]"
  >
    <div className="w-full h-full shadow-2xl overflow-hidden rounded-sm">
      <img
        src={project.gallery[0]}
        alt="Hero Background"
        className="w-full h-full object-cover grayscale brightness-50"
      />
    </div>
  </motion.div>

  {/* Project Title + Client/Year — below image */}
  <div className="container relative z-10 px-6 mx-auto mt-8">
    <div className="grid lg:grid-cols-12 gap-8 items-end">
      <div className="lg:col-span-9">
        <motion.h1
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
          className="text-3xl md:text-6xl lg:text-[7rem] font-medium tracking-tighter leading-[0.8] text-slate-900"
        >
          {project.title}
        </motion.h1>
      </div>
      <div className="lg:col-span-3 text-right py-4">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.5}}
          className="flex flex-col gap-1"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400 font-bold">
            Client: {project.client}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400 font-bold">
            Project Year: {project.year}
          </span>
        </motion.div>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-200">
    <ChevronDown size={18} />
  </div>
</section>

      {/* ── 2. PROBLEM ── */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-4xl">
            <SectionLabel text="Problem Statement" />
            <motion.h2
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              className="text-4xl md:text-4xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-12"
            >
              {project.problem}
            </motion.h2>
          </div>
        </div>
      </section>

      {/* ── 3. SOLUTION ── */}
      <section className="py-40 border-b border-slate-100">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <SectionLabel text="The Solution" />
              <h3 className="text-4xl font-medium mb-8 tracking-tight text-slate-900">
                Architecture for Global Scale.
              </h3>
              <p className="text-xl text-slate-500 leading-relaxed mb-12">
                {project.solution}
              </p>

              <div className="space-y-4">
                {project.tags.map((tag, i) => (
                  <motion.div
                    key={i}
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: i * 0.1}}
                    className="flex items-center gap-4 p-4 bg-slate-50 border-l-2 border-blue-600 group"
                  >
                    <Terminal
                      size={16}
                      className="text-blue-600 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
                      {tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{opacity: 0, scale: 0.95}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                className="aspect-video bg-slate-900 rounded-sm p-1 shadow-3xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,#2563eb_0%,transparent_70%)]" />
                <div className="w-full h-full border border-white/10 flex items-center justify-center">
                  <Activity className="text-blue-500 animate-pulse" size={48} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. GALLERY ── */}
      <section className="py-32 md:py-40 bg-white overflow-hidden">
        <div className="container px-6 mx-auto">
          {/* Editorial Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-slate-400 font-bold">
                  Visual Documentation
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900">
                System Interface.
              </h2>
            </div>
            <div className="flex items-center gap-4 text-slate-400 self-end">
              <MousePointer2 size={16} className="animate-bounce" />
              <span className="text-[10px] font-mono uppercase tracking-widest">
                Hover to explore depth
              </span>
            </div>
          </div>

          {/*
            ─── GALLERY GRID ──────────────────────────────────────────────────
            
            MOBILE  (< md): Single column stack. Each image is full-width with
            a generous fixed height so they feel cinematic, not thumbnail-like.
            No horizontal scroll — images flow naturally top-to-bottom.

            DESKTOP (≥ md): Asymmetric 3-column bento:
              [  wide (cols 1-2, row 1)  ] [ tall (col 3, rows 1-2) ]
              [ standard (col 1, row 2)  ] [ standard (col 2, row 2)]

            KEY FIX — grid-template-rows is explicitly defined with pixel heights.
            Without this, row-span-2 collapses to auto height and items overlap.
            We use 380px rows; the tall item spans 380+4(gap)+380 = 764px total.
          */}
          <div
            className="
              grid
              grid-cols-1 gap-4
              md:grid-cols-3
              md:gap-5
              md:[grid-template-rows:380px_380px]
            "
          >
            {/* ── WIDE (row 1, cols 1-2) ── */}
            <div className="h-[56vw] md:h-auto md:col-span-2 md:row-span-1">
              <InteractiveGalleryItem img={PROJECT_IMAGES[0]} index={0} />
            </div>

            {/* ── TALL (rows 1-2, col 3) ── */}
            <div className="h-[80vw] md:h-auto md:col-start-3 md:row-span-2">
              <InteractiveGalleryItem img={PROJECT_IMAGES[1]} index={1} />
            </div>

            {/* ── STANDARD (row 2, col 1) ── */}
            <div className="h-[56vw] md:h-auto md:col-start-1 md:row-start-2">
              <InteractiveGalleryItem img={PROJECT_IMAGES[2]} index={2} />
            </div>

            {/* ── STANDARD (row 2, col 2) ── */}
            <div className="h-[56vw] md:h-auto md:col-start-2 md:row-start-2">
              <InteractiveGalleryItem img={PROJECT_IMAGES[3]} index={3} />
            </div>
          </div>

          {/* Continuity Line */}
          <motion.div
            initial={{scaleX: 0}}
            whileInView={{scaleX: 1}}
            viewport={{once: true}}
            className="h-px w-full bg-slate-100 mt-24 origin-left"
          />
        </div>
      </section>

      {/* ── 5. METRICS ── */}
      <section className="py-40 bg-slate-50 border-y border-slate-100">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-white p-12 transition-colors hover:bg-slate-50 group"
              >
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-6">
                  {metric.label}
                </span>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
                    {metric.value}
                  </span>
                  <span className="text-xl font-medium text-blue-600">
                    {metric.unit}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono italic">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="py-40 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#2563eb_0%,transparent_70%)]" />
        </div>

        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
          >
            <h2 className="text-6xl md:text-8xl text-white font-medium tracking-tighter leading-[0.9] mb-12">
              Scale your system <br />
              with <span className="text-blue-500 italic">authority.</span>
            </h2>
            <Link href="/contact">
              <button className="group bg-blue-600 text-white px-12 py-6 text-lg font-bold hover:bg-white hover:text-slate-900 transition-all flex items-center gap-4 mx-auto">
                Start a Conversation
                <Zap
                  size={20}
                  className="group-hover:rotate-12 transition-transform"
                />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
