import React from 'react'
import Image from "next/image";

type Props = {
    image: string;
    title: string;
    date: string;
}

const BlogCard = ({image, title, date}: Props) => {
    return (
        <div>
            <Image src={image} alt="blog" width={500} height={500} className={"object-cover"}/>

            <p className={"mt-4 text-gray-500 font-medium text-base sm:text-lg"}>
                {date}
            </p>

            <h1 className={"mt-5 text-lg sm:text-xl font-bold text-white hover:underline hover:text-cyan-300 cursor-pointer transition-all duration-300"}>
                {title}
            </h1>

            <div className={"mt-4 flex gap-2 items-center"}>
                <p className={"px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full"}>
                    React
                </p>
                <p className={"px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full"}>
                    Next.js
                </p>
                <p className={"px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full"}>
                    Fasz
                </p>
            </div>
        </div>
    )
}
export default BlogCard
