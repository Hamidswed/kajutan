import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editFood } from "../services/menuServices";

export default function useEditFood() {
  const queryClient = useQueryClient();
  const { isPending, mutate: updateFood } = useMutation({
    mutationFn: editFood,
    onSuccess: (data) => {
      toast.success(`${data.title} is edited successfully!`);
      queryClient.invalidateQueries({
        queryKey: ["get-menu"],
      });
    },

    onError: (err) => toast.error(err.message),
  });
  return { isPending, updateFood };
}
