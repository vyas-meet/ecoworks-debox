import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
import moment from "moment";

const MySwal = withReactContent(Swal)


export default function Form({ forwardedRef }) {


  const router = useRouter();
  const query = router.query

  useEffect(() => {
    if (query && query.submit === "true") {
      MySwal.fire({
        icon: "success",
        titleText: "Success",
        text: "Thank you for submitting an inquiry. We'll get back to you shortly!",
        timer: 3500,
        showConfirmButton: false
      })
    }
  }, [query]);




  return (
    <div ref={forwardedRef} className=" flex flex-col bg-black text-white justify-center items-center mx-auto z-50">
      <div className=" max-w-7xl w-11/12 mx-auto text-center py-14 flex flex-col gap-3">

        <div id="form" className="text-3xl md:text-6xl text-center">
          What are you waiting for?
        </div>
        <div className="text-2xl md:text-4xl text-accentGreen ">Get started with eco<span className="text-BasicWhite">works</span> for teams!</div>
        <div className="text-lg my-2">Book a tour today!</div>

        <form name="Inquiry Form"
          data-netlify="true"
          method="POST"
          action="/?submit=true"
          className="flex flex-col gap-5 text-black">
          <input type="hidden" name="form-name" value="Inquiry Form" />
          {/* <div className="">
            <input type="text" name="Company Name" className="w-full px-3 md:max-w-lg rounded py-3" placeholder="Company Name" />
          </div> */}
          <div className="">
            <input type="text" name="Contact Name" className="w-full px-3 md:max-w-lg rounded py-3" placeholder="Name" />
          </div>
          <div className="">
            <input type="email" name="Work Email" className="w-full px-3 md:max-w-lg rounded py-3 " placeholder="Email" />
          </div>
          <div>
            <Input
              placeholder="Phone Number"
              className="w-full px-3 md:max-w-lg rounded py-3"
              name="Phone Number"
              country="IN"
              onChange={_ => null} />
          </div>

          {/* <div>
            <input type="text" placeholder="Preferred Date"
              // Workaround for showing placeholder
              onFocus={(e) => {
                e.currentTarget.type = "date"
              }}
              onBlur={(e) => {
                e.currentTarget.type = "text"
              }}
              className="w-full px-3 md:max-w-lg rounded py-3"
              name="Preferred Date" />
          </div>
          <div>
            <input type="text" placeholder="Preferred Time"
              onFocus={(e) => {
                e.currentTarget.type = "time"
              }}
              onBlur={(e) => {
                e.currentTarget.type = "text"
              }}
              className="w-full px-3 md:max-w-lg rounded py-3"
              name="Preferred Time" />
          </div> */}
          <div className="w-full">
            <textarea name="Remarks" className=" rounded p-3 md:max-w-lg w-full" rows="5" placeholder="We are all ears about your needs be it number of employees, desks required or any special requirements." />
          </div>

          <button
            className="inline-block w-full md:max-w-lg mx-auto p-3 text-md font-bold tracking-wide text-black bg-accentGreen rounded-lg
            transition ease-in-out delay-150 hover:bg-green-600  hover:-translate-y-1 hover:scale-105 duration-300">Submit</button>

        </form>
      </div>




    </div>
  )
}