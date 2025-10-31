"use client";
import React, { useEffect } from 'react'
import Hero from "@/components/Home/Hero/Hero";
import Professional from "@/components/Home/Professional/Professional";
import Screenshots from "@/components/Home/Screenshots/Screenshots";

import AOS from "aos";
import "aos/dist/aos.css";
import Download from "@/components/Home/Download/Download";
import ModuleFeatures from "@/components/Home/Features/Modules/ModuleFeatures";
import Team from "@/components/Home/Team/Team";
import Stats from "@/components/Home/Stats/Stats";
import What from "@/components/Home/What/What";

const Home = () => {

    useEffect(() => {
        const initAOS = async () => {
            await import("aos");

            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom"
            });
        }

        initAOS();
    }, []);

    return (
        <div className="overflow-hidden">
            <div id={"home"}><Hero /></div>
            <div id={"what"}><What /></div>
            <div id={"professional"}><Professional /></div>
            {/*<div id={"stats"}><Stats /></div>*/}
            <div id={"features"}><ModuleFeatures /></div>
            {/*<div id={"screenshots"}><Screenshots /></div>*/}
            <div id={"team"}><Team /></div>
            <div id={"download"}><Download /></div>
        </div>
    )
}
export default Home
