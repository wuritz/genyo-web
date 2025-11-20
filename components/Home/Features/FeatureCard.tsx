"use client";
import React from 'react'
import Tooltip from "@/components/Home/Features/Tooltip";

type Props = {
    name: string,
    description: string
}

const FeatureCard = ({name, description}: Props) => {
    const [displayTt, setDisplayTt] = React.useState(false);

    return (
        <div
            className="relative"
            onMouseLeave={() => setDisplayTt(false)}
        >
            {displayTt && (
                <Tooltip label={description} />
            )}

            <button
                className="w-full hover:bg-gray-600/20 bg-gray-600/10 rounded-lg hover:rounded-2xl backdrop-blur-lg ring-1 ring-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => setDisplayTt(true)}
            >
                <p className="text-white lg:font-semibold text-xs xl:text-lg p-5 text-center">
                    {name}
                </p>
            </button>
        </div>
    )
}
export default FeatureCard
