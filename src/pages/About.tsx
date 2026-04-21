import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const timeline = [
  { year: '2024', title: 'IFRC Solferino Academy', desc: 'Selected for the Limitless Youth Innovation Academy and designed the Biogas For Her solution.' },
  { year: '2024', title: 'Pilot Community Research', desc: 'Conducted field research in rural Nigerian communities to understand the firewood collection burden.' },
  { year: '2025', title: 'Prototype & Testing', desc: 'Developed and tested biogas digester prototypes with pilot families.' },
  { year: '2026', title: 'Scaling Up', desc: 'Working to expand to more communities with support from partners and donors.' },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <SiteNavbar />

    <section className="py-20 gradient-hero text-primary-foreground">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Biogas For Her</h1>
        <p className="text-lg max-w-2xl text-primary-foreground/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Born from lived experience, built with purpose — we are youth changemakers from rural Nigeria determined to transform lives through clean energy.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <p>
            As youths who grew up within the struggle of firewood collection, watching our mothers and sisters spend hours each day in the bush, risking snake bites, back injuries, and smoke-filled kitchens, we knew something had to change.
          </p>
          <p>
            This is what inspired <strong className="text-foreground">Biogas For Her</strong>, a clean bioenergy initiative we designed during our participation in the IFRC Solferino Limitless Youth Innovation Academy 2024.
          </p>
          <p>
            Our solution empowers women and girls in pilot communities by providing access to renewable energy through biogas technology, while also promoting sustainable agriculture through biofertilizer production.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/50">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="space-y-4">
          {[
            'Organic waste (animal dung, food scraps) is collected and fed into a biogas digester',
            'Anaerobic digestion converts waste into methane-rich biogas for clean cooking',
            'The byproduct — biofertilizer — is used to improve crop yields',
            'Women save hours daily, children attend school, families breathe clean air',
          ].map((step, i) => (
            <div key={i} className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
        <div className="space-y-8">
          {timeline.map((t, i) => (
            <Card key={i}>
              <CardContent className="p-6 flex gap-4 items-start">
                <span className="text-sm font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full whitespace-nowrap" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.year}</span>
                <div>
                  <h3 className="font-semibold text-lg">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default About;
