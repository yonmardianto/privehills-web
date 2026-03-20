"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function UpcomingDesign() {
  const items = [
    {
      title: "Upcoming",
      subtitle: "Tipe 2BR + Study (Crafting Modern Living)",
      status: "Progress 50%",
      description:
        "Unit baru dengan konsep mixed-use dan area hijau luas, siap hadir awal 2027.",
      image: "/assets/img/upcoming/upcoming.webp",
    },
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
    {
      title: "Upcoming",
      subtitle: "Tipe 3BR Family Home",
      status: "Progress 35%",
      description:
        "Rancang bangun hunian keluarga dengan pencahayaan natural & ruang multifungsi.",
      image: "/assets/img/upcoming/upcoming-5.webp",
    },
    {
      title: "Upcoming",
      subtitle: "Tipe 3BR Family Home",
      status: "Progress 35%",
      description:
        "Rancang bangun hunian keluarga dengan pencahayaan natural & ruang multifungsi.",
      image: "/assets/img/upcoming/upcoming-6.webp",
    },
    {
      title: "Upcoming",
      subtitle: "Tipe 3BR Family Home",
      status: "Progress 35%",
      description:
        "Rancang bangun hunian keluarga dengan pencahayaan natural & ruang multifungsi.",
      image: "/assets/img/upcoming/upcoming-7.webp",
    },
    {
      title: "Upcoming",
      subtitle: "Tipe 3BR Family Home",
      status: "Progress 35%",
      description:
        "Rancang bangun hunian keluarga dengan pencahayaan natural & ruang multifungsi.",
      image: "/assets/img/upcoming/upcoming-8.webp",
    },
    {
      title: "Upcoming",
      subtitle: "Tipe 3BR Family Home",
      status: "Progress 35%",
      description:
        "Rancang bangun hunian keluarga dengan pencahayaan natural & ruang multifungsi.",
      image: "/assets/img/upcoming/upcoming-9.webp",
    },
    {
      title: "Upcoming",
      subtitle: "Tipe 3BR Family Home",
      status: "Progress 35%",
      description:
        "Rancang bangun hunian keluarga dengan pencahayaan natural & ruang multifungsi.",
      image: "/assets/img/upcoming/upcoming-10.webp",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [emblaApi]);

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
    <section id="upcoming-design" className="py-20 bg-[#0f0e0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="ornament-divider mb-6">
            <span className="text-[#c8a96e] text-lg tracking-[0.4em] uppercase">
              Upcoming Design
            </span>
          </div>

          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Sebuah interpretasi baru dari hunian modern, dirancang dengan
            arsitektur yang berani, tekstur yang hangat, serta interior yang
            dibuat dengan penuh perhatian.
          </p>
          <br />

          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Rasakan rumah yang menggabungkan desain modern dengan kenyamanan
            sehari-hari. Menyajikan ruang tamu terbuka, interior yang elegan,
            dan cahaya alami di seluruh rumah, desain unit baru ini dibuat untuk
            mendukung gaya hidup keluarga modern.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {items.map((item, index) => (
                <div
                  className="embla__slide min-w-full flex justify-center"
                  key={`${item.title}-${index}`}
                >
                  <div className="bg-[#161412] border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all w-full">
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="mt-4 flex items-center justify-between">
            <button
              onClick={scrollPrev}
              className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white hover:bg-white/20"
              aria-label="Previous slide"
            >
              Prev
            </button>
            <button
              onClick={scrollNext}
              className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white hover:bg-white/20"
              aria-label="Next slide"
            >
              Next
            </button>
          </div> */}

          <div className="flex justify-center gap-2 mt-4">
            {items.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-[#c8a96e]" : "bg-white/30"
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
