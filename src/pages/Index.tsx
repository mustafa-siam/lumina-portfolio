"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Sparkles, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import { projects } from "@/lib/projects";
import { articles } from "@/lib/journal";
import heroImage from "@/assets/hero-1.jpg";
import founder from "@/assets/founder.png";
import { useState } from "react";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12", label: "Design Awards" },
  { value: "8", label: "Countries" },
  { value: "98%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    quote: "Lumina didn't just design our home — they understood how we wanted to feel in it. Every room tells a story, and every story is ours.",
    author: "Sarah & James Mitchell",
    role: "Sunset Villa, Malibu",
  },
  {
    quote: "Working with Lumina transformed our brand's physical presence. The space they created drives 40% more foot traffic and reframed how guests experience luxury.",
    author: "David Chen",
    role: "CEO, Luminary Hotels",
  },
  {
    quote: "Their ability to balance aesthetics with functionality is unmatched. It's architecture that actually works, that ages with grace, and that surprises every single day.",
    author: "Elena Vasquez",
    role: "Director, Urban Development Corp",
  },
  {
    quote: "From the first conversation to the last walkthrough, Lumina treated our project like the only one they had. The detail and devotion show in every corner.",
    author: "Rashid Al-Mansoori",
    role: "Skyline Penthouse, Dubai",
  },
];

const pressLogos = ["Architectural Digest", "Wallpaper*", "Dezeen", "Elle Decor", "AD100", "ArchDaily", "Domus", "Frame"];

const valueProps = [
  {
    icon: Sparkles,
    title: "Bespoke Design",
    desc: "Every line drawn for you alone. No templates, no formulas — only design that answers your specific brief.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    desc: "Recognized by AIA, Dezeen, AD100 and Wallpaper* — our work consistently sets new benchmarks for the industry.",
  },
  {
    icon: Users,
    title: "Client-First Process",
    desc: "Our principals are involved from the first meeting to the final walkthrough. You will never be handed off.",
  },
];

const Index = () => {
  const featuredProjects = projects.slice(0, 4);
const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <main>
      {/* HERO */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
  {/* Background */}
  <div className="absolute inset-0">
    <motion.img
      src={heroImage}
      alt="Modern architecture interior"
      className="w-full h-full object-cover"
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
    />
    <div className="absolute inset-0 bg-black/70" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
  </div>

  {/* Side Label - Vertically Centered & Fixed Positioning */}
  <div className="hidden lg:flex absolute left-8 h-full items-center justify-center pointer-events-none">
    <div className="rotate-180 [writing-mode:vertical-lr] text-white/40 text-[10px] tracking-[0.4em] uppercase font-light">
      Est. 2012 — New York · Dubai · Bali
    </div>
  </div>

  {/* Content */}
  <div className="relative px-6">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-5xl mx-auto"
    >
      <span className="block text-accent text-xs tracking-[0.4em] uppercase mt-12 mb-6">
        Architecture · Interior · Planning
      </span>

      {/* Bigger headline */}
      <h1 className="text-white font-light leading-[1.05] text-5xl md:text-7xl lg:text-8xl">
        We Design Spaces
      </h1>

      <h2 className="text-white/80 italic font-extralight text-4xl md:text-6xl mt-5">
        That Shape Lives
      </h2>

      {/* Divider */}
      <div className="w-20 h-[2px] bg-accent mx-auto my-10" />

      <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
        An award-winning studio crafting extraordinary residential,
        commercial, and hospitality spaces across four continents.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12 w-full sm:w-auto">
        <Link
          to="/projects"
          className="group w-full sm:w-auto px-9 py-4 bg-white text-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-accent transition"
        >
          View Work
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          to="/contact"
          className="w-full sm:w-auto px-9 py-4 border border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition text-center"
        >
          Start Project
        </Link>
      </div>
    </motion.div>
  </div>

  {/* Architectural Scroll Indicator (Bottom Right - FIXED MOBILE) */}
  <div className="absolute bottom-0 sm:bottom-10 right-1 sm:right-10 flex flex-col items-center gap-4">
    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-lr]">
      Scroll
    </span>

    <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
      <motion.div
        animate={{ y: [-64, 64] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 w-full h-full bg-accent"
      />
    </div>
  </div>
</section>
      {/* PRESS / SOCIAL PROOF MARQUEE */}
      <section className="border-y border-border py-8 overflow-hidden bg-secondary/40">
        <div className="container-wide mb-4">
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex marquee gap-16 whitespace-nowrap">
            {[...pressLogos, ...pressLogos].map((logo, i) => (
              <span key={i} className="font-heading text-2xl md:text-3xl font-light text-muted-foreground">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className={`py-10 md:py-14 text-center ${i > 0 ? "border-l border-border" : ""}`}>
                <div className="heading-lg text-foreground">{stat.value}</div>
                <div className="label-sm mt-2">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="section-padding-sm">
        <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-10">
          {valueProps.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className=" pt-6">
                <v.icon className="w-6 h-6 text-accent" />
                <h3 className="heading-sm mt-4 text-foreground">{v.title}</h3>
                <p className="body-md mt-2">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="label-sm text-accent">Selected Work</span>
                <h2 className="heading-lg mt-3 text-foreground">Featured Projects</h2>
              </div>
              <Link
                to="/projects"
                className="label-sm text-foreground hover:text-accent transition-colorsgap-2"
              >
                View All Projects <span className="inline-block transform -translate-y-0.5">→</span>
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

      {/* PHILOSOPHY */}
      <section className="section-padding bg-secondary">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              Learn More About Us <span className="inline-block transform -translate-y-0.5">→</span>
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <img
              src={founder}
              alt="Elena Cortez, Founder of Lumina Studio"
              loading="lazy"
              width={800}
              height={1000}
              className="img-cover aspect-[4/5] rounded-sm"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
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
                <div className="bg-background p-8 md:p-10 group hover:bg-secondary transition-colors duration-500 h-full">
                  <span className="label-sm text-accent">0{i + 1}</span>
                  <h3 className="heading-sm mt-4 text-foreground">{service.title}</h3>
                  <p className="body-md mt-3">{service.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center mt-6 text-sm text-muted-foreground hover:text-accent transition-colors gap-1"
                  >
                    Learn more <span className="inline-block transform -translate-y-0.5">→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS BAND */}
      <section className="section-padding-sm bg-foreground text-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <span className="label-sm text-accent">How We Work</span>
                <h2 className="heading-lg mt-3 text-background">A Process Built on Listening</h2>
              </div>
              <Link to="/services" className="label-sm text-background/70 hover:text-accent transition-colors">
                See Full Process <span className="inline-block transform -translate-y-0.5">→</span>
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {[
              { n: "01", t: "Discover" },
              { n: "02", t: "Concept" },
              { n: "03", t: "Design" },
              { n: "04", t: "Build" },
              { n: "05", t: "Reveal" },
            ].map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 0.1}>
                <div className=" pt-4">
                  <span className="label-sm text-accent">{p.n}</span>
                  <h3 className="heading-sm mt-2 text-background">{p.t}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — SLIDER */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-sm text-accent">Client Stories</span>
              <h2 className="heading-lg mt-3 text-foreground">Words That Matter</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <TestimonialSlider testimonials={testimonials} />
          </ScrollReveal>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="label-sm text-accent">Journal</span>
                <h2 className="heading-lg mt-3 text-foreground">Insights & Process</h2>
              </div>
              <Link to="/journal" className="label-sm text-foreground hover:text-accent transition-colors">
                Read All Articles <span className="inline-block transform -translate-y-0.5">→</span>
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <ScrollReveal key={a.id} delay={i * 0.1}>
                <Link to={`/journal/${a.id}`} className="group block">
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      width={1280}
                      height={853}
                      className="img-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="label-sm mt-4 text-accent">{a.category}</p>
                  <h3 className="heading-sm mt-2 text-foreground group-hover:text-accent transition-colors">
                    {a.title}
                  </h3>
                  <p className="body-md mt-2 line-clamp-2">{a.excerpt}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-3 gap-12">
          <ScrollReveal>
            <span className="label-sm text-accent">Frequently Asked</span>
            <h2 className="heading-lg mt-3 text-foreground">Answers Before You Ask</h2>
            <p className="body-md mt-4">
              Have something more specific? Our principals reply to every enquiry within 24 hours.
            </p>
          </ScrollReveal>
          <div className="lg:col-span-2 space-y-px bg-border">
            {[
              { q: "What is your typical project timeline?", a: "Most residential projects span 12–24 months from first conversation to handover. Commercial and hospitality projects can range from 18–40 months depending on complexity." },
              { q: "Do you take projects internationally?", a: "Yes. We have completed work across 8 countries from offices in New York, Dubai and Bali, and routinely fly principals on-site for milestones." },
              { q: "What is your minimum project size?", a: "We accept residential briefs from 2,000 sq ft and commercial briefs from 8,000 sq ft. For smaller scopes, our Consultation service is the right fit." },
              { q: "Do you handle construction as well?", a: "We do not contract construction directly, but we manage and supervise it end-to-end through our trusted partner network in every market we serve." },
              { q: "How is fee structured?", a: "Most projects use a percentage-of-construction-cost model (typically 10–18%) with a clearly scoped phased deliverable schedule. Lump-sum and hybrid models are also available." },
            ].map((f, i) => (
  <div key={i} className="bg-background p-6 cursor-pointer">
    <div
      onClick={() => setOpenIndex(openIndex === i ? null : i)}
      className="flex items-center justify-between font-heading text-lg text-foreground"
    >
      {f.q}
      <span
        className={`text-accent text-2xl transition-transform ${
          openIndex === i ? "rotate-45" : ""
        }`}
      >
        +
      </span>
    </div>

    {openIndex === i && (
      <p className="body-md mt-3">{f.a}</p>
    )}
  </div>
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
