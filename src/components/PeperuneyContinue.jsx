import React from "react";
import "aos/dist/aos.css";
import peperuneyLogo from '../assets/images/webp/pepeureny-logo.webp'
    
const PeperuneyContinue = () => {

  return (
      <div className='bg-pizza-box bg-cover bg-no-repeat bg-center border-t-[2.50px] border-b-[2.50px] sm:border-t-4 sm:border-b-4 border-black max-w-[1440px] mx-auto'>
      <div data-aos="fade-up" className='flex justify-center'>
              <img className='sm:max-w-[403px] max-w-[260px] sm:pt-6 sm:pb-4 pt-4 pb-3' src={peperuneyLogo} alt="pepeuruney-logo" />
          </div>
    </div>
  )
}

export default PeperuneyContinue