import { useFetch } from "../../hook/useFetch";
import { MenuHeader } from "./MenuHeader";

export function MenuList() {
  const { isLoading, data } = useFetch();
  console.log(data, "list");

  if (isLoading) return <p className="text-white">Loading...</p>;
  return (
    <div className="px-4 mt-5 flex flex-col gap-y-4">
      {data.map((item) => {
        return <MenuHeader key={item.id} item={item} />;
      })}
      <div className="h-20"></div>
    </div>
  );
}
