import React from 'react'
import {IconType} from "react-icons";

type Props = {
    name: string;
    Icon: IconType;
}

const ModuleCard = ({name, Icon}: Props) => {
    return (
        <div className={"mb-3"}>
            <div className={"flex items-start space-x-2 bg-blue-950/20 transition-all duration-300 p-4 sm:p-3 rounded-md hover:bg-blue-900"}>
                <div className={"sm:w-10 sm:h-10 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center flex-col"}>
                    <Icon className={"sm:w-4 sm:h-4 w-3 h-3 text-white"}/>
                </div>

                <h1 className={"text-gray-200  text-xs sm:text-lg mt-1.5 font-semibold"}>
                    {name}
                </h1>
            </div>
        </div>
    )
}
export default ModuleCard
