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
  isHighlighted?: boolean;
  index: number;
}

export function ServiceCard({ title, stack, description, icon, gradient, isHighlighted, index }: ServiceCardProps) {
  const IconComponent = LucideIcons[icon] as React.ElementType;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={cn(
        "relative p-8 rounded-[32px] bg-white transition-all duration-300 group",
        isHighlighted 
          ? "shadow-[0_40px_80px_rgba(0,0,0,0.08)] border-t-4 border-blue-600" 
          : "shadow-[0_20px_50px_rgba(0,0,0,0.03)] border-t border-transparent hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)]"
      )}
    >
      {/* ICON BADGE */}
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center mb-8 shadow-md transition-transform duration-500 group-hover:scale-110",
        gradient
      )}>
        <IconComponent size={22} className="text-white" strokeWidth={2.5} />
      </div>

      {/* CONTENT */}
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-[13px] font-bold tracking-wider text-slate-400 uppercase mb-4">{stack}</p>
      <p className="text-slate-500 leading-relaxed text-[15px]">
        {description}
      </p>
    </motion.div>
  );
}