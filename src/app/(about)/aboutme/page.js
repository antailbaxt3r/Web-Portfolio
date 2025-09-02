import AboutMe from "./AboutMe";
export const metadata = {
    title: "About Me - Arjun Bajpai",
    description: "Learn more about our company.",
};

const AboutMePage = () => {
    return (
        <div className="relative bg-about" >
            <AboutMe />
        </div>
    );
};

export default AboutMePage;
