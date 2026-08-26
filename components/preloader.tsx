"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const revealTimer = window.setTimeout(() => {
      document.body.dataset.preloaderComplete = "true";
      window.dispatchEvent(new Event("preloader-reveal"));
    }, 1250);

    return () => window.clearTimeout(revealTimer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            delay: 1.25,
            duration: 1.1,
            ease: [0.76, 0, 0.24, 1],
          }}
          onAnimationComplete={() => setIsVisible(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          aria-hidden="true"
        >
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-2xl font-medium tracking-tight text-[#1F2A1F] sm:text-3xl"
          >
            Bastien Andre
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
