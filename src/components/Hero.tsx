"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const locationBadges = [
    { icon: "✈", label: "30 menit ke Bandara Soekarno Hatta" },
    { icon: "🛣", label: "10 menit ke Gerbang Tol Pamulang" },
    { icon: "🚂", label: "20 menit ke Stasiun Jurangmangu" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/img/hero/hero-new.webp"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="hero-bg"
        />
      </div>

      {/* Deep overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0e0c]/90 via-[#0f0e0c]/70 to-[#0f0e0c]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-[#0f0e0c]/40" />

      {/* Decorative vertical line */}
      <div className="absolute left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#c8a96e]/40 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div
            className={`inline-flex items-center gap-2 border border-[#c8a96e]/40 px-4 py-2 mb-8 transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] animate-pulse" />
            <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase font-light">
              Pamulang, Tangerang Selatan
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display text-4xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-4 transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-white">Privé</span>{" "}
            <span className="shimmer-gold italic">Hills</span>
            <br />
            <span className="text-white/80 text-4xl md:text-5xl lg:text-6xl not-italic font-light tracking-widest">
              RESIDENCE
            </span>
          </h1>

          {/* Divider */}
          <div
            className={`w-20 h-px bg-[#c8a96e] my-8 ${
              loaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            } origin-left`}
          />

          {/* Tagline */}
          <p
            className={`text-white/60 text-base md:text-lg font-light leading-relaxed max-w-md mb-8 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Hunian minimalis modern di area perbukitan eksklusif, menawarkan
            privasi, keamanan, dan ketenangan untuk keluarga Anda.
          </p>

          {/* Price */}
          <div
            className={`mb-10 transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="text-white/40 text-xs tracking-[0.3em] uppercase mb-1">
              Harga Mulai Dari
            </div>
            <div className="font-display text-3xl md:text-4xl text-[#c8a96e] font-light">
              Rp 1,3 Miliar
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-1000 delay-800 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://wa.me/628111234567?text=Halo,%20saya%20tertarik%20dengan%20Prive%20Hills%20Residence.%20Boleh%20saya%20mendapat%20info%20lebih%20lanjut?"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#c8a96e] text-[#0f0e0c] px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#e4cc9a] transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Gratis
            </a>
            <a
              href="#units-hunian"
              className="flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-sm tracking-widest uppercase font-light hover:border-[#c8a96e] hover:text-[#c8a96e] transition-all duration-300"
            >
              Lihat Unit
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Location badges */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-3 transition-all duration-1000 delay-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {locationBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3"
              >
                <span className="text-[#c8a96e]">✓</span>
                <span className="text-white/60 text-xs font-light">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c8a96e]/40 to-transparent" />
      </div>
    </section>
  );
}
