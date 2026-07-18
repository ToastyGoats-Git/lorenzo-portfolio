"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Presentation,
  BadgeCheck,
  X,
} from "lucide-react";

const certifications = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    year: "2024",
    image: "/Certificate 1.png",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    year: "2024",
    image: "/Certificate 2.png",
  },
  {
    title: "Interfacing with Arduino",
    issuer: "Coursera",
    year: "2026",
    image: "/Certificate 3.png",
  },
];

const seminars = [
  {
    title: "Artisan on Port 8000: Laravel Unlocked",
    organizer: "4th Year Students of CCIS - Mapua Malayan Colleges Laguna",
    year: "2025",
    image: "/Seminar 1.png",
  },
  {
    title: "Modern Technologies: Shaping the Future of Software Development and IT Operations",
    organizer: "4th Year Students of CCIS - Mapua Malayan Colleges Laguna",
    year: "2025",
    image: "/Seminar 2.png",
  },
  {
    title: "Harnessing Artificial Intelligence in Medicine",
    organizer: "College of Medicine - University of the Philippines Manila",
    year: "2025",
    image: "/Seminar 3.png",
  },
  {
    title: "Effective Prompting",
    organizer: "Florante Sangrenes",
    year: "2025",
    image: "/Seminar 4.png",
  },
];

type Selected = {
  title: string;
  subtitle: string;
  year: string;
  image: string;
} | null;

export default function Credentials() {
  const [selected, setSelected] = useState<Selected>(null);

  return (
    <div className="min-h-screen px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center text-4xl font-bold md:text-5xl">
            PROFESSIONAL CREDENTIALS
          </h1>

          <div className="mx-auto my-6 h-px w-48 bg-white/40" />

          <p className="mx-auto max-w-3xl text-center leading-relaxed text-white/70">
            A collection of certifications and seminars completed throughout my academic journey.
          </p>
        </motion.div>

        {/* Certifications */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Award size={34} className="text-[#92a7b5]" />

            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => {
              return (
                <motion.div
                  key={`${cert.title}-${index}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() =>
                    setSelected({
                      title: cert.title,
                      subtitle: cert.issuer,
                      year: cert.year,
                      image: cert.image,
                    })
                  }
                  className="group cursor-pointer rounded-xl border border-white/10 bg-[#1f262b] p-6 transition-all duration-300 hover:border-[#92a7b5] hover:shadow-[0_0_30px_rgba(146,167,181,0.15)]"
                >
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#151b1f] transition-all duration-300 group-hover:border-[#92a7b5]">
                      <BadgeCheck size={28} className="text-[#92a7b5]" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{cert.title}</h3>

                      <p className="mt-2 text-white/70">{cert.issuer}</p>

                      <span className="mt-5 inline-flex rounded-full border border-white/10 bg-[#151b1f] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#92a7b5]">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Seminars & Workshops */}
        <section className="mt-24">
          <div className="mb-8 flex items-center gap-3">
            <Presentation size={34} className="text-[#92a7b5]" />

            <h2 className="text-3xl font-bold">Seminars & Workshops</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {seminars.map((seminar, index) => (
              <motion.div
                key={`${seminar.title}-${index}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() =>
                  setSelected({
                    title: seminar.title,
                    subtitle: seminar.organizer,
                    year: seminar.year,
                    image: seminar.image,
                  })
                }
                className="group cursor-pointer rounded-xl border border-white/10 bg-[#1f262b] p-6 transition-all duration-300 hover:border-[#92a7b5] hover:shadow-[0_0_30px_rgba(146,167,181,0.15)]"
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#151b1f] transition-all duration-300 group-hover:border-[#92a7b5]">
                    <Presentation size={28} className="text-[#92a7b5]" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      {seminar.title}
                    </h3>

                    <p className="mt-2 text-white/70">
                      {seminar.organizer}
                    </p>

                    <span className="mt-5 inline-flex rounded-full border border-white/10 bg-[#151b1f] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#92a7b5]">
                      {seminar.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* View-only certificate/seminar modal — no download link, no new-tab open */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 backdrop-blur-sm sm:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-sm border border-white/10 bg-[#171d21] text-left"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                <div>
                  <h2 className="text-lg font-bold tracking-tight sm:text-xl">
                    {selected.title}
                  </h2>
                  <p className="mt-1 text-sm text-white/50">
                    {selected.subtitle} &middot; {selected.year}
                  </p>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="p-1 text-white/60 transition-colors hover:text-white"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* View-only image: no download attribute, no link out, drag/right-click deterred */}
              <div className="p-5 sm:p-7">
                <div
                  className="select-none border border-white/10"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selected.image}
                    alt={selected.title}
                    draggable={false}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}