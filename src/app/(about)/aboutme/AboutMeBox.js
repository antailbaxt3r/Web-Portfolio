"use client";

import { motion } from "framer-motion";

const AboutMeBox = ({ children, ...props }) => {
    return (
        <motion.div
            whileHover={{
                backgroundColor: "#ffffff",
                color: "#000000",
                scale: 1.05,
            }}
            style={{ colorScheme: "hsl" }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default AboutMeBox;
