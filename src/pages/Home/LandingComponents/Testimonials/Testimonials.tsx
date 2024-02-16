import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "../../../../styles/testimonial.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useGetAllTestimonialQuery } from "@/redux/apis/publicApis";
import Testimonial from "./Testimonial";
import { TTestimonial } from "@/types/testimonial.type";

const Testimonials = () => {
    const { data } = useGetAllTestimonialQuery(undefined);
    return (
        <section className="mt-40 lg:mt-52 mb-28 bg-gradient-to-l from-secondary to-accent w-full h-full lg:h-[600px]">
            <div className="p-3 md:p-4 lg:p-7">
                <div className="mb-10">
                    <h1 className="text-4xl lg:text-5xl brandFont text-primary">Voices of Gratitude</h1>
                    <p className='mt-4'>Hear directly from those who've experienced the impact of our platform during times of crisis. These testimonials highlight the invaluable support and essential supplies provided when they needed them most.</p>
                </div>

                <div className="hidden lg:flex">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true}
                        navigation={true}
                        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            data?.map((review: TTestimonial) => <SwiperSlide key={review?._id} className='bg-[#8190A6] rounded bg-opacity-20 relative text-base-100'>
                                <div className='w-full h-full p-5 relative'>
                                    <div>
                                        <p className=''>{review?.comment}</p>
                                    </div>
                                    <div className='flex mt-8 items-center gap-2 absolute bottom-7'>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src={review?.image} alt="client image" className="w-12 h-16 rounded-full" />
                                            </div>
                                        </div>

                                        <div>
                                            <p>{review?.name}</p>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>

                <div className="lg:hidden flex flex-col gap-6">
                    {
                        data?.map((review: TTestimonial) => <Testimonial key={review?._id} review={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;