import React from 'react'
import Img1 from "../../assets/coffee2.png"

const Services = () => {

  const services=[
    {
      id:1,
      img:Img1,
      name:"Espresso",
      description:"lorem ipsum dolor sit amet, consectetur adipiscing",
      aosDelay:"100"
    },
    {
      id:2,
      img:Img1,
      name:"Americano",
      description:"lorem ipsum dolor sit amet, consectetur adipiscing",
      aosDelay:"300"
    },
    {
      id:3,
      img:Img1,
      name:"Cappuccino",
      description:"lorem ipsum dolor sit amet, consectetur adipiscing",
      aosDelay:"500"
    }
  ]


  return (
    <div className='py-10'>
     <div className="container">
      {/* Header  title  */}
      <div className='mb-20 text-center'>
        <h1 className='text-4xl font-bold text-gray-800 font-cursive'>Best Coffee for you</h1>
      </div>

      {/* Service Card Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center md:gap-5'>
          {
            services.map((service)=>{
              return(
              <div
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
                className='rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
                <div className=''>
                <img src={service.img} alt="coffee image" className='max-w-[200px] block'/>
                </div>
              </div>
              )})
          }
        
      </div>


     </div>
    </div>
  )
}

export default Services
