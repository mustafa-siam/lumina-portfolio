import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import Lightbox from "@/components/Lightbox";
import { projects, getRelatedProjects } from "@/lib/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  if (!project) {
    return (
      <main className="pt-20 section-padding">
        <div className="container-wide text-center">
          <h1 className="heading-lg text-foreground">Project Not Found</h1>
          <Link to="/projects" className="label-sm text-accent mt-6 inline-block">
            <span className="inline-block transform -translate-y-0.5">←</span> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const related = getRelatedProjects(project.id, 3);

  const overviewFacts = [
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Category", value: project.category },
    { label: "Area", value: project.area },
    { label: "Client", value: project.client },
    { label: "Duration", value: project.duration },
    { label: "Status", value: project.status },
    { label: "Budget", value: project.budget },
    { label: "Team", value: project.team },
  ];

  return (
    <main className="pt-20">
      {/* HERO IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full aspect-[21/9] overflow-hidden relative"
      >
        <img src={project.image} alt={project.title} width={1920} height={823} className="img-cover h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-wide pb-10">
          <h1 className="heading-xl mt-2 text-foreground">{project.title}</h1>
          <p className="text-foreground/80 mt-2 ml-6">{project.location} — {project.year}</p>
          <span className="label-sm text-foreground/60 font-bold ml-6">{project.category}</span>
        </div>
      </motion.div>

      {/* OVERVIEW */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <Link to="/projects" className="label-sm text-muted-foreground hover:text-accent transition-colors">
            <span className="inline-block transform -translate-y-0.5">←</span> Back to All Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="label-sm text-accent">Overview</span>
                <p className="body-lg mt-4 text-foreground">{project.description}</p>
              </ScrollReveal>

              {/* Quick facts strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-10">
                {project.facts.map((f) => (
                  <div key={f.label} className="bg-background p-5">
                    <p className="label-sm">{f.label}</p>
                    <p className="font-heading text-2xl text-foreground mt-2">{f.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal delay={0.1}>
                <div className="bg-secondary p-8 rounded-sm">
                  <h3 className="label-sm mb-5">Project Details</h3>
                  {overviewFacts.map((d) => (
                    <div key={d.label} className="py-3 border-b border-border last:border-0 flex justify-between gap-4">
                      <span className="text-sm text-muted-foreground">{d.label}</span>
                      <span className="font-heading text-sm text-foreground text-right">{d.value}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE / SOLUTION / OUTCOME */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { num: "01", title: "The Challenge", body: project.challenge },
            { num: "02", title: "Our Solution", body: project.solution },
            { num: "03", title: "The Outcome", body: project.outcome },
          ].map((b, i) => (
            <ScrollReveal key={b.num} delay={i * 0.1}>
              <span className="label-sm text-accent">{b.num}</span>
              <h2 className="heading-sm mt-3 text-foreground">{b.title}</h2>
              <p className="body-md mt-3">{b.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="label-sm text-accent">Gallery</span>
                <h2 className="heading-lg mt-2 text-foreground">Inside the Project</h2>
              </div>
              <p className="label-sm hidden md:block">{project.images.length} Images</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`overflow-hidden rounded-sm group ${i === 0 ? "col-span-2 md:row-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt={`${project.title} — view ${i + 1}`}
                  loading="lazy"
                  className="img-cover aspect-square h-full transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">Video Walkthrough</span>
            <h2 className="heading-lg mt-2 text-foreground">Experience the Space</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-video mt-8 overflow-hidden rounded-sm bg-foreground">
              {videoPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                  title={`${project.title} walkthrough`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 group"
                  aria-label="Play video"
                >
                  <img
                    src={`https://i.ytimg.com/vi/${project.videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="img-cover h-full opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DRAWINGS */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">Technical Drawings</span>
            <h2 className="heading-lg mt-2 text-foreground">Plans & Sections</h2>
            <p className="body-md mt-3 max-w-2xl">
              Selected technical documentation showing the discipline behind the design.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {project.drawings.map((d, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-secondary p-4 md:p-6 rounded-sm">
                  <img
                    src={d.image}
                    alt={d.title}
                    loading="lazy"
                    className="img-cover w-full aspect-[4/3] bg-background"
                  />
                  <p className="label-sm mt-4">{d.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES & MATERIALS */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <span className="label-sm text-accent">Facilities & Features</span>
            <h2 className="heading-md mt-2 text-foreground">Everything Inside</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
              {project.facilities.map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground">
                  <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <span className="label-sm text-accent">Materials Palette</span>
            <h2 className="heading-md mt-2 text-foreground">Curated Throughout</h2>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.materials.map((m) => (
                <span
                  key={m}
                  className="px-4 py-2 border border-border bg-background text-sm font-heading text-foreground"
                >
                  {m}
                </span>
              ))}
            </div>

            <h3 className="label-sm text-accent mt-10">Awards & Recognition</h3>
            <ul className="mt-4 space-y-2">
              {project.awards.map((a) => (
                <li key={a} className="text-sm text-foreground border-l-2 border-accent pl-4 py-1">
                  {a}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* TIMELINE & DELIVERABLES */}
      <section className="section-padding-sm">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <span className="label-sm text-accent">Project Timeline</span>
            <h2 className="heading-md mt-2 text-foreground">From Brief to Build</h2>
            <div className="mt-6 space-y-6">
              {project.timeline.map((t, i) => (
                <div key={i} className="flex gap-5 border-l-2 border-border pl-5">
                  <div>
                    <p className="font-heading text-foreground">{t.title}</p>
                    <p className="body-md mt-1">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <span className="label-sm text-accent">Scope of Work</span>
            <h2 className="heading-md mt-2 text-foreground">Deliverables</h2>
            <ul className="mt-6 ">
              {project.deliverables.map((d, i) => (
                <li key={d} className="flex items-center gap-4 py-3">
                  <span className="font-heading text-accent text-sm w-8">0{i + 1}</span>
                  <span className="text-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* CLIENT TESTIMONIAL */}
      {project.testimonial && (
        <section className="section-padding-sm bg-foreground text-background">
          <div className="container-wide max-w-4xl text-center">
            <ScrollReveal>
              <p className="heading-md font-light italic">"{project.testimonial.quote}"</p>
              <p className="label-sm text-accent mt-6">— {project.testimonial.author}</p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* RELATED PROJECTS */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="label-sm text-accent">More Work</span>
                <h2 className="heading-lg mt-2 text-foreground">Related Projects</h2>
              </div>
              <Link to="/projects" className="label-sm hover:text-accent transition-colors">
                View All <span className="inline-block transform -translate-y-0.5">→</span>
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide text-center">
          <ScrollReveal>
            <span className="label-sm text-accent">Like What You See?</span>
            <h2 className="heading-lg mt-3 text-foreground">Let's Build Your Vision</h2>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 mt-8 px-10 py-4 bg-foreground text-background font-heading text-sm font-medium tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) => (i === null ? null : (i - 1 + project.images.length) % project.images.length))
          }
          onNext={() =>
            setLightboxIndex((i) => (i === null ? null : (i + 1) % project.images.length))
          }
        />
      )}
    </main>
  );
};

export default ProjectDetail;
