"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectDetails = ({
    company,
    title,
    text,
    imgUrl,
    time,
    additionalDelay = 0,
    className = "",
    init,
    link = null,
}) => {
    const [hover, setHover] = useState(false);

    const motionProps = {
        initial: {
            scale: 1,
            opacity: 0,
            borderColor: "#ffffff",
            color: "#ffffff",
            borderWidth: 2,
            ...init,
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
    };

    return (
        <motion.div
            layout
            className={`work-ex-box ${className}`}
            {...motionProps}
            style={{ colorScheme: "hsl" }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            onClick={() => {
                if (link)
                    window.open(
                        link,
                        "_blank",
                        "noopener,noreferrer"
                    );
            }}
        >
            <motion.div
                layout
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`flex gap-4 ${
                    hover
                        ? "items-start justify-start"
                        : "items-end justify-end"
                }`}
            >
                <motion.div
                    layout
                    className={`flex w-full flex-col ${
                        hover ? "text-start" : "text-end"
                    }`}
                >
                    <div className="flex w-full h-full justify-center items-center">
                        {hover && (
                            <motion.div
                                layout
                                className={`w-92 h-92 flex items-center justify-center justify-contents`}
                            >
                                <img
                                    src={imgUrl}
                                    alt={`${company} logo`}
                                    className="w-full h-full object-contain items-center justify-center"
                                />
                            </motion.div>
                        )}
                    </div>
                    <motion.div layout className="text-4xl font-medium">
                        {company}
                    </motion.div>
                    <motion.div layout className="text-2xl">
                        {title}
                    </motion.div>
                    <motion.div layout className="text-l">
                        {time}
                    </motion.div>
                </motion.div>
            </motion.div>

            {hover && (
                <motion.div
                    layout
                    className="text-lg mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                >
                    {text}
                </motion.div>
            )}
        </motion.div>
    );
};

export default ProjectDetails;
