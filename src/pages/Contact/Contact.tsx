import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { usePostCommunityPostMutation } from "@/redux/features/Users/userApi";
import { selectCurrentUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import cn from "@/utils/cn";
import { Paperclip, PlusCircle, UserCircle2Icon } from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface TUser {
    email?: string,
    iat?: string,
    exp?: string
    name?: string,
    imageURL?: string
}

const imgToken = import.meta.env.VITE_IMAGE_TOKEN;

const Contact = () => {
    const [postCommunityPost] = usePostCommunityPostMutation()
    const navigate = useNavigate();
    const token = useAppSelector(useCurrentToken);
    const user: TUser | null = useAppSelector(selectCurrentUser);
    // console.log(user);
    const [tabName, setTab] = useState("Feed");
    const [text, setText] = useState("");
    const [imageFile, setImage] = useState<File>();
    const hosting_url = `https://api.imgbb.com/1/upload?key=${imgToken}`

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setImage(files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!token) {
            navigate("/login", { replace: true })
            Swal.fire({
                title: 'Error!',
                text: 'Please login first!',
                icon: 'error',
                confirmButtonText: 'Ok'
            });

        } else {
            const image = imageFile ? imageFile : '';
            const formData = new FormData();
            formData?.append("image", image);

            if (image) {
                fetch(hosting_url, {
                    method: "POST",
                    body: formData
                })
                    .then(res => res.json())
                    .then(async (ResData) => {
                        // console.log(ResData.data.url)
                        if (ResData) {
                            const postData = {
                                profile: user?.imageURL,
                                name: user?.name,
                                postText: text,
                                image: ResData?.data?.url,
                                date: new Date()
                            }


                            const res = await postCommunityPost(postData).unwrap();

                            if (res?.insertedId) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: "Posted",
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                });
                            } else {
                                console.error("An error occurred:", res);
                            }



                        }

                    })
            } else {
                const postData = {
                    profile: user?.imageURL,
                    name: user?.name,
                    postText: text,
                    image: "",
                    date: new Date()
                }

                const res = await postCommunityPost(postData).unwrap();

                if (res?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: "Posted.",
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                } else {
                    console.error("An error occurred:", res);
                }
            }

        }
    }

    return (
        <section className="my-20">
            <div>
                <img src="https://i.ibb.co/TYcbHtg/banner1.png" alt="" className="rounded-lg" />
            </div>

            <div className="my-14 ">
                {/* Tab */}
                <div className="bg-white shadow-lg rounded-md mx-auto flex items-center gap-10 w-fit">
                    <div className={cn(
                        "w-full h-full px-10 py-4 brandFont cursor-pointer text-lg",
                        {
                            "border-b border-primary rounded-bl-md text-primary": tabName === "Feed"
                        }
                    )} onClick={() => setTab("Feed")}>Feed</div>
                    <div className={cn(
                        "w-full h-full px-10 py-4 brandFont cursor-pointer text-lg",
                        {
                            " border-b border-primary rounded-br-md text-primary": tabName === "People"
                        }
                    )} onClick={() => setTab("People")}>People</div>
                </div>


                <div className="mx-auto w-full lg:w-96 mt-10">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="shadow-lg rounded-md p-5 flex items-center justify-between">
                                <div className="inline-flex items-center gap-2">
                                    <p><UserCircle2Icon className="text-primary" /></p>
                                    <input type="text" placeholder="What's on your mind." />
                                </div>
                                <div>
                                    <PlusCircle className="text-primary" />
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Share your thought in community gratitude wall</DialogTitle>
                            </DialogHeader>
                            <form className="gap-4 py-4 space-y-3" onSubmit={handleSubmit}>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-1 items-center gap-4">
                                        <textarea
                                            id="name"
                                            defaultValue=""
                                            className="col-span-3 inputField"
                                            rows={8}
                                            placeholder="Write..."
                                            onChange={(e) => setText(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid grid-cols-6 gap-4">

                                        <div className="col-span-1 border m-auto rounded-full border-primary flex items-center justify-center py-3 px-4 text-primary hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                                            <input type="file" id='file' className='hidden' onChange={handleFileChange} />
                                            <label htmlFor="file" className='rounded-full w-4'>
                                                <Paperclip className="w-4 rounded-full" />
                                            </label>

                                        </div>
                                    </div>
                                </div>
                                <DialogClose asChild className="w-full mt-5">
                                    <Button type="submit" className="col-span-12" disabled={text === "" ? true : false}>Post</Button>
                                </DialogClose>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    );
};

export default Contact;