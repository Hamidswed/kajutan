import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFood } from "../services/menuServices";
import toast from "react-hot-toast";

export default function useRemoveFood() {
  const queryClient = useQueryClient();
  const { mutate: deleteFood, isPending: isDeleting } = useMutation({
    mutationFn: removeFood,
    onSuccess: (data) => {
      toast.success(`The food is removed successfully!`);
      queryClient.invalidateQueries({
        queryKey: ["get-menu"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { deleteFood, isDeleting };
}
