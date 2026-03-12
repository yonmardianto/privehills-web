import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#090807] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20 rounded-full border border-[#c8a96e]/60 flex items-center justify-center">
                <span className="text-[#c8a96e] font-display text-lg font-semibold leading-none text-center">
                  PRIVE HILLS
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
            </div>
            <p className="text-white text-sm font-light leading-relaxed">
              Hunian minimalis modern di perbukitan eksklusif Pamulang,
              Tangerang Selatan. Hadirkan privasi, keamanan, dan kenyamanan
              terbaik.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                {
                  id: "instagram",
                  link: "https://www.instagram.com/privehills.residence",
                  Icon: FaInstagram,
                },
                {
                  id: "facebook",
                  link: "https://www.facebook.com/residences.privehills/",
                  Icon: FaFacebook,
                },
              ].map(({ id, link, Icon }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={id}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#c8a96e]/40 hover:text-[#c8a96e] transition-all text-xs tracking-wider"
                >
                  <Icon className="text-lg" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-6">
              Navigasi
            </div>
            <ul className="space-y-3">
              {[
                { label: "Beranda", href: "#hero" },
                { label: "Promo Spesial", href: "#promo" },
                { label: "Tipe Unit", href: "#units" },
                { label: "Testimonial", href: "#testimonials" },
                { label: "Fasilitas", href: "#facilities" },
                { label: "Lokasi", href: "#location" },
                { label: "Hubungi Kami", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white hover:text-[#c8a96e] text-sm font-light transition-colors"
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-6">
              Informasi
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-white/50 text-xs tracking-widest uppercase mb-1">
                  Alamat
                </div>
                <div className="text-white text-sm font-light">
                  Pamulang, Tangerang Selatan,
                  <br />
                  Banten 15417
                </div>
              </div>
              <div>
                <div className="text-white/50 text-xs tracking-widest uppercase mb-1">
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/6287867309782?text=Halo,%20saya%20ingin%20mengetahui%20tentang%20Prive%20Hills%20Residence"
                  className="text-white text-sm font-light hover:text-[#c8a96e] transition-colors"
                >
                  +62 878-6730-9782
                </a>
              </div>
              <div>
                <div className="text-white/50 text-xs tracking-widest uppercase mb-1">
                  Email
                </div>
                <a
                  href="mailto:marketing@privehillsresidence.id"
                  className="text-white text-sm font-light hover:text-[#c8a96e] transition-colors"
                >
                  marketing@privehillsresidence.id
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-center">
          <div className="text-white text-xs font-light">
            © {new Date().getFullYear()} Privé Hills Residence. Hak Cipta
            Dilindungi.
          </div>
          {/* <div className="text-white/20 text-xs font-light">
            Marketing Gallery buka setiap hari 09.00 – 17.00 WIB
          </div> */}
        </div>
      </div>
    </footer>
  );
}
