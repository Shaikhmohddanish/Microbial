// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { CheckCircle } from "lucide-react";
// import { useEffect } from "react";

// export default function AgroSales() {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to top
//   }, []);
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8 text-center">
//         Agro Products Sales
//       </h1>

//       <section className="mb-12">
//         <h2 className="text-3xl font-bold mb-6">Why Partner with Us?</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             "High-quality fertilizers",
//             "Timely delivery",
//             "Competitive pricing",
//             "Expert support",
//             "Customized solutions",
//             "Sustainable practices",
//           ].map((benefit, index) => (
//             <Card key={index}>
//               <CardContent className="pt-6">
//                 <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
//                 <p className="font-semibold">{benefit}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-3xl font-bold mb-6">Bulk Sales</h2>
//         <Card>
//           <CardHeader>
//             <CardTitle>Our Clients</CardTitle>
//             <CardDescription>
//               Trusted by large-scale agricultural operations and distributors
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Major Agricultural Cooperatives</li>
//               <li>Government Agricultural Departments</li>
//               <li>Large-Scale Farming Operations</li>
//               <li>Agricultural Input Distributors</li>
//               <li>Horticultural Companies</li>
//             </ul>
//           </CardContent>
//         </Card>
//       </section>

//       <section>
//         <h2 className="text-3xl font-bold mb-6">Contact Us for Bulk Orders</h2>
//         <Card>
//           <CardHeader>
//             <CardTitle>Inquiry Form</CardTitle>
//             <CardDescription>
//               Fill out the form below and our sales team will get back to you
//               shortly.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="businessName">Business Name</Label>
//                 <Input id="businessName" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="contactName">Contact Person</Label>
//                 <Input id="contactName" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input id="phone" type="tel" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="inquiry">Inquiry Details</Label>
//                 <Textarea
//                   id="inquiry"
//                   placeholder="Please provide details about your bulk order requirements"
//                   required
//                 />
//               </div>
//               <Button type="submit" className="w-full">
//                 Submit Inquiry
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </section>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRODUCTS } from "@/lib/constants";
import { Building2, CheckCircle2, Truck, Users, Warehouse, Zap } from "lucide-react";

const BENEFITS = [
  {
    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    title: "Premium Quality",
    description: "High-quality fertilizers with proven results",
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Reliable Delivery",
    description: "Timely delivery across India",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Competitive Pricing",
    description: "Best rates for bulk orders",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Expert Support",
    description: "Dedicated technical assistance",
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "Custom Solutions",
    description: "Tailored to your specific needs",
  },
  {
    icon: <Warehouse className="h-8 w-8 text-primary" />,
    title: "Bulk Capacity",
    description: "Large volume order fulfillment",
  },
];

interface FormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  location: string;
  businessType: string;
  products: string;
  quantity: string;
  message: string;
}

export default function AgroSales() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
    businessType: "",
    products: "",
    quantity: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnnqgjza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your inquiry has been submitted successfully. We'll contact you soon.",
        });
        setFormData({
          businessName: "",
          contactName: "",
          email: "",
          phone: "",
          location: "",
          businessType: "",
          products: "",
          quantity: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?auto=format&fit=crop&q=80)'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-center text-4xl font-bold md:text-5xl">
            Bulk Orders & Distribution
          </h1>
          <p className="mt-4 max-w-2xl text-center text-lg">
            Partner with us to bring sustainable agricultural solutions to farmers
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Partner with Us?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Types Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Who We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Distributors</CardTitle>
                <CardDescription>
                  Join our network of authorized distributors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Exclusive territory rights
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Marketing support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Technical training
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bulk Buyers</CardTitle>
                <CardDescription>
                  Direct supply for large-scale operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Competitive bulk pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Customized delivery schedules
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    On-site consultation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="container py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Submit Your Inquiry</CardTitle>
            <CardDescription>
              Fill out the form below and our team will get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Person</Label>
                  <Input
                    id="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type</Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, businessType: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distributor">Distributor</SelectItem>
                    <SelectItem value="wholesaler">Wholesaler</SelectItem>
                    <SelectItem value="retailer">Retailer</SelectItem>
                    <SelectItem value="farmer">Large Scale Farmer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="products">Interested Products</Label>
                <Select
                  value={formData.products}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, products: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select products" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRODUCTS.map((product) => (
                      <SelectItem key={product.id} value={product.name}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Estimated Monthly Quantity (in units)</Label>
                <Input
                  id="quantity"
                  type="number"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
