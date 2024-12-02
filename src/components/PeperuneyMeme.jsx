import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Heading from "../common/Heading";
import galleryImg from '../assets/images/webp/gallery-image.webp';
import memeMen from '../assets/images/webp/meme-men.webp';
import bullsImg from '../assets/images/webp/bulls-image.webp';
import posterCarusel from '../assets/images/webp/poster-carusel.webp';
import posterCaruselTwo from '../assets/images/webp/poster-carusel-two.webp';
import Icon from '../common/Icons';

const PeperuneyMeme = () => {
    return (
        <div className='sm:bg-peperuney-meme bg-cover lg:bg-[length:100%_100%] bg-center bg-no-repeat relative max-sm:bg-mobile-meme max-sm:bg-[length:100%_100%]'>
            <div className='max-w-[250px] mx-auto pt-12 max-sm:flex items-center flex-col justify-center sm:hidden pb-[30px]'>
                <Heading className='max-w-[555px] text-center' text={'PEPERUNEY MEME'} />
                <img className='sm:max-w-[250px] max-w-[184px] text-center -mt-1' src={galleryImg} alt="gallery-image" />
           </div>
            <img className='max-w-[678px] sm:block hidden w-full absolute bottom-0 left-0' src={memeMen} alt="meme-men" />
            <div className='lg:pt-[207px] sm:pt-[100px] flex lg:gap-[100px] gap-12 sm:pb-[151px]'>
                <div className='lg:ps-[211px] sm:flex hidden sm:ps-32 max-w-[555px] justify-center items-center flex-col'>
                    <Heading className='max-w-[555px] text-center' text={'PEPERUNEY MEME'} />
                    <img className='sm:max-w-[250px] max-w-[184px] text-center -mt-[18px]' src={galleryImg} alt="gallery-image" />
                </div>
                <div className='relative max-w-[820px] overflow-x-hidden'>
                    <Swiper
                        loop={true}
                        spaceBetween={8}
                        slidesPerView={3}
                        className="relative"
                        style={{ overflow: "hidden" }} 
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 22,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                            1280: {
                                slidesPerView: 2.5,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img className='sm:max-w-[280px] sm:h-[360px]  max-w-[224px] h-[260px]' src={bullsImg} alt="bulls-image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='sm:!max-w-[280px] max-w-[224px] h-[260px] sm:h-[360px] sm:!mr-10 mr-4' src={posterCarusel} alt="poster-carusel" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='sm:!max-w-[280px] sm:h-[360px]  max-w-[224px] h-[260px] sm:mr-10 sm:ms-10  mr-4 ms-4' src={posterCaruselTwo} alt="poster-carusel-two" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='sm:!max-w-[280px] sm:h-[360px]  max-w-[224px] h-[260px] !sm:mr-10 sm:ms-10 mr-4 ms-4' src={bullsImg} alt="bulls-image" />
                        </SwiperSlide>
                    </Swiper>
                    <div className='max-sm:mx-auto text-center sm:mt-11 max-sm:mb-[73px] max-sm:mt-[133px]'><button className='sm:max-w-[293px] transition duration-300 transform hover:scale-105'><Icon iconName='createMeme' /></button>
</div>
                </div>
            </div>
        </div>
    );
};

export default PeperuneyMeme;
