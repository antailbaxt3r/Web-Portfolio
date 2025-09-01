"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar"
import ScreenReveal from "@/components/screens/ScreenReveal";
import { motion } from "framer-motion";

const Contact = () => {
    const [reveal, setReveal] = useState(null);
    return (
        <div className="page bg-contact absolute">
            <div className="navbar">
                <Navbar title="contact" onClick={setReveal} />
            </div>
            <motion.div>

            </motion.div>
            {reveal && (
                <ScreenReveal
                    color={reveal.color}
                    x={reveal.x}
                    y={reveal.y}
                    target={reveal.target}
                />
            )}
        </div>
    )
}

export default Contact;