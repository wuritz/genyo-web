import type { Metadata } from 'next';
import React from "react";
import DownloadInstaller from "@/components/DownloadPage/DownloadInstaller";
import Link from "next/link";
import DownloadGitHub from "@/components/DownloadPage/DownloadGitHub";

export const metadata: Metadata = {
    title: "Download",
    description: "Download the latest release of Genyo Addon here, using the Genyo Installer or straight from GitHub."
}

const DownloadPage = () => {
    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Genyo Addon",
        "operatingSystem": "Fabric (Minecraft 1.21.11)",
        "applicationCategory": "UtilitiesApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "downloadUrl": "https://github.com/wuritz/genyo-addon/releases/latest"
    }

    return (
        <div className={"min-h-screen scroll-smooth"}>
            <script
                type={"application/ld+json"}
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />

            <section className={"relative flex flex-col mx-auto"}>
                <div className="relative min-h-screen flex flex-1 items-center justify-center pt-30 xl:pt-8 pl-6 pr-6 xl:pl-0 xl:pr-0">
                    <div className={"max-w-[67%]"}>
                        <h1 className={"text-3xl xl:text-6xl text-white font-bold mb-2 mt-5 md:mt-25"}>
                            Download the latest Genyo
                        </h1>

                        <p className={"text-md xl:text-2xl text-gray-400 mb-15 md:mb-25"}>
                            Choose between the release file, or the installer.
                        </p>

                        <div className={"flex flex-col md:flex-row md:justify-between gap-10"}>
                            <section className={"flex-1 flex flex-col"}>
                                <h2 className={"text-3xl font-semibold text-white/90 mb-2 ml-2"}>
                                    Download from GitHub
                                </h2>

                                <div className={"flex-1 bg-gray-500/10 p-5 border-white/20 hover:border-white/40 border rounded-xl transition-all duration-150"}>

                                    <p className={"mb-5"}>The quickest and the most reliable way to download Genyo.</p>

                                    <p className={"mt-5"}>After downloading the .jar file, here&#39;s what you need to do:</p>
                                    <ol className={"list-decimal ml-7 mt-2 mb-10 md:mb-15 text-sm md:text-base"}>
                                        <li>Locate your <code className="rounded inline bg-gray-800 px-1.5 py-0.5 font-mono text-sm text-pink-400">mods</code> folder in your specific launcher. (Prism, MC launcher, etc..)</li>
                                        <li>Drop the <code className="rounded inline bg-gray-800 px-1.5 py-0.5 font-mono text-sm text-pink-400">genyo-addon-*.jar</code> file into the folder alongside Meteor Client and Fabric.</li>
                                        <li>Launch Minecraft and open the Meteor GUI in-game to configure.</li>
                                    </ol>

                                    <DownloadGitHub />
                                </div>
                            </section>

                            <section className={"flex-1 flex flex-col"}>
                                <h2 className={"text-xl xl:text-3xl font-semibold text-white/90 mb-2 xl:ml-2"}>
                                    Download using Genyo Installer
                                </h2>

                                <div className={"flex-1 bg-gray-500/10 p-5 border-white/20 hover:border-white/40 border rounded-xl transition-all duration-300"}>

                                    <p className={"text-md"}>If you&#39;d like to try out a fun little launcher we made, download the Genyo Installer!</p>

                                    <p className={"mt-5"}>Our installer automates the sometimes confusing process of manual drag & drop.</p>
                                    <ul className={"list-disc ml-7 mt-2 mb-5 md:mb-15 text-sm md:text-base"}>
                                        <li>Automatically detects your Prism Launcher instances, and gives you the option to choose which ones you would like to install Genyo to.</li>
                                        <li>Searches for Fabric and Meteor, and blocks if it can&#39;t find them. (optional)</li>
                                        <li>Ability to choose between only MC default or Prism launcher</li>
                                        <li>Ability to install into a manually given folder</li>
                                        <li>Keeping track of installed versions... kinda.</li>
                                    </ul>

                                    <DownloadInstaller />

                                    <p className={"mt-5 md:mt-2 mb-10 text-md"}>
                                        Open the downloaded <span className="rounded inline bg-gray-800 px-1.5 py-0.5 font-mono text-sm text-pink-400">genyo-installer-*.jar</span> file, then press Install Genyo.
                                    </p>

                                    <p className={"text-sm mt-2"}>
                                        Also, if you happen to encounter any issues, please open a ticket <Link className={"text-blue-400 underline"} href={"https://github.com/wuritz/genyo-installer/issues/new"} rel="noopener noreferrer" target={"_blank"}>here.</Link>
                                    </p>

                                </div>
                            </section>
                        </div>

                        <p className={"text-sm mt-10 mb-10 md:mb-0"}>
                            Clicking on the download buttons fetches the latest GitHub releases of the repos respectively. <br />
                            You can check out <Link href={"https://github.com/wuritz/genyo-web"} className={"text-blue-400 underline"}> this whole website&#39;s </Link> download process and even <Link href={"https://github.com/wuritz/genyo-installer"} className={"text-blue-400 underline"}>the installer</Link> on GitHub, so you know you won&#39;t have anything suspicious installed.
                        </p>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default DownloadPage;