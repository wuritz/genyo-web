import React from 'react'
import FeatureCard from "@/components/Home/Features/FeatureCard";

const Features = () => {
    return (
        <div className={"pb-20 bg-gradient-to-b from-gray-950  to-[#151124]"}>
            <h1 className={"mt-6 md:mt-16 text-white font-bold text-center text-4xl md:text-5xl xl:text-6xl hover:text-cyan-100 transition-all duration-300"}>
                Features
            </h1>

            <div className={"grid grid-cols-1 xl:grid-cols-2 w-[80%] xl:w-[60%] mx-auto items-start justify-center gap-10 mt-5 xl:mt-20"}>
                <div className={"p-10 bg-white/2 hover:bg-white/3 shadow-lg ring-1 ring-white/20 hover:ring-white/50 rounded-2xl backdrop-blur-lg transition-all duration-300"}>
                    <div className={"flex flex-col gap-5 xl:gap-10"}>
                        <div data-aos={"fade-left"} data-aos-delay={"0"}>
                            <h2 className={"text-white font-semibold text-xl xl:text-4xl hover:text-purple-400 transition-all duration-300"}>
                                HUD elements
                            </h2>

                            <p className={"text-gray-400 mt-3 hover:text-gray-300 transition-all duration-300"}>
                                We ported some HUD elements, <br /> and we made some better than the original.
                            </p>
                        </div>

                        <div className={"grid grid-cols-2 gap-5 items-center"}
                             data-aos={"fade-right"} data-aos-delay={"200"}
                        >
                            <FeatureCard name={"Active Genyo"} />
                            <FeatureCard name={"Better Player Radar"} />
                            <FeatureCard name={"Packets"} />
                            <FeatureCard name={"Ping"} />
                            <FeatureCard name={"PvP Neccessary"} />
                        </div>
                    </div>
                </div>

                <div className={"p-10 bg-white/2 hover:bg-white/3 shadow-lg ring-1 ring-white/20 hover:ring-white/50 rounded-2xl backdrop-blur-lg transition-all duration-300"}>
                    <div className={"flex flex-col gap-5 xl:gap-16"}>
                        <div data-aos={"fade-left"} data-aos-delay={"100"}>
                            <h2 className={"text-white font-semibold text-xl xl:text-4xl hover:text-purple-400 transition-all duration-300"}>
                                Systems
                            </h2>

                            <p className={"text-gray-400 mt-3 hover:text-gray-300 transition-all duration-300"}>
                                Only one of these has actual value.
                                <br />
                            </p>
                        </div>

                        {/* Elements */}
                        <div className={"grid grid-cols-2 gap-5 items-center"}
                             data-aos={"fade-right"} data-aos-delay={"300"}
                        >
                            <FeatureCard name={"Enemies"} />
                            <FeatureCard name={"Sound"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features
