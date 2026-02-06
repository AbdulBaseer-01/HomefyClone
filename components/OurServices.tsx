"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const SERVICES = [
  {
    index: "01",
    title: "Interior Design",
    desc: "Residential and commercial interiors focused on proportion, calm, and usability. End-to-end execution from design to final handover. End-to-end execution from design to final handover.",
    image: "/int-1.webp",
    href: "/services/interior-design",
  },
  {
    index: "02",
    title: "Modular Kitchen",
    desc: "Precision-built kitchens designed for efficiency and everyday comfort. End-to-end execution from design to final handover. End-to-end execution from design to final handover.",
    image: "/int-2.webp",
    href: "/services/modular-kitchen",
  },
  {
    index: "03",
    title: "Turnkey Projects",
    desc: "End-to-end execution from design to final handover. End-to-end execution from design to final handover. End-to-end execution from design to final handover.",
    image: "/int-3.webp",
    href: "/services/turnkey-projects",
  },
  {
    index: "04",
    title: "Custom Furniture",
    desc: "Furniture crafted specifically for your space and lifestyle. End-to-end execution from design to final handover. End-to-end execution from design to final handover.",
    image: "/int-4.webp",
    href: "/services/custom-furniture",
  },
];

export default function OurServices() {
  
  return (
    <motion.section
  initial={{ backgroundColor: "#f8f7f4" }}
  whileInView={{ backgroundColor: "#886c46" }}
  viewport={{
    amount: 0.15, 
    once: false
  }}
  transition={{
    duration: 1,
    ease: "easeInOut"
  }}
  className="min-h-screen "
>


      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-28 lg:py-36">

        <motion.div
          initial={{  y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-12 md:mb-20 lg:mb-28 max-w-screen"
        >
          <p className="text-xs md:text-sm md:text-left text-center uppercase tracking-widest text-[#e2bb83] mb-4">
            Services
          </p>

          <h2 className={`${playfair.className} text-4xl md:text-6xl md:text-left text-center font-semibold bg-linear-to-r from-[#f8f7f4] via-[#e2bb83] to-[#f8f7f4] bg-clip-text text-transparent mb-4`}>
            What we design
             and deliver
          </h2>
        </motion.div>

        <div className="space-y-20 lg:space-y-28 mt-12">

          {SERVICES.map((s, i) => (
            <section
              key={i}
              className="flex items-center overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center w-full">

                <motion.div
                  initial={{ opacity: 0.5, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-[#f8f8f4] w-full flex flex-col justify-center px-4 md:px-6 lg:px-6 py-8 md:py-12 rounded-2xl md:rounded-3xl"
                >
                  <p className="text-xs md:text-sm text-[#6B6B6B] mb-4">
                    {s.index}
                  </p>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-6">
                    {s.title}
                  </h3>

                  <p className="text-sm md:text-base text-[#555] max-w-md mb-6 md:mb-8 leading-relaxed">
                    {s.desc}
                  </p>

                  <Link
                    href={s.href}
                    className="
                      inline-flex items-center justify-end gap-2
                      text-xs md:text-sm font-medium
                      border-b border-black
                      pb-1
                      hover:opacity-60
                      transition
                      w-fit
                    "
                  >
                    Explore service <ArrowUpRight size={14} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0.5, x: 120, y: 40 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative h-64 md:h-80 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

              </div>
            </section>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0.5, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 md:mt-20 lg:mt-28 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl 
           text-[#000000]
           bg-[#e2bb83]
           border border-[#e2bb83]
           hover:bg-[#e2bb83]/70 hover:border-[#f8f7f4]
           transition text-sm md:text-base"

          >
            View All Services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
