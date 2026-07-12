"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Download, ScrollText, X } from "lucide-react";

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

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 md:px-16 py-12 sm:py-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
        {/* Placeholder for photo */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.6}
          variants={fadeUp}
          className="w-56 h-72 sm:w-72 sm:h-96 bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-400 order-2 md:order-1"
        >
          Photo
        </motion.div>

        {/* Intro Text */}
        <div className="flex flex-col gap-4 max-w-md text-center md:text-left items-center md:items-start order-1 md:order-2">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold"
          >
            HELLO WORLD! I'M LORENZO!{" "}
            <Rocket size={28} className="inline text-[#92a7b5] -mt-1" />
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            className="text-lg sm:text-xl text-zinc-300"
          >
            Information Technology Student
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-4"
          >
            <a
              href="/Resume-Okol_Lorenzo_T.pdf"
              download
              className="flex items-center gap-2 bg-[#3d4e59] hover:bg-[#92a7b5] text-white px-5 py-2 rounded-md font-medium transition-colors duration-300"
            >
              <Download size={18} />
              Download My Résumé
            </a>

            <button
              onClick={() => setShowAbout(true)}
              className="flex items-center gap-2 bg-[#3d4e59] hover:bg-[#92a7b5] text-white px-5 py-2 rounded-md font-medium transition-colors duration-300"
            >
              <ScrollText size={18} />
              About Me
            </button>
          </motion.div>
        </div>
      </main>

      {/* About Me Modal */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="bg-[#1f262b] text-white rounded-lg max-w-lg w-full p-6 sm:p-10 relative max-h-[85vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{
                duration: 0.3,
                ease: "easeOut" as const,
              }}
            >
              <button
                onClick={() => setShowAbout(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl transition-colors"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
                ABOUT ME
              </h2>

              <div className="w-24 h-1 bg-[#92a7b5] mx-auto mb-6"></div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 text-center">
                Hello! I'm Lorenzo Okol, a student currently pursuing a degree
                in Information Technology at Mapúa Malayan Colleges Laguna. I
                have hands-on experience across C#, HTML, CSS, JavaScript,
                Kotlin, and MySQL, with a strong foundation built through
                academic projects like PlanterAid, a sensor-integrated farm
                monitoring dashboard, and Arithmetic Arena, an RPG-style Android
                quiz game. I'm motivated to grow as a well-rounded developer and
                contribute to real-world software teams.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
                SKILLS
              </h2>

              <div className="w-24 h-1 bg-[#92a7b5] mx-auto mb-6"></div>

              <div className="text-sm sm:text-base text-zinc-300 text-center space-y-2">
                <p>
                  <span className="font-semibold text-white">
                    Professional:
                  </span>{" "}
                  C#, HTML & CSS, MySQL, PHP, JavaScript, Kotlin, Visual Studio
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Personal:
                  </span>{" "}
                  Time Management, Communication Skills, Critical Thinking,
                  Willingness to Learn, Adaptability
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Certifications:
                  </span>{" "}
                  CompTIA Tech+, CCNA (Introduction to Networks), CCNA
                  (Switching, Routing, and Wireless Essentials)
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Languages:
                  </span>{" "}
                  English, Filipino
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}