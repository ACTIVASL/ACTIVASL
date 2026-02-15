import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.99 }} // Subtle scale for depth
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.99 }}
      transition={{
        duration: 0.4,
        ease: [0.2, 0, 0.2, 1] // "Liquid" easing (Quintic/Expo ish)
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};
