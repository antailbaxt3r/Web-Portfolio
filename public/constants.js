import { FaJava, FaJs, FaAndroid } from "react-icons/fa";
import { AiOutlineDotNet, AiOutlinePython } from "react-icons/ai";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";

export const NavigationList = ["work", "projects", "aboutme", "contact"];
export const NavigationColorMapping = {
    work: "#FCA5A5",
    projects: "#93C5FD",
    aboutme: "#D8B4FE",
    contact: "#72B488",
};
export const NavigationColors = ["#FCA5A5", "#93C5FD", "#D8B4FE", "#72B488"];

export const TechStack = [
    { icon: <RiNextjsLine className="text-2xl" />, name: "NextJS" },
    { icon: <RiTailwindCssFill className="text-2xl" />, name: "TailwindCSS" },
    { icon: <SiPostgresql className="text-2xl" />, name: "PostgreSQL" },
    { icon: <FaAndroid className="text-2xl" />, name: "Android Studio" },
];

export const Languages = [
    { icon: <FaJava className="text-2xl" />, name: "Java" },
    { icon: <FaJs className="text-2xl" />, name: "JavaScript" },
    { icon: <AiOutlineDotNet className="text-2xl" />, name: "C#" },
    { icon: <AiOutlinePython className="text-2xl" />, name: "Python" },
];
