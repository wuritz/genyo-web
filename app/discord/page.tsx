import {Metadata} from "next";
import {redirect} from "next/navigation";

export const metadata: Metadata = {
    title: "Discord"
}

const DiscordPage = () => {
    redirect("https://discord.gg/5nrEVnm6zJ");
}

export default DiscordPage
