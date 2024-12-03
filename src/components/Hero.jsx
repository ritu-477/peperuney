import React from "react";
import "aos/dist/aos.css";
import Header from '../common/Header'
import heroImg from '../assets/images/webp/hero-image.webp'
import bikeImg from '../assets/images/webp/bike-image.webp'
import PeperuneySlider from '../common/PeperuneySlider'
import smallBikeImg from '../assets/images/webp/small-bike.webp'

export const Hero = () => {
 
  return (
    <div className='sm:bg-hero bg-cover bg-no-repeat bg-center max-sm:bg-hero-mobile-view' id='about'>
      <Header />
      <div className='flex max-sm:mt-[150px] sm:pt-[90px] flex-col justify-center items-center sm:gap-[54px] max-sm:gap-[95px]'>
        <img data-aos="fade-up" className='lg:max-w-[777px] sm:max-w-[500px] sm:max-max-w-[373px] w-full' src={heroImg} alt="hero-image" />
        <img data-aos="fade-right" className='w-full sm:block hidden' src={bikeImg} alt="bike-image" />
        <img data-aos="fade-right" className='w-full sm:hidden h-[262px]' src={smallBikeImg} alt="bike-image" />
      </div>
      <PeperuneySlider className='bg-crimson-red h-[76px] sm:h-[100px] flex items-center' />
    </div>
  )
}
