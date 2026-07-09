"use client";
import React from 'react'
import {Button} from "@/components/UI/button";
import {ArrowRight, Download} from "lucide-react";
import {redirect} from "next/navigation";

type Props = {
    invert: boolean;
    navbar: boolean;
}

const DownloadButton = ({ invert, navbar }: Props) => {
    return (
        <Button
            size={navbar ? null : "lg"}
            className={
                invert ? `bg-white text-black hover:bg-gray-200 font-mono uppercase ${navbar ? "px-4 py-2 text-sm border transition-colors" : " border-2"} border-black rounded-none cursor-pointer`
                : "bg-black border-white text-white hover:bg-gray-800 font-mono uppercase border-2 rounded-none group cursor-pointer"
            }
            onClick={() => redirect("/download")}
        >
            <Download className="h-4 w-4" />
            DOWNLOAD
            {invert ? "" : <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
        </Button>
    )
}
export default DownloadButton
