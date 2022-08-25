import Sidebar from "../system/Sidebar";
import { Outlet } from "react-router-dom";

function LayoutAdmin() {
  return (
    <>
      <div className="container flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default LayoutAdmin;
