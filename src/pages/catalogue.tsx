import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileDown } from 'lucide-react';
import { CATALOGUES } from '@/lib/constants';
import { useEffect } from 'react';
import productImage1 from '@/assets/images/banners/cat1.jpg';
import productImage2 from '@/assets/images/banners/cat2.jpg';


// const categories = Array.from(new Set(PRODUCTS.map((product) => product.category)));

export function Catalogue() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');

//   const filteredProducts = PRODUCTS.filter((product) => {
//     const matchesSearch = product.name
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h1 className="text-center text-4xl font-bold md:text-5xl">
            Product Catalogues
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            Download our comprehensive product catalogues and technical
            documentation
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="flex justify-center gap-8">
            <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <img
                src={productImage1}
                alt="Product Overview 1"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <img
                src={productImage2}
                alt="Product Overview 2"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Downloads */}
      <section className="py-16 pt-4">
        <div className="container">
          <h2 className="text-2xl font-bold">Available Catalogues</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {CATALOGUES.map((catalogue) => (
              <Card key={catalogue.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileDown className="mr-2 h-5 w-5" />
                    {catalogue.title}
                  </CardTitle>
                  <CardDescription>{catalogue.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    File size: {catalogue.fileSize}
                  </p>
                  <Button className="w-full" onClick={() => window.open(catalogue.url)}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Browser */}
      {/* <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-2xl font-bold">Browse Products</h2>
          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Card key={product.id}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}