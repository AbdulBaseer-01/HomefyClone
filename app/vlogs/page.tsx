"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const VLOGS = [
  {
    id: 1,
    title: "Complete 3BHK Home Interior Walkthrough",
    description:
      "A detailed walkthrough of a fully completed 3BHK interior project in Hyderabad.",
    thumbnail: "/int-1.webp",
    duration: "6:42",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1",
    tag: "#HomeTour",
  },
  {
    id: 2,
    title: "Modular Kitchen Execution Process",
    description:
      "From raw site to final finish — step-by-step modular kitchen execution.",
    thumbnail: "/int-2.webp",
    duration: "5:18",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2",
    tag: "#ModularKitchen",
  },
  {
    id: 3,
    title: "Turnkey Interior Project Site Visit",
    description:
      "Live site updates, material discussion, and execution insights.",
    thumbnail: "/int-3.webp",
    duration: "7:05",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_3",
    tag: "#TurnkeyProject",
  },
  {
    id: 4,
    title: "Wardrobe Design & Installation",
    description:
      "Custom wardrobe design with premium finishes and clean execution.",
    thumbnail: "/int-4.webp",
    duration: "4:56",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_4",
    tag: "#CustomFurniture",
  },
];

export default function VlogsPage() {
  const featured = VLOGS[0];
  const rest = VLOGS.slice(1);

  return (
    <main className="bg-black text-white ">
      <div className="max-w-7xl mx-auto md:px-8 py-16 md:py-32 px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-12 md:mb-20"
        >
          <p className="uppercase tracking-widest text-xs md:text-sm text-[#c09a65] mb-4 font-bold">
            Video Stories
          </p>
          <h1 className={`${playfair.className} text-4xl md:text-6xl font-semibold bg-linear-to-r from-white via-[#886c46] to-white bg-clip-text text-transparent mb-4`}>
            Real projects. Real execution.
          </h1>
          <p className="text-white/70 text-base md:text-lg">
            Watch how our interiors come to life — from site visits to final
            walkthroughs.
          </p>
        </motion.div>

        <a
          href={featured.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-12 md:mb-28"
        >
          <motion.div
            whileHover={{ scale: 0.985 }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
          >
            <Image
              src={featured.thumbnail}
              alt={featured.title}
              width={1400}
              height={700}
              className="w-full h-76 md:h-80 lg:h-96 object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border border-white/60 flex items-center justify-center backdrop-blur-md transition group-hover:scale-110">
                  <Play size={20} fill="white" />
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-auto max-w-2xl flex flex-col items-start justify-center">
              <p className="text-xs md:text-sm text-white/70 mb-2">
                {featured.duration} • Featured
              </p>
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3 line-clamp-2">
                {featured.title}
              </h2>
              <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base hidden md:block">
                {featured.description}
              </p>

              <span className="text-xs md:text-sm text-[#c09a65] hover:underline">
                {featured.tag} → Watch on YouTube
              </span>
            </div>
          </motion.div>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
          {rest.map((vlog, i) => (
            <a
              key={vlog.id}
              href={vlog.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-black/40 cursor-pointer"
              >
                <Image
                  src={vlog.thumbnail}
                  alt={vlog.title}
                  width={600}
                  height={400}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                <div className="absolute top-3 right-3 bg-black/60 px-2 md:px-3 py-1 rounded-full text-xs">
                  {vlog.duration}
                </div>

                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                  <h3 className="text-base md:text-lg font-medium mb-2 line-clamp-2">
                    {vlog.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/70 mb-2 md:mb-3 hidden md:block line-clamp-2">
                    {vlog.description}
                  </p>

                  <span className="text-xs text-[#c09a65] hover:underline">
                    {vlog.tag} → YouTube
                  </span>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
        <div>
          <div className="mt-16 md:mt-24 text-center">
            <p className="text-xs uppercase tracking-widest text-[#886c46] mb-2">
              Explore more
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
              Explore insights, ideas, and design inspiration
            </h3>

            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-2 md:py-3 rounded-xl 
                        bg-[#886c46] text-[#F8F7F4] text-xs md:text-sm
                        hover:bg-[#886c46d0] transition"
            >
              View All Blogs <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
