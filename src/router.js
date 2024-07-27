import { createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout.js';
import Homepage from './components/Homepage';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Homepage />
            }
        ]
    }
])

export default router;
