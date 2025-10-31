import React from 'react'
import TeamCard from "@/components/Home/Team/TeamCard";

const Team = () => {
    return (
        <div className={"pb-10 pt-7 xl:pt-13 xl:pb-16 bg-[#0b0b17]"}>
            <h2 className={"text-white text-center text-2xl xl:text-5xl font-bold hover:text-cyan-100 transition-all duration-300"}>
                Dev Team
            </h2>

            <div className={"flex flex-wrap items-center justify-center gap-5 xl:gap-10 mt-5 xl:mt-12"}>
                <TeamCard name={"wuritz"} image={"/images/wuritz.png"} />
                <TeamCard name={"Barnika"} image={"/images/wuritz.png"} />
            </div>
        </div>
    )
}
export default Team
