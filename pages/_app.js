import { useEffect } from "react";
import '../styles/globals.css'
import '../styles/index.scss'
import "swiper/css";
import "aos/dist/aos.css"
import Aos from "aos"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init()
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
