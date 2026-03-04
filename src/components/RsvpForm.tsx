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

const MESSAGE_URL = "https://script.google.com/macros/s/AKfycbxxXeUTNrQZtkRTxGrOcM-chxGVf5n6XtLCG5dQJrXuV8JEYqVPULA_1tu9koOzdfi65w/exec";

const RsvpForm = () => {
  const [nome, setNome] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
    if (!message.trim()) {
      toast.error("Escreva um recadinho antes de enviar 🙂");
      return;
    }

    const trimmedName = name.trim() || "Anônimo";

    toast.success("Recadinho enviado! 💛");
    setMessage("");
    setName("");

    fetch(MESSAGE_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: trimmedName, mensagem: message }),
    });
  };

  return (
    <section className="pb-12 pt-6 px-4">
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
            <AccordionItem value="mensagem" className="border-none">
              <AccordionTrigger className="text-md hover:no-underline">
                💌 Deixe um recadinho pra gente (opcional)
              </AccordionTrigger>

              <AccordionContent>
                <div className="flex flex-col gap-3 p-2">
                  <Input
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-background"
                  />

                  <Textarea
                    placeholder="Escreva sua mensagem..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-background min-h-[96px]"
                    maxLength={300}
                  />

                  <div className="text-xs text-muted-foreground text-right">
                    {message.length}/300
                  </div>

                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground"
                    onClick={handleEnviarRecado}
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
