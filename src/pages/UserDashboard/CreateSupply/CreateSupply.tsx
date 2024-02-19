import { useAddPostMutation } from "@/redux/features/Users/userApi";
import { UploadCloudIcon } from "lucide-react";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const token = import.meta.env.VITE_IMAGE_TOKEN;

const CreateSupply = () => {
    const [addPost] = useAddPostMutation();
    const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`
    const { register, formState: { errors }, handleSubmit, reset, formState } = useForm();
    const onSubmit = async (data: FieldValues) => {
        const image = data?.image;
        const formData = new FormData();
        formData.append("image", image[0]);

        fetch(hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(async (ResData) => {
                if (ResData) {
                    const newData = {
                        title: data?.title,
                        category: data?.category,
                        amount: parseInt(data?.amount),
                        location: data?.location,
                        description: data?.description,
                        image: ResData?.data.display_url,
                        date: new Date()
                    }

                    const res = await addPost(newData).unwrap();
                    if (res?.success) {
                        Swal.fire({
                            title: "Added!",
                            text: `${res?.message}`,
                            icon: "success"
                        });
                        reset();
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
        <div className='w-full lg:w-3/4 p-8 bg-white mx-auto'>
            <h1 className='text-center text-2xl font-bold pb-4 mt-4'> Add a new post !
            </h1>
            <p className='text-center'>Please fill the form .... </p>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-full mx-auto mt-10'>
                <div className="space-y-2">
                    <span className="font-semibold">Title <sup className="text-red-500">*</sup></span>
                    <input type='text' placeholder='Enter Post Title'
                        {...register("title", { required: true })}
                        aria-invalid={errors.title ? "true" : "false"}
                        className='inputField' />
                    {errors.title?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Title is required</p>}
                </div>

                <div className="space-y-2">
                    <span className="font-semibold">Category <sup className="text-red-500">*</sup></span>
                    <input type='text' placeholder='Enter Post Category'
                        {...register("category", { required: true })}
                        aria-invalid={errors.category ? "true" : "false"}
                        className='inputField' />
                    {errors.category?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Category is required</p>}
                </div>

                <div className="space-y-2">
                    <span className="font-semibold">Amount <sup className="text-red-500">*</sup></span>
                    <input type='number' placeholder='Enter Amount'
                        {...register("amount", { required: true })}
                        aria-invalid={errors.amount ? "true" : "false"}
                        className='inputField' />
                    {errors.amount?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Amount is required</p>}
                </div>

                <div className="space-y-2">
                    <span className="font-semibold">Location</span>
                    <input type='text' placeholder='Enter Location'
                        {...register("location", { required: false })}
                        aria-invalid={errors.location ? "true" : "false"}
                        className='inputField' />
                    {errors.location?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Location is required</p>}
                </div>

                <div className="space-y-2">
                    <label className='font-bold'>Image<sup className='text-error'>*</sup></label>
                    <div className="upload-files-container bg-accent bg-opacity-50 p-8 rounded-lg flex items-center justify-center flex-col space-y-5  w-[350px] lg:w-full">
                        <div className="border-2 border-dashed border-accent rounded-lg p-8 w-full text-center flex flex-col items-center">
                            <label className="text-xl w-full text-center flex flex-col items-center cursor-pointer">
                                <UploadCloudIcon className="w-10 h-10 text-success" />
                                <span className="text-primary brandFont">
                                    <input
                                        type="file"
                                        {...register("image", { required: true })}
                                        aria-invalid={errors.image ? "true" : "false"}
                                        className="default-file-input opacity-0"
                                    />
                                    <span className="browse-files-text">browse file</span>
                                    <span> from device</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    {errors.image?.type === 'required' && <p role="alert" className='text-error font-medium'>Image is required</p>}
                </div>

                <div className="space-y-2">
                    <span className="font-semibold">Description <sup className="text-red-500">*</sup></span>
                    <textarea cols={10} rows={5} id="description" placeholder='Enter Description'  {...register("description", { required: true })}
                        aria-invalid={errors.description ? "true" : "false"}
                        className='inputField'></textarea>
                    {errors.description?.type === 'required' && <p role="alert" className='text-error font-medium text-red-600'>Description is required</p>}
                </div>


                <button type="submit" className="btn btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-secondary  text-white inline-block">
                    <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-primary  group-hover:h-full ">
                    </span><span className="relative group-hover:text-gray-800 flex items-center gap-4 justify-center">
                        Add Post  </span></button>
            </form>
        </div>
    );
};

export default CreateSupply;