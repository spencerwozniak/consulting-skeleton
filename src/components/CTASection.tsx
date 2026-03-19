// app/components/CTASection.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";

type CTASectionProps = {
  heading: string;
  subheading?: string;
  content: string; // HTML string
  label: string;
  link: string;
  imgURL: string;
  imgAlt?: string;
  imagePosition?: "left" | "right"; // new prop, default is "left"
  isPriority?: boolean; // new
};

export default function CTASection({
  heading,
  subheading,
  content,
  label,
  link,
  imgURL,
  imgAlt = "section image",
  imagePosition = "left",
  isPriority = false,
}: CTASectionProps) {
  // Determine flex direction
  const isImageLeft = imagePosition === "left";
  return (
    <section className="px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`
            flex flex-col md:flex-row
            ${isImageLeft ? "" : "md:flex-row-reverse"}
            items-center md:items-stretch gap-10
          `}
        >
          {/* Image */}
          <div className="w-full md:w-[44%] flex-shrink-0 flex items-center justify-center">
          <div className="relative w-full aspect-[16/11] md:aspect-auto md:w-full md:h-[400px] shadow-xl">
            <Image
              src={imgURL}
              alt={imgAlt}
              fill
              className="object-contain"
              priority={isPriority}
              loading={isPriority ? 'eager' : 'lazy'}
              decoding="async"
              sizes="(min-width: 1024px) 44vw, 100vw"
            />
          </div>

          </div>

          {/* Main Content */}
          <div className="w-full md:w-[56%] flex flex-col justify-center">
            <div className="mb-4 text-center md:text-left">
              <h2 className="mb-1 md:mb-3 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                {heading}
              </h2>
              {subheading && (
                <h3 className="mb-4 text-lg md:text-2xl font-light tracking-tight text-gray-300">
                  {subheading}
                </h3>
              )}
            </div>
            <div
              className="px-2 md:px-0 mb-7 text-gray-200 text-md md:text-lg font-light [&_p]:mb-3 [&_p:last-child]:mb-0"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="flex justify-center md:justify-start w-full mb-2">
              <Link
                href={link}
                target="_self"
                className="inline-flex items-center rounded-full px-6 py-2 font-semibold transition bg-brand-blue text-black hover:bg-brand-blue/80 cursor-pointer"
              >
                {label}
                <FaChevronRight className="text-xs ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
