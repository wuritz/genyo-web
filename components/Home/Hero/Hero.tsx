"use client";
import React from 'react'
import Image from "next/image";
import Typewriter from "typewriter-effect";
import {BsArrowDownCircle} from "react-icons/bs";
import ParticlesHero from "@/components/Home/Hero/ParticleBackground";

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white
        overflow-hidden flex-col">

            <ParticlesHero />

            <div className="relative z-10 flex flex-col items-center">
                <Image
                    src="/images/genyo.png"
                    alt="heroimage"
                    width={200}
                    height={200}
                    className="rounded-md"
                    data-aos={"fade-up"}
                />
                <h1 data-aos={"fade-up"} data-aos-delay={"200"} className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-6 text-center font-bold tracking-wide">
                    The best <span className={"text-purple-400 hover:text-purple-500 transition-all duration-300"}><a href={"https://meteorclient.com"} target={"_blank"}>Meteor</a></span> addon ever
                </h1>

                <h2 data-aos={"fade-up"} data-aos-delay={"400"} className="mt-2 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
                    powered by
                    <span className="text-cyan-200 font-bold">
                        <Typewriter options={{
                            strings: [
                                'special people.',
                                'idk.',
                                'John Genyo.',
                                'everyone :D',
                                'no one.',
                                'special minds.'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            wrapperClassName: 'pl-2'
                        }} />
                    </span>
                </h2>

                <a href={"#what"}>
                    <div className={"flex flex-row justify-start items-center gap-2 pl-5 pr-5 pt-3 pb-3 mt-5 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full"}
                         data-aos={"fade-up"} data-aos-delay={"600"}>
                        <p className="text-lg text-white font-medium">
                            Not convinced?
                        </p>
                        <BsArrowDownCircle className="w-5 h-5" />
                    </div>
                </a>

                <p data-aos={"fade-up"} data-aos-delay={"800"} className={"text-gray-400 mt-4 text-sm font-mono"} >
                    Written for 1.21.4 (and 1.21.5)
                </p>
            </div>
        </div>
    )
}
export default Hero
