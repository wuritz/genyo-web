"use client";
import React, {ReactElement, useState} from 'react'
import {
    combatModules,
    miscModules,
    moduleProps,
    movementModules,
    visualModules,
    worldModules
} from "@/constant/constant";
import ModuleCard from "@/components/Home/Features/Modules/ModuleCard";
import {MdMiscellaneousServices} from "react-icons/md";
import {RiSwordFill} from "react-icons/ri";
import {IconType} from "react-icons";
import {FaGlobeAmericas, FaWheelchair} from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import CategoryButton from "@/components/Home/Features/Modules/CategoryButton";

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

const ModuleFeatures = () => {
    const [currentCategory, setCurrentCategory] = useState<Props>(categories[0]);

    const CategoryButtons = () => {
        const [active, setActive] = React.useState("Combat");

        return (
            <div className={"flex flex-row"}>
                {categories.map((category, index) => (
                    <CategoryButton key={index} label={category.name} isActive={active === category.name} onClick={() => {
                        setActive(category.name);
                        setCurrentCategory(categories[index]);
                        }}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className={"pb-10 bg-gradient-to-b from-[#151124] to-gray-950"}>
            <h2 className={"text-white font-bold text-center text-2xl md:text-4xl xl:text-5xl hover:text-cyan-100 transition-all duration-300"}>
                Modules
            </h2>

            <div className={"w-[80%] md:w-[70%] md:mt-16 mt-5 lg-w[70%] mx-auto grid grid-rows-1 items-center md:p-15 md:pt-5 p-2 overflow-x-auto lg:[overflow: none;] pt-0 rounded-2xl bg-white/2 shadow-lg ring-1 ring-white/20 hover:ring-white/50 rounded-2xl backdrop-blur-lg transition-all duration-200"}
                 data-aos={"fade-up"} data-aos-delay={"100"}
            >
                {/* Selector */}
                <div>
                    {CategoryButtons()}
                </div>

                {/* Modules */}
                <div>
                    <div className={"grid grid-cols-3 space-x-1 gap-2 md:gap-5 items-center w-[93%] md:w-[97%] mx-auto"}>
                        {allModules.filter(module => module.category === currentCategory.name).map(item => {
                            return <ModuleCard key={item.name} name={item.name} desc={item.desc} Icon={categories.filter(val => val.name === item.category)[0].icon}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModuleFeatures
