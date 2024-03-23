import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


export default function useAddComment() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createComment } = useMutation({
    mutationFn: createComment,
    onSuccess: (data) => {
      toast.success(`Your comment sent successfully!`);
      queryClient.invalidateQueries({
        queryKey: ["get-comments"],
      });
    },

    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createComment };
}