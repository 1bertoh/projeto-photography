"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import React, { useEffect } from "react"
import yellowSofa from "@/public/tulfa/modern-scandinavian-yellow-sofa-isolated-over-whit-2023-11-27-05-20-00-utc.png"
import img from "@/public/tulfa/introducing.svg"


type Props = {}

const Introducing = (props: Props) => {
    const path = "/tulfa/aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc.mp4"

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#batata",
                pin: "#batata",
                scrub: 2,
                end: "+=1200px top"
            },
        })

        tl.fromTo("#introducing", {
            
            scale: 190,
        }, {
            scale: 1,
            duration: 7,
            ease: "circ.out"
        })
        .to("#introducing", {
            duration: 3
        })

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#first",
                // markers: true,
                start: "-=300px bottom",
            }
        })

        tl2.from("#first", {
            y: 500,
        })
        .from("#scandinavian-yellow-sofa", {
            yPercent: 100,
            ease: "sine"
        }, "+=0.5")

    }, [])

  return (
    <div id="wit" className="relative overflow-hidden overflow-x-hidden">
                <div id="batata" className="inline-block relative w-full h-screen">
                    <video className="" autoPlay={true} muted loop>
                        <source src={path} type="video/mp4"  />
                        <track
                            src={path}
                            srcLang="en"
                            label="English"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <Image
                        id="introducing"
                        src={img}
                        alt="introducing"
                        className="video w-full z-20 mix-blend-lighten absolute top-[50%] left-[50%]"
                        style={{
                            transform: "translate(-50%, -50%)"
                        }}
                        width={500}
                        
                    />
                </div>
                <div className="relative z-20 bg-white">
                    <h1 id="first" className="text-slate-900 text-8xl font-bold text-center text-color-trans mb-14">Virtual Product Photography</h1>
                    <Image
                        id="scandinavian-yellow-sofa"
                        src={yellowSofa}
                        alt="modern scandinavian yellow sofa isolated over whit"
                    />
                </div>
            </div>
  )
}

export default Introducing