import { TPost } from "@/types/post.type";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ClipboardPenIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { useUpdatePostMutation } from "@/redux/features/Users/userApi";
import Swal from "sweetalert2";

const UpdatePost = ({ post }: { post: TPost }) => {
    const [updatePost] = useUpdatePostMutation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();


        try {
            const data = {
                id: post?._id,
                data: {
                    title: title ? title : post?.title,
                    description: description ? description : post?.description,
                    amount: amount ? parseInt(amount) : post?.amount,
                    category: category ? category : post?.category
                }
            }
            console.log('====================================');
            console.log(data);
            console.log('====================================');

            const res = await updatePost(data).unwrap();
            if (res?.success) {
                Swal.fire({
                    title: "Updated!",
                    text: `${res?.message}`,
                    icon: "success"
                });
            } else {
                console.error("An error occurred:", res);
            }
        } catch {
            console.error("Something Wrong!");

        }

    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="px-2 py-1 rounded bg-green-500 text-white border border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300 cursor-pointer">
                    <ClipboardPenIcon />
                </button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit post</DialogTitle>
                    <DialogDescription>
                        Make changes to your post here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col items-start gap-4 py-4 w-full" onSubmit={handleSubmit}>
                    <div className="flex items-center gap-4 w-full">
                        <Label htmlFor="title" className="text-right col-span-3">
                            Title
                        </Label>
                        <Input
                            onBlur={(e) => setTitle(e.target.value)}
                            id="title"
                            defaultValue={post?.title}
                            className="w-full"
                        />
                    </div>
                    <div className="flex w-full items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Category
                        </Label>
                        <Input
                            onBlur={(e) => setCategory(e.target.value)}
                            id="category"
                            defaultValue={post?.category}
                            className="w-full"
                        />
                    </div>
                    <div className="flex w-full items-center gap-4">
                        <Label htmlFor="amount" className="text-right">
                            Amount
                        </Label>
                        <Input
                            onBlur={(e) => setAmount(e.target.value)}
                            id="amount"
                            defaultValue={post?.amount}
                            className="w-full"
                        />
                    </div>
                    <div className="flex w-full items-center gap-4">
                        <Label htmlFor="amount" className="text-right">
                            Description
                        </Label>
                        <Textarea onBlur={(e) => setDescription(e.target.value)} defaultValue={post?.description} placeholder="Type your message here." className="w-full" id="description" />

                    </div>
                    <DialogClose asChild className="w-full mt-5 grid grid-cols-4 items-center gap-4">
                        <Button type="submit" className="col-span-12">Save Changes</Button>
                    </DialogClose>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdatePost;