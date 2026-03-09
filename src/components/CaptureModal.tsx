import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, ExternalLink, X } from "lucide-react";
import { z } from "zod";

interface CaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const invalidTlds = [".con", ".cmo", ".coom", ".gmil"];

const schema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(255)
    .refine(
      (val) => !invalidTlds.some((tld) => val.toLowerCase().endsWith(tld)),
      "E-mail com domínio inválido"
    ),
  phone: z
    .string()
    .trim()
    .min(14, "Telefone incompleto")
    .max(15),
});

function phoneMask(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const CaptureModal = ({ open, onOpenChange }: CaptureModalProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    const val = field === "phone" ? phoneMask(value) : value;
    setForm((prev) => ({ ...prev, [field]: val }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  const checkoutUrl = `https://pay.kiwify.com.br/2CBorQ6?name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}&phone=${encodeURIComponent(form.phone)}`;

  const handleClose = (val: boolean) => {
    if (!val) {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "" });
      setErrors({});
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-card border-border sm:max-w-md p-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 space-y-5"
            >
              <div>
                <h3 className="font-display text-2xl tracking-wide text-gradient-gold">
                  Garanta sua vaga
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Preencha seus dados para continuar.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground/80 text-sm">Nome completo</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Seu nome"
                    className="mt-1 bg-secondary border-border focus:ring-primary"
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground/80 text-sm">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="mt-1 bg-secondary border-border focus:ring-primary"
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground/80 text-sm">Telefone</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(99) 99999-9999"
                    className="mt-1 bg-secondary border-border focus:ring-primary"
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-gold text-primary-foreground font-body font-bold py-5 rounded-lg hover:scale-[1.02] transition-transform"
              >
                CONTINUAR
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-6 sm:p-8 text-center space-y-6"
            >
              <div>
                <h3 className="font-display text-2xl tracking-wide text-gradient-gold">
                  Quase lá, {form.name.split(" ")[0]}!
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Entre no grupo VIP e finalize sua inscrição.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="https://chat.whatsapp.com/CcNVzvmfKBL9lcY3Imi4Od"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-foreground font-body font-bold py-5 rounded-lg gap-2">
                    <MessageCircle className="w-5 h-5" />
                    ENTRAR NO GRUPO VIP
                  </Button>
                </a>

                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-gradient-gold text-primary-foreground font-body font-bold py-5 rounded-lg animate-pulse-gold gap-2">
                    <ExternalLink className="w-5 h-5" />
                    IR PARA CHECKOUT
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default CaptureModal;
