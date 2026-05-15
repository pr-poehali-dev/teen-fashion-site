import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "new", label: "Новинки" },
  { id: "trends", label: "Тренды" },
  { id: "brand", label: "О бренде" },
  { id: "blog", label: "Блог" },
  { id: "contacts", label: "Контакты" },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount, openCart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md"
      style={{ background: "rgba(10,10,10,0.92)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="font-display text-2xl font-bold tracking-widest neon-text-pink"
        >
          VOLT
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`font-display text-xs font-medium tracking-widest uppercase px-4 py-2 transition-all duration-200 ${
                currentPage === link.id
                  ? "text-[#FF2D78]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="text-white/60 hover:text-white transition-colors">
            <Icon name="Search" size={20} />
          </button>
          <button className="text-white/60 hover:text-white transition-colors relative">
            <Icon name="Heart" size={20} />
          </button>
          <button onClick={openCart} className="text-white/60 hover:text-white transition-colors relative">
            <Icon name="ShoppingBag" size={20} />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold"
                style={{ background: "#FF2D78", color: "#fff" }}>
                {totalCount > 9 ? "9+" : totalCount}
              </span>
            )}
          </button>
          <button
            className="lg:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/5 py-4 px-4 space-y-1"
          style={{ background: "rgba(10,10,10,0.98)" }}>
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
              className={`w-full text-left font-display text-sm font-medium tracking-widest uppercase px-4 py-3 transition-all duration-200 block ${
                currentPage === link.id
                  ? "text-[#FF2D78]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}