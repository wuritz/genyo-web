import React from 'react'

type Props = {
    label: string
}

const StatLabel = ({label}: Props) => {
    return (
        <div className={"font-bold text-2xl p-9  text-white"}>
            {label}
        </div>
    )
}
export default StatLabel
