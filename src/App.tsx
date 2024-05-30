import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import History from "./pages/History";
import Aims from "./pages/Aims";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/objective",
        element: <Aims />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;