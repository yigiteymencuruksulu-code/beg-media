import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Zap, Code2, Users, ArrowUpRight, ArrowRight, Shield } from 'lucide-react';

export default function AboutUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    { value: '4+', label: 'Yıllık Deneyim', desc: 'Sektör standartlarını belirleyen projeler' },
    { value: '99%', label: 'Hız Skoru', desc: 'Lighthouse standartlarında mükemmel performans' },
    { value: '15+', label: 'Marka Kimliği', desc: 'Sıfırdan tasarlanan ikonik marka kimlikleri' },
  ];

  const values = [
    {
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
      title: 'Yüksek Mühendislik',
      desc: 'Sadece tasarım değil, arkasındaki kodun hızı ve temizliği bizim için kutsaldır.'
    },
    {
      icon: <Zap className="w-5 h-5 text-pink-600" />,
      title: 'Kreatif Vizyon',
      desc: 'Rakiplerinizin yapmaya cesaret edemediği modern ve sıra dışı fikirleri hayata geçiriyoruz.'
    },
    {
      icon: <Users className="w-5 h-5 text-amber-600" />,
      title: 'İş Ortaklığı',
      desc: 'Müşterilerimizi geçici projeler değil, dijital dünyadaki uzun vadeli ortaklarımız olarak görürüz.'
    }
  ];

  return (
    <section id="about" className="py-24 relative w-full px-4 md:px-8 border-t border-stone-200 bg-[#FAF8F5]">
      
      {/* Decorative Lights */}
      <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-indigo-100/30 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Grid: Portrait & Badges (5 columns) */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[380px] aspect-[3/4] rounded-3xl bg-[#F4EFEA] border border-stone-200 p-4 relative group overflow-hidden"
          >
            {/* Inner background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1916]/70 via-transparent to-transparent z-10" />
            
            {/* The portrait image of the director in black turtleneck */}
            <img
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=600&auto=format&fit=crop"
              alt="Yiğit Eymen - Kurucu & Baş Tasarımcı"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* floating overlay info card */}
            <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-xl bg-white/95 border border-stone-200 shadow-lg space-y-1">
              <p className="text-[10px] font-mono text-indigo-600 uppercase tracking-widest">Kreatif Liderlik</p>
              <h4 className="text-sm font-semibold text-stone-900">Yiğit Eymen</h4>
              <p className="text-[10px] text-stone-600 font-sans">Kurucu & Baş Tasarımcı, BEG-Media</p>
            </div>

            {/* Top branding float tag */}
            <div className="absolute top-6 right-6 z-20 px-2.5 py-1 rounded bg-stone-100 border border-stone-200 text-[9px] font-mono text-stone-750">
              BEG-DESIGNLAB v1.0
            </div>
          </motion.div>
        </div>

        {/* Right Grid: Core Story & Values (7 columns) */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-10 text-left">
          
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/60 border border-stone-300 text-stone-700 text-xs font-mono">
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              <span>Biz Kimiz?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-stone-900">
              Geleceği Bugün, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600">
                Tasarım ile Şekillendiriyoruz.
              </span>
            </h2>
            <p className="text-stone-755 text-sm md:text-base font-sans font-light leading-relaxed">
              BEG-Media'ya hoş geldiniz - yaratıcılık ve dijital mühendisliğin kesiştiği nokta. Estetik, zamansız ve yüksek performanslı dijital deneyimler tasarlama konusunda tutkuluyuz. 
              Sıradan kuralları yıkıyor ve her markanın hak ettiği özgün görünürlüğe ulaşmasını sağlıyoruz.
            </p>
          </div>

          {/* Value cards stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="p-5 rounded-2xl bg-stone-100/50 border border-stone-200 hover:border-stone-300 hover:bg-white transition-all duration-300 cursor-pointer space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center border border-stone-200 shadow-sm">
                  {val.icon}
                </div>
                <h4 className="text-xs font-bold font-display text-stone-900">{val.title}</h4>
                <p className="text-[11px] text-stone-600 font-sans leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

          {/* Micro metrics numbers */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200">
            {stats.map((st, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-xl md:text-3xl font-display font-bold text-stone-900">{st.value}</p>
                <p className="text-xs font-semibold text-indigo-600 font-sans">{st.label}</p>
                <p className="text-[10px] text-stone-500 font-mono leading-normal">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
