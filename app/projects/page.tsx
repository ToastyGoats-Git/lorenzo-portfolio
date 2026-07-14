"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  FolderGit2,
  X,
} from "lucide-react";

const projects = [
  {
    title: "4 Pics 1 Word",
    description:
      "A desktop puzzle word game in Python using Tkinter, inspired by the popular mobile game 4 Pics 1 Word.",
    technologies: ["Python", "Tkinter"],
    images: [
      "/4pic1word 1.png",
      "/4pic1word 2.png",
      "/4pic1word 3.png",
    ],
  },
  {
    title: "Project Two",
    description:
      "Placeholder description for Project Two. This will contain the overview and key features of the project.",
    technologies: ["Placeholder", "Placeholder", "Placeholder"],
    images: [
      "/placeholder.png",
      "/placeholder.png",
      "/placeholder.png",
    ],
  },
  {
    title: "Project Three",
    description:
      "Placeholder description for Project Three. This will contain the overview and key features of the project.",
    technologies: ["Placeholder", "Placeholder", "Placeholder"],
    images: [
      "/placeholder.png",
      "/placeholder.png",
      "/placeholder.png",
    ],
  },
  {
    title: "Project Four",
    description:
      "Placeholder description for Project Four. This will contain the overview and key features of the project.",
    technologies: ["Placeholder", "Placeholder", "Placeholder"],
    images: [
      "/placeholder.png",
      "/placeholder.png",
      "/placeholder.png",
    ],
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const restartTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
  };

  useEffect(() => {
    restartTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
    restartTimer();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    restartTimer();
  };

  const nextImage = () => {
    if (selectedProject === null) return;

    setImageIndex(
      (prev) => (prev + 1) % projects[selectedProject].images.length
    );
  };

  const prevImage = () => {
    if (selectedProject === null) return;

    setImageIndex(
      (prev) =>
        (prev - 1 + projects[selectedProject].images.length) %
        projects[selectedProject].images.length
    );
  };

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 py-12 sm:py-20 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">PROJECTS</h1>

      <div className="w-24 h-px bg-white/40 mx-auto mb-12"></div>

      {/* Carousel: buttons sit inline on mobile, float outside the card from sm up */}
      <div className="relative max-w-3xl mx-auto flex items-center gap-2 sm:gap-0">
        <button
          onClick={prev}
          className="shrink-0 p-2 rounded-full bg-[#3d4e59] hover:bg-[#92a7b5] transition-colors sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-12 md:-translate-x-16 z-10"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setSelectedProject(index);
                setImageIndex(0);
              }}
              className="cursor-pointer bg-[#1f262b] hover:bg-[#252e35] transition-all duration-300 hover:scale-[1.02] rounded-lg p-6 sm:p-10 flex flex-col items-center justify-center gap-4 min-h-[240px] sm:min-h-[280px]"
            >
              <div className="w-14 h-14 rounded-full bg-[#3d4e59] flex items-center justify-center">
                <FolderGit2 size={26} className="text-[#92a7b5]" />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold">
                {projects[index].title}
              </h2>

              <p className="text-zinc-300 max-w-md text-sm sm:text-base">
                {projects[index].description}
              </p>

              <p className="text-sm text-[#92a7b5] mt-2">
                Click to view more
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          className="shrink-0 p-2 rounded-full bg-[#3d4e59] hover:bg-[#92a7b5] transition-colors sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-12 md:translate-x-16 z-10"
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              restartTimer();
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === index ? "bg-[#92a7b5]" : "bg-white/20"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-3 sm:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.25 }}
              className="relative bg-[#1f262b] rounded-xl p-5 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1 rounded-full bg-[#3d4e59]/60 hover:bg-[#92a7b5] transition-colors"
                aria-label="Close project"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pr-8">
                {projects[selectedProject].title}
              </h2>

              <div className="relative flex items-center justify-center gap-2 mb-6 sm:mb-8">
                <button
                  onClick={prevImage}
                  className="shrink-0 p-1.5 sm:p-2 rounded-full bg-[#3d4e59] hover:bg-[#92a7b5] transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>

                <img
                  src={projects[selectedProject].images[imageIndex]}
                  alt={`${projects[selectedProject].title} screenshot ${
                    imageIndex + 1
                  }`}
                  className="rounded-lg w-full max-w-xl h-48 sm:h-72 object-cover"
                />

                <button
                  onClick={nextImage}
                  className="shrink-0 p-1.5 sm:p-2 rounded-full bg-[#3d4e59] hover:bg-[#92a7b5] transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex justify-center gap-2 mb-6 sm:mb-8">
                {projects[selectedProject].images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImageIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === imageIndex
                        ? "bg-[#92a7b5]"
                        : "bg-white/20"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>

              <p className="text-zinc-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {projects[selectedProject].description}
              </p>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  Technologies Used
                </h3>

                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {projects[selectedProject].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#3d4e59] text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}