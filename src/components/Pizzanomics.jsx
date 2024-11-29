import React from 'react'
import pizzaNomicsLayer from '../assets/images/webp/pizzanomics-layer.webp'
import peperunryImg from '../assets/images/webp/pepe-runny-image.webp'

const Pizzanomics = () => {
  return (
      <div className='relative'>
          <img className='absolute top-0 w-full' src={pizzaNomicsLayer} alt="pizzanomics-layer" />
          <div className='bg-pizzanomics-bg bg-[length:100%_100%] bg-no-repeat bg-center pt-[200px]'>
                  <div className='flex md:flex-row flex-col justify-between'>
                      <div className='w-[485px] relative z-[1]'>
                          <img className='max-w-[485px] w-full' src={peperunryImg} alt="peperunry-image" />
                      </div>
                  </div>
          </div>
    </div>
  )
}

export default Pizzanomics