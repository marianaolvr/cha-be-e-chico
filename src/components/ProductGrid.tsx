import ProductCard from "./ProductCard";

const produtos = [
  {
    imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
    titulo: "Cesta de Café da Manhã",
    descricao: "Uma linda cesta recheada com pães, frutas, geleias e muito carinho.",
    preco: "R$ 189,90",
  },
  {
    imagem: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=400&h=300&fit=crop",
    titulo: "Arranjo de Flores",
    descricao: "Arranjo especial com flores frescas e cores vibrantes para decorar.",
    preco: "R$ 129,90",
  },
  {
    imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    titulo: "Bolo Personalizado",
    descricao: "Bolo artesanal decorado com tema à sua escolha. Sabor incrível!",
    preco: "R$ 249,90",
  },
  {
    imagem: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=300&fit=crop",
    titulo: "Kit Doces Finos",
    descricao: "50 unidades de doces finos variados, perfeitos para qualquer celebração.",
    preco: "R$ 159,90",
  },
  {
    imagem: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
    titulo: "Decoração Completa",
    descricao: "Pacote de decoração com balões, faixas e itens temáticos.",
    preco: "R$ 349,90",
  },
  {
    imagem: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=300&fit=crop",
    titulo: "Bebidas Premium",
    descricao: "Seleção de bebidas especiais para brindar os melhores momentos.",
    preco: "R$ 199,90",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center text-foreground mb-8">
          Presentes & Produtos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtos.map((produto) => (
            <ProductCard key={produto.titulo} {...produto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
