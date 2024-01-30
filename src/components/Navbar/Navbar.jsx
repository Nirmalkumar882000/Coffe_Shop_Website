import React from 'react'
import Logo from "../../assets/website/coffee_logo.png"
import {FaCoffee} from "react-icons/fa"


const Navbar = () => {

   const Menus=[
    {
      id:1,
      name:'Home',
      link:"/#",
    },
    {
      id:2,
      name:'Services',
      link:"/#services",
    },
    {
      id:3,
      name:'About',
      link:"/#about",
    }

   ]
  


  return (
    <div className='text-white bg-gradient-to-r from-secondary to-secondary/90'>
      <div className="container py-2">
        <div className="flex justify-between gap-4 justify-items-center">
          {/* logo Section */}
          <div className=''>
            <a className='flex items-center justify-center gap-3 text-2xl font-bold sm:text-3xl font-cursive' href='#'>
              <img src={Logo} alt='logo' className='w-14'/>
              Coffee Cafe</a>
          </div>
          {/* Links Section */}
          
          <div className='flex items-center justify-between gap-4'>
            <ul className='items-center hidden gap-4 sm:flex'>
              {
                Menus.map((data,index)=>(
                  <li key={index}>
                    <a href={data.link} className='inline-block px-4 py-4 text-xl duration-200 text-white/70 hover:text-white'>
                    {data.name}
                    </a>
                  </li>
                ))}
            </ul>
            <button className='flex items-center gap-3 px-4 py-2 duration-200 rounded-full bg-primary/70 hover:scale-105 '>
              Order
              <FaCoffee className='text-xl cursor-pointer'/>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
