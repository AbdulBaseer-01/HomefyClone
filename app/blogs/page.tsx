"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const BLOGS = [
  {
    id: 1,
    title: "Designing Homes That Actually Feel Like Home",
    excerpt:
      "Why good interior design is less about trends and more about how you live every day.",
    image: "/int-1.webp",
    category: "Interior Design",
    date: "Jan 12, 2025",
  },
  {
    id: 2,
    title: "Modular Kitchens: What No One Tells You",
    excerpt:
      "Hidden costs, material choices, and mistakes homeowners make while planning kitchens.",
    image: "/int-2.webp",
    category: "Modular Kitchen",
    date: "Jan 20, 2025",
  },
  {
    id: 3,
    title: "Turnkey Projects Explained (Without the Marketing BS)",
    excerpt:
      "A realistic breakdown of what turnkey means, timelines, and expectations.",
    image: "/int-3.webp",
    category: "Turnkey",
    date: "Feb 02, 2025",
  },
  {
    id: 4,
    title: "Luxury Interiors on a Practical Budget",
    excerpt:
      "How smart material selection gives premium results without overspending.",
    image: "/int-4.webp",
    category: "Budgeting",
    date: "Feb 10, 2025",
  },
//   {
//     id: 5,
//     title: "Common Interior Mistakes Indian Homes Make",
//     excerpt:
//       "From lighting errors to storage miscalculations — avoid these costly mistakes.",
//     image: "/int-5.webp",
//     category: "Guides",
//     date: "Feb 18, 2025",
//   },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

export default function BlogsPage() {
  const featured = BLOGS[0];
  const rest = BLOGS.slice(1);

  return (
    <section className="bg-[#F8F7F4] min-h-screen ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28">

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-20 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-[#886c46] mb-3">
            Our Journal
          </p>
          <h1 className={`${playfair.className} text-4xl md:text-6xl font-semibold pb-4 bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}>
            Thoughts on design,<br />spaces & living
          </h1>
          <p className="text-[#6B6B6B] text-lg">
            Practical insights, honest opinions, and real experiences from the
            world of interiors.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-24"
        >
          <Link href={`/blogs/${featured.id}`}>
            <motion.div
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="group relative grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl overflow-hidden border border-[#D6D3CC]"
            >
              <div className="relative h-80 md:h-full">
                <Image
                  src={`${featured.image}`}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-10">
                <p className="text-sm uppercase tracking-wider text-[#886c46] mb-3">
                  Featured · {featured.category}
                </p>
                <h2 className="text-3xl font-semibold mb-4 text-[#886c46]">
                  {featured.title}
                </h2>
                <p className="text-black/90 mb-6">
                  {featured.excerpt}
                </p>
                <p className="text-sm text-black">
                  {featured.date}
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rest.map((blog, i) => (
            <motion.div
              key={blog.id}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Link href={`/blogs/${blog.id}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#D6D3CC] h-full flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={`${blog.image}`}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs uppercase tracking-wider text-[#886c46] mb-2">
                      {blog.category}
                    </p>

                    <h3 className="text-xl font-semibold mb-3 leading-snug text-[#886c46]">
                      {blog.title}
                    </h3>

                    <p className="text-black/90 mb-6 flex-1">
                      {blog.excerpt}
                    </p>

                    <p className="text-sm text-black">
                      {blog.date}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-24 text-center">
            <p className="text-xs uppercase tracking-widest text-[#886c46] mb-2">
              Explore more
            </p>

            <h3 className="text-3xl font-semibold text-[#1c1c1c] mb-6">
              Real projects. Real stories. Real spaces.
            </h3>

            <Link
              href="/vlogs"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl 
                        bg-[#886c46] text-[#F8F7F4] text-sm
                        hover:bg-[#886c46d0] transition"
            >
              View All Vlogs <ArrowRight size={14} />
            </Link>
          </div>
      </div>
    </section>
  );
}
