"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const WorkExperience = ({
    company,
    title,
    text,
    imgUrl,
    time,
    additionalDelay = 0,
    className = "",
    init
}) => {
    const [hover, setHover] = useState(false);

    const motionProps = {
        initial: {
            scale: 1,
            opacity: 0,
            borderColor: "#ffffff",
            color: "#ffffff",
            borderWidth: 2,
            ...init
        },
        animate: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 1,
                delay: additionalDelay + 0.9,
            },
        },
        whileHover: {
            scale: 1.02,
            background: "#ffffff",
            color: "#000000",
            transition: { duration: 0.3 },
        },
        whileTap: {
            scale: 1.02,
            background: "#ffffff",
            color: "#000000",
            transition: { duration: 0.3 },
        },
    };

    return (
        <motion.div
            layout
            className={`work-ex-box ${className}`}
            {...motionProps}
            style={{ colorScheme: "hsl" }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            onTapStart={() => setHover(true)}
            onTapCancel={() => setHover(false)}
        >
            <motion.div
                layout
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`flex md:gap-4 gap-2 ${
                    hover ? "items-start justify-start" : "items-end justify-end"
                }`}
            >
                {/* Text block */}
                <motion.div
                    layout
                    className={`flex flex-col ${
                        hover ? "text-start order-2" : "text-end order-1"
                    }`}
                >
                    <motion.div layout className="md:text-4xl text-xl font-medium">
                        {company}
                    </motion.div>
                    <motion.div layout className="md:text-2xl text-md">
                        {title}
                    </motion.div>
                    <motion.div layout className="md:text-l text-sm">
                        {time}
                    </motion.div>
                </motion.div>

                {/* Image block */}
                <motion.div
                    layout
                    className={`md:w-24 md:h-24 w-16 h-16 flex ${
                        hover ? "items-start justify-start order-1" : "items-end justify-end order-2"
                    }`}
                >
                    <img
                        src={imgUrl}
                        alt={`${company} logo`}
                        className="w-full h-full object-contain"
                    />
                </motion.div>
            </motion.div>

            {hover && (
                <motion.div
                    layout
                    className="md:text-lg text-sm mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                >
                    {text}
                </motion.div>
            )}
        </motion.div>
    );
};

export default WorkExperience;
