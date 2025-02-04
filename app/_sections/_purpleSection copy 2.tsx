'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import './teste.scss'

type Props = {}

const PurpleSection = (props: Props) => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.utils.toArray('.purple-items').forEach((item: any, index) => {
            const title = item;
            item.style.filter = `url(#distortionFilter-${index})`;

            if (title) {
                // Aplica o efeito de distorção no início
                gsap.fromTo(item.querySelector(".distort feDisplacementMap"), 
                    { attr: { scale: 0 } }, // Estado inicial
                    { 
                        attr: { scale: 100 }, // Estado final
                        duration: 1, // Duração da animação
                        ease: "circ.out" 
                    }
                );

                gsap.fromTo(item.querySelector(".distort feTurbulence"), 
                    { attr: { baseFrequency: '2.01 .01' } }, // Estado inicial
                    { 
                        attr: { baseFrequency: '2.08 .08' }, // Estado final
                        duration: 1, // Duração da animação
                        ease: "circ.out" 
                    }
                );

                gsap.fromTo(title, 
                    { fontVariationSettings: "'wght' 700" }, // Estado inicial
                    { 
                        fontVariationSettings: "'wght' 650", // Estado final
                        duration: 1, // Duração da animação
                        ease: "back.out" 
                    }
                );

                // Adiciona os eventos de hover (opcional)
                title.addEventListener("mouseenter", () => {
                    gsap.to(item.querySelector(".distort feDisplacementMap"), {
                        attr: { scale: 0 },
                        ease: "circ.out"
                    });

                    gsap.to(item.querySelector(".distort feTurbulence"), {
                        attr: { baseFrequency: '2.01 .01' },
                        ease: "circ.out"
                    });

                    gsap.to(title, {
                        fontVariationSettings: "'wght' 700",
                        ease: "back.out"
                    });
                });

                title.addEventListener("mouseleave", () => {
                    gsap.to(item.querySelector(".distort feDisplacementMap"), {
                        attr: { scale: 100 },
                        ease: "circ.out"
                    });

                    gsap.to(item.querySelector(".distort feTurbulence"), {
                        attr: { baseFrequency: '2.08 .08' },
                        ease: "circ.out"
                    });

                    gsap.to(title, {
                        fontVariationSettings: "'wght' 650",
                        ease: "back.out"
                    });
                });
            }
        });
    }, []);

    return (
        <div
            style={{ background: "linear-gradient(90deg, rgba(42,38,106,1) 0%, rgba(67,62,153,1) 50%, rgba(42,38,106,1) 100%)" }}
            id='purple-section'
        >
            <div className='text-6xl  max-w-screen-md !mx-auto font-bold py-16 '>
                <span className='purple-items hover:text-white text-slate-300'>
                    <span className='text-8xl'>We </span>
                    revolutionizes <span className='text-nowrap'>e-commerce</span> by creating stunning, {' '}
                    <svg className="distort">
                        <filter id="distortionFilter-0">
                            <feTurbulence type="fractalNoise" baseFrequency="2.01 .01" numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"></feTurbulence>
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"></feDisplacementMap>
                        </filter>
                    </svg>
                </span>
                <span className='purple-items hover:text-white text-slate-300'>
                    <span>
                        lifelike images of products in digital environments, enhancing customer {' '}
                    </span>
                    <svg className="distort">
                        <filter id="distortionFilter-1">
                            <feTurbulence type="fractalNoise" baseFrequency="2.01 .01" numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"></feTurbulence>
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"></feDisplacementMap>
                        </filter>
                    </svg>
                </span>
                <span className='purple-items hover:text-white text-slate-300'>
                    engagement and reducing the need for physical samples. {' '}
                    <svg className="distort">
                        <filter id="distortionFilter-2">
                            <feTurbulence type="fractalNoise" baseFrequency="2.01 .01" numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"></feTurbulence>
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"></feDisplacementMap>
                        </filter>
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default PurpleSection