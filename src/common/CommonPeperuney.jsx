import React, { useEffect, useRef } from "react";
import poperuneyImg from "../assets/images/webp/pepeureny-image.webp";

const CommonPeperuney = ({ className = "", bgColor = "bg-red-500" }) => {
    const sliderRef = useRef(null);
    const sizeImage = 233;
    const items = 16;
    const sliderspeed = 2000;

    useEffect(() => {
        const slider = sliderRef.current;

        const rotateSlider = () => {
            const firstChild = slider.firstChild;
            const marginLeft = -sizeImage + "px";
            firstChild.style.transition = `margin-left ${sliderspeed / 1000}s linear`;
            firstChild.style.marginLeft = marginLeft;

            setTimeout(() => {
                slider.appendChild(firstChild);
                firstChild.style.transition = "none";
                firstChild.style.marginLeft = "0px";
            }, sliderspeed);
        };

        const interval = setInterval(rotateSlider, sliderspeed);

        return () => clearInterval(interval);
    }, [sliderspeed]);

    return (
        <div
            className={`${className} showcase relative overflow-hidden mx-auto w-full flex border-t-4 border-black border-b-[6px] ${bgColor}`}
        >
            <div
                ref={sliderRef}
                className="slider flex relative gap-10"
                style={{ width: `${items * sizeImage}px` }}
            >
                {Array.from({ length: items }).map((_, index) => (
                    <img
                        key={index}
                        src={poperuneyImg}
                        alt={`Item ${index}`}
                        className="item w-[163px] h-[28px] sm:w-[233px] sm:h-[40px] object-cover cursor-pointer"
                    />
                ))}
            </div>
        </div>
    );
};

export default CommonPeperuney;
