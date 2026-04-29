import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { articles, getRelatedArticles } from "@/lib/journal";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <main className="pt-20 section-padding">
        <div className="container-wide text-center">
          <h1 className="heading-lg text-foreground">Article Not Found</h1>
          <Link to="/journal" className="label-sm text-accent mt-6 inline-block">
            ← Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  const related = getRelatedArticles(article.id, 2);

  return (
    <main className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full aspect-[21/9] overflow-hidden relative"
      >
        <img src={article.image} alt={article.title} className="img-cover h-full" width={1920} height={823} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-wide pb-12">
          <span className="label-sm text-accent">{article.category}</span>
          <h1 className="heading-xl mt-3 text-foreground max-w-4xl">{article.title}</h1>
        </div>
      </motion.div>

      <section className="section-padding-sm">
        <div className="container-wide max-w-3xl">
          <Link to="/journal" className="label-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>

          <div className="flex flex-wrap gap-6 mt-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2 label-sm">
              <User className="w-3.5 h-3.5 text-accent" /> {article.author}
            </div>
            <div className="flex items-center gap-2 label-sm">
              <Calendar className="w-3.5 h-3.5 text-accent" /> {article.date}
            </div>
            <div className="flex items-center gap-2 label-sm">
              <Clock className="w-3.5 h-3.5 text-accent" /> {article.readTime} read
            </div>
          </div>

          <article className="mt-10 space-y-8">
            {article.sections.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                {s.heading && <h2 className="heading-md text-foreground mt-4">{s.heading}</h2>}
                <p className="body-lg mt-3 text-foreground/90 leading-relaxed">{s.body}</p>
              </ScrollReveal>
            ))}
          </article>

          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <span key={t} className="px-3 py-1.5 border border-border text-xs font-heading text-foreground uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-12 p-8 bg-secondary rounded-sm flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center font-heading text-accent-foreground text-xl">
              {article.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <p className="font-heading text-foreground">{article.author}</p>
              <p className="text-sm text-muted-foreground">{article.authorRole}</p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding-sm bg-secondary">
          <div className="container-wide">
            <ScrollReveal>
              <span className="label-sm text-accent">Keep Reading</span>
              <h2 className="heading-lg mt-2 text-foreground">More from the Journal</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {related.map((a, i) => (
                <ScrollReveal key={a.id} delay={i * 0.1}>
                  <Link to={`/journal/${a.id}`} className="group block">
                    <div className="overflow-hidden rounded-sm">
                      <img src={a.image} alt={a.title} loading="lazy" className="img-cover aspect-[16/10] transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <span className="label-sm text-accent mt-5 inline-block">{a.category}</span>
                    <h3 className="heading-sm mt-2 text-foreground group-hover:text-accent transition-colors">{a.title}</h3>
                    <p className="body-md mt-2 line-clamp-2">{a.excerpt}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ArticleDetail;
