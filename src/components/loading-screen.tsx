"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(
      () => setVisible(false),
      reduce ? 300 : 1200,
    );
    return () => clearTimeout(timer);
  }, [reduce]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduce ? 0.15 : 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/logo.png"
              alt="Bijlifix"
              width={1254}
              height={1254}
              priority
              className="h-44 w-44 object-contain sm:h-60 sm:w-60"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
