import React from 'react'
import HeroSec from "@/components/Home/sections/hero-sec";
import ModulesSec from "@/components/Home/sections/modules-sec";
import {genyoModules} from "@/app/api/genyo/genyoData";
import WhySec from "@/components/Home/sections/why-sec";
import TeamSec from "@/components/Home/sections/team/team-sec";
import ScreenshotsSec from "@/components/Home/sections/screenshots/screenshots-sec";

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