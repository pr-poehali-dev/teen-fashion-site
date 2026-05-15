import Icon from "@/components/ui/icon";

const VALUES = [
  { icon: "Zap", title: "Энергия", text: "Каждая вещь VOLT заряжает уверенностью. Мы создаём одежду, которая даёт силу." },
  { icon: "Eye", title: "Видение", text: "Следим за трендами мировой уличной моды и переосмысляем их для России." },
  { icon: "Heart", title: "Сообщество", text: "VOLT — это не просто бренд, это тысячи людей, которые не боятся быть собой." },
  { icon: "Leaf", title: "Ответственность", text: "Постепенно переходим на экологичные ткани и производство без лишних отходов." },
];

const TEAM = [
  { name: "Алекс Громов", role: "Основатель & Creative Director", emoji: "🎨" },
  { name: "Маша Ким", role: "Head of Design", emoji: "⚡" },
  { name: "Дима Чёрный", role: "Brand Director", emoji: "🔥" },
];

export default function BrandPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #12000a 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[150px] opacity-10"
            style={{ background: "#FF2D78" }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="font-display text-xs tracking-[0.4em] text-white/30 uppercase mb-6">Наша история</div>
          <h1 className="font-display text-6xl sm:text-8xl font-bold text-white mb-8">
            О <span className="neon-text-pink">БРЕНДЕ</span>
          </h1>
          <p className="font-body text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            VOLT родился в 2021 году из одной простой идеи: уличная мода в России заслуживает большего. Больше энергии, больше смелости, больше характера.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        {/* Story */}
        <section className="py-20 grid lg:grid-cols-2 gap-16 items-center border-b border-white/5">
          <div>
            <h2 className="font-display text-4xl font-bold text-white mb-6">КАК ВСЁ НАЧАЛОСЬ</h2>
            <div className="space-y-4 font-body text-white/50 leading-relaxed">
              <p>
                Основатель бренда Алекс Громов вернулся из Токио с чемоданом идей и пустым кошельком. Японская уличная мода перевернула его представление о том, как может выглядеть одежда.
              </p>
              <p>
                Первая коллекция VOLT вышла тиражом 50 единиц и разошлась за 3 часа после публикации в Instagram. Стало ясно: это только начало.
              </p>
              <p>
                Сегодня VOLT — это команда из 15 человек, 500+ позиций в каталоге и сообщество более 50 000 человек по всей России.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden"
              style={{ border: "1px solid rgba(255,45,120,0.2)" }}>
              <img
                src="https://cdn.poehali.dev/projects/85d4ff09-27b6-419c-9c9d-532667dce132/files/66b994af-50e0-4973-9ed7-6c01c4f252f6.jpg"
                alt="VOLT Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 font-display text-xs tracking-widest uppercase"
              style={{ background: "#FF2D78", color: "#fff" }}>
              С 2021 года
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 border-b border-white/5">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-white">НАШИ ЦЕННОСТИ</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <div key={v.title}
                className="p-6 rounded-sm border border-white/5 card-hover animate-fade-in"
                style={{ background: "var(--card-bg)", animationDelay: `${i * 0.1}s` }}>
                <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                  style={{ background: "rgba(255,45,120,0.15)" }}>
                  <Icon name={v.icon as "Zap"} size={20} className="text-[#FF2D78]" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="font-body text-white/40 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Numbers */}
        <section className="py-20 border-b border-white/5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { num: "2021", label: "год основания" },
              { num: "50K+", label: "покупателей" },
              { num: "500+", label: "позиций" },
              { num: "15", label: "человек в команде" },
            ].map(item => (
              <div key={item.label}>
                <div className="font-display text-4xl sm:text-5xl font-bold neon-text-pink mb-2">{item.num}</div>
                <div className="font-body text-white/40 text-sm uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-white">КОМАНДА</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {TEAM.map((member, i) => (
              <div key={member.name}
                className="p-6 rounded-sm border border-white/5 card-hover text-center animate-fade-in"
                style={{ background: "var(--card-bg)", animationDelay: `${i * 0.1}s` }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4"
                  style={{ background: "rgba(255,45,120,0.1)" }}>
                  {member.emoji}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="font-body text-white/40 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
