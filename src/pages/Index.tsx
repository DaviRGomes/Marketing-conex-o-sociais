import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import CaptureModal from "@/components/CaptureModal";
import bgLegal from "@/assets/bg-legal.jpg";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLoadingComplete = useCallback(() => setLoading(false), []);
  const openModal = useCallback(() => setModalOpen(true), []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!loading && (
        <main className="min-h-screen relative">
          {/* Background image */}
          <div
            className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${bgLegal})` }}
          />
          <div className="fixed inset-0 z-0 bg-background/70" />
          <div className="relative z-10">
            <HeroSection onCtaClick={openModal} />
            <ProblemSection />
            <BenefitsSection />
            <PricingSection onCtaClick={openModal} />
            <CaptureModal open={modalOpen} onOpenChange={setModalOpen} />

            <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
              © {new Date().getFullYear()} — Todos os direitos reservados.
            </footer>
          </div>
        </main>
      )}
    </>
  );
};

export default Index;
