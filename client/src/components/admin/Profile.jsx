import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import useUserProfile from "../../hook/useUserProfile";
import { Loading } from "../loading/Loading";

export default function Profile({ logutHandler }) {
  const { id } = JSON.parse(localStorage.getItem("token")) || {};
  const { data: user, isLoading } = useUserProfile(id);

  if (isLoading) return <Loading />;

  return (
    <div className="flex justify-center gap-x-2">
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img src={user.image} alt={user.firstName} className="w-full" />
      </div>
      <div>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <h2 className="text-sm text-k-lightBrown">{user.email}</h2>
        <div className="mt-2 flex text-sm justify-center items-center gap-x-2">
          <p className=" bg-k-brown w-16 text-center rounded-md p-1">
            {user.role}
          </p>
          <button
            className="rounded-md flex justify-center items-center gap-x-1 border border-k-brown p-1 text-k-brown"
            onClick={logutHandler}
          >
            <ArrowLeftStartOnRectangleIcon className="w-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
