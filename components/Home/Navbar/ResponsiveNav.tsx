"use client";
import React from 'react'
import Nav from "@/components/Home/Navbar/Nav";
import MobileNav from "@/components/Home/Navbar/MobileNav";

const ResponsiveNav = () => {

    const [showNav, setShowNav] = React.useState(false);

    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div>
            <Nav openNav={openNavHandler} />
            <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
        </div>
    )
}
export default ResponsiveNav
