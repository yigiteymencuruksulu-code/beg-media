import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import { PARTNER_LOGOS } from '../data';

export default function TrustLogos() {
  return (
    <section className="py-12 relative w-full border-y border-stone-200 bg-[#F4EFEA]/30 backdrop-blur-sm px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        
        {/* Animated Subtitle Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <p className="text-xs font-mono text-stone-500 uppercase tracking-widest">
              Güvenilirlik & Ortaklıklar
            </p>
          </div>
          <p className="text-xs md:text-sm text-stone-500 font-sans font-light max-w-md">
            Sektör lideri şirketler, gayrimenkul devleri ve video hunisi öncüleri BEG-Media'nın mühendislik ve tasarım vizyonuna güveniyor.
          </p>
        </div>

        {/* Brand Logos Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {PARTNER_LOGOS.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 p-4 rounded-xl bg-stone-100 border border-transparent hover:border-stone-200 hover:bg-stone-200/50 transition-all duration-300 w-full justify-center group cursor-pointer relative"
              id={`partner-logo-${logo.id}`}
            >
              {/* Logo SVG Icon */}
              <svg
                className="w-5 h-5 text-stone-500 group-hover:text-indigo-600 transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={logo.svgPath} />
              </svg>
              
              {/* Logo Typography styled similarly to the agency banner */}
              <span className="text-xs font-display font-bold text-stone-500 tracking-wider group-hover:text-stone-800 transition-colors uppercase">
                {logo.name}
              </span>

              {/* Verified Badge Tooltip on Hover */}
              <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 bg-[#1A1916] border border-stone-800 text-[10px] text-emerald-400 px-2 py-1 rounded shadow-lg flex items-center gap-1 font-mono whitespace-nowrap pointer-events-none z-20">
                <ShieldCheck className="w-3 h-3" />
                <span>Doğrulanmış İş Ortağı</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom micro-assurance labels */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-4 border-t border-stone-200 text-[11px] font-mono text-stone-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>%100 Memnuniyet Oranı</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>Modern UI Standartları</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
            <span>KVKK & Güvenli Altyapı</span>
          </div>
        </div>

      </div>
    </section>
  );
}
