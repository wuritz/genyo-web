"use client";
import React, {useEffect} from 'react'
import NavbarButton from "@/components/navbar/navbar-button";

const NavbarSec = () => {
    const [invert, setInvert] = React.useState(false);

    useEffect(() => {
        const handler = () => {
            // Trigger once we've scrolled roughly past the hero section
            // (min-h-screen), so the backdrop-invert never samples/inverts
            // the BlobCursor gradient still visible behind the navbar.
            const threshold = window.innerHeight * 0.9;
            if (window.scrollY >= threshold) setInvert(true);
            else setInvert(false);
        };

        window.addEventListener("scroll", handler);
        handler();

        return () => window.removeEventListener("scroll", handler);
    }, []);

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
export default NavbarSec