import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects, categories } from "@/lib/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">Our Portfolio</span>
            <h1 className="heading-xl mt-3 text-foreground">Projects</h1>
            <p className="body-lg mt-4 max-w-2xl">
              A curated selection of our work across residential, commercial, and hospitality design — each project a testament to our commitment to extraordinary spaces.
            </p>
          </ScrollReveal>

          {/* Filter */}
          <div className="flex flex-wrap gap-3 mt-12 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`label-sm px-5 py-2.5 border transition-colors duration-300 ${
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-accent hover:border-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
