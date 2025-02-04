"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image from "@/public/tulfa/6412-brown-storage-cabinet-isolated-on-a-transpar-2023-11-27-05-08-49-utc-Photoroom.png";

const SectionSizes = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const initializeScrollTrigger = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#first-size",
          // scrub: t,
          end: "end center",
        },
      });

      tl.fromTo(
        "#first-size",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: -200,
          opacity: 1,
        },
      )
        .fromTo(
          "#second-size",
          {
            y: 200,
            opacity: 0,
          },
          {
            y: -50,
            opacity: 1,
          },
        )
        .fromTo(
          "#tirth-size",
          {
            y: 200,
            opacity: 0,
          },
          {
            y: -50,
            opacity: 1,
          },
        );

      gsap.timeline({
        scrollTrigger: {
          trigger: "#sofa-section",
          pin: "#sofa-section",
          start: "top top",
          end: "bottom",
          scrub: 2,
          pinSpacing: false,
        },
      });
    };

    initializeScrollTrigger();
  }, []);

  return (
    <div
      className="h-screen pb-5 text-black bg-[#F0F3FB] relative text-center "
      id="sofa-section"
      style={{ scrollSnapAlign: "start" }}
    >
      <div
        className="flex gap-2 items-end w-8/12 absolute center top-[50%] left-[50%]"
        id="first-size"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="text-lg">L</span>
        <Image alt="brown-storage-cabinet" src={image} />
      </div>
      <div
        className="flex gap-2 items-end w-7/12 absolute center top-[57%] left-[50%]"
        id="second-size"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="text-lg">M</span>
        <Image alt="brown-storage-cabinet" src={image} />
      </div>
      <div
        className="flex gap-2 items-end w-6/12 absolute center top-[64%] left-[50%]"
        id="tirth-size"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="text-lg">S</span>
        <Image alt="brown-storage-cabinet" src={image} />
      </div>
      <span
        className="absolute bottom-10 left-[50%] text-[#2A266A]"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        Quality for every variation.
      </span>
    </div>
  );
};

export default SectionSizes;
