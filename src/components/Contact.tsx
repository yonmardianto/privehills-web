"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

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

  const handleWhatsApp = () => {
    const msg = `Halo, saya ${form.name}. Nomor HP: ${form.phone}. ${form.message || "Saya tertarik dengan Privé Hills Residence dan ingin mendapatkan informasi lebih lanjut."}`;
    window.open(
      `https://wa.me/6287867309782?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden bg-[#0f0e0c]"
      ref={ref}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('/assets/img/photo-contact.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c] via-transparent to-[#0f0e0c]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="ornament-divider mb-6">
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase">
              Hubungi Kami
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light mb-4">
            Wujudkan <span className="text-[#c8a96e] italic">Impian</span>
            <br />
            Hunian Anda
          </h2>
          <p className="text-white/50 max-w-md mx-auto font-light">
            Tim kami siap membantu Anda menemukan unit yang paling sesuai dengan
            kebutuhan dan anggaran Anda.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-800 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Contact form */}
          <div className="bg-[#1a1814] border border-white/5 p-8">
            <div className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-6">
              Formulir Konsultasi
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Masukkan nama Anda"
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:border-[#c8a96e]/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  placeholder="08xx xxxx xxxx"
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:border-[#c8a96e]/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">
                  Pesan (Opsional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Tipe unit yang diminati, pertanyaan, dll..."
                  rows={4}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white/80 text-sm placeholder-white/20 focus:border-[#c8a96e]/50 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 bg-[#c8a96e] text-[#0f0e0c] py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#e4cc9a] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Kirim via WhatsApp
              </button>
            </div>
          </div>

          {/* Info panel */}
          <div className="flex flex-col justify-between gap-6">
            {/* Direct contacts */}
            <div className="space-y-4">
              <div className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-6">
                Kontak Langsung
              </div>

              {[
                {
                  label: "Marketing Office",
                  value: "+62 878-6730-9782",
                  icon: (
                    <svg
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
                      <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
                    </svg>
                  ),
                  href: "https://wa.me/6287867309782?text=Halo,%20saya%20ingin%20mengetahui%20tentang%20Prive%20Hills%20Residence",
                },

                {
                  label: "Email Marketing",
                  value: "marketing@privehillsresidence.id",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  href: "mailto:marketing@privehillsresidence.id",
                },

                {
                  label: "Admin Office (Fransisca)",
                  value: "+62 813-2149-053",
                  icon: (
                    <svg
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
                      <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
                    </svg>
                  ),
                  href: "https://wa.me/628132149053?text=Halo%20Admin%20Prive%20Hills%20Residence",
                },

                {
                  label: "Email Admin",
                  value: "admin@privehillsresidence.id",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  href: "mailto:admin@privehillsresidence.id",
                },

                {
                  label: "Show Unit",
                  value: "Pamulang, Tangerang Selatan",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                  ),
                  href: "https://maps.app.goo.gl/EK5MoVwUBqbSSx6T6",
                },
                {
                  label: "Jam Operasional",
                  value: "Setiap Hari: 09.00 – 17.00 WIB",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  href: "#",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#1a1814] border border-white/5 px-5 py-4 hover:border-[#c8a96e]/40 transition-all duration-300 group"
                >
                  <div className="text-[#c8a96e]/60 group-hover:text-[#c8a96e] transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/30 text-xs tracking-widest uppercase">
                      {item.label}
                    </div>
                    <div className="text-white/80 text-sm mt-0.5">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Big WhatsApp CTA */}
            <a
              href="https://wa.me/6287867309782?text=Halo%2C%20saya%20tertarik%20dengan%20Prive%20Hills%20Residence"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 border-2 border-[#c8a96e] py-5 text-[#c8a96e] hover:bg-[#c8a96e] hover:text-[#0f0e0c] transition-all duration-400 group"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <div className="font-display text-xl font-light">
                  Chat WhatsApp Sekarang
                </div>
                <div className="text-xs tracking-widest uppercase opacity-60">
                  Respon Cepat & Gratis
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
