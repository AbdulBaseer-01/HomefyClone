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
import { motion } from "motion/react";

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

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof SEARCH_ITEMS>([]);
  const [open, setOpen] = useState(false);
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
      setOpen(false);
      return;
    }

    const filtered = SEARCH_ITEMS.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
    setOpen(true);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMenu(null);
    setQuery("");
    setOpen(false);
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="">
        <div className="relative w-full z-50">
          <div className="flex items-center justify-between border-b border-white bg-[#EFEDE8] backdrop-blur-md px-3 md:px-8 py-2 text-black shadow-md">

            <Image
                src="/image.png"
                alt="Homefy Logo"
                width={180}
                height={70}
                className="shrink-0 scale-90 md:scale-100"
            />

            <div className="flex-1">
                <div className="hidden md:flex items-center gap-6 text-md font-medium justify-center">
                  <Link href="/" className="hover:text-[#6a6f3c]">Home</Link>
                  <span className="h-4 w-px bg-black/30" />
                  <Link href="/blogs" className="hover:text-[#6a6f3c]">Blogs</Link>
                  <span className="h-4 w-px bg-black/30" />
                  <Link href="/vlogs" className="hover:text-[#6a6f3c]">Vlogs</Link>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-4 md:gap-6">

                  <div
                    ref={searchRef}
                    className="relative w-56 sm:w-64 md:w-72 z-1000"
                  >
                    <Search
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-black"
                    />

                    {query && (
                      <button
                        onClick={() => {
                          setQuery("");
                          setOpen(false);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-black/70 hover:text-black"
                      >
                        <X size={16} />
                      </button>
                    )}

                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onFocus={() => query && setOpen(true)}
                      placeholder="Search..."
                      className="w-full pl-9 pr-9 py-2 text-sm rounded-lg
                                bg-[#6a6f3c93] text-black placeholder:text-black/70
                                focus:outline-none focus:ring-1 focus:ring-black z-9999"
                    />

                    {open && (
                      <div
                        className="absolute top-full mt-2 w-full max-h-64 overflow-y-auto
                                  rounded-xl bg-white border border-black/10
                                  shadow-lg z-9999"
                      >
                        {results.length > 0 ? (
                          results.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              onClick={() => {
                                setQuery("");
                                setOpen(false);
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

                  <Link href='/contactus' className="hidden sm:block rounded-lg bg-[#6f762db5] px-4 py-2 text-sm font-medium hover:bg-[#585C32] hover:text-white transition">
                    Get Free Estimate
                  </Link>
                </div>

              <div className="flex items-center gap-3 md:hidden">
                <button onClick={() => setOpen(!open)} className="p-1 hover:bg-black/10 rounded-lg transition">
                  <Search size={20} className="text-black" />
                </button>
                <motion.button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1 hover:bg-black/10 rounded-lg transition"
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {mobileMenuOpen ? (
                    <X size={24} className="text-black" />
                  ) : (
                    <MenuIcon size={24} className="text-black" />
                  )}
                </motion.button>
              </div>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#EFEDE8] border-b border-white px-3 py-3"
          >
            <div
              ref={searchRef}
              className="relative w-full z-1000"
            >
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-black/60"
              />

              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    setOpen(false);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black/70 hover:text-black transition"
                >
                  <X size={16} />
                </button>
              )}

              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query && setOpen(true)}
                placeholder="Search services, products..."
                className="w-full pl-9 pr-9 py-3 text-sm rounded-lg
                          bg-white text-black placeholder:text-black/60
                          focus:outline-none focus:ring-2 focus:ring-[#6a6f3c]
                          border border-black/20 transition"
              />

              {open && results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 w-full max-h-72 overflow-y-auto
                            rounded-lg bg-white border border-black/20
                            shadow-xl z-9999"
                >
                  <div className="divide-y divide-black/10">
                    {results.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => {
                          setQuery("");
                          setOpen(false);
                          closeMobileMenu();
                        }}
                        className="block px-4 py-3 text-sm hover:bg-[#EFEDE8] transition"
                      >
                        <span className="font-medium text-black">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              {open && query && results.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-full mt-2 w-full rounded-lg bg-white border border-black/20 shadow-xl z-9999 p-4 text-center"
                >
                  <p className="text-sm text-black/60">No results found for &quot;<span className="font-medium">{query}</span>&quot;</p>
                </motion.div>
              )}
            </div>
          </motion.div>
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
                className="block px-4 py-3 rounded-lg bg-[#6f762db5] text-white font-medium hover:bg-[#585C32] transition text-center"
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
              <div className="flex flex-col space-y-3 text-sm min-w-50">

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
                              bg-[#6a6f3c] text-white
                              hover:bg-[#585C32] transition"
                  >
                    View All Products →
                  </Link>
                </div>

              </div>
            </MenuItem>


            <Link href="/inspiration-gallery" className="px-4 cursor-pointer hover:text-white">Inspiration Gallery</Link>
            <Link href="/about-us" className="px-4 cursor-pointer hover:text-white">About Us</Link>
            <Link href="/contactus" className="px-4 cursor-pointer hover:text-white">Contact Us</Link>
          </Menu>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
