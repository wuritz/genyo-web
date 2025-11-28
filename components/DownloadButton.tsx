"use client";
import React from 'react'
import {Button} from "@/components/UI/button";
import {ArrowRight, Download} from "lucide-react";

type Props = {
    invert: boolean;
}

type GitHubAsset = {
    name: string;
    browser_download_url: string;
};

type GitHubRelease = {
    tag_name: string;
    assets: GitHubAsset[];
};

const DownloadButton = ({ invert }: Props) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleDownload = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch("https://api.github.com/repos/wuritz/genyo-addon/releases/latest");

            if (!res.ok) {
                throw new Error(`GitHub API error: ${res.status}`);
            }

            const data: GitHubRelease = await res.json();

            const asset = data.assets.find((a) =>
                a.name.includes("jar")
            );

            if (!asset) {
                console.error("No matching asset found in latest release")
                return;
            }

            window.location.href = asset.browser_download_url;
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError("Unable to download the release");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            size={"lg"}
            className={invert ? "bg-white text-black hover:bg-gray-200 font-mono uppercase border-2 border-white rounded-none cursor-pointer"
                : "bg-black text-white hover:bg-gray-800 font-mono uppercase border-2 border-black rounded-none group cursor-pointer"}
            onClick={handleDownload}
        >
            <Download className="mr-2 h-4 w-4" />
            DOWNLOAD
            {invert ? "" : <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
        </Button>
    )
}
export default DownloadButton
