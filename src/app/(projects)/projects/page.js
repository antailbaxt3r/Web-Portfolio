import Projects from "./Projects";
export const metadata = {
    title: "Projects - Arjun Bajpai",
    description: "Learn more about our company.",
};

const ProjectsPage = () => {
    return (
        <div className="relative bg-work" >
            <Projects />
        </div>
    );
};

export default ProjectsPage;
