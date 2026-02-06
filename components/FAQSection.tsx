"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const faqs = [
  {
    q: "How long does a complete home interior project take?",
    a: "A standard 2 or 3 BHK interior project typically takes between 6–10 weeks from design finalization to handover. Timelines may vary depending on customization, site conditions, and material availability.",
  },
  {
    q: "Do you offer turnkey interior solutions?",
    a: "Yes. We provide complete turnkey solutions — from design, material procurement, execution, and site management to final handover, so you don’t have to coordinate with multiple vendors.",
  },
  {
    q: "Is pricing transparent or will there be hidden costs?",
    a: "We follow a transparent, itemized pricing model. Every material, finish, and scope detail is clearly documented before execution begins. There are no surprise costs.",
  },
  {
    q: "Can I customize designs and materials?",
    a: "Absolutely. Every design is tailored to your lifestyle, budget, and preferences. You can choose from multiple materials, finishes, layouts, and hardware options.",
  },
  {
    q: "Do you provide warranty and post-handover support?",
    a: "Yes. We provide manufacturer warranties on materials and fittings along with dedicated post-handover support for any service requirements.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 px-6 border-t border-[#D6D3CC]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{  y: 30 }}
          whileInView={{  y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[#886c46] mb-4">
            FAQs
          </p>

          <h2 className={`${playfair.className} text-4xl md:text-6xl font-semibold pb-4 bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}>
            Questions we’re
            <br />
            commonly asked
          </h2>

          <p className="text-black/60">
            Clear answers. No jargon. No confusion. Everything you need to know
            before starting your interior journey.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={false}
                className="border border-black/10 bg-[#886c46d0] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left px-6 py-5"
                >
                  <span className="text-lg font-medium text-black">
                    {faq.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-black/60"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0.5 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="px-6 pb-6 text-black/70 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
