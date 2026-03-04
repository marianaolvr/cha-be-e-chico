import ProductCard from "./ProductCard";
import { produtos } from "@/data/products";

const ProductGrid = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center text-foreground mb-8">
          Lista de presentes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} {...produto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;