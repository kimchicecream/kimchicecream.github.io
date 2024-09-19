import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

function Layout() {
    const

    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default Layout;
