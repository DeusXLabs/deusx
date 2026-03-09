"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { cn } from "../../lib/utils";

interface ServiceCardProps {
  title: string;
  stack: string;
  description: string;
  icon: keyof typeof LucideIcons;
  gradient: string;
  index: number;
}

export function ServiceCard({ title, stack, description, icon, gradient, index }: ServiceCardProps) {
  const IconComponent = LucideIcons[icon] as React.ElementType;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      {/* THE HOVER LINE: 4px solid blue line at the very top boundary */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-blue rounded-t-4xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center z-20" />

      <div className={cn(
        "relative h-full p-10 md:p-12 rounded-4xl bg-white border border-slate-100/50",
        "shadow-[0_10px_30px_rgba(0,0,0,0.02)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.07)]",
        "group-hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col overflow-hidden"
      )}>
        
        {/* ICON BADGE - Placed high with specific padding */}
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-10",
          "bg-slate-50 group-hover:bg-blue-50 transition-colors duration-500"
        )}>
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg", gradient)}>
            <IconComponent size={20} strokeWidth={2.5} />
          </div>
        </div>

        {/* CONTENT STACK */}
        <div className="grow space-y-4">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
          
          {/* FONT FIX: Wide tracking for the tech labels */}
          <p className="text-[11px] font-black tracking-[0.25em] text-[#0055FF] uppercase">
            {stack}
          </p>
          
          <p className="text-slate-500 leading-relaxed text-[16px] md:text-[17px] font-medium pt-2">
            {description}
          </p>
        </div>

        {/* SUBTLE INDICATOR: Arrow that appears on hover */}
        <div className="mt-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 text-brand-blue">
          <LucideIcons.ArrowRight size={20} />
        </div>
      </div>
    </motion.div>
  );
}