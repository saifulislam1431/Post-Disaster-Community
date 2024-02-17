import Banner from "./LandingComponents/Banner/Banner";
import Gallery from "./LandingComponents/Gallery/Gallery";
import OurPartner from "./LandingComponents/OurPartner/OurPartner";
import OurVolunteer from "./LandingComponents/OurVolunteer/OurVolunteer";
import SupplyPosts from "./LandingComponents/SupplyPosts/SupplyPosts";
import Testimonials from "./LandingComponents/Testimonials/Testimonials";
import UpcomingEvents from "./LandingComponents/UpcomingEvents/UpcomingEvents";
import WhoAreWe from "./LandingComponents/WhoAreWe/WhoAreWe";
import WhoItWorks from "./LandingComponents/WhoItWorks/WhoItWorks";

const Home = () => {
    return (
        <section className="space-y-36">
            <Banner />
            <SupplyPosts />
            <Testimonials />
            <Gallery />
            <WhoAreWe />
            <WhoItWorks />
            <OurVolunteer />
            <UpcomingEvents />
            <OurPartner />
        </section>
    );
};

export default Home;