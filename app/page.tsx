"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import YinYang from "@/components/symbols/yinyang";
import HomeCard from "@/components/widget/homeCard";
import useWindowDimensions from "@/hooks/windowDimensions";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import ResumeButton from "@/components/buttons/ResumeButton";

export default function Home() {
    const router = useRouter();

    const companyStyle = {
        width: 80,
        height: 80,
        className: "p-4 grayscale",
    };

    return (
        <>
            <motion.div className={`flex flex-col p-10 bg-white`}>
                <div className='flex flex-col-reverse h-60 w-screen md:mt-60 md:mb-12'>
                    <motion.div
                        className='flex items-center justify-start text-2xl xl:text-4xl w-3/4 xl:-mt-6'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "linear",
                            duration: 1,
                            delay: 1,
                        }}
                    >
                        <Balancer>
                            + I build user-focused, human-centric teams and
                            technologies.
                        </Balancer>
                    </motion.div>
                    <motion.div
                        className='flex items-center justify-start text-4xl md:text-8xl xl:text-10xl h-fit'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "linear",
                            duration: 1,
                            delay: 0.5,
                        }}
                    >
                        <Balancer>I&apos;m Daniel Wei</Balancer>
                        <YinYang />
                    </motion.div>
                </div>

                <div className='flex flex-col gap-12 w-full mt-2 h-fit'>
                    <motion.div
                        className='flex flex-col md:flex-row justify-start h-16 w-full gap-12 mt-48 md:-mt-8'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "linear",
                            duration: 1,
                            delay: 2,
                        }}
                    >
                        <button className='bg-white text-zinc-400 px-8 py-0 text-lg mt-16 font-semibold hover:bg-zinc-200 transition-all duration-150'>
                            <Link href='/portfolio'>Select Works</Link>
                        </button>
                    </motion.div>
                    <div className='flex flex-col md:flex-row justify-around h-96 w-full gap-12'>
                        <HomeCard
                            className='md:w-3/5 h-full w-full'
                            background={`bg-[url('/resources/banners/apple-music.png')]`}
                            onClick={() => {
                                router.push("/portfolio/apple-music");
                            }}
                        />
                        <HomeCard
                            className='md:w-2/5 h-full w-full'
                            background={`bg-[url('/resources/banners/cask.png')]`}
                            onClick={() => {
                                router.push("/portfolio/cask");
                            }}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row justify-around h-88 w-full gap-12'>
                        <HomeCard
                            className='md:w-2/5 h-full w-full'
                            background={`bg-[url('/resources/banners/react-turbo-search-box.png')]`}
                            onClick={() => {
                                router.push(
                                    "/portfolio/react-turbo-search-box"
                                );
                            }}
                        />
                        <HomeCard
                            className='md:w-3/5 h-full w-full'
                            background={`bg-[url('/resources/banners/instapath.png')]`}
                            onClick={() => {
                                router.push("/portfolio/instapath");
                            }}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row justify-end h-16 w-full gap-12 mt-24 md:-mt-10'>
                        <button className='bg-white  text-zinc-400 px-8 py-0 text-lg font-semibold   hover:bg-zinc-200 transition-all duration-150'>
                            <Link
                                href='/portfolio'
                                className='hidden md:inline-block'
                            >
                                See more
                            </Link>
                        </button>
                    </div>
                    <div className='flex flex-col md:flex-row justify-around h-64 w-full gap-12 '>
                        <div className='md:w-1/3 h-full w-full prose'>
                            I&apos;m an undergraduate at Cornell University
                            studying Computer Science, East Asian Studies, and
                            UX Design.
                            <br />
                            <br />I have 6+ years of experience in building
                            frontend products from the ground up, from design to
                            implementation, at 4+ startups.
                            <br />
                            <br />
                            In addition to my technical skills, I&apos;m also an
                            experienced manager, and well-versed in the ropes of
                            entrepreneurship.
                        </div>
                        <div className='mt-16 md:mt-0 md:w-1/3 h-fit max-h-40 w-full flex flex-row flex-wrap md:flex-col justify-start'>
                            <Image
                                src='/resources/companies/dti-logo.png'
                                alt='DTI Logo'
                                {...companyStyle}
                            />
                            <Image
                                src='/resources/companies/instapath-logo.jpg'
                                alt='DTI Logo'
                                {...companyStyle}
                            />
                            <Image
                                src='/resources/companies/revgo-logo.jpg'
                                alt='DTI Logo'
                                {...companyStyle}
                            />
                            <Image
                                src='/resources/companies/yoomi-logo.png'
                                alt='DTI Logo'
                                {...companyStyle}
                            />
                            <Image
                                src='/resources/companies/tecmend-logo.jpg'
                                alt='DTI Logo'
                                {...companyStyle}
                            />
                        </div>
                        <div className='md:w-1/3 h-full w-full flex flex-col gap-4 justify-start align-baseline '>
                            <button className='bg-white  text-black px-6 py-1 text-md font-semibold text-left transition-all duration-150 border-l-2 border-black hover:bg-zinc-200'>
                                <Link href='/about'>More About Me →</Link>
                            </button>
                            <button className='bg-white text-black px-6 py-1 text-md font-semibold text-left transition-all duration-150 border-l-2 border-black  hover:bg-zinc-200'>
                                <Link href='/contact'>
                                    Contact or Follow Me →
                                </Link>
                            </button>
                            <ResumeButton />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
