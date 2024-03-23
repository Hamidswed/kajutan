import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import Profile from "./Profile";

export default function AdminPanel() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
  }, []);

  const logutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Log out successfully!");
    navigate("/");
  };

  return (
    <div className="text-white mt-36 w-full flex flex-col gap-y-8 items-center">
      <Profile logutHandler={logutHandler} />
      <div className="flex flex-col items-center gap-y-4 w-full md:flex-row md:justify-between md:gap-x-4 md:max-w-3xl">
        <div className="w-full max-w-[300px]">
          <Link
            to="foods"
            className="flex gap-x-2 border border-k-brown px-4 py-2 rounded-md justify-center items-center"
          >
            <ListBulletIcon className="w-5" />
            <span>Menu Management</span>
          </Link>
        </div>
        <div className="w-full max-w-[300px]">
          <Link
            to="categories"
            className="flex gap-x-2 border border-k-brown px-4 py-2 rounded-md justify-center items-center"
          >
            <ListBulletIcon className="w-5" />
            <span>Category Management</span>
          </Link>
        </div>
        <div className="w-full max-w-[300px]">
          <Link
            to="comments"
            className="flex gap-x-2 border border-k-brown px-4 py-2 rounded-md justify-center items-center"
          >
            <ListBulletIcon className="w-5" />
            <span>Comment Management</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
