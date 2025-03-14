import { FC } from "react";
import Button from "@/components/Button";

const navItems = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "Projetos",
  },
  {
    href: "#",
    label: "Habilidades",
  },
  {
    href: "#",
    label: "Infos",
  },
  {
    href: "#",
    label: "Contato",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white" id="contato">
      <div className="container">
        <div className="section">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-7xl font-extralight">
                Entre em contato, vamos trabalhar juntos!
              </h2>
              <div className="mt-10 md:col-span-2">
                <div>
                  <Button
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
                </div>
                <div>
                  <Button
                    className="mt-8"
                    variant="secondary"
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
                  <a href={href} key={label}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; João Victor Ragazzi &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
