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
                <div className={`tracking-tight ${invert ? "text-white bg-black" : "text-black"} `}>
                    <a href={"/"}>
                        Genyo
                    </a>
                </div>
                <div className="flex gap-4">
                    <NavbarButton invert={invert} text={"FAQ"} link={"/faq"} target={false} />
                    <NavbarButton invert={invert} text={"GITHUB"} link={"https://github.com/wuritz/genyo-addon"} target={true}/>
                </div>
            </div>
        </nav>
    )
}
export default NavbarSec
