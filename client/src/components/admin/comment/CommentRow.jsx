import { useState } from "react";
import Table from "../../table/Table";
import useRemoveCategory from "../../../hook/useRemoveCategory";
import { TrashIcon } from "@heroicons/react/24/outline";
import Modal from "../../../ui/Modal";

export default function CommentRow({ comment, index }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { deleteCategory } = useRemoveCategory();

  return (
    <Table.Row className="cursor-pointer">
      <td>{index + 1}</td>
      <td>{comment.name}</td>
      <td>{comment.email}</td>
      <td>{comment.message}</td>
      <td className="min-[480px]:space-x-1 sm:space-x-2 text-center">
        <button onClick={() => setIsDeleteOpen(true)}>
          <TrashIcon className="w-4 sm:w-4 text-red-600" />
        </button>
        {/* <Modal
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
        </Modal> */}
      </td>
    </Table.Row>
  );
}
