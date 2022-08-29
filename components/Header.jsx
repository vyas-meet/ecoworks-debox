import Image from "next/image"
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../public/EcoWorksLogo.png"
import Carousel from '../components/Carousel';

export default function Header({ forwardedRef }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
      <header className="" ref={forwardedRef}>
        <nav className="bg-white w-full z-50" >

          {/* Empty relative div to scroll right at top from footer */}
          {/* <div className="relative top-5" id="main"></div> */}
          <div className="max-w-7xl flex justify-center items-center mx-auto w-11/12 py-2 z-50">
            <div className="relative top-16" id="main"></div>
            <div className='hidden lg:block'>
              <Image src={logo} height="110" width="180" alt="Ecoworks Co-working Spaces Logo" />
            </div>
            <div className='block lg:hidden'>
              <Image src={logo} height="80" width="120" alt="Ecoworks Co-working Spaces Logo" />
            </div>


            {/* Desktop Navbar */}
            <div className="hidden lg:block ml-auto">
              <ul className=" list-none font-bold text-lg  flex flex-row gap-10">
                <li className="">
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>Home</Link>
                </li>
                <li>
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="EcoExist"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>Eco-exist</Link></li>
                <li>
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="EcoWork"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>Eco-work</Link></li>
                <li>
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="EcoEvolve"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>Eco-evolve</Link>
                </li>
                <li>
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="ECommendations"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>eCommendations</Link></li>
                <li>
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="FAQ"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>FAQ'S</Link></li>
              </ul>
            </div>
            {/* Mobile Navbar */}
            <div
              className={`${isOpen ? "block" : "hidden"
                } fixed transition-all top-0 left-0 w-full h-full z-50 bg-black text-white`}
            >
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="absolute top-6 right-6 text-white text-6xl"
                aria-label="Menu Mobile Button"
              >
                &times;
              </button>
              <ul className="flex flex-col justify-center items-center gap-4 h-full">
                <li className="">
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>Home</Link>
                </li>
                <li>
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="EcoExist"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>Eco-exist</Link></li>
                <li>
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="EcoWork"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>Eco-work</Link></li>
                <li>
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="EcoEvolve"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>Eco-evolve</Link>
                </li>
                <li>
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="ECommendations"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>eCommendations</Link></li>
                <li>
                  <Link
                    className={`cursor-pointer delay-500 transition-all hover:text-darkGreen `}
                    activeClass="active"
                    to="FAQ"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>FAQ'S</Link></li>
              </ul>
            </div>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex p-3 lg:hidden text-black ml-auto"
              aria-label="Menu Mobile Button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

        </nav>
        <Carousel />
      </header>
    </div>
  )

}    