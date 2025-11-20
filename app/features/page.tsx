import React from "react";
import ModuleFeatures from "@/components/Home/Features/Modules/ModuleFeatures";
import Download from "@/components/Home/Download/Download";
import Features from "@/components/Home/Features/Features";
import {genyoModules} from "@/app/api/genyo/genyoData";

export default function Page() {
    return (
        <div className={"scroll-smooth"}>
            <div className={"pt-25"}>
                <Features />
            </div>
            <ModuleFeatures allModules={genyoModules} />
            <Download />
        </div>
    )
}