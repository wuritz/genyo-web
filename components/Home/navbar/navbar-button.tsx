import React from 'react'

type Props = {
    invert: boolean;
    text: string;
    link: string;
}

const NavbarButton = ({invert, text, link}: Props) => {
    return (
        <a href={link} target={"_blank"}>
            <button className={`${invert ? "text-white bg-black border-white border-1 hover:bg-white hover:text-black" : "text-black border-black border-1 hover:bg-black hover:text-white"} font-mono text-sm px-4 py-2 transition-colors cursor-pointer`}>
                {text}
            </button>
        </a>
    )
}
export default NavbarButton
