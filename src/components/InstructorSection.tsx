import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, Users, BookMarked } from "lucide-react";

const stats = [
  { icon: Users, value: "+2.000", label: "Alunos formados" },
  { icon: GraduationCap, value: "10+", label: "Anos de experiência" },
  { icon: BookMarked, value: "500+", label: "Documentos elaborados" },
  { icon: BadgeCheck, value: "100%", label: "Aprovação nas avaliações" },
];

const InstructorSection = () => (
  <section className="py-20 px-4 relative" id="instructor">
    <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl text-center mb-4 tracking-wide"
      >
        Quem vai te{" "}
        <span className="text-gradient-gold">ensinar</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
      >
        Aprenda com quem vive na prática o que ensina.
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-card-glass glow-gold border border-primary/20 overflow-hidden flex items-center justify-center">
              {/* Placeholder — substitua por <img src="foto-instrutora.jpg" ... /> */}
              <div className="text-center px-6">
                <GraduationCap className="w-20 h-20 text-primary/40 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">
                  Adicione a foto da instrutora aqui
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-2 rounded-lg shadow-lg">
              Especialista Judiciária
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-display text-3xl sm:text-4xl text-gradient-gold mb-1 tracking-wide">
            {/* ← Substitua pelo nome da instrutora */}
            Nome da Instrutora
          </h3>
          <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-widest">
            Assistente Social • Especialista em Documentação Judiciária
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            {/* ← Substitua pela bio real */}
            Com mais de 10 anos de atuação no Sistema de Justiça e na Rede de
            Proteção Social, já elaborou centenas de laudos e pareceres em
            casos de alta complexidade. Formou milhares de profissionais em
            todo o Brasil a produzirem documentos com segurança jurídica,
            ética e clareza técnica.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Acredita que um bom documento não é apenas uma exigência burocrática
            — é a voz do profissional técnico dentro do sistema judiciário.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card-glass rounded-xl p-4 flex items-center gap-3">
                <s.icon className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <p className="font-display text-xl text-gradient-gold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default InstructorSection;
