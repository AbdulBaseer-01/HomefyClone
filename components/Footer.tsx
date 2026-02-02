"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#EFEDE8] px-8 pt-28 pb-10 border-t border-[#D6D3CC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-20 border-b border-[#D6D3CC]">
          
          {/* BRAND */}
          <div className="space-y-6">
            <Image
              src="/image.png"
              alt="Homefy Interio"
              width={180}
              height={70}
            />
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-sm">
              Homefy Interio designs thoughtful living spaces that balance
              functionality, aesthetics, and long-term comfort.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#6B6B6B] mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-sm text-[#3F3F3F]">
              {["Home","Blogs", "Vlogs", "Inspiration Gallery"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="hover:text-[#1C1C1C] transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#6B6B6B] mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-sm text-[#3F3F3F]">
              {[
                "Interior Design",
                "Modular Kitchens",
                "Turnkey Projects",
                "Custom Furniture",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="hover:text-[#1C1C1C] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#6B6B6B] mb-6">
                Get in touch
              </h4>
              <p className="text-sm text-[#6B6B6B] mb-8 max-w-xs">
                Ready to design your space? Speak directly with our team.
              </p>
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 text-sm font-medium
                  text-[#F8F7F4] bg-[#6A6F3C] px-6 py-3 rounded-full
                  border border-[#434a03]
                  hover:bg-[#585C32] transition"
              >
                Book a consultation
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#6B6B6B]">
          <p>
            © {new Date().getFullYear()} Homefy Interio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#1C1C1C] transition">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[#1C1C1C] transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
