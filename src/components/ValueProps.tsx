import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, Tablet, Smartphone, Palette, Globe, 
  Search, TrendingUp, RefreshCw, Layout, Sliders, 
  Check, Sparkles, Eye, ArrowRight, Star
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { BRAND_PALETTES } from '../data';

type PropType = 'web' | 'branding' | 'seo';

export default function ValueProps() {
  const [activeTab, setActiveTab] = useState<PropType>('web');

  // 1. Web Resizer state
  const [viewportWidth, setViewportWidth] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [webTheme, setWebTheme] = useState<'slate' | 'neon' | 'sunset'>('slate');

  // 2. Branding state
  const [selectedPalette, setSelectedPalette] = useState(BRAND_PALETTES[0]);
  const [typoVibe, setTypoVibe] = useState<'modern' | 'tech' | 'luxury'>('modern');

  // 3. SEO state
  const [seoKeyword, setSeoKeyword] = useState('en-iyi-gayrimenkul');
  const [seoNiche, setSeoNiche] = useState('Gayrimenkul');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [seoProgress, setSeoProgress] = useState<string[]>([]);
  const [optimized, setOptimized] = useState(false);
  const [chartData, setChartData] = useState([
    { month: 'Oca', traffic: 320, rank: 48 },
    { month: 'Şub', traffic: 410, rank: 42 },
    { month: 'Mar', traffic: 390, rank: 45 },
    { month: 'Nis', traffic: 580, rank: 31 },
    { month: 'May', traffic: 1200, rank: 18 },
    { month: 'Haz', traffic: 1800, rank: 12 },
  ]);

  const runSeoOptimization = () => {
    if (isOptimizing) return;
    setIsOptimizing(true);
    setOptimized(false);
    setSeoProgress([]);

    const steps = [
      'Site haritası taranıyor ve optimize ediliyor... ⚙️',
      'Meta etiketleri ve yapılandırılmış veri şemaları (schema) ekleniyor... ⚡',
      'Görseller WebP formatına sıkıştırılıyor ve tembel yükleme (lazy loading) etkinleştiriliyor... 🖼️',
      'Sayfa hızı (Lighthouse) puanı %99 seviyesine optimize ediliyor... 🏎️',
      'Backlink ağları taranıyor ve Google botları çağrılıyor... 🤖',
      'Optimizasyon Tamamlandı! İlk Kelimede #1 Sıradasınız! 🎉'
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setSeoProgress(prev => [...prev, step]);
        if (index === steps.length - 1) {
          setIsOptimizing(false);
          setOptimized(true);
          // Boost chart data to high numbers
          setChartData([
            { month: 'Oca', traffic: 320, rank: 48 },
            { month: 'Şub', traffic: 410, rank: 42 },
            { month: 'Mar', traffic: 390, rank: 45 },
            { month: 'Nis', traffic: 580, rank: 31 },
            { month: 'May', traffic: 1200, rank: 18 },
            { month: 'Haz', traffic: 14800, rank: 1 },
          ]);
        }
      }, (index + 1) * 1100);
    });
  };

  const getViewportClass = () => {
    switch (viewportWidth) {
      case 'mobile': return 'max-w-[340px]';
      case 'tablet': return 'max-w-[600px]';
      default: return 'max-w-full';
    }
  };

  const getWebThemeBg = () => {
    switch (webTheme) {
      case 'neon': return 'from-pink-950/20 via-purple-950/30 to-slate-950 border-purple-500/20';
      case 'sunset': return 'from-orange-950/20 via-stone-900 to-slate-950 border-orange-500/20';
      default: return 'from-slate-950 via-slate-900 to-slate-950 border-slate-800';
    }
  };

  const getTypoFontClass = () => {
    switch (typoVibe) {
      case 'tech': return 'font-mono tracking-wider';
      case 'luxury': return 'font-serif tracking-tight';
      default: return 'font-sans font-bold';
    }
  };

  return (
    <section id="services" className="py-24 relative w-full px-4 md:px-8 bg-[#F4EFEA]/30 border-y border-stone-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/60 border border-stone-300 text-stone-700 text-xs font-mono">
            <Sparkles className="w-3 h-3 text-indigo-600" />
            <span>Sunduğumuz Hizmetler</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-stone-900">
            Tasarım, Kimlik, Görünürlük. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600">
              Etkileşimli Deneyimleyin.
            </span>
          </h2>
          <p className="text-stone-600 text-sm md:text-base font-sans font-light">
            Sadece ne yaptığımızı anlatmıyoruz; aşağıdaki sekmelere tıklayarak dijital laboratuvarımızda tasarımlarımızı, marka kartlarımızı ve SEO motorumuzu canlı simüle edebilirsiniz.
          </p>
        </div>

        {/* Master Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-2xl mx-auto p-1.5 rounded-2xl bg-stone-100 border border-stone-200">
          <button
            onClick={() => setActiveTab('web')}
            className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-xs md:text-sm transition-all duration-300 cursor-pointer ${activeTab === 'web' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/50'}`}
            id="tab-service-web"
          >
            <Laptop className="w-4 h-4" />
            <span>Web Tasarım</span>
          </button>
          
          <button
            onClick={() => setActiveTab('branding')}
            className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-xs md:text-sm transition-all duration-300 cursor-pointer ${activeTab === 'branding' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/50'}`}
            id="tab-service-branding"
          >
            <Palette className="w-4 h-4" />
            <span>Marka Kimliği</span>
          </button>

          <button
            onClick={() => setActiveTab('seo')}
            className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-xs md:text-sm transition-all duration-300 cursor-pointer ${activeTab === 'seo' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/50'}`}
            id="tab-service-seo"
          >
            <Globe className="w-4 h-4" />
            <span>SEO Motoru</span>
          </button>
        </div>

        {/* Dynamic Interactive Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[500px]">
          
          {/* Left Description Panel (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl glass-panel relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent blur-xl pointer-events-none" />
            
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {activeTab === 'web' && (
                  <motion.div
                    key="web-desc"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    className="space-y-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600">
                      <Layout className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-stone-900">Mobil Uyumlu & Ultra Hızlı Web Tasarım</h3>
                    <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                      Statik ve sıradan siteleri geride bırakın. BEG-Media ile her ekran boyutuna ve mobil cihaza kusursuzca uyum sağlayan akıcı tasarımlara sahip olun.
                    </p>
                    <ul className="space-y-2 text-xs text-stone-700 font-mono">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> WebGL & Akıcı Framer Motion Animasyonları
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> %100 Duyarlı (Fluid Grid) Düzenleri
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> En Yüksek UI/UX Dönüşüm Standartları
                      </li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'branding' && (
                  <motion.div
                    key="branding-desc"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    className="space-y-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-600">
                      <Palette className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-stone-900">Benzersiz Marka Kimliği & Tipografi</h3>
                    <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                      Kalıcı bir iz bırakmak, doğru renk paletleri ve çarpıcı tipografilerin seçimiyle başlar. Markanızın sesini ve ruhunu estetik kılavuzlarla şekillendiriyoruz.
                    </p>
                    <ul className="space-y-2 text-xs text-stone-700 font-mono">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Kurumsal Kimlik Kılavuzu
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Özel Tipografi & Font Eşleştirmeleri
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Sosyal Medya Şablonları & Tasarımlar
                      </li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'seo' && (
                  <motion.div
                    key="seo-desc"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    className="space-y-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-stone-900">Google Görünürlük & SEO Mühendisliği</h3>
                    <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                      Sadece güzel görünmek yetmez. Google aramalarında en üst sıralara yükselerek organik olarak binlerce nitelikli müşteriye ücretsiz ulaşın.
                    </p>
                    <ul className="space-y-2 text-xs text-stone-700 font-mono">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Yapısal SEO Şeması & SEO-Dostu URL'ler
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Core Web Vitals Hız Optimizasyonu
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Rakip Analizi & Kelime Sıralama Takibi
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-8 border-t border-stone-200 mt-6 lg:mt-0 flex items-center justify-between text-xs font-mono text-stone-500">
              <span>Hemen Dene →</span>
              <span className="text-indigo-600 font-bold uppercase tracking-widest">
                {activeTab} modülü aktif
              </span>
            </div>
          </div>

          {/* Right Live Interactive Playground Screen (8 Columns) */}
          <div className="lg:col-span-8 rounded-3xl glass-panel p-6 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-300" />
            
            <AnimatePresence mode="wait">
              
              {/* PLAYGROUND 1: WEB RESIZER */}
              {activeTab === 'web' && (
                <motion.div
                  key="play-web"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex-1 flex flex-col justify-between space-y-6"
                >
                  {/* Top Resizer Controls Header */}
                  <div className="flex flex-wrap gap-3 items-center justify-between pb-4 border-b border-slate-900">
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                      Çözünürlük Simülatörü
                    </span>

                    {/* Viewport Width Buttons */}
                    <div className="flex rounded-lg bg-slate-950 p-1 border border-slate-800">
                      <button
                        onClick={() => setViewportWidth('mobile')}
                        className={`p-2 rounded-md transition-all cursor-pointer ${viewportWidth === 'mobile' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                        title="Mobil Görünüm (340px)"
                        id="resizer-btn-mobile"
                      >
                        <Smartphone className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewportWidth('tablet')}
                        className={`p-2 rounded-md transition-all cursor-pointer ${viewportWidth === 'tablet' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                        title="Tablet Görünüm (600px)"
                        id="resizer-btn-tablet"
                      >
                        <Tablet className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewportWidth('desktop')}
                        className={`p-2 rounded-md transition-all cursor-pointer ${viewportWidth === 'desktop' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                        title="Masaüstü Görünüm"
                        id="resizer-btn-desktop"
                      >
                        <Laptop className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Theme Buttons */}
                    <div className="flex gap-2 text-[10px] font-mono">
                      <button 
                        onClick={() => setWebTheme('slate')}
                        className={`px-2 py-1 rounded border transition-colors cursor-pointer ${webTheme === 'slate' ? 'bg-slate-800 text-white border-slate-600' : 'bg-slate-950 text-slate-500 border-slate-900'}`}
                        id="theme-btn-slate"
                      >
                        Kozmik
                      </button>
                      <button 
                        onClick={() => setWebTheme('neon')}
                        className={`px-2 py-1 rounded border transition-colors cursor-pointer ${webTheme === 'neon' ? 'bg-purple-950/40 text-purple-300 border-purple-800/80' : 'bg-slate-950 text-slate-500 border-slate-900'}`}
                        id="theme-btn-neon"
                      >
                        Neon
                      </button>
                      <button 
                        onClick={() => setWebTheme('sunset')}
                        className={`px-2 py-1 rounded border transition-colors cursor-pointer ${webTheme === 'sunset' ? 'bg-orange-950/40 text-orange-300 border-orange-800/80' : 'bg-slate-950 text-slate-500 border-slate-900'}`}
                        id="theme-btn-sunset"
                      >
                        Günbatımı
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Scaled Viewport Sandbox */}
                  <div className="flex-1 flex items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-900/40 min-h-[280px]">
                    <motion.div
                      layout
                      className={`w-full ${getViewportClass()} p-4 rounded-xl border transition-colors duration-700 bg-gradient-to-b ${getWebThemeBg()} shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-4`}
                    >
                      {/* Mock Web Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/5">
                        <span className="text-[9px] font-bold tracking-wider text-white">BEG-Media</span>
                        <div className="flex gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        </div>
                      </div>

                      {/* Mock Layout grid that stacks based on screen setting */}
                      <div className={`grid gap-3 ${viewportWidth === 'mobile' ? 'grid-cols-1' : 'grid-cols-12'}`}>
                        {/* Hero Text column */}
                        <div className={`${viewportWidth === 'mobile' ? 'col-span-1' : 'col-span-7'} space-y-2`}>
                          <div className="h-3 w-16 bg-indigo-500/30 rounded" />
                          <div className="h-5 w-4/5 bg-white/95 rounded" />
                          <div className="h-5 w-2/3 bg-white/90 rounded" />
                          <div className="space-y-1 pt-1">
                            <div className="h-2 w-full bg-white/30 rounded" />
                            <div className="h-2 w-5/6 bg-white/30 rounded" />
                          </div>
                        </div>

                        {/* Interactive dynamic mockup card */}
                        <div className={`${viewportWidth === 'mobile' ? 'col-span-1' : 'col-span-5'} p-3 rounded-lg bg-white/10 border border-white/20 flex flex-col justify-between min-h-[100px]`}>
                          <div className="flex justify-between items-start">
                            <span className="text-[7px] font-mono text-slate-200">AKTİF PANEL</span>
                            <Eye className="w-3 h-3 text-indigo-300 animate-pulse" />
                          </div>
                          <div>
                            <div className="h-1.5 w-12 bg-indigo-500/40 rounded mb-1" />
                            <div className="h-3 w-18 bg-white/80 rounded" />
                          </div>
                        </div>
                      </div>

                      {/* Viewport Width & Tech Badge at Bottom */}
                      <div className="flex items-center justify-between text-[8px] font-mono text-slate-300 pt-2 border-t border-white/5">
                        <span>Genişlik: {viewportWidth === 'mobile' ? '340px (Mobil)' : viewportWidth === 'tablet' ? '600px (Tablet)' : '100% (Masaüstü)'}</span>
                        <span className="text-emerald-400 font-semibold">Duyarlı Düzen Sınıfı: {viewportWidth === 'mobile' ? 'sm:grid-cols-1' : 'md:grid-cols-12'}</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* PLAYGROUND 2: BRANDING */}
              {activeTab === 'branding' && (
                <motion.div
                  key="play-branding"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex-1 flex flex-col justify-between space-y-6"
                >
                  {/* Branding Configurator Controls */}
                  <div className="flex flex-wrap gap-4 items-center justify-between pb-4 border-b border-stone-200">
                    <span className="text-xs text-stone-600 font-mono flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-pink-500" />
                      Kurumsal Kimlik Laboratuvarı
                    </span>

                    {/* Typography select */}
                    <div className="flex rounded-lg bg-stone-100 p-1 border border-stone-200 text-[10px]">
                      <button
                        onClick={() => setTypoVibe('modern')}
                        className={`px-2 py-1 rounded transition-colors cursor-pointer ${typoVibe === 'modern' ? 'bg-indigo-600 text-white' : 'text-stone-600 hover:text-stone-900'}`}
                        id="typo-btn-modern"
                      >
                        Modern Sans
                      </button>
                      <button
                        onClick={() => setTypoVibe('tech')}
                        className={`px-2 py-1 rounded transition-colors cursor-pointer ${typoVibe === 'tech' ? 'bg-indigo-600 text-white' : 'text-stone-600 hover:text-stone-900'}`}
                        id="typo-btn-tech"
                      >
                        Monospace
                      </button>
                      <button
                        onClick={() => setTypoVibe('luxury')}
                        className={`px-2 py-1 rounded transition-colors cursor-pointer ${typoVibe === 'luxury' ? 'bg-indigo-600 text-white' : 'text-stone-600 hover:text-stone-900'}`}
                        id="typo-btn-luxury"
                      >
                        Luxury Serif
                      </button>
                    </div>
                  </div>

                  {/* Brand Color Palettes Selector */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {BRAND_PALETTES.map(palette => (
                      <button
                        key={palette.id}
                        onClick={() => setSelectedPalette(palette)}
                        className={`p-3 rounded-xl border text-left space-y-2 transition-all cursor-pointer ${selectedPalette.id === palette.id ? 'bg-stone-200/50 border-indigo-500' : 'bg-stone-100 border-stone-200 hover:border-stone-300'}`}
                        id={`palette-select-${palette.id}`}
                      >
                        <p className="text-[10px] text-stone-700 font-medium truncate">{palette.name}</p>
                        <div className="flex gap-1">
                          {palette.colors.map((col, idx) => (
                            <span 
                              key={idx} 
                              className="w-3.5 h-3.5 rounded-full border border-stone-200" 
                              style={{ backgroundColor: col }} 
                            />
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Card & Mobile Mockup Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    
                    {/* Mock Physical Business Card */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#F4EFEA] border border-stone-200 relative overflow-hidden flex flex-col justify-between aspect-[1.7/1] shadow-xl group">
                      {/* Background branding blobs styled with selected palette colors */}
                      <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 transition-colors duration-700"
                        style={{ backgroundColor: selectedPalette.colors[2] }}
                      />
                      <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full blur-2xl opacity-15 transition-colors duration-700"
                        style={{ backgroundColor: selectedPalette.colors[3] }}
                      />

                      <div className="flex justify-between items-start z-10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full transition-colors duration-700" style={{ backgroundColor: selectedPalette.accent }} />
                          <span className={`text-[11px] uppercase tracking-widest text-stone-900 transition-all ${getTypoFontClass()}`}>
                            BEG-Media
                          </span>
                        </div>
                        <span className="text-[8px] font-mono text-stone-500">KARTVİZİT MOCKUP</span>
                      </div>

                      <div className="space-y-1 z-10">
                        <p className={`text-stone-900 text-sm tracking-wide ${getTypoFontClass()}`}>Ahmet Yılmaz</p>
                        <p className="text-[9px] font-mono text-stone-600">Creative & Technology Director</p>
                      </div>

                      <div className="flex justify-between items-center text-[7px] font-mono text-stone-500 border-t border-stone-200 pt-2 z-10">
                        <span>ahmet@beg-media.com</span>
                        <span>www.beg-media.com</span>
                      </div>
                    </div>

                    {/* Mock Smartphone screen preview */}
                    <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 relative overflow-hidden flex flex-col justify-between aspect-[1.7/1] shadow-xl">
                      {/* Screen background glowing */}
                      <div className="absolute inset-0 bg-[#FAF8F5] flex flex-col justify-between p-3">
                        <div className="flex justify-between items-center pb-1.5 border-b border-stone-200">
                          <span className="text-[7px] font-bold text-stone-800 uppercase tracking-wider">BEG-App</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        
                        <div className="space-y-1 text-center py-2">
                          <p className={`text-[10px] text-stone-800 transition-all duration-700 ${getTypoFontClass()}`} style={{ color: selectedPalette.accent }}>
                            Yeni Nesil Kimlik
                          </p>
                          <p className="text-[8px] text-stone-600 max-w-[150px] mx-auto">
                            Uyum ve estetiğin mükemmel dengesi.
                          </p>
                        </div>

                        {/* Interactive Pill button styled with brand accent */}
                        <motion.button 
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-1.5 rounded-lg text-[8px] font-bold font-mono transition-colors duration-700 text-white shadow-md shadow-stone-200"
                          style={{ backgroundColor: selectedPalette.colors[3] || selectedPalette.accent }}
                          id="btn-branding-preview"
                        >
                          DENEYİME BAŞLA
                        </motion.button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* PLAYGROUND 3: SEO ENGINE */}
              {activeTab === 'seo' && (
                <motion.div
                  key="play-seo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex-1 flex flex-col justify-between space-y-6"
                >
                  {/* SEO Controls and Inputs */}
                  <div className="flex flex-wrap gap-4 items-center justify-between pb-4 border-b border-stone-200">
                    <span className="text-xs text-stone-600 font-mono flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-amber-600" />
                      Google Algoritma Hızlandırıcı
                    </span>

                    {/* Quick Niche Select */}
                    <div className="flex gap-2">
                      <select 
                        value={seoNiche}
                        onChange={(e) => setSeoNiche(e.target.value)}
                        className="bg-stone-100 text-stone-800 text-[10px] font-mono rounded px-2 py-1 border border-stone-200 outline-none cursor-pointer font-semibold"
                        id="seo-niche-select"
                      >
                        <option value="Gayrimenkul">Gayrimenkul</option>
                        <option value="E-Ticaret">E-Ticaret</option>
                        <option value="SaaS / Startup">SaaS / Startup</option>
                        <option value="Yerel Ajans">Yerel Hizmetler</option>
                      </select>
                    </div>
                  </div>

                  {/* Simulator Screen Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Simulator Inputs & Running Console */}
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <label className="block text-[10px] font-mono text-stone-600 font-semibold">Anahtar Kelime Örneği:</label>
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            value={seoKeyword}
                            onChange={(e) => setSeoKeyword(e.target.value)}
                            placeholder="Örn: en-iyi-gayrimenkul"
                            className="flex-1 bg-white border border-stone-200 rounded px-2.5 py-1.5 text-xs text-stone-900 font-mono focus:border-indigo-500 outline-none"
                            id="seo-keyword-input"
                          />
                          <button
                            onClick={runSeoOptimization}
                            disabled={isOptimizing}
                            className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all flex items-center gap-1 text-white cursor-pointer ${isOptimizing ? 'bg-stone-200 text-stone-400 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-500 shadow-md'}`}
                            id="btn-seo-optimize"
                          >
                            <RefreshCw className={`w-3 h-3 ${isOptimizing ? 'animate-spin' : ''}`} />
                            <span>{isOptimizing ? 'Yapılıyor' : 'Optimize Et'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Crawler Log Terminal */}
                      <div className="bg-stone-100/80 border border-stone-200 rounded-lg p-3 min-h-[140px] font-mono text-[9px] text-stone-800 space-y-1.5 overflow-y-auto no-scrollbar max-h-[140px]">
                        <p className="text-stone-500">// BÖLGESEL SEO LOG KONSOLU</p>
                        {seoProgress.length === 0 && (
                          <p className="text-stone-600 italic">Optimizasyonu başlatmak için yukarıdaki sarı butona tıklayın.</p>
                        )}
                        {seoProgress.map((prog, idx) => (
                          <motion.p 
                            key={idx}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={idx === seoProgress.length - 1 ? 'text-amber-800 font-bold text-[10px]' : 'text-stone-700'}
                          >
                            {prog}
                          </motion.p>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Google Rank Results & Recharts traffic display */}
                    <div className="bg-[#F4EFEA]/40 border border-stone-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
                      
                      {/* Search result mock card */}
                      <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 space-y-1">
                        <div className="flex justify-between text-[7px] font-mono text-stone-500">
                          <span>google.com/search?q={seoKeyword}</span>
                          <span>Sayfa 1 / Sıra 1</span>
                        </div>
                        <h4 className="text-xs font-sans font-semibold text-indigo-600 hover:underline cursor-pointer flex items-center gap-1">
                          BEG-Media ile Yükselen Markanız
                          {optimized && <Check className="w-3 h-3 text-emerald-600 font-bold" />}
                        </h4>
                        <p className="text-[9px] text-stone-600 leading-normal">
                          {seoNiche} aramalarında 1. sırada listelenen sitemizle organik kitleyi yakalayın. %99 hız skoru ve kusursuz mobil deneyim sunar.
                        </p>
                        <div className="flex items-center gap-1.5 pt-1 text-[8px] font-mono text-amber-600">
                          <div className="flex">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <Star className="w-2.5 h-2.5 fill-current" />
                          </div>
                          <span className="text-stone-500">Derecelendirme: 5,0 - 45 oy</span>
                        </div>
                      </div>

                      {/* Recharts Live Area Traffic Chart */}
                      <div className="h-[120px] w-full pt-2">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                            <defs>
                              <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.4}/>
                                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <XAxis dataKey="month" tick={{ fontSize: 8, fill: '#78716C' }} stroke="#E7E5E4" />
                            <YAxis tick={{ fontSize: 8, fill: '#78716C' }} stroke="#E7E5E4" />
                            <Tooltip 
                              contentStyle={{ backgroundColor: '#FAF8F5', borderColor: '#E7E5E4', fontSize: 10, fontFamily: 'monospace' }}
                              labelStyle={{ color: '#1A1916' }}
                            />
                            <Area type="monotone" dataKey="traffic" name="Aylık Trafik" stroke="#4F46E5" strokeWidth={1.5} fillOpacity={1} fill="url(#colorTraffic)" />
                          </AreaChart>
                        </ResponsiveContainer>
                        <div className="text-center text-[8px] font-mono text-stone-500 mt-1">
                          Aylık Organik Trafik Artış Simülasyonu (Ziyaretçi/Ay)
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
