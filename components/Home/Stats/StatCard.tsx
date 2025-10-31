import React from 'react'
import {IconType} from "react-icons";

type Props = {
    title: string,
    value: string,
    Icon: IconType
}

const StatCard = ({title, value, Icon}: Props) => {
    return (
        <div className={"flex flex-row justify-between gap-15 p-5 bg-white rounded-xl w-65"}>
            <div className={"text-white flex flex-col items-start justify-start"}>
                <p className={"text-gray-400 text-sm"}>{title}</p>

                <p className={"text-black text-2xl mt-2 mb-2 font-bold"}>
                    {value}
                </p>
            </div>

            <Icon className={"mt-4 mr-2 text-4xl"} />
        </div>
    )
}
export default StatCard
