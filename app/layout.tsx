import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarSec from "@/components/navbar/navbar-sec";
import React from "react";
import FooterSec from "@/components/footer-sec";

const font = Inter({
    weight: ['400', '500', '600', '700'],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: '%s - Genyo Addon',
        default: 'Genyo Addon | Utility mod for Meteor Client',
    },
    description: "The best PvP addon for Meteor Client, for Minecraft 1.21.11, featuring over 70+ modules.",
    keywords: ["Minecraft", "Meteor", "Meteor Client", "Fabric", "Mod", "Modding", "Modded", "Hacked", "Client", "Anarchy", "2b2t", "9b9t", "Meteor Addon", "meteor addons"],
    openGraph: {
        title: "Genyo Addon | PvP addon for Meteor Client",
        description: "The best PvP addon for Meteor Client, tailored for 9b9t and other anarchy servers.",
        url: "https://genyo.dev",
        siteName: "Genyo Addon",
        images: [
            {
                url: "https://genyo.dev/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Genyo Addon preview"
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: "summary_large_image",
        title: "Genyo Addon | Utility mod for Meteor Client",
        description: "The best PvP addon for Meteor Client",
        images: ["https://genyo.dev/opengraph-image.png"],
    },
    metadataBase: new URL("https://genyo.dev"),
    robots: {
        index: true,
        follow: true
    }
};

export default function RootLayout({
   children,
   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${font.className} antialiased`}>
                <NavbarSec />
                {children}
                <FooterSec />
            </body>
        </html>
    );
}