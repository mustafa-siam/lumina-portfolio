import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/lib/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="pt-20 section-padding">
        <div className="container-wide text-center">
          <h1 className="heading-lg text-foreground">Project Not Found</h1>
          <Link to="/projects" className="label-sm text-accent mt-6 inline-block">← Back to Projects</Link>
        </div>
      </main>
    );
  }

  const details = [
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Category", value: project.category },
    { label: "Area", value: project.area },
  ];

  return (
    <main className="pt-20">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full aspect-[21/9] overflow-hidden"
      >
        <img src={project.image} alt={project.title} width={1920} height={823} className="img-cover h-full" />
      </motion.div>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <Link to="/projects" className="label-sm text-muted-foreground hover:text-foreground transition-colors">← Back to Projects</Link>
                <h1 className="heading-xl mt-6 text-foreground">{project.title}</h1>
                <p className="body-lg mt-6">{project.description}</p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-16">
                  <h2 className="heading-sm text-foreground">The Challenge</h2>
                  <p className="body-md mt-3">{project.challenge}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-12">
                  <h2 className="heading-sm text-foreground">Our Solution</h2>
                  <p className="body-md mt-3">{project.solution}</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal delay={0.2}>
                <div className="bg-secondary p-8 rounded-sm">
                  <h3 className="label-sm mb-6">Project Details</h3>
                  {details.map((d) => (
                    <div key={d.label} className="py-4 border-b border-border last:border-0">
                      <span className="text-sm text-muted-foreground">{d.label}</span>
                      <p className="font-heading font-medium text-foreground mt-1">{d.value}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <ScrollReveal>
            <span className="label-sm text-accent">Like What You See?</span>
            <h2 className="heading-lg mt-3 text-foreground">Let's Build Your Vision</h2>
            <Link
              to="/contact"
              className="inline-flex items-center mt-8 px-10 py-4 bg-foreground text-background font-heading text-sm font-medium tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Start a Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
