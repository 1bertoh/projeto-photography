"use client";
import React, { useState } from "react";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

import image1 from "@/public/tulfa/view-of-living-room-in-minimal-style-with-yellow-s-2023-11-27-05-26-51-utc.jpg";
import image2 from "@/public/tulfa/empty-space-on-minimal-beautiful-dining-table-in-m-2023-11-27-05-21-36-utc.jpg";
import image3 from "@/public/tulfa/interior-design-of-neutral-living-room-2024-10-18-05-17-30-utc.jpg";
import image4 from "@/public/tulfa/minimal-living-room-interior-design-2023-11-27-05-09-40-utc.jpg";
import image5 from "@/public/tulfa/living-room-interior-with-dining-table-cupboard-s-2023-11-27-05-19-28-utc.jpg";
import image6 from "@/public/tulfa/wooden-furniture-in-minimal-dining-room-interior-d-2023-11-27-05-20-43-utc.jpg";
import GradientTitle from "@/components/gradientTitle";

type Props = {};

const CarouselRooms = (props: Props) => {
  const [currentImage, setCurrentImage] = useState(1);
  const slide = [
    { src: image1, alt: "blue sofa", id: 1 },
    { src: image2, alt: "grey sofa", id: 2 },
    { src: image3, alt: "violet sofa", id: 3 },
    { src: image4, alt: "violet sofa", id: 4 },
    { src: image5, alt: "violet sofa", id: 5 },
    { src: image6, alt: "violet sofa", id: 6 },
  ];

  const changeImage = (direction: "up" | "down") => {
    setCurrentImage((prev) => {
      const totalImages = slide.length;

      if (direction === "up") {
        return prev === 1 ? totalImages : prev - 1;
      }
      if (direction === "down") {
        return prev === totalImages ? 1 : prev + 1;
      }

      return prev;
    });
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="h-screen bg-white">
          {slide.map((item, index) => (
            <div
              key={item.id}
              className={` absolute h-screen w-full transition-all duration-1000 opacity-5 translate-y-[-100%]   ${item.id <= currentImage ? "!opacity-100 !translate-y-0" : "opacity-5 translate-y-[-100%]"}`}
              style={{
                background: `url(${item.src.src})`,
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
            />
          ))}
          <div className="flex flex-col gap-2 absolute right-5 top-1/2 -translate-y-1/2">
            <ArrowUpCircle
              className="cursor-pointer"
              size={50}
              onClick={() => changeImage("up")}
            />
            <ArrowDownCircle
              className="cursor-pointer"
              size={50}
              onClick={() => changeImage("down")}
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-32">
        <p className="text-[#2A266A] text-center max-w-[750px] mx-auto text-lg">
          Showcasing your room is more than just a presentation—it’s a powerful
          way to build trust, authenticity, and connection with your clients.
        </p>
      </div>
      <div className="bg-white py-32">
        <GradientTitle id="carouselWorkersTitle" text="Make it Happen" />
      </div>
    </>
  );
};

export default CarouselRooms;
