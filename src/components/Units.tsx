"use client";
import { useState, useEffect, useRef } from "react";

const units = [
  {
    id: "agave",
    name: "Agave",
    tagline: "Compact & Smart",
    price: "Rp1,41 Miliar",
    bedroom: 3,
    bathroom: 2,
    landArea: 72,
    buildingArea: 56,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54079d0a0?w=800&q=80",
    ],
    specs: {
      pondasi: "Tapak beton",
      struktur: "Beton bertulang",
      atap: "Spandek pasir",
      rangkaAtap: "Baja ringan",
      plafon: "Gypsum board",
      dinding: "Bata merah, plester aci, cat",
      lantai: "Homogeneous tile 60 x 60 cm",
      kusen: "Aluminium",
      sanitari: "American standard",
      listrik: "2.200 watt",
    },
  },
  {
    id: "birch",
    name: "Birch",
    tagline: "Luas & Nyaman",
    price: "Rp1,85 Miliar",
    bedroom: 3,
    bathroom: 3,
    landArea: 84,
    buildingArea: 72,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80",
    ],
    specs: {
      pondasi: "Tapak beton",
      struktur: "Beton bertulang",
      atap: "Spandek pasir",
      rangkaAtap: "Baja ringan",
      plafon: "Gypsum board",
      dinding: "Bata merah, plester aci, cat",
      lantai: "Homogeneous tile 60 x 60 cm",
      kusen: "Aluminium",
      sanitari: "American standard",
      listrik: "3.300 watt",
    },
  },
  {
    id: "cedar",
    name: "Cedar",
    tagline: "Premium & Mewah",
    price: "Rp2,35 Miliar",
    bedroom: 4,
    bathroom: 3,
    landArea: 90,
    buildingArea: 96,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800&q=80",
    ],
    specs: {
      pondasi: "Tapak beton",
      struktur: "Beton bertulang",
      atap: "Spandek pasir",
      rangkaAtap: "Baja ringan",
      plafon: "Gypsum board",
      dinding: "Bata merah, plester aci, cat",
      lantai: "Homogeneous tile 80 x 80 cm",
      kusen: "Aluminium premium",
      sanitari: "American standard",
      listrik: "4.400 watt",
    },
  },
];

export default function Units() {
  const [activeUnit, setActiveUnit] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
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
  }, [activeUnit]);

  const unit = units[activeUnit];

  return (
    <section id="units" className="py-28 bg-[#111009]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="ornament-divider mb-6">
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase">
              Pilihan Hunian
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-4">
            Tipe <span className="text-[#c8a96e] italic">Unit</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Tersedia dalam 3 pilihan tipe unit yang dirancang dengan desain
            minimalis modern, memadukan estetika kontemporer dengan kenyamanan
            hunian keluarga.
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
              <img
                key={unit.images[activeImage]}
                src={unit.images[activeImage]}
                alt={`${unit.name} - View ${activeImage + 1}`}
                className="w-full h-full object-cover transition-all duration-700"
              />
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
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[4/3] overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === i
                      ? "border-[#c8a96e]"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Unit heading */}
              <div className="mb-6">
                <div className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase mb-1">
                  {unit.tagline}
                </div>
                <h3 className="font-display text-5xl text-white font-light">
                  {unit.name}
                </h3>
                <div className="font-display text-2xl text-[#c8a96e] mt-2">
                  {unit.price}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Kamar Tidur", value: unit.bedroom, icon: "🛏" },
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
                  "https://wa.me/628111234567?text=Halo%2C%20saya%20tertarik%20dengan%20unit%20" +
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
                  "https://wa.me/628111234567?text=Halo%2C%20saya%20ingin%20detail%20unit%20" +
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
    </section>
  );
}
