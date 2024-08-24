import { createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout.js';
import Homepage from './components/Homepage';
import Riddym from "./components/Riddym/index.js";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/riddym',
                element: <Riddym />
            }
        ]
    }
])

export default router;
