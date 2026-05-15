import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES, STYLES, SIZES } from "@/data/products";
import Icon from "@/components/ui/icon";

const STYLE_LABELS: Record<string, string> = {
  streetwear: "Streetwear",
  casual: "Casual",
  sport: "Sport",
  club: "Club",
};

const SORT_OPTIONS = [
  { value: "default", label: "По умолчанию" },
  { value: "price_asc", label: "Цена: по возрастанию" },
  { value: "price_desc", label: "Цена: по убыванию" },
  { value: "new", label: "Сначала новинки" },
];

export default function CatalogPage() {
  const [category, setCategory] = useState("Все");
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [sort, setSort] = useState("default");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleStyle = (s: string) =>
    setSelectedStyles(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const toggleSize = (s: string) =>
    setSelectedSizes(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const filtered = useMemo(() => {
    let result = PRODUCTS.filter(p => {
      if (category !== "Все" && p.category !== category) return false;
      if (selectedStyles.length && !selectedStyles.some(s => p.style.includes(s))) return false;
      if (selectedSizes.length && !selectedSizes.some(s => p.sizes.includes(s))) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });

    if (sort === "price_asc") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price_desc") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "new") result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

    return result;
  }, [category, selectedStyles, selectedSizes, priceRange, sort]);

  const resetFilters = () => {
    setCategory("Все");
    setSelectedStyles([]);
    setSelectedSizes([]);
    setPriceRange([0, 15000]);
  };

  const hasFilters = category !== "Все" || selectedStyles.length > 0 || selectedSizes.length > 0 || priceRange[0] > 0 || priceRange[1] < 15000;

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-display text-xs tracking-[0.3em] text-white/40 uppercase block mb-2">Магазин</span>
            <h1 className="font-display text-5xl font-bold text-white">КАТАЛОГ</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-body text-white/40 text-sm">{filtered.length} товаров</span>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 font-display text-xs tracking-widest uppercase px-4 py-2 border border-white/20 text-white/70 hover:border-[#FF2D78] hover:text-[#FF2D78] transition-all"
            >
              <Icon name="SlidersHorizontal" size={14} />
              Фильтры
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 flex gap-8">
        {/* Sidebar Filters */}
        <aside className={`w-64 flex-shrink-0 ${filtersOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="sticky top-24 space-y-8">
            {/* Category */}
            <div>
              <h3 className="font-display text-xs tracking-widest text-white/50 uppercase mb-4">Категория</h3>
              <div className="space-y-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`w-full text-left font-body text-sm px-3 py-2 transition-all rounded-sm ${
                      category === cat
                        ? "text-[#FF2D78] bg-[rgba(255,45,120,0.1)]"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div>
              <h3 className="font-display text-xs tracking-widest text-white/50 uppercase mb-4">Стиль</h3>
              <div className="flex flex-wrap gap-2">
                {STYLES.map(s => (
                  <button
                    key={s}
                    onClick={() => toggleStyle(s)}
                    className={`tag-filter ${selectedStyles.includes(s) ? "active" : ""}`}
                  >
                    {STYLE_LABELS[s]}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <h3 className="font-display text-xs tracking-widest text-white/50 uppercase mb-4">Размер</h3>
              <div className="flex flex-wrap gap-2">
                {SIZES.map(s => (
                  <button
                    key={s}
                    onClick={() => toggleSize(s)}
                    className={`font-display text-xs px-3 py-1.5 transition-all border ${
                      selectedSizes.includes(s)
                        ? "border-[#FF2D78] text-[#FF2D78] bg-[rgba(255,45,120,0.1)]"
                        : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-display text-xs tracking-widest text-white/50 uppercase mb-4">Цена</h3>
              <div className="flex items-center justify-between font-body text-sm text-white/60 mb-4">
                <span>{priceRange[0].toLocaleString("ru-RU")} ₽</span>
                <span>{priceRange[1].toLocaleString("ru-RU")} ₽</span>
              </div>
              <input
                type="range"
                min={0}
                max={15000}
                step={500}
                value={priceRange[1]}
                onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full accent-[#FF2D78]"
              />
              <input
                type="range"
                min={0}
                max={15000}
                step={500}
                value={priceRange[0]}
                onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full accent-[#FF2D78] mt-2"
              />
            </div>

            {/* Reset */}
            {hasFilters && (
              <button
                onClick={resetFilters}
                className="w-full font-display text-xs tracking-widest uppercase py-2 text-white/40 hover:text-[#FF2D78] transition-colors flex items-center gap-2 justify-center"
              >
                <Icon name="X" size={12} />
                Сбросить фильтры
              </button>
            )}
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1 min-w-0">
          {/* Sort bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`tag-filter whitespace-nowrap ${category === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="hidden sm:block font-display text-xs tracking-wider uppercase bg-transparent border border-white/20 text-white/60 px-3 py-2 focus:outline-none focus:border-[#FF2D78]"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value} style={{ background: "#111", color: "#fff" }}>{o.label}</option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="Search" size={48} className="text-white/20 mx-auto mb-4" />
              <p className="font-display text-xl text-white/40 uppercase">Ничего не найдено</p>
              <p className="font-body text-white/30 text-sm mt-2">Попробуйте изменить фильтры</p>
              <button onClick={resetFilters} className="btn-neon px-6 py-2 mt-6 text-sm">
                Сбросить
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
              {filtered.map((product, i) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
