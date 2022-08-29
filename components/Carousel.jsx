import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HomeB1 from "../public/HomeBanner1.jpg"
import HomeB2 from "../public/HomeBanner2.jpg"
import HomeB3 from "../public/HomeBanner3.jpg"

import { Autoplay, Pagination, Navigation } from "swiper";
import { useRef } from "react";

const data = [
    {
        img: HomeB1,
        alt: "Pool"
    },
    {
        img: HomeB2,
        alt: "Green"
    },
    {
        img: HomeB3,
        alt: "Sofa"
    }
]

export default function Carousel() {

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div id="">
            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={false}
                navigation={
                    {
                        prevEl: prevRef.current,
                        nextEl: nextRef.current
                    }
                }
                speed={8000}
                modules={[Autoplay, Navigation]}
                className="mySwiper w-full h-full relative"
            >
                {
                    data.map((home, idx) => {
                        return (
                            <SwiperSlide key={idx} className=" flex justify-center ">
                                <div className="banner">

                                    <Image src={home.img} objectFit="cover" layout="fill" alt={home.alt} priority />

                                </div>
                            </SwiperSlide>
                        )
                    }
                    )
                }
                <div className="hidden md:block absolute md:top-[50%] left-0 md:left-4 z-50 cursor-pointer" ref={prevRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="fill-white z-50 stroke-[0.3] stroke-black hover:fill-accentGreen transition-colors duration-300 ease-in-out" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </div>
                <div className="hidden md:block absolute md:top-[50%] right-0 md:right-4 z-50 cursor-pointer" ref={nextRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="fill-white z-50 stroke-[0.3] stroke-black hover:fill-accentGreen transition-colors duration-300 ease-in-out" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </Swiper>

        </div>
    )

}
