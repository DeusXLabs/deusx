"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, ShieldCheck, BarChart3 } from "lucide-react";
import { cn } from "../../lib/utils";

const steps = [
  {
    number: "01",
    title: "Strategic Discovery",
    description: "We deep-dive into your existing infrastructure and business goals to identify high-impact leverage points.",
    icon: Zap,
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    title: "Architectural Design",
    description: "Our engineers craft a bespoke blueprint focused on scalability, security, and seamless integration.",
    icon: ShieldCheck,
    color: "from-purple-500 to-pink-400",
  },
  {
    number: "03",
    title: "Precision Execution",
    description: "We deploy using a phased approach, ensuring zero downtime and immediate value realization.",
    icon: CheckCircle2,
    color: "from-emerald-500 to-teal-400",
  },
  {
    number: "04",
    title: "Continuous Optimization",
    description: "Post-launch, we monitor and refine your systems to ensure they evolve with the market.",
    icon: BarChart3,
    color: "from-orange-500 to-yellow-400",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-50 rounded-full blur-[120px] -translate-x-1/2 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            How it <span className="animate-gradient-text">Works</span>
          </motion.h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg">
            A battle-tested methodology designed for speed, safety, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-[1px] bg-slate-100 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[32px] bg-white border border-slate-50 hover:border-slate-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
              {/* Step Number */}
              <div className="text-6xl font-black text-slate-50 mb-6 group-hover:text-blue-50 transition-colors">
                {step.number}
              </div>

              {/* Icon with Gradient Glow */}
              <div className={cn(
                "w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white mb-6 shadow-lg",
                step.color
              )}>
                <step.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full group-hover:w-1/2 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}