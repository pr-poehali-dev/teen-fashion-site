import ProductCard from "@/components/ProductCard";
import { PRODUCTS, BLOG_POSTS } from "@/data/products";
import Icon from "@/components/ui/icon";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const MARQUEE_ITEMS = ["NEW ARRIVALS", "VOLT STORE", "ТРЕНДОВЫЕ НОВИНКИ", "FREE SHIPPING 3000+", "STREETWEAR", "CLUB STYLE", "VOLT STORE"];

export default function HomePage({ onNavigate }: HomePageProps) {
  const newProducts = PRODUCTS.filter(p => p.isNew).slice(0, 4);
  const trendProducts = PRODUCTS.filter(p => p.isTrend).slice(0, 4);

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center diagonal-cut overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1a0510 50%, #0A0A0A 100%)" }}>
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ background: "#FF2D78" }} />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-15"
            style={{ background: "#FFE600" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
          {/* Text */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "#FF2D78" }} />
              <span className="font-display text-xs tracking-[0.3em] text-white/50 uppercase">Новая коллекция 2025</span>
            </div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
              ЖИВИ<br />
              <span className="neon-text-pink">НА</span><br />
              МАКСИМУМЕ
            </h1>
            <p className="font-body text-white/50 text-lg mb-8 max-w-md leading-relaxed">
              Одежда для тех, кто не боится выделяться. Яркие принты, смелые силуэты, актуальные тренды — всё в одном месте.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => onNavigate("catalog")}
                className="btn-neon px-8 py-3 text-sm"
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => onNavigate("new")}
                className="btn-outline-neon px-8 py-3 text-sm"
              >
                Новинки
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <div className="font-display text-3xl font-bold neon-text-yellow">500+</div>
                <div className="text-white/40 text-xs font-body mt-1">товаров</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold neon-text-yellow">12K</div>
                <div className="text-white/40 text-xs font-body mt-1">покупателей</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold neon-text-yellow">4.9★</div>
                <div className="text-white/40 text-xs font-body mt-1">рейтинг</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-sm overflow-hidden aspect-[4/5]"
              style={{ border: "1px solid rgba(255,45,120,0.3)" }}>
              <img
                src="https://cdn.poehali.dev/projects/85d4ff09-27b6-419c-9c9d-532667dce132/files/66b994af-50e0-4973-9ed7-6c01c4f252f6.jpg"
                alt="VOLT Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }} />
              {/* Floating tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md rounded-sm"
                style={{ background: "rgba(10,10,10,0.7)", border: "1px solid rgba(255,45,120,0.3)" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-xs text-white/40 uppercase tracking-widest mb-1">Новинка сезона</div>
                    <div className="font-display text-sm font-semibold text-white">Oversized Hoodie VOLT</div>
                  </div>
                  <div className="font-display text-lg font-bold neon-text-pink">4 990 ₽</div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-40"
              style={{ background: "#FF2D78" }} />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full blur-2xl opacity-30"
              style={{ background: "#FFE600" }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="font-display text-xs tracking-widest uppercase">Скролл</span>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-4 overflow-hidden border-y border-white/10"
        style={{ background: "#FF2D78" }}>
        <div className="flex whitespace-nowrap marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="font-display text-sm font-bold tracking-widest text-white px-8 uppercase">
              {item} <span className="opacity-60 mx-2">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div className="relative">
            <div className="section-number">01</div>
            <span className="font-display text-xs tracking-[0.3em] text-white/40 uppercase block mb-2">Только что</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              НОВИНКИ
            </h2>
          </div>
          <button
            onClick={() => onNavigate("new")}
            className="hidden sm:flex items-center gap-2 font-display text-xs tracking-widest text-[#FF2D78] uppercase hover:gap-3 transition-all"
          >
            Все новинки <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {newProducts.map((product, i) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* TRENDS BANNER */}
      <section className="relative py-24 overflow-hidden diagonal-cut-reverse"
        style={{ background: "linear-gradient(135deg, #0d0005 0%, #150015 50%, #000d15 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full blur-[150px] opacity-15"
            style={{ background: "#00D4FF" }} />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-20"
            style={{ background: "#FF2D78" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12" style={{ background: "#00D4FF" }} />
                <span className="font-display text-xs tracking-[0.3em] text-white/50 uppercase">Сезон 2025</span>
              </div>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
                АКТУАЛЬНЫЕ<br />
                <span className="neon-text-blue">ТРЕНДЫ</span>
              </h2>
              <p className="font-body text-white/50 text-base mb-8 max-w-md leading-relaxed">
                Y2K-эстетика, неоновые акценты, oversized-силуэты и металлические текстуры — VOLT держит руку на пульсе моды.
              </p>
              <button
                onClick={() => onNavigate("trends")}
                className="flex items-center gap-3 font-display text-sm tracking-widest uppercase text-white px-6 py-3 border transition-all hover:gap-4"
                style={{ borderColor: "#00D4FF", color: "#00D4FF" }}>
                Смотреть тренды <Icon name="ArrowRight" size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {trendProducts.slice(0, 2).map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div className="relative">
            <div className="section-number">03</div>
            <span className="font-display text-xs tracking-[0.3em] text-white/40 uppercase block mb-2">Наш блог</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              ЧИТАЙ
            </h2>
          </div>
          <button
            onClick={() => onNavigate("blog")}
            className="hidden sm:flex items-center gap-2 font-display text-xs tracking-widest text-[#FF2D78] uppercase hover:gap-3 transition-all"
          >
            Все статьи <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {BLOG_POSTS.map((post, i) => (
            <div key={post.id}
              className="p-5 rounded-sm border border-white/5 card-hover cursor-pointer group animate-fade-in"
              style={{ background: "var(--card-bg)", animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center justify-between mb-4">
                <span className="product-badge px-2 py-1 text-[#FF2D78]"
                  style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.3)" }}>
                  {post.tag}
                </span>
                <span className="font-body text-white/30 text-xs">{post.readTime}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-3 leading-tight group-hover:text-[#FF2D78] transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-white/40 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-white/30 text-xs font-body">{post.date}</span>
                <Icon name="ArrowRight" size={14} className="text-white/30 group-hover:text-[#FF2D78] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 mx-4 sm:mx-6 mb-8 rounded-sm overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #FF2D78, #FF6B00, #FFE600)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)", backgroundSize: "8px 8px" }} />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            БЕСПЛАТНАЯ ДОСТАВКА<br />ОТ 3 000 ₽
          </h2>
          <p className="font-body text-white/80 mb-8">Доставляем по всей России. Возврат в течение 14 дней.</p>
          <button
            onClick={() => onNavigate("catalog")}
            className="font-display text-sm font-bold tracking-widest uppercase px-10 py-3 transition-all hover:scale-105"
            style={{ background: "#0A0A0A", color: "#FFE600" }}>
            Перейти в каталог
          </button>
        </div>
      </section>
    </div>
  );
}
