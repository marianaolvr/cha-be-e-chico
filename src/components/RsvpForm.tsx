import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const RsvpForm = () => {
  const [nome, setNome] = useState("");

  const handleConfirmar = () => {
    if (!nome.trim()) {
      toast.error("Por favor, digite seu nome.");
      return;
    }
    toast.success(`Obrigado, ${nome}! Sua presença foi confirmada.`);
    setNome("");
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-md mx-auto bg-card rounded-lg shadow-lg p-8 border border-border">
        <h2 className="text-2xl font-display font-bold text-center text-foreground mb-6">
          Confirme sua Presença
        </h2>
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="bg-background"
          />
          <Button onClick={handleConfirmar} size="lg" className="w-full">
            Confirmar Presença
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RsvpForm;
