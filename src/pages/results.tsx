import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Dialog, DialogContent } from "@/components/ui/custom-dailog";
import {
  BEFORE_AFTER,
  galleryImages,
  STATS,
  TESTIMONIALS,
} from "@/lib/constants";
import { Play, Quote, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Results() {
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>(
    undefined
  );
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | undefined
  >(undefined);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <h1 className="text-center text-4xl font-bold md:text-5xl">
            Transforming Agriculture
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            See how our innovative solutions are helping farmers across India
            achieve better yields and healthier crops.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">
            What Our Farmers Say
          </h2>
          <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full">
              <CarouselContent>
                {TESTIMONIALS.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center space-x-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.location} • {testimonial.crop}
                            </p>
                          </div>
                        </div>
                        <Quote className="h-8 w-8 text-primary/20" />
                        <p className="mt-4 text-muted-foreground">
                          "{testimonial.quote}"
                        </p>
                        {testimonial.videoLink && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4"
                            onClick={() =>
                              setSelectedVideo(testimonial.videoLink)
                            }>
                            <Play className="mr-2 h-4 w-4" />
                            Watch Story
                          </Button>
                        )}
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

      {/* Before & After Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold">
            Before & After Results
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Example Before & After Cards */}
            {BEFORE_AFTER.map((card, index) => (
              <Card key={index}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-12">
            Gallery of Results
          </h2>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto"
            columnClassName="bg-clip-padding px-2">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="mb-4 overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </section>
      {/* Video Dialog */}
      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(undefined)}>
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
              allowFullScreen></iframe>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Lightbox */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(undefined)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <Button
            variant="ghost"
            className="absolute top-2 right-2 z-50"
            onClick={() => setSelectedImage(undefined)}>
            <X className="h-4 w-4" />
          </Button>
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
