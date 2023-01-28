"use client";

import ResumeButton from "@/components/buttons/ResumeButton";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function InfoLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    const route = usePathname();
    return (
        <section className='min-h-screen p-4 px-8'>
            {/* CSS grid with two columns when screen size at md or above; only one otherwise */}
            <div className='flex flex-row-reverse w-screen justify-around'>
                {/* Right column */}
                <motion.div
                    className='w-full min-w-fit max-h-screen xl:inline-block hidden text-center '
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        type: "linear",
                        duration: 1,
                        delay: 0,
                    }}
                >
                    <div className='w-fit relative bg-zinc-200 pt-10 pl-10 pr-10 pb-0 mx-32 '>
                        <Image
                            src='/resources/me.JPG'
                            alt='Picture of Me'
                            width={444}
                            height={444}
                        />
                        <div className='flex flex-col w-full h-36 justify-center items-center content-center'>
                            <p className='text-lg text-zinc-800 text-center'>
                                Art by{" "}
                                <a
                                    href='https://www.instagram.com/inkeral.png/'
                                    className='underline'
                                >
                                    inkeral.png
                                </a>
                            </p>
                        </div>
                    </div>
                </motion.div>
                {/* Left column */}
                <motion.div
                    className='flex flex-col px-10 min-h-screen w-full'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        type: "linear",
                        duration: 1,
                        delay: 0.5,
                    }}
                >
                    <h1 className='text-5xl font-bold text-slate-900 mb-5'>
                        {route === "/about" ? "Hi, I'm Daniel." : "Contact Me"}
                    </h1>
                    {children}
                    {/* <hr className='mt-12 mb-6' />
                    <ResumeButton />
                    <br className='mb-12' /> */}
                </motion.div>
            </div>
        </section>
    );
}
