import Projects from "@/components/displays/Projects";
import WorksDisplay from "@/components/displays/Works";
import { getProjects, MatterType, Post } from "@/lib/getcontent";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

function getAllTags(works: Post[]) {
    const tags = new Set();
    works.forEach((work: Post) => {
        work.frontmatter.tags.forEach((tag: string) => tags.add(tag));
    });
    return tags;
}

export default function Page() {
    const works = useMemo(() => getProjects(), []);
    const tags = useMemo(() => getAllTags(works), [works]);

    return (
        <>
            <h1 className='pl-36 mt-8 -mb-12 font-black text-5xl'>
                Work Experience
            </h1>
            <WorksDisplay works={works} />
        </>
    );
}
