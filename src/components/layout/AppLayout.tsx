
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="xl:pt-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
