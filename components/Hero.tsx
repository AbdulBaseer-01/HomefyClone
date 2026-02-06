"use client";

import { Bricolage_Grotesque } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ImagesSlider from "./ui/images-slider";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bricolage",
});

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // parallax movement
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const images = [
    "/int-1.webp",
    "/int-2.webp",
    "/int-3.webp",
    "/int-4.webp",
    "/int-5.webp",
  ];

  return (
    <section
      ref={ref}
      className={`relative w-full h-screen overflow-hidden ${bricolage.variable}`}
    >
      <ImagesSlider images={images} className="h-screen w-full">
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/55 z-10" />

        {/* hero content */}
        <motion.div
          style={{ y }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6"
        >
          {/* top label */}
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-widest text-xs text-white/80 mb-4"
          >
            <span className="block font-medium">
              Homefy Interio
            </span>
            Interior Design & Products in Hyderabad
          </motion.span>

          {/* main heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            // className="text-3xl md:text-5xl font-semibold text-[#efede8] leading-tight mb-6"
            className="bg-linear-to-r from-[#886c46] via-[#b79a6f] to-[#efe6d8] 
bg-clip-text text-transparent text-3xl md:text-5xl font-semibold mb-6"

          >
            Quality interiors designed
            <br />
            for modern Indian homes
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:block max-w-2xl text-white/80 mb-10 text-sm md:text-base"
          >
            Homefy Interio specializes in modern interior design,
            premium home décor, and customized interior products
            across Hyderabad — blending aesthetics, comfort, and
            functionality for everyday living.
          </motion.p>

          {/* CTA buttons */}
          <div className="flex gap-4">
            <MagneticButton href="/contactus" primary>
              Get Free Estimate
            </MagneticButton>

            <MagneticButton href="/inspiration-gallery">
              View Our Work
            </MagneticButton>
          </div>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}


function MagneticButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
    >
      <Link
        href={href}
        className={`px-6 py-3 rounded-2xl text-sm font-medium
        flex items-center justify-center transition-all duration-300
        ${
          primary
            ? "bg-[#886c46] backdrop-blur border border-white/30 text-white hover:bg-[#85602c]"
            : "border border-[#896129] text-white hover:bg-[#85602c]"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
