"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  MessageCircle,
  ArrowLeft,
  Maximize2,
} from "lucide-react";

const WHATSAPP_NUMBER = "8317539715";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

const PRODUCT = {
  name: "Luxury Modular Bed",
  price: "₹1,45,000",
  description: `
This premium modular bed is designed for modern Indian homes.
Built with high-grade engineered wood and premium finishes, it
offers durability, comfort, and timeless aesthetics.

Perfect for apartments, villas, and custom interiors.
`,
  colors: [
    {
      name: "Walnut Brown",
      hex: "#6B4F3F",
      images: ["/int-1.webp", "/int-2.webp", "/int-3.webp"],
    },
    {
      name: "Matte White",
      hex: "#EDEDED",
      images: ["/int-4.webp", "/int-5.webp", "/int-1.webp"],
    },
    {
      name: "Ash Grey",
      hex: "#9CA3AF",
      images: ["/int-1.webp", "/int-2.webp", "/int-3.webp"],
    },
  ],
};

export default function ProductPage() {
  const [activeColor, setActiveColor] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const images = PRODUCT.colors[activeColor].images;

  const nextImage = () =>
    setActiveImage((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <section className="px-6 py-28 md:mt-12 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-8">
        <h1 className="text-4xl font-semibold block md:hidden text-[#886c46]">
            {PRODUCT.name}
          </h1>
        <div className="relative">
          <motion.div
            className="relative aspect-4/3 rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => setFullscreen(true)}
            whileHover={{ scale: 1.01 }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFullscreen(true);
              }}
              className="absolute top-4 right-4 z-20
                         bg-black/60 backdrop-blur
                         p-2 rounded-full
                         text-white
                         opacity-0 group-hover:opacity-100
                         transition hover:scale-105"
              aria-label="View fullscreen"
            >
              <Maximize2 size={18} />
            </button>

            <Image
              src={images[activeImage]}
              alt={PRODUCT.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2
                       bg-white/80 backdrop-blur
                       p-2 rounded-full shadow"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2
                       bg-white/80 backdrop-blur
                       p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>
        </div>
        <div className="block md:hidden">
            <p className="text-sm uppercase tracking-wider mb-4 text-[#6B6B6B]">
              Available Colors
            </p>

            <div className="flex gap-4">
              {PRODUCT.colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveColor(i);
                    setActiveImage(0);
                  }}
                  className={`w-10 h-10 rounded-full border-2 ${
                    activeColor === i
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        <div>
          <h1 className="text-4xl font-semibold mb-4 hidden md:block text-[#886c46]">
            {PRODUCT.name}
          </h1>

          <p className="text-[#000010] whitespace-pre-line mb-6">
            {PRODUCT.description}
          </p>

          <p className="text-2xl font-medium text-[#886c46] mb-8">
            {PRODUCT.price}
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center gap-3
                       bg-green-600 text-white
                       px-6 py-4 rounded-2xl
                       font-medium hover:bg-green-700 transition mb-10"
          >
            <MessageCircle />
            Chat on WhatsApp
          </a>

          <div className="hidden md:block">
            <p className="text-sm uppercase tracking-wider mb-4 text-[#6B6B6B]">
              Available Colors
            </p>

            <div className="flex gap-4">
              {PRODUCT.colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveColor(i);
                    setActiveImage(0);
                  }}
                  className={`w-10 h-10 rounded-full border-2 ${
                    activeColor === i
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <Link
          href="/products"
          className="inline-flex items-center gap-2
                     bg-[#886c46] text-white
                     px-5 py-3 rounded-xl text-sm"
        >
          <ArrowLeft size={16} />
          Back to all products
        </Link>
      </div>

      <div className="max-w-6xl mt-32 bg-white rounded-3xl p-5 md:p-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8">
          Enquire about this product
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
          <input
            placeholder="Full Name"
            className="border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#886c46]"
          />

          <input
            placeholder="Phone / Email"
            className="border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#886c46]"
          />

          <div className="md:col-span-2">
            <label className="block text-sm text-[#6B6B6B] mb-2">
              Select the product you{`'`}re interested in
            </label>

            <select className="w-full border border-gray-300 px-3 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#886c46]">
              <option>Luxury Modular Bed</option>
              <option>Wardrobe</option>
              <option>Sofa</option>
              <option>Modular Kitchen</option>
            </select>
          </div>

          <button
            type="submit"
            className="md:col-span-2
                       bg-[#886c46] text-white
                       py-4 rounded-2xl font-medium
                       hover:bg-[#886c46] transition"
          >
            Request Callback
          </button>
        </form>
      </div>

      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 bg-black z-9999 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setFullscreen(false)}
              className="absolute top-6 right-6 z-10000
                         w-12 h-12 rounded-full
                         bg-black/60 backdrop-blur
                         flex items-center justify-center
                         text-white hover:text-red-500"
            >
              <X size={26} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 z-10000
                         w-12 h-12 rounded-full
                         bg-black/60 text-white flex items-center justify-center"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 z-10000
                         w-12 h-12 rounded-full
                         bg-black/60 text-white flex items-center justify-center"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={activeImage}
              className="relative w-full h-full"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
            >
              <Image
                src={images[activeImage]}
                alt="Fullscreen"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
