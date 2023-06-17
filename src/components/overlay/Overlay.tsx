import { motion, AnimatePresence, Variants } from "framer-motion";
import Letters from "./letters";

interface Props {
    openProducts: boolean;
    setOpenProducts: React.Dispatch<React.SetStateAction<boolean>>;
}

const Overlay: React.FC = () => {
    /* ============================= ANIMATIONS =============================  */

    const ease: number[] = [0.08, 0.82, 0.17, 1];

    const buttonLeftVariants: Variants = {
        initial: { opacity: 0, x: -800 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.95, delay: 0.5, ease: ease },
        },
        exit: {
            opacity: 0,
            x: -800,
            transition: { duration: 0.95, ease: ease },
        },
    };

    const buttonRightVariants: Variants = {
        initial: { opacity: 0, x: 800 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.95, delay: 0.5, ease: ease },
        },
        exit: {
            opacity: 0,
            x: 800,
            transition: { duration: 0.5, ease: ease },
        },
    };

    return (
        <div className=" w-full h-[calc(100vh-var(--body-mt))] absolute bottom-0 left-0 flex justify-center items-center flex-col flex-nowrap z-[100] pointer-events-none ">
            <Letters />

            <AnimatePresence>
                <motion.button
                    variants={buttonLeftVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    // onClick={() => setOpenProducts(true)}
                    className="text-4xl text-red-500"
                >
                    Découvrir
                </motion.button>
                <motion.button
                    variants={buttonRightVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    // onClick={() => setOpenProducts(true)}
                    className="text-4xl text-blue-500"
                >
                    Découvrir
                </motion.button>
            </AnimatePresence>
        </div>
    );
};

export default Overlay;