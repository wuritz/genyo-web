"use client";
import React from "react";
import {Button} from "@/components/UI/button";

type GitHubAsset = {
    name: string;
    browser_download_url: string;
};

type GitHubRelease = {
    tag_name: string;
    assets: GitHubAsset[];
};

const DownloadGitHub = () => {
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
            type="button"
            onClick={() => handleDownload()}
            className="rounded-md bg-green-700 px-3 md:px-5 py-2 text-sm md:text-md hover:cursor-pointer font-semibold text-white inset-ring inset-ring-white/5 hover:bg-green-400/80 hover:border hover:border-white/50 transition-all duration-150"
        >
            Download from GitHub
        </Button>
    );
};

export default DownloadGitHub;
