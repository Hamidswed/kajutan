import { useNavigate, useParams } from "react-router-dom";
import useUserProfile from "../../hook/useUserProfile";
import { Loading } from "../loading/Loading";
import toast from "react-hot-toast";

export default function AdminPanel() {
  const { id } = JSON.parse(localStorage.getItem("token")) || {};
  const { data: user } = useUserProfile(id);
  const navigate = useNavigate();

  const logutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Log out successfully!")
    navigate("/");
  };

  return (
    <div className="text-white mt-36 w-full flex flex-col gap-y-2 items-center">
      {!user ? (
        <Loading />
      ) : (
        <div className="flex justify-center gap-x-2">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={user.image} alt={user.firstName} className="w-full" />
          </div>
          <div>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <h2 className="text-sm text-k-lightBrown">{user.email}</h2>
            <p className="text-sm bg-k-brown w-16 text-center rounded-md mt-2">
              {user.role}
            </p>
            <button
              className="border border-k-brown px-4 py-2 rounded-md mt-8"
              onClick={logutHandler}
            >
              Logga ut
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
