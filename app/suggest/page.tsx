import React from 'react'
import SuggestSec from "@/components/Suggest/suggest-sec";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Suggest"
}

const Page = () => {
    return (
        <SuggestSec />
    )
}
export default Page
