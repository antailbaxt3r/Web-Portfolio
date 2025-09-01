"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import MotionOverlay from "./MotionOverlay";

const OverlayAnimationContainer = ({
    firstLoad = true,
    additionalDelay = 0,
}) => {
    const [stretch1, setStretch1] = useState(true);
    const [stretch2, setStretch2] = useState(true);
    const [stretch3, setStretch3] = useState(true);
    const [stretch4, setStretch4] = useState(true);
    const [stretch6, setStretch6] = useState(true);

    const startDelay = 0.5;

    return (
        <div className="absolute hero-container overlay">
            <div className="page bg-transparent absolute">
                <div className="navbar pb-2">
                    <Navbar title="" onClick={null} isInvisible={true} />
                </div>

                <div className="hero-grid flex-row">
                    <div className="hero-grid-row">
                        <div className="about-me-col flex-1">
                            <div className="about-me-motion-box flex-5">
                                <MotionOverlay
                                    stretchVariable={stretch1}
                                    setStretchVariable={setStretch1}
                                    axis="y"
                                    start="top"
                                    end="bottom"
                                    delay={startDelay}
                                    color="bg-white"
                                />
                            </div>
                            <div className="about-me-motion-box flex-2">
                                <MotionOverlay
                                    stretchVariable={stretch2}
                                    setStretchVariable={setStretch2}
                                    axis="x"
                                    start="left"
                                    end="right"
                                    delay={startDelay + 0.4}
                                    color="bg-white"
                                />
                            </div>
                        </div>
                        <div className="about-me-col flex-3">
                            <div className="about-me-motion-box flex-9">
                                <MotionOverlay
                                    stretchVariable={stretch3}
                                    setStretchVariable={setStretch3}
                                    axis="y"
                                    start="bottom"
                                    end="top"
                                    delay={startDelay + 0.8}
                                    color="bg-white"
                                />
                            </div>
                            <div className="about-me-motion-box flex-1">
                                <MotionOverlay
                                    stretchVariable={stretch4}
                                    setStretchVariable={setStretch4}
                                    axis="x"
                                    start="right"
                                    end="left"
                                    delay={startDelay + 0.2}
                                    color="bg-white"
                                />
                            </div>
                        </div>

                        <div className="about-me-col flex-1">
                            <div className="about-me-motion-box flex-1 p-0">
                                <img
                                    src="/images/arjun.jpg"
                                    style={{ opacity: 0 }}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="about-me-motion-box flex-2">
                                <MotionOverlay
                                    stretchVariable={stretch6}
                                    setStretchVariable={setStretch6}
                                    axis="x"
                                    start="left"
                                    end="right"
                                    delay={startDelay + 0.6}
                                    color="bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlayAnimationContainer;
