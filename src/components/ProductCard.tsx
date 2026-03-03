import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductCardProps {
  imagem: string;
  titulo: string;
  descricao: string;
  preco: number;
  linkPagamento: string;
}

const ProductCard = ({
  imagem,
  titulo,
  descricao,
  preco,
  linkPagamento,
}: ProductCardProps) => {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleComprar = () => {
    toast.loading("Redirecionando para o pagamento...");
    window.open(linkPagamento, "_blank");
  };

  return (
    <div className="bg-card rounded-lg shadow-md border border-border overflow-hidden flex flex-col animate-fade-in">
      <img
        src={imagem}
        alt={titulo}
        loading="lazy"
        className="w-full h-36 object-cover"
      />

      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-display font-semibold text-foreground mb-1">
          {titulo}
        </h3>

        <p className="text-xs text-muted-foreground mb-2 flex-1 line-clamp-2">
          {descricao}
        </p>

        <p className="text-base font-bold text-brand-dark mb-3">
          {precoFormatado}
        </p>

        <Button
          onClick={handleComprar}
          variant="default"
          size="sm"
          className="w-full text-xs"
        >
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;