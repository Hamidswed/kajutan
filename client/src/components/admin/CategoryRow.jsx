import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Table from "../table/Table";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import AddCategory from "./AddCategory";
import useRemoveCategory from "./../../hook/useRemoveCategory";

export default function CategoryRow({ category }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { deleteCategory } = useRemoveCategory();

  return (
    <Table.Row className="cursor-pointer">
      <td className="w-1/4 p-1 min-[400px]:p-2 md:p-3 min-[450px]:w-[25%] min-[600px]:w-[20%] md:w-[15%]">
        <img src={category.main_img} alt={category.main_title} />
      </td>
      <td>{category.main_title}</td>
      <td>{category.included}</td>
      <td className="min-[480px]:space-x-1 sm:space-x-2 text-center">
        <button onClick={() => setIsEditOpen(true)}>
          <PencilIcon className="w-3 sm:w-4 md:w-5" />
        </button>
        <Modal
          open={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          title="Edit"
        >
          <AddCategory
            categoryToEdit={category}
            onClose={() => setIsEditOpen(false)}
          />
        </Modal>
        <button onClick={() => setIsDeleteOpen(true)}>
          <TrashIcon className="w-3 sm:w-4 md:w-5 text-red-600" />
        </button>
        <Modal
          open={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          title={`Delete ${category.main_title}`}
        >
          <ConfirmDelete
            resourceName={category.main_title}
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={() =>
              deleteCategory(category._id, {
                onSuccess: (data) => setIsDeleteOpen(false),
              })
            }
          />
        </Modal>
      </td>
    </Table.Row>
  );
}
