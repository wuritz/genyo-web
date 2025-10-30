"use client";
import React from 'react'
import Image from "next/image";
import Typewriter from "typewriter-effect";
import {BsArrowDown, BsArrowDownCircle, BsArrowRight} from "react-icons/bs";
import ParticlesHero from "@/components/Home/Hero/ParticleBackground";

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white
        overflow-hidden flex-col">

            <ParticlesHero />

            <div className="relative z-10 flex flex-col items-center">
                <Image
                    src="/images/genyo_sc.png"
                    alt="heroimage"
                    width={480}
                    height={252}
                    className="rounded-md"
                    data-aos={"fade-up"}
                />
                <h1 data-aos={"fade-up"} data-aos-delay={"200"} className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-6 text-center font-bold tracking-wide">
                    The best <span className={"text-purple-400"}>Meteor</span> addon
                </h1>

                <h2 data-aos={"fade-up"} data-aos-delay={"400"} className="mt-2 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
                    powered by {" "}
                    <span className="text-cyan-200 font-bold">
                        <Typewriter options={{
                            strings: [
                                'special people',
                                'idk',
                                'John Genyo',
                                'everyone',
                                'noone',
                                'special minds'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            wrapperClassName: 'pl-2'
                        }} />
                    </span>
                </h2>

                <button data-aos={"fade-up"} data-aos-delay={"600"} className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all
                duration-300 cursor-pointer rounded-full text-lg font-medium">
                    <a href={"#professional"}><span>Not convinced?</span></a>
                    <BsArrowDownCircle className="w-5 h-5 ml-2 inline-block" />
                </button>

                <h3 className={"text-gray-400 mt-4 text-sm"}>
                    Written for 1.21.4 (and 1.21.5)
                </h3>
            </div>
        </div>
    )
}
export default Hero
