"use client";
import React, { useState } from 'react'
import { Sword, Zap, Eye, Globe, Package } from "lucide-react";
import { ModuleProps } from "@/app/api/genyo/genyoData";

type Props = {
    modules: ModuleProps[];
}
type Category = "Combat" | "Misc" | "Movement" | "Visual" | "World";

const categoryIcons = {
    Combat: Sword,
    Movement: Zap,
    Visual: Eye,
    World: Globe,
    Misc: Package,
};

const ModulesSec = ({modules}: Props) => {
    const [selectedCategory, setSelectedCategory] = useState<Category>("Combat");
    const categories: Category[] = ["Combat", "Movement", "Visual", "World", "Misc"];

    const filteredModules = modules.filter(module => module.category === selectedCategory);

    return (
        <section className="border-t-4 border-black py-20 px-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="mb-4 leading-none">MODULES</h2>
                    <p className="text-gray-600 text-lg max-w-2xl">
                        Click a category. Read descriptions. Feel superior about your life choices.
                    </p>
                </div>

                {/* Sidebar layout */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar - Categories with icons */}
                    <div className="lg:w-64 flex-shrink-0">
                        <div className="border-2 border-black bg-white sticky top-30">
                            {categories.map((category, index) => {
                                const Icon = categoryIcons[category];
                                return (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`w-full flex items-center gap-3 px-6 py-5 font-mono uppercase text-sm transition-colors ${
                                            index !== 0 ? "border-t-2 border-black" : ""
                                        } ${
                                            selectedCategory === category
                                                ? "bg-black text-white"
                                                : "bg-white text-black hover:bg-gray-100"
                                        }`}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span>{category}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1">
                        {/* Module count */}
                        <div className="mb-6 font-mono text-sm text-gray-500">
                            SHOWING {filteredModules.length} MODULES
                        </div>

                        {/* Modules Grid - 2 columns */}
                        <div className="grid md:grid-cols-2 gap-4">
                            {filteredModules.map((module, index) => (
                                <div
                                    key={index}
                                    className="border-2 border-black p-5 bg-white hover:bg-black hover:text-white transition-colors group cursor-pointer"
                                >
                                    <h3 className="mb-2 font-mono uppercase text-sm">{module.name}</h3>
                                    <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-300">
                                        {module.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <p className={"font-mono text-sm capitalize text-gray-500 mt-20 text-center"}>
                        CAN&#39;T FIND WHAT YOU&#39;RE LOOKING FOR? MAYBE IT&#39;S IN A DIFFERENT CATEGORY. OR MAYBE WE DIDN&#39;T MAKE IT YET. <br /> LIFE IS FULL OF MYSTERIES.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default ModulesSec
