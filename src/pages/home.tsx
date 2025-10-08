import { Leaf, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PRODUCTS, TESTIMONIALS, STATS, COMPANY } from "@/lib/constants";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import turmericImg from "@/assets/images/testimonals/turmeric.jpg";
import { Play, Quote } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import homeBG from '@/assets/images/banners/home-cover.jpg';

export function Home() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>(undefined);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${homeBG})`,
        }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-center text-4xl font-bold leading-tight md:text-6xl">
            {/* Enhancing Nature's Growth */}
            {COMPANY.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-center text-lg text-gray-200">
            Explore our innovative fertilizer solutions that help farmers
            achieve better yields while maintaining soil health.
          </p>
          <div className="mt-8 flex space-x-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate("./results")}>
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-foreground border-white"
              onClick={() => navigate("./contact")}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <Card key={stat.label} className="border-none">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Why Choose Microbial?</h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Eco-Friendly Solutions</h3>
                    <p className="mt-1 text-muted-foreground">
                      Our products are designed to enhance soil health
                      naturally.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Sprout className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Proven Results</h3>
                    <p className="mt-1 text-muted-foreground">
                      Consistently higher yields and better crop quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Support</h3>
                    <p className="mt-1 text-muted-foreground">
                      Dedicated team to guide you through every step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={turmericImg}
                alt="Farmer in field"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className=" py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">Featured Products</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PRODUCTS.slice(0, 3).map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <Button className="mt-4" variant="outline">
                  <a href="/products">Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <a href="/products">View All Products</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">
            What Our Farmers Say
          </h2>
          <div className="mt-12 relative">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {TESTIMONIALS.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center space-x-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.location} • {testimonial.crop}
                            </p>
                          </div>
                        </div>
                        <Quote className="h-8 w-8 text-primary/20" />
                        <p className="mt-4 text-muted-foreground">
                          "{testimonial.quote}"
                        </p>
                        {testimonial.videoLink &&
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4"
                          onClick={() => setSelectedVideo(testimonial.videoLink)} 
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Watch Story
                        </Button>}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

            {/* Video Dialog */}
            <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(undefined)}>
        <DialogContent className="sm:max-w-[720px]">
          <DialogHeader>
            <DialogTitle>Farmer's Story</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo}
              title="Farmer's Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">
            Ready to Transform Your Farming?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Join thousands of satisfied farmers who have improved their yields
            with our products.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="mt-8 border-primary-foreground text-foreground hover:bg-primary-foreground hover:text-primary"
            onClick={() => navigate('./samples')}>
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
