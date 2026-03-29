"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Siti Aulia",
    role: "Ibu Rumah Tangga",
    quote:
      "Keluarga kami merasa tenang dengan lingkungan yang aman dan nyaman. Fasilitasnya lengkap, dan selalu ada ruang hijau untuk anak bermain.",
  },
  {
    name: "Budi Santoso",
    role: "Karyawan Swasta",
    quote:
      "Proses beli unit berjalan cepat dan tim marketing sangat membantu. Lokasi strategis dan akses ke pusat kota sangat mudah.",
  },
  {
    name: "Dewi Ramadhani",
    role: "Pengusaha",
    quote:
      "Design rumahnya modern dan minimalis, cocok untuk keluarga muda. Saya sangat puas dengan kualitas bangunan dan materialnya.",
  },

  {
    name: "Yon Mardianto",
    role: "Karyawan",
    quote:
      "Keren Desainnya, saya suka banget! Rumahnya modern dan minimalis, cocok untuk keluarga muda. Saya sangat puas dengan kualitas bangunan dan materialnya.",
  },
  
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const updateNav = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanPrev(el.scrollLeft > 5);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    updateNav();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);
    return () => {
      el.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", updateNav);
    };
  }, []);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = el.clientWidth;
    el.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-[#0f0e0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="ornament-divider mb-6">
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase">
              Testimonial Pelanggan
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-4">
            Apa kata <span className="text-[#c8a96e] italic">penghuni</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Cerita nyata dari penghuni yang sudah merasakan kenyamanan tinggal
            di Privé Hills Residence.
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => scroll("prev")}
              disabled={!canPrev}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#111009] text-white/70 hover:text-white hover:border-[#c8a96e] transition-colors disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Sebelumnya"
            >
              ‹
            </button>
            <div className="text-white/50 text-sm font-light">
              Geser untuk melihat lebih banyak
            </div>
            <button
              onClick={() => scroll("next")}
              disabled={!canNext}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#111009] text-white/70 hover:text-white hover:border-[#c8a96e] transition-colors disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Berikutnya"
            >
              ›
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-3 px-2 rounded-2xl border border-white/10 bg-[#111009]"
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`snap-start min-w-[100%] md:min-w-[50%] lg:min-w-[33.333%] p-8 transition-all duration-800 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  “{t.quote}”
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c8a96e]/20 flex items-center justify-center text-[#c8a96e] font-semibold">
                    {t.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-white font-medium">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
