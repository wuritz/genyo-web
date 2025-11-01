import React from 'react'
import Image from "next/image";

type Props = {
    name: string,
    image: string
}

const TeamCard = ({name, image}: Props) => {
    return (
        <div className={"p-2 xl:p-10 flex flex-row justify-start gap-4 xl:gap-10 items-center shadow-lg bg-gray-600/10 hover:bg-gray-600/20 rounded-xl hover:rounded-2xl backdrop-blur-lg ring-1 ring-white/30 hover:ring-white/40 transition-all duration-300"}>
            <Image src={image} alt={name} width={100} height={100} className={"rounded-lg border-white border-2 w-10 h-10 xl:w-20 xl:h-20"} />

            <h3 className={"text-sm xl:text-2xl text-white font-semibold"}>{name}</h3>
        </div>
    )
}
export default TeamCard
