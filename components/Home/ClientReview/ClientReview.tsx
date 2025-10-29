"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "@/components/Home/ClientReview/ReviewCard";

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

const ClientReview = () => {
    return (
        <div className={"pt-16 pb-16"}>
            <h1 className={"text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"}>
                Kind words from satisfied <br />{" "}
                <span className={"text-cyan-200"}>clients</span>
            </h1>

            <div className={"mt-16 w-[70%] mx-auto"}>
                <Carousel
                    showDots={false}
                    responsive={responsive}

                    infinite={true}
                    autoPlay={true}

                    autoPlaySpeed={4000}
                >
                    <ReviewCard image={"/images/c1.png"} name={"Janny Doe"} role={"CEO, Landscape"}  />
                    <ReviewCard image={"/images/c2.png"} name={"Fasz Geci"} role={"Fasz, Landscape"}  />
                    <ReviewCard image={"/images/c3.png"} name={"Picsa Füst"} role={"Fasz, Landscape"}  />
                    <ReviewCard image={"/images/c4.png"} name={"Apad Fasza"} role={"Fgkoegr, Landscape"}  />
                    <ReviewCard image={"/images/c5.png"} name={"EWFewklfew"} role={"Faskjdhsajd, Landscape"}  />
                </Carousel>;
            </div>
        </div>
    )
}
export default ClientReview
