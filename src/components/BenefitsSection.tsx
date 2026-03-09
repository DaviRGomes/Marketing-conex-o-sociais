import { motion } from "framer-motion";
import { Shield, Zap, FileText, Lock, Network, Award } from "lucide-react";

const pillars = [
  { icon: Shield, title: "Segurança Jurídica", desc: "Fundamentação técnica impecável em cada documento produzido." },
  { icon: Zap, title: "Agilidade", desc: "Método para escrita rápida e assertiva sem perder qualidade." },
  { icon: FileText, title: "Padronização", desc: "Modelos prontos para laudos e pareceres do Judiciário." },
  { icon: Lock, title: "Ética", desc: "Resguardo do sigilo e normas profissionais em cada etapa." },
  { icon: Network, title: "Intersetorialidade", desc: "Diálogo eficiente entre CRAS/CREAS e Judiciário." },
  { icon: Award, title: "Autoridade", desc: "Torne-se referência na elaboração de documentos técnicos." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const BenefitsSection = () => (
  <section className="py-20 px-4 relative" id="benefits">
    <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl text-center mb-4 tracking-wide"
      >
        Os <span className="text-gradient-gold">6 Pilares</span> do Curso
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
      >
        Uma formação completa para dominar cada aspecto da elaboração documental.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {pillars.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            className="bg-card-glass rounded-xl p-6 group hover:border-accent/40 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:glow-cyan transition-shadow">
              <p.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display text-xl mb-2 tracking-wide">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default BenefitsSection;
