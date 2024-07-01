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
import Privacy from "./pages/PrivacyPolicy";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

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
        path: "/excos",
        element: <Excos />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/Programs",
        element: <Programs />,
      },
      {
        path: "/events",
        element: <Event />,
      },
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px", top: 100 }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 3000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#374151",
              zIndex: 9999999999,
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
