import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const SiteFooter = () => (
  <footer className="w-full border-t bg-muted/50 py-12">
    <div className="section-shell">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-lg font-extrabold">Biogas <span className="text-secondary">For Her</span></span>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            A clean bioenergy initiative empowering women and girls in rural Nigeria through biogas technology.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm transition-colors hover:text-primary">Home</Link>
            <Link to="/about" className="text-sm transition-colors hover:text-primary">About Us</Link>
            <Link to="/impact" className="text-sm transition-colors hover:text-primary">Our Impact</Link>
            <Link to="/contact" className="text-sm transition-colors hover:text-primary">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Connect</h4>
          <div className="flex flex-col gap-2">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-primary">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-primary">Instagram</a>
            <a href="mailto:support@biogasforher.com" className="text-sm transition-colors hover:text-primary">support@biogasforher.com</a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Biogas For Her. All rights reserved. | IFRC Solferino Limitless Youth Innovation Academy 2024
        </p>
        <p className="mt-2">
          <Link to="/privacy" className="transition-colors hover:text-primary">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link to="/terms" className="transition-colors hover:text-primary">Terms &amp; Conditions</Link>
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
