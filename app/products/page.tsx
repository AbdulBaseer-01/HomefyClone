"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const PRODUCTS = [
  {
    name: "Wardrobes",
    desc: "Strong, spacious and custom-made storage for every home.",
    image: "/int-1.webp",
    href: "/products/bed",
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
  {
    name: "TV Units",
    desc: "Stylish and functional units to organize your living space.",
    image: "/int-5.webp",
    href: "/products/tv-units",
  },
  {
    name: "Bookshelves",
    desc: "Customizable shelves for books, décor, and storage.",
    image: "/int-1.webp",
    href: "/products/bookshelves",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#F8F7F4] text-[#1C1C1C]">
      <Navbar />
      <section className="px-6 md:px-10 py-20 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto mt-16">
          {/* HEADER */}
          <div className="mx-auto mb-20 text-center">
            <p className="uppercase tracking-widest text-sm text-[#6a6f3c] mb-1">
              Our Products
            </p>
            <h2 className="text-4xl md:text-5xl text-[#1c1c1c] font-semibold mb-4">
              Made for everyday Indian homes
            </h2>
            <p className="text-black/60 max-w-2xl mx-auto">
              Simple, strong and beautiful solutions for comfort and style.
            </p>
          </div>

          {/* PRODUCTS GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={i}
                className="product-card border border-black/10 rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative h-64">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-[#111111] font-medium mb-2">
                    {p.name}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm mb-6">{p.desc}</p>

                  <Link
                    href={p.href}
                    className="inline-block w-full text-center px-3 py-2 bg-[#6a6f3c] text-[#F8F7F4] border border-[#434a03] rounded-2xl hover:bg-[#585C32] transition"
                  >
                    See Designs
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-12">
          <div className="w-24 h-px bg-[#D6D3CC]" />

          <p className="text-[#000000] text-2xl font-bold mt-6">
            Explore Our Services
          </p>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl 
                      bg-[#6a6f3c] text-[#F8F7F4] border border-[#434a03]
                      hover:bg-[#585C32] transition mt-6"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="mt-32 px-6 md:px-10 py-20 bg-[#EFEDE8] border-t border-[#D6D3CC]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-[#6B6B6B] mb-6">
              Get in touch
            </p>
            <h2 className="text-4xl font-semibold leading-tight mb-8">
              Tell us about your space & requirements
            </h2>
            <p className="text-[#6B6B6B] text-lg max-w-md">
              Share your details and our team will contact you to understand your
              needs and guide you clearly.
            </p>
          </div>

          <form className="bg-white rounded-3xl p-10 border border-[#D6D3CC] space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-[#D6D3CC] rounded-xl px-4 py-3 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-[#D6D3CC] rounded-xl px-4 py-3 focus:outline-none"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full border border-[#D6D3CC] rounded-xl px-4 py-3 focus:outline-none"
            />

            <textarea
              placeholder="Briefly describe your requirement"
              rows={4}
              className="w-full border border-[#D6D3CC] rounded-xl px-4 py-3 focus:outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl
                         bg-[#6A6F3C] text-[#F8F7F4]
                         hover:bg-[#585C32] transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
