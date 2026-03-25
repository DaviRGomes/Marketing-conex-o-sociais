import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-16 px-4 relative" id="guarantee">
    <div className="container mx-auto max-w-3xl relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card-glass rounded-2xl p-8 sm:p-10 border border-primary/20 glow-gold flex flex-col sm:flex-row items-center gap-8"
      >
        {/* Ícone */}
        <div className="shrink-0 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center glow-gold">
            <ShieldCheck className="w-12 h-12 text-primary" />
          </div>
          <p className="font-display text-2xl text-gradient-gold mt-2 tracking-wide">7 DIAS</p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">de garantia</p>
        </div>

        {/* Texto */}
        <div>
          <h2 className="font-display text-2xl sm:text-3xl tracking-wide mb-3">
            Satisfação{" "}
            <span className="text-gradient-gold">garantida ou seu dinheiro de volta</span>
          </h2>
          <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
            Se nos primeiros <strong>7 dias</strong> após a compra você sentir que o curso não
            era o que esperava, basta enviar um e-mail e devolvemos 100% do seu
            investimento. Sem perguntas, sem burocracia.
          </p>
          <p className="text-muted-foreground text-sm mt-3">
            Sua decisão de investir em conhecimento é livre de risco. Acreditamos
            tanto no conteúdo que assumimos todo o risco por você.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
