import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

const COUNTRIES = [
  { name: "Austria", code: "AT" },
  { name: "Rwanda", code: "RW" },
  { name: "Nigeria", code: "NG" },
  { name: "Kenya", code: "KE" },
  { name: "France", code: "FR" },
  { name: "Israel", code: "IL" },
  { name: "Mexico", code: "MX" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "South Africa", code: "ZA" },
  { name: "South Korea", code: "KR" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "Brazil", code: "BR" },
];

export default function GovPolicyAdvisory() {
  return (
    <section className="mx-auto mt-14 max-w-6xl px-4">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium bg-primary-900 text-primary-300 ring-1 ring-white/20">
          <FaGlobeAmericas className="h-4 w-4" aria-hidden />
          Government &amp; Global Policy Advisory
        </span>

        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
          Trusted advisor to ministries of health & national innovation teams
        </h2>

        <p className="mt-3 text-gray-300 leading-relaxed">
          Dr. Fombu helps governments shape national strategies for healthcare innovation,
          digital health transformation, and healthspan-driven policy—translating frontier
          technologies into systems-level infrastructure.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-center text-sm uppercase tracking-wide text-gray-400">
          Policy &amp; investment guidance provided to:
        </p>

        <ul
          role="list"
          className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:justify-items-start"
        >
          {COUNTRIES.map(({ name, code }) => (
            <li key={name} className="w-full max-w-xl">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 p-4">
                <ReactCountryFlag
                  countryCode={code}
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    borderRadius: "3px",
                  }}
                  aria-label={name}
                />
                <span className="text-gray-200">{name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
