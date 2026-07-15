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
    title: "TicketingBros",
    description:
      "A web-based movie ticketing system built using ASP.NET Web Forms and C# with an MS Access database. The system handles seat selection, checkout, payment detail capture, and booking confirmation, with client- and server-side validation and duplicate-booking prevention.",
    technologies: ["ASP.NET", "C#", "MS Access", "JavaScript"],
    images: [
      "/TicketingBros 1.png",
      "/TicketingBros 2.png",
      "/TicketingBros 3.png",
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
    title: "PlanterAid",
    description:
      "An IoT-integrated web-based multi-zone farm monitoring system built for Promised Land Farm's pineapple fields in Santo Tomas, Batangas. The system tracks soil moisture, temperature, humidity, and GPS-mapped zones in real time, delivering SMS alerts and actionable recommendations through an interactive dashboard.",
    technologies: [".NET Blazor", "MySQL", "Rest API", "SmarterASP.NET"],
    images: [
      "/PlanterAid 1.png",
      "/PlanterAid 2.png",
      "/PlanterAid 3.png",
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

      {/* Carousel: buttons sit inline on mobile, float outside the card from sm up.
         Width grows at md/lg only, so mobile layout is untouched. */}
      <div className="relative max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto flex items-center gap-2 sm:gap-0">
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
              className="group relative overflow-hidden cursor-pointer bg-[#1f262b] hover:bg-[#252e35] transition-colors duration-300 rounded-lg p-6 sm:p-10 lg:p-14 flex flex-col items-center justify-center gap-4 min-h-[240px] sm:min-h-[280px] lg:min-h-[340px]"
            >
              {/* Blurred preview image, fades in on hover (desktop only, no effect on touch) */}
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center scale-110 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundImage: `url('${projects[index].images[0]}')` }}
              />
              {/* Dark overlay to keep text legible over the preview */}
              <div className="pointer-events-none absolute inset-0 bg-[#1f262b]/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#3d4e59] flex items-center justify-center">
                <FolderGit2 size={26} className="text-[#92a7b5] lg:w-8 lg:h-8" />
              </div>

              <h2 className="relative z-10 text-xl sm:text-2xl lg:text-3xl font-bold">
                {projects[index].title}
              </h2>

              <p className="relative z-10 text-zinc-300 max-w-md lg:max-w-lg text-sm sm:text-base lg:text-lg">
                {projects[index].description}
              </p>

              <p className="relative z-10 text-sm text-[#92a7b5] mt-2">
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-3 sm:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-[#171d21] border border-white/10 rounded-sm p-0 max-w-3xl w-full max-h-[90vh] overflow-y-auto text-left"
            >
              {/* Header bar: title left, close button right, hairline divider below */}
              <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                  {projects[selectedProject].title}
                </h2>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 text-white/60 hover:text-white transition-colors"
                  aria-label="Close project"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-5 sm:p-7">
                {/* Hero screenshot, sharp corners, thin border */}
                <div className="border border-white/10">
                  <img
                    src={projects[selectedProject].images[imageIndex]}
                    alt={`${projects[selectedProject].title} screenshot ${
                      imageIndex + 1
                    }`}
                    className="w-full aspect-video object-cover"
                  />
                </div>

                {/* Filmstrip: tight gaps, square corners, active thumb outlined */}
                <div className="flex gap-1 mt-1.5">
                  {projects[selectedProject].images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setImageIndex(i)}
                      className={`relative flex-1 aspect-video overflow-hidden border transition-colors ${
                        i === imageIndex
                          ? "border-[#66c0f4]"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-end gap-3 mt-2 text-xs text-white/50">
                  <button
                    onClick={prevImage}
                    className="hover:text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span>
                    {imageIndex + 1} / {projects[selectedProject].images.length}
                  </span>
                  <button
                    onClick={nextImage}
                    className="hover:text-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Left-aligned info block, hairline divider above tags */}
                <p className="text-white/70 leading-relaxed text-sm mt-6">
                  {projects[selectedProject].description}
                </p>

                <div className="border-t border-white/10 mt-6 pt-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-3">
                    Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}