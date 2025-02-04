"use client";

import React, { useEffect, useRef, useState } from "react";

import "./index.css";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Introducing from "./_sections/_introducing";
import PurpleSection from "./_sections/_purpleSection";
import SiloSection from "./_sections/_siloSection";
import SectionSizes from "./_sections/_sectionSizes";
import SofaSection from "./_sections/_sofaSection";
import SecondSofaSection from "./_sections/_secondSofaSection";
import ModernLivingRoomSection from "./_sections/_modernLivingRoomSection";
import CloseUpShotsSection from "./_sections/_closeUpShotsSection";
import ViewOfAMordernLauge from "./_sections/_viewOfAMordernLauge";
import CarouselCarpenters from "./_sections/_carouselInstallation";
import CarouselRooms from "./_sections/_carouselRooms";
import EndSection from "./_sections/_endSection";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lenisInstance = useRef<Lenis | null>(null);
  // useEffect(() => {
  //     // Initialize a new Lenis instance for smooth scrolling
  //     const lenis = new Lenis();

  //     // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  //     lenis.on('scroll', ScrollTrigger.update);

  //     // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  //     // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  //     gsap.ticker.add((time) => {
  //         lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  //     });

  //     // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  //     gsap.ticker.lagSmoothing(0);
  // }, [])
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top", // Inicia no topo da seção
        end: "bottom top", // Termina no topo da próxima seção
        markers: true,
        snap: {
          snapTo: [0.25, 0.5, 0.75, 1], // Encaixa na seção mais próxima
          duration: { min: 0.2, max: 0.6 }, // Duração da animação
          ease: "power1.inOut", // Efeito de easing
        },
      });
    });
  }, []);

  return (
    <div
      className={`overflow-hidden ${isModalOpen ? "h-screen" : ""}`}
      style={{ scrollSnapType: "y mandatory" }}
    >
      <Introducing />
      <section>
        <PurpleSection />
      </section>
      <section style={{ scrollSnapAlign: "start" }}>
        <SiloSection />
      </section>
      <section style={{ scrollSnapAlign: "start" }}>
        <SectionSizes />
      </section>
      <section style={{ scrollSnapAlign: "start" }}>
        <SofaSection />
      </section>
      <section style={{ scrollSnapAlign: "start" }}>
        <SecondSofaSection />
      </section>
      <ModernLivingRoomSection />

      <section>
        <CloseUpShotsSection />
      </section>
      <section>
        <ViewOfAMordernLauge
          lenis={lenisInstance}
          setIsModalOpen={setIsModalOpen}
        />
      </section>
      <section>
        <CarouselCarpenters />
      </section>
      <section>
        <CarouselRooms />
      </section>
      <section>
        <EndSection />
      </section>
    </div>
  );
};

export default Page;
