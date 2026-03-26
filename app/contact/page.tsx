"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Layers, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  Rocket, 
  Crown 
} from "lucide-react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

// ─── DATA: VALUE TIERS (PRICING TEASE) ──────────────────────────────────────

const tiers = [
  {
    id: "startup",
    title: "Venture & Scale",
    eyebrow: "01 / For Innovators",
    icon: Rocket,
    description: "Rapid deployment for teams moving from Seed to Series A. We focus on velocity, market-fit, and building a foundation that won't break during your first 10x growth spike.",
    features: ["MVP Architecture", "Rapid Prototyping", "Scalable Foundations"],
    accent: "from-blue-500/20 to-transparent"
  },
  {
    id: "established",
    title: "Growth & Modernization",
    eyebrow: "02 / For Market Leaders",
    icon: Building2,
    description: "Architectural rescue and system hardening for established brands. We eliminate technical debt, optimize performance, and integrate complex legacy systems into modern flows.",
    features: ["System Hardening", "Legacy Migration", "Performance Audits"],
    accent: "from-indigo-500/20 to-transparent"
  },
  {
    id: "enterprise",
    title: "Elite Systems",
    eyebrow: "03 / For Ambitious Infrastructure",
    icon: Crown,
    description: "Bespoke, high-concurrency engineering for global-scale platforms. Zero-failure tolerance, financial-grade security, and custom-built internal tooling for the world's most demanding systems.",
    features: ["High-Concurrency Rails", "Custom Security Protocols", "Fractional CTO Partnership"],
    accent: "from-blue-600/30 to-transparent"
  }
];

// ─── COMPONENT: VALUE CARD ──────────────────────────────────────────────────

const ValueCard = ({ tier, index }: { tier: typeof tiers[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10 }}
      className="relative group p-8 lg:p-12 bg-white border border-slate-100 overflow-hidden cursor-default"
    >
      {/* Immersive Hover Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${tier.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      <div className="relative z-10">
        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-slate-400 uppercase mb-8 block">
          {tier.eyebrow}
        </span>
        <tier.icon className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1.5} />
        <h3 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">{tier.title}</h3>
        <p className="text-slate-500 leading-relaxed mb-10 text-lg">
          {tier.description}
        </p>
        
        <ul className="space-y-4">
          {tier.features.map((feat, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* Blueprint corner accent */}
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-slate-200 group-hover:border-blue-600 transition-colors" />
    </motion.div>
  );
};

// ─── MAIN SECTION ───────────────────────────────────────────────────────────

export default function EngagementSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="relative py-32 lg:py-48 bg-white overflow-hidden">
        <Navbar />
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-slate-100 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          
          {/* LEFT: VALUE & TIERS (PRICING TEASE) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.5em] uppercase font-bold text-slate-400">
                  Partnership Tiers
                </span>
              </div>
              <h2 className="text-6xl lg:text-8xl font-medium tracking-tighter leading-[0.9] text-slate-900 mb-8">
                Engineered for <br />
                <span className="text-blue-600 italic font-light font-serif">Authority.</span>
              </h2>
              <p className="max-w-xl text-xl text-slate-500 leading-relaxed font-normal">
                We provide selective engineering expertise for teams that value technical integrity over generic solutions. 
              </p>
            </motion.div>

            <div className="grid gap-6">
              {tiers.map((tier, i) => (
                <ValueCard key={tier.id} tier={tier} index={i} />
              ))}
            </div>
          </div>

          {/* RIGHT: CONTACT FORM (GLASSMORPHISM) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 lg:p-12 border border-slate-100 bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-200/50"
            >
              <div className="mb-10">
                <h3 className="text-3xl font-medium tracking-tight mb-4">Start the Protocol</h3>
                <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">Initial Response Time: &lt; 24 Hours</p>
              </div>

              <form className="space-y-8">
                {[
                  { label: "Full Name", type: "text", placeholder: "Daro Titilola" },
                  { label: "Email Address", type: "email", placeholder: "daro@company.ai" },
                  { label: "Company / Organization", type: "text", placeholder: "Aghcloud.ai" }
                ].map((field, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="relative group"
                  >
                    <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block transition-colors group-focus-within:text-blue-600">
                      {field.label}
                    </label>
                    <input 
                      type={field.type} 
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-lg outline-none focus:border-blue-600 transition-all placeholder:text-slate-200"
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative group"
                >
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block transition-colors group-focus-within:text-blue-600">
                    Project Architecture / Details
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about the system you're scaling..."
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-lg outline-none focus:border-blue-600 transition-all placeholder:text-slate-200 resize-none"
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-slate-900 text-white py-6 flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.3em] group overflow-hidden relative"
                >
                  <div className="absolute inset-0 w-full h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10">Initialize Consultation</span>
                  <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>

              {/* Status Indicator */}
              <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-blue-600" />
                  <span className="text-[10px] font-mono text-slate-400">Secure Channel Encrypted</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}