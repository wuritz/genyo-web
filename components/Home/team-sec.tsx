import React from 'react'
import TeamCard from "@/components/Home/team/team-card";

const TeamSec = () => {
    return (
        <section className={"border-t-4 border-black py-20 px-6 bg-white"}>
            <div className={"max-w-4xl mx-auto"}>
                <div className={"mb-8"}>
                    <h2 className={"mb-2 leading-none"}>DEV TEAM</h2>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    <a href={"https://github.com/wuritz"} target={"_blank"}>
                        <TeamCard username={"wuritz"} image={"images/wuritz.png"} role={"Lead Developer"}/>
                    </a>
                    <a href={"https://github.com/asdjrkxyz"} target={"_blank"}>
                        <TeamCard username={"Barnika18"} image={"images/barnika.png"} role={"Co-Developer"} />
                    </a>
                </div>
            </div>
        </section>
    )
}
export default TeamSec
