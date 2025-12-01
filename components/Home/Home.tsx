import React from 'react'
import HeroSec from "@/components/Home/hero-sec";
import ModulesSec from "@/components/Home/modules-sec";
import {genyoModules} from "@/app/api/genyo/genyoData";
import WhySec from "@/components/Home/why-sec";
import DownloadSec from "@/components/download-sec";
import TeamSec from "@/components/Home/team-sec";
import ScreenshotsSec from "@/components/Home/screenshots-sec";

const Home = () => {
    return (
        <section>
            <HeroSec />
            <ModulesSec modules={genyoModules} />
            <ScreenshotsSec />
            <WhySec />
            <TeamSec />
        </section>
    )
}
export default Home