import React from "react";
import { motion } from "framer-motion";

const MotionOverlay = ({stretchVariable, setStretchVariable, axis, start, end, delay, color}) => {
    const transition = {
                ease: "easeInOut",
                duration: 0.5,
                delay: stretchVariable ? delay : 0,
            }
            const style = {
                transformOrigin: stretchVariable ? start : end,
                opacity: 0.3
            }
    return (
        axis === "x" ?
        <motion.div
            className={color + " w-full h-full"}
            initial={{scaleX: 0}}
            animate={{ scaleX: stretchVariable ? [0, 1] : 0 }}
            transition={transition}
            style={style}
            onAnimationComplete={() => {
                setStretchVariable(false);
            }}
        />
        :
        <motion.div
            className={color + " w-full h-full"}
            initial={{scaleY: 0}}
            animate={{ scaleY: stretchVariable ? [0, 1] : 0 }}
            transition={transition}
            style={style}
            onAnimationComplete={() => {
                setStretchVariable(false);
            }}
        />
    );
};

export default MotionOverlay;
