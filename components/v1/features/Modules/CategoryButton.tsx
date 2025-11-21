import React from 'react'

interface Props {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const CategoryButton = ({label, isActive, onClick}: Props) => {
    return (
        <button className={`w-[40%] m-5 p-4 md:p-5 text-gray-400 rounded-2xl font-bold text-xs mb-10 md:text-xl xl:text-2xl pl-5 pr-5 ${isActive ? "bg-white/5 ring-white/50 text-white" : "bg-white/2 ring-white/20"} hover:bg-white/3 shadow-lg ring-1 hover:ring-white/30 rounded-2xl backdrop-blur-lg transition-all duration-300 cursor-pointer`}
            onClick={onClick}>
            {label}
        </button>
    )
}
export default CategoryButton
