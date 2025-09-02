import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Splash = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <motion.div
                className="absolute top-0 bottom-0 w-screen h-screen flex font-bold flex-col z-10 bg-black inset-0"
                initial={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{ ease: "easeInOut", duration: 0.8, delay: 2.3 }}
            >
                <>
                    <motion.div
                        className="w-full flex-1 items-center flex"
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0, x: 0 }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.5,
                        }}
                    >
                        <h1 className="md:text-9xl text-5xl">arjunbajpai</h1>
                    </motion.div>
                    <motion.div
                        className="w-full flex-1 items-center flex"
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0, x: 0 }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.9,
                        }}
                    >
                        <h1 className="w-full md:text-9xl text-5xl align-middle text-center">
                            software
                        </h1>
                    </motion.div>
                    <motion.div
                        className="w-full flex-1 items-center flex"
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0, x: 0 }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 1.3,
                        }}
                    >
                        <h1 className="w-full text-5xl md:text-9xl align-top text-end">
                            developer
                        </h1>
                    </motion.div>
                </>
            </motion.div>
            <motion.div
                className="absolute top-0 bottom-0 w-screen h-screen flex font-bold flex-col z-2 inset-0"
                initial={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{ ease: "easeInOut", duration: 0.8, delay: 2.5 }}
            >
                <motion.div
                    className="bg-work flex-1"
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.8,
                        delay: 2.6,
                    }}
                />
                <motion.div
                    className="bg-projects flex-1"
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.8,
                        delay: 2.7,
                    }}
                />
                <motion.div
                    className="bg-about flex-1"
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.8,
                        delay: 2.8,
                    }}
                />
                <motion.div
                    className="bg-contact flex-1"
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.8,
                        delay: 2.9,
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Splash;
