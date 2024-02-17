import SectionHead from "@/components/SectionHead/SectionHead";
import { useGetAllEventsQuery } from "@/redux/apis/publicApis";
import Event from "./Event";
import { TEvent } from "@/types/events.type";
import { LocateIcon, Timer } from "lucide-react";
import "../../../../styles/event.css"

const UpcomingEvents = () => {
    const { data } = useGetAllEventsQuery(undefined)
    return (
        <section>
            <SectionHead title="Upcoming Events" description="Discover and engage with our upcoming events, ranging from health fairs to volunteer training sessions. Get involved, learn, and contribute to our mission of humanitarian aid." />


            <div className="mt-20 grid grid-cols-12 items-center justify-items-center gap-3">
                <div className="col-span-12 lg:col-span-7">
                    <div className="flex items-center justify-center gap-6 w-full flex-col md:flex-row">
                        {
                            data?.slice(0, 2)?.map((items: TEvent) => <Event item={items} />)
                        }
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5 space-y-4 w-full h-full">
                    {
                        data?.slice(2, 5)?.map((item: TEvent) => <div className="border w-full h-[100px] rounded flex items-center justify-between pl-3 gap-3">
                            <div className="flex flex-col items-center bg-secondary py-4 px-2 text-sm font-bold text-primary rounded">
                                <p>{item?.date?.split(" ")[0]}</p>
                                <p>{item?.date?.split(" ")[1]}</p>
                            </div>


                            <div className="flex-1">
                                <div className="">
                                    <p className="text-sm font-medium leading-none flex items-center gap-1">
                                        <LocateIcon /> <span>{item?.location}</span>
                                    </p>
                                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                                        <Timer /> <span>{item?.time}</span>
                                    </p>
                                </div>
                                <h1 className="brandFont text-lg">{item?.title}</h1>
                            </div>

                            <div className="h-full flex items-center">
                                <button className="text-rotate h-full bg-primary rounded-r rounded-b px-2 text-white font-medium">
                                    Join
                                </button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;