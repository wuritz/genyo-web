import {Metadata} from "next";
import {redirect} from "next/navigation";

export const metadata: Metadata = {
    title: "GitHub"
}

const GithubPage = () => {
    redirect("https://github.com/wuritz/genyo-addon");
}

export default GithubPage
