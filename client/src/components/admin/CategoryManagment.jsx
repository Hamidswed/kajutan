import { useState } from "react";
import useCategory from "../../hook/useCategory";
import CategoryTable from "./CategoryTable";
import AddCategory from "./AddCategory";
import Modal from "./../../ui/Modal";

export default function CategoryManagment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: categories } = useCategory();
  return (
    <div className="w-full min-[400px]:w-full md:max-w-screen-md flex flex-col items-center">
      <button
        className="flex gap-x-2 bg-k-brown px-4 py-2 rounded-md w-full justify-center items-center max-w-[300px] mb-3"
        onClick={() => setIsModalOpen(true)}
      >
        Add category
      </button>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add category"
      >
        <AddCategory onClose={() => setIsModalOpen(false)} />
      </Modal>
      <CategoryTable categories={categories} />
    </div>
  );
}
