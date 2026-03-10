import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative flex items-center py-16 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-wide mb-6"
            >
              Transforme sua atuação técnica em{" "}
              <span className="text-gradient-gold">
                DOCUMENTOS INCONTESTÁVEIS
              </span>
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              Domine a redação de laudos e pareceres com total segurança
              jurídica e ética no Judiciário e na Rede Intersetorial. Focado em
              Assistentes Sociais, Psicólogos e Profissionais do Judiciário.
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Button
                onClick={onCtaClick}
                size="lg"
                className="bg-gradient-gold text-primary-foreground font-body font-bold text-lg px-10 py-6 rounded-lg animate-pulse-gold hover:scale-105 transition-transform"
              >
                QUERO MINHA VAGA AGORA
              </Button>
            </motion.div>
          </div>

          {/* Video */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative aspect-video rounded-xl overflow-hidden glow-gold border border-primary/20"
          >
            <script src="https://stream.mux.com/TQRtqMWhbvg3V2FbqWzS9wb2R2ktVg4PIBv7pq6csB8.m3u8"></script>
            {/* Block pop-out button */}
            <div className="absolute top-0 right-0 w-14 h-14 z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
