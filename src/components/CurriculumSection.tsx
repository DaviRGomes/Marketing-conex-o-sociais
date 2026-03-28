import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, PlayCircle } from "lucide-react";

const modules = [
  {
    number: "Módulo 1",
    title: "Fundamentos Jurídicos dos Documentos Técnicos",
    lessons: [
      "O que é laudo e o que é parecer: diferenças fundamentais",
      "Base legal: Código de Ética e legislações pertinentes",
      "Responsabilidade profissional e sigilo documental",
      "Estrutura obrigatória de um documento técnico",
    ],
  },
  {
    number: "Módulo 2",
    title: "Metodologia de Coleta e Análise de Dados",
    lessons: [
      "Técnicas de entrevista e escuta qualificada",
      "Visita domiciliar: registros que protegem o profissional",
      "Análise de documentação e prontuários",
      "Como organizar as informações coletadas",
    ],
  },
  {
    number: "Módulo 3",
    title: "Redação Técnica no Judiciário",
    lessons: [
      "Linguagem técnica vs. linguagem jurídica",
      "Como fundamentar argumentos com segurança ética",
      "Erros mais comuns que comprometem a validade do documento",
      "Revisão e formatação final do documento",
    ],
  },
  {
    number: "Módulo 4",
    title: "Laudos para Casos de Alta Complexidade",
    lessons: [
      "Situações de violência doméstica e proteção de crianças",
      "Laudos em processos de guarda e adoção",
      "Documentos em casos de saúde mental e internação",
      "Parecer em medidas socioeducativas",
    ],
  },
  {
    number: "Módulo 5",
    title: "Intersetorialidade e Rede de Proteção",
    lessons: [
      "Comunicação entre CRAS, CREAS e Judiciário",
      "Como referenciar e contrarreferir com segurança",
      "Documentação em trabalho conjunto com outras equipes",
      "Modelo de ofício e relatório interinstitucional",
    ],
  },
  {
    number: "Módulo 6",
    title: "Modelos Práticos e Simulações Reais",
    lessons: [
      "Templates prontos para as principais situações",
      "Estudo de caso: da coleta à entrega do documento",
      "Simulação de defesa do laudo em audiência",
      "Banco de modelos atualizado com a jurisprudência atual",
    ],
  },
];

const CurriculumSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 relative" id="curriculum">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl text-center mb-4 tracking-wide"
        >
          O que você vai{" "}
          <span className="text-gradient-gold">aprender</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
        >
          {modules.length} módulos completos, do básico ao avançado, com modelos
          prontos para usar imediatamente.
        </motion.p>

        <div className="space-y-3">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card-glass rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-display text-sm text-gradient-gold shrink-0 whitespace-nowrap">
                  {mod.number}
                </span>
                <span className="font-display text-lg tracking-wide flex-1">
                  {mod.title}
                </span>
                <span className="text-xs text-muted-foreground mr-2 shrink-0">
                  {mod.lessons.length} aulas
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
                    <ul className="px-5 pb-5 space-y-2 border-t border-border pt-4">
                      {mod.lessons.map((lesson) => (
                        <li key={lesson} className="flex items-start gap-3 text-sm text-foreground/70">
                          <PlayCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <BookOpen className="w-4 h-4 text-accent" />
          <span>
            {modules.reduce((acc, m) => acc + m.lessons.length, 0)} aulas no total
            • Acesso vitalício • Certificado incluso
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumSection;
