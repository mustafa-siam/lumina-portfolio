import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    type: "", 
    budget: "", 
    message: "" 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ 
      title: "Message Sent", 
      description: "We'll get back to you within 24 hours." 
    });
    setForm({ name: "", email: "", phone: "", type: "", budget: "", message: "" });
  };

  return (
    <main className="pt-24 min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: Intro + Form */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <span className="text-sm font-semibold text-accent tracking-[0.2em] uppercase">
                  Inquiry
                </span>
                <h1 className="heading-xl mt-4 text-foreground leading-none">
                  Let's Talk
                </h1>
                <p className="text-lg md:text-xl mt-8 text-muted-foreground max-w-xl leading-relaxed">
                  Every extraordinary space begins with a conversation. Whether you have 
                  a clear vision or just a feeling — we'd love to hear from you.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <form onSubmit={handleSubmit} className="mt-16 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="text-xs uppercase tracking-[0.15em] text-accent font-bold mb-2 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-4 text-lg text-foreground focus:border-accent outline-none transition-all font-body placeholder:text-muted-foreground/30"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="relative group">
                      <label className="text-xs uppercase tracking-[0.15em] text-accent font-bold mb-2 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-4 text-lg text-foreground focus:border-accent outline-none transition-all font-body placeholder:text-muted-foreground/30"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label className="text-xs uppercase tracking-[0.15em] text-accent font-bold mb-2 block">
                        Project Type
                      </label>
                      <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-4 text-lg text-foreground focus:border-accent outline-none transition-all font-body appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-background">Select type</option>
                        <option value="architectural" className="bg-background">Architectural Design</option>
                        <option value="interior" className="bg-background">Interior Design</option>
                        <option value="master-planning" className="bg-background">Master Planning</option>
                        <option value="renovation" className="bg-background">Renovation</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-[0.15em] text-accent font-bold mb-2 block">
                        Budget Range
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-4 text-lg text-foreground focus:border-accent outline-none transition-all font-body appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-background">Select range</option>
                        <option value="100k-500k" className="bg-background">$100K – $500K</option>
                        <option value="500k-1m" className="bg-background">$500K – $1M</option>
                        <option value="1m-plus" className="bg-background">$1M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.15em] text-accent font-bold mb-2 block">
                      Your Vision *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-4 text-lg text-foreground focus:border-accent outline-none transition-all resize-none font-body placeholder:text-muted-foreground/30"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full md:w-auto px-16 py-5 bg-foreground text-background font-heading text-xs tracking-[0.3em] uppercase transition-colors duration-500 hover:bg-accent hover:text-white"
                  >
                    Send Message
                  </motion.button>
                </form>
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN: Contact Details */}
            <div className="lg:col-span-5 lg:pl-12">
              <ScrollReveal delay={0.4}>
                <div className="sticky top-32 space-y-16 p-10 md:p-14 bg-card/40 border border-border/60 rounded-[2rem] backdrop-blur-xl">
                  
                  {/* Digital Contact */}
                  <div className="space-y-12">
                    <div className="group">
                      <h3 className="text-xs uppercase tracking-[0.25em] text-accent/80 font-bold mb-5">
                        Email
                      </h3>
                      <a 
                        href="mailto:hello@Lumina.studio" 
                        className="text-2xl md:text-3xl text-foreground hover:text-accent transition-colors duration-300 font-heading block"
                      >
                        hello@lumina.studio
                      </a>
                    </div>

                    <div className="group">
                      <h3 className="text-xs uppercase tracking-[0.25em] text-accent/80 font-bold mb-5">
                        Phone
                      </h3>
                      <a 
                        href="tel:+12125551234" 
                        className="text-2xl md:text-3xl text-foreground hover:text-accent transition-colors duration-300 font-heading block"
                      >
                        +1 (212) 555-1234
                      </a>
                    </div>
                  </div>

                  {/* Physical Locations */}
                  <div className="pt-12 border-t border-border/30 space-y-12">
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.25em] text-accent/80 font-bold mb-5">
                        New York Studio
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        245 West 29th Street, Suite 800<br />
                        New York, NY 10001
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.25em] text-accent/80 font-bold mb-5">
                        Dubai Office
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Tower 1, Level 42, DIFC<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;