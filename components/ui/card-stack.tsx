"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  image: string;
};

export const CardStack = ({
  items,
  offset = 14,
  scaleFactor = 0.05,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset;
  const SCALE_FACTOR = scaleFactor;

  const [cards, setCards] = useState<Card[]>(items);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // =====================
  // AUTO FLIP
  // =====================
  const startAutoFlip = () => {
    stopAutoFlip();
    intervalRef.current = setInterval(() => {
      nextCard();
    }, 5000);
  };

  const stopAutoFlip = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoFlip();
    return stopAutoFlip;
  }, []);

  // =====================
  // MANUAL CONTROLS
  // =====================
  const nextCard = () => {
    setCards((prev) => {
      const arr = [...prev];
      arr.unshift(arr.pop()!);
      return arr;
    });
  };

  const prevCard = () => {
    setCards((prev) => {
      const arr = [...prev];
      arr.push(arr.shift()!);
      return arr;
    });
  };

  const handleNext = () => {
    nextCard();
    startAutoFlip();
  };

  const handlePrev = () => {
    prevCard();
    startAutoFlip();
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl">
      {/* Container for responsive sizing */}
      <div className="relative w-full h-72 sm:h-96 md:h-80 lg:h-96">

      {/* LEFT BUTTON */}
      <button
        onClick={handlePrev}
        className="
          absolute -left-8 sm:-left-12 md:-left-14 top-1/2 -translate-y-1/2 z-50
          h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full
          backdrop-blur-md bg-white/70 dark:bg-black/60
          border border-black/10 dark:border-white/10
          flex items-center justify-center
          shadow-xl
          hover:scale-110 transition
        "
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={handleNext}
        className="
          absolute -right-8 sm:-right-12 md:-right-14 top-1/2 -translate-y-1/2 z-50
          h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full
          backdrop-blur-md bg-white/70 dark:bg-black/60
          border border-black/10 dark:border-white/10
          flex items-center justify-center
          shadow-xl
          hover:scale-110 transition
        "
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* CARD STACK */}
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="
            absolute inset-0
            bg-white dark:bg-black
            rounded-2xl sm:rounded-3xl
            border border-neutral-200 dark:border-white/10
            shadow-2xl
            overflow-hidden
            flex flex-col sm:flex-row
          "
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
        >
          {/* LEFT CONTENT */}
          <div className="w-full sm:w-3/5 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            <div className="text-neutral-700 dark:text-neutral-200 text-sm sm:text-base md:text-lg leading-relaxed">
              {card.content}
            </div>

            <div>
              <p className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">
                {card.name}
              </p>
              <p className="text-xs sm:text-sm text-neutral-500">
                {card.designation}
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full sm:w-2/5 h-40 sm:h-auto relative">
            <Image
              src={card.image}
              alt={card.name}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </motion.div>
      ))}
      </div>
    </div>
  );
};
