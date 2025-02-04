import Image from "next/image";
import React, { useEffect, useState } from "react";
import yellowSofa from "@/public/tulfa/yellow-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-07-utc-Photoroom.png";
import orangeSofa from "@/public/tulfa/orange-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-12-utc-Photoroom.png";

import violetSofa from "@/public/tulfa/violet-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-01-16-utc-Photoroom.png";
import RoundedShadowButton from "@/components/roundedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {};

const SofaSection = (props: Props) => {
  const [currentImage, setCurrentImage] = useState(1);
  const sofas = [
    { src: orangeSofa, alt: "orange sofa", id: 1 },
    { src: violetSofa, alt: "violet sofa", id: 2 },
    { src: yellowSofa, alt: "yellow sofa", id: 3 },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#sofa-section-container", {
      scrollTrigger: {
        trigger: "#sofa-section-container",
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <div
      id="sofa-section-container"
      className="h-screen"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="flex h-full items-center" id="jonas">
        <div className="w-1/2 relative flex items-center h-full bg-white transition-opacity duration-500">
          {sofas.map((sofa) => (
            <Image
              key={sofa.id}
              src={sofa.src}
              alt={sofa.alt}
              className={`transition-all duration-1000 absolute ${
                sofa.id <= currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="flex gap-1 absolute bottom-9 left-[50%] translate-x-[-50%]">
            <RoundedShadowButton
              callback={() => setCurrentImage(1)}
              button_color="rgb(189,108,21, 0.5)"
              shadow_color="rgb(189,108,21, 1)"
            />
            <RoundedShadowButton
              callback={() => setCurrentImage(2)}
              button_color="rgb(67,62,153, 0.5)"
              shadow_color="rgb(67,62,153, 1)"
            />
            <RoundedShadowButton
              callback={() => setCurrentImage(3)}
              button_color="rgb(180,172,55, 0.5)"
              shadow_color="rgb(180,172,55, 1)"
            />
          </div>
        </div>
        <div
          className={`w-1/2 h-full flex items-center relative bg-[#F0F3FB] transition-opacity duration-500`}
        >
          {sofas.map((sofa) => (
            <Image
              key={sofa.id}
              src={sofa.src}
              alt={sofa.alt}
              className={`left-[50%] scale-[1.6] transition-all duration-1000 absolute ${sofa.id <= currentImage ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SofaSection;
