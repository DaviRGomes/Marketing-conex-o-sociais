import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock } from "lucide-react";

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

// Countdown: termina em 24h a partir do primeiro acesso (salvo em sessionStorage)
function useCountdown() {
  const getTarget = () => {
    const stored = sessionStorage.getItem("oferta_deadline");
    if (stored) return parseInt(stored, 10);
    const target = Date.now() + 24 * 60 * 60 * 1000;
    sessionStorage.setItem("oferta_deadline", String(target));
    return target;
  };

  const calc = (target: number) => {
    const diff = Math.max(0, target - Date.now());
    return {
      h: Math.floor(diff / 3_600_000),
      m: Math.floor((diff % 3_600_000) / 60_000),
      s: Math.floor((diff % 60_000) / 1_000),
      expired: diff === 0,
    };
  };

  const [target] = useState(getTarget);
  const [time, setTime] = useState(calc(target));

  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

const Pad = ({ n }: { n: number }) => (
  <span className="font-display text-4xl sm:text-5xl text-gradient-gold tabular-nums">
    {String(n).padStart(2, "0")}
  </span>
);

const PricingSection = ({ onCtaClick }: PricingSectionProps) => {
  const { h, m, s, expired } = useCountdown();

  return (
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
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide mb-4">
            Investimento com <span className="text-gradient-gold">Desconto</span>
          </h2>

          {/* Countdown */}
          {!expired && (
            <div className="mb-6">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock className="w-4 h-4 text-accent" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Oferta expira em
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex flex-col items-center">
                  <Pad n={h} />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">horas</span>
                </div>
                <span className="font-display text-4xl text-primary mb-3">:</span>
                <div className="flex flex-col items-center">
                  <Pad n={m} />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">min</span>
                </div>
                <span className="font-display text-4xl text-primary mb-3">:</span>
                <div className="flex flex-col items-center">
                  <Pad n={s} />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">seg</span>
                </div>
              </div>
            </div>
          )}

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
            Pagamento 100% seguro • Acesso imediato • Garantia de 7 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
