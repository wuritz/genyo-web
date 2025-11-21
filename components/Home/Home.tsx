import React from 'react'
import HeroSec from "@/components/Home/hero-sec";
import NavbarSec from "@/components/Home/navbar-sec";

const Home = () => {
    return (
        <div className={"min-h-screen bg-white text-black"}>
            <section className={"relative min-h-screen flex flex-col"}>
                <NavbarSec />
                <HeroSec />
            </section>
        </div>
    )
}
export default Home