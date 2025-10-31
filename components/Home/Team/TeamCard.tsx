import React from 'react'
import Image from "next/image";

type Props = {
    name: string,
    image: string
}

const TeamCard = ({name, image}: Props) => {
    return (
        <div className={"bg-blue-900/60 p-2 xl:p-10 rounded-2xl flex flex-row justify-start gap-4 xl:gap-10 items-center shadow-lg hover:bg-blue-600/60 transition-all duration-300"}>
            <Image src={image} alt={name} width={100} height={100} className={"rounded-lg border-white border-2 w-10 h-10 xl:w-20 xl:h-20"} />

            <h3 className={"text-sm xl:text-2xl text-white font-semibold"}>{name}</h3>
        </div>
    )
}
export default TeamCard
