"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";

import yellowSofa from "@/public/tulfa/modern-scandinavian-yellow-sofa-isolated-over-whit-2023-11-27-05-20-00-utc.png";
import img from "@/public/tulfa/introducing.svg";

const Introducing = () => {
  const path =
    "/tulfa/aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc.mp4";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#batata",
        pin: "#batata",
        scrub: 2,
        end: "+=1200px top",
      },
    });

    tl.fromTo(
      "#introducing",
      {
        scale: 190,
      },
      {
        scale: 1,
        duration: 7,
        ease: "circ.out",
      },
    ).to("#introducing", {
      duration: 3,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#first",
        // markers: true,
        start: "-=300px bottom",
      },
    });

    tl2
      .from("#first", {
        y: 500,
      })
      .from(
        "#scandinavian-yellow-sofa",
        {
          yPercent: 100,
          ease: "sine",
        },
        "+=0.5",
      );
  }, []);

  return (
    <div className="relative overflow-hidden overflow-x-hidden" id="wit">
      <div className="inline-block relative w-full h-screen" id="batata">
        <video loop muted autoPlay={true} className="">
          <source src={path} type="video/mp4" />
          <track label="English" src={path} srcLang="en" />
          Your browser does not support the video tag.
        </video>
        <Image
          alt="introducing"
          className="video w-full z-20 mix-blend-lighten absolute top-[50%] left-[50%]"
          id="introducing"
          src={img}
          style={{
            transform: "translate(-50%, -50%)",
          }}
          width={500}
        />
      </div>
      <div className="relative z-20 bg-white">
        <h1
          className="text-slate-900 text-8xl font-bold text-center text-color-trans mb-14"
          id="first"
        >
          Virtual Product Photography
        </h1>
        <Image
          alt="modern scandinavian yellow sofa isolated over whit"
          id="scandinavian-yellow-sofa"
          src={yellowSofa}
        />
      </div>
    </div>
  );
};

export default Introducing;
