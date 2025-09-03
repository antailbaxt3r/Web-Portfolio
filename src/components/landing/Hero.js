"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import OverlayAnimationContainer from "./OverlayAnimationContainer";
import { HeroBox } from "./HeroBox";
import ScreenReveal from "../screens/ScreenReveal";
import { FaLinkedin, FaFile } from "react-icons/fa";
import { saveAs } from "file-saver";

const Hero = ({ additionalDelay }) => {
    const [stretchRed, setStretchRed] = useState(true);
    const [stretchBlue, setStretchBlue] = useState(true);
    const [stretchYellow, setStretchYellow] = useState(true);
    const [stretchGreen, setStretchGreen] = useState(true);

    const [firstLoad, setFirstLoad] = useState(true);

    const [reveal, setReveal] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setFirstLoad(false);
        }, additionalDelay * 1000 + 1800);
    }, []);

    return (
        <div className="relative hero-container">
            <div className="absolute hero-container">
                <div className="flex-none z-40">
                    <div className="flex-1 md:pl-8 pl-2 pt-2 md:pr-8 pr-2 z-40 flex">
                        <motion.h1
                            className="md:text-6xl text-3xl font-semibold text-black flex-1 z-40"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: additionalDelay }}
                        >
                            arjunbajpai
                        </motion.h1>
                        <motion.div
                            className="md:text-6xl text-3xl text-black flex-0.5 z-40 flex"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.15,
                                    color: "#0077B5",
                                    transition: { duration: 0.3 },
                                }}
                                initial={{ scale: 1, color: "#000000", opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: additionalDelay + 0.5} }}
                                onClick={() =>
                                    window.open(
                                        "https://www.linkedin.com/in/arjun-bajpai/",
                                        "_blank",
                                        "noopener,noreferrer"
                                    )
                                }
                            >
                                <FaLinkedin />
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1,
                                    color: "#FACC15",
                                    transition: { duration: 0.3 },
                                }}
                                initial={{ scale: 0.85, color: "#000000", opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: additionalDelay + 0.8} }}
                                onClick={async () => {
                                    const response = await fetch(
                                        "/Resume_ArjunBajpai_Aug2025.pdf"
                                    );
                                    const blob = await response.blob();
                                    saveAs(blob, "Resume_ArjunBajpai.pdf");
                                    console.log("done")
                                }}
                            >
                                <FaFile scale={0.9} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <div className="hero-grid flex-col">
                    <div className=" hero-grid-row md:flex-row flex-col">
                        <HeroBox
                            label="work"
                            init={{ y: -10 }}
                            delay={additionalDelay + 1}
                            hoverColor="#FCA5A5"
                            firstLoad={firstLoad}
                            className="bordered md:flex-2"
                            onClick={setReveal}
                            target="/work"
                        />
                        <HeroBox
                            label="projects"
                            init={{ x: 10 }}
                            delay={additionalDelay + 1.4}
                            hoverColor="#93C5FD"
                            firstLoad={firstLoad}
                            className="bordered md:flex-5"
                            onClick={setReveal}
                            target="/projects"
                        />
                    </div>
                    <div className="hero-grid-row">
                        <HeroBox
                            label="aboutme"
                            init={{ x: -10 }}
                            delay={additionalDelay + 1.2}
                            hoverColor="#D8B4FE"
                            firstLoad={firstLoad}
                            className="bordered md:flex-8"
                            onClick={setReveal}
                            target="/aboutme"
                        />
                        <HeroBox
                            label="contact"
                            init={{ y: 10 }}
                            delay={additionalDelay + 1.6}
                            hoverColor="#72B488"
                            firstLoad={firstLoad}
                            className="bordered md:flex-3"
                            onClick={setReveal}
                            target="/contact"
                        />
                    </div>
                </div>
            </div>
            {firstLoad && (
                <div className="absolute hero-container overlay">
                    <OverlayAnimationContainer
                        stretchRed={stretchRed}
                        setStretchRed={setStretchRed}
                        stretchBlue={stretchBlue}
                        setStretchBlue={setStretchBlue}
                        stretchYellow={stretchYellow}
                        setStretchYellow={setStretchYellow}
                        stretchGreen={stretchGreen}
                        setStretchGreen={setStretchGreen}
                        firstLoad={firstLoad}
                        additionalDelay={additionalDelay}
                    />
                </div>
            )}

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

export default Hero;
