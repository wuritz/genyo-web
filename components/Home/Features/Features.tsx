import React from 'react'
import ModuleCard from "@/components/Home/Features/ModuleCard";
import {FaAngleDoubleUp, FaBabyCarriage, FaGlobeAmericas, FaRegEye, FaWheelchair} from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import {MdMiscellaneousServices} from "react-icons/md";
import {TbSwords} from "react-icons/tb";
import {RiSwordFill} from "react-icons/ri";

const combatModules = [
    {
        name: "Auto Armor",
        desc: "Automatically replaces armor pieces."
    },
    {
        name: "Auto Crystal",
        desc: "asd"
    },
    {
        name: "Auto Totem",
        desc: "Automatically replenishes the totem in your offhand"
    },
    {
        name: "Auto Trap",
        desc: "Fully traps enemies with blocks."
    },
    {
        name: "Auto XP",
        desc: "better than blackout"
    },
    {
        name: "Criticals",
        desc: "crrrrrrrrrrrrrrrrrrrrrrrr"
    },
    {
        name: "Replenish",
        desc: "fwejhfkljwefklwejfklkwlefjlwefl"
    },
    {
        name: "KFC Spawn Kill",
        desc: "ask about the name, i won't tell you."
    },
]
const miscModules = [
    {
        name: "Auto Brainrot",
        desc: "Traumatize your surroundings or the whole server."
    },
    {
        name: "Auto Ominous",
        desc: "Drinks an ominous bottle right after a Raid victory."
    },
    {
        name: "Auto Sigma",
        desc: "and i heard em say, nothing's ever promised tomorrow today"
    },
    {
        name: "Combat Brainrot",
        desc: "says something sigma while in crystal pvp."
    },
    {
        name: "Einstein",
        desc: "natural selection of society"
    },
    {
        name: "Fast Latency",
        desc: "Calculates server ping"
    },
    {
        name: "Auto EZ",
        desc: "igen igen igen, dikta mamo tyibori"
    },
    {
        name: "Discord",
        desc: "this one is superior to the original module because its genyo"
    },
    {
        name: "Goodbye",
        desc: "i hate kiwi. i hate kiwi. i hate kiwi."
    },
    {
        name: "Skin Blink",
        desc: "i love kiwi. i love kiwi. i love kiwi."
    },
    {
        name: "Swing",
        desc: "Change the swinginess (?) of the player's hand"
    },
    {
        name: "Timer",
        desc: "Changes the change to the change and change."
    },
    {
        name: "Welcome",
        desc: "i love kiwi. i love kiwi. i love kiwi."
    },
    {
        name: "No Packet Kick",
        desc: "Prevents getting kicked by packets"
    },
    {
        name: "Packet Debug",
        desc: "yweoikfjwekfjhewkfjwehfkjefhwe"
    },
];
const movementModules = [
    {
        name: "Anti Ladder",
        desc: "Prevents you from climbing ladders."
    },
    {
        name: "Tsunoda Blinker",
        desc: "Yuki's short as fuck"
    },
    {
        name: "No Slow",
        desc: "Prevents items from slowing the player."
    },
    {
        name: "Phase",
        desc: "asd"
    },
    {
        name: "Velocity",
        desc: "efhewhfjkhewfjhkewfh jekw"
    },
];
const visualModules = [
    {
        name: "Angel Sex Hulkenberg",
        desc: "uhhhhhhhhh"
    },
    {
        name: "Capes",
        desc: "The thing"
    },
    {
        name: "Nametags",
        desc: "Same as Meteor Nametags, pop counter included"
    },
    {
        name: "Penis ESP",
        desc: "faszfasz fasz fasz fasz"
    },
];
const worldModules = [
    {
        name: "Fast Place",
        desc: "Place items and blocks faster"
    },
    {
        name: "Auto Mine",
        desc: "fasz"
    },
    {
        name: "Auto Penis",
        desc: "show genyo's bbc"
    },
    {
        name: "Auto Tool",
        desc: "Yés"
    },
    {
        name: "Auto Windmill",
        desc: "Slam Genyo's windmill"
    },
    {
        name: "Ghost Blocks",
        desc: "maybe"
    },
    {
        name: "Scaffold",
        desc: "i shit the bed regularly"
    },
    {
        name: "Self Trap",
        desc: "a funny one for sure."
    },
    {
        name: "Speedmine",
        desc: "fasz fasz fsaz fasz"
    },
    {
        name: "Surround",
        desc: "haaaaaaaaaaaaaa"
    },
    {
        name: "Surround V2",
        desc: "Today I am the shit after I wake the shit is Yes"
    }
];

const Features = () => {
    return (
        <div className={"pt-20 pb-18"}>
            <h1 className={"text-white font-bold text-center text-2xl md:text-4xl xl:text-5xl"}>
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
                            return <ModuleCard key={item.name} name={item.name} Icon={RiSwordFill} />
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
                            return <ModuleCard key={item.name} name={item.name} Icon={MdMiscellaneousServices} />
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
                            return <ModuleCard key={item.name} name={item.name} Icon={FaWheelchair} />
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
                            return <ModuleCard key={item.name} name={item.name} Icon={AiOutlineEye} />
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
                            return <ModuleCard key={item.name} name={item.name} Icon={FaGlobeAmericas} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features
