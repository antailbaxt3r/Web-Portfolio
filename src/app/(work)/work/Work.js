"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import WorkExperience from "./WorkExperience";
import ScreenReveal from "@/components/screens/ScreenReveal";
import OverlayAnimationContainer from "./OverlayAnimationContainer";

const Work = () => {
    const [reveal, setReveal] = useState(null);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setFirstLoad(false);
        }, 3000);
    }, []);

    return (
        <div className="hero-container relative">
            <div className="page bg-work absolute">
                <div className="navbar">
                    <Navbar title="work" onClick={setReveal} />
                </div>
                <div className="hero-grid flex-col">
                    <div className="hero-grid-row">
                        <WorkExperience
                            init={{ x: -20 }}
                            className="flex-4"
                            company="microsoft"
                            title="software engineer"
                            time="Jul 2022–Jul 2025"
                            text="Worked 3 years as a Software Engineer at Microsoft, developing backup and restore solutions for SQL, SAP, and AnyDatabase on Azure using C#/.NET, improving service reliability, security compliance, and customer adoption.
Also handled large-scale service issues, fixed 800+ security bugs, and delivered high-availability features requested by enterprise customers."
                            imgUrl="/images/ms-symbol.svg"
                            additionalDelay={0.2}
                        />
                    </div>
                    <div className="hero-grid-row md:flex-row flex-col-reverse">
                        <WorkExperience
                            init={{ y: 20 }}
                            className="flex-3"
                            company="caarya"
                            title="full-stack consultant"
                            time="Jan 2020 - Jun 2021"
                            text="Worked 1.5 year at Caarya as a Full-Stack Student Consultant, leading a team of 4 and building complex backend systems for client projects using Node.js and PostgreSQL."
                            imgUrl="/images/caarya.svg"
                            additionalDelay={0.6}
                        />
                        <WorkExperience
                            init={{ x: 20 }}
                            className="flex-7"
                            company="microsoft"
                            title="software engineer intern"
                            time="Jun 2021–Sep 2021, Jan 2022–Jun 2022"
                            text="Completed two internships at Microsoft, developing Azure Backup features in C#/.NET including Partial Restore and Full-Sync features to improve efficiency and reliability."
                            imgUrl="/images/ms-symbol.svg"
                            additionalDelay={0.4}
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

export default Work;
