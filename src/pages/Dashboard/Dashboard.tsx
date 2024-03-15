import DashNav from "@/components/DashNav/DashNav";
import cn from "@/utils/cn";
import { ClipboardPenLine, ClipboardPlus, LayoutDashboard, ListIcon } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <section>
            <DashNav />

            <section className="max-w-7xl mx-auto grid grid-cols-12 h-full gap-2">
                <div className="col-span-2 lg:col-span-3 bg-gray-200 h-full min-h-[100vh] py-10 pl-2 lg:pl-5 flex flex-col gap-7">

                    <NavLink to="/dashboard/home" className={({ isActive }) => cn(
                        "flex items-center gap-2 border border-white px-2 lg:px-3 py-2 rounded-l-md text-sm font-semibold hover:bg-white hover:text-secondary transition-all duration-500",
                        {
                            "bg-white text-secondary": isActive
                        }
                    )}>

                        <LayoutDashboard className="shrink-0 w-7 h-7" />
                        <span className="truncate hidden md:flex">Dashboard</span>
                    </NavLink>
                    <NavLink to="/dashboard/supplies" className={({ isActive }) => cn(
                        "flex items-center gap-2 border border-white border-t border-l border-b border-r-0 px-2 lg:px-3 py-2 rounded-l-md text-sm font-semibold hover:bg-white hover:text-secondary transition-all duration-500",
                        {
                            "bg-white text-secondary": isActive
                        }
                    )}>

                        <ListIcon className="shrink-0 w-7 h-7" />
                        <span className="truncate hidden md:flex">All Supply Post</span>
                    </NavLink>
                    <NavLink to="/dashboard/create-supply" className={({ isActive }) => cn(
                        "flex items-center gap-2 border border-white px-2 lg:px-3 py-2 rounded-l-md text-sm font-semibold hover:bg-white hover:text-secondary transition-all duration-500",
                        {
                            "bg-white text-secondary": isActive
                        }
                    )}>

                        <ClipboardPlus className="shrink-0 w-7 h-7" />
                        <span className="truncate hidden md:flex">Create Supply</span>
                    </NavLink>

                    <NavLink to="/dashboard/create-testimonial" className={({ isActive }) => cn(
                        "flex items-center gap-2 border border-white px-2 lg:px-3 py-2 rounded-l-md text-sm font-semibold hover:bg-white hover:text-secondary transition-all duration-500",
                        {
                            "bg-white text-secondary": isActive
                        }
                    )}>

                        <ClipboardPenLine className="shrink-0 w-7 h-7" />
                        <span className="truncate hidden md:flex">Create Testimonial</span>
                    </NavLink>
                </div>

                <div className="col-span-10 lg:col-span-9">
                    <Outlet />
                </div>
            </section>
        </section>

    );
};

export default Dashboard;