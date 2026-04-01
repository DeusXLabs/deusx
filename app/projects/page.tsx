"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  ArrowUpRight, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Database, 
  Terminal,
  Layers
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Link from "next/link";

// ─── TYPES & DATA ──────────────────────────────────────────────────────────

interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  impact: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Aghcloud.ai",
    client: "African GPU Hub",
    year: "2024",
    impact: "Democratizing High-Performance Computing",
    description: "Architecting a sovereign cloud infrastructure for the African continent. We engineered the orchestration layer to manage thousands of GPU nodes with sub-ms scheduling latency.",
    tags: ["Cloud Infrastructure", "Rust", "Kubernetes", "Low Latency"],
    metrics: [
      { label: "Node Provisioning", value: "< 12s" },
      { label: "Network Throughput", value: "100 Gbps" }
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=2000",
    link: "/projects/aghcloud"
  },
  {
    id: "02",
    title: "Techpadie",
    client: "Global Web3 Edu",
    year: "2024",
    impact: "Multilingual Learning at Scale",
    description: "A decentralized education platform serving millions. We built a custom content delivery protocol that ensures zero-buffer video streaming in low-bandwidth regions.",
    tags: ["Blockchain", "Node.js", "P2P Protocols", "Next.js"],
    metrics: [
      { label: "Active Users", value: "1.2M+" },
      { label: "Bandwidth Savings", value: "65%" }
    ],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000",
    link: "/projects/techpadie"
  },
  {
    id: "03",
    title: "Wayfarian",
    client: "Travel Tech Corp",
    year: "2023",
    impact: "Redefining Digital Exploration",
    description: "An editorial-first travel ecosystem. Our team developed a proprietary image processing engine that handles multi-terabyte asset libraries with instant global distribution.",
    tags: ["Media Pipeline", "AWS", "TypeScript", "Redis"],
    metrics: [
      { label: "Image Optimization", value: "0.4ms" },
      { label: "Global Latency", value: "< 40ms" }
    ],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2000",
    link: "/projects/wayfarian"
  }
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const ProjectSection = ({ project, index }: { project: Project; index: number }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <section ref={container} className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Visual Content */}
        <motion.div 
          style={{ scale, opacity }}
          className={`lg:col-span-7 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 group">
            <motion.img 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            {/* Tech Overlay Badge */}
            <div className="absolute top-8 right-8 mix-blend-difference">
               <span className="text-[10px] font-mono text-white uppercase tracking-[0.5em] font-bold">
                 REF_{project.id} 
               </span>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className={`lg:col-span-5 z-10 ${isEven ? "lg:order-2" : "lg:order-1 lg:text-right"}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`flex items-center gap-4 mb-6 ${!isEven && "justify-end"}`}>
              <span className="text-sm font-mono text-blue-600 font-bold tracking-tighter italic">
                {project.impact}
              </span>
              <div className="w-12 h-px bg-slate-200" />
            </div>

            <h3 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 text-slate-900 leading-[0.85]">
              {project.title}
            </h3>

            <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-md ml-auto mr-auto lg:ml-0 lg:mr-0">
              {project.description}
            </p>

            {/* Technical Highlights */}
            <div className={`flex flex-wrap gap-3 mb-12 ${!isEven && "justify-end"}`}>
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-slate-100 bg-slate-50 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className={`grid grid-cols-2 gap-8 mb-12 border-t border-slate-100 pt-8 ${!isEven && "text-right"}`}>
              {project.metrics.map(m => (
                <div key={m.label}>
                  <div className="text-xs font-mono uppercase text-slate-300 tracking-[0.2em] mb-1">{m.label}</div>
                  <div className="text-2xl font-bold text-slate-900">{m.value}</div>
                </div>
              ))}
            </div>

           <Link href={`/projects/${project.id}`} className="group flex items-center gap-4">
  <span className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-blue-600 transition-colors">
    View Architecture
  </span>
  <div className="relative w-12 h-12 bg-slate-900 flex items-center justify-center transition-all duration-500 group-hover:bg-blue-600 group-hover:rounded-full">
    <ArrowUpRight size={20} className="text-white" />
  </div>
</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="pt-24">
        
        {/* HERO: IMMERSIVE ENTRY */}
        <section className="relative h-[80vh] flex flex-col justify-center overflow-hidden border-b border-slate-50">
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="container px-6 mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex justify-center mb-8">
                <span className="px-4 py-1 border border-slate-200 text-[10px] font-mono tracking-[0.4em] uppercase font-bold text-slate-400">
                  Systems Archive / 2023-2024
                </span>
              </div>
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-medium tracking-tighter leading-[0.8] mb-12">
                Proven <br />
                <span className="text-blue-600 italic font-light">Authority.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 leading-relaxed font-normal">
                A curated selection of complex systems engineered for resilience, scale, and technical precision.
              </p>
            </motion.div>
          </div>

          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 hidden lg:block"
          >
            <Terminal className="text-slate-100" size={120} />
          </motion.div>
        </section>

        {/* PROJECTS: SCROLL-DRIVEN NARRATIVE */}
        <div className="relative">
          {PROJECTS.map((project, index) => (
            <ProjectSection key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* TRUST LAYER: CREDIBILITY METRICS */}
        <section className="py-40 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 font-mono text-[15vw] font-bold overflow-hidden whitespace-nowrap leading-none select-none pointer-events-none">
            SCALABILITY_RELIABILITY_SECURITY
          </div>

          <div className="container px-6 mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-end">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-blue-500" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-400 font-bold">Technical Benchmarks</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-12 leading-[1.1]">
                  Systems we engineer <br />
                  <span className="text-blue-500 italic font-light">dont just run.</span>
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                  We dont optimize for vanity metrics. We optimize for the edge cases where legacy systems fail.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-slate-800 border border-slate-800">
                {[
                  { label: "Uptime SLA", value: "99.999%", icon: ShieldCheck },
                  { label: "Peak Requests", value: "150k/s", icon: Zap },
                  { label: "Data Integrity", value: "100%", icon: Database },
                  { label: "Cloud Regions", value: "24+", icon: Globe }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900 p-10 flex flex-col justify-between aspect-square">
                    <stat.icon className="text-blue-500 mb-8" size={24} />
                    <div>
                      <div className="text-4xl font-bold mb-1 tracking-tight">{stat.value}</div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA: SELECTIVE PARTNERSHIP */}
        <section className="py-40 bg-white border-t border-slate-50">
          <div className="container px-6 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-10">
                <Layers className="text-blue-600" size={48} />
              </div>
              <h2 className="text-5xl md:text-8xl font-medium tracking-tighter mb-10 leading-[0.95]">
                We dont take on many builds. <br />
                But we build for <span className="text-blue-600 italic">scale.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto font-normal">
                If your system is critical, it belongs in the hands of engineers who understand the weight of every line of code.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="bg-slate-900 text-white px-12 py-6 text-lg font-bold hover:bg-blue-600 transition-all active:scale-95 flex items-center gap-4">
                  Request Technical Discovery
                  <ArrowUpRight size={20} />
                </button>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                  Currently Vettting <br />Q4 2024 Start Dates
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

     <Footer />
    </div>
  );
}