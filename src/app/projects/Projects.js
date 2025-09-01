"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import ScreenReveal from "@/components/screens/ScreenReveal";
import OverlayAnimationContainer from "./OverlayAnimationContainer";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
    const [reveal, setReveal] = useState(null);
    const [firstLoad, setFirstLoad] = useState(true);
    const startDelay = 0.1;

    useEffect(() => {
        setTimeout(() => {
            setFirstLoad(false);
        }, 1800);
    }, []);

    return (
        <div className="hero-container relative bg-transparent text-white">
            <div className="page bg-projects absolute">
                <div className="navbar">
                    <Navbar title="projects" onClick={setReveal} />
                </div>

                <div className="hero-grid flex-row">
                    <div className="about-me-col flex-1">
                        <ProjectDetails
                            init={{ y: 20 }}
                            className="flex-3"
                            company="Gamified device usage control"
                            title="Tech Stack - Kotlin, Native Android, SQLite"
                            time="Dec 2019 ‑ Jun 2020"
                            text="Co‑authored research and built an open‑source Android application that tracked daily device usage and applied gamified rewards, leading
to a 22% reduction in screen time during pilot testing with adolescents."
                            imgUrl="/images/gamification.png"
                            additionalDelay={startDelay}
                            link="https://ieeexplore.ieee.org/document/9352888"
                        />
                    </div>
                    <div className="about-me-col flex-1">
                        <ProjectDetails
                            init={{ y: -20 }}
                            className="flex-3"
                            company="Campfire - a mental health care app"
                            title="Tech Stack - Java, Firebase, NodeJS"
                            time="Aug 2021 ‑ Dec 2021"
                            text="Campfire is a mental health Android platform connecting neurodivergent patients with 20+ doctors, enabling accessible
communication and appointment scheduling."
                            imgUrl="/images/campfire.png"
                            additionalDelay={startDelay + 0.2}
                        />
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

export default Projects;
