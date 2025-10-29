import React from 'react'
import BlogCard from "@/components/Home/Blog/BlogCard";

const Blog = () => {
    return (
        <div className={"pt-16 pb-16"}>
            <h1 className={"text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"}>
                My latest <span className={"text-cyan-200"}>Blogs</span>
            </h1>

            <div className={"w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16"}>
                <div>
                    <BlogCard image={"/images/b1.jpg"} title={"Learn how to faszufsa fzsafzsafzsafsafsa"} date={"5 July 205"} />
                </div>
                <div>
                    <BlogCard image={"/images/b2.jpg"} title={"ewfewfewfewfewewfewfwefewfewfew"} date={"11 Sept 2001"}/>
                </div>
                <div>
                    <BlogCard image={"/images/b3.jpg"} title={"4234324233253252523532532532532532532532"} date={"43ru4r433"}/>
                </div>
            </div>
        </div>
    )
}
export default Blog
