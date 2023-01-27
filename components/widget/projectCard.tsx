import { MatterType } from "@/lib/getcontent";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({
    frontmatter,
    slug,
}: {
    frontmatter: MatterType;
    slug: string;
}) {
    return (
        <motion.div
            className='flex font-sans shadow-xl rounded-xl w-96 hover:transform hover:scale-105 transition-all duration-300'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "linear",
                duration: 1,
                delay: 1.5,
            }}
        >
            <form className='flex-auto p-6'>
                <div className='flex flex-wrap flex-row'>
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
        </motion.div>
    );
}
