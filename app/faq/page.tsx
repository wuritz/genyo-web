import React from 'react'
import FaqSec from "@/components/FAQ/faq-sec";
import DownloadSec from "@/components/download-sec";

const FaqPage = () => {
    return (
        <div className={"min-h-screen bg-white text-black scroll-smooth"}>
            <section className={"relative flex flex-col"}>
                <FaqSec />
                <DownloadSec />
            </section>
        </div>
    )
}
export default FaqPage
