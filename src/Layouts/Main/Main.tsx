import Footer from "@/pages/Shared/Footer";
import Navbar from "@/pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../styles/progress.css"
import { useScroll, motion } from "framer-motion";
AOS.init();

const Main = () => {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end end"],
    });
    return (
        <section className="max-w-7xl mx-auto overflow-hidden">
            <Navbar />
            <div className="px-4 lg:px-10 mt-36">
                <motion.div
                    className="progress-bar z-50"
                    style={{ scaleX: scrollYProgress }}
                />
                <Outlet />
            </div>
            <Footer />
        </section>
    );
};

export default Main;