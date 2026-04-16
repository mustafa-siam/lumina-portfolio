import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", type: "", budget: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left */}
            <ScrollReveal>
              <span className="label-sm text-accent">Get In Touch</span>
              <h1 className="heading-xl mt-3 text-foreground">Let's Talk</h1>
              <p className="body-lg mt-6">
                Every extraordinary space begins with a conversation. Whether you have a clear vision or just a feeling — we'd love to hear from you.
              </p>

              <div className="mt-16 space-y-8">
                <div>
                  <h3 className="label-sm mb-2">Email</h3>
                  <a href="mailto:hello@aura.studio" className="heading-sm text-foreground hover:text-accent transition-colors">
                    hello@aura.studio
                  </a>
                </div>
                <div>
                  <h3 className="label-sm mb-2">Phone</h3>
                  <a href="tel:+12125551234" className="heading-sm text-foreground hover:text-accent transition-colors">
                    +1 (212) 555-1234
                  </a>
                </div>
                <div>
                  <h3 className="label-sm mb-2">New York Office</h3>
                  <p className="body-md">245 West 29th Street, Suite 800<br />New York, NY 10001</p>
                </div>
                <div>
                  <h3 className="label-sm mb-2">Dubai Office</h3>
                  <p className="body-md">Tower 1, Level 42, DIFC<br />Dubai, UAE</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="label-sm mb-2 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-accent outline-none transition-colors font-body"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="label-sm mb-2 block">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-accent outline-none transition-colors font-body"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="label-sm mb-2 block">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-accent outline-none transition-colors font-body"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="label-sm mb-2 block">Project Type</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-colors font-body"
                    >
                      <option value="">Select type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="interior">Interior Design</option>
                      <option value="renovation">Renovation</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label-sm mb-2 block">Estimated Budget</label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent outline-none transition-colors font-body"
                  >
                    <option value="">Select range</option>
                    <option value="100k-500k">$100K – $500K</option>
                    <option value="500k-1m">$500K – $1M</option>
                    <option value="1m-5m">$1M – $5M</option>
                    <option value="5m+">$5M+</option>
                  </select>
                </div>

                <div>
                  <label className="label-sm mb-2 block">Tell Us About Your Vision *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-accent outline-none transition-colors resize-none font-body"
                    placeholder="Describe your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-foreground text-background font-heading text-sm font-medium tracking-wider uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-300 mt-4"
                >
                  Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
