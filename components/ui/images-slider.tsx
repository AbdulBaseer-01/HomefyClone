"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ImagesSliderProps {
  images: string[];
  className?: string;
  children?: React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
}

export default function ImagesSlider({
  images,
  className,
  children,
  autoPlay = true,
  interval = 5000,
}: ImagesSliderProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
  if (!autoPlay) return;

  const id = setInterval(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  }, interval);

  return () => clearInterval(id);
}, [autoPlay, interval, images.length]);


  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden",
        className
      )}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex items-center justify-center pt-12">
        {children}
      </div>

      <button
        onClick={prev}
        className="absolute md:left-5 left-1 top-1/2 -translate-y-1/2
        z-30 rounded-full w-11 h-11
        bg-white/20 backdrop-blur-md text-white
        hover:bg-white/30 transition text-xl"
      >
        {"<"}
      </button>

      <button
        onClick={next}
        className="absolute md:right-5 right-1 top-1/2 -translate-y-1/2
        z-30 rounded-full w-11 h-11
        bg-white/20 backdrop-blur-md text-white
        hover:bg-white/30 transition text-xl"
      >
        {">"}
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition
              ${
                i === index
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
