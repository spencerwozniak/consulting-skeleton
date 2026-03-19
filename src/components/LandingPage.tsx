'use client'

import dynamic from 'next/dynamic';

const HomeHero = dynamic(() => import('@/components/HomeHero'), {
  ssr: false,
  loading: () => <div className="h-[300px]" /> // optional: placeholder
});

import Blockquote from './Blockquote';
import CTASection from './CTASection';
import Affiliations from './Affiliations';
import AudienceTestimonials from './AudienceTestimonials';
import ServicesCTA from './ServicesCTA';

export default function LandingPage() {
  return (
    <>
    <section className='mt-20'>
      <HomeHero />
    </section>
    <section className='py-12 sm:py-24'>
      <Blockquote
        quote="Adding life to years,
        not just years to life."
        name="Dr. Emmanuel Fombu"
        title="The Healthspan Futurist™"
        imgUrl='/headshot-black-zoomed.png'
      />

    </section>
    <section className=''>
      <CTASection
        heading="The Healthspan Revolution Starts Here…"
        content=
        {`
          <p>
          With <strong>over two decades of leadership</strong> across clinical medicine, drug development, venture capital, investment banking, strategic advisory, medical affairs, AI in medicine, and biotech innovation, Dr. Fombu operates at the powerful intersection of science, technology, and human potential.
          </p>
          <p>
          He is pioneering a <strong>new paradigm</strong> — where precision, prevention, and performance replace reactive, repair-based models of care.
          Through visionary leadership, cross-sector collaboration, and future-forward strategy, Dr. Fombu is building the systems, teams, and thought leadership that will define 21st-century medicine.
          </p>
          `}
        label="Learn More"
        link="/about"
        imgURL="/butterfly-network.png"
      />

    </section>
    <section className='pt-10 md:py-10'>
      <Affiliations />
    </section>

    <section className='md:my-10'>
      <CTASection
        heading="The Healthspan Futurist™ Concierge Program"
        subheading='Precision medicine for the world’s top performers.'
        content=
        {`
          <p>
          The <strong>Healthspan Futurist™ Concierge Program</strong> is where world-class medicine meets personal attention. With <strong>Dr. Emmanuel Fombu</strong> by your side, you’ll get access to elite diagnostics, cutting-edge longevity science, and a health strategy built entirely around you.
          </p>
          <p>
          From advanced genetic testing to continuous health insights, every detail is designed to keep you performing at your best for years to come. Space is limited — because this level of care can only be offered to a select few.
          </p>
          `}
        label="Discover the Program"
        link="/concierge"
        imgURL="/white-coat.png"
      />
    </section>

    <AudienceTestimonials
      title="What Global Leaders Are Saying"
      testimonials={[
        { quote: "Dr. Fombu is not just predicting the future of health, he’s building it.", source: "VC Partner, Longevity Fund" },
        { quote: "He bridges the worlds of biotech, clinical science, and bold innovation like no one else.", source: "CEO, Digital Health Startup" },
        { quote: "Dr. Fombu is thought-provoking, actionable, and electric. A true visionary.", source: "CIO, Fortune 500 Healthcare System" },
      ]}
    />

    <section className='md:my-10'>
      <CTASection
        heading="Strategic Advisory & Consulting for the Future of Healthcare"
        subheading='Helping Founders, Executives, and Clinicians Build What’s Next'
        content=
        {`
          <p>
          Led by physician, biotech executive, and futurist Dr. Emmanuel Fombu, <b>The Healthspan Futurist™</b> offers strategic advisory and consulting services for innovators at the forefront of medicine. We support leaders in biotech, digital health, genomics, diagnostics, medical devices, and longevity innovation. 
          </p>
          <p>
          Whether you’re building a biotech startup, pivoting your career in medicine, or shaping the future of health through AI and longevity science, <strong>we’re here to help you move with clarity, conviction, and scale</strong>.
          </p>
          `}
        label="Let’s Work Together"
        link="/services"
        imgURL="/headshot-transparent.png"
        imagePosition='right'
      />
    </section>

    <AudienceTestimonials 
      title="What Audiences Are Saying"
      testimonials={[
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
      ]}
    />

    <section className='mb-30 md:mt-10'>
      <CTASection
        heading="Keynotes & Global Speaking"
        content=
        {`
          <p>
          Looking for a visionary keynote speaker on healthcare innovation, AI in medicine, or longevity science? 
          </p>
          <p>
          Keynote speaker <strong>Dr. Emmanuel Fombu</strong> delivers bold ideas and real-world impact on global stages — inspiring audiences worldwide from ministries, Fortune 500s, and top universities with talks on healthcare innovation, longevity, and AI in medicine. 
          </p>
          `}
        label="Explore Speaking Topics"
        link="/speaking"
        imgURL="/scope-transparent.png"
      />
    </section>

    <section className='pb-20'>
    <ServicesCTA
      title="Join the Healthspan Revolution"
      subheading="Stay ahead of the curve in healthcare innovation, longevity, and biotech leadership. Get The Healthspan Brief™ newsletter or connect directly with Dr. Fombu to shape the future together."
      contactCta="Contact Dr. Fombu"
    />
    </section>
    </>
  );
}
