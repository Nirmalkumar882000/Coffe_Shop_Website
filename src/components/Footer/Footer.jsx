import React from 'react'
import {FaFacebook,FaInstagram,FaLinkedin} from "react-icons/fa6"
import FooterBg from "../../assets/website/coffee-footer.jpg"

function Footer() {
  const BgImg = {
    backgroundImage: `url(${FooterBg})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const FooterLink=[
    {
      title:"Home",
      link:"/#"
    },
    {
      title:"About",
      link:"/#about"
    },
    {
      title:"Contact",
      link:"/#contact"
    },
    {
      title:"Blog",
      link:"/#blog"
    }
  ]


  return (
    <div style={BgImg} className='text-white'>
      <div className='bg-black/40 min-h-[400px] '>
        <div className='container grid pt-5 pb-20 md:grid-cols-3'>
          {/* Company details */}
          <div className=''>
            <a href='#' className='text-2xl font-semibold tracking-widest font-cursive sm:text-3xl'>
              Coffee Cafe
            </a>
            <p className='pt-4'>
              {""}
              Crafted Coffee, Cozy Vibes,
              Unforgettable
              Moments - Your Perfect
              Espresso Escape
            </p>
          </div>
          {/* Footer Link */}
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-semibold sm:text-left">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLink.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block duration-200 hover:scale-105"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-semibold sm:text-left">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLink.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block duration-200 hover:scale-105 "
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address */}
            <div className="col-span-2 px-4 py-8 sm:col-auto">
              <h1 className="mb-3 text-xl font-semibold sm:text-left">
                Address
              </h1>
              <div>
                <p className="mb-3">SivaKasi , TamilNadu</p>
                <p>+91 9363453509</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl duration-300 hover:text-primary" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl duration-200 hover:text-primary" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl duration-200 hover:text-primary" />
                  </a>
                </div>
              </div>

        </div>

      </div>
      </div>
      </div>

    </div>
  )
}

export default Footer
