"use client";
import React, { useEffect } from 'react'
import Hero from "@/components/Home/Hero/Hero";
import Professional from "@/components/Home/Professional/Professional";

import AOS from "aos";
import "aos/dist/aos.css";
import Download from "@/components/Home/Download/Download";
import Team from "@/components/Home/Team/Team";
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
        <div className="overflow-hidden scroll-smooth">
            <div id={"home"}><Hero /></div>
            <div className={"bg-gradient-to-b from-[#07070f] to-blue-950"}>
                <div id={"what"}><What /></div>
                <div id={"professional"}><Professional /></div>
                <div id={"team"}><Team /></div>
            </div>
            <div id={"download"}><Download /></div>
        </div>
    )
}
export default Home
