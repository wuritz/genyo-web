import React from 'react'
import ModuleCard from "@/components/Home/Features/ModuleCard";
import {FaGlobeAmericas, FaWheelchair} from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import {MdMiscellaneousServices} from "react-icons/md";
import {RiSwordFill} from "react-icons/ri";
import {combatModules, miscModules, movementModules, visualModules, worldModules} from "@/constant/constant";


const Features = () => {
    return (
        <div className={"pt-20 pb-18"}>
            <h1 className={"text-white font-bold text-center text-2xl md:text-4xl xl:text-5xl hover:text-cyan-100 transition-all duration-300"}>
                Features
            </h1>

            <div className={"w-[90%] sm:w-[70%] mt-20 mx-auto grid grid-cols-2 xl:grid-cols-5 gap-9"}>
                {/* Combat */}
                <div>

                    <h1 className={"text-3xl sm:text-4xl font-bold text-white hover:text-blue-200 transition-all duration-300"}>
                        Combat
                    </h1>

                    <div className={"mt-10"} data-aos={"zoom-in"} data-aos-anchor-placement={"top-center"}>
                        {combatModules.sort((a, b) => a.name.localeCompare(b.name)).map(item => {
                            return <ModuleCard key={item.name} name={item.name} desc={item.desc} Icon={RiSwordFill} />
                        })}
                    </div>
                </div>

                {/* Misc */}
                <div>
                    <h1 className={"text-3xl sm:text-4xl font-bold text-white hover:text-blue-200 transition-all duration-300"}>
                        Misc
                    </h1>

                    <div className={"mt-10"} data-aos={"zoom-in"} data-aos-anchor-placement={"top-center"}>
                        {miscModules.sort((a, b) => a.name.localeCompare(b.name)).map(item => {
                            return <ModuleCard key={item.name} name={item.name} desc={item.desc} Icon={MdMiscellaneousServices} />
                        })}
                    </div>
                </div>

                {/* Movement */}
                <div>
                    <h1 className={"text-3xl sm:text-4xl font-bold text-white hover:text-blue-200 transition-all duration-300"}>
                        Movement
                    </h1>

                    <div className={"mt-10"} data-aos={"zoom-in"} data-aos-anchor-placement={"top-center"}>
                        {movementModules.sort((a, b) => a.name.localeCompare(b.name)).map(item => {
                            return <ModuleCard key={item.name} name={item.name} desc={item.desc} Icon={FaWheelchair} />
                        })}
                    </div>
                </div>

                {/* Visual */}
                <div>
                    <h1 className={"text-3xl sm:text-4xl font-bold text-white hover:text-blue-200 transition-all duration-300"}>
                        Visual
                    </h1>

                    <div className={"mt-10"} data-aos={"zoom-in"} data-aos-anchor-placement={"top-center"}>
                        {visualModules.sort((a, b) => a.name.localeCompare(b.name)).map(item => {
                            return <ModuleCard key={item.name} name={item.name} desc={item.desc} Icon={AiOutlineEye} />
                        })}
                    </div>
                </div>

                {/* World */}
                <div>
                    <h1 className={"text-3xl sm:text-4xl font-bold text-white hover:text-blue-200 transition-all duration-300"}>
                        World
                    </h1>

                    <div className={"mt-10"} data-aos={"zoom-in"} data-aos-anchor-placement={"top-center"}>
                        {worldModules.sort((a, b) => a.name.localeCompare(b.name)).map(item => {
                            return <ModuleCard key={item.name} name={item.name} desc={item.desc} Icon={FaGlobeAmericas} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features
