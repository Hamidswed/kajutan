import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFood } from "../services/menuServices";
import toast from "react-hot-toast";

export default function useAddFood() {
  const queryClient = useQueryClient();
  const { isPending, mutate: createFood } = useMutation({
    mutationFn: addFood,
    onSuccess: (data) => {
      toast.success(`${data.title} is added successfully!`);
      queryClient.invalidateQueries({
        queryKey: ["get-menu"],
      });
    },

    onError: (err) => toast.error(err.message),
  });
  return { isPending, createFood };
}
