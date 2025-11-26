"use client";
import React, {useEffect} from 'react'
import NavbarButton from "@/components/navbar/navbar-button";

const NavbarSec = () => {
    const [invert, setInvert] = React.useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setInvert(true);
            else setInvert(false);
        };

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav className={`border-b-4 ${invert ? "backdrop-invert backdrop-blur-sm shadow-sm" : ""} border-black p-6 fixed w-full z-[1000] transition-all duration-300`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href={"/"}>
                    <div className={`tracking-tight ${invert ? "text-white bg-black hover:text-black hover:bg-white hover:border-white" : "text-black hover:text-white hover:bg-black hover:border-black"} hover:px-3 transition-all duration-150 border-1 px-2 py-1`}>
                        Genyo
                    </div>
                </a>
                <div className="flex gap-4">
                    <NavbarButton invert={invert} text={"FAQ"} link={"/faq"} target={false} />
                    <NavbarButton invert={invert} text={"SUGGEST"} link={"/suggest"} target={false} />
                    <NavbarButton invert={invert} text={"GITHUB"} github={true} link={"https://github.com/wuritz/genyo-addon"} target={true}/>
                </div>
            </div>
        </nav>
    )
}
export default NavbarSec
