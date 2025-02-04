"use client";
import React, { useEffect, useRef } from "react";
import bg from "@/public/tulfa/view-of-a-modern-lounge-room-2023-11-28-03-19-28-utc.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Expand, X } from "lucide-react";
import Modal from "@/components/modal";
import { useDisclosure } from "@nextui-org/modal";
import Image from "next/image";
import image1 from "@/public/tulfa/view-of-a-modern-lounge-room-2024-05-27-19-05-26-utc.jpg";
import image2 from "@/public/tulfa/lounge-room-2024-01-22-18-27-58-utc.jpg";
import image3 from "@/public/tulfa/sofa-back-zoom.jpg";
import image4 from "@/public/tulfa/lounge-room-2024-01-22-18-27-58-utc-1.jpg";
import image5 from "@/public/tulfa/lounge-room-2024-01-22-18-27-58-utc-2.jpg";
import image6 from "@/public/tulfa/screw-for-furniture-assembly-close-up-2023-11-27-04-51-33-utc.jpg";
import image7 from "@/public/tulfa/stylish-chest-of-drawers-close-up-furniture-for-2024-01-18-18-28-52-utc.jpg";
import Lenis from "lenis";
import GradientTitle from "@/components/gradientTitle";

type Props = {
  setIsModalOpen: Function;
  lenis: React.MutableRefObject<Lenis | null>;
};

const ViewOfAMordernLauge = (props: Props) => {
  const { setIsModalOpen, lenis } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        id="view-of-a-mordern-lauge"
        style={{
          background: `url(${bg.src})`,
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "cover",
        }}
        className="h-screen w-full overflow-hidden relative"
      >
        <Button onOpen={onOpen} />
        <Modal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange}>
          <div className="text-black max-w-3/4  overflow-hidden relative">
            <div
              onClick={onOpenChange}
              className="p-1 text-white hover:scale-105 bg-[rgb(42,38,106,0.4)] rounded-full cursor-pointer absolute right-7 top-5 transition-all"
            >
              <X size={19} />
            </div>
            <div>
              <ModalContent />
            </div>
          </div>
        </Modal>
      </div>
      <div className="bg-white py-32">
        <p className="text-[#2A266A] text-center max-w-[750px] mx-auto text-lg">
          Virtual photography offers cost-effective, eco-friendly solutions for
          showcasing products with precision and creativity.
        </p>
      </div>
      <div className="bg-white py-32">
        <GradientTitle id="mordernLaugeTitle" text="Show your Team" />
      </div>
    </>
  );
};

type TButton = {
  onOpen: () => void;
};

const Button = (props: TButton) => {
  const { onOpen } = props;
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#view-of-a-mordern-lauge",
        start: "top +=10%",
        onEnter: () => {
          const btn = document.getElementById("button-body");
          btn!.style.padding = "0.25rem 0.5rem";
        },
        // markers: true,
        toggleActions: "play pause resume reset",
      },
    });
    tl.to("#pulse-expand", {
      scale: 3,
      opacity: 0,
      duration: 0.5,
      delay: 1,
    }).fromTo(
      "#button-body",
      {
        width: 0,
      },
      {
        width: "11rem",
      },
    );
  }, []);

  return (
    <div
      onClick={onOpen}
      id="button-body"
      className={`bg-zinc-700  rounded-full justify-center  flex gap-2 w-0 py-0 px-0 items-center absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer shadow-md`}
    >
      <span className="text-sm text-nowrap overflow-hidden">
        Take a Closer Look
      </span>
      <div className=" relative">
        <div className="p-2 bg-red-500 rounded-full z-20 relative right-0 top-0">
          <Expand size={11} />
        </div>
        <div
          id="pulse-expand"
          className="p-2 bg-red-500 rounded-full right-0 absolute  opacity-100 z-10 top-0 h-full w-full
    "
        ></div>
      </div>
    </div>
  );
};

const ModalContent = () => {
  return (
    <div>
      <Image src={image1} alt="banner" className="w-full" />
      <div className="bg-white ">
        <h2 className="modal-gradient-title-1 max-w-[34rem] text-center m-auto py-16">
          High-quality virtual photography ensures realistic, detailed visuals
          that elevate brand credibility and customer trust.
        </h2>
        <div className="px-3 pb-5">
          <div className="flex gap-3">
            <div
              style={{
                background: `url(${bg.src})`,
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
              className="w-5/12 h-[32rem] rounded-lg bg-slate-600"
            ></div>
            <div
              style={{
                background: `url(${image2.src})`,
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
              className="w-7/12 h-[32rem] rounded-lg bg-slate-700"
            ></div>
          </div>
          <div className="flex mt-3 gap-3">
            <div
              style={{
                background: `url(${image3.src})`,
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
              className="w-7/12 h-[32rem] rounded-lg bg-slate-600"
            ></div>
            <div
              style={{
                background: `url(${image4.src})`,
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
              className="w-5/12 h-[32rem] rounded-lg bg-slate-700"
            ></div>
          </div>
          <div className="flex mt-3 gap-3">
            <div
              style={{
                background: `url(${image5.src})`,
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
              className="w-full h-[32rem] rounded-lg bg-slate-600"
            ></div>
          </div>
          <div className="flex mt-3 gap-3">
            <div
              style={{
                background: `url(${image6.src})`,
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
              className="w-5/12 h-[32rem] rounded-lg bg-slate-600"
            ></div>
            <div
              style={{
                background: `url(${image7.src})`,
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
              className="w-7/12 h-[32rem] rounded-lg bg-slate-600"
            ></div>
          </div>
          <div className="flex mt-3 gap-3">
            <div
              style={{
                background: `url(${image3.src})`,
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
              className="w-full h-[32rem] rounded-lg bg-slate-600"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOfAMordernLauge;
