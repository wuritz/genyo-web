import React from 'react'
import {TbBrandGithub} from "react-icons/tb";
import Link from "next/link";

type Props = {
    invert: boolean;
    text: string;
    link: string;
    target?: boolean;
    github?: boolean;
}

const NavbarButton = ({invert, text, link, target, github}: Props) => {
    return (
        <Link href={link} target={target ? "_blank" : ""}>
            <button className={`${invert ? "text-white border-white border hover:bg-white hover:text-black" : "text-white border-white hover:bg-white hover:text-black"} ${github ? "flex flex-1 items-center" : ""} bg-black font-mono text-sm px-4 py-2 border transition-colors cursor-pointer`}>
                {github ? <TbBrandGithub className="mr-2 h-4 w-4" /> : ""} {text}
            </button>
        </Link>
    )
}
export default NavbarButton
