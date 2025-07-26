import { createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout.js';
import Homepage from './pages/Homepage/index.js';

const router = createBrowserRouter([
    {
      // Root route
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />
        }
      ]
    }
]);

export default router;
