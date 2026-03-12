"use client";
import { useEffect, useRef, useState } from "react";

const facilities = [
  {
    title: "Keamanan",
    desc: `Sistem keamanan terpadu dengan one gate system, CCTV, dan petugas keamanan profesional`,
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
    title: "Pendidikan",
    desc: `<ul>
             <li>5 menit ke TK SD SMP SMA Kharisma Bangsa International School</li>
             <li>10 menit ke SD SMP Mumtaza Cambridge Islamic School</li>
             <li>5 menit ke Universitas Terbuka dan Universitas Sahid</li>
          </ul>`,
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
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M12 14v7"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M7 21h10"
        />
      </svg>
    ),
  },

  {
    title: "Kesehatan",
    desc: `<ul>
             <li>RS Mitra Keluarga (5 menit)</li>
             <li>⁠RSIA Bunda (8 menit)</li>
             <li>⁠RS Sari Asih (10 menit)</li>
          </ul>`,
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
          d="M12 8v8m4-4H8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M4 13a8 8 0 1116 0 8 8 0 01-16 0z"
        />
      </svg>
    ),
  },

  {
    title: "Perbelanjaan",
    desc: `<ul><li>Indomaret Prive Hills (0 menit) </li>
           <li>⁠Superindo (5 menit) </li>
           <li>Pasar Modern Pondok Cabe (5 menit) </li>
           <li>Azko & Living Plaza (10 menit) </li>
           <li>⁠Mall The Park Sawangan (15 menit) </li>`,
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
    title: "Kuliner",
    desc: `<ul>
        <li>McDonald, KFC, Mie Gacoan, Kopi Kenangan (5 menit)</li>
        <li>Solaria, Hokben, Bebek Kaleyo, Sushi Yay, Mang Engking (10 menit)</li>
    </ul>`,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Fork */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M6 2v4m0 0a2 2 0 000 4v12M6 6h0M8 2v4M4 2v4"
        />
        {/* Spoon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M18 2a3 3 0 010 6v14"
        />
      </svg>
    ),
  },
  {
    title: "Tempat Ibadah",
    desc: `<ul>
           <li>Musollah Prive Hills</li>
           <li>⁠Masjid Jami Nurul Fadillah</li>
           <li>⁠Lithang Bakti</li>
           <li>⁠Gereja GBI Kunir</li>
           <li>⁠Vihara Avalokitesvara</li>
     </ul>`,
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
          d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
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

export default function Facilities() {
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

  return (
    <section
      id="facilities"
      className="py-28 relative overflow-hidden bg-[#0f0e0c]"
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
          <p className="text-white/50 max-w-xl mt-6 font-light leading-relaxed">
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
              <h3 className="text-white font-display text-xl font-light mb-3 group-hover:text-[#c8a96e] transition-colors duration-300">
                {f.title}
              </h3>
              <div
                className="text-white/40 text-sm font-light leading-relaxed prose-desc"
                dangerouslySetInnerHTML={{ __html: f.desc }}
              />
              <div className="mt-6 w-6 h-px bg-[#c8a96e]/40 group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Full-width image strip */}
        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 transition-all duration-800 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {[
            { src: "/assets/img/swimming_pool.webp", label: "Swimming Pool" },
            { src: "/assets/img/clubhouse.webp", label: "Clubhouse" },
            { src: "/assets/img/playground.webp", label: "Playground" },
          ].map((item, i) => (
            // <div key={i} className="gallery-item aspect-video overflow-hidden">
            <div
              key={i}
              className="relative w-full sm:flex-1 aspect-video overflow-hidden rounded-xl gallery-item"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Absolutely positioned text */}
              <p className="absolute bottom-4 left-4 text-white text-lg font-semibold tracking-wide drop-shadow-md">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
