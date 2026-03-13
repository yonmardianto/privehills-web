"use client";
import { useEffect, useRef, useState } from "react";

const bonusOptions = [
  {
    id: "subsidi-dp",
    title: "Subsidi Angsuran KPR <br/>2 Tahun",
    icon: (
      <svg
        className="w-10 h-10 md:w-12 md:h-12"
        fill="#c8a96e"
        viewBox="0 0 24 24"
      >
        <path d="M11.6708039,8.5371684 C11.503528,8.5371684 11.367924,8.66969751 11.367924,8.83318046 L11.367924,11.0445245 C11.367924,11.2080074 11.503528,11.3405366 11.6708039,11.3405366 L18.3341608,11.3405366 C18.5014367,11.3405366 18.6370406,11.2080074 18.6370406,11.0445245 L18.6370406,8.83318046 C18.6370406,8.66969751 18.5014367,8.5371684 18.3341608,8.5371684 L11.6708039,8.5371684 Z M15.7560704,1.50078586 C16.6780043,1.54459492 17.3414965,1.72693705 17.7606859,2.11278254 C18.1758315,2.49490586 18.389343,3.04833287 18.4311058,3.780032 L18.4311058,5.87677957 C18.4311058,6.2446162 18.1259969,6.54280671 17.7496261,6.54280671 C17.3732552,6.54280671 17.0681464,6.2446162 17.0681464,5.87677957 L17.0692614,3.81811561 C17.0469311,3.43707152 16.9563297,3.20223037 16.8262275,3.08247698 C16.7001691,2.96644576 16.3166736,2.86105282 15.7229752,2.83205429 L2.64726556,2.83155392 C2.1095373,2.85193653 1.76087307,2.95373651 1.59169679,3.09859187 C1.46159434,3.2099907 1.36406148,3.51612459 1.36295936,4.04504207 L1.35992655,15.8147515 C1.40976422,16.3293067 1.52339713,16.6717349 1.66817892,16.8431562 C1.77796835,16.9731466 2.11920075,17.103677 2.62085458,17.1665781 L15.7369661,17.1667184 C16.3509087,17.1790396 16.7131902,17.0871239 16.8347153,16.9638789 C16.9695445,16.8271414 17.0681464,16.4672026 17.0681464,15.8775168 L17.0681464,13.8333741 C17.0681464,13.4655375 17.3732552,13.167347 17.7496261,13.167347 C18.1259969,13.167347 18.4311058,13.4655375 18.4311058,13.8333741 L18.4311058,15.8775168 C18.4311058,16.7789214 18.2469047,17.4513334 17.8161279,17.888207 C17.3720469,18.3385731 16.6660308,18.5176989 15.7229752,18.4986323 L2.54049252,18.4939853 C1.64331868,18.3898604 0.999060442,18.1434145 0.617058313,17.691125 C0.270048552,17.2802664 0.0762555036,16.6962788 0,15.8775168 L0,4.04368747 C0.00182369827,3.16803158 0.2117168,2.50922393 0.693540444,2.09666765 C1.13629026,1.7175679 1.77311668,1.5316328 2.62085458,1.5 L15.7560704,1.50078586 Z M18.3341608,7.20511411 C19.2541784,7.20511411 20,7.93402425 20,8.83318046 L20,11.0445245 C20,11.9436807 19.2541784,12.6725908 18.3341608,12.6725908 L11.6708039,12.6725908 C10.7507863,12.6725908 10.0049647,11.9436807 10.0049647,11.0445245 L10.0049647,8.83318046 C10.0049647,7.93402425 10.7507863,7.20511411 11.6708039,7.20511411 L18.3341608,7.20511411 Z M13.3366431,9.14442223 C12.8766343,9.14442223 12.5037235,9.50414411 12.5037235,9.94788354 C12.5037235,10.391623 12.8766343,10.7513449 13.3366431,10.7513449 C13.7966519,10.7513449 14.1695627,10.391623 14.1695627,9.94788354 C14.1695627,9.50414411 13.7966519,9.14442223 13.3366431,9.14442223 Z" />
      </svg>
    ),
  },
  {
    id: "kitchen",
    title: "Kitchen Set",
    icon: (
      <svg
        fill="#c8a96e"
        className="w-10 h-10 md:w-12 md:h-12"
        viewBox="0 -1.05 48.095 48.095"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M9 0 A 1.0001 1.0001 0 0 0 8 1L8 4.484375L1.4179688 9.1855469 A 1.0001 1.0001 0 0 0 1 10L1 14 A 1.0001 1.0001 0 0 0 2 15L24 15 A 1.0001 1.0001 0 0 0 25 14L25 10 A 1.0001 1.0001 0 0 0 24.582031 9.1855469L18 4.4863281L18 1 A 1.0001 1.0001 0 0 0 17 0L9 0 z M 10 2L16 2L16 5 A 1.0001 1.0001 0 0 0 16.417969 5.8144531L23 10.513672L23 13L3 13L3 10.513672L9.5820312 5.8144531 A 1.0001 1.0001 0 0 0 10 5L10 2 z M 5.5 21C4.8457598 21 4.2978026 21.418077 4.0917969 22L1 22 A 1.0001 1.0001 0 0 0 0 23L0 45 A 1.0001 1.0001 0 0 0 1 46L47.095703 46 A 1.0001 1.0001 0 0 0 48.095703 45L48.095703 23 A 1.0001 1.0001 0 0 0 47.095703 22L21.908203 22C21.702197 21.418077 21.15424 21 20.5 21L5.5 21 z M 2 24L5.5 24L20.5 24L24.095703 24L24.095703 44L2 44L2 24 z M 26.095703 24L46.095703 24L46.095703 30L26.095703 30L26.095703 24 z M 5 26 A 1.0001 1.0001 0 0 0 4 27L4 41 A 1.0001 1.0001 0 0 0 5 42L21 42 A 1.0001 1.0001 0 0 0 22 41L22 27 A 1.0001 1.0001 0 0 0 21 26L5 26 z M 30 26 A 1.0001 1.0001 0 1 0 30 28L42 28 A 1.0001 1.0001 0 1 0 42 26L30 26 z M 6 28L20 28L20 40L6 40L6 28 z M 26.095703 32L46.095703 32L46.095703 44L26.095703 44L26.095703 32 z M 29.984375 34.986328 A 1.0001 1.0001 0 0 0 29 36L29 41 A 1.0001 1.0001 0 1 0 31 41L31 36 A 1.0001 1.0001 0 0 0 29.984375 34.986328 z"></path>
        </g>
      </svg>
    ),
  },
  {
    id: "voucher-belanja",
    title: "Voucher Indomaret <br/>Rp 1,5JT",
    icon: (
      <svg
        fill="#c8a96e"
        viewBox="0 0 32 32"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g transform="matrix(1,0,0,1,-48,-240)">
            <path d="M77,253C75.344,253 74,254.344 74,256C74,257.656 75.344,259 77,259L77,263C77,264.105 76.105,265 75,265C70.157,265 57.843,265 53,265C51.895,265 51,264.105 51,263C51,261.255 51,259 51,259C52.656,259 54,257.656 54,256C54,254.344 52.656,253 51,253L51,249C51,247.895 51.895,247 53,247C57.843,247 70.157,247 75,247C76.105,247 77,247.895 77,249C77,250.745 77,253 77,253Z"></path>{" "}
            <path d="M77,254C77.552,254 78,253.552 78,253L78,249C78,247.343 76.657,246 75,246L53,246C51.343,246 50,247.343 50,249L50,253C50,253.552 50.448,254 51,254C52.104,254 53,254.896 53,256C53,257.104 52.104,258 51,258C50.448,258 50,258.448 50,259L50,263C50,264.657 51.343,266 53,266L75,266C76.657,266 78,264.657 78,263L78,259C77.99,258.412 77.628,258.103 77,258C75.896,258 75,257.104 75,256C75,254.896 75.896,254 77,254ZM70,248L70,250C70,250.552 69.552,251 69,251C68.448,251 68,250.552 68,250L68,248L53,248C52.448,248 52,248.448 52,249C52,249 52,252.126 52,252.126C53.724,252.571 55,254.137 55,256C55,257.863 53.724,259.429 52,259.874C52,259.874 52,263 52,263C52,263.552 52.448,264 53,264L68,264L68,262C68,261.448 68.448,261 69,261C69.552,261 70,261.448 70,262L70,264C70,264 75,264 75,264C75.552,264 76,263.552 76,263L76,259.874C74.276,259.429 73,257.862 73,256C73,254.137 74.276,252.571 76,252.126L76,249C76,248.448 75.552,248 75,248L70,248ZM68,254L68,258C68,258.552 68.448,259 69,259C69.552,259 70,258.552 70,258L70,254C70,253.448 69.552,253 69,253C68.448,253 68,253.448 68,254Z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: "voucher-interior",
    title: "Voucher Interior <br/>Rp 50JT",
    icon: (
      <svg
        fill="#c8a96e"
        viewBox="0 0 32 32"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g transform="matrix(1,0,0,1,-48,-240)">
            <path d="M77,253C75.344,253 74,254.344 74,256C74,257.656 75.344,259 77,259L77,263C77,264.105 76.105,265 75,265C70.157,265 57.843,265 53,265C51.895,265 51,264.105 51,263C51,261.255 51,259 51,259C52.656,259 54,257.656 54,256C54,254.344 52.656,253 51,253L51,249C51,247.895 51.895,247 53,247C57.843,247 70.157,247 75,247C76.105,247 77,247.895 77,249C77,250.745 77,253 77,253Z"></path>{" "}
            <path d="M77,254C77.552,254 78,253.552 78,253L78,249C78,247.343 76.657,246 75,246L53,246C51.343,246 50,247.343 50,249L50,253C50,253.552 50.448,254 51,254C52.104,254 53,254.896 53,256C53,257.104 52.104,258 51,258C50.448,258 50,258.448 50,259L50,263C50,264.657 51.343,266 53,266L75,266C76.657,266 78,264.657 78,263L78,259C77.99,258.412 77.628,258.103 77,258C75.896,258 75,257.104 75,256C75,254.896 75.896,254 77,254ZM70,248L70,250C70,250.552 69.552,251 69,251C68.448,251 68,250.552 68,250L68,248L53,248C52.448,248 52,248.448 52,249C52,249 52,252.126 52,252.126C53.724,252.571 55,254.137 55,256C55,257.863 53.724,259.429 52,259.874C52,259.874 52,263 52,263C52,263.552 52.448,264 53,264L68,264L68,262C68,261.448 68.448,261 69,261C69.552,261 70,261.448 70,262L70,264C70,264 75,264 75,264C75.552,264 76,263.552 76,263L76,259.874C74.276,259.429 73,257.862 73,256C73,254.137 74.276,252.571 76,252.126L76,249C76,248.448 75.552,248 75,248L70,248ZM68,254L68,258C68,258.552 68.448,259 69,259C69.552,259 70,258.552 70,258L70,254C70,253.448 69.552,253 69,253C68.448,253 68,253.448 68,254Z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: "canopy",
    title: "Canopy",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M3 9l9-7 9 7v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M9 22V12h6v10"
        />
      </svg>
    ),
  },
  {
    id: "cctv",
    title: "CCTV 2 Unit",
    icon: (
      <svg
        fill="#c8a96e"
        viewBox="0 -8 72 72"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>security-camera</title>
          <polygon points="12.28 29.8 22.23 35.37 25.58 34.29 11.11 26.18 12.28 29.8"></polygon>
          <path d="M58.7,37.23v1.91h-8l-9.82-9.82L60.12,23.1a1.77,1.77,0,0,0,1.14-2.24L57.51,9.26a1.79,1.79,0,0,0-2.25-1.15L11.7,22.22a1.78,1.78,0,0,0-1.18,1.25l17.74,10,8.17-2.65L49,43.35H58.7v1.31A3.38,3.38,0,0,0,61.48,48V33.91A3.37,3.37,0,0,0,58.7,37.23ZM40.36,16.55c-.18-.55,0-1.09.31-1.2L53.3,11.27c.35-.11.77.24,1,.78s0,1.09-.31,1.2L41.31,17.33C41,17.45,40.54,17.09,40.36,16.55Z"></path>
        </g>
      </svg>
    ),
  },
];

export default function BonusExtra() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

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
      id="bonus-extra"
      className="py-28 relative overflow-hidden bg-[#0c0b09]"
      ref={ref}
    >
      {/* Subtle background texture lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(200,169,110,0.04) 80px)`,
        }}
      />

      {/* Top gold border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/40 to-transparent" />

      {/* Side accent line */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-48 bg-gradient-to-b from-transparent via-[#c8a96e] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-end gap-8">
            <h2 className="font-display text-2xl md:text-4xl text-white font-light leading-tight">
              Pilih <span className="text-[#c8a96e] italic">Bonus Extra</span>
            </h2>
            <div className="hidden md:block flex-1 mb-3">
              <div className="w-full h-px bg-gradient-to-r from-[#c8a96e]/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {bonusOptions.map((bonus, i) => {
            return (
              <div
                key={bonus.id}
                className={`relative group cursor-pointer transition-all duration-500 bg-[#0c0b09] hover:bg-[#161410] ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } `}
              >
                <div className="p-8 text-center">
                  {/* Icon */}
                  <div
                    className={`mb-5 flex justify-center transition-colors duration-300 text-[#c8a96e]/40`}
                  >
                    {bonus.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display text-md md:text-xl font-light mb-1 transition-colors duration-300 text-white group-hover:text-[#c8a96e]`}
                    dangerouslySetInnerHTML={{ __html: bonus.title }}
                  ></h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional text grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            "Free <br/> PPN",
            "Free <br/> BPHTB AJB BN SHM",
            "Free <br/> DP 5%",
            "Free <br/> Biaya KPR 40 JT",
            "Free <br/> 2 AC",
            "Free <br/> Smart Door Lock",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#c8a96e]/30 bg-[#c8a96e]/80 p-2 text-center text-sm md:text-base text-black"
              dangerouslySetInnerHTML={{ __html: item }}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom gold border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent" />
    </section>
  );
}
