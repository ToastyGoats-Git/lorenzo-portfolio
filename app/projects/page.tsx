"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  FolderGit2,
} from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "Placeholder 1.",
  },
  {
    title: "Project Two",
    description: "Placeholder 2.",
  },
  {
    title: "Project Three",
    description: "Placeholder 3.",
  },
  {
    title: "Project Four",
    description: "Placeholder 4.",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen px-6 sm:px-8 md:px-16 py-12 sm:py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">PROJECTS</h1>

      <div className="w-24 h-px bg-white/40 mx-auto mb-12"></div>

      <div className="flex items-center justify-center gap-4 sm:gap-8 max-w-3xl mx-auto">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-[#3d4e59] hover:bg-[#92a7b5] transition-colors duration-300"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#1f262b] rounded-lg p-10 flex flex-col items-center justify-center gap-4 min-h-[280px]"
            >
              <div className="w-14 h-14 rounded-full bg-[#3d4e59] flex items-center justify-center">
                <FolderGit2 size={26} className="text-[#92a7b5]" />
              </div>

              <h2 className="text-2xl font-bold">
                {projects[index].title}
              </h2>

              <p className="text-zinc-300 max-w-md">
                {projects[index].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-[#3d4e59] hover:bg-[#92a7b5] transition-colors duration-300"
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === index ? "bg-[#92a7b5]" : "bg-white/20"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}