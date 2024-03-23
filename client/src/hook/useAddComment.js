import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createComment } from "../services/commentServices";

export default function useAddComment() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: addComment } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      toast.success(`Thanks for your comment!`);
      queryClient.invalidateQueries({
        queryKey: ["get-comments"],
      });
    },

    onError: (err) => toast.error(err.message),
  });
  return { isCreating, addComment };
}
