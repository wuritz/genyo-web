import React from 'react'

type Props = {
    label: string;
}

const Tooltip = ({label}: Props) => {
    return (
        <div>
            <div className="absolute left-1/2 -top-2 -translate-x-1/2 -translate-y-full px-3 py-2 bg-gray-700/70 text-white rounded-sm backdrop-blur-md z-50 max-w-xs w-max text-md">
                {label}
            </div>
        </div>
    )
}
export default Tooltip
