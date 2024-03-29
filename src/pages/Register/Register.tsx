import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login/register.jpg"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiArrowSmLeft } from "react-icons/hi";
import { useRegisterUserMutation } from "@/redux/features/auth/authAPi";
import Swal from 'sweetalert2';
import imgLogo from "../../assets/logo/imglogo.png";
const token = import.meta.env.VITE_IMAGE_TOKEN;

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.pathname || "/"
    const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`
    const [registerUser] = useRegisterUserMutation();
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();

    // console.log('====================================');
    // console.log(data);
    // console.log('====================================');
    // console.log('====================================');
    // console.log(error);
    // console.log('====================================');

    const onSubmit = async (userData: FieldValues) => {
        const image = userData?.image;
        const formData = new FormData();
        formData?.append("image", image[0]);

        if (image) {
            fetch(hosting_url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(async (ResData) => {
                    // console.log(ResData.data.url)
                    if (ResData) {
                        const data = {
                            email: userData?.email,
                            name: userData?.name,
                            imageURL: ResData?.data?.url,
                            password: userData?.password,
                            date: new Date()
                        }
                        // console.log(newTestimonial);


                        const res = await registerUser(data).unwrap();

                        if (res?.success) {
                            Swal.fire({
                                title: 'Success!',
                                text: `${res?.message}`,
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            });
                            navigate(from, { replace: true })
                        } else {
                            console.error("An error occurred:", res);
                        }



                    }

                })
        } else {
            const data = {
                email: userData?.email,
                name: userData?.name,
                imageURL: "https://i.ibb.co/yyYWbyJ/user.png",
                password: userData?.password,
                date: new Date()
            }

            const res = await registerUser(data).unwrap();

            if (res?.success) {
                Swal.fire({
                    title: 'Success!',
                    text: `${res?.message}`,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                navigate(from, { replace: true })
            } else {
                console.error("An error occurred:", res);
            }
        }


        // console.log('====================================');
        // console.log(res);
        // console.log('====================================');
    }
    const handleShow = () => {
        setType("text")
    }

    const handleHide = () => {
        setType("password")
    }
    return (
        <section className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row w-4/5 mx-auto rounded-xl my-14 border-2'>

            {/* left part */}
            <div className='p-8 w-full lg:w-1/2 border-r-2 bg-white'>
                <Link to="/" className='inline-flex items-center gap-2   text-xl font-bold  '><HiArrowSmLeft className='h-6 w-6' />Back</Link>
                <img src={img} alt="" className='w-2/3 mx-auto' />
                <p className='mt-7 text-center'> Already Have An Account ?</p>

                <div className='text-center my-5 text-xs'>
                    <Link className='text-center' to="/login">
                        <button className='px-8 py-2 border border-primary text-base rounded-r-full rounded-l-full text-primary  hover:text-white  hover:bg-primary  transition-all duration-300'>Login</button>
                    </Link>
                </div>

            </div>

            {/* right part */}
            <div className='w-full lg:w-1/2 p-8 bg-white'>
                <h1 className='text-center text-2xl font-bold pb-4 mt-4'> Create An Account
                </h1>
                <p className='text-center'> Become a part of  Post-Disaster Community Health and Medical Supply Chain Platform</p>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[90%] mx-auto mt-10'>

                    <div className='flex justify-center flex-col items-center'>
                        <input {...register("image", { required: false })} type="file" id='file' className='hidden' />
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

                    <div className='inline-flex items-center relative'>
                        <input type={type} placeholder='Enter Your Password'
                            {...register("password", { required: "Password is required" })}
                            aria-invalid={errors.password ? "true" : "false"}
                            className='inputField' />
                        <div className='absolute right-3 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                            {
                                IsShow ? <FaEyeSlash className='h-5 w-5 text-red-600 ' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-red-600 ' onClick={handleShow} />
                            }
                        </div>
                    </div>
                    {errors.password && <p role="alert" className='text-red-600 font-medium'>Password is required</p>}

                    <button type="submit" className="btn btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-secondary  text-white inline-block">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-primary  group-hover:h-full ">
                        </span><span className="relative group-hover:text-gray-800 flex items-center gap-4 justify-center">
                            Register  </span></button>
                </form>
            </div>

        </section>
    );
};

export default Register;