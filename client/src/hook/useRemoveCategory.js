import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCategory } from "../services/categoryServices";
import toast from "react-hot-toast";

export default function useRemoveCategory() {
  const queryClient = useQueryClient();
  const { mutate: deleteCategory, isPending: isDeleting } = useMutation({
    mutationFn: removeCategory,
    onSuccess: (data) => {
      toast.success(`The category is removed successfully!`);
      queryClient.invalidateQueries({
        queryKey: ["get-categories"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { deleteCategory, isDeleting };
}
