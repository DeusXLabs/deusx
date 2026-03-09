"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "Services", hasDropdown: false },
  { name: "Features", hasDropdown: false },
  { name: "Company", hasDropdown: false },
  { name: "Pricing", hasDropdown: false },
  { name: "Help", hasDropdown: false },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Scroll Detection Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 transition-all duration-500">
      <div
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-in-out px-6 md:px-10",
          // Glass Mode Styles
          isScrolled
            ? "w-[92%] max-w-275 h-16 rounded-3xl bg-white/65 backdrop-blur-md border border-gray-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
            : "w-full max-w-300 h-20 rounded-none bg-transparent border-transparent shadow-none"
        )}
      >
        {/* LEFT: Logo */}
        <Link href="/" className="text-[22px] font-semibold text-[#111] tracking-tight">
          DeusX
        </Link>

        {/* CENTER: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href="#"
              className="group flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-black transition-colors"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown size={14} className="text-gray-400 group-hover:text-black transition-transform duration-300 group-hover:rotate-180" />
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT: CTA & Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className={cn(
              "px-6 py-2.5 bg-[#0055FF] text-white text-sm font-medium rounded-full shadow-lg shadow-blue-200/50 hover:bg-[#0044CC] transition-all",
              isScrolled ? "scale-95" : "scale-100"
            )}
          >
            Book a Call
          </Link>

          {/* Hamburger Icon Animation */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={cn("w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300", isMobileMenuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300", isMobileMenuOpen && "opacity-0")} />
            <span className={cn("w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300", isMobileMenuOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-24 left-4 right-4 bg-white rounded-4xl shadow-2xl border border-gray-100 p-8 flex flex-col gap-6 md:hidden z-40"
          >
            {navLinks.map((link, i) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                key={link.name}
              >
                <Link href="#" className="text-xl font-semibold text-gray-900 flex items-center justify-between">
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={18} />}
                </Link>
              </motion.div>
            ))}
            <hr className="border-gray-100" />
            <Link href="#" className="w-full py-4 bg-[#0055FF] text-white text-center rounded-2xl font-bold text-lg">
              Book a Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}