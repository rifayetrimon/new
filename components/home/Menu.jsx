"use client";

import { assetPath } from "../../lib/assetPath";
import { useState } from "react";

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(null);

  const features = [
    {
      icon: assetPath("/icons/cloud.svg"),
      title: "Selamat & Terjamin",
      alt: "Ikon keselamatan data awan eMasjid",
      text: (
        <>
          Data pengguna dilindungi <br /> dengan selamat
        </>
      ),
    },
    {
      icon: assetPath("/icons/profile.svg"),
      title: "Mesra Pengguna",
      alt: "Ikon akses mudah alih eMasjid",
      text: (
        <>
          Akses lancar melalui <br /> telefon & tablet
        </>
      ),
    },
    {
      icon: assetPath("/icons/time.svg"),
      title: "Akses 24/7",
      alt: "Ikon akses sistem 24 jam",
      text: (
        <>
          Boleh digunakan <br /> bila-bila masa
        </>
      ),
    },
    {
      icon: assetPath("/icons/pc.svg"),
      title: "Kemaskini Automatik",
      alt: "Ikon pemantauan sistem automatik",
      text: (
        <>
          Pengawasan berterusan oleh <br /> MAIS
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#F1F1F1] py-16 px-4" aria-labelledby="features-title">
      <h2 id="features-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#21536E]">
        Kelebihan e-Masjid
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-[#21536E]">
        {features.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className="group flex flex-col items-center text-center sm:text-left cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onTouchStart={() => setActiveIndex(index)}
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="w-20 h-20 object-contain mb-4"
              />

              <div className="relative w-40 h-1 mb-4">
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-[#0C9F77]" : "bg-black"
                    }`}
                />
                <span
                  className={`absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-500 ${isActive
                      ? "left-[calc(100%-12px)] bg-[#0C9F77]"
                      : "bg-black"
                    }`}
                />
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}