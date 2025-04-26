import { Outlet } from "react-router";
import { NavBar } from "../../molecules/NavBar"

const DashBoard = () => {
    return (
        <div className="dark:bg-[#0A2647] min-h-screen">
            <NavBar />
            <Outlet />
        </div>
    )
}

export {DashBoard};