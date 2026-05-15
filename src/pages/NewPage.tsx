import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function NewPage() {
  const newProducts = PRODUCTS.filter(p => p.isNew);
  const allProducts = PRODUCTS.filter(p => !p.isNew);

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20">
        {/* Header */}
        <div className="mb-12">
          <span className="font-display text-xs tracking-[0.3em] text-white/40 uppercase block mb-2">Только что</span>
          <h1 className="font-display text-5xl font-bold text-white mb-4">НОВИНКИ</h1>
          <div className="h-0.5 w-24" style={{ background: "#FFE600" }} />
        </div>

        {/* NEW badge section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="px-3 py-1.5 product-badge" style={{ background: "#FFE600", color: "#0A0A0A" }}>
            NEW IN
          </div>
          <span className="font-body text-white/40 text-sm">{newProducts.length} новых товаров</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16">
          {newProducts.map((product, i) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-display text-xs tracking-widest text-white/30 uppercase">Другие товары</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {allProducts.map((product, i) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
