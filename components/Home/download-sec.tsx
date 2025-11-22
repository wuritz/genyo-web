import React from 'react'
import {Button} from "@/components/UI/button";
import { Download, BookOpen } from "lucide-react";
import {TbBrandGithub} from "react-icons/tb";

const DownloadSec = () => {
    return (
        <section className="border-t-4 border-black">
            {/* CTA Section */}
            <div className="bg-black text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="mb-6 leading-none text-white">
                        STILL READING?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Most people just download stuff without reading. But since you made it this far,
                        here's a cookie 🍪
                    </p>
                    <p className="text-gray-400 mb-12">
                        Just kidding. You get nothing except this addon.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-gray-200 font-mono uppercase border-2 border-white rounded-none"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            DOWNLOAD NOW
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-mono uppercase"
                        >
                            <TbBrandGithub className="mr-2 h-4 w-4" />
                            GITHUB
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-mono uppercase"
                        >
                            <BookOpen className="mr-2 h-4 w-4" />
                            DOCS
                        </Button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm font-mono text-gray-400">
                        <span>FREE AS IN BEER</span>
                        <span>•</span>
                        <span>OPEN SOURCE</span>
                        <span>•</span>
                        <span>NO WARRANTY</span>
                    </div>
                </div>
            </div>
        </section>    )
}
export default DownloadSec
