"use client";
import React, {useEffect, useState} from 'react'
import {FaCode, FaDiscord} from "react-icons/fa";
import {NavLinks} from "@/constant/constant";
import Link from "next/link";
import {BiDownload} from "react-icons/bi";
import {HiBars3BottomRight} from "react-icons/hi2";
import Image from "next/image";

type Props = {
    openNav: () => void;
}

const Nav = ({openNav}: Props) => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            else setNavBg(false);
        };

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md':'fixed'} duration-200 h-[12vh] z-[10000] fixed w-full`}>
            <div className="flex items-center h-full justify-between w-[90%] mx-auto">
                {/* LOGO */}
                <div className="flex items-center space-x-2">
                    <div className="w-15 h-15  rounded-full flex items-center justify-center flex-col">
                        <a href={"#home"}><Image src={"/images/genyo.png"} alt={"genyo"} width={100} height={100} /></a>
                    </div>
                    <h1 className="text-x1 hidden sm:block md:text-2xl text-white font-bold ml-5">
                        <a href={"#home"}>Genyo</a>
                    </h1>
                </div>

                {/* Nav links */}
                <div className="hidden lg:flex items-center space-x-10">
                    {NavLinks.map((link) => {
                        return <Link key={link.id} href={link.url} className="text-base hover:text-cyan-300 text-white font-medium
                        transition-all duration-200">

                            <p>{link.label}</p>
                        </Link>
                    })}
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    {/* Discord button */}
                    <button className="px-5 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-600/40 hover:bg-blue-600/50
                    transition-all duration-300 text-white flex items-center space-x-2">
                        <FaDiscord className="w-5 h-5" />
                        <a href={"https://discord.gg/5nrEVnm6zJ"} target={"_blank"}>Discord</a>
                    </button>

                    {/* Download button */}
                    <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900
                    transition-all duration-300 text-white flex items-center space-x-2">
                        <BiDownload className="w-5 h-5" />
                        <a href={"https://github.com/wuritz/genyo-addon/releases"} target={"_blank"}>Download</a>
                    </button>

                    {/* Burger menu */}
                    <div className={"visible lg:hidden"}>
                        <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav
