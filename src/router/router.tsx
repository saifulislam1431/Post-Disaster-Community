import Main from "@/Layouts/Main/Main";
import About from "@/pages/About/About";
import AllSupplies from "@/pages/AllSupplies/AllSupplies";
import Contact from "@/pages/Contact/Contact";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import SupplyDetail from "@/pages/SupplyDetail/SupplyDetail";
import { Navigate, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AllSuppliesPost from "@/pages/UserDashboard/AllSuppliesPost/AllSuppliesPost";
import CreateSupply from "@/pages/UserDashboard/CreateSupply/CreateSupply";
import DashHome from "@/pages/UserDashboard/Home/DashHome";
import Volunteers from "@/pages/Volunteers/Volunteers";
import Leaderboard from "@/pages/Leaderboard/Leaderboard";
import CreateTestimonial from "@/pages/UserDashboard/CreateTestimonial/CreateTestimonial";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/supplies",
                element: <AllSupplies />
            },
            {
                path: "/supplies/:id",
                element: <SupplyDetail />
            },
            {
                path: "/about-us",
                element: <About />
            },
            {
                path: "/community",
                element: <Contact />
            },
            {
                path: "/volunteer",
                element: <Volunteers />
            },
            {
                path: "/leaderboard",
                element: <Leaderboard />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard/home"></Navigate>
            },
            {
                path: "home",
                element: <PrivateRoute><DashHome /></PrivateRoute>
            },
            {
                path: "supplies",
                element: <PrivateRoute><AllSuppliesPost /></PrivateRoute>
            },
            {
                path: "create-supply",
                element: <PrivateRoute><CreateSupply /></PrivateRoute>
            },
            {
                path: "create-testimonial",
                element: <PrivateRoute><CreateTestimonial /></PrivateRoute>
            }
        ]
    }
]);