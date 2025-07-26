import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

function Layout() {
    const location = useLocation();

    const isHomepage = location.pathname === '/';

    return (
        <>
            {isHomepage && <Navigation />}
            <Outlet />
        </>
    )
}

export default Layout;
