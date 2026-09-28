import { useState } from 'react';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: 'Message sent!', description: 'Thank you for reaching out. We will get back to you soon.' });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        description="Whether you want to support, partner, or just learn more, we'd love to hear from you."
      />

      <section className="px-4 py-14 md:px-6 md:py-24">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <Card className="glass-panel bg-white/75">
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a href="mailto:support@biogasforher.com" className="mt-1 inline-block text-sm text-primary hover:underline">support@biogasforher.com</a>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-panel bg-white/75">
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">Rural Communities, Nigeria</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-panel bg-white/75">
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-bold">Follow Us</h3>
                    <div className="flex flex-col gap-1 mt-1">
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">LinkedIn</a>
                      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Instagram</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-panel bg-white/80">
              <CardContent className="p-6 md:p-8">
                <span className="eyebrow">Message Us</span>
                <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className="mb-2 inline-block">Name</Label>
                      <Input id="name" placeholder="Your name" required className="h-12 rounded-2xl border-border/80 bg-white/80" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-2 inline-block">Email</Label>
                      <Input id="email" type="email" placeholder="support@biogasforher.com" required className="h-12 rounded-2xl border-border/80 bg-white/80" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="mb-2 inline-block">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required className="h-12 rounded-2xl border-border/80 bg-white/80" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="mb-2 inline-block">Message</Label>
                    <Textarea id="message" placeholder="Tell us more..." rows={5} required className="rounded-2xl border-border/80 bg-white/80" />
                  </div>
                  <Button type="submit" className="gradient-hero text-primary-foreground w-full sm:w-auto" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contact;
