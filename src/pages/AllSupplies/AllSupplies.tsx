import { useGetAllPostQuery } from "@/redux/apis/publicApis";
import SupplyPost from "../Home/LandingComponents/SupplyPosts/SupplyPost";
import { TPost } from "@/types/post.type";
import PostFilter from "@/components/PostFilter/PostFilter";
import { useState } from "react";

const AllSupplies = () => {
    const [sort, setSort] = useState("")
    const { data } = useGetAllPostQuery(undefined)
    return (
        <section>
            <div className="relative">
                <img src="https://i.ibb.co/gMbqDy6/banner2.jpg" alt="Banner" className="w-full h-80 rounded-sm" />

                <div className="absolute top-0 w-full h-full bg-primary bg-opacity-70 flex items-center justify-center flex-col lg:px-20 px-3 gap-2 text-white text-center rounded-sm">
                    <h1 className="brandFont text-xl lg:text-5xl">All Supply Inventory</h1>
                    <p className="font-semibold">Discover a wide array of emergency supplies and medical equipment tailored for disaster response and community resilience. Explore our inventory for essential resources in times of crisis.</p>
                </div>
            </div>

            <div className="mt-20 flex items-end w-full justify-end">
                <PostFilter sort={sort} setSort={setSort} />
            </div>

            <div className="mt-10 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    data?.map((post: TPost) => <SupplyPost post={post} key={post?._id} />)
                }
            </div>
        </section>
    );
};

export default AllSupplies;