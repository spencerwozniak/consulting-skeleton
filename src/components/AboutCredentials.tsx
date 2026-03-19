// components/AboutCredentials.tsx
import React from "react";
import {
  FaUserMd,
  FaUniversity,
  FaRobot,
  FaMicroscope,
  FaNewspaper,
  FaGlobeAmericas,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";

export default function AboutCredentials() {
  return (
    <section className="mx-auto mt-14 max-w-7xl px-4">
      {/* Header / Intro */}
      <div className="grid gap-10 items-center md:grid-cols-2">
        {/* Text block — first on mobile, right on lg+ */}
        <div className="order-1 text-center md:order-2 md:text-left">
            <p className="inline-block ring-1 ring-white rounded-full px-4 py-1 mb-2 text-sm font-medium bg-primary-900 text-primary-300">
            Credentials &amp; Affiliations
            </p>

            <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-white">
            Proven clinical, academic, and strategic leadership
            </h2>
            <p className="mt-3 text-gray-300 leading-relaxed">
            Dr. Emmanuel Fombu is a{" "}
            <span className="font-semibold text-white">physician</span>{" "}
            with U.S. clinical training at Emory Crawford Long Hospital and the{" "}
            <span className="font-semibold text-white">National Institutes of Health (NIH)</span>.
            He holds an <span className="font-semibold text-white">MBA</span> from the
            Cornell Johnson School and Queen’s University Smith School, and a
            certificate in <span className="font-semibold text-white">Artificial Intelligence in Healthcare</span> from
            MIT Sloan & CSAIL. He serves on the{" "}
            <span className="font-semibold text-white">MIT.nano External Advisory Board</span>, is published in
            peer-reviewed journals and global policy outlets, and operates from
            New York and California while advising biotech, pharma, and longevity
            innovators worldwide.
            </p>

            {/* Quick links */}
            <div className="mt-5 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
                href="/writing#publications"
                className="inline-flex items-center rounded-full px-6 py-2 font-semibold transition bg-neutral-300 text-black hover:bg-neutral-400"
            >
                View publications
            </a>
            <a
                href="/services"
                className="inline-flex items-center rounded-full px-6 py-2 font-semibold transition bg-brand-blue text-black hover:brightness-90"
            >
                Advisory services
            </a>
            </div>
        </div>

        {/* Icons grid — second on mobile, left on lg+ */}
        <div className="order-2 grid gap-6 grid-cols-2 md:order-1">
            <CredItem
            icon={<FaUserMd className="h-6 w-6" />}
            title="MD — U.S. Residency"
            blurb="Emory Crawford Long Hospital & NIH"
            color="emerald"
            />
            <CredItem
            icon={<FaUniversity className="h-6 w-6" />}
            title="MBA — Cornell & Queen’s"
            blurb="Johnson School & Smith School"
            color="sky"
            />
            <CredItem
            icon={<FaRobot className="h-6 w-6" />}
            title="MIT Certification"
            blurb="AI in Healthcare"
            color="fuchsia"
            />
            <CredItem
            icon={<FaMicroscope className="h-6 w-6" />}
            title="External Advisory Board"
            blurb="MIT.nano"
            color="amber"
            />
            <CredItem
            icon={<FaNewspaper className="h-6 w-6" />}
            title="Published Author"
            blurb="Peer-reviewed & policy outlets"
            color="indigo"
            />
            <CredItem
            icon={<FaGlobeAmericas className="h-6 w-6" />}
            title="Global Footprint"
            blurb="Based in NY & CA — advising worldwide"
            color="rose"
            />
        </div>
        </div>


      {/* Strategic Investment & Innovation Roles */}
<div className="mt-12">
  <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2 items-center">
    {/* Left text column */}
    <div className="lg:col-span-1 text-center md:text-left lg:mb-10">
      <p className="inline-block ring-1 ring-white rounded-full px-4 py-1 mb-2 text-sm font-medium bg-primary-900 text-primary-300">
        Strategic Investment &amp; Innovation
      </p>
      <h3 className="mt-1 text-xl md:text-2xl font-semibold text-white">
        Bridging science, capital, and execution
      </h3>
      <p className="mt-3 text-gray-300 leading-relaxed">
        In addition to medical leadership, Dr. Fombu works at the intersection of
        clinical development and capital markets—supporting founders, VCs, and PE
        firms on go-to-market, clinical strategy, regulatory navigation, and M&amp;A.
      </p>
      <p className="mt-3 text-gray-300 leading-relaxed">
        He has held various senior roles in{" "}
        <span className="font-semibold text-white">clinical development</span>,{" "}
        <span className="font-semibold text-white">medical affairs</span>, and{" "}
        <span className="font-semibold text-white">digital health</span>, leading
        global strategy, clinical trial design, and cross-functional execution
        across biotech and pharmaceutical organizations.
      </p>
    </div>

    {/* RIGHT: Role list — centered in its grid area */}
    <ul className="lg:col-span-1 place-self-center w-full max-w-2xl grid grid-cols-1 gap-4">
      <RoleItem
        icon={<FaBriefcase className="h-5 w-5" />}
        color="emerald"
        title={
          <>
            <span className="font-semibold text-white">Vice President, Life Sciences</span>{" "}
            — Locust Walk Partners
          </>
        }
        blurb="Investment banking & advisory across biotech and pharma."
      />
      <RoleItem
        icon={<FaChartLine className="h-5 w-5" />}
        color="sky"
        title={
          <>
            <span className="font-semibold text-white">Venture Partner</span> — FundRx &amp; DrxCapital
          </>
        }
        blurb="Novartis-affiliated venture platform; early company formation and diligence."
      />
      <RoleItem
        icon={<FaBriefcase className="h-5 w-5" />}
        color="amber"
        title={
          <>
            <span className="font-semibold text-white">Advisor</span> — Johnson &amp; Johnson Innovation (JLABS)
          </>
        }
        blurb="Supporting startups across the JLABS ecosystem."
      />
      <RoleItem
        icon={<FaBriefcase className="h-5 w-5" />}
        color="fuchsia"
        title={
          <>
            <span className="font-semibold text-white">Advisor</span> — Madison Dearborn Partners
          </>
        }
        blurb="Private equity healthcare vertical; growth strategy and diligence."
      />
    </ul>
  </div>
</div>


    </section>
  );
}

/* ---------- Small presentational subcomponents ---------- */

function CredItem({
  icon,
  title,
  blurb,
  color = "emerald",
}: {
  icon: React.ReactNode;
  title: string;
  blurb: string;
  color?:
    | "emerald"
    | "sky"
    | "fuchsia"
    | "amber"
    | "indigo"
    | "rose";
}) {
  const styles: Record<string, { ring: string; badge: string; text: string }> = {
    emerald: {
      ring: "ring-brand-gold/20",
      badge: "bg-brand-gold/10",
      text: "text-amber-100",
    },
    sky: {
      ring: "ring-brand-gold/20",
      badge: "bg-brand-gold/10",
      text: "text-amber-100",
    },
    fuchsia: {
      ring: "ring-brand-gold/20",
      badge: "bg-brand-gold/10",
      text: "text-amber-100",
    },
    amber: {
      ring: "ring-brand-gold/20",
      badge: "bg-brand-gold/10",
      text: "text-amber-100",
    },
    indigo: {
      ring: "ring-brand-gold/20",
      badge: "bg-brand-gold/10",
      text: "text-amber-100",
    },
    rose: {
      ring: "ring-brand-gold/20",
      badge: "bg-brand-gold/10",
      text: "text-amber-100",
    },
  };

  const c = styles[color];

  return (
    <div className='p-4 items-center justify-center text-center'>
      <div className={`mb-4 inline-flex items-center justify-center rounded-xl p-3 ${c.badge}`}>
        <div className={c.text} aria-hidden>
          {icon}
        </div>
      </div>
      <h4 className="text-base font-semibold text-white">{title}</h4>
      <p className="mt-1 text-sm text-gray-300">{blurb}</p>
    </div>
  );
}

function RoleItem({
  icon,
  title,
  blurb,
  color = "emerald",
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  blurb: string;
  color?: "emerald" | "sky" | "amber" | "fuchsia";
}) {
  const styles: Record<string, { dot: string }> = {
    emerald: { dot: "text-amber-100" },
    sky: { dot: "text-amber-100" },
    amber: { dot: "text-amber-100" },
    fuchsia: { dot: "text-amber-100" },
  };

  return (
    <li className="w-full p-5">
      <div className="flex items-start gap-3">
        <span className={`${styles[color].dot}`} aria-hidden>
          {icon}
        </span>
        <div>
          <p className="text-sm md:text-base text-gray-200">{title}</p>
          <p className="mt-1 text-sm text-gray-400">{blurb}</p>
        </div>
      </div>
    </li>
  );
}
