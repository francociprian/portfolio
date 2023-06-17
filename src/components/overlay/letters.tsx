import { motion, AnimatePresence, Variants } from "framer-motion";
// import "./Letters.css";



const Letters: React.FC = () => {
    const ease: number[] = [0.08, 0.82, 0.17, 1];

    const container: Variants = {
        show: {
            transition: {
                staggerChildren: 0.05,
                ease: ease,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                ease: ease,
            },
        },
    };

    const item: Variants = {
        hidden: { transform: "translateY(-200%)" },

        show: {
            transform: "translateY(0%)",
            transition: {
                duration: 1,
                ease: ease,
            },
        },

        exit: {
            transform: "translateY(-100%)",
            transition: {
                duration: 1.5,
                ease: ease,
            },
        },
    };

    return (
        <AnimatePresence>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                className="overflow-hidden flex"
            >
                <motion.p variants={item} className='text-main-color-txt text-[clamp(5rem,20.75vw,15rem)] font-EngraversGothic'>M</motion.p>
                <motion.p variants={item} className='text-main-color-txt text-[clamp(5rem,20.75vw,15rem)] font-EngraversGothic'>A</motion.p>
                <motion.p variants={item} className='text-main-color-txt text-[clamp(5rem,20.75vw,15rem)] font-EngraversGothic'>R</motion.p>
                <motion.p variants={item} className='text-main-color-txt text-[clamp(5rem,20.75vw,15rem)] font-EngraversGothic'>K</motion.p>
                <motion.p variants={item} className='text-main-color-txt text-[clamp(5rem,20.75vw,15rem)] font-EngraversGothic'>E</motion.p>
                <motion.p variants={item} className='text-main-color-txt text-[clamp(5rem,20.75vw,15rem)] font-EngraversGothic'>T</motion.p>
            </motion.div>
        </AnimatePresence>
    );
};

export default Letters;
