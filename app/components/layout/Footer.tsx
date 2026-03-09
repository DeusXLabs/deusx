import Link from "next/link";
import { Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Integrations", "Pricing", "Changelog"],
  Company: ["About Us", "Careers", "Culture", "Contact"],
  Resources: ["Documentation", "Help Center", "Community", "Privacy"],
};

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 uppercase mb-6 block">
              Deus<span className="text-blue-600">X</span>
            </Link>
            <p className="text-slate-500 max-w-xs mb-8 leading-relaxed">
              Engineering the digital systems that power the next generation of global industry leaders.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center group">
                      {link}
                      <ArrowUpRight size={12} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all ml-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © 2026 DeusX Consulting Group. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <Link href="#" className="hover:text-slate-900">Terms</Link>
            <Link href="#" className="hover:text-slate-900">Privacy</Link>
            <Link href="#" className="hover:text-slate-900">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}