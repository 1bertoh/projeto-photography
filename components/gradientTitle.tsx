import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

type Props = {
  text: string;
  fontSize?:
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  id: string;
};

const GradientTitle = (props: Props) => {
  const { text, fontSize, id } = props;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${id}`,
        scrub: 2,
        start: "bottom +=90%",
        end: "bottom +=15%",
      },
    });

    tl.fromTo(
      `#${id}`,
      {
        background: "linear-gradient(to right, #ef4b32, #433e99)",
      },
      {
        background: "linear-gradient(to right, #433e99, #ef4b32)",
        duration: 3,
      },
    );
  }, []);

  return (
    <h2
      className={`gradient-title w-fit mx-auto !${fontSize || ""} text-center font-bold`}
      id={id}
    >
      {text}
    </h2>
  );
};

export default GradientTitle;
