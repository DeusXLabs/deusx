"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "Services", href: "/services", hasDropdown: false },
  { name: "Company", href: "/company", hasDropdown: false },
  { name: "Projects", href: "/projects", hasDropdown: false },
  { name: "Help", href: "/help", hasDropdown: false },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="px-4 md:px-6 pt-4">
          <div
            className={cn(
              "mx-auto flex items-center justify-between border transition-all duration-500 ease-out",
              isScrolled
                ? "max-w-7xl bg-white/88 backdrop-blur-xl border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
                : "max-w-[90rem] bg-white/70 backdrop-blur-md border-slate-200/70",
              "h-[72px] px-5 md:px-7"
            )}
          >
            {/* LEFT */}
            <Link
              href="/"
              className="flex items-center gap-3 text-slate-950 hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center gap-2">
                <span className="block h-2.5 w-2.5 bg-blue-600" />
                <span className="block h-px w-6 bg-slate-300" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[20px] md:text-[22px] font-semibold tracking-tight">
                  DeusX
                </span>
                <span className="hidden sm:block text-[10px] uppercase tracking-[0.24em] text-slate-400 font-mono mt-1">
                  Engineering Systems
                </span>
              </div>
            </Link>

            {/* CENTER */}
            <div className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative flex items-center gap-1.5 text-[13px] lg:text-[14px] font-medium text-slate-600 hover:text-slate-950 transition-colors uppercase tracking-[0.08em]"
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className="text-slate-400 group-hover:text-slate-950 transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}

                  <span className="absolute left-0 -bottom-2 h-px w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-3 pr-2">
                <span className="h-2 w-2 bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400 font-mono">
                  Available for Select Projects
                </span>
              </div>

              <Link
                href="#"
                className={cn(
                  "hidden sm:inline-flex items-center gap-2 border text-slate-950 px-5 py-3 text-[13px] font-medium uppercase tracking-[0.08em] transition-all duration-300",
                  isScrolled
                    ? "border-slate-300 bg-white hover:border-blue-600 hover:text-blue-600"
                    : "border-slate-300/80 bg-white/80 hover:border-blue-600 hover:text-blue-600"
                )}
              >
                Book a Call
                <ArrowUpRight size={15} />
              </Link>

              <button
                type="button"
                className="md:hidden relative flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-slate-950"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle mobile menu"
              >
                <span
                  className={cn(
                    "absolute h-[1.5px] w-5 bg-current transition-all duration-300",
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-[6px]"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-[1.5px] w-5 bg-current transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-[1.5px] w-5 bg-current transition-all duration-300",
                    isMobileMenuOpen ? "-rotate-45" : "translate-y-[6px]"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[92px] left-4 right-4 z-50 border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] md:hidden"
            >
              <div className="border-b border-slate-100 px-6 py-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-mono">
                  Navigation
                </p>
              </div>

              <div className="px-6 py-3">
                {Navbar.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-slate-100 last:border-b-0"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-5 text-[18px] font-medium text-slate-900 tracking-tight"
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown ? (
                        <ChevronDown size={18} className="text-slate-400" />
                      ) : (
                        <ArrowUpRight size={18} className="text-slate-300" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-slate-100 p-6">
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between border border-blue-600 bg-blue-600 px-5 py-4 text-white text-[14px] font-medium uppercase tracking-[0.08em]"
                >
                  <span>Book a Call</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}