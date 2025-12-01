"use client";
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScreenshotCard from "@/components/Home/screenshots/ScreenshotCard";

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

const ScreenshotsSec = () => {
    return (
        <section className={"border-t-4 border-black py-20 px-6 bg-white"}>
            <div className={"max-w-4xl mx-auto"}>
                <div className="mb-12">
                    <h2 className="mb-4 leading-none">SCREENSHOTS</h2>
                </div>

                <div className={"mt-5 xl:mt-16 w-[90%] mx-auto"}>
                    <Carousel
                        showDots={false}
                        responsive={responsive}

                        infinite={true}
                        autoPlay={true}

                        autoPlaySpeed={2000}
                    >
                        <ScreenshotCard image={"/images/sc_1.png"} />
                        <ScreenshotCard image={"/images/genyo_sc.png"} />
                        <ScreenshotCard image={"/images/sc_1.png"} />
                        <ScreenshotCard image={"/images/genyo_sc.png"} />
                        <ScreenshotCard image={"/images/sc_1.png"} />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
export default ScreenshotsSec
