import { useEffect, useState } from "react";
import { useFetch } from "../../hook/useFetch";
import { Search } from "../search/Search";
import { MenuHeader } from "./MenuHeader";
import { Table } from "../table/Table";
import { Modal } from "./Modal";
import { Loading } from "../loading/Loading";
import { BASE_URL } from "../../App";

export function MenuList() {
  const CATEGORY_URL = `${BASE_URL}/categories`;
  const FOOD_URL = `${BASE_URL}/foods`;

  const { data: categories, isLoading: categoryLoading } =
    useFetch(CATEGORY_URL);
  const { data: foods, isLoading } = useFetch(FOOD_URL);

  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [clickedFood, setClickedFood] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setFilteredData(
      foods.filter((item) =>
        item.title.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  }, [searchItem, foods]);

  if (isLoading) return <Loading />;
  return (
    <div className="px-4 mt-5 flex flex-col gap-y-4 items-center">
      {/* search */}
      <Search searchItem={searchItem} setSearchItem={setSearchItem} />
      {/* menu */}
      <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-4 items-center justify-center">
        {filteredData.length === 0 ? (
          <p className="text-white w-full flex justify-center mb-3">
            Inget hittat!
          </p>
        ) : (
          searchItem !== "" && (
            <div className="w-full min-[400px]:w-full md:max-w-screen-md">
              <Table
                filteredData={filteredData}
                searchItem={searchItem}
                setClickedFood={setClickedFood}
                onOpen={() => setOpenModal(true)}
              />
            </div>
          ) //
        )}
        {searchItem === "" &&
          categories.map((category) => {
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
      <Modal
        openModal={openModal}
        clickedFood={clickedFood}
        onClose={() => setOpenModal(false)}
      />
      <div className="h-20"></div>
    </div>
  );
}
