"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import { ServiceCard } from "../ui/ServiceCard";

const services = [
  {
    title: "Web Development",
    stack: "Next.js, React, Node.js",
    description: "High-performance websites and platforms designed for credibility, speed, and conversion.",
    icon: "Box",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
    isHighlighted: true,
  },
  {
    title: "SaaS Product Development",
    stack: "MVP, Dashboards, Scalable Platforms",
    description: "We design and engineer SaaS products from early validation to production-grade systems.",
    icon: "FlaskConical",
    gradient: "bg-gradient-to-br from-indigo-500 to-indigo-700",
  },
  {
    title: "Mobile App Development",
    stack: "React Native, Flutter",
    description: "Cross-platform mobile applications built for usability, speed, and long-term growth.",
    icon: "Smartphone",
    gradient: "bg-gradient-to-br from-violet-500 to-violet-700",
  },
  {
    title: "Cloud & DevOps",
    stack: "AWS, CI/CD, Infrastructure",
    description: "Reliable cloud architecture and deployment pipelines that support modern scalable systems.",
    icon: "Cloud",
    gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    title: "AI Solutions",
    stack: "Automation, Integrations, AI Workflows",
    description: "Practical AI implementations that streamline operations and unlock new business capabilities.",
    icon: "Sparkles",
    gradient: "bg-gradient-to-br from-pink-500 to-pink-700",
  },
  {
    title: "Cybersecurity & Blockchain",
    stack: "Security Audits, Secure Systems, Web3",
    description: "Secure architectures and blockchain-enabled systems built with resilience and trust.",
    icon: "ShieldCheck",
    gradient: "bg-gradient-to-br from-teal-500 to-emerald-700",
  },
];

export default function Services() {
  return (
    <section className="relative bg-[#F9FAFB] pt-48 pb-32 overflow-hidden">
      {/* Subtle Hero Gradient Continuation */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-[900] text-slate-900 mb-6 tracking-tight"
          >
            Services & Technologies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-xl mx-auto text-lg md:text-xl"
          >
            We design and engineer digital systems that help businesses launch faster, scale reliably, and operate securely.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              {...service}
              index={index}
              icon={service.icon as any}
            />
          ))}
        </div>

        {/* BOTTOM LINK */}
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-3 text-slate-400 font-bold hover:text-slate-900 transition-all group tracking-wide">
            Our services 
            <ArrowRightCircle size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* DECORATIVE CUBE (Bottom Right) */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-5%] right-[-5%] w-64 h-64 opacity-60 md:opacity-100 pointer-events-none"
      >
        <Image src="/cuberight.png" alt="Decorative Element" width={300} height={300} className="object-contain" />
      </motion.div>
    </section>
  );
}