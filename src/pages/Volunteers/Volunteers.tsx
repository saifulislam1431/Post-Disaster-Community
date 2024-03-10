import SectionHead from "@/components/SectionHead/SectionHead";
import { FieldValues, useForm } from "react-hook-form";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import img from "@/assets/volunteers/banner-01.png"
import logo from "@/assets/logo/aid.png"
import imgLogo from "@/assets/logo/imglogo.png";
import { usePostVolunteerMutation } from "@/redux/apis/publicApis";
import Swal from "sweetalert2";
const token = import.meta.env.VITE_IMAGE_TOKEN;

const Volunteers = () => {
    const [postVolunteer] = usePostVolunteerMutation()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
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
                    const newVolunteer = {
                        email: userData?.email,
                        name: userData.name,
                        phoneNumber: userData.phone,
                        location: userData.location,
                        twitterId: userData?.twitterId ? userData?.twitterId : "",
                        linkedinId: userData?.linkedinId ? userData?.linkedinId : "",
                        facebookId: userData?.facebookId ? userData?.facebookId : "",
                        image: ResData.data.url,
                        role: "Volunteer",
                        since: new Date()
                    }

                    const response = await postVolunteer(newVolunteer).unwrap();

                    if (response?.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: "You are now an official volunteer of HealthBridge.",
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
                        navigate("/about-us");
                    } else {
                        console.error("An error occurred:", response);
                    }



                }

            })
    }

    return (
        <section className="my-20">
            <SectionHead title="Digital Volunteer Hub" description="Explore meaningful ways to contribute from the comfort of your home through our Digital Volunteer Hub. Browse through a variety of virtual volunteer opportunities and find projects that align with your interests and skills. Sign up today and make a difference from anywhere in the world!" />

            <section className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row w-4/5 mx-auto rounded-xl my-14 border-2'>

                {/* left part */}
                <div className='w-full lg:w-1/2 border-r-2 bg-white relative flex flex-col'>
                    <Link to="/" className=' p-8 inline-flex items-center gap-2   text-xl font-bold  '><HiArrowSmLeft className='h-6 w-6' />Back</Link>

                    <Link to="/" className="logo-container w-full h-2/4 flex items-center gap-2 justify-center">
                        <div>
                            <img src={logo} alt="Logo" className="w-full" />
                        </div>
                        <div>
                            <h1 className="brandFont text-3xl text-gradient">HealthBridge</h1>
                        </div>
                    </Link>

                    <img src={img} alt="" className='w-full mx-auto absolute bottom-0' />

                </div>

                {/* right part */}
                <div className='w-full lg:w-1/2 p-8 bg-white'>
                    <h1 className='brandFont text-3xl text-gradient pb-4 mt-4 text-center'> Join Us
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[90%] mx-auto mt-6'>

                        <div className='flex justify-center flex-col items-center'>
                            <input {...register("image", { required: true })} type="file" id='file' className='hidden' />
                            <label htmlFor="file" className=' border rounded-full'>
                                <img className='w-20 rounded-full hover:border-blue-500 border-4 transform duration-500' src={imgLogo} alt="" />
                            </label>
                            {errors.image?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Image is required</p>}
                        </div>

                        <input type='text' placeholder='Enter Your User Name'
                            {...register("name", { required: true })}
                            aria-invalid={errors.name ? "true" : "false"}
                            className='inputField' />
                        {errors.name?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>User Name is required</p>}

                        <input type='email' placeholder='Enter Your Email'
                            {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"}
                            className='inputField' />
                        {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Email is required</p>}

                        <input type='text' placeholder='Enter Your phone number'
                            {...register("phoneNumber", { required: true })}
                            aria-invalid={errors.phoneNumber ? "true" : "false"}
                            className='inputField' />
                        {errors.phoneNumber?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Phone Number is required</p>}

                        <input type='text' placeholder='Enter Your Location'
                            {...register("location", { required: true })}
                            aria-invalid={errors.location ? "true" : "false"}
                            className='inputField' />
                        {errors.location?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Location is required</p>}

                        <input type='url' placeholder='Enter facebook url (Optional)'
                            {...register("facebookId", { required: false })}
                            aria-invalid={errors.facebookId ? "true" : "false"}
                            className='inputField' />
                        {errors.facebookId?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Facebook Id is required</p>}

                        <input type='url' placeholder='Enter linkedin url (Optional)'
                            {...register("linkedinId", { required: false })}
                            aria-invalid={errors.linkedinId ? "true" : "false"}
                            className='inputField' />
                        {errors.linkedinId?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Linkedin Id is required</p>}

                        <input type='url' placeholder='Enter twitter url (Optional)'
                            {...register("twitterId", { required: false })}
                            aria-invalid={errors.twitterId ? "true" : "false"}
                            className='inputField' />
                        {errors.twitterId?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Twitter Id is required</p>}


                        <button type="submit" className="btn btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-secondary  text-white inline-block">
                            <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-primary  group-hover:h-full ">
                            </span><span className="relative group-hover:text-gray-800 flex items-center gap-4 justify-center">
                                Register  </span></button>
                    </form>
                </div>

            </section>
        </section>
    );
};

export default Volunteers;