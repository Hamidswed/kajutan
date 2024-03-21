import { useState } from "react";
import useCategory from "../../hook/useCategory";
import useMenu from "../../hook/useMenu";
import Modal from "../../ui/Modal";
import { Loading } from "../loading/Loading";
import AddFood from "./AddFood";
import MenuTable from "./MenuTable";
import FilterInput from "../../ui/FilterInput";

export default function MenuManagment() {
  const [option, setOption] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: foods, isLoading } = useMenu();
  const { data: categories } = useCategory();

  const filteredData = foods?.filter((item) => item.category === option);

  if (isLoading) return <Loading />;

  return (
    <div className="w-full min-[400px]:w-full md:max-w-screen-md">
      <div className="w-full flex flex-col items-center gap-y-5 md:flex-row md:justify-between md:items-center mb-3">
        <FilterInput
          optionHandler={(e) => setOption(e.target.value)}
          categories={categories}
        />
        <button
          className="flex gap-x-2 bg-k-brown px-4 py-2 rounded-md w-full justify-center items-center max-w-[300px]"
          onClick={() => setIsModalOpen(true)}
        >
          Add food
        </button>
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add food"
      >
        <AddFood onClose={() => setIsModalOpen(false)} />
      </Modal>
      <MenuTable filteredData={option === "All" ? foods : filteredData} />
    </div>
  );
}
