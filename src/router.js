import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/index.js';
import Resume from './pages/Resume/index.js';
import Projects from './pages/Projects/index.js';
import Blog from './pages/Blog/index.js';

const router = createBrowserRouter([
    {
      // Root route
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ]
    }
]);

export default router;
