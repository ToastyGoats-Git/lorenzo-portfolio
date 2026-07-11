"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: -20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay,
    },
  }),
};

export default function Contact() {
  return (
    <div className="min-h-screen px-16 py-20 text-center">
      <motion.h1
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
        className="text-4xl font-bold mb-4"
      >
        CONTACT ME
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        custom={0.15}
        variants={fadeUp}
        className="flex items-center justify-center gap-4 mb-8"
      >
        <div className="w-24 h-px bg-white/40"></div>
        <Mail size={22} className="text-[#92a7b5]" />
        <div className="w-24 h-px bg-white/40"></div>
      </motion.div>

      <motion.p
        initial="hidden"
        animate="visible"
        custom={0.3}
        variants={fadeUp}
        className="text-zinc-300 max-w-xl mx-auto mb-10 leading-relaxed"
      >
        I'd love to hear from you! Whether you have a question, an
        opportunity, or just want to connect, feel free to reach out.
        I'm always open to conversations and I'll do my best to get back to you
        as soon as I can.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        custom={0.45}
        variants={fadeUp}
        className="flex items-center justify-center gap-4"
      >
        <a
          href="mailto:enzo1014.okol@gmail.com"
          className="flex items-center gap-2 bg-[#3d4e59] hover:bg-[#92a7b5] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
        >
          <Mail size={18} />
          GMail
        </a>
      </motion.div>
    </div>
  );
}