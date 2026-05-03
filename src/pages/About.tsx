import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about.jpg";
import founder from "@/assets/founder.webp";

const team = [
  { name: "Elena Cortez", role: "Founder & Principal Architect", image: founder },
];

const values = [
  { title: "Intentionality", desc: "Every line we draw, every material we select, serves a purpose. Nothing is arbitrary." },
  { title: "Timelessness", desc: "We design beyond trends. Our spaces feel as relevant in 50 years as they do today." },
  { title: "Human-Centered", desc: "Architecture must serve the people who inhabit it. Comfort and emotion come before aesthetics." },
  { title: "Sustainability", desc: "Responsible design is non-negotiable. We minimize environmental impact without compromising beauty." },
];

const milestones = [
  { year: "2012", event: "Lumina Studio founded in New York City" },
  { year: "2015", event: "First international project — Lisbon boutique hotel" },
  { year: "2018", event: "AIA Award for Excellence in Residential Design" },
  { year: "2020", event: "Expanded to Dubai and Bali offices" },
  { year: "2023", event: "150th project milestone — Civic Center Tower" },
  { year: "2024", event: "Named Top 10 Architecture Studio globally by AD" },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">About Lumina</span>
            <h1 className="heading-xl mt-3 text-foreground max-w-4xl">
              We Believe Great Architecture Changes Everything
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Image */}
      <ScrollReveal>
        <div className="container-wide">
          <img src={aboutImage} alt="Lumina Studio team at work" loading="lazy" width={1200} height={800} className="img-cover w-full aspect-[16/9] rounded-sm" />
        </div>
      </ScrollReveal>

      {/* Story */}
      <section className="section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground">Our Story</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="body-lg">
              Founded in 2012 by Elena Cortez, Lumina Studio was born from a simple conviction: architecture should move people. Not just shelter them — inspire them, calm them, energize them.
            </p>
            <p className="body-md mt-4">
              What began as a one-woman practice in a Brooklyn loft has grown into a globally recognized studio with offices in New York, Dubai, and Bali. Our team of 35 architects, designers, and creative strategists shares a relentless commitment to craft and a deep respect for context — whether that's a beachfront villa in Malibu or a civic landmark in Chicago.
            </p>
            <p className="body-md mt-4">
              We don't believe in a signature style. We believe in a signature process — one that listens deeply, questions assumptions, and delivers spaces that exceed what our clients imagined possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">What Guides Us</span>
            <h2 className="heading-lg mt-3 text-foreground">Core Values</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mt-12">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-secondary p-10 md:p-12">
                  <span className="label-sm text-accent">0{i + 1}</span>
                  <h3 className="heading-sm mt-4 text-foreground">{v.title}</h3>
                  <p className="body-md mt-3">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">Our Journey</span>
            <h2 className="heading-lg mt-3 text-foreground">Milestones</h2>
          </ScrollReveal>
          <div className="mt-12 space-y-0">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.08}>
                <div className="flex gap-8 md:gap-16 py-6 border-b border-border items-baseline">
                  <span className="heading-md text-accent min-w-[80px]">{m.year}</span>
                  <p className="body-lg text-foreground">{m.event}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-secondary">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <img src={founder} alt="Elena Cortez" loading="lazy" width={800} height={1000} className="img-cover aspect-[3/4] rounded-sm" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <span className="label-sm text-accent">The Founder</span>
            <h2 className="heading-lg mt-3 text-foreground">Elena Cortez</h2>
            <p className="body-lg mt-6">
              "I've always believed that architecture is the most honest art form. You can't fake how a building makes you feel. That authenticity is what drives everything we do at Lumina."
            </p>
            <p className="body-md mt-4">
              Elena holds a Master's in Architecture from Columbia University and has been recognized with the AIA Young Architect Award, the Pritzker Emerging Voice distinction, and Architectural Digest's Top 100 designers list.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground">Want to Work With Us?</h2>
            <Link
              to="/contact"
              className="inline-flex items-center mt-8 px-10 py-4 bg-foreground text-background font-heading text-sm font-medium tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;
