"use client";

import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const FILTERS = [
  "All",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Wardrobe",
  "Office",
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Living Room",
    location: "Hyderabad",
    image: "/int-1.webp",
  },
  {
    id: 2,
    title: "Luxury Modular Kitchen",
    category: "Kitchen",
    location: "Gachibowli",
    image: "/int-2.webp",
  },
  {
    id: 3,
    title: "Minimal Bedroom Interior",
    category: "Bedroom",
    location: "Kondapur",
    image: "/int-3.webp",
  },
  {
    id: 4,
    title: "Custom Wardrobe Design",
    category: "Wardrobe",
    location: "Miyapur",
    image: "/int-4.webp",
  },
  {
    id: 5,
    title: "Home Office Setup",
    category: "Office",
    location: "Financial District",
    image: "/int-5.webp",
  },
  {
    id: 6,
    title: "Contemporary Living Space",
    category: "Living Room",
    location: "Banjara Hills",
    image: "/int-1.webp",
  },
];

export default function InspirationGalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (item) => item.category === activeFilter
        );

  return (
    <main className="bg-[#F8F7F4] ">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-32">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <p className="uppercase tracking-widest text-sm text-[#6A6F3C] mb-4">
            Inspiration Gallery
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1C1C1C] mb-6">
            Spaces we’ve brought to life
          </h1>
          <p className="text-[#6B6B6B] text-lg">
            Explore real interiors designed and executed for Indian homes and
            workspaces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  activeFilter === filter
                    ? "bg-[#6A6F3C] text-white"
                    : "bg-white border border-[#D6D3CC] text-[#1C1C1C] hover:bg-[#EFEDE8]"
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-sm"
              >
                <div className="relative w-full h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-medium mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      {item.category} • {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
