"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { MenuIcon, Search, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SEARCH_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },

  { label: "Interior Design", href: "/services/interior-design" },
  { label: "Modular Kitchen", href: "/services/modular-kitchen" },
  { label: "Turnkey Projects", href: "/services/turnkey-projects" },
  { label: "Custom Furniture", href: "/services/custom-furniture" },

  { label: "Wardrobes", href: "/products/wardrobes" },
  { label: "Sofas", href: "/products/sofas" },
  { label: "Lighting", href: "/products/lighting" },
  { label: "Wall Panels", href: "/products/wall-panels" },

  { label: "Blogs", href: "/blogs" },
  { label: "Vlogs", href: "/vlogs" },
  { label: "Watch & Choose", href: "/watch" },
  { label: "Inspiration Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  // SEARCH STATE (FIXED)
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof SEARCH_ITEMS>([]);
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShow(!(current > lastScrollY && current > 80));
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setDesktopSearchOpen(false);
      setMobileSearchOpen(false);
      return;
    }

    const filtered = SEARCH_ITEMS.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setDesktopSearchOpen(false);
        setMobileSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMenu(null);
    setQuery("");
    setMobileSearchOpen(false);
  };

  return (
    <div>
    <div className="fixed top-0 w-full z-50">
      <div className="relative w-full z-50">
        <div className="flex items-center justify-between border-b border-white bg-[#EFEDE8] backdrop-blur-md px-3 md:px-8 py-2 text-black shadow-md">

          <Image
            src="/image.png"
            alt="Homefy Logo"
            width={180}
            height={70}
            className="shrink-0 scale-90 md:scale-100"
          />

          <div className="flex-1 hidden md:flex items-center gap-6 text-md font-medium justify-center">
            <Link href="/" className="hover:text-[#886c46]">Home</Link>
            <span className="h-4 w-px bg-black/30" />
            <Link href="/blogs" className="hover:text-[#886c46]">Blogs</Link>
            <span className="h-4 w-px bg-black/30" />
            <Link href="/vlogs" className="hover:text-[#886c46]">Vlogs</Link>
          </div>

          {/* DESKTOP SEARCH */}
          <div className="hidden md:flex items-center gap-6">
            <div ref={searchRef} className="relative w-72 z-1000">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
              />

              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    setDesktopSearchOpen(false);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black/70"
                >
                  <X size={16} />
                </button>
              )}

              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setDesktopSearchOpen(true);
                }}
                placeholder="Search..."
                className="w-full pl-9 pr-9 py-2 text-sm rounded-lg bg-[#886c46] text-white placeholder:text-white/70 focus:outline-none"
              />

              {desktopSearchOpen && (
                <div className="absolute top-full mt-2 w-full rounded-xl bg-white border shadow-lg z-9999 max-h-64 overflow-y-auto">
                  {results.length ? (
                    results.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => {
                          setQuery("");
                          setDesktopSearchOpen(false);
                        }}
                        className="block px-4 py-3 text-sm hover:bg-[#EFEDE8]"
                      >
                        {item.label}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-black/60">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link
              href="/contactus"
              className="rounded-lg bg-[#886c46] px-4 py-2 text-sm text-white hover:bg-[#85602c]"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* MOBILE ICONS */}
          <div className="flex md:hidden gap-3">
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="p-1 rounded-lg hover:bg-black/10"
            >
              <Search size={20} />
            </button>

            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            >
              {mobileMenuOpen ? <X /> : <MenuIcon />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* MOBILE SEARCH */}
      {mobileSearchOpen && (
        <div className="md:hidden bg-[#EFEDE8] px-3 py-3">
          <div ref={searchRef} className="relative">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, products..."
              className="w-full px-4 py-3 rounded-lg border"
            />

            {results.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white shadow-xl rounded-lg z-9999">
                {results.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => {
                      setQuery("");
                      setMobileSearchOpen(false);
                    }}
                    className="block px-4 py-3 hover:bg-[#EFEDE8]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-1 z-40 bg-black/50 md:hidden"
            onClick={closeMobileMenu}
          />
        )}

        {mobileMenuOpen && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-8 py-12 right-0 w-80 max-w-[90vw] h-[calc(100vh+64px)] z-40 md:hidden bg-white shadow-2xl overflow-y-auto"
          >
            <div className="p-4 space-y-2 text-xl">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg hover:bg-[#EFEDE8] font-medium text-black transition"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "services" ? null : "services")}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#EFEDE8] font-medium text-black transition"
                >
                  Services
                  <motion.span
                    animate={{ rotate: expandedMenu === "services" ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
                {expandedMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 space-y-1 mt-1 overflow-hidden"
                  >
                    <Link
                      href="/services"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-lg hover:bg-[#EFEDE8] text-sm text-black font-semibold transition"
                    >
                      All Services →
                    </Link>
                    <Link
                      href="/services/interior-design"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-lg hover:bg-[#EFEDE8] text-sm text-gray-700 transition"
                    >
                      Interior Design
                    </Link>
                    <Link
                      href="/services/modular-kitchen"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-lg hover:bg-[#EFEDE8] text-sm text-gray-700 transition"
                    >
                      Modular Kitchen
                    </Link>
                    <Link
                      href="/services/turnkey-projects"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-lg hover:bg-[#EFEDE8] text-sm text-gray-700 transition"
                    >
                      Turnkey Projects
                    </Link>
                    <Link
                      href="/services/custom-furniture"
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 rounded-lg hover:bg-[#EFEDE8] text-sm text-gray-700 transition"
                    >
                      Custom Furniture
                    </Link>
                  </motion.div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "products" ? null : "products")}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#EFEDE8] font-medium text-black transition"
                >
                  Products
                  <motion.span
                    animate={{ rotate: expandedMenu === "products" ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
                {expandedMenu === "products" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 overflow-hidden"
                  >
                    <div className="bg-[#F8F7F4] rounded-xl p-3 space-y-2">
                      <Link
                        href="/products"
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 rounded-lg hover:bg-white text-sm text-black font-semibold transition"
                      >
                        All Products →
                      </Link>
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href="/products/wardrobe"
                          onClick={closeMobileMenu}
                          className="block px-3 py-3 rounded-lg hover:bg-white bg-white text-xs text-black font-medium transition text-center border border-black/10"
                        >
                          Wardrobes
                        </Link>
                        <Link
                          href="/products/bed"
                          onClick={closeMobileMenu}
                          className="block px-3 py-3 rounded-lg hover:bg-white bg-white text-xs text-black font-medium transition text-center border border-black/10"
                        >
                          Beds
                        </Link>
                        <Link
                          href="/products/lighting"
                          onClick={closeMobileMenu}
                          className="block px-3 py-3 rounded-lg hover:bg-white bg-white text-xs text-black font-medium transition text-center border border-black/10"
                        >
                          Lighting
                        </Link>
                        <Link
                          href="/products/modular-kitchen"
                          onClick={closeMobileMenu}
                          className="block px-3 py-3 rounded-lg hover:bg-white bg-white text-xs text-black font-medium transition text-center border border-black/10"
                        >
                          Modular Kitchen
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <Link
                href="/inspiration-gallery"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg hover:bg-[#EFEDE8] font-medium text-black transition"
              >
                Inspiration Gallery
              </Link>

              <Link
                href="/blogs"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg hover:bg-[#EFEDE8] font-medium text-black transition"
              >
                Blogs
              </Link>

              <Link
                href="/vlogs"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg hover:bg-[#EFEDE8] font-medium text-black transition"
              >
                Vlogs
              </Link>

              <Link
                href="/about-us"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg hover:bg-[#EFEDE8] font-medium text-black transition"
              >
                About Us
              </Link>

              <div className="h-px bg-black/10 my-3" />

              <Link
                href="/contactus"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg bg-[#886c46] text-white font-medium hover:bg-[#886c46d0] transition text-center"
              >
                Get Free Estimate
              </Link>
            </div>
          </motion.div>
        )}

        <div
          className={cn(
            "transition-all duration-500 z-10 hidden md:block",
            show ? "opacity-100" : "opacity-0"
          )}
        >
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-3 text-sm min-w-50 text-black">

                <HoveredLink
                  href="/services"
                  className="font-semibold text-black dark:text-white"
                >
                  All Services →
                </HoveredLink>

                <div className="h-px bg-black/10 dark:bg-white/20 my-1" />

                <HoveredLink href="/services/interior-design">
                  Interior Design
                </HoveredLink>
                <HoveredLink href="/services/modular-kitchen">
                  Modular Kitchen
                </HoveredLink>
                <HoveredLink href="/services/turnkey-projects">
                  Turnkey Projects
                </HoveredLink>
                <HoveredLink href="/services/custom-furniture">
                  Custom Furniture
                </HoveredLink>
              </div>
            </MenuItem>


            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="flex flex-col gap-4">

                <div className="grid grid-cols-2 gap-6 text-sm">
                  <ProductItem
                    title="Wardrobes"
                    href="/products/wardrobes"
                    src="/int-1.webp"
                    description="Custom storage solutions"
                  />
                  <ProductItem
                    title="Sofas"
                    href="/products/sofas"
                    src="/int-2.webp"
                    description="Comfort for everyday living"
                  />
                  <ProductItem
                    title="Lighting"
                    href="/products/lighting"
                    src="/int-3.webp"
                    description="Elegant lighting options"
                  />
                  <ProductItem
                    title="Wall Panels"
                    href="/products/wall-panels"
                    src="/int-4.webp"
                    description="Premium wall finishes"
                  />
                </div>

                <div className="h-px bg-black/10 dark:bg-white/20" />

                <div className="flex justify-end">
                  <Link
                    href="/products"
                    onClick={() => setActive(null)}
                    className="px-5 py-2 rounded-lg text-sm font-medium
                              bg-[#886c46] text-white
                              hover:bg-[#886c46d0] transition"
                  >
                    View All Products →
                  </Link>
                </div>

              </div>
            </MenuItem>


            <Link href="/inspiration-gallery" className="px-4 cursor-pointer hover:text-white text-[#c09a65] font-bold">Inspiration Gallery</Link>
            <Link href="/about-us" className="px-4 cursor-pointer hover:text-white text-[#c09a65] font-bold">About Us</Link>
            <Link href="/contactus" className="px-4 cursor-pointer hover:text-white text-[#c09a65] font-bold">Contact Us</Link>
          </Menu>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

