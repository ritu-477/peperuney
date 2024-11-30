import React from 'react'
import Icon from '../common/Icons'
import allImg from '../assets/images/webp/all-man.webp'
import CommonPeperuney from '../common/CommonPeperuney'

export const BuyPepruney = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-buy-bg bg-cover bg-no-repeat bg-center sm:h-[1033px] h-[652px] sm:mt-[52px] flex items-end'>
        <div className='container'>
          <div className='flex flex-col justify-center sm:pb-[30px] pb-5 items-center gap-2'>
            <button><Icon className='max-w-[262px]' iconName="buyPeperuney" /></button>
            <img className='max-w-[160px]' src={allImg} alt="all-image" />
          </div>
        </div>
        <div>
        </div>
      </div>
      <CommonPeperuney className='sm:h-[271px] h-[140px] pt-[30px] border-b-0' bgColor="bg-green" />
      </div>
  )
}
