"use client"

import React, { useState } from "react"
import blueSofa from "@/public/tulfa/blue-sofa-on-white-background-2023-11-27-05-35-36-utc-Photoroom.png"
import greySofa from "@/public/tulfa/grey-sofa-on-white-background-2024-10-23-17-40-37-utc-Photoroom.png"
import violetSofa from "@/public/tulfa/violet-sofa-2023-11-27-05-16-21-utc-Photoroom.png"
import menuBlueSofa from "@/public/tulfa/menu-blue-sofa.png"
import menuGreySofa from "@/public/tulfa/menu-grey-sofa.png"
import menuVioletSofa from "@/public/tulfa/menu-violet-sofa.png"
import Image from "next/image"
import { Divider } from "@nextui-org/divider"

type Props = {}

const SecondSofaSection = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(1)
    const sofas = [
        { src: blueSofa, alt: "blue sofa", id: 1 },
        { src: greySofa, alt: "grey sofa", id: 2 },
        { src: violetSofa, alt: "violet sofa", id: 3 },
      ];

    return (
        <div className="h-screen overflow-hidden">
            <div className="flex h-full">
                <div className={`w-7/12 bg-white h-full flex justify-center items-center relative `}>
                {
                    sofas.map((sofa) => (
                        <Image
                            key={sofa.id}
                            src={sofa.src}
                            alt={sofa.alt}
                            width={456}
                            className={` absolute transition-all duration-1000 ${sofa.id <= currentImage ? "opacity-100" : "opacity-0"} ${isMenuOpen ? "translate-x-2" : "translate-x-0"}`}
                        />
                    ))
                }
                </div>
                <div
                    className="w-5/12 bg-no-repeat relative bg-white"
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                    >
                    <Menu isOpen={isMenuOpen} onChange={setCurrentImage} />
                    {
                        sofas.map((sofa) => (
                            <div
                                key={sofa.id}
                                className={`bg-no-repeat w-full h-full transition-all duration-1000 absolute -top-0  ${sofa.id <= currentImage  ? "opacity-100" : "opacity-0"}`}
                                style={{ background: `url(${sofa.src.src})`, backgroundSize: "240%", backgroundPositionX: "center", backgroundPositionY: "-10px" }}
                            >

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

type TMenu = {
    isOpen: boolean;
    onChange: Function;
}

const Menu = (props: TMenu) => {
    const { isOpen, onChange } = props
    const menuItems = [
        {
            name: "Pint",
            image: menuBlueSofa,
            alt: "blue sofe",
        },
        {
            name: "Leathers",
            image: menuGreySofa,
            alt: "grey sofe"
        },
        {
            name: "Embroidery",
            image: menuVioletSofa,
            alt: "violet sofe"
        },
    ]
    return (
        <div className={`bg-white transition-all ease-out duration-1000 h-56 z-10 ${isOpen ? "translate-y-0" : "-translate-y-56"} w-1/2 rounded-bl-3xl absolute top-0 right-0 text-black overflow-hidden`}>
            {
                menuItems.map((item, index) => (
                    <div key={item.name} onClick={() => onChange(index + 1)}>
                        <div className="flex justify-between items-center pl-3 cursor-pointer">
                            <span>{item.name}</span>
                            <Image
                                src={item.image}
                                alt={item.alt}
                            />
                        </div>
                        <Divider />
                    </div>
                ))
            }

        </div>
    )
}

export default SecondSofaSection