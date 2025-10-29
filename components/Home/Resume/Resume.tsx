import React from 'react'
import ResumeCard from "@/components/Home/Resume/ResumeCard";
import {FaCodepen, FaReact} from "react-icons/fa";
import {BsDatabase} from "react-icons/bs";
import {BiBadge} from "react-icons/bi";

const Resume = () => {
    return (
        <div className={"pt-20 pb-16"}>
            <div className={"w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10"}>
                {/* Work part */}
                <div>
                    <h1 className={"text-3xl sm:text-4xl font-bold text-white"}>
                        My work <span className={"text-cyan-200"}>Experience</span>
                    </h1>

                    <div className={"mt-10"}>
                        <ResumeCard Icon={FaCodepen} role={"Full-Stack Developer"} />
                        <ResumeCard Icon={FaReact} role={"Frontend Developer"} />
                        <ResumeCard Icon={BsDatabase} role={"Backend Developer"} />
                    </div>
                </div>

                {/* Education part **/}
                <div>
                    <h1 className={"text-3xl sm:text-4xl font-bold text-white"}>
                        My <span className={"text-cyan-200"}>Education</span>
                    </h1>

                    <div className={"mt-10"}>
                        <ResumeCard Icon={BiBadge} role={"Design Insitute of Black"} date={"Jan 2023 - Dec 3784"} />
                        <ResumeCard Icon={FaReact} role={"Genyo of Genyo fas"} date={"Jan 2023 - Dec 3784"} />
                        <ResumeCard Icon={BsDatabase} role={"Technology of Genyo and Shit"} date={"Jan 2023 - Dec 3784"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Resume
