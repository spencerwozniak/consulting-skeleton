'use client'

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { affiliationsImages } from "./affiliations.generated";

export default function Affiliations() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const speed = 1; // px per frame

  useEffect(() => {
    const carousel = carouselRef.current;
    const wrapper = wrapperRef.current;
    if (!carousel || !wrapper) return;
    let frameId: number;

    function animate() {
      if (!carousel || !wrapper) return;
      carousel.scrollLeft += speed;

      // Use precise wrapper width for seamless reset!
      if (carousel.scrollLeft >= wrapper.offsetWidth) {
        carousel.scrollLeft -= wrapper.offsetWidth;
      }
      frameId = requestAnimationFrame(animate);
    }

    // Initialize
    carousel.scrollLeft = 0;
    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative w-full py-8 overflow-hidden">
      <div className="w-full flex justify-center mb-4">
        <span className="text-sm text-neutral-400 font-semibold tracking-wide uppercase">
          As Seen On & Affiliated With
        </span>
      </div>
      <div className="mx-auto">
        <div
          ref={carouselRef}
          className="affiliations-carousel flex items-center"
          style={{
            width: "100%",
            overflowX: "hidden",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Actual loopable wrapper */}
          <div ref={wrapperRef} style={{ display: "flex" }}>
            {affiliationsImages.map((img, i) => (
              <div
                key={i}
                className="mr-10 flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
                style={{ display: "inline-block" }}
              >
                <Image
                  src={img}
                  alt={`Affiliation logo ${i + 1}`}
                  width={160}
                  height={160}
                  style={{ filter: "contrast(0.4)" }}
                  className="object-contain w-full h-full drop-shadow-md"
                  draggable={false}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
          {/* Duplicate for infinite loop */}
          <div style={{ display: "flex" }}>
            {affiliationsImages.map((img, i) => (
              <div
                key={`dup-${i}`}
                className="mr-10 flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
                style={{ display: "inline-block" }}
              >
                <Image
                  src={img}
                  alt={`Affiliation logo duplicate ${i + 1}`}
                  width={160}
                  height={160}
                  style={{ filter: "contrast(0.4)" }}
                  className="object-contain w-full h-full drop-shadow-md"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[50vw] bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[50vw] bg-gradient-to-l from-[#0a0a0a] via-transparent to-transparent z-10" />
      <style jsx>{`
        .affiliations-carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
