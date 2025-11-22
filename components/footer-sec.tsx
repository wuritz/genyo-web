import React from 'react'

const FooterSec = () => {
    return (
        <footer className="bg-white border-t-2 border-black py-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="font-mono text-sm text-gray-600">
                        MADE WITH QUESTIONABLE LIFE CHOICES.
                    </div>
                    <div className="font-mono text-sm text-gray-600">
                        WURITZ © 2025
                    </div>
                </div>
                <div className="mt-4 text-center text-xs text-gray-400">
                    DISCLAIMER: YUKI IS SHORT.
                </div>
            </div>
        </footer>
    )
}
export default FooterSec
