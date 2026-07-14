import React from 'react'
import HeroSec from "@/components/Home/hero/hero-sec";
import ModulesSec from "@/components/Home/modules-sec";
import {genyoModules} from "@/app/api/genyo/genyoData";
import WhySec from "@/components/Home/why-sec";
import BlackCookieSec from "@/components/black-cookie-sec";
import TeamSec from "@/components/Home/team-sec";
import ChangelogsSec from "@/components/Changelogs/changelogs-sec";

interface GithubAsset { download_count: number; }
interface GithubRelease { tag_name: string; assets: GithubAsset[]; }

async function getGithubStats() {
    try {
        const headers = {
            Accept: "application/vnd.github+json",
            ...(process.env.GH_API_TOKEN && {
                Authorization: `Bearer ${process.env.GH_API_TOKEN}`
            })
        };

        // Fetch latest release and CACHE it for 3600 seconds (1 hour)
        const latestRes = await fetch(
            "https://api.github.com/repos/wuritz/genyo-addon/releases/latest",
            { headers, next: { revalidate: 3600 } }
        );

        if (!latestRes.ok) return { release: null, totalDownloads: 0 };
        const release = (await latestRes.json()) as GithubRelease;

        // Fetch all releases for the download count (also cached for 1 hour)
        const allReleases: GithubRelease[] = [];
        let page = 1;
        let hasNext = true;

        while (hasNext) {
            const res = await fetch(
                `https://api.github.com/repos/wuritz/genyo-addon/releases?per_page=100&page=${page}`,
                { headers, next: { revalidate: 3600 } }
            );

            if (!res.ok) break;

            const pageReleases = (await res.json()) as GithubRelease[];
            allReleases.push(...pageReleases);

            const linkHeader = res.headers.get("Link") || "";
            if (linkHeader.includes('rel="next"')) {
                page += 1;
            } else {
                hasNext = false;
            }
        }

        const totalDownloads = allReleases.reduce((sum, rel) => {
            const releaseDownloads = (rel.assets || []).reduce(
                (assetSum, asset) => assetSum + (asset.download_count || 0),
                0
            );
            return sum + releaseDownloads;
        }, 0);

        return { release, totalDownloads };

    } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
        return { release: null, totalDownloads: 0 };
    }
}

export default async function Home() {
    const { release, totalDownloads } = await getGithubStats();

    return (
        <div className={"min-h-screen bg-black text-black scroll-smooth"}>
            <section className={"relative flex flex-col"}>
                <HeroSec release={release} totalDownloads={totalDownloads} />
                <ModulesSec modules={genyoModules} />
                <WhySec />
                <TeamSec />
                <BlackCookieSec />
            </section>
        </div>
    )
}