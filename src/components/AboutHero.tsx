import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface AboutHeroProps {
  backgroundImage: StaticImageData | string;
  alt?: string;
}

export default function AboutHero({ backgroundImage, alt = '' }: AboutHeroProps) {
  return (
    <section className="relative w-full h-[100vh] min-h-[400px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={alt}
          fill
          priority               // keep ONLY if this hero is the page’s LCP
          fetchPriority="high"   // nudge browser to fetch early
          decoding="async"
          className="object-cover w-full h-full object-[70%_center]"
          sizes="(min-width: 1024px) 100vw, 100vw"
        />
      </div>

      {/* Fixed-position content */}
      <div className="
        absolute 
        left-0 
        top-1/2 
        -translate-y-1/2
        pl-10 md:pl-16
        z-10
        flex flex-col items-start
        sm:w-[50vw]
      ">
        <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg mb-4">
          Dr. Emmanuel Fombu
        </h1>
        <h2 className='font-medium mb-4 text-2xl md:text-3xl'>
            The Healthspan Futurist™
        </h2>
        <div className='w-[60vw]'>
        <p className='mb-2'>
            I’m Dr. Emmanuel Fombu, The Healthspan Futurist™. For over twenty years, my journey as a physician, author, and biotech executive has been driven by a simple question: <strong>How can we empower people not just to live longer, but to live better?</strong>
        </p>
        <p>
            From operating rooms to boardrooms, I’ve seen firsthand the power of innovation, collaboration, and a relentless focus on human potential. My mission is to transform healthcare from reactive to proactive—building a future where precision, prevention, and performance shape the way we age and thrive.
        </p>
        </div>
        {/* Optional: subtitle or CTA */}
      </div>
    </section>
  );
}
