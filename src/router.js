import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/index.js';

const router = createBrowserRouter([
    {
      // Root route
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    }
]);

export default router;
