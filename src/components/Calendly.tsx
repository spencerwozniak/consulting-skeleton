"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
      }) => void;
    };
  }
}

export default function CalendlyInline() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.Calendly?.initInlineWidget({
        url: "https://calendly.com/manny-drfombu/meeting?primary_color=ded4c1&text_color=ffffff&background_color=0a0a0a",
        parentElement: document.querySelector("#calendly-embed")!,
      });
    };

    return () => document.body.removeChild(script);
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-12">
      {/* Centered Top Text */}
      <div className="max-w-2xl w-full mb-8 sm:mb-0 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Book a Strategy Session or Coaching Call
        </h2>
        <p className="text-neutral-300 text-base">
          Reserve a session through his live calendar:
        </p>
      </div>
      {/* Calendly Embed */}
      <div
        id="calendly-embed"
        style={{
          minHeight: "1000px",
          width: "100%",
        }}
      />
    </section>
  );
}
