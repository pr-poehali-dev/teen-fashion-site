import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

interface CheckoutPageProps {
  onBack: () => void;
  onSuccess: () => void;
}

const DELIVERY_OPTIONS = [
  { id: "courier", label: "Курьер", price: 350, time: "1–3 дня" },
  { id: "pickup", label: "Самовывоз", price: 0, time: "Сегодня" },
  { id: "post", label: "Почта России", price: 200, time: "5–14 дней" },
];

const PAYMENT_OPTIONS = [
  { id: "card", label: "Банковская карта", icon: "CreditCard" },
  { id: "cash", label: "Наличными при получении", icon: "Banknote" },
  { id: "sbp", label: "СБП", icon: "Smartphone" },
];

export default function CheckoutPage({ onBack, onSuccess }: CheckoutPageProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<"form" | "success">("form");
  const [delivery, setDelivery] = useState("courier");
  const [payment, setPayment] = useState("card");
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    city: "", street: "", comment: "",
  });

  const deliveryOption = DELIVERY_OPTIONS.find(d => d.id === delivery)!;
  const finalPrice = totalPrice + deliveryOption.price;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    clearCart();
  };

  if (step === "success") {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow"
            style={{ background: "rgba(255,45,120,0.15)", border: "2px solid #FF2D78" }}>
            <Icon name="CheckCheck" size={36} className="text-[#FF2D78]" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-4">ЗАКАЗ ПРИНЯТ!</h1>
          <p className="font-body text-white/50 mb-2">Номер заказа: <span className="text-white font-medium">#VOLT-{Math.floor(Math.random() * 90000) + 10000}</span></p>
          <p className="font-body text-white/50 mb-8">Мы свяжемся с вами в течение 30 минут для подтверждения.</p>
          <button onClick={onSuccess} className="btn-neon px-8 py-3 text-sm">
            Вернуться в магазин
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20">
        {/* Back */}
        <button onClick={onBack} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 font-display text-xs tracking-widest uppercase">
          <Icon name="ArrowLeft" size={14} />
          Назад в корзину
        </button>

        <h1 className="font-display text-4xl font-bold text-white mb-10">ОФОРМЛЕНИЕ ЗАКАЗА</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            {/* Contacts */}
            <div className="p-6 rounded-sm" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}>
              <h2 className="font-display text-lg font-bold text-white mb-5 uppercase tracking-wider">Контактные данные</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-display text-xs text-white/40 uppercase tracking-widest block mb-2">Имя *</label>
                  <input
                    required value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="w-full font-body text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-4 py-3 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-display text-xs text-white/40 uppercase tracking-widest block mb-2">Телефон *</label>
                  <input
                    required value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full font-body text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-4 py-3 transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="font-display text-xs text-white/40 uppercase tracking-widest block mb-2">Email *</label>
                  <input
                    required type="email" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full font-body text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-4 py-3 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div className="p-6 rounded-sm" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}>
              <h2 className="font-display text-lg font-bold text-white mb-5 uppercase tracking-wider">Способ доставки</h2>
              <div className="space-y-3 mb-5">
                {DELIVERY_OPTIONS.map(opt => (
                  <label key={opt.id} className="flex items-center gap-4 p-4 cursor-pointer rounded-sm transition-all"
                    style={{
                      border: delivery === opt.id ? "1px solid #FF2D78" : "1px solid rgba(255,255,255,0.08)",
                      background: delivery === opt.id ? "rgba(255,45,120,0.06)" : "transparent",
                    }}>
                    <input type="radio" name="delivery" value={opt.id}
                      checked={delivery === opt.id}
                      onChange={() => setDelivery(opt.id)}
                      className="accent-[#FF2D78]" />
                    <div className="flex-1">
                      <div className="font-display text-sm text-white">{opt.label}</div>
                      <div className="font-body text-white/40 text-xs">{opt.time}</div>
                    </div>
                    <div className="font-display text-sm font-semibold"
                      style={{ color: opt.price === 0 ? "#22C55E" : "#FFE600" }}>
                      {opt.price === 0 ? "Бесплатно" : `${opt.price} ₽`}
                    </div>
                  </label>
                ))}
              </div>

              {delivery !== "pickup" && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs text-white/40 uppercase tracking-widest block mb-2">Город *</label>
                    <input
                      required value={form.city}
                      onChange={e => setForm({ ...form, city: e.target.value })}
                      placeholder="Москва"
                      className="w-full font-body text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-4 py-3 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs text-white/40 uppercase tracking-widest block mb-2">Улица, дом, кв.</label>
                    <input
                      value={form.street}
                      onChange={e => setForm({ ...form, street: e.target.value })}
                      placeholder="ул. Пушкина, д. 1, кв. 2"
                      className="w-full font-body text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-4 py-3 transition-colors"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Payment */}
            <div className="p-6 rounded-sm" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}>
              <h2 className="font-display text-lg font-bold text-white mb-5 uppercase tracking-wider">Способ оплаты</h2>
              <div className="space-y-3">
                {PAYMENT_OPTIONS.map(opt => (
                  <label key={opt.id} className="flex items-center gap-4 p-4 cursor-pointer rounded-sm transition-all"
                    style={{
                      border: payment === opt.id ? "1px solid #FF2D78" : "1px solid rgba(255,255,255,0.08)",
                      background: payment === opt.id ? "rgba(255,45,120,0.06)" : "transparent",
                    }}>
                    <input type="radio" name="payment" value={opt.id}
                      checked={payment === opt.id}
                      onChange={() => setPayment(opt.id)}
                      className="accent-[#FF2D78]" />
                    <Icon name={opt.icon as "CreditCard"} size={18} className="text-white/50" />
                    <span className="font-display text-sm text-white">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="font-display text-xs text-white/40 uppercase tracking-widest block mb-2">Комментарий к заказу</label>
              <textarea
                value={form.comment}
                onChange={e => setForm({ ...form, comment: e.target.value })}
                rows={3}
                placeholder="Дополнительные пожелания..."
                className="w-full font-body text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-4 py-3 transition-colors resize-none"
              />
            </div>

            <button type="submit" className="w-full btn-neon py-4 text-sm">
              Подтвердить заказ на {finalPrice.toLocaleString("ru-RU")} ₽
            </button>
          </form>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-5 rounded-sm" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5">Ваш заказ</h3>
              <div className="space-y-3 mb-5">
                {items.map(item => (
                  <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                    <img src={item.product.image} alt={item.product.name}
                      className="w-14 h-14 object-cover rounded-sm flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-xs text-white truncate">{item.product.name}</p>
                      <p className="font-body text-white/40 text-xs">р. {item.size} × {item.quantity}</p>
                      <p className="font-display text-xs font-semibold neon-text-pink mt-1">
                        {(item.product.price * item.quantity).toLocaleString("ru-RU")} ₽
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/5 pt-4 space-y-2">
                <div className="flex justify-between font-body text-sm text-white/50">
                  <span>Товары</span>
                  <span>{totalPrice.toLocaleString("ru-RU")} ₽</span>
                </div>
                <div className="flex justify-between font-body text-sm text-white/50">
                  <span>Доставка</span>
                  <span style={{ color: deliveryOption.price === 0 ? "#22C55E" : "#fff" }}>
                    {deliveryOption.price === 0 ? "Бесплатно" : `${deliveryOption.price} ₽`}
                  </span>
                </div>
                <div className="flex justify-between font-display text-lg font-bold pt-2 border-t border-white/5">
                  <span className="text-white">Итого</span>
                  <span className="neon-text-pink">{finalPrice.toLocaleString("ru-RU")} ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
