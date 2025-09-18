import React from "react";
import { motion } from "framer-motion";

const SmokeTransition = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.35 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        background: `
          radial-gradient(circle at top left, rgba(255,255,255,0.15) 15%, transparent 60%),
          radial-gradient(circle at top right, rgba(255,255,255,0.15) 15%, transparent 60%),
          radial-gradient(circle at bottom left, rgba(255,255,255,0.15) 15%, transparent 60%),
          radial-gradient(circle at bottom right, rgba(255,255,255,0.15) 15%, transparent 60%)
        `,
        zIndex: 10,
        mixBlendMode: "screen",
      }}
    />
  );
};

export default SmokeTransition;
