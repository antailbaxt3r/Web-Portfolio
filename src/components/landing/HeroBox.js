import { motion } from "framer-motion";

export const HeroBox = ({
    label,
    init,
    delay = 0,
    hoverColor = "#fff",
    firstLoad,
    className = "",
    onClick,
    target,
}) => {
    const boxVariants = {
        initial: { opacity: 0, backgroundColor: "#FFFFFF", ...init },
        animate: { opacity: 1, x: 0, y: 0, backgroundColor: "#FFFFFF" },
        hover: {
            scale: 1.05,
            backgroundColor: hoverColor,
            transition: { duration: 0.3 },
        },
    };

    const labelVariants = {
        initial: { color: "#000000" },
        hover: { color: "#FFFFFF" },
    };
    return (
        <motion.div
            className={`hero-grid-box ${className} font-medium`}
            variants={boxVariants}
            initial="initial"
            animate="animate"
            transition={{
                type: "easeOut",
                duration: firstLoad ? 1 : 0.2,
                delay: firstLoad ? delay : 0,
            }}
            whileHover="hover"
            onClick={(e) => {
                onClick?.({
                    color: hoverColor,
                    x: e.clientX,
                    y: e.clientY,
                    target: target,
                });
            }}
        >
            <motion.div
                variants={labelVariants}
                className="absolute flex-end text-black text-6xl pr-4 pb-2"
            >
                {label}
            </motion.div>
        </motion.div>
    );
};
