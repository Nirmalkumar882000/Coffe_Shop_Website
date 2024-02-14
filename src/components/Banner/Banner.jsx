import React from "react";
import bannerImg from "../../assets/coffee-white.png";
import bgImg from "../../assets/website/coffee-texture.jpg"
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  const bgImges = {
    backgroundImage: `url(${bgImg})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
    <div style={bgImges}>
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Image secion */}
          <div className="">
            <img src={bannerImg} alt="bnner image" className="max-w-[430px] w-full mx-auto spin drop-shadow-xl" />
          </div>

          {/* Text Content section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl font-bold sm:text-xl font-cursive">Premium Blen Coffee</h1>
            <p className="text-sm leading-5 tracking-wide text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque delectus possimus fuga debitis sapiente quasi reiciendis, accusantium architecto eum sequi nemo ratione blanditiis repellendus quo quidem dicta nesciunt inventore commodi.
            </p>
            <div className="grid grid-cols-2 gap-6 ">
              <div className="space-y-5" data-aos="fade-up">
                <div className="flex items-center gap-3">
                  <GrSecure className="w-12 h-12 p-3 text-2xl bg-red-100 rounded-full shadow-sm"/>
                  <span>Premium Coffee</span>
                </div>
                <div className="flex items-center gap-3">
                  <IoFastFood className="w-12 h-12 p-3 text-2xl bg-orange-100 rounded-full shadow-sm"/>
                  <span>Hot Coffee</span>
                </div>
                <div className="flex items-center gap-3">
                  <GiFoodTruck className="w-12 h-12 p-3 text-2xl bg-yellow-100 rounded-full shadow-sm"/>
                  <span>Cold Coffee</span>
                </div>
              </div>
              <div className="pl-6 space-y-3 border-l-4 border-primary/100">
                <h1 className="text-2xl font-semibold font-cursive">Tea Lover</h1>
                <p className="text-sm text-gray-500">
                  {''}
                  Much like writing code,brewing the perfect cup of tea requires patience,precision,and a dash of passion to create a  comforting blend of flavers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Banner;
