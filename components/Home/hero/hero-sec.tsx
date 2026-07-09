"use client";
import React from 'react'
import {Button} from "@/components/UI/button";
import { TbBrandGithub } from "react-icons/tb";
import {useLatestRelease} from "@/app/api/fetchGithub";
import {FaDiscord} from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import {IoSparklesOutline} from "react-icons/io5";
import {RiDownloadCloud2Line} from "react-icons/ri";
import DownloadButton from "@/components/DownloadButton";
import BlobCursor from "@/components/Blob/BlobCursor";
import Link from "next/link";

const HeroSec = () => {
    const { release, totalDownloads } = useLatestRelease();

    return (
        <div className={"relative overflow-hidden flex flex-1 items-center justify-center min-h-screen pt-30 xl:pt-8 pl-6 pr-6 xl:pl-0 xl:pr-0"}>
            <BlobCursor size={20} />

            <div className="relative z-10 max-w-6xl w-full">
                <div className={"relative"}>
                    <div className="mb-12">
                        <Link href={"https://www.github.com/wuritz/genyo-addon/releases/latest"} target={"_blank"}>
                            <div className="inline-block border-2 border-white px-4 py-1 mb-4 xl:mb-8 hover:bg-gray-200 transition-all duration-200 cursor-pointer">
                                <span className="font-mono text-xs uppercase text-white">
                                    Latest version • {release?.tag_name || "fetching.."}
                                </span>
                            </div>
                        </Link>

                        <h1 className="mb-6 justify-center text-2xl xl:text-6xl bg-black text-white border-2 px-5 py-5 w-fit font-bold leading-none hover:bg-white hover:text-black transition-all duration-200">
                            Genyo Addon <IoSparklesOutline className={"ml-5 inline"}/>
                        </h1>

                        <div className="max-w-2xl mb-8">
                            <p className="text-md xl:text-xl leading-relaxed text-white">
                                The best utility addon for <Link className={"text-blue-500 hover:underline cursor-pointer"} href={"https://meteorclient.com/"} target={"_blank"}>Meteor Client</Link>,
                                filled with Shoreline and Genyo magic :D
                            </p>
                            <p className="text-sm xl:text-lg text-gray-300 mt-4">
                                Powered by special people&#39;s special minds.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <DownloadButton invert={false} navbar={false} />
                            <Link href={"https://www.github.com/wuritz/genyo-addon"} target={"_blank"}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white rounded-none font-mono uppercase hover:bg-black text-white cursor-pointer"
                                >
                                    <TbBrandGithub className="mr-2 h-4 w-4" />
                                    GITHUB
                                </Button>
                            </Link>
                            <Link href={"/discord"} target={"_blank"}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-black rounded-none bg-blue-100 font-mono uppercase hover:bg-black hover:text-white cursor-pointer"
                                >
                                    <FaDiscord className="mr-2 h-4 w-4" />
                                    DISCORD
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="border-2 border-white p-6 bg-white hover:bg-black hover:text-white transition-colors group">
                            <div className="text-4xl font-mono mb-2 flex flex-1 items-center justify-between">{totalDownloads ?? "0"} <RiDownloadCloud2Line /></div>
                            <div className="text-sm uppercase font-mono text-gray-500 group-hover:text-gray-300">
                                Downloads
                            </div>
                        </div>
                        <div className="border-2 border-white p-6 bg-black text-white hover:bg-white hover:text-black transition-colors group flex flex-col items-start justify-between">
                            <div className="text-3xl md:text-4xl font-mono mb-2">1.21.11</div>
                            <div className="text-sm uppercase font-mono text-gray-300 group-hover:text-gray-500">
                                MC version
                            </div>
                        </div>
                        <div className="border-2 border-white p-6 bg-white hover:bg-black hover:text-white transition-colors group">
                            <div className="text-4xl font-mono mb-2 flex flex-1 items-center justify-between">70+ <HiOutlineCog6Tooth /></div>
                            <div className="text-sm uppercase font-mono text-gray-500 group-hover:text-gray-300">
                                Modules
                            </div>
                        </div>
                        <div className="border-2 border-white p-6 bg-black text-white hover:bg-white hover:text-black transition-colors group flex flex-col items-start justify-between">
                            <div className="text-4xl font-mono mb-2">YES</div>
                            <div className="text-sm uppercase font-mono text-gray-300 group-hover:text-gray-500">
                                It Works
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default HeroSec