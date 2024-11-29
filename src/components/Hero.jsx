import React from 'react'
import Header from '../common/Header'
import heroImg from '../assets/images/webp/hero-image.webp'
import bikeImg from '../assets/images/webp/bike-image.webp'
import CommonPeperuney from '../common/CommonPeperuney'

export const Hero = () => {
  return (
      <div className='bg-hero bg-cover bg-no-repeat bg-center'>
          <Header />
              <div className='flex mt-[63px] pb-[27px] flex-col justify-center items-center gap-[54px]'>
                  <img className='max-w-[777px] sm:max-max-w-[373px] w-full' src={heroImg} alt="hero-image" />
                  <img className='max-w-[311px] w-full max-sm:max-w-[221.73px]' src={bikeImg} alt="bike-image" />
      </div>
      <CommonPeperuney className='bg-red h-[76px] sm:h-[100px] flex items-center' />
    </div>
  )
}
