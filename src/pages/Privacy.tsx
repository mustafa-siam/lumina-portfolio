import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  { title: "Information We Collect", body: "We collect information you provide directly when contacting us, including your name, email, phone number, and project details. We also collect basic analytics about how you use our site." },
  { title: "How We Use Information", body: "Your information is used solely to respond to inquiries, prepare proposals, and improve the experience of our website. We never sell your data." },
  { title: "Cookies", body: "We use minimal first-party cookies to remember your preferences and measure aggregated traffic. You can disable cookies in your browser settings." },
  { title: "Data Sharing", body: "We do not share your personal information with third parties except as required by law or with trusted service providers (e.g. email delivery) bound by confidentiality." },
  { title: "Your Rights", body: "You may request access, correction, or deletion of your personal data at any time by emailing privacy@Lumina.studio." },
  { title: "Contact", body: "Questions about this policy? Reach us at privacy@Lumina.studio." },
];

const Privacy = () => (
  <main className="pt-20">
    <section className="section-padding">
      <div className="container-wide max-w-3xl">
        <ScrollReveal>
          <span className="label-sm text-accent">Legal</span>
          <h1 className="heading-xl mt-3 text-foreground">Privacy Policy</h1>
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

export default Privacy;
