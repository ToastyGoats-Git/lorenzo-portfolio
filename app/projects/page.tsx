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
    <div className="min-h-screen px-6 sm:px-8 md:px-16 py-12 sm:py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">PROJECTS</h1>

      <div className="w-24 h-px bg-white/40 mx-auto mb-12"></div>

      <div className="relative max-w-3xl mx-auto">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 rounded-full bg-[#3d4e59] hover:bg-[#92a7b5] transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>

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
            className="cursor-pointer bg-[#1f262b] hover:bg-[#252e35] transition-all duration-300 hover:scale-[1.02] rounded-lg p-10 flex flex-col items-center justify-center gap-4 min-h-[280px]"
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

            <p className="text-sm text-[#92a7b5] mt-2">
              Click to view more
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 rounded-full bg-[#3d4e59] hover:bg-[#92a7b5] transition-colors"
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.25 }}
              className="relative bg-[#1f262b] rounded-xl p-8 max-w-3xl w-full"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5"
                aria-label="Close project"
              >
                <X />
              </button>

              <h2 className="text-3xl font-bold mb-8">
                {projects[selectedProject].title}
              </h2>

              <div className="relative flex items-center justify-center mb-8">
                <button
                  onClick={prevImage}
                  className="absolute left-0 p-2 rounded-full bg-[#3d4e59] hover:bg-[#92a7b5] transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft />
                </button>

                <img
                  src={projects[selectedProject].images[imageIndex]}
                  alt={`${projects[selectedProject].title} screenshot ${
                    imageIndex + 1
                  }`}
                  className="rounded-lg w-full max-w-xl h-72 object-cover"
                />

                <button
                  onClick={nextImage}
                  className="absolute right-0 p-2 rounded-full bg-[#3d4e59] hover:bg-[#92a7b5] transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight />
                </button>
              </div>

              <div className="flex justify-center gap-2 mb-8">
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

              <p className="text-zinc-300 leading-relaxed mb-8">
                {projects[selectedProject].description}
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Technologies Used
                </h3>

                <div className="flex flex-wrap gap-3 justify-center">
                  {projects[selectedProject].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-[#3d4e59] text-sm"
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