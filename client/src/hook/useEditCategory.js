import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editCategory } from "../services/categoryServices";

export default function useEditCategory() {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutate: updateCategory } = useMutation({
    mutationFn: editCategory,
    onSuccess: (data) => {
      toast.success(`${data.main_title} is edited successfully!`);
      queryClient.invalidateQueries({
        queryKey: ["get-categories"],
      });
    },

    onError: (err) => toast.error(err.message),
  });
  return { isEditing, updateCategory };
}
