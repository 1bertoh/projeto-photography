"use client";

import { Plus, X } from "lucide-react";
import { useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import gsap from "gsap";
import img from "@/public/tulfa/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.jpg";
import transImg from "@/public/tulfa/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.png";
import Modal from "@/components/modal";
import silo_v_1 from "@/public/tulfa/silo-v-1.jpg";
import silo_v_2 from "@/public/tulfa/silo-v-2.jpg";
import silo_v_3 from "@/public/tulfa/silo-v-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GradientTitle from "@/components/gradientTitle";

const SiloSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl2: gsap.core.Timeline | undefined;

    const initializeScrollTrigger = () => {
      tl2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section-silo",
            pin: "#section-silo-main",
            start: "top top",
            end: "bottom",
            scrub: true,
            // markers: true
          },
        })
        .to("#section-silo-main", {
          y: -300,
        });
    };

    initializeScrollTrigger();
  }, []);

  return (
    <div
      className="h-screen bg-white pt-14 relative"
      id="section-silo"
      style={{ scrollSnapAlign: "start" }}
    >
      <div
        className="flex items-center justify-center gap-5"
        id="section-silo-main"
      >
        <div
          className={`inline mb-24 transition-all ease-soft-spring duration-1000 ${
            isOpen ? "-translate-y-24 opacity-0" : ""
          }`}
        >
          <GradientTitle id="siloTitle" text="Product Silos" />
          <Button
            className="mx-auto text-[#2A266A] bg-white flex border-[#2A266A] border-[1px] rounded-full p-1 px-2 hover:bg-[#2A266A] hover:text-[white] transition-all"
            onPress={onOpen}
          >
            <Plus />
            Take a closer look
          </Button>
        </div>
        <Image
          alt="Silo"
          className={`transition-all ease-out duration-1000 ${
            isOpen ? "-translate-x-10" : ""
          }`}
          src={transImg}
          width={400}
        />
      </div>
      <Modal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange}>
        <div className="text-black max-w-3/4 py-20 overflow-hidden relative">
          <div
            className="p-1 text-white hover:scale-105 bg-[#2A266A] rounded-full cursor-pointer absolute right-7 top-5 transition-all"
            onClick={onOpenChange}
            role="button" // Adiciona um papel semântico
            tabIndex={0} // Torna o elemento focável
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
              }
            }}
          >
            <X size={19} />
          </div>
          <h3 className="modal-gradient-title-1 px-24 pb-3">
            Ultra-high-definition images of your furniture shot from different
            angles.
          </h3>
          <div>
            <SlideModal />
          </div>
        </div>
      </Modal>
    </div>
  );
};

const SlideModal = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    infinite: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="">
          <div className="flex justify-center ">
            <div className="px-10 py-3 bg-white rounded-2xl">
              <Image
                alt="Silo"
                className="rounded-2xl hover:scale-105 ease-in transition-all"
                src={img}
                width={200}
              />
            </div>

            <div className="rounded-2xl px-6 pt-6 ml-3 self-end bg-white">
              <Image
                alt="Silo"
                className="rounded-2xl hover:scale-105 ease-in transition-all"
                src={silo_v_1}
                width={370}
              />
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="bg-white w-5/6 mx-auto rounded-2xl">
            <Image
              alt="Silo"
              className="mx-auto rounded-2xl hover:scale-105 ease-in transition-all"
              src={silo_v_2}
              width={330}
            />
          </div>
        </div>
        <div className=" ">
          <div className="flex justify-center">
            <div className="px-7 py-3 bg-white">
              <Image
                alt="Silo"
                className="rounded-2xl hover:scale-105 ease-in transition-all"
                src={img}
                width={200}
              />
            </div>

            <div className="bg-white rounded-2xl   ml-3  px-7 py-3">
              <Image
                alt="Silo"
                className="rounded-2xl hover:scale-105 ease-in transition-all"
                src={silo_v_3}
                width={300}
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SiloSection;
