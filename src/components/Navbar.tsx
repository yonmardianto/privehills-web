"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Promo", href: "#promo" },
    { label: "Tipe Unit", href: "#units" },
    { label: "Testimonial", href: "#testimonials" },
    { label: "Fasilitas", href: "#facilities" },
    { label: "Lokasi", href: "#location" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f0e0c]/95 backdrop-blur-md shadow-lg shadow-black/40 py-3"
          : "backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#c8a96e]/60 flex items-center justify-center group-hover:border-[#c8a96e] transition-colors">
            <span className="text-[#c8a96e] font-display text-lg font-semibold leading-none">
              P
            </span>
          </div>
          <div>
            <div className="text-white font-display text-base font-medium tracking-wider leading-none">
              PRIVÉ HILLS
            </div>
            <div className="text-[#c8a96e] text-[10px] tracking-[0.3em] uppercase font-light">
              Residence
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white hover:text-[#c8a96e] text-sm tracking-widest uppercase font-light transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c8a96e] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/628111234567?text=Halo,%20saya%20tertarik%20dengan%20Prive%20Hills%20Residence"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#c8a96e] text-[#0f0e0c] px-5 py-2.5 text-xs tracking-widest uppercase font-semibold hover:bg-[#e4cc9a] transition-colors duration-300"
        >
          <WhatsappIcon />
          Hubungi Kami
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#c8a96e] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#c8a96e] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#c8a96e] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="bg-[#0f0e0c]/98 px-6 py-6 space-y-4 border-t border-[#c8a96e]/20">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/70 hover:text-[#c8a96e] text-sm tracking-widest uppercase font-light transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/628111234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#c8a96e] text-[#0f0e0c] px-5 py-3 text-xs tracking-widest uppercase font-semibold w-full justify-center mt-4"
          >
            <WhatsappIcon />
            Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  );
}

function WhatsappIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
