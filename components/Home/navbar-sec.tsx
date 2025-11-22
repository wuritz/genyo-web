"use client";
import React, {useEffect} from 'react'
import NavbarButton from "@/components/Home/navbar/navbar-button";

const NavbarSec = () => {
    const [invert, setInvert] = React.useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 123) setInvert(true);
            else setInvert(false);
        };

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav className={`border-b-4 ${invert ? "backdrop-invert backdrop-blur-sm" : ""} border-black p-6 fixed w-full z-[1000] transition-all duration-300`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className={`font-mono uppercase tracking-tight ${invert ? "text-white" : "text-black"} `}>GENYO</div>
                <div className="flex gap-4">
                    <NavbarButton invert={invert} text={"DOCS"} link={""} />
                    <NavbarButton invert={invert} text={"GITHUB"} link={"https://github.com/wuritz/genyo-addon"} />
                </div>
            </div>
        </nav>
    )
}
export default NavbarSec
