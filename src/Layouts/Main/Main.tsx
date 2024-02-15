import Footer from "@/pages/Shared/Footer";
import Navbar from "@/pages/Shared/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <section className="max-w-7xl mx-auto">
            <Navbar />
            <div className="px-4 lg:px-10">
                <Outlet />
            </div>
            <Footer />
        </section>
    );
};

export default Main;