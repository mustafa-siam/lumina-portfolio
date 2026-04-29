import ScrollReveal from "@/components/ScrollReveal";
import { articles } from "@/lib/journal";
import { Link } from "react-router-dom";

const Journal = () => {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <span className="label-sm text-accent">Journal</span>
            <h1 className="heading-xl mt-3 text-foreground max-w-3xl">Insights, Process & Perspective</h1>
            <p className="body-lg mt-4 max-w-2xl">
              Reflections from our studio on the craft of architecture, the discipline of design, and the future of the built environment.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16">
            {articles.map((a, i) => (
              <ScrollReveal key={a.id} delay={i * 0.1}>
                <Link to="#" className="group block">
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
                  <div className="mt-5 flex items-center gap-3 label-sm">
                    <span className="text-accent">{a.category}</span>
                    <span>·</span>
                    <span>{a.readTime}</span>
                  </div>
                  <h2 className="heading-sm mt-3 text-foreground group-hover:text-accent transition-colors">
                    {a.title}
                  </h2>
                  <p className="body-md mt-2 line-clamp-3">{a.excerpt}</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    {a.author} — {a.date}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Journal;
