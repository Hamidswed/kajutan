export default function useGetTokenFromLS() {
  const { value, id } = JSON.parse(localStorage.getItem("token")) || "";
  return { value, id };
}
