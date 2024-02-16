import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/aid.png";
import "../../styles/nav.css"
import { useState } from "react";
import cn from "@/utils/cn";
import { motion } from "framer-motion";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navItems = <>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink>
        <NavLink to="/supplies" className={({ isActive }) => (isActive ? "active" : "default")}>All Supplies</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "default")}>About Us</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "default")}>Contact Us</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "default")}>Dashboard</NavLink>

        <button className="myBtn">
            <Link to="/login">Login</Link>
        </button>
    </>

    return (
        <header className="border-b border-gray-200 px-4 py-3 nav-bg fixed top-0 left-0 right-0 z-50">
            <nav className="w-full flex items-center justify-between">
                <div className="logo-container flex items-center gap-2 lg:w-full w-3/4">
                    <motion.div
                        initial={{
                            y: -300
                        }}
                        animate={{
                            y: 0,
                            transition: {
                                duration: 0.8,
                                type: "spring",
                                bounce: 0.2
                            }
                        }}
                    >
                        <img src={logo} alt="Logo" className="w-14" />
                    </motion.div>
                    <div>
                        <h1 className="brandFont text-2xl text-gradient">HealthBridge</h1>
                        <p className="text-sm font-semibold">Uniting Communities for Post-Disaster Recovery</p>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-2 w-full justify-end">
                    {navItems}
                </div>

                <div className="navbar-end flex lg:hidden">
                    <label className="flex items-center justify-end">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="hidden" />

                        {/* hamburger icon */}

                        <motion.div
                            initial={{
                                opacity: 1,
                                y: 0,
                                x: 30
                            }}
                            animate={{
                                opacity: isOpen ? 0 : 1,
                                y: isOpen ? -300 : 0,
                                x: 30,
                                transition: {
                                    duration: 0.5
                                }
                            }}
                        >
                            <svg onClick={() => setIsOpen(!isOpen)} className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                        </motion.div>

                        {/* close icon */}
                        <motion.div
                            initial={{
                                opacity: 1,
                                x: 0
                            }}
                            animate={{
                                opacity: !isOpen ? 0 : 1,
                                x: !isOpen ? 300 : 0,
                                transition: {
                                    duration: 0.5
                                }
                            }}
                        >
                            <svg onClick={() => setIsOpen(!isOpen)} className="fill-red-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                        </motion.div>

                    </label>


                    <ul className={cn(
                        "absolute -top-96 left-0 space-y-5 flex flex-col items-center bg-white  bg-opacity-100 w-full py-6 transition-all duration-500",
                        {
                            "top-24": isOpen
                        }
                    )}>
                        {navItems}
                    </ul>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;