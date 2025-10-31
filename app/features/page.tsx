"use client";

import React from "react";
import ModuleFeatures from "@/components/Home/Features/Modules/ModuleFeatures";
import Download from "@/components/Home/Download/Download";
import Features from "@/components/Home/Features/Features";

export default function Page() {
    return (
        <div className={"pt-25 pb-10"}>
            <Features />
            <ModuleFeatures />
            <Download />
        </div>
    )
}