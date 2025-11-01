import React from 'react'
import TeamCard from "@/components/Home/Team/TeamCard";

const Team = () => {
    return (
        <div className={"pb-10 pt-7 xl:pt-13 xl:pb-16"}>
            <h2 className={"text-white text-center text-2xl xl:text-5xl font-bold hover:text-cyan-100 transition-all duration-300"}>
                Dev Team
            </h2>

            <div className={"grid grid-cols-2 w-[80%] xl:w-[35%] items-center mx-auto gap-3 xl:gap-10 mt-5 xl:mt-12"}>
                <div data-aos={"fade-left"} data-aos-delay={"0"}>
                    <a href={"https://github.com/wuritz"} target={"_blank"}>
                        <TeamCard name={"wuritz"} image={"/images/wuritz.png"} />
                    </a>
                </div>
                <div data-aos={"fade-left"} data-aos-delay={"100"}>
                    <TeamCard name={"Barnika18"} image={"/images/barnika.png"} />
                </div>
            </div>
        </div>
    )
}
export default Team
