import GradientTitle from "@/components/gradientTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

type Props = {};

const CloseUpShotsSection = (props: Props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#gradient-title2",
        scrub: 3,
        start: "bottom +=90%",
        end: "bottom +=15%",
      },
    });
    tl.fromTo(
      "#gradient-title2",
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
    <div className="py-36 bg-white">
      <GradientTitle id="closeUpSectionTitle" text="Close Up Shots" />
    </div>
  );
};

export default CloseUpShotsSection;
