import React from 'react'

type Props = {
    invert: boolean;
    text: string;
    link: string;
}

const NavbarButton = ({invert, text, link}: Props) => {
    return (
        <a href={link} target={"_blank"}>
            <button className={`${invert ? "text-white hover:bg-white hover:text-black" : "text-black hover:bg-black hover:text-white"} font-mono text-sm px-4 py-2 transition-colors cursor-pointer`}>
                {text}
            </button>
        </a>
    )
}
export default NavbarButton
