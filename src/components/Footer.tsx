import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="font-heading text-2xl font-semibold tracking-tight text-foreground">
              Lumina<span className="text-accent text-4xl font-bold">.</span>
            </Link>
            <p className="body-md mt-4 max-w-md">
              Award-winning architecture and interior design studio crafting spaces that inspire, endure, and elevate the human experience.
            </p>
          </div>

          <div>
            <h4 className="label-sm mb-6">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Projects", "Services", "About", "Journal", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="body-md hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="label-sm mb-6">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="body-md hover:text-accent transition-colors">Instagram</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="body-md hover:text-accent transition-colors">Pinterest</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="body-md hover:text-accent transition-colors">LinkedIn</a>
              <a href="mailto:hello@Lumina.studio" className="body-md hover:text-accent transition-colors">hello@Lumina.studio</a>
            </div>
          </div>
        </div>

        <div className="divider mt-16 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Lumina Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
