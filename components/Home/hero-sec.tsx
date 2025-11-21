import React from 'react'
import {Button} from "@/components/UI/button";
import { ArrowRight  } from "lucide-react";
import {TbBrandGithub} from "react-icons/tb";

const HeroSec = () => {
    return (
        <div className={"flex flex-1 items-center justify-center px-6 py-20"}>
            <div className="max-w-6xl w-full">
                <div className="mb-12">
                    <div className="inline-block border-2 border-black px-4 py-1 mb-8 rotate-[-1deg]">
                        <span className="font-mono text-xs uppercase">v1.0 • DEFINITELY NOT CHEATING</span>
                    </div>

                    <h1 className="mb-6 leading-none">
                        GENYO
                        <br />
                        <span className="text-gray-400">ADDON</span>
                    </h1>

                    <div className="max-w-2xl mb-8">
                        <p className="text-xl leading-relaxed">
                            For when you&#39;re too lazy to do things manually. This addon does literally everything
                            for you except make you better at the game.
                        </p>
                        <p className="text-lg text-gray-500 mt-4">
                            That part&#39;s still on you, sorry.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <Button
                            size="lg"
                            className="bg-black text-white hover:bg-gray-800 font-mono uppercase border-2 border-black rounded-none group"
                        >
                            ACQUIRE POWERS
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-black rounded-none font-mono uppercase hover:bg-black hover:text-white"
                        >
                            <TbBrandGithub className="mr-2 h-4 w-4" />
                            GITHUB
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border-2 border-black p-6 bg-white hover:bg-black hover:text-white transition-colors group">
                        <div className="text-4xl font-mono mb-2">100%</div>
                        <div className="text-sm uppercase font-mono text-gray-500 group-hover:text-gray-300">
                            More Efficient*
                        </div>
                    </div>
                    <div className="border-2 border-black p-6 bg-black text-white hover:bg-white hover:text-black transition-colors group">
                        <div className="text-4xl font-mono mb-2">0</div>
                        <div className="text-sm uppercase font-mono text-gray-300 group-hover:text-gray-500">
                            Brain Cells
                        </div>
                    </div>
                    <div className="border-2 border-black p-6 bg-white hover:bg-black hover:text-white transition-colors group">
                        <div className="text-4xl font-mono mb-2">70+</div>
                        <div className="text-sm uppercase font-mono text-gray-500 group-hover:text-gray-300">
                            Modules
                        </div>
                    </div>
                    <div className="border-2 border-black p-6 bg-black text-white hover:bg-white hover:text-black transition-colors group">
                        <div className="text-4xl font-mono mb-2">YES</div>
                        <div className="text-sm uppercase font-mono text-gray-300 group-hover:text-gray-500">
                            It Works
                        </div>
                    </div>
                </div>

                <p className="mt-4 text-xs text-gray-400 font-mono">
                    *COMPARED TO DOING IT YOURSELF LIKE A PEASANT
                </p>
            </div>
        </div>
    )
}
export default HeroSec
