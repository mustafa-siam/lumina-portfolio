import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { services, getServiceById } from "@/lib/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = getServiceById(id || "");

  if (!service) {
    return (
      <main className="pt-20 section-padding">
        <div className="container-wide text-center">
          <h1 className="heading-lg text-foreground">Service Not Found</h1>
          <Link to="/services" className="label-sm text-accent mt-6 inline-block">
            ← Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-wide">
          <Link to="/services" className="label-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10"
          >
            <div className="lg:col-span-8">
              <span className="label-sm text-accent">Service {service.num}</span>
              <h1 className="heading-xl mt-3 text-foreground">{service.title}</h1>
              <p className="body-lg mt-4 text-foreground/80">{service.tagline}</p>
              <p className="body-md mt-6 max-w-2xl">{service.desc}</p>
            </div>
            <div className="lg:col-span-4 bg-secondary p-8 rounded-sm">
              <div className="py-3 border-b border-border flex justify-between">
                <span className="label-sm">Starting At</span>
                <span className="font-heading text-foreground">{service.startingPrice}</span>
              </div>
              <div className="py-3 border-b border-border flex justify-between">
                <span className="label-sm">Timeline</span>
                <span className="font-heading text-foreground">{service.timeline}</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="label-sm">Engagement</span>
                <span className="font-heading text-foreground">Bespoke</span>
              </div>
              <Link
                to="/contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-heading text-sm font-medium tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                Request Proposal <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">What's Included</span>
            <h2 className="heading-lg mt-2 text-foreground">Scope of Work</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-10">
            {service.details.map((d, i) => (
              <ScrollReveal key={d} delay={i * 0.05}>
                <div className="bg-secondary p-8 flex items-start gap-4 h-full">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="font-heading text-foreground">{d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">Our Approach</span>
            <h2 className="heading-lg mt-2 text-foreground">Process</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
            {service.process.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <span className="heading-lg text-accent">0{i + 1}</span>
                <h3 className="heading-sm mt-3 text-foreground">{p.title}</h3>
                <p className="body-md mt-2">{p.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">Deliverables</span>
            <h2 className="heading-lg mt-2 text-foreground">What You Receive</h2>
          </ScrollReveal>
          <ul className="mt-8 divide-y divide-border max-w-3xl">
            {service.deliverables.map((d, i) => (
              <li key={d} className="flex items-center gap-5 py-4">
                <span className="font-heading text-accent text-sm w-8">0{i + 1}</span>
                <span className="text-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding-sm">
        <div className="container-wide max-w-3xl">
          <ScrollReveal>
            <span className="label-sm text-accent">Common Questions</span>
            <h2 className="heading-lg mt-2 text-foreground">FAQ</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="mt-8">
            {service.faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-heading text-foreground">{f.q}</AccordionTrigger>
                <AccordionContent className="body-md">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Other services */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">Explore More</span>
            <h2 className="heading-lg mt-2 text-foreground">Other Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {otherServices.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 0.1}>
                <Link to={`/services/${s.id}`} className="group block bg-background p-8 h-full hover:bg-foreground hover:text-background transition-colors duration-300">
                  <span className="label-sm text-accent">{s.num}</span>
                  <h3 className="heading-sm mt-3 group-hover:text-background">{s.title}</h3>
                  <p className="body-md mt-2 group-hover:text-background/70">{s.tagline}</p>
                  <span className="inline-flex items-center gap-2 mt-6 label-sm group-hover:text-accent">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-foreground">Ready to Begin?</h2>
            <p className="body-lg mt-3 max-w-xl mx-auto">Tell us about your project and we'll prepare a tailored proposal within 5 business days.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-10 py-4 bg-foreground text-background font-heading text-sm font-medium tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
