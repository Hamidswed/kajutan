import { useMutation, useQueryClient } from "@tanstack/react-query";
import { confirmedComment } from "../services/commentServices";
import toast from "react-hot-toast";

export default function useConfirmedComment() {
  const queryClient = useQueryClient();
  const { isPending, mutate: isConfirmedComment } = useMutation({
    mutationFn: confirmedComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-comments"],
      });
    },

    onError: (err) => toast.error(err.message),
  });
  return { isPending, isConfirmedComment };
}
