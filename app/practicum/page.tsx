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
      "Kooapps Philippines Corporation is the Philippine branch of Kooapps, an indie mobile gaming studio and publisher established in 2008. The company develops and supports mobile games for a global audience while handling game development, quality assurance, and creative production. Guided by its mission of connecting the world through amazing daily experiences, Kooapps emphasizes continuous improvement, rapid iteration, and delivering polished gaming experiences through collaborative development and quality assurance practices.",
  },
  {
    title: "NATURE OF WORK / TASKS GIVEN",
    icon: ClipboardList,
    content:
      "As a Quality Assurance (QA) Intern at Kooapps Philippines Corporation, I participated in scheduled and priority testing of mobile application builds, advertisement verification, and bug fix confirmation. I documented software defects using standardized bug reports to assist developers in reproducing and resolving issues efficiently. In addition to testing, I conducted research on quality assurance tools and contributed to a feasibility study.",
  },
  {
    title: "TOTAL HOURS RENDERED",
    icon: Clock,
    content:
      "I completed a total of 486 internship hours. The internship consisted of 8 hours of Company Orientation, 40 hours of Quality Assurance Training, 238 hours dedicated to application testing, technical documentation, and other QA responsibilities, and 200 hours allocated to completing the special project.",
  },
  {
    title: "CONCLUSION",
    icon: CheckCircle2,
    content:
      "My internship at Kooapps Philippines Corporation strengthened both my technical and professional skills by exposing me to real-world software quality assurance processes. Through structured testing, defect documentation, collaboration with developers, and participation in a research-based feasibility study, I developed stronger analytical thinking, communication, and attention to detail. The experience provided valuable insight into professional software development workflows and better prepared me for future opportunities within the IT industry.",
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
    <div className="min-h-screen px-6 sm:px-8 md:px-16 py-12 sm:py-20 text-center">
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
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#3d4e59] hover:bg-[#92a7b5] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 mb-16"
      >
        Download Full Report
      </a>

      <motion.div
        className="max-w-3xl mx-auto flex flex-col gap-14"
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
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#3d4e59] flex items-center justify-center mb-4">
                <Icon size={26} className="text-[#92a7b5]" />
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {section.title}
              </h2>

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