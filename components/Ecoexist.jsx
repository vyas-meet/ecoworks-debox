import React, { useState, useRef } from "react";
import EssentialButton from "./reusable/EssentialButton";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper";



import EcoExist1 from "../public/Eco_Exist1.jpg"
import PoolTable from "../public/PoolTable.jpg"
import EcoExist3 from "../public/Eco_Exist3.jpg"
import ConferenceRoom from "../public/ConferenceRoom.jpg"
import CallingPods from "../public/CallingPods.jpg"
import BusinessLounge from "../public/BusinessLounge.jpg"

const data = [
    {
        img: EcoExist1,
        title: "Breakout Zone",
        heading: "Breakout Zone",
        body: "The most colorful and vibrant corner at Ecoworks. Connect with your colleagues, get some work done or just come and hang out here.",
        content() {
            return (
                <>
                    <p>
                        The most colorful and vibrant corner at Ecoworks.

                    </p>
                    <p>
                        Connect with your colleagues, get some work done or just come and hang out here.
                    </p>
                </>
            )
        }
    },
    {
        img: PoolTable,
        title: "Pool Table",
        heading: "Pool Table",
        body: "Say hello to the newest addition to the space! Plug in those competitive spirits and just take a break!",
        content() {
            return (
                <>
                    <p>
                        Say hello to the newest addition to the space!
                    </p>
                    <p>
                        Plug in those competitive spirits and just take a break!
                    </p>
                </>
            )
        }
    },
    {
        img: EcoExist3,
        title: "Cafeteria",
        heading: "Cafeteria",
        body: "Bond with your colleagues over a delicious lunch or a coffee break! Our in-house cafeteria has all the facilities like microwave, refrigerator, water filter, coffee machine, cutleries, and more...",
        content() {
            return (
                <>
                    <p>
                        Bond with your colleagues over a delicious lunch or a coffee break!
                    </p>
                    <p>
                        Our in-house cafeteria has all the facilities like microwave, refrigerator, water filter, coffee machine, cutleries, and more..
                    </p>
                </>
            )
        }
    },
    {
        img: ConferenceRoom,
        title: "Conference Room",
        heading: "Conference Room",
        body: "The most colorful and vibrant corner at Ecoworks. Connect with your colleagues, get some work done or just come and hang out here.",
        content() {
            return (
                <>
                    <p>
                        The perfect place to hold productive training or brainstorming sessions.

                    </p>
                    <p>
                        Our meeting spaces can be booked by the hour or for the day.
                    </p>
                    <p>
                        Contact our facility manager to book the space.
                    </p>
                </>
            )
        }
    },
    {
        img: CallingPods,
        title: "Calling Pods",
        heading: "Calling Pods",
        body: "The most colorful and vibrant corner at Ecoworks. Connect with your colleagues, get some work done or just come and hang out here.",
        content() {
            return (
                <>
                    <p>
                        Need a little privacy in the shared space to make a few quick calls?

                    </p>
                    <p>
                        Then we’ve got you covered with our calling pods.
                    </p>
                </>
            )
        }
    },
    {
        img: BusinessLounge,
        title: "Business Lounge",
        heading: "Business Lounge",
        body: "The most colorful and vibrant corner at Ecoworks. Connect with your colleagues, get some work done or just come and hang out here.",
        content() {
            return (
                <>
                    <p>
                        Have those fun brainstorming sessions or just come by to say Hi!

                    </p>
                    <p>
                        Our business lounge will be the perfect place to connect with your fellows.
                    </p>
                </>
            )
        }
    },
]

const Essentials = ({ forwardedRef }) => {

    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className="flex justify-center items-center flex-col gap-4 px-3 pt-5 m-2 xl:px-15 py-14 xl:m-4 select-none"
            ref={forwardedRef}
        >
            <div id="EcoExist" className="text-2xl md:text-6xl text-center">
                <span className='text-accentGreen'>e</span>co-exist
            </div>
            <p className="text-center text-xl mb-4">Learn. Work. Play. Repeat</p>

            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                }}
                pagination={false}
                navigation={
                    {
                        prevEl: prevRef.current,
                        nextEl: nextRef.current
                    }
                }
                autoplay={true}
                modules={[Autoplay, EffectCube, Pagination, Navigation]}
                className="max-w-full xl:max-w-screen-lg mx-auto z-50 h-full w-full"
            >
                {data.map((essential, idx) => {
                    return (
                        <SwiperSlide className="w-full h-full mx-auto" key={idx}>

                            <div className="mx-auto text-center mb-6 h-80  md:h-[28rem] relative">
                                <Image
                                    src={essential.img}
                                    alt={essential.title}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>

                            <div className="text-center">
                                <h3 className="font-bold text-2xl md:text-4xl mb-3 mx-auto text-darkGreen px-4">
                                    {essential.heading}
                                </h3>
                                <p className="text-md md:text-xl text-gray-400 mx-auto">
                                    {essential.content()}
                                </p>
                            </div>


                        </SwiperSlide>
                    );

                })}

                <div className="hidden md:block absolute md:top-[50%] left-0 md:left-4 z-50 cursor-pointer" ref={prevRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="fill-black hover:fill-darkGreen transition-colors duration-300 ease-in-out" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </div>
                <div className="hidden md:block absolute md:top-[50%] right-0 md:right-4 z-50 cursor-pointer" ref={nextRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="fill-black hover:fill-darkGreen transition-colors duration-300 ease-in-out" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </Swiper>


        </div>
    );
};

export default Essentials;
