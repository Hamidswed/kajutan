import { useEffect, useState } from "react";
import { useFetch } from "../../hook/useFetch";
import { Search } from "../search/Search";
import { MenuHeader } from "./MenuHeader";

export function MenuList() {
  const { isLoading, data } = useFetch();
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // setFilteredData(
    //   data.filter((item) =>
    //     item.main_title.toLowerCase().includes(searchItem.toLowerCase())
    //   )
    // );
    setFilteredData(
      data.filter((item) =>
        item.menu.some(
          (menu) =>
            menu.title.toLowerCase().includes(searchItem.toLowerCase()) ||
            menu.category.toLowerCase().includes(searchItem.toLowerCase())
        )
      )
    );
  }, [searchItem, data]);

  if (isLoading) return <p className="text-white">Loading...</p>;
  return (
    <div className="px-4 mt-5 flex flex-col gap-y-4 items-center">
      <Search
        data={data}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-4">
        {filteredData.length === 0 && (
          <p className="text-white w-full">Inget hittat!</p>
        )}
        {filteredData.map((item) => {
          return <MenuHeader key={item.id} item={item} />;
        })}
      </div>
      <div className="h-20"></div>
    </div>
  );
}
