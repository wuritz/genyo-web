import React from 'react'
import {BiDownload} from "react-icons/bi";
import {FaDiscord} from "react-icons/fa";

const Download = () => {
    return (
        <div className={"py-10 xl:py-16 bg-[#0b0b17]"}>
            <h2 className={"text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"}>
                Try it out!
            </h2>

            <div className={"flex justify-center items-center mt-7"}>
                <a href={"https://github.com/wuritz/genyo-addon/releases"} target={"_blank"}>
                    <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900
                            transition-all duration-300 text-white flex items-center space-x-2">
                        <BiDownload className="w-5 h-5 mr-2" />
                        Download
                    </button>
                </a>

                <a href={"https://discord.gg/5nrEVnm6zJ"} target={"_blank"}>
                    <button className="px-8 py-3.5 text-sm cursor-pointer ms-6 rounded-lg bg-gray-600 hover:bg-blue-800/50
                            transition-all duration-300 text-white flex items-center space-x-2">
                        <FaDiscord className="w-5 h-5 mr-2" />
                        Discord
                    </button>
                </a>
            </div>
        </div>
    )
}
export default Download
