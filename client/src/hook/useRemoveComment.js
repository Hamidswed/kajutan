import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeComment } from "../services/commentServices";

export default function useRemoveComment() {
  const queryClient = useQueryClient();
  const { mutate: deleteComment, isPending: isDeleting } = useMutation({
    mutationFn: removeComment,
    onSuccess: () => {
      toast.success(`The comment is removed successfully!`);
      queryClient.invalidateQueries({
        queryKey: ["get-comments"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { deleteComment, isDeleting };
}
