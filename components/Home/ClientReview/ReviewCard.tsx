import React from 'react'
import Image from "next/image";

type Props = {
    name: string;
    image: string;
    role: string;
}

const ReviewCard = ({name, image, role}: Props) => {
    return (
        <div className={"m-2"}>
            <Image src={image} alt="client" width={60} height={60} className={"rounded-full"} />
            <p className={"mt-6 text-base text-gray-200 font-medium"}>
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut lorem libero, fringilla a dignissim non, malesuada sit amet erat.&quot;
            </p>
            <h1 className={"mt-6 text-xl font-bold text-cyan-200"}>{name}</h1>
            <p className={"mt-1 text-white"}>{role}</p>
        </div>
    )
}
export default ReviewCard
