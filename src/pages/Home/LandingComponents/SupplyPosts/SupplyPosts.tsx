import SectionHead from "@/components/SectionHead/SectionHead";
import { useGetAllPostQuery } from "@/redux/apis/publicApis";
import SupplyPost from "./SupplyPost";
import { TPost } from "@/types/post.type";
import { Link } from "react-router-dom";

const SupplyPosts = () => {
    const { data } = useGetAllPostQuery(undefined);

    // console.log(isLoading, isError, status);

    // console.log("Data =>", data);

    return (
        <section>
            <SectionHead title="Emergency Relief Supplies: Ready for Deployment" description="Explore our comprehensive collection of emergency relief supplies, meticulously organized and regularly updated for immediate deployment. From medical kits to essential equipment, find vital resources to make a difference in crisis situations. " />

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    data?.slice(0, 6)?.map((post: TPost) => <SupplyPost post={post} key={post?._id} />)
                }
            </div>

            <div className="mt-14 text-center">
                <Link to="/supplies" className="myBtn">View All Post</Link>
            </div>
        </section>
    );
};

export default SupplyPosts;