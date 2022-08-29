import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const Questions = [
    {
        question: "How much does a coworking space in Thane cost?",
        answer: "The actual prices for a co-working space in Thane vary from about Rs 5,000 - Rs 10,000+ GST. But it also depends on the location, number of people, agreement term, and availability."
    },
    {
        question: "Can I just book the coworking space just for a day?",
        answer: "Yes! you can book a desk in a coworking space for just a day with our day pass at just Rs 400+ GST. Get complete access to our coworking space and experience the space yourself."
    },
    {
        question: "What does my Ecowork co-working space membership include?",
        answer: "With your Ecowork membership, you not only get complete access to our coworking space but also our high-speed internet, telephone booths, our ergonomic furniture, breakout space, networking events, exclusive partner discounts, and our monthly newsletter."
    },
    {
        question: "Can I come down to view the co-working space?",
        answer: "Yes of course, you can come down to view the co-working space. Simply call us or book an appointment through our website."
    }

]


function FAQ({ forwardedRef }) {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="min-h-screen flex justify-center items-center" ref={forwardedRef} id="FAQ">
            <div className='max-w-7xl w-11/12 mx-auto py-14 px-1 md:px-0'>
                <div className="text-3xl md:text-6xl text-center mb-16 ">
                    FAQ's
                </div>
                <div>
                    {Questions.map((qaa, index) => (
                        <Accordion key={index} open={open === index + 1} onClick={() => handleOpen(index + 1)} className="my-4">
                            <AccordionHeader className="text-left text-base md:text-2xl">{qaa.question}</AccordionHeader>
                            <AccordionBody className="text-lg">{qaa.answer}</AccordionBody>
                        </Accordion>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default FAQ