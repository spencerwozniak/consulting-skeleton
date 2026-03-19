// components/AboutExpertise.tsx
import React from "react";
import { FaHeartbeat, FaCogs, FaHandshake } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

type Item = { label: string };
type Card = {
  title: string;
  icon: React.ReactNode;
  color: {
    ring: string;
    accentBg: string; 
    accentText: string;
  };
  items: Item[];
};

const therapeuticItems: Item[] = [
  { label: "Cardiometabolic disease" },
  { label: "Obesity medicine" },
  { label: "Endocrinology" },
  { label: "Nephrology" },
  { label: "Rheumatology" },
  { label: "Oncology" },
  { label: "Rare disease" },
  { label: "Immunology" },
  { label: "Regenerative medicine" },
  { label: "Mental health" },
  { label: "Longevity science" },
];

const strategicItems: Item[] = [
  { label: "First-in-Human through Phase 4 clinical development" },
  { label: "Digital health, RWE, wearables, and AI/ML integration" },
  { label: "Regulatory strategy (FDA, EMA)" },
  { label: "M&A, biotech BD, investor advisory" },
  { label: "Health equity and access strategy" },
  { label: "Medical affairs, scientific communication, KOL engagement" },
];

const advisoryItems: Item[] = [
  { label: "Strategic Advisory for Biotech, Pharma & HealthTech Leaders" },
  { label: "Global Keynotes, Fireside Chats & Thought Leadership Events" },
  { label: "Career & Executive Coaching for Clinicians and Health Innovators" },
  { label: "Corporate Innovation Training & C-Suite Transformation Retreats" },
  { label: "Board & Venture Advisory for Startups, PE, and VC Firms" },
  { label: "Select Collaborations in Longevity, Digital Health & Precision Care" },
];

const cards: Card[] = [
  {
    title: "Therapeutic Expertise",
    icon: (
      <FaHeartbeat
        aria-hidden
        className="h-6 w-6 text-brand-gold"
      />
    ),
    color: {
      ring: "ring-brand-gold/20",
      accentBg: "bg-brand-gold/10",
      accentText: "text-brand-gold",
    },
    items: therapeuticItems,
  },
  {
    title: "Strategic Expertise",
    icon: (
      <FaCogs aria-hidden className="h-6 w-6 text-brand-gold" />
    ),
    color: {
      ring: "ring-brand-gold/20",
      accentBg: "bg-brand-gold/10",
      accentText: "text-brand-gold",
    },
    items: strategicItems,
  },
  {
    title: "Advisory Expertise",
    icon: (
      <FaHandshake
        aria-hidden
        className="h-6 w-6 text-brand-gold"
      />
    ),
    color: {
      ring: "ring-brand-gold/20",
      accentBg: "bg-brand-gold/10",
      accentText: "text-brand-gold",
    },
    items: advisoryItems,
  },
];

export default function AboutExpertise() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      {/* Header (optional, mirror your EXAMPLE) */}
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Areas of Expertise
        </h2>
        <p className="mt-2 text-gray-300">
          A blend of deep therapeutic knowledge, end-to-end development strategy,
          and high-impact advisory for innovators across healthcare.
        </p>
      </div>

      {/* 3-Column Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-3 justify-items-center">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`shadow-xl backdrop-blur ${card.color.ring} w-full max-w-sm rounded-lg p-6`}
          >
            {/* Icon badge */}
            <div
              className={`mb-4 inline-flex items-center justify-center rounded-lg p-3 ${card.color.accentBg}`}
              aria-hidden
            >
              {card.icon}
            </div>

            <h3 className="text-lg font-semibold text-white">{card.title}</h3>

            <ul role="list" className="mt-4 space-y-3">
              {card.items.map((it) => (
                <li key={it.label} className="flex items-start gap-3">
                  <FiCheckCircle
                    aria-hidden
                    className={`mt-0.5 h-5 w-5 shrink-0 ${card.color.accentText}`}
                  />
                  <span className="text-gray-300 leading-relaxed">
                    {it.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
