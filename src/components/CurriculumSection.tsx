import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, PlayCircle } from "lucide-react";

const modules = [
  {
    number: "Módulo 1",
    title: "Instrumentação Técnica no Poder Judiciário: laudos, relatórios e pareceres",
    lessons: [
      "Aula 1 – Instrumentalidade profissional e a dimensão técnico-operativa do Serviço Social",
      "Aula 2 – Linguagens profissionais e a escrita técnica em Serviço Social",
      "Aula 3 – Requisições profissionais no Poder Judiciário e o Estudo Social",
      "Aula 4 – Elaborando Laudos, Relatórios e Pareceres Técnicos",
      "Aula 5 – Estudos de Caso em Laudos, Relatórios e Pareceres Técnicos",
      "Aula 6 – Reuniões, Visitas Institucionais, Correição, Inspeção e sistematização técnica profissional",
    ],
  },
  {
    number: "Módulo 2",
    title: "Produção Documental Técnico-Operativa na Rede Socioassistencial: elaboração de Relatórios, Laudos e Pareceres",
    lessons: [
      "Aula 1 – Inteligência Artificial, Instrumentalidade e Responsabilidade Técnico-Profissional",
      "Aula 2 – Estrutura Técnico-Argumentativa e Fundamentação Normativa do Documento",
      "Aula 3 – Fundamentação Normativa Aplicada: Demonstração de Critérios e Prova Técnica",
      "Aula 4 – Tipificação, Adequação do Serviço e Fundamentação Técnica da Indicação",
      "Aula 5 – Método Estruturante de Elaboração do Relatório Técnico",
      "Aula 6 – Laboratório de Uso Estratégico da Inteligência Artificial e Validação Técnico-Profissional",
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
          2 módulos de conteúdo programático com modelo de estruturas e percursos
          para elaboração de documentos no judiciário e na rede intersetorial.
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
