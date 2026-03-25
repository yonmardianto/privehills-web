"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const facilities = [
  {
    title: "Keamanan 24 Jam",
    desc: "Sistem keamanan terpadu dengan one gate system, CCTV, dan petugas keamanan profesional",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Taman & RTH",
    desc: "Area ruang terbuka hijau yang asri, taman bermain anak, dan jogging track di lingkungan perumahan",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "Area Komersial",
    desc: "Fasilitas komersial untuk memenuhi kebutuhan harian Anda, berlokasi strategis di sekitar Prive Hills Residence mulai dari <p>Tempat Perbelanjaan, Sekolah, Rumah Sakit</p>",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    title: "Akses Mudah",
    desc: "Infrastruktur jalan yang baik, dekat akses tol dan stasiun commuter line untuk mobilitas optimal",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },

  {
    title: "Listrik & Air",
    desc: "Infrastruktur utilitas berkualitas dengan listrik PLN dan sumber air bersih yang terjamin",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

const carouselGroups = [
  {
    id: "swimming-pool",
    label: "Swimming Pool",
    images: [
      "/assets/img/facilities/swimming-pool/swimming-1.webp",
      "/assets/img/facilities/swimming-pool/swimming-2.webp",
      "/assets/img/facilities/swimming-pool/swimming-3.webp",
      "/assets/img/facilities/swimming-pool/swimming-4.webp",
    ],
  },
  {
    id: "clubhouse",
    label: "Clubhouse",
    images: [
      "/assets/img/facilities/clubhouse/clubhouse-1.webp",
      "/assets/img/facilities/clubhouse/clubhouse-2.webp",
      "/assets/img/facilities/clubhouse/clubhouse-3.webp",
    ],
  },
  {
    id: "playground",
    label: "Playground",
    images: ["/assets/img/facilities/playground/playground-1.webp"],
  },
];

export default function Facilities() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const [swimRef, swimApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const [clubRef, clubApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const [playRef, playApi] = useEmblaCarousel({ loop: true, skipSnaps: false });

  const [swimSelected, setSwimSelected] = useState(0);
  const [clubSelected, setClubSelected] = useState(0);
  const [playSelected, setPlaySelected] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

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
    if (!swimApi) return;
    const onSelect = () => setSwimSelected(swimApi.selectedScrollSnap());
    swimApi.on("select", onSelect);
    onSelect();
  }, [swimApi]);

  useEffect(() => {
    if (!clubApi) return;
    const onSelect = () => setClubSelected(clubApi.selectedScrollSnap());
    clubApi.on("select", onSelect);
    onSelect();
  }, [clubApi]);

  useEffect(() => {
    if (!playApi) return;
    const onSelect = () => setPlaySelected(playApi.selectedScrollSnap());
    playApi.on("select", onSelect);
    onSelect();
  }, [playApi]);

  const swimScrollNext = useCallback(() => {
    if (swimApi) swimApi.scrollNext();
  }, [swimApi]);

  const swimScrollPrev = useCallback(() => {
    if (swimApi) swimApi.scrollPrev();
  }, [swimApi]);

  const clubScrollNext = useCallback(() => {
    if (clubApi) clubApi.scrollNext();
  }, [clubApi]);

  const clubScrollPrev = useCallback(() => {
    if (clubApi) clubApi.scrollPrev();
  }, [clubApi]);

  const playScrollNext = useCallback(() => {
    if (playApi) playApi.scrollNext();
  }, [playApi]);

  const playScrollPrev = useCallback(() => {
    if (playApi) playApi.scrollPrev();
  }, [playApi]);

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  return (
    <section
      id="facilities"
      className="py-20 relative overflow-hidden bg-[#0f0e0c]"
      ref={ref}
    >
      {/* Decorative element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-48 bg-gradient-to-b from-transparent via-[#c8a96e] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-start gap-8">
            <div className="flex-shrink-0">
              <div className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-3">
                Fasilitas Lengkap
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-white font-light leading-tight">
                Kehidupan
                <br />
                <span className="text-[#c8a96e] italic">Sempurna</span>
              </h2>
            </div>
            <div className="hidden md:block pt-12 flex-1">
              <div className="w-full h-px bg-gradient-to-r from-[#c8a96e]/40 to-transparent" />
            </div>
          </div>
          <p className="text-white/90 max-w-xl mt-6 font-light leading-relaxed">
            Privé Hills Residence hadir dengan fasilitas lengkap yang dirancang
            untuk memberikan pengalaman hunian terbaik bagi seluruh keluarga
            Anda.
          </p>
        </div>

        {/* Facilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {facilities.map((f, i) => (
            <div
              key={i}
              className={`group bg-[#0f0e0c] p-8 hover:bg-[#1a1814] transition-all duration-500 cursor-default ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-[#c8a96e]/60 group-hover:text-[#c8a96e] mb-5 transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="text-[#c8a96e] text-xl font-bold mb-3 group-hover:text-[#c8a96e] transition-colors duration-300">
                {f.title}
              </h3>
              <div
                className="text-white/90 text-sm leading-relaxed prose-desc"
                dangerouslySetInnerHTML={{ __html: f.desc }}
              />
              <div className="mt-6 w-6 h-px bg-[#c8a96e]/40 group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Facility Carousels */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {carouselGroups.map((group, groupIndex) => {
            const isSwimming = group.id === "swimming-pool";
            const isClubhouse = group.id === "clubhouse";
            const isPlayground = group.id === "playground";

            const emblaRef = isSwimming
              ? swimRef
              : isClubhouse
                ? clubRef
                : playRef;
            const selectedIndex = isSwimming
              ? swimSelected
              : isClubhouse
                ? clubSelected
                : playSelected;
            const scrollNext = isSwimming
              ? swimScrollNext
              : isClubhouse
                ? clubScrollNext
                : playScrollNext;
            const scrollPrev = isSwimming
              ? swimScrollPrev
              : isClubhouse
                ? clubScrollPrev
                : playScrollPrev;

            return (
              <div
                key={group.id}
                className={`transition-all duration-800 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${500 + groupIndex * 200}ms` }}
              >
                {/* <h3 className="text-[#c8a96e] text-2xl font-bold mb-6 text-center">
                  {group.label}
                </h3> */}

                <div className="relative">
                  <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                    <div className="flex">
                      {group.images.map((image, index) => (
                        <div
                          key={index}
                          className="flex-[0_0_100%] min-w-0 relative aspect-video cursor-pointer"
                          onClick={() => openModal(image)}
                        >
                          <Image
                            src={image}
                            alt={`${group.label} ${index + 1}`}
                            fill
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white text-lg font-semibold tracking-wide drop-shadow-md">
                              {group.label}
                            </p>
                            <p className="text-white/80 text-sm mt-1">
                              {index + 1} of {group.images.length}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation buttons */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Dots indicator */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {group.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const api = isSwimming
                            ? swimApi
                            : isClubhouse
                              ? clubApi
                              : playApi;
                          if (api) api.scrollTo(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === selectedIndex
                            ? "bg-[#c8a96e]"
                            : "bg-white/50"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for enlarged images */}
        {isModalOpen && modalImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-xl max-h-full w-full">
              <Image
                src={modalImage}
                alt="Enlarged facility image"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
