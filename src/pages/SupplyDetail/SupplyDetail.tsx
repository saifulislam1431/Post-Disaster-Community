import { useGetSinglePostQuery } from "@/redux/apis/publicApis";
import { CalendarCheck2Icon, LocateFixedIcon } from "lucide-react";
import { useParams } from "react-router-dom";

const SupplyDetail = () => {
    const { id } = useParams();
    console.log(id);

    const { data } = useGetSinglePostQuery(id);
    console.log(data);

    return (
        <div>
            <div className="relative">
                <img src="https://i.ibb.co/gMbqDy6/banner2.jpg" alt="Banner" className="w-full h-80 rounded-sm" />

                <div className="absolute top-0 w-full h-full bg-primary bg-opacity-70 flex items-center justify-center flex-col lg:px-20 px-3 gap-2 text-white text-center rounded-sm">
                    <h1 className="brandFont text-xl lg:text-5xl">Supply Inventory Details</h1>
                </div>
            </div>

            <div className="flex items-center justify-center min-h-screen bg-primary bg-opacity-10 rounded-md px-4 lg:px-10 py-5 my-10">
                <div className="flex flex-col lg:flex-row items-center gap-7">
                    <img src={data?.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl brandFont">{data?.title}</h1>
                        <p className="py-6">{data?.description}</p>
                        <div className="pb-6">
                            <div className="flex items-center  gap-10 mt-2">
                                <p className="font-semibold">Amount: {data?.amount}</p>
                                <p className="font-semibold">Category: {data?.category}</p>
                            </div>
                            <div className="flex items-center  gap-10 mt-2">
                                <p className="flex items-center gap-2"><LocateFixedIcon /> <span>{data?.location}</span></p>
                                <p className="flex items-center gap-2"><CalendarCheck2Icon /> <span>{data?.date}</span></p>
                            </div>
                        </div>
                        <button className="bg-primary px-4  py-1 lg:py-2 rounded border border-primary text-white font-semibold cursor-pointer hover:bg-secondary hover:border-secondary transition-all duration-700 text-sm">Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplyDetail;