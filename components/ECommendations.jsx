import React, { useRef } from 'react'
import Image from 'next/image'
import sign from '../public/sign.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from "swiper";
import { useState } from 'react';
import Client1 from "../public/EcoWorks_Testimonials1.jpg"
import Client2 from "../public/EcoWorks_Testimonials2.jpg"
import Client3 from "../public/EcoWorks_Testimonials3.jpg"
import Client4 from "../public/EcoWorks_Testimonials4.jpg"
import Client5 from "../public/EcoWorks_Testimonials5.jpg"
import Client6 from "../public/EcoWorks_Testimonials6.jpg"
import Client7 from "../public/EcoWorks_Testimonials7.jpg"
import Client8 from "../public/EcoWorks_Testimonials8.jpg"

const commendations = [
    {
        img: Client1,
        imgAlt: "",
        content: "Ecoworks is a very comfortable co-working space in Thane with some really good facilities, a good ambiance, and a pleasant work culture. The team is always reliable and prompt in their service. Overall, Ecoworks is a great place to work with cooperative and friendly people.",
        name: "Sahyog Bharti",
        title: "National Head",
        company: "Kich Architectural Products Pvt. Ltd",
        signatureImg: sign,
    },
    {
        img: Client2,
        imgAlt: "",
        content: "The facility managers at Ecoworks are always available to solve all our major or minor issues immediately. Overall, we love the co-working culture and the way we get to network with other professionals here. The location and the flexibility to accommodate businesses of different sizes is what makes Ecoworks the ideal coworking space in Thane west.",
        name: "Ajay Singh",
        title: "Director",
        company: "ONsys Technologies OPC Pvt. Ltd.",
        signatureImg: sign,
    },
    {
        img: Client3,
        imgAlt: "",
        content: "Ecoworks is a nice co-working space in Thane that is ideal for small or medium-sized enterprises in their growing phase. The overall ambiance and the environment are perfect to enhance one’s creativity and productivity. An added bonus to it is the networking that we end up doing with professionals from different companies and industries.",
        name: "Debashish Majumdar",
        title: "Director",
        company: "Xapsol Xtramile People Solution Pvt. Ltd.",
        signatureImg: sign
    },
    {
        img: Client5,
        imgAlt: "",
        content: "Ecoworks co-working has the perfect location in Thane with ample parking available. Also, the work culture is amazing with prompt service and resolution. We are associated with Ecoworks since their inception and we’re very happy with their services and their cooperative staff. ",
        name: "Kautubh Marathe",
        title: "Manager Sourcing",
        company: "Hollander Sleep & Decor",
        signatureImg: sign
    },
    {
        img: Client7,
        imgAlt: "",
        content: "We started our office at Ecoworks six months ago and we confirm without any doubts that it's one of the best co-working spaces in thane. The staff at Ecoworks is super friendly and supportive and has always resolved any infrastructural issues we faced satisfactorily and professionally. We enjoy working at Ecoworks because the office space is clean, calm, and well ventilated which gives us a better environment to work without any external stress.",
        name: "Harit Doshi ",
        title: "Senior Software Developer ",
        company: "Gradatim IT Ventures Pvt. Ltd.",
        signatureImg: sign
    },
    {
        img: Client8,
        imgAlt: "",
        content: "Ecoworks is indeed a great place to work and definitely one of the best co-working spaces at Ghodbunder Road, Thane. It also has the best of facilities that fulfills all our requirements. Regarding the services, they offer prompt solutions and deliver what they promise.",
        name: "Deepak Raidoas",
        title: "Vice President",
        company: "Indobricks Real Estate Advisory Pvt. Ltd.",
        signatureImg: sign
    }
]

function ECommendations({ forwardedRef }) {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div ref={forwardedRef} id='ECommendations' className="bg-black text-white min-h-screen flex justify-center items-center">
            <div className='max-w-7xl mx-auto w-11/12 py-14'>

                <div className="text-3xl md:text-6xl text-center">
                    <span className='text-accentGreen'>e</span>Commendations
                </div>
                <div>

                    <Swiper
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        navigation={
                            {
                                prevEl: prevRef.current,
                                nextEl: nextRef.current
                            }
                        }
                        pagination={{
                            clickable: true,
                        }}
                        centeredSlides={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoHeight={true}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay, Navigation, Pagination]}
                        className="relative"


                    >
                        {commendations.map((slide, index) => (
                            < SwiperSlide key={index}
                                className='flex flex-col lg:flex-row gap-12 justify-center items-center py-12' >

                                <Image alt='' className='drop-shadow-2xl leaf-img  fill-red-700' src={slide.img} width={410} height={420} />
                                <div className='flex flex-col items-start gap-8 w-11/12 md:w-2/4'>
                                    <p className='text-lg md:text-2xl'>
                                        {slide.content}
                                    </p>
                                    <div>
                                        <p>{slide.name}, {slide.title}</p>
                                        <p>{slide.company}</p>
                                        {/* <Image src={slide.signatureImg} className="self-start" width={100} height={80} /> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}


                        <div className="hidden md:block absolute md:top-[50%] left-0 md:left-4 z-50 cursor-pointer" ref={prevRef}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="fill-white hover:fill-accentGreen transition-colors duration-300 ease-in-out" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </div>
                        <div className="hidden md:block absolute md:top-[50%] right-0 md:right-4 z-50 cursor-pointer" ref={nextRef}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="fill-white hover:fill-accentGreen transition-colors duration-300 ease-in-out" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div >



    )
}

export default ECommendations