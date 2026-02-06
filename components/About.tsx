"use client";

import { cn } from "@/lib/utils";
import { CardStack } from "./ui/card-stack";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function CardStackDemo() {
  return (
    <section className="mt-8  md:px-6 lg:px-8 overflow-hidden">
      
      <motion.h2
        initial={{ y: 0 }}
        whileInView={{ y: 0 }}
        exit={{ opacity: 0.1 }}
        viewport={{ once: false, margin: "-120px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`${playfair.className} text-4xl px-2 md:text-left text-center md:text-6xl font-semibold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}
      >
        How We{" "}
        Simplify Your
        Furnishing Experience
      </motion.h2>

      <motion.div
        initial={{  scale: 0.95 }}
        whileInView={{ scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center justify-center w-full py-8 mt-8 md:py-12 lg:py-16"
      >
        <CardStack items={CARDS} />
      </motion.div>
    </section>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-[#EFEDE8] text-[#886c46] px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Modern Living Spaces",
    designation: "Residential Interior Design",
    image: "/int-3.webp",
    content: (
      <p>
        We craft <Highlight>timeless interiors</Highlight> that balance
        functionality with elegance. Every space is designed to reflect
        comfort, luxury, and personality.
      </p>
    ),
  },
  {
    id: 1,
    name: "Workspace Design",
    designation: "Commercial Interiors",
    image: "/int-2.webp",
    content: (
      <p>
        Our designs enhance <Highlight>productivity & aesthetics</Highlight>,
        transforming offices into inspiring environments that people love
        working in.
      </p>
    ),
  },
  {
    id: 2,
    name: "Bespoke Bedrooms",
    designation: "Personalized Spaces",
    image: "/int-1.webp",
    content: (
      <p>
        From minimal to luxurious, we design bedrooms that feel
        <Highlight>calm, warm, and uniquely yours</Highlight>.
      </p>
    ),
  },
  {
    id: 3,
    name: "Luxury Kitchen Concepts",
    designation: "Modular & Custom Kitchens",
    image: "/int-5.webp",
    content: (
      <p>
        We design kitchens that blend{" "}
        <Highlight>smart functionality</Highlight> with refined aesthetics,
        creating spaces that are efficient, elegant, and built for everyday
        living.
      </p>
    ),
  },
  {
    id: 4,
    name: "Thoughtful Lighting Design",
    designation: "Ambient & Accent Lighting",
    image: "/int-4.webp",
    content: (
      <p>
        Lighting transforms spaces. Our approach enhances
        <Highlight> mood, depth, and character</Highlight>, ensuring every corner
        feels intentional and visually balanced.
      </p>
    ),
  },
];
