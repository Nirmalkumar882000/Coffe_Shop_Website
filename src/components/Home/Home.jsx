import React from 'react'
import HeroImg from "../../assets/coffee2.png"

const Home = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white'>
      <div className="container pb-8 smLpb-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text content Section  */}
            <div className='order-2 sm:order-1 gap-6'>
                <h1 className='text-5xl font-bold sm:text-6xl lg:text-7xl'>We Serve the richest  
                    <span className='text-primary font-cursive'>
                        Coffee 
                    </span>
                    in the city
                </h1>
                <div >
                    <button className='px-4 py-2  mt-2 text-white duration-200 border-2 rounded-full bg-gradient-to-r from-primary to-secondary border-primary hover:scale-105'>
                        Coffee And Code 
                    </button>
                </div>
            </div>

            {/* Image Content Section */}
            <div className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative' >
                <img src={HeroImg} alt='coffee-image' className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin '/>
                <div className='absolute p-3 rounded-full bg-gradient-to-r from-primary to-secondary top-10 left-10'>
                    <h1>Hay Coder</h1>
                </div>
                <div className='absolute p-3 rounded-full bg-gradient-to-r from-primary to-secondary bottom-10 right-10'>
                    <h1>Best Coffee</h1>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Home
