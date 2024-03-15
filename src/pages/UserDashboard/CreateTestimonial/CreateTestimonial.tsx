import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import Swal from "sweetalert2";
const token = import.meta.env.VITE_IMAGE_TOKEN;
import imgLogo from "@/assets/logo/imglogo.png"
import { useAddTestimonialMutation } from "@/redux/features/Users/userApi";
import { useEffect } from "react";

interface TUser {
    email?: string,
    iat?: string,
    exp?: string
}

const CreateTestimonial = () => {
    const [addTestimonial] = useAddTestimonialMutation()
    const user: TUser | null = useAppSelector(selectCurrentUser);
    // console.log(user);
    const { register, formState: { errors }, handleSubmit, reset, formState } = useForm();

    const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`


    const onSubmit = async (userData: FieldValues) => {
        const image = userData?.image;
        const formData = new FormData();
        formData?.append("image", image[0]);

        fetch(hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(async (ResData) => {
                // console.log(ResData.data.url)
                if (ResData) {
                    const newTestimonial = {
                        email: user?.email,
                        name: userData?.name,
                        image: ResData?.data?.url,
                        comment: userData?.comment,
                        date: new Date()
                    }
                    // console.log(newTestimonial);


                    const response = await addTestimonial(newTestimonial).unwrap();

                    if (response?.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: "Testimonial added.",
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
                    } else {
                        console.error("An error occurred:", response);
                    }



                }

            })
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ something: "" })
        }
    }, [formState, reset])

    return (
        <section>
            {/* right part */}
            <div className='w-full lg:w-1/2 p-8 bg-white mx-auto'>
                <h1 className='brandFont text-3xl text-gradient pb-4 mt-4 text-center'> Write Testimonial
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[90%] mx-auto mt-6'>

                    <div className='flex justify-center flex-col items-center'>
                        <input {...register("image", { required: true })} type="file" id='file' className='hidden' />
                        <label htmlFor="file" className=' border rounded-full'>
                            <img className='w-20 rounded-full hover:border-blue-500 border-4 transform duration-500' src={imgLogo} alt="" />
                        </label>
                        {errors.image?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Image is required</p>}
                    </div>

                    <input type='text' placeholder='Enter Your Name'
                        {...register("name", { required: true })}
                        aria-invalid={errors.name ? "true" : "false"}
                        className='inputField' />
                    {errors.name?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>User Name is required</p>}

                    <input type='email' placeholder='Enter Your Email'
                        {...register("email", { required: false })}
                        defaultValue={user?.email}
                        disabled
                        aria-invalid={errors.email ? "true" : "false"}
                        className='inputField' />
                    {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Email is required</p>}

                    <textarea cols={15} rows={10} placeholder='Testimonial'
                        {...register("comment", { required: true })}
                        aria-invalid={errors.comment ? "true" : "false"}
                        className='inputField' />
                    {errors.comment?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Testimonial is required</p>}


                    <button type="submit" className="btn btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-secondary  text-white inline-block">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-primary  group-hover:h-full ">
                        </span><span className="relative group-hover:text-gray-800 flex items-center gap-4 justify-center">
                            Submit  </span></button>
                </form>
            </div>
        </section>
    );
};

export default CreateTestimonial;