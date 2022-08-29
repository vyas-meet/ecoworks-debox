
// Defaults & Hooks
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
// Libraries
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link as Scroll } from 'react-scroll'

// Images
import logo from "../public/EcoWorksLogo.png"

// Components
import Header from '../components/Header'
import EcoExist from '../components/Ecoexist';
import Facilities from '../components/Facilities';
import EcoEvolve from '../components/EcoEvolve';
import ECommendations from '../components/ECommendations';
import FAQ from '../components/FAQ';
import Form from '../components/Form';
import Footer from '../components/Footer'

import EcoWork from '../components/EcoWork';
import Description from '../components/Description';


export default function Home() {
  // Phone Navbar State
  const [isOpen, setIsOpen] = useState(false);

  // Scroll Trigger
  let container = useRef(null)
  let panelOne = useRef(null)
  // let imgDiv = useRef(null)
  let dot = useRef(null)

  let header = useRef(null)
  let navbar = useRef(null)
  let description = useRef(null)
  let ecoExist = useRef(null)
  let ecoWork = useRef(null)
  let ecoEvolve = useRef(null)
  let ecommendations = useRef(null)
  let faq = useRef(null)
  let form = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  const [activeSec, setActiveSec] = useState("home")

  function elementInViewport(element) {

    var myElement = element
    var bounding = myElement.getBoundingClientRect();
    var myElementHeight = myElement.offsetHeight;
    var myElementWidth = myElement.offsetWidth;

    if (bounding.top >= (-myElementHeight + 30)
      && bounding.left >= -myElementWidth
      && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
      && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

      return true
    } else {
      return false
    }
  }


  const trackScroll = () => {
    if (elementInViewport(header.current)) {
      setActiveSec("home")
    } else if (elementInViewport(ecoExist.current)) {
      setActiveSec("ecoExist")
    } else if (elementInViewport(ecoWork.current)) {
      setActiveSec('ecoWork')
    } else if (elementInViewport(ecoEvolve.current)) {
      setActiveSec("ecoEvolve")
    } else if (elementInViewport(ecommendations.current)) {
      setActiveSec('ecommendation')
    } else if (elementInViewport(faq.current)) {
      setActiveSec('faq')
    }
  }

  useEffect(() => {

    window.addEventListener("scroll", trackScroll)

    // Opening Animation
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'none' },
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: header.current,
        onLeave() {
          navbar.current.style.display = "block"
        },
        onEnterBack() {
          navbar.current.style.display = "none"
        }
      }
    });
    tl
      .to([dot], { scale: 50, backgroundColor: "#8acf7e", })
      .from(header.current, { opacity: 0.1 })
      .to(panelOne, { opacity: 0 })
      .to(header.current, { opacity: 1 })
    // .set(panelOne, { autoAlpha: 80, opacity: 0 })

    // gsap.set([panelOne, header.current], { zIndex: (i, target, targets) => targets.length - i });


    return () => window.removeEventListener("scroll", trackScroll)


  }, [])



  return (

    <div className='w-full overflow-hidden'>


      <Head>
        <title>EcoWorks Co-Working Spaces Thane</title>
        <meta name="description" content="Best workspace solutions in Ghodbunder Road, Thane for companies of all sizes.24/7 Security Services, High Speed Internet, Dedicated Parking Area, Signage Facilities, Remote Access Control and a lot more!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Opening */}
      <div id="container" ref={el => { container = el }} >
        <div className="panel panel-one">
          <div ref={el => { panelOne = el }} className="px-2">
            <Image alt="" src={logo} width={1000} height={600} />
          </div>
          <div ref={el => { dot = el }} className="dot bg-accentGreen"></div>
        </div>
      </div>



      <Scroll
        className="cursor-pointer"
        activeClass="active"
        to="form"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        <div
          className="fixed right-7 bottom-7 z-50 h-12 w-24 rounded-full flex justify-center items-center font-bold cursor-pointer text-sm py-4
          transition ease-in-out delay-150 bg-blue shadow-lg hover:-translate-y-1 hover:scale-110 hover:bg-teal-300 duration-300 lg:h-16 lg:w-36 lg:text-lg">
          <p className='text-center'>
            Book a tour
          </p>
        </div>
      </Scroll>

      <a href="tel:+918652378969">
        <div
          className="fixed right-7 bottom-24 lg:bottom-32 z-50 h-12 w-12 rounded-full flex justify-center items-center font-bold cursor-pointer text-sm py-4
          transition ease-in-out delay-150 bg-blue shadow-lg hover:-translate-y-1 hover:scale-110 hover:bg-teal-300 duration-300 lg:h-20 lg:w-20 lg:text-lg">
          <p className='text-center'>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Iconly/Curved/Call">
                <g id="Call">
                  <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.2451 7.46611 11.3894 12.6113C16.5348 17.7554 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            </svg>

          </p>
        </div>
      </a>

      {/* Navbar */}

      <nav ref={navbar} className="bg-white hidden fixed w-full z-50" >
        {/* sticky top-0  */}
        {/* Empty relative div to scroll right at top from footer */}
        <div className="max-w-7xl flex justify-center items-center mx-auto w-11/12 py-2 z-50">
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
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "home" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
                  activeClass="active"
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>Home</Link>
              </li>
              <li>
                <Link
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "ecoExist" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
                  activeClass="active"
                  to="EcoExist"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>Eco-exist</Link></li>
              <li>
                <Link
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "ecoWork" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
                  activeClass="active"
                  to="EcoWork"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>Eco-work</Link></li>
              <li>
                <Link
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "ecoEvolve" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
                  activeClass="active"
                  to="EcoEvolve"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>Eco-evolve</Link>
              </li>
              <li>
                <Link
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "ecommendation" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
                  activeClass="active"
                  to="ECommendations"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>eCommendations</Link></li>
              <li>
                <Link
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "faq" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
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
                  onClick={() => setIsOpen(false)}
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "home" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
                  activeClass="active"
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>Home</Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "ecoExist" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
                  activeClass="active"
                  to="EcoExist"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>Eco-exist</Link></li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "ecoWork" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
                  activeClass="active"
                  to="EcoWork"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>Eco-work</Link></li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "ecoEvolve" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
                  activeClass="active"
                  to="EcoEvolve"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>Eco-evolve</Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "ecommendation" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
                  activeClass="active"
                  to="ECommendations"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}>eCommendations</Link></li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  className={`cursor-pointer delay-300 transition-all hover:text-darkGreen ${activeSec === "faq" ? "border-b-2 border-solid border-darkGreen pb-1" : null}`}
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


      {/* Main */}

      <div className='z-40'>

        <Header forwardedRef={header} />
        <Description forwardedRef={description} />
        <EcoExist forwardedRef={ecoExist} />
        <Facilities />
        <EcoWork forwardedRef={ecoWork} />
        <EcoEvolve forwardedRef={ecoEvolve} />
        <ECommendations forwardedRef={ecommendations} />
        <FAQ forwardedRef={faq} />
        <Form forwardedRef={form} />

        <Footer />
      </div>

    </div>





  )
}
