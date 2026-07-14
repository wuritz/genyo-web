import React from 'react'
import Link from "next/link";

const FooterLink = ({ hrefLink, text }: { hrefLink: string; text: string; }) => {
    return (
        <Link href={hrefLink} className={"text-xs text-gray-400 hover:text-gray-600 hover:underline transition-all"} target={"_blank"}>{text}</Link>
    )
}

const FooterSec = () => {
    return (
        <footer className="bg-white border-t-2 border-black py-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className={"md:mt-2 mb-5 flex flex-col md:flex-row items-center justify-between"}>
                    <FooterLink hrefLink={"https://github.com/wuritz/genyo-addon"} text={"Addon GitHub"} />
                    <FooterLink hrefLink={"https://github.com/wuritz/genyo-web"} text={"Website GitHub"} />
                    <FooterLink hrefLink={"https://github.com/wuritz/genyo-installer"} text={"Installer GitHub"} />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-4">
                    <div className="font-mono text-sm text-gray-600">
                        MADE WITH SHITS AND GIGGLES.
                    </div>
                    <div className="font-mono text-sm text-gray-600">
                        WURITZ © 2026
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSec
