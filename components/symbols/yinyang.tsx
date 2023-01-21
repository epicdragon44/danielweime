import Image from "next/image";
import { motion } from "framer-motion";

export default function YinYang() {
    return (
        <motion.img
            className='hidden overflow-hidden w-32 h-32 m-16 lg:inline-block'
            src='/resources/yinyang.png'
            alt='Yin Yang Symbol'
            animate={{
                rotate: [0, 200, 30, 150, 60, 355],
            }}
            transition={{
                duration: 10,
                ease: "easeInOut",
                times: [0, 0.2, 0.35, 0.5, 0.65, 1],
                repeat: Infinity,
            }}
        />
    );
}
