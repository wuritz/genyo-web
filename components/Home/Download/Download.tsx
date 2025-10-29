import React from 'react'
import {BiDownload} from "react-icons/bi";

const Download = () => {
    return (
        <div className={"pt-16 pb-16"}>
            <h1 className={"text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"}>
                Try it out!
            </h1>

            <div className={"flex justify-center items-center mt-7"}>
                <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900
                        transition-all duration-300 text-white flex items-center space-x-2">
                    <BiDownload className="w-5 h-5" />
                    <a href={"https://github.com/wuritz/genyo-addon/releases"} target={"_blank"}>Download</a>
                </button>
            </div>
        </div>
    )
}
export default Download
