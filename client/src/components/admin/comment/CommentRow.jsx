import { useState } from "react";
import Table from "../../table/Table";
import { TrashIcon } from "@heroicons/react/24/outline";
import Modal from "../../../ui/Modal";
import useRemoveComment from "../../../hook/useRemoveComment";
import ConfirmDelete from "../../../ui/ConfirmDelete";

export default function CommentRow({ comment, index }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { deleteComment, isDeleting } = useRemoveComment();

  return (
    <Table.Row className="cursor-pointer">
      <td>
        {index + 1}.{comment.name}
      </td>
      <td>{comment.email}</td>
      <td>{comment.message}</td>
      <td className="min-[480px]:space-x-1 sm:space-x-2 text-center">
        <button onClick={() => setIsDeleteOpen(true)}>
          <TrashIcon className="w-4 sm:w-4 text-red-600" />
        </button>
        <Modal
          open={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          title={`Delete ${comment.name}`}
        >
          <ConfirmDelete
            resourceName={comment.name}
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={() =>
              deleteComment(comment._id, {
                onSuccess: () => setIsDeleteOpen(false),
              })
            }
            isDeleting={isDeleting}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}
