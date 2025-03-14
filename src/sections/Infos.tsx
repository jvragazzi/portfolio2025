"use client";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const infos = [
  {
    question: "Sobre mim",
    answer:
      "Minha trajetória começou na Arquitetura e Urbanismo, onde me formei e co-fundei o Studio Ragazzi. Ao explorar tecnologias de realidade virtual e aumentada para criar experiências imersivas, percebi que esse contato com tecnologia despertou meu interesse pela programação, levando-me à transição definitiva para a área em 2023.\n\nPara consolidar essa mudança, especializei-me em Desenvolvimento Front-End pela EBAC e atualmente sigo ampliando meu repertório técnico por meio da graduação em Análise e Desenvolvimento de Sistemas pela Estácio. Minha formação multidisciplinar me permite unir precisão técnica e design estético. Sou criativo, adaptável e crítico, com foco na qualidade e aprendizado contínuo.",
  },
  {
    question: "Formação Acadêmica",
    answer:
      "• Análise e Desenvolvimento de Sistemas, Tecnólogo | Estácio - 2025 - Previsão de conclusão em Jul/2027\n\n• Desenvolvimento Front-end, curso livre profissionalizante | EBAC - Concluído em 2024; \n\n• Arquitetura e Urbanismo, Graduação | PUC Minas - Concluído em 2018. \n\n• Arquitetura e Urbanismo, Graduação Sanduíche | Karlsruher Institut für Technologie (KIT) Alemanha - 2015 - 2016.",
  },
  {
    question: "Habilidades Técnicas",
    answer:
      "HTML, CSS, JavaScript, C#, React.js, Angular, TypeScript, Node.js, Three.js, Bootstrap, SASS, jQuery, Cypress, Git, GitHub, APIs, AWS, SQL, NoSQL, DevOps, UI/UX, Figma, Pacote Adobe",
  },
  {
    question: "Idiomas",
    answer:
      "● Inglês fluente;\n\n● Alemão fluente;\n\n● Espanhol intermediário.",
  },
];

const Infos: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="section" id="infos">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Infos adicionais</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {infos.map(({ question, answer }, index) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b cursor-pointer relative isolate group/info "
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? null : index)
              }
            >
              <div
                className={twMerge(
                  "flex items-center justify-between gap-2 transition-all duration-700 group-hover/info:lg:px-8",
                  index === selectedIndex && "lg:px-8"
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl transition-colors duration-500 group-hover/info:text-white">
                  {question}
                </div>
                <div
                  className={twMerge(
                    "absolute h-0 w-full bottom-0 left-0 bg-stone-300 -z-10 group-hover/info:h-full transition-all duration-700",
                    index === selectedIndex && "h-full"
                  )}
                ></div>
                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-300",
                    "bg-stone-200", // Mantém o fundo fixo
                    "group-hover/info:bg-stone-200", // Impede que o hover altere a cor
                    selectedIndex === index
                      ? "transform rotate-45 bg-stone-200"
                      : "" // Mantém a cor mesmo ao girar
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    className={twMerge(
                      "mt-4 overflow-hidden lg:px-8 transition-colors duration-500",
                      selectedIndex === index && "text-white"
                    )}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    {answer.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-xl mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infos;
