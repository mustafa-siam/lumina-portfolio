import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link to={`/projects/${project.id}`} className="group block">
        <div className="overflow-hidden rounded-sm">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width={1200}
            height={1500}
            className="img-cover aspect-[4/5] transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="mt-5">
          <span className="label-sm">{project.category}</span>
          <h3 className="heading-sm mt-2 text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{project.location} — {project.year}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
