import React from 'react'
import {IconType} from "react-icons";

type Props = {
    name: string;
    desc: string;
    Icon: IconType;
}

const ModuleCard = ({name, desc, Icon}: Props) => {
    return (
        <div className={"mb-3 cursor-pointer"}>
            <div className={"flex justify-center md:items-start space-x-2 bg-blue-950/60 transition-all duration-300 p-2 md:p-4 sm:p-3 rounded-md hover:bg-blue-900"}>
                <div className={"[display: none;] md:[display: block;] sm:w-10 sm:h-10 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center flex-col"}>
                    <div className={"relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700/70 before:text-white before:rounded-md before:opacity-0 before:transition-all hover:before:opacity-100"}
                         data-tip={desc}
                    >
                        <Icon className={"sm:w-4 sm:h-4 w-3 h-3 text-white"}/>
                    </div>
                </div>

                <p className={"text-gray-200 text-xs sm:text-lg mt-3 md:mt-1.5 font-semibold"}>
                    {name}
                </p>
            </div>
        </div>
    )
}
export default ModuleCard
