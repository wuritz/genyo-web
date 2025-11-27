"use client";
import React, {useEffect, useState} from 'react'
import { Users, Eye } from "lucide-react";

type Stats = {
    online: number;
    total: number;
};

const STATS_URL = "https://genyo-stats-557dfbb57e5f.herokuapp.com/stats";

const StatsSec = () => {
    const [onlineUsers, setOnlineUsers] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        let isMounted = true;

        const fetchStats = async () => {
            try {
                const res = await fetch(STATS_URL, { cache: "no-store" });

                const text = await res.text();
                console.log("Raw response text:", text);
                console.log("HTTP status:", res.status);

                if (!res.ok) {
                    console.error("Failed to fetch stats: ", res.status);
                    return;
                }

                const data = (await res.json()) as Stats;
                console.info("Parsed stats:", data);

                if (!isMounted) return;
                setTotalUsers(data.total ?? 0);
                setOnlineUsers(data.online ?? 0);
            } catch (err) {
                console.error("Error fetching stats: ", err);
            }
        };

        fetchStats();

        const interval = window.setInterval(fetchStats, 60000);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="border-t-4 border-black py-16 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {/* Online Users */}
                    <div
                        className="border-4 border-gray-300 bg-white p-6 relative overflow-hidden"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p
                                    className="text-xs uppercase tracking-wider mb-3 opacity-60"
                                    style={{ fontFamily: "monospace" }}
                                >
                                    currently online
                                </p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl tabular-nums">{onlineUsers}</span>
                                    <span className="text-sm opacity-60">users</span>
                                </div>
                                <div className="top-3 right-3 mt-3 flex items-center gap-1">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs uppercase" style={{ fontFamily: "monospace" }}>live</span>
                                </div>
                            </div>
                            <div className="bg-green-400 border-2 border-black p-2">
                                <Eye className="w-5 h-5" />
                            </div>

                        </div>
                    </div>

                    {/* Total Users */}
                    <div
                        className="border-4 border-white bg-black text-white p-6"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p
                                    className="text-xs uppercase tracking-wider mb-3 opacity-70"
                                    style={{ fontFamily: "monospace" }}
                                >
                                    total users
                                </p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl tabular-nums">{totalUsers}</span>
                                    <span className="text-sm opacity-60">users</span>
                                </div>
                                <p className="text-xs mt-3 opacity-50" style={{ fontFamily: "monospace" }}>
                                    may be inaccurate but idc
                                </p>
                            </div>
                            <div className="bg-white text-black border-2 border-white p-2">
                                <Users className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default StatsSec

