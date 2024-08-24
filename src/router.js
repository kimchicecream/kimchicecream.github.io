import { createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout.js';
import Homepage from './components/Homepage';
import Riddym from "./components/Riddym/index.js";
import Babbl from './components/Babbl/index.js';
import Fortbnb from './components/Fortbnb/index.js';

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
            },
            {
                path: '/babbl',
                element: <Babbl />
            },
            {
                path: '/fortbnb',
                element: <Fortbnb />
            }
        ]
    }
])

export default router;
