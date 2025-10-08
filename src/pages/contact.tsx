import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook, Linkedin } from 'lucide-react'
import indiaMart from '@/assets/images/INDIAMART.NS.png';
import { COMPANY } from '@/lib/constants'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xjkvagov', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('submitted');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{COMPANY.name}</h1>
      <p className="text-xl text-center mb-8">{COMPANY.tagline}</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required />
              </div>
              <Button type="submit" className="w-full" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
              {formStatus === 'submitted' && (
                <p className="text-green-600">Thank you for your message. We'll get back to you soon!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600">There was an error sending your message. Please try again.</p>
              )}
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <p>{COMPANY.headOffice}</p>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <p>{COMPANY.registeredOffice}</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <p>{COMPANY.phone}</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <p>{COMPANY.email}</p>
              </div>
              <div>
                <p>License Number: {COMPANY.lisence_number}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-4">
              <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={COMPANY.socials.indiamart} className="text-muted-foreground hover:text-primary">
                <img src={indiaMart} alt="IndiaMart" className="h-6 w-6" />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-3'>
              <iframe
                src={COMPANY.mapLink}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


