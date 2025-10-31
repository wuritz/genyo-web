import React from 'react'
import Image from "next/image";

type Props = {
    icon: string;
    name: string;
    description: string;
}

const ProfessionalCard = ({icon, name, description}: Props) => {
    return (
        <div>
            <Image src={icon} alt={"img"} width={60} height={60} />
            <h3 className={"mt-6 text-xl md:text-2xl font-bold text-gray-200 hover:text-cyan-200 transition-all duration-300"}>{name}</h3>
            <p className={"mt-6 text-gray-300 hover:text-white transition-all duration-300"}>{description}</p>
        </div>
    );
};

export default ProfessionalCard
