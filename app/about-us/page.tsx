"use client"
import { TimelineSection } from "@/components/Timeline";
import { motion } from "motion/react";
import Image from "next/image";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const container = {
  hidden: { opacity: 0.9 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function AboutUsPage() {
  return (
    <section
      className="min-h-screen bg-[#EFEDE8] px-6 md:px-16 py-20"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h1
          variants={item}
          className={`${playfair.className} text-4xl md:text-6xl font-semibold pb-4 bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}
        >
          Designing Homes. <br /> Building Trust.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-lg text-black/70"
        >
          We are not just an interior brand.  
          We are a team obsessed with details, quality, and the feeling of
          walking into a space that finally feels like <b>home</b>.
        </motion.p>
      </motion.div>


<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={container}
  className="relative max-w-7xl mx-auto mt-32 px-6"
>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

    <motion.div
      variants={item}
      className="lg:col-span-5 relative"
    >
      <div className="absolute -top-6 -left-6 w-full h-full border border-black/20 rounded-2xl" />

      <div className="relative z-10 w-full h-105 rounded-2xl overflow-hidden">
        <Image
          src="/int-3.webp"
          alt="Our journey"
          fill
          priority
          className="object-cover"
        />
      </div>
    </motion.div>
    <motion.div
      variants={container}
      className="lg:col-span-7"
    >
      <motion.p
        variants={item}
        className="uppercase tracking-widest text-xs text-[#886c46] mb-4"
      >
        Our Journey
      </motion.p>

      <motion.h2
        variants={item}
        className={`${playfair.className} text-4xl md:text-5xl font-semibold pb-4 bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}
      >
        Designing homes
        <br />
        that stand the test of time
      </motion.h2>

      <motion.p
        variants={item}
        className="text-black/70 leading-relaxed max-w-xl"
      >
        Homefy was born out of frustration — with rushed timelines,
        compromised materials, and poor execution that plague the Indian
        interior industry.
        <br /><br />
        What started as a small team on residential projects evolved into a
        full-scale interior and turnkey solutions firm, trusted by families
        who value precision, transparency, and long-term durability.
      </motion.p>

      {/* STATS */}
      <motion.div
        variants={container}
        className="mt-10 grid grid-cols-3 gap-8"
      >
        {[
          { label: "Projects Delivered", value: "120+" },
          { label: "Cities Served", value: "6" },
          { label: "Client Satisfaction", value: "4.9★" },
        ].map((stat) => (
          <motion.div key={stat.label} variants={item}>
            <p className="text-3xl font-semibold text-black">
              {stat.value}
            </p>
            <p className="text-sm text-black/50">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</motion.section>


      <motion.div
        variants={container}
        className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={item} className="relative">
          <motion.div
            variants={item}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/int-2.webp" 
              alt="Founder"
              width={600}
              height={400}
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={item}>
          <motion.h2
            variants={item}
            className="text-3xl font-semibold text-[#886c46]"
          >
            Meet the Founder
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 text-black/70 leading-relaxed"
          >
            Founded by a professional who believes that interiors are not about
            trends — but about people.
            <br /><br />
            With a background rooted in design sensibility and on-ground
            execution, the vision was clear from day one: deliver spaces that
            balance aesthetics, functionality, and long-term durability.
            <br /><br />
            Every project at Homefy reflects this philosophy — practical layouts,
            refined finishes, and designs that age gracefully.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 font-medium text-black"
          >
            “Good design should feel effortless — even though it never is.”
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        className="max-w-6xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {[
          { label: "Homes Designed", value: "250+" },
          { label: "Cities Served", value: "8+" },
          { label: "Years of Experience", value: "7+" },
          { label: "Client Satisfaction", value: "98%" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={item}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <motion.p
              variants={item}
              className="text-3xl font-bold text-[#886c46]"
            >
              {stat.value}
            </motion.p>
            <motion.p
              variants={item}
              className="mt-2 text-black/70"
            >
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
        <TimelineSection />
      <motion.div
        variants={item}
        className="max-w-4xl mx-auto mt-24 text-center"
      >
        <motion.p
          variants={item}
          className="text-lg text-black/70"
        >
          At Homefy, every project begins with a conversation and ends with a
          space our clients are proud to call home.
        </motion.p>
      </motion.div>
    </section>
  );
}
