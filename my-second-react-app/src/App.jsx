import About from './Components/About'
import ContactInfo from './Components/ContactInfo'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import {ToastContainer} from 'react-toastify';
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'   // ← important! import the CSS too

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,       // animation speed in ms
      once: true,          // animate only once on scroll
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <div className='overflow-hidden w-full'>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default App