import React from 'react'
import {IconType} from "react-icons";
import Tooltip from "@/components/v1/features/Tooltip";

type Props = {
    name: string;
    desc: string;
    Icon: IconType;
}

const ModuleCard = ({name, desc, Icon}: Props) => {
    const [displayTt, setDisplayT] = React.useState(false);

    return (
        <div
            className={"relative"}
            onMouseLeave={() => setDisplayT(false)}
        >
            {displayTt && (
                <Tooltip label={desc} />
            )}

            <button
                className={"flex justify-center items-center p-4 xl:p-3 bg-gray-600/10 w-full hover:bg-gray-600/20 rounded-xl hover:rounded-2xl backdrop-blur-lg ring-1 ring-white/20 transition-all duration-300 cursor-pointer"}
                onClick={() => setDisplayT(true)}
            >

                <Icon className={"sm:w-4 sm:h-4 w-3 h-3 text-white"}/>
                <p className={"ml-5 text-gray-200 text-xs sm:text-lg font-semibold"}>
                    {name}
                </p>
            </button>
        </div>
    )
}
export default ModuleCard
