import React from "react";
import Icon from '../common/Icons'
import allImg from '../assets/images/webp/all-man.webp'
import PeperuneySlider from '../common/PeperuneySlider'

export const BuyPepruney = () => {

  return (
    <div className='flex flex-col max-sm:-mt-8'>
      <div className='bg-buy-bg bg-cover bg-no-repeat bg-center sm:h-[1033px] h-[652px] sm:mt-[52px] flex items-end'>
        <div className='container'>
          <div className='flex flex-col justify-center sm:pb-[30px] pb-5 items-center gap-2'>
            <button data-aos="fade-right" className="transition duration-300 transform hover:scale-105" ><Icon className='max-w-[262px] transition duration-300 transform hover:scale-105' iconName="buyPeperuney" /></button>
            <img data-aos="zoom-in" className='max-w-[160px]' src={allImg} alt="all-image" />
          </div>
        </div>
        <div>
        </div>
      </div>
      <PeperuneySlider className='sm:h-[220px] h-[120px] pt-[30px] border-b-0' bgColor="bg-green" />
    </div>
  )
}
