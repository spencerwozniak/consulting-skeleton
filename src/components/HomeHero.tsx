// app/components/HomeHero.tsx

'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Handler for clicking on the video area
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section className="w-full bg-[#0a0a0a]">
      <div className="max-w-8xl mx-auto md:pr-10 lg:pr-20 xl:px-30 flex flex-col md:flex-row items-center gap-10">
        {/* Video Section */}
        <div className="w-full md:w-3/4 flex-shrink-0">
          <div
            className="relative aspect-14/9 w-full overflow-hidden bg-gray-100 cursor-pointer"
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/montage.mp4"
              poster="/placeholder.png"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
            />
            {/* Volume Icon Overlay */}
            <span className="
              absolute bottom-4 left-4
              bg-black/40 rounded-full p-2
              flex items-center justify-center
              text-white text-2xl
              transition-opacity duration-300
              select-none pointer-events-none
            ">
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </span>
          </div>
        </div>
        {/* Text Section */}
        <div className="px-2 md:px-0 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 tracking-tight text-white md:leading-14 lg:leading-17 xl:leading-20">
            Physician, <br className='hidden md:block'/>Futurist, <br className='hidden md:block'/>Investor.
          </h1>
          <p className="mb-5 text-md font-light text-white max-w-prose leading-7">
            Dr. Emmanuel Fombu
            is <b>The Healthspan Futurist™</b> — an internationally recognized and highly sought-after physician-scientist, bestselling author, keynote speaker, and biotech executive reshaping the global narrative on aging, innovation, and the future of healthcare.
          </p>
          <Link
            href="/contact"
            target="_self"
            className="inline-flex items-center rounded-full px-6 py-2 font-semibold transition bg-brand-blue text-black hover:brightness-90 cursor-pointer"
          >
            Get in Touch
            <FaChevronRight className="text-xs ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}