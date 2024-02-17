import { Link } from "react-router-dom";
import "../../styles/footer.css"
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import logo from "../../assets/logo/aid.png"
const Footer = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <footer>
            <div className="flex p-10 bg-gradient-to-l from-secondary to-accent text-gray-800 lg:items-center justify-between flex-col lg:flex-row gap-7">
                <aside>
                    <div className="logo-container flex items-center gap-2 lg:w-full w-3/4">
                        <div>
                            <img src={logo} alt="Logo" className="w-14" />
                        </div>
                        <div>
                            <h1 className="brandFont text-2xl text-gradient">HealthBridge</h1>
                            <p className="text-sm font-semibold">Uniting Communities for Post-Disaster Recovery</p>
                        </div>
                    </div>
                </aside>
                <div className="flex flex-col">
                    <h6 className="brandFont text-lg underline">Quick Links</h6>
                    <Link to="/supplies" className="hover:underline">Supply Post</Link>
                    <Link to="/supplies" className="hover:underline">Donate Now</Link>
                    <Link to="/" className="hover:underline">Marketing</Link>
                    <Link to="/" className="hover:underline">Advertisement</Link>
                </div>
                <div className="flex flex-col">
                    <h6 className="brandFont text-lg underline">Company</h6>
                    <Link to="/" className="hover:underline">About us</Link>
                    <Link to="/" className="hover:underline">Contact</Link>
                    <Link to="/" className="hover:underline">Jobs</Link>
                    <Link to="/" className="hover:underline">Join Us</Link>
                </div>
                <div className="flex flex-col">
                    <h6 className="brandFont text-lg underline">Calender</h6>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </div>
            </div>
            <div className="flex p-10 bg-gradient-to-l from-secondary to-accent text-gray-800 border-t border-primary items-center justify-center">
                <p className="text-center">Copyright © 2024 - All right reserved by HealthBridge</p>
            </div>
        </footer>
    );
};

export default Footer;