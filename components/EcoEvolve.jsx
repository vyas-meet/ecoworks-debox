import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import Logo1 from "../public/Client_Logo1.png"
import Logo2 from "../public/Client_Logo2.png"
import Logo3 from "../public/Client_Logo3.png"
import Logo4 from "../public/Client_Logo4.png"
import Logo5 from "../public/Client_Logo5.png"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import { Autoplay } from "swiper";
import ClientCarousel from "./ClientCarousel"




const data1 = [
    {
        img: Logo1,
        alt: "Om Consultancy"
    },
    {
        img: Logo2,
        alt: "Kezzler"
    },
    {
        img: Logo3,
        alt: "Xapsol"
    },
    {
        img: Logo4,
        alt: "Gradatim"
    },
    {
        img: Logo5,
        alt: "ONsys"
    },
    {
        img: Logo1,
        alt: "Om Consultancy"
    },
    {
        img: Logo2,
        alt: "Kezzler"
    },
    {
        img: Logo3,
        alt: "Xapsol"
    },
    {
        img: Logo4,
        alt: "Gradatim"
    },
    {
        img: Logo5,
        alt: "ONsys"
    },
    {
        img: Logo1,
        alt: "Om Consultancy"
    },
    {
        img: Logo2,
        alt: "Kezzler"
    },
    {
        img: Logo3,
        alt: "Xapsol"
    },
    {
        img: Logo4,
        alt: "Gradatim"
    },
    {
        img: Logo5,
        alt: "ONsys"
    }
]

const data2 = [
    {
        img: Logo4,
        alt: "Gradatim"
    },
    {
        img: Logo5,
        alt: "ONsys"
    },
    {
        img: Logo1,
        alt: "Om Consultancy"
    },
    {
        img: Logo2,
        alt: "Kezzler"
    },
    {
        img: Logo3,
        alt: "Xapsol"
    },
    {
        img: Logo4,
        alt: "Gradatim"
    },
    {
        img: Logo5,
        alt: "ONsys"
    },
    {
        img: Logo1,
        alt: "Om Consultancy"
    },
    {
        img: Logo2,
        alt: "Kezzler"
    },
    {
        img: Logo3,
        alt: "Xapsol"
    },
    {
        img: Logo4,
        alt: "Gradatim"
    },
    {
        img: Logo5,
        alt: "ONsys"
    },
    {
        img: Logo1,
        alt: "Om Consultancy"
    },
    {
        img: Logo2,
        alt: "Kezzler"
    },
    {
        img: Logo3,
        alt: "Xapsol"
    }
]



export default function EcoEvolve({ forwardedRef }) {


    return (
        <div ref={forwardedRef} id="EcoEvolve" className="min-h-screen flex flex-col items-center justify-center">

            <div className="text-3xl md:text-6xl text-center pb-4">
                <span className='text-accentGreen'>e</span>co-evolve
            </div>
            <p className="text-center text-lg py-4 w-11/12 mx-auto">Work with the best of minds in the industry, make connections and who knows if a casual
                conversation may take your business to the next level.</p>
            <div className=" h-full w-full block overflow-hidden">

                <ClientCarousel imgs={data1} speed={14000} delay={500} />
                <div className="w-screen ml-6 md:ml-14">
                    <ClientCarousel imgs={data2} speed={14000} delay={500} />
                </div>
                <ClientCarousel imgs={data1} speed={14000} delay={500} />


            </div>
        </div>

    )
}