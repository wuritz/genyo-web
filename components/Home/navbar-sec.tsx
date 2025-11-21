import React from 'react'

const NavbarSec = () => {
    return (
        <nav className="border-b-4 border-black p-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="font-mono uppercase tracking-tight">GENYO</div>
                <div className="flex gap-4">
                    <button className="font-mono text-sm hover:bg-black hover:text-white px-4 py-2 transition-colors">
                        DOCS
                    </button>
                    <button className="font-mono text-sm hover:bg-black hover:text-white px-4 py-2 transition-colors">
                        GITHUB
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default NavbarSec
