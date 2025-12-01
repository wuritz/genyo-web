"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {ImageWithFallback} from "@/components/UI/figma/ImageWithFallback";

const screenshots = [
    {
        id: 1,
        url: "images/sc1.png",
        caption: "all the modules",
        alt: "Screenshot 1"
    },
    {
        id: 2,
        url: "images/sc2.png",
        caption: "enemies config",
        alt: "Screenshot 2"
    },
    {
        id: 3,
        url: "images/sc3.png",
        caption: "general genyo config",
        alt: "Screenshot 3"
    },
    {
        id: 4,
        url: "images/sc4.png",
        caption: "hud elements",
        alt: "Screenshot 4"
    },
    {
        id: 5,
        url: "images/sc5.png",
        caption: "genyo in light action",
        alt: "Screenshot 5"
    },
];

const ScreenshotsSec = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className={"border-t-4 border-black py-20 px-6 bg-gray-50"}>
            <div className={"max-w-5xl mx-auto"}>
                <h2 className={"mb-10 xl:mb-16 xl:text-xl leading-none"}>SCREENSHOTS</h2>

                <div className={"border-4 border-black bg-white p-6 relative"}>
                    <div className={"relative aspect-video bg-gray-200 border-2 border-black mb-4 overflow-hidden"}>
                        <ImageWithFallback
                            src={screenshots[currentIndex].url}
                            alt={screenshots[currentIndex].alt}
                            className={"w-full h-full object-cover"}
                        />

                        <button
                            onClick={goToPrevious}
                            className={"absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white border-2 border-white p-3 hover:bg-gray-800 transition-colors"}
                            aria-label={"Previous screenshot"}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={goToNext}
                            className={"absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white border-2 border-white p-3 hover:bg-gray-800 transition-colors"}
                            aria-label={"Next screenshot"}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div className={"hidden xl:flex justify-center items-start absolute top-4 right-4 bg-black text-white border-2 border-white px-3 py-1"}>
                              <span style={{ fontFamily: "monospace" }}>
                                {currentIndex + 1} / {screenshots.length}
                              </span>
                        </div>
                    </div>

                    <div className={"border-2 border-black bg-yellow-200 p-4 mb-4"}>
                        <p className={"text-center uppercase tracking-wider"} style={{ fontFamily: "monospace" }}>
                            {screenshots[currentIndex].caption}
                        </p>
                    </div>

                    <div className={"flex justify-center gap-2"}>
                        {screenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 border-2 border-black transition-all ${
                                    index === currentIndex ? "bg-black" : "bg-white hover:bg-gray-300"
                                }`}
                                aria-label={`Go to screenshot ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScreenshotsSec