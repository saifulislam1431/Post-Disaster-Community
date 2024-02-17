import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const Banner = () => {

    // const bannerAnimate = {
    //     hidden: {
    //         opacity: 0,
    //         x: -400
    //     },
    //     visible: {
    //         opacity: 1,
    //         x: 0
    //     }
    // }


    return (
        <motion.section
            initial={{
                opacity: 0,
                x: -400
            }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1,
                    type: "spring"
                }
            }}
        >
            <Carousel showThumbs={false} stopOnHover={true} autoPlay={true}>
                <div className="relative">
                    <img src="https://i.ibb.co/1mFXqT7/wildfire.png" alt="Hero-Bg1" className="h-[168px] lg:h-[516px]" />

                    <div className="absolute top-0 w-full h-full bg-black bg-opacity-70 flex">
                        <div className="w-full h-full flex flex-col justify-center items-center gap-1 lg:gap-3">
                            <h1 className="brandFont text-sm lg:text-3xl text-gradient">Post-Disaster Community Health and Medical Supply</h1>
                            <p className="text-white text-xs lg:text-lg font-semibold">Safeguarding Health, Rebuilding Hope: Together, We Heal</p>
                            <div className="flex items-center mt-2">
                                <Link to="/supplies" className="bg-primary px-4  py-1 lg:py-2 rounded border border-primary text-white font-semibold cursor-pointer hover:bg-secondary hover:border-secondary transition-all duration-700 text-sm"><button>Donate Now</button></Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <img src="https://i.ibb.co/3kscDFW/hero-image-3-Mesa-de-trabajo-1.png" alt="" className="" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/GMPt1YS/main-bg.jpg" alt="Hero-Bg2" />

                    <div className="absolute top-0 w-full h-full bg-black bg-opacity-40 flex">
                        <div className="w-full h-full flex flex-col justify-center items-center gap-1 lg:gap-3">
                            <h1 className="brandFont text-sm lg:text-3xl text-gradient">Strengthening Healthcare Supply Chains for Disaster Recovery</h1>
                            <div className="flex items-center mt-2">
                                <Link to="/supplies" className="bg-primary px-4  py-1 lg:py-2 rounded border border-primary text-white font-semibold cursor-pointer hover:bg-secondary hover:border-secondary transition-all duration-700 text-sm"><button>Donate Now</button></Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <img src="https://i.ibb.co/qMRMkPN/hero-image.png" alt="" className="" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/F5Jsdvr/main-bg-2.jpg" alt="Hero-Bg3" />

                    <div className="absolute top-0 w-full h-full bg-black bg-opacity-40 flex">
                        <div className="w-full h-full flex flex-col justify-center items-center gap-1 lg:gap-3">
                            <h1 className="brandFont text-sm lg:text-3xl text-gradient">Bridging the Gap: Transforming Disaster Response with Technology</h1>
                            <div className="flex items-center mt-2">
                                <Link to="/supplies" className="bg-primary px-4  py-1 lg:py-2 rounded border border-primary text-white font-semibold cursor-pointer hover:bg-secondary hover:border-secondary transition-all duration-700 text-sm"><button>Donate Now</button></Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <img src="https://i.ibb.co/K0Mj38D/hero-image-1.png" alt="" className="" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/PFdHhGG/main-bg-3.jpg" alt="Hero-Bg4" />
                    <div className="absolute top-0 w-full h-full bg-black bg-opacity-40 flex">
                        <div className="w-full h-full flex flex-col justify-center items-center gap-1 lg:gap-3">
                            <h1 className="brandFont text-sm lg:text-3xl text-gradient">Rapid Response, Lasting Impact: Our Commitment to Health Equity</h1>
                            <div className="flex items-center mt-2">
                                <Link to="/supplies" className="bg-primary px-4  py-1 lg:py-2 rounded border border-primary text-white font-semibold cursor-pointer hover:bg-secondary hover:border-secondary transition-all duration-700 text-sm"><button>Donate Now</button></Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <img src="https://i.ibb.co/L0zTP3D/hero-image-2.png" alt="" className="" />
                        </div>
                    </div>
                </div>
            </Carousel>
        </motion.section>
    );
};

export default Banner;