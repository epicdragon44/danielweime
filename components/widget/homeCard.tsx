import { motion } from "framer-motion";
import { SmoothCorners } from "react-smooth-corners";
import Balancer from "react-wrap-balancer";

export default function HomeCard(props: {
    children?: React.ReactNode;
    className?: string;
    background: string;
    onClick?: () => void;
}) {
    return (
        <motion.div
            className={props.className || ""}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "linear",
                duration: 1,
                delay: 1.5,
            }}
            onClick={props.onClick}
        >
            <div className='cursor-pointer h-full w-full rounded-outer bg-black bg-opacity-20 hover:bg-opacity-0 hover:transform hover:scale-105 transition-all duration-300'>
                <div
                    className={`h-full w-full rounded-inner ${props.background} bg-center bg-cover md:blur-sm grayscale hover:blur-none hover:grayscale-0 transition-all duration-300 hover:shadow-xl`}
                >
                    {props.children}
                </div>
            </div>
        </motion.div>
    );
}
