import React from "react";
import { motion } from "framer-motion";

import MotionOverlay from "./MotionOverlay";

const OverlayAnimationContainer = ({
    stretchRed,
    setStretchRed,
    stretchBlue,
    setStretchBlue,
    stretchYellow,
    setStretchYellow,
    stretchGreen,
    setStretchGreen,
    firstLoad,
    additionalDelay
}) => {
    return (
        firstLoad && (
            <div className="absolute hero-container overlay ">
                <div className="flex-none ">
                    <div className="flex-1 pl-8 pt-2 pr-8">
                        <motion.h1
                            className="md:text-6xl text-lg text-black font-semibold flex-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 0, y: 0 }}
                            transition={{ duration: 1, delay: additionalDelay }}
                            style={{visibility: 0}}
                        >
                            arjunbajpai
                        </motion.h1>
                    </div>
                </div>
                <div className="hero-grid flex-col">
                    <div className="hero-grid-row">
                        <div className="hero-grid-box md:flex-2">
                            <MotionOverlay
                                stretchVariable={stretchRed}
                                setStretchVariable={setStretchRed}
                                axis="y"
                                start="bottom"
                                end="top"
                                delay={firstLoad ? additionalDelay + 0.3 : 0}
                                color="bg-work"
                            />
                        </div>
                        <div className="hero-grid-box md:flex-5">
                            <MotionOverlay
                                stretchVariable={stretchBlue}
                                setStretchVariable={setStretchBlue}
                                axis="x"
                                start="right"
                                end="left"
                                delay={firstLoad ? additionalDelay + 0.7 : 0}
                                color="bg-projects"
                            />
                        </div>
                    </div>
                    <div className="hero-grid-row">
                        <div className="hero-grid-box md:flex-8">
                            <MotionOverlay
                                stretchVariable={stretchYellow}
                                setStretchVariable={setStretchYellow}
                                axis="y"
                                start="top"
                                end="bottom"
                                delay={firstLoad ? additionalDelay + 0.5 : 0}
                                color="bg-about"
                            />
                        </div>
                        <div className="hero-grid-box md:flex-3">
                            <MotionOverlay
                                stretchVariable={stretchGreen}
                                setStretchVariable={setStretchGreen}
                                axis="x"
                                start="left"
                                end="right"
                                delay={firstLoad ? additionalDelay + 0.9 : 0}
                                color="bg-contact"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default OverlayAnimationContainer;
