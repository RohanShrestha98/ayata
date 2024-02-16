import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoadingFirst from "../pages/home/LoadingFirst";
import Footer from "../pages/Footer";

export default function BaseLayout() {
  return (
    <div>
      {/* <LoadingFirst /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
