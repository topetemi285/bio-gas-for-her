import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';

const Terms = () => (
  <div className="min-h-screen bg-background">
    <SiteNavbar />
    <PageHero
      eyebrow="Legal"
      title="Terms & Conditions"
      description="The terms that govern your use of the Biogas For Her website and related online materials."
    />

    <section className="px-4 py-14 md:px-6 md:py-20">
      <div className="section-shell max-w-3xl space-y-8 text-muted-foreground leading-8">
        <p className="text-sm">Last updated: September 4, 2026</p>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">1. Agreement</h2>
          <p>
            By accessing or using biogasforher.com (the &quot;Site&quot;), you agree to these Terms &amp; Conditions. If you do not agree, please do not use the Site.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">2. About Biogas For Her</h2>
          <p>
            Biogas For Her is a clean bioenergy initiative empowering women and girls in rural Nigeria through biogas technology. Content on this Site is provided for informational and educational purposes about our mission, programs, and impact.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">3. Acceptable Use</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use the Site for unlawful, harmful, or fraudulent purposes</li>
            <li>Attempt to disrupt, damage, or gain unauthorized access to the Site or related systems</li>
            <li>Misrepresent your identity or affiliation when contacting us</li>
            <li>Copy or redistribute Site content in a misleading way without permission</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">4. Intellectual Property</h2>
          <p>
            Unless otherwise noted, text, branding, logos, photographs, and other materials on the Site belong to Biogas For Her or its licensors. You may view and share links for personal, non-commercial use. Any other use requires prior written permission.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">5. Donations and Support</h2>
          <p>
            Information about supporting our mission is provided in good faith. If donation or payment links are offered, those transactions may be processed by third-party platforms subject to their own terms. We are not responsible for the practices of external payment providers.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">6. Program Information</h2>
          <p>
            Descriptions of installations, beneficiaries, timelines, and outcomes reflect our current understanding and may be updated as programs evolve. They do not create a contractual commitment to any specific deliverable unless separately agreed in writing.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">7. Disclaimer</h2>
          <p>
            The Site and its content are provided &quot;as is&quot; without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Biogas For Her shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or reliance on its content.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">9. External Links</h2>
          <p>
            Links to third-party websites are provided for convenience. We do not control and are not responsible for the content or policies of those sites.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">10. Changes</h2>
          <p>
            We may revise these Terms &amp; Conditions at any time. Continued use of the Site after changes are posted constitutes acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">11. Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a href="mailto:support@biogasforher.com" className="text-primary hover:underline">
              support@biogasforher.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default Terms;
