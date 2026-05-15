import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

interface CartDrawerProps {
  onCheckout: () => void;
}

export default function CartDrawer({ onCheckout }: CartDrawerProps) {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalCount } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-50 w-full max-w-sm flex flex-col transition-transform duration-300"
        style={{
          background: "#0E0E0E",
          borderLeft: "1px solid rgba(255,255,255,0.07)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-wider">Корзина</h2>
            {totalCount > 0 && (
              <span className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                style={{ background: "#FF2D78", color: "#fff" }}>
                {totalCount}
              </span>
            )}
          </div>
          <button onClick={closeCart} className="text-white/40 hover:text-white transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,45,120,0.1)" }}>
                <Icon name="ShoppingBag" size={28} className="text-[#FF2D78]" />
              </div>
              <div>
                <p className="font-display text-lg text-white/40 uppercase tracking-wider">Корзина пуста</p>
                <p className="font-body text-white/25 text-sm mt-1">Добавь что-нибудь из каталога</p>
              </div>
              <button onClick={closeCart} className="btn-neon px-6 py-2 text-xs mt-2">
                В каталог
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={`${item.product.id}-${item.size}`}
                  className="flex gap-3 p-3 rounded-sm"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  {/* Image */}
                  <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0">
                    <img src={item.product.image} alt={item.product.name}
                      className="w-full h-full object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-sm font-medium text-white leading-tight mb-1 truncate">
                      {item.product.name}
                    </p>
                    <p className="font-body text-white/40 text-xs mb-2">Размер: {item.size}</p>
                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-white/15 text-white/60 hover:border-[#FF2D78] hover:text-[#FF2D78] transition-all text-xs"
                        >−</button>
                        <span className="font-display text-sm text-white w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-white/15 text-white/60 hover:border-[#FF2D78] hover:text-[#FF2D78] transition-all text-xs"
                        >+</button>
                      </div>
                      <span className="font-display text-sm font-semibold neon-text-pink">
                        {(item.product.price * item.quantity).toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.product.id, item.size)}
                    className="text-white/20 hover:text-[#FF2D78] transition-colors self-start mt-1"
                  >
                    <Icon name="Trash2" size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-white/5">
            {/* Promo */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Промокод"
                className="flex-1 font-body text-xs text-white placeholder-white/30 bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-3 py-2 transition-colors"
              />
              <button className="font-display text-xs tracking-widest uppercase px-3 py-2 border border-white/20 text-white/50 hover:border-[#FF2D78] hover:text-[#FF2D78] transition-all">
                OK
              </button>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-white/50 text-sm">Итого</span>
              <span className="font-display text-2xl font-bold neon-text-pink">
                {totalPrice.toLocaleString("ru-RU")} ₽
              </span>
            </div>

            {totalPrice >= 3000 && (
              <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-sm"
                style={{ background: "rgba(255,45,120,0.08)", border: "1px solid rgba(255,45,120,0.2)" }}>
                <Icon name="Truck" size={14} className="text-[#FF2D78]" />
                <span className="font-body text-xs text-[#FF2D78]">Бесплатная доставка!</span>
              </div>
            )}

            <button
              onClick={() => { closeCart(); onCheckout(); }}
              className="w-full btn-neon py-4 text-sm"
            >
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </>
  );
}
