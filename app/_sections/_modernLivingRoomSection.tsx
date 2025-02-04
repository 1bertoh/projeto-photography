import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image from "@/public/tulfa/modern-living-room-with-soft-furniture-2023-11-27-05-04-10-utc.jpg";

const ModernLivingRoomSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#modern-living-room-section",
        pin: true,
        scrub: 3,
        end: "+=1200px top",
      },
    });

    tl.fromTo(
      "#modern-living-room-section",
      {
        backgroundSize: "130%",
      },
      {
        backgroundSize: "100%",
        duration: 5,
      },
    )
      .to("#black-layer", {
        backgroundColor: "rgb(0,0,0,0.4)",
        duration: 3,
      })
      .from(
        "#title-lifestyle",
        {
          translateY: 100,
          opacity: 0,
          duration: 3,
        },
        "-=100%",
      )
      .to("#black-layer", {
        duration: 3,
      });
  }, []);

  return (
    <div
      className={`h-screen relative`}
      id="modern-living-room-section"
      style={{
        background: `url(${image.src})`,
        backgroundPositionX: "center",
        backgroundPositionY: "top",
      }}
    >
      <div
        className=" absolute h-full w-full flex items-center pl-44"
        id="black-layer"
        style={{ backgroundColor: "rgb(0,0,0,0)" }}
      >
        <h1 className="text-7xl font-bold pt-[-50%]" id="title-lifestyle">
          Lifestyle Scenes
        </h1>
      </div>
    </div>
  );
};

export default ModernLivingRoomSection;
