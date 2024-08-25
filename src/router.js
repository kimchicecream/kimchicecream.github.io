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
                path: '/projects/riddym',
                element: <Riddym />
            },
            {
                path: '/projects/babbl',
                element: <Babbl />
            },
            {
                path: '/projects/fortbnb',
                element: <Fortbnb />
            }
        ]
    }
])

export default router;
