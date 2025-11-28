import React from 'react'
import {Button} from "@/components/UI/button";
import { Download } from "lucide-react";
import {TbBrandGithub} from "react-icons/tb";
import {FaDiscord} from "react-icons/fa";
import DownloadButton from "@/components/DownloadButton";

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
                        here&#39;s a cookie 🍪
                    </p>
                    <p className="text-gray-400 mb-12">
                        Just kidding. I already ate it. Yummers :D
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <DownloadButton invert={true} />
                        <a href={"https://github.com/wuritz/genyo-addon"} target={"_blank"}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-mono uppercase cursor-pointer"
                            >
                                <TbBrandGithub className="mr-2 h-4 w-4" />
                                GITHUB
                            </Button>
                        </a>
                        <a href={"https://discord.gg/5nrEVnm6zJ"} target={"_blank"}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-mono uppercase cursor-pointer"
                            >
                                <FaDiscord className="mr-2 h-4 w-4" />
                                DISCORD
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>    )
}
export default DownloadSec
