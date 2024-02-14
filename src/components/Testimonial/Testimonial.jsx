import React from 'react'
import Slider from 'react-slick'
const test=[
  {
    id:1,
    name:"Praveen C",
    text:"lorem ipsum dolor sit amet, consectetur adipiscing",
    img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:2,
    name:"Sachin",
    text:"lorem ipsum dolor sit amet",
    img:"https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id:3,
    name:"Rahul M",
    text:"lorem ipsum dolor sit amet lorem, consectetur adipiscing elit",
    img:"https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:4,
    name:"Prakash",
    text:"lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lobortis, sed diam nonumy",
    img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]

const Testimonial = () => {



const settings={
  dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

}




  return (
    <div className='mb-10 py-14'>
    <div className='container'>
      {/* Header section */}
      <div className='mb-10 text-center '>
        <h1 className='text-5xl font-semibold text-gray-800 font-cursive'>Testimonials</h1>
      </div>

      {/* Testimonial card Section */}
      <div data-aos="zoom-in">
          <Slider {...settings}>
            {test.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="relative flex flex-col gap-4 px-6 py-8 mx-4 shadow-lg rounded-xl bg-primary/10"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="absolute top-0 right-0 font-serif text-black/20 text-9xl">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          </div>
    </div>
    </div>
  )
}

export default Testimonial
