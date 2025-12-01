import React from 'react'
import FaqSec from "@/components/FAQ/faq-sec";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "FAQ"
}

const FaqPage = () => {
    return (
        <FaqSec />
    )
}
export default FaqPage
