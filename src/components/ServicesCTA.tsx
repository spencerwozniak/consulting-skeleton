import { FaChevronRight } from "react-icons/fa";

interface ServicesCTAProps {
  title?: string;
  subheading?: string;
  contactCta?: string;
  firstCtaText?: string;
  firstCtaHref?: string;
  contactCtaHref?: string;
  showFirstCta?: boolean; // NEW PROP
}

export default function ServicesCTA({
  title = "Ready to Build What’s Next?",
  subheading = "Whether you’re scaling a breakthrough or making one — we’re here to guide the way.",
  firstCtaText = "Join The Healthspan Brief™ Newsletter",
  firstCtaHref = "/newsletter",
  contactCta = "Book a Discovery Call",
  contactCtaHref = "/contact",
  showFirstCta = true, // DEFAULT TO TRUE
}: ServicesCTAProps) {
  return (
    <section className="px-4 text-center max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-lg mb-6">{subheading}</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        {showFirstCta && (
          <a
            href={firstCtaHref}
            className="w-fit self-center inline-flex items-center rounded-full px-6 py-2 font-semibold transition bg-neutral-300 text-black hover:bg-neutral-400"
          >
            {firstCtaText}
            <FaChevronRight className="text-xs ml-2" />
          </a>
        )}
        <a
          href={contactCtaHref}
          className="w-fit self-center inline-flex items-center rounded-full px-6 py-2 font-semibold transition bg-brand-blue text-black hover:bg-brand-blue/80"
        >
          {contactCta}
          <FaChevronRight className="text-xs ml-2" />
        </a>
      </div>
    </section>
  );
}
