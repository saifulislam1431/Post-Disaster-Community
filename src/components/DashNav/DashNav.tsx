import { Home, LogOut, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo/aid.png"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import Swal from "sweetalert2";

const DashNav = () => {
    const dispatch = useAppDispatch();
    // console.log('====================================');
    // console.log(token);
    // console.log('====================================');
    const handleOut = () => {
        dispatch(logout());
        Swal.fire({
            title: 'Success!',
            text: 'Logout successful!',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }
    return (
        <div className="overflow-hidden bg-background sticky top-0">
            <div className="flex-col flex">
                <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                        <div className="logo-container flex items-center gap-2 lg:w-full w-3/4">
                            <motion.div
                                initial={{
                                    y: -300
                                }}
                                animate={{
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        type: "spring",
                                        bounce: 0.2
                                    }
                                }}
                            >
                                <img src={logo} alt="Logo" className="w-14" />
                            </motion.div>
                            <div>
                                <h1 className="brandFont text-2xl text-gradient">HealthBridge</h1>
                            </div>
                        </div>

                        <div className="ml-auto flex items-center space-x-4">
                            <div>
                                <input type="search" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:w-[100px] lg:w-[300px]" placeholder="Search..." />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>Menus</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <Link to="/" >
                                        <DropdownMenuItem>

                                            <Home className="mr-2 h-4 w-4" />
                                            <span>Home</span>

                                        </DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuItem onClick={handleOut}>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashNav;