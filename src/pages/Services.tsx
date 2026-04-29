import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const process = [
  { step: "01", title: "Discovery", desc: "We listen. Deep conversations about your vision, needs, and the way you want to feel in your space." },
  { step: "02", title: "Concept", desc: "We explore. Multiple design directions are developed and refined until the right vision crystallizes." },
  { step: "03", title: "Design", desc: "We detail. Every material, dimension, and system is specified with precision and purpose." },
  { step: "04", title: "Build", desc: "We oversee. Our team manages construction to ensure the built reality matches the designed vision." },
  { step: "05", title: "Reveal", desc: "We deliver. The final walkthrough — that moment when the space is real and the vision comes alive." },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">Our Services</span>
            <h1 className="heading-xl mt-3 text-foreground max-w-4xl">
              Full-Spectrum Design, From Vision to Reality
            </h1>
            <p className="body-lg mt-6 max-w-2xl">
              Whether you're building from the ground up or reimagining an existing space, our integrated approach ensures seamless execution and extraordinary results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 md:pb-32">
        <div className="container-wide">
          {services.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 0.05}>
              <Link
                to={`/services/${s.id}`}
                className="group block border-t border-border py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 hover:bg-secondary/40 transition-colors px-2 -mx-2"
              >
                <div className="lg:col-span-1">
                  <span className="label-sm text-accent">{s.num}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="heading-md text-foreground group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="label-sm mt-2">{s.tagline}</p>
                </div>
                <div className="lg:col-span-4">
                  <p className="body-md">{s.desc}</p>
                </div>
                <div className="lg:col-span-3">
                  <ul className="space-y-2">
                    {s.details.slice(0, 4).map((d) => (
                      <li key={d} className="text-sm text-muted-foreground">— {d}</li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 label-sm text-accent mt-5">
                    Explore Service <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">How We Work</span>
            <h2 className="heading-lg mt-3 text-foreground">Our Process</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-16">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1}>
                <div>
                  <span className="heading-lg text-accent">{p.step}</span>
                  <h3 className="heading-sm mt-4 text-foreground">{p.title}</h3>
                  <p className="body-md mt-2">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground max-w-3xl mx-auto">
              Ready to Transform Your Space?
            </h2>
            <p className="body-lg mt-4 max-w-xl mx-auto">
              Tell us about your project and we'll show you what's possible.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center mt-8 px-10 py-4 bg-foreground text-background font-heading text-sm font-medium tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Start Your Project
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Services;
