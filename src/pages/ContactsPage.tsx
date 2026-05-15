import { useState } from "react";
import Icon from "@/components/ui/icon";

const CONTACTS = [
  { icon: "Mail", label: "Email", value: "hello@volt-store.ru", link: "mailto:hello@volt-store.ru" },
  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-VOLT", link: "tel:+78005550000" },
  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Арбат, 12", link: "#" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Вс: 10:00–22:00", link: "#" },
];

const SOCIALS = [
  { icon: "Instagram", label: "Instagram", handle: "@volt.store" },
  { icon: "MessageCircle", label: "Telegram", handle: "@volt_store" },
  { icon: "Youtube", label: "YouTube", handle: "VOLT Store" },
];

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20">
        {/* Header */}
        <div className="mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-white/40 uppercase block mb-2">Мы на связи</span>
          <h1 className="font-display text-5xl font-bold text-white mb-4">КОНТАКТЫ</h1>
          <div className="h-0.5 w-24" style={{ background: "#FF2D78" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-8">НАПИШИТЕ НАМ</h2>

            <div className="space-y-4 mb-12">
              {CONTACTS.map(c => (
                <a key={c.label} href={c.link}
                  className="flex items-center gap-4 p-4 rounded-sm border border-white/5 hover:border-[#FF2D78]/40 transition-all group"
                  style={{ background: "var(--card-bg)" }}>
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,45,120,0.15)" }}>
                    <Icon name={c.icon as "Mail"} size={18} className="text-[#FF2D78]" />
                  </div>
                  <div>
                    <div className="font-display text-xs text-white/30 uppercase tracking-widest">{c.label}</div>
                    <div className="font-body text-white text-sm mt-0.5 group-hover:text-[#FF2D78] transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <h3 className="font-display text-sm font-bold text-white/50 uppercase tracking-widest mb-4">Соцсети</h3>
            <div className="flex gap-3">
              {SOCIALS.map(s => (
                <button key={s.label}
                  className="flex-1 p-4 rounded-sm border border-white/10 hover:border-[#FF2D78]/50 transition-all text-center group"
                  style={{ background: "var(--card-bg)" }}>
                  <Icon name={s.icon as "Mail"} size={20} className="text-white/40 group-hover:text-[#FF2D78] transition-colors mx-auto mb-2" />
                  <div className="font-display text-xs text-white/40 tracking-widest">{s.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-8">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>

            {sent ? (
              <div className="text-center py-16 rounded-sm border border-[#FF2D78]/30"
                style={{ background: "rgba(255,45,120,0.05)" }}>
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="font-display text-2xl font-bold neon-text-pink mb-3">ОТПРАВЛЕНО!</h3>
                <p className="font-body text-white/50">Мы свяжемся с вами в течение 24 часов.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-neon mt-6 px-6 py-2 text-sm"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs text-white/40 uppercase tracking-widest block mb-2">Имя</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                      placeholder="Ваше имя"
                      className="w-full font-body text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-4 py-3 transition-colors rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs text-white/40 uppercase tracking-widest block mb-2">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                      className="w-full font-body text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-4 py-3 transition-colors rounded-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-display text-xs text-white/40 uppercase tracking-widest block mb-2">Тема</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full font-body text-sm text-white bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-4 py-3 transition-colors rounded-sm"
                    style={{ background: "#111" }}
                  >
                    <option value="" style={{ background: "#111" }}>Выберите тему</option>
                    <option value="order" style={{ background: "#111" }}>Вопрос по заказу</option>
                    <option value="return" style={{ background: "#111" }}>Возврат / обмен</option>
                    <option value="collab" style={{ background: "#111" }}>Сотрудничество</option>
                    <option value="other" style={{ background: "#111" }}>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="font-display text-xs text-white/40 uppercase tracking-widest block mb-2">Сообщение</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Расскажите, как мы можем помочь..."
                    className="w-full font-body text-sm text-white placeholder-white/30 bg-white/5 border border-white/10 focus:border-[#FF2D78] outline-none px-4 py-3 transition-colors rounded-sm resize-none"
                  />
                </div>
                <button type="submit" className="w-full btn-neon py-4 text-sm">
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
