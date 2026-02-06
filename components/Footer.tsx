"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import {  Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin,  } from 'lucide-react';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
});
export default function Footer() {
  return (
    // <footer className="bg-[#EFEDE8] px-8 pt-28 pb-10 border-t border-[#D6D3CC]">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-20 border-b border-[#D6D3CC]">
          
    //       {/* BRAND */}
    //       <div className="space-y-6">
    //         <Image
    //           src="/image.png"
    //           alt="Homefy Interio"
    //           width={180}
    //           height={70}
    //         />
    //         <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-sm">
    //           Homefy Interio designs thoughtful living spaces that balance
    //           functionality, aesthetics, and long-term comfort.
    //         </p>
    //       </div>

    //       {/* EXPLORE */}
    //       <div>
    //         <h4 className="text-xs uppercase tracking-widest text-[#6B6B6B] mb-6">
    //           Explore
    //         </h4>
    //         <ul className="space-y-4 text-sm text-[#3F3F3F]">
    //           {["Home","Blogs", "Vlogs", "Inspiration Gallery"].map(
    //             (item) => (
    //               <li key={item}>
    //                 <Link
    //                   href="/"
    //                   className="hover:text-[#1C1C1C] transition"
    //                 >
    //                   {item}
    //                 </Link>
    //               </li>
    //             )
    //           )}
    //         </ul>
    //       </div>

    //       <div>
    //         <h4 className="text-xs uppercase tracking-widest text-[#6B6B6B] mb-6">
    //           Services
    //         </h4>
    //         <ul className="space-y-4 text-sm text-[#3F3F3F]">
    //           {[
    //             "Interior Design",
    //             "Modular Kitchens",
    //             "Turnkey Projects",
    //             "Custom Furniture",
    //           ].map((item) => (
    //             <li key={item}>
    //               <Link
    //                 href="/services"
    //                 className="hover:text-[#1C1C1C] transition"
    //               >
    //                 {item}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* CTA */}
    //       <div className="flex flex-col justify-between">
    //         <div>
    //           <h4 className="text-xs uppercase tracking-widest text-[#6B6B6B] mb-6">
    //             Get in touch
    //           </h4>
    //           <p className="text-sm text-[#6B6B6B] mb-8 max-w-xs">
    //             Ready to design your space? Speak directly with our team.
    //           </p>
    //           <Link
    //             href="/contactus"
    //             className="inline-flex items-center gap-2 text-sm font-medium
    //               text-[#F8F7F4] bg-[#6A6F3C] px-6 py-3 rounded-full
    //               border border-[#434a03]
    //               hover:bg-[#585C32] transition"
    //           >
    //             Book a consultation
    //             <ArrowUpRight size={16} />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#6B6B6B]">
    //       <p>
    //         © {new Date().getFullYear()} Homefy Interio. All rights reserved.
    //       </p>
    //       <div className="flex gap-6">
    //         <Link href="/" className="hover:text-[#1C1C1C] transition">
    //           Privacy Policy
    //         </Link>
    //         <Link href="/" className="hover:text-[#1C1C1C] transition">
    //           Terms of Service
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-linear-to-b from-[#f8f5f0] via-[#faf8f4] to-[#efe8de] text-black relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d7a661]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#886c46]/5 rounded-full blur-3xl -z-10" />

        <div className="py-12 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4"
              >
                <div className="inline-block">
                  <Image
                    src="/image.png"
                    alt="Texo Prefab"
                    width={160}
                    height={50}
                    className="hover:scale-105 transition duration-300"
                  />
                </div>
                <p className={`${inter.className} text-black/70 text-sm leading-relaxed max-w-xs font-light`}>
                  Building dreams with precision and excellence in prefab construction.
                </p>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="w-10 h-10 bg-[#886c46]/10 hover:bg-[#886c46]/20 text-[#886c46] rounded-lg flex items-center justify-center transition duration-300 border border-[#886c46]/20">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#886c46]/10 hover:bg-[#886c46]/20 text-[#886c46] rounded-lg flex items-center justify-center transition duration-300 border border-[#886c46]/20">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#886c46]/10 hover:bg-[#886c46]/20 text-[#886c46] rounded-lg flex items-center justify-center transition duration-300 border border-[#886c46]/20">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#886c46]/10 hover:bg-[#886c46]/20 text-[#886c46] rounded-lg flex items-center justify-center transition duration-300 border border-[#886c46]/20">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/50 backdrop-blur border border-[#886c46]/10 rounded-2xl p-6 hover:shadow-lg transition duration-300"
              >
                <h4 className={`${playfair.className} text-lg font-semibold mb-4 text-[#886c46]`}>
                  Contact Us
                </h4>
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-[#886c46]/10 group-hover:bg-[#886c46]/20 rounded-lg flex items-center justify-center transition duration-300">
                      <Phone className="w-4 h-4 text-[#886c46]" />
                    </div>
                    <span className={`${inter.className} text-sm text-black/80 group-hover:text-[#886c46] transition`}>
                      +91 9000800665
                    </span>
                  </a>
                  <a href="tel:+919876543211" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-[#886c46]/10 group-hover:bg-[#886c46]/20 rounded-lg flex items-center justify-center transition duration-300">
                      <Phone className="w-4 h-4 text-[#886c46]" />
                    </div>
                    <span className={`${inter.className} text-sm text-black/80 group-hover:text-[#886c46] transition`}>
                      +91 8185892514
                    </span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/50 backdrop-blur border border-[#886c46]/10 rounded-2xl p-6 hover:shadow-lg transition duration-300"
              >
                <h4 className={`${playfair.className} text-lg font-semibold mb-4 text-[#886c46]`}>
                  Support
                </h4>
                <div className="space-y-3">
                  <a href="mailto:info@texoprefab.com" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-[#886c46]/10 group-hover:bg-[#886c46]/20 rounded-lg flex items-center justify-center transition duration-300">
                      <Mail className="w-4 h-4 text-[#886c46]" />
                    </div>
                    <span className={`${inter.className} text-sm text-black/80 group-hover:text-[#886c46] transition`}>
                      info@homefyinterio.com
                    </span>
                  </a>
                  <a href="mailto:support@texoprefab.com" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-[#886c46]/10 group-hover:bg-[#886c46]/20 rounded-lg flex items-center justify-center transition duration-300">
                      <Mail className="w-4 h-4 text-[#886c46]" />
                    </div>
                    <span className={`${inter.className} text-sm text-black/80 group-hover:text-[#886c46] transition`}>
                      sales@homefyinterio.com
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="py-16 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className={`${playfair.className} text-2xl font-semibold mb-10 text-center text-[#886c46]`}
            >
              Our Offices
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group bg-linear-to-br from-white/80 to-[#f8f5f0]/80 backdrop-blur border border-[#886c46]/20 rounded-2xl p-8 hover:shadow-xl transition duration-300 hover:border-[#886c46]/40"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#886c46]/10 group-hover:bg-[#886c46]/20 rounded-xl flex items-center justify-center transition duration-300">
                    <MapPin className="w-6 h-6 text-[#886c46]" />
                  </div>
                  <div>
                    <h4 className={`${playfair.className} text-xl font-semibold text-[#886c46] mb-1`}>
                      Manufacturing unit & Sales office
                    </h4>
                    <div className="h-1 w-12 bg-[#d7a661]/30 rounded-full" />
                  </div>
                </div>
                
                <p className={`${inter.className} text-sm text-black/75 leading-relaxed mb-6 font-light`}>
                  Homefy Interio,<br />
                   Hyderabad,<br />
                  Telangana 500055<br />
                    India
                </p>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#886c46] hover:bg-[#6b5236] text-white rounded-xl transition duration-300 font-medium shadow-lg hover:shadow-xl group/btn"
                >
                  <MapPin className="w-4 h-4 group-hover/btn:scale-110 transition" />
                  View on Maps
                </a>
              </motion.div> */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group bg-linear-to-br from-white/80 to-[#f8f5f0]/80 backdrop-blur border border-[#886c46]/20 rounded-2xl p-8 hover:shadow-xl transition duration-300 hover:border-[#886c46]/40 flex flex-col justify-between"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#886c46]/10 group-hover:bg-[#886c46]/20 rounded-xl flex items-center justify-center transition duration-300">
                    <MapPin className="w-6 h-6 text-[#886c46]" />
                  </div>
                  <div>
                    <h4 className={`${playfair.className} text-2xl font-semibold text-[#886c46] mb-1`}>
                      Experience Centre & Branch Office
                    </h4>
                    <div className="h-1 w-12 bg-[#d7a661]/30 rounded-full" />
                  </div>
                </div>
                
                <p className={`${inter.className} text-xl text-black/75 leading-relaxed mb-6 font-light`}>
                  Homefy Interio<br />
                  Kukatpally, KPHB <br />
                  Hyderabad, Telangana 502300<br />
                  India
                </p>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 px-5 py-3 bg-[#886c46] hover:bg-[#6b5236] text-white rounded-xl transition duration-300 font-medium shadow-lg hover:shadow-xl group/btn"
                >
                  <MapPin className="w-4 h-4 group-hover/btn:scale-110 transition" />
                  View on Maps
                </a>
              </motion.div>
              <div className="relative h-115 w-full rounded-3xl overflow-hidden border border-white/10">
          <iframe
            title="Homefy Interio Office Location"
            src="https://www.google.com/maps?q=Homefy%20Interio%20Hyderabad&output=embed"
            className="w-full h-full "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8 bg-linear-to-r from-[#886c46]/5 via-transparent to-[#886c46]/5"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className={`${inter.className} text-xs text-black/60 font-light tracking-wide`}>
              © 2016:2026 Homefy Interio. All rights reserved. <span className="text-[#886c46]">•</span> Crafting Quality Homes, Building Better Futures
            </p>
          </div>
        </motion.div>
      </footer>
  );
}
