import React from 'react'
import ProjectCard from "@/components/Home/Projects/ProjectCard";

const Projects = () => {
    return (
        <div className={"pt-16 pb-16"}>
            <h1 className={"text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"}>
                A small selection of recent<br /> <span className={"text-cyan-300"}> projects</span>
            </h1>

            <div className={"w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16"}>
                {/* 1st project */}
                <div data-aos={"fade-up"} data-aos-anchor-placement={"top-center"} data-aos-delay={"0"}>
                    <ProjectCard imgSrc={"/images/p1.jpg"} title={"Modern Finance Dashboard UI"} desc={"Apps, UI/UX"}/>
                </div>

                {/* 2nd project */}
                <div data-aos={"fade-up"} data-aos-anchor-placement={"top-center"} data-aos-delay={"100"}>
                    <ProjectCard imgSrc={"/images/p2.jpg"} title={"Portfolio Websites for Creatives"} desc={"Branding, Motion"}/>
                </div>

                {/* 3rd project */}
                <div data-aos={"fade-up"} data-aos-anchor-placement={"top-center"} data-aos-delay={"200"}>
                    <ProjectCard imgSrc={"/images/p3.jpg"} title={"Brand Identity for Startups"} desc={"Branding, Fasz"}/>
                </div>

                {/* 4th project */}
                <div data-aos={"fade-up"} data-aos-anchor-placement={"top-center"} data-aos-delay={"300"}>
                    <ProjectCard imgSrc={"/images/p4.jpg"} title={"Szarok bele"} desc={"Yummy yummy"}/>
                </div>
            </div>
        </div>
    )
}
export default Projects
