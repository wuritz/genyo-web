import React from 'react'
import {BiDownload} from "react-icons/bi";
import {FaDiscord, FaGithub} from "react-icons/fa";
import {MdOpenInNew} from "react-icons/md";

const Download = () => {
    return (
        <div className={"py-10 xl:py-16 bg-blue-950/20"}>
            <h2 className={"text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white hover:text-cyan-100 transition-all duration-300"}>
                Try it out!
            </h2>

            <div className={"flex flex-col justify-center items-center xl:flex-row gap-3 xl:gap-10 mt-7"}>
                <a href={"https://github.com/wuritz/genyo-addon/releases"} target={"_blank"}>
                    <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900
                            transition-all duration-300 text-white flex items-center space-x-2">
                        <BiDownload className="w-5 h-5 mr-2" />
                        Download
                    </button>
                </a>

                <a href={"https://discord.gg/5nrEVnm6zJ"} target={"_blank"}>
                    <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-500
                            transition-all duration-300 text-white flex items-center space-x-2">
                        <FaDiscord className="w-5 h-5 mr-2" />
                        Discord
                    </button>
                </a>

                {/* GitHub button */}
                <a href={"https://github.com/wuritz/genyo-addon"} target={"_blank"}>
                    <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-gray-600 hover:bg-gray-400
                        transition-all duration-300 text-white flex items-center space-x-2">
                        <FaGithub className="w-5 h-5 mr-2" />
                        GitHub
                    </button>
                </a>
            </div>
        </div>
    )
}
export default Download
