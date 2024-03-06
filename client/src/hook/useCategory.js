import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/categoryServices";

export default function useCategory() {
  return useQuery({
    queryKey: ["get-category"],
    queryFn: getCategories,
  });
}
