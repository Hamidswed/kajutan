import { useEffect, useState } from "react";
import useCategory from "../../../hook/useCategory";
import CategoryTable from "./CategoryTable";
import AddCategory from "./AddCategory";
import Modal from "../../../ui/Modal";
import { Loading } from "../../loading/Loading";
import Search from "../../search/Search";

export default function CategoryManagment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: categories, isLoading } = useCategory();
  const [searchItem, setSearchItem] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    setSearchedData(
      categories?.filter((item) =>
        item.main_title.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  }, [searchItem, categories]);

  if (isLoading) return <Loading />;
  return (
    <div className="w-full min-[400px]:w-full md:max-w-screen-md flex flex-col items-center">
      <div className="md:flex-row md:justify-center md:items-center md:gap-x-4 w-full flex flex-col items-center mb-3">
        <button
          className="flex gap-x-2 bg-k-brown px-4 py-2 rounded-md w-full justify-center items-center max-w-[300px]"
          onClick={() => setIsModalOpen(true)}
        >
          Add category
        </button>
        <Search searchItem={searchItem} setSearchItem={setSearchItem} />
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add category"
      >
        <AddCategory onClose={() => setIsModalOpen(false)} />
      </Modal>
      <CategoryTable
        categories={searchedData?.length !== 0 ? searchedData : categories}
      />
    </div>
  );
}
