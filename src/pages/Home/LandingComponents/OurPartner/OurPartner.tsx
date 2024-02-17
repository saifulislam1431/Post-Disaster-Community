import SectionHead from "@/components/SectionHead/SectionHead";
import Marquee from "react-fast-marquee";
import brand1 from "../../../../assets/brand/brand1.png"
import brand2 from "../../../../assets/brand/brand2.png"
import brand3 from "../../../../assets/brand/brand3.png"
import brand4 from "../../../../assets/brand/brand4.png"
import brand5 from "../../../../assets/brand/brand5.png"

const OurPartner = () => {
    return (
        <section>
            <SectionHead title="Top Contributor" />

            <div className="my-20">
                <Marquee speed={30} gradient={true} gradientColor="255, 255, 255">
                    <div className="flex items-center space-x-28 justify-center">
                        <div>
                            <img src={brand1} alt="brand1" className="w-32" />
                        </div>
                        <div>
                            <img src={brand2} alt="brand2" className="w-32" />
                        </div>
                        <div>
                            <img src={brand3} alt="brand3" className="w-32" />
                        </div>
                        <div>
                            <img src={brand4} alt="brand4" className="w-32" />
                        </div>
                        <div>
                            <img src={brand5} alt="brand5" className="w-32" />
                        </div>
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default OurPartner;