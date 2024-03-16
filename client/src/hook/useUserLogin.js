import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { userLogin } from "../services/userServices";

export default function useUserLogin() {
  const { isPending: isLogin, mutateAsync: login } = useMutation({
    mutationFn: userLogin,
    onSuccess: () => {
      toast.success(`Admin is log in successfully!`);
    },
  });
  return { isLogin, login };
}
