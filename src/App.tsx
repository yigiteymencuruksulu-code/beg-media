/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, PhoneCall, Sparkles, MessageSquare, 
  Layers, Compass, ArrowRight, Shield, Globe, Cpu 
} from 'lucide-react';

// Import newly created custom modular components
import InteractiveHero from './components/InteractiveHero';
import TrustLogos from './components/TrustLogos';
import ValueProps from './components/ValueProps';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import QuickCTA from './components/QuickCTA';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');

  // Listen to scroll to apply glassmorphism on navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      // Update active nav anchors based on position
      const sections = ['hero', 'services', 'about', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Giriş', href: '#hero', id: 'hero' },
    { label: 'Hizmetler', href: '#services', id: 'services' },
    { label: 'Biz Kimiz', href: '#about', id: 'about' },
    { label: 'Referanslar', href: '#testimonials', id: 'testimonials' },
    { label: 'Teklif Alın', href: '#contact', id: 'contact' },
  ];

  return (
    <div className="relative w-full min-h-screen text-stone-900 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* GLOBAL HEADER (NAVBAR) */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 py-4 px-4 md:px-8 ${
          scrolled 
            ? 'bg-[#FAF8F5]/85 backdrop-blur-xl border-b border-stone-200/80 shadow-md shadow-stone-900/5' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <a href="#hero" className="flex items-center gap-2 group cursor-pointer" id="logo-header-link">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <Layers className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-display font-extrabold tracking-wider text-stone-900 uppercase group-hover:text-indigo-600 transition-colors">
                BEG-Media
              </span>
              <span className="text-[8px] font-mono tracking-widest text-stone-500 uppercase">
                Digital Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Anchors */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-stone-100/80 border border-stone-200/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-semibold font-sans tracking-wide transition-all ${
                    isActive 
                      ? 'bg-[#1A1916] text-[#FAF8F5] shadow-inner border border-stone-800' 
                      : 'text-stone-600 hover:text-stone-950'
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs font-mono transition-all duration-300 shadow-md shadow-indigo-500/10 cursor-pointer"
              id="header-cta-get-in-touch"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Teklif İsteyin</span>
            </a>

            {/* Hamburger Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
              aria-label="Menüyü Aç"
              id="btn-hamburger-mobile"
            >
              {menuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE FULL SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#FAF8F5]/98 backdrop-blur-2xl z-40 flex flex-col justify-between p-6 pt-24"
          >
            {/* Background design accents */}
            <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

            {/* Menu Links navigation list */}
            <nav className="flex flex-col space-y-6 text-left max-w-md mx-auto w-full pt-8">
              <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest border-b border-stone-200 pb-2">
                Sayfa Navigasyonu
              </p>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="text-2xl md:text-3xl font-display font-extrabold text-stone-800 hover:text-stone-950 flex items-center justify-between group py-1"
                  id={`mobile-nav-link-${link.id}`}
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    {link.label}
                  </span>
                  <ArrowRight className="w-6 h-6 text-indigo-500 opacity-0 group-hover:opacity-100 transition-all" />
                </motion.a>
              ))}
            </nav>

            {/* Mobile menu bottom badges & social assets */}
            <div className="max-w-md mx-auto w-full space-y-6 border-t border-stone-200 pt-6">
              <div className="flex justify-between items-center text-xs font-mono text-stone-500">
                <span>E-POSTA</span>
                <span className="text-stone-950 font-medium">hello@beg-media.com</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 py-3 rounded-xl bg-indigo-600 text-white font-medium text-xs font-mono text-center shadow-lg shadow-indigo-500/20"
                >
                  Proje Başlat
                </a>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 text-xs font-mono"
                >
                  Kapat
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CORE WEB SECTIONS STACK */}
      <main className="w-full">
        {/* 1. Hero Section */}
        <InteractiveHero />

        {/* 2. Trust partner logos */}
        <TrustLogos />

        {/* 3. Interactive core services */}
        <ValueProps />

        {/* 4. Core company story & metrics */}
        <AboutUs />

        {/* 5. Client feedback reviews slider */}
        <Testimonials />

        {/* 6. Form interactive pricing estimate */}
        <ContactForm />

        {/* 7. Quick high-conversion action banner */}
        <QuickCTA />
      </main>

      {/* GLOBAL FOOTER */}
      <footer className="py-16 relative w-full border-t border-stone-200 bg-[#F4EFEA] px-4 md:px-8 text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Logo and brief description (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Layers className="w-4.5 h-4.5" />
              </div>
              <span className="text-base font-display font-extrabold tracking-wider text-stone-900 uppercase">
                BEG-Media
              </span>
            </div>
            <p className="text-xs text-stone-600 font-sans leading-relaxed max-w-sm">
              Tasarım, kimlik ve arama motoru görünürlüğü ile işletmenizin geleceğini inşa eden butik dijital ajans. 
              Sınırları zorlayan etkileşim standartları ile yanınızdayız.
            </p>
            <div className="pt-2 text-[10px] font-mono text-stone-500">
              © {new Date().getFullYear()} BEG-Media Co. Tüm hakları saklıdır.
            </div>
          </div>

          {/* Links col 1 (3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-stone-700 uppercase tracking-widest">Hizmet Alanları</h4>
            <ul className="space-y-2.5 text-xs text-stone-600 font-sans">
              <li><a href="#services" className="hover:text-indigo-600 transition-colors">Ultra Hızlı Web Siteleri</a></li>
              <li><a href="#services" className="hover:text-indigo-600 transition-colors">Markalama & Logo Kılavuzları</a></li>
              <li><a href="#services" className="hover:text-indigo-600 transition-colors">Arama Motoru Optimizasyonu</a></li>
              <li><a href="#hero" className="hover:text-indigo-600 transition-colors">3D Sahne & Model Entegrasyonları</a></li>
            </ul>
          </div>

          {/* Links col 2 (3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-stone-700 uppercase tracking-widest">Kurumsal</h4>
            <ul className="space-y-2.5 text-xs text-stone-600 font-sans">
              <li><a href="#about" className="hover:text-indigo-600 transition-colors">Hakkımızda</a></li>
              <li><a href="#testimonials" className="hover:text-indigo-600 transition-colors">Başarı Öyküleri</a></li>
              <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Hızlı Teklif Formu</a></li>
              <li><a href="#about" className="hover:text-indigo-600 transition-colors">Ekibimiz & Kariyer</a></li>
            </ul>
          </div>

          {/* Systems status & details (2 columns) */}
          <div className="md:col-span-2 space-y-4 text-xs font-mono">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-widest">Sistem Durumu</h4>
            <div className="p-3.5 rounded-xl bg-stone-100/60 border border-stone-200/80 space-y-2 text-[10px] text-stone-500">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-stone-700">Tüm Servisler Aktif</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-stone-400" />
                <span className="text-stone-700">SSL Güvenliği Aktif</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-stone-400" />
                <span className="text-stone-700">Vite v6 & React 19</span>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
