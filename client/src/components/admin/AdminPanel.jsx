import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import MenuManagment from "./MenuManagment";
import Profile from "./Profile";

export default function AdminPanel() {
  const [option, setOption] = useState("All");
  const isShowMenu = JSON.parse(localStorage.getItem("showMenu"));
  const [showMenu, setShowMenu] = useState(isShowMenu ? isShowMenu : false);

  useEffect(() => {
    localStorage.setItem("showMenu", JSON.stringify(showMenu));
  }, []);
  const navigate = useNavigate();

  const logutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Log out successfully!");
    navigate("/");
  };

  const managementHandler = () => {
    setShowMenu(!showMenu);
    localStorage.setItem("showMenu", JSON.stringify(!showMenu));
  };

  return (
    <div className="text-white mt-36 w-full flex flex-col gap-y-8 items-center">
      <Profile logutHandler={logutHandler} />
      <div className="flex flex-col items-center gap-y-4 w-full max-w-[300px]">
        <Link
          className="flex gap-x-2 border border-k-brown px-4 py-2 rounded-md w-full justify-center items-center"
          onClick={managementHandler}
        >
          <ListBulletIcon className="w-5" />
          <span>Menu Management</span>
        </Link>
      </div>
      {showMenu && (
        <MenuManagment
          optionHandler={(e) => setOption(e.target.value)}
          option={option}
        />
      )}
    </div>
  );
}
