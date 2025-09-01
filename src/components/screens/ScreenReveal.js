// components/ScreenReveal.jsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ScreenReveal = ({ color, x, y, target }) => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(target);
            router.push(target);
        }, 800);
        return () => clearTimeout(timer);
    }, [router, target]);

    return (
        <>
            {isVisible && <motion.div
                className="fixed top-0 left-0 w-full h-full z-50"
                initial={{
                    clipPath: `circle(0px at ${x}px ${y}px)`,
                    backgroundColor: color,
                }}
                animate={{ clipPath: `circle(150% at ${x}px ${y}px)` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />}
        </>
    );
};

export default ScreenReveal;
