import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductCardProps {
  imagem: string;
  titulo: string;
  descricao: string;
  preco: string;
}

const ProductCard = ({ imagem, titulo, descricao, preco }: ProductCardProps) => {
  const handlePix = () => {
    toast.info(`Pagamento via PIX para "${titulo}" — em breve você receberá o QR Code.`);
  };

  const handleCartao = () => {
    toast.info(`Pagamento via Cartão para "${titulo}" — redirecionando...`);
  };

  return (
    <div className="bg-card rounded-lg shadow-md border border-border overflow-hidden flex flex-col animate-fade-in">
      <img src={imagem} alt={titulo} className="w-full h-36 object-cover" />
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-display font-semibold text-foreground mb-1">{titulo}</h3>
        <p className="text-xs text-muted-foreground mb-2 flex-1 line-clamp-2">{descricao}</p>
        <p className="text-base font-bold text-brand-dark mb-3">{preco}</p>
        <div className="flex flex-col gap-2">
          <Button onClick={handlePix} variant="default" size="sm" className="w-full text-xs">
            Pagar com PIX
          </Button>
          <Button onClick={handleCartao} variant="outline" size="sm" className="w-full text-xs">
            Cartão de Crédito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
