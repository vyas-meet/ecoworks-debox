import Image from "next/image"
import Link from "next/link"

import { useEffect, useRef } from "react"



// Libraries
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const data = [
    {
        tile: "Hot Desks",
        content() {
            return (
                <>
                    Ideal for <mark className="text-highlight">remote workers, freelancers or solopreneurs</mark>  who just want a good space and a great environment to work near home. Simply bring your laptop, choose any open seat from our coworking space, and begin your productive workday.
                </>
            )
        }
    },
    {

        tile: "Dedicated Desks / Glass Cabins",

        content() {
            return (
                <>
                    Share a private office with other members where you can <mark className="text-highlight">be your own boss with a permanent desk</mark> at our coworking space.

                </>
            )
        }
    },
    {

        tile: "Private Cabins",

        content() {
            return (
                <>
                    Aesthetically designed private cabins <mark className="text-highlight">ideal for big or small teams</mark>  who don't shy away from always putting their best foot forward.

                </>
            )
        }
    },
    {

        tile: "Customised Private Cabins",

        content() {
            return (
                <>
                    Have something specific in mind for your small or growing team? We'll work that out too! With our customized solutions for private cabins, we're sure to provide you with a <mark className="text-highlight"> tailored solution for your needs. </mark>
                </>
            )
        }
    },
    {

        tile: "Day Passes",
        content() {
            return (
                <>
                    Want to <mark className="text-highlight">experience our coworking space</mark> or would just want to  <mark className="text-highlight"> catchup with a colleague</mark> in Thane? Then we’ve got you covered with our Day Passes.

                </>
            )
        }
    },

]





export default function EcoWork({ forwardedRef }) {



    // Scroll Trigger
    let highlightArray = []
    const imgArray = [useRef(null), useRef(null), useRef(null), useRef(null)]
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {

        // Highlight Effect
        highlightArray = Array.from(forwardedRef.current.querySelectorAll(".text-highlight"))

        highlightArray.forEach((highlight) => {
            ScrollTrigger.create({
                trigger: highlight,
                start: "bottom top",
                onEnter: () => highlight.classList.add("active"),
                // onLeave: () => highlight.classList.remove("active")
            });
        });

        // Image Scale Effect

        imgArray.forEach((img, index) => {
            const tl = gsap.timeline({
                defaults: { duration: 1, ease: 'none' },
                scrollTrigger: {
                    trigger: img,
                    start: "bottom center",
                    end: "+=50%",
                    scrub: true,
                }
            });
            tl
                .to(imgArray[index], { scale: 1 })
        })


    })


    return (
        <div ref={forwardedRef} id="EcoWork" className=" h-full bg-black text-white pt-6 pb-14">
            <div className="text-3xl md:text-6xl text-center pb-4">
                <span className='text-accentGreen'>e</span>co-work
            </div>
            <p className="text-center text-xl pb-6">Workspace solutions for companies of all sizes.</p>
            <div className="flex flex-col gap-3 justify-center items-center">
                {
                    data.map((data, index) => {
                        return (
                            <div key={index} className="min-h-screen w-full">
                                <div ref={el => { imgArray[index] = el }} className={`relative ecospaces-img img-${index + 1} xl:mb-8`} />
                                <div className="mx-auto w-11/12 flex flex-col 
                            gap-1 pt-6
                            xl:max-w-7xl 
                            xl:flex-row lg:items-center lg:justify-around lg:gap-16" >
                                    <h3
                                        className="tracking-wider font-bold 
                                                text-2xl
                                                md:text-3xl
                                                xl:text-5xl xl:w-4/12">
                                        {data.tile}</h3>
                                    <p className="text-md 
                                md:text-2xl
                                xl:w-8/12  xl:text-3xl ">{data.content()}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>



    )
}