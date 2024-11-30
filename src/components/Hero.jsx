import React from 'react'
import Header from '../common/Header'
import heroImg from '../assets/images/webp/hero-image.webp'
import bikeImg from '../assets/images/webp/bike-image.webp'
import CommonPeperuney from '../common/CommonPeperuney'
import smallBikeImg from '../assets/images/webp/small-bike.webp'

export const Hero = () => {
  return (
    <div className='bg-hero bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center'>
          <Header />
              <div className='flex mt-[63px] flex-col justify-center items-center gap-[54px]'>
                  <img className='max-w-[777px] sm:max-max-w-[373px] w-full' src={heroImg} alt="hero-image" />
        <img className='w-full sm:block hidden' src={bikeImg} alt="bike-image" />
        <img className='w-full sm:hidden h-[262px]' src={smallBikeImg} alt="bike-image" />
      </div>
      <CommonPeperuney className='bg-red h-[76px] sm:h-[100px] flex items-center' />
    </div>
  )
}
