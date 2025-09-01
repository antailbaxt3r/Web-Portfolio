import Contact from "./Contact";
export const metadata = {
    title: "Contact - Arjun Bajpai",
    description: "Learn more about our company.",
};

const ContactPage = () => {
    return (
        <div className="relative bg-contact" >
            <Contact />
        </div>
    );
};

export default ContactPage;
