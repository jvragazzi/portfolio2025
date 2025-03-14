import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const infos = [
  {
    question: "Sobre mim",
    answer:
      "Minha trajetória começou na Arquitetura e Urbanismo, onde me formei e co-fundei o Studio Ragazzi. Ao explorar tecnologias de realidade virtual e aumentada para criar experiências imersivas, percebi, que esse contato com tecnologia despertou meu interesse pela programação, levando-me a transição definitiva para a área em 2023.\n\nPara consolidar essa mudança, especializei-me em Desenvolvimento Front-End pela EBAC e atualmente sigo ampliando meu repertório técnico por meio da graduação tecnóloga em Análise e Desenvolvimento de Sistemas pela Estácio. Minha formação multidisciplinar me permite unir precisão técnica e design estético. Sou criativo, adaptável e crítico, com foco na qualidade e aprendizado contínuo.",
  },
  {
    question: "Formação Acadêmica",
    answer:
      "Análise e Desenvolvimento de Sistemas, Tecnólogo | Estácio - 2025 - Previsão de conclusão em Jul/2027\n\nDesenvolvimento Front-end, curso livre profissionalizante | EBAC - Concluído em 2024; \n\nArquitetura e Urbanismo, Graduação | PUC Minas - Concluído em 2018. \n\nArquitetura e Urbanismo, Graduação Sanduíche | Karlsruher Institut für Technologie (KIT) Alemanha - 2015 - 2016.",
  },
  {
    question: "Habilidades Técnicas",
    answer:
      "HTML • CSS • JavaScript • C# • React.js • Angular • TypeScript • Node.js • Three.js • Bootstrap • SASS • jQuery • Cypress • Git • GitHub • API&apos;s • AWS • SQL • NoSQL • DevOps • UI/UX • Figma • Pacote Adobe",
  },
  {
    question: "Cursos Complementares",
    answer:
      "Angular 17, Udemy;\n\nReactJS com Typescript, Udemy;\n\nC# primeiros passos: Lógica de Programação e Algoritmos, Udemy;\n\nFigma Aplicado, EBAC;\n\nWorkshop Explorando a realidade aumentada com Lens Studio, Snapchat e EBAC\n\nWeb design criativo: planejamento e programação do zero, Domestika;\n\nProgramação criativa: arte imersiva com openFrameworks, Domestika.",
  },
  {
    question: "Idiomas",
    answer:
      "● Inglês fluente;\n\nAlemão fluente;\n\nEspanhol intermediário.",
  },
];

const Infos: FC = () => {
  return (
    <section className="section" id="infos">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Infos adicionais</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {infos.map(({ question, anwser }) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="text-2xl md:text-3xl lg:text-4xl">{question}</div>
                <div className="inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infos;
