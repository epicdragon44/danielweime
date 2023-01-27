import Projects from "@/components/displays/Projects";
import { getProjects, MatterType, Post } from "@/lib/getcontent";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

function getAllTags(projects: Post[]) {
    const tags = new Set();
    projects.forEach((project: Post) => {
        project.frontmatter.tags.forEach((tag: string) => tags.add(tag));
    });
    return tags;
}

export default function Page() {
    const projects = useMemo(() => getProjects(), []);
    const tags = useMemo(() => getAllTags(projects), [projects]);

    return (
        <>
            <Projects projects={projects} />
        </>
    );
}
