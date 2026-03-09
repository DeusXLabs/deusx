"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="relative w-full bg-[#081222] py-40 md:py-56 overflow-visible">
      
      {/* 1. DECORATIVE CUBE: Bridging the section top-right boundary */}
      <div className="absolute -top-24 right-[5%] md:right-[10%] z-30 w-48 md:w-80 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [-2, 3, -2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative aspect-square"
        >
          <Image 
            src="/cuberight.png" 
            alt="Glossy element" 
            fill
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          />
        </motion.div>
      </div>

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* 2. THE STATEMENT TEXT */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[32px] md:text-[54px] lg:text-[64px] leading-[1.15] text-white font-medium tracking-tight"
          >
            “We build digital systems that help ambitious businesses{" "}
            <span className="animate-liquid-light inline-block">
              move faster, scale smarter
            </span>
            , and operate with confidence.”
          </motion.h2>
          
          {/* 3. SUBTLE UNDERLINE/ACCENT (Optional for premium feel) */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="h-1 bg-blue-500/30 mt-12 rounded-full"
          />
        </div>
      </div>

      {/* 4. DEPTH GRADIENT: Prevents the dark section from feeling "flat" */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}