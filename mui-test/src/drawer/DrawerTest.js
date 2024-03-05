import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router";

function DrawerTest () {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    )
}

export default DrawerTest;