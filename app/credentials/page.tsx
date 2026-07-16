"use client";

import { motion } from "framer-motion";
import {
  Award,
  Presentation,
  ShieldCheck,
  BadgeCheck,
  FileBadge,
} from "lucide-react";

const certifications = [
  {
    title: "Placeholder",
    issuer: "Placeholder",
    year: "202x",
  },
  {
    title: "Placeholder",
    issuer: "Placeholder",
    year: "202x",
  },
  {
    title: "Placeholder",
    issuer: "Placeholder",
    year: "202x",
  },
];

const seminars = [
  {
    title: "Placeholder",
    organizer: "Placeholder",
    year: "202x",
  },
  {
    title: "Placeholder",
    organizer: "Placeholder",
    year: "202x",
  },
  {
    title: "Placeholder",
    organizer: "Placeholder",
    year: "202x",
  },
];

const icons = [ShieldCheck, BadgeCheck, FileBadge];

export default function Credentials() {
  return (
    <div className="min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            PROFESSIONAL CREDENTIALS
          </h1>

          <div className="w-48 h-px bg-white/40 mx-auto my-6"></div>

          <p className="text-center text-white/70 max-w-3xl mx-auto leading-relaxed">
            A collection of certifications and seminars.
          </p>
        </motion.div>

        {/* Certifications */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Award
              size={34}
              className="text-[#92a7b5]"
            />

            <h2 className="text-3xl font-bold">
              Certifications
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => {
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={`${cert.title}-${index}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="group rounded-xl border border-white/10 bg-[#1f262b] p-6 transition-all duration-300 hover:border-[#92a7b5] hover:shadow-[0_0_30px_rgba(146,167,181,0.15)]"
                >
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#151b1f] transition-all duration-300 group-hover:border-[#92a7b5]">
                      <Icon
                        size={28}
                        className="text-[#92a7b5]"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">
                        {cert.title}
                      </h3>

                      <p className="mt-2 text-white/70">
                        {cert.issuer}
                      </p>

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
          <div className="flex items-center gap-3 mb-8">
            <Presentation
              size={34}
              className="text-[#92a7b5]"
            />

            <h2 className="text-3xl font-bold">
              Seminars & Workshops
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {seminars.map((seminar, index) => (
              <motion.div
                key={`${seminar.title}-${index}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="group rounded-xl border border-white/10 bg-[#1f262b] p-6 transition-all duration-300 hover:border-[#92a7b5] hover:shadow-[0_0_30px_rgba(146,167,181,0.15)]"
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#151b1f] transition-all duration-300 group-hover:border-[#92a7b5]">
                    <Presentation
                      size={28}
                      className="text-[#92a7b5]"
                    />
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
    </div>
  );
}