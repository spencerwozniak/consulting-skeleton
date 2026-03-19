import CalendlyInline from "@/components/Calendly";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="pt-20">
        <ContactForm />
      </section>

      <section id="calendly" className="w-full flex">
        <CalendlyInline />
      </section>
    </>
  );
}
