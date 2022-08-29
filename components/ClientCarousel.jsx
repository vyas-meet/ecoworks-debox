import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import { Autoplay } from "swiper";
import Image from "next/image"

// import useMediaQuery from "../hooks/useMediaQuery";

function ClientCarousel({ imgs, speed, delay }) {
    //   const isDesktop = useMediaQuery('(min-width: 960px)');

    return (
        <Swiper
            //centeredSlides={true}
            slidesPerView={3}
            spaceBetween={15}
            loop={true}
            speed={speed}
            autoplay={{
                delay: delay,
                disableOnInteraction: false,
            }}
            pagination={false}
            navigation={false}
            modules={[Autoplay]}
            breakpoints={{

                510: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                750: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                900: {
                    slidesPerView: 8,
                    spaceBetween: 30,
                },

                1150: {
                    slidesPerView: 10,
                    spaceBetween: 30,
                }



            }}


            className="mySwiper h-full w-full ">

            {
                imgs.map((clients, idx) => {
                    return (
                        <SwiperSlide key={idx} className="flex flex-row justify-center py-5 h-full w-max">
                            <div className=" clients rounded-xl  py-2 px-4 md:px-5  flex justify-center items-center md:w-full md:h-full bg-white ">
                                <Image className="" src={clients.img} objectFit="contain" height="100" width="120" alt={clients.alt} />

                            </div>
                        </SwiperSlide>
                    )
                }
                )
            }


        </Swiper>
    )
}

export default ClientCarousel