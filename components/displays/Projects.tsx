"use client";

import TurboSearchBox from "react-turbo-search-box";
import { MatterType, Post } from "@/lib/getcontent";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../widget/projectCard";

type ProcessablePost = Post & {
    tags?: string;
    description?: string;
    title?: string;
};

const preProcess = (list: Post[]) =>
    list.map((item) => {
        /* Pre-process the list to make comparisons easier */
        return {
            ...item,
            tags: item.frontmatter.tags.join(" "),
            description: item.frontmatter.metaDesc,
            title: item.frontmatter.title,
        } as ProcessablePost;
    });

const postProcess = (list: ProcessablePost[]) =>
    list.map((item) => {
        /* Post-process the list to return it to its original form */
        delete item.tags;
        delete item.description;
        delete item.title;
        return item;
    });

export default function ProjectsDisplay({ projects }: { projects: Post[] }) {
    const [projHead, setProjHead] = useState(projects);

    return (
        <div className='flex flex-col p-16'>
            <motion.div
                className='sticky top-0 z-25 h-fit flex flex-row justify-between p-0 m-0 w-full bg-white'
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
                <TurboSearchBox
                    dispatchNewList={setProjHead}
                    sortBehavior={{
                        keys: ["title", "description", "tags"],
                        preProcess: preProcess,
                        postProcess: postProcess,
                    }}
                    lockBehavior={{}}
                    info={{
                        fullBaseList: projects,
                        currWorkingList: projHead,
                    }}
                    style={{
                        width: "100%",
                        color: "black",
                        borderBottom: "2px solid black",
                        padding: "8px",
                        paddingLeft: "16px",
                        fontSize: "1.2rem",
                        outline: "none",
                    }}
                />
            </motion.div>
            <div className='flex flex-row flex-nowrap overflow-x-scroll p-16 gap-8 overscroll-none'>
                {projHead.map(({ slug, frontmatter }) => (
                    <ProjectCard
                        key={slug}
                        slug={slug}
                        frontmatter={frontmatter}
                    />
                ))}
            </div>
        </div>
    );
}
