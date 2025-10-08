import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Home } from "@/pages/home";
import { About } from "@/pages/about";
import AgroSales from "@/pages/agro-sales";
import {Catalogue} from "@/pages/catalogue";
import {Products} from "@/pages/products";
import {Results} from "@/pages/results";
import SampleOrders from "@/pages/sample-orders";
import Contact from "@/pages/contact";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="microbial-theme">
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/results" element={<Results />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/samples" element={<SampleOrders />} />
              <Route path="/bulk-sales" element={<AgroSales />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
