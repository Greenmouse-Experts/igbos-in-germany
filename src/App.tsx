import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import History from "./pages/History";
import Aims from "./pages/Aims";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Excos from "./pages/Excos";
import Partners from "./pages/Partners";
import Programs from "./pages/Programs";
import Event from "./pages/Event";

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
      },
      {
        path:"/excos",
        element:<Excos/>
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path:"/Programs",
        element:<Programs/>
      },
      {
        path:"/events",
        element:<Event/>
      }
    
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;