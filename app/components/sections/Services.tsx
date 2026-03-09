"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import { ServiceCard } from "../ui/ServiceCard";

const services = [
  {
    title: "Web Development",
    stack: "Next.js • React • Node.js",
    description: "High-performance websites and platforms designed for absolute credibility and speed.",
    icon: "Layers",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    title: "SaaS Products",
    stack: "MVP • Scalable Systems",
    description: "We design and engineer SaaS products from early validation to production-grade infrastructure.",
    icon: "Cpu",
    gradient: "bg-gradient-to-br from-indigo-500 to-indigo-700",
  },
  {
    title: "Mobile Apps",
    stack: "React Native • Flutter",
    description: "Cross-platform mobile applications built for usability, speed, and long-term business growth.",
    icon: "Smartphone",
    gradient: "bg-gradient-to-br from-violet-500 to-violet-700",
  },
  {
    title: "Cloud & DevOps",
    stack: "AWS • CI/CD • Kubernetes",
    description: "Reliable cloud architecture and deployment pipelines that support modern scalable systems.",
    icon: "Cloud",
    gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    title: "AI Solutions",
    stack: "Automation • Workflows",
    description: "Practical AI implementations that streamline operations and unlock new business capabilities.",
    icon: "Sparkles",
    gradient: "bg-gradient-to-br from-pink-500 to-pink-700",
  },
  {
    title: "Cyber Security",
    stack: "Audits • Web3 • Trust",
    description: "Secure architectures and blockchain-enabled systems built with resilience and trust.",
    icon: "ShieldCheck",
    gradient: "bg-gradient-to-br from-teal-500 to-emerald-700",
  },
];

export default function Services() {
  return (
    <section className="relative bg-[#FBFBFC] pt-64 pb-40 overflow-hidden">
      <div className="container max-w-325 mx-auto px-6 relative z-10">
        
        {/* HEADER - authoritative and clean */}
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter"
          >
            Services & <span className="text-blue-600">Technologies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-xl md:text-2xl font-medium"
          >
            Engineering digital systems that help businesses launch faster, scale reliably, and operate securely.
          </motion.p>
        </div>

        {/* GRID - Large gaps for the 'fat' look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              {...service}
              index={index}
              icon={service.icon as any}
            />
          ))}
        </div>

        {/* FOOTER LINK */}
        <div className="mt-24 flex justify-center">
          <button className="flex items-center gap-4 text-slate-900 font-black uppercase text-xs tracking-[0.3em] hover:text-blue-600 transition-all group">
            Explore our services 
            <ArrowRightCircle size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}