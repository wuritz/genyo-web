"use client";
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation';
import NavbarButton from "@/components/navbar/navbar-button";

const NavbarSec = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const [invert, setInvert] = React.useState(!isHomePage);

    useEffect(() => {
        if (!isHomePage) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setInvert(true);
            return;
        }

        const handler = () => {
            const threshold = window.innerHeight * 0.9;
            if (window.scrollY >= threshold) setInvert(true);
            else setInvert(false);
        };

        window.addEventListener("scroll", handler);

        handler();

        return () => window.removeEventListener("scroll", handler);
    }, [isHomePage]);

    return (
        <nav className={`${invert ? "backdrop-invert backdrop-blur-sm shadow-sm border-b-4" : ""} top-0 left-0 border-black p-6 fixed w-full z-[1000] transition-all duration-300`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href={"/"}>
                    <div className={`tracking-tight ${invert ? "text-white bg-black hover:text-black hover:bg-white hover:border-white" : "text-white bg-black hover:text-black hover:bg-white hover:border-white"} hover:px-3 transition-all duration-150 border-1 px-2 py-1`}>
                        Genyo
                    </div>
                </a>
                <div className="flex gap-4">
                    <NavbarButton invert={invert} text={"FAQ"} link={"/faq"} target={false} />
                    <NavbarButton invert={invert} text={"GITHUB"} github={true} link={"/github"} target={true}/>
                </div>
            </div>
        </nav>
    )
}

export default NavbarSec;