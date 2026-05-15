import { BLOG_POSTS } from "@/data/products";
import Icon from "@/components/ui/icon";

const EXTRA_POSTS = [
  {
    id: 4,
    title: "Что такое capsule wardrobe и зачем она нужна",
    excerpt: "Базовый гардероб — не скучно. Объясняем, как собрать универсальную капсулу с яркими акцентами.",
    date: "28 апреля 2025",
    tag: "СОВЕТЫ",
    readTime: "7 мин",
  },
  {
    id: 5,
    title: "VOLT x Москва: лучшие места для стритстайл-фото",
    excerpt: "Лофты, граффити, индустриальные зоны — собрали карту локаций для вашего контента.",
    date: "20 апреля 2025",
    tag: "ЛОКАЦИИ",
    readTime: "3 мин",
  },
  {
    id: 6,
    title: "Как ухаживать за тёмной одеждой, чтобы она не выцветала",
    excerpt: "Простые правила стирки, которые сохранят насыщенность цвета на годы.",
    date: "15 апреля 2025",
    tag: "УХОД",
    readTime: "4 мин",
  },
];

const ALL_POSTS = [...BLOG_POSTS, ...EXTRA_POSTS];
const TAGS = ["Все", "ТРЕНДЫ", "СТИЛЬ", "КУЛЬТУРА", "СОВЕТЫ", "ЛОКАЦИИ", "УХОД"];

const TAG_COLORS: Record<string, string> = {
  ТРЕНДЫ: "#FF2D78",
  СТИЛЬ: "#FFE600",
  КУЛЬТУРА: "#00D4FF",
  СОВЕТЫ: "#FF6B00",
  ЛОКАЦИИ: "#A855F7",
  УХОД: "#22C55E",
};

import { useState } from "react";

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("Все");

  const filtered = activeTag === "Все" ? ALL_POSTS : ALL_POSTS.filter(p => p.tag === activeTag);

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20">
        {/* Header */}
        <div className="mb-12">
          <span className="font-display text-xs tracking-[0.3em] text-white/40 uppercase block mb-2">Наши истории</span>
          <h1 className="font-display text-5xl font-bold text-white mb-4">БЛОГ</h1>
          <div className="h-0.5 w-24" style={{ background: "#FFE600" }} />
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-10">
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`tag-filter ${activeTag === tag ? "active" : ""}`}
              style={activeTag === tag && tag !== "Все" ? { borderColor: TAG_COLORS[tag], color: TAG_COLORS[tag] } : {}}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {activeTag === "Все" && (
          <div className="mb-8 p-8 rounded-sm relative overflow-hidden card-hover cursor-pointer"
            style={{ background: "var(--card-bg)", border: "1px solid rgba(255,45,120,0.2)" }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10"
              style={{ background: "#FF2D78" }} />
            <div className="relative z-10 grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block font-body text-xs mb-4 px-3 py-1"
                  style={{ background: "rgba(255,45,120,0.15)", color: "#FF2D78" }}>
                  🔥 Главная статья
                </div>
                <h2 className="font-display text-3xl font-bold text-white mb-4 leading-tight">
                  {ALL_POSTS[0].title}
                </h2>
                <p className="font-body text-white/50 mb-6 leading-relaxed">{ALL_POSTS[0].excerpt}</p>
                <div className="flex items-center gap-4">
                  <span className="font-body text-white/30 text-xs">{ALL_POSTS[0].date}</span>
                  <span className="font-body text-white/30 text-xs">·</span>
                  <span className="font-body text-white/30 text-xs">{ALL_POSTS[0].readTime}</span>
                </div>
              </div>
              <div className="aspect-video rounded-sm overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/85d4ff09-27b6-419c-9c9d-532667dce132/files/66b994af-50e0-4973-9ed7-6c01c4f252f6.jpg"
                  alt="Featured"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Posts grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((post, i) => {
            const tagColor = TAG_COLORS[post.tag] || "#FF2D78";
            return (
              <div key={post.id}
                className="p-5 rounded-sm border border-white/5 card-hover cursor-pointer group animate-fade-in"
                style={{ background: "var(--card-bg)", animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="product-badge px-2 py-1"
                    style={{ background: `${tagColor}18`, color: tagColor, border: `1px solid ${tagColor}40` }}>
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
                  <div className="flex items-center gap-1 font-display text-xs tracking-widest text-white/30 group-hover:text-[#FF2D78] transition-colors uppercase">
                    Читать <Icon name="ArrowRight" size={12} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
