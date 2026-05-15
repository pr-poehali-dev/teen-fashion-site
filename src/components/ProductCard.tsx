import { useState } from "react";
import Icon from "@/components/ui/icon";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  SALE: { bg: "#FF2D78", text: "#fff" },
  NEW: { bg: "#FFE600", text: "#0A0A0A" },
  HOT: { bg: "#FF6B00", text: "#fff" },
};

export default function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    const size = selectedSize || product.sizes[0];
    addItem(product, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const badge = product.badge ? BADGE_COLORS[product.badge] : null;

  return (
    <div className="group card-hover relative rounded-sm overflow-hidden"
      style={{ background: "var(--card-bg)" }}>
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}>
          <div className="w-full">
            <p className="font-display text-xs text-white/60 uppercase tracking-widest mb-2">Быстрый выбор размера</p>
            <div className="flex gap-1 flex-wrap">
              {product.sizes.map(s => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`font-display text-xs px-2 py-1 transition-all border ${
                    selectedSize === s
                      ? "border-[#FF2D78] text-[#FF2D78] bg-[rgba(255,45,120,0.15)]"
                      : "border-white/30 text-white/70 hover:border-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Badge */}
        {badge && product.badge && (
          <div className="absolute top-3 left-3 px-2 py-1 product-badge"
            style={{ background: badge.bg, color: badge.text }}>
            {product.badge}
          </div>
        )}

        {/* Like */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all"
          style={{ background: liked ? "#FF2D78" : "rgba(0,0,0,0.5)" }}>
          <Icon name="Heart" size={14} className={liked ? "text-white fill-white" : "text-white"} />
        </button>
      </div>

      {/* Info */}
      <div className="p-3">
        {/* Colors */}
        <div className="flex gap-1 mb-2">
          {product.colors.map(c => (
            <div key={c} className="w-3 h-3 rounded-full border border-white/20"
              style={{ background: c }} />
          ))}
        </div>

        <p className="font-display text-sm font-medium text-white tracking-wide leading-tight mb-1">
          {product.name}
        </p>
        <p className="text-white/40 text-xs font-body mb-2">{product.category}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-base font-semibold neon-text-pink">
              {product.price.toLocaleString("ru-RU")} ₽
            </span>
            {product.oldPrice && (
              <span className="text-white/30 text-xs line-through font-body">
                {product.oldPrice.toLocaleString("ru-RU")} ₽
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="w-7 h-7 flex items-center justify-center transition-all hover:scale-110"
            style={{ background: added ? "#22C55E" : "#FF2D78", borderRadius: "2px" }}>
            <Icon name={added ? "Check" : "Plus"} size={14} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}