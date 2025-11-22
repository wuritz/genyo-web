import React from 'react'
import {TbBrandGithub} from "react-icons/tb";

type Props = {
    invert: boolean;
    text: string;
    link: string;
    target?: boolean;
    github?: boolean;
}

const NavbarButton = ({invert, text, link, target, github}: Props) => {
    return (
        <a href={link} target={target ? "_blank" : ""}>
            <button className={`${invert ? "text-white bg-black border-white border-1 hover:bg-white hover:text-black" : "text-black border-black border-1 hover:bg-black hover:text-white"} ${github ? "flex flex-1 items-center" : ""} font-mono text-sm px-4 py-2 transition-colors cursor-pointer`}>
                {github ? <TbBrandGithub className="mr-2 h-4 w-4" /> : ""} {text}
            </button>
        </a>
    )
}
export default NavbarButton
