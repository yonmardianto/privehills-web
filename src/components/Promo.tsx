"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BonusExtra from "./BonusExtra";

export default function Promo() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  const promos = [
    {
      title: "Free Biaya KPR",
      desc: "Gratis biaya KPR hingga 40 JT",
      icon: "🏦",
    },
    {
      title: "KPR Cicilan Ringan",
      desc: "KPR PROMO DP 0% bisa cicilan mulai Rp 7 Jutaan aja!",
      icon: "💳",
    },
    {
      title: "Subsidi DP KPR",
      desc: "Subsidi DP 5% dan dapatkan kesempatan Booking Fee 10 JT All In",
      icon: "🎁",
    },
    {
      title: "Free Smart Door Lock",
      desc: "Gratis pemasangan smart door lock",
      icon: "🏠",
    },
    {
      title: "Free Biaya Surat",
      desc: "Gratis biaya BPHTB, AJB, SHM hingga balik nama",
      icon: "📄",
    },
  ];

  return (
    <section id="promo" className="py-28 relative overflow-hidden bg-[#0f0e0c]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div
          className="w-full h-full bg-[#c8a96e]"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="ornament-divider mb-6">
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase">
              Penawaran Terbatas
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-4">
            Promo <span className="text-[#c8a96e] italic">Spesial</span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto font-light">
            Dapatkan penawaran eksklusif yang hanya tersedia untuk periode
            terbatas
          </p>
        </div>

        {/* Bonus Extra Component element */}
        <BonusExtra />

        {/* Banner */}
        <div
          className={`relative rounded-none overflow-hidden mb-16 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative h-72 md:h-96">
            <Image
              src="/assets/img/promo/promo.webp"
              alt="Promo banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0e0c]/80 via-[#0f0e0c]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center px-6 md:px-16">
              <div>
                <div className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-3">
                  Promo Eksklusif 2026
                </div>
                <div className="font-display text-4xl md:text-5xl text-white font-light mb-4">
                  Booking Sekarang
                  <br />
                  <span className="text-[#c8a96e]">Harga Terbaik</span>
                </div>
                <a
                  href="https://wa.me/6287867309782?text=Halo,%20saya%20ingin%20mengetahui%20promo%20Prive%20Hills%20Residence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c8a96e] text-[#0f0e0c] px-6 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-[#e4cc9a] transition-colors mt-2"
                >
                  Cek Promo Sekarang
                </a>
              </div>
            </div>
          </div>
          {/* Gold border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent" />
        </div>

        {/* Promo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {promos.map((promo, i) => (
            <div
              key={i}
              className={`bg-[#1a1814] border border-white/5 p-6 hover:border-[#c8a96e]/40 transition-all duration-500 group cursor-default ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="text-3xl mb-4">{promo.icon}</div>
              <h3 className="font-display text-xl text-[#c8a96e] mb-2 font-medium">
                {promo.title}
              </h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                {promo.desc}
              </p>
              <div className="mt-4 w-8 h-px bg-[#c8a96e]/40 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
