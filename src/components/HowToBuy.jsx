import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import howLayer from "../assets/images/webp/how-buy-layer.webp";
import CommonHeading from "../common/CommonHeading";
import howPeperuney from "../assets/images/webp/how-buy-peperuney.webp";
import pizzImg from "../assets/images/webp/pizza-image.webp";
import { CARD_DATA_HOW } from '../common/Helper'

const HowToBuy = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: true,
        });
    }, []);

    return (
        <div className="relative bg-white" id="how-to-buy">
            <img
                className="absolute sm:top-[-190px] -top-[60px] w-full h-[69px] sm:h-[195px]"
                src={howLayer}
                alt="how-layer"
            />
            <div className="flex justify-center flex-col items-center pb-10">
                <CommonHeading
                    className="text-center pt-12"
                    text={"HOW TO BUY"}
                />
                <img
                    className="sm:max-w-[365px] max-w-[231px] sm:-mt-5 -mt-3 max-sm:h-[80px]"
                    src={howPeperuney}
                    alt="how-peperuney"
                />
            </div>
            <div className="bg-how-bg bg-cover bg-no-repeat bg-center md:pt-[120px] pt-[86px] sm:pt-24 max-w-[1435px] mx-auto">
                <div className="max-w-[1080px] w-full mx-auto px-5">
                    <div data-aos="zoom-in" className="flex md:flex-row lg:gap-7 gap-5 flex-col justify-center">
                        {CARD_DATA_HOW.map((card, index) => (
                            <div
                                key={card.id}
                                className={`w-full md:w-[${card.width}] flex flex-col ${index === 1 ? "justify-center items-center md:pt-0 pt-6" : "justify-end"
                                    } ${index === 1 ? "" : "md:pt-[170px] pt-6"}`}
                            >
                                <div
                                    className={`p-4 bg-white border-4 border-black ${card.extraContent ? "xl:w-[322px]" : "xl:w-[322px] lg:w-[308px]"
                                        }`}
                                >
                                    <div className="flex justify-center -mt-[60px]">
                                        <div className="bg-black rotate-[-5deg] px-4 py-3 flex justify-center items-center">
                                            <p className="font-luckiest font-normal rotate-[-5deg] lg:text-custom-6xl lg:leading-custom-7xl text-custom-2xl leading-7 text-white">
                                                {`0${card.id}`}
                                            </p>
                                        </div>
                                    </div>
                                    <h5 className="lg:text-custom-4xl text-custom-2xl leading-7 lg:leading-10 lg:max-w-[282px] font-luckiest font-normal text-center mx-auto pt-3">
                                        {card.title}
                                    </h5>
                                    <p className="font-normal font-schoolbell text-lg text-center pt-[10px]">
                                        {card.description}
                                    </p>
                                </div>
                                {card.extraContent && card.extraContent}
                            </div>
                        ))}
                    </div>
                </div>
                <img data-aos="fade-up"
                    className="max-w-[1220px] w-full mx-auto max-md:pt-7"
                    src={pizzImg}
                    alt="pizza-image"
                />
            </div>
        </div>
    );
};

export default HowToBuy;