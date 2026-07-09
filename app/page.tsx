import React from 'react'
import Home from "@/components/Home/Home";

const HomePage = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Genyo Addon",
        "url": "https://genyo.dev",
        "description": "The best PvP addon for Meteor Client, for Minecraft 1.21.11, featuring over 70+ modules.",
        "applicationCategory": "GameApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "softwareVersion": "1.21.11",
        "author": {
            "@type": "Person",
            "name": "wuritz",
            "url": "https://github.com/wuritz"
        },
        "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "requirements": "Requires Fabric, Meteor Client and Minecraft 1.21.11",
        "sameAs": [
            "https://github.com/wuritz/genyo-addon",
            "https://discord.gg/5nrEVnm6zJ"
        ]
    };

    return (
        <main>
            {<script
                type={"application/ld+json"}
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />}

            <Home />
        </main>
    );
}

export default HomePage;