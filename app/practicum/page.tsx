"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ClipboardList,
  Clock,
  CheckCircle2,
  Gamepad2,
} from "lucide-react";

const sections = [
  {
    title: "COMPANY OVERVIEW",
    icon: Building2,
    content:
      "Kooapps Philippines Corporation is a mobile game development company known for casual and hyper-casual titles played by a global audience. The company focuses on rapid iteration, live-ops support, and maintaining a portfolio of games across multiple platforms.",
  },
  {
    title: "NATURE OF WORK / TASKS GIVEN",
    icon: ClipboardList,
    content:
      "As a QA Intern, I was responsible for scheduled and priority testing of app builds across multiple titles, ad verification, bug fix confirmation, and Google Play Pass (GPP) compliance testing. My work ensured builds met quality standards before release and that ad placements and behavior functioned correctly across devices.",
  },
  {
    title: "TOTAL HOURS RENDERED",
    icon: Clock,
    content:
      "Over the course of the internship, I rendered a total of 486 hours from April 20, 2026 to [X].",
  },
  {
    title: "CONCLUSION",
    icon: CheckCircle2,
    content:
      "This internship gave me hands-on experience in real-world QA workflows, from structured test cycles to compliance verification. It strengthened my attention to detail, my understanding of mobile app quality assurance, and prepared me to contribute effectively in a professional software testing environment.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Practicum() {
  return (
    <div className="min-h-screen px-16 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">
        INTERNSHIP AT KOOAPPS PHILIPPINES CORPORATION
      </h1>

      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-24 h-px bg-white/40"></div>
        <Gamepad2 size={22} className="text-[#92a7b5]" />
        <div className="w-24 h-px bg-white/40"></div>
      </div>

      <a
        href="/Final Report Practicum - Okol.pdf"
        download
        className="inline-block bg-[#3d4e59] hover:bg-[#92a7b5] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 mb-16"
      >
        Download Full Report
      </a>

      <motion.div
        className="max-w-3xl mx-auto flex flex-col gap-14 text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#3d4e59] flex items-center justify-center mb-4">
                <Icon size={26} className="text-[#92a7b5]" />
              </div>

              <h2 className="text-2xl font-bold mb-3">{section.title}</h2>

              <p className="text-zinc-300 leading-relaxed max-w-2xl">
                {section.content}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}