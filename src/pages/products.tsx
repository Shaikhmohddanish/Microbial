import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = Array.from(
  new Set(PRODUCTS.map((product) => product.category))
);
categories.unshift("All");

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80)",
        }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-center text-4xl font-bold md:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl text-center text-lg">
            Discover our range of innovative fertilizer solutions designed to
            enhance your crop yield naturally
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          <div className="hidden sm:block">
            <Tabs
              defaultValue={categories[0]}
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full">
              <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              </Tabs>
              </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PRODUCTS.filter(
                      (product) => selectedCategory === "All" || product.category === selectedCategory
                    ).map((product) => (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle>{product.name}</CardTitle>
                            <Badge variant="secondary">
                              {product.category}
                            </Badge>
                          </div>
                          <CardDescription className="mt-2">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="w-full">View Details</Button>
                            </DialogTrigger>
                            <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle>{product.name}</DialogTitle>
                                <DialogDescription>
                                  {product.description}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="mt-4">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full rounded-lg object-cover"
                                />
                                {product.benefits && (
                                  <div className="mt-6">
                                    <h3 className="text-lg font-semibold">
                                      Key Benefits
                                    </h3>
                                    <ul className="mt-2 space-y-2">
                                      {product.benefits.map(
                                        (benefit, index) => (
                                          <li
                                            key={index}
                                            className="flex items-start gap-2">
                                            <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                                            <span>{benefit}</span>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )}
                                <div className="mt-6 flex justify-end space-x-4">
                                  <Button variant="outline">
                                    {" "}
                                    <a href="../catalogue">Download Brochure</a>
                                  </Button>
                                  <Button>
                                    <a href="../samples">Request Sample</a>
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

        </div>
      </section>

      <div className="fixed bottom-8 right-8">
        <a
          href="https://www.indiamart.com/microbial-solutions/agriculture-fertilizer-and-potassium-humate.html"
          target="_blank"
          rel="noopener noreferrer">
          <Button variant="default" className="rounded-full shadow-lg">
            View on Indiamart
          </Button>
        </a>
      </div>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">
            Ready to Transform Your Farming?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our products are backed by years of research and proven results.
            Contact us to learn more about how we can help improve your yield.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" onClick={() => navigate("../catalogue")}>
              Download Catalogue
            </Button>
            <Button onClick={() => navigate("../contact")}>
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
