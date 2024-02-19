import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetAllPostQuery } from "@/redux/apis/publicApis";
import { TPost } from "@/types/post.type";
import { Trash2Icon } from "lucide-react";
import Swal from "sweetalert2";
import UpdatePost from "./UpdatePost";
import { useDeletePostMutation } from "@/redux/features/Users/userApi";



const AllSuppliesPost = () => {
    const [deletePost] = useDeletePostMutation();
    const { data } = useGetAllPostQuery(undefined);


    const handleDeletePost = async (id: string) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deletePost(id).unwrap();
                if (res?.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${res?.message}`,
                        icon: "success"
                    });
                } else {
                    console.error("An error occurred:", res);
                }
            }
        });

    }

    return (
        <div className="my-10">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] font-semibold">Title</TableHead>
                        <TableHead className="font-semibold">Category</TableHead>
                        <TableHead className="font-semibold">Amount</TableHead>
                        <TableHead className="text-right font-semibold">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((post: TPost) => (
                        <TableRow key={post._id}>
                            <TableCell className="font-medium lg:text-nowrap">{post.title}</TableCell>
                            <TableCell>{post.category}</TableCell>
                            <TableCell>{post.amount}</TableCell>
                            <TableCell className="text-right">
                                <UpdatePost post={post} />
                                <button onClick={() => handleDeletePost(post?._id as string)} className="px-2 py-1 rounded bg-red-600 text-white border border-red-600 hover:bg-transparent hover:text-red-600 transition-all duration-300 ml-3"><Trash2Icon /></button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AllSuppliesPost;