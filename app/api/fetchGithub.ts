"use client";
import { useEffect, useState } from "react";

interface GithubRelease {
    tag_name: string;
    name: string;
    html_url: string;
    body?: string;
    published_at: string;
}

export function useLatestRelease() {
    const [release, setRelease] = useState<GithubRelease | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchLatestRelease() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(
                    "https://api.github.com/repos/wuritz/genyo-addon/releases/latest",
                    {
                        signal: controller.signal,
                        headers: {
                            Accept: "application/vnd.github+json"
                        }
                    }
                );

                if (!res.ok) {
                    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
                }

                const data = (await res.json()) as GithubRelease;
                setRelease(data);
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

    return { release, loading, error };
}