import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Heart, TreePine, Sprout, Users, Flame } from 'lucide-react';

const impacts = [
  { icon: Clock, value: '4+ hrs', label: 'Saved daily per household', desc: 'Women reclaim hours previously spent collecting firewood' },
  { icon: Heart, value: '100%', label: 'Reduced smoke exposure', desc: 'Clean biogas cooking eliminates harmful indoor air pollution' },
  { icon: TreePine, value: '2 tons', label: 'CO₂ reduced per digester/year', desc: 'Each unit significantly cuts carbon emissions' },
  { icon: Sprout, value: '200kg', label: 'Biofertilizer produced monthly', desc: 'Organic fertilizer boosts crop yields sustainably' },
  { icon: Users, value: '50+', label: 'Families in pilot communities', desc: 'Growing impact across rural Nigerian communities' },
  { icon: Flame, value: '3 meals', label: 'Cooked daily on biogas', desc: 'Reliable clean energy for everyday cooking needs' },
];

const Impact = () => (
  <div className="min-h-screen bg-background">
    <SiteNavbar />

    <section className="py-20 gradient-hero text-primary-foreground">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h1>
        <p className="text-lg max-w-2xl text-primary-foreground/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Every biogas digester installed is a step toward healthier families, empowered women, and a greener planet.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((item, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <p className="text-3xl font-bold text-primary">{item.value}</p>
                <p className="font-semibold mt-1">{item.label}</p>
                <p className="text-sm text-muted-foreground mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/50">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-6">What Communities Say</h2>
        <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6 text-left" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          "Since the biogas system came, I no longer wake at 4am to search for firewood. My daughter now has time to study, and my kitchen no longer fills with smoke. This has changed our lives."
        </blockquote>
        <p className="mt-4 text-sm font-semibold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>— Community Member, Pilot Village</p>
      </div>
    </section>

    <section className="py-16 gradient-hero text-primary-foreground text-center">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">Help Us Reach More Communities</h2>
        <p className="text-lg mb-8 text-primary-foreground/90 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Your support can bring clean energy to another family today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="gradient-warm text-secondary-foreground font-semibold" asChild>
            <a href="https://www.gofundme.com" target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
          <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default Impact;
