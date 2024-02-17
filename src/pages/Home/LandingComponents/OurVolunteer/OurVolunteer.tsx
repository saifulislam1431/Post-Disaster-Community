import SectionHead from "@/components/SectionHead/SectionHead";
import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const OurVolunteer = () => {
    const [isHover, setIsHover] = useState({ hover: false, id: 0 })
    return (
        <section>
            <SectionHead title="Meet Our Volunteer" description="Discover rewarding opportunities to volunteer with us and make a positive impact in communities worldwide." />


            <div className="mt-20 grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 lg:col-span-3 relative cursor-pointer overflow-hidden" onMouseEnter={() => setIsHover({ hover: true, id: 1 })} onMouseLeave={() => setIsHover({ hover: false, id: 0 })}>
                    <img src="https://i.ibb.co/f8hMy30/volunteer1.jpg" alt="volunteer1" className="w-full" />
                    <motion.div className="absolute w-full h-1/2 bg-accent bottom-0 flex items-center py-4 flex-col gap-3"
                        initial={{
                            y: 140
                        }}
                        animate={{
                            y: isHover.hover && isHover.id === 1 ? 0 : 140,
                            transition: {
                                duration: 0.5,
                                type: "tween",
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <h1 className="brandFont text-xl">Emily Parker</h1>

                        <p>Logistics Support Assistant</p>
                        <p>2017-present</p>

                        <div className="flex items-center justify-center gap-2">
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Linkedin /> </a>
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Facebook /> </a>
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Twitter /> </a>
                        </div>
                    </motion.div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 relative cursor-pointer overflow-hidden" onMouseEnter={() => setIsHover({ hover: true, id: 2 })} onMouseLeave={() => setIsHover({ hover: false, id: 0 })}>
                    <img src="https://i.ibb.co/vBVWj7n/volunteer2.jpg" alt="volunteer2" className="w-full" />
                    <motion.div className="absolute w-full h-1/2 bg-accent bottom-0 flex items-center py-4 flex-col gap-3"
                        initial={{
                            y: 140
                        }}
                        animate={{
                            y: isHover.hover && isHover.id === 2 ? 0 : 140,
                            transition: {
                                duration: 0.5,
                                type: "tween",
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <h1 className="brandFont text-xl">Sarah Johnson</h1>

                        <p>Health Education Volunteer</p>
                        <p>2019-present</p>
                        <div className="flex items-center justify-center gap-2">
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Linkedin /> </a>
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Facebook /> </a>
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Twitter /> </a>
                        </div>
                    </motion.div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 relative cursor-pointer overflow-hidden" onMouseEnter={() => setIsHover({ hover: true, id: 3 })} onMouseLeave={() => setIsHover({ hover: false, id: 0 })}>
                    <img src="https://i.ibb.co/KKv0wtJ/volunteer5.jpg" alt="volunteer3" className="w-full" />
                    <motion.div className="absolute w-full h-1/2 bg-accent bottom-0 flex items-center py-4 flex-col gap-3"
                        initial={{
                            y: 140
                        }}
                        animate={{
                            y: isHover.hover && isHover.id === 3 ? 0 : 140,
                            transition: {
                                duration: 0.5,
                                type: "tween",
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <h1 className="brandFont text-xl">David Nguyen</h1>

                        <p>Disaster Relief Specialist</p>
                        <p>2015-present</p>
                        <div className="flex items-center justify-center gap-2">
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Linkedin /> </a>
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Facebook /> </a>
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Twitter /> </a>
                        </div>
                    </motion.div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 relative cursor-pointer overflow-hidden" onMouseEnter={() => setIsHover({ hover: true, id: 4 })} onMouseLeave={() => setIsHover({ hover: false, id: 0 })}>
                    <img src="https://i.ibb.co/wR8rc7f/volunteer6.jpg" alt="volunteer4" className="w-full" />
                    <motion.div className="absolute w-full h-1/2 bg-accent bottom-0 flex items-center py-4 flex-col gap-3"
                        initial={{
                            y: 140
                        }}
                        animate={{
                            y: isHover.hover && isHover.id === 4 ? 0 : 140,
                            transition: {
                                duration: 0.5,
                                type: "tween",
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <h1 className="brandFont text-xl">Michael Thompson</h1>

                        <p>Community Outreach Coordinator</p>
                        <p>2018-present</p>
                        <div className="flex items-center justify-center gap-2">
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Linkedin /> </a>
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Facebook /> </a>
                            <a href="#" className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Twitter /> </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurVolunteer;