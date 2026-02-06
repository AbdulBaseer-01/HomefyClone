"use client"
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ContactUsPage() {
  return (
    <section
      className="min-h-screen bg-[#EFEDE8] "
    >
      <motion.div variants={item} className="max-w-4xl mx-auto text-center px-6 md:px-16 py-20">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className={`${playfair.className} text-4xl md:text-6xl font-semibold pb-4 bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}
        >
          Let’s Build Something Beautiful
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-black/90 text-lg"
        >
          Whether it’s a complete interior, custom furniture, or a simple
          consultation — we’re just a message away.
        </motion.p>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <motion.div
          variants={container}
          className="space-y-8 bg-white rounded-2xl p-8 shadow-lg"
        >
          <motion.h2
            variants={item}
            className="text-2xl font-semibold text-black"
          >
            Contact Information
          </motion.h2>

          <motion.div variants={item} className="flex items-start gap-4">
            <motion.span variants={item}>
              <Phone className="text-[#886c46]" />
            </motion.span>
            <motion.div variants={item}>
              <p className="font-medium text-black">Phone</p>
              <p className="text-black/70">+91 98765 43210</p>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="flex items-start gap-4">
            <motion.span variants={item}>
              <Mail className="text-[#886c46]" />
            </motion.span>
            <motion.div variants={item}>
              <p className="font-medium text-black">Email</p>
              <p className="text-black/70">hello@homefy.in</p>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="flex items-start gap-4">
            <motion.span variants={item}>
              <MapPin className="text-[#886c46]" />
            </motion.span>
            <motion.div variants={item}>
              <p className="font-medium text-black">Studio Address</p>
              <p className="text-black/70">
                Banjara Hills, Hyderabad <br />
                Telangana, India
              </p>
            </motion.div>
          </motion.div>

          <motion.p
            variants={item}
            className="pt-4 text-sm text-black/60"
          >
            Our team usually responds within 24 working hours.
          </motion.p>
        </motion.div>

        <motion.form
          variants={container}
          className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
        >
          <motion.h2
            variants={item}
            className="text-2xl font-semibold text-black"
          >
            Send Us a Message
          </motion.h2>

          <motion.input
            variants={item}
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-black/20 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
          />

          <motion.input
            variants={item}
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-black/20 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
          />

          <motion.input
            variants={item}
            type="text"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-black/20 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
          />

          <motion.textarea
            variants={item}
            placeholder="Tell us about your requirement..."
            rows={5}
            className="w-full rounded-lg border border-black/20 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
          />

          <motion.button
            variants={item}
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-lg bg-[#886c46] text-white py-3 font-medium hover:bg-[#886c46]/90 transition"
          >
            Submit Enquiry
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.p
        variants={item}
        className="text-center text-sm text-black/50 mt-16"
      >
        © {new Date().getFullYear()} Homefy Interiors. All rights reserved.
      </motion.p>
    </section>
  );
}
