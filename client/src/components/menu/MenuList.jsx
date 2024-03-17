import { useEffect, useState } from "react";
import { Search } from "../search/Search";
import { MenuHeader } from "./MenuHeader";
import { Loading } from "../loading/Loading";
import useMenu from "../../hook/useMenu";
import useCategory from "../../hook/useCategory";
import MenuTable from "./MenuTable";
import FoodCard from "./FoodCard";
import Modal from "../../ui/Modal";

export function MenuList() {
  const { data: foods, isLoading } = useMenu();
  const { data: categories } = useCategory();
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(
      foods?.filter((item) =>
        item.title.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  }, [searchItem, foods]);

  if (isLoading) return <Loading />;
  return (
    <div className="px-4 mt-5 flex flex-col gap-y-4 items-center pb-24">
      {/* search */}
      <Search searchItem={searchItem} setSearchItem={setSearchItem} />
      {/* menu */}
      <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-4 items-center justify-center">
        {filteredData?.length === 0 ? (
          <p className="text-white w-full flex justify-center mb-3">
            Inget hittat!
          </p>
        ) : (
          searchItem !== "" && (
            <div className="w-full min-[400px]:w-full md:max-w-screen-md">
              <MenuTable filteredData={filteredData} />
            </div>
          )
        )}
        {searchItem === "" &&
          categories?.map((category) => {
            return (
              <MenuHeader
                key={category._id}
                category={category}
                foods={foods}
              />
            );
          })}
      </div>
      {/* modal */}
      {/* <Modal open={isModalOpen} onClose={()=>setIsModalOpen(false)}>
        <FoodCard/>
      </Modal> */}
    </div>
  );
}
