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
            <div className={"p-4 xl:p-0bg-gray-600/10 hover:bg-gray-600/20 rounded-xl hover:rounded-2xl backdrop-blur-lg ring-1 ring-white/20 transition-all duration-300"}>
                <div className={"flex items-center gap-4 justify-center relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700/70 before:text-white before:rounded-md before:opacity-0 before:transition-all hover:before:opacity-100"}
                     data-tip={desc}
                >
                    <Icon className={"sm:w-4 sm:h-4 w-3 h-3 text-white"}/>

                    <p className={"text-gray-200 text-xs sm:text-lg font-semibold"}>
                        {name}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ModuleCard
