"use client";
import React from 'react';
import {Plus, Minus } from "lucide-react";

interface Item {
    question: string;
    answer: string;
}

const questions: Item[] = [
    {
        question: "Does this work on [insert server name]?",
        answer: "Idk. Try it and share your experiences in the Discord."
    },
    {
        question: "Can you add [feature]?",
        answer: "Yeah probably. Share your suggestions in the Discord."
    },
    {
        question: "Can I contribute?",
        answer: "If you have a funny idea, then please. Most of the code is skidded anyway."
    },
    {
        question: "This is just a skid, isn't it?",
        answer: "Maybe?"
    },
    {
        question: "What is the point?",
        answer: "Genyo."
    }
]

const FaqSec = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={"bg-gray-50 min-h-screen flex flex-1 justify-center items-center pr-6 pl-6 mt-20 xl:mt-0 xl:pr-0 xl:pl-0"}>
            <div className="w-4xl mx-auto">
                <div className="mb-12 mt-10">
                    <h2 className="mb-4 text-xl xl:text-3xl leading-none">FAQ</h2>
                </div>

                <div className="space-y-0 border-2 border-black bg-white">
                    {questions.map((faq, index) => (
                        <div
                            key={index}
                            className={`${index !== 0 ? "border-t-2 border-black" : ""}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full flex items-center justify-between p-6 text-left ${openIndex === index ? "bg-amber-100" : "hover:bg-gray-100"} transition-colors group cursor-pointer`}
                            >
                <span className="font-mono uppercase text-sm pr-4">
                  {faq.question}
                </span>
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <Minus className="h-5 w-5" />
                                    ) : (
                                        <Plus className="h-5 w-5" />
                                    )}
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-6 border-t-2 border-black bg-gray-200">
                                    <p className="text-sm leading-relaxed pt-5">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Extra note */}
                <div className="mt-8 border-2 border-black bg-white p-6">
                    <p className="text-sm leading-relaxed">
                        <span className="font-mono uppercase">STILL HAVE QUESTIONS?</span>
                        <br />
                        <a className="text-blue-600 hover:underline" href={"https://discord.gg/5nrEVnm6zJ"} target={"_blank"}>
                            Join Discord. Join Discord. Join Discord. Join Discord. Join Discord.
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default FaqSec
