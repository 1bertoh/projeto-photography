"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

const PurpleSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    document.getElementById("fgf")?.classList;
    let lastFocused: HTMLElement | null = null;

    gsap.utils.toArray(".purple-items").forEach((item: any) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          // toggleClass: "Batat-da-terra", //USAR ESSE TOGGLECLASS
          scrub: 0.5,
          // markers: true,
          end: "bottom 70%",
          start: "top 80%",
          onEnter: () => {
            //VER SE A GENTE TROCA ESSE ROLE POR UM HOVER PARA FICAR MAIS INTERATIVO
            if (lastFocused) lastFocused.classList.remove("focused");
            item.classList.add("focused");
            lastFocused = item;
          },
          onEnterBack: () => {
            if (lastFocused) lastFocused.classList.remove("focused");
            item.classList.add("focused");
            lastFocused = item;
          },
          onLeaveBack: () => {
            if (lastFocused === item) {
              item.classList.remove("focused");
              lastFocused = null;
            }
          },
        },
      });
    });
    gsap.timeline({
      // scrollTrigger: {
      // }
    });
  }, []);

  return (
    <div
      className=""
      style={{
        background:
          "linear-gradient(90deg, rgba(42,38,106,1) 0%, rgba(67,62,153,1) 50%, rgba(42,38,106,1) 100%)",
        scrollSnapAlign: "start",
      }}
    >
      <div className="text-7xl  max-w-screen-md mx-auto font-bold py-16 text-slate-300 ">
        <span className="purple-items">
          <span className="text-8xl">We </span>
          revolutionizes <span className="text-nowrap">e-commerce</span> by
          creating stunning,{" "}
        </span>
        <span className="purple-items">
          lifelike images of products in digital environments, enhancing
          customer{" "}
        </span>
        <span className="purple-items">
          engagement and reducing the need for physical samples{" "}
        </span>
      </div>
    </div>
  );
};

export default PurpleSection;
