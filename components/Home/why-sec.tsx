import React from 'react'
import { Check, X, AlertCircle } from "lucide-react";

const WhySec = () => {
    return (
        <section className="border-t-4 border-black py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="mb-4 leading-none">WHY USE GENYO?</h2>
                    <p className="text-gray-600 text-lg max-w-2xl">
                        I mean it&#39;s pretty obvious, but if you really need more convincing:
                    </p>
                </div>

                {/* Asymmetric reason grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16">
                    {/* Big bold reason 1 */}
                    <div className="md:col-span-7 border-2 border-black bg-black text-white p-12">
                        <div className="text-6xl md:text-8xl font-mono mb-4 leading-none">
                            IT&#39;S
                            <br />
                            FREE
                        </div>
                        <p className="text-lg text-gray-300">
                            This just looks cool. Free is my favourite word.
                        </p>
                    </div>

                    {/* Stack of smaller reasons */}
                    <div className="md:col-span-5 flex flex-col gap-4">
                        <div className="border-2 border-black bg-white p-6">
                            <div className="text-3xl font-mono mb-2">OPEN</div>
                            <p className="text-sm text-gray-600">
                                Genyo is open-source. Yay I guess.
                            </p>
                        </div>
                        <div className="border-2 border-black bg-gray-50 p-6">
                            <div className="text-3xl font-mono mb-2">70+</div>
                            <p className="text-sm text-gray-600">
                                Modules. We could make a client but I don&#39;t want to.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <div className="font-mono text-sm mb-4 text-gray-500 uppercase">THIS WAS WRITTEN WITH AI BUT ITS FUNNY:</div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Before */}
                        <div className="border-2 border-black p-8 bg-gray-50">
                            <div className="flex items-center gap-2 mb-6">
                                <X className="h-6 w-6" />
                                <span className="font-mono uppercase">WITHOUT GENYO</span>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">😴</span>
                                    <span className="text-sm">Manual everything. It's 2025, come on.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">⏰</span>
                                    <span className="text-sm">Hours wasted on repetitive tasks.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">🤕</span>
                                    <span className="text-sm">Guaranteed carpal tunnel syndrome.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">😢</span>
                                    <span className="text-sm">Constant sense of inadequacy.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">💸</span>
                                    <span className="text-sm">Probably paying for inferior alternatives.</span>
                                </li>
                            </ul>
                        </div>

                        {/* After */}
                        <div className="border-2 border-black p-8 bg-black text-white">
                            <div className="flex items-center gap-2 mb-6">
                                <Check className="h-6 w-6" />
                                <span className="font-mono uppercase">WITH GENYO</span>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">🚀</span>
                                    <span className="text-sm">Everything automated. Peak efficiency.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">⚡</span>
                                    <span className="text-sm">More time for important things (memes).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">😌</span>
                                    <span className="text-sm">Your hands finally get a break.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">😎</span>
                                    <span className="text-sm">Smugness levels at all-time high.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">💰</span>
                                    <span className="text-sm">Free. Did we mention it's free?</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Big disclaimer */}
                <div className="border-2 border-black bg-yellow-50 p-8">
                    <div className="flex gap-4">
                        <AlertCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                        <div>
                            <div className="font-mono uppercase mb-2">DISCLAIMER</div>
                            <p className="text-sm leading-relaxed">
                                Genyo Addon may cause life-improving side-effects, such as
                                a phenomenon called &#34;never going back to vanilla&#34;. The most severe
                                cases include &#34;never using anything else&#34;, but that&#39;s the whole point I guess.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default WhySec
