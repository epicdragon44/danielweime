import { MatterType } from "@/lib/getcontent";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function WorkCard({
    flip,
    frontmatter,
    slug,
}: {
    flip: boolean;
    frontmatter: MatterType;
    slug: string;
}) {
    return (
        <motion.div
            className={`flex ${
                flip ? "flex-row" : "flex-row-reverse"
            } font-sans md:w-2/3 w-full border-t-2 border-t-black hover:bg-zinc-100 transition-all duration-300`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "linear",
                duration: 1,
                delay: 0,
            }}
        >
            <form className='flex-auto p-6 w-full'>
                <div className='flex flex-wrap flex-row'>
                    <h1 className='flex-auto text-lg font-semibold text-slate-900'>
                        <Link
                            href={`/work/${slug}`}
                            className='p-4 font-bold text-2xl'
                        >
                            {frontmatter.title}
                        </Link>
                    </h1>
                    <div className='w-full flex-none text-md font-lg text-slate-700 mt-0 p-4'>
                        <b>{frontmatter.date}</b>
                    </div>
                    <div className='w-full flex-none text-md font-lg text-slate-700 mt-2 p-4'>
                        <b>About {frontmatter.shortTitle}: </b>
                        {frontmatter.description}
                    </div>
                    <div className='w-full flex-none text-md font-lg text-slate-700 mt-0 p-4'>
                        <b>Roles: </b>
                        {frontmatter.role}
                    </div>
                </div>
                <div className='flex items-baseline mt-4 border-b border-slate-200'></div>
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
