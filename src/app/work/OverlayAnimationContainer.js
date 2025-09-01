"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import MotionOverlay from "@/app/aboutme/MotionOverlay";

const OverlayAnimationContainer = ({
    firstLoad = true,
    additionalDelay = 0,
}) => {
    const [stretch1, setStretch1] = useState(true);
    const [stretch3, setStretch3] = useState(true);
    const [stretch4, setStretch4] = useState(true);

    const startDelay = 0.5;

    return (
        <div className="absolute hero-container overlay">
            <div className="page bg-transparent absolute">
                <div className="navbar pb-2">
                    <Navbar title="" onClick={null} isInvisible={true} />
                </div>
                <div className="hero-grid">
                <div className="hero-grid-row">
                    <div className="hero-grid-box flex-1">
                        <MotionOverlay
                            stretchVariable={stretch1}
                            setStretchVariable={setStretch1}
                            axis="x"
                            start="left"
                            end="right"
                            delay={startDelay}
                            color="bg-white"
                        />
                    </div>
                </div>
                <div className="hero-grid-row">
                    <div className="hero-grid-box flex-3">
                        <MotionOverlay
                            stretchVariable={stretch3}
                            setStretchVariable={setStretch3}
                            axis="y"
                            start="top"
                            end="bottom"
                            delay={startDelay + 0.4}
                            color="bg-white"
                        />
                    </div>
                    <div className="hero-grid-box flex-7">
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
            </div>
            </div>
            
        </div>
    );
};

export default OverlayAnimationContainer;
