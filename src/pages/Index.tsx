import Banner from "@/components/Banner";
import RsvpForm from "@/components/RsvpForm";
import ProductGrid from "@/components/ProductGrid";
import { ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Banner />
      <h3 className="text-center text-lg font-semibold mb-4">29/03, 12h30</h3>
      <h4 className="text-center text-md font-medium mb-4">Rua Camargo, 411 - Butantã</h4>
      <RsvpForm />
      <div className="flex justify-center pb-6 animate-bounce">
        <ChevronDown className="text-brand-dark" size={32} strokeWidth={1.5} />
      </div>
      <ProductGrid />
      <footer className="py-8 text-center text-muted-foreground text-sm font-body">
        © 2026 - Mamães do Francisco e da Bethânia
      </footer>
    </div>
  );
};

export default Index;
