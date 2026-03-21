"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import  Footer  from "../components/layout/Footer";

const values = [
  { title: "Clarity", text: "We define the problem deeply before writing code. No ambiguity, no wasted motion." },
  { title: "Execution", text: "Engineering is a craft of discipline. We ship production-grade code on a predictable rhythm." },
  { title: "Reliability", text: "Our systems are built to run 24/7 with minimal oversight and maximum uptime." },
  { title: "Forward Thinking", text: "We architect for the next 5 years, not just the next 5 months." },
];

export default function CompanyPage() {
  return (
    <main className="bg-white">
      <Navbar />
      
      {/* HERO */}
      <section className="pt-40 pb-24 bg-[#FBFBFC]">
        <div className="container max-w-[1200px] mx-auto px-6 text-center">
          <span className="text-[11px] font-black tracking-[0.3em] text-blue-600 uppercase mb-6 block">Company</span>
          <h1 className="text-5xl md:text-8xl font-[900] text-slate-900 tracking-tighter mb-8 leading-[0.9]">We Build with Clarity, <br /> Discipline, and Intent</h1>
          <p className="text-slate-500 text-xl md:text-2xl max-w-3xl mx-auto font-medium">DeusX is a modern technology consulting firm dedicated to the art of high-performance engineering.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 border-y border-slate-50">
        <div className="container max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl font-[900] text-slate-900 mb-8">Who We Are</h2>
          <div className="space-y-6 text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
            <p>DeusX was founded on the principle that technology belongs to everyone, but engineering belongs to the disciplined. We bridge the gap between complex business needs and elegant technical solutions.</p>
            <p>Our team consists of top-tier engineers who have scaled systems for global platforms, bringing that same enterprise-level rigour to every partnership we undertake.</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-[#F8F9FF]">
        <div className="container max-w-[1200px] mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-[900] text-slate-900">Our Core Values</h2>
        </div>
        <div className="container max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-10 bg-white rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{v.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-32">
        <div className="container max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-[900] text-slate-900 mb-8 tracking-tight">Why Choose DeusX?</h2>
          <p className="text-slate-500 text-xl font-medium leading-relaxed mb-12">Clients choose us because we dontt just provide hours. We provide technical depth, product-minded execution, and a partnership built on radical transparency.</p>
          <button className="px-10 py-4 bg-[#0055FF] text-white rounded-full font-bold text-lg">Partner with Us</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}