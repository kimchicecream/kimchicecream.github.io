import { createBrowserRouter } from "react-router-dom";
import Homepage from './pages/Homepage/index.js';

const router = createBrowserRouter([
    {
      // Root route
      path: "/",
      children: [
        {
          path: "/",
          element: <Homepage />
        }
      ]
    }
]);

export default router;
