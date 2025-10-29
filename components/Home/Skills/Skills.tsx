import React from 'react'
import {SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript} from "react-icons/si";

const skills = [
    {
        name: "JavaScript",
        icon: <SiJavascript />,
        percentage: 89,
    },
    {
        name: "React JS",
        icon: <SiReact />,
        percentage: 92
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        percentage: 90
    },
    {
        name: "Node.js",
        icon: <SiNodedotjs />,
        percentage: 90
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        percentage: 94
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />,
        percentage: 86
    }
]

const Skills = () => {
    return (
        <div className={"text-white pt-16 pb-16"}>
            <h1 className={"text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"}>
                My <span className={"text-cyan-300"}>Skills</span>
            </h1>
        </div>
    )
}
export default Skills
