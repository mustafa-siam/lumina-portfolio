import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  { title: "Acceptance of Terms", body: "By accessing this website you agree to be bound by these terms. If you do not agree, please discontinue use." },
  { title: "Intellectual Property", body: "All content, designs, photographs, and drawings on this site are the property of Lumina Studio and protected by copyright and trademark law." },
  { title: "Use of Site", body: "You may browse this site for personal, non-commercial purposes. Reproduction, distribution, or use of any imagery requires written permission." },
  { title: "Project Engagements", body: "Any professional engagement with Lumina Studio is governed by a separate written agreement, not by these website terms." },
  { title: "Disclaimer", body: "Content is provided 'as is' for informational purposes. While we strive for accuracy, we make no warranties about completeness or fitness for a particular purpose." },
  { title: "Governing Law", body: "These terms are governed by the laws of the State of New York. Any disputes will be resolved in the courts of New York County." },
];

const Terms = () => (
  <main className="pt-20">
    <section className="section-padding">
      <div className="container-wide max-w-3xl">
        <ScrollReveal>
          <span className="label-sm text-accent">Legal</span>
          <h1 className="heading-xl mt-3 text-foreground">Terms of Service</h1>
          <p className="body-md mt-4">Last updated: April 2026</p>
        </ScrollReveal>
        <div className="mt-12 space-y-10">
          {sections.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.05}>
              <h2 className="heading-sm text-foreground">{s.title}</h2>
              <p className="body-md mt-3">{s.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Terms;
