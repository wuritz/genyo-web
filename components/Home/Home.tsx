import React, { useEffect } from 'react'
import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/Home/Services/Services";
import Resume from "@/components/Home/Resume/Resume";
import Projects from "@/components/Home/Projects/Projects";
import Skills from "@/components/Home/Skills/Skills";
import ClientReview from "@/components/Home/ClientReview/ClientReview";
import Blog from "@/components/Home/Blog/Blog";
import Contact from "@/components/Home/Contact/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

    useEffect(() => {
        const initAOS = async () => {
            await import("aos");

            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom"
            });

            initAOS();
        }
    }, []);

    return (
        <div className="overflow-hidden">
            <Hero />
            <Services />
            <Resume />
            <Projects />
            <Skills />
            <ClientReview />
            <Blog />
            <Contact />
        </div>
    )
}
export default Home
