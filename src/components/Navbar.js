import React, {  } from "react";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import {
    NavigationList,
    NavigationColorMapping,
} from "../../public/constants.js";

const Navbar = ({ title, onClick, isInvisible = false }) => {
    const navList = NavigationList.filter((x) => x != title);
    const navColors = Object.keys(NavigationColorMapping)
        .filter((key) => key !== title)
        .map((key) => NavigationColorMapping[key]);

    return (
        <div className={`flex-1 z-40 flex ${isInvisible ? "invisible" : ""}`}>
            <motion.div
                className="flex md:text-6xl text-3xl text-white md:flex-3 flex-1"
                initial={{ opacity: 0, y: 20, scale: 1 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0 },
                }}
                onClick={(e) => {
                    onClick?.({
                        color: "#000000",
                        x: e.clientX,
                        y: e.clientY,
                        target: "/",
                    });
                }}
            >
                <motion.h1
                    className="font-semibold"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                    {title}
                </motion.h1>
            </motion.div>
            <motion.div className="md:text-6xl text-lg font-medium flex-1 flex flex-end justify-end md:items-center items-start text-center">
                
                {navList.map((item, index) => (
                    <motion.div
                        key={item}
                        className="md:text-xl text-sm md:ml-4 ml-1 flex-1 p-2 text-white"
                        whileHover={{
                            scale: 1.15,
                            background: navColors[index],
                            transition: { duration: 0.3, delay: 0 },
                        }}
                        initial={{
                            scale: 1,
                            opacity: 0,
                            y: 20,
                            borderColor: "#ffffff",
                            borderWidth: 2,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                delay: (index + 1) * 0.3,
                            },
                        }}
                        onClick={(e) => {
                            onClick?.({
                                color: navColors[index],
                                x: e.clientX,
                                y: e.clientY,
                                target: "/" + item,
                            });
                        }}
                    >
                        {item}
                    </motion.div>
                ))}
                <motion.div
                    className="md:text-xl text-sm md:ml-4 ml-1 flex-1 p-2 text-white"
                    whileHover={{
                        scale: 1.15,
                        background: "#FACC15",
                        transition: { duration: 0.3, delay: 0 },
                    }}
                    initial={{
                        scale: 1,
                        opacity: 0,
                        y: 20,
                        borderColor: "#ffffff",
                        borderWidth: 2,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 1.2,
                        },
                    }}
                    onClick={async () => {
                        const response = await fetch(
                            "/Resume_ArjunBajpai_Aug2025.pdf"
                        );
                        const blob = await response.blob();
                        saveAs(blob, "Resume_ArjunBajpai.pdf");
                        console.log("done");
                    }}
                >
                    resume
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Navbar;
