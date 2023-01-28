"use client";

import TurboSearchBox from "react-turbo-search-box";
import { MatterType, Post } from "@/lib/getcontent";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import WorkCard from "../widget/workCard";

export default function WorksDisplay({ works }: { works: Post[] }) {
    const [workHead, setWorkHead] = useState(works);

    return (
        <>
            <motion.div
                className='top-0 z-25 h-fit flex flex-row justify-between p-0 m-0 w-full bg-white'
                animate={{
                    y: 12,
                    opacity: 1,
                }}
                initial={{
                    y: 48,
                    opacity: 0,
                }}
                transition={{
                    type: "linear",
                    duration: 0.5,
                    delay: 0.5,
                }}
            >
                <h1 className='pl-36 mt-8 -mb-12 font-black text-5xl'>
                    Work Experience
                </h1>
            </motion.div>
            <div className='flex flex-col p-16'>
                <div className='flex flex-col flex-nowrap p-16 gap-8'>
                    {workHead.map(({ slug, frontmatter }) => (
                        <WorkCard
                            key={slug}
                            slug={slug}
                            frontmatter={frontmatter}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
