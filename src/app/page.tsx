import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JourneySection from "@/components/JourneySection";
import ProgramSection from "@/components/ProgramSection";

const Page = () => {
    return (
        <div>
            <Header />

            <ProgramSection />

            <JourneySection />

            <ContactSection />

            <Footer />
        </div>
    );
};

export default Page;
