import Banner from "@/components/Banner";
import RsvpForm from "@/components/RsvpForm";
import ProductGrid from "@/components/ProductGrid";
import { ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Banner />
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
