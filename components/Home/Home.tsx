import React from 'react'
import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/Home/Services/Services";
import Resume from "@/components/Home/Resume/Resume";
import Projects from "@/components/Home/Projects/Projects";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Services />
            <Resume />
            <Projects />
        </div>
    )
}
export default Home
