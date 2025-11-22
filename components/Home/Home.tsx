import React from 'react'
import HeroSec from "@/components/Home/hero-sec";
import ModulesSec from "@/components/modules-sec";
import {genyoModules} from "@/app/api/genyo/genyoData";
import WhySec from "@/components/Home/why-sec";
import DownloadSec from "@/components/Home/download-sec";

const Home = () => {
    return (
        <div className={"min-h-screen bg-white text-black scroll-smooth"}>
            <section className={"relative flex flex-col"}>
                <HeroSec />
                <ModulesSec modules={genyoModules} />
                <WhySec />
                <DownloadSec />
            </section>
        </div>
    )
}
export default Home