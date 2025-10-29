import React from 'react'
import Image from "next/image";

type Props = {
    image: string;
}

const ScreenshotCard = ({image}: Props) => {
    return (
        <div className={"m-2"}>
            <Image src={image} alt="client" width={960} height={540} className={"rounded-md"}/>
        </div>
    )
}
export default ScreenshotCard
