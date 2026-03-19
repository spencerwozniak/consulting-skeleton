import AboutHero from "@/components/AboutHero";
import Blockquote from "@/components/Blockquote";
import AboutCredentials from "@/components/AboutCredentials";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import LeadershipBrands from "@/components/LeadershipBrands";
import GovPolicyAdvisory from "@/components/GovPolicyAdvisory";

import ServicesCTA from "@/components/ServicesCTA";

export default function AboutPage() {
    return(
    <main className="">
        <AboutHero backgroundImage='/butterfly-hero.png' alt="Dr. Fombu background"/>

        <section className='pb-12 pt-24'>
          <Blockquote
            quote="Real healthcare happens outside the hospital — and the future belongs to those bold enough to build it."
            name="Dr. Emmanuel Fombu"
            title="The Healthspan Futurist™"
            imgUrl='/headshot-black-zoomed.png'
          />
        </section>

        <section>
          <AboutCredentials />
        </section>

        <section className="pt-20">
          <AreasOfExpertise />
        </section>

        <section>
          <LeadershipBrands />
        </section>

        <section>
          <GovPolicyAdvisory />
        </section>

        <section className="py-20">
          <ServicesCTA
            title="This Is the Era of Healthspan. Let’s Lead It — Together."
            subheading="Whether you're scaling a healthtech venture, launching a biotech product, booking a keynote speaker, rethinking your career, or building a global longevity initiative — Dr. Fombu brings the vision, experience, and execution to help you lead."
            contactCta="Get in Touch"
          />
        </section>


    </main>
    );
}