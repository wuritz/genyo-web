"use client";
import { useEffect, useState } from "react";

interface GithubAsset {
    id: number;
    name: string;
    download_count: number;
    browser_download_url: string;
}

interface GithubRelease {
    tag_name: string;
    name: string;
    html_url: string;
    body?: string;
    published_at: string;
    assets: GithubAsset[];
}

export function useLatestRelease() {
    const [release, setRelease] = useState<GithubRelease | null>(null);
    const [totalDownloads, setTotalDownloads] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchLatestRelease() {
            try {
                setLoading(true);
                setError(null);

                const headers = {
                    Accept: "application/vnd.github+json"
                };

                const latestRes = await fetch(
                    "https://api.github.com/repos/wuritz/genyo-addon/releases/latest",
                    {
                        signal: controller.signal,
                        headers
                    }
                );

                if (!latestRes.ok) {
                    throw new Error(`GitHub API error: ${latestRes.status} ${latestRes.statusText}`);
                }

                const latestData = (await latestRes.json()) as GithubRelease;
                setRelease(latestData);

                const allReleases: GithubRelease[] = [];

                let page = 1;
                let hasNext = true;

                while (hasNext) {
                    const res = await fetch(
                        `https://api.github.com/repos/wuritz/genyo-addon/releases?per_page=100&page=${page}`,
                        {
                            signal: controller.signal,
                            headers,
                        }
                    );

                    if (!res.ok) {
                        throw new Error(
                            `GitHub API error (releases): ${res.status} ${res.statusText}`
                        );
                    }

                    const pageReleases = (await res.json()) as GithubRelease[];
                    allReleases.push(...pageReleases);

                    const linkHeader = res.headers.get("Link") || "";
                    // GitHub pagination: look for rel="next"
                    if (linkHeader.includes('rel="next"')) {
                        page += 1;
                    } else {
                        hasNext = false;
                    }
                }

                const total = allReleases.reduce((sum, rel) => {
                    const releaseDownloads = (rel.assets || []).reduce(
                        (assetSum, asset) => assetSum + (asset.download_count || 0),
                        0
                    );
                    return sum + releaseDownloads;
                }, 0);

                setTotalDownloads(total);
            } catch (err) {
                if (err instanceof DOMException && err.name === "AbortError") return;

                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Unknown error");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchLatestRelease();

        return () => controller.abort();
    }, []);

    return { release, totalDownloads, loading, error };
}