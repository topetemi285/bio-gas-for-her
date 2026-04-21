import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const SiteFooter = () => (
  <footer className="border-t bg-muted/50 py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-bold text-lg">Biogas <span className="text-secondary">For Her</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            A clean bioenergy initiative empowering women and girls in rural Nigeria through biogas technology.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link>
            <Link to="/impact" className="text-sm hover:text-primary transition-colors">Our Impact</Link>
            <Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>Connect</h4>
          <div className="flex flex-col gap-2">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">Instagram</a>
            <a href="mailto:support@biogasforher.com" className="text-sm hover:text-primary transition-colors">support@biogasforher.com</a>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Biogas For Her. All rights reserved. | IFRC Solferino Limitless Youth Innovation Academy 2024
      </div>
    </div>
  </footer>
);

export default SiteFooter;
