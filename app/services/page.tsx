"use client";

import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    title: "Interior Design",
    desc: "Complete home and office interior design with practical layouts, durable materials, and timeless aesthetics.",
    image: "/int-1.webp",
  },
  {
    title: "Modular Kitchen",
    desc: "Efficient, space-saving modular kitchens designed for Indian cooking habits and daily use.",
    image: "/int-2.webp",
  },
  {
    title: "Turnkey Projects",
    desc: "End-to-end execution — design, material, labor, coordination, and final handover handled by us.",
    image: "/int-3.webp",
  },
  {
    title: "Custom Furniture",
    desc: "Made-to-measure furniture crafted specifically for your space, usage, and lifestyle.",
    image: "/int-4.webp",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F8F7F4] text-[#1C1C1C]">
      <Navbar />
        <section className="relative md:px-8 px-2 md:py-34 h-screen flex items-center justify-center border-b border-[#D6D3CC] overflow-hidden">
            
            <div className="absolute inset-0">
                <Image
                src="/int-1.webp"   
                alt="Interior Services"
                fill
                className="object-cover"
                priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 max-w-5xl h-[50%] mt-10 flex flex-col items-center justify-center py-12 px-2 md:px-6 rounded-lg text-center text-white">
                <p className="text-sm uppercase tracking-widest text-[#ffffff] text-shadow-[#6A6F3C] text-shadow-2xl mb-6">
                Our Services
                </p>

                <h1 className="text-3xl md:text-6xl font-semibold leading-tight mb-8">
                Complete interior solutions
                <br />
                designed for real living
                </h1>

                <p className="text-white/80 max-w-2xl text-center text-lg">
                From design to execution, we provide reliable, transparent,
                and high-quality interior services tailored to Indian homes
                and businesses.
                </p>
            </div>
        </section>

      <section className="px-6 md:px-10 py-20">
  <div className="max-w-7xl mx-auto space-y-20">

    {SERVICES.map((service, i) => (
      <div
        key={i}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div
          className={`relative h-75 rounded-2xl overflow-hidden ${
            i % 2 !== 0 ? "md:order-2" : ""
          }`}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-lg">
          <p className="text-xs uppercase tracking-widest text-[#6A6F3C] mb-3">
            Service
          </p>

          <h2 className="text-3xl font-semibold text-[#1C1C1C] mb-4">
            {service.title}
          </h2>

          <p className="text-[#4F4F4F] text-base mb-4 leading-relaxed">
            Designed to balance functionality, aesthetics, and long-term
            comfort for modern living spaces.
          </p>

          <p className="text-[#6B6B6B] text-sm mb-7 leading-relaxed">
            {service.desc}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg
                       bg-[#6A6F3C] text-[#F8F7F4] text-sm
                       hover:bg-[#585C32] transition"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    ))}
  </div>

  <div className="mt-24 text-center">
    <p className="text-xs uppercase tracking-widest text-[#6a6f3c] mb-2">
      Explore more
    </p>

    <h3 className="text-3xl font-semibold text-[#1c1c1c] mb-6">
      Discover our complete product range
    </h3>

    <Link
      href="/products"
      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl 
                 bg-[#6a6f3c] text-[#F8F7F4] text-sm
                 hover:bg-[#585C32] transition"
    >
      View All Products <ArrowRight size={14} />
    </Link>
  </div>
</section>


      <section className="px-6 md:px-10 py-24 bg-[#EFEDE8] border-t border-[#D6D3CC]">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

    <div>
      <p className="text-sm uppercase tracking-widest text-[#6B6B6B] mb-6">
        Get in touch
      </p>

      <h2 className="text-4xl font-semibold leading-tight mb-8 text-[#1C1C1C]">
        Tell us about your
        <br />
        space & requirements
      </h2>

      <p className="text-[#6B6B6B] text-lg max-w-md">
        Share your details and our team will contact you to
        understand your needs and guide you clearly.
      </p>
    </div>

    <form className="bg-white rounded-3xl p-10 border border-[#D6D3CC] space-y-5">
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
