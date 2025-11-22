import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarSec from "@/components/Home/navbar/navbar-sec";
import React from "react";
import FooterSec from "@/components/footer-sec";

const font = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genyo Addon",
  description: "Utility Meteor addon powered by special people's special minds.",
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
