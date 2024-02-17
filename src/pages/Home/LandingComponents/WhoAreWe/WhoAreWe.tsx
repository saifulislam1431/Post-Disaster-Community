import heroImg from "../../../../assets/who-we-are/helping.jpg"
import icon1 from "../../../../assets/who-we-are/first-aid-kit.png"
import icon2 from "../../../../assets/who-we-are/join.png"
import icon3 from "../../../../assets/who-we-are/siren.png"
import icon4 from "../../../../assets/who-we-are/humanitarian-aid.png"

const WhoAreWe = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row items-center justify-center h-[389px]">
                <div className="relative w-full h-full">
                    <img src={heroImg} alt="Hero Image" className="h-full" />
                    <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center bg-primary bg-opacity-70">
                        <h1 className="brandFont text-4xl text-white"><span className="text-7xl">W</span>hat We DO?</h1>
                    </div>
                </div>
                <div className="w-full grid grid-cols-12 h-full items-center justify-items-center">
                    <div className="bg-primary bg-opacity-60 col-span-6 w-full h-full flex flex-col items-center justify-center gap-3">
                        <img src={icon2} alt="" className="w-16" />
                        <h3 className="brandFont text-white text-2xl">Join Hands</h3>
                    </div>
                    <div className="bg-primary col-span-6 w-full h-full flex flex-col items-center justify-center gap-3">
                        <img src={icon1} alt="" className="w-16" />
                        <h3 className="brandFont text-white text-2xl">Medical Aid</h3>
                    </div>
                    <div className="bg-primary col-span-6 w-full h-full flex flex-col items-center justify-center gap-3">
                        <img src={icon3} alt="" className="w-16" />
                        <h3 className="brandFont text-white text-2xl">Emergency Response</h3>
                    </div>
                    <div className="bg-primary bg-opacity-60 col-span-6 w-full h-full flex flex-col items-center justify-center gap-3">
                        <img src={icon4} alt="" className="w-16" />
                        <h3 className="brandFont text-white text-2xl">Supply Aid</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoAreWe;