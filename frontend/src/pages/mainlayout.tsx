import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Mainlayout = () => {
  return (
    <div className="2xl:max-w-[1600px] xl:max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div>footer</div>
    </div>
  );
};

export default Mainlayout;
