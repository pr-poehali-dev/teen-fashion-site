import Icon from "@/components/ui/icon";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8"
      style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-3xl font-bold neon-text-pink mb-4">VOLT</div>
            <p className="font-body text-white/40 text-sm leading-relaxed mb-6">
              Яркая одежда для тех, кто живёт на максимуме. Следим за трендами — ты выглядишь на шаг впереди.
            </p>
            <div className="flex gap-3">
              {["Instagram", "MessageCircle", "Youtube"].map(icon => (
                <button key={icon}
                  className="w-9 h-9 rounded-sm flex items-center justify-center border border-white/10 hover:border-[#FF2D78] hover:text-[#FF2D78] text-white/40 transition-all">
                  <Icon name={icon as "Instagram"} size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xs tracking-widest text-white/40 uppercase mb-4">Магазин</h4>
            <ul className="space-y-2">
              {[
                { id: "catalog", label: "Каталог" },
                { id: "new", label: "Новинки" },
                { id: "trends", label: "Тренды" },
                { id: "brand", label: "О бренде" },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="font-body text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-xs tracking-widest text-white/40 uppercase mb-4">Информация</h4>
            <ul className="space-y-2">
              {["Доставка и оплата", "Возврат", "Размерная таблица", "FAQ"].map(item => (
                <li key={item}>
                  <button className="font-body text-sm text-white/40 hover:text-white transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-xs tracking-widest text-white/40 uppercase mb-4">Будь в курсе</h4>
            <p className="font-body text-white/40 text-sm mb-4">Получай новинки и скидки первым</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 font-body text-xs text-white placeholder-white/30 bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-3 py-2.5 transition-colors"
              />
              <button className="px-4 py-2.5 flex-shrink-0 transition-all hover:brightness-110"
                style={{ background: "#FF2D78" }}>
                <Icon name="ArrowRight" size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/20 text-xs">© 2025 VOLT Store. Все права защищены.</p>
          <div className="flex gap-6">
            <button className="font-body text-white/20 text-xs hover:text-white/40 transition-colors">Политика конфиденциальности</button>
            <button className="font-body text-white/20 text-xs hover:text-white/40 transition-colors">Публичная оферта</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
