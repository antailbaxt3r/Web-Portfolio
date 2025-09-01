import Work from "./Work";

export const metadata = {
    title: "Work - Arjun Bajpai",
    description: "Learn more about our company.",
};

const WorkPage = () => {
    return (
        <div className="relative bg-work">
            <Work />
        </div>
    );
};

export default WorkPage;
