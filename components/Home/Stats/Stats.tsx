import React from 'react'
import StatLabel from "@/components/Home/Stats/StatLabel";
import StatCard from "@/components/Home/Stats/StatCard";
import {GrNote} from "react-icons/gr";
import {IoCloudDownloadOutline, IoPeopleOutline} from "react-icons/io5";
import {LuSquareActivity} from "react-icons/lu";

const Stats = () => {
    return (
        <div className={"pt-2 pb-16 bg-[#0a0a1a]"}>
            <h2 className={"text-center text-2xl md:text-4xl xl:text-5xl mt-25 font-bold text-white hover:text-cyan-100 transition-all duration-300"}>
                These look so cool
            </h2>

            <div className={"grid grid-cols-2 items-center w-[40%] mx-auto"}>
                <div className={"flex flex-col gap-5 items-end mt-15"}>
                    <StatLabel label={"Latest version:"} />
                    <StatLabel label={"All downloads:"} />
                    <StatLabel label={"Monthly commit activity:"} />
                    <StatLabel label={"Online Discord members:"} />
                </div>

                <div className={"flex flex-col gap-5 justify-center items-center mt-15"}>
                    <StatCard title={"Version"} value={"1.0.0"} Icon={GrNote}/>
                    <StatCard title={"Downloads"} value={"23"} Icon={IoCloudDownloadOutline}/>
                    <StatCard title={"Commit activity"} value={"443"} Icon={LuSquareActivity} />
                    <StatCard title={"Online"} value={"52"} Icon={IoPeopleOutline}/>
                </div>
            </div>
        </div>
    )
}
export default Stats
