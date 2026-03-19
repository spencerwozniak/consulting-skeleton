'use client';

import React from 'react';

const defaultTestimonials = [
  {
    quote: "The most thought-provoking speaker at the entire summit.",
    source: "Global Health Conference Organizer, Abu Dhabi",
  },
  {
    quote: "Dr. Fombu’s keynote was the most talked-about session of our summit — bold, visionary, and actionable.",
    source: "Feedback from Merck Future of Medicine Summit",
  },
  {
    quote: "He doesn’t just speak. He awakens the room. Dr. Fombu connects science, storytelling, and strategy like no one else.",
    source: "Shared by TechCrunch Health Event Organizers",
  },
  {
    quote: "What stood out was his humanity. Emmanuel delivers complex science with emotional clarity. Our audience was inspired.",
    source: "Reflections from the Etihad Global Wellness Series",
  },
  {
    quote: "He’s a rare voice — a futurist who’s walked the talk in pharma, biotech, and venture. I’d book him again in a heartbeat.",
    source: "Feedback from UCSD Healthspan-X Symposium",
  },
  {
    quote: "Dr. Fombu’s talk on healthspan and AI changed how our entire board sees the future of medicine.",
    source: "Remarks from a Longevity Therapeutics Leadership Panel",
  },
];

export type Testimonial = {
  quote: string;
  source: string;
};

interface AudienceTestimonialsProps {
  testimonials?: Testimonial[];
  title?: string;
}

export default function AudienceTestimonials({
  testimonials,
  title = "What Audiences Are Saying"
}: AudienceTestimonialsProps) {
  const toDisplay = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto text-center lg:px-6">
        <h2 className="text-3xl font-semibold mb-10 text-white">{title}</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {toDisplay.map((t, i) => (
            <figure key={i} className="mx-auto max-w-md">
              <svg
                className="h-12 mx-auto text-brand-gold"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-lg font-medium text-white italic">{t.quote}</p>
              </blockquote>
              <figcaption className="mt-4 text-sm text-gray-400">{t.source}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
