"use client";
import React from 'react'

interface Props {
    username: string,
    image: string,
    role: string
}

const TeamCard = ({ username, image, role }: Props) => {
    const [hovering, setHovering] = React.useState(false);

    return (
        <div className={`border-2 border-black bg-gray-50 p-6 group hover:bg-black hover:text-white transition-colors cursor-pointer`}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <div className="flex items-center gap-4">
                <div className={`relative w-20 h-20 border-2 ${hovering ? "border-white" : "border-black"} overflow-hidden flex-shrink-0`}>
                    <img
                        src={image}
                        alt={username}
                        width={200} height={200}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                </div>

                <div>
                    <h3 className="font-mono uppercase mb-1">{username}</h3>
                    <div className="text-xs text-gray-500 group-hover:text-gray-300 font-mono">
                        {role}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TeamCard
