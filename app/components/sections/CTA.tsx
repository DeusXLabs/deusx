"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto p-12 md:p-20 rounded-[48px] bg-slate-900 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
            Ready to build the <br />
            <span className="animate-gradient-text">future together?</span>
          </h2>
          
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Join the elite companies already scaling with our strategic digital infrastructure and precision engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-900/20 hover:bg-blue-500 transition-all flex items-center gap-2">
              Start Your Project
              <ArrowRight size={18} />
            </button>
            <button className="px-10 py-4 bg-transparent border border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-all">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}