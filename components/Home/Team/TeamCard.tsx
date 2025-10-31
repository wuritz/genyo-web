import React from 'react'
import Image from "next/image";

type Props = {
    name: string,
    image: string
}

const TeamCard = ({name, image}: Props) => {
    return (
        <div className={"bg-blue-900/60 p-5 xl:p-10 pb-2 rounded-2xl flex flex-col text-center shadow-lg"}>
            <Image src={image} alt={name} width={100} height={100} className={"rounded-lg"} />

            <h3 className={"text-lg xl:text-2xl text-white font-semibold mt-3 xl:mt-7"}>{name}</h3>
        </div>
    )
}
export default TeamCard
