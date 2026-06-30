import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export default function QuickCTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    // Simulate API registration / submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="py-20 relative w-full px-4 md:px-8 bg-[#FAF8F5]">
      
      {/* Container holding the high contrast dark panel */}
      <div className="max-w-7xl mx-auto">
        
        <div className="w-full rounded-[2.5rem] bg-[#121110] border border-stone-800 p-8 md:p-14 relative overflow-hidden shadow-2xl">
          
          {/* Subtle cosmic mesh background effect */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            
            {/* Left Column: Heading and sub-message */}
            <div className="lg:col-span-7 space-y-4 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-stone-300 text-xs font-mono uppercase tracking-widest" id="cta-get-started-badge">
                <Sparkles className="w-3 h-3 text-[#E2F952]" />
                <span>BAŞLAYALIM</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight" id="cta-main-title">
                İlk projenizi hayata geçirmeye hazır mısınız?
              </h2>

              {/* Subtitle */}
              <p className="text-stone-400 text-sm md:text-base font-sans font-light max-w-xl leading-relaxed" id="cta-sub-description">
                Bilgilerinizi bırakın; uzman ekibimiz markanızı dijital dünyada zirveye taşımak ve ihtiyaçlarınızı projelendirmek için en kısa sürede sizinle iletişime geçsin.
              </p>

            </div>

            {/* Right Column: Dynamic Form panel matching the user design screenshot */}
            <div className="lg:col-span-5 bg-stone-950/40 border border-white/5 rounded-2xl p-6 md:p-8 relative">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E2F952]/10 border border-[#E2F952]/30 flex items-center justify-center text-[#E2F952] mb-1">
                      <CheckCircle className="w-6 h-6 animate-pulse" />
                    </div>
                    <h4 className="text-lg font-display font-bold text-white">Harika! Talebiniz Alındı</h4>
                    <p className="text-xs text-stone-400 max-w-xs leading-relaxed font-sans">
                      Sevgili <span className="font-semibold text-white">{name}</span>, bilgileriniz kaydedildi. Ekibimiz en geç 4 saat içerisinde <span className="text-indigo-400 font-mono">{email}</span> adresi üzerinden sizinle temasa geçecektir.
                    </p>
                    <button
                      onClick={() => {
                        setName('');
                        setEmail('');
                        setSubmitted(false);
                      }}
                      className="text-[10px] font-mono text-[#E2F952] hover:underline pt-2 cursor-pointer"
                      id="btn-cta-submit-again"
                    >
                      Yeni bir talep gönderin
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form-state"
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                    id="cta-form-element"
                  >
                    {/* Name input */}
                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono tracking-wider text-stone-400 uppercase font-semibold">
                        ADINIZ SOYADINIZ
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Adınızı ve soyadınızı girin"
                        className="w-full bg-[#1A1916]/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                        id="cta-input-name"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono tracking-wider text-stone-400 uppercase font-semibold">
                        E-POSTA ADRESİNİZ
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-[#1A1916]/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-stone-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
                        id="cta-input-email"
                      />
                    </div>

                    {/* Submit Button - styled precisely as lime yellow button */}
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 mt-2 rounded-xl bg-[#E2F952] hover:bg-[#d4ed3c] disabled:bg-stone-800 disabled:text-stone-600 text-black font-extrabold text-xs font-mono tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E2F952]/10 transition-colors duration-300"
                      id="btn-cta-submit"
                    >
                      <span>{isSubmitting ? 'GÖNDERİLİYOR...' : 'İLETİŞİME GEÇİN'}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
