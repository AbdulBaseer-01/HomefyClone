"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const PRODUCTS = [
  {
    name: "Wardrobes",
    desc: "Strong, spacious and custom-made storage for every home.",
    image: "/int-1.webp",
    href: "/products/wardrobes",
  },
  {
    name: "Sofas",
    desc: "Comfortable seating designed for daily family use.",
    image: "/int-2.webp",
    href: "/products/sofas",
  },
  {
    name: "Lighting",
    desc: "Beautiful lights that brighten and elevate your space.",
    image: "/int-3.webp",
    href: "/products/lighting",
  },
  {
    name: "Wall Panels",
    desc: "Premium wall finishes that transform plain rooms.",
    image: "/int-4.webp",
    href: "/products/wall-panels",
  },
];

export default function OurProducts() {
  const railRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!railRef.current) return;

    railRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="uppercase tracking-widest text-sm text-[#886c46] mb-2">
              Products
            </p>

            <h2 className={`${playfair.className} text-4xl md:text-6xl font-semibold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}>
              Browse our collections
            </h2>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-3 md:left-1 top-1/2 -translate-y-1/8 z-20
                     md:h-32 h-20 w-12 rounded-full bg-[#886c46]
                     border border-black/20 shadow-md
                     flex items-center justify-center
                     hover:bg-[#886c46d0] transition"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-3 md:right-1 top-1/2 -translate-y-1/8 z-20
                     md:h-32 h-20 w-12 rounded-full bg-[#886c46]
                     border border-black/20 shadow-md
                     flex items-center justify-center
                     hover:bg-[#886c46d0] transition"
        >
          <ArrowRight size={18} />
        </button>

        {/* Product rail */}
        <div
          ref={railRef}
          className="flex gap-8 overflow-x-hidden scroll-smooth scrollbar-hide py-4 px-12"
        >
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="min-w-[320px] h-96 shrink-0 rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-black/10 via-black/30 to-black/60
                              group-hover:from-black/40 group-hover:via-black/60 group-hover:to-black/90
                              transition duration-700" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="px-4 py-2 bg-[#d7a661] text-black text-xs font-bold rounded-full w-fit">
                  PREMIUM
                </span>

                <div>
                  <h3
                    className={`${playfair.className} text-2xl md:text-3xl font-semibold text-white mb-2
                                group-hover:text-[#d7a661] transition`}
                  >
                    {p.name}
                  </h3>

                  <p className={`${inter.className} text-white/90 text-sm mb-4 max-w-xs`}>
                    {p.desc}
                  </p>

                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white
                               border-b border-white/60 pb-1 hover:opacity-70 transition"
                  >
                    View product <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
