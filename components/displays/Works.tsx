"use client";

import TurboSearchBox from "react-turbo-search-box";
import { MatterType, Post } from "@/lib/getcontent";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../widget/projectCard";
import WorkCard from "../widget/workCard";

export default function WorksDisplay({ works }: { works: Post[] }) {
    const [workHead, setWorkHead] = useState(works);

    return (
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
    );
}
