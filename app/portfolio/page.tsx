import { getProjects } from "@/lib/getcontent";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function Page() {
    const projects = useMemo(() => getProjects(), []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
            {projects.map(({ slug, frontmatter }) => (
                <div
                    key={slug}
                    className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
                >
                    <Image
                        width={650}
                        height={340}
                        alt={frontmatter.title}
                        src={`/${frontmatter.socialImage}`}
                    />
                    <Link href={`/portfolio/${slug}`} className='p-4'>
                        {frontmatter.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}
