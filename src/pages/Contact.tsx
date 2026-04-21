import { useState } from 'react';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import { Card, CardContent } from '@/components/ui/card';
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
      toast({ title: 'Message sent!', description: 'Thank you for reaching out. We will get back to you soon.'});
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg max-w-2xl text-primary-foreground/90" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Whether you want to support, partner, or just learn more — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Info cards */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:biogasforher@gmail.com" className="text-sm text-primary hover:underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>biogasforher@gmail.com</a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>Rural Communities, Nigeria</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <ExternalLink className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Follow Us</h3>
                    <div className="flex flex-col gap-1 mt-1">
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>LinkedIn</a>
                      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>Instagram</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more..." rows={5} required />
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
