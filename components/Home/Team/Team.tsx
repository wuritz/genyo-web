import React from 'react'
import TeamCard from "@/components/Home/Team/TeamCard";

const Team = () => {
    return (
        <div className={"pb-12 pt-7 xl:pt-16 xl:pb-16"}>
            <h2 className={"text-white text-center text-2xl xl:text-5xl font-bold"}>
                Epic Team
            </h2>

            <div className={"flex flex-wrap items-center justify-center gap-5 xl:gap-10 mt-5 xl:mt-12"}>
                <TeamCard name={"wuritz"} image={"/images/wuritz.png"} />
                <TeamCard name={"Barnika"} image={"/images/wuritz.png"} />
            </div>
        </div>
    )
}
export default Team
