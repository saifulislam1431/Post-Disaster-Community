import { TTestimonial } from "@/types/testimonial.type";

const Testimonial = ({ review }: { review: TTestimonial }) => {
    return (
        <div key={review?._id} className='bg-[#8190A6] rounded bg-opacity-20 relative text-base-100'>
            <div className='w-full h-[300px] p-5 relative'>
                <div>
                    <p className=''>{review?.comment}</p>
                </div>
                <div className='flex mt-8 items-center gap-2 absolute bottom-7'>
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={review?.image} alt="client image" className="w-16 h-16 rounded-full" />
                        </div>
                    </div>

                    <div>
                        <p>{review?.name}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;