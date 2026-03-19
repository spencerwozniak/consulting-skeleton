// components/LeadershipBrands.tsx
import React from "react";
import Link from "next/link";
import {
  FaDna,
  FaFlask,
  FaMicrophoneAlt,
  FaChalkboardTeacher,
  FaPodcast,
  FaBookOpen,
} from "react-icons/fa";

type Item = {
  title: string;
  blurb: string;
  href: string;
  icon: React.ReactNode;
  color: {
    ring: string;       // card ring
    iconBg: string;     // icon badge bg
    iconText: string;   // icon color
    linkText: string;   // link color
  };
};

const items: Item[] = [
  {
    title: "The Healthspan Futurist™ Concierge Program",
    blurb:
      "Personalized longevity care with elite diagnostics, continuous risk detection, and a proactive strategy designed entirely around you.",
    href: "/concierge",
    icon: <FaDna className="h-6 w-6" aria-hidden />,
    color: {
      ring: "ring-brand-gold/20",
      iconBg: "bg-brand-gold/10",
      iconText: "text-brand-gold",
      linkText: "text-brand-gold hover:text-brand-gold/80",
    },
  },
  {
    title: "The Healthspan Futurist™ Advisory Group",
    blurb:
      "End-to-end strategic consulting for biotech, pharma, and digital health—from first-in-human through Phase 4, regulatory pathways, and AI-enabled RWE.",
    href: "/services",
    icon: <FaFlask className="h-6 w-6" aria-hidden />,
    color: {
      ring: "ring-brand-gold/20",
      iconBg: "bg-brand-gold/10",
      iconText: "text-brand-gold",
      linkText: "text-brand-gold hover:text-brand-gold/80",
    },
  },
  {
    title: "The Healthspan Futurist™ Career Coaching",
    blurb:
      "Premium career acceleration for MDs, PhDs, IMGs, and clinicians pivoting into biotech, pharma, medtech, digital health leadership, and more.",
    href: "/services#career-coaching",
    icon: <FaChalkboardTeacher className="h-6 w-6" aria-hidden />,
    color: {
      ring: "ring-brand-gold/20",
      iconBg: "bg-brand-gold/10",
      iconText: "text-brand-gold",
      linkText: "text-brand-gold hover:text-brand-gold/80",
    },
  },
  {
    title: "Keynote Speaker & Global Educator",
    blurb:
      "Boardrooms to world stages—actionable talks on longevity, digital health, and predictive medicine, delivered across five continents.",
    href: "/speaking",
    icon: <FaMicrophoneAlt className="h-6 w-6" aria-hidden />,
    color: {
      ring: "ring-brand-gold/20",
      iconBg: "bg-brand-gold/10",
      iconText: "text-brand-gold",
      linkText: "text-brand-gold hover:text-brand-gold/80",
    },
  },
  {
    title: "Host — Bite the Orange Podcast",
    blurb:
      "Candid conversations at the frontier of healthspan, longevity, AI in healthcare, and career reinvention.",
    href: "/podcast",
    icon: <FaPodcast className="h-6 w-6" aria-hidden />,
    color: {
      ring: "ring-brand-gold/20",
      iconBg: "bg-brand-gold/10",
      iconText: "text-brand-gold",
      linkText: "text-brand-gold hover:text-brand-gold/80",
    },
  },
  {
    title: "Author — Books & Publications",
    blurb:
      "From NIH/NLM-recognized bestseller, The Future of Healthcare, to The Healthspan Revolution, arriving Fall 2025.",
    href: "/writing",
    icon: <FaBookOpen className="h-6 w-6" aria-hidden />,
    color: {
      ring: "ring-brand-gold/20",
      iconBg: "bg-brand-gold/10",
      iconText: "text-brand-gold",
      linkText: "text-brand-gold hover:text-brand-gold/80",
    },
  },
];

export default function LeadershipBrands() {
  return (
    <section className="mx-auto mt-14 max-w-7xl px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Current Leadership & Brands
        </h2>
        <p className="mt-2 text-gray-300">
          A portfolio advancing healthspan: concierge medicine, strategic
          advisory, global education, executive coaching, media, and authorship.
        </p>
      </div>

      {/* Grid (3 columns on lg, stacks on mobile) */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className={`group p-6 shadow-xl backdrop-blur`}
          >
            {/* Icon badge */}
            <div
              className={`mb-4 inline-flex items-center justify-center rounded-xl p-3 ${item.color.iconBg}`}
              aria-hidden
            >
              <div className={item.color.iconText}>{item.icon}</div>
            </div>

            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-gray-300 leading-relaxed">{item.blurb}</p>

            <Link
              href={item.href}
              className={`mt-4 inline-flex items-center gap-2 font-medium ${item.color.linkText}`}
              aria-label={`${item.title} — learn more`}
            >
              Learn more
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
