"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Promo", href: "#promo" },
    {
      label: "Tipe Unit",
      href: "#",
      submenu: [
        { label: "Hunian", href: "#units-hunian" },
        { label: "Komersial", href: "#units-komersial" },
        { label: "Desain Mendatang", href: "#upcoming-design" },
      ],
    },
    { label: "Testimonial", href: "#testimonials" },
    { label: "Fasilitas", href: "#facilities" },
    { label: "Lokasi", href: "#location" },
    { label: "Kontak", href: "#contact" },
    {
      label: "Kalkulator KPR",
      href: "#",
      onClick: () => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("openKprCalculator"));
        }
      },
    },
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
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex-shrink-0">
            <Image
              src="/assets/img/logo-white.svg"
              alt="Privé Hills Logo"
              width={130}
              height={130}
              sizes="130px"
              className="object-contain transition-opacity duration-300 contrast-500 saturate-300 [image-rendering:crisp-edges]"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              <a
                href={link.href}
                onClick={link.onClick}
                className="text-white hover:text-[#c8a96e] text-sm tracking-widest uppercase font-light transition-colors duration-300 relative"
              >
                {link.label}
                {link.submenu && (
                  <svg
                    className="w-3 h-3 mt-0.5 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c8a96e] transition-all duration-300 group-hover:w-full" />
              </a>

              {/* Submenu */}
              {link.submenu && (
                <ul className="absolute left-0 top-full mt-0 w-48 rounded-xl bg-[#0f0e0c]/90 backdrop-blur-md border border-[#c8a96e]/20 py-2 opacity-0 pointer-events-none transition-transform duration-200 transform -translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
                  {link.submenu.map((sublink) => (
                    <li key={sublink.label}>
                      <a
                        href={sublink.href}
                        className="block text-white/70 hover:text-[#c8a96e] text-sm tracking-widest uppercase font-light px-4 py-2"
                      >
                        {sublink.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/6287867309782?text=Halo,%20saya%20tertarik%20dengan%20Prive%20Hills%20Residence"
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
            <div key={link.label}>
              {link.submenu ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSubmenu((prev) =>
                        prev === link.label ? null : link.label,
                      )
                    }
                    className="w-full text-left text-white/70 hover:text-[#c8a96e] text-sm tracking-widest uppercase font-light transition-colors flex items-center justify-between"
                  >
                    {link.label}
                    <span className="text-xs">
                      {mobileSubmenu === link.label ? "▲" : "▼"}
                    </span>
                  </button>

                  {mobileSubmenu === link.label && (
                    <div className="mt-2 space-y-2 pl-4">
                      {link.submenu.map((sublink) => (
                        <a
                          key={sublink.label}
                          href={sublink.href}
                          onClick={() => setMenuOpen(false)}
                          className="block text-white/70 hover:text-[#c8a96e] text-sm tracking-widest uppercase font-light"
                        >
                          {sublink.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white/70 hover:text-[#c8a96e] text-sm tracking-widest uppercase font-light"
                >
                  {link.label}
                </a>
              )}
            </div>
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
