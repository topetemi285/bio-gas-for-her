import SiteNavbar from '@/components/SiteNavbar';

import SiteFooter from '@/components/SiteFooter';

import PageHero from '@/components/PageHero';

import { Card, CardContent } from '@/components/ui/card';

import { TestTube, Settings, TrendingUp, Handshake, CheckCircle, Users, Home, Clock } from 'lucide-react';

import biospark from '@/assets/active2.jpeg';

import distributionImg from '@/assets/stove-distribution.jpg';

import setupImg from '@/assets/technical-setup.jpeg';



const impactResults = [

  { value: '12', label: 'Biodigesters installed' },

  { value: '6', label: 'Rural communities reached' },

  { value: '300+', label: 'Direct beneficiaries' },

  { value: '1,700', label: 'Indirect beneficiaries' },

];



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



      <PageHero

        eyebrow="Progress & Roadmap"

        title="Our Impact & Roadmap"

        description="Tracking our progress as we bring sustainable energy solutions to rural Nigeria. This roadmap outlines our journey as IFRC Solferino Academy finalists."

      />



      <section className="px-4 py-14 md:px-6 md:py-24">

        <div className="section-shell">

          <span className="eyebrow">Results in the Field</span>

          <h2 className="mt-4 max-w-3xl text-4xl font-extrabold md:text-5xl">

            Real impact across rural communities

          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">

            With support from the IFRC Solferino Academy and Rivet, we have installed 12 biodigesters across six rural communities, directly benefiting over 300 people and indirectly benefiting 1,700 people.

          </p>



          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {impactResults.map((item, i) => (

              <div key={i} className="rounded-2xl border border-border/70 bg-accent/40 p-6 text-center">

                <p className="text-3xl font-extrabold text-primary md:text-4xl">{item.value}</p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>

              </div>

            ))}

          </div>



          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <Card>

              <CardContent className="flex gap-4 p-6">

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">

                  <Users className="h-6 w-6 text-primary" />

                </span>

                <div>

                  <h3 className="text-lg font-bold">Direct beneficiaries</h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-base">

                    For the 300 direct beneficiaries, families now have access to clean cooking, with women reporting less coughing and eye irritation and reclaiming the 3 hours previously spent collecting firewood for school, farming, and businesses.

                  </p>

                </div>

              </CardContent>

            </Card>

            <Card>

              <CardContent className="flex gap-4 p-6">

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/10">

                  <Clock className="h-6 w-6 text-secondary" />

                </span>

                <div>

                  <h3 className="text-lg font-bold">Time reclaimed</h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-base">

                    Women are redirecting an average of 3 hours per day, previously lost to firewood collection toward education, farming, and local businesses.

                  </p>

                </div>

              </CardContent>

            </Card>

          </div>



          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-6">

            <Home className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

            <p className="text-sm leading-7 text-muted-foreground md:text-base">

              Supported by the <strong className="text-foreground">IFRC Solferino Academy</strong> and <strong className="text-foreground">Rivet</strong>, these installations are creating healthier homes, stronger livelihoods, and cleaner communities across rural Nigeria.

            </p>

          </div>

        </div>

      </section>



      <section className="px-4 py-14 md:px-6 md:py-24">

        <div className="section-shell">

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">

            <div>

              <span className="eyebrow">Phase 1 Focus</span>

              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Targeting Real Change</h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">

                <p>

                  Our goal for the upcoming implementation phase (August - November 2025) is to deploy the upgraded Biogas For Her systems across rural communities in Bauchi, Plateau, and Benue states.

                </p>

                <div className="glass-panel mt-8 rounded-[24px] p-6">

                  <h3 className="mb-4 font-sans text-lg font-bold text-foreground">Expected Phase 1 Outcomes:</h3>

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

              <div className="glass-panel col-span-2 rounded-[28px] p-4 sm:col-span-1 sm:row-span-2">

                <img src={biospark} alt="Biogas System Prototype" className="w-full h-full object-cover rounded-[20px]" width={800} height={600} />

              </div>

              <div className="grid grid-rows-2 gap-4">

                <div className="glass-panel rounded-[28px] p-4">

                  <img src={distributionImg} alt="Stove Distribution" className="h-full w-full rounded-[20px] object-cover" width={800} height={600} />

                </div>

                <div className="glass-panel rounded-[28px] p-4">

                  <img src={setupImg} alt="Technical Setup" className="h-full w-full rounded-[20px] object-cover" width={800} height={600} />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      <section className="px-4 py-14 md:px-6 md:py-24">

        <div className="section-shell max-w-5xl">

          <div className="mb-12 text-center">

            <span className="eyebrow text-secondary">Implementation Plan</span>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Our Roadmap to 2025</h2>

          </div>



          <div className="space-y-6">

            {timeline.map((item, index) => (

              <Card key={index} className="relative overflow-hidden">

                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />

                <CardContent className="p-6 pl-8 sm:p-8 sm:pl-10">

                  <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-accent">

                      <item.icon className="h-8 w-8 text-primary" />

                    </div>

                    <div>

                      <div className="mb-2 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">

                        {item.year}

                      </div>

                      <h3 className="mb-2 text-xl font-bold">{item.title}</h3>

                      <p className="text-sm leading-7 text-muted-foreground md:text-base">{item.desc}</p>

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

