import React from 'react'
import Image from "next/image";

const What = () => {
    return (
        <div className={"pb-10 pt-10 xl:pb-16 xl:pt-16"}>
            <h2 className={"text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white hover:text-cyan-100 transition-all duration-300"}>
                What is Genyo?
            </h2>

            <div className={"grid grid-cols-1 xl:grid-cols-3 mx-auto w-[85%] xl:w-[70%] pt-10 xl:pt-20 gap-10"}>
                <article data-aos={"fade-up"} data-aos-delay={"0"}>
                    <h3 className={"text-white font-semibold text-xl xl:text-4xl hover:text-purple-400 transition-all duration-300"}>
                        Purpose
                    </h3>

                    <p className={"text-gray-400 text-md xl:text-lg mt-2 xl:mt-7"}>
                        It&apos;s basically a <a className={"hover:text-cyan-400 transition-all duration-300 inline-block cursor-pointer"} href={"https://github.com/Skitttyy/shoreline-client"} target={"_blank"}>Shoreline</a> port into <a className={"hover:text-purple-400 transition-all duration-300 cursor-pointer inline-block"} href={"https://meteorclient.com"} target={"_blank"}>Meteor</a>, plus coming with
                        things we felt like adding. <br /> We aren&apos;t going for the best PvP modules or the most efficient Utility things, we
                        are here for fun and <a className={"hover:text-green-300 transition-all duration-300"}>Kiwi</a> and <a className={"hover:text-green-500 hover:text-4xl transition-all duration-300"}>HULKENBERG</a>.
                    </p>
                </article>

                <article data-aos={"fade-up"} data-aos-delay={"100"}>
                    <h3 className={"text-white font-semibold text-xl xl:text-4xl hover:text-amber-200 transition-all duration-300"}>Why should I care?</h3>
                    <p className={"text-gray-400 text-md xl:text-lg mt-2 xl:mt-7 hover:text-[#07070f] transition-all duration-300"}>
                        Idk.
                    </p>
                </article>

                <article data-aos={"fade-up"} data-aos-delay={"200"}>
                    <h3 className={"text-white font-semibold text-xl xl:text-4xl hover:text-green-400 transition-all duration-500"}>Hulkenberg</h3>
                    <p className={"text-gray-400 text-md xl:text-lg mt-2 xl:mt-7"}>
                        Yeeeeeeeeeeeeeees.
                    </p>
                    <Image src={"/images/hulkenberg.png"} alt={"hulkenberg"} width={200} height={200} className={"w-25 h-30 xl:w-43 xl:h-50 hover:p-3 transition-all duration-500"}/>
                </article>
            </div>
        </div>
    )
}
export default What
