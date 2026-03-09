import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 font-display text-2xl tracking-wider text-gradient-gold"
      >
        Consolidando fundamentos técnicos...
      </motion.p>
      <div className="w-64 h-1.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-gold"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <p className="mt-3 text-sm text-muted-foreground font-body">{progress}%</p>
    </motion.div>
  );
};

export default LoadingScreen;
