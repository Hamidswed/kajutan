import { useQuery } from "@tanstack/react-query";
import { getAllComments } from "../services/commentServices";

export default function useComment() {
  return useQuery({
    queryKey: ["get-comments"],
    queryFn: getAllComments,
  });
}
