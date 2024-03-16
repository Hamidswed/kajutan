import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { userLogin } from "../../services/userServices";
import toast from "react-hot-toast";
import { Loading } from "../loading/Loading";
import { useNavigate } from "react-router-dom";
import clearTokenFromLocalStorage from "../../util/clearToken";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) navigate("/");
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const validationSchema = {
    required: "Required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  };

  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: userLogin,
  });

  const mySubmit = async (dataForm) => {
    try {
      const data = await mutateAsync(dataForm);

      if (data.message) {
        toast.error(data.message);
        reset();
        return;
      }
      const { userData, token } = data;
      const expiry = new Date().getTime() + 24 * 60 * 60 * 1000; // 1 day in milliseconds
      localStorage.setItem(
        "token",
        JSON.stringify({ value: token, expiry: expiry, id: userData._id })
      );
      clearTokenFromLocalStorage();
      if (userData) {
        toast.success(`Welcome to Admin Panel`);
        navigate(`/admin`);
        return;
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="text-white flex flex-col items-center gap-y-2 mt-40 w-full min-[400px]:w-[80%] bg-k-brown p-4 rounded-lg sm:max-w-sm sm:p-10">
      <form
        action=""
        className="flex flex-col items-center gap-y-4 w-full "
        onSubmit={handleSubmit(mySubmit)}
      >
        <h1>Logga in</h1>
        <input
          className="w-full"
          type="text"
          {...register("email", validationSchema)}
          placeholder="example@test.com"
        />
        {errors && errors.email && (
          <span className="block text-sm text-white">
            {errors.email.message}
          </span>
        )}
        <input
          className="w-full"
          type="password"
          {...register("password", { required: "Required" })}
          placeholder="password"
        />
        {errors && errors.password && (
          <span className="block text-sm text-white">
            {errors.password.message}
          </span>
        )}
        <button
          type="submit"
          className="bg-k-lightBrown w-full p-2 rounded-md flex justify-center"
        >
          {isPending ? <Loading height="25" /> : "Logga in"}
        </button>
      </form>
    </div>
  );
}
