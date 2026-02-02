"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const VLOGS = [
  {
    title: "A luxury home walkthrough",
    duration: "06:42",
    image: "/int-2.webp",
    href: "/vlogs/luxury-home",
    featured: true,
  },
  {
    title: "Behind our modular kitchens",
    duration: "04:18",
    image: "/int-4.webp",
    href: "/vlogs/modular-kitchen",
  },
  {
    title: "From concept to completion",
    duration: "05:01",
    image: "/int-3.webp",
    href: "/vlogs/concept-to-completion",
  },
  {
    title: "Material selection explained",
    duration: "03:56",
    image: "/int-5.webp",
    href: "/vlogs/material-selection",
  },
];

export default function VlogsSection() {
  return (
    <section className="bg-black px-4 md:px-6 lg:px-8 mx-0 md:mx-4 lg:mx-8 rounded-2xl md:rounded-3xl lg:rounded-4xl py-8 md:py-12 lg:py-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 lg:mb-16">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#886c46] mb-2 md:mb-3">
              Vlogs
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-6xl font-semibold bg-linear-to-r from-white via-[#886c46] to-white bg-clip-text text-transparent mb-4`}>
              Behind the scenes
              <br />
              & walkthroughs
            </h2>
          </div>

          
        </div>

        {VLOGS.filter((v) => v.featured).map((vlog, i) => (
          <Link
            key={i}
            href={vlog.href}
            className="group relative block mb-8 md:mb-12 lg:mb-14"
          >
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                src={vlog.image}
                alt={vlog.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full border border-white/60 flex items-center justify-center backdrop-blur-md transition group-hover:scale-110">
                  <Play size={20} fill="white" />
                </div>
              </div>

              <span className="absolute bottom-3 right-3 md:bottom-6 md:right-6 text-xs bg-black/60 px-2 md:px-3 py-1 rounded-full">
                {vlog.duration}
              </span>
            </div>

            <h3 className="text-lg md:text-2xl font-medium mt-4 md:mt-6">
              {vlog.title}
            </h3>
          </Link>
        ))}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {VLOGS.filter((v) => !v.featured).map((vlog, i) => (
            <Link
              key={i}
              href={vlog.href}
              className="group"
            >
              <div className="relative h-40 md:h-48 lg:h-56 rounded-xl md:rounded-2xl overflow-hidden">
                <Image
                  src={vlog.image}
                  alt={vlog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30" />

                <span className="absolute bottom-2 md:bottom-4 right-2 md:right-4 text-xs bg-black/60 px-2 py-1 rounded">
                  {vlog.duration}
                </span>
              </div>

              <h4 className="mt-3 md:mt-4 text-base md:text-lg font-medium line-clamp-2">
                {vlog.title}
              </h4>
            </Link>
          ))}
          
        </div>
        {/* Desktop CTA */}
        <div className="mt-12 md:mt-16 lg:mt-20 hidden md:flex justify-end">
          <Link
            href="/vlogs"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium px-4 md:px-6 py-2 md:py-3 bg-[#6a6f3c] text-[#F8F7F4] border border-[#434a03] rounded-xl md:rounded-2xl hover:bg-[#585C32] hover:text-white transition"
          >
            View all vlogs <ArrowRight size={16} />
          </Link>
        </div>


        {/* Mobile CTA */}
        <div className="mt-12 md:mt-0 text-center md:hidden">
          <Link
            href="/vlogs"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm border border-white rounded-xl hover:bg-white hover:text-black transition"
          >
            View all vlogs <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
