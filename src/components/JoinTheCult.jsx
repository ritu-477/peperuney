import React from 'react'
import { SOCIAL_ICONS } from '../common/Helper'
import Icon from '../common/Icons'
import joinCult from '../assets/images/webp/join-cult.webp'
import joinMen from '../assets/images/webp/join-men.webp'

const JoinTheCult = () => {
  return (
      <div className='sm:bg-join-bg bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center max-sm:bg-join-mobile sm:pt-[100px] pt-[60px] md:pt-[140px] pb-[91px] max-sm:h-[850px]'>
        <div className='max-w-[674px] mx-auto'>
          <img className='md:max-w-[670px] sm:max-w-[500px] mx-auto max-sm:max-w-[350px]' src={joinCult} alt="join-cult" />
          <div className='flex justify-center items-center gap-4 pt-5'>
            {SOCIAL_ICONS.map((icon) => (
              <div
                key={icon.name}
                className="bg-menu-bg cursor-pointer bg-[length:100%_100%] h-[87px] flex justify-center items-center w-[100px] bg-no-repeat bg-center py-5 px-4  transition-transform duration-300 transform hover:scale-105"
              >
                <a className="flex justify-center transition duration-300" href={icon.href}>
                  <Icon className="size-8 transition duration-300" iconName={icon.name} />
                </a>
              </div>
            ))}
                </div>
        </div>
        <div className='sm:block hidden'>
          <img className='max-w-[671px] w-full mx-auto' src={joinMen} alt="join-men-image" />
        </div>
    </div>
  )
}

export default JoinTheCult