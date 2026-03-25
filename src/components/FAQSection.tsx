import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Para quem é este curso?",
    a: "O curso é voltado para Assistentes Sociais, Psicólogos e demais profissionais que atuam no Judiciário e na Rede Intersetorial (CRAS, CREAS, CAPS, abrigos, etc.) e precisam elaborar laudos e pareceres com segurança técnica e jurídica.",
  },
  {
    q: "Por quanto tempo terei acesso ao conteúdo?",
    a: "Seu acesso é vitalício. Uma vez matriculado, você pode assistir às aulas quantas vezes quiser, pelo tempo que precisar — inclusive recebe todas as atualizações futuras do material.",
  },
  {
    q: "O curso funciona no celular e tablet?",
    a: "Sim! A plataforma é totalmente responsiva e funciona em qualquer dispositivo — celular, tablet ou computador. Você estuda onde e quando quiser.",
  },
  {
    q: "Vou receber certificado?",
    a: "Sim. Ao concluir pelo menos 70% do curso, você recebe um certificado digital de conclusão para incluir no seu currículo e plataformas profissionais.",
  },
  {
    q: "Os modelos de documentos são personalizáveis?",
    a: "Sim. Todos os templates entregues no curso são em formato editável. Você pode adaptá-los para a realidade do seu serviço, município e tipo de caso.",
  },
  {
    q: "E se eu tiver dúvidas durante o curso?",
    a: "Você terá acesso à nossa comunidade exclusiva e suporte por e-mail. Dúvidas sobre o conteúdo são respondidas pela equipe da instrutora em até 48 horas úteis.",
  },
  {
    q: "Como funciona a garantia de 7 dias?",
    a: "Se por qualquer motivo você não ficar satisfeito nos primeiros 7 dias após a compra, basta enviar um e-mail solicitando o cancelamento e devolvemos 100% do valor pago, sem nenhuma pergunta.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative" id="faq">
      <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl text-center mb-4 tracking-wide"
        >
          Perguntas{" "}
          <span className="text-gradient-gold">frequentes</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-12"
        >
          Tire suas dúvidas antes de garantir sua vaga.
        </motion.p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card-glass rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="flex-1 font-body font-semibold text-sm sm:text-base text-foreground/90">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-foreground/70 leading-relaxed border-t border-border pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
