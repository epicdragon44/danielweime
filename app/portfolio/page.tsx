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

function ProjectCard({
    frontmatter,
    slug,
}: {
    frontmatter: MatterType;
    slug: string;
}) {
    return (
        <div className='flex font-sans shadow-xl rounded-xl w-1/2'>
            <div className='flex-none w-48 relative'>
                <img
                    src={`/${frontmatter.socialImage}`}
                    alt=''
                    className='absolute inset-0 w-full h-full object-cover'
                    loading='lazy'
                />
            </div>
            <form className='flex-auto p-6'>
                <div className='flex flex-wrap'>
                    <h1 className='flex-auto text-lg font-semibold text-slate-900'>
                        <Link
                            href={`/portfolio/${slug}`}
                            className='p-4 font-bold text-xl'
                        >
                            {frontmatter.title}
                        </Link>
                    </h1>
                    <div className='w-full flex-none text-sm font-medium text-slate-700 mt-2 p-4'>
                        {frontmatter.metaDesc}
                    </div>
                </div>
                <div className='flex items-baseline mt-4  border-b border-slate-200'></div>
                <div className='flex space-x-4 text-sm font-medium'>
                    <div className='flex-auto flex space-x-4'>
                        <div className='p-4 flex flex-row flex-wrap text-sm'>
                            {frontmatter.tags.map((tag: string) => (
                                <div
                                    key={tag}
                                    className='bg-zinc-200  rounded-2xl m-1 px-3 py-1 h-fit w-fit'
                                >
                                    <span>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default function Page() {
    const projects = useMemo(() => getProjects(), []);
    const tags = useMemo(() => getAllTags(projects), [projects]);

    return (
        <div className='flex flex-row flex-wrap gap-4'>
            {projects.map(({ slug, frontmatter }) => (
                <ProjectCard key={slug} slug={slug} frontmatter={frontmatter} />
            ))}
        </div>
    );
}
