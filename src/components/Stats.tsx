"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "115", label: "Unit" },
  { value: "6", label: "Tipe Unit" },
  { value: "2018", label: "Tahun Berdiri" },
  { value: "98%", label: "Kepuasan Penghuni" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="relative bg-[#1a1814] border-y border-white/5 py-0"
      ref={ref}
    >
      {/* Gold top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c8a96e]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-10 px-6 text-center border-r border-white/5 last:border-r-0 transition-all duration-800 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="font-display text-4xl md:text-5xl text-[#c8a96e] font-light mb-1">
                {stat.value}
              </div>
              <div className="text-white/30 text-xs tracking-[0.3em] uppercase font-display">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c8a96e]/50 to-transparent" />
    </section>
  );
}
