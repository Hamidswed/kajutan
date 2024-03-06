import { useQuery } from "@tanstack/react-query";
import { getFoods } from "../services/menuServices";

export default function useMenu() {
  return useQuery({
    queryKey: ["get-menu"],
    queryFn: getFoods,
  });
}
