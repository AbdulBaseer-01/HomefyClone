"use client";

import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const REASONS = [
  {
    index: "01",
    title: "Design-first thinking",
    desc: "Every space is shaped by proportion, light, and purpose — not trends.",
  },
  {
    index: "02",
    title: "End-to-end execution",
    desc: "Design, materials, execution, and delivery handled under one roof.",
  },
  {
    index: "03",
    title: "Transparent pricing",
    desc: "Clear scopes, honest estimates, and no hidden surprises.",
  },
  {
    index: "04",
    title: "On-time delivery",
    desc: "Structured workflows ensure predictable, timely completion.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const numberY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      className="px-8 py-12 text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{  y: 60 }}
          whileInView={{ y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:mb-24 mb-6 max-w-4xl"
        >
          <p className="text-sm uppercase tracking-widest text-[#886c46] mb-4">
            Why choose us
          </p>
          <h2 className={`${playfair.className} text-4xl md:text-6xl font-semibold pb-4 bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}>
            Spaces that feel
            <br />
            right — today and tomorrow
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">
          {["/int-1.webp", "/int-2.webp", "/int-3.webp", "/int-4.webp"].map(
            (src, i) => (
              <motion.div
                key={src}
                style={{ y: imageY }}
                initial={{ opacity: 0.5, scale: 1.08 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                viewport={{ once: false }}
                transition={{
                  duration: 1.1,
                  ease: "easeOut",
                }}
                className={`relative h-60 rounded-3xl overflow-hidden ${
                  i === 0 || i === 3 ? "md:col-span-2" : ""
                }`}
              >
                <Image
                  src={src}
                  alt="Interior"
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </motion.div>
            )
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
          {REASONS.map((r) => (
            <motion.div
              key={r.index}
              initial={{ opacity: 0.5, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative pl-24"
            >
              <motion.span
                style={{ y: numberY }}
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={`absolute left-0 top-0 text-[110px] text-[#886c46] leading-none select-none ${bebas.className}`}
              >
                {r.index}
              </motion.span>

              <h4 className="text-2xl font-medium mb-3 mt-2">
                {r.title}
              </h4>
              <p className="text-black/60 max-w-md">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
