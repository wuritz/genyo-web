"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScreenshotCard from "@/components/Home/Screenshots/ScreenshotCard";
import {FaArrowUp} from "react-icons/fa";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Screenshots = () => {
    return (
        <div className={"pt-16 pb-16 bg-[#0b0b17]"}>
            <h1 className={"text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"}>
                Screenshots
            </h1>

            <div className={"mt-16 w-[90%] mx-auto"}>
                <Carousel
                    showDots={true}
                    responsive={responsive}

                    infinite={true}
                    autoPlay={true}

                    autoPlaySpeed={2000}
                >
                    <ScreenshotCard image={"images/sc_1.png"} />
                    <ScreenshotCard image={"images/sc_1.png"} />
                    <ScreenshotCard image={"images/sc_1.png"} />
                    <ScreenshotCard image={"images/sc_1.png"} />
                    <ScreenshotCard image={"images/sc_1.png"} />
                </Carousel>;
            </div>
        </div>
    )
}
export default Screenshots
