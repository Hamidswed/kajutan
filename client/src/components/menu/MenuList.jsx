import Menu1 from "../../assets/menu/1.jpg";
import Menu2 from "../../assets/menu/2.jpg";
import Menu3 from "../../assets/menu/3.jpg";
import Menu4 from "../../assets/menu/4.jpg";
import { useFetch } from "../../hook/useFetch";
import { MenuItem } from "./MenuItem";

export function MenuList() {
  const { isLoading, data } = useFetch();

  if (isLoading) return <p className="text-white">Loading...</p>;
  return (
    <div className="px-4 mt-5 flex flex-col gap-y-2">
      {data.map((item) => {
        return <MenuItem key={item.id} item={item} />;
      })}

      {/* <div className="px-4 flex flex-col items-center gap-y-3 mt-5 md:flex-row md:flex-wrap md:justify-center md:gap-x-4">
        <div className="border border-k-brown md:w-[42%] lg:w-1/5">
          <img src={Menu1} alt="menu1" />
        </div>
        <div className="border border-k-brown md:w-[42%] lg:w-1/5">
          <img src={Menu2} alt="menu2" />
        </div>
        <div className="border border-k-brown md:w-[42%] lg:w-1/5">
          <img src={Menu3} alt="menu3" />
        </div>
        <div className="border border-k-brown md:w-[42%] lg:w-1/5">
          <img src={Menu4} alt="menu4" />
        </div>
      </div> */}
      <div className="h-24"></div>
    </div>
  );
}
