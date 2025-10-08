import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Award, Leaf, Shield, Users } from "lucide-react";
import { TEAM, FAQS, MILESTONES } from "@/lib/constants";
import { useEffect } from "react";

export const VALUES = [
  {
    icon: <Leaf className="h-12 w-12 text-primary" />,
    title: "Sustainability",
    description: "Committed to eco-friendly farming practices and soil health.",
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Quality",
    description: "Rigorous testing and research-backed formulations.",
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "Farmer First",
    description: "Supporting farmers with knowledge and innovative solutions.",
  },
  {
    icon: <Award className="h-12 w-12 text-primary" />,
    title: "Excellence",
    description: "Continuous innovation and improvement in our products.",
  },
];

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl">Who We Are</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Serving farmers with utmost satisfaction and value since 2017,
                Microbial Solutions Private Limited, have been deemed as a
                prominently recognized manufacturer of Agriculture
                Bio-Fertilizer, Biostimulant and other agricultural products.
                Our products stand high on efficiency, performance,
                affordability and longevity. Our skilled business ethics and
                easy payment options have enabled us to serve a huge client
                base. Our repeat orders are proof of our achievements, quality,
                performance and our commitments toward the satisfaction of our
                customers.
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
              We have the support of highly qualified and
                experienced professionals, who help us manufacture the best
                assortment. Under their right supervision, every product is
                prepared from the genuine grade of material. Prior to starting
                the process, our team of experts inspects the material first so
                as to ensure the high quality of the end product. We have
                installed highly sophisticated machines and equipment that are
                easy to operate and give excellent performance in manufacturing
                products. We have adapted to the market trends and made our
                production facility in conformity with industry guidelines.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80"
                alt="Laboratory research"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Our Core Values</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto">{value.icon}</div>
                  <CardTitle className="mt-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Our Journey</h2>
          <div className="mt-12">
            <div className="space-y-8">
              {MILESTONES.map((milestone) => (
                <div
                  key={milestone.year}
                  className="flex flex-col md:grid md:grid-cols-5 md:gap-8"
                >
                  <div className="md:col-span-1 flex items-center justify-center">
                    <div className="text-2xl font-bold text-primary">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="md:col-span-4">
                    <CardHeader>
                      <CardTitle>{milestone.title}</CardTitle>
                      <CardDescription>{milestone.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Leadership Team</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {TEAM.map((member) => (
              <Card key={member.name}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
