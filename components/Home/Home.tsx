import React from 'react'
import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/Home/Services/Services";
import Resume from "@/components/Home/Resume/Resume";
import Projects from "@/components/Home/Projects/Projects";
import Skills from "@/components/Home/Skills/Skills";
import ClientReview from "@/components/Home/ClientReview/ClientReview";
import Blog from "@/components/Home/Blog/Blog";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Services />
            <Resume />
            <Projects />
            <Skills />
            <ClientReview />
            <Blog />
        </div>
    )
}
export default Home
