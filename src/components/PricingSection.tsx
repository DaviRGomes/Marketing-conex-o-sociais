import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface PricingSectionProps {
  onCtaClick: () => void;
}

const features = [
  "Acesso imediato a todo conteúdo",
  "Modelos prontos de laudos e pareceres",
  "Certificado de conclusão",
  "Suporte e comunidade exclusiva",
  "Atualizações vitalícias",
];

const PricingSection = ({ onCtaClick }: PricingSectionProps) => (
  <section className="py-20 px-4" id="pricing">
    <div className="container mx-auto max-w-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card-glass rounded-2xl p-8 sm:p-10 glow-gold border-primary/20 text-center"
      >
        <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-2">
          Oferta especial
        </p>
        <h2 className="font-display text-3xl sm:text-4xl tracking-wide mb-6">
          Investimento com <span className="text-gradient-gold">Desconto</span>
        </h2>

        <div className="mb-6">
          <p className="text-muted-foreground line-through text-lg">De R$ 997,00</p>
          <p className="font-display text-5xl sm:text-6xl text-gradient-gold mt-1">R$ 497</p>
          <p className="text-muted-foreground mt-2">ou 12x de R$ 49,70</p>
        </div>

        <ul className="space-y-3 text-left mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        <Button
          onClick={onCtaClick}
          size="lg"
          className="w-full bg-gradient-gold text-primary-foreground font-body font-bold text-lg py-6 rounded-lg animate-pulse-gold hover:scale-105 transition-transform"
        >
          QUERO MINHA VAGA AGORA
        </Button>

        <p className="text-xs text-muted-foreground mt-4">
          Pagamento 100% seguro • Acesso imediato
        </p>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
