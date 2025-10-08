import { COMPANY, NAVIGATION } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import logo from '@/assets/images/MBS Logo.png';
import { Facebook, Linkedin } from 'lucide-react';
import indiaMart from '@/assets/images/INDIAMART.NS.png';

export function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <img src={logo} alt={COMPANY.name} className="w-16 h-16 object-cover rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">{COMPANY.name}</h3>
            <p className="mt-4 text-sm text-muted-foreground">{COMPANY.tagline}</p>
          </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{COMPANY.headOffice}</li>
              <li>{COMPANY.registeredOffice}</li>
              <li>{COMPANY.phone}</li>
              <li>{COMPANY.email}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href={COMPANY.socials.facebook} className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={COMPANY.socials.indiamart} className="text-muted-foreground hover:text-primary">
                <img src={indiaMart} alt="IndiaMart" className="h-5 w-5" />
              </a>
              <a href={COMPANY.socials.linkedin} className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {COMPANY.name} All rights reserved.
        </div>
        <div className="text-center text-sm text-muted-foreground">
          version. 1.0.2
        </div>
      </div>
    </footer>
  );
}