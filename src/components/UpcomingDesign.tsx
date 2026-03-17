"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function UpcomingDesign() {
  const items = [
    {
      title: "Upcoming",
      subtitle: "Tipe 2BR + Study (Crafting Modern Living)",
      status: "Progress 50%",
      description:
        "Unit baru dengan konsep mixed-use dan area hijau luas, siap hadir awal 2027.",
      image: "/assets/img/upcoming/upcoming-1.webp",
    },
    {
      title: "Upcoming",
      subtitle: "Tipe 3BR Family Home",
      status: "Progress 35%",
      description:
        "Rancang bangun hunian keluarga dengan pencahayaan natural & ruang multifungsi.",

      image: "/assets/img/upcoming/upcoming-2.webp",
    },
    {
      title: "Upcoming",
      subtitle: "Tipe 3BR Family Home",
      status: "Progress 35%",
      description:
        "Rancang bangun hunian keluarga dengan pencahayaan natural & ruang multifungsi.",

      image: "/assets/img/upcoming/upcoming-3.webp",
    },
    {
      title: "Upcoming",
      subtitle: "Tipe 3BR Family Home",
      status: "Progress 35%",
      description:
        "Rancang bangun hunian keluarga dengan pencahayaan natural & ruang multifungsi.",

      image: "/assets/img/upcoming/upcoming-4.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  return (
    <section id="upcoming-design" className="py-28 bg-[#0f0e0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="ornament-divider mb-6">
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase">
              Introducing Our Upcoming Signature Ultimate Design
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-4">
            Upcoming <span className="text-[#c8a96e] italic">Design</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            A new interpretation of modern living, designed with bold
            architecture, warm textures, and thoughtfully crafted interiors.
          </p>
          <br />

          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Experience a home that blends modern design with everyday comfort.
            Featuring open living spaces, elegant interiors, and natural light
            throughout the house, this new unit design is created to support the
            lifestyle of modern families.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`bg-[#161412] border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <button
                type="button"
                className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-zoom-in"
                onClick={() => {
                  setModalImage(item.image);
                  setIsModalOpen(true);
                }}
                aria-label={`View ${item.title} larger`}
              >
                <Image
                  width={1280}
                  height={960}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
              {/* <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-[#c8a96e] font-semibold mb-2">
                  {item.status}
                </p>
                <h3 className="text-xl text-white font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 mb-3">{item.subtitle}</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div> */}
            </div>
          ))}

          <div className="flex justify-center gap-2 mt-4">
            {items.map((_item, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#c8a96e]" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {isModalOpen && modalImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-50 rounded-full bg-black/70 px-3 py-1 text-white hover:bg-black"
                aria-label="Close image preview"
              >
                ✕
              </button>
              <div className="relative h-full max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg">
                <Image
                  src={modalImage}
                  alt="Upcoming design preview"
                  fill
                  style={{ objectFit: "contain" }}
                  className="w-full h-full"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
