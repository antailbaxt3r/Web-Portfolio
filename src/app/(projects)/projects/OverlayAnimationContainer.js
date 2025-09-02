"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import MotionOverlay from "@/app/(about)/aboutme/MotionOverlay";

const OverlayAnimationContainer = ({
    firstLoad = true,
    additionalDelay = 0,
}) => {
    const [stretch1, setStretch1] = useState(true);
    const [stretch3, setStretch3] = useState(true);

    const startDelay = 0.5;

    return (
        <div className="absolute hero-container overlay">
            <div className="page bg-transparent absolute">
                <div className="navbar pb-2">
                    <Navbar title="" onClick={null} isInvisible={true} />
                </div>

                <div className="hero-grid md:flex-row flex-col">
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
                    </div>
                    <div className="about-me-col flex-1">
                        <div className="about-me-motion-box flex-9">
                            <MotionOverlay
                                stretchVariable={stretch3}
                                setStretchVariable={setStretch3}
                                axis="y"
                                start="bottom"
                                end="top"
                                delay={startDelay + 0.2}
                                color="bg-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlayAnimationContainer;
