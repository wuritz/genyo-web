"use client";

import React, {useEffect} from "react";
import ModuleFeatures from "@/components/Home/Features/Modules/ModuleFeatures";
import Download from "@/components/Home/Download/Download";
import Features from "@/components/Home/Features/Features";
import AOS from "aos";

export default function Page() {
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
        <div className={"scroll-smooth"}>
            <div className={"pt-25"}>
                <Features />
            </div>
            <ModuleFeatures />
            <Download />
        </div>
    )
}