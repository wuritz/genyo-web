"use client";
import React from 'react'
import {Button} from "@/components/UI/button";
import { ArrowRight  } from "lucide-react";
import {TbBrandDiscord, TbBrandDiscordFilled, TbBrandGithub} from "react-icons/tb";
import {useLatestRelease} from "@/app/api/fetchGithub";
import {FaDiscord} from "react-icons/fa";
import {HiMiniSparkles} from "react-icons/hi2";
import {IoSparklesOutline} from "react-icons/io5";

const HeroSec = () => {
    const { release } = useLatestRelease();

    return (
        <div className={"flex flex-1 items-center justify-center min-h-screen"}>
            <div className="max-w-6xl w-full">
                <div className="mb-12">
                    <a href={"https://www.github.com/wuritz/genyo-addon/releases/latest"} target={"_blank"}>
                        <div className="inline-block border-2 border-black px-4 py-1 mb-8 hover:bg-gray-200 transition-all duration-200 cursor-pointer">
                            <span className="font-mono text-xs uppercase ">Latest version • {release ? release.tag_name : "unknown"}</span>
                        </div>
                    </a>

                    <h1 className="flex mb-6 text-6xl bg-black text-white border-2 px-5 py-5 w-fit font-bold leading-none hover:bg-white hover:text-black transition-all duration-200">
                        Genyo Addon
                        <IoSparklesOutline className={"ml-5"}/>
                    </h1>

                    <div className="max-w-2xl mb-8">
                        <p className="text-xl leading-relaxed">
                            Tbe best utility addon for <a className={"text-gray-600 hover:underline cursor-pointer"} href={"https://meteorclient.com/"} target={"_blank"}>Meteor Client</a>,
                            filled with Shoreline and Genyo magic :D
                        </p>
                        <p className="text-lg text-gray-500 mt-4">
                            Powered by special people&#39;s special minds.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a href={"https://www.github.com/wuritz/genyo-addon/releases/latest"} target={"_blank"}>
                            <Button
                                size="lg"
                                className="bg-black text-white hover:bg-gray-800 font-mono uppercase border-2 border-black rounded-none group cursor-pointer"
                            >
                                DOWNLOAD
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <a href={"https://www.github.com/wuritz/genyo-addon"} target={"_blank"}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-black rounded-none font-mono uppercase hover:bg-black hover:text-white cursor-pointer"
                            >
                                <TbBrandGithub className="mr-2 h-4 w-4" />
                                GITHUB
                            </Button>
                        </a>
                        <a href={"https://discord.gg/5nrEVnm6zJ"} target={"_blank"}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-black rounded-none font-mono uppercase hover:bg-black hover:text-white cursor-pointer"
                            >
                                <FaDiscord className="mr-2 h-4 w-4" />
                                DISCORD
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border-2 border-black p-6 bg-white hover:bg-black hover:text-white transition-colors group">
                        <div className="text-4xl font-mono mb-2">100%</div>
                        <div className="text-sm uppercase font-mono text-gray-500 group-hover:text-gray-300">
                            More Efficient
                        </div>
                    </div>
                    <div className="border-2 border-black p-6 bg-black text-white hover:bg-white hover:text-black transition-colors group">
                        <div className="text-4xl font-mono mb-2">0</div>
                        <div className="text-sm uppercase font-mono text-gray-300 group-hover:text-gray-500">
                            Brain Cells required
                        </div>
                    </div>
                    <div className="border-2 border-black p-6 bg-white hover:bg-black hover:text-white transition-colors group">
                        <div className="text-4xl font-mono mb-2">70+</div>
                        <div className="text-sm uppercase font-mono text-gray-500 group-hover:text-gray-300">
                            Modules
                        </div>
                    </div>
                    <div className="border-2 border-black p-6 bg-black text-white hover:bg-white hover:text-black transition-colors group">
                        <div className="text-4xl font-mono mb-2">YES</div>
                        <div className="text-sm uppercase font-mono text-gray-300 group-hover:text-gray-500">
                            It Works*
                        </div>
                    </div>
                </div>

                <p className="mt-4 text-sm text-gray-400 font-mono">
                    *BUGS ARE CONSIDERED FEATURES AROUND HERE
                </p>
            </div>
        </div>
    )
}
export default HeroSec
