import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

const RSVP_URL =
  "https://script.google.com/macros/s/AKfycbxH0dg0zgIJw6usxiDbrDPFKV7G2LwD0ygHskOzqBFjCyfuko4NyatQxg-n_60WQU6Q/exec";

// sugiro criar OUTRA URL para recadinhos (ou o mesmo script com action)
const RECADO_URL = "COLE_AQUI_A_URL_DO_WEBAPP_PARA_RECADOS";

const RsvpForm = () => {
  const [nome, setNome] = useState("");
  const [recadoNome, setRecadoNome] = useState("");
  const [recado, setRecado] = useState("");

  const handleConfirmar = () => {
    if (!nome.trim()) {
      toast.error("Por favor, digite seu nome.");
      return;
    }

    toast.success(`Obrigado, ${nome}! Sua presença foi confirmada.`);
    setNome("");

    fetch(RSVP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome }),
    });
  };

  const handleEnviarRecado = () => {
    if (!recado.trim()) {
      toast.error("Escreva um recadinho antes de enviar 🙂");
      return;
    }

    const nomeFinal = recadoNome.trim() || "Anônimo";

    toast.success("Recadinho enviado! 💛");
    setRecado("");
    setRecadoNome("");

    fetch(RECADO_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: nomeFinal, recado }),
    });
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

          <Accordion type="single" collapsible className="pt-2">
            <AccordionItem value="recado" className="border-none">
              <AccordionTrigger className="text-md hover:no-underline">
                💌 Deixe um recadinho pra gente (opcional)
              </AccordionTrigger>

              <AccordionContent>
                <div className="flex flex-col gap-3 p-2">
                  <Input
                    placeholder="Seu nome"
                    value={recadoNome}
                    onChange={(e) => setRecadoNome(e.target.value)}
                    className="bg-background"
                  />

                  <Textarea
                    placeholder="Escreva sua mensagem..."
                    value={recado}
                    onChange={(e) => setRecado(e.target.value)}
                    className="bg-background min-h-[96px]"
                    maxLength={300}
                  />

                  <div className="text-xs text-muted-foreground text-right">
                    {recado.length}/300
                  </div>

                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground"
                  >
                    Enviar mensagem
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default RsvpForm;
