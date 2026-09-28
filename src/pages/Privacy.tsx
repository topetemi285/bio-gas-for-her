import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <SiteNavbar />
    <PageHero
      eyebrow="Legal"
      title="Privacy Policy"
      description="How Biogas For Her collects, uses, and protects information when you visit our website or contact us."
    />

    <section className="px-4 py-14 md:px-6 md:py-20">
      <div className="section-shell max-w-3xl space-y-8 text-muted-foreground leading-8">
        <p className="text-sm">Last updated: September 4, 2026</p>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">1. Introduction</h2>
          <p>
            Biogas For Her (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains what information we may collect through biogasforher.com and related contact channels, how we use it, and the choices available to you.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">2. Information We Collect</h2>
          <p className="mb-3">We may collect:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Contact details you provide (such as name, email address, and message content) when you use our contact form or email us</li>
            <li>Basic technical information automatically collected by your browser or hosting provider (such as IP address, browser type, and pages visited)</li>
            <li>Any other information you voluntarily share when supporting, partnering with, or inquiring about our work</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">3. How We Use Information</h2>
          <p className="mb-3">We use collected information to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond to inquiries, partnership requests, and support messages</li>
            <li>Operate, maintain, and improve our website</li>
            <li>Communicate about our programs, impact, and opportunities when appropriate</li>
            <li>Comply with applicable legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">4. Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share information with trusted service providers who help us operate our website or communications, or when required by law. Partners such as program supporters may receive aggregated or anonymized information about our work, not your personal contact details, unless you ask us to introduce you.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">5. Data Retention</h2>
          <p>
            We retain contact and inquiry information only as long as needed to respond to you, manage our programs, or meet legal requirements. You may request deletion of your personal information by emailing us.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">6. Security</h2>
          <p>
            We take reasonable measures to protect personal information. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">7. Third-Party Links</h2>
          <p>
            Our website may link to external sites (for example social media or partner pages). We are not responsible for the privacy practices of those third parties.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">8. Children&apos;s Privacy</h2>
          <p>
            Our website is not directed at children under 13, and we do not knowingly collect personal information from children.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this page will reflect the latest revision.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-foreground">10. Contact Us</h2>
          <p>
            For privacy-related questions or requests, contact us at{' '}
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

export default Privacy;
