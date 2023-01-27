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
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {/* Left column */}
                <motion.div
                    className='flex flex-row justify-center items-start content-center h-full col-span-1 max-h-screen'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        type: "linear",
                        duration: 1,
                        delay: 0,
                    }}
                >
                    <div className='flex flex-col justify-start items-center content-start'>
                        <div className='w-full relative'>
                            <Image
                                src='/resources/me.JPG'
                                alt='Picture of Me'
                                width={500}
                                height={500}
                                className='rounded-xl md:inline-block hidden'
                            />
                        </div>
                        <p className='text-md text-slate-700 md:inline-block hidden'>
                            Art by{" "}
                            <a
                                href='https://www.instagram.com/inkeral.png/'
                                className='underline'
                            >
                                inkeral.png
                            </a>
                        </p>
                    </div>
                </motion.div>
                {/* Right column */}
                <motion.div
                    className='flex flex-col col-span-2 border-l-2 border-zinc-300 px-10 min-h-screen'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        type: "linear",
                        duration: 1,
                        delay: 0.5,
                    }}
                >
                    <h1 className='text-5xl font-bold text-slate-900 mb-5'>
                        {route === "/about" ? "About Me" : "Contact Me"}
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
