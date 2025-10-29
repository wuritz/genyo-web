import React from 'react'
import Image from "next/image";

const Projects = () => {
    return (
        <div className={"pt-16 pb-16"}>
            <h1 className={"text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"}>
                A small selection of recent<br /> <span className={"text-cyan-300"}> projects</span>
            </h1>

            <div className={"w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16"}>
                {/* 1st project */}
                <div>
                    <Image src={"/images/p1.jpg"} alt={"img"} width={800} height={650} className={"rounded-lg"}/>

                    <h1 className={"mt-4 text-xl sm:text-2xl font-semibold text-white"}>
                        Modern Finance Dashboard UI
                    </h1>

                    <h1 className={"pt-2 font-medium text-white/80"}>
                        Apps, UI/UX
                    </h1>
                </div>

                {/* 2nd project */}
                <div>
                    <Image src={"/images/p2.jpg"} alt={"img"} width={800} height={650} className={"rounded-lg"}/>

                    <h1 className={"mt-4 text-xl sm:text-2xl font-semibold text-white"}>
                        Portfolio Websites for Creatives
                    </h1>

                    <h1 className={"pt-2 font-medium text-white/80"}>
                        Branding, Motion
                    </h1>
                </div>

                {/* 3rd project */}
                <div>
                    <Image src={"/images/p3.jpg"} alt={"img"} width={800} height={650} className={"rounded-lg"}/>

                    <h1 className={"mt-4 text-xl sm:text-2xl font-semibold text-white"}>
                        Brand Identity for Startups
                    </h1>

                    <h1 className={"pt-2 font-medium text-white/80"}>
                        Branding, Fasz
                    </h1>
                </div>

                {/* 4th project */}
                <div>
                    <Image src={"/images/p4.jpg"} alt={"img"} width={800} height={650} className={"rounded-lg"}/>

                    <h1 className={"mt-4 text-xl sm:text-2xl font-semibold text-white"}>
                        Szarok bele
                    </h1>

                    <h1 className={"pt-2 font-medium text-white/80"}>
                        Yummy yummy
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default Projects
