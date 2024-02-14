import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import AppBanner from './components/AppBanner/AppBanner'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'


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
     <AppBanner/>
     <Testimonial/>
     <Footer/>
    </div>
  )
}

export default App
