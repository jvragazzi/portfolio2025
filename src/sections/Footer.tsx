"use client";

import { FC, useEffect, useRef } from "react";
import Button from "@/components/Button";
import { useInView } from "motion/react";
import { animate, stagger } from "motion";
import SplitType from "split-type";

const navItems = [
  { href: "#intro", label: "Home" },
  { href: "#projetos", label: "Projetos" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#infos", label: "Infos" },
  { href: "#contato", label: "Contato" },
];

const Footer: FC = () => {
  const titleScope = useRef<HTMLHeadingElement>(null);
  const inView = useInView(titleScope, {
    once: true, // Só ativa a animação uma vez
    amount: 0.4, // Requer que 50% do elemento esteja visível
  });

  useEffect(() => {
    if (titleScope.current) {
      // Divide o título em palavras
      const split = new SplitType(titleScope.current, {
        types: "words",
        tagName: "span",
      });

      // Só roda a animação se 50% do footer estiver visível
      if (inView) {
        if (split.words) {
          animate(
            split.words,
            {
              opacity: [0, 1],
              transform: ["translateY(10px)", "translateY(0)"],
            },
            { duration: 1.2, delay: stagger(0.1) }
          );
        }
      }
    }
  }, [inView]);

  return (
    <footer className="bg-stone-600 text-white" id="contato">
      <div className="container">
        <div className="section">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-2">
              {/* O texto será animado palavra por palavra */}
              <h2
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight font-extralight"
                ref={titleScope}
              >
                Entre em contato, vamos trabalhar juntos!
              </h2>
              <div className="mt-10 md:col-span-2">
                <div>
                <a href="mailto:jvictorragazzi@gmail.com">
                  <Button
                    className="border border-white bg-transparent hover:bg-white hover:text-stone-600 transition-colors duration-300 select-all"
                    variant="secondary"
                    iconAfter={
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
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    }
                  >
                    jvictorragazzi@gmail.com
                  </Button>
                  </a>
                </div>
                <div>
                  <Button
                    className="mt-8 border border-white bg-transparent hover:bg-white hover:text-stone-600 transition-colors duration-300"
                    variant="secondary"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/curriculo.pdf";
                      link.download = "JoaoVictorRagazzi_CV.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    iconAfter={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                        transform="rotate(135 0 0)"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    }
                  >
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a
                    href={href}
                    key={label}
                    className="relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <Button variant="text" className="text-base sm:text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/50 text-sm">
          Copyright &copy; João Victor Ragazzi &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
