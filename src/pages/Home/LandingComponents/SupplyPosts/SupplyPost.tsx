import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TPost } from "@/types/post.type";
import cn from "@/utils/cn";
import { CalendarCheck2Icon, LocateFixedIcon, View } from "lucide-react";
import { Link } from "react-router-dom";

const SupplyPost = ({ post }: { post: TPost }) => {
    // console.log(post);

    return (
        <Card className={cn("w-[380px]")}>
            <CardHeader>
                <CardTitle>{post?.title}</CardTitle>
                <CardDescription>{post?.category}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <img src={post?.image} alt={post?.title} className="w-[296px] h-[296px]" />
                </div>
                <div>
                    <p className="font-semibold">Amount: {post?.amount}</p>
                    <div className="flex items-center justify-between mt-2">
                        <p className="flex items-center gap-2"><LocateFixedIcon /> <span>{post?.location}</span></p>
                        <p className="flex items-center gap-2"><CalendarCheck2Icon /> <span>{post?.date}</span></p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Link to={`/supplies/${post?._id}`} className="w-full">
                    <Button className="w-full">
                        <View className="mr-2 h-4 w-4" /> View Details
                    </Button></Link>
            </CardFooter>
        </Card>
    );
};

export default SupplyPost;