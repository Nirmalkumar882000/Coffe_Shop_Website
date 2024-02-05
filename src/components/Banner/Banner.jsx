
import bg from "../../assets/website/coffee-texture.jpg"
import banner from "../../assets/coffee-white.png"

const Banner = () => {

  const bgImg={
    backgroundImage: `url(${bg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  }


  return (
    <div className='' style={bgImg}>
      <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div data-aos="zoom-in">
              <img className=' max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin' src={banner} alt="banner image"/>
            </div>
          </div>

        </div>

      </div>
    
      </div>
  )
}

export default Banner