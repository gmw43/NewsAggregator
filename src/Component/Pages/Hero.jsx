import React from 'react'
// import heroImg from '../Component/heroImg.jpg'
import heroBg from '../Pages/heroBg.jpg'
const Hero = () => {
  return (
    <>
      <div className="relative">
        <img
          src={heroBg}
          alt=""
          className="w-full h-[60vh] object-cover brightness-50"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center w-[80%]">
          <h2 className="text-white xl:text-6xl lg:text-5xl md:text-4xl leading-relax font-semibold  text-center ">
            The Best <span>News Aggregator</span> Website
          </h2>
          {/* <img src={heroImg} alt="" className="xl:w-[50%] md:w-[40%]" /> */}
        </div>
      </div>
    </>
  )
}

export default Hero
