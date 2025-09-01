"use client";
import localFont from "next/font/local";
import { useEffect, useState } from "react";

import Splash from "../components/splashscreen/Splash";
import Hero from "../components/landing/Hero";

const Home = () => {
    const [splash, setSplash] = useState(true);
    const [delay, setDelay] = useState(3.3);
    useEffect(() => {
        const timer = setTimeout(function () {
            setSplash(false);
        }, 4000);
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    useEffect(() => {
        const timer = setTimeout(function () {
            setDelay(0);
        }, 5100);
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);
    return (
        <div className="relative">
            {splash && (
                <div
                    className={"splash absolute inset-0 z-10"}
                    onClick={() => console.log("click splash")}
                >
                    <Splash />
                </div>
            )}
            <div className="hero relative w-full h-screen">
                <Hero additionalDelay={delay} />
            </div>
        </div>
    );
};

export default Home;
