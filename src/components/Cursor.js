"use client"

import gsap from "gsap"
import { useEffect } from "react"

const CustomCursor = () => {
    useEffect(() => {
        const cursorCustom = document.querySelector('.cursorCustom');
        const cursorFollower = document.querySelector('.follower');

        const moveCursor = (e) => {
            gsap.to(cursorFollower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.to(cursorCustom, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
        };

        gsap.set(cursorFollower, {
            xPercent: -50,
            yPercent: -50
        });

        gsap.set(cursorCustom, {
            xPercent: -50,
            yPercent: -50
        });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="max-lg:hidden z-10">
            <div className="follower w-[50px] h-[50px] rounded-full bg-[transparent] border-white border-2 border-solid fixed pointer-events-none z-50 mix-blend-difference"></div>
            <div className="cursorCustom w-[10px] h-[10px] rounded-full bg-white fixed z-50 mix-blend-difference pointer-events-none"></div>
        </div>
    );
}

export default CustomCursor;