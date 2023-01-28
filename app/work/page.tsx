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
            {/* <div className='bg-black w-screen mt-12 -ml-10 mr-0 mb-0'> */}
            <WorksDisplay works={works} />
            {/* </div> */}
        </>
    );
}
