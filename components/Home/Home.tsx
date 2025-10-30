"use client";
import React, { useEffect } from 'react'
import Hero from "@/components/Home/Hero/Hero";
import Professional from "@/components/Home/Professional/Professional";
import Screenshots from "@/components/Home/Screenshots/Screenshots";

import AOS from "aos";
import "aos/dist/aos.css";
import Download from "@/components/Home/Download/Download";
import Features from "@/components/Home/Features/Features";

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
            <div id={"professional"}><Professional /></div>
            <div id={"features"}><Features /></div>
            <div id={"screenshots"}><Screenshots /></div>
            <div id={"download"}><Download /></div>
        </div>
    )
}
export default Home
