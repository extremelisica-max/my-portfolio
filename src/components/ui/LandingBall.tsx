"use client";
import { motion } from "framer-motion";

export default function LandingBall() {
  return (
    <motion.circle
      cx={10}
      cy={76}
      r={7}
      fill="#F59958"
      style={{
        transformBox: "fill-box",
        transformOrigin: "50% 50%",
      }}
      animate={{
        x:      [0,   135,  135,  135,  0],
        scaleX: [1,   1,    1.4,  0.7,  1],
        scaleY: [1,   1,    0.6,  1.3,  1],
      }}
      transition={{
        duration: 2.8,
        times:    [0, 0.44, 0.50, 0.56, 1],
        ease:     "easeInOut",
        repeat:   Infinity,
        repeatDelay: 0.6,
      }}
    />
  );
}
