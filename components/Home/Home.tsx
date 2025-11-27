import React from 'react'
import HeroSec from "@/components/Home/hero-sec";
import ModulesSec from "@/components/Home/modules-sec";
import {genyoModules} from "@/app/api/genyo/genyoData";
import WhySec from "@/components/Home/why-sec";
import DownloadSec from "@/components/download-sec";
import TeamSec from "@/components/Home/team-sec";
import StatsSec from "@/components/Home/stats-sec";

const Home = () => {
    return (
        <div className={"min-h-screen bg-white text-black scroll-smooth"}>
            <section className={"relative flex flex-col"}>
                <HeroSec />
                <StatsSec />
                <ModulesSec modules={genyoModules} />
                <WhySec />
                <TeamSec />
                <DownloadSec />
            </section>
        </div>
    )
}
export default Home