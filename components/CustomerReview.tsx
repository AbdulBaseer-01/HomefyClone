"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Home, Star } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });



export default function CustomerReviews() {
    const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = [
    {
      id: 1,
      name: "Murali Krishna",
      rating: 5,
      text: "I have worked with Mr. Saif sir closely on my requirements. He was patient enough to consider all of them and provided me a beautiful plan. He was also considered the issues of transporting it to our location and built the entire container home onsite. ",
    },
    {
      id: 6,
      name: "Saurav Mishra",
      rating: 5,
      text: "I recently explored Texo Prefab World’s services, Their expertise in designing and constructing container houses, offices, and other prefab structures is evident in the quality of their products.The materials used are durable and eco-friendly, aligning perfectly with modern sustainability needs",
    },
    {
      id: 3,
      name: "Bharath G.N",
      rating: 4,
      text: "Fantastic ideas for a new world ofhomes",
    },
    {
      id: 4,
      name: "Shiva Krishna",
      rating: 5,
      text: "They are committed and excellent service and on time delivery.",
    },
    {
      id: 5,
      name: "Vikram Reddy",
      rating: 5,
      text: "Fast, efficient, and reliable. The quality of construction is premium. Texo Prefab sets new standards in the prefab industry.",
    },
    {
      id: 2,
      name: "Lakshmi Vide",
      rating: 4,
      text: "Very supportive and user friendly. Clear in taking the specifications and while delivering the product",
    },
  ];
  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  return (
    <section className="py-32 bg-linear-to-b from-white via-[#faf8f4] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 text-center max-w-3xl mx-auto"
          >
            <motion.h2 className={`${playfair.className} text-4xl md:text-6xl font-semibold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}>
              What Our Clients Say
            </motion.h2>
            <p className={`${inter.className} text-zinc-600 text-lg`}>
              Hear from our satisfied customers about their experience with Texo Prefab and how we`ve transformed their vision into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-20">
          
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition border border-[#886c46]/20 flex flex-col items-center justify-center"
            >
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-6 h-6 text-[#886c46]" />

                <span className={`${playfair.className} text-xl font-semibold text-[#886c46]`}>Homefy Interio</span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className={`${playfair.className} text-5xl font-bold text-[#886c46]`}>4.6</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-300 text-yellow-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className={`${inter.className} text-black/70 text-sm mb-6`}>
                Based on 76 reviews
              </p>

              <div className={`${inter.className} text-sm`}>
                <span className="text-black/70">Powered by </span>
                <span className="inline-flex gap-0.5 font-semibold">
                  <span style={{ color: '#4285F4' }}>G</span>
                  <span style={{ color: '#EA4335' }}>o</span>
                  <span style={{ color: '#FBBC05' }}>o</span>
                  <span style={{ color: '#4285F4' }}>g</span>
                  <span style={{ color: '#EA4335' }}>l</span>
                  <span style={{ color: '#34A853' }}>e</span>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div>
                <h3 className={`${playfair.className} text-3xl md:text-4xl font-semibold mb-4 bg-linear-to-r from-[#886c46] via-black to-[#886c46] bg-clip-text text-transparent`}>
                  Excellence in Every Project
                </h3>
              </div>
              <p className={`${inter.className} text-black/70 text-lg leading-relaxed`}>
                Our clients trust us to deliver exceptional prefab solutions that exceed expectations. With a 4.6-star rating based on 76 reviews, we`re committed to maintaining the highest standards of quality and customer satisfaction in every project we undertake.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-linear-to-br from-[#f8f5f0] to-[#f0ebe0] rounded-2xl p-6 border border-[#886c46]/20">
                  <p className={`${playfair.className} text-3xl font-bold text-[#886c46] mb-1`}>1300+</p>
                  <p className={`${inter.className} text-black/70 text-sm`}>Projects Delivered</p>
                </div>
                <div className="bg-linear-to-br from-[#f8f5f0] to-[#f0ebe0] rounded-2xl p-6 border border-[#886c46]/20">
                  <p className={`${playfair.className} text-3xl font-bold text-[#886c46] mb-1`}>98%</p>
                  <p className={`${inter.className} text-black/70 text-sm`}>Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

          </div>

        <div className="max-w-7xl mx-4 px-6 mt-20 overflow-hidden">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset, cardIndex) => {
                const idx = (reviewIndex + offset) % reviews.length;
                const review = reviews[idx];
                return (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0.3, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition ${cardIndex > 0 ? 'hidden md:block' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-200 text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex gap-0.5 font-bold text-xs">
                        <span style={{ color: '#4285F4' }}>G</span>
                        <span style={{ color: '#EA4335' }}>o</span>
                        <span style={{ color: '#FBBC05' }}>o</span>
                        <span style={{ color: '#4285F4' }}>g</span>
                        <span style={{ color: '#EA4335' }}>l</span>
                        <span style={{ color: '#34A853' }}>e</span>
                      </div>
                    </div>

                    <p className={`${inter.className} text-black/80 text-sm mb-4 leading-relaxed`}>
                      &quot;{review.text}&quot;
                    </p>

                    <div>
                      <h4 className={`${playfair.className} font-semibold text-black`}>
                        {review.name}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={prevReview}
              className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 bg-[#886c46] text-white p-3 rounded-full hover:bg-[#6b5236] transition z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-[#886c46] text-white p-3 rounded-full hover:bg-[#6b5236] transition z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setReviewIndex(idx)}
                className={`w-2 h-2 rounded-full transition ${
                  idx === reviewIndex ? 'bg-[#886c46]' : 'bg-black/20'
                }`}
              />
            ))}
          </div>
        </div>
        </div>
      </section>
  );
}

