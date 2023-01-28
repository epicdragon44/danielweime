import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import md from "markdown-it";
import { getProjects, Post, PostWithContent } from "@/lib/getcontent";

export async function generateStaticParams() {
    const projects = getProjects();
    return projects.map((post: Post) => ({
        slug: post.slug,
    }));
}

const getPost = (slug: string): PostWithContent => {
    const fileName = fs.readFileSync(`content/projects/${slug}.md`, "utf-8");
    const { data: frontmatter, content } = matter(fileName);
    return {
        frontmatter,
        content,
        slug,
    };
};

export default function Page({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    const { slug } = params;
    const { frontmatter, content } = useMemo(() => getPost(slug), [slug]);

    return (
        <article className='prose lg:prose-lg mx-auto text-justify'>
            {/* <h1>{frontmatter.title}</h1> */}
            {/* <Image
                width={64}
                height={64}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
            /> */}
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </article>
    );
}
