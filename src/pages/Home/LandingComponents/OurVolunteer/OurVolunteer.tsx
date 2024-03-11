import SectionHead from "@/components/SectionHead/SectionHead";
import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useGetVolunteersQuery } from "@/redux/apis/publicApis";
import { TVolunteer } from "@/types/volunteer.type";
import moment from "moment"

interface THoverOption {
    hover: boolean,
    id: string | number | undefined
}

const OurVolunteer = () => {
    const { data } = useGetVolunteersQuery(undefined);
    // console.log(data);

    const [isHover, setIsHover] = useState<THoverOption>({ hover: false, id: 0 })
    return (
        <section>
            <SectionHead title="Meet Our Volunteer" description="Discover rewarding opportunities to volunteer with us and make a positive impact in communities worldwide." />


            <div className="mt-20 grid grid-cols-12 gap-6">
                {
                    data?.map((volunteer: TVolunteer) => <div
                        key={volunteer._id} className="col-span-12 md:col-span-6 lg:col-span-3 relative cursor-pointer overflow-hidden" onMouseEnter={() => setIsHover({ hover: true, id: volunteer._id })} onMouseLeave={() => setIsHover({ hover: false, id: 0 })}>
                        <img src={volunteer.image} alt="volunteer" className="w-full h-96" />
                        <motion.div className="absolute w-full h-1/2 bg-accent bottom-0 flex items-center py-4 flex-col gap-3"
                            initial={{
                                y: 140
                            }}
                            animate={{
                                y: isHover.hover && isHover.id === volunteer._id ? 0 : 140,
                                transition: {
                                    duration: 0.5,
                                    type: "tween",
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <h1 className="brandFont text-xl">{volunteer.name}</h1>

                            <p>{volunteer.role}</p>
                            <p>{moment(volunteer.since).format('yyyy')}-present</p>
                            <div className="flex items-center justify-center gap-2">
                                <a href={volunteer?.linkedinId ? volunteer.linkedinId : "#"} className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Linkedin /> </a>
                                <a href={volunteer?.facebookId ? volunteer.facebookId : "#"} className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Facebook /> </a>
                                <a href={volunteer?.twitterId ? volunteer.twitterId : "#"} className="px-3 py-2 hover:shadow hover:shadow-white transition-all duration-500"> <Twitter /> </a>
                            </div>
                        </motion.div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default OurVolunteer;