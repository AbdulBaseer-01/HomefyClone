"use client";

import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Built and launched our interior solutions brand with premium
            residential projects across multiple cities.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "int-1.webp",
              "int-2.webp",
              "int-3.webp",
              "int-4.webp",
            ].map((img, i) => (
              <Image
                key={i}
                src={`/${img}`}
                alt="Project showcase"
                width={500}
                height={500}
                className="h-20 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-md"
              />
            ))}
          </div>
        </div>
      ),
    },

    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Expanded into turnkey interior projects, modular kitchens, and
            custom furniture solutions.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "int-1.webp",
              "int-2.webp",
              "int-3.webp",
              "int-4.webp",
            ].map((img, i) => (
              <Image
                key={i}
                src={`/${img}`}
                alt="Design work"
                width={500}
                height={500}
                className="h-20 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-md"
              />
            ))}
          </div>
        </div>
      ),
    },

    {
      title: "Today",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
            Trusted by homeowners for premium interiors with transparent
            pricing, quality craftsmanship, and timeless design.
          </p>

          <div className="space-y-2 mb-6 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            <div>✅ 250+ homes delivered</div>
            <div>✅ 98% customer satisfaction</div>
            <div>✅ End-to-end interior solutions</div>
            <div>✅ Dedicated project managers</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "int-1.webp",
              "int-2.webp",
              "int-3.webp",
              "int-4.webp",
            ].map((img, i) => (
              <Image
                key={i}
                src={`/${img}`}
                alt="Completed interiors"
                width={500}
                height={500}
                className="h-20 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow-md"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative rounded-2xl mt-12 w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
