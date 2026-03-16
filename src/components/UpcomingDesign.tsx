"use client";

import Image from "next/image";

export default function UpcomingDesign() {
  const items = [
    {
      title: "Upcoming",
      subtitle: "Tipe 2BR + Study (Crafting Modern Living)",
      status: "Progress 50%",
      description:
        "Unit baru dengan konsep mixed-use dan area hijau luas, siap hadir awal 2027.",
      image: "/assets/img/upcoming/upcoming-1.jpg",
    },
    {
      title: "Upcoming",
      subtitle: "Tipe 3BR Family Home",
      status: "Progress 35%",
      description:
        "Rancang bangun hunian keluarga dengan pencahayaan natural & ruang multifungsi.",

      image: "/assets/img/upcoming/upcoming-2.jpg",
    },
  ];

  return (
    <section id="upcoming-design" className="py-28 bg-[#0f0e0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="ornament-divider mb-6">
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase">
              Kembangkan Lebih Jauh
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-4">
            Upcoming <span className="text-[#c8a96e] italic">Design</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Lihat gambaran desain unit baru yang sedang dalam proses
            pembangunan. Sampai waktunya launching, ini preview terbaik proyek
            masa depan kami.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#161412] border border-white/10 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
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
              </div>
              <div className="px-5 pb-5 pt-2">
                <a
                  href="https://wa.me/6287867309782?text=Halo,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Upcoming%20Design%20di%20Prive%20Hills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full rounded-md bg-[#c8a96e] text-[#0f0e0c] px-3 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#e4cc9a] transition-colors"
                >
                  Hubungi Marketing
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
