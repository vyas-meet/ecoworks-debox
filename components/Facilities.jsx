import React from 'react'
import Image from "next/image";


import security from "../public/facilities/Security.svg"
// import cleaning from "../public/facilities/Cleaning.svg"
import signage from "../public/facilities/Signage.svg"
import parking from "../public/facilities/parking.svg"
import login from "../public/facilities/login.svg"
import wifi from "../public/facilities/Wifi.svg"


const data = [
    {
        img: security,
        content: "24x7 Common security services "
    },
    {
        img: login,
        content: "Remote Access Control"
    },
    {
        img: wifi,
        content: "High-speed LAN and Wi-Fi services"
    },
    {
        img: parking,
        content: "Dedicated parking area for 2 and 4 wheelers"
    },
    {
        img: signage,
        content: "Signage facilities in the lobby as per availability"
    },
]

function Facilities() {
    return (
        <div className='bg-grey-200'>
            <div className='w-11/12 max-w-7xl mx-auto py-14'>

                <div id="EcoExist" className="text-2xl md:text-5xl font-bold text-center">
                    Amenities you get...
                </div>

                <div className='grid xl:grid-cols-5 mx-auto py-14 gap-8 justify-center xl:justify-start'>
                    {
                        data.map((data, index) => (


                            <div key={index} className='text-xl flex flex-col justify-between items-center align gap-8 align-top'>

                                <div className=''>
                                    <div className='h-20 w-20 flex justify-center items-center'>
                                        <Image alt='' className='w-full h-full' objectFit='contain' src={data.img} />
                                    </div>
                                </div>

                                <div className='text-center max-w-sm xl:h-2/3'>

                                    {data.content}
                                </div>

                            </div>


                        ))
                    }

                </div>
            </div>


        </div>
    )
}

export default Facilities