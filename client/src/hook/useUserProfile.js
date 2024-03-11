import { useQuery } from "@tanstack/react-query";
import { userProfile } from "../services/userServices";

export default function useUserProfile(id) {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: () => userProfile(id),
    retry: false,
  });
}
