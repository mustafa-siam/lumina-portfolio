import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import heroImage from "@/assets/hero-1.jpg";
import founderImage from "@/assets/founder.jpg";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12", label: "Design Awards" },
  { value: "8", label: "Countries" },
  { value: "98%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    quote: "AURA didn't just design our home — they understood how we wanted to feel in it. Every room tells a story.",
    author: "Sarah & James Mitchell",
    role: "Sunset Villa, Malibu",
  },
  {
    quote: "Working with AURA transformed our brand's physical presence. The space they created drives 40% more foot traffic.",
    author: "David Chen",
    role: "CEO, Luminary Hotels",
  },
  {
    quote: "Their ability to balance aesthetics with functionality is unmatched. It's architecture that actually works.",
    author: "Elena Vasquez",
    role: "Director, Urban Development Corp",
  },
];

const Index = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Modern architecture interior" width={1920} height={1080} className="img-cover h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative container-wide pb-20 md:pb-32 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="label-sm text-accent">Architecture & Interior Design</span>
            <h1 className="heading-xl mt-4 max-w-4xl text-foreground">
              We Design Spaces<br />
              That Shape Lives
            </h1>
            <p className="body-lg mt-6 max-w-xl">
              Award-winning studio crafting extraordinary residential, commercial, and hospitality spaces across the globe.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-foreground text-background font-heading text-sm font-medium tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                View Our Work
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-foreground text-foreground font-heading text-sm font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className={`py-12 md:py-16 text-center ${i > 0 ? "border-l border-border" : ""}`}>
                <div className="heading-lg text-foreground">{stat.value}</div>
                <div className="label-sm mt-2">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <span className="label-sm text-accent">Selected Work</span>
                <h2 className="heading-lg mt-3 text-foreground">Featured Projects</h2>
              </div>
              <Link
                to="/projects"
                className="label-sm text-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                View All Projects →
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="label-sm text-accent">Our Philosophy</span>
            <h2 className="heading-lg mt-3 text-foreground">Design Is the Silent Ambassador of Your Brand</h2>
            <p className="body-lg mt-6">
              We believe architecture is not just about creating structures — it's about crafting experiences. Every material, every angle of light, every spatial relationship is an intentional choice that shapes how people feel.
            </p>
            <p className="body-md mt-4">
              Our approach merges timeless design principles with cutting-edge technology, delivering spaces that are not only visually stunning but functionally superior. From concept to completion, we obsess over the details that others overlook.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 label-sm text-foreground hover:text-accent transition-colors gap-2"
            >
              Learn More About Us →
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <img
              src={founderImage}
              alt="Elena Cortez, Founder of AURA Studio"
              loading="lazy"
              width={800}
              height={1000}
              className="img-cover aspect-[4/5] rounded-sm"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="label-sm text-accent">What We Do</span>
              <h2 className="heading-lg mt-3 text-foreground">Our Services</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { title: "Architecture", desc: "From concept to completion, we design buildings that define skylines and elevate communities." },
              { title: "Interior Design", desc: "We create interiors that are as functional as they are beautiful — spaces that tell your story." },
              { title: "Space Planning", desc: "Strategic spatial design that maximizes flow, function, and the human experience within any environment." },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.15}>
                <div className="bg-background p-10 md:p-12 group hover:bg-secondary transition-colors duration-500">
                  <span className="label-sm text-accent">0{i + 1}</span>
                  <h3 className="heading-sm mt-4 text-foreground">{service.title}</h3>
                  <p className="body-md mt-3">{service.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors gap-1"
                  >
                    Learn more →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="label-sm text-accent">Client Stories</span>
              <h2 className="heading-lg mt-3 text-foreground">Words That Matter</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-background p-8 md:p-10 rounded-sm h-full flex flex-col">
                  <p className="body-lg text-foreground flex-1 italic">"{t.quote}"</p>
                  <div className="mt-8">
                    <p className="font-heading font-medium text-foreground">{t.author}</p>
                    <p className="text-sm text-muted-foreground mt-1">{t.role}</p>
                  </div>
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
            <span className="label-sm text-accent">Ready to Begin?</span>
            <h2 className="heading-lg mt-3 text-foreground max-w-3xl mx-auto">
              Let's Create Something Extraordinary Together
            </h2>
            <p className="body-lg mt-6 max-w-xl mx-auto">
              Every great space starts with a conversation. Tell us about your vision, and we'll show you what's possible.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center mt-10 px-10 py-4 bg-foreground text-background font-heading text-sm font-medium tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
