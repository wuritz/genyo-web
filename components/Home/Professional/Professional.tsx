import React from 'react'
import ProfessionalCard from "@/components/Home/Professional/ProfessionalCard";

const Professional = () => {
    return (
        <div className={"pt-10 pb-10 xl:pt-16 xl:pb-16 bg-[#0a0a1a]"}>
            <h2 className={"text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white hover:text-cyan-100 transition-all duration-300"}>
                We are super professional. <br /> Here&apos;s why...
            </h2>

            <div className={"w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center"}>
                <div data-aos={"fade-right"} data-aos-anchor-placement={"top-center"}>
                    <ProfessionalCard
                        icon={"/images/s1.png"}
                        name={"Professional"}
                        description={"Not everyone can make an addon like ours. It's the best after all."}
                    />
                </div>
                <div data-aos={"fade-right"} data-aos-anchor-placement={"top-center"} data-aos-delay={"100"}>
                    <ProfessionalCard
                        icon={"/images/s2.png"}
                        name={"Cool code and Things"}
                        description={"Russian developers have been verrry quiet since Genyo dropped..."}
                    />
                </div>
                <div data-aos={"fade-right"} data-aos-anchor-placement={"top-center"} data-aos-delay={"200"}>
                    <ProfessionalCard
                        icon={"/images/s3.png"}
                        name={"Funny & Vibes"}
                        description={"It feels so good to be a Genyo user. We have a 98.5% life-improving rate."}
                    />
                </div>
                <div data-aos={"fade-right"} data-aos-anchor-placement={"top-center"} data-aos-delay={"300"}>
                    <ProfessionalCard
                        icon={"/images/s1.png"}
                        name={"Look at these icons"}
                        description={"Do you really need any more convincing? Just download the thing."}
                    />
                </div>
            </div>
        </div>
    )
}
export default Professional
