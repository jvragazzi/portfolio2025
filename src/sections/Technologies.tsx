"use client";
import { FC } from "react";
import { motion } from "motion/react";

const Technologies: FC = () => {
  return (
    <section className="section relative overflow-hidden" id="tecnologias">
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight flex flex-col uppercase overflow-hidden">
          {/* Primeiro span: Indo para a esquerda */}
          <motion.span
            className="whitespace-nowrap flex"
            animate={{ x: ["0%", "-900%"] }}
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "linear",
            }}
          >
            HTML • CSS • JavaScript • C# • React.js • Angular • TypeScript •
            Node.js • Three.js • Bootstrap • SASS • jQuery • Cypress • Git •
            GitHub • APIs • AWS • SQL • NoSQL • DevOps • UI/UX • Figma • Pacote
            Adobe &nbsp;•
            {/* Duplicado para continuidade infinita */}
            HTML • CSS • JavaScript • C# • React.js • Angular • TypeScript •
            Node.js • Three.js • Bootstrap • SASS • jQuery • Cypress • Git •
            GitHub • APIs • AWS • SQL • NoSQL • DevOps • UI/UX • Figma • Pacote
            Adobe •
          </motion.span>

          {/* Segundo span: Indo para a direita (Correção) */}
          <motion.span
            className="whitespace-nowrap flex text-red-orange-500"
            animate={{ x: ["-900%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "linear",
            }}
          >
            HTML • CSS • JavaScript • C# • React.js • Angular • TypeScript •
            Node.js • Three.js • Bootstrap • SASS • jQuery • Cypress • Git •
            GitHub • API&apos;s • AWS • SQL • NoSQL • DevOps • UI/UX • Figma •
            Pacote Adobe &nbsp;•
            {/* Duplicado para continuidade infinita */}
            HTML • CSS • JavaScript • C# • React.js • Angular • TypeScript •
            Node.js • Three.js • Bootstrap • SASS • jQuery • Cypress • Git •
            GitHub • API&apos;s • AWS • SQL • NoSQL • DevOps • UI/UX • Figma •
            Pacote Adobe •
          </motion.span>
        </h2>
      </div>
    </section>
  );
};

export default Technologies;
