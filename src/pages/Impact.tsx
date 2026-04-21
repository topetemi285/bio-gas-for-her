import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import { Card, CardContent } from '@/components/ui/card';
import { TestTube, Settings, TrendingUp, Handshake, CheckCircle } from 'lucide-react';
import biospark from '@/assets/active2.jpeg';
import distributionImg from '@/assets/stove-distribution.jpg';
import setupImg from '@/assets/technical-setup.jpeg';

const timeline = [
  { year: '2024', title: 'Concept & Initial Prototype', icon: TestTube, desc: 'Developed the foundational concept and built the first working biogas prototype within the Limitless program.' },
  { year: 'Early 2025', title: 'Community Feedback', icon: Handshake, desc: 'Engaged with rural communities to test the prototype, gathering crucial feedback on usability and needs.' },
  { year: 'Mid 2025', title: 'Design Iteration', icon: Settings, desc: 'Upgraded the system based on feedback, introducing a tyre tube collector to improve gas pressure and monitoring.' },
  { year: 'Aug - Nov 2025', title: 'Implementation Phase', icon: TrendingUp, desc: 'Fabricating and installing the upgraded prototype in 20-25 large households across targeted communities.' }
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Impact & Roadmap</h1>
          <p className="text-lg max-w-2xl text-primary-foreground/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Tracking our progress as we bring sustainable energy solutions to rural Nigeria. This roadmap outlines our journey as IFRC Solferino Academy finalists.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Targeting Real Change</h2>
              <div className="space-y-4 text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <p>
                  Our goal for the upcoming implementation phase (August - November 2025) is to deploy the upgraded Biogas For Her systems across rural communities in Bauchi, Plateau, and Benue states.
                </p>
                <div className="bg-accent/50 p-6 rounded-xl mt-6">
                  <h3 className="font-semibold text-foreground mb-3 font-sans">Expected Phase 1 Outcomes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span><strong>25 Households</strong> equipped with digesters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span><strong>Zero</strong> firewood collection hours for impacted women</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Access to free, nutrient-rich biofertilizer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg h-full">
                <img src={biospark} alt="Biogas System Prototype" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={distributionImg} alt="Stove Distribution" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={setupImg} alt="Technical Setup" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>Implementation Plan</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Roadmap to 2025</h2>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-md transition-shadow">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary" />
                <CardContent className="p-6 sm:p-8 pl-8 sm:pl-10">
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                    </div>
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
};

export default Impact;
