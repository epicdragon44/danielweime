"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const enum Route {
    Home = "/",
    About = "/about",
    Contact = "/contact",
    Work = "/work",
    Portfolio = "/portfolio",
    Experience = "/experience",
}

export default function Navbar() {
    const route = usePathname();

    return (
        <motion.div
            className='sticky top-0 z-50 h-24 flex flex-row justify-between p-10 text-lg w-screen bg-white'
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{
                type: "linear",
                duration: 0.5,
            }}
        >
            <div className='flex items-center justify-start flex-row gap-2'>
                <Link
                    href='/'
                    className={`${
                        route === Route.Home
                            ? "bg-zinc-200 border-t-2 border-black"
                            : "border-t-2 border-white hover:border-black transition-all duration-150"
                    } px-8 py-2`}
                >
                    Home
                </Link>
            </div>
            <div className='flex items-center justify-end flex-row gap-2'>
                <Link
                    href='/about'
                    className={`${
                        route === Route.About
                            ? "bg-zinc-200 border-t-2 border-black"
                            : "border-t-2 border-white hover:border-black transition-all duration-150"
                    } px-8 py-2`}
                >
                    About
                </Link>
                <Link
                    href='/contact'
                    className={`${
                        route === Route.Contact
                            ? "bg-zinc-200 border-t-2 border-black"
                            : "border-t-2 border-white hover:border-black transition-all duration-150"
                    } px-8 py-2`}
                >
                    Contact
                </Link>
                <Link
                    href='/work'
                    className={`${
                        route === Route.Work
                            ? "bg-zinc-200 border-t-2 border-black"
                            : "border-t-2 border-white hover:border-black transition-all duration-150"
                    } px-8 py-2`}
                >
                    Work
                </Link>
                <Link
                    href='/portfolio'
                    className={`${
                        route === Route.Portfolio
                            ? "bg-zinc-200 border-t-2 border-black"
                            : "border-t-2 border-white hover:border-black transition-all duration-150"
                    } px-8 py-2`}
                >
                    Projects
                </Link>
                <Link
                    href='https://drive.google.com/file/d/1l1oNo8SUnCJbCQBkFfK9uCpVSlW8rTGZ/view?usp=sharing'
                    className={`border-t-2 border-white hover:border-black transition-all duration-150 px-8 py-2`}
                >
                    Resume
                </Link>
            </div>
        </motion.div>
    );
}
