import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import { Flame, Leaf, Heart, Users, TreePine, Wind, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import problemImg from '@/assets/problem.jpeg';
import solutionImg from '@/assets/solution.jpeg';
import impact1 from '@/assets/impact.jpeg';
import impact2 from '@/assets/impact2.jpeg';
import impact3 from '@/assets/impact3.jpeg';
import impact4 from '@/assets/impact4.jpeg';
import active1 from '@/assets/active.jpeg';
import active2 from '@/assets/active2.jpeg';
import cookingResult from '@/assets/cooking-result.jpeg';
import fieldWork1 from '@/assets/field-work-1.jpeg';

const stats = [
  { value: '70%+', label: 'Nigerian households rely on firewood' },
  { value: '3.8M', label: 'Annual deaths from household air pollution' },
  { value: '25+', label: 'Target households for 2025 pilot' },
  { value: '10', label: 'Communities in Bauchi, Plateau & Benue' },
];

const sdgs = [
  { icon: Heart, title: 'Good Health', desc: 'Eliminating harmful smoke exposure for families' },
  { icon: Users, title: 'Gender Equality', desc: 'Freeing women from firewood collection burden' },
  { icon: Flame, title: 'Clean Energy', desc: 'Affordable, renewable biogas for cooking' },
  { icon: TreePine, title: 'Climate Action', desc: 'Reducing deforestation and carbon emissions' },
  { icon: Wind, title: 'Sustainable Agriculture', desc: 'Biofertilizer for improved crop yields' },
  { icon: Leaf, title: 'Life on Land', desc: 'Protecting forests and biodiversity' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Biogas digester in rural Nigeria" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative container py-24 md:py-36">
          <div className="max-w-2xl text-primary-foreground">
            {/* <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Prepared by Nandom Mampak & Atsuku Mercy • July 2025
            </span> */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Biogas For Her
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Empowering rural Nigerian women and girls with clean biogas energy, ending the cycle of firewood collection, smoke inhalation, and degradation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-warm text-secondary-foreground font-semibold" asChild>
                <a href="/contact"
                  // "https://www.gofundme.com" 
                  target="_blank" rel="noopener noreferrer">
                  Support Our Mission
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-accent">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>The Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">A Daily Burden That Steals Futures</h2>
              <div className="space-y-4 text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  In many rural communities across Nigeria, women and children are saddled with the daily burden of collecting and carrying heavy loads of firewood, sacrificing their safety, time, and health just to cook a meal.
                </p>
                <p>
                  This physically exhausting task limits their time for education, productivity, and personal well-being. Beyond this, firewood use exposes them to severe health risks from indoor air pollution and contributes significantly to deforestation and environmental degradation.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={problemImg} alt="Woman carrying firewood" className="w-full h-auto object-cover" loading="lazy" width={1024} height={768} />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg">
              <img src={solutionImg} alt="Biogas solution in action" className="w-full h-auto object-cover" loading="lazy" width={1024} height={768} />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>Our Solution</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Clean Energy, Empowered Lives</h2>
              <div className="space-y-4 text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  <strong className="text-foreground">Biogas For Her</strong> provides rural women and families with access to renewable energy through our upgraded biodigester prototype, converting kitchen and animal waste into clean biogas for cooking and nutrient-rich biofertilizer for farming.
                </p>
                <p>
                  Our latest iteration features an upgraded gas collector using a tyre tube for better pressure and easy gas level detection. This community-led innovation was developed and fine-tuned during the IFRC Solferino Academy program.
                </p>
              </div>
              <Button className="mt-6 gradient-hero text-primary-foreground" asChild>
                <Link to="/impact">See Our Impact <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>Field Work & Results</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">See Our Impact in Action</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all">
              <img src={active1} alt="Biogas System Installation" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all">
              <img src={active2} alt="Completed Digester Prototype" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all">
              <img src={impact1} alt="Community Engagement" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all">
              <img src={impact2} alt="Technical Explanation" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all">
              <img src={impact3} alt="Community Support" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all">
              <img src={impact4} alt="Youth and Community" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all">
              <img src={cookingResult} alt="Clean Biogas Cooking" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all">
              <img src={fieldWork1} alt="Field Research and Testing" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* SDGs */}
      <section className="py-20">
        <div className="container text-center">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>Aligned With Global Goals</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">Sustainable Development Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgs.map((s, i) => (
              <Card key={i} className="text-left hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <s.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-primary-foreground/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            A future defined by well-being, empowered women, and environmental sustainability is what we envision. Help us scale this solution across more communities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gradient-warm text-secondary-foreground font-semibold" asChild>
              <a href="/contact" target="_blank" rel="noopener noreferrer">
                Donate Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Home;
