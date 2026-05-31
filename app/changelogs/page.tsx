import {Metadata} from "next";
import {redirect} from "next/navigation";

export const metadata: Metadata = {
    title: "Changelogs"
}

const ChangelogsPage = () => {
    redirect("https://github.com/wuritz/genyo-addon/releases/latest");
}

export default ChangelogsPage
