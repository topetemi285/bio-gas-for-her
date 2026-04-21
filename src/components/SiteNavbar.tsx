import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/impact', label: 'Our Impact' },
  { to: '/contact', label: 'Contact' },
];

const SiteNavbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Biogas For Her" className="h-10 w-10" width={40} height={40} />
          <span className="font-bold text-xl text-primary" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Biogas <span className="text-secondary">For Her</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Button
              key={l.to}
              variant={pathname === l.to ? 'default' : 'ghost'}
              size="sm"
              asChild
            >
              <Link to={l.to}>{l.label}</Link>
            </Button>
          ))}
          <Button size="sm" className="ml-3 gradient-warm text-secondary-foreground" asChild>
            <a href=
              ""
              // https://www.gofundme.com 
              target="_blank" rel="noopener noreferrer">
              Support Us
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background pb-4">
          <div className="container flex flex-col gap-2 pt-4">
            {navLinks.map((l) => (
              <Button
                key={l.to}
                variant={pathname === l.to ? 'default' : 'ghost'}
                className="justify-start"
                asChild
                onClick={() => setOpen(false)}
              >
                <Link to={l.to}>{l.label}</Link>
              </Button>
            ))}
            <Button className="gradient-warm text-secondary-foreground" asChild onClick={() => setOpen(false)}>
              <a href=
                ""
                // https://www.gofundme.com 
                target="_blank" rel="noopener noreferrer">
                Support Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SiteNavbar;
