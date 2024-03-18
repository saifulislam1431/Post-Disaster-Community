import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login/login.jpg"
import { HiArrowSmLeft } from "react-icons/hi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLoginMutation } from "@/redux/features/auth/authAPi";
import Swal from "sweetalert2";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
    const from = location.state?.from?.pathname || "/";
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch()
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data: FieldValues) => {
        const res = await login(data).unwrap();

        const user = verifyToken(res?.token)


        if (res?.success) {
            Swal.fire({
                title: 'Success!',
                text: `${res?.message}`,
                icon: 'success',
                confirmButtonText: 'Cool'
            });
            dispatch(setUser({ user: user, token: res?.token }))
            navigate(from, { replace: true })
        } else {
            console.error("An error occurred:", res);
        }

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
                <p className='mt-7 text-center'> Don't Have An Account ? </p>

                <div className='text-center my-5 text-xs'>
                    <Link className='text-center' to="/register">
                        <button className='px-8 py-2 border border-primary text-base rounded-r-full rounded-l-full text-primary  hover:text-white  hover:bg-primary  transition-all duration-300'>Create An Account</button>
                    </Link>
                </div>

            </div>

            {/* right part */}
            <div className='w-full lg:w-1/2 p-8 bg-white'>
                <h1 className='text-center text-2xl font-bold pb-4 mt-4'> Welcome Back !
                </h1>
                <p className='text-center'> Sign in to continue .... </p>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[90%] mx-auto mt-10'>
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
                            Sign In  </span></button>
                </form>
            </div>

        </section>
    );
};

export default Login;