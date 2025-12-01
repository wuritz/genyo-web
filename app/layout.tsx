import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarSec from "@/components/navbar/navbar-sec";
import React from "react";
import FooterSec from "@/components/footer-sec";

const font = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: '%s - Genyo Addon',
        default: 'Genyo Addon'
    },
    description: "Utility Meteor addon powered by special people's special minds.",
    keywords: ["Minecraft", "Meteor", "Meteor Client", "Fabric", "Mod", "Modding", "Modded", "Hacked", "Client", "Anarchy", "2b2t", "9b9t"]
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
