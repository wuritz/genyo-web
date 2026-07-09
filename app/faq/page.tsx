import React from 'react'
import FaqSec from "@/components/FAQ/faq-sec";
import DownloadSec from "@/components/download-sec";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "FAQ",
    description: "Frequently asked questions about installing, configuring and using the Genyo utility addon for Minecraft"
}

const FaqPage = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Does this work on [insert server name]?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Idk. Try it and share your experiences in the Discord."
                }
            },
            {
                "@type": "Question",
                "name": "Can you add [feature]?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yeah probably. Share your suggestions in the Discord."
                }
            },
            {
                "@type": "Question",
                "name": "Can I contribute?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If you have a funny idea, then please. Most of the code is skidded anyway."
                }
            },
            {
                "@type": "Question",
                "name": "This is just a skid, isn't it?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Asked?"
                }
            },
            {
                "@type": "Question",
                "name": "What is the point?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Genyo."
                }
            }
        ]
    };

    return (
        <div className={"min-h-screen bg-white text-black scroll-smooth"}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <section className={"relative flex flex-col"}>
                <FaqSec />
                <DownloadSec />
            </section>
        </div>
    )
}
export default FaqPage
