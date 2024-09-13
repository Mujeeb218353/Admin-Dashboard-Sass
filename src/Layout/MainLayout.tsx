import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="adminContainer">
        <Sidebar />
        <Suspense fallback={<Loader />}>
          <main>
            <Outlet />
          </main>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;