import React from 'react'

type Props = {
    name: string
}

const FeatureCard = ({name}: Props) => {
    return (
        <div className={"text-white lg:font-semibold text-xs xl:text-lg bg-blue-950 p-5 rounded-xl text-center hover:bg-blue-800 transition-all duration-300"}>
            {name}
        </div>
    )
}
export default FeatureCard
