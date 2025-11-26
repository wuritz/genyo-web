"use client";
import React, { useState } from "react";
import { Sword, Zap, Eye, Globe, Package } from "lucide-react";

type Category = "Combat" | "Misc" | "Movement" | "Visual" | "World";

const categoryIcons = {
    Combat: Sword,
    Movement: Zap,
    Visual: Eye,
    World: Globe,
    Misc: Package,
};

const SuggestSec = () => {
    const [moduleName, setModuleName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
    const [submitted, setSubmitted] = useState(false);

    const categories: Category[] = ["Combat", "Movement", "Visual", "World", "Misc"];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (moduleName && description && selectedCategory) {
            // Mock submission
            console.log({ moduleName, description, category: selectedCategory });
            setSubmitted(true);
            setTimeout(() => {
                setModuleName("");
                setDescription("");
                setSelectedCategory("");
                setSubmitted(false);
            }, 3000);
        }
    };

    return (
        <section className="border-t-4 border-black py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto mt-20">
                {/* Header */}
                <div
                    className="border-4 border-black bg-black text-white p-6 mb-12"
                >
                    <h2 className="uppercase tracking-wider mb-2" style={{ fontFamily: "monospace" }}>
                        got ideas?
                    </h2>
                    <p className="text-sm opacity-90">
                        suggest a module. we will probably add it.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Module Name */}
                    <div>
                        <label
                            htmlFor="module-name"
                            className="block uppercase tracking-wider text-xs mb-3"
                            style={{ fontFamily: "monospace" }}
                        >
                            module name
                        </label>
                        <input
                            id="module-name"
                            type="text"
                            value={moduleName}
                            onChange={(e) => setModuleName(e.target.value)}
                            placeholder="e.g., Auto Everything"
                            className="w-full border-3 border-black p-4 bg-white focus:outline-none focus:border-4"
                            required
                        />
                    </div>

                    {/* Category Selector */}
                    <div>
                        <label
                            className="block uppercase tracking-wider text-xs mb-4"
                            style={{ fontFamily: "monospace" }}
                        >
                            category
                        </label>
                        <div className="grid grid-cols-5 gap-3">
                            {categories.map((category) => {
                                const Icon = categoryIcons[category];
                                const isSelected = selectedCategory === category;
                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setSelectedCategory(category)}
                                        className={`
                      border-3 p-4 transition-all
                      ${isSelected
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-black border-black hover:bg-gray-100"
                                        }
                    `}
                                    >
                                        <Icon className="w-6 h-6 mx-auto mb-2" />
                                        <span className="text-xs uppercase" style={{ fontFamily: "monospace" }}>
                      {category}
                    </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className="block uppercase tracking-wider text-xs mb-3"
                            style={{ fontFamily: "monospace" }}
                        >
                            description / details
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Explain the details here.."
                            rows={6}
                            className="w-full border-3 border-black p-4 bg-white focus:outline-none focus:border-4 resize-none"
                            required
                        />
                        <p className="text-xs mt-2 opacity-60" style={{ fontFamily: "monospace" }}>
                            be specific. we can&#39;t read minds. yet.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={!moduleName || !description || !selectedCategory || submitted}
                            className={`
                border-4 border-black px-8 py-4 uppercase tracking-wider transition-all
                ${submitted
                                ? "bg-green-400 text-black"
                                : "bg-black text-white hover:bg-white hover:text-black disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                            }
              `}
                            style={{
                                fontFamily: "monospace",
                            }}
                        >
                            {submitted ? "✓ submitted" : "submit suggestion"}
                        </button>
                    </div>
                </form>

                {/* Success Message */}
                {submitted && (
                    <div
                        className="border-3 border-black bg-green-400 p-6 mt-8"
                        id={"success_msg"}
                    >
                        <p className="uppercase tracking-wider" style={{ fontFamily: "monospace" }}>
                            thanks! we&#39;ll consider it.
                        </p>
                        <p className="text-sm mt-2 opacity-80">
                            (don&#39;t get your hopes up)
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
export default SuggestSec
