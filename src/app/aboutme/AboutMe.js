"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Spotify } from "react-spotify-embed";

import OverlayAnimationContainer from "@/app/aboutme/OverlayAnimationContainer";
import Navbar from "@/components/Navbar";
import ScreenReveal from "@/components/screens/ScreenReveal";
import { TechStack, Languages } from "../../../public/constants.js";

const AboutMe = () => {
    const [reveal, setReveal] = useState(null);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setFirstLoad(false);
        }, 3000);
    }, []);

    return (
        <div className="hero-container relative bg-transparent text-white">
            <div className="page bg-about absolute mb-4">
                <div className="navbar">
                    <Navbar title="aboutme" onClick={setReveal} />
                </div>

                <div className="hero-grid">
                    <div className="hero-grid-row">
                        <div className="about-me-col flex-1">
                            <motion.div
                                className="work-ex-box flex-5"
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                    color: "#ffffff",
                                    scale: 1,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 1.2, duration: 1 },
                                }}
                                whileHover={{
                                    backgroundColor: "#ffffff",
                                    color: "#000000",
                                    scale: 1.05,
                                }}
                                style={{ colorScheme: "hsl" }}
                            >
                                <h1 className="text-4xl font-semibold">
                                    Tech I use
                                </h1>
                                <br />
                                <div className="flex flex-col gap-3">
                                    {TechStack.map(({ icon, name }) => (
                                        <div
                                            key={name}
                                            className="flex items-center gap-4"
                                        >
                                            {icon}
                                            <h1 className="text-2xl flex-3">
                                                {name}
                                            </h1>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="work-ex-box flex-2"
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                    color: "#ffffff",
                                    scale: 1,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 1.6, duration: 1 },
                                }}
                                whileHover={{
                                    backgroundColor: "#ffffff",
                                    color: "#000000",
                                    scale: 1.05,
                                }}
                                style={{ colorScheme: "hsl" }}
                            >
                                <h1 className="text-4xl font-semibold">
                                    Languages
                                </h1>
                                <br />
                                <div className="flex flex-col gap-3">
                                    {Languages.map(({ icon, name }) => (
                                        <div
                                            key={name}
                                            className="flex items-center gap-4"
                                        >
                                            {icon}
                                            <h1 className="text-2xl flex-3">
                                                {name}
                                            </h1>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <div className="about-me-col flex-3">
                            <motion.div
                                className="work-ex-box flex-9 text-white p-4"
                                initial={{
                                    opacity: 0,
                                    y: -20,
                                    color: "#ffffff",
                                    scale: 1,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 2, duration: 1 },
                                }}
                                whileHover={{
                                    backgroundColor: "#ffffff",
                                    color: "#000000",
                                    scale: 1.05,
                                }}
                                style={{ colorScheme: "hsl" }}
                            >
                                <h1 className="text-8xl font-semibold">
                                    Hi, I&apos;m Arjun
                                </h1>
                                <br />
                                <h1 className="text-2xl">
                                    I’m from India and currently a graduate
                                    student at NYU, pursuing my Master’s in
                                    Computer Science. Before this, I spent 3
                                    years as a Software Developer at Microsoft,
                                    working on large-scale backend systems.
                                </h1>
                                <br />
                                <h1 className="text-2xl">
                                    Outside of tech, I love writing music,
                                    getting lost in books, and exploring new
                                    ideas that mix creativity with engineering.
                                </h1>
                            </motion.div>

                            <motion.div
                                className="about-me-motion-box flex-1 p-0"
                                initial={{ opacity: 0, x: 20, scale: 1 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 1.4, duration: 1 },
                                }}
                                whileHover={{ scale: 1.05 }}
                                style={{ colorScheme: "hsl" }}
                            >
                                <Spotify
                                    wide
                                    link="https://open.spotify.com/track/4xF4WaNRKKmEfY3cJ7ow9C?si=6bb19dd340374b70"
                                />
                            </motion.div>
                        </div>

                        <div className="about-me-col flex-1">
                            <motion.div
                                className="work-ex-box flex-1 p-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 1, duration: 1 },
                                }}
                                whileHover={{
                                    backgroundColor: "#ffffff",
                                    scale: 1.05,
                                }}
                                style={{ colorScheme: "hsl" }}
                            >
                                <img
                                    src="/images/arjun.jpg"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>

                            <motion.div
                                className="work-ex-box flex-2"
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                    color: "#ffffff",
                                    scale: 1,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 1.8, duration: 1 },
                                }}
                                whileHover={{
                                    backgroundColor: "#ffffff",
                                    color: "#000000",
                                    scale: 1.05,
                                }}
                                style={{ colorScheme: "hsl" }}
                            >
                                <div className="flex flex-col">
                                    <h1 className="text-4xl font-semibold">
                                        Education
                                    </h1>
                                    <br />
                                    <h1 className="text-2xl font-semibold">
                                        New York University
                                    </h1>
                                    <h1 className="text-xl font-medium">
                                        MS Computer Science
                                    </h1>
                                    <h1 className="text-l">
                                        Sep 2025 - Present
                                    </h1>
                                    <br />
                                    <h1 className="text-2xl font-semibold">
                                        BITS Pilani
                                    </h1>
                                    <h1 className="text-xl font-medium">
                                        BE Computer Science
                                    </h1>
                                    <h1 className="text-l">
                                        Aug 2018 - Jun 2022
                                    </h1>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {reveal && (
                    <ScreenReveal
                        color={reveal.color}
                        x={reveal.x}
                        y={reveal.y}
                        target={reveal.target}
                    />
                )}
            </div>

            {firstLoad && <OverlayAnimationContainer />}
        </div>
    );
};

export default AboutMe;
