import { FC } from "react";
import image1 from "../../public/images/project-1.jpg";
import image2 from "../../public/images/project-2.jpg";
import image3 from "../../public/images/aMORA.png";
import image4 from "../../public/images/MORA+.png";
import image5 from "../../public/images/functionfm.png";
import image6 from "../../public/images/project-6.jpg";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "More com aMORA",
    image: image3,
    url: "https://www.amora.com.br/",
  },
  {
    name: "MORA+",
    image: image4,
    url: "https://app.moramais.com/",
  },
  {
    name: "Function",
    image: image5,
    url: "https://functionfm.com/",
  },
  {
    name: "Me Indica um Filme",
    image: image1,
    url: "https://meindicaumfilme.com",
  },
  {
    name: "Arteix",
    image: image2,
    url: "https://arteix.eu",
  },
  {
    name: "Sistema Solar",
    image: image6,
    url: "https://solar-system3d-jvragazzi.vercel.app/",
  },
];

const Projects: FC = () => {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
          Projetos
        </h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map(({ name, image, url }) => (
            <a
              href={url} // 🔹 Direciona para o site do projeto
              key={name}
              target="_blank"
              rel="noopener noreferrer"
              className="border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10 flex flex-col relative group/project"
            >
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-stone-300"></div>
              <div className="relative">
                <div className="aspect-video md:hidden">
                  <Image
                    src={image}
                    alt={`${name} image`}
                    className="size-full object-cover"
                  />
                </div>
                <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                  <div className="lg:group-hover/project:pl-8 transition-all duration-700:">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight transition-colors duration-300 group-hover/project:text-white">
                      {name}
                    </h3>
                  </div>
                  <div className="relative">
                    <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-50">
                      <Image
                        src={image}
                        alt={`${name} image`}
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="size-6 overflow-hidden group-hover/project:-translate-x-1/2 transition-transform duration-300">
                    <div className="lg:group-hover/project:pr-8 transition-all duration-700">
                      <div className="h-6 w-12 flex">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
