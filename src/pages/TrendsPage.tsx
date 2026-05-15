import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

const TRENDS = [
  {
    title: "Y2K COMEBACK",
    description: "Низкая посадка, металлические акценты, принты бабочек и звёзд. Эра нулевых вернулась, и она звучит громче, чем когда-либо.",
    color: "#FF2D78",
    tag: "🔥 Главный тренд",
    style: "club",
  },
  {
    title: "NEON MINIMAL",
    description: "Минималистичные силуэты с неоновыми акцентами — один яркий элемент делает весь образ. Меньше — значит громче.",
    color: "#FFE600",
    tag: "⚡ В тренде",
    style: "streetwear",
  },
  {
    title: "OVERSIZED ERA",
    description: "Объёмные силуэты не уходят. Огромные худи, baggy-джинсы, оверсайзд-пальто — комфорт и стиль больше не противоречат друг другу.",
    color: "#00D4FF",
    tag: "✨ Актуально",
    style: "casual",
  },
  {
    title: "SPORT LUXE",
    description: "Спортивная эстетика встречает роскошь. Технологичные ткани, рефлективные элементы и атлетический крой для повседневной жизни.",
    color: "#FF6B00",
    tag: "🏃 В движении",
    style: "sport",
  },
];

export default function TrendsPage() {
  const trendProducts = PRODUCTS.filter(p => p.isTrend);

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20">
        {/* Header */}
        <div className="mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-white/40 uppercase block mb-2">Сезон 2025</span>
          <h1 className="font-display text-5xl font-bold text-white mb-4">ТРЕНДЫ</h1>
          <div className="h-0.5 w-24" style={{ background: "#00D4FF" }} />
        </div>

        {/* Trends grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          {TRENDS.map((trend, i) => (
            <div key={trend.title}
              className="relative p-8 rounded-sm overflow-hidden card-hover animate-fade-in"
              style={{
                background: "var(--card-bg)",
                border: `1px solid ${trend.color}20`,
                animationDelay: `${i * 0.1}s`
              }}>
              {/* Glow */}
              <div className="absolute top-0 left-0 w-32 h-32 rounded-full blur-[60px] opacity-20"
                style={{ background: trend.color }} />

              <div className="relative z-10">
                <div className="inline-block font-body text-xs mb-4 px-3 py-1 rounded-full"
                  style={{ background: `${trend.color}20`, color: trend.color }}>
                  {trend.tag}
                </div>
                <h2 className="font-display text-3xl font-bold text-white mb-4"
                  style={{ color: trend.color }}>
                  {trend.title}
                </h2>
                <p className="font-body text-white/50 leading-relaxed">{trend.description}</p>

                <div className="h-0.5 mt-6 w-12" style={{ background: trend.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* Trend products */}
        <div className="mb-10">
          <h2 className="font-display text-3xl font-bold text-white mb-2">ТОВАРЫ В ТРЕНДЕ</h2>
          <p className="font-body text-white/40 text-sm">Отобрали лучшее специально для тебя</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {trendProducts.map((product, i) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
