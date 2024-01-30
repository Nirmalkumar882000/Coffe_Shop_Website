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
      <div className='text-center mb-20'>
        <h1 className='text-4xl font-bold font-cursive text-gray-800'>Best Coffee for you</h1>
      </div>

      {/* Service Card Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center md:gap-5'>
        <div>
          {
            services.map((service,index)=>{
              return(
              <div key={index} className='rounded-full'>
                <div >
                <img src={service.img} alt="coffee image"/>
                </div>
              </div>
              )})
          }
        </div>
      </div>


     </div>
    </div>
  )
}

export default Services
