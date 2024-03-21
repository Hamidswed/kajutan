import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addCategory } from "../services/categoryServices";

export default function useAddCategory() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createCategory } = useMutation({
    mutationFn: addCategory,
    onSuccess: (data) => {
      toast.success(`${data.title} is added successfully!`);
      queryClient.invalidateQueries({
        queryKey: ["get-categories"],
      });
    },

    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createCategory };
}
