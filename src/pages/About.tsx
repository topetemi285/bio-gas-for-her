import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import teamImg from '@/assets/biogas-stove-blue-flame.jpg';

const timeline = [
  { year: '2024', title: 'IFRC Solferino Academy', desc: 'Selected for the Limitless Youth Innovation Academy and designed the Biogas For Her solution.' },
  { year: '2024', title: 'Pilot Community Research', desc: 'Conducted field research in rural Nigerian communities to understand the firewood collection burden.' },
  { year: '2025', title: 'Prototype & Testing', desc: 'Developed and tested biogas digester prototypes with pilot families.' },
  { year: '2026', title: 'Scaling Up', desc: 'Working to expand to more communities with support from partners and donors.' },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <SiteNavbar />

    <PageHero
      eyebrow="About The Initiative"
      title="About Biogas For Her"
      description="Born from lived experience, built with purpose, we are youth changemakers from rural Nigeria determined to transform lives through clean energy."
    />

    <section className="px-4 py-14 md:px-6 md:py-24">
      <div className="section-shell">
        <div className="grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Built from lived experience.</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
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
          <div className="glass-panel rounded-[30px] p-6 md:p-8">
            <img src={teamImg} alt="Biogas For Her team working on the system" className="w-full rounded-[24px] object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-14 md:px-6 md:py-24">
      <div className="section-shell max-w-4xl">
        <div className="glass-panel rounded-[30px] p-8 md:p-10">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">A practical system with everyday impact.</h2>
          <div className="mt-8 space-y-4">
          {[
            'Organic waste (animal dung, food scraps) is collected and fed into a biogas digester',
            'Anaerobic digestion converts waste into methane-rich biogas for clean cooking',
            'The byproduct — biofertilizer — is used to improve crop yields',
            'Women save hours daily, children attend school, families breathe clean air',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl border border-border/70 bg-white/70 p-4">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-7 text-muted-foreground md:text-base">{step}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-14 md:px-6 md:py-24">
      <div className="section-shell max-w-4xl">
        <div className="mb-10 text-center">
          <span className="eyebrow">Timeline</span>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Our Journey</h2>
        </div>
        <div className="space-y-6">
          {timeline.map((t, i) => (
            <Card key={i}>
              <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-start">
                <span className="inline-flex whitespace-nowrap rounded-full bg-secondary/10 px-3 py-1 text-sm font-bold text-secondary">{t.year}</span>
                <div>
                  <h3 className="text-lg font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{t.desc}</p>
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
