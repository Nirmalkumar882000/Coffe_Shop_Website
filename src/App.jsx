import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
<<<<<<< HEAD
import AppBanner from './components/AppBanner/AppBanner'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
=======
>>>>>>> be2c79f4f0f73ba4f903d782b96503eb15a8fead


const App = () => {


  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },[])


  return (
    <div className=''>
     <Navbar/>
     <Home/>
     <Services/>
     <Banner/>
<<<<<<< HEAD
     <AppBanner/>
     <Testimonial/>
     <Footer/>
=======
>>>>>>> be2c79f4f0f73ba4f903d782b96503eb15a8fead
    </div>
  )
}

export default App
