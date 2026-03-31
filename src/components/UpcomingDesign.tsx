"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

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

export default function UpcomingDesign() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // FIX 1: Track which slides have been "visited" so we only lazy-load them on demand
  const [loadedIndexes, setLoadedIndexes] = useState<Set<number>>(
    new Set([0]), // preload only the first slide
  );

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNextModal = useCallback(() => {
    setModalImageIndex((prev) => (prev + 1) % items.length);
  }, []);

  const scrollPrevModal = useCallback(() => {
    setModalImageIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);

    // FIX 2: Load the current slide + 1 ahead (preload next), not all at once
    setLoadedIndexes((prev) => {
      const next = new Set(prev);
      next.add(index);
      next.add((index + 1) % items.length); // preload next slide
      return next;
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // FIX 3: Pause autoplay when modal is open
  useEffect(() => {
    if (isModalOpen) return;
    const timer = setInterval(() => {
      emblaApi?.scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [emblaApi, isModalOpen]);

  // FIX 4: Keyboard nav + body scroll lock when modal is open
  useEffect(() => {
    if (!isModalOpen) return;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "ArrowRight") scrollNextModal();
      if (e.key === "ArrowLeft") scrollPrevModal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen, scrollNextModal, scrollPrevModal]);

  return (
    <section id="upcoming-design" className="pb-20 pt-18 bg-[#0f0e0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="ornament-divider mb-6">
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase">
              Desain Mendatang
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-4">
            Terra <span className="text-[#c8a96e] italic">Fold</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto font-light">
            TerraFold adalah hunian tropis modern yang berkarakter mewakili rasa
            hangat, kenyamanan, dan sebagai ruang tumbuh bagi pemiliknya.
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
                        setModalImageIndex(index);
                        setIsModalOpen(true);
                      }}
                      aria-label={`View ${item.subtitle} larger`}
                    >
                      {/* FIX 5: Only render Image when slide has been visited,
                          show placeholder bg otherwise to avoid 11 simultaneous requests */}
                      {loadedIndexes.has(index) ? (
                        <Image
                          src={item.image}
                          alt={item.subtitle}
                          fill
                          // FIX 6: 'sizes' tells Next.js the actual rendered width
                          // so it serves ~900px images instead of 3840px
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                          className="object-cover"
                          // FIX 7: Only the first slide is eager; rest are lazy
                          loading={index === 0 ? "eager" : "lazy"}
                          quality={70}
                        />
                      ) : (
                        // Lightweight placeholder while slide hasn't been reached
                        <div className="w-full h-full bg-[#1a1816] animate-pulse" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/80 transition-colors"
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/80 transition-colors"
            aria-label="Next slide"
          >
            &#10095;
          </button>

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

          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setIsModalOpen(false)} // click backdrop to close
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-50 rounded-full bg-black/70 px-3 py-1 text-white hover:bg-black"
                aria-label="Close image preview"
              >
                ✕
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollPrevModal();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 rounded-full bg-black/70 px-4 py-3 text-white hover:bg-black transition-colors"
                aria-label="Previous image"
              >
                &#10094;
              </button>

              <div
                className="relative h-full max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg"
                onClick={(e) => e.stopPropagation()} // prevent close when clicking image
              >
                <Image
                  src={items[modalImageIndex].image}
                  alt={items[modalImageIndex].subtitle}
                  fill
                  // FIX 8: Modal can be larger, so use a bigger size hint
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  style={{ objectFit: "contain" }}
                  // FIX 9: priority on modal image since user explicitly opened it
                  priority
                  quality={70}
                />
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollNextModal();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 rounded-full bg-black/70 px-4 py-3 text-white hover:bg-black transition-colors"
                aria-label="Next image"
              >
                &#10095;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
