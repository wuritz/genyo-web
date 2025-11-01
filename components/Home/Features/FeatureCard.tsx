import React from 'react'

type Props = {
    name: string
}

const FeatureCard = ({name}: Props) => {
    return (
        <div className={"bg-gray-600/10 hover:bg-gray-600/20 rounded-xl hover:rounded-2xl backdrop-blur-lg ring-1 ring-white/20 transition-all duration-300"}>
            <div className={"text-white lg:font-semibold text-xs xl:text-lg p-5 text-center"}>
                {name}
            </div>
        </div>
    )
}
export default FeatureCard
