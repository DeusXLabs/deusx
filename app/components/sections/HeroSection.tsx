"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroSection() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const phoneTransition = {
    hidden: { opacity: 0, y: 100, rotate: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: -12, 
      transition: { delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const float = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative w-full pt-32 md:pt-48 pb-0 flex flex-col items-center bg-white">
      {/* BACKGROUND GRADIENT ATMOSPHERE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-[10%] w-125 h-125 bg-cyan-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-[10%] w-125 h-125 bg-violet-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-300 px-6 relative z-10 flex flex-col items-center text-center">
        {/* EYEBROW */}
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[11px] font-bold tracking-[0.3em] text-blue-600 uppercase mb-6"
        >
          The Future Belongs to You
        </motion.span>

        {/* HEADLINE */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[84px] font-black tracking-tight text-slate-900 leading-[1.1] mb-8"
        >
          Technology belongs to <br className="hidden md:block" />
          <span className="bg-linear-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
            everyone
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="max-w-[600px] text-slate-500 text-lg md:text-xl leading-relaxed mb-10"
        >
          Accelerate your business and move into the next era with the help of a team of top-tier engineers.
        </motion.p>

        {/* CTA GROUP */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <button className="px-10 py-4 bg-[#0055FF] text-white rounded-full font-bold text-lg shadow-xl shadow-blue-200/50 hover:bg-[#0044CC] transition-all">
            Book a Call
          </button>
          <button className="flex items-center gap-3 px-6 py-4 text-slate-900 font-bold hover:text-blue-600 transition-colors group">
            How it works
            <span className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Play size={14} fill="currentColor" />
            </span>
          </button>
        </motion.div>

        {/* VISUAL COMPOSITION */}
        <div className="relative w-full max-w-5xl mt-10">
          
          {/* CENTER: Device Mockup */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={phoneTransition}
            className="relative z-20 mx-auto w-[280px] md:w-[480px] lg:w-[600px]"
          >
            <Image
              src="/device-mockup.png"
              alt="DeusX Platform Interface"
              width={800}
              height={1200}
              priority
              className="object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]"
            />
          </motion.div>

          {/* LEFT: Small Cube */}
          <motion.div
            variants={float}
            animate="animate"
            className="absolute top-1/4 -left-4 md:-left-12 z-30 w-24 md:w-40 hidden sm:block"
          >
            <Image src="/cubeleft.png" alt="Glossy Element" width={200} height={200} />
          </motion.div>

          {/* RIGHT: Large Cube */}
          <motion.div
            variants={float}
            animate="animate"
            className="absolute top-0 -right-8 md:-right-20 z-10 w-40 md:w-64 hidden sm:block"
          >
            <Image src="/cuberight.png" alt="Glossy Element" width={300} height={300} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}