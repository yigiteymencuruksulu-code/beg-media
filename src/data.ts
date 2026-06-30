export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  category: 'web' | 'branding' | 'seo';
}

export interface LogoItem {
  name: string;
  id: string;
  svgPath: string;
}

export const PARTNER_LOGOS: LogoItem[] = [
  { name: 'BAU-KONTAKT', id: 'bau-kontakt', svgPath: 'M3 12h18M12 3v18' },
  { name: 'TROCKENBERG', id: 'trockenberg', svgPath: 'M5 10l7-7 7 7v10H5V10z' },
  { name: 'KURZVIDEOFUNNEL', id: 'kurzvideo', svgPath: 'M8 5v14l11-7z' },
  { name: 'DREI MEDIA', id: 'drei', svgPath: 'M4 4h16v16H4V4z' },
  { name: 'SI SYSTEMS', id: 'si-systems', svgPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ahmet Yılmaz',
    role: 'CEO & Kurucu',
    company: 'Trockenberg Immobilien',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    quote: 'BEG-Media ile çalışmak markamızın çehresini tamamen değiştirdi. Yeni web sitemiz sadece harika görünmekle kalmıyor, aynı zamanda müşteri dönüşümlerimizi %40 oranında artırdı.',
    rating: 5,
    category: 'web',
  },
  {
    id: 't2',
    name: 'Elif Kaya',
    role: 'Pazarlama Direktörü',
    company: 'Kurzvideofunnel GmbH',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    quote: 'Marka kimliğimizi oluştururken BEG-Media ekibinin vizyonuna hayran kaldık. Bizi gerçekten anladılar ve modern, minimalist ve çarpıcı bir kurumsal kimlik sundular.',
    rating: 5,
    category: 'branding',
  },
  {
    id: 't3',
    name: 'Murat Arslan',
    role: 'E-Ticaret Yöneticisi',
    company: 'Drei Media Co.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    quote: 'SEO çalışması sonrasında hedef kelimelerimizde ilk sayfaya yükseldik. Organik trafiğimizdeki artış reklam bütçemizi optimize etmemizi sağladı. Profesyonel ve sonuç odaklı bir ekip!',
    rating: 5,
    category: 'seo',
  },
  {
    id: 't4',
    name: 'Selin Demir',
    role: 'Marka Sorumlusu',
    company: 'Bau-Kontakt',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    quote: 'Hem mobil uyumluluğu mükemmel olan bir site teslim aldık, hem de sürekli destek alabiliyoruz. Tasarımlarında sundukları ince detaylar gerçekten fark yaratıyor.',
    rating: 5,
    category: 'web',
  }
];

export const BRAND_PALETTES = [
  {
    name: 'Cosmic Obsidian (Varsayılan)',
    id: 'cosmic',
    colors: ['#0B0F19', '#1E293B', '#6366F1', '#D4AF37'],
    accent: '#6366F1',
    bg: 'bg-slate-950',
  },
  {
    name: 'Cyberpunk Neon',
    id: 'cyberpunk',
    colors: ['#0A0A16', '#121230', '#FF007F', '#00F0FF'],
    accent: '#FF007F',
    bg: 'bg-zinc-950',
  },
  {
    name: 'Sunset Minimal',
    id: 'sunset',
    colors: ['#120B0B', '#271515', '#F97316', '#FACC15'],
    accent: '#F97316',
    bg: 'bg-stone-950',
  },
  {
    name: 'Emerald Luxury',
    id: 'emerald',
    colors: ['#041510', '#092C20', '#10B981', '#F59E0B'],
    accent: '#10B981',
    bg: 'bg-emerald-950',
  }
];
