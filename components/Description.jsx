import React, { useRef } from 'react'
var ReactRotatingText = require('react-rotating-text');

function Description({ forwardedRef }) {


    return (
        <section ref={forwardedRef} className='min-h-screen bg-black text-white font-bold flex justify-start items-center  
        px-8 text-5xl 
        md:text-7xl
        xl:px-60 xl:text-8xl'>
            <div data-aos="zoom-in" >
                <div>A co-working space</div>
                <div>designed to</div>
                <div>foster <ReactRotatingText
                    cursor={false}
                    eraseMode="overwrite"
                    color="#8bdde0"
                    items={['creativity...', 'new ideas...', 'learning...']}
                />
                </div>
            </div>

        </section>
    )
}

export default Description