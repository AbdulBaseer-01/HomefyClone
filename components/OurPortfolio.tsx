"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const PORTFOLIO = [
  {
    image: "/int-1.webp",
    name: "Ravi Kumar",
    location: "Banjara Hills, Hyderabad",
    rating: 5,
    satisfaction: "98%",
    project: "3BHK Interior Renovation",
  },
  {
    image: "/int-2.webp",
    name: "Anjali Sharma",
    location: "Whitefield, Bengaluru",
    rating: 4.5,
    satisfaction: "95%",
    project: "Modular Kitchen & Living",
  },
  {
    image: "/int-3.webp",
    name: "Mohd. Irfan",
    location: "Tolichowki, Hyderabad",
    rating: 5,
    satisfaction: "99%",
    project: "Custom Furniture Setup",
  },
  {
    image: "/int-4.webp",
    name: "Suresh Reddy",
    location: "Gachibowli, Hyderabad",
    rating: 4.8,
    satisfaction: "96%",
    project: "Turnkey Apartment Project",
  },
  {
    image: "/int-5.webp",
    name: "Neha Verma",
    location: "Kondapur, Hyderabad",
    rating: 4.7,
    satisfaction: "94%",
    project: "Bedroom & Wardrobe Design",
  },
  {
    image: "/int-1.webp",
    name: "Arjun Patel",
    location: "Madhapur, Hyderabad",
    rating: 5,
    satisfaction: "97%",
    project: "Complete Home Interiors",
  },
];

export default function OurPortfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-10 py-24 bg-[#EFEDE8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <p className="uppercase tracking-widest text-sm text-[#886c46] mb-3">
            Our Portfolio
          </p>
          <h2 className={`${playfair.className} text-4xl md:text-6xl font-semibold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}>
            Homes we’ve transformed,
            <br /> families we’ve satisfied
          </h2>
          <p className="text-black/60">
            Every project reflects our commitment to quality,
            transparency and customer happiness.
          </p>
        </motion.div>
<motion.div
  style={{ y: gridY }}
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18 },
    },
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="
    grid grid-cols-1 md:grid-cols-4 auto-rows-[260px] 
    gap-6
  "
>
  {PORTFOLIO.map((item, i) => {
    const bentoStyles = [
      "md:col-span-2 md:row-span-2", // big hero
      "md:col-span-2 md:row-span-1", // wide
      "md:col-span-1 md:row-span-1", // small
      "md:col-span-1 md:row-span-2", // tall
      "md:col-span-2 md:row-span-1", // wide
      "md:col-span-1 md:row-span-1", // small
    ];

    return (
      <motion.div
        key={i}
        variants={{
          hidden: { opacity: 0.5, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.9,
              ease: "easeOut",
            },
          },
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          e.currentTarget.style.setProperty("--x", `${x}px`);
          e.currentTarget.style.setProperty("--y", `${y}px`);
        }}
        className={`
          group relative overflow-hidden rounded-3xl
          border border-black/10 bg-black
          perspective-distant
          ${bentoStyles[i % bentoStyles.length]}
        `}
      >
        <motion.div
          className="relative w-full h-full"
          whileHover={{
            scale: 1.12,
            x: "calc(var(--x) / 30)",
            y: "calc(var(--y) / 30)",
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={item.image}
            alt={item.project}
            fill
            className="object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.18), transparent 40%)",
          }}
        />

        <motion.div
          className="
            absolute inset-0
            bg-linear-to-t from-black/80 via-black/40 to-transparent
            flex flex-col justify-end p-6
          "
        >
          <p className="text-sm text-white/80 mb-1">
            {item.project}
          </p>

          <h3 className="text-xl font-semibold text-white">
            {item.name}
          </h3>

          <p className="text-white/70 text-sm mb-4">
            {item.location}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star
                size={16}
                className="text-yellow-400 fill-yellow-400"
              />
              <span className="text-white text-sm font-medium">
                {item.rating}
              </span>
            </div>

            <span className="text-white text-sm">
              😊 {item.satisfaction} satisfied
            </span>
          </div>
        </motion.div>
      </motion.div>
    );
  })}
</motion.div>


      </div>
    </section>
  );
}
