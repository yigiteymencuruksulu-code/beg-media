import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, Quote, Plus, Check, StarOff, Filter, User } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data';

export default function Testimonials() {
  const [list, setList] = useState<Testimonial[]>(TESTIMONIALS);
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'branding' | 'seo'>('all');
  const [showAddForm, setShowAddForm] = useState(false);
  
  // New Testimonial Form State
  const [newName, setNewName] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newCategory, setNewCategory] = useState<'web' | 'branding' | 'seo'>('web');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newQuote) return;

    const newFeedback: Testimonial = {
      id: `custom-${Date.now()}`,
      name: newName,
      company: newCompany || 'Serbest Girişimci',
      role: newRole || 'Yönetici',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150`, // default premium avatar
      quote: newQuote,
      rating: newRating,
      category: newCategory
    };

    setList(prev => [newFeedback, ...prev]);
    setFormSubmitted(true);

    // Reset fields after delay
    setTimeout(() => {
      setNewName('');
      setNewCompany('');
      setNewRole('');
      setNewQuote('');
      setNewRating(5);
      setShowAddForm(false);
      setFormSubmitted(false);
    }, 2000);
  };

  const filteredList = activeFilter === 'all' 
    ? list 
    : list.filter(item => item.category === activeFilter);

  return (
    <section id="testimonials" className="py-24 relative w-full px-4 md:px-8 border-t border-stone-200 bg-[#F4EFEA]/20">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/60 border border-stone-300 text-stone-700 text-xs font-mono">
              <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
              <span>Müşteri Yorumları</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-stone-900">
              Birlikte Başardık.
            </h2>
            <p className="text-stone-600 text-sm md:text-base font-sans font-light max-w-xl">
              İş ortaklarımızın dijital başarı hikayelerini ve BEG-Media ile geçirdikleri dönüşüm süreçlerini kendi kelimeleriyle okuyun.
            </p>
          </div>

          {/* Testimonial Filter Buttons + Add Feedback Button */}
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex bg-stone-100 border border-stone-200 p-1 rounded-xl text-xs font-mono">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${activeFilter === 'all' ? 'bg-indigo-600 text-white' : 'text-stone-600 hover:text-stone-900'}`}
                id="filter-testimonial-all"
              >
                Tümü
              </button>
              <button 
                onClick={() => setActiveFilter('web')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${activeFilter === 'web' ? 'bg-indigo-600 text-white' : 'text-stone-600 hover:text-stone-900'}`}
                id="filter-testimonial-web"
              >
                Web
              </button>
              <button 
                onClick={() => setActiveFilter('branding')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${activeFilter === 'branding' ? 'bg-indigo-600 text-white' : 'text-stone-600 hover:text-stone-900'}`}
                id="filter-testimonial-branding"
              >
                Marka
              </button>
              <button 
                onClick={() => setActiveFilter('seo')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${activeFilter === 'seo' ? 'bg-indigo-600 text-white' : 'text-stone-600 hover:text-stone-900'}`}
                id="filter-testimonial-seo"
              >
                SEO
              </button>
            </div>

            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2.5 rounded-xl bg-stone-100 border border-stone-200 hover:border-stone-300 text-stone-700 hover:text-stone-900 text-xs font-mono flex items-center gap-2 transition-all cursor-pointer"
              id="btn-toggle-add-testimonial"
            >
              <Plus className="w-4 h-4 text-indigo-600" />
              <span>Yorum Yaz</span>
            </button>
          </div>
        </div>

        {/* Live Add Feedback Panel */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <form 
                onSubmit={handleAddTestimonial}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200 max-w-3xl mx-auto space-y-4 shadow-md"
              >
                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider">Referans Giriş Formu</span>
                  <span className="text-[10px] text-stone-500 font-mono">Gerçek Zamanlı Geri Bildirim Entegrasyonu</span>
                </div>

                {formSubmitted ? (
                  <motion.div 
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="py-8 flex flex-col items-center justify-center space-y-3 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-600">
                      <Check className="w-6 h-6 animate-bounce" />
                    </div>
                    <p className="text-sm font-semibold text-stone-850">Geri bildiriminiz için teşekkür ederiz!</p>
                    <p className="text-xs text-stone-500">Yorumunuz listeye eklenmiştir.</p>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-mono text-stone-600 mb-1">Adınız Soyadınız *</label>
                        <input 
                          type="text"
                          required
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          placeholder="Örn: Yiğit Eymen Çürüksulu"
                          className="w-full bg-white border border-stone-200 rounded px-3 py-2 text-xs text-stone-900 outline-none focus:border-indigo-500"
                          id="input-feedback-name"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-mono text-stone-600 mb-1">Şirket Adı</label>
                          <input 
                            type="text"
                            value={newCompany}
                            onChange={(e) => setNewCompany(e.target.value)}
                            placeholder="Örn: BEG-Holding"
                            className="w-full bg-white border border-stone-200 rounded px-3 py-2 text-xs text-stone-900 outline-none focus:border-indigo-500"
                            id="input-feedback-company"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono text-stone-600 mb-1">Ünvan</label>
                          <input 
                            type="text"
                            value={newRole}
                            onChange={(e) => setNewRole(e.target.value)}
                            placeholder="Örn: CEO"
                            className="w-full bg-white border border-stone-200 rounded px-3 py-2 text-xs text-stone-900 outline-none focus:border-indigo-500"
                            id="input-feedback-role"
                          />
                        </div>
                      </div>

                      <div className="flex gap-4 items-center justify-between py-2 border-t border-stone-200">
                        <div>
                          <label className="block text-[11px] font-mono text-stone-600 mb-1">Puan</label>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setNewRating(star)}
                                className="text-amber-500 cursor-pointer hover:scale-110 transition-transform"
                                id={`btn-feedback-star-${star}`}
                              >
                                <Star className={`w-4 h-4 ${star <= newRating ? 'fill-current' : 'text-stone-300'}`} />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono text-stone-600 mb-1">Hizmet Türü</label>
                          <select 
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value as 'web' | 'branding' | 'seo')}
                            className="bg-white text-stone-800 text-xs font-mono rounded px-2.5 py-1.5 border border-stone-200 outline-none cursor-pointer"
                            id="select-feedback-category"
                          >
                            <option value="web">Web Tasarım</option>
                            <option value="branding">Markalama</option>
                            <option value="seo">SEO Hizmeti</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 flex flex-col justify-between">
                      <div className="flex-1">
                        <label className="block text-[11px] font-mono text-stone-600 mb-1">Görüşünüz *</label>
                        <textarea 
                          required
                          rows={4}
                          value={newQuote}
                          onChange={(e) => setNewQuote(e.target.value)}
                          placeholder="BEG-Media'dan aldığınız hizmet deneyimini buraya yazın..."
                          className="w-full h-[110px] bg-white border border-stone-200 rounded px-3 py-2 text-xs text-stone-900 outline-none focus:border-indigo-500 resize-none"
                          id="input-feedback-quote"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs font-mono transition-colors shadow-lg cursor-pointer"
                        id="btn-feedback-submit"
                      >
                        Yorumu Canlı Listeye Ekle
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredList.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl glass-panel relative flex flex-col justify-between space-y-6 hover:border-stone-300 transition-colors group cursor-pointer"
                id={`testimonial-card-${item.id}`}
              >
                {/* Accent strip on card header */}
                <div className={`absolute top-0 inset-x-0 h-0.5 rounded-t-2xl transition-opacity duration-300 opacity-60 group-hover:opacity-100 ${
                  item.category === 'web' ? 'bg-indigo-500' : item.category === 'branding' ? 'bg-pink-500' : 'bg-amber-500'
                }`} />

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star 
                          key={idx} 
                          className={`w-3.5 h-3.5 ${idx < item.rating ? 'fill-current' : 'text-stone-200'}`} 
                        />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-stone-300 group-hover:text-stone-400 transition-colors" />
                  </div>

                  <p className="text-stone-700 text-xs md:text-sm font-sans font-light leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-stone-200"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-stone-800">{item.name}</h4>
                    <p className="text-[10px] font-mono text-stone-500">
                      {item.role}, <span className="text-indigo-600">{item.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
