import { motion } from "framer-motion";
import { ShieldAlert, AlertTriangle, Clock } from "lucide-react";

const problems = [
  {
    icon: ShieldAlert,
    title: "Insegurança ao assinar documentos",
    description:
      "Medo de assinar relatórios e laudos sem a certeza de que a fundamentação está correta e completa.",
  },
  {
    icon: AlertTriangle,
    title: "Medo de falhas éticas",
    description:
      "Receio de violar sigilo profissional ou normas do Código de Ética ao redigir pareceres sensíveis.",
  },
  {
    icon: Clock,
    title: "Pressão por prazos e fundamentação",
    description:
      "Demandas urgentes do Judiciário exigem documentos bem fundamentados em prazos cada vez mais curtos.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProblemSection = () => (
  <section className="py-12 px-4">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl text-center mb-4 tracking-wide"
      >
        Você se identifica com alguns desses <span className="text-gradient-gold">Desafios</span>?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
      >
        Milhares de profissionais enfrentam esses desafios diariamente. Você não está sozinho(a).
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {problems.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            className="bg-card-glass rounded-xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl mb-2 tracking-wide">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
