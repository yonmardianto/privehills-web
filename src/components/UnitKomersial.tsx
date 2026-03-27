"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://privehillsresidence.id";

const units = [
  {
    id: "shophouse",
    name: "Shophouse",
    tagline: "Shophouse Strategis",
    price: "Rp 2,2 M-an",
    bathroom: 1,
    landArea: 67.5,
    buildingArea: 127,
    images: Array.from(
      { length: 3 },
      (_, i) => `${BASE_URL}/assets/img/unit/shophouse/shophouse-${i + 1}.webp`,
    ),
    // denah: `${BASE_URL}/assets/img/unit/agave/denah.webp`,
    specs: {
      pondasi: "Tiang Pancang",
      struktur: "Beton bertulang",
      dinding: "Bata Ringan",
      finishing: "Plester + Aci + Cat",
      dindingEksteriorDanInterior: "Emulsion Paint",
      rangkaAtap: "Baja Ringan",
      penutupAtap: "PVC White Doff Alderon",
      lantaiRuangan: "Homogeneous Tile 60x60",
      lantaiKamarMandi: "25x25",
      dindingKamarMandi: "Roman 25x45 cm",
      sanitary: "American Standard",
      kusenPintu: "Aluminium Anodize",
      dayaListrik: "3500 watt",
    },
  },
];

export default function UnitsKomersial() {
  const [activeUnit, setActiveUnit] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [showSpec, setShowSpec] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  useEffect(() => {
    setActiveImage(0);
    setShowSpec(false);
    setGalleryOpen(false);
  }, [activeUnit]);

  useEffect(() => {
    if (!galleryOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGalleryOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [galleryOpen]);

  const unit = units[activeUnit];

  return (
    <section id="units-komersial" className="py-28 bg-[#111009]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="ornament-divider mb-6">
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase">
              Pilihan Unit Komersial
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-4">
            Tipe <span className="text-[#c8a96e] italic">Ruko</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Tersedia Unit Komersial (Shophouse) dengan desain modern dan lokasi
            strategis, ideal untuk usaha Anda berkembang di kawasan eksklusif
            Prive Hills Residence.
          </p>
        </div>

        {/* Tab switcher */}
        <div
          className={`flex gap-0 mb-12 border-b border-white/10 transition-all duration-800 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {units.map((u, i) => (
            <button
              key={u.id}
              onClick={() => setActiveUnit(i)}
              className={`px-8 py-4 text-sm tracking-widest uppercase font-light transition-all duration-300 relative ${
                activeUnit === i
                  ? "text-[#c8a96e]"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {u.name}
              {activeUnit === i && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-[#c8a96e]" />
              )}
            </button>
          ))}
        </div>

        {/* Unit detail */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-800 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Gallery */}
          <div>
            <div className="gallery-item relative aspect-[4/3] overflow-hidden mb-3">
              <button
                type="button"
                onClick={() => setGalleryOpen(true)}
                className="w-full h-full relative cursor-zoom-in"
                aria-label="Open gallery"
              >
                <Image
                  key={unit.images[activeImage]}
                  src={unit.images[activeImage]}
                  alt={`${unit.name} - View ${activeImage + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="w-full h-full transition-all duration-700"
                />
              </button>
              {/* Image counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-white/70 text-xs tracking-wider">
                {activeImage + 1} / {unit.images.length}
              </div>
              {/* Nav arrows */}
              <button
                onClick={() =>
                  setActiveImage(
                    (p) => (p - 1 + unit.images.length) % unit.images.length,
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-[#c8a96e]/80 hover:text-[#0f0e0c] transition-all"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setActiveImage((p) => (p + 1) % unit.images.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-[#c8a96e]/80 hover:text-[#0f0e0c] transition-all"
              >
                ›
              </button>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {unit.images.map((img, i) => (
                <button
                  id={`btnGalleryUnit-${i}`}
                  key={i}
                  aria-label={unit.name}
                  title={unit.name}
                  onClick={() => {
                    setActiveImage(i);
                    // setGalleryOpen(true);
                  }}
                  className={`aspect-[4/3] overflow-hidden border-2 transition-all duration-300 relative ${
                    activeImage === i
                      ? "border-[#c8a96e]"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between h-full">
            <div className="flex-1 overflow-y-auto">
              {/* Unit heading */}
              <div className="mb-6">
                {/* <div className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase mb-1"> */}
                {/* {unit.tagline} */}
                {/* </div> */}
                <h3 className=" text-5xl text-white font-light">{unit.name}</h3>
                <div className=" text-2xl text-[#c8a96e] mt-2">
                  {unit.price}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Kamar Mandi", value: unit.bathroom, icon: "🚿" },
                  {
                    label: "Luas Tanah",
                    value: `${unit.landArea} m²`,
                    icon: "📐",
                  },
                  {
                    label: "Luas Bangunan",
                    value: `${unit.buildingArea} m²`,
                    icon: "🏗",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#1a1814] border border-white/5 p-4"
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-[#c8a96e] font-display text-xl font-light">
                      {stat.value}
                    </div>
                    <div className="text-white/40 text-xs tracking-widest uppercase mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Spec accordion */}
              <button
                onClick={() => setShowSpec(!showSpec)}
                className="w-full flex items-center justify-between border border-white/10 px-5 py-4 text-white/60 hover:text-[#c8a96e] hover:border-[#c8a96e]/40 transition-all duration-300 text-sm tracking-widest uppercase mb-2"
              >
                Spesifikasi Teknis
                <span
                  className={`transition-transform duration-300 ${showSpec ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <div className={`accordion-content ${showSpec ? "open" : ""}`}>
                <div className="border border-t-0 border-white/10 p-5 space-y-2.5 mb-6">
                  {Object.entries(unit.specs).map(([key, val]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-white/40 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <span className="text-white/70 text-right max-w-[60%]">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 mt-4">
              <a
                href={
                  "https://wa.me/6287867309782?text=Halo%2C%20saya%20tertarik%20dengan%20unit%20" +
                  encodeURIComponent(unit.name)
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#c8a96e] text-[#0f0e0c] py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#e4cc9a] transition-colors"
              >
                Booking Sekarang
              </a>
              <a
                href={
                  "https://wa.me/6287867309782?text=Halo%2C%20saya%20ingin%20detail%20unit%20" +
                  encodeURIComponent(unit.name)
                }
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 flex items-center justify-center border border-white/20 text-white/70 text-sm tracking-widest uppercase hover:border-[#c8a96e] hover:text-[#c8a96e] transition-all"
              >
                Detail
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery modal */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setGalleryOpen(false)}
              className="absolute right-2 top-2 z-20 rounded-full bg-black/40 px-3 py-2 text-white/90 hover:bg-black/60"
              aria-label="Close gallery"
            >
              ✕
            </button>

            <div className="relative">
              <img
                src={unit.images[activeImage]}
                alt={`${unit.name} - View ${activeImage + 1}`}
                className="w-full max-h-[80vh] object-contain"
              />

              <button
                type="button"
                onClick={() =>
                  setActiveImage(
                    (p) => (p - 1 + unit.images.length) % unit.images.length,
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white/90 hover:bg-black/60"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveImage((p) => (p + 1) % unit.images.length)
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white/90 hover:bg-black/60"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto pb-2">
              {unit.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-24 flex-none overflow-hidden rounded border-2 transition-all duration-300 ${
                    activeImage === i
                      ? "border-[#c8a96e]"
                      : "border-white/20 hover:border-white/40"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
