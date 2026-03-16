"use client";
import { useEffect, useRef, useState } from "react";

const landmarks = [
  {
    category: "Harga",
    items: [
      "Agave - Mulai dari Rp 1,3 M",
      "Acacia - Mulai dari Rp 1,4 M",
      "Stevia - Mulai dari Rp 1,57 M",
      "Verbena - Mulai dari Rp 1,79 M",
      "⁠Shophouse - Mulai dari Rp 2,29 M",
    ],
  },
  {
    category: "Pendidikan",
    items: [
      "5 menit ke TK SD SMP SMA Kharisma Bangsa International School",
      "10 menit ke SD SMP Mumtaza Cambridge Islamic School",
      "5 menit ke Universitas Terbuka dan Universitas Sahid",
    ],
  },
  {
    category: "Kesehatan",
    items: [
      "RS Mitra Keluarga (5 menit)",
      "RSIA Bunda (8 menit)",
      "RS Sari Asih (10 menit)",
    ],
  },
  {
    category: "Perbelanjaan",
    items: [
      "Indomaret Prive Hills (0 menit)",
      "Superindo (5 menit)",
      "Pasar Modern Pondok Cabe (5 menit)",
      "Azko & Living Plaza (10 menit)",
      "⁠Mall The Park Sawangan (15 menit)",
    ],
  },
  {
    category: "Kuliner",
    items: [
      "McDonald, KFC, Mie Gacoan, Kopi Kenangan (5 menit)",
      "⁠Solaria, Hokben, Bebek Kaleyo, Sushi Yay, Mang Engking (10 menit)",
    ],
  },

  {
    category: "Tempat Ibadah",
    items: [
      "Musollah Prive Hills",
      "⁠Masjid Jami Nurul Fadillah",
      "⁠Lithang Bakti",
      "Gereja GBI Kunir",
      "Vihara Avalokitesvara",
    ],
  },

  {
    category: "Keamanan",
    items: ["One Gate System", "Security 24 Hours", "⁠CCTV area"],
  },
];

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="location" className="py-28 bg-[#111009]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="ornament-divider mb-6">
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase">
              Lokasi Strategis
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-4">
            Di Jantung <span className="text-[#c8a96e] italic">Pamulang</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Berlokasi di kawasan perbukitan Pamulang yang strategis, terhubung
            mudah dengan berbagai pusat aktivitas Jabodetabek.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map embed */}
          <div
            className={`transition-all duration-800 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative">
              {/* Map placeholder with styled embed */}
              <div className="w-full h-96 relative overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.327508128719!2d106.7534548!3d-6.3516281999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef1467751321%3A0x28ac9254e77dea5a!2sPrive%20Hills%20Residence!5e0!3m2!1sen!2sid!4v1773179018113!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter:
                      "invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.1)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Privé Hills Residence"
                />

                {/* Location pin overlay */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="bg-[#c8a96e] text-[#0f0e0c] px-4 py-2 text-xs tracking-widest uppercase font-semibold shadow-lg">
                    📍 Privé Hills Residence
                  </div>
                </div>
              </div>
              {/* Gold corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#c8a96e]" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#c8a96e]" />
            </div>

            {/* Address card */}
            <div className="mt-4 bg-[#1a1814] border border-white/5 p-5 flex items-start gap-4">
              <div className="text-[#c8a96e] mt-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-white font-display text-base font-light mb-1">
                  Privé Hills Residence
                </div>
                <div className="text-white/50 text-sm font-light">
                  Pamulang, Tangerang Selatan, Banten, Indonesia
                </div>
                <a
                  href="https://maps.app.goo.gl/EK5MoVwUBqbSSx6T6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8a96e] text-xs tracking-widest uppercase mt-2 inline-block hover:underline"
                >
                  Buka di Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Landmarks */}
          <div
            className={`transition-all duration-800 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {landmarks.map((l, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(i)}
                  className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                    activeCategory === i
                      ? "bg-[#c8a96e] text-[#0f0e0c] font-semibold"
                      : "border border-white/10 text-white/50 hover:border-[#c8a96e]/40 hover:text-white/70"
                  }`}
                >
                  {l.category}
                </button>
              ))}
            </div>

            {/* Items */}
            <div className="space-y-3">
              {landmarks[activeCategory].items.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-[#1a1814] border border-white/5 px-5 py-4 hover:border-[#c8a96e]/30 transition-all duration-300"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#c8a96e] flex-shrink-0" />
                  <span className="text-white/70 text-sm font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            {/* <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { value: "10 min", label: "ke Tol Pamulang" },
                { value: "20 min", label: "ke Stasiun Jurangmangu" },
                { value: "30 min", label: "ke Soekarno Hatta" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center border border-[#c8a96e]/20 py-5 px-3"
                >
                  <div className="font-display text-xl text-[#c8a96e] font-light">
                    {s.value}
                  </div>
                  <div className="text-white/40 text-xs mt-1 font-light">
                    {s.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
