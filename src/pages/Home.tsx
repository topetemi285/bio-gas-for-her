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

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Biogas digester in rural Nigeria" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative section-shell py-24 md:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Biogas For Her
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              Empowering rural Nigerian women and girls with clean biogas energy, ending the cycle of firewood collection, smoke inhalation, and degradation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="gradient-warm text-secondary-foreground" asChild>
                <a href="/contact"
                  // "https://www.gofundme.com" 
                  target="_blank" rel="noopener noreferrer">
                  Support Our Mission
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="section-shell">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-extrabold text-primary md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-24">
        <div className="section-shell">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div className="glass-panel rounded-[30px] p-6 md:p-8 lg:order-2">
              <img src={problemImg} alt="Woman carrying firewood" className="h-full max-h-[620px] w-full rounded-[24px] object-cover" loading="lazy" width={1024} height={768} />
            </div>
            <div className="lg:pr-8">
              <span className="eyebrow text-secondary">The Problem</span>
              <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight md:text-5xl">A Daily Burden That Steals Futures</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
                <p>
                  In many rural communities across Nigeria, women and children are saddled with the daily burden of collecting and carrying heavy loads of firewood, sacrificing their safety, time, and health just to cook a meal.
                </p>
                <p>
                  This physically exhausting task limits their time for education, productivity, and personal well-being. Beyond this, firewood use exposes them to severe health risks from indoor air pollution and contributes significantly to deforestation and environmental degradation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-24">
        <div className="section-shell">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
            <div className="glass-panel order-2 rounded-[30px] p-6 md:p-8 lg:order-1">
              <img src={solutionImg} alt="Biogas solution in action" className="h-full max-h-[620px] w-full rounded-[24px] object-cover" loading="lazy" width={1024} height={768} />
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <span className="eyebrow">Our Solution</span>
              <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight md:text-5xl">Clean Energy, Empowered Lives</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
                <p>
                  <strong className="text-foreground">Biogas For Her</strong> provides rural women and families with access to renewable energy through our upgraded biodigester prototype, converting kitchen and animal waste into clean biogas for cooking and nutrient-rich biofertilizer for farming.
                </p>
                <p>
                  Our latest iteration features an upgraded gas collector using a tyre tube for better pressure and easy gas level detection. This community-led innovation was developed and fine-tuned during the IFRC Solferino Academy program.
                </p>
              </div>
              <Button className="mt-8 gradient-hero text-primary-foreground" asChild>
                <Link to="/impact">See Our Impact <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-24">
        <div className="section-shell">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow text-secondary">Field Work & Results</span>
              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">See Our Impact in Action</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              Real moments from community engagement, prototype setup, technical education, and early clean-cooking results.
            </p>
          </div>
          <div className="grid auto-rows-[220px] gap-4 md:grid-cols-6">
            <div className="group relative overflow-hidden rounded-[24px] md:col-span-2 md:row-span-2">
              <img src={active1} alt="Biogas System Installation" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" width={800} height={600} />
              <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/0" />
            </div>
            <div className="group relative overflow-hidden rounded-[24px] md:col-span-2">
              <img src={active2} alt="Completed Digester Prototype" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" width={800} height={600} />
              <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/0" />
            </div>
            <div className="group relative overflow-hidden rounded-[24px] md:col-span-2">
              <img src={impact1} alt="Community Engagement" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" width={800} height={600} />
              <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/0" />
            </div>
            <div className="group relative overflow-hidden rounded-[24px] md:col-span-2">
              <img src={impact2} alt="Technical Explanation" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" width={800} height={600} />
              <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/0" />
            </div>
            <div className="group relative overflow-hidden rounded-[24px] md:col-span-2 md:row-span-2">
              <img src={impact3} alt="Community Support" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" width={800} height={600} />
              <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/0" />
            </div>
            <div className="group relative overflow-hidden rounded-[24px] md:col-span-2">
              <img src={impact4} alt="Youth and Community" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" width={800} height={600} />
              <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/0" />
            </div>
            <div className="group relative overflow-hidden rounded-[24px] md:col-span-1">
              <img src={cookingResult} alt="Clean Biogas Cooking" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" width={800} height={600} />
              <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/0" />
            </div>
            <div className="group relative overflow-hidden rounded-[24px] md:col-span-1">
              <img src={fieldWork1} alt="Field Research and Testing" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" width={800} height={600} />
              <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/0" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-24">
        <div className="section-shell">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow text-secondary">Aligned With Global Goals</span>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Sustainable Development Impact</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sdgs.map((s, i) => (
              <Card key={i} className="text-left">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                    <s.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-24">
        <div className="section-shell">
          <div className="gradient-hero relative overflow-hidden rounded-[34px] px-6 py-14 text-primary-foreground md:px-10 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
                  Join Our Journey
                </span>
                <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">Help us scale this solution across more communities.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/88">
                  A future defined by well-being, empowered women, and environmental sustainability is what we envision. Help us scale this solution across more communities.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-warm text-secondary-foreground" asChild>
                  <a href="/contact" target="_blank" rel="noopener noreferrer">
                    Donate Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/25 bg-white/10 text-primary-foreground hover:bg-white/18" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Home;
