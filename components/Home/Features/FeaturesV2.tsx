import React, {ReactElement, useState} from 'react'
import {
    combatModules,
    miscModules,
    moduleProps,
    movementModules,
    visualModules,
    worldModules
} from "@/constant/constant";
import ModuleCard from "@/components/Home/Features/ModuleCard";
import {MdMiscellaneousServices} from "react-icons/md";
import {RiSwordFill} from "react-icons/ri";
import {IconType} from "react-icons";
import {FaGlobeAmericas, FaWheelchair} from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";

interface Props {
    name: string,
    icon: IconType
}

const categories: Props[] = [
    {
        name: "Combat",
        icon: RiSwordFill
    },
    {
        name: "Misc",
        icon: MdMiscellaneousServices
    },
    {
        name: "Movement",
        icon: FaWheelchair
    },
    {
        name: "Visual",
        icon: AiOutlineEye
    },
    {
        name: "World",
        icon: FaGlobeAmericas
    }
];

const allModules: moduleProps[]  = [...combatModules, ...miscModules, ...movementModules, ...visualModules, ...worldModules];

const FeaturesV2 = () => {
    const [currentCategory, setCurrentCategory] = useState<Props>(categories[0]);

    const CategoryButtons = () => {
        const [active, setActive] = React.useState("Combat");

        return (
            <div className={"flex flex-row p-10"}>
                <button className={`w-[40%] m-5 rounded-full text-gray-400 font-bold text-lg mb-10 md:text-xl xl:text-2xl ${active === "Combat" ? "bg-blue-900" : "bg-blue-950/60"} px-5 py-5 hover:bg-blue-600/60 hover:text-white transition-all duration-300 cursor-pointer`}
                    onClick={() => { setActive("Combat"); setCurrentCategory(categories[0])}}
                >Combat</button>
                <button className={`w-[40%] m-5 rounded-full text-gray-400 font-bold text-lg mb-10 md:text-xl xl:text-2xl ${active === "Misc"  ? "bg-blue-900" : "bg-blue-950/60"} px-5 py-5 hover:bg-blue-600/60 hover:text-white transition-all duration-300 cursor-pointer`}
                        onClick={() => { setActive("Misc"); setCurrentCategory(categories[1])}}
                >Misc</button>
                <button className={`w-[40%] m-5 rounded-full text-gray-400 font-bold text-lg mb-10 md:text-xl xl:text-2xl ${active === "Movement"  ? "bg-blue-900" : "bg-blue-950/60"} bg-blue-950/60 px-5 py-5 hover:bg-blue-600/60 hover:text-white transition-all duration-300 cursor-pointer`}
                        onClick={() => { setActive("Movement"); setCurrentCategory(categories[2])} }
                >Movement</button>
                <button className={`w-[40%] m-5 rounded-full text-gray-400 font-bold text-lg mb-10 md:text-xl xl:text-2xl ${active === "Visual"  ? "bg-blue-900" : "bg-blue-950/60"} bg-blue-950/60 px-5 py-5 hover:bg-blue-600/60 hover:text-white transition-all duration-300 cursor-pointer`}
                        onClick={() => { setActive("Visual"); setCurrentCategory(categories[3])}}
                >Visual</button>
                <button className={`w-[40%] m-5 rounded-full text-gray-400 font-bold text-lg mb-10 md:text-xl xl:text-2xl ${active === "World"  ? "bg-blue-900" : "bg-blue-950/60"} bg-blue-950/60 px-5 py-5 hover:bg-blue-600/60 hover:text-white transition-all duration-300 cursor-pointer`}
                        onClick={() => { setActive("World"); setCurrentCategory(categories[4])}}
                >World</button>
            </div>
        );
    }

    return (
        <div className={"pb-16 pt-16"}>
            <h1 className={"text-white font-bold text-center text-2xl md:text-4xl xl:text-5xl hover:text-cyan-100 transition-all duration-300"}>
                Features
            </h1>

            <div className={"w-[80%] md:w-[70%] mt-15 lg-w[70%] mx-auto grid grid-rows-1 items-center bg-blue-600/10 p-15 pt-0 rounded-2xl"}>
                {/* Selector */}
                <div>
                    {CategoryButtons()}
                </div>

                {/* Modules */}
                <div>
                    <div className={"ms-10 grid grid-cols-3 space-x-1 gap-5 items-center"}>
                        {allModules.filter(module => module.category === currentCategory.name).map(item => {
                            return <ModuleCard key={item.name} name={item.name} desc={item.desc} Icon={categories.filter(val => val.name === item.category)[0].icon}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturesV2
