"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScreenReveal from "@/components/screens/ScreenReveal";
import { motion } from "framer-motion";

const Contact = () => {
    const [reveal, setReveal] = useState(null);
    return (
        <div className="page bg-contact absolute flex">
            <div className="navbar">
                <Navbar title="contact" onClick={setReveal} />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 1 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 1 },
                }}
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                }}
                style={{ colorScheme: "hsl" }}
                className="flex h-full flex-1 flex-col mr-8 ml-8 mt-24 mb-8 border-2 border-white p-4 items-end justify-end"
            >
                <h1 className="text-6xl">I&apos;m currently open to work!</h1>
                <br />
                <h1 className="text-4xl text-semibold">Reach out to me</h1>
                <motion.h1
                    className="text-2xl"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    onClick={() => {
                        window.location.href =
                            "mailto:arjunbajpaiwork@gmail.com";
                    }}
                >
                    arjunbajpaiwork@gmail.com
                </motion.h1>
                <h1 className="text-2xl">Brooklyn, NY</h1>
                <h1 className="text-2xl">+1 929 420-9174</h1>
            </motion.div>
            {reveal && (
                <ScreenReveal
                    color={reveal.color}
                    x={reveal.x}
                    y={reveal.y}
                    target={reveal.target}
                />
            )}
        </div>
    );
};

export default Contact;
