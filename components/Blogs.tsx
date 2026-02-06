// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Blogs() {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.from(".blog-card", {
//       opacity: 0,
//       y: 40,
//       stagger: 0.15,
//       scrollTrigger: {
//         trigger: ref.current,
//         start: "top 80%",
//       },
//     });
//   }, []);

//   return (
//     <section ref={ref} className="bg-white px-8 py-32">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-semibold mb-16">Insights & Ideas</h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {[1, 2, 3].map((i) => (
//             <div
//               key={i}
//               className="blog-card border border-black/10 rounded-2xl p-6 hover:border-black transition"
//             >
//               <h3 className="text-lg font-medium mb-2">
//                 Designing Spaces That Last
//               </h3>
//               <p className="text-black/60 text-sm">
//                 Practical insights on interiors, materials, and execution.
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-14">
//           <a href="/blogs" className="underline text-black/70 hover:text-black">
//             View all blogs →
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const BLOGS = [
  {
    title: "Designing spaces that breathe",
    excerpt:
      "How light, material, and proportion define timeless interiors.",
    image: "/int-5.webp",
    href: "/blogs/designing-spaces",
    featured: true,
  },
  {
    title: "Modular kitchens done right",
    excerpt: "Mistakes to avoid when planning modern kitchens.",
    image: "/int-1.webp",
    href: "/blogs/modular-kitchens",
  },
  {
    title: "The psychology of space",
    excerpt: "Why good design feels effortless.",
    image: "/int-3.webp",
    href: "/blogs/psychology-of-space",
  },
];

export default function BlogsSection() {
  return (
    <section className="px-4 md:px-6 lg:px-8 mb-12 md:mb-20 mt-8 md:mt-12 text-[#1c1c1c] dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-16">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#886c46] mb-2 md:mb-3">
              Blogs
            </p>
            <h2 className={`${playfair.className} text-4xl md:text-6xl font-semibold pb-4 bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}>
              Thoughts, stories
              <br />
              & insights
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">

          {BLOGS.filter((b) => b.featured).map((blog, i) => (
            <div key={i} className="w-full lg:flex-1 flex flex-col gap-6 md:gap-10">
              <Link
                href={blog.href}
                className="group"
              >
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 md:mt-6 max-w-xl">
                  <h3 className="text-xl md:text-2xl font-medium mb-1 md:mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm md:text-base text-black/70 dark:text-gray-300">{blog.excerpt}</p>
                </div>
              </Link>
              <Link
                href="/blogs"
                className="hidden md:inline-flex items-center gap-2 text-sm w-fit font-medium text-center px-4 md:px-6 py-2 md:py-3 bg-[#886c46] text-[#F8F7F4] border border-[#886c46] rounded-xl md:rounded-2xl hover:bg-[#585C32] hover:text-white transition"
              >
                View all blogs <ArrowRight size={16} />
              </Link>
            </div>
          ))}

          <div className="w-full lg:flex-1 flex flex-col gap-4 md:gap-8">
            {BLOGS.filter((b) => !b.featured).map((blog, i) => (
              <Link
                key={i}
                href={blog.href}
                className="group flex flex-col"
              >
                <div className="relative h-40 md:h-48 lg:h-56 rounded-2xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-3 md:mt-4">
                  <h4 className="text-base md:text-lg font-medium mb-1">
                    {blog.title}
                  </h4>
                  <p className="text-xs md:text-sm text-black/60 dark:text-gray-400">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-0 text-center md:hidden">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 bg-[#6a6f3c] text-[#F8F7F4] border-2 border-[#434a03] rounded-xl md:rounded-2xl hover:bg-[#585C32] hover:text-white transition"
          >
            View all blogs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
