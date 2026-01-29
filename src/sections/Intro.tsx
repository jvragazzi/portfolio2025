"use client";

import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.3,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, animate, scope]);

  return (
    <section className="section mt-12 md:mt-16 lg:mt-20" ref={scope}>
      <div className="container">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.05] lg:leading-[1] lg:w-[95%] max-w-[32ch] md:max-w-none">
          Com uma visão <span className="text-red-orange-500 font-bold">multidisciplinar</span>, transito do espaço físico ao digital,
          explorando formas, interações e novas maneiras de vivenciar a
          tecnologia.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
